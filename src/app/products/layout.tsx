import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop Coffee Beans & Roasts",
  description:
    "Browse KoraChoco Coffee's full range of premium coffee beans — from bold dark roasts and smooth medium roasts to flavoured and decaf options. Order specialty coffee online.",
  keywords: [
    "coffee beans",
    "buy coffee online",
    "dark roast coffee",
    "medium roast coffee",
    "decaf coffee",
    "flavored coffee",
    "specialty coffee beans",
    "KoraChoco Coffee shop",
  ],
  alternates: {
    canonical: "https://korachoco.coffee/products",
  },
  openGraph: {
    type: "website",
    url: "https://korachoco.coffee/products",
    title: "Shop Coffee Beans & Roasts | KoraChoco Coffee",
    description:
      "Browse KoraChoco Coffee's full range of premium coffee beans — dark roasts, medium roasts, decaf, and flavoured blends.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "KoraChoco Coffee — Shop Coffee Beans",
      },
    ],
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
