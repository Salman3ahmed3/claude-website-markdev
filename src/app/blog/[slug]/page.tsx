import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  buildMetadata,
  articleSchema,
  breadcrumbSchema,
} from "@/lib/seo";
import { SITE } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { PostBody } from "@/components/sections/PostBody";
import { CtaSection } from "@/components/sections/CtaSection";
import { POSTS, getPost } from "@/lib/data/posts";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${slug}`,
    keywords: post.keywords,
    type: "article",
    publishedTime: post.date,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const more = POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            title: post.title,
            description: post.metaDescription,
            path: `/blog/${slug}`,
            datePublished: post.date,
            author: SITE.name,
            category: post.category,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${slug}` },
          ]),
        ]}
      />

      <article>
        {/* Header */}
        <header className="relative overflow-hidden border-b border-border pb-12 pt-32 sm:pt-40">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-[0.4] mask-fade-b" />
          <Container size="narrow" className="relative">
            <Reveal>
              <Breadcrumbs
                items={[
                  { name: "Home", path: "/" },
                  { name: "Blog", path: "/blog" },
                  { name: post.category, path: "/blog" },
                ]}
              />
            </Reveal>
            <Reveal delay={60}>
              <div className="mt-6 flex items-center gap-2">
                <span className="rounded-full bg-brand/10 px-2.5 py-1 font-mono text-[0.68rem] uppercase tracking-wider text-brand-700 dark:text-brand-300">
                  {post.category}
                </span>
                <span className="font-mono text-xs text-muted">{post.readingTime}</span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                {post.title}
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 text-lg leading-relaxed text-muted">{post.excerpt}</p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-6">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-brand-600 to-accent-500 text-sm font-bold text-white">
                  M
                </span>
                <span className="flex flex-col">
                  <span className="text-sm font-semibold">The MarkDev Team</span>
                  <span className="font-mono text-xs text-muted">
                    Published {formatDate(post.date)}
                  </span>
                </span>
              </div>
            </Reveal>
          </Container>
        </header>

        {/* Body */}
        <Section container containerSize="narrow">
          <PostBody body={post.body} />

          <div className="mt-12 flex flex-col gap-4 rounded-2xl border border-border bg-surface/60 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <h2 className="text-lg font-semibold">Put this into practice.</h2>
              <p className="text-sm text-muted">
                We help ambitious brands turn thinking like this into results.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-brand px-5 text-sm font-medium text-brand-contrast transition-transform hover:-translate-y-0.5"
            >
              Book a discovery call
              <Icon name="arrow-right" size={16} />
            </Link>
          </div>
        </Section>

        {/* More posts */}
        <Section className="border-t border-border bg-surface/50">
          <Container size="narrow" className="!px-0">
            <h2 className="mb-8 text-2xl font-semibold">Keep reading</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {more.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex flex-col gap-3 rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:border-brand/40"
                >
                  <span className="font-mono text-[0.68rem] uppercase tracking-wider text-brand">
                    {p.category}
                  </span>
                  <h3 className="font-semibold leading-snug">{p.title}</h3>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-brand">
                    Read
                    <Icon name="arrow-right" size={15} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      </article>

      <CtaSection />
    </>
  );
}
