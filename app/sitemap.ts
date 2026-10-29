import type { MetadataRoute } from "next";
import { PROGRAMMES } from "@/content/programmes";
import { SITE } from "@/content/site";
import { STORIES } from "@/content/stories";
import { getBlogPosts } from "@/lib/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getBlogPosts();
  const routes = [
    "",
    "/about",
    "/contact",
    "/team",
    "/careers",
    "/careers/talent-pool",
    "/blog",
    "/resources",
    "/partners",
    "/programmes",
    "/solutions",
    "/stories",
    "/technology",
    "/privacy-policy",
    "/terms-and-conditions",
  ];

  return [
    ...routes.map((route) => ({
      url: `${SITE.url}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...PROGRAMMES.map((programme) => ({
      url: `${SITE.url}/programmes/${programme.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...STORIES.map((story) => ({
      url: `${SITE.url}/stories/${story.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...posts.map((post) => ({
      url: `${SITE.url}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
