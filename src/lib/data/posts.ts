export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "callout"; text: string };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  cluster: string;
  author: string;
  date: string; // ISO
  readingTime: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  featured: boolean;
  body: Block[];
};

export const POSTS: Post[] = [
  {
    slug: "how-much-does-a-website-cost",
    title: "How Much Does a Website Cost in 2026? An Honest Agency Breakdown",
    excerpt:
      "Website pricing ranges from a few hundred dollars to six figures. Here's exactly what drives the cost — and how to know what you actually need.",
    category: "Web Development",
    cluster: "Web Development",
    author: "MarkDev",
    date: "2026-05-18",
    readingTime: "8 min read",
    metaTitle: "How Much Does a Website Cost in 2026? Real Agency Pricing",
    metaDescription:
      "A transparent breakdown of website costs in 2026 — DIY, freelancer, and agency pricing, what drives cost, and how to budget for a site that actually performs.",
    keywords: ["how much does a website cost", "website cost 2026", "website pricing", "agency website cost"],
    featured: true,
    body: [
      { type: "p", text: "\"How much does a website cost?\" is the most common question we hear — and the most honest answer is: it depends on what the website needs to do. A digital business card and a revenue-generating platform are both technically 'a website,' but they're worlds apart in effort and value. This guide breaks down the real ranges in 2026 and, more importantly, what drives them." },
      { type: "h2", text: "The three tiers of website pricing" },
      { type: "p", text: "Broadly, there are three ways to get a website built, each with a different cost and outcome." },
      { type: "h3", text: "1. DIY builders — $0 to $50/month" },
      { type: "p", text: "Tools like Squarespace, Wix, and Shopify's basic themes let you launch quickly for the price of a subscription. They're a reasonable starting point for validating an idea, but you'll hit ceilings fast: generic design, limited performance, and a brand that looks like everyone else's." },
      { type: "h3", text: "2. Freelancers — $1,500 to $10,000" },
      { type: "p", text: "A skilled freelancer can deliver a solid custom site. The trade-off is capacity and breadth: one person rarely excels at strategy, design, engineering, and SEO simultaneously, and a solo dependency is a business risk if they're unavailable." },
      { type: "h3", text: "3. Agencies — $9,000 to $150,000+" },
      { type: "p", text: "A quality agency brings a full team — strategy, design, engineering, and marketing — and takes accountability for outcomes, not just deliverables. This is where you invest when your website is a genuine growth asset rather than a cost center." },
      { type: "callout", text: "At MarkDev, most marketing sites start around $9k–$12k, and custom applications from $20k. The right number depends entirely on scope — which is why we quote a fixed, itemized price after a short discovery call." },
      { type: "h2", text: "What actually drives the cost" },
      { type: "p", text: "Two sites with the same page count can differ 10x in price. Here's what moves the number:" },
      { type: "ul", items: [
        "Custom design vs. template — bespoke design that reflects your brand takes more effort than adapting a theme, but it's often what separates a premium brand from a forgettable one.",
        "Functionality — a brochure site is straightforward; e-commerce, memberships, integrations, and custom applications add real engineering.",
        "Content — professional copywriting, photography, and illustration are frequently underestimated line items.",
        "Performance & SEO — building for sub-second loads, Core Web Vitals, and search visibility is engineering work that pays for itself in traffic and conversion.",
        "Integrations — CRMs, payment systems, ERPs, and marketing tools each add scope.",
      ]},
      { type: "h2", text: "How to think about it as an investment" },
      { type: "p", text: "The right question isn't 'what's the cheapest site I can get?' — it's 'what will this site return?' A site that converts 3% instead of 1.5% doubles the value of every marketing dollar you'll ever spend driving traffic to it. Viewed that way, the build cost is often recovered in the first few months." },
      { type: "quote", text: "The bitterness of poor quality remains long after the sweetness of low price is forgotten.", cite: "A truth every business owner learns eventually" },
      { type: "h2", text: "The bottom line" },
      { type: "p", text: "Budget for the outcome you need, not the lowest sticker price. If your website is central to how you win customers, treat it like the revenue asset it is. And insist on transparency: a good partner will tell you exactly what you're paying for and why — before you commit." },
    ],
  },
  {
    slug: "core-web-vitals-guide",
    title: "Core Web Vitals in 2026: The Complete Guide to a Faster, Higher-Ranking Site",
    excerpt:
      "Core Web Vitals affect both your rankings and your revenue. Here's what they are, what 'good' looks like, and how to fix them.",
    category: "Performance",
    cluster: "Performance & SEO",
    author: "MarkDev",
    date: "2026-04-02",
    readingTime: "10 min read",
    metaTitle: "Core Web Vitals Guide 2026 | Improve LCP, INP & CLS",
    metaDescription:
      "The complete 2026 guide to Core Web Vitals — what LCP, INP and CLS mean, the thresholds that count as 'good', and a practical playbook to fix each one.",
    keywords: ["core web vitals", "improve lcp", "inp optimization", "cls fix", "page speed 2026"],
    featured: true,
    body: [
      { type: "p", text: "Core Web Vitals are Google's way of measuring real-world user experience — and they're a confirmed ranking factor. But rankings are only half the story: faster sites convert measurably better. This guide explains each metric and gives you a practical playbook to get into the green." },
      { type: "h2", text: "The three Core Web Vitals" },
      { type: "h3", text: "Largest Contentful Paint (LCP) — loading" },
      { type: "p", text: "LCP measures how long it takes for the largest visible element (usually a hero image or headline) to render. Aim for under 2.5 seconds. Slow LCP usually comes from large unoptimized images, render-blocking resources, or slow server response." },
      { type: "h3", text: "Interaction to Next Paint (INP) — responsiveness" },
      { type: "p", text: "INP replaced First Input Delay in 2024 and measures how quickly your page responds to user interactions across the whole visit. Aim for under 200 milliseconds. Poor INP is almost always caused by heavy JavaScript blocking the main thread." },
      { type: "h3", text: "Cumulative Layout Shift (CLS) — visual stability" },
      { type: "p", text: "CLS measures how much your layout jumps around as it loads. Aim for under 0.1. The usual culprits are images and ads without reserved dimensions, and fonts that swap and reflow text." },
      { type: "callout", text: "Good targets at a glance: LCP < 2.5s · INP < 200ms · CLS < 0.1 — measured at the 75th percentile of real users, not just in a lab test." },
      { type: "h2", text: "How to fix each one" },
      { type: "h3", text: "Improving LCP" },
      { type: "ul", items: [
        "Serve modern image formats (AVIF/WebP) and correctly sized responsive images.",
        "Preload your hero image and critical fonts.",
        "Reduce server response time with caching and a CDN.",
        "Eliminate render-blocking CSS and JavaScript above the fold.",
      ]},
      { type: "h3", text: "Improving INP" },
      { type: "ul", items: [
        "Ship less JavaScript — code-split and lazy-load anything not needed immediately.",
        "Break up long tasks so the main thread stays responsive.",
        "Defer non-critical third-party scripts (chat widgets, analytics, pixels).",
        "Use a modern framework that streams and hydrates efficiently.",
      ]},
      { type: "h3", text: "Improving CLS" },
      { type: "ul", items: [
        "Always set explicit width and height (or aspect-ratio) on images and video.",
        "Reserve space for ads, embeds, and dynamic content.",
        "Use font-display strategies that avoid layout-shifting swaps.",
        "Never insert content above existing content after load.",
      ]},
      { type: "h2", text: "Why this is worth doing" },
      { type: "p", text: "Google's own research has repeatedly linked speed to conversion: even a one-second delay can measurably reduce conversions. Combine that with the ranking benefit and Core Web Vitals become one of the highest-ROI investments available — you're improving traffic and conversion at the same time." },
      { type: "p", text: "If your vitals are failing and you're not sure where to start, a focused performance sprint can usually move you from red to green in two to four weeks. That's the fastest revenue you'll find hiding in your own site." },
    ],
  },
  {
    slug: "shopify-vs-headless",
    title: "Shopify vs. Headless Commerce: Which Is Right for Your Store?",
    excerpt:
      "Headless commerce promises the fastest storefronts and total design freedom — but it isn't right for every merchant. Here's how to decide.",
    category: "E-commerce",
    cluster: "Shopify & Commerce",
    author: "MarkDev",
    date: "2026-03-11",
    readingTime: "7 min read",
    metaTitle: "Shopify vs Headless Commerce: Which Is Right For You?",
    metaDescription:
      "A practical comparison of standard Shopify vs. headless (Hydrogen) commerce — performance, cost, flexibility, and how to decide which fits your store.",
    keywords: ["shopify vs headless", "headless commerce", "shopify hydrogen", "headless shopify"],
    featured: false,
    body: [
      { type: "p", text: "Headless commerce is one of the most-discussed topics in e-commerce — and one of the most misunderstood. Going headless can unlock the fastest storefront on the web, or it can add cost and complexity you didn't need. Here's a clear-eyed comparison." },
      { type: "h2", text: "What 'headless' actually means" },
      { type: "p", text: "In a standard Shopify setup, your storefront (what customers see) and Shopify's commerce engine (products, cart, checkout) are tightly coupled through a theme. In a headless setup, you decouple them: you build a custom front-end — often in React using Shopify's Hydrogen framework — that talks to Shopify's Storefront API. Shopify still handles cart and checkout; you control everything else." },
      { type: "h2", text: "The case for standard Shopify" },
      { type: "ul", items: [
        "Faster and cheaper to launch and maintain.",
        "A huge ecosystem of apps that work out of the box.",
        "Non-technical teams can manage content and merchandising easily.",
        "With a well-built custom theme, performance can still be excellent.",
      ]},
      { type: "h2", text: "The case for headless" },
      { type: "ul", items: [
        "The fastest possible storefront — sub-second loads that lift conversion and SEO.",
        "Total design and UX freedom, unconstrained by theme limitations.",
        "Cleaner integration of content, personalization, and custom logic.",
        "A future-proof front-end you can evolve independently of the platform.",
      ]},
      { type: "callout", text: "Rule of thumb: if a well-built custom theme meets your needs, start there. Go headless when performance, brand experience, or complex functionality justify the added investment — and when your catalog and traffic make the ROI clear." },
      { type: "h2", text: "The honest trade-offs of headless" },
      { type: "p", text: "Headless isn't free. It requires ongoing engineering, some apps need custom re-integration, and non-technical editing needs to be designed for deliberately. For many merchants a modern custom theme delivers 90% of the benefit at a fraction of the cost. For high-volume brands where every 100ms and every pixel of brand experience translates to real revenue, headless pays for itself." },
      { type: "h2", text: "How to decide" },
      { type: "p", text: "Ask three questions: Is my current storefront's speed or flexibility genuinely limiting revenue? Do I have (or want) ongoing engineering support? Does my order volume make a conversion lift worth the investment? If you answer yes to all three, headless is likely worth it. If not, a great custom theme is the smarter move — and you can always go headless later." },
    ],
  },
  {
    slug: "full-funnel-growth-system",
    title: "The Full-Funnel Growth System: How Modern Agencies Actually Drive Revenue",
    excerpt:
      "Channels don't grow businesses — systems do. Here's the full-funnel framework we use to turn marketing spend into predictable revenue.",
    category: "Digital Marketing",
    cluster: "Growth Marketing",
    author: "MarkDev",
    date: "2026-02-14",
    readingTime: "9 min read",
    metaTitle: "The Full-Funnel Growth System | How Agencies Drive Revenue",
    metaDescription:
      "A framework for full-funnel growth marketing — how SEO, paid, social, and CRO work together as one system tied to revenue, not siloed vanity metrics.",
    keywords: ["full funnel marketing", "growth marketing system", "performance marketing framework", "digital marketing strategy"],
    featured: false,
    body: [
      { type: "p", text: "Most companies buy marketing one channel at a time: an SEO agency here, a PPC freelancer there, a social contractor somewhere else. Each optimizes their slice, none owns the outcome, and the result is a pile of disconnected metrics with no clear line to revenue. The fix isn't a better channel — it's a better system." },
      { type: "h2", text: "Think in funnels, not channels" },
      { type: "p", text: "Every customer moves through the same journey: they become aware of you, consider you, decide, and (if you do it right) come back and refer others. A full-funnel system assigns each channel a job in that journey and measures them as a team." },
      { type: "h3", text: "Awareness — get discovered" },
      { type: "p", text: "SEO, social content, and top-of-funnel paid campaigns introduce you to people who don't know you yet. The metric that matters here is qualified reach, not raw impressions." },
      { type: "h3", text: "Consideration — build trust" },
      { type: "p", text: "Content, retargeting, email, and social proof keep you present while prospects evaluate. This is where most funnels leak — and where a coordinated system wins, because the same message follows the customer across channels." },
      { type: "h3", text: "Conversion — close the deal" },
      { type: "p", text: "High-intent paid search, optimized landing pages, and CRO turn interest into revenue. A small conversion-rate improvement here multiplies the return on everything upstream." },
      { type: "h3", text: "Retention — compound the value" },
      { type: "p", text: "Email, lifecycle marketing, and community turn one-time buyers into repeat customers and advocates — the cheapest growth there is." },
      { type: "callout", text: "The key insight: a 20% conversion-rate improvement makes every awareness and consideration dollar 20% more effective. That's why we never sell channels in isolation — CRO and analytics are the multiplier on everything else." },
      { type: "h2", text: "Measure what matters" },
      { type: "p", text: "A full-funnel system reports on revenue, pipeline, and blended customer acquisition cost — not channel-specific vanity metrics. When one team owns the whole funnel, you can finally answer the only question that matters: for every dollar in, how many dollars out?" },
      { type: "ol", items: [
        "Define your funnel stages and the metric that matters at each.",
        "Assign each channel a clear role in the journey.",
        "Instrument clean tracking and attribution end to end.",
        "Run continuous experiments where the leverage is highest — usually conversion.",
        "Report on revenue, and reallocate budget to what compounds.",
      ]},
      { type: "h2", text: "The takeaway" },
      { type: "p", text: "Stop buying channels and start building a system. When acquisition, conversion, and retention are designed and measured together, marketing stops being a cost you tolerate and becomes an engine you can turn up." },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export const FEATURED_POSTS = POSTS.filter((p) => p.featured);
