import type { Metadata } from "next";

import { Blocks } from "@/components/Blocks";
import { ContactForm } from "@/components/ContactForm";
import { Hours } from "@/components/Hours";
import { Icon } from "@/components/Icon";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/JsonLd";
import { MapFrame } from "@/components/MapFrame";
import { OpenBadge } from "@/components/OpenBadge";
import { PageHero } from "@/components/PageHero";
import { SECTIONS } from "@/content/taxonomy";
import { isContactDeliveryConfigured } from "@/lib/contact";
import { localePath } from "@/lib/locales";
import { docMetadata, loadPage } from "@/lib/page";
import { site } from "@/lib/site";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale, dict } = await loadPage(params);
  return docMetadata(locale, dict.contact, SECTIONS.contact);
}

export default async function ContactPage({ params }: Params) {
  const { locale, dict } = await loadPage(params);
  const at = (path: string) => localePath(locale, path);
  const doc = dict.contact;
  const { labels, cta, form } = dict.common;

  const faqBlock = doc.body.find((block) => block.type === "faq");
  const faqItems = faqBlock?.type === "faq" ? faqBlock.items : [];

  const roleLabel: Record<string, string> = {
    repairs: dict.services.items["reparatii-demaroare"]?.short ?? "",
    autoElectric: dict.services.items["electrician-auto"]?.short ?? "",
  };

  return (
    <>
      <PageHero
        eyebrow={dict.common.nav.contact}
        title={doc.title}
        lead={doc.lead ?? doc.excerpt}
        crumbs={[
          { label: labels.breadcrumbHome, href: at("") },
          { label: doc.short ?? doc.title },
        ]}
      >
        <div data-reveal className="mt-8">
          <OpenBadge labels={labels} />
        </div>
      </PageHero>

      {/* form + contact tiles */}
      <section className="section-tight !pt-0">
        <div className="shell">
          <div className="grid gap-[clamp(20px,3vw,40px)] lg:grid-cols-2">
            <div data-reveal>
              <ContactForm
                form={form}
                cta={{ send: cta.send, sending: cta.sending }}
                mode={isContactDeliveryConfigured() ? "api" : "compose"}
              />
            </div>

            <div className="flex flex-col gap-[clamp(14px,1.6vw,18px)]">
              {/* address */}
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noreferrer"
                data-reveal
                className="card card-hover flex items-start gap-4 p-6"
              >
                <span>
                  <span className="micro block">{labels.address}</span>
                  <span className="mt-1.5 block text-[1.02rem] font-medium tracking-[-0.015em] text-ink">
                    {site.address.street}, {site.address.city}
                  </span>
                  <span className="mt-1 block text-[0.86rem] text-ink-3">
                    {labels.entranceNote}
                  </span>
                </span>
              </a>

              {/* phones */}
              <div data-reveal className="card p-6">
                <span className="micro block">{labels.phones}</span>
                <ul className="mt-3 space-y-3">
                  {site.phones.map((phone) => (
                    <li key={phone.raw}>
                      <a
                        href={phone.href}
                        className="group/tile flex items-center justify-between gap-4"
                      >
                        <span className="flex items-center gap-3">
                          <Icon name="phone" size={16} className="text-accent" />
                          <span className="figure-mono text-[1.02rem] font-medium text-ink transition-colors group-hover/tile:text-accent-text">
                            {phone.display}
                          </span>
                        </span>
                        <span className="text-[0.78rem] text-ink-4">
                          {roleLabel[phone.role]}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2.5 border-t border-line pt-5">
                  <a
                    href={`https://wa.me/${site.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-ghost btn-sm"
                  >
                    <Icon name="whatsapp" size={15} />
                    WhatsApp
                  </a>
                  <a href={`mailto:${site.email}`} className="btn btn-ghost btn-sm">
                    <Icon name="mail" size={15} />
                    {site.email}
                  </a>
                </div>
              </div>

              {/* hours */}
              <div data-reveal className="card p-6">
                <span className="micro block">{labels.workingHours}</span>
                <Hours labels={labels} className="mt-3" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* map */}
      <section className="pb-[clamp(40px,6vw,72px)]">
        <div className="shell">
          <h2 data-reveal className="micro mb-5">
            {labels.findUs}
          </h2>
          <div data-reveal>
            <MapFrame
              title={`${site.name} — ${site.address.street}, ${site.address.city}`}
              routeLabel={cta.route}
              className="!min-h-[420px]"
            />
          </div>
        </div>
      </section>

      {/* page copy */}
      {doc.body.length > 0 && (
        <section className="pb-[clamp(40px,6vw,72px)]">
          <div className="shell">
            <div data-reveal className="max-w-[72ch]">
              <Blocks blocks={doc.body} locale={locale} />
            </div>
          </div>
        </section>
      )}

      <BreadcrumbJsonLd
        items={[
          { name: labels.breadcrumbHome, url: at("") },
          { name: doc.title, url: at(SECTIONS.contact) },
        ]}
      />
      <FaqJsonLd items={faqItems} />
    </>
  );
}
