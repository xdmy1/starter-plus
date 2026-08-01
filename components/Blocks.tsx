import Image from "next/image";
import Link from "next/link";

import { Icon } from "@/components/Icon";
import type { Block } from "@/content/types";
import { localePath, type Locale } from "@/lib/locales";

interface Props {
  blocks: Block[];
  locale: Locale;
}

/** Renders the content model. Every block type in content/types.ts is handled here. */
export function Blocks({ blocks, locale }: Props) {
  return (
    <div className="prose-block">
      {blocks.map((block, index) => (
        <BlockView key={index} block={block} locale={locale} />
      ))}
    </div>
  );
}

function BlockView({ block, locale }: { block: Block; locale: Locale }) {
  switch (block.type) {
    case "p":
      return <p>{block.text}</p>;

    case "h2":
      return <h2 className="h3 md:text-[1.75rem]">{block.text}</h2>;

    case "h3":
      return <h3 className="h4 md:text-[1.25rem]">{block.text}</h3>;

    case "ul":
      return (
        <ul className="mt-5 space-y-2.5">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-ink-2">
              <Icon
                name="check"
                size={17}
                className="mt-1 shrink-0 text-accent-text"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );

    case "ol":
      return (
        <ol className="mt-5 space-y-3">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-4 text-ink-2">
              <span className="ordinal pt-0.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      );

    case "steps":
      return (
        <div className="mt-6">
          {block.items.map((item, i) => (
            <div key={i} className="rule-row flex-col sm:flex-row">
              <span className="ordinal sm:w-10 sm:pt-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="h4 !mt-0 text-ink">{item.title}</h3>
                <p className="mt-1.5 text-[0.95rem] text-ink-2">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      );

    case "table":
      return (
        <div className="mt-6 overflow-x-auto rounded-lg border border-line">
          <table className="w-full min-w-[420px] border-collapse text-left text-[0.92rem]">
            {block.head && (
              <thead>
                <tr>
                  {block.head.map((cell, i) => (
                    <th
                      key={i}
                      scope="col"
                      className="border-b border-line bg-surface-2 px-4 py-3 font-semibold text-ink"
                    >
                      {cell}
                    </th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} className={i > 0 ? "border-t border-line" : ""}>
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className={`px-4 py-3 align-top ${
                        ci === 0 ? "text-ink-3" : "font-medium text-ink"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "note":
      return (
        <aside className="mt-6 flex gap-4 rounded-lg border border-line border-l-[3px] border-l-accent bg-surface-2 p-5">
          <Icon name="warning" size={20} className="mt-0.5 shrink-0 text-accent-text" />
          <p className="!mt-0 text-[0.95rem] text-ink-2">{block.text}</p>
        </aside>
      );

    case "quote":
      return (
        <blockquote className="mt-6 border-l-2 border-accent pl-5 text-[1.05rem] italic text-ink">
          {block.text}
        </blockquote>
      );

    case "figure":
      return (
        <figure className="card mt-8 overflow-hidden">
          <Image
            src={block.src}
            width={block.width}
            height={block.height}
            alt={block.alt}
            sizes="(max-width: 768px) 100vw, 720px"
            className="h-auto w-full bg-surface-3"
          />
          {block.caption && (
            <figcaption className="border-t border-line px-5 py-3.5 text-[0.84rem] text-ink-3">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    case "faq":
      return (
        <div className="mt-8">
          {block.items.map((item, i) => (
            <details key={i} className="group border-t border-line last:border-b">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-[1rem] font-medium text-ink transition-colors hover:text-accent-text [&::-webkit-details-marker]:hidden">
                {item.q}
                <Icon
                  name="chevronDown"
                  size={17}
                  className="shrink-0 text-ink-4 transition-transform duration-300 group-open:rotate-180"
                />
              </summary>
              <p className="!mt-0 pb-5 pr-8 text-[0.95rem] text-ink-2">{item.a}</p>
            </details>
          ))}
        </div>
      );

    case "cta": {
      const href = /^(https?:|tel:|mailto:)/.test(block.href)
        ? block.href
        : localePath(locale, block.href);
      const external = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");

      return (
        <div className="panel panel-quiet mt-10">
          <h2 className="h3 !mt-0">{block.title}</h2>
          {block.text && (
            <p className="mt-3 max-w-[56ch] text-ink-2">{block.text}</p>
          )}
          <div className="mt-6 flex">
            {external ? (
              <a href={href} className="btn btn-accent">
                {block.label}
                <Icon name="arrowRight" size={17} />
              </a>
            ) : (
              <Link href={href} className="btn btn-accent">
                {block.label}
                <Icon name="arrowRight" size={17} />
              </Link>
            )}
          </div>
        </div>
      );
    }
  }
}
