/**
 * Photography.
 *
 * Every file in /public/img is either the client's own (the two workshop shots
 * carried over from the old site) or a freely-licensed photo from Wikimedia
 * Commons. Licences and authors are in `credits` below and are surfaced on the
 * /credite page — CC BY and CC BY-SA both require attribution.
 *
 * `plate: true` marks a studio-style product shot that should be shown
 * contained on a light plate rather than bled edge-to-edge.
 */

export interface ImageAsset {
  src: string;
  width: number;
  height: number;
  plate?: boolean;
}

export const heroImage: ImageAsset = {
  src: "/img/hero-team.jpg",
  width: 1000,
  height: 1500,
};

/** Wide bench shot, used as the banner on the services index. */
export const servicesBanner: ImageAsset = {
  src: "/img/hero-workshop.jpg",
  width: 1600,
  height: 1066,
};

/** Customer handover, used in the B2B block on the homepage. */
export const handoverImage: ImageAsset = {
  src: "/img/predare-cheie.jpg",
  width: 1500,
  height: 1000,
};

/** Keyed by part-category slug. */
export const partImages: Record<string, ImageAsset> = {
  demaroare: { src: "/img/p-demaroare.jpg", width: 1200, height: 900, plate: true },
  bendix: { src: "/img/p-bendix.jpg", width: 1200, height: 900 },
  "rotor-demaror": { src: "/img/p-rotor-demaror.jpg", width: 1400, height: 932, plate: true },
  "releu-cuplare": { src: "/img/p-releu-cuplare.jpg", width: 1200, height: 900 },
  alternatoare: { src: "/img/p-alternatoare.jpg", width: 1400, height: 925 },
  "rotor-alternator": { src: "/img/p-rotor-alternator.jpg", width: 1400, height: 869 },
  "fulie-alternator": { src: "/img/p-fulie-alternator.jpg", width: 1200, height: 900 },
  "releu-regulator": { src: "/img/p-releu-regulator.jpg", width: 1044, height: 1400 },
  "perii-colectoare": { src: "/img/p-perii-colectoare.jpg", width: 1400, height: 1000, plate: true },
  "alte-piese": { src: "/img/p-alte-piese.jpg", width: 1400, height: 382, plate: true },
};

/** Keyed by service slug. */
export const serviceImages: Record<string, ImageAsset> = {
  "reparatii-demaroare": { src: "/img/s-reparatii-demaroare.jpg", width: 1400, height: 788 },
  "reparatii-alternatoare": { src: "/img/s-reparatii-alternatoare.jpg", width: 1400, height: 932 },
  "electrician-auto": { src: "/img/s-electrician-auto.jpg", width: 1400, height: 1104 },
};

/**
 * Supplier brand logos for the homepage strip.
 *
 * Only brands whose CURRENT, correct mark exists under a free licence are here.
 * Wikimedia Commons had no usable file for the remaining suppliers, and its
 * name-matches were different companies entirely ("LUK" returned Lukoil, "MEGA"
 * returned Mega Man). Those brands stay as text rather than shipping a wrong
 * logo — see `otherBrands` and `Marquee`.
 *
 * `ratio` is width/height, taken from each file's viewBox, so the strip can size
 * every mark to one optical height without layout shift.
 */
export interface BrandLogo {
  src: string;
  label: string;
  ratio: number;
}

export const brandLogos: BrandLogo[] = [
  { src: "/img/brands/bosch.svg", label: "Bosch", ratio: 4.464 },
  { src: "/img/brands/valeo.svg", label: "Valeo", ratio: 2.105 },
  { src: "/img/brands/denso.svg", label: "Denso", ratio: 5.0 },
  { src: "/img/brands/acdelco.svg", label: "ACDelco", ratio: 4.938 },
  { src: "/img/brands/marelli.png", label: "Magneti Marelli", ratio: 1.231 },
  { src: "/img/brands/ina.svg", label: "INA", ratio: 1.0 },
  { src: "/img/brands/luk.svg", label: "LuK", ratio: 1.325 },
];

/** Stocked brands with no free logo file — shown as text, never as a fake mark. */
export const otherBrands = [
  "ZEN",
  "CARGO",
  "BYPART",
  "TYPER",
  "MEA",
  "WAI",
  "GHIBAUDI",
  "ORME",
  "ZM",
  "MOBILETRON",
  "TRANSPO",
  "UTM",
  "IKA (GEBE)",
  "MEGA",
  "SNR",
] as const;

export interface Credit {
  files: string[];
  title: string;
  author: string;
  licence: string;
  source: string;
}

