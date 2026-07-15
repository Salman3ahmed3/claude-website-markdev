import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";

export function CtaSection({
  title = "Ready to build something worth talking about?",
  description = "Book a free 30-minute discovery call. We'll pressure-test your goals, share where the biggest wins are, and tell you honestly if we're the right partner — no pressure, no obligation.",
  primaryLabel = "Book a free discovery call",
  primaryHref = "/contact",
  secondaryLabel = "See our work",
  secondaryHref = "/work",
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-foreground px-6 py-16 text-center sm:px-16 sm:py-20">
            {/* glow + grid */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-90"
              style={{
                backgroundImage:
                  "radial-gradient(600px 300px at 80% -20%, rgba(37,99,235,0.55), transparent), radial-gradient(500px 320px at 0% 120%, rgba(99,102,241,0.4), transparent)",
              }}
            />
            <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-[0.15]" />

            <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider text-white/70">
                <Icon name="sparkles" size={14} /> Let&rsquo;s talk
              </span>
              <h2 className="text-balance text-3xl font-semibold text-background sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]">
                {title}
              </h2>
              <p className="text-lg leading-relaxed text-background/70">
                {description}
              </p>
              <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                <Button href={primaryHref} size="lg" variant="inverse" withArrow>
                  {primaryLabel}
                </Button>
                <Button
                  href={secondaryHref}
                  size="lg"
                  className="border border-white/20 bg-transparent text-background hover:bg-white/10 hover:-translate-y-0.5"
                >
                  {secondaryLabel}
                </Button>
              </div>
              <p className="mt-2 font-mono text-xs text-background/50">
                Average reply time under 4 hours · Currently booking new projects
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
