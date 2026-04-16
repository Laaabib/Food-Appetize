'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, Star, ShoppingBag } from 'lucide-react';
import { allDishes } from '@/lib/menuData';
import { useCart } from '@/components/CartProvider';
import Image from 'next/image';

export default function SearchOverlay({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('');
  const { addToCart } = useCart();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      setQuery('');
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const filteredDishes = query.trim() === '' 
    ? [] 
    : allDishes.filter(d => 
        d.name.toLowerCase().includes(query.toLowerCase()) || 
        d.desc.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-off-black/95 backdrop-blur-xl flex flex-col"
        >
          {/* Header Bar */}
          <div className="w-full max-w-5xl mx-auto px-6 py-6 flex items-center justify-between border-b border-glass-border">
            <div className="flex-1 flex items-center bg-charcoal rounded-full px-6 py-3 border border-warm-white/10 focus-within:border-orange transition-colors">
              <Search className="w-5 h-5 text-warm-white/50" />
              <input 
                ref={inputRef}
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for biryani, burgers, pizza..." 
                className="bg-transparent border-none outline-none flex-1 ml-4 text-warm-white text-lg placeholder:text-warm-white/30"
              />
              {query && (
                <button onClick={() => setQuery('')} className="text-warm-white/50 hover:text-white">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            <button 
              onClick={onClose}
              className="ml-6 text-warm-white/70 hover:text-white bg-charcoal p-3 rounded-full hover:bg-orange/20 hover:text-orange transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Results Area */}
          <div className="flex-1 overflow-y-auto pt-8 pb-24 px-6">
            <div className="max-w-5xl mx-auto">
              {query.length > 0 ? (
                <>
                  <p className="text-warm-white/60 mb-6 uppercase tracking-wider text-sm font-semibold">
                    {filteredDishes.length} {filteredDishes.length === 1 ? 'Result' : 'Results'} found
                  </p>
                  
                  {filteredDishes.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {filteredDishes.map(dish => (
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
                            <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded-full flex items-center gap-1 z-10">
                              <Star className="w-3 h-3 fill-orange text-orange" />
                              <span className="text-xs font-bold text-white">{dish.rating}</span>
                            </div>
                          </div>
                          
                          <div className="flex-1 flex flex-col relative z-10">
                            <h3 className="text-lg font-serif font-semibold text-warm-white mb-1 line-clamp-1">{dish.name}</h3>
                            <p className="text-sm text-warm-white/50 line-clamp-2 mb-4">{dish.desc}</p>
                            <div className="mt-auto flex items-center justify-between pt-2">
                              <p className="text-xl font-bold text-orange">৳ {dish.price}</p>
                              <button 
                                onClick={() => {
                                  addToCart(dish as any);
                                  onClose();
                                }}
                                className="bg-orange/20 text-orange w-10 h-10 rounded-full flex items-center justify-center hover:bg-orange hover:text-white transition-colors cursor-pointer"
                              >
                                <ShoppingBag className="w-5 h-5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                     <div className="flex flex-col items-center justify-center pt-20 text-center">
                       <Search className="w-16 h-16 text-warm-white/10 mb-4" />
                       <h3 className="text-2xl font-serif text-warm-white mb-2">No dishes found</h3>
                       <p className="text-warm-white/50">Try searching for something else like "pizza" or "beef".</p>
                     </div>
                  )}
                </>
              ) : (
                <div className="flex flex-col items-center justify-center pt-32 text-center opacity-40">
                  <Search className="w-16 h-16 text-warm-white/20 mb-6" />
                  <h3 className="text-2xl font-serif text-warm-white">What are you craving?</h3>
                  <p className="text-sm mt-2">Start typing to search our entire menu.</p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
