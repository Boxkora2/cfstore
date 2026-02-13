'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '@/data/products';

interface ProductDetailViewProps {
  variants: Product[];
}

export default function ProductDetailView({ variants }: ProductDetailViewProps) {
  // vivid defaults to first variant if available
  const [selectedVariant, setSelectedVariant] = useState(variants[0]);

  if (!selectedVariant) return null;

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Column: Image */}
        <div className="relative aspect-square w-full rounded-3xl overflow-hidden bg-white border border-kora-beige/30 p-8 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedVariant.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full"
            >
              <Image
                src={selectedVariant.image}
                alt={selectedVariant.name}
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </motion.div>
          </AnimatePresence>
          
          {/* Variant Selector (if multiple) */}
          {variants.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg flex gap-2">
              {variants.map((variant) => (
                <button
                  key={variant.id}
                  onClick={() => setSelectedVariant(variant)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    selectedVariant.id === variant.id
                      ? 'bg-kora-brown text-white shadow-md'
                      : 'bg-transparent text-kora-dark hover:bg-kora-latte'
                  }`}
                >
                  {variant.categories.find((c: string) => c === 'Decaf') ? 'Decaf' : 'Regular'} 
                  {/* Or use variant name if names differ significantly */}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Details */}
        <div className="flex flex-col gap-6">
          <motion.div
            key={selectedVariant.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedVariant.categories.map((cat: string) => (
                <span key={cat} className="px-3 py-1 bg-kora-latte text-kora-brown text-xs font-bold uppercase tracking-wide rounded-full">
                  {cat}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl font-serif font-bold text-kora-dark mb-2">
              {selectedVariant.name}
            </h1>
            <p className="text-xl text-kora-brown font-medium italic mb-6">
              {selectedVariant.tagline}
            </p>

            <div className="prose prose-stone max-w-none text-stone-600 mb-8 leading-relaxed">
              {selectedVariant.description}
            </div>

            {/* Flavor Profile Stats */}
            <div className="bg-white/50 rounded-2xl p-6 border border-kora-beige/30 mb-8">
               <h3 className="text-sm font-bold uppercase text-kora-brown/70 mb-4 tracking-wider">Flavor Profile</h3>
               
               <div className="space-y-4">
                  <StatRow label="Acidity" value={selectedVariant.details.acidity} />
                  <StatRow label="Roast" value={selectedVariant.details.roastLevel} />
                  <StatRow label="Body" value={selectedVariant.details.body} />
               </div>

               <div className="mt-6 pt-6 border-t border-kora-beige/20 flex flex-wrap gap-4">
                  <div>
                    <span className="block text-xs font-bold uppercase text-kora-brown/70 mb-1">Origin</span>
                    <span className="font-serif text-lg text-kora-dark">{selectedVariant.details.origin}</span>
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase text-kora-brown/70 mb-1">Notes</span>
                    <div className="flex gap-2">
                        {selectedVariant.details.flavorNotes.map(note => (
                            <span key={note} className="px-2 py-1 bg-kora-latte text-kora-brown text-xs rounded-md font-medium">
                                {note}
                            </span>
                        ))}
                    </div>
                  </div>
               </div>
            </div>

            {/* Story Section */}
            <div>
               <h3 className="text-2xl font-serif font-bold text-kora-dark mb-3">The Story</h3>
               <p className="text-stone-600 leading-relaxed italic border-l-4 border-kora-beige pl-4 py-1">
                 "{selectedVariant.details.story}"
               </p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Contact Section at bottom of page content */}
      <div className="mt-20 border-t border-kora-beige/20 pt-10 text-center">
            <h3 className="text-2xl font-serif font-bold mb-4 text-kora-dark">Interest in this roast?</h3>
            <button className="px-8 py-3 bg-kora-dark text-white font-bold rounded-full hover:bg-kora-brown transition-colors">
            Contact Us
            </button>
      </div>
    </div>
  );
}

function StatRow({ label, value }: { label: string, value: number }) {
    return (
        <div className="flex items-center">
            <span className="w-24 text-sm font-bold text-kora-dark/80 uppercase">{label}</span>
            <div className="flex-1 flex gap-2 h-3">
                {[1, 2, 3, 4, 5].map((i) => (
                    <div 
                        key={i} 
                        className={`flex-1 rounded-full transition-colors duration-500 ${
                            i <= value ? 'bg-kora-brown' : 'bg-kora-latte'
                        }`}
                    />
                ))}
            </div>
        </div>
    )
}
