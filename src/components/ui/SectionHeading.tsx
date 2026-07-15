import { cn } from "@/lib/utils";
import { Badge } from "./Badge";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2";
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        align === "center" && "mx-auto max-w-3xl",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <Badge>{eyebrow}</Badge>
        </Reveal>
      )}
      <Reveal delay={60}>
        <Tag
          className={cn(
            "text-balance text-3xl font-semibold sm:text-4xl lg:text-[2.9rem] lg:leading-[1.05]",
          )}
        >
          {title}
        </Tag>
      </Reveal>
      {description && (
        <Reveal delay={120}>
          <p
            className={cn(
              "text-lg leading-relaxed text-muted",
              align === "center" ? "max-w-2xl" : "max-w-2xl",
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
