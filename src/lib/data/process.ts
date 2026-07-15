export type ProcessPhase = {
  number: string;
  title: string;
  duration: string;
  summary: string;
  activities: string[];
  deliverable: string;
};

export const PROCESS: ProcessPhase[] = [
  {
    number: "01",
    title: "Discover",
    duration: "Week 1",
    summary:
      "We start by understanding your business, your customers, and the number this project needs to move — before a single pixel or line of code.",
    activities: [
      "Stakeholder & goal-setting workshop",
      "Market, competitor & audience research",
      "Analytics, funnel & technical audit",
      "Success metrics & KPI definition",
    ],
    deliverable: "A clear strategy, scope, and measurable definition of success.",
  },
  {
    number: "02",
    title: "Design",
    duration: "Weeks 2–4",
    summary:
      "We translate strategy into an experience — architecture, interface, and messaging designed to convert and to feel unmistakably yours.",
    activities: [
      "Information architecture & user flows",
      "Wireframes & conversion-first layouts",
      "High-fidelity UI & design system",
      "Interactive prototype & stakeholder review",
    ],
    deliverable: "A validated, high-fidelity design and reusable system.",
  },
  {
    number: "03",
    title: "Build",
    duration: "Weeks 4–8",
    summary:
      "Our engineers turn design into fast, accessible, production-grade code — with performance budgets and SEO enforced from the first commit.",
    activities: [
      "Component-driven development",
      "CMS / backend integration",
      "Performance, SEO & accessibility engineering",
      "QA across devices & browsers",
    ],
    deliverable: "A production-ready product, tested and documented.",
  },
  {
    number: "04",
    title: "Launch",
    duration: "Week 8+",
    summary:
      "We ship with confidence — analytics wired, redirects mapped, and a monitored deployment so launch day is a non-event, in the best way.",
    activities: [
      "Pre-launch QA & performance checks",
      "SEO migration & redirect mapping",
      "Analytics & event tracking setup",
      "Monitored, zero-downtime deployment",
    ],
    deliverable: "A confident, measured launch with nothing left to chance.",
  },
  {
    number: "05",
    title: "Grow",
    duration: "Ongoing",
    summary:
      "Launch is the starting line. We measure, experiment, and iterate — turning your new foundation into compounding growth.",
    activities: [
      "Conversion rate optimization & A/B testing",
      "SEO & content momentum",
      "Performance & reliability monitoring",
      "Roadmap & quarterly growth planning",
    ],
    deliverable: "A continuous improvement loop tied to revenue.",
  },
];
