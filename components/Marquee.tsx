interface Props {
  items: readonly string[];
  label?: string;
}

/**
 * Brand ticker. Two identical tracks scroll -100% for a seamless loop; pauses
 * on hover and freezes under reduced motion.
 */
export function Marquee({ items, label }: Props) {
  const track = [...items, ...items];

  return (
    <div
      className="group relative flex overflow-hidden border-y border-line bg-surface py-4"
      aria-label={label}
    >
      {[0, 1].map((copy) => (
        <ul
          key={copy}
          aria-hidden={copy === 1}
          className="animate-marquee flex shrink-0 items-center group-hover:[animation-play-state:paused] motion-reduce:animate-none"
        >
          {track.map((item, index) => (
            <li
              key={`${item}-${index}`}
              className="flex items-center whitespace-nowrap px-6 text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-ink-4"
            >
              {item}
              <span className="ml-6 size-1 rounded-full bg-accent" aria-hidden="true" />
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
