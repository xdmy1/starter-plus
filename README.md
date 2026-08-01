# starterplus.md — redesign

Complete rebuild of [starterplus.md](https://starterplus.md), the Chișinău starter and
alternator workshop. Next.js 16 (App Router) + Tailwind CSS v4 + TypeScript, bilingual
Romanian / Russian, fully prerendered.

```bash
npm install
npm run dev     # http://localhost:3000 -> redirects to /ro or /ru
npm run build   # 75 static routes
npm run start
npm run lint
```

## Stack

| | |
|---|---|
| Framework | Next.js 16.2 (App Router, Turbopack) |
| Styling | Tailwind CSS v4 (CSS-first `@theme`, no `tailwind.config`) |
| Type system | TypeScript strict, no `any` |
| Fonts | IBM Plex Sans + IBM Plex Mono via `next/font/google`, subsets `latin` + `latin-ext` + `cyrillic` |
| Rendering | every page prerendered via `generateStaticParams`; one dynamic route (`/api/contact`) |

## Routes

`/` redirects to a locale based on cookie → `Accept-Language` → `ro`.

```
/[locale]                              home
/[locale]/piese                        catalog index
/[locale]/piese/[slug]                 10 part categories
/[locale]/servicii                     services index
/[locale]/servicii/[slug]              3 services
/[locale]/info                         useful information index
/[locale]/info/[slug]                  5 info pages (warranty, B2B, contract, requisites)
/[locale]/articole                     knowledge base index
/[locale]/articole/[slug]              9 articles
/[locale]/contacte                     contacts + map + form
/[locale]/credite                      photo credits (noindex)
```

Locale is `ro` | `ru`. Slugs are shared between locales so the language switcher always
lands on the same page, and `hreflang` pairs are exact.

## Where the content lives

Nothing user-visible is hardcoded in a component.

```
content/
  types.ts        the content model (Doc, Block union, Dictionary)
  taxonomy.ts     slugs, grouping, icons + the OLD URL each page replaces
  groups.ts       part-family labels
  notfound.ts     404 strings (kept out of the dictionaries — see below)
  ro/ ru/         one file per section: common, home, parts, services, info, contact
  ro/articles/    one file per article + a barrel
lib/
  site.ts         NAP: phones, address, geo, hours, legal + banking details, brands
```

Page bodies are arrays of typed blocks (`p`, `h2`, `ul`, `ol`, `table`, `steps`, `faq`,
`note`, `quote`, `figure`, `cta`) rendered by `components/Blocks.tsx`. To change copy, edit
the content file — never a page component.

Internal links inside content are **locale-relative** (`"piese/demaroare"`, no leading slash,
no locale segment); the renderer prefixes the active locale.

`content/notfound.ts` exists because `not-found.tsx` receives no route params, so it detects
the locale on the client — importing a whole dictionary there would ship both languages to
the browser.

## Adding a language

1. Add the code to `locales` and `htmlLang` in `lib/locales.ts`.
2. Add a loader in `lib/dictionaries.ts`.
3. Copy `content/ro/` to `content/<code>/` and translate.
4. Add the labels in `content/groups.ts` and `content/notfound.ts`.

Routing, sitemap, `hreflang` and the switcher pick it up automatically.

## Contact form

Works with **zero configuration**: it validates client-side and then opens a prefilled
WhatsApp chat, which is how most customers here already get in touch. Set either env var and
it switches to silent server-side delivery instead:

```bash
CONTACT_WEBHOOK_URL=https://…     # POSTs the enquiry as JSON (Zapier, Make, a CRM)
RESEND_API_KEY=re_…               # sends it as email
CONTACT_TO_EMAIL=…                # optional, defaults to lib/site.ts
CONTACT_FROM_EMAIL=…              # optional
```

`/api/contact` validates server-side, rate-limits per IP (5 per 10 min) and has a honeypot
field. If delivery is configured but fails, the client silently falls back to WhatsApp so a
submitted message is never dropped.

## SEO migration

Every URL from the old WordPress site 308-redirects to its new home in a **single hop**,
including the trailing slash the old links all carry. The mapping is data, not config — it
lives in the `legacy` field of each `content/taxonomy.ts` entry and is applied by `proxy.ts`.

`skipTrailingSlashRedirect: true` is set in `next.config.ts` so Next's own trailing-slash
redirect can't insert a second hop ahead of the proxy.

Also handled: the orphan `/uslugi-avtoservisa/remont/` (a sitemap-only duplicate of the
alternator repair page), the ghost `/blog/`, the `/2021/05/` date archive, and
`/ro/principala/`.

Generated automatically: `sitemap.xml` (every route × every locale, with `alternates`),
`robots.txt`, canonical + `hreflang` per page, and JSON-LD — `AutoRepair` for the business,
plus `BreadcrumbList`, `FAQPage` and `Article` where they apply.

## Design system

`app/globals.css` is the whole system, as Tailwind v4 `@theme` tokens.

**Light, mid-grey, photographic.** The page is a visibly grey canvas, cards are
white, ink is a warm near-black, and the accent is used sparingly. This replaced an
earlier dark/amber-glow version that read as AI-generated.

The palette is carried over from the old site's own Brizy palette — the yellow
`#FDD224` is their brand colour (the same yellow as the watermark on their workshop
photos), and the neutrals derive from their `#1C1C1C` / `#666` / `#EBEBEB`:

| token | value | role |
|---|---|---|
| `--color-page` | `#E7E5E1` | the canvas — visibly grey, never off-white |
| `--color-surface` | `#FFFFFF` | cards, panels, header — white only as a raised surface |
| `--color-surface-2` | `#F2F1EE` | quiet panels, table zebra |
| `--color-deep` | `#191817` | footer + CTA bands |
| `--color-ink` | `#191817` | headings, warm near-black (never `#000`) |
| `--color-ink-2/3/4` | `#55524E` / `#7C7873` / `#A8A39C` | body / muted / decorative |
| `--color-accent` | `#FDD224` | fills only: primary marks, highlighter, badges |
| `--color-accent-text` | `#7A5300` | the only yellow legal as text (4.9:1) |

Rules that make it work, taken from what light-themed automotive sites (Hella,
Bosch, Continental) actually do:

- **Grey you can see.** An off-white `#FAFAFA` page is the SaaS/AI look; Hella's page
  is `#E9E9E9`. Ours is `#E7E5E1`.
- **Yellow is identity, not UI.** It occupies well under 2% of the pixels — logo mark,
  the heading highlighter, the warranty badge, one CTA. The primary button is **ink**,
  not yellow. Yellow never carries long text.
- **Nearly square.** Radii are 3–6px, not 14px+. Bosch is 4px, Continental 2–4px —
  it reads as engineering. A 1px hairline does more work than a shadow.
- **IBM Plex Sans + IBM Plex Mono**, self-hosted via `next/font`, both with
  `latin` + `latin-ext` + `cyrillic` so RO and RU share one family and one set of
  metrics. Mono carries every figure — stats, phone numbers, hours, dates, part
  data — which is what makes a parts catalogue read as technical.
- **Type ceiling 56px, weight 600 max.** An 80px hero on a workshop site reads as a
  template.
- **Uppercase only at 12–13px** with `+0.1em` tracking (eyebrows, micro-labels).
- **Band rhythm**: grey → white → grey → white → dark, so the page is never a flat
  field of one tone.

Deliberately avoided, as the tells that read AI-generated: glassmorphism, neon glow,
grain overlays, gradient display text, everything-rounded, identical 3-up icon-card
rows, and centred-everything layouts.

All page motion is one client component (`components/Motion.tsx`): a deterministic
scroll sweep for reveals, one delegated `pointermove`, and the scroll-progress bar.
The reveal CSS is gated behind `html.js`, so with JavaScript unavailable content is
simply visible. A sweep is used rather than an `IntersectionObserver` because IO
reports sampled state — a fast flick could skip an element and leave it invisible.
`prefers-reduced-motion` disables it all.

## Photography

`content/images.ts` maps every photo to a page and records its licence.

- The two workshop photos are the client's own, carried over from the old site.
- Everything else is from **Wikimedia Commons** under CC BY / CC BY-SA / CC0 /
  public domain — licences that permit commercial use with attribution. Attribution
  is on `/[locale]/credite`, linked from the footer.
- Four category shots (bendix, solenoid, pulley) are **crops** of those same licensed
  photos, framed on the specific part.
- Nothing was taken from Google Images. Those are almost all copyrighted and would
  expose the business to a takedown or an invoice.

### Supplier logos

The homepage brand strip uses **real transparent logos** for the seven brands whose
current mark exists under a free licence: Bosch, Valeo, Denso, ACDelco, Marelli, INA,
LuK. They are greyscale at rest and colour on hover, sized by aspect-ratio bucket so
wide wordmarks and square marks carry equal visual weight.

The other fifteen stocked brands (ZEN, CARGO, BYPART, TYPER, MEA, WAI, GHIBAUDI, ORME,
ZM, MOBILETRON, TRANSPO, UTM, IKA/GEBE, MEGA, SNR) are shown **as text**, not as logos.
Wikimedia Commons has no correct file for them and its name-matches were different
companies entirely — "LUK" returns Lukoil, "MEGA" returns Mega Man, "TRANSPO" returns
Ottawa transit, "UTM" a university. Shipping those would have been worse than text.
To add a real one, drop the file in `public/img/brands/`, add an entry to `brandLogos`
in `content/images.ts` with its viewBox ratio, and remove the name from `otherBrands`.

Note on trademarks: showing a supplier's mark to say "we stock this brand" is
ordinary referential use and standard in the parts trade, but the marks belong to
their owners. The safest source is each supplier's own press/partner kit.

The single biggest remaining upgrade is photographing their own stock and bench —
the `figure` block and the `.media` / `.media-plate` primitives are already wired for
it, so it is a drop-in replacement in `content/images.ts`.

## Decisions worth knowing

- **The landline `022 429 100` is published nowhere.** Per the brief, contacts are the three
  mobile numbers only. It is retained in `lib/site.ts` as `landlineRetired` — move that entry
  into `phones` to bring it back. It is also omitted from the requisites table and from
  §12 of the cooperation contract, where the old site printed it.
- **Working hours are Mon–Fri 09:00–18:00, Sat 09:00–16:00, Sunday closed**, per the brief.
  The old site advertised Mon–Sat 09:00–18:00.
- **`079 10 77 08`** is the auto-electrician / diagnostics line. The old service page printed
  `079 30 77 08` there, contradicting its own homepage; the homepage number is used.
- **The voltage-regulator catalog page was rewritten.** On the live site it has the rotor
  page's copy pasted into it. Its own brand list is preserved.
- **The old site's own thumbnails were unusable** at 180×180, so they were replaced with
  licensed photography rather than upscaled. See **Photography** above.
- **The two component-diagram pages had no text at all** on the old site — the part names
  were pixels inside a JPEG. They are now real bilingual tables, which is a genuine
  accessibility and SEO gain. The diagrams themselves still carry Russian callouts; the
  Romanian captions say so. Redrawing them bilingually is a nice-to-have.
- **Not carried over:** the old WordPress `/?s=` site search. Neither reference site has one
  and it was not in the brief; with 30 pages the nav covers the ground. A client-side index
  over titles and excerpts would be straightforward to add if wanted.
