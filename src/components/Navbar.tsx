'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-kora-cream/90 backdrop-blur-sm border-b border-kora-latte py-4 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <span className="text-3xl">☕</span>
          <h1 className="text-2xl font-bold text-kora-dark tracking-tighter">KoraChoco Coffee</h1>
        </Link>
        
        <div className="hidden md:flex gap-8 text-kora-brown font-medium">
          <Link href="/" className="hover:text-kora-sage transition-colors">Home</Link>
          <Link href="/products" className="hover:text-kora-sage transition-colors">Products</Link>
          
          {/* Contact Us Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsContactOpen(true)}
            onMouseLeave={() => setIsContactOpen(false)}
          >
            <button className="hover:text-kora-sage transition-colors flex items-center gap-1">
              Contact Us
              <motion.span
                animate={{ rotate: isContactOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                ▼
              </motion.span>
            </button>
            
            <AnimatePresence>
              {isContactOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-kora-beige/30 overflow-hidden"
                >
                  <Link 
                    href="#business" 
                    className="block px-4 py-3 text-kora-dark hover:bg-kora-latte hover:text-kora-brown transition-colors"
                  >
                    For Business
                  </Link>
                  <Link 
                    href="#careers" 
                    className="block px-4 py-3 text-kora-dark hover:bg-kora-latte hover:text-kora-brown transition-colors border-t border-kora-beige/20"
                  >
                    For Careers
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <a href="#" className="hover:text-kora-sage transition-colors">Our Story</a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://www.korachoco.cv"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-kora-sage text-white px-5 py-2 rounded-full font-bold hover:bg-green-700 transition-all transform hover:scale-105 shadow-md"
          >
            Kora Portfolio ➜
          </a>
        </div>
      </div>
    </nav>
  );
};
