import type { Metadata } from "next";
import { buildMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { CtaSection } from "@/components/sections/CtaSection";
import { GENERAL_FAQS } from "@/lib/data/faqs";

export const metadata: Metadata = buildMetadata({
  title: "FAQ — Working With MarkDev",
  description:
    "Answers to common questions about working with MarkDev — pricing, timelines, who we work with, ownership, ongoing support, and how we measure success.",
  path: "/faq",
  keywords: ["digital agency faq", "working with an agency", "agency questions"],
});

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
          faqSchema(GENERAL_FAQS),
        ]}
      />

      <PageHero
        eyebrow="FAQ"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ]}
        title="Questions, answered honestly."
        description="No jargon, no dodging. Here's what people ask us most before starting a project — and straight answers to each."
        actions={
          <Button href="/contact" size="lg" withArrow>
            Still have questions? Ask us
          </Button>
        }
      />

      <Section container containerSize="narrow">
        <h2 className="sr-only">Frequently asked questions</h2>
        <FaqAccordion faqs={GENERAL_FAQS} />
      </Section>

      <CtaSection />
    </>
  );
}
