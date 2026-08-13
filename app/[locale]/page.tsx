import Image from "next/image";
import Link from "next/link";

import { CtaBand } from "@/components/CtaBand";
import { Hours } from "@/components/Hours";
import { Icon } from "@/components/Icon";
import { FaqJsonLd } from "@/components/JsonLd";
import { Marquee } from "@/components/Marquee";
import { OpenBadge } from "@/components/OpenBadge";
import { monthsWord } from "@/content/groups";
import { handoverImage, heroImage, serviceImages } from "@/content/images";
import { SECTIONS, services } from "@/content/taxonomy";
import { localePath } from "@/lib/locales";
import { loadPage } from "@/lib/page";
import { site } from "@/lib/site";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale, dict } = await loadPage(params);
  const { home, common } = dict;
  const at = (path: string) => localePath(locale, path);

  return (
    <>
      {/* ---------------------------------------------------------------- hero */}
      <section className="pb-[clamp(40px,5vw,64px)] pt-[clamp(36px,5vw,60px)]">
        <div className="shell">
          <div className="grid items-center gap-[clamp(28px,4vw,56px)] lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <div data-reveal className="mb-5 flex flex-wrap items-center gap-2.5">
                <span className="pill">
                  <Icon name="pin" size={13} />
                  {site.address.city}
                </span>
                <OpenBadge labels={common.labels} />
              </div>

              <h1 data-reveal className="h-display text-ink">
                {home.hero.title}{" "}
                <span className="mark">{home.hero.titleAccent}</span>
              </h1>

              {home.hero.boldLine && (
                <p
                  data-reveal
                  className="mt-5 text-[clamp(1.15rem,1.5vw,1.45rem)] font-semibold tracking-[-0.015em] text-ink"
                >
                  {home.hero.boldLine}
                </p>
              )}

              <p data-reveal className="lead mt-4 max-w-[48ch]">
                {home.hero.subtitle}
              </p>

              <div data-reveal className="mt-8 flex flex-wrap gap-3">
                <a href={site.primaryPhone.href} className="btn btn-accent">
                  <Icon name="phone" size={16} />
                  {home.hero.primaryCta}
                </a>
              </div>

              <ul
                data-reveal
                className="mt-9 grid gap-x-6 gap-y-2.5 sm:grid-cols-2"
              >
                {home.usp.slice(0, 4).map((item) => (
                  <li
                    key={item.title}
                    className="border-t border-line py-2.5 text-[0.9rem] text-ink-2"
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>

            {/* real photograph, not a generated graphic */}
            <div data-reveal className="relative">
              <div className="card media aspect-[4/5] w-full">
                <Image
                  src={heroImage.src}
                  alt={
                    locale === "ro"
                      ? "Angajat Starter Plus cu un demaror și un alternator în mâini, în fața atelierului"
                      : "Сотрудник Starter Plus со стартером и генератором в руках перед мастерской"
                  }
                  width={heroImage.width}
                  height={heroImage.height}
                  priority
                  sizes="(max-width: 1024px) 92vw, 46vw"
                  className="size-full object-cover"
                />
              </div>

              {/* warranty marker, overlapping the photo */}
              <div className="absolute -bottom-5 left-5 rounded-lg bg-accent px-5 py-3.5 shadow-lift sm:left-auto sm:right-6">
                <span className="figure-mono block whitespace-nowrap text-[1.35rem] font-medium leading-none tracking-[-0.02em] text-accent-ink">
                  {site.warranty.newMonths} {monthsWord[locale]}
                </span>
                <span className="mt-1 block text-[0.74rem] font-semibold uppercase tracking-[0.11em] text-accent-ink/70">
                  {common.labels.guarantee}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- stats strip */}
      <section className="band-white">
        <div className="shell">
          <dl className="grid divide-line sm:grid-cols-2 sm:divide-x lg:grid-cols-4">
            {home.hero.stats.map((stat, index) => (
              <div
                key={stat.label}
                data-reveal
                className={`py-7 sm:px-7 ${index === 0 ? "sm:pl-0" : ""} ${
                  index > 1 ? "border-t border-line sm:border-t-0 lg:border-t-0" : ""
                } ${index === 1 ? "border-t border-line sm:border-t-0" : ""}`}
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="figure-mono block text-[clamp(1.75rem,1.3rem+1.8vw,2.5rem)] font-medium tracking-[-0.02em] text-ink">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-[0.84rem] text-ink-3">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <Marquee
        label={home.brandsSection.title}
        moreLabel={locale === "ro" ? "și de asemenea" : "а также"}
      />

      {/* ------------------------------------------------------------ services */}
      <section className="section-tight">
        <div className="shell">
          <div data-reveal className="section-head">
            <p className="eyebrow">{home.servicesSection.eyebrow}</p>
            <h2 className="h2">{home.servicesSection.title}</h2>
            <p className="lead">{home.servicesSection.text}</p>
          </div>

          <div className="mt-[clamp(28px,3.5vw,44px)] grid gap-[clamp(16px,2vw,24px)] md:grid-cols-3">
            {services.map((service) => {
              const doc = dict.services.items[service.slug];
              const img = serviceImages[service.slug];
              if (!doc) return null;
              return (
                <Link
                  key={service.slug}
                  href={at(`${SECTIONS.services}/${service.slug}`)}
                  data-reveal
                  className="card card-hover group flex flex-col"
                >
                  {img && (
                    <div className="media aspect-[16/10]">
                      <Image
                        src={img.src}
                        alt={doc.short ?? doc.title}
                        width={img.width}
                        height={img.height}
                        sizes="(max-width: 768px) 92vw, 30vw"
                      />
                    </div>
                  )}
                  <div className="card-body flex flex-1 flex-col">
                    <h3 className="h3 text-ink">{doc.short ?? doc.title}</h3>
                    <p className="mt-2.5 flex-1 text-[0.92rem] text-ink-2">
                      {doc.excerpt}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-[0.86rem] font-medium text-ink">
                      {common.cta.more}
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
      </section>

      {/* ------------------------------------------------------------- process */}
      <section className="section-tight">
        <div className="shell">
          <div className="grid gap-[clamp(28px,4vw,64px)] lg:grid-cols-[0.85fr_1.15fr]">
            <div data-reveal className="section-head lg:sticky lg:top-28 lg:self-start">
              <p className="eyebrow">{home.processSection.eyebrow}</p>
              <h2 className="h2">{home.processSection.title}</h2>
              <p className="lead">{home.processSection.text}</p>
            </div>

            <div>
              {home.processSection.steps.map((step, index) => (
                <div key={step.title} data-reveal className="rule-row">
                  <span className="ordinal w-7 pt-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="h4 text-ink">{step.title}</h3>
                    <p className="mt-1.5 text-[0.92rem] text-ink-2">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- b2b + hours */}
      <section className="band-white section-tight">
        <div className="shell">
          <div className="grid gap-[clamp(20px,2.5vw,32px)] lg:grid-cols-[1.35fr_0.65fr]">
            <div data-reveal className="panel panel-quiet !p-0 overflow-hidden">
              <div className="media aspect-[21/9]">
                <Image
                  src={handoverImage.src}
                  alt={
                    locale === "ro"
                      ? "Predarea cheilor clientului în fața atelierului Starter Plus"
                      : "Передача ключей клиенту перед мастерской Starter Plus"
                  }
                  width={handoverImage.width}
                  height={handoverImage.height}
                  sizes="(max-width: 1024px) 92vw, 60vw"
                />
              </div>
              <div className="p-[clamp(24px,3vw,40px)]">
              <p className="eyebrow">{home.b2bSection.eyebrow}</p>
              <h2 className="h2 mt-2.5">{home.b2bSection.title}</h2>
              <p className="mt-4 max-w-[62ch] text-ink-2">{home.b2bSection.text}</p>

              <ul className="mt-6 grid gap-x-8 sm:grid-cols-2">
                {home.b2bSection.bullets.map((bullet) => (
                  <li key={bullet} className="rule-row items-start !py-3">
                    <span className="text-[0.92rem] text-ink-2">{bullet}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={at(`${SECTIONS.info}/persoane-juridice`)}
                className="btn btn-primary btn-sm mt-7"
              >
                {home.b2bSection.cta}
                <Icon name="arrowRight" size={15} />
              </Link>
              </div>
            </div>

            <div data-reveal className="panel">
              <p className="micro mb-4">{common.labels.workingHours}</p>
              <Hours labels={common.labels} />

              <p className="micro mb-3 mt-7">{common.labels.phones}</p>
              <ul className="space-y-2.5">
                {site.phones.map((phone) => (
                  <li key={phone.raw}>
                    <a
                      href={phone.href}
                      className="figure-mono flex items-center gap-2.5 text-[0.95rem] font-medium text-ink transition-colors hover:text-accent-text"
                    >
                      <Icon name="phone" size={15} className="text-ink-4" />
                      {phone.display}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- faq */}
      <section className="section-tight">
        <div className="shell">
          <div className="grid gap-[clamp(24px,4vw,64px)] lg:grid-cols-[0.8fr_1.2fr]">
            <div data-reveal className="section-head">
              <p className="eyebrow">{home.faqSection.eyebrow}</p>
              <h2 className="h2">{home.faqSection.title}</h2>
            </div>

            <div data-reveal>
              {home.faqSection.items.map((item) => (
                <details
                  key={item.q}
                  className="group border-t border-line last:border-b"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-[0.98rem] font-medium text-ink transition-colors hover:text-accent-text [&::-webkit-details-marker]:hidden">
                    {item.q}
                    <Icon
                      name="chevronDown"
                      size={16}
                      className="shrink-0 text-ink-4 transition-transform duration-300 group-open:rotate-180"
                    />
                  </summary>
                  <p className="pb-5 pr-8 text-[0.92rem] text-ink-2">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title={home.ctaBand.title}
        text={home.ctaBand.text}
        primary={home.ctaBand.primary}
      />

      <FaqJsonLd items={home.faqSection.items} />
    </>
  );
}
