import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  buildMetadata,
  serviceSchema,
  breadcrumbSchema,
  faqSchema,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Icon, type IconName } from "@/components/ui/Icon";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { CtaSection } from "@/components/sections/CtaSection";
import {
  SERVICES,
  getService,
  getRelatedServices,
} from "@/lib/data/services";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${slug}`,
    keywords: service.keywords,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = getRelatedServices(slug);

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: service.title,
            description: service.metaDescription,
            path: `/services/${slug}`,
            serviceType: service.navLabel,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.navLabel, path: `/services/${slug}` },
          ]),
          faqSchema(service.faqs),
        ]}
      />

      <PageHero
        eyebrow={`${service.eyebrow} · Service`}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.navLabel, path: `/services/${slug}` },
        ]}
        title={service.title}
        description={service.heroSubhead}
        actions={
          <>
            <Button href="/contact" size="lg" withArrow>
              Book a discovery call
            </Button>
            <Button href="/work" size="lg" variant="secondary">
              See related work
            </Button>
          </>
        }
      >
        <Reveal delay={240}>
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { icon: "target" as IconName, label: "Starts at", value: service.priceFrom },
              { icon: "clock" as IconName, label: "Timeline", value: service.timeline },
              { icon: "globe" as IconName, label: "Delivery", value: "Remote, worldwide" },
            ].map((chip) => (
              <div
                key={chip.label}
                className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-2.5"
              >
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand/10 text-brand">
                  <Icon name={chip.icon} size={16} />
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="font-mono text-[0.65rem] uppercase tracking-wider text-muted-strong">
                    {chip.label}
                  </span>
                  <span className="text-sm font-semibold">{chip.value}</span>
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </PageHero>

      {/* Outcomes */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="The outcome"
              title="What this actually gets you."
              description="We don't sell deliverables — we sell results. Here's the business impact this service is designed to create."
            />
            <div className="mt-8 grid gap-3">
              {service.outcomes.map((outcome, i) => (
                <Reveal key={outcome} delay={i * 60}>
                  <div className="flex items-start gap-3 rounded-xl border border-border bg-background p-4">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brand text-brand-contrast">
                      <Icon name="check" size={17} />
                    </span>
                    <span className="pt-1 text-foreground/90">{outcome}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Engagement card */}
          <Reveal delay={120}>
            <div className="lg:sticky lg:top-28 lg:self-start">
              <div className="overflow-hidden rounded-2xl border border-border bg-surface/60">
                <div className="flex items-center gap-3 border-b border-border bg-background p-6">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand text-brand-contrast">
                    <Icon name={service.icon as IconName} size={24} />
                  </span>
                  <div>
                    <div className="font-mono text-[0.65rem] uppercase tracking-wider text-muted">
                      {service.eyebrow}
                    </div>
                    <div className="font-semibold">{service.navLabel}</div>
                  </div>
                </div>
                <div className="flex flex-col gap-4 p-6">
                  <p className="text-sm leading-relaxed text-muted">{service.summary}</p>
                  <dl className="grid grid-cols-2 gap-3 text-sm">
                    <div className="rounded-lg bg-background p-3">
                      <dt className="text-xs text-muted">Investment</dt>
                      <dd className="font-semibold">{service.priceFrom}</dd>
                    </div>
                    <div className="rounded-lg bg-background p-3">
                      <dt className="text-xs text-muted">Timeline</dt>
                      <dd className="font-semibold">{service.timeline}</dd>
                    </div>
                  </dl>
                  <Button href="/contact" withArrow className="w-full">
                    Start your project
                  </Button>
                  <p className="text-center font-mono text-[0.7rem] text-muted">
                    Free scoping · No obligation
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Capabilities */}
      <Section className="border-y border-border bg-surface/50">
        <SectionHeading
          eyebrow="The approach"
          title="How we deliver it."
          description="A senior team, a proven method, and craft in the details. Here's what working with us on this looks like."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {service.capabilities.map((cap, i) => (
            <Reveal key={cap.title} delay={(i % 2) * 80}>
              <div className="flex h-full flex-col gap-2 rounded-2xl border border-border bg-background p-6">
                <span className="font-mono text-sm text-brand">0{i + 1}</span>
                <h3 className="text-lg font-semibold">{cap.title}</h3>
                <p className="leading-relaxed text-muted">{cap.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Deliverables + stack */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="Deliverables" title="Exactly what you'll receive." />
            <ul className="mt-8 grid gap-2.5">
              {service.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <Icon name="check" size={18} className="mt-1 shrink-0 text-brand" />
                  <span className="text-foreground/90">{d}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Tooling" title="The stack we build on." />
            <div className="mt-8 flex flex-wrap gap-2.5">
              {service.stack.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-muted-strong"
                >
                  {tool}
                </span>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-border bg-gradient-to-br from-brand/5 to-transparent p-6">
              <p className="text-sm leading-relaxed text-muted-strong">
                <span className="font-medium text-foreground">Not sure what you need?</span>{" "}
                That&rsquo;s what the discovery call is for. We&rsquo;ll help you scope the
                right approach — and tell you honestly if a different service fits better.
              </p>
              <Link
                href="/contact"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline"
              >
                Talk to a strategist <Icon name="arrow-right" size={15} />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="border-t border-border">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="FAQ"
            title={`${service.navLabel}, answered.`}
            description="The questions we hear most often about this service."
          />
          <FaqAccordion faqs={service.faqs} />
        </div>
      </Section>

      {/* Related */}
      {related.length > 0 && (
        <Section className="border-t border-border bg-surface/50">
          <SectionHeading eyebrow="Keep exploring" title="Services that pair well with this." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((r, i) => (
              <Reveal key={r.slug} delay={(i % 4) * 60}>
                <ServiceCard service={r} />
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      <CtaSection
        title={`Ready to get started with ${service.navLabel.toLowerCase()}?`}
        description="Book a free discovery call. We'll scope your project, share where the biggest wins are, and give you a clear, fixed proposal."
      />
    </>
  );
}
