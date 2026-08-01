"use client";

import { useSyncExternalStore } from "react";

import { site } from "@/lib/site";
import type { Common } from "@/content/types";

interface Props {
  labels: Pick<Common["labels"], "openNow" | "closedNow" | "closesAt" | "opensAt">;
}

interface Status {
  open: boolean;
  /** Closing time while open, next opening time while closed. */
  at: string;
}

/** Current weekday + minutes-since-midnight in the workshop's timezone. */
function shopNow() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: site.timezone,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(new Date());

  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const day = days.indexOf(get("weekday"));
  const minutes = Number(get("hour")) * 60 + Number(get("minute"));
  return { day: day < 0 ? new Date().getDay() : day, minutes };
}

function toMinutes(time: string) {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

function computeStatus(): Status {
  const { day, minutes } = shopNow();
  const today = site.hours.find((h) => h.day === day);

  if (today?.open && today.close) {
    const from = toMinutes(today.open);
    const to = toMinutes(today.close);
    if (minutes >= from && minutes < to) return { open: true, at: today.close };
    if (minutes < from) return { open: false, at: today.open };
  }

  // Closed for today — report the next day that opens.
  for (let step = 1; step <= 7; step += 1) {
    const next = site.hours.find((h) => h.day === (day + step) % 7);
    if (next?.open) return { open: false, at: next.open };
  }
  return { open: false, at: "09:00" };
}

/*
 * An external store rather than state-in-an-effect: `getServerSnapshot` returns
 * null so the prerendered HTML has no clock in it, and React swaps in the real
 * status right after hydration. No mismatch, no cascading render.
 */
let cached: Status | null = null;
let cachedKey = "";

function getSnapshot(): Status | null {
  const next = computeStatus();
  const key = `${next.open}|${next.at}`;
  if (key !== cachedKey) {
    cachedKey = key;
    cached = next;
  }
  return cached;
}

function getServerSnapshot(): Status | null {
  return null;
}

function subscribe(onChange: () => void) {
  const id = setInterval(onChange, 60_000);
  return () => clearInterval(id);
}

export function OpenBadge({ labels }: Props) {
  const status = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (!status) return null;

  return (
    <span className={`pill ${status.open ? "pill-accent" : ""}`}>
      <span
        className={`size-1.5 rounded-full ${status.open ? "bg-[#1f9d55]" : "bg-ink-4"}`}
        aria-hidden="true"
      />
      {status.open ? labels.openNow : labels.closedNow}
      <span className="text-ink-3">
        · {status.open ? labels.closesAt : labels.opensAt} {status.at}
      </span>
    </span>
  );
}
