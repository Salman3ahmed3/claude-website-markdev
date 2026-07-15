import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";

export type LegalSection = {
  heading: string;
  paragraphs: string[];
};

export function LegalPage({
  title,
  lastUpdated,
  intro,
  sections,
  breadcrumbLabel,
  breadcrumbPath,
}: {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
  breadcrumbLabel: string;
  breadcrumbPath: string;
}) {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: breadcrumbLabel, path: breadcrumbPath },
        ]}
        title={title}
        description={intro}
      >
        <p className="mt-4 font-mono text-xs text-muted">Last updated: {lastUpdated}</p>
      </PageHero>

      <Section container containerSize="narrow">
        <div className="flex flex-col gap-10">
          {sections.map((section, i) => (
            <section key={section.heading} className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold">
                <span className="mr-2 font-mono text-brand">{String(i + 1).padStart(2, "0")}</span>
                {section.heading}
              </h2>
              {section.paragraphs.map((p, j) => (
                <p key={j} className="leading-relaxed text-muted-strong">
                  {p}
                </p>
              ))}
            </section>
          ))}
          <p className="rounded-xl border border-border bg-surface/60 p-4 text-sm text-muted">
            This document is a general template provided for convenience and does not
            constitute legal advice. Please have it reviewed and adapted by qualified
            counsel for your jurisdiction before relying on it.
          </p>
        </div>
      </Section>
    </>
  );
}
