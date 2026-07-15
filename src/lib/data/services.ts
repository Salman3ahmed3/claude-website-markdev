export type ServiceCategory = "Build" | "Grow" | "Design";

export type Capability = { title: string; description: string };

export type Service = {
  slug: string;
  category: ServiceCategory;
  icon: string;
  navLabel: string;
  title: string; // H1
  eyebrow: string;
  summary: string; // used on cards
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  heroSubhead: string;
  outcomes: string[];
  capabilities: Capability[];
  deliverables: string[];
  stack: string[];
  faqs: { question: string; answer: string }[];
  related: string[];
  priceFrom: string;
  timeline: string;
};

export const SERVICES: Service[] = [
  /* ------------------------------------------------------------------ BUILD */
  {
    slug: "web-development",
    category: "Build",
    icon: "code",
    navLabel: "Web Development",
    title: "Full-Stack Web Development",
    eyebrow: "Build",
    summary:
      "Fast, secure, search-optimized websites and platforms engineered in Next.js and React — built to convert and scale.",
    metaTitle: "Full-Stack Web Development Agency | Next.js & React Experts",
    metaDescription:
      "MarkDev builds fast, SEO-first websites and web platforms in Next.js, React & TypeScript. Sub-second load times, 100 Lighthouse scores, and design that converts.",
    keywords: [
      "web development agency",
      "full stack web development",
      "next.js development agency",
      "react development company",
      "custom website development",
      "headless website development",
    ],
    heroSubhead:
      "We engineer websites the way modern software is built — component-driven, blazing fast, and measurable. Every page is tuned for Core Web Vitals, search, and conversion from the first commit.",
    outcomes: [
      "Sub-second load times that lift rankings and conversions",
      "100/100 Lighthouse targets across performance, SEO & accessibility",
      "A component design system your team can extend for years",
      "Clean, typed, documented code with zero vendor lock-in",
    ],
    capabilities: [
      { title: "Marketing & brand sites", description: "High-conversion sites in Next.js with a CMS your marketers actually enjoy using." },
      { title: "Headless architecture", description: "Decoupled front-ends wired to Sanity, Contentful, or your API of choice for total flexibility." },
      { title: "Web platforms & portals", description: "Auth, dashboards, billing, and role-based access engineered for scale and security." },
      { title: "Migrations & replatforming", description: "Move off WordPress, Wix, or legacy stacks with zero SEO loss and a measurable speed jump." },
    ],
    deliverables: [
      "Production Next.js codebase (TypeScript)",
      "Reusable component & design system",
      "Headless CMS integration & editor training",
      "Technical SEO & schema baked in",
      "CI/CD pipeline & deployment",
      "Analytics + event tracking setup",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Sanity / Contentful", "Vercel", "PostgreSQL"],
    faqs: [
      { question: "Which tech stack do you build on?", answer: "We default to Next.js, React, and TypeScript on Vercel — the same stack behind many of the fastest sites on the web. When a project calls for something else, we recommend the right tool rather than the familiar one." },
      { question: "Can you work with our existing CMS or backend?", answer: "Yes. We build headless front-ends that connect to almost any CMS or API — Sanity, Contentful, WordPress, Shopify, or your own services — so your team keeps the tools it already knows." },
      { question: "How do you guarantee performance?", answer: "Performance budgets are set before we write code and enforced in CI. We track Core Web Vitals in production and treat a regression like a bug." },
    ],
    related: ["shopify-development", "web-applications", "performance-optimization", "ui-ux-design"],
    priceFrom: "$12k",
    timeline: "4–10 weeks",
  },
  {
    slug: "shopify-development",
    category: "Build",
    icon: "cart",
    navLabel: "Shopify Development",
    title: "Shopify & Shopify Plus Development",
    eyebrow: "Build",
    summary:
      "Custom Shopify and headless commerce experiences that load fast, look premium, and turn browsers into buyers.",
    metaTitle: "Shopify Development Agency | Shopify Plus & Headless Experts",
    metaDescription:
      "Custom Shopify & Shopify Plus development that converts. MarkDev builds fast, on-brand storefronts — themes, headless (Hydrogen), apps & migrations. Book a call.",
    keywords: [
      "shopify development agency",
      "shopify plus agency",
      "headless shopify development",
      "hire shopify developer",
      "shopify store development",
      "hydrogen shopify development",
    ],
    heroSubhead:
      "From custom themes to fully headless Hydrogen builds, we craft storefronts that feel like a brand and perform like a machine — faster checkouts, higher AOV, and fewer abandoned carts.",
    outcomes: [
      "Storefronts that load in under a second on mobile",
      "Higher conversion rate and average order value",
      "On-brand product and checkout experiences",
      "Clean theme architecture your team can manage",
    ],
    capabilities: [
      { title: "Custom Shopify themes", description: "Pixel-perfect, conversion-optimized themes built from your brand — no bloated template markup." },
      { title: "Headless with Hydrogen", description: "React-powered storefronts on Shopify's Oxygen for the fastest possible shopping experience." },
      { title: "Shopify Plus builds", description: "Scripts, Functions, B2B, and checkout extensibility for high-volume merchants." },
      { title: "Apps, integrations & migrations", description: "Custom apps, third-party integrations, and clean migrations from WooCommerce, Magento & more." },
    ],
    deliverables: [
      "Custom, conversion-optimized storefront",
      "Product, collection & checkout UX",
      "App & subscription integrations",
      "Speed & Core Web Vitals optimization",
      "Analytics, pixels & server-side tracking",
      "Merchant training & documentation",
    ],
    stack: ["Shopify Plus", "Liquid", "Hydrogen", "React", "Shopify Functions", "Klaviyo", "Metafields", "GraphQL Storefront API"],
    faqs: [
      { question: "Do you build custom themes or use templates?", answer: "We build custom, brand-led themes. Templates get you live quickly but bury your brand under generic markup and slow scripts. Our themes are engineered for speed and conversion from the ground up." },
      { question: "Should we go headless?", answer: "Headless (Hydrogen) unlocks the fastest storefronts and total design freedom, but it is not right for every merchant. On a discovery call we will tell you honestly whether the investment pays off for your catalog and roadmap." },
      { question: "Can you migrate us without losing SEO or sales?", answer: "Yes. We map every URL, preserve redirects, and migrate content and data carefully so rankings and revenue carry over. Most clients see a speed and conversion lift after migrating." },
    ],
    related: ["web-development", "conversion-rate-optimization", "performance-optimization", "meta-ads"],
    priceFrom: "$9k",
    timeline: "3–8 weeks",
  },
  {
    slug: "web-applications",
    category: "Build",
    icon: "app",
    navLabel: "Custom Web Apps",
    title: "Custom Web Application Development",
    eyebrow: "Build",
    summary:
      "SaaS products, dashboards, and internal tools engineered for reliability, security, and scale.",
    metaTitle: "Custom Web Application Development | SaaS & Platform Engineers",
    metaDescription:
      "MarkDev designs and builds custom web applications, SaaS products, dashboards & internal tools — secure, scalable, and production-grade. From MVP to enterprise.",
    keywords: [
      "custom web application development",
      "saas development agency",
      "web app development company",
      "custom software development",
      "mvp development agency",
      "dashboard development",
    ],
    heroSubhead:
      "Whether you are validating an MVP or scaling a platform to millions of users, we architect web applications that are secure by default, observable in production, and a pleasure to build on.",
    outcomes: [
      "A production-grade product, not a prototype that breaks",
      "Architecture that scales without a costly rewrite",
      "Security, auth, and compliance handled from day one",
      "Velocity your team can maintain long after launch",
    ],
    capabilities: [
      { title: "SaaS product engineering", description: "Multi-tenant apps with auth, billing, roles, and admin — built to onboard customers on launch day." },
      { title: "Internal tools & dashboards", description: "Data-dense interfaces that replace spreadsheets and give teams real-time visibility." },
      { title: "APIs & integrations", description: "Robust REST and GraphQL APIs, webhooks, and third-party integrations that just work." },
      { title: "AI-powered features", description: "LLM features, semantic search, and automation wired in responsibly with the latest Claude models." },
    ],
    deliverables: [
      "Architected, documented codebase",
      "Authentication, roles & billing",
      "Admin & analytics dashboards",
      "Automated tests & CI/CD",
      "Observability & error tracking",
      "Scalable cloud infrastructure",
    ],
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "tRPC / GraphQL", "Stripe", "AWS / Vercel"],
    faqs: [
      { question: "Can you build our MVP and then scale it?", answer: "That is our sweet spot. We ship a focused MVP that proves the core value, then evolve the same clean architecture into a scalable product — no throwaway code." },
      { question: "How do you handle security and compliance?", answer: "Security is designed in, not bolted on: least-privilege access, encrypted data, audited dependencies, and patterns that support SOC 2 and GDPR requirements." },
      { question: "Do you provide ongoing engineering after launch?", answer: "Yes. Most product clients continue with us on a dedicated retainer for new features, scaling, and reliability work." },
    ],
    related: ["web-development", "flutter-app-development", "ui-ux-design", "website-maintenance"],
    priceFrom: "$20k",
    timeline: "6–16 weeks",
  },
  {
    slug: "flutter-app-development",
    category: "Build",
    icon: "mobile",
    navLabel: "Flutter App Development",
    title: "Flutter App Development",
    eyebrow: "Build",
    summary:
      "Beautiful iOS and Android apps from a single codebase — native performance, half the cost, one team.",
    metaTitle: "Flutter App Development Company | iOS & Android From One Codebase",
    metaDescription:
      "MarkDev builds cross-platform mobile apps in Flutter — native performance, gorgeous UI, and one codebase for iOS & Android. From concept to App Store launch.",
    keywords: [
      "flutter app development company",
      "flutter development agency",
      "cross platform app development",
      "mobile app development company",
      "hire flutter developers",
      "ios android app development",
    ],
    heroSubhead:
      "One codebase, both platforms, native feel. We design and ship Flutter apps that look hand-crafted for each store while cutting your build and maintenance cost nearly in half.",
    outcomes: [
      "iOS and Android from a single, maintainable codebase",
      "Native 60fps performance and platform-correct UX",
      "Faster time to market and lower long-term cost",
      "A smooth path through App Store and Play review",
    ],
    capabilities: [
      { title: "Product & UX design", description: "Native-feeling flows and motion designed for each platform's conventions." },
      { title: "Flutter engineering", description: "Clean architecture, state management, offline support, and real-time features that scale." },
      { title: "Backend & APIs", description: "Firebase or custom back-ends for auth, data, push, and payments." },
      { title: "Launch & growth", description: "Store optimization, releases, analytics, and iteration after launch." },
    ],
    deliverables: [
      "iOS & Android apps from one codebase",
      "Design system & component library",
      "Backend, auth & push notifications",
      "In-app analytics & crash reporting",
      "App Store & Play Store submission",
      "Post-launch support & releases",
    ],
    stack: ["Flutter", "Dart", "Firebase", "Riverpod / Bloc", "REST / GraphQL", "Stripe", "Fastlane", "Sentry"],
    faqs: [
      { question: "Why Flutter instead of native?", answer: "Flutter gives you near-native performance with one codebase, which typically halves cost and doubles delivery speed versus building separate iOS and Android apps — without a visible compromise for users." },
      { question: "Will the app feel native on each platform?", answer: "Yes. We honor each platform's navigation, gestures, and motion so an iPhone app feels like iOS and an Android app feels like Android." },
      { question: "Can you take an app from idea to the store?", answer: "Absolutely — we handle strategy, design, engineering, store submission, and post-launch iteration end to end." },
    ],
    related: ["web-applications", "ui-ux-design", "branding", "web-development"],
    priceFrom: "$18k",
    timeline: "6–14 weeks",
  },
  {
    slug: "website-maintenance",
    category: "Build",
    icon: "wrench",
    navLabel: "Website Maintenance",
    title: "Website Maintenance & Care Plans",
    eyebrow: "Build",
    summary:
      "Proactive maintenance, monitoring, and improvements that keep your site fast, secure, and always on.",
    metaTitle: "Website Maintenance Services | Monthly Care & Support Plans",
    metaDescription:
      "Keep your site fast, secure, and improving with MarkDev care plans — updates, monitoring, backups, security, and a dedicated team on call. Predictable monthly support.",
    keywords: [
      "website maintenance services",
      "website care plan",
      "website support retainer",
      "shopify maintenance",
      "wordpress maintenance services",
      "ongoing website support",
    ],
    heroSubhead:
      "Your website is a revenue asset — it deserves an engineering team, not a break-fix ticket queue. Our care plans keep it secure, fast, and continuously improving.",
    outcomes: [
      "Zero-drama uptime with proactive monitoring",
      "Security patches and backups handled for you",
      "A steady stream of small improvements, not just fixes",
      "One dedicated team that already knows your stack",
    ],
    capabilities: [
      { title: "Proactive monitoring", description: "Uptime, performance, and error monitoring with alerts before customers notice." },
      { title: "Security & updates", description: "Dependency patches, backups, and hardening on a predictable cadence." },
      { title: "Continuous improvement", description: "A monthly pool of hours for enhancements, experiments, and content." },
      { title: "Priority support", description: "A named team and SLA-backed response times when it matters most." },
    ],
    deliverables: [
      "Uptime & performance monitoring",
      "Scheduled backups & restore testing",
      "Security patches & dependency updates",
      "Monthly improvement hours",
      "Priority support with an SLA",
      "Monthly health & analytics report",
    ],
    stack: ["Vercel", "Sentry", "Checkly", "GitHub Actions", "Shopify", "WordPress", "Cloudflare", "Datadog"],
    faqs: [
      { question: "What platforms do you support?", answer: "We support Next.js and headless sites, Shopify, WordPress, and most modern stacks. If we did not build it, we start with a short audit to get familiar." },
      { question: "What is your response time?", answer: "Plans include an SLA — typically same-business-day for standard issues and rapid response for critical incidents affecting revenue." },
      { question: "Can unused hours roll over?", answer: "Improvement hours are scoped per plan; we are transparent about usage in a monthly report and will right-size your plan as needs change." },
    ],
    related: ["performance-optimization", "web-development", "shopify-development", "conversion-rate-optimization"],
    priceFrom: "$900/mo",
    timeline: "Ongoing",
  },
  {
    slug: "performance-optimization",
    category: "Build",
    icon: "gauge",
    navLabel: "Performance Optimization",
    title: "Website Performance Optimization",
    eyebrow: "Build",
    summary:
      "Turn a slow site into a fast one — better Core Web Vitals, higher rankings, and measurably more revenue.",
    metaTitle: "Website Performance Optimization | Core Web Vitals & Speed Experts",
    metaDescription:
      "MarkDev makes slow sites fast. We fix Core Web Vitals, cut load times, and lift rankings & conversions with a data-driven performance sprint. Free speed audit.",
    keywords: [
      "website performance optimization",
      "core web vitals optimization",
      "website speed optimization services",
      "page speed optimization",
      "improve lcp cls inp",
      "site speed audit",
    ],
    heroSubhead:
      "Every 100ms of latency costs you conversions and rankings. We diagnose exactly what is slowing your site down and fix it — with before-and-after numbers you can take to the board.",
    outcomes: [
      "Green Core Web Vitals (LCP, INP, CLS)",
      "Faster loads that lift rankings and conversions",
      "A concrete before/after performance report",
      "Guardrails so speed does not regress later",
    ],
    capabilities: [
      { title: "Performance audit", description: "Lab and field data analysis to find the real bottlenecks — not guesses." },
      { title: "Front-end optimization", description: "Image, font, JavaScript, and rendering fixes that move the needle." },
      { title: "Delivery & caching", description: "CDN, edge caching, and compression tuned for global speed." },
      { title: "Monitoring & budgets", description: "Performance budgets in CI and real-user monitoring so gains stick." },
    ],
    deliverables: [
      "Full performance audit & roadmap",
      "Core Web Vitals remediation",
      "Image, font & JS optimization",
      "Caching & CDN configuration",
      "Before/after benchmark report",
      "Performance budgets & monitoring",
    ],
    stack: ["Lighthouse", "WebPageTest", "Chrome DevTools", "Next.js", "Cloudflare", "Vercel", "Core Web Vitals", "RUM"],
    faqs: [
      { question: "How much faster can you make our site?", answer: "It depends where you start, but most sites we optimize see load times cut by 40–70% and Core Web Vitals move from failing to passing. We share targets before we begin." },
      { question: "Do faster sites really convert better?", answer: "Consistently. Google's own research links every second of delay to measurable drops in conversion. Speed is one of the highest-ROI improvements you can make." },
      { question: "Will this affect our SEO?", answer: "Positively. Core Web Vitals are a ranking signal, and a faster site is crawled and indexed more efficiently. We coordinate closely with your SEO goals." },
    ],
    related: ["web-development", "seo", "website-maintenance", "conversion-rate-optimization"],
    priceFrom: "$4k",
    timeline: "2–4 weeks",
  },

  /* ------------------------------------------------------------------- GROW */
  {
    slug: "digital-marketing",
    category: "Grow",
    icon: "megaphone",
    navLabel: "Digital Marketing",
    title: "Digital Marketing",
    eyebrow: "Grow",
    summary:
      "Full-funnel growth strategy across SEO, paid, social, and CRO — one team accountable to revenue, not vanity metrics.",
    metaTitle: "Digital Marketing Agency | Full-Funnel Growth Tied to Revenue",
    metaDescription:
      "MarkDev is a full-funnel digital marketing agency. SEO, Google & Meta Ads, social, and CRO managed by one senior team — accountable to pipeline and revenue, not clicks.",
    keywords: [
      "digital marketing agency",
      "full funnel marketing agency",
      "performance marketing agency",
      "growth marketing agency",
      "roi driven marketing",
      "b2b digital marketing",
    ],
    heroSubhead:
      "Channels do not grow businesses — systems do. We build a full-funnel growth engine across search, paid, social, and conversion, all measured against the only metric that matters: revenue.",
    outcomes: [
      "One integrated strategy instead of disconnected channels",
      "Reporting tied to pipeline and revenue, not vanity metrics",
      "Compounding organic growth plus efficient paid scale",
      "A senior team, not an account manager relaying tickets",
    ],
    capabilities: [
      { title: "Growth strategy", description: "A full-funnel plan with clear channel roles, targets, and a testing roadmap." },
      { title: "Acquisition", description: "SEO, Google Ads, and Meta Ads working together instead of competing for budget." },
      { title: "Conversion & retention", description: "CRO, email, and lifecycle marketing that lift the value of every visitor." },
      { title: "Analytics & attribution", description: "Clean tracking and dashboards so you always know what is working." },
    ],
    deliverables: [
      "Full-funnel growth strategy",
      "Channel management (SEO, PPC, social)",
      "Conversion & landing page optimization",
      "Marketing analytics & dashboards",
      "Monthly strategy & reporting calls",
      "Creative & copy production",
    ],
    stack: ["GA4", "Google Ads", "Meta Ads Manager", "Semrush", "Looker Studio", "HubSpot", "Klaviyo", "Hotjar"],
    faqs: [
      { question: "Do I have to commit to every channel?", answer: "No. We start where the ROI is clearest and expand as we prove returns. Many clients begin with one or two channels and grow the engagement from there." },
      { question: "How do you report results?", answer: "Every client gets a live dashboard tied to revenue metrics plus a monthly strategy call. No vanity-metric decks — just what is working, what is not, and what is next." },
      { question: "How is this different from a typical agency?", answer: "You work with senior strategists, not a rotating cast of juniors, and every channel is coordinated around one funnel rather than siloed." },
    ],
    related: ["seo", "google-ads", "meta-ads", "conversion-rate-optimization"],
    priceFrom: "$3k/mo",
    timeline: "Ongoing",
  },
  {
    slug: "seo",
    category: "Grow",
    icon: "search",
    navLabel: "SEO",
    title: "Search Engine Optimization (SEO)",
    eyebrow: "Grow",
    summary:
      "Compounding organic growth from technical SEO, content, and authority — traffic that pays dividends for years.",
    metaTitle: "SEO Agency | Technical, Content & Authority SEO That Compounds",
    metaDescription:
      "MarkDev is an SEO agency that grows organic revenue — technical SEO, content clusters, and authority building backed by Semrush data. Rank, convert, compound.",
    keywords: [
      "seo agency",
      "seo services",
      "technical seo agency",
      "ecommerce seo services",
      "b2b seo agency",
      "content seo strategy",
    ],
    heroSubhead:
      "Paid traffic stops the moment you stop paying. SEO compounds. We combine technical excellence, topical authority, and content that ranks and converts to build a channel that grows while you sleep.",
    outcomes: [
      "Rankings for the keywords that actually drive revenue",
      "A technically flawless, fast, crawlable site",
      "Content clusters that build topical authority",
      "Organic traffic that compounds month over month",
    ],
    capabilities: [
      { title: "Technical SEO", description: "Crawlability, indexation, schema, site speed, and architecture fixed at the root." },
      { title: "Keyword & content strategy", description: "Semrush-driven research mapped to pillar pages and topic clusters." },
      { title: "On-page & content", description: "Pages engineered to rank and convert, written by people who understand your buyer." },
      { title: "Authority & digital PR", description: "Editorially earned links and mentions that move rankings the right way." },
    ],
    deliverables: [
      "Technical SEO audit & fixes",
      "Keyword & competitor research (Semrush)",
      "Content & topic cluster roadmap",
      "On-page optimization & schema",
      "Link acquisition & digital PR",
      "Monthly rankings & revenue reporting",
    ],
    stack: ["Semrush", "Google Search Console", "GA4", "Ahrefs", "Screaming Frog", "Schema.org", "Surfer", "Looker Studio"],
    faqs: [
      { question: "How long until SEO works?", answer: "Technical wins can show within weeks; content and authority typically compound over 3–6 months. We front-load the fastest wins and set honest expectations for the rest." },
      { question: "Do you guarantee rankings?", answer: "No credible agency guarantees specific rankings — Google controls the algorithm. We do guarantee a rigorous, transparent process and reporting tied to traffic and revenue, not just positions." },
      { question: "Is SEO worth it if we already run ads?", answer: "Absolutely. SEO lowers your blended customer acquisition cost over time and keeps working when you pause paid. The two channels reinforce each other." },
    ],
    related: ["digital-marketing", "performance-optimization", "google-ads", "conversion-rate-optimization"],
    priceFrom: "$2.5k/mo",
    timeline: "Ongoing",
  },
  {
    slug: "google-ads",
    category: "Grow",
    icon: "google",
    navLabel: "Google Ads",
    title: "Google Ads Management",
    eyebrow: "Grow",
    summary:
      "Profitable paid search, shopping, and performance max campaigns — engineered for pipeline, not just clicks.",
    metaTitle: "Google Ads Agency | Profitable PPC, Shopping & Performance Max",
    metaDescription:
      "MarkDev manages Google Ads that turn a profit — search, shopping, PMax & YouTube tuned to CPA and ROAS targets. Waste less, convert more. Free account audit.",
    keywords: [
      "google ads agency",
      "ppc agency",
      "google ads management services",
      "performance max agency",
      "google shopping ads agency",
      "adwords management",
    ],
    heroSubhead:
      "Most Google Ads accounts quietly burn budget on the wrong searches. We rebuild yours around intent, margin, and conversion data so every dollar is accountable to a return.",
    outcomes: [
      "Lower cost per acquisition and higher ROAS",
      "Budget focused on searches that actually convert",
      "Conversion tracking you can finally trust",
      "Landing pages built to close the click",
    ],
    capabilities: [
      { title: "Account strategy & structure", description: "Rebuilt around intent and margin, with clean conversion tracking as the foundation." },
      { title: "Search & Shopping", description: "Keyword, feed, and bid strategy tuned to CPA and ROAS targets." },
      { title: "Performance Max & YouTube", description: "Asset and audience strategy that keeps Google's automation on target." },
      { title: "Landing pages & CRO", description: "We build the pages that turn expensive clicks into customers." },
    ],
    deliverables: [
      "Account audit & restructure",
      "Conversion tracking & server-side setup",
      "Search, Shopping & PMax campaigns",
      "Ad copy & creative testing",
      "Landing page optimization",
      "Transparent ROAS/CPA reporting",
    ],
    stack: ["Google Ads", "Google Analytics 4", "Merchant Center", "Google Tag Manager", "Looker Studio", "Optmyzr", "Server-side tagging"],
    faqs: [
      { question: "What ad spend do you work with?", answer: "We work best with monthly ad budgets from around $5k upward, where structure and optimization meaningfully change the outcome. We are transparent about fit on our first call." },
      { question: "How do you charge — flat fee or percentage?", answer: "Both models are available. For most accounts a flat management fee aligns incentives better than a percentage of spend, and we will recommend what is fair for your budget." },
      { question: "Can you fix an account someone else built?", answer: "Yes — most of our accounts are rescues. We start with a free audit that shows exactly where budget is leaking and what we would change." },
    ],
    related: ["meta-ads", "conversion-rate-optimization", "digital-marketing", "seo"],
    priceFrom: "$1.5k/mo",
    timeline: "Ongoing",
  },
  {
    slug: "meta-ads",
    category: "Grow",
    icon: "meta",
    navLabel: "Meta Ads",
    title: "Meta Ads (Facebook & Instagram)",
    eyebrow: "Grow",
    summary:
      "Scroll-stopping creative and disciplined media buying on Facebook & Instagram that scales profitably.",
    metaTitle: "Meta Ads Agency | Profitable Facebook & Instagram Advertising",
    metaDescription:
      "MarkDev runs Meta Ads that scale — thumb-stopping creative, sharp targeting, and clean tracking on Facebook & Instagram, tuned to ROAS. Request a free audit.",
    keywords: [
      "meta ads agency",
      "facebook ads agency",
      "instagram ads agency",
      "facebook advertising agency",
      "meta ads management",
      "paid social agency",
    ],
    heroSubhead:
      "On Meta, creative is the new targeting. We pair a high-velocity creative engine with disciplined media buying and clean tracking to find profitable scale — and keep it.",
    outcomes: [
      "Creative that stops the scroll and drives action",
      "Profitable, repeatable scaling — not lucky spikes",
      "Accurate tracking despite iOS privacy changes",
      "A testing engine that never runs out of angles",
    ],
    capabilities: [
      { title: "Creative strategy & production", description: "A steady pipeline of static, video, and UGC concepts built to convert." },
      { title: "Media buying & scaling", description: "Account structure and budget strategy that scales winners without breaking ROAS." },
      { title: "Tracking & attribution", description: "Conversions API and server-side tracking for signal Meta can actually optimize on." },
      { title: "Full-funnel testing", description: "Prospecting to retargeting, systematically tested and iterated." },
    ],
    deliverables: [
      "Meta account audit & strategy",
      "Conversions API & pixel setup",
      "Ad creative (static, video, UGC)",
      "Campaign build & daily management",
      "Systematic creative testing",
      "Weekly performance reporting",
    ],
    stack: ["Meta Ads Manager", "Conversions API", "Meta Pixel", "Triple Whale", "GA4", "Canva / Figma", "CapCut"],
    faqs: [
      { question: "Do you produce the ad creative too?", answer: "Yes. Creative is the single biggest lever on Meta, so we run an in-house creative engine producing statics, video, and UGC — not just buying media against assets you supply." },
      { question: "How do you deal with tracking and iOS changes?", answer: "We implement the Conversions API and server-side tracking so Meta receives clean signal despite privacy changes, then validate it against your real sales data." },
      { question: "What budget do I need to see results?", answer: "We recommend a minimum of around $4k/month in ad spend to test and scale meaningfully. Below that, we will tell you honestly if it is the right time." },
    ],
    related: ["google-ads", "social-media-marketing", "conversion-rate-optimization", "shopify-development"],
    priceFrom: "$1.5k/mo",
    timeline: "Ongoing",
  },
  {
    slug: "social-media-marketing",
    category: "Grow",
    icon: "share",
    navLabel: "Social Media Marketing",
    title: "Social Media Marketing",
    eyebrow: "Grow",
    summary:
      "Brand-building content and community management that turn followers into customers and customers into fans.",
    metaTitle: "Social Media Marketing Agency | Content, Community & Growth",
    metaDescription:
      "MarkDev builds brands on social — strategy, content production, and community management that grow an engaged audience and drive real business results.",
    keywords: [
      "social media marketing agency",
      "social media management services",
      "content marketing agency",
      "instagram marketing agency",
      "linkedin marketing agency",
      "tiktok marketing agency",
    ],
    heroSubhead:
      "Social media is where trust is built before anyone buys. We craft the strategy, content, and community management that grow an audience and turn attention into revenue.",
    outcomes: [
      "A distinct brand voice that stands out in the feed",
      "Consistent, high-quality content without the scramble",
      "An engaged community, not just a follower count",
      "Social that feeds your pipeline, not just your ego",
    ],
    capabilities: [
      { title: "Social strategy", description: "Channel, content pillars, and cadence mapped to your audience and goals." },
      { title: "Content production", description: "Short-form video, design, and copy produced on a reliable schedule." },
      { title: "Community management", description: "Engagement and moderation that builds relationships and surfaces leads." },
      { title: "Influencer & UGC", description: "Creator partnerships and user-generated content that scale trust." },
    ],
    deliverables: [
      "Social media strategy & calendar",
      "Content production (video & design)",
      "Copywriting & scheduling",
      "Community management",
      "Influencer / UGC coordination",
      "Monthly analytics & insights",
    ],
    stack: ["Instagram", "TikTok", "LinkedIn", "YouTube", "Later / Buffer", "Figma", "CapCut", "Sprout Social"],
    faqs: [
      { question: "Which platforms should we be on?", answer: "The ones where your customers already spend attention — not all of them. We recommend a focused channel mix based on your audience and goals rather than spreading thin." },
      { question: "Do you create the content or just schedule it?", answer: "We produce it — strategy, video, design, and copy — then publish and manage the community. You get a finished content engine, not a scheduling tool." },
      { question: "How do you measure social ROI?", answer: "Beyond reach and engagement, we track saves, shares, profile actions, and assisted conversions, tying social back to pipeline wherever attribution allows." },
    ],
    related: ["meta-ads", "digital-marketing", "branding", "graphic-design"],
    priceFrom: "$2k/mo",
    timeline: "Ongoing",
  },
  {
    slug: "conversion-rate-optimization",
    category: "Grow",
    icon: "target",
    navLabel: "Conversion Optimization",
    title: "Conversion Rate Optimization (CRO)",
    eyebrow: "Grow",
    summary:
      "Systematic experimentation that turns the traffic you already have into measurably more revenue.",
    metaTitle: "Conversion Rate Optimization Agency | CRO & A/B Testing Experts",
    metaDescription:
      "MarkDev's CRO program turns existing traffic into revenue — research, A/B testing, and UX fixes backed by data. Lift conversion rate without spending more on ads.",
    keywords: [
      "conversion rate optimization agency",
      "cro agency",
      "cro services",
      "a/b testing agency",
      "landing page optimization",
      "ecommerce cro",
    ],
    heroSubhead:
      "Doubling your traffic is expensive. Doubling your conversion rate is free growth you already paid for. We run a rigorous CRO program that compounds the value of every visitor.",
    outcomes: [
      "More revenue from the traffic you already have",
      "Decisions driven by evidence, not opinion",
      "A prioritized, always-on testing roadmap",
      "Lower customer acquisition cost across every channel",
    ],
    capabilities: [
      { title: "Conversion research", description: "Analytics, heatmaps, session replay, and user testing to find where revenue leaks." },
      { title: "Experimentation", description: "A prioritized A/B and multivariate testing program with statistical rigor." },
      { title: "UX & messaging", description: "Copy, layout, and flow improvements grounded in behavioral insight." },
      { title: "Landing pages", description: "High-converting pages purpose-built for your campaigns and offers." },
    ],
    deliverables: [
      "Conversion research & audit",
      "Prioritized testing roadmap",
      "A/B & multivariate tests",
      "High-converting landing pages",
      "Analytics & experiment tracking",
      "Monthly insight & lift reporting",
    ],
    stack: ["GA4", "Hotjar", "Microsoft Clarity", "VWO / Optimizely", "Figma", "PostHog", "Unbounce"],
    faqs: [
      { question: "How much lift can we expect?", answer: "Results vary by starting point, but disciplined CRO commonly delivers double-digit conversion lifts over a program. We forecast realistic ranges from your current data before we begin." },
      { question: "Do we need a lot of traffic for CRO?", answer: "Higher traffic reaches statistical significance faster, but even lower-traffic sites benefit from research-led UX fixes and qualitative testing. We adapt the method to your volume." },
      { question: "Is CRO a one-time project?", answer: "The biggest gains come from an ongoing program — insight compounds as you learn what your specific audience responds to. We offer both audits and continuous engagements." },
    ],
    related: ["seo", "google-ads", "ui-ux-design", "performance-optimization"],
    priceFrom: "$3k/mo",
    timeline: "Ongoing",
  },

  /* ----------------------------------------------------------------- DESIGN */
  {
    slug: "ui-ux-design",
    category: "Design",
    icon: "layout",
    navLabel: "UI/UX Design",
    title: "UI/UX Design",
    eyebrow: "Design",
    summary:
      "Research-led product and web design that is beautiful, intuitive, and engineered to convert.",
    metaTitle: "UI/UX Design Agency | Product & Web Design That Converts",
    metaDescription:
      "MarkDev is a UI/UX design agency crafting intuitive, on-brand digital experiences — research, wireframes, design systems & prototypes built to convert and scale.",
    keywords: [
      "ui ux design agency",
      "product design agency",
      "web design agency",
      "ux design services",
      "design system agency",
      "saas ux design",
    ],
    heroSubhead:
      "Great design is not decoration — it is how a product earns trust and moves people to act. We combine user research, craft, and conversion thinking to design experiences people love and businesses profit from.",
    outcomes: [
      "Interfaces that feel effortless and on-brand",
      "Design decisions grounded in real user research",
      "A scalable design system, not one-off screens",
      "Prototypes you can test before you build",
    ],
    capabilities: [
      { title: "UX research & strategy", description: "Interviews, journey mapping, and testing that ground design in real behavior." },
      { title: "Interface design", description: "Beautiful, accessible, on-brand UI for web and product." },
      { title: "Design systems", description: "Reusable components and tokens that keep teams fast and consistent." },
      { title: "Prototyping & testing", description: "Interactive prototypes validated with users before engineering starts." },
    ],
    deliverables: [
      "UX research & user flows",
      "Wireframes & information architecture",
      "High-fidelity UI design",
      "Interactive prototypes",
      "Design system & component library",
      "Developer handoff & QA",
    ],
    stack: ["Figma", "FigJam", "Framer", "Maze", "Storybook", "Design Tokens", "Lottie"],
    faqs: [
      { question: "Do you design and build, or just design?", answer: "Both. Our designers and engineers work in one team, so what we design ships without translation loss — and we can hand off cleanly if you have your own developers." },
      { question: "Will the design be accessible?", answer: "Yes. We design to WCAG 2.2 AA by default — contrast, focus states, keyboard navigation, and semantics are part of the craft, not an afterthought." },
      { question: "Can you work from our existing brand?", answer: "Absolutely. We can extend your current brand into a full digital design system, or evolve it where it is holding the experience back." },
    ],
    related: ["branding", "web-development", "web-applications", "conversion-rate-optimization"],
    priceFrom: "$8k",
    timeline: "3–8 weeks",
  },
  {
    slug: "branding",
    category: "Design",
    icon: "diamond",
    navLabel: "Branding",
    title: "Branding & Identity",
    eyebrow: "Design",
    summary:
      "Strategy-led brand identities that command trust, justify premium pricing, and scale across every touchpoint.",
    metaTitle: "Branding Agency | Brand Strategy & Identity Design",
    metaDescription:
      "MarkDev is a branding agency building identities that command trust and premium pricing — strategy, naming, logo, visual identity & guidelines that scale.",
    keywords: [
      "branding agency",
      "brand identity design",
      "brand strategy agency",
      "logo design agency",
      "rebranding agency",
      "startup branding agency",
    ],
    heroSubhead:
      "A brand is the story people tell about you when you are not in the room. We build strategy-led identities that make premium pricing feel obvious and turn first impressions into lasting trust.",
    outcomes: [
      "A brand that signals premium and earns trust instantly",
      "Clear positioning that sets you apart from competitors",
      "A cohesive identity that scales across every channel",
      "Guidelines that keep your brand consistent as you grow",
    ],
    capabilities: [
      { title: "Brand strategy", description: "Positioning, audience, messaging, and story that give the visuals meaning." },
      { title: "Visual identity", description: "Logo, type, color, and system designed to stand out and endure." },
      { title: "Naming & voice", description: "Names and verbal identity that are ownable and memorable." },
      { title: "Guidelines & assets", description: "A complete toolkit so every team applies the brand correctly." },
    ],
    deliverables: [
      "Brand strategy & positioning",
      "Logo & visual identity system",
      "Typography & color system",
      "Brand voice & messaging",
      "Brand guidelines document",
      "Launch assets & templates",
    ],
    stack: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "Brand Guidelines", "Notion"],
    faqs: [
      { question: "Is this just a logo?", answer: "No. A logo is one output of a much bigger process. We start with strategy and positioning, then design a complete identity system — the logo is the tip of the iceberg." },
      { question: "We already have a brand — can you refine it?", answer: "Yes. Rebrands and brand evolutions are a large part of our work. We keep the equity that is working and fix what is holding you back." },
      { question: "How do you keep the brand consistent after launch?", answer: "You receive clear guidelines and ready-to-use templates, and we can extend the system as you add products, channels, and teams." },
    ],
    related: ["graphic-design", "ui-ux-design", "web-development", "social-media-marketing"],
    priceFrom: "$10k",
    timeline: "3–7 weeks",
  },
  {
    slug: "graphic-design",
    category: "Design",
    icon: "palette",
    navLabel: "Graphic Design",
    title: "Graphic Design",
    eyebrow: "Design",
    summary:
      "On-brand design for every touchpoint — from ad creative and social to pitch decks and print.",
    metaTitle: "Graphic Design Agency | On-Brand Creative For Every Channel",
    metaDescription:
      "MarkDev delivers on-brand graphic design across ad creative, social, decks, and print — polished, consistent, and produced on a reliable schedule.",
    keywords: [
      "graphic design agency",
      "creative design services",
      "ad creative agency",
      "social media design services",
      "presentation design agency",
      "marketing design services",
    ],
    heroSubhead:
      "Consistency is what makes a brand feel expensive. We produce polished, on-brand creative across every channel — so whether it is an ad, a deck, or a landing page, it always looks like you.",
    outcomes: [
      "Cohesive creative that reinforces your brand everywhere",
      "High-quality design produced on a reliable schedule",
      "Ad and social creative built to perform, not just look good",
      "A design partner that scales with your volume",
    ],
    capabilities: [
      { title: "Advertising creative", description: "Statics and motion for paid social and search that are built to convert." },
      { title: "Social & content design", description: "Feed, story, and short-form assets that stay on-brand at volume." },
      { title: "Presentation & sales decks", description: "Investor and sales decks that make your story impossible to ignore." },
      { title: "Marketing & print", description: "Landing page visuals, guides, packaging, and print collateral." },
    ],
    deliverables: [
      "Ad & performance creative",
      "Social media graphics & motion",
      "Pitch & sales deck design",
      "Marketing collateral & guides",
      "Print & packaging design",
      "Source files & templates",
    ],
    stack: ["Figma", "Adobe Creative Suite", "After Effects", "Canva", "Midjourney", "Lottie"],
    faqs: [
      { question: "Can you handle high-volume creative?", answer: "Yes. For performance and social clients we run a creative engine that ships a steady, reliable volume of on-brand assets every week." },
      { question: "Do you work from our brand guidelines?", answer: "Always — and if you do not have guidelines yet, our branding team can create them so every asset stays consistent." },
      { question: "Do we get the source files?", answer: "Yes. You own the work, including editable source files and templates your team can reuse." },
    ],
    related: ["branding", "social-media-marketing", "meta-ads", "ui-ux-design"],
    priceFrom: "$2k/mo",
    timeline: "Ongoing or per-project",
  },
];

export const SERVICE_CATEGORIES: {
  key: ServiceCategory;
  label: string;
  description: string;
}[] = [
  { key: "Build", label: "Build", description: "Websites, stores, apps & platforms engineered to perform." },
  { key: "Grow", label: "Grow", description: "Full-funnel marketing that turns attention into revenue." },
  { key: "Design", label: "Design", description: "Brand and product design that earns trust and converts." },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getRelatedServices(slug: string): Service[] {
  const service = getService(slug);
  if (!service) return [];
  return service.related
    .map((s) => getService(s))
    .filter((s): s is Service => Boolean(s));
}

export function servicesByCategory(category: ServiceCategory): Service[] {
  return SERVICES.filter((s) => s.category === category);
}
