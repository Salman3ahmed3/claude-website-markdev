import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  buildMetadata,
  caseStudySchema,
  breadcrumbSchema,
  reviewSchema,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import { CtaSection } from "@/components/sections/CtaSection";
import { CASE_STUDIES, getCaseStudy } from "@/lib/data/caseStudies";
import { getService } from "@/lib/data/services";

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return buildMetadata({
    title: study.metaTitle,
    description: study.metaDescription,
    path: `/work/${slug}`,
    keywords: study.keywords,
  });
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const others = CASE_STUDIES.filter((c) => c.slug !== slug).slice(0, 2);

  return (
    <>
      <JsonLd
        data={[
          caseStudySchema({
            title: study.title,
            description: study.metaDescription,
            path: `/work/${slug}`,
            client: study.client,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/work" },
            { name: study.client, path: `/work/${slug}` },
          ]),
          reviewSchema({
            itemName: study.title,
            author: study.quote.author,
            reviewBody: study.quote.text,
          }),
        ]}
      />

      <PageHero
        eyebrow={study.industry}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" },
          { name: study.client, path: `/work/${slug}` },
        ]}
        title={study.title}
        description={study.hero}
      >
        <Reveal delay={220}>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-wider text-muted">
            <span>Client · {study.client}</span>
            <span>Region · {study.region}</span>
            <span>Year · {study.year}</span>
            <span>Services · {study.serviceLabels.join(", ")}</span>
          </div>
        </Reveal>
      </PageHero>

      {/* Metrics band */}
      <Section className="border-b border-border">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
          {study.metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 80} className="flex flex-col gap-1 bg-background p-6 sm:p-8">
              <span
                className="text-4xl font-semibold tracking-tight text-gradient sm:text-5xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {m.value}
              </span>
              <span className="text-sm text-muted">{m.label}</span>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Narrative */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-[0.35fr_0.65fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading eyebrow="The story" title="From challenge to outcome." />
          </div>
          <div className="flex flex-col gap-12">
            <Reveal>
              <div>
                <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold">
                  <span className="font-mono text-brand">01</span> The challenge
                </h3>
                <p className="text-lg leading-relaxed text-muted">{study.challenge}</p>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold">
                  <span className="font-mono text-brand">02</span> Our approach
                </h3>
                <ul className="grid gap-3">
                  {study.approach.map((a) => (
                    <li key={a} className="flex items-start gap-3 rounded-xl border border-border bg-background p-4">
                      <Icon name="check" size={18} className="mt-0.5 shrink-0 text-brand" />
                      <span className="text-foreground/90">{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold">
                  <span className="font-mono text-brand">03</span> The results
                </h3>
                <p className="text-lg leading-relaxed text-muted">{study.results}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Quote */}
      <Section className="border-y border-border bg-surface/50">
        <Reveal>
          <figure className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
            <Icon name="quote" size={40} className="text-brand" />
            <blockquote className="text-balance text-2xl font-medium leading-snug sm:text-3xl">
              &ldquo;{study.quote.text}&rdquo;
            </blockquote>
            <figcaption className="flex flex-col items-center gap-0.5">
              <span className="font-semibold">{study.quote.author}</span>
              <span className="text-sm text-muted">{study.quote.role}</span>
            </figcaption>
          </figure>
        </Reveal>
      </Section>

      {/* Services used */}
      <Section>
        <SectionHeading eyebrow="What we did" title="Services in this engagement." />
        <div className="mt-8 flex flex-wrap gap-3">
          {study.services.map((s) => {
            const service = getService(s);
            if (!service) return null;
            return (
              <Link
                key={s}
                href={`/services/${service.slug}`}
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2.5 text-sm font-medium transition-colors hover:border-brand hover:text-brand"
              >
                {service.navLabel}
                <Icon name="arrow-up-right" size={15} className="text-muted transition-colors group-hover:text-brand" />
              </Link>
            );
          })}
        </div>
      </Section>

      {/* Other work */}
      <Section className="border-t border-border">
        <SectionHeading eyebrow="More work" title="Keep exploring." />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {others.map((o, i) => (
            <Reveal key={o.slug} delay={i * 90}>
              <CaseStudyCard study={o} />
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaSection
        title="Want results like these?"
        description="Book a discovery call and we'll map exactly how we'd approach your goals — with a clear plan and a definition of success."
      />
    </>
  );
}
