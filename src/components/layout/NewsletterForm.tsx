"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";

export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "done">("idle");
  const [email, setEmail] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Placeholder handler — wire to your ESP (Klaviyo/HubSpot/Resend) here.
    if (!email) return;
    setStatus("done");
    setEmail("");
  }

  if (status === "done") {
    return (
      <p className="flex items-center gap-2 text-sm text-brand">
        <Icon name="check" size={18} />
        You&rsquo;re in. Watch your inbox for our next playbook.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-2 sm:flex-row">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
        className="h-11 flex-1 rounded-full border border-border-strong bg-background px-4 text-sm outline-none transition-colors placeholder:text-muted focus:border-brand"
      />
      <button
        type="submit"
        className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-brand px-5 text-sm font-medium text-brand-contrast transition-transform hover:-translate-y-0.5"
      >
        Subscribe
        <Icon name="arrow-right" size={16} />
      </button>
    </form>
  );
}
