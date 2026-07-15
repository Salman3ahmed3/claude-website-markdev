import type { Metadata } from "next";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Icon, type IconName } from "@/components/ui/Icon";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = buildMetadata({
  title: "Our Process — How We Design, Build & Grow",
  description:
    "MarkDev's five-phase process — Discover, Design, Build, Launch, Grow — is built to de-risk your investment with total transparency and a clear definition of success.",
  path: "/process",
  keywords: ["agency process", "web development process", "how we work"],
});

const PRINCIPLES = [
  { icon: "shield" as IconName, title: "Fixed scope, no surprises", text: "You get an itemized proposal and a clear timeline before we start. Change is welcome — but never a surprise on the invoice." },
  { icon: "spark" as IconName, title: "Senior people, start to finish", text: "The team on your kickoff call is the team doing the work. No bait-and-switch to juniors after you sign." },
  { icon: "gauge" as IconName, title: "Measured against your goals", text: "We define success KPIs up front and report against them — so 'done' means 'working', not just 'shipped'." },
  { icon: "globe" as IconName, title: "Async-friendly & global", text: "Clear documentation, recorded updates, and a shared dashboard. We work around your timezone, not the other way around." },
];

export default function ProcessPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Process", path: "/process" },
        ])}
      />

      <PageHero
        eyebrow="How we work"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Process", path: "/process" },
        ]}
        title={
          <>
            A process designed to{" "}
            <span className="text-gradient">de-risk</span> your investment.
          </>
        }
        description="Hiring an agency is a leap of faith. Our job is to make it feel like a sure thing — with transparency at every phase and a definition of success we agree on before we begin."
        actions={
          <>
            <Button href="/contact" size="lg" withArrow>
              Start with discovery
            </Button>
            <Button href="/work" size="lg" variant="secondary">
              See the results
            </Button>
          </>
        }
      />

      <Section>
        <SectionHeading
          eyebrow="The five phases"
          title="From first call to compounding growth."
          description="A proven path we've refined across 250+ engagements. Every phase ends with something tangible in your hands."
        />
        <div className="mt-12">
          <ProcessTimeline />
        </div>
      </Section>

      <Section className="border-y border-border bg-surface/50">
        <SectionHeading
          eyebrow="Principles"
          title="What makes the process actually work."
          align="center"
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.title} delay={i * 70}>
              <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-background p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-brand">
                  <Icon name={p.icon} size={20} />
                </span>
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaSection
        title="See the process in action."
        description="Book a discovery call — the first phase, free. You'll leave with a clear picture of the opportunity and how we'd approach it."
      />
    </>
  );
}
