import type { Metadata } from "next";
import Link from "next/link";

import { Blocks } from "@/components/Blocks";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import Image from "next/image";

import { partGroupLabels } from "@/content/groups";
import { partImages } from "@/content/images";
import { SECTIONS, partCategories } from "@/content/taxonomy";
import { localePath } from "@/lib/locales";
import { docMetadata, loadPage } from "@/lib/page";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale, dict } = await loadPage(params);
  return docMetadata(locale, dict.parts.index, SECTIONS.parts);
}

export default async function PartsIndexPage({ params }: Params) {
  const { locale, dict } = await loadPage(params);
  const at = (path: string) => localePath(locale, path);
  const doc = dict.parts.index;
  const groups = partGroupLabels[locale];

  return (
    <>
      <PageHero
        eyebrow={dict.common.nav.parts}
        title={doc.title}
        lead={doc.lead ?? doc.excerpt}
        highlights={doc.highlights}
        crumbs={[
          { label: dict.common.labels.breadcrumbHome, href: at("") },
          { label: doc.short ?? doc.title },
        ]}
      />

      <section className="section-tight !pt-0">
        <div className="shell space-y-12">
          {(["starter", "alternator", "shared"] as const).map((group) => {
            const items = partCategories.filter((c) => c.group === group);
            if (!items.length) return null;

            return (
              <div key={group}>
                <h2 data-reveal className="micro mb-5">
                  {groups[group]}
                </h2>
                <div className="grid gap-[clamp(16px,2vw,24px)] sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((category) => {
                    const item = dict.parts.items[category.slug];
                    const img = partImages[category.slug];
                    if (!item) return null;

                    return (
                      <Link
                        key={category.slug}
                        href={at(`${SECTIONS.parts}/${category.slug}`)}
                        data-reveal
                        className="card card-hover group flex flex-col"
                      >
                        {img && (
                          <div
                            className={`media aspect-[16/10] ${img.plate ? "media-plate" : ""}`}
                          >
                            <Image
                              src={img.src}
                              alt={item.short ?? item.title}
                              width={img.width}
                              height={img.height}
                              sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 30vw"
                            />
                          </div>
                        )}
                        <div className="card-body flex flex-1 flex-col">
                          <h3 className="h3 text-ink">{item.short ?? item.title}</h3>
                          <p className="mt-2.5 flex-1 text-[0.92rem] text-ink-2">
                            {item.excerpt}
                          </p>
                          <span className="mt-5 inline-flex items-center gap-2 text-[0.86rem] font-medium text-ink">
                            {dict.common.cta.more}
                            <Icon
                              name="arrowRight"
                              size={15}
                              className="text-accent-text transition-transform duration-400 group-hover:translate-x-1"
                            />
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {doc.body.length > 0 && (
            <div data-reveal className="max-w-[68ch]">
              <Blocks blocks={doc.body} locale={locale} />
            </div>
          )}
        </div>
      </section>

      <CtaBand
        title={dict.home.ctaBand.title}
        text={dict.home.ctaBand.text}
        primary={dict.home.ctaBand.primary}
      />

      <BreadcrumbJsonLd
        items={[
          { name: dict.common.labels.breadcrumbHome, url: at("") },
          { name: doc.title, url: at(SECTIONS.parts) },
        ]}
      />
    </>
  );
}
