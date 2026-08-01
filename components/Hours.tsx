import { hourGroups } from "@/lib/site";
import type { Common } from "@/content/types";

interface Props {
  labels: Common["labels"];
  /** Use on dark bands. */
  inverted?: boolean;
  className?: string;
}

/** Mon–Fri / Sat / Sun as hairline-ruled rows rather than a boxed table. */
export function Hours({ labels, inverted = false, className = "" }: Props) {
  const dayLabel = { monFri: labels.monFri, sat: labels.sat, sun: labels.sun };

  const rule = inverted ? "border-line-inv" : "border-line";
  const dim = inverted ? "text-white/50" : "text-ink-3";
  const strong = inverted ? "text-white" : "text-ink";
  const closed = inverted ? "text-white/35" : "text-ink-4";

  return (
    <dl className={`text-[0.88rem] ${className}`}>
      {hourGroups.map((group, index) => (
        <div
          key={group.key}
          className={`flex items-baseline justify-between gap-4 py-2 ${
            index > 0 ? `border-t ${rule}` : ""
          }`}
        >
          <dt className={dim}>{dayLabel[group.key]}</dt>
          <dd
            className={`figure-mono font-medium ${group.open ? strong : closed}`}
          >
            {group.open ? `${group.open} – ${group.close}` : labels.dayOff}
          </dd>
        </div>
      ))}
    </dl>
  );
}
