import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description:
    "The terms and conditions governing your use of the MarkDev website and services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      breadcrumbLabel="Terms"
      breadcrumbPath="/terms"
      lastUpdated="14 July 2026"
      intro="These terms govern your use of our website and services. By using this site, you agree to them."
      sections={[
        {
          heading: "Acceptance of terms",
          paragraphs: [
            `By accessing or using the ${SITE.legalName} website, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, please do not use the site.`,
          ],
        },
        {
          heading: "Use of the website",
          paragraphs: [
            "You agree to use this website lawfully and not to interfere with its operation, attempt unauthorized access, or use it to transmit harmful or unlawful content.",
          ],
        },
        {
          heading: "Services & proposals",
          paragraphs: [
            "Information on this site describes our services in general terms and does not constitute a binding offer. Any engagement is governed by a separate written agreement and proposal, which takes precedence over the general information here.",
          ],
        },
        {
          heading: "Intellectual property",
          paragraphs: [
            "The content, branding, and design of this website are owned by MarkDev or its licensors and are protected by intellectual property laws. Work we produce for clients is transferred per the terms of the applicable engagement agreement.",
          ],
        },
        {
          heading: "Disclaimers",
          paragraphs: [
            "This website is provided on an \"as is\" and \"as available\" basis without warranties of any kind, express or implied. We do not guarantee that the site will be uninterrupted, secure, or error-free.",
          ],
        },
        {
          heading: "Limitation of liability",
          paragraphs: [
            "To the fullest extent permitted by law, MarkDev shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website.",
          ],
        },
        {
          heading: "Governing law",
          paragraphs: [
            "These terms are governed by the laws of the jurisdiction in which MarkDev operates, without regard to conflict-of-law principles.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            `Questions about these terms? Reach us at ${SITE.email}.`,
          ],
        },
      ]}
    />
  );
}
