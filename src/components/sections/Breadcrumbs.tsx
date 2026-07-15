import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

export function Breadcrumbs({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 font-mono text-xs text-muted">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {last ? (
                <span className="text-muted-strong" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link href={item.path} className="transition-colors hover:text-brand">
                    {item.name}
                  </Link>
                  <Icon name="chevron-down" size={12} className="-rotate-90 text-border-strong" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
