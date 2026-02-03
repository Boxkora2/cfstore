import React from 'react';
import Image from 'next/image';
import { MenuItem, formatPrice } from '@/data/menu';

interface MenuItemCardProps {
  item: MenuItem;
}

export const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  const hasDiscount = typeof item.discount === 'number' && item.discount >= 10 && item.discount <= 90;
  const finalPrice = hasDiscount ? item.price * (1 - item.discount! / 100) : item.price;

  return (
    <div className="group relative bg-white p-6 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-kora-latte overflow-hidden">
      {/* Discount Badge */}
      {hasDiscount && (
        <span className="absolute top-0 left-0 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-br-xl z-20">
          {item.discount}% OFF
        </span>
      )}

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
        
        <div className="mt-auto flex items-center justify-center gap-2">
          {hasDiscount ? (
            <>
              <span className="text-lg font-bold text-red-500">{formatPrice(finalPrice)}</span>
              <span className="text-sm text-gray-400 line-through decoration-gray-400">{formatPrice(item.price)}</span>
            </>
          ) : (
            <span className="text-lg font-bold text-kora-brown">{formatPrice(item.price)}</span>
          )}
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-kora-latte rounded-full opacity-50 z-0"></div>
    </div>
  );
};
