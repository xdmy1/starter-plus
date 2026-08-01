/** Pure locale helpers — safe to import from Client Components. */

export const locales = ["ro", "ru"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ro";

/** BCP-47 tags for <html lang>, hreflang and Intl formatting. */
export const htmlLang: Record<Locale, string> = {
  ro: "ro-MD",
  ru: "ru-MD",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Build an in-app path: localePath("ro", "piese/demaroare") -> "/ro/piese/demaroare" */
export function localePath(locale: Locale, path = ""): string {
  const clean = path.replace(/^\/+|\/+$/g, "");
  return clean ? `/${locale}/${clean}` : `/${locale}`;
}

/** Rewrite the locale segment of a pathname, preserving the rest of the route. */
export function swapLocale(pathname: string, next: Locale): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length && isLocale(segments[0])) {
    segments[0] = next;
    return `/${segments.join("/")}`;
  }
  return localePath(next, segments.join("/"));
}

/** Strip the locale prefix: "/ru/piese" -> "piese" */
export function stripLocale(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length && isLocale(segments[0])) segments.shift();
  return segments.join("/");
}
