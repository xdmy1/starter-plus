import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Image from "next/image";

import { Blocks } from "@/components/Blocks";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { RelatedLinks } from "@/components/RelatedLinks";
import { serviceImages } from "@/content/images";
import { SECTIONS, findPart, findService, serviceSlugs } from "@/content/taxonomy";
import { localePath } from "@/lib/locales";
import { docMetadata, loadPage } from "@/lib/page";
import { site } from "@/lib/site";

type Params = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const { locale, dict } = await loadPage(params);
  const doc = dict.services.items[slug];
  if (!doc) return {};
  return docMetadata(locale, doc, `${SECTIONS.services}/${slug}`);
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const { locale, dict } = await loadPage(params);

  const service = findService(slug);
  const doc = dict.services.items[slug];
  if (!service || !doc) notFound();

  const at = (path: string) => localePath(locale, path);
  const phone = slug === "electrician-auto" ? site.phones[2] : site.phones[0];

  const faqBlock = doc.body.find((block) => block.type === "faq");
  const faqItems = faqBlock?.type === "faq" ? faqBlock.items : [];

  const relatedParts = service.relatedParts
    .map((partSlug) => {
      const part = dict.parts.items[partSlug];
      if (!part) return null;
      return {
        label: part.short ?? part.title,
        href: at(`${SECTIONS.parts}/${partSlug}`),
        icon: findPart(partSlug)?.icon,
      };
    })
    .filter((item): item is NonNullable<typeof item> => item !== null);

  return (
    <>
      <PageHero
        eyebrow={dict.common.nav.services}
        title={doc.title}
        lead={doc.lead ?? doc.excerpt}
        highlights={doc.highlights}
        crumbs={[
          { label: dict.common.labels.breadcrumbHome, href: at("") },
          {
            label: dict.services.index.short ?? dict.services.index.title,
            href: at(SECTIONS.services),
          },
          { label: doc.short ?? doc.title },
        ]}
      >
        <div data-reveal className="mt-9 flex flex-wrap gap-3">
          <a href={phone.href} className="btn btn-accent">
            <Icon name="phone" size={17} />
            {dict.common.cta.callNow} {phone.display}
          </a>
        </div>
      </PageHero>

      {serviceImages[slug] && (
        <section className="pb-[clamp(28px,3.5vw,48px)]">
          <div className="shell">
            <div
              data-reveal
              className={`card media aspect-[21/9] ${
                serviceImages[slug].plate ? "media-plate" : ""
              }`}
            >
              <Image
                src={serviceImages[slug].src}
                alt={doc.short ?? doc.title}
                width={serviceImages[slug].width}
                height={serviceImages[slug].height}
                priority
                sizes="100vw"
              />
            </div>
          </div>
        </section>
      )}

      <section className="pb-[clamp(24px,3vw,40px)]">
        <div className="shell">
          <div data-reveal className="max-w-[70ch]">
            <Blocks blocks={doc.body} locale={locale} />
          </div>
        </div>
      </section>

      <RelatedLinks
        title={dict.common.labels.relatedParts}
        items={relatedParts}
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
          { name: dict.services.index.title, url: at(SECTIONS.services) },
          { name: doc.title, url: at(`${SECTIONS.services}/${slug}`) },
        ]}
      />
      <FaqJsonLd items={faqItems} />
    </>
  );
}
