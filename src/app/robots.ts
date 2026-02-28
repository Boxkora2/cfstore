import type { MetadataRoute } from "next";

const BASE_URL = "https://korachoco.coffee";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      // Opt out AI training crawlers
      { userAgent: "GPTBot",            disallow: "/" },
      { userAgent: "Google-Extended",   disallow: "/" },
      { userAgent: "anthropic-ai",      disallow: "/" },
      { userAgent: "ClaudeBot",         disallow: "/" },
      { userAgent: "CCBot",             disallow: "/" },
      { userAgent: "Bytespider",        disallow: "/" },
      { userAgent: "omgili",            disallow: "/" },
      { userAgent: "FacebookBot",       disallow: "/" },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
