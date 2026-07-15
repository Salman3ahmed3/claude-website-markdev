import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon, type IconName } from "@/components/ui/Icon";
import { DIFFERENTIATORS, VALUES } from "@/lib/data/company";

export function WhyMarkDev() {
  return (
    <Section id="why" className="border-y border-border bg-surface/50">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Why MarkDev"
            title={
              <>
                The rare agency that&rsquo;s{" "}
                <span className="text-gradient">craft-obsessed and revenue-obsessed.</span>
              </>
            }
            description="Our research benchmarked the world's top agencies. The best win on design or on conversion — almost never both. We built MarkDev to own that gap."
          />
          <div className="mt-8 grid grid-cols-2 gap-4">
            {VALUES.map((v) => (
              <Reveal key={v.title} className="flex flex-col gap-2 rounded-xl border border-border bg-background p-4">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand/10 text-brand">
                  <Icon name={v.icon as IconName} size={18} />
                </span>
                <span className="text-sm font-semibold">{v.title}</span>
                <span className="text-xs leading-relaxed text-muted">{v.description}</span>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {DIFFERENTIATORS.map((d, i) => (
            <Reveal key={d.title} delay={i * 70}>
              <div className="group flex gap-5 rounded-2xl border border-border bg-background p-6 transition-colors hover:border-brand/40 sm:p-7">
                <span
                  className="font-mono text-lg font-medium text-muted transition-colors group-hover:text-brand"
                >
                  0{i + 1}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold sm:text-xl">{d.title}</h3>
                  <p className="leading-relaxed text-muted">{d.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
