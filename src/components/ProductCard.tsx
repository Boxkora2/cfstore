'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
      className="group relative flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md border border-kora-beige/20"
    >
      <Link href={`/products/${product.slug}`} className="block h-full flex flex-col">
        <div className="relative aspect-square w-full overflow-hidden bg-kora-latte/30 p-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-full h-full relative flex items-center justify-center"
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover drop-shadow-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>
          {/* Roast Badge */}
          <div className="absolute top-2 right-2">
             <span className={`px-2 py-1 text-xs font-bold uppercase tracking-wide rounded-full text-white ${
                product.categories.includes('Dark Roast') ? 'bg-kora-dark' :
                product.categories.includes('Medium Roast') ? 'bg-kora-brown' :
                product.categories.includes('Light Roast') ? 'bg-kora-beige' :
                'bg-stone-600'
             }`}>
                {product.categories.find((c: string) => c.includes('Roast')) || 'Roast'}
             </span>
          </div>
          {product.categories.includes('Decaf') && (
            <div className="absolute top-2 left-2">
                <span className="px-2 py-1 text-xs font-bold uppercase tracking-wide rounded-full bg-kora-sage text-white">
                    Decaf
                </span>
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col p-4 text-center">
          <h3 className="mb-1 font-serif text-lg font-bold text-kora-dark group-hover:text-kora-brown transition-colors">
            {product.name}
          </h3>
          <p className="mb-3 text-sm font-medium text-kora-brown uppercase tracking-wider">
            {product.tagline}
          </p>
          
          <div className="mt-auto flex justify-center gap-1">
             {/* Simple visual indicator for body/intensity if needed, mimicking the dots in image 1 */}
             <div className="flex items-center gap-1 px-3 py-1 bg-kora-latte rounded-full">
                <span className="text-[10px] uppercase font-semibold text-kora-brown">Body</span>
                <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className={`h-1.5 w-1.5 rounded-full ${i < product.details.body ? 'bg-kora-dark' : 'bg-stone-300'}`} />
                    ))}
                </div>
             </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
