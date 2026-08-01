/**
 * Contact delivery configuration.
 *
 * The form works with zero setup: with nothing configured it composes the
 * message into a prefilled WhatsApp chat, which is how most customers in
 * Chișinău already reach the workshop. Set either env var below and it switches
 * to server-side delivery instead.
 *
 *   RESEND_API_KEY       — send the enquiry by email via Resend
 *   CONTACT_WEBHOOK_URL  — POST the enquiry as JSON (Zapier, Make, CRM, …)
 *   CONTACT_TO_EMAIL     — recipient; defaults to the address in lib/site.ts
 */
export function isContactDeliveryConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY || process.env.CONTACT_WEBHOOK_URL);
}

export interface Enquiry {
  name: string;
  phone: string;
  car?: string;
  topic?: string;
  message: string;
}

const PHONE_RE = /^[+()\d\s-]{6,20}$/;

export function validateEnquiry(input: Partial<Enquiry>): {
  ok: boolean;
  errors: Partial<Record<keyof Enquiry, "required" | "invalid">>;
} {
  const errors: Partial<Record<keyof Enquiry, "required" | "invalid">> = {};

  if (!input.name?.trim()) errors.name = "required";
  if (!input.phone?.trim()) errors.phone = "required";
  else if (!PHONE_RE.test(input.phone.trim())) errors.phone = "invalid";
  if (!input.message?.trim()) errors.message = "required";

  return { ok: Object.keys(errors).length === 0, errors };
}
