import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { notFound } from "next/navigation";

import "../globals.css";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { BusinessJsonLd } from "@/components/JsonLd";
import { Motion } from "@/components/Motion";
import { getDictionary } from "@/lib/dictionaries";
import { htmlLang, isLocale, locales, type Locale } from "@/lib/locales";
import { buildNav } from "@/lib/nav";
import { site } from "@/lib/site";

const plex = IBM_Plex_Sans({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500", "600"],
  variable: "--font-plex",
  display: "swap",
});

/* Mono carries figures, part numbers and phone numbers — it is what makes a
   parts catalogue read as engineering rather than as marketing. */
const plexMono = IBM_Plex_Mono({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const dict = await getDictionary(locale);

  return {
    metadataBase: new URL(site.url),
    title: {
      default: dict.home.seo.title,
      template: `%s | ${site.name}`,
    },
    description: dict.home.seo.description,
    applicationName: site.name,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        ro: "/ro",
        ru: "/ru",
        "x-default": "/ro",
      },
    },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: htmlLang[locale].replace("-", "_"),
      url: `/${locale}`,
      title: dict.home.seo.title,
      description: dict.home.seo.description,
    },
    twitter: { card: "summary_large_image" },
    robots: { index: true, follow: true },
    icons: {
      icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
      apple: "/icon.svg",
    },
  };
}

export const viewport = {
  themeColor: "#e7e5e1",
  colorScheme: "light" as const,
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const typed: Locale = locale;
  const dict = await getDictionary(typed);
  const nav = buildNav(typed, dict);

  return (
    <html lang={htmlLang[typed]} className={`${plex.variable} ${plexMono.variable}`}>
      <body>
        <Motion />

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-base focus:font-medium"
        >
          {dict.common.cta.more}
        </a>

        <Header
          locale={typed}
          nav={nav}
          labels={{
            menu: dict.common.cta.menu,
            close: dict.common.cta.close,
            call: dict.common.cta.call,
            quote: dict.common.cta.quote,
          }}
          langLabels={{
            ro: dict.common.langSwitch.ro,
            ru: dict.common.langSwitch.ru,
          }}
          hoursLine={`${dict.common.labels.monFri} 09:00–18:00`}
        />

        <main id="main">{children}</main>

        <Footer locale={typed} dict={dict} />

        <BusinessJsonLd locale={typed} description={dict.home.seo.description} />
      </body>
    </html>
  );
}
