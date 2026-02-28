export const runtime = "edge";

export function GET() {
  const body = `# KoraChoco Coffee

> A cozy, warm-toned coffee-shop website that showcases a specialty menu, product catalogue, and event board. Built with Next.js and Tailwind CSS.

## Pages

- [Home](/): Animated menu with category filter and pagination
- [Products](/products): Full product catalogue with filters
- [Product Detail](/products/[slug]): Individual coffee bean details with roast level, acidity, flavor notes, and origin story

## Optional

- [Sitemap](/sitemap.xml)
- [Robots](/robots.txt)
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=3600",
    },
  });
}
