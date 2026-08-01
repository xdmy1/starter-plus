import { htmlLang, localePath, type Locale } from "@/lib/locales";
import { site } from "@/lib/site";

/** Inline JSON-LD. `data` is serialised, never interpolated into markup. */
function Script({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

/**
 * AutoRepair is the most specific schema.org type for this business, and it
 * inherits LocalBusiness so opening hours / geo / phone all still apply.
 */
export function BusinessJsonLd({
  locale,
  description,
}: {
  locale: Locale;
  description: string;
}) {
  return (
    <Script
      data={{
        "@context": "https://schema.org",
        "@type": "AutoRepair",
        "@id": `${site.url}/#business`,
        name: site.name,
        legalName: site.legalName,
        description,
        url: `${site.url}${localePath(locale)}`,
        inLanguage: htmlLang[locale],
        telephone: site.phones.map((phone) => phone.raw),
        email: site.email,
        vatID: site.company.tva,
        taxID: site.company.codFiscal,
        priceRange: "$$",
        currenciesAccepted: "MDL",
        paymentAccepted: "Cash, Bank transfer",
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.street,
          addressLocality: site.address.city,
          addressCountry: site.address.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: site.geo.lat,
          longitude: site.geo.lng,
        },
        hasMap: site.mapsUrl,
        openingHoursSpecification: site.openingHoursSpec.map((spec) => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: spec.days.map((day) => `https://schema.org/${day}`),
          opens: spec.opens,
          closes: spec.closes,
        })),
        areaServed: { "@type": "Country", name: "Moldova" },
        founder: { "@type": "Person", name: site.company.director },
      }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url?: string }[];
}) {
  return (
    <Script
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          ...(item.url ? { item: `${site.url}${item.url}` } : {}),
        })),
      }}
    />
  );
}

export function FaqJsonLd({ items }: { items: { q: string; a: string }[] }) {
  if (!items.length) return null;
  return (
    <Script
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      }}
    />
  );
}

export function ArticleJsonLd({
  locale,
  title,
  description,
  date,
  url,
}: {
  locale: Locale;
  title: string;
  description: string;
  date: string;
  url: string;
}) {
  return (
    <Script
      data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description,
        datePublished: date,
        dateModified: date,
        inLanguage: htmlLang[locale],
        mainEntityOfPage: `${site.url}${url}`,
        publisher: { "@id": `${site.url}/#business` },
        author: { "@type": "Organization", name: site.name },
      }}
    />
  );
}
