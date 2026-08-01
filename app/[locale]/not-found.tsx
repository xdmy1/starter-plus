"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Icon } from "@/components/Icon";
import { notFoundCopy } from "@/content/notfound";
import { defaultLocale, isLocale, localePath } from "@/lib/locales";
import { site } from "@/lib/site";

export default function NotFound() {
  const pathname = usePathname();
  const first = pathname.split("/").filter(Boolean)[0] ?? "";
  const locale = isLocale(first) ? first : defaultLocale;
  const copy = notFoundCopy[locale];

  return (
    <section className="flex min-h-[72svh] items-center pt-[var(--nav-h)]">
      <div className="shell">
        <div className="max-w-[60ch]">
          <p className="h-display text-ink">404</p>
          <h1 className="h2 mt-4">{copy.title}</h1>
          <p className="lead mt-5">{copy.text}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link href={localePath(locale)} className="btn btn-accent">
              {copy.home}
              <Icon name="arrowRight" size={17} />
            </Link>
            <Link href={localePath(locale, "contacte")} className="btn btn-ghost">
              {copy.contact}
            </Link>
            <a href={site.primaryPhone.href} className="btn btn-ghost">
              <Icon name="phone" size={16} />
              {site.primaryPhone.display}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
