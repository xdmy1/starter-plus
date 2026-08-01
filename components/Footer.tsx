import Image from "next/image";
import Link from "next/link";

import { Hours } from "@/components/Hours";
import { Icon } from "@/components/Icon";
import { SECTIONS, infoPages, partCategories, services } from "@/content/taxonomy";
import type { Dictionary } from "@/content/types";
import { localePath, type Locale } from "@/lib/locales";
import { site } from "@/lib/site";

interface Props {
  locale: Locale;
  dict: Dictionary;
}

export function Footer({ locale, dict }: Props) {
  const at = (path: string) => localePath(locale, path);
  const { footer, nav, labels } = dict.common;
  const year = 2026;

  const label = (map: Record<string, { title: string; short?: string }>, slug: string) =>
    map[slug]?.short ?? map[slug]?.title ?? slug;

  const col = "text-[0.88rem] text-white/60 transition-colors hover:text-accent";

  return (
    <footer className="band-dark mt-auto">
      <div className="shell pt-[clamp(48px,6vw,76px)]">
        <div className="grid gap-[clamp(28px,4vw,48px)] lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          {/* brand + address */}
          <div>
            <Link href={at("")} className="flex items-center" aria-label={site.name}>
              <Image
                src="/img/logo-light.png"
                alt={site.name}
                width={760}
                height={193}
                className="h-[36px] w-auto"
              />
            </Link>

            <p className="mt-4 max-w-[34ch] text-[0.92rem] text-white/55">
              {footer.tagline}
            </p>

            <address className="mt-6 space-y-3 text-[0.9rem] not-italic">
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 text-white/75 transition-colors hover:text-accent"
              >
                <Icon name="pin" size={16} className="mt-0.5 shrink-0 text-accent" />
                <span>
                  {site.address.street}, {site.address.city}
                  <span className="block text-white/45">{labels.entranceNote}</span>
                </span>
              </a>

              {site.phones.map((phone) => (
                <a
                  key={phone.raw}
                  href={phone.href}
                  className="flex items-center gap-3 text-white/75 transition-colors hover:text-accent"
                >
                  <Icon name="phone" size={15} className="shrink-0 text-accent" />
                  <span className="figure-mono">{phone.display}</span>
                </a>
              ))}

              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 text-white/75 transition-colors hover:text-accent"
              >
                <Icon name="mail" size={15} className="shrink-0 text-accent" />
                {site.email}
              </a>
            </address>
          </div>

          {/* catalog */}
          <div>
            <h2 className="micro mb-4">{footer.catalogTitle}</h2>
            <ul className="space-y-2">
              {partCategories.map((category) => (
                <li key={category.slug}>
                  <Link href={at(`${SECTIONS.parts}/${category.slug}`)} className={col}>
                    {label(dict.parts.items, category.slug)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* services + info */}
          <div className="space-y-7">
            <div>
              <h2 className="micro mb-4">{footer.servicesTitle}</h2>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link href={at(`${SECTIONS.services}/${service.slug}`)} className={col}>
                      {label(dict.services.items, service.slug)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="micro mb-4">{footer.infoTitle}</h2>
              <ul className="space-y-2">
                {infoPages.map((page) => (
                  <li key={page.slug}>
                    <Link href={at(`${SECTIONS.info}/${page.slug}`)} className={col}>
                      {label(dict.info.items, page.slug)}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href={at(SECTIONS.articles)} className={col}>
                    {nav.articles}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* hours */}
          <div>
            <h2 className="micro mb-4">{footer.contactTitle}</h2>
            <Hours labels={labels} inverted />
            <a
              href={site.mapsDirectionsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost btn-sm mt-5"
            >
              {dict.common.cta.route}
              <Icon name="arrowUpRight" size={14} />
            </a>
          </div>
        </div>

        <div className="mt-[clamp(32px,4vw,52px)] flex flex-col gap-3 border-t border-line-inv py-6 text-[0.8rem] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {footer.madeBy}. {footer.rights}
          </p>
          <p className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>{footer.legalNote}</span>
            <Link href={at("credite")} className="transition-colors hover:text-accent">
              {locale === "ro" ? "Credite foto" : "Фото: источники"}
            </Link>
            <a
              href="https://landings.md"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-accent"
            >
              Creare website - landings.md
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
