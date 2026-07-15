import type { Metadata } from "next";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Stats } from "@/components/sections/Stats";
import { CtaSection } from "@/components/sections/CtaSection";
import {
  VALUES,
  MILESTONES,
  INDUSTRIES,
  TECH_STACK,
  AWARDS,
} from "@/lib/data/company";

export const metadata: Metadata = buildMetadata({
  title: "About MarkDev — A Global, Senior-Led Digital Agency",
  description:
    "MarkDev is a remote-first digital agency built to fuse craft with growth. Meet the team, our values, our story, and the industries and technologies we work across.",
  path: "/about",
  keywords: ["about markdev", "digital agency team", "remote agency", "global digital agency"],
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />

      <PageHero
        eyebrow="About us"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
        title={
          <>
            We exist to close the gap between{" "}
            <span className="text-gradient">beautiful</span> and{" "}
            <span className="text-gradient">profitable</span>.
          </>
        }
        description="MarkDev is a remote-first team of senior designers, engineers, and marketers. We started with a conviction the industry still hasn't caught up to: great craft and real growth belong to the same team."
        actions={
          <>
            <Button href="/contact" size="lg" withArrow>
              Work with us
            </Button>
            <Button href="#careers" size="lg" variant="secondary">
              Join the team
            </Button>
          </>
        }
      />

      {/* Story */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <SectionHeading
            eyebrow="Our story"
            title="Founded on a simple, stubborn idea."
          />
          <div className="flex flex-col gap-5 text-lg leading-relaxed text-muted">
            <Reveal>
              <p>
                In 2016, we kept seeing the same broken pattern: brands would pay a
                studio for a gorgeous website, then hand it to a marketing agency who
                didn&rsquo;t understand it — or vice versa. The result was always the
                same. Beautiful sites that didn&rsquo;t convert. Aggressive marketing
                pointed at foundations that couldn&rsquo;t hold it.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <p>
                So we built the agency we wished existed: one senior team that designs,
                builds, <em className="not-italic text-foreground">and</em> grows — where
                the people who craft the experience are the same people accountable for
                its performance.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p>
                A decade later, that conviction has shipped 250+ projects across 12
                countries and influenced over $180M in client revenue. We&rsquo;re still
                remote-first, still senior-led, and still allergic to the handoffs that
                quietly kill results.
              </p>
            </Reveal>
          </div>
        </div>
        <div className="mt-14">
          <Stats />
        </div>
      </Section>

      {/* Values */}
      <Section className="border-y border-border bg-surface/50">
        <SectionHeading
          eyebrow="What we believe"
          title="The values behind every decision."
          align="center"
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 70}>
              <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-background p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-brand">
                  <Icon name={v.icon as IconName} size={20} />
                </span>
                <h3 className="font-semibold">{v.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{v.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Milestones */}
      <Section>
        <SectionHeading eyebrow="The journey" title="A decade of building and growing." />
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {MILESTONES.map((m, i) => (
            <Reveal as="li" key={m.year} delay={i * 60}>
              <div className="flex h-full flex-col gap-2 rounded-2xl border border-border bg-background p-5">
                <span
                  className="text-2xl font-bold text-gradient"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {m.year}
                </span>
                <p className="text-sm leading-relaxed text-muted">{m.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* Industries */}
      <Section className="border-y border-border bg-surface/50">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <SectionHeading
            eyebrow="Industries"
            title="Where we do our best work."
            description="We're generalists in craft and specialists in outcomes. These are the sectors we know deeply."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {INDUSTRIES.map((ind, i) => (
              <Reveal key={ind.name} delay={(i % 2) * 60}>
                <div className="flex items-start gap-3 rounded-xl border border-border bg-background p-4">
                  <Icon name="check" size={18} className="mt-0.5 shrink-0 text-brand" />
                  <span>
                    <span className="block font-medium">{ind.name}</span>
                    <span className="block text-sm text-muted">{ind.description}</span>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Tech + awards */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="Technology" title="A modern, best-in-class stack." />
            <div className="mt-8 flex flex-col gap-5">
              {TECH_STACK.map((group) => (
                <div key={group.category}>
                  <div className="mb-2 font-mono text-xs uppercase tracking-wider text-muted">
                    {group.category}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-muted-strong"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Recognition" title="Awards & partnerships." />
            <div className="mt-8 grid gap-3">
              {AWARDS.map((a, i) => (
                <Reveal key={a.title} delay={(i % 3) * 60}>
                  <div className="flex items-center justify-between rounded-xl border border-border bg-background p-4">
                    <span className="flex items-center gap-3">
                      <Icon name="star" size={18} className="fill-brand text-brand" />
                      <span className="font-medium">{a.title}</span>
                    </span>
                    <span className="font-mono text-xs text-muted">{a.year}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Careers */}
      <Section id="careers" className="border-t border-border">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-border bg-surface/60 p-8 sm:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div className="flex flex-col gap-4">
                <span className="font-mono text-sm uppercase tracking-widest text-brand">
                  {"{ Careers }"}
                </span>
                <h2 className="text-2xl font-semibold sm:text-3xl">
                  We&rsquo;re always looking for senior talent.
                </h2>
                <p className="max-w-xl leading-relaxed text-muted">
                  MarkDev is a home for designers, engineers, and marketers who care
                  about craft and outcomes in equal measure. Remote-first, senior-led,
                  and refreshingly free of bureaucracy. Don&rsquo;t see an open role?
                  Introduce yourself anyway.
                </p>
                <div className="mt-2">
                  <Button href="/contact" withArrow>
                    Introduce yourself
                  </Button>
                </div>
              </div>
              <div className="grid gap-3">
                {[
                  "Remote-first, work from anywhere",
                  "Senior team, no micromanagement",
                  "Real ownership over your work",
                  "Learning budget & modern tooling",
                ].map((perk) => (
                  <div key={perk} className="flex items-center gap-3 rounded-xl bg-background p-3.5 text-sm">
                    <Icon name="check" size={16} className="shrink-0 text-brand" />
                    {perk}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <CtaSection />
    </>
  );
}
