export type Metric = { value: string; label: string };

export type CaseStudy = {
  slug: string;
  client: string;
  title: string;
  industry: string;
  region: string;
  year: string;
  services: string[]; // service slugs
  serviceLabels: string[];
  summary: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  hero: string;
  metrics: Metric[];
  challenge: string;
  approach: string[];
  results: string;
  quote: { text: string; author: string; role: string };
  accent: string; // tailwind gradient tokens
  featured: boolean;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "everbloom-shopify-replatform",
    client: "Everbloom",
    title: "Headless Shopify replatform that lifted revenue 63%",
    industry: "E-commerce / Beauty",
    region: "United States",
    year: "2025",
    services: ["shopify-development", "conversion-rate-optimization", "performance-optimization"],
    serviceLabels: ["Shopify Development", "CRO", "Performance"],
    summary:
      "A fast-growing beauty brand was capped by a slow, template-based storefront. We rebuilt it headless on Hydrogen and ran a CRO program that compounded the gains.",
    metaTitle: "Everbloom Case Study | Headless Shopify Replatform +63% Revenue",
    metaDescription:
      "How MarkDev rebuilt Everbloom's storefront headless on Shopify Hydrogen and ran CRO to lift revenue 63%, cut load time 71%, and raise conversion rate 38%.",
    keywords: ["shopify case study", "headless shopify hydrogen", "ecommerce cro results"],
    hero: "Everbloom's growth was outpacing a storefront that took four seconds to load. We gave them a headless foundation built to scale.",
    metrics: [
      { value: "+63%", label: "Online revenue" },
      { value: "+38%", label: "Conversion rate" },
      { value: "-71%", label: "Page load time" },
      { value: "+21%", label: "Average order value" },
    ],
    challenge:
      "Everbloom had product-market fit and rising paid traffic, but a bloated template storefront loaded in over four seconds on mobile. Conversion rates lagged the category and every dollar of ad spend worked harder than it should have.",
    approach: [
      "Rebuilt the storefront headless on Shopify Hydrogen for sub-second loads",
      "Redesigned the product and checkout experience around conversion research",
      "Migrated catalog, content, and SEO with a full redirect map — zero ranking loss",
      "Launched an ongoing A/B testing program on PDP, cart, and checkout",
    ],
    results:
      "Within a quarter, online revenue rose 63% on flat traffic. Load time dropped 71%, conversion rate climbed 38%, and the CRO program continues to compound month over month.",
    quote: {
      text: "MarkDev didn't just make our store faster — they turned it into our best-performing sales channel. The numbers speak for themselves.",
      author: "Priya Nair",
      role: "VP Growth, Everbloom",
    },
    accent: "from-brand-600 to-accent-500",
    featured: true,
  },
  {
    slug: "vaultpay-saas-platform",
    client: "Vaultpay",
    title: "A fintech SaaS platform built from MVP to Series A",
    industry: "Fintech / SaaS",
    region: "United Kingdom",
    year: "2025",
    services: ["web-applications", "ui-ux-design", "web-development"],
    serviceLabels: ["Web App", "UI/UX", "Engineering"],
    summary:
      "We designed and engineered Vaultpay's payments platform from a blank canvas to a production product that helped them raise their Series A.",
    metaTitle: "Vaultpay Case Study | Fintech SaaS Platform MVP to Series A",
    metaDescription:
      "How MarkDev designed and built Vaultpay's fintech SaaS platform from MVP to a scalable, secure product — onboarding customers on launch day and powering a Series A.",
    keywords: ["saas case study", "fintech platform development", "mvp to scale"],
    hero: "Vaultpay had a bold vision for B2B payments and a tight runway. We turned it into a secure, scalable product investors could believe in.",
    metrics: [
      { value: "11 wks", label: "MVP to launch" },
      { value: "$6M", label: "Series A raised" },
      { value: "99.98%", label: "Uptime" },
      { value: "0", label: "Security incidents" },
    ],
    challenge:
      "Vaultpay needed to move from concept to a demoable, secure payments platform fast enough to close their next round — without accruing the technical debt that would haunt them at scale.",
    approach: [
      "Ran a focused discovery to define the smallest product that proved core value",
      "Designed a clean, trustworthy interface for a high-stakes financial workflow",
      "Engineered a multi-tenant architecture with security and auditing built in",
      "Shipped an MVP in 11 weeks, then hardened it into a production platform",
    ],
    results:
      "Vaultpay onboarded customers on launch day, maintained 99.98% uptime with zero security incidents, and used the platform to raise a $6M Series A. We remain their product engineering partner.",
    quote: {
      text: "They operate like an in-house team that happens to be the best engineers we've ever worked with. Our platform is the reason we closed the round.",
      author: "Tom Whitfield",
      role: "Co-founder & CTO, Vaultpay",
    },
    accent: "from-indigo-600 to-brand-500",
    featured: true,
  },
  {
    slug: "northwind-seo-growth",
    client: "Northwind",
    title: "540% organic growth for a B2B logistics platform",
    industry: "B2B / Logistics",
    region: "Germany",
    year: "2024",
    services: ["seo", "web-development", "conversion-rate-optimization"],
    serviceLabels: ["SEO", "Web", "CRO"],
    summary:
      "Northwind was invisible in search. A technical-plus-content SEO program made organic their number-one pipeline source in under a year.",
    metaTitle: "Northwind Case Study | 540% Organic Traffic Growth (B2B SEO)",
    metaDescription:
      "How MarkDev grew Northwind's organic traffic 540% and made SEO their top pipeline source with technical SEO, content clusters, and CRO. Read the B2B SEO case study.",
    keywords: ["b2b seo case study", "organic traffic growth", "content cluster strategy"],
    hero: "A powerful logistics platform nobody could find in search. We fixed the foundation, then built the authority.",
    metrics: [
      { value: "+540%", label: "Organic traffic" },
      { value: "#1", label: "Pipeline source" },
      { value: "320+", label: "Page-one keywords" },
      { value: "-44%", label: "Blended CAC" },
    ],
    challenge:
      "Northwind's product was strong but its site was technically hobbled and thin on content. Competitors owned the search results for every high-intent query, forcing an over-reliance on expensive paid channels.",
    approach: [
      "Resolved crawl, indexation, and Core Web Vitals issues at the root",
      "Built pillar pages and topic clusters around high-intent buyer queries",
      "Produced conversion-focused content mapped to the sales funnel",
      "Optimized templates and CTAs to convert the new organic traffic",
    ],
    results:
      "Organic traffic grew 540% in under a year, Northwind ranked on page one for 320+ commercial keywords, and organic became their single largest pipeline source — cutting blended acquisition cost 44%.",
    quote: {
      text: "MarkDev turned SEO from a line item into our most reliable growth engine. It compounds every single month.",
      author: "Lena Fischer",
      role: "Head of Marketing, Northwind",
    },
    accent: "from-emerald-500 to-brand-500",
    featured: true,
  },
  {
    slug: "kinetic-flutter-app",
    client: "Kinetic",
    title: "A cross-platform fitness app with a 4.9★ store rating",
    industry: "Health & Fitness",
    region: "Australia",
    year: "2024",
    services: ["flutter-app-development", "ui-ux-design", "branding"],
    serviceLabels: ["Flutter", "UI/UX", "Branding"],
    summary:
      "Kinetic wanted a premium fitness app on both platforms without doubling the budget. Flutter delivered one codebase and a 4.9-star launch.",
    metaTitle: "Kinetic Case Study | Cross-Platform Flutter Fitness App",
    metaDescription:
      "How MarkDev designed and built Kinetic's cross-platform fitness app in Flutter — one codebase for iOS & Android, a 4.9★ store rating, and 50k downloads in 90 days.",
    keywords: ["flutter app case study", "fitness app development", "cross platform mobile"],
    hero: "One codebase, two stores, zero compromise. Kinetic launched to a 4.9-star rating and fast organic growth.",
    metrics: [
      { value: "4.9★", label: "App store rating" },
      { value: "50k", label: "Downloads in 90 days" },
      { value: "1", label: "Codebase, both platforms" },
      { value: "-46%", label: "Build cost vs native" },
    ],
    challenge:
      "Kinetic needed a polished, native-feeling app on iOS and Android but could not justify building and maintaining two separate native codebases on an early-stage budget.",
    approach: [
      "Designed a distinct brand and a motion-rich, native-feeling product experience",
      "Built the app in Flutter for genuine native performance from one codebase",
      "Integrated auth, subscriptions, push, and workout tracking with a Firebase backend",
      "Optimized store listings and shipped a smooth launch across both platforms",
    ],
    results:
      "Kinetic launched to a 4.9-star rating on both stores, hit 50,000 downloads in 90 days, and reached market for 46% less than a comparable dual-native build — freeing budget for growth.",
    quote: {
      text: "It looks and feels like we spent a fortune building two native apps. We didn't — and it's better for it.",
      author: "Marcus Lee",
      role: "Founder, Kinetic",
    },
    accent: "from-orange-500 to-brand-500",
    featured: false,
  },
  {
    slug: "halcyon-brand-website",
    client: "Halcyon",
    title: "A rebrand and site that repositioned a consultancy upmarket",
    industry: "Professional Services",
    region: "United Arab Emirates",
    year: "2025",
    services: ["branding", "web-development", "ui-ux-design"],
    serviceLabels: ["Branding", "Web", "UI/UX"],
    summary:
      "Halcyon was winning enterprise work with a startup brand. A strategy-led rebrand and website made their premium positioning obvious.",
    metaTitle: "Halcyon Case Study | Rebrand & Website Repositioning Upmarket",
    metaDescription:
      "How MarkDev rebranded consultancy Halcyon and built a website that repositioned them upmarket — larger deals, shorter sales cycles, and a brand that matches the work.",
    keywords: ["rebrand case study", "consultancy website", "premium brand identity"],
    hero: "Enterprise clients, a startup brand. We closed the gap with a strategy-led identity and a website that commands the room.",
    metrics: [
      { value: "+58%", label: "Average deal size" },
      { value: "-30%", label: "Sales cycle" },
      { value: "2.4x", label: "Qualified leads" },
      { value: "8 days", label: "To first inbound after launch" },
    ],
    challenge:
      "Halcyon delivered enterprise-grade consulting but their brand and website signaled early-stage, undercutting pricing and lengthening every sales conversation.",
    approach: [
      "Repositioned the brand around a clear, premium point of view",
      "Designed a refined visual identity and verbal tone to match",
      "Built a fast, elegant website engineered to convert high-intent buyers",
      "Structured the site and content around their most valuable services",
    ],
    results:
      "Average deal size rose 58%, the sales cycle shortened 30%, and qualified inbound leads more than doubled. The new brand finally matched the caliber of the work.",
    quote: {
      text: "For the first time, our brand walks into the room as confidently as our team does. It changed the conversations we have with clients.",
      author: "Yousef Al-Rashid",
      role: "Managing Partner, Halcyon",
    },
    accent: "from-brand-700 to-accent-500",
    featured: false,
  },
  {
    slug: "outbound-paid-acquisition",
    client: "Outbound",
    title: "Scaling paid acquisition to 4.1x ROAS across Google & Meta",
    industry: "DTC / Consumer",
    region: "Canada",
    year: "2025",
    services: ["google-ads", "meta-ads", "conversion-rate-optimization"],
    serviceLabels: ["Google Ads", "Meta Ads", "CRO"],
    summary:
      "Outbound had strong products but plateaued ad accounts. A rebuild of tracking, structure, and creative unlocked profitable scale.",
    metaTitle: "Outbound Case Study | 4.1x ROAS Scaling Google & Meta Ads",
    metaDescription:
      "How MarkDev rebuilt Outbound's paid acquisition across Google & Meta — clean tracking, sharp creative, and CRO — to reach 4.1x blended ROAS while scaling spend 3x.",
    keywords: ["paid ads case study", "google meta ads roas", "dtc performance marketing"],
    hero: "Great products, stalled ad accounts. We rebuilt the engine and found profitable scale on both platforms.",
    metrics: [
      { value: "4.1x", label: "Blended ROAS" },
      { value: "3x", label: "Ad spend scaled" },
      { value: "-37%", label: "Cost per acquisition" },
      { value: "+52%", label: "Conversion rate" },
    ],
    challenge:
      "Outbound's paid accounts had plateaued: tracking was unreliable after iOS changes, campaign structure was messy, and creative had gone stale — so scaling spend only raised CPA.",
    approach: [
      "Rebuilt conversion tracking with server-side tagging and the Conversions API",
      "Restructured Google and Meta accounts around intent and clean signal",
      "Launched a high-velocity creative testing engine for Meta",
      "Optimized landing pages to convert the incoming paid traffic",
    ],
    results:
      "Blended ROAS reached 4.1x while ad spend tripled. Cost per acquisition fell 37% and landing page conversion rate rose 52% — turning paid into a channel Outbound could confidently scale.",
    quote: {
      text: "We'd been told our accounts were 'as good as they'd get.' MarkDev tripled our spend and improved ROAS at the same time.",
      author: "Dana Roy",
      role: "CEO, Outbound",
    },
    accent: "from-rose-500 to-brand-500",
    featured: false,
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}

export const FEATURED_CASE_STUDIES = CASE_STUDIES.filter((c) => c.featured);
