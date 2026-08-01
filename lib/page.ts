import type { Metadata } from "next";
import { notFound } from "next/navigation";

import type { Doc } from "@/content/types";

import { getDictionary } from "./dictionaries";
import { htmlLang, isLocale, localePath, type Locale } from "./locales";

/** Narrow the route param to a supported locale, 404 otherwise. */
export async function resolveLocale(
  params: Promise<{ locale: string }>,
): Promise<Locale> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return locale;
}

/** Load the locale + its dictionary in one step — every page needs both. */
export async function loadPage(params: Promise<{ locale: string }>) {
  const locale = await resolveLocale(params);
  return { locale, dict: await getDictionary(locale) };
}

/**
 * Metadata for a content page, including the ro/ru hreflang pair.
 * `path` is locale-relative, e.g. "piese/demaroare".
 */
export function docMetadata(locale: Locale, doc: Doc, path: string): Metadata {
  const canonical = localePath(locale, path);

  return {
    title: doc.seo.title,
    description: doc.seo.description,
    alternates: {
      canonical,
      languages: {
        ro: localePath("ro", path),
        ru: localePath("ru", path),
        "x-default": localePath("ro", path),
      },
    },
    openGraph: {
      type: "article",
      title: doc.seo.title,
      description: doc.seo.description,
      url: canonical,
      locale: htmlLang[locale].replace("-", "_"),
    },
  };
}
