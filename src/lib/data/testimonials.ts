export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  initials: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "MarkDev rebuilt our storefront and it became our best-performing sales channel almost overnight. Revenue up 63% on the same traffic — that's engineering paying for itself.",
    author: "Priya Nair",
    role: "VP Growth",
    company: "Everbloom",
    rating: 5,
    initials: "PN",
  },
  {
    quote:
      "They operate like an in-house team that happens to be the best engineers we've ever worked with. Our platform is the reason we closed our Series A.",
    author: "Tom Whitfield",
    role: "Co-founder & CTO",
    company: "Vaultpay",
    rating: 5,
    initials: "TW",
  },
  {
    quote:
      "SEO went from a line item we tolerated to our most reliable growth engine. Organic is now our number-one pipeline source and it compounds every month.",
    author: "Lena Fischer",
    role: "Head of Marketing",
    company: "Northwind",
    rating: 5,
    initials: "LF",
  },
  {
    quote:
      "Our app looks and feels like we spent a fortune building two native apps. We didn't — and honestly it's better for it. Launched at 4.9 stars.",
    author: "Marcus Lee",
    role: "Founder",
    company: "Kinetic",
    rating: 5,
    initials: "ML",
  },
  {
    quote:
      "For the first time, our brand walks into the room as confidently as our team does. Deal sizes are up 58% and the sales cycle got shorter.",
    author: "Yousef Al-Rashid",
    role: "Managing Partner",
    company: "Halcyon",
    rating: 5,
    initials: "YA",
  },
  {
    quote:
      "We'd been told our ad accounts were as good as they'd get. MarkDev tripled our spend and improved ROAS at the same time. Different league.",
    author: "Dana Roy",
    role: "CEO",
    company: "Outbound",
    rating: 5,
    initials: "DR",
  },
  {
    quote:
      "Clear communication, senior people on every call, and work that consistently beats the brief. The rare agency that under-promises and over-delivers.",
    author: "Sofia Marchetti",
    role: "Director of Digital",
    company: "Cedar & Co.",
    rating: 5,
    initials: "SM",
  },
  {
    quote:
      "The performance sprint cut our load time by two-thirds and our Core Web Vitals went green. Rankings and conversions both moved within weeks.",
    author: "James Okoro",
    role: "Ecommerce Lead",
    company: "Lumen Labs",
    rating: 5,
    initials: "JO",
  },
];
