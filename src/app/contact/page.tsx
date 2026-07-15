import type { Metadata } from "next";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Icon, type IconName } from "@/components/ui/Icon";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = buildMetadata({
  title: "Contact — Book a Free Discovery Call",
  description:
    "Ready to build and grow? Book a free discovery call with MarkDev. Tell us your goals and we'll come back with honest advice, next steps, and a clear proposal.",
  path: "/contact",
  keywords: ["contact markdev", "book a discovery call", "hire a digital agency"],
});

const STEPS = [
  { icon: "calendar" as IconName, title: "Book or message", text: "Share a few details about your goals — takes two minutes." },
  { icon: "spark" as IconName, title: "Discovery call", text: "A 30-minute call with a senior strategist. No sales pressure, just clarity." },
  { icon: "target" as IconName, title: "Clear proposal", text: "A fixed, itemized plan with timeline and defined success metrics." },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <PageHero
        eyebrow="Let's talk"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
        title={
          <>
            Let&rsquo;s build something{" "}
            <span className="text-gradient">worth talking about.</span>
          </>
        }
        description="Tell us what you're trying to build or grow. We'll reply within one business day with honest thoughts on the opportunity — even if that means telling you we're not the right fit."
      />

      <Section id="book">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Form */}
          <div>
            <h2 className="mb-6 text-2xl font-semibold">Send us a message</h2>
            <ContactForm />
          </div>

          {/* Aside */}
          <div className="flex flex-col gap-8">
            {/* Booking */}
            <div className="rounded-2xl border border-border bg-surface/60 p-6 sm:p-8">
              <h2 className="text-xl font-semibold">Prefer to book directly?</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Grab a 30-minute discovery slot on the calendar. We&rsquo;ll come
                prepared with a look at your site, market, and the biggest opportunities.
              </p>
              <a
                href={SITE.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand px-6 font-medium text-brand-contrast shadow-[var(--shadow-brand)] transition-transform hover:-translate-y-0.5"
              >
                <Icon name="calendar" size={18} />
                Book a discovery call
              </a>
              {/* Calendly embed placeholder — replace with your inline embed */}
              <div className="mt-5 grid place-items-center rounded-xl border border-dashed border-border-strong bg-background p-8 text-center">
                <Icon name="calendar" size={28} className="text-muted" />
                <p className="mt-2 font-mono text-xs text-muted">
                  Calendly / Cal.com embed goes here
                </p>
              </div>
            </div>

            {/* Direct contact */}
            <div className="grid gap-3">
              {[
                { icon: "share" as IconName, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
                { icon: "mobile" as IconName, label: "Phone", value: SITE.phone, href: `tel:${SITE.phoneHref}` },
                { icon: "globe" as IconName, label: "Working", value: "Remote-first · Global delivery" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 rounded-xl border border-border bg-background p-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand/10 text-brand">
                    <Icon name={item.icon} size={18} />
                  </span>
                  <div className="min-w-0">
                    <div className="font-mono text-[0.65rem] uppercase tracking-wider text-muted">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a href={item.href} className="text-sm font-medium hover:text-brand">
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-sm font-medium">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* What happens next */}
      <Section className="border-t border-border bg-surface/50">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="font-mono text-sm uppercase tracking-widest text-brand">
            {"{ What happens next }"}
          </span>
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Three simple steps to get started.
          </h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 80}>
              <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-background p-6">
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-brand">
                    <Icon name={step.icon} size={20} />
                  </span>
                  <span
                    className="text-2xl font-bold text-muted"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-semibold">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
