import type { Metadata } from "next";
import Link from "next/link";

import Image from "next/image";

import { Blocks } from "@/components/Blocks";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { serviceImages, servicesBanner } from "@/content/images";
import { SECTIONS, services } from "@/content/taxonomy";
import { localePath } from "@/lib/locales";
import { docMetadata, loadPage } from "@/lib/page";
import { site } from "@/lib/site";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale, dict } = await loadPage(params);
  return docMetadata(locale, dict.services.index, SECTIONS.services);
}

export default async function ServicesIndexPage({ params }: Params) {
  const { locale, dict } = await loadPage(params);
  const at = (path: string) => localePath(locale, path);
  const doc = dict.services.index;

  return (
    <>
      <PageHero
        eyebrow={dict.common.nav.services}
        title={doc.title}
        lead={doc.lead ?? doc.excerpt}
        highlights={doc.highlights}
        crumbs={[
          { label: dict.common.labels.breadcrumbHome, href: at("") },
          { label: doc.short ?? doc.title },
        ]}
      />

      <section className="pb-[clamp(28px,3.5vw,48px)]">
        <div className="shell">
          <div data-reveal className="card media aspect-[21/9]">
            <Image
              src={servicesBanner.src}
              alt={doc.short ?? doc.title}
              width={servicesBanner.width}
              height={servicesBanner.height}
              priority
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      <section className="section-tight !pt-0">
        <div className="shell">
          <div className="grid gap-[clamp(18px,2.2vw,28px)] lg:grid-cols-3">
            {services.map((service) => {
              const item = dict.services.items[service.slug];
              if (!item) return null;

              const phone =
                service.slug === "electrician-auto"
                  ? site.phones[2]
                  : site.phones[0];

              return (
                <article
                  key={service.slug}
                  data-reveal
                  className="card card-hover flex flex-col"
                >
                  {serviceImages[service.slug] && (
                    <div className="media aspect-[16/10]">
                      <Image
                        src={serviceImages[service.slug].src}
                        alt={item.short ?? item.title}
                        width={serviceImages[service.slug].width}
                        height={serviceImages[service.slug].height}
                        sizes="(max-width: 1024px) 92vw, 30vw"
                      />
                    </div>
                  )}
                  <div className="card-body flex flex-1 flex-col">
                  <h2 className="h3 text-ink">{item.short ?? item.title}</h2>
                  <p className="mt-3 text-[0.95rem] text-ink-2">{item.excerpt}</p>

                  {item.highlights?.length ? (
                    <ul className="mt-5 space-y-2">
                      {item.highlights.slice(0, 3).map((highlight) => (
                        <li
                          key={highlight}
                          className="flex gap-2.5 text-[0.86rem] text-ink-3"
                        >
                          <Icon
                            name="check"
                            size={15}
                            className="mt-1 shrink-0 text-accent-text"
                          />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  <div className="mt-auto flex flex-wrap items-center gap-3 pt-7">
                    <Link
                      href={at(`${SECTIONS.services}/${service.slug}`)}
                      className="btn btn-primary btn-sm"
                    >
                      {dict.common.cta.more}
                      <Icon name="arrowRight" size={15} />
                    </Link>
                    <a href={phone.href} className="btn btn-ghost btn-sm">
                      <Icon name="phone" size={14} />
                      <span className="figure-mono">{phone.display}</span>
                    </a>
                  </div>
                  </div>
                </article>
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
          { name: doc.title, url: at(SECTIONS.services) },
        ]}
      />
    </>
  );
}
