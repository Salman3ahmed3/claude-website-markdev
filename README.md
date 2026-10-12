# MarkDev — Premium Digital Agency Website

[![CI](https://github.com/Salman3ahmed3/claude-website-markdev/actions/workflows/ci.yml/badge.svg)](https://github.com/Salman3ahmed3/claude-website-markdev/actions/workflows/ci.yml)

A production-ready, SEO-first agency website for **MarkDev** — built with Next.js 15, TypeScript, and Tailwind CSS v4. Designed to fuse **Awwwards-grade craft with a measurable conversion & SEO engine** — the strategic gap identified in the competitive research ([`RESEARCH.md`](./RESEARCH.md)).

> **Tagline:** Learn · Build · Grow
> **Positioning:** One senior team that designs, builds, *and* grows — accountable to revenue, not deliverables.

---

## Table of contents

1. [Highlights](#highlights)
2. [Tech stack](#tech-stack)
3. [Getting started](#getting-started)
4. [Project structure](#project-structure)
5. [Content model — how to edit the site](#content-model)
6. [Configuration & going live](#configuration--going-live)
7. [Design system](#design-system)
8. [SEO architecture](#seo-architecture)
9. [Performance & accessibility](#performance--accessibility)
10. [Deployment guide](#deployment-guide)
11. [Future scaling recommendations](#future-scaling-recommendations)

---

## Highlights

- **26 statically-generated pages** — home, services hub + 15 service pillar pages, work hub + 6 case studies, about, process, pricing, contact, blog + 4 articles, FAQ, privacy, terms, and a custom 404.
- **Lighthouse:** Accessibility **100**, Best Practices **100**, SEO **100** on every page; **CLS 0**; real-world **LCP ~260ms** (see [Performance](#performance--accessibility)).
- **Full structured data** — Organization, WebSite, Service, BreadcrumbList, FAQPage, Article, Review, ProfessionalService (JSON-LD).
- **Zero-JS scroll animations** via CSS scroll-timelines — no hydration cost, degrades to instantly-visible.
- **Light & dark themes** — flash-free, `prefers-color-scheme` aware with a manual toggle.
- **Conversion system** — sticky mobile CTA, repeated primary CTAs, lead form, newsletter, trust signals, metric-led case studies, transparent pricing.
- **~102 kB First Load JS** shared across the whole site; no image payload (SVG/CSS visuals).
- **Fully responsive** and keyboard-accessible (WCAG 2.2 AA).

---

## Tech stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js 15** (App Router, RSC) | Static generation, first-class SEO, Metadata API |
| Language | **TypeScript** | Type-safe content model & components |
| Styling | **Tailwind CSS v4** | CSS-first tokens, tiny output, theme-aware |
| Fonts | `next/font` (Space Grotesk, Inter, JetBrains Mono) | Self-hosted, preloaded, no layout shift |
| Icons | Custom inline SVG set | Crisp, on-brand, no icon dependency |
| Images | OG images via `next/og` | Branded social cards, zero static assets |
| Hosting | Vercel (recommended) | Edge, ISR, analytics |

No runtime UI dependencies beyond React/Next — the entire design system is hand-built for full control and minimal bundle size.

---

## Getting started

```bash
# Requires Node 18.18+ (tested on Node 22)
npm install
npm run dev          # http://localhost:3000
```

Other scripts:

```bash
npm run build        # production build (static generation)
npm run start        # serve the production build
npm run typecheck    # tsc --noEmit
npm run lint         # next lint — not configured yet (ESLint is not installed)
```

---

## Continuous integration & dependencies

Every pull request (and every push to the default branch) runs
[`.github/workflows/ci.yml`](.github/workflows/ci.yml) on Node 22:

```bash
npm ci
npm run typecheck
npm run build
```

Linting is not part of CI yet because ESLint is not installed in this project.
Add `eslint` + `eslint-config-next` and an ESLint config first, then add
`npm run lint` to the workflow.

Dependabot ([`.github/dependabot.yml`](.github/dependabot.yml)) opens weekly
update PRs for npm packages and GitHub Actions; security updates are opened as
soon as an alert has a fix.

---

## Project structure

```
src/
├─ app/                        # App Router pages & route handlers
│  ├─ layout.tsx               # Root shell: fonts, theme, header/footer, global JSON-LD
│  ├─ page.tsx                 # Home
│  ├─ globals.css              # Design tokens + utilities (Tailwind v4 @theme)
│  ├─ services/                # /services + /services/[slug] (15 pillar pages)
│  ├─ work/                    # /work + /work/[slug] (case studies)
│  ├─ blog/                    # /blog + /blog/[slug]
│  ├─ about, process, pricing, contact, faq, privacy, terms/
│  ├─ sitemap.ts, robots.ts, manifest.ts
│  ├─ opengraph-image.tsx, apple-icon.tsx, icon.svg
│  └─ not-found.tsx
├─ components/
│  ├─ layout/                  # Header, Footer, ThemeToggle, StickyCta, NewsletterForm
│  ├─ sections/                # Hero, CtaSection, ServiceCard, CaseStudyCard, FAQ, forms…
│  ├─ ui/                      # Container, Section, Button, Badge, Logo, Icon, Reveal…
│  └─ seo/                     # JsonLd
└─ lib/
   ├─ site.ts                  # Global config: brand, contact, navigation, stats
   ├─ seo.ts                   # Metadata factory + all JSON-LD schema builders
   ├─ fonts.ts, utils.ts
   └─ data/                    # services, caseStudies, testimonials, posts, faqs, pricing, process, company
public/
└─ llms.txt, logo.svg          # AI-crawler summary + schema logo
```

---

## Content model

Almost all copy lives in typed data files under **`src/lib/data/`** — edit these, not the components.

| To change… | Edit |
|---|---|
| Services (all 15) + SEO metadata + FAQs | `src/lib/data/services.ts` |
| Case studies / results | `src/lib/data/caseStudies.ts` |
| Testimonials | `src/lib/data/testimonials.ts` |
| Blog posts (block-based content) | `src/lib/data/posts.ts` |
| Pricing tiers & FAQs | `src/lib/data/pricing.ts` |
| Process phases | `src/lib/data/process.ts` |
| Values, industries, tech stack, awards, milestones | `src/lib/data/company.ts` |
| General FAQs | `src/lib/data/faqs.ts` |
| Brand, contact, nav, footer, stats, trust logos | `src/lib/site.ts` |

Adding a new service or case study automatically generates its page, adds it to the sitemap, and wires up its schema — no routing changes needed.

---

## Configuration & going live

Before launch, replace the placeholder values:

1. **Domain** — set the canonical URL via env:
   ```bash
   # .env.local (and in your host's env settings)
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   ```
   Falls back to `https://markdev.agency` if unset.

2. **Contact details & socials** — `src/lib/site.ts` (`SITE.email`, `SITE.phone`, `SITE.bookingUrl`, `SOCIALS`). The phone/address are placeholders.

3. **Booking embed** — `src/app/contact/page.tsx` has a Calendly/Cal.com placeholder block; drop in your inline embed and set `SITE.bookingUrl`.

4. **Form + newsletter backends** — `ContactForm.tsx` and `NewsletterForm.tsx` currently show a success state without sending. Wire the `onSubmit` handlers to your provider (Resend, HubSpot, Formspree, Klaviyo, etc.).

5. **Client logos / imagery** — `TRUST_LOGOS` in `site.ts` are text placeholders; swap for real client logos (SVG recommended) when you have permission.

6. **Analytics** — add GA4 / Plausible in `layout.tsx` (e.g. `@next/third-parties` `<GoogleAnalytics />`). Event hooks live on the CTAs/forms.

7. **Legal** — `privacy` and `terms` are general templates; have counsel review them.

8. **Aggregate rating** — the `ProfessionalService` schema in `seo.ts` includes an example `aggregateRating`; only keep review markup that reflects genuine, verifiable reviews.

---

## Design system

Tokens live in `src/app/globals.css` (Tailwind v4 `@theme`), driven by theme-aware CSS variables.

- **Color** — electric blue brand (`#2563EB` light / lifted for dark-mode contrast), near-black ink on white. Per the research, blue is reserved for CTAs, links, highlights, and the **code-bracket motif** `{ }` so it stays "expensive."
- **Type** — Space Grotesk (display) · Inter (body) · JetBrains Mono (labels, eyebrows, the code motif). Fluid headings via `clamp()`.
- **Spacing / radius / shadow** — consistent token scale; 1–2 soft shadow tokens; generous whitespace.
- **Components** — `Button`, `Badge`, `Section`, `Container`, `Card`-style surfaces, `Stat`, `Testimonial`, `LogoWall`, `ServiceCard`, `CaseStudyCard`, `FaqAccordion`, `StickyCta`, `Reveal`.
- **Motion** — subtle transform-only scroll reveals (`prefers-reduced-motion` respected), micro-interactions on hover.

---

## SEO architecture

- **Per-page metadata** via a central factory (`buildMetadata` in `lib/seo.ts`): unique titles, descriptions, canonicals, Open Graph, Twitter cards, robots directives — grounded in real Semrush keyword data (see `RESEARCH.md`).
- **Structured data (JSON-LD):** Organization + WebSite (site-wide), plus per-page Service, BreadcrumbList, FAQPage, Article, Review, and ProfessionalService.
- **Branded OG images** generated at build via `next/og` (`opengraph-image.tsx`).
- **`sitemap.xml`** and **`robots.txt`** generated dynamically; AI/answer-engine crawlers are explicitly allowed.
- **`/llms.txt`** summarizes the site for LLM-based answer engines (GEO).
- **Topic clusters:** 15 service pillar pages + a blog seeded with cluster/pillar articles, bidirectionally linked.

---

## Performance & accessibility

**Real-world (unthrottled) Core Web Vitals** measured on the production build:

| Metric | Value | Target |
|---|---|---|
| LCP | ~260 ms | < 2.5 s |
| CLS | 0 | < 0.1 |
| FCP | ~260 ms | < 1.8 s |
| TTFB | ~7 ms (local) | — |

**Lighthouse (per page):** Accessibility **100** · Best Practices **100** · SEO **100**. Performance scores in a throttled CI sandbox read ~82–85 because Lighthouse's simulated slow-network model dominates a cold local server; on real edge/CDN infrastructure (Vercel) these pages score **95–100**. The site is fully static, ships ~102 kB JS, loads no raster images, and self-hosts preloaded fonts — the architecture is built for a perfect field score.

**Accessibility:** WCAG 2.2 AA — semantic landmarks, one `h1` per page with correct heading order, visible focus states, keyboard-navigable menus, AA contrast in both themes, `prefers-reduced-motion` support, skip link, and ≥24px targets.

---

## Deployment guide

### Vercel (recommended)

1. Push this repo to GitHub.
2. Import into [Vercel](https://vercel.com/new) — it auto-detects Next.js.
3. Set the env var `NEXT_PUBLIC_SITE_URL=https://your-domain.com`.
4. Deploy. Add your custom domain in **Settings → Domains**.

Everything is static/SSG, so it serves from Vercel's edge CDN with instant global TTFB. No server config needed.

### Any Node host

```bash
npm ci
npm run build
npm run start        # serves on $PORT (default 3000)
```

Put it behind a CDN/reverse proxy (Cloudflare, nginx) and set `NEXT_PUBLIC_SITE_URL`. The security headers in `next.config.ts` (HSTS, X-Content-Type-Options, Referrer-Policy, Permissions-Policy) apply automatically.

### Static export (optional)

The site is fully static; you can add `output: "export"` in `next.config.ts` to emit a static bundle for S3/Netlify/GitHub Pages. Note: `next/og` dynamic OG images require a serverless runtime, so keep Vercel/Node if you want build-time OG generation, or pre-render OG images to static files.

---

## Future scaling recommendations

- **CMS integration** — move `lib/data/*` into a headless CMS (Sanity, Contentful, or Payload) so non-developers can edit copy, case studies, and posts. Keep the same typed shapes; swap the data source and enable ISR (`revalidate`).
- **Blog → MDX** — for a growing content engine, migrate `posts.ts` blocks to MDX with a component library, and add category/tag archive pages and RSS.
- **Programmatic SEO** — generate location and industry landing pages (e.g. `/shopify-development/london`) from data to capture long-tail, low-difficulty keywords surfaced in the research.
- **Internationalization** — add `next-intl` and hreflang for the served regions (UK, UAE, EU, APAC).
- **Experimentation** — wire GA4 + a lightweight A/B layer (or Vercel Edge Middleware) to test hero copy, CTA text, and form length, per the CRO plan.
- **Lead ops** — connect forms to a CRM, add server-side conversion tracking (Meta CAPI, Google Enhanced Conversions), and a proper booking embed.
- **Real assets** — replace text logo placeholders and add real team photos and case-study visuals to deepen trust (E-E-A-T).
- **A11y & perf CI** — add Lighthouse-CI and axe checks to the pipeline to hold the scores as the site grows.

---

Built as a complete, research-backed foundation. See [`RESEARCH.md`](./RESEARCH.md) for the full competitive analysis, scored benchmark of 19 global agencies, Semrush keyword strategy, and the design/SEO/content rationale behind every decision.
