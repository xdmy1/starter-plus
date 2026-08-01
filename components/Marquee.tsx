import { brandLogos, otherBrands } from "@/content/images";

interface Props {
  label?: string;
  /** Quiet line under the strip, e.g. "and also:" */
  moreLabel?: string;
}

/*
 * Optical sizing. A single fixed height makes wide wordmarks (Bosch 4.5:1,
 * Denso 5:1) tower over near-square marks (INA 1:1, LuK 1.3:1), so height is
 * bucketed by aspect ratio to even out the visual weight instead.
 */
function logoHeight(ratio: number): number {
  if (ratio >= 3.5) return 22;
  if (ratio >= 1.8) return 28;
  return 40;
}

/**
 * Supplier brand strip: real transparent logos on the white band, scrolling.
 * Two identical tracks translate -100% for a seamless loop; it pauses on hover
 * and freezes under reduced motion.
 *
 * Logos are plain <img>: they are 1–6 KB transparent SVGs that need no
 * optimisation, and routing SVG through next/image would mean turning on
 * `dangerouslyAllowSVG` for no benefit.
 */
export function Marquee({ label, moreLabel }: Props) {
  const track = [...brandLogos, ...brandLogos];

  return (
    <section className="band-white" aria-label={label}>
      <div className="group relative flex overflow-hidden py-7">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1}
            className="animate-marquee flex shrink-0 items-center group-hover:[animation-play-state:paused] motion-reduce:animate-none"
          >
            {track.map((brand, index) => (
              <li
                key={`${brand.label}-${index}`}
                className="flex shrink-0 items-center px-[clamp(24px,3.5vw,52px)]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={brand.src}
                  alt={brand.label}
                  width={Math.round(logoHeight(brand.ratio) * brand.ratio)}
                  height={logoHeight(brand.ratio)}
                  style={{ height: logoHeight(brand.ratio) }}
                  loading="lazy"
                  decoding="async"
                  className="w-auto opacity-55 grayscale transition-[filter,opacity] duration-400 group-hover:opacity-100 group-hover:grayscale-0"
                />
              </li>
            ))}
          </ul>
        ))}
      </div>

      {/* The remaining stocked brands have no correct logo file in the public
          domain, so they are named rather than faked. */}
      <div className="shell border-t border-line py-3.5">
        <p className="flex flex-wrap items-baseline gap-x-2 gap-y-1 text-[0.78rem] text-ink-4">
          {moreLabel && <span className="micro !text-ink-4">{moreLabel}</span>}
          <span className="figure-mono">{otherBrands.join(" · ")}</span>
        </p>
      </div>
    </section>
  );
}
