import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";

interface Props {
  eyebrow?: string;
  title: string;
  lead?: string;
  crumbs?: Crumb[];
  highlights?: string[];
  children?: React.ReactNode;
}

/** Inner-page hero. Text only — the ambient body glow does the visual work. */
export function PageHero({ eyebrow, title, lead, crumbs, highlights, children }: Props) {
  return (
    <section className="pb-[clamp(28px,4vw,48px)] pt-[calc(var(--nav-h)+clamp(48px,7vw,88px))]">
      <div className="shell">
        {crumbs?.length ? (
          <div data-reveal className="mb-7">
            <Breadcrumbs items={crumbs} />
          </div>
        ) : null}

        <div className="max-w-[860px]">
          {eyebrow && (
            <p data-reveal className="eyebrow mb-4">
              {eyebrow}
            </p>
          )}
          <h1 data-reveal className="h1 text-ink">
            {title}
          </h1>
          {lead && (
            <p data-reveal className="lead mt-6 max-w-[62ch]">
              {lead}
            </p>
          )}
        </div>

        {highlights?.length ? (
          <ul
            data-reveal
            className="mt-9 flex flex-wrap gap-2.5"
            aria-label={title}
          >
            {highlights.map((item) => (
              <li key={item} className="pill">
                {item}
              </li>
            ))}
          </ul>
        ) : null}

        {children}
      </div>
    </section>
  );
}
