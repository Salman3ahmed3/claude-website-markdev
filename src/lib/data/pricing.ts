export type PricingTier = {
  name: string;
  tagline: string;
  price: string;
  priceNote: string;
  bestFor: string;
  features: string[];
  cta: string;
  featured: boolean;
};

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Launch",
    tagline: "Get to market with a site that performs",
    price: "From $9k",
    priceNote: "one-time project",
    bestFor: "Startups & brands needing a fast, premium web presence",
    features: [
      "Custom website (up to 8 pages) or Shopify store",
      "Conversion-first UI/UX design",
      "Next.js or Shopify build, fully responsive",
      "Technical SEO & schema baked in",
      "100-Lighthouse performance targets",
      "Analytics & event tracking setup",
      "30 days of post-launch support",
    ],
    cta: "Start your project",
    featured: false,
  },
  {
    name: "Scale",
    tagline: "The full build-and-grow engagement",
    price: "From $18k",
    priceNote: "project + retainer",
    bestFor: "Growing companies that want to build and market as one system",
    features: [
      "Everything in Launch, plus:",
      "Custom web app or advanced commerce build",
      "Full design system & component library",
      "CRO program with A/B testing",
      "One growth channel managed (SEO, Google, or Meta)",
      "Live reporting dashboard",
      "Dedicated senior team & strategy calls",
    ],
    cta: "Book a discovery call",
    featured: true,
  },
  {
    name: "Partner",
    tagline: "Your embedded product & growth team",
    price: "Custom",
    priceNote: "monthly retainer",
    bestFor: "Scaleups & enterprises needing an ongoing partner",
    features: [
      "Everything in Scale, plus:",
      "Multi-channel marketing (SEO + paid + social)",
      "Continuous product & feature development",
      "Full-funnel CRO & experimentation",
      "Priority support with an SLA",
      "Quarterly strategy & roadmap planning",
      "Flexible, scalable scope",
    ],
    cta: "Talk to us",
    featured: false,
  },
];

export const ENGAGEMENT_MODELS = [
  {
    title: "Fixed-scope projects",
    description:
      "A defined outcome, a fixed price, and a clear timeline. Ideal for websites, stores, apps, and brand work with a known scope.",
  },
  {
    title: "Monthly retainers",
    description:
      "A dedicated team and a predictable monthly investment for ongoing marketing, CRO, and product development.",
  },
  {
    title: "Growth partnerships",
    description:
      "Aligned incentives for the long term — we build, market, and optimize as your embedded partner, measured on growth.",
  },
];

export const PRICING_FAQS = [
  {
    question: "Why don't you list fixed prices for everything?",
    answer:
      "Because honest pricing depends on scope. A five-page brochure site and a multi-tenant SaaS platform are both 'a website' — pretending they cost the same would be dishonest. We give you a fixed, itemized quote after a short discovery, so you know the exact number before committing.",
  },
  {
    question: "Do you require long contracts?",
    answer:
      "No lock-in. Projects are milestone-based, and retainers are month-to-month after an initial ramp period. We keep clients by delivering results, not by trapping them in contracts.",
  },
  {
    question: "How does payment work?",
    answer:
      "Projects are typically split across milestones (for example 40/30/30). Retainers are billed monthly in advance. We'll lay out the exact schedule in your proposal.",
  },
  {
    question: "Can you work within our budget?",
    answer:
      "Often, yes — we'll help you sequence the work so the highest-ROI pieces come first and the investment pays for the next phase. Tell us your budget and goals and we'll be straight with you about what's realistic.",
  },
];
