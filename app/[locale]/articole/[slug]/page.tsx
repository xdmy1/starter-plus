import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Blocks } from "@/components/Blocks";
import { CtaBand } from "@/components/CtaBand";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SECTIONS, articles } from "@/content/taxonomy";
import { htmlLang, localePath } from "@/lib/locales";
import { docMetadata, loadPage } from "@/lib/page";

type Params = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const { locale, dict } = await loadPage(params);
  const doc = dict.articles.items[slug];
  if (!doc) return {};
  return {
    ...docMetadata(locale, doc, `${SECTIONS.articles}/${slug}`),
    openGraph: {
      type: "article",
      title: doc.seo.title,
      description: doc.seo.description,
      url: localePath(locale, `${SECTIONS.articles}/${slug}`),
      publishedTime: doc.date,
    },
  };
}

export default async function ArticlePage({ params }: Params) {
  const { slug } = await params;
  const { locale, dict } = await loadPage(params);

  const entry = articles.find((article) => article.slug === slug);
  const doc = dict.articles.items[slug];
  if (!entry || !doc) notFound();

  const at = (path: string) => localePath(locale, path);

  const date = new Intl.DateTimeFormat(htmlLang[locale], {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(`${doc.date}T12:00:00Z`));

  const others = articles
    .filter((article) => article.slug !== slug)
    .slice(0, 4)
    .map((article) => {
      const other = dict.articles.items[article.slug];
      if (!other) return null;
      return {
        label: other.short ?? other.title,
        href: at(`${SECTIONS.articles}/${article.slug}`),
        icon: article.icon,
      };
    })
    .filter((item): item is NonNullable<typeof item> => item !== null);

  return (
    <>
      <PageHero
        eyebrow={`${date} · ${doc.readingMinutes} min`}
        title={doc.title}
        lead={doc.lead ?? doc.excerpt}
        crumbs={[
          { label: dict.common.labels.breadcrumbHome, href: at("") },
          {
            label: dict.articles.index.short ?? dict.articles.index.title,
            href: at(SECTIONS.articles),
          },
          { label: doc.short ?? doc.title },
        ]}
      />

      <article className="pb-[clamp(24px,3vw,40px)]">
        <div className="shell">
          <div data-reveal className="max-w-[72ch]">
            <Blocks blocks={doc.body} locale={locale} />
          </div>
        </div>
      </article>

      <RelatedLinks
        title={dict.articles.index.short ?? dict.articles.index.title}
        items={others}
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
          { name: dict.articles.index.title, url: at(SECTIONS.articles) },
          { name: doc.title, url: at(`${SECTIONS.articles}/${slug}`) },
        ]}
      />
      <ArticleJsonLd
        locale={locale}
        title={doc.title}
        description={doc.seo.description}
        date={doc.date}
        url={at(`${SECTIONS.articles}/${slug}`)}
      />
    </>
  );
}
