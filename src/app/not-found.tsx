import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { SERVICES } from "@/lib/data/services";

export default function NotFound() {
  const popular = SERVICES.slice(0, 6);
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden pt-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-[0.4] mask-fade-b" />
      <Container className="relative">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <span className="font-mono text-sm uppercase tracking-widest text-brand">
            {"{ 404 }"}
          </span>
          <h1 className="text-balance text-5xl font-semibold tracking-tight sm:text-6xl">
            This page went <span className="text-gradient">off-script.</span>
          </h1>
          <p className="text-lg text-muted">
            The page you&rsquo;re looking for doesn&rsquo;t exist or has moved. Let&rsquo;s
            get you back to something useful.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/" size="lg" withArrow>
              Back to home
            </Button>
            <Button href="/contact" size="lg" variant="secondary">
              Contact us
            </Button>
          </div>

          <div className="mt-8 w-full">
            <p className="mb-3 font-mono text-xs uppercase tracking-wider text-muted">
              Popular services
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {popular.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3.5 py-2 text-sm transition-colors hover:border-brand hover:text-brand"
                >
                  {s.navLabel}
                  <Icon name="arrow-up-right" size={14} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
