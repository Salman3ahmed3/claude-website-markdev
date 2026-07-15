import { cn } from "@/lib/utils";

/**
 * MarkDev logo lockup — a blue mark holding an upward "M / check" glyph,
 * flanked by the code-bracket motif, with the MARKDEV wordmark.
 */
export function LogoMark({
  className,
  size = 34,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* left bracket */}
      <path
        d="M11 6c-3 0-4 1.6-4 4.4V19c0 2-1 3.4-3 3.6v2.8c2 .2 3 1.6 3 3.6v8.6C7 42.4 8 44 11 44"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-foreground"
      />
      {/* right bracket */}
      <path
        d="M37 6c3 0 4 1.6 4 4.4V19c0 2 1 3.4 3 3.6v2.8c-2 .2-3 1.6-3 3.6v8.6c0 2.8-1 4.4-4 4.4"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-foreground"
      />
      {/* mark tile */}
      <rect x="16" y="13" width="22" height="22" rx="5" className="fill-brand" transform="translate(-3 0)" />
      {/* upward M / check */}
      <path
        d="M18 28.5v-8l4.5 5 4.5-8"
        stroke="var(--brand-contrast)"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({
  className,
  showWordmark = true,
  size = 34,
}: {
  className?: string;
  showWordmark?: boolean;
  size?: number;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark size={size} />
      {showWordmark && (
        <span
          className="font-display text-[1.35rem] font-bold leading-none tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span className="text-foreground">MARK</span>
          <span className="text-brand">DEV.</span>
        </span>
      )}
    </span>
  );
}
