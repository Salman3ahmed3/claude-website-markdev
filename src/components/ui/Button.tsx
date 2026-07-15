import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icon } from "./Icon";

type Variant = "primary" | "secondary" | "ghost" | "inverse";
type Size = "sm" | "md" | "lg";

const base =
  "group/btn inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-brand-contrast shadow-[var(--shadow-brand)] hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0",
  secondary:
    "border border-border-strong bg-background text-foreground hover:border-brand hover:text-brand hover:-translate-y-0.5",
  ghost:
    "text-foreground hover:text-brand hover:bg-surface-2",
  inverse:
    "bg-background text-foreground hover:-translate-y-0.5 hover:brightness-95",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-[0.95rem]",
  lg: "h-14 px-8 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const {
    variant = "primary",
    size = "md",
    withArrow = false,
    className,
    children,
  } = props;

  const classes = cn(base, variants[variant], sizes[size], className);

  const inner = (
    <>
      {children}
      {withArrow && (
        <Icon
          name="arrow-right"
          size={18}
          className="transition-transform duration-200 group-hover/btn:translate-x-1"
        />
      )}
    </>
  );

  if ("href" in props && props.href) {
    if (props.external) {
      return (
        <a
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {inner}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes}>
        {inner}
      </Link>
    );
  }

  const { variant: _v, size: _s, withArrow: _a, className: _c, children: _ch, ...rest } =
    props as ButtonAsButton;
  return (
    <button className={classes} {...rest}>
      {inner}
    </button>
  );
}
