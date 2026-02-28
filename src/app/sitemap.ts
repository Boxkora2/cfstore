import type { MetadataRoute } from "next";

const BASE_URL = "https://korachoco.coffee";
const LAST_MOD  = new Date("2026-02-28");

// Unique product slugs (static list — replace with async fetch when API is ready)
// TODO: Replace with API call
const productSlugs = [
  "french-roast",
  "breakfast-blend",
  "colombia",
  "cafe-verona",
  "hazelnut-delight",
  "caramel-swirl",
  "house-blend",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url:          BASE_URL,
      lastModified: LAST_MOD,
      changeFrequency: "weekly",
      priority:     1.0,
    },
    {
      url:          `${BASE_URL}/products`,
      lastModified: LAST_MOD,
      changeFrequency: "daily",
      priority:     0.9,
    },
  ];

  const productPages: MetadataRoute.Sitemap = productSlugs.map((slug) => ({
    url:          `${BASE_URL}/products/${slug}`,
    lastModified: LAST_MOD,
    changeFrequency: "monthly" as const,
    priority:     0.7,
  }));

  return [...staticPages, ...productPages];
}
