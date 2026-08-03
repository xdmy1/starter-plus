import { SECTIONS, infoPages, services } from "@/content/taxonomy";
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




  /*
   * Per the client, the header nav is Acasă / Servicii / Informații / Contacte
   * only. The parts catalogue and the articles still exist as pages and stay
   * linked from the footer and from the related-links blocks on each service —
   * they are just not top-level navigation any more.
   */
  return [
    { label: nav.home, href: at("") },
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
    { label: nav.contact, href: at(SECTIONS.contact) },
  ];
}
