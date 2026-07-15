import { cn } from "@/lib/utils";

/**
 * Zero-JS scroll reveal. Uses the CSS `animation-timeline: view()` scroll
 * timeline (see globals.css) — no client component, no IntersectionObserver,
 * no hydration cost. Content is fully visible by default, so browsers without
 * scroll-timeline support (and reduced-motion users) simply see it with no
 * animation. Above-the-fold elements render immediately, protecting LCP.
 *
 * `delay` is accepted for API compatibility and maps to a small stagger where
 * scroll timelines allow it; it never hides content.
 */
export function Reveal({
  children,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "span";
}) {
  return <Tag className={cn("reveal", className)}>{children}</Tag>;
}
