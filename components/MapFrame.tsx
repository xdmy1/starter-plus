import { Icon } from "@/components/Icon";
import { site } from "@/lib/site";

interface Props {
  title: string;
  routeLabel: string;
  className?: string;
}

/** Google Maps embed for str. Uzinelor 8/1. */
export function MapFrame({ title, routeLabel, className = "" }: Props) {
  return (
    <div className={`card relative overflow-hidden ${className}`} style={{ minHeight: 320 }}>
      <iframe
        src={site.mapsEmbedUrl}
        title={title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 size-full border-0"
      />
      <a
        href={site.mapsDirectionsUrl}
        target="_blank"
        rel="noreferrer"
        className="btn btn-primary btn-sm absolute bottom-4 left-1/2 -translate-x-1/2 shadow-lift"
      >
        {routeLabel}
        <Icon name="arrowUpRight" size={14} />
      </a>
    </div>
  );
}
