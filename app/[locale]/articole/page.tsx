import type { Metadata } from "next";
import Link from "next/link";

import { Blocks } from "@/components/Blocks";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SECTIONS, articles } from "@/content/taxonomy";
import { htmlLang, localePath } from "@/lib/locales";
import { docMetadata, loadPage } from "@/lib/page";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale, dict } = await loadPage(params);
  return docMetadata(locale, dict.articles.index, SECTIONS.articles);
}

export default async function ArticlesIndexPage({ params }: Params) {
  const { locale, dict } = await loadPage(params);
  const at = (path: string) => localePath(locale, path);
  const doc = dict.articles.index;

  const formatDate = (iso: string) =>
    new Intl.DateTimeFormat(htmlLang[locale], {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(`${iso}T12:00:00Z`));

  // Newest first.
  const ordered = [...articles].sort((a, b) => {
    const da = dict.articles.items[a.slug]?.date ?? "";
    const db = dict.articles.items[b.slug]?.date ?? "";
    return db.localeCompare(da);
  });

  return (
    <>
      <PageHero
        eyebrow={dict.common.nav.articles}
        title={doc.title}
        lead={doc.lead ?? doc.excerpt}
        crumbs={[
          { label: dict.common.labels.breadcrumbHome, href: at("") },
          { label: doc.short ?? doc.title },
        ]}
      />

      <section className="section-tight !pt-0">
        <div className="shell">
          <div className="grid gap-[clamp(16px,2vw,24px)] md:grid-cols-2 lg:grid-cols-3">
            {ordered.map((entry) => {
              const item = dict.articles.items[entry.slug];
              if (!item) return null;

              return (
                <Link
                  key={entry.slug}
                  href={at(`${SECTIONS.articles}/${entry.slug}`)}
                  data-reveal
                  className="card card-hover card-body group flex flex-col"
                >
                  {item.tag && <span className="micro">{item.tag}</span>}

                  <h2 className="h3 mt-2.5 text-ink">{item.short ?? item.title}</h2>
                  <p className="mt-3 flex-1 text-[0.92rem] text-ink-2">
                    {item.excerpt}
                  </p>

                  <div className="mt-6 flex items-center justify-between gap-4 border-t border-line pt-4 text-[0.8rem] text-ink-4">
                    <time dateTime={item.date}>{formatDate(item.date)}</time>
                    <span className="inline-flex items-center gap-2 font-medium text-ink">
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
          { name: doc.title, url: at(SECTIONS.articles) },
        ]}
      />
    </>
  );
}
