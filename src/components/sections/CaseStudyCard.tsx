import Link from "next/link";
import type { CaseStudy } from "@/lib/data/caseStudies";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

export function CaseStudyCard({
  study,
  size = "default",
}: {
  study: CaseStudy;
  size?: "default" | "large";
}) {
  return (
    <Link
      href={`/work/${study.slug}`}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lg)]",
        size === "large" && "lg:flex-row",
      )}
    >
      {/* Visual panel */}
      <div
        className={cn(
          "relative flex min-h-[220px] items-end overflow-hidden p-7",
          size === "large" ? "lg:min-h-[420px] lg:w-1/2" : "min-h-[240px]",
        )}
      >
        <div
          aria-hidden
          className={cn(
            "absolute inset-0 bg-gradient-to-br opacity-95 transition-transform duration-500 group-hover:scale-[1.04]",
            study.accent,
          )}
        />
        <div aria-hidden className="absolute inset-0 bg-dots opacity-20 mix-blend-overlay" />
        <div className="relative flex w-full items-end justify-between">
          <div
            className="text-3xl font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {study.client}
          </div>
          <span className="grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors group-hover:bg-white group-hover:text-brand">
            <Icon name="arrow-up-right" size={20} />
          </span>
        </div>
      </div>

      {/* Content */}
      <div
        className={cn(
          "flex flex-1 flex-col gap-5 p-7",
          size === "large" && "lg:w-1/2 lg:justify-center lg:p-10",
        )}
      >
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-surface-2 px-2.5 py-1 font-mono text-[0.68rem] uppercase tracking-wider text-muted-strong">
            {study.industry}
          </span>
          <span className="font-mono text-[0.68rem] uppercase tracking-wider text-muted">
            {study.region} · {study.year}
          </span>
        </div>

        <h2
          className={cn(
            "font-semibold leading-snug",
            size === "large" ? "text-2xl lg:text-[1.75rem]" : "text-xl",
          )}
        >
          {study.title}
        </h2>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {study.metrics.slice(0, size === "large" ? 4 : 2).map((m) => (
            <div key={m.label}>
              <div className="text-2xl font-semibold text-gradient" style={{ fontFamily: "var(--font-display)" }}>
                {m.value}
              </div>
              <div className="text-xs text-muted">{m.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
          {study.serviceLabels.map((label) => (
            <span
              key={label}
              className="rounded-md border border-border px-2 py-0.5 text-xs text-muted"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
