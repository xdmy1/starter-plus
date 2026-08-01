/**
 * Locale-independent structure: slugs, grouping, icons, ordering — and the
 * original starterplus.md URL each entry replaces, so `next.config.ts` can
 * 301 every legacy link instead of dropping it.
 */

export const SECTIONS = {
  parts: "piese",
  services: "servicii",
  info: "info",
  articles: "articole",
  contact: "contacte",
} as const;

export interface TaxonomyEntry {
  slug: string;
  /** Path on the old site this replaces. */
  legacy: string;
  icon: string;
}

export interface PartCategory extends TaxonomyEntry {
  group: "starter" | "alternator" | "shared";
  /** Slugs of services that repair/use this part. */
  relatedServices: string[];
}

export const partCategories: PartCategory[] = [
  {
    slug: "demaroare",
    legacy: "/komplektujushhie/startery/",
    group: "starter",
    icon: "starter",
    relatedServices: ["reparatii-demaroare"],
  },
  {
    slug: "bendix",
    legacy: "/komplektujushhie/bendiksy/",
    group: "starter",
    icon: "gear",
    relatedServices: ["reparatii-demaroare"],
  },
  {
    slug: "rotor-demaror",
    legacy: "/komplektujushhie/jakor-startera/",
    group: "starter",
    icon: "rotor",
    relatedServices: ["reparatii-demaroare"],
  },
  {
    slug: "releu-cuplare",
    legacy: "/komplektujushhie/vtjagivajushhee-rele-startera/",
    group: "starter",
    icon: "relay",
    relatedServices: ["reparatii-demaroare"],
  },
  {
    slug: "alternatoare",
    legacy: "/komplektujushhie/generatory/",
    group: "alternator",
    icon: "alternator",
    relatedServices: ["reparatii-alternatoare"],
  },
  {
    slug: "rotor-alternator",
    legacy: "/komplektujushhie/rotor-generatora/",
    group: "alternator",
    icon: "rotor",
    relatedServices: ["reparatii-alternatoare"],
  },
  {
    slug: "fulie-alternator",
    legacy: "/komplektujushhie/shkiv-generatora/",
    group: "alternator",
    icon: "pulley",
    relatedServices: ["reparatii-alternatoare"],
  },
  {
    slug: "releu-regulator",
    legacy: "/komplektujushhie/rele-reguljator-generatora/",
    group: "alternator",
    icon: "regulator",
    relatedServices: ["reparatii-alternatoare", "electrician-auto"],
  },
  {
    slug: "perii-colectoare",
    legacy: "/komplektujushhie/shhetki-startera-i-generatora/",
    group: "shared",
    icon: "brush",
    relatedServices: ["reparatii-demaroare", "reparatii-alternatoare"],
  },
  {
    slug: "alte-piese",
    legacy: "/komplektujushhie/drugie-zapchasti-i-komplektujushhie/",
    group: "shared",
    icon: "parts",
    relatedServices: ["reparatii-demaroare", "reparatii-alternatoare"],
  },
];

export interface Service extends TaxonomyEntry {
  /** Slugs of part categories used by this service. */
  relatedParts: string[];
}

export const services: Service[] = [
  {
    slug: "reparatii-demaroare",
    legacy: "/uslugi-avtoservisa/remont-starterov/",
    icon: "starter",
    relatedParts: ["demaroare", "bendix", "rotor-demaror", "releu-cuplare", "perii-colectoare"],
  },
  {
    slug: "reparatii-alternatoare",
    legacy: "/uslugi-avtoservisa/remont-generatorov/",
    icon: "alternator",
    relatedParts: ["alternatoare", "rotor-alternator", "fulie-alternator", "releu-regulator", "perii-colectoare"],
  },
  {
    slug: "electrician-auto",
    legacy: "/uslugi-avtoservisa/avto-jelektrik-kompjuternaja-diagnostika-avtomobilej/",
    icon: "diagnostics",
    relatedParts: ["releu-regulator", "alte-piese"],
  },
];

export const infoPages: TaxonomyEntry[] = [
  { slug: "garantie-reparatii", legacy: "/bez-rubriki/garantija-na-proizvedennyj-remont/", icon: "shield" },
  { slug: "conditii-garantie", legacy: "/bez-rubriki/uslovija-garantii/", icon: "checklist" },
  { slug: "persoane-juridice", legacy: "/bez-rubriki/juridicheskim-licam-transportnym-organizacijam-i-avtoservisam/", icon: "fleet" },
  { slug: "contract-colaborare", legacy: "/bez-rubriki/kontrakt-o-sotrudnichestve/", icon: "contract" },
  { slug: "rechizite", legacy: "/bez-rubriki/rekvizity/", icon: "document" },
];

