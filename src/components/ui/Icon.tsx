import type { SVGProps } from "react";

export type IconName =
  | "code" | "cart" | "app" | "mobile" | "megaphone" | "meta" | "google"
  | "search" | "share" | "palette" | "diamond" | "layout" | "wrench"
  | "gauge" | "target" | "shield" | "spark"
  | "arrow-right" | "arrow-up-right" | "check" | "star" | "menu" | "x"
  | "sun" | "moon" | "chevron-down" | "minus" | "plus" | "quote"
  | "sparkles" | "brackets" | "bolt" | "globe" | "clock" | "calendar";

const PATHS: Record<IconName, React.ReactNode> = {
  code: <><path d="m8 6-6 6 6 6" /><path d="m16 6 6 6-6 6" /></>,
  cart: <><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.5 3h2l2.5 13.5a2 2 0 0 0 2 1.5h8a2 2 0 0 0 2-1.5L22 7H6" /></>,
  app: <><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /></>,
  mobile: <><rect x="6" y="2" width="12" height="20" rx="2.5" /><path d="M11 18h2" /></>,
  megaphone: <><path d="m3 11 15-5v12L3 13v-2z" /><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" /><path d="M18 8a3 3 0 0 1 0 6" /></>,
  meta: <><path d="M2 12c2.5-6 5.5-6 8-1s5.5 5 8 1" /><path d="M6 18c-2.5-3-2.5-9 0-12" opacity="0" /></>,
  google: <><path d="M12 8v8" /><path d="m8.5 10 7 4" /><path d="m8.5 14 7-4" /><circle cx="12" cy="12" r="9.5" /></>,
  search: <><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></>,
  share: <><circle cx="18" cy="5" r="2.5" /><circle cx="6" cy="12" r="2.5" /><circle cx="18" cy="19" r="2.5" /><path d="m8.2 10.8 7.6-4.6" /><path d="m8.2 13.2 7.6 4.6" /></>,
  palette: <><path d="M12 2a10 10 0 1 0 0 20c1.3 0 2-1 2-2 0-1.2-1-1.5-1-2.5 0-.8.7-1.5 1.5-1.5H17a5 5 0 0 0 5-5c0-5-4.5-9-10-9z" /><circle cx="7.5" cy="10.5" r="1" /><circle cx="12" cy="7.5" r="1" /><circle cx="16.5" cy="10.5" r="1" /></>,
  diamond: <><path d="M12 2 22 9l-10 13L2 9l10-7z" /><path d="M2 9h20" /><path d="m8 2 4 20 4-20" opacity=".5" /></>,
  layout: <><rect x="3" y="3" width="18" height="18" rx="2.5" /><path d="M3 9h18" /><path d="M9 21V9" /></>,
  wrench: <><path d="M14.5 5.5a4 4 0 0 0-5 5L3 17l4 4 6.5-6.5a4 4 0 0 0 5-5l-2.7 2.7-2.3-.6-.6-2.3 2.6-2.5z" /></>,
  gauge: <><path d="M12 14 15 9" /><path d="M3.5 16a9 9 0 1 1 17 0" /><circle cx="12" cy="14" r="1.3" /></>,
  target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.3" /></>,
  shield: <><path d="M12 2.5 20 6v6c0 5-3.5 8-8 9.5C7.5 20 4 17 4 12V6l8-3.5z" /><path d="m9 12 2 2 4-4.5" /></>,
  spark: <><path d="M12 2v6" /><path d="M12 16v6" /><path d="M2 12h6" /><path d="M16 12h6" /><path d="m5 5 3.5 3.5" /><path d="m15.5 15.5 3.5 3.5" /><path d="m19 5-3.5 3.5" /><path d="m8.5 15.5-3.5 3.5" /></>,
  "arrow-right": <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
  "arrow-up-right": <><path d="M7 17 17 7" /><path d="M8 7h9v9" /></>,
  check: <path d="m4 12.5 5 5 11-11" />,
  star: <path d="m12 3 2.6 5.6 6 .8-4.4 4.2 1.1 6L12 18.8 6.7 19.6l1.1-6L3.4 9.4l6-.8L12 3z" />,
  menu: <><path d="M3 6h18" /><path d="M3 12h18" /><path d="M3 18h18" /></>,
  x: <><path d="M6 6l12 12" /><path d="M18 6 6 18" /></>,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.9 4.9 1.4 1.4" /><path d="m17.7 17.7 1.4 1.4" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.3 17.7-1.4 1.4" /><path d="m19.1 4.9-1.4 1.4" /></>,
  moon: <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />,
  "chevron-down": <path d="m6 9 6 6 6-6" />,
  minus: <path d="M5 12h14" />,
  plus: <><path d="M12 5v14" /><path d="M5 12h14" /></>,
  quote: <><path d="M10 11H6a2 2 0 0 1 0-4c1 0 2-.5 2-2" /><path d="M20 11h-4a2 2 0 0 1 0-4c1 0 2-.5 2-2" /><path d="M6 11v3a3 3 0 0 0 3 3" opacity="0" /></>,
  sparkles: <><path d="M12 3l1.8 4.7L18.5 9l-4.7 1.3L12 15l-1.8-4.7L5.5 9l4.7-1.3L12 3z" /><path d="M18 15l.9 2.3L21 18l-2.1.7L18 21l-.9-2.3L15 18l2.1-.7L18 15z" /></>,
  brackets: <><path d="M8 4H6a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2 2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h2" /><path d="M16 4h2a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2 2 2 0 0 0-2 2v4a2 2 0 0 1-2 2h-2" /></>,
  bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />,
  globe: <><circle cx="12" cy="12" r="9.5" /><path d="M2.5 12h19" /><path d="M12 2.5c2.8 3 4 6.5 4 9.5s-1.2 6.5-4 9.5c-2.8-3-4-6.5-4-9.5s1.2-6.5 4-9.5z" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 9h18" /><path d="M8 3v4" /><path d="M16 3v4" /></>,
};

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
  size?: number;
};

export function Icon({ name, size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {PATHS[name]}
    </svg>
  );
}
