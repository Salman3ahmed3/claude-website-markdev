import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

// Allow every crawler, including AI/answer engines (GPTBot, ClaudeBot,
// PerplexityBot) — being cited by answer engines is a growth channel.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
