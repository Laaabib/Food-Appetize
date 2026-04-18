'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { menuCategories } from '@/lib/menuData';
import MenuCard from '@/components/MenuCard';

export default function FullMenu() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].name);

  const currentCategoryData = menuCategories.find(c => c.name === activeCategory);

  return (
    <section className="pb-24 w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-14">
        
        {/* Category Tabs */}
        <div className="flex overflow-x-auto pb-4 md:pb-0 md:flex-wrap md:justify-center items-center gap-3 mb-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {menuCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`whitespace-nowrap shrink-0 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === category.name 
                  ? 'bg-orange text-white shadow-[0_0_20px_rgba(230,95,43,0.3)] border border-orange' 
                  : 'glass text-warm-white/70 hover:text-white hover:border-warm-white/30 border border-transparent'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              {currentCategoryData?.items.map((dish, idx) => (
                <MenuCard key={dish.id} item={dish} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
