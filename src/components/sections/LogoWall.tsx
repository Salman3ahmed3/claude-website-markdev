import { TRUST_LOGOS } from "@/lib/site";
import { Container } from "@/components/ui/Container";

export function LogoWall({
  label = "Trusted by ambitious teams around the world",
}: {
  label?: string;
}) {
  const logos = [...TRUST_LOGOS, ...TRUST_LOGOS];
  return (
    <section className="border-y border-border bg-surface/60 py-10">
      <Container>
        <p className="mb-6 text-center font-mono text-xs uppercase tracking-wider text-muted">
          {label}
        </p>
        <div
          className="relative overflow-hidden mask-fade-x"
          aria-label="Client brands"
        >
          <ul className="flex w-max items-center gap-12 animate-[marquee_42s_linear_infinite] sm:gap-16">
            {logos.map((name, i) => (
              <li
                key={`${name}-${i}`}
                className="shrink-0 select-none text-xl font-semibold tracking-tight text-muted/70 transition-colors hover:text-foreground sm:text-2xl"
                style={{ fontFamily: "var(--font-display)" }}
                aria-hidden={i >= TRUST_LOGOS.length}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
