import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { Breadcrumbs } from "./Breadcrumbs";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  actions,
  align = "left",
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  breadcrumbs?: { name: string; path: string }[];
  actions?: React.ReactNode;
  align?: "left" | "center";
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border pb-14 pt-32 sm:pb-20 sm:pt-40">
      {/* backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-[0.4] mask-fade-b" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[42rem] max-w-full -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          backgroundImage:
            "radial-gradient(closest-side, color-mix(in srgb, var(--brand) 22%, transparent), transparent)",
        }}
      />
      <Container className="relative">
        <div
          className={cn(
            "flex flex-col gap-6",
            align === "center" && "items-center text-center",
          )}
        >
          {breadcrumbs && (
            <Reveal>
              <Breadcrumbs items={breadcrumbs} />
            </Reveal>
          )}
          {eyebrow && (
            <Reveal delay={40}>
              <Badge>{eyebrow}</Badge>
            </Reveal>
          )}
          <h1
            className={cn(
              "text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl",
              align === "center" ? "max-w-4xl" : "max-w-4xl",
            )}
          >
            {title}
          </h1>
          {description && (
            <Reveal delay={140}>
              <p
                className={cn(
                  "text-lg leading-relaxed text-muted sm:text-xl",
                  align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl",
                )}
              >
                {description}
              </p>
            </Reveal>
          )}
          {actions && (
            <Reveal delay={200}>
              <div
                className={cn(
                  "mt-2 flex flex-col gap-3 sm:flex-row",
                  align === "center" && "justify-center",
                )}
              >
                {actions}
              </div>
            </Reveal>
          )}
          {children}
        </div>
      </Container>
    </section>
  );
}
