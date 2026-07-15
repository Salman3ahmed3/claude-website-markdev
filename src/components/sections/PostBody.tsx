import type { Block } from "@/lib/data/posts";
import { Icon } from "@/components/ui/Icon";

export function PostBody({ body }: { body: Block[] }) {
  return (
    <div className="flex flex-col gap-6">
      {body.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2 key={i} className="mt-6 text-2xl font-semibold tracking-tight sm:text-3xl">
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className="mt-2 text-xl font-semibold">
                {block.text}
              </h3>
            );
          case "p":
            return (
              <p key={i} className="text-lg leading-relaxed text-muted-strong">
                {block.text}
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="flex flex-col gap-2.5">
                {block.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-lg leading-relaxed text-muted-strong">
                    <Icon name="check" size={18} className="mt-1.5 shrink-0 text-brand" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="flex flex-col gap-2.5">
                {block.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-lg leading-relaxed text-muted-strong">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand/10 font-mono text-xs font-semibold text-brand-700 dark:text-brand-300">
                      {j + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            );
          case "quote":
            return (
              <blockquote key={i} className="my-2 border-l-2 border-brand pl-6">
                <p className="text-xl font-medium leading-snug text-foreground">
                  &ldquo;{block.text}&rdquo;
                </p>
                {block.cite && (
                  <cite className="mt-2 block text-sm not-italic text-muted">— {block.cite}</cite>
                )}
              </blockquote>
            );
          case "callout":
            return (
              <div
                key={i}
                className="flex gap-4 rounded-2xl border border-brand/20 bg-brand/5 p-5 sm:p-6"
              >
                <Icon name="sparkles" size={22} className="mt-0.5 shrink-0 text-brand" />
                <p className="leading-relaxed text-foreground/90">{block.text}</p>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
