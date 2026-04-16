'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/components/CartProvider';

const dishes = [
  { id: '1', name: 'Kacchi Biryani', desc: 'Authentic dhaka style kacchi with tender mutton', price: 450, rating: 4.9, img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=400&q=80' },
  { id: '2', name: 'Chicken Burger', desc: 'Crispy fried chicken with special sauce & cheese', price: 280, rating: 4.7, img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80' },
  { id: '3', name: 'Beef Tehari', desc: 'Flavorful mustard oil tehari with small beef pieces', price: 320, rating: 4.8, img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=400&q=80' },
  { id: '4', name: 'Margherita Pizza', desc: 'Classic italian crust with fresh basil and mozzarella', price: 550, rating: 4.6, img: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=400&q=80' },
  { id: '5', name: 'Fuchka Combo', desc: 'Crispy shells with spicy tamarind water & egg', price: 150, rating: 4.9, img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=80' },
  { id: '6', name: 'Khichuri with Beef', desc: 'Rainy day special vuna khichuri with beef bhuna', price: 380, rating: 4.8, img: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=400&q=80' },
  { id: '7', name: 'Borhani', desc: 'Traditional spicy yogurt drink', price: 120, rating: 4.7, img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80' },
  { id: '8', name: 'Chocolate Cake', desc: 'Rich dark chocolate moist layers', price: 220, rating: 4.8, img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=400&q=80' },
];

export default function PopularDishes() {
  const { addToCart } = useCart();
  
  return (
    <section className="py-24 bg-charcoal border-t border-glass-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-14">
        
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-orange font-semibold uppercase tracking-wider mb-2 text-sm">Most Ordered</p>
          <h2 className="text-4xl md:text-5xl font-serif font-medium mb-4 text-warm-white">Popular Dishes</h2>
          <p className="text-warm-white/70">Handpicked favorites that our customers order again and again.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {dishes.map((dish, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
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
                    onClick={() => addToCart(dish)}
                    className="bg-orange/20 text-orange w-10 h-10 rounded-full flex items-center justify-center hover:bg-orange hover:text-white transition-colors"
                  >
                    <ShoppingBag className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
