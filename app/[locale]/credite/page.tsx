import type { Metadata } from "next";

import { PageHero } from "@/components/PageHero";
import { credits, creditsPage } from "@/content/images";
import { localePath } from "@/lib/locales";
import { loadPage } from "@/lib/page";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await loadPage(params);
  const copy = creditsPage[locale];
  return {
    title: copy.title,
    description: copy.lead.slice(0, 160),
    alternates: {
      canonical: localePath(locale, "credite"),
      languages: {
        ro: localePath("ro", "credite"),
        ru: localePath("ru", "credite"),
      },
    },
    robots: { index: false, follow: true },
  };
}

export default async function CreditsPage({ params }: Params) {
  const { locale, dict } = await loadPage(params);
  const copy = creditsPage[locale];
  const at = (path: string) => localePath(locale, path);

  return (
    <>
      <PageHero
        title={copy.title}
        lead={copy.lead}
        crumbs={[
          { label: dict.common.labels.breadcrumbHome, href: at("") },
          { label: copy.title },
        ]}
      />

      <section className="pb-[clamp(48px,6vw,88px)]">
        <div className="shell">
          <div className="overflow-x-auto rounded-lg border border-line bg-surface">
            <table className="w-full min-w-[640px] border-collapse text-left text-[0.9rem]">
              <thead>
                <tr>
                  <th scope="col" className="border-b border-line bg-surface-2 px-4 py-3 font-semibold text-ink">
                    {copy.file}
                  </th>
                  <th scope="col" className="border-b border-line bg-surface-2 px-4 py-3 font-semibold text-ink">
                    {copy.author}
                  </th>
                  <th scope="col" className="border-b border-line bg-surface-2 px-4 py-3 font-semibold text-ink">
                    {copy.licence}
                  </th>
                  <th scope="col" className="border-b border-line bg-surface-2 px-4 py-3 font-semibold text-ink">
                    {copy.source}
                  </th>
                </tr>
              </thead>
              <tbody>
                {credits.map((credit) => (
                  <tr key={credit.title} className="border-t border-line align-top">
                    <td className="px-4 py-3">
                      <span className="block text-ink">{credit.title}</span>
                      <span className="figure-mono mt-1 block text-[0.78rem] text-ink-3">
                        {credit.files.join(", ")}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-ink-2">{credit.author}</td>
                    <td className="px-4 py-3">
                      <span className="pill">{credit.licence}</span>
                    </td>
                    <td className="px-4 py-3">
                      <a
                        href={credit.source}
                        target="_blank"
                        rel="noreferrer"
                        className="link-underline text-[0.85rem] break-all"
                      >
                        {credit.source.replace(/^https?:\/\//, "").slice(0, 46)}…
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
