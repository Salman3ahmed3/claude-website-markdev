import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How MarkDev collects, uses, and protects your personal information, and the rights you have over your data.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      breadcrumbLabel="Privacy"
      breadcrumbPath="/privacy"
      lastUpdated="14 July 2026"
      intro="Your privacy matters to us. This policy explains what information we collect, how we use it, and the choices you have."
      sections={[
        {
          heading: "Who we are",
          paragraphs: [
            `${SITE.legalName} ("MarkDev", "we", "us") operates this website and provides digital design, development, and marketing services. If you have any questions about this policy, contact us at ${SITE.email}.`,
          ],
        },
        {
          heading: "Information we collect",
          paragraphs: [
            "We collect information you provide directly — such as your name, email, company, and message when you submit a form or subscribe to our newsletter.",
            "We also collect limited technical information automatically, such as your IP address, browser type, and pages visited, through cookies and analytics tools to understand how our site is used.",
          ],
        },
        {
          heading: "How we use your information",
          paragraphs: [
            "We use your information to respond to enquiries, provide and improve our services, send you communications you have requested, and analyze and improve our website.",
            "We do not sell your personal information. We share it only with trusted service providers who help us operate our business, and only as necessary.",
          ],
        },
        {
          heading: "Cookies & analytics",
          paragraphs: [
            "We use cookies and privacy-conscious analytics to measure site performance and improve your experience. You can control cookies through your browser settings.",
          ],
        },
        {
          heading: "Data retention & security",
          paragraphs: [
            "We retain personal information only as long as necessary for the purposes described here, and we apply reasonable technical and organizational measures to protect it.",
          ],
        },
        {
          heading: "Your rights",
          paragraphs: [
            "Depending on your location, you may have the right to access, correct, delete, or restrict the use of your personal information, and to object to certain processing. To exercise these rights, contact us at " + SITE.email + ".",
          ],
        },
        {
          heading: "Changes to this policy",
          paragraphs: [
            "We may update this policy from time to time. Material changes will be reflected by updating the date at the top of this page.",
          ],
        },
      ]}
    />
  );
}
