import type { Metadata } from "next";
import Link from "next/link";

import { Blocks } from "@/components/Blocks";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SECTIONS, infoPages } from "@/content/taxonomy";
import { localePath } from "@/lib/locales";
import { docMetadata, loadPage } from "@/lib/page";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale, dict } = await loadPage(params);
  return docMetadata(locale, dict.info.index, SECTIONS.info);
}

export default async function InfoIndexPage({ params }: Params) {
  const { locale, dict } = await loadPage(params);
  const at = (path: string) => localePath(locale, path);
  const doc = dict.info.index;

  return (
    <>
      <PageHero
        eyebrow={dict.common.nav.info}
        title={doc.title}
        lead={doc.lead ?? doc.excerpt}
        highlights={doc.highlights}
        crumbs={[
          { label: dict.common.labels.breadcrumbHome, href: at("") },
          { label: doc.short ?? doc.title },
        ]}
      />

      <section className="section-tight !pt-0">
        <div className="shell">
          <div className="grid gap-[clamp(16px,2vw,24px)] sm:grid-cols-2">
            {infoPages.map((page) => {
              const item = dict.info.items[page.slug];
              if (!item) return null;

              return (
                <Link
                  key={page.slug}
                  href={at(`${SECTIONS.info}/${page.slug}`)}
                  data-reveal
                  className="card card-hover group flex items-start gap-5 p-6"
                >
                  <span className="min-w-0 flex-1">
                    <span className="block text-[1.05rem] font-medium tracking-[-0.022em] text-ink">
                      {item.short ?? item.title}
                    </span>
                    <span className="mt-2 block text-[0.9rem] leading-snug text-ink-2">
                      {item.excerpt}
                    </span>
                  </span>
                  <Icon
                    name="arrowRight"
                    size={18}
                    className="mt-3 shrink-0 text-ink-4 transition-all duration-500 group-hover:translate-x-1 group-hover:text-accent"
                  />
                </Link>
              );
            })}
          </div>

          {doc.body.length > 0 && (
            <div data-reveal className="mt-14 max-w-[70ch]">
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
          { name: doc.title, url: at(SECTIONS.info) },
        ]}
      />
    </>
  );
}
