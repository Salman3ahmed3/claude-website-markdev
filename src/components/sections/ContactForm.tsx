"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { SERVICES } from "@/lib/data/services";

const BUDGETS = [
  "Under $5k",
  "$5k – $15k",
  "$15k – $50k",
  "$50k+",
  "Ongoing retainer",
  "Not sure yet",
];

const fieldClass =
  "h-11 w-full rounded-xl border border-border bg-background px-3.5 text-sm outline-none transition-colors placeholder:text-muted focus:border-brand";
const labelClass = "mb-1.5 block text-sm font-medium";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Placeholder — wire to your form backend (Resend, HubSpot, Formspree) here.
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-background p-10 text-center">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-brand/10 text-brand">
          <Icon name="check" size={28} />
        </span>
        <h3 className="text-xl font-semibold">Thanks — message received.</h3>
        <p className="max-w-md text-muted">
          A senior strategist will reply within one business day (usually much
          faster). We&rsquo;ll review your goals and come back with next steps and a
          few honest thoughts — no boilerplate.
        </p>
        <p className="font-mono text-xs text-muted">Average reply time: under 4 hours</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-4 rounded-2xl border border-border bg-background p-6 sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name <span className="text-brand">*</span>
          </label>
          <input id="name" name="name" required autoComplete="name" placeholder="Jane Doe" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Work email <span className="text-brand">*</span>
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" placeholder="jane@company.com" className={fieldClass} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className={labelClass}>
            Company
          </label>
          <input id="company" name="company" autoComplete="organization" placeholder="Acme Inc." className={fieldClass} />
        </div>
        <div>
          <label htmlFor="service" className={labelClass}>
            What can we help with?
          </label>
          <select id="service" name="service" defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Select a service
            </option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.navLabel}>
                {s.navLabel}
              </option>
            ))}
            <option value="Multiple / Not sure">Multiple / Not sure</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="budget" className={labelClass}>
          Rough budget
        </label>
        <select id="budget" name="budget" defaultValue="" className={fieldClass}>
          <option value="" disabled>
            Select a range
          </option>
          {BUDGETS.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Tell us about your project <span className="text-brand">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="What are you trying to build or grow? What does success look like?"
          className="w-full rounded-xl border border-border bg-background px-3.5 py-3 text-sm outline-none transition-colors placeholder:text-muted focus:border-brand"
        />
      </div>

      <button
        type="submit"
        className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand px-6 font-medium text-brand-contrast shadow-[var(--shadow-brand)] transition-transform hover:-translate-y-0.5"
      >
        Send message
        <Icon name="arrow-right" size={18} />
      </button>
      <p className="text-center text-xs text-muted">
        By submitting, you agree to our{" "}
        <a href="/privacy" className="underline hover:text-brand">
          privacy policy
        </a>
        . We&rsquo;ll never share your details.
      </p>
    </form>
  );
}
