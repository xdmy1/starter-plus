/**
 * Single source of truth for NAP (name / address / phone) and legal data.
 * All values below are taken from the live starterplus.md pages
 * (/bez-rubriki/rekvizity/ and /bez-rubriki/kontrakt-o-sotrudnichestve/).
 */

export const site = {
  name: "Starter Plus",
  domain: "starterplus.md",
  url: "https://starterplus.md",
  legalName: '"STARTER PLUS" SRL',

  /**
   * Mobile lines only.
   *
   * The landline / fax 022 429 100 is intentionally NOT published on the site
   * (per client instruction) — it is kept in `landlineRetired` because it still
   * appears in the legal requisites and the cooperation contract, where it is
   * part of a quoted document. To publish it again, move the entry into `phones`.
   */
  phones: [
    {
      display: "069 30 77 08",
      href: "tel:+37369307708",
      raw: "+37369307708",
      role: "repairs",
    },
    {
      display: "079 30 77 08",
      href: "tel:+37379307708",
      raw: "+37379307708",
      role: "repairs",
    },
    {
      display: "079 10 77 08",
      href: "tel:+37379107708",
      raw: "+37379107708",
      role: "autoElectric",
    },
  ],

  landlineRetired: {
    display: "022 429 100",
    href: "tel:+37322429100",
    raw: "+37322429100",
  },

  /** Primary number for click-to-call buttons and messaging apps. */
  primaryPhone: {
    display: "069 30 77 08",
    href: "tel:+37369307708",
    raw: "+37369307708",
  },

  whatsapp: "37369307708",
  viber: "+37369307708",
  email: "starter-plus@mail.ru",

  address: {
    street: "str. Uzinelor 104",
    /** The same premises are also addressed as Lunca Bâcului 35 A. */
    alias: "Lunca Bâcului 35 A",
    city: "Chișinău",
    region: "mun. Chișinău",
    country: "MD",
    countryName: "Moldova",
    postalCode: "MD-2107",
  },

  /**
   * The pin the client sent for the workshop. An OpenStreetMap geocode of
   * "str. Uzinelor 104" landed ~350 m north-west of here and was wrong, so
   * these coordinates are authoritative — do not re-derive them from the street
   * address.
   */
  geo: {
    lat: 46.9928749,
    lng: 28.9050486,
  },

  mapsUrl: "https://maps.google.com/maps?q=46.9928749,28.9050486",
  mapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=46.9928749,28.9050486",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=46.9928749,28.9050486&z=17&output=embed",

  /**
   * Working hours per client instruction:
   *   Mon–Fri 09:00–18:00 · Sat 09:00–16:00 · Sun closed
   * (The old site advertised Mon–Sat 09:00–18:00.)
   * 0 = Sunday … 6 = Saturday, matching Date#getDay().
   */
  hours: [
    { day: 0, open: null, close: null },
    { day: 1, open: "09:00", close: "18:00" },
    { day: 2, open: "09:00", close: "18:00" },
    { day: 3, open: "09:00", close: "18:00" },
    { day: 4, open: "09:00", close: "18:00" },
    { day: 5, open: "09:00", close: "18:00" },
    { day: 6, open: "09:00", close: "16:00" },
  ],

  /** schema.org OpeningHoursSpecification source. */
  openingHoursSpec: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    { days: ["Saturday"], opens: "09:00", closes: "16:00" },
  ],

  timezone: "Europe/Chisinau",

  /** Legal + banking details, verbatim from the requisites page. */
  company: {
    legalAddress: "mun. Chișinău, str. Uzinelor 104",
    codFiscal: "1009600031813",
    idno: "1009600031813",
    account: "22511403112",
    iban: "MD93AG000000022511403112",
    tva: "0507017",
    bank: "Moldova-Agroindbank S.A., fil. Buiucani",
    swift: "AGRNMD2X832",
    director: "Vadim Orașan",
    directorFull: "Orașan Vadim Nicolaevici",
  },

  /** Warranty terms from /bez-rubriki/garantija-na-proizvedennyj-remont/ */
  warranty: {
    newMonths: 12,
    repairMonths: 12,
    usedMonthsMin: 3,
    usedMonthsMax: 6,
    contractMonths: 6,
  },

  /** Component brands carried, aggregated across all catalog pages. */
  brands: {
    original: ["BOSCH", "VALEO", "DENSO", "DELCO"],
    licensed: [
      "ZEN",
      "CARGO",
      "MAGNETI MARELLI",
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
      "INA",
      "LUK",
      "SNR",
    ],
  },
} as const;

/** Grouped hours for display: Mon–Fri, Sat, Sun. */
export const hourGroups = [
  { key: "monFri", open: "09:00", close: "18:00" },
  { key: "sat", open: "09:00", close: "16:00" },
  { key: "sun", open: null, close: null },
] as const;

export type Phone = (typeof site.phones)[number];
