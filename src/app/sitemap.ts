import type { MetadataRoute } from "next";
import { PATHS } from "@/data/paths";
import { SITE_URL } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      changeFrequency: "monthly",
      priority: 1,
      lastModified,
    },
    {
      url: `${SITE_URL}/careers`,
      changeFrequency: "weekly",
      priority: 0.9,
      lastModified,
    },
    {
      url: `${SITE_URL}/skills`,
      changeFrequency: "monthly",
      priority: 0.7,
      lastModified,
    },
    {
      url: `${SITE_URL}/pillars`,
      changeFrequency: "monthly",
      priority: 0.8,
      lastModified,
    },
    {
      url: `${SITE_URL}/assessment`,
      changeFrequency: "monthly",
      priority: 0.7,
      lastModified,
    },
  ];
  const pathRoutes: MetadataRoute.Sitemap = PATHS.map((path) => ({
    url: `${SITE_URL}/careers/${path.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
    lastModified,
  }));
  return [...staticRoutes, ...pathRoutes];
}
