"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { rememberLocale } from "@/lib/locale-cookie";
import { locales, swapLocale, type Locale } from "@/lib/locales";

interface Props {
  locale: Locale;
  labels: Record<Locale, string>;
  className?: string;
}

/**
 * Two-chip locale switcher. Preserves the current route and writes the
 * `sp_locale` cookie so `proxy.ts` remembers the choice on the next bare URL.
 */
export function LanguageSwitcher({ locale, labels, className = "" }: Props) {
  const pathname = usePathname();

  return (
    <div
      className={`flex items-center gap-0.5 rounded-full border border-line bg-white/[0.03] p-0.5 ${className}`}
    >
      {locales.map((code) => {
        const active = code === locale;
        return (
          <Link
            key={code}
            href={swapLocale(pathname, code)}
            hrefLang={code}
            onClick={() => rememberLocale(code)}
            aria-current={active ? "true" : undefined}
            className={`rounded-full px-2.5 py-1 text-xs font-medium tracking-tight transition-colors duration-300 ${
              active
                ? "bg-accent/10 text-accent"
                : "text-ink-3 hover:bg-white/5 hover:text-ink"
            }`}
          >
            {labels[code]}
          </Link>
        );
      })}
    </div>
  );
}
