"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const STAGGER_MS = 80;
/** Reveal once the element's top has entered the bottom 6% of the viewport. */
const TRIGGER = 0.94;

/**
 * All page-level motion in one client component, mounted once in the layout:
 *  - marks <html> as JS-capable so the reveal CSS can safely start at opacity 0
 *  - reveals [data-reveal] elements on scroll, re-scanned per route
 *  - one delegated pointermove feeding the card cursor-spotlight
 *  - the scroll-progress bar
 *
 * The reveal is a deterministic sweep rather than an IntersectionObserver: IO
 * reports sampled state, so a fast flick or a programmatic scroll can skip
 * elements entirely — and a skipped element would stay invisible.
 */
export function Motion() {
  const bar = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.add("js");
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let pending = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-in)"),
    );

    if (reduced) {
      pending.forEach((el) => el.classList.add("is-in"));
      pending = [];
    } else {
      // Stagger elements that reveal together.
      const counts = new Map<Element, number>();
      for (const el of pending) {
        const parent = el.parentElement;
        if (!parent || el.style.getPropertyValue("--reveal-delay")) continue;
        const index = counts.get(parent) ?? 0;
        counts.set(parent, index + 1);
        if (index > 0) {
          el.style.setProperty("--reveal-delay", `${index * STAGGER_MS}ms`);
        }
      }
    }

    const sweep = () => {
      if (!pending.length) return;
      const limit = window.innerHeight * TRIGGER;
      const still: HTMLElement[] = [];
      for (const el of pending) {
        const rect = el.getBoundingClientRect();
        // In view, or already scrolled past — either way it must be visible.
        if (rect.top < limit || rect.bottom < 0) {
          el.classList.add("is-in");
        } else {
          still.push(el);
        }
      }
      pending = still;
    };

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        sweep();
        const scrollable =
          document.documentElement.scrollHeight - window.innerHeight;
        const pct = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
        bar.current?.style.setProperty("--progress", `${pct.toFixed(2)}%`);
      });
    };

    const onMove = (event: PointerEvent) => {
      const surface = (event.target as Element | null)?.closest<HTMLElement>(
        ".card, .panel",
      );
      if (!surface) return;
      const rect = surface.getBoundingClientRect();
      surface.style.setProperty("--mx", `${event.clientX - rect.left}px`);
      surface.style.setProperty("--my", `${event.clientY - rect.top}px`);
    };

    sweep();
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    if (!reduced) {
      window.addEventListener("pointermove", onMove, { passive: true });
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return <div ref={bar} className="scroll-progress" aria-hidden="true" />;
}
