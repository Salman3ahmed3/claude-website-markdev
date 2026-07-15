import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { Hero } from "@/components/sections/Hero";
import { LogoWall } from "@/components/sections/LogoWall";
import { Stats } from "@/components/sections/Stats";
import { HomeServices } from "@/components/sections/HomeServices";
import { WhyMarkDev } from "@/components/sections/WhyMarkDev";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import { Testimonials } from "@/components/sections/Testimonials";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { CtaSection } from "@/components/sections/CtaSection";
import { FEATURED_CASE_STUDIES } from "@/lib/data/caseStudies";
import { PROCESS } from "@/lib/data/process";
import { GENERAL_FAQS } from "@/lib/data/faqs";

export const metadata: Metadata = buildMetadata({
  title: "MarkDev — Web, App & Growth Agency for Ambitious Brands",
  description: SITE.description,
  path: "/",
  keywords: [
    "digital agency",
    "web development agency",
    "shopify development agency",
    "seo agency",
    "digital marketing agency",
    "conversion rate optimization",
  ],
});

export default function HomePage() {
  return (
    <>
      <Hero />

      <LogoWall />

      {/* Results band */}
      <Section>
        <div className="flex flex-col gap-10">
          <SectionHeading
            align="center"
            eyebrow="Results, not adjectives"
            title="Numbers our clients can take to the board."
            description="We measure our work the way our clients do — in revenue, rankings, and ROI. Here's the shape of the outcomes we deliver."
          />
          <Reveal>
            <Stats />
          </Reveal>
        </div>
      </Section>

      <HomeServices />

      {/* Featured work */}
      <Section className="border-t border-border">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Selected work"
            title="Outcomes worth showing off."
            description="Every engagement is measured against a number that matters. Here are a few of our favorites."
          />
          <Reveal delay={120}>
            <Button href="/work" variant="secondary" withArrow className="shrink-0">
              View all case studies
            </Button>
          </Reveal>
        </div>

        <div className="mt-14 flex flex-col gap-6">
          <Reveal>
            <CaseStudyCard study={FEATURED_CASE_STUDIES[0]} size="large" />
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-2">
            {FEATURED_CASE_STUDIES.slice(1).map((study, i) => (
              <Reveal key={study.slug} delay={i * 90}>
                <CaseStudyCard study={study} />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <WhyMarkDev />

      {/* Process preview */}
      <Section>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="How we work"
            title="A process built to de-risk your investment."
            description="Five phases, total transparency, and a clear definition of success from day one. No black boxes."
          />
          <Reveal delay={120}>
            <Button href="/process" variant="secondary" withArrow className="shrink-0">
              Explore our process
            </Button>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {PROCESS.map((phase, i) => (
            <Reveal key={phase.number} delay={i * 60}>
              <div className="group flex h-full flex-col gap-3 rounded-2xl border border-border bg-background p-5 transition-colors hover:border-brand/40">
                <div className="flex items-center justify-between">
                  <span
                    className="text-2xl font-bold text-muted transition-colors group-hover:text-brand"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {phase.number}
                  </span>
                  {i < PROCESS.length - 1 && (
                    <Icon name="arrow-right" size={16} className="text-border-strong" />
                  )}
                </div>
                <h3 className="font-semibold">{phase.title}</h3>
                <p className="text-xs leading-relaxed text-muted">{phase.summary}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="border-y border-border bg-surface/50">
        <SectionHeading
          align="center"
          eyebrow="Client love"
          title="The kind of feedback we're proud of."
          description="Senior people, clear communication, and work that beats the brief — straight from the teams we partner with."
        />
        <div className="mt-14">
          <Testimonials />
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Questions"
              title="Everything you're probably wondering."
              description="Still curious? Reach out — we answer honestly, even when the answer is 'we're not the right fit.'"
            />
            <div className="mt-6">
              <Button href="/faq" variant="secondary" withArrow>
                Read all FAQs
              </Button>
            </div>
          </div>
          <div>
            <FaqAccordion faqs={GENERAL_FAQS.slice(0, 6)} />
            <p className="mt-4 text-sm text-muted">
              Prefer to talk it through?{" "}
              <Link href="/contact" className="font-medium text-brand hover:underline">
                Book a free discovery call
              </Link>
              .
            </p>
          </div>
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
