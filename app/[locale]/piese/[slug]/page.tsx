import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Image from "next/image";

import { Blocks } from "@/components/Blocks";
import { CtaBand } from "@/components/CtaBand";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { RelatedLinks } from "@/components/RelatedLinks";
import { partImages } from "@/content/images";
import { SECTIONS, findPart, partCategories, partSlugs } from "@/content/taxonomy";
import { localePath } from "@/lib/locales";
import { docMetadata, loadPage } from "@/lib/page";

type Params = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return partSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const { locale, dict } = await loadPage(params);
  const doc = dict.parts.items[slug];
  if (!doc) return {};
  return docMetadata(locale, doc, `${SECTIONS.parts}/${slug}`);
}

export default async function PartPage({ params }: Params) {
  const { slug } = await params;
  const { locale, dict } = await loadPage(params);

  const category = findPart(slug);
  const doc = dict.parts.items[slug];
  if (!category || !doc) notFound();

  const at = (path: string) => localePath(locale, path);

  const relatedServices = category.relatedServices
    .map((serviceSlug) => {
      const service = dict.services.items[serviceSlug];
      if (!service) return null;
      return {
        label: service.short ?? service.title,
        href: at(`${SECTIONS.services}/${serviceSlug}`),
        desc: service.excerpt,
        icon: serviceSlug === "electrician-auto" ? "diagnostics" : "wrench",
      };
    })
    .filter((item): item is NonNullable<typeof item> => item !== null);

  const siblings = partCategories
    .filter((item) => item.group === category.group && item.slug !== category.slug)
    .map((item) => {
      const sibling = dict.parts.items[item.slug];
      if (!sibling) return null;
      return {
        label: sibling.short ?? sibling.title,
        href: at(`${SECTIONS.parts}/${item.slug}`),
        icon: item.icon,
      };
    })
    .filter((item): item is NonNullable<typeof item> => item !== null);

  return (
    <>
      <PageHero
        eyebrow={dict.common.nav.parts}
        title={doc.title}
        lead={doc.lead ?? doc.excerpt}
        highlights={doc.highlights}
        crumbs={[
          { label: dict.common.labels.breadcrumbHome, href: at("") },
          { label: dict.parts.index.short ?? dict.parts.index.title, href: at(SECTIONS.parts) },
          { label: doc.short ?? doc.title },
        ]}
      />

      <section className="pb-[clamp(24px,3vw,40px)]">
        <div className="shell">
          <div className="grid gap-[clamp(24px,3vw,48px)] lg:grid-cols-[1fr_minmax(280px,380px)]">
            <div data-reveal className="max-w-[70ch]">
              <Blocks blocks={doc.body} locale={locale} />
            </div>

            {partImages[slug] && (
              <aside data-reveal className="lg:sticky lg:top-28 lg:self-start">
                <div
                  className={`card media aspect-[4/3] ${
                    partImages[slug].plate ? "media-plate" : ""
                  }`}
                >
                  <Image
                    src={partImages[slug].src}
                    alt={doc.short ?? doc.title}
                    width={partImages[slug].width}
                    height={partImages[slug].height}
                    sizes="(max-width: 1024px) 92vw, 380px"
                  />
                </div>
              </aside>
            )}
          </div>
        </div>
      </section>

      <RelatedLinks
        title={dict.common.labels.relatedServices}
        items={relatedServices}
        columns={relatedServices.length >= 3 ? 3 : 2}
      />

      <RelatedLinks
        title={dict.common.labels.relatedParts}
        items={siblings}
        columns={4}
      />

      <CtaBand
        locale={locale}
        title={dict.home.ctaBand.title}
        text={dict.home.ctaBand.text}
        primary={dict.home.ctaBand.primary}
        secondary={dict.home.ctaBand.secondary}
      />

      <BreadcrumbJsonLd
        items={[
          { name: dict.common.labels.breadcrumbHome, url: at("") },
          { name: dict.parts.index.title, url: at(SECTIONS.parts) },
          { name: doc.title, url: at(`${SECTIONS.parts}/${slug}`) },
        ]}
      />
    </>
  );
}
