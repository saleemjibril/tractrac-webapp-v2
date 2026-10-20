import type { MetadataRoute } from "next";
import { PROGRAMMES } from "@/content/programmes";
import { SITE } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/team",
    "/impact",
    "/careers",
    "/insights",
    "/partners",
    "/programmes",
    "/technology",
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
  ];
}