export const credits: Credit[] = [
  {
    files: ["/img/atelier-1.jpg", "/img/atelier-2.jpg"],
    title: "Fotografii din atelier / Фотографии мастерской",
    author: "Starter Plus SRL",
    licence: "© Starter Plus SRL",
    source: "https://starterplus.md",
  },
  {
    files: ["/img/schema-demaror.jpg", "/img/schema-alternator.jpg"],
    title: "Scheme demaror / alternator",
    author: "Starter Plus SRL",
    licence: "© Starter Plus SRL",
    source: "https://starterplus.md",
  },
  {
    files: [
      "/img/hero-team.jpg",
      "/img/predare-cheie.jpg",
      "/img/hero-workshop.jpg",
    ],
    title: "Imagini de brand și fotografii furnizate de client",
    author: "Starter Plus SRL",
    licence: "Furnizată de client / provided by the client",
    source: "https://starterplus.md",
  },
  {
    files: ["/img/logo.png", "/img/logo-light.png", "/img/logo-mark.png"],
    title: "Logo Starter Plus",
    author: "Starter Plus SRL",
    licence: "© Starter Plus SRL",
    source: "https://starterplus.md",
  },
  {
    files: ["/img/p-demaroare.jpg", "/img/p-bendix.jpg", "/img/p-releu-cuplare.jpg"],
    title: "Automobile starter (cropped for the catalogue card, the drive pinion and the solenoid)",
    author: "Wikimedia Commons contributor",
    licence: "CC BY-SA 3.0",
    source: "https://commons.wikimedia.org/wiki/File:Automobile_starter.JPG",
  },
  {
    files: ["/img/p-rotor-demaror.jpg"],
    title: "Kommutator universalmotor stab",
    author: "Wikimedia Commons contributor",
    licence: "CC BY-SA 3.0",
    source: "https://commons.wikimedia.org/wiki/File:Kommutator_universalmotor_stab.jpg",
  },
  {
    files: ["/img/p-alternatoare.jpg", "/img/p-fulie-alternator.jpg"],
    title: "Car alternator on a workbench surrounded by various auto parts in a garage (cropped for the category card and the pulley)",
    author: "Wikimedia Commons contributor",
    licence: "CC BY 2.0",
    source: "https://commons.wikimedia.org/wiki/File:Car_alternator_on_a_workbench_surrounded_by_various_auto_parts_in_a_garage.jpg",
  },
  {
    files: ["/img/p-rotor-alternator.jpg"],
    title: "Bürsten Kommutator",
    author: "Wikimedia Commons contributor",
    licence: "CC BY 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Buersten_Kommutator2.jpg",
  },
  {
    files: ["/img/p-releu-regulator.jpg"],
    title: "Alternator voltage regulator",
    author: "Wikimedia Commons contributor",
    licence: "CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Alternator_voltage_regulator.jpg",
  },
  {
    files: ["/img/p-perii-colectoare.jpg"],
    title: "Carbon brushes",
    author: "Wikimedia Commons contributor",
    licence: "CC BY-SA 3.0",
    source: "https://commons.wikimedia.org/wiki/File:Carbon_brushes.jpg",
  },
  {
    files: ["/img/p-alte-piese.jpg"],
    title: "Delcoribo (alternator, rectifier and regulator)",
    author: "Wikimedia Commons contributor",
    licence: "CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Delcoribo.jpg",
  },
  {
    files: ["/img/s-reparatii-demaroare.jpg"],
    title: "Magneton anlaser za Zastavu",
    author: "Wikimedia Commons contributor",
    licence: "CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Magneton_anlaser_za_Zastavu.jpg",
  },
  {
    files: ["/img/s-reparatii-alternatoare.jpg"],
    title: "Alternator",
    author: "Wikimedia Commons contributor",
    licence: "CC BY-SA 3.0",
    source: "https://commons.wikimedia.org/wiki/File:Alternator.jpg",
  },
  {
    files: [
      "/img/brands/bosch.svg",
      "/img/brands/valeo.svg",
      "/img/brands/denso.svg",
      "/img/brands/acdelco.svg",
      "/img/brands/marelli.png",
      "/img/brands/ina.svg",
      "/img/brands/luk.svg",
    ],
    title:
      "Supplier brand logos — shown to identify stocked brands (nominative use). Trademarks of their respective owners.",
    author: "Bosch, Valeo, Denso, ACDelco, Marelli, INA, LuK",
    licence: "PD-textlogo / trademark of the owner",
    source: "https://commons.wikimedia.org/wiki/Category:Automotive_company_logos",
  },
  {
    files: ["/img/s-electrician-auto.jpg"],
    title: "Automotive alternator. Terminals",
    author: "Wikimedia Commons contributor",
    licence: "CC BY-SA 3.0",
    source: "https://commons.wikimedia.org/wiki/File:Automotive_alternator._Terminals.jpg",
  },
];

/** Short RO/RU copy for the credits page — kept here to avoid a dictionary churn. */
export const creditsPage = {
  ro: {
    title: "Credite foto",
    lead: "Fotografiile din atelier aparțin Starter Plus SRL. Restul imaginilor sunt preluate din Wikimedia Commons sub licențe libere care permit utilizarea comercială, cu atribuire. Unele au fost decupate pentru a evidenția piesa descrisă.",
    file: "Fișier",
    licence: "Licență",
    author: "Autor",
    source: "Sursă",
  },
  ru: {
    title: "Фотографии: источники",
    lead: "Фотографии мастерской принадлежат Starter Plus SRL. Остальные изображения взяты из Wikimedia Commons по свободным лицензиям, разрешающим коммерческое использование при указании автора. Некоторые кадры обрезаны, чтобы показать нужную деталь.",
    file: "Файл",
    licence: "Лицензия",
    author: "Автор",
    source: "Источник",
  },
} as const;
