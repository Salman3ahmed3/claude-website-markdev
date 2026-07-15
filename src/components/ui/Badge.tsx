import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
  icon,
}: {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium tracking-wide text-muted-strong uppercase",
        className,
      )}
    >
      {icon}
      <span className="font-mono normal-case tracking-normal">{children}</span>
    </span>
  );
}
