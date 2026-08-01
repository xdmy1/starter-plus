import type { SVGProps } from "react";

/**
 * Functional glyphs only — phone, address, mail, navigation, form state.
 *
 * There are deliberately no decorative "category" icons: every part category and
 * service has a real photograph, and a grid of invented part glyphs is one of the
 * things that makes a page look generated rather than made.
 */
const paths: Record<string, React.ReactNode> = {
  phone: (
    <path d="M6.5 3.5h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A15.5 15.5 0 0 1 4.5 5.5a2 2 0 0 1 2-2Z" />
  ),
  mail: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="1" />
      <path d="m3.5 6.5 8.5 6 8.5-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  arrowRight: <path d="M4 12h15m-6-6 6 6-6 6" />,
  arrowUpRight: <path d="M7 17 17 7M8.5 7H17v8.5" />,
  chevronDown: <path d="m5 9 7 7 7-7" />,
  menu: <path d="M3 7h18M3 12h18M3 17h18" />,
  close: <path d="M5 5l14 14M19 5 5 19" />,
  check: <path d="m4.5 12.5 5 5 10-11" />,
  warning: (
    <>
      <path d="M12 4 2.5 20h19L12 4Z" />
      <path d="M12 10v4.5M12 17.5v.01" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M20.5 11.7a8.4 8.4 0 0 1-12.3 7.4L3.5 20.5l1.4-4.6A8.4 8.4 0 1 1 20.5 11.7Z" />
      <path d="M8.8 8.6c.5-.2 1 .1 1.2.6l.5 1.1c.1.3 0 .6-.2.8l-.5.4c.4 1 1.2 1.8 2.2 2.2l.4-.5c.2-.2.5-.3.8-.2l1.1.5c.5.2.8.7.6 1.2-.3.9-1.3 1.3-2.2 1a8 8 0 0 1-4.9-4.9c-.3-.9.1-1.9 1-2.2Z" />
    </>
  ),
};

interface Props extends SVGProps<SVGSVGElement> {
  name: string;
  size?: number;
}

export function Icon({ name, size = 18, ...rest }: Props) {
  const d = paths[name] ?? paths.arrowRight;
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {d}
    </svg>
  );
}
