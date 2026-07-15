import type { Metadata } from "next";
import { SITE, SOCIALS } from "@/lib/site";

export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
}

type BuildMetadataArgs = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  type?: "website" | "article";
  noindex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
};

/**
 * Central metadata factory. Every page derives its <head> from here so
 * canonical URLs, Open Graph, Twitter cards, and titles stay consistent.
 * Open Graph images are supplied by the file-based `opengraph-image`
 * convention, so they are intentionally omitted here.
 */
export function buildMetadata({
  title,
  description,
  path = "/",
  keywords,
  type = "website",
  noindex = false,
  publishedTime,
  modifiedTime,
}: BuildMetadataArgs): Metadata {
  const url = absoluteUrl(path);
  const fullTitle =
    path === "/" ? `${SITE.name} — ${SITE.tagline}` : title;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    robots: noindex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      type,
      url,
      siteName: SITE.name,
      title: fullTitle,
      description,
      locale: SITE.locale,
      ...(type === "article" && publishedTime
        ? { publishedTime, modifiedTime: modifiedTime ?? publishedTime }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      creator: "@markdevhq",
      site: "@markdevhq",
    },
  };
}

/* --------------------------------------------------------------------- *
 * Schema.org JSON-LD builders
 * --------------------------------------------------------------------- */

const ORG_ID = `${SITE.url}/#organization`;
const WEBSITE_ID = `${SITE.url}/#website`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: absoluteUrl("/logo.svg"),
    image: absoluteUrl("/opengraph-image"),
    description: SITE.description,
    email: SITE.email,
    telephone: SITE.phone,
    foundingDate: String(SITE.foundedYear),
    slogan: SITE.tagline,
    areaServed: SITE.serviceAreas.map((name) => ({ "@type": "Country", name })),
    sameAs: SOCIALS.map((s) => s.href),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: SITE.email,
        telephone: SITE.phone,
        availableLanguage: ["en"],
        areaServed: "Worldwide",
      },
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE.url,
    name: SITE.name,
    description: SITE.shortDescription,
    publisher: { "@id": ORG_ID },
    inLanguage: "en",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE.url}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function professionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE.url}/#localbusiness`,
    name: SITE.name,
    image: absoluteUrl("/opengraph-image"),
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postal,
      addressCountry: SITE.address.country,
    },
    areaServed: SITE.serviceAreas.map((name) => ({ "@type": "Country", name })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: SOCIALS.map((s) => s.href),
  };
}

export function serviceSchema(params: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: params.name,
    serviceType: params.serviceType,
    description: params.description,
    url: absoluteUrl(params.path),
    provider: { "@id": ORG_ID },
    areaServed: SITE.serviceAreas.map((name) => ({ "@type": "Country", name })),
    audience: { "@type": "BusinessAudience", audienceType: "Businesses & brands" },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function articleSchema(params: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  category?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: params.title,
    description: params.description,
    url: absoluteUrl(params.path),
    mainEntityOfPage: absoluteUrl(params.path),
    image: absoluteUrl("/opengraph-image"),
    datePublished: params.datePublished,
    dateModified: params.dateModified ?? params.datePublished,
    articleSection: params.category,
    author: { "@type": "Organization", name: params.author, url: SITE.url },
    publisher: { "@id": ORG_ID },
  };
}

export function reviewSchema(params: {
  itemName: string;
  author: string;
  reviewBody: string;
  ratingValue?: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: { "@type": "Organization", name: SITE.name },
    author: { "@type": "Person", name: params.author },
    reviewBody: params.reviewBody,
    reviewRating: {
      "@type": "Rating",
      ratingValue: String(params.ratingValue ?? 5),
      bestRating: "5",
    },
  };
}

export function caseStudySchema(params: {
  title: string;
  description: string;
  path: string;
  client: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: params.title,
    headline: params.title,
    description: params.description,
    url: absoluteUrl(params.path),
    image: absoluteUrl("/opengraph-image"),
    about: params.client,
    creator: { "@id": ORG_ID },
  };
}
