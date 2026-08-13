import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Blocks } from "@/components/Blocks";
import { CtaBand } from "@/components/CtaBand";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SECTIONS, findInfo, infoPages, infoSlugs } from "@/content/taxonomy";
import { localePath } from "@/lib/locales";
import { docMetadata, loadPage } from "@/lib/page";

type Params = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return infoSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const { locale, dict } = await loadPage(params);
  const doc = dict.info.items[slug];
  if (!doc) return {};
  return docMetadata(locale, doc, `${SECTIONS.info}/${slug}`);
}

export default async function InfoPage({ params }: Params) {
  const { slug } = await params;
  const { locale, dict } = await loadPage(params);

  const page = findInfo(slug);
  const doc = dict.info.items[slug];
  if (!page || !doc) notFound();

  const at = (path: string) => localePath(locale, path);

  const siblings = infoPages
    .filter((item) => item.slug !== slug)
    .map((item) => {
      const sibling = dict.info.items[item.slug];
      if (!sibling) return null;
      return {
        label: sibling.short ?? sibling.title,
        href: at(`${SECTIONS.info}/${item.slug}`),
        icon: item.icon,
      };
    })
    .filter((item): item is NonNullable<typeof item> => item !== null);

  return (
    <>
      <PageHero
        eyebrow={dict.common.nav.info}
        title={doc.title}
        lead={doc.lead ?? doc.excerpt}
        highlights={doc.highlights}
        crumbs={[
          { label: dict.common.labels.breadcrumbHome, href: at("") },
          {
            label: dict.info.index.short ?? dict.info.index.title,
            href: at(SECTIONS.info),
          },
          { label: doc.short ?? doc.title },
        ]}
      />

      <section className="pb-[clamp(24px,3vw,40px)]">
        <div className="shell">
          <div data-reveal className="max-w-[76ch]">
            <Blocks blocks={doc.body} locale={locale} />
          </div>
        </div>
      </section>

      <RelatedLinks
        title={dict.common.labels.inThisSection}
        items={siblings}
        columns={4}
      />

      <CtaBand
        title={dict.home.ctaBand.title}
        text={dict.home.ctaBand.text}
        primary={dict.home.ctaBand.primary}
      />

      <BreadcrumbJsonLd
        items={[
          { name: dict.common.labels.breadcrumbHome, url: at("") },
          { name: dict.info.index.title, url: at(SECTIONS.info) },
          { name: doc.title, url: at(`${SECTIONS.info}/${slug}`) },
        ]}
      />
    </>
  );
}
