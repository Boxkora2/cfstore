import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { products } from '@/data/products';
import ProductDetailView from '@/components/ProductDetailView';

const BASE_URL = "https://korachoco.coffee";

// Generate static params for all possible slugs
export function generateStaticParams() {
  const slugs = Array.from(new Set(products.map((p) => p.slug)));
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const variants = products.filter((p) => p.slug === slug);
  if (!variants.length) return {};

  const primary = variants[0];
  const title = `${primary.name} — ${primary.tagline}`;
  const description =
    primary.description.length > 155
      ? primary.description.slice(0, 152) + "…"
      : primary.description;
  const canonicalUrl = `${BASE_URL}/products/${slug}`;

  return {
    title,
    description,
    keywords: [
      primary.name,
      "coffee beans",
      ...primary.details.flavorNotes,
      ...primary.categories,
      "buy coffee online",
      "KoraChoco Coffee",
    ],
    alternates: { canonical: canonicalUrl },
    openGraph: {
      type: "website",
      url: canonicalUrl,
      title: `${title} | KoraChoco Coffee`,
      description,
      images: [
        {
          url: primary.image.startsWith("/") ? primary.image : `/images/${slug}.png`,
          width: 800,
          height: 600,
          alt: `${primary.name} — KoraChoco Coffee`,
        },
      ],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const variants = products.filter((p) => p.slug === slug);

  if (!variants || variants.length === 0) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-kora-cream text-kora-dark pb-20">
      <main className="container mx-auto">
         {/* Back Button or Breadcrumb if desired */}
         <div className="py-6 px-4">
             <Link href="/products" className="text-kora-brown hover:text-kora-dark font-medium inline-flex items-center gap-2 transition-colors">
                 <span>←</span> Back to Products
             </Link>
         </div>

         <ProductDetailView variants={variants} />
      </main>
    </div>
  );
}
