/**
 * Content model.
 *
 * Slugs, images and ordering are locale-independent and live in `taxonomy.ts`.
 * Everything a human reads lives in `content/<locale>/*` keyed by those slugs,
 * so adding a language never touches routing.
 */

export type Locale = "ro" | "ru";

/** Rich-text blocks. Enough to carry every page of the original site verbatim. */
export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "table"; head?: string[]; rows: string[][] }
  | { type: "note"; text: string }
  | { type: "quote"; text: string }
  | { type: "steps"; items: { title: string; text: string }[] }
  | { type: "faq"; items: { q: string; a: string }[] }
  | {
      type: "figure";
      /** Path under /public, e.g. "/img/schema-demaror.jpg" */
      src: string;
      width: number;
      height: number;
      alt: string;
      caption?: string;
    }
  | { type: "cta"; title: string; text?: string; label: string; href: string };

export interface Seo {
  title: string;
  description: string;
}

/** A generic content page: catalog category, service, or info article. */
export interface Doc {
  /** <h1> */
  title: string;
  /** Short label for cards, breadcrumbs and menus. Falls back to `title`. */
  short?: string;
  /** One-sentence summary used on cards and as the page lead. */
  excerpt: string;
  /** Optional intro paragraph rendered above `body`. */
  lead?: string;
  body: Block[];
  /** Bullet highlights rendered as a feature list near the top. */
  highlights?: string[];
  seo: Seo;
}

export type DocMap = Record<string, Doc>;

export interface Article extends Doc {
  date: string;
  readingMinutes: number;
  tag?: string;
}

/** Everything chrome-level: nav labels, buttons, form strings, footer. */
export interface Common {
  localeName: string;
  localeShort: string;
  nav: {
    home: string;
    parts: string;
    services: string;
    info: string;
    articles: string;
    contact: string;
  };
  cta: {
    call: string;
    callNow: string;
    write: string;
    route: string;
    quote: string;
    book: string;
    more: string;
    all: string;
    back: string;
    send: string;
    sending: string;
    menu: string;
    close: string;
    search: string;
    viewCatalog: string;
    askPrice: string;
  };
  labels: {
    phone: string;
    phones: string;
    address: string;
    hours: string;
    email: string;
    openNow: string;
    closedNow: string;
    opensAt: string;
    closesAt: string;
    monFri: string;
    sat: string;
    sun: string;
    closed: string;
    dayOff: string;
    breadcrumbHome: string;
    inThisSection: string;
    relatedServices: string;
    relatedParts: string;
    quickContact: string;
    workingHours: string;
    findUs: string;
    entranceNote: string;
    entranceAlt: string;
    entranceCaption: string;
    since: string;
    guarantee: string;
    highlights: string;
    contents: string;
  };
  form: {
    title: string;
    subtitle: string;
    name: string;
    namePlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    car: string;
    carPlaceholder: string;
    topic: string;
    topicOptions: string[];
    message: string;
    messagePlaceholder: string;
    consent: string;
    success: string;
    successBody: string;
    error: string;
    required: string;
    invalidPhone: string;
  };
  footer: {
    tagline: string;
    catalogTitle: string;
    servicesTitle: string;
    infoTitle: string;
    contactTitle: string;
    rights: string;
    madeBy: string;
    legalNote: string;
  };
  notFound: {
    title: string;
    text: string;
    cta: string;
  };
  langSwitch: {
    label: string;
    ro: string;
    ru: string;
  };
}

export interface Dictionary {
  common: Common;
  home: Home;
  parts: {
    index: Doc;
    items: DocMap;
  };
  services: {
    index: Doc;
    items: DocMap;
  };
  info: {
    index: Doc;
    items: DocMap;
  };
  articles: {
    index: Doc;
    items: Record<string, Article>;
  };
  contact: Doc & {
    formIntro?: string;
  };
}

export interface Home {
  seo: Seo;
  hero: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    /** Second service headline, rendered bold under the h1. */
    boldLine?: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    stats: { value: string; label: string }[];
  };
  usp: { title: string; text: string; icon: string }[];
  servicesSection: {
    eyebrow: string;
    title: string;
    text: string;
  };
  partsSection: {
    eyebrow: string;
    title: string;
    text: string;
  };
  processSection: {
    eyebrow: string;
    title: string;
    text: string;
    steps: { title: string; text: string }[];
  };
  brandsSection: {
    eyebrow: string;
    title: string;
    text: string;
  };
  b2bSection: {
    eyebrow: string;
    title: string;
    text: string;
    bullets: string[];
    cta: string;
  };
  faqSection: {
    eyebrow: string;
    title: string;
    items: { q: string; a: string }[];
  };
  ctaBand: {
    title: string;
    text: string;
    primary: string;
  };
}
