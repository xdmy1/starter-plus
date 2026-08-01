"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { Icon } from "@/components/Icon";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { site } from "@/lib/site";
import type { Locale } from "@/lib/locales";
import type { NavItem } from "@/lib/nav";

interface Props {
  locale: Locale;
  nav: NavItem[];
  labels: { menu: string; close: string; call: string; quote: string };
  /** Pre-composed "Mon–Fri 09:00–18:00" for the utility strip. */
  hoursLine: string;
  langLabels: Record<Locale, string>;
}

export function Header({ locale, nav, labels, langLabels, hoursLine }: Props) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [drawer, setDrawer] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on navigation. Adjusting during render avoids a frame with the old
  // menu still open.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpenIndex(null);
    setDrawer(false);
  }

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpenIndex(null);
      setDrawer(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawer ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawer]);

  const openMenu = (index: number) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenIndex(index);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenIndex(null), 130);
  };

  const isActive = (href: string) =>
    href === `/${locale}` ? pathname === href : pathname.startsWith(href);

  const activeMenu =
    openIndex !== null && nav[openIndex]?.columns?.length ? nav[openIndex] : null;

  return (
    <>
      {/* Thin utility strip — phone + hours, the way trade sites do it. */}
      <div className="hidden border-b border-line bg-surface text-ink-3 md:block">
        <div className="shell flex h-9 items-center justify-between text-[0.8rem]">
          <span className="flex items-center gap-2">
            <Icon name="pin" size={13} />
            {site.address.street}, {site.address.city}
          </span>
          <span className="flex items-center gap-5">
            <span className="figure-mono">{hoursLine}</span>
            <a
              href={site.primaryPhone.href}
              className="flex items-center gap-2 font-medium text-ink transition-colors hover:text-accent-text"
            >
              <Icon name="phone" size={13} />
              <span className="figure-mono">{site.primaryPhone.display}</span>
            </a>
          </span>
        </div>
      </div>

      <header
        className={`sticky top-0 z-[90] border-b bg-surface/95 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? "border-line shadow-nav" : "border-line"
        }`}
        onMouseLeave={scheduleClose}
      >
        <div className="shell flex h-[var(--nav-h)] items-center justify-between gap-6">
          {/* brand */}
          <Link
            href={`/${locale}`}
            className="flex shrink-0 items-baseline gap-1"
            aria-label={site.name}
          >
<span className="text-[1.1rem] font-semibold uppercase leading-none tracking-[-0.01em] text-ink">
              Starter
            </span>
            <span className="bg-accent px-1.5 py-0.5 text-[1.1rem] font-semibold uppercase leading-none tracking-[-0.01em] text-accent-ink">
              Plus
            </span>
          </Link>

          {/* desktop nav — the mega panel is anchored to the nav, not the item,
              so a wide panel can't run off-screen at ~1024px */}
          <nav className="relative hidden items-center gap-1 lg:flex">
            {nav.map((item, index) => {
              const active = isActive(item.href);
              const hasMenu = Boolean(item.columns?.length);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-expanded={hasMenu ? openIndex === index : undefined}
                  aria-haspopup={hasMenu ? "true" : undefined}
                  onMouseEnter={() => (hasMenu ? openMenu(index) : setOpenIndex(null))}
                  onFocus={() => (hasMenu ? openMenu(index) : setOpenIndex(null))}
                  className={`relative flex items-center gap-1.5 px-3 py-2 text-[0.92rem] font-medium transition-colors duration-200 ${
                    active ? "text-ink" : "text-ink-3 hover:text-ink"
                  }`}
                >
                  {item.label}
                  {hasMenu && (
                    <Icon
                      name="chevronDown"
                      size={12}
                      className={`transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  )}
                  {active && (
                    <span className="absolute inset-x-3 -bottom-[1px] h-[2px] bg-accent" />
                  )}
                </Link>
              );
            })}

            {activeMenu && (
              <div
                className="absolute left-1/2 top-full -translate-x-1/2 pt-3"
                onMouseEnter={() => openIndex !== null && openMenu(openIndex)}
              >
                <div
                  className="rounded-card border border-line bg-surface p-5 shadow-lift"
                  style={{
                    width:
                      activeMenu.columns!.length > 1 ? "min(74vw, 720px)" : "340px",
                  }}
                >
                  <div
                    className={`grid gap-x-7 gap-y-5 ${
                      activeMenu.columns!.length > 1 ? "grid-cols-3" : "grid-cols-1"
                    }`}
                  >
                    {activeMenu.columns!.map((column, ci) => (
                      <div key={ci}>
                        {column.title && <p className="micro mb-2.5">{column.title}</p>}
                        <ul className="space-y-px">
                          {column.links.map((link) => (
                            <li key={link.href}>
                              <Link
                                href={link.href}
                                className="group/row block border-l-2 border-transparent py-1.5 pl-3 transition-colors duration-200 hover:border-accent"
                              >
                                <span className="min-w-0">
                                  <span className="block text-[0.9rem] font-medium tracking-[-0.014em] text-ink">
                                    {link.label}
                                  </span>
                                  {link.desc && (
                                    <span className="mt-0.5 block text-[0.79rem] leading-snug text-ink-3">
                                      {link.desc}
                                    </span>
                                  )}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </nav>

          {/* right cluster */}
          <div className="flex shrink-0 items-center gap-2">
            <LanguageSwitcher
              locale={locale}
              labels={langLabels}
              className="hidden sm:flex"
            />
            <Link
              href={`/${locale}/contacte`}
              className="btn btn-primary btn-sm hidden lg:inline-flex"
            >
              {labels.quote}
            </Link>
            <a
              href={site.primaryPhone.href}
              className="btn btn-accent btn-sm md:hidden"
              aria-label={labels.call}
            >
              <Icon name="phone" size={15} />
            </a>
            <button
              type="button"
              onClick={() => setDrawer(true)}
              aria-label={labels.menu}
              aria-expanded={drawer}
              className="grid size-9 place-items-center rounded-md border border-line-2 text-ink transition-colors hover:bg-ink hover:text-white lg:hidden"
            >
              <Icon name="menu" size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* mobile drawer */}
      <div
        onClick={() => setDrawer(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-[105] bg-ink/40 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${
          drawer ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        aria-hidden={!drawer}
        className={`fixed inset-y-0 right-0 z-[110] flex w-[min(90vw,380px)] flex-col overflow-y-auto bg-surface transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
          drawer ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
          <LanguageSwitcher locale={locale} labels={langLabels} />
          <button
            type="button"
            onClick={() => setDrawer(false)}
            aria-label={labels.close}
            className="grid size-9 place-items-center rounded-md border border-line-2 text-ink transition-colors hover:bg-ink hover:text-white"
          >
            <Icon name="close" size={17} />
          </button>
        </div>

        <nav className="flex-1 px-5 py-5">
          <ul className="space-y-0.5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block rounded-md px-3 py-2.5 text-[1rem] font-medium tracking-[-0.02em] transition-colors ${
                    isActive(item.href)
                      ? "bg-surface-2 text-ink"
                      : "text-ink-2 hover:bg-surface-2"
                  }`}
                >
                  {item.label}
                </Link>
                {item.columns?.length ? (
                  <ul className="mb-1.5 ml-3 mt-0.5 space-y-px border-l border-line pl-3">
                    {item.columns.flatMap((c) => c.links).map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="block rounded px-2 py-1.5 text-[0.88rem] text-ink-3 transition-colors hover:text-ink"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-2 border-t border-line px-5 py-4">
          {site.phones.map((phone) => (
            <a
              key={phone.raw}
              href={phone.href}
              className="flex items-center gap-2.5 text-[0.94rem] font-medium text-ink transition-colors hover:text-accent-text"
            >
              <Icon name="phone" size={15} className="text-ink-3" />
              <span className="figure-mono">{phone.display}</span>
            </a>
          ))}
          <Link href={`/${locale}/contacte`} className="btn btn-primary btn-block mt-3">
            {labels.quote}
          </Link>
        </div>
      </aside>
    </>
  );
}
