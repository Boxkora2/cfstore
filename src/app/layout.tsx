import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://korachoco.coffee";

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: "KoraChoco Coffee",
  url: BASE_URL,
  description: "The coziest coffee spot in town. Specialty espresso drinks, cold brews, and freshly baked pastries brewed with joy.",
  servesCuisine: "Coffee",
  priceRange: "$$",
  image: `${BASE_URL}/og-image.png`,
  potentialAction: {
    "@type": "ViewAction",
    target: `${BASE_URL}/products`,
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "KoraChoco Coffee | Cozy & Vibing",
    template: "%s | KoraChoco Coffee",
  },
  description: "The coziest coffee spot in town. Specialty espresso drinks, cold brews, seasonal pastries — all brewed with joy. Explore our menu and shop premium coffee beans.",
  keywords: [
    "KoraChoco Coffee",
    "specialty coffee",
    "espresso",
    "cold brew",
    "coffee shop",
    "coffee beans",
    "pastries",
    "cozy cafe",
  ],
  authors: [{ name: "KoraChoco Coffee", url: BASE_URL }],
  creator: "KoraChoco Coffee",
  publisher: "KoraChoco Coffee",
  category: "food & drink",
  referrer: "origin-when-cross-origin",
  formatDetection: { email: false, address: false, telephone: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "KoraChoco Coffee",
    title: "KoraChoco Coffee | Cozy & Vibing",
    description: "The coziest coffee spot in town. Specialty espresso drinks, cold brews, and pastries brewed with joy.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "KoraChoco Coffee — Cozy & Vibing",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KoraChoco Coffee | Cozy & Vibing",
    description: "The coziest coffee spot in town. Specialty espresso drinks, cold brews, and pastries brewed with joy.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/icon.svg" }],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
  applicationName: "KoraChoco Coffee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#6F4E37" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
