import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";

function ScoreRing({ label, value = 100 }: { label: string; value?: number }) {
  const r = 20;
  const c = 2 * Math.PI * r;
  const offset = c - (value / 100) * c;
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className="relative h-14 w-14">
        <svg viewBox="0 0 48 48" className="h-full w-full -rotate-90">
          <circle cx="24" cy="24" r={r} fill="none" stroke="var(--surface-2)" strokeWidth="4" />
          <circle
            cx="24"
            cy="24"
            r={r}
            fill="none"
            stroke="var(--brand)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={c}
            strokeDashoffset={offset}
          />
        </svg>
        <span className="absolute inset-0 grid place-items-center text-sm font-semibold text-foreground">
          {value}
        </span>
      </div>
      <span className="font-mono text-[0.6rem] uppercase tracking-wide text-muted">
        {label}
      </span>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 sm:pt-36 lg:pt-40">
      {/* backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-[0.5] mask-fade-b" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-[36rem] w-[36rem] rounded-full opacity-70 blur-3xl"
        style={{
          backgroundImage:
            "radial-gradient(closest-side, color-mix(in srgb, var(--brand) 25%, transparent), transparent)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-20 h-[30rem] w-[30rem] rounded-full opacity-50 blur-3xl"
        style={{
          backgroundImage:
            "radial-gradient(closest-side, color-mix(in srgb, var(--accent-500) 22%, transparent), transparent)",
        }}
      />

      <Container className="relative">
        <div className="grid items-center gap-14 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-24">
          {/* Copy */}
          <div className="flex flex-col items-start gap-7">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium text-muted-strong">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
                </span>
                <span className="font-mono">4.9/5 across 127 reviews · Booking Q3 2026</span>
              </span>
            </Reveal>

            <h1 className="text-balance text-4xl font-semibold leading-[1.04] tracking-tight sm:text-5xl lg:text-[3.9rem]">
              We design, build &amp; grow the digital products{" "}
              <span className="text-gradient">premium brands</span> are judged by.
            </h1>

            <Reveal delay={120}>
              <p className="max-w-xl text-lg leading-relaxed text-muted">
                MarkDev is a full-stack digital agency for ambitious teams. From
                websites, Shopify, and apps to SEO, ads, and CRO — one senior
                team engineers craft <em className="not-italic text-foreground">and</em> conversion, accountable to
                your revenue.
              </p>
            </Reveal>

            <Reveal delay={180}>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button href="/contact" size="lg" withArrow>
                  Book a free discovery call
                </Button>
                <Button href="/work" size="lg" variant="secondary">
                  See our work
                </Button>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2">
                {[
                  { icon: "globe" as const, text: "12 countries served" },
                  { icon: "bolt" as const, text: "250+ projects shipped" },
                  { icon: "shield" as const, text: "$180M+ revenue influenced" },
                ].map((item) => (
                  <span key={item.text} className="flex items-center gap-2 text-sm text-muted">
                    <Icon name={item.icon} size={16} className="text-brand" />
                    {item.text}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Visual */}
          <Reveal delay={160} className="relative">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              {/* floating chips */}
              <div className="absolute -left-4 top-16 z-20 hidden rounded-xl border border-border bg-background px-3.5 py-2.5 shadow-[var(--shadow-md)] sm:flex sm:items-center sm:gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand/10 text-brand">
                  <Icon name="target" size={16} />
                </span>
                <span className="flex flex-col">
                  <span className="text-sm font-semibold leading-tight">+63% revenue</span>
                  <span className="text-[0.68rem] text-muted">post-launch, flat traffic</span>
                </span>
              </div>
              <div className="absolute -right-3 bottom-24 z-20 hidden rounded-xl border border-border bg-background px-3.5 py-2.5 shadow-[var(--shadow-md)] sm:flex sm:items-center sm:gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand/10 text-brand">
                  <Icon name="search" size={16} />
                </span>
                <span className="flex flex-col">
                  <span className="text-sm font-semibold leading-tight">#1 on Google</span>
                  <span className="text-[0.68rem] text-muted">540% organic growth</span>
                </span>
              </div>

              {/* main panel */}
              <div className="relative overflow-hidden rounded-2xl border border-border bg-background shadow-[var(--shadow-lg)]">
                {/* window chrome */}
                <div className="flex items-center gap-2 border-b border-border bg-surface px-4 py-3">
                  <span className="h-3 w-3 rounded-full bg-border-strong" />
                  <span className="h-3 w-3 rounded-full bg-border-strong" />
                  <span className="h-3 w-3 rounded-full bg-border-strong" />
                  <span className="ml-3 flex-1 rounded-md bg-background px-3 py-1 text-center font-mono text-[0.7rem] text-muted">
                    markdev.agency
                  </span>
                </div>

                <div className="flex flex-col gap-6 p-6">
                  {/* Lighthouse row */}
                  <div>
                    <div className="mb-3 flex items-center justify-between">
                      <span className="font-mono text-xs uppercase tracking-wider text-muted">
                        Lighthouse
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-brand/10 px-2 py-0.5 font-mono text-[0.65rem] font-medium text-brand-700 dark:text-brand-300">
                        <Icon name="check" size={12} /> all green
                      </span>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      <ScoreRing label="Perf" />
                      <ScoreRing label="A11y" />
                      <ScoreRing label="Best" />
                      <ScoreRing label="SEO" />
                    </div>
                  </div>

                  {/* growth chart */}
                  <div className="rounded-xl border border-border bg-surface/60 p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="font-mono text-xs uppercase tracking-wider text-muted">
                        Revenue
                      </span>
                      <span className="text-sm font-semibold text-brand">↗ compounding</span>
                    </div>
                    <div className="flex h-24 items-end gap-1.5">
                      {[28, 34, 30, 44, 52, 49, 64, 72, 83, 91, 100].map((h, i) => (
                        <span
                          key={i}
                          className="flex-1 rounded-t bg-gradient-to-t from-brand-600/70 to-accent-500"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* code line */}
                  <div className="flex items-center gap-2 rounded-xl bg-foreground px-4 py-3 font-mono text-[0.78rem] text-background">
                    <span className="text-brand-400">&lt;MarkDev</span>
                    <span className="text-background/60">build</span>
                    <span className="text-background/40">=</span>
                    <span className="text-emerald-400">&quot;ship&quot;</span>
                    <span className="text-background/60">grow</span>
                    <span className="text-background/40">=</span>
                    <span className="text-emerald-400">&quot;scale&quot;</span>
                    <span className="text-brand-400">/&gt;</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
