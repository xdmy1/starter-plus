import type { MetadataRoute } from "next";

import {
  SECTIONS,
  articles,
  infoPages,
  partCategories,
  services,
} from "@/content/taxonomy";
import { locales } from "@/lib/locales";
import { site } from "@/lib/site";

/** Every route in every locale, with an hreflang alternates block per entry. */
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    SECTIONS.parts,
    ...partCategories.map((c) => `${SECTIONS.parts}/${c.slug}`),
    SECTIONS.services,
    ...services.map((s) => `${SECTIONS.services}/${s.slug}`),
    SECTIONS.info,
    ...infoPages.map((p) => `${SECTIONS.info}/${p.slug}`),
    SECTIONS.articles,
    ...articles.map((a) => `${SECTIONS.articles}/${a.slug}`),
    SECTIONS.contact,
  ];

  const url = (locale: string, path: string) =>
    `${site.url}/${locale}${path ? `/${path}` : ""}`;

  return locales.flatMap((locale) =>
    paths.map((path) => ({
      url: url(locale, path),
      changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "" ? 1 : path.includes("/") ? 0.7 : 0.9,
      alternates: {
        languages: Object.fromEntries(
          locales.map((alt) => [alt, url(alt, path)]),
        ),
      },
    })),
  );
}
