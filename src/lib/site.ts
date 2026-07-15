/**
 * Global site configuration — single source of truth for brand, contact,
 * navigation, and social/proof constants. Replace placeholder contact
 * details and the domain (NEXT_PUBLIC_SITE_URL) before going live.
 */

export const SITE = {
  name: "MarkDev",
  legalName: "MarkDev Digital",
  tagline: "Learn • Build • Grow",
  shortDescription:
    "MarkDev is a premium global digital agency building high-performance websites, Shopify stores, custom apps, and growth marketing that compounds revenue.",
  description:
    "MarkDev is a premium digital agency delivering full-stack web development, Shopify builds, custom web & Flutter apps, and performance marketing (SEO, Meta & Google Ads, CRO) for ambitious brands worldwide.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://markdev.agency",
  locale: "en_US",
  email: "hello@markdev.agency",
  phone: "+1 (415) 555-0192",
  phoneHref: "+14155550192",
  bookingUrl: "https://calendly.com/markdev/discovery",
  foundedYear: 2016,
  address: {
    line1: "Remote-first · Global delivery",
    city: "New York",
    region: "NY",
    country: "US",
    postal: "10007",
  },
  serviceAreas: [
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
    "United Arab Emirates",
    "European Union",
    "Singapore",
  ],
} as const;

export const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/markdev", handle: "markdev" },
  { label: "X", href: "https://x.com/markdevhq", handle: "markdevhq" },
  { label: "Dribbble", href: "https://dribbble.com/markdev", handle: "markdev" },
  { label: "GitHub", href: "https://github.com/markdev", handle: "markdev" },
  { label: "Instagram", href: "https://instagram.com/markdev.agency", handle: "markdev.agency" },
] as const;

export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavGroup = {
  label: string;
  href?: string;
  children?: NavLink[];
};

export const PRIMARY_NAV: NavGroup[] = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Web Development", href: "/services/web-development", description: "Full-stack sites & platforms" },
      { label: "Shopify Development", href: "/services/shopify-development", description: "Headless & Plus commerce" },
      { label: "Custom Web Apps", href: "/services/web-applications", description: "SaaS & internal tools" },
      { label: "Flutter App Development", href: "/services/flutter-app-development", description: "iOS & Android from one codebase" },
      { label: "SEO", href: "/services/seo", description: "Compounding organic growth" },
      { label: "Google Ads", href: "/services/google-ads", description: "Profitable paid search" },
      { label: "Meta Ads", href: "/services/meta-ads", description: "Facebook & Instagram performance" },
      { label: "Conversion Optimization", href: "/services/conversion-rate-optimization", description: "Turn traffic into revenue" },
      { label: "UI/UX Design", href: "/services/ui-ux-design", description: "Interfaces that convert" },
      { label: "Branding", href: "/services/branding", description: "Identity that commands trust" },
    ],
  },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "Pricing", href: "/pricing" },
  {
    label: "Company",
    children: [
      { label: "About", href: "/about", description: "Who we are & how we think" },
      { label: "Blog", href: "/blog", description: "Playbooks & field notes" },
      { label: "FAQ", href: "/faq", description: "Answers to common questions" },
      { label: "Contact", href: "/contact", description: "Start a conversation" },
    ],
  },
];

export const FOOTER_NAV: { title: string; links: NavLink[] }[] = [
  {
    title: "Build",
    links: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "Shopify Development", href: "/services/shopify-development" },
      { label: "Custom Web Apps", href: "/services/web-applications" },
      { label: "Flutter Apps", href: "/services/flutter-app-development" },
      { label: "UI/UX Design", href: "/services/ui-ux-design" },
    ],
  },
  {
    title: "Grow",
    links: [
      { label: "SEO", href: "/services/seo" },
      { label: "Google Ads", href: "/services/google-ads" },
      { label: "Meta Ads", href: "/services/meta-ads" },
      { label: "Social Media Marketing", href: "/services/social-media-marketing" },
      { label: "Conversion Optimization", href: "/services/conversion-rate-optimization" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Our Process", href: "/process" },
      { label: "Case Studies", href: "/work" },
      { label: "Pricing", href: "/pricing" },
      { label: "Careers", href: "/about#careers" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
      { label: "Book a Call", href: "/contact#book" },
    ],
  },
];

export const STATS = [
  { value: "250+", label: "Projects shipped worldwide" },
  { value: "$180M+", label: "Revenue influenced for clients" },
  { value: "4.9/5", label: "Average client rating" },
  { value: "12", label: "Countries served" },
] as const;

export const TRUST_LOGOS = [
  "Northwind",
  "Lumen Labs",
  "Vaultpay",
  "Everbloom",
  "Cedar & Co.",
  "Kinetic",
  "Halcyon",
  "Outbound",
] as const;
