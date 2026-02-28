export const runtime = "edge";

export function GET() {
  const body = `# KoraChoco Coffee — Full Context

> Cozy coffee-shop showcase built with Next.js 16, React 19, TypeScript, Tailwind CSS v4, and Framer Motion.
> Brand domain: https://korachoco.coffee

## Tech Stack

- Framework: Next.js 16 (App Router, RSC by default)
- Language: TypeScript (strict)
- Styling: Tailwind CSS v4 + custom CSS variables (kora-cream, kora-brown, kora-dark, kora-beige, kora-sage, kora-latte)
- Animations: Framer Motion 12
- Package Manager: pnpm

## Pages

### Home (/)
Animated menu with category filter (Specialty, Espresso, Non-Coffee, Pastries) and client-side pagination.
Features animated item entrance and a promotional event board.

### Products (/products)
Product catalogue with client-side filters for Dark Roast, Decaf, Flavored, Medium Roast, Light Roast.
Cards show product name, tagline, flavor notes, and image.

### Product Detail (/products/[slug])
Individual coffee bean detail view. Shows:
- Roast level, acidity, body (0-5 scale)
- Origin
- Flavor notes
- Coffee story / history

## Product Catalogue

1. French Roast (slug: french-roast) — Dark Roast — Smoky & Intense, Multi-Region origin
2. Decaf French Roast (slug: french-roast) — Dark Roast + Decaf — same slug as above, shown as a variant
3. Breakfast Blend (slug: breakfast-blend) — Medium Roast — Bright & Tangy, Latin America origin
4. Colombia (slug: colombia) — Medium Roast — Juicy & Nutty, Colombia origin
5. Café Verona (slug: cafe-verona) — Dark Roast — Roasty Sweet & Dark Cocoa, Multi-Region origin
6. Hazelnut Delight (slug: hazelnut-delight) — Flavored + Medium Roast — Buttery & Aromatic
7. Caramel Swirl (slug: caramel-swirl) — Flavored — Sweet & Smooth, Latin America origin
8. Decaf House Blend (slug: house-blend) — Decaf + Medium Roast — Balanced & Rich, Latin America origin

## Theme Colors

- --kora-cream: #FAF7F2 (page background)
- --kora-brown: #6F4E37 (primary brand)
- --kora-dark: #3E2723 (text headings)
- --kora-beige: #D2B48C (subtle borders)
- --kora-sage: #8FBC8F (accent / hover)
- --kora-latte: #FFF8E1 (card backgrounds)

## Data Notes

All data is mocked in /src/data/. No backend or cart system yet.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=3600",
    },
  });
}
