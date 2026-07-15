import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { CtaSection } from "@/components/sections/CtaSection";
import { POSTS } from "@/lib/data/posts";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Blog — Playbooks on Web, Growth & Design",
  description:
    "Field notes and playbooks from the MarkDev team on web development, Shopify, performance, SEO, paid media, and conversion — practical, numbers-first, no fluff.",
  path: "/blog",
  keywords: ["digital agency blog", "web development blog", "seo playbook", "growth marketing insights"],
});

function PostCard({ post, featured = false }: { post: (typeof POSTS)[number]; featured?: boolean }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col gap-4 rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[var(--shadow-md)]"
    >
      <div className="flex items-center gap-2">
        <span className="rounded-full bg-brand/10 px-2.5 py-1 font-mono text-[0.68rem] uppercase tracking-wider text-brand-700 dark:text-brand-300">
          {post.category}
        </span>
        <span className="font-mono text-[0.68rem] text-muted">{post.readingTime}</span>
      </div>
      <h2 className={featured ? "text-2xl font-semibold leading-snug" : "text-lg font-semibold leading-snug"}>
        {post.title}
      </h2>
      <p className="flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
      <div className="flex items-center justify-between border-t border-border pt-4">
        <span className="font-mono text-xs text-muted">{formatDate(post.date)}</span>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-brand">
          Read
          <Icon name="arrow-right" size={15} className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export default function BlogPage() {
  const [featured, ...rest] = POSTS;
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />

      <PageHero
        eyebrow="Insights"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ]}
        title={
          <>
            Playbooks, not <span className="text-gradient">platitudes.</span>
          </>
        }
        description="Practical, numbers-first thinking on building and growing digital products — the same frameworks we use with clients, shared openly."
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal className="lg:row-span-2">
            <PostCard post={featured} featured />
          </Reveal>
          {rest.map((post, i) => (
            <Reveal key={post.slug} delay={i * 80}>
              <PostCard post={post} />
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaSection
        title="Want this thinking applied to your business?"
        description="Reading is good. Results are better. Book a discovery call and we'll turn these frameworks into a plan for your goals."
      />
    </>
  );
}
