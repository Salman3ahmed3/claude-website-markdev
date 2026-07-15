import { STATS } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function Stats({
  items = STATS as unknown as { value: string; label: string }[],
  className,
}: {
  items?: { value: string; label: string }[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4",
        className,
      )}
    >
      {items.map((stat, i) => (
        <Reveal
          key={stat.label}
          delay={i * 80}
          className="flex flex-col gap-1 bg-background p-6 sm:p-8"
        >
          <span
            className="text-4xl font-semibold tracking-tight text-gradient sm:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {stat.value}
          </span>
          <span className="text-sm text-muted">{stat.label}</span>
        </Reveal>
      ))}
    </div>
  );
}
