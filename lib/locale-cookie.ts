import type { Locale } from "./locales";

export const LOCALE_COOKIE = "sp_locale";

/**
 * Persist the visitor's language choice so `proxy.ts` honours it the next time
 * they hit a URL without a locale prefix.
 *
 * Lives outside the component tree on purpose: writing to `document` from
 * inside a component body is flagged by react-hooks/immutability.
 */
export function rememberLocale(locale: Locale): void {
  if (typeof document === "undefined") return;
  const year = 60 * 60 * 24 * 365;
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=${year}; samesite=lax`;
}
