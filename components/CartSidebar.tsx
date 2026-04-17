'use client';

import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/components/CartProvider';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function CartSidebar() {
  const { isCartOpen, setIsCartOpen, items, removeFromCart, updateQuantity, cartTotal } = useCart();
  const router = useRouter();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
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
                <ShoppingBag className="w-6 h-6 text-orange" />
                Your Cart
              </h2>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="text-warm-white/60 hover:text-white bg-off-black p-2 rounded-full transition-colors hover:bg-warm-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-warm-white/50 space-y-4">
                  <ShoppingBag className="w-16 h-16 opacity-20" />
                  <p>Your cart is empty</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
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
                          <ShoppingBag className="w-8 h-8 text-warm-white/20" />
                        </div>
                      )}
                      <div className="flex-1 flex flex-col justify-between py-1">
                        <div className="flex justify-between items-start gap-2">
                          <h4 className="font-serif text-warm-white text-lg leading-tight line-clamp-2">{item.name}</h4>
                          <button 
                            onClick={() => removeFromCart(item.id)} 
                            className="text-warm-white/40 hover:text-red-400 p-1.5 rounded-full hover:bg-red-400/10 transition-colors opacity-0 group-hover:opacity-100"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="flex items-center justify-between mt-auto pt-2">
                          <p className="text-orange font-bold text-lg">৳ {item.price}</p>
                          
                          <div className="flex items-center gap-1 bg-charcoal rounded-full p-1 border border-glass-border">
                            <button 
                              onClick={() => {
                                if (item.quantity === 1) {
                                  removeFromCart(item.id);
                                } else {
                                  updateQuantity(item.id, -1);
                                }
                              }} 
                              className="text-warm-white hover:text-orange w-8 h-8 flex items-center justify-center rounded-full hover:bg-orange/10 active:scale-95 transition-all"
                            >
                              {item.quantity === 1 ? <Trash2 className="w-4 h-4 text-red-400" /> : <Minus className="w-4 h-4" />}
                            </button>
                            <span className="text-sm w-6 text-center text-warm-white font-bold select-none">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, 1)} 
                              className="text-warm-white hover:text-orange w-8 h-8 flex items-center justify-center rounded-full hover:bg-orange/10 active:scale-95 transition-all"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 bg-off-black border-t border-glass-border shadow-[0_-10px_20px_rgba(0,0,0,0.2)]">
                <div className="flex justify-between text-warm-white mb-2 text-sm">
                  <span className="opacity-70">Subtotal</span>
                  <span className="font-medium">৳ {cartTotal}</span>
                </div>
                <div className="flex justify-between text-warm-white mb-6 text-sm">
                  <span className="opacity-70">Delivery Fee</span>
                  <span className="font-medium">৳ 60</span>
                </div>
                <div className="flex justify-between text-white text-2xl font-bold mb-6">
                  <span>Total</span>
                  <span className="text-orange">৳ {cartTotal + 60}</span>
                </div>
                <button 
                  onClick={() => {
                    setIsCartOpen(false);
                    router.push('/checkout');
                  }}
                  className="w-full bg-orange hover:bg-orange-light text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-colors cursor-pointer shadow-[0_4px_14px_rgba(230,95,43,0.4)]"
                >
                  Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
