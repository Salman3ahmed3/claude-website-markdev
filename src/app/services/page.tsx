import type { Metadata } from "next";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { Stats } from "@/components/sections/Stats";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaSection } from "@/components/sections/CtaSection";
import { Icon } from "@/components/ui/Icon";
import { SERVICE_CATEGORIES, servicesByCategory } from "@/lib/data/services";

export const metadata: Metadata = buildMetadata({
  title: "Services — Web, Apps, Marketing, Design & CRO",
  description:
    "Explore MarkDev's full-stack services: web & Shopify development, custom & Flutter apps, SEO, Google & Meta Ads, social, CRO, UI/UX and branding. One partner, end to end.",
  path: "/services",
  keywords: [
    "digital agency services",
    "web development agency",
    "shopify development agency",
    "seo agency",
    "ui ux design agency",
  ],
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />

      <PageHero
        eyebrow="Services"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
        title={
          <>
            Everything you need to{" "}
            <span className="text-gradient">build and grow</span> — under one roof.
          </>
        }
        description="Fifteen services, three disciplines, one accountable team. We remove the seams between design, engineering, and marketing so your growth compounds instead of fragmenting across vendors."
        actions={
          <>
            <Button href="/contact" size="lg" withArrow>
              Book a discovery call
            </Button>
            <Button href="/pricing" size="lg" variant="secondary">
              See pricing
            </Button>
          </>
        }
      />

      {SERVICE_CATEGORIES.map((cat, ci) => (
        <Section key={cat.key} className={ci % 2 === 1 ? "border-y border-border bg-surface/50" : ""}>
          <div className="flex flex-col gap-3">
            <Reveal>
              <span className="font-mono text-sm uppercase tracking-widest text-brand">
                {"{ "}
                {cat.label}
                {" }"}
              </span>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="max-w-2xl text-2xl font-semibold sm:text-3xl">
                {cat.description}
              </h2>
            </Reveal>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {servicesByCategory(cat.key).map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 60}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </Section>
      ))}

      {/* Combined value */}
      <Section className="border-t border-border">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            eyebrow="Better together"
            title="The build-and-grow flywheel."
            description="When the team that builds your product also runs your marketing, everything reinforces everything else. Faster sites rank higher. Better UX converts more ads. CRO data feeds the next build. It compounds."
          />
          <Reveal>
            <div className="flex flex-col gap-3">
              {[
                "Design that's engineered to convert, from the first wireframe.",
                "Performance and SEO baked into the code, not bolted on later.",
                "Marketing that scales a foundation actually built to handle it.",
                "One roadmap, one team, one number we're all accountable to.",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3 rounded-xl border border-border bg-background p-4">
                  <Icon name="check" size={20} className="mt-0.5 shrink-0 text-brand" />
                  <span className="text-foreground/90">{point}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <div className="mt-14">
          <Stats />
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
