import Image from "next/image";

import { Icon } from "@/components/Icon";

interface Props {
  alt: string;
  caption: string;
}

/**
 * Aerial photo of the industrial zone with the entrance route drawn on top:
 * a red line from str. Lunca Bâcului to the workshop gate, redrawn as an
 * animated SVG overlay aligned to the client's original Google Earth shot
 * (the photo has the same line baked in — the white casing covers it, so the
 * draw-in animation starts from a clean track).
 *
 * Coordinates live in the photo's pixel space (1590×550). If the photo is
 * ever re-cropped or replaced, retrace ROUTE and the marker/label positions.
 * ROUTE is duplicated as the CSS offset-path for the leading dot — keep both
 * in sync (globals.css, "Entrance route map").
 */
const ROUTE =
  "M 1199 317 C 1186 328 1170 341 1152 348.5 C 1105 345.5 1040 342 970 339.5 C 900 337.5 830 336 786 335.5 Q 766 336.5 757 349";

export function RouteMap({ alt, caption }: Props) {
  return (
    <figure className="card overflow-hidden">
      <div className="route-canvas">
        <Image
          src="/img/route-lunca-bacului.jpg"
          alt={alt}
          width={1590}
          height={550}
          sizes="(min-width: 640px) 92vw, 175vw"
          className="block size-full object-cover"
        />
        <svg
          viewBox="0 0 1590 550"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="absolute inset-0 size-full"
        >
          <path d={ROUTE} pathLength={1} className="route-casing" />
          <path d={ROUTE} pathLength={1} className="route-line" />
          <circle r={7} className="route-dot-lead" />
          <circle cx={1199} cy={317} r={6.5} className="route-start" />
          <circle cx={750} cy={326} r={26} className="route-pulse" />
          <g className="route-marker">
            <path d="M 735 346 L 765 346 L 750 372 Z" fill="#191817" />
            <circle cx={750} cy={326} r={29} className="route-marker-disc" />
            <image href="/img/logo-mark.png" x={731} y={307} width={38} height={38} />
          </g>
          <g className="route-tag">
            <rect x={676} y={367} width={150} height={32} rx={16} />
            <text x={751} y={389}>Starter Plus SRL</text>
          </g>
        </svg>
        <span className="route-credit">© Google Earth</span>
      </div>
      <figcaption className="flex items-start gap-3 border-t border-line p-5 text-[0.92rem] text-ink-2">
        <Icon name="pin" size={17} className="mt-0.5 shrink-0 text-accent-text" />
        {caption}
      </figcaption>
    </figure>
  );
}
