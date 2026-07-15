import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceCard } from "./ServiceCard";
import { SERVICE_CATEGORIES, servicesByCategory } from "@/lib/data/services";

export function HomeServices() {
  return (
    <Section id="services">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              One partner for everything
              <br className="hidden sm:block" /> that moves the number.
            </>
          }
          description="Most agencies either build or market. We do both — so the site we ship is engineered to convert, and the marketing we run is engineered to scale it. No handoffs, no finger-pointing."
        />
        <Reveal delay={120}>
          <Button href="/services" variant="secondary" withArrow className="shrink-0">
            All services
          </Button>
        </Reveal>
      </div>

      <div className="mt-14 flex flex-col gap-12">
        {SERVICE_CATEGORIES.map((cat) => (
          <div key={cat.key}>
            <Reveal>
              <div className="mb-5 flex items-baseline gap-3">
                <h3
                  className="font-mono text-sm uppercase tracking-widest text-brand"
                >
                  {"{ "}
                  {cat.label}
                  {" }"}
                </h3>
                <span className="h-px flex-1 bg-border" />
                <span className="hidden text-sm text-muted sm:block">
                  {cat.description}
                </span>
              </div>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {servicesByCategory(cat.key).map((service, i) => (
                <Reveal key={service.slug} delay={(i % 3) * 60}>
                  <ServiceCard service={service} />
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
