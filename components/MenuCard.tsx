'use client';

import Image from 'next/image';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/components/CartProvider';

export default function MenuCard({ item }: { item: any }) {
  const { addToCart } = useCart();

  return (
    <div className="glass rounded-[24px] p-4 flex flex-col h-full group hover:border-orange hover:scale-[1.02] hover:shadow-[0_8px_24px_rgba(230,95,43,0.15)] transition-all duration-300 relative overflow-hidden">
      <div className="relative w-full aspect-square rounded-[16px] overflow-hidden mb-4 bg-off-black">
        <Image 
          src={item.img} 
          alt={item.name} 
          fill 
          className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" 
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded-full flex items-center gap-1">
          <Star className="w-3 h-3 fill-orange text-orange" />
          <span className="text-xs font-bold text-white">{item.rating}</span>
        </div>
      </div>
      
      <div className="flex-1 flex flex-col relative z-10">
        <h3 className="text-lg font-serif font-semibold text-warm-white mb-1">{item.name}</h3>
        <p className="text-sm text-warm-white/60 line-clamp-2 mb-4">{item.desc}</p>
        <div className="mt-auto flex items-center justify-between pt-2">
          <div className="flex flex-col">
            {item.originalPrice && (
              <p className="text-xs text-warm-white/40 line-through mb-0.5">৳ {item.originalPrice}</p>
            )}
            <p className="text-xl font-bold text-orange">৳ {item.price}</p>
          </div>
          <button 
            onClick={() => addToCart(item as any)}
            className="bg-orange/20 text-orange w-10 h-10 rounded-full flex items-center justify-center hover:bg-orange hover:text-white transition-colors cursor-pointer shrink-0"
          >
            <ShoppingBag className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
