'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Star, ShoppingBag, ShoppingCart } from 'lucide-react';
import { groceryCategories } from '@/lib/menuData';
import { useCart } from '@/components/CartProvider';

export default function GroceriesPage() {
  const { addToCart } = useCart();
  const groceries = groceryCategories[0].items;

  return (
    <main className="min-h-screen overflow-x-hidden bg-charcoal">
      <Header />
      <div className="pt-[140px] pb-24 px-6 lg:px-14 max-w-7xl mx-auto min-h-[70vh]">
        <div className="text-center mb-16">
          <p className="text-orange font-semibold uppercase tracking-wider mb-2 text-sm">Essentials</p>
          <h1 className="text-5xl font-serif font-medium text-warm-white mb-4">Groceries Market</h1>
          <p className="text-warm-white/60 max-w-xl mx-auto">Shop premium raw items, baby food, and authentic bangladeshi masalas directly from our pantry.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {groceries.map(item => (
            <div
              key={item.id}
              className="glass rounded-[32px] p-4 flex flex-col h-full group hover:border-orange transition-colors duration-300 relative overflow-hidden text-left"
            >
              <div className="relative w-full aspect-square rounded-[24px] overflow-hidden mb-6 bg-off-black">
                <Image 
                  src={item.img} 
                  alt={item.name} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 z-10">
                  <Star className="w-3.5 h-3.5 fill-orange text-orange" />
                  <span className="text-sm font-bold text-white">{item.rating}</span>
                </div>
              </div>
              
              <div className="flex-1 flex flex-col relative z-10 px-2 pb-2">
                <h3 className="text-xl font-serif font-semibold text-warm-white mb-2 leading-tight">{item.name}</h3>
                <p className="text-sm text-warm-white/60 line-clamp-2 mb-6">{item.desc}</p>
                <div className="mt-auto flex items-center justify-between">
                  <p className="text-2xl font-bold text-orange">৳ {item.price}</p>
                  <button 
                    onClick={() => addToCart(item as any)}
                    className="bg-orange/20 text-orange w-12 h-12 rounded-full flex items-center justify-center hover:bg-orange hover:text-white transition-all cursor-pointer hover:shadow-[0_0_20px_rgba(255,107,0,0.4)]"
                  >
                    <ShoppingBag className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
