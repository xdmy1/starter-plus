import Link from "next/link";

import { Icon } from "@/components/Icon";
import { localePath, type Locale } from "@/lib/locales";
import { site } from "@/lib/site";

interface Props {
  locale: Locale;
  title: string;
  text: string;
  primary: string;
  secondary: string;
}

/** Closing call to action, on a dark band so the light page has an end-stop. */
export function CtaBand({ locale, title, text, primary, secondary }: Props) {
  return (
    <section className="band-dark">
      <div className="shell py-[clamp(48px,6vw,84px)]">
        <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div data-reveal>
            <h2 className="h2">{title}</h2>
            <p className="mt-4 max-w-[52ch] text-white/60">{text}</p>
          </div>
          <div data-reveal className="flex flex-wrap gap-3 lg:justify-end">
            <a href={site.primaryPhone.href} className="btn btn-accent">
              <Icon name="phone" size={16} />
              {primary}: <span className="figure-mono">{site.primaryPhone.display}</span>
            </a>
            <Link href={localePath(locale, "contacte")} className="btn btn-ghost">
              {secondary}
              <Icon name="arrowRight" size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
