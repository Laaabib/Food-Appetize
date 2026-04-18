'use client';

import { motion, AnimatePresence } from 'motion/react';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { useWishlist } from '@/components/WishlistProvider';
import { useCart } from '@/components/CartProvider';
import Image from 'next/image';

export default function WishlistSidebar() {
  const { isWishlistOpen, setIsWishlistOpen, items, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <AnimatePresence>
      {isWishlistOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsWishlistOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-charcoal border-l border-glass-border z-[70] flex flex-col shadow-2xl"
          >
            <div className="flex items-center justify-between p-6 border-b border-glass-border">
              <h2 className="text-2xl font-serif font-medium text-warm-white flex items-center gap-2">
                <Heart className="w-6 h-6 text-red-400 fill-red-400" />
                Your Wishlist
              </h2>
              <button 
                onClick={() => setIsWishlistOpen(false)}
                className="text-warm-white/60 hover:text-white bg-off-black p-2 rounded-full transition-colors hover:bg-warm-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-warm-white/50 space-y-4">
                  <Heart className="w-16 h-16 opacity-20" />
                  <p>Your wishlist is empty</p>
                  <button 
                    onClick={() => setIsWishlistOpen(false)}
                    className="text-orange border border-orange px-6 py-2 rounded-full hover:bg-orange hover:text-white transition-colors"
                  >
                    Browse Menu
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {items.map((item) => (
                    <motion.div 
                      key={item.id} 
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="flex gap-4 p-4 rounded-2xl bg-off-black border border-glass-border shadow-sm hover:border-orange/40 transition-colors group"
                    >
                      {item.img ? (
                        <div className="w-24 h-24 rounded-xl overflow-hidden relative shrink-0 bg-charcoal">
                          <Image src={item.img} alt={item.name} fill className="object-cover" referrerPolicy="no-referrer" />
                        </div>
                      ) : (
                        <div className="w-24 h-24 rounded-xl shrink-0 bg-charcoal flex items-center justify-center">
                          <Heart className="w-8 h-8 text-warm-white/20" />
                        </div>
                      )}
                      <div className="flex-1 flex flex-col justify-between py-1">
                        <div className="flex justify-between items-start gap-2">
                          <h4 className="font-serif text-warm-white text-lg leading-tight line-clamp-2">{item.name}</h4>
                          <button 
                            onClick={() => removeFromWishlist(item.id)} 
                            className="text-warm-white/40 hover:text-red-400 p-1.5 rounded-full hover:bg-red-400/10 transition-colors opacity-0 group-hover:opacity-100"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="flex items-center justify-between mt-auto pt-2">
                          <div className="flex flex-col">
                            {item.originalPrice && (
                              <span className="text-[10px] text-warm-white/40 line-through">৳ {item.originalPrice}</span>
                            )}
                            <p className="text-orange font-bold text-lg leading-none">৳ {item.price}</p>
                          </div>
                          
                          <button 
                            onClick={() => {
                              addToCart(item as any);
                              removeFromWishlist(item.id);
                              setIsWishlistOpen(false);
                            }} 
                            className="bg-orange/20 text-orange hover:bg-orange hover:text-white px-3 py-1.5 text-xs font-bold rounded-lg uppercase tracking-wider transition-colors flex items-center gap-1"
                          >
                            <ShoppingBag className="w-3.5 h-3.5" /> ADD
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
