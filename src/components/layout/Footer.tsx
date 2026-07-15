import Link from "next/link";
import { FOOTER_NAV, SITE, SOCIALS } from "@/lib/site";
import { Logo } from "@/components/ui/Logo";
import { Icon } from "@/components/ui/Icon";
import { NewsletterForm } from "./NewsletterForm";

export function Footer() {
  const year = 2026;
  return (
    <footer className="relative border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          {/* Brand + newsletter */}
          <div className="flex flex-col gap-6">
            <Link href="/" aria-label="MarkDev home" className="w-fit">
              <Logo />
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              {SITE.shortDescription}
            </p>
            <div className="max-w-sm">
              <p className="mb-2 text-sm font-medium text-foreground">
                Growth playbooks, no fluff.
              </p>
              <NewsletterForm />
              <p className="mt-2 text-xs text-muted">
                Join 4,000+ founders and marketers. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {FOOTER_NAV.map((col) => (
              <div key={col.title}>
                <h2 className="mb-4 font-mono text-xs uppercase tracking-wider text-muted">
                  {col.title}
                </h2>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={link.label + link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-strong transition-colors hover:text-brand"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact row */}
        <div className="mt-14 grid gap-6 border-t border-border pt-10 sm:grid-cols-3">
          <div>
            <div className="mb-1 font-mono text-xs uppercase tracking-wider text-muted">
              Email
            </div>
            <a href={`mailto:${SITE.email}`} className="text-sm hover:text-brand">
              {SITE.email}
            </a>
          </div>
          <div>
            <div className="mb-1 font-mono text-xs uppercase tracking-wider text-muted">
              Phone
            </div>
            <a href={`tel:${SITE.phoneHref}`} className="text-sm hover:text-brand">
              {SITE.phone}
            </a>
          </div>
          <div>
            <div className="mb-1 font-mono text-xs uppercase tracking-wider text-muted">
              Working globally
            </div>
            <span className="text-sm text-muted-strong">
              {SITE.address.line1}
            </span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col-reverse items-start justify-between gap-6 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-muted">
            © {year} {SITE.legalName}. All rights reserved. ·{" "}
            <Link href="/privacy" className="hover:text-brand">
              Privacy
            </Link>{" "}
            ·{" "}
            <Link href="/terms" className="hover:text-brand">
              Terms
            </Link>
          </p>
          <div className="flex items-center gap-2">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-strong transition-colors hover:border-brand hover:text-brand"
              >
                <SocialGlyph label={s.label} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialGlyph({ label }: { label: string }) {
  const common = {
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    "aria-hidden": true as const,
  };
  switch (label) {
    case "LinkedIn":
      return (
        <svg {...common} fill="currentColor">
          <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.3 8.65 22 10.7 22 14.1V21h-4v-6.1c0-1.45-.03-3.3-2-3.3-2 0-2.3 1.57-2.3 3.2V21H9z" />
        </svg>
      );
    case "X":
      return (
        <svg {...common} fill="currentColor">
          <path d="M17.5 3h3l-6.6 7.5L21.7 21h-6l-4.3-5.6L6.3 21H3.3l7-8L2.6 3h6.1l3.9 5.1zm-1 16h1.6L8.1 4.6H6.4z" />
        </svg>
      );
    case "Dribbble":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.75">
          <circle cx="12" cy="12" r="9.5" />
          <path d="M5 7c4 4 9 5 14 4M3.5 13c6-1 10 1 12 6M9 3c4 5 5.5 11 4.5 18" />
        </svg>
      );
    case "GitHub":
      return (
        <svg {...common} fill="currentColor">
          <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
        </svg>
      );
    default: // Instagram
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.75">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
  }
}
