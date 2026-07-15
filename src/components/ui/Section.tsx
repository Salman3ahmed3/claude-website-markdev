import { cn } from "@/lib/utils";
import { Container } from "./Container";

export function Section({
  id,
  className,
  children,
  container = true,
  containerSize = "default",
  as: Tag = "section",
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
  container?: boolean;
  containerSize?: "default" | "narrow" | "wide";
  as?: "section" | "div";
}) {
  return (
    <Tag id={id} className={cn("py-20 sm:py-28", className)}>
      {container ? <Container size={containerSize}>{children}</Container> : children}
    </Tag>
  );
}
