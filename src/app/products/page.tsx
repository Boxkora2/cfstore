'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products, ProductCategory } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import ProductFilter from '@/components/ProductFilter';

const ALL_CATEGORY = 'All';

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORY);

  const categories = [ALL_CATEGORY, 'Dark Roast', 'Medium Roast', 'Decaf', 'Flavored'];

  const filteredProducts = activeCategory === ALL_CATEGORY
    ? products
    : products.filter((product) => product.categories.includes(activeCategory as ProductCategory));

  return (
    <div className="min-h-screen bg-kora-cream text-kora-dark pb-20">
      {/* Hero Section / Header */}
      <section className="bg-kora-dark text-kora-latte py-16 px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
             className="text-4xl md:text-5xl font-serif font-bold mb-4 tracking-tight"
        >
          The Art of Roasting
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto text-kora-beige leading-relaxed font-light"
        >
          We use only the top 1% specialty Arabica beans, offering distinct origins and blends. 
          Roasted in small batches to perfection.
        </motion.p>
      </section>

      {/* Filter & Grid */}
      <main className="container mx-auto px-4 py-8">
        <ProductFilter
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Contact CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-block p-8 border border-kora-beige/30 rounded-2xl bg-white shadow-sm max-w-lg">
             <h3 className="text-2xl font-serif font-bold mb-3 text-kora-dark">Have Questions?</h3>
             <p className="text-stone-600 mb-6">Need help choosing the perfect roast or have a wholesale inquiry?</p>
             <button className="px-8 py-3 bg-kora-brown text-white font-bold rounded-full hover:bg-stone-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0">
                Contact Us
             </button>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
