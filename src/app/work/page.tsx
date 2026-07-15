import type { Metadata } from "next";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Stats } from "@/components/sections/Stats";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import { CtaSection } from "@/components/sections/CtaSection";
import { CASE_STUDIES } from "@/lib/data/caseStudies";

export const metadata: Metadata = buildMetadata({
  title: "Work & Case Studies — Results We're Proud Of",
  description:
    "Real outcomes from MarkDev: +63% e-commerce revenue, 540% organic growth, 4.1x ROAS, and more. Explore case studies across web, Shopify, apps, SEO and paid media.",
  path: "/work",
  keywords: ["agency case studies", "web development case study", "seo case study", "shopify case study"],
});

export default function WorkPage() {
  const [featured, ...rest] = CASE_STUDIES;
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" },
        ])}
      />

      <PageHero
        eyebrow="Selected work"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" },
        ]}
        title={
          <>
            Proof, in the language that <span className="text-gradient">matters</span>: revenue.
          </>
        }
        description="We measure our work the way our clients do. Every case study leads with the number that moved — not the deliverables we shipped to move it."
        actions={
          <Button href="/contact" size="lg" withArrow>
            Start your success story
          </Button>
        }
      />

      <Section>
        <Reveal>
          <CaseStudyCard study={featured} size="large" />
        </Reveal>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {rest.map((study, i) => (
            <Reveal key={study.slug} delay={(i % 2) * 90}>
              <CaseStudyCard study={study} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-y border-border bg-surface/50">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="font-mono text-sm uppercase tracking-widest text-brand">
            {"{ By the numbers }"}
          </span>
          <h2 className="max-w-2xl text-2xl font-semibold sm:text-3xl">
            A track record built across 250+ engagements.
          </h2>
        </div>
        <div className="mt-10">
          <Stats />
        </div>
      </Section>

      <CtaSection
        title="Your results could be the next case study."
        description="Tell us what you're trying to grow. We'll show you exactly how we'd approach it — and what success would look like."
      />
    </>
  );
}
