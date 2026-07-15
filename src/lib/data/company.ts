export const VALUES = [
  {
    icon: "target",
    title: "Outcomes over outputs",
    description:
      "We're not here to ship deliverables — we're here to move the metric that matters. Every decision is measured against your business goals.",
  },
  {
    icon: "gauge",
    title: "Craft is non-negotiable",
    description:
      "Speed, accessibility, and polish aren't upsells. Best-in-class quality is the baseline of everything we put our name on.",
  },
  {
    icon: "shield",
    title: "Radical transparency",
    description:
      "Clear scopes, honest timelines, live reporting, and no jargon. You always know what we're doing, why, and what it's worth.",
  },
  {
    icon: "spark",
    title: "Senior, always",
    description:
      "No juniors learning on your budget. The people who pitch the work are the people who do it, from kickoff to launch.",
  },
] as const;

export const DIFFERENTIATORS = [
  {
    title: "Build and grow under one roof",
    description:
      "Most agencies either build or market. We do both — so your site is engineered to convert and your marketing is engineered to scale it. No handoffs, no blame.",
  },
  {
    title: "Engineering-grade quality",
    description:
      "We build like a modern software company: typed, tested, documented code, performance budgets, and 100-Lighthouse targets. Your foundation is an asset, not a liability.",
  },
  {
    title: "Data before opinions",
    description:
      "Semrush research, analytics, and experimentation drive our recommendations. We bring evidence, not just taste — then we prove it with results.",
  },
  {
    title: "A true partner, not a vendor",
    description:
      "Senior team, direct communication, and skin in the game. We measure our success by your growth and design every engagement to compound.",
  },
] as const;

export const INDUSTRIES = [
  { name: "E-commerce & DTC", description: "Shopify & headless commerce that scales revenue." },
  { name: "SaaS & Technology", description: "Products and marketing sites for software companies." },
  { name: "Fintech", description: "Secure, trustworthy platforms for financial products." },
  { name: "Health & Wellness", description: "Apps and brands people trust with their wellbeing." },
  { name: "Professional Services", description: "Premium brands and sites that win larger deals." },
  { name: "B2B & Industrial", description: "Lead-generating sites and SEO for complex sales." },
  { name: "Hospitality & Lifestyle", description: "Experiences that convert browsers into bookings." },
  { name: "Startups & Scaleups", description: "From MVP to market — build fast, grow faster." },
] as const;

export type TechGroup = { category: string; items: string[] };

export const TECH_STACK: TechGroup[] = [
  { category: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer / Motion", "Astro"] },
  { category: "Backend", items: ["Node.js", "PostgreSQL", "Prisma", "GraphQL", "tRPC", "Redis"] },
  { category: "Commerce", items: ["Shopify Plus", "Hydrogen", "Liquid", "Stripe", "Klaviyo", "Recharge"] },
  { category: "Mobile", items: ["Flutter", "Dart", "Firebase", "Riverpod", "Fastlane"] },
  { category: "Cloud & DevOps", items: ["Vercel", "AWS", "Cloudflare", "GitHub Actions", "Docker", "Sentry"] },
  { category: "Marketing & Data", items: ["Semrush", "GA4", "Google Ads", "Meta Ads", "Looker Studio", "HubSpot"] },
];

export const AWARDS = [
  { title: "Awwwds — Site of the Day", year: "2025" },
  { title: "CSS Design Awards — Winner", year: "2025" },
  { title: "Clutch — Top Development Agency", year: "2024" },
  { title: "Shopify — Partner", year: "Since 2020" },
  { title: "Google — Partner", year: "Since 2021" },
  { title: "Meta — Business Partner", year: "Since 2022" },
] as const;

export const MILESTONES = [
  { year: "2016", text: "MarkDev founded on a simple idea: build and grow, under one roof." },
  { year: "2019", text: "Crossed 100 shipped projects and became a Shopify Partner." },
  { year: "2021", text: "Expanded into full-funnel performance marketing and CRO." },
  { year: "2023", text: "Went fully remote-first, delivering across four continents." },
  { year: "2025", text: "250+ projects, $180M+ in influenced revenue, and counting." },
] as const;
