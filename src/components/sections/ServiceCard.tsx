import Link from "next/link";
import type { Service } from "@/lib/data/services";
import { Icon, type IconName } from "@/components/ui/Icon";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[var(--shadow-md)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
      />
      <div className="flex items-center justify-between">
        <span className="grid h-12 w-12 place-items-center rounded-xl border border-border bg-surface text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-brand-contrast">
          <Icon name={service.icon as IconName} size={22} />
        </span>
        <span className="font-mono text-[0.7rem] uppercase tracking-wider text-muted">
          {service.eyebrow}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <h3 className="text-lg font-semibold leading-snug">{service.navLabel}</h3>
        <p className="text-sm leading-relaxed text-muted">{service.summary}</p>
      </div>
      <div className="flex items-center justify-between border-t border-border pt-4">
        <span className="text-xs text-muted">
          From <span className="font-medium text-foreground">{service.priceFrom}</span>
        </span>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-brand">
          Explore
          <Icon
            name="arrow-right"
            size={15}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  );
}
