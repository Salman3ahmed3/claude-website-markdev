import type { Metadata } from "next";
import { buildMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { CtaSection } from "@/components/sections/CtaSection";
import { PRICING_TIERS, ENGAGEMENT_MODELS, PRICING_FAQS } from "@/lib/data/pricing";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Pricing — Transparent Agency Investment & Engagement Models",
  description:
    "Honest, transparent pricing from MarkDev. Projects from $9k, retainers from ~$2.5k/mo, and flexible engagement models. Every quote is fixed and itemized before you commit.",
  path: "/pricing",
  keywords: ["agency pricing", "web development cost", "digital marketing retainer", "agency rates"],
});

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Pricing", path: "/pricing" },
          ]),
          faqSchema(PRICING_FAQS),
        ]}
      />

      <PageHero
        eyebrow="Pricing"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing" },
        ]}
        title={
          <>
            Transparent pricing. <span className="text-gradient">Zero</span> surprises.
          </>
        }
        description="We won't pretend a brochure site and a SaaS platform cost the same. Instead, here are honest starting points and clear engagement models — with a fixed, itemized quote before you ever commit."
        actions={
          <Button href="/contact" size="lg" withArrow>
            Get a custom quote
          </Button>
        }
      />

      {/* Tiers */}
      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {PRICING_TIERS.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 90} className="h-full">
              <div
                className={cn(
                  "relative flex h-full flex-col gap-6 rounded-3xl border p-7 sm:p-8",
                  tier.featured
                    ? "border-brand bg-background shadow-[var(--shadow-lg)]"
                    : "border-border bg-background",
                )}
              >
                {tier.featured && (
                  <span className="absolute -top-3 left-8 inline-flex items-center gap-1.5 rounded-full bg-brand px-3 py-1 text-xs font-medium text-brand-contrast">
                    <Icon name="sparkles" size={13} /> Most popular
                  </span>
                )}
                <div className="flex flex-col gap-1">
                  <h2 className="text-lg font-semibold">{tier.name}</h2>
                  <p className="text-sm text-muted">{tier.tagline}</p>
                </div>
                <div className="flex items-baseline gap-2">
                  <span
                    className="text-4xl font-bold tracking-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {tier.price}
                  </span>
                  <span className="text-sm text-muted">{tier.priceNote}</span>
                </div>
                <p className="rounded-lg bg-surface px-3 py-2 text-xs text-muted-strong">
                  Best for: {tier.bestFor}
                </p>
                <ul className="flex flex-1 flex-col gap-2.5">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Icon
                        name="check"
                        size={16}
                        className={cn("mt-0.5 shrink-0", f.endsWith(":") ? "text-transparent" : "text-brand")}
                      />
                      <span className={cn(f.endsWith(":") && "font-medium text-foreground")}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  href="/contact"
                  variant={tier.featured ? "primary" : "secondary"}
                  withArrow
                  className="w-full"
                >
                  {tier.cta}
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-muted">
          All engagements start with a free discovery call and a fixed, itemized proposal.
          You own everything we build — no lock-in.
        </p>
      </Section>

      {/* Engagement models */}
      <Section className="border-y border-border bg-surface/50">
        <SectionHeading
          eyebrow="How we engage"
          title="Three ways to work together."
          align="center"
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {ENGAGEMENT_MODELS.map((m, i) => (
            <Reveal key={m.title} delay={i * 80}>
              <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-background p-6">
                <span className="font-mono text-sm text-brand">0{i + 1}</span>
                <h3 className="text-lg font-semibold">{m.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{m.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="Pricing FAQ"
            title="The money questions, answered honestly."
          />
          <FaqAccordion faqs={PRICING_FAQS} />
        </div>
      </Section>

      <CtaSection
        title="Let's put a real number on it."
        description="Tell us your goals and constraints. We'll come back with a clear, fixed proposal — and sequence the work so the highest-ROI pieces come first."
      />
    </>
  );
}
