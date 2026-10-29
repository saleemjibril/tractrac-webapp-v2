import type { MetadataRoute } from "next";
import { PROGRAMMES } from "@/content/programmes";
import { SITE } from "@/content/site";
import { STORIES } from "@/content/stories";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
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
  ];
}
