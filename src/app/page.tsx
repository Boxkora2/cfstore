'use client';
import { useState, useEffect } from 'react';
import { MenuItemCard } from '@/components/MenuItemCard';
import { menuItems, Category } from '@/data/menu';
import { motion, AnimatePresence } from 'framer-motion';
import { EventPopup } from '@/components/EventPopup';
import { EventBoard } from '@/components/EventBoard';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [direction, setDirection] = useState(0);

  const categories: (Category | 'All')[] = ['All', 'Specialty', 'Espresso', 'Non-Coffee', 'Pastries'];
  const ITEMS_PER_PAGE = 6;

  const filteredItems = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  
  const currentItems = filteredItems.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleCategoryChange = (cat: Category | 'All') => {
    const newIndex = categories.indexOf(cat);
    const oldIndex = categories.indexOf(activeCategory);
    setDirection(newIndex > oldIndex ? 1 : -1);
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage: number) => {
    setDirection(newPage > currentPage ? 1 : -1);
    setCurrentPage(newPage);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -50 : 50,
      opacity: 0,
    }),
  };

  return (
    <div className="min-h-screen bg-kora-cream/30 border-t-4 border-kora-brown">
      <EventPopup />
      <EventBoard />
      
      {/* Hero Section */}
      <section className="relative py-16 px-4 text-center overflow-hidden">
        <div className="absolute top-10 left-10 text-6xl opacity-10 rotate-12 animate-pulse">🥐</div>
        <div className="absolute bottom-10 right-10 text-6xl opacity-10 -rotate-12 animate-bounce">☕</div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-kora-dark mb-4">
          Brewing Joy, <span className="text-kora-sage">One Cup at a Time</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
          Welcome to KoraChoco Coffee! A cozy space where every sip feels like a warm hug. 
          Explore our menu below.
        </p>
      </section>

      {/* Menu Filter */}
      <section className="container mx-auto px-4 mb-4">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-6 py-2 rounded-full border-2 font-medium transition-all duration-300
                ${activeCategory === cat 
                  ? 'bg-kora-brown border-kora-brown text-white shadow-lg scale-105' 
                  : 'bg-transparent border-kora-brown/30 text-kora-brown hover:bg-kora-brown/10'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Pagination Controls (Top) */}
      <div className="h-12 flex justify-center items-center mb-4">
          {totalPages > 1 && (
            <div className="flex justify-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all
                    ${currentPage === page 
                      ? 'bg-kora-sage text-white shadow-md scale-110' 
                      : 'bg-white text-gray-400 hover:bg-gray-100'
                    }`}
                >
                  {page}
                </button>
              ))}
            </div>
          )}
      </div>

      {/* Menu Grid with Animation */}
      <main className="container mx-auto px-4 pb-20 overflow-hidden min-h-[600px]">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={currentPage + activeCategory}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            // ⚡ TIP: Change 'duration' number below to adjust speed (0.3 = fast, 1.2 = slow)
            transition={{ duration: 0.1, ease: "easeInOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {currentItems.map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </motion.div>
        </AnimatePresence>

        {currentItems.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            <p className="text-xl">Opps! No goodies found in this category yet. 🍪</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-kora-dark text-kora-cream py-10 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2 text-2xl">✨</p>
          <p className="font-medium">Made with love at Kora Coffee.</p>
          <p className="text-sm opacity-60 mt-2">© 2026 Kora Coffee Store</p>
        </div>
      </footer>
    </div>
  );
}
