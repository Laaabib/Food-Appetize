'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/components/CartProvider';
import { menuCategories } from '@/lib/menuData';

export default function FullMenu() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].name);
  const { addToCart } = useCart();

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
                <div
                  key={dish.id}
                  className="glass rounded-[24px] p-4 flex flex-col h-full group hover:border-orange transition-colors duration-300 relative overflow-hidden"
                >
                  <div className="relative w-full aspect-square rounded-[16px] overflow-hidden mb-4 bg-off-black">
                    <Image 
                      src={dish.img} 
                      alt={dish.name} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" 
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3 fill-orange text-orange" />
                      <span className="text-xs font-bold text-white">{dish.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex-1 flex flex-col relative z-10">
                    <h3 className="text-lg font-serif font-semibold text-warm-white mb-1">{dish.name}</h3>
                    <p className="text-sm text-warm-white/60 line-clamp-2 mb-4">{dish.desc}</p>
                    <div className="mt-auto flex items-center justify-between pt-2">
                      <p className="text-xl font-bold text-orange">৳ {dish.price}</p>
                      <button 
                        onClick={() => addToCart(dish as any)}
                        className="bg-orange/20 text-orange w-10 h-10 rounded-full flex items-center justify-center hover:bg-orange hover:text-white transition-colors cursor-pointer"
                      >
                        <ShoppingBag className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
