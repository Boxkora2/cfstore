import React from 'react';

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-kora-cream/90 backdrop-blur-sm border-b border-kora-latte py-4 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-3xl">☕</span>
          <h1 className="text-2xl font-bold text-kora-dark tracking-tighter">KoraChoco Coffee</h1>
        </div>
        
        <div className="hidden md:flex gap-8 text-kora-brown font-medium">
          <a href="#" className="hover:text-kora-sage transition-colors">Menu</a>
          <a href="#" className="hover:text-kora-sage transition-colors">Locations</a>
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
