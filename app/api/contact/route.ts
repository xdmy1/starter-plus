import { NextResponse } from "next/server";

import { type Enquiry, validateEnquiry } from "@/lib/contact";
import { site } from "@/lib/site";

/** Very small in-memory rate limit — enough to stop a single noisy client. */
const hits = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

function rateLimited(key: string, now: number) {
  const entry = hits.get(key);
  if (!entry || now > entry.resetAt) {
    hits.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_PER_WINDOW;
}

export async function POST(request: Request) {
  const now = Date.now();
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";

  if (rateLimited(ip, now)) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  }

  let body: Partial<Enquiry> & { trap?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }

  // Honeypot: real users never fill this.
  if (body.trap) return NextResponse.json({ ok: true });

  const { ok, errors } = validateEnquiry(body);
  if (!ok) return NextResponse.json({ error: "invalid", errors }, { status: 422 });

  const enquiry: Enquiry = {
    name: String(body.name).trim().slice(0, 120),
    phone: String(body.phone).trim().slice(0, 40),
    car: body.car ? String(body.car).trim().slice(0, 120) : undefined,
    topic: body.topic ? String(body.topic).trim().slice(0, 120) : undefined,
    message: String(body.message).trim().slice(0, 4000),
  };

  const lines = [
    `Nume / Имя: ${enquiry.name}`,
    `Telefon / Телефон: ${enquiry.phone}`,
    enquiry.car ? `Auto: ${enquiry.car}` : null,
    enquiry.topic ? `Subiect / Тема: ${enquiry.topic}` : null,
    "",
    enquiry.message,
  ].filter(Boolean) as string[];

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  const resendKey = process.env.RESEND_API_KEY;

  try {
    if (webhook) {
      const response = await fetch(webhook, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...enquiry, receivedAt: new Date().toISOString() }),
      });
      if (!response.ok) throw new Error(`webhook ${response.status}`);
      return NextResponse.json({ ok: true });
    }

    if (resendKey) {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          authorization: `Bearer ${resendKey}`,
          "content-type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM_EMAIL ?? `site@${site.domain}`,
          to: process.env.CONTACT_TO_EMAIL ?? site.email,
          reply_to: undefined,
          subject: `Cerere de pe ${site.domain} — ${enquiry.name}`,
          text: lines.join("\n"),
        }),
      });
      if (!response.ok) throw new Error(`resend ${response.status}`);
      return NextResponse.json({ ok: true });
    }

    // Nothing configured — the client falls back to composing a WhatsApp message.
    console.warn(
      "[contact] No delivery configured. Set RESEND_API_KEY or CONTACT_WEBHOOK_URL.",
    );
    return NextResponse.json({ error: "not_configured" }, { status: 501 });
  } catch (error) {
    console.error("[contact] delivery failed", error);
    return NextResponse.json({ error: "delivery_failed" }, { status: 502 });
  }
}
