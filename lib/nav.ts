import { partGroupLabels } from "@/content/groups";
import { SECTIONS, infoPages, partCategories, services } from "@/content/taxonomy";
import type { Dictionary } from "@/content/types";

import { localePath, type Locale } from "./locales";

export interface NavLink {
  label: string;
  href: string;
  desc?: string;
  icon?: string;
}

export interface NavColumn {
  title?: string;
  links: NavLink[];
}

export interface NavItem {
  label: string;
  href: string;
  columns?: NavColumn[];
  /** Rendered as a promoted card at the end of the mega menu. */
  feature?: { label: string; href: string; text: string };
}

/**
 * The header nav, assembled from the taxonomy + the active dictionary so labels
 * always come from content and hrefs always come from one place.
 */
export function buildNav(locale: Locale, dict: Dictionary): NavItem[] {
  const at = (path: string) => localePath(locale, path);
  const { nav } = dict.common;
  const groups = partGroupLabels[locale];

  const partLabel = (slug: string) =>
    dict.parts.items[slug]?.short ?? dict.parts.items[slug]?.title ?? slug;

  const starterParts = partCategories.filter((c) => c.group === "starter");
  const alternatorParts = partCategories.filter((c) => c.group === "alternator");
  const sharedParts = partCategories.filter((c) => c.group === "shared");

  const toLinks = (list: typeof partCategories): NavLink[] =>
    list.map((c) => ({
      label: partLabel(c.slug),
      href: at(`${SECTIONS.parts}/${c.slug}`),
      icon: c.icon,
    }));

  return [
    { label: nav.home, href: at("") },
    {
      label: nav.parts,
      href: at(SECTIONS.parts),
      columns: [
        { title: groups.starter, links: toLinks(starterParts) },
        { title: groups.alternator, links: toLinks(alternatorParts) },
        { title: groups.shared, links: toLinks(sharedParts) },
      ],
    },
    {
      label: nav.services,
      href: at(SECTIONS.services),
      columns: [
        {
          links: services.map((s) => ({
            label: dict.services.items[s.slug]?.short ?? dict.services.items[s.slug]?.title ?? s.slug,
            href: at(`${SECTIONS.services}/${s.slug}`),
            desc: dict.services.items[s.slug]?.excerpt,
            icon: s.icon,
          })),
        },
      ],
    },
    {
      label: nav.info,
      href: at(SECTIONS.info),
      columns: [
        {
          links: infoPages.map((p) => ({
            label: dict.info.items[p.slug]?.short ?? dict.info.items[p.slug]?.title ?? p.slug,
            href: at(`${SECTIONS.info}/${p.slug}`),
            icon: p.icon,
          })),
        },
      ],
    },
    { label: nav.articles, href: at(SECTIONS.articles) },
    { label: nav.contact, href: at(SECTIONS.contact) },
  ];
}
