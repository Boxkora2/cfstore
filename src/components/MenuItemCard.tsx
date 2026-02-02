import React from 'react';
import Image from 'next/image';
import { MenuItem, formatPrice } from '@/data/menu';

interface MenuItemCardProps {
  item: MenuItem;
}

export const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  return (
    <div className="group relative bg-white p-6 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-kora-latte overflow-hidden">
      {/* Cute popular tag */}
      {item.popular && (
        <span className="absolute top-0 right-0 bg-kora-beige text-white text-xs font-bold px-3 py-1 rounded-bl-xl z-10">
          Best Seller ★
        </span>
      )}
      
      <div className="flex flex-col items-center text-center">
        {/* Image Circle */}
        <div className="relative w-24 h-24 bg-kora-cream rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-inner overflow-hidden">
          <Image 
            src={item.image} 
            alt={item.name}
            fill
            className="object-cover"
          />
        </div>
        
        <h3 className="text-xl font-bold text-kora-dark mb-2 font-mono tracking-tight">{item.name}</h3>
        
        <p className="text-sm text-gray-500 mb-4 line-clamp-2 min-h-[2.5em]">
          {item.description}
        </p>
        
        <div className="mt-auto flex items-center gap-3">
          <span className="text-lg font-bold text-kora-brown">{formatPrice(item.price)}</span>
          <button 
            className="w-8 h-8 rounded-full bg-kora-sage text-white flex items-center justify-center hover:bg-kora-brown transition-colors shadow-md active:scale-95"
            title="Add to order"
          >
            +
          </button>
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-kora-latte rounded-full opacity-50 z-0"></div>
    </div>
  );
};
