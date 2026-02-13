import { notFound } from 'next/navigation';
import Link from 'next/link';
import { products } from '@/data/products';
import ProductDetailView from '@/components/ProductDetailView';

// Generate static params for all possible slugs
export function generateStaticParams() {
  const slugs = Array.from(new Set(products.map((p) => p.slug)));
  return slugs.map((slug) => ({
    slug: slug,
  }));
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