/**
 * The six blog posts. On the old site they were split across two prefixes
 * (/stati/ and /bez-rubriki/) — here they all live under /articole/.
 */
export const articles: TaxonomyEntry[] = [
  { slug: "componentele-demarorului", legacy: "/bez-rubriki/ustrojstvo-startera/", icon: "starter" },
  { slug: "componentele-alternatorului", legacy: "/bez-rubriki/ustrojstvo-generatora/", icon: "alternator" },
  { slug: "defectiuni-demaror-cauze-preventie", legacy: "/bez-rubriki/polomka-startera-prichina-i-profilaktika/", icon: "starter" },
  { slug: "defectiuni-principale-demaror", legacy: "/stati/osnovnye-neispravnosti-startera-i-ih-prichiny/", icon: "checklist" },
  { slug: "merita-reparatia", legacy: "/stati/opravdan-li-remont/", icon: "document" },
  { slug: "alternator-defect-cauze-masuri", legacy: "/stati/neispravnyj-generator-prichiny-mery/", icon: "alternator" },
  { slug: "sistem-de-incarcare-alternator", legacy: "/stati/sistema-podzarjadki-generator-ego-ustrojstvo-i-rabota/", icon: "regulator" },
  { slug: "cum-distrugi-alternatorul-si-demarorul", legacy: "/bez-rubriki/kak-bystro-ubit-generator-i-starter/", icon: "warning" },
  { slug: "atelierul-nostru", legacy: "/stati/rabochie-budni/", icon: "wrench" },
];

/**
 * URLs on the old site that have no new page of their own.
 *
 * - /uslugi-avtoservisa/remont/ was an orphan (sitemap-only) duplicate of the
 *   alternator repair page — same H1, same body.
 * - /blog/ and /2021/05/ were a ghost "posts page" and a date archive.
 * - /ro/principala/ is in their sitemap but already 404s.
 */
const legacyOrphanRedirects: { from: string; to: string }[] = [
  { from: "/uslugi-avtoservisa/remont", to: `/${SECTIONS.services}/reparatii-alternatoare` },
  { from: "/blog", to: `/${SECTIONS.articles}` },
  { from: "/2021/05", to: `/${SECTIONS.articles}` },
  { from: "/2021", to: `/${SECTIONS.articles}` },
  { from: "/principala", to: "" },
];

/** Section index pages on the old site → new paths (locale prefix added later). */
export const legacySectionRedirects: { from: string; to: string }[] = [
  { from: "/komplektujushhie", to: `/${SECTIONS.parts}` },
  { from: "/uslugi-avtoservisa", to: `/${SECTIONS.services}` },
  { from: "/bez-rubriki", to: `/${SECTIONS.info}` },
  { from: "/stati", to: `/${SECTIONS.articles}` },
  { from: "/kontakty", to: `/${SECTIONS.contact}` },
];

export const partSlugs = partCategories.map((c) => c.slug);
export const serviceSlugs = services.map((s) => s.slug);
export const infoSlugs = infoPages.map((p) => p.slug);

export const partGroups = ["starter", "alternator", "shared"] as const;

export function partsByGroup(group: (typeof partGroups)[number]) {
  return partCategories.filter((c) => c.group === group);
}

export function findPart(slug: string) {
  return partCategories.find((c) => c.slug === slug);
}

export function findService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function findInfo(slug: string) {
  return infoPages.find((p) => p.slug === slug);
}

/**
 * Every legacy path → new path (without locale prefix).
 * Consumed by `next.config.ts` to emit permanent redirects.
 */
export function allLegacyRedirects(): { from: string; to: string }[] {
  const strip = (path: string) => path.replace(/\/$/, "");
  return [
    // Deep pages first — they must win over the section-index prefixes.
    ...partCategories.map((c) => ({ from: strip(c.legacy), to: `/${SECTIONS.parts}/${c.slug}` })),
    ...services.map((s) => ({ from: strip(s.legacy), to: `/${SECTIONS.services}/${s.slug}` })),
    ...infoPages.map((p) => ({ from: strip(p.legacy), to: `/${SECTIONS.info}/${p.slug}` })),
    ...articles.map((a) => ({ from: strip(a.legacy), to: `/${SECTIONS.articles}/${a.slug}` })),
    ...legacyOrphanRedirects,
    ...legacySectionRedirects,
  ];
}

/** Lookup map for `proxy.ts`: legacy path (no trailing slash) → new path. */
export const legacyRedirectMap: Record<string, string> = Object.fromEntries(
  allLegacyRedirects().map(({ from, to }) => [from, to]),
);
