import Link from "next/link";

import { Icon } from "@/components/Icon";

export interface RelatedItem {
  label: string;
  href: string;
  icon?: string;
  desc?: string;
}

interface Props {
  title: string;
  items: RelatedItem[];
  columns?: 2 | 3 | 4;
}

/** Cross-links between a part category and the services that use it, and back. */
export function RelatedLinks({ title, items, columns = 3 }: Props) {
  if (!items.length) return null;

  const grid =
    columns === 2
      ? "sm:grid-cols-2"
      : columns === 4
        ? "sm:grid-cols-2 lg:grid-cols-4"
        : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="section-tight">
      <div className="shell">
        <h2 data-reveal className="micro mb-5">
          {title}
        </h2>
        <div className={`grid gap-[clamp(14px,1.6vw,20px)] ${grid}`}>
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              data-reveal
              className="card card-hover group flex items-start gap-4 p-4"
            >
              <span className="min-w-0 flex-1">
                <span className="block text-[0.98rem] font-medium tracking-[-0.02em] text-ink">
                  {item.label}
                </span>
                {item.desc && (
                  <span className="mt-1 block text-[0.82rem] leading-snug text-ink-3">
                    {item.desc}
                  </span>
                )}
              </span>
              <Icon
                name="arrowRight"
                size={17}
                className="mt-3 shrink-0 text-ink-4 transition-all duration-400 group-hover:translate-x-0.5 group-hover:text-ink"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
