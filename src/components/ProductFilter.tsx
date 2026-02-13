'use client';

import { motion } from 'framer-motion';

interface ProductFilterProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function ProductFilter({
  categories,
  activeCategory,
  onSelectCategory,
}: ProductFilterProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 py-8">
      {categories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`
              relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors outline-kora-brown
              ${isActive ? 'text-white' : 'text-kora-dark hover:text-kora-brown bg-kora-latte/50 hover:bg-kora-latte'}
            `}
          >
            {isActive && (
              <motion.div
                layoutId="activeFilter"
                className="absolute inset-0 rounded-full bg-kora-dark"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                style={{ borderRadius: 9999 }}
              />
            )}
            <span className="relative z-10">{category}</span>
          </button>
        );
      })}
    </div>
  );
}
