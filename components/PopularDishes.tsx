'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import { Star, ShoppingBag, ChevronRight, ChevronLeft, Heart } from 'lucide-react';
import { useCart } from '@/components/CartProvider';
import { useWishlist } from '@/components/WishlistProvider';

const sliderContent = [
  {
    title: 'Daily Deals',
    items: [
      { id: '1', name: 'Kacchi Biryani', desc: 'Authentic dhaka style kacchi with tender mutton', price: 450, originalPrice: 550, rating: 4.9, img: 'https://picsum.photos/seed/biryani1/400/400' },
      { id: '2', name: 'Chicken Burger', desc: 'Crispy fried chicken with special sauce & cheese', price: 280, rating: 4.7, img: 'https://picsum.photos/seed/burger1/400/400' },
      { id: '3', name: 'Fuchka Combo', desc: 'Crispy shells with spicy tamarind water & egg', price: 150, originalPrice: 200, rating: 4.9, img: 'https://picsum.photos/seed/fuchka1/400/400' },
      { id: '4', name: 'Chocolate Cake', desc: 'Rich dark chocolate moist layers', price: 220, rating: 4.8, img: 'https://picsum.photos/seed/cake1/400/400' },
    ]
  },
  {
    title: 'Food & Beverage',
    items: [
      { id: '5', name: 'Margherita Pizza', desc: 'Classic italian crust with fresh basil and mozzarella', price: 550, rating: 4.6, img: 'https://picsum.photos/seed/pizza1/400/400' },
      { id: '6', name: 'Beef Tehari', desc: 'Flavorful mustard oil tehari with small beef pieces', price: 320, originalPrice: 380, rating: 4.8, img: 'https://picsum.photos/seed/tehari1/400/400' },
      { id: '7', name: 'Borhani', desc: 'Traditional spicy yogurt drink', price: 120, rating: 4.7, img: 'https://picsum.photos/seed/borhani1/400/400' },
      { id: '8', name: 'Khichuri with Beef', desc: 'Rainy day special vuna khichuri with beef bhuna', price: 380, rating: 4.8, img: 'https://picsum.photos/seed/khichuri1/400/400' },
    ]
  },
  {
    title: 'Current Offers',
    items: [
      { id: '9', name: 'Family Biryani Pack', desc: 'Serves 4 - Premium Mutton Kacchi with Borhani', price: 1500, originalPrice: 1900, rating: 5.0, img: 'https://picsum.photos/seed/biryani2/400/400' },
      { id: '10', name: 'Burger Duo', desc: 'Two classic cheeseburgers with large fries', price: 650, originalPrice: 850, rating: 4.8, img: 'https://picsum.photos/seed/burger2/400/400' },
      { id: '11', name: 'Dessert Box', desc: 'Assortment of cakes and pastries', price: 500, originalPrice: 650, rating: 4.9, img: 'https://picsum.photos/seed/cake2/400/400' },
      { id: '12', name: 'Party Pizza Combo', desc: '2 Large pizzas and 2 liter soft drink', price: 1100, originalPrice: 1400, rating: 4.7, img: 'https://picsum.photos/seed/pizza2/400/400' },
    ]
  }
]

export default function PopularDishes() {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  
  return (
    <section className="py-24 bg-charcoal border-t border-glass-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-14">
        
        {sliderContent.map((section, sectionIdx) => {
          
          return (
            <div key={sectionIdx} className={sectionIdx !== 0 ? 'mt-24' : ''}>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-serif font-medium text-warm-white">{section.title}</h2>
                  <div className="w-16 h-1 bg-orange mt-3 rounded-full"></div>
                </div>
                <div className="hidden sm:flex gap-2">
                  {/* Visual purely decorative as native scroll does the scrolling */}
                  <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-warm-white/50 cursor-pointer hover:text-orange hover:border-orange transition-all">
                    <ChevronLeft className="w-5 h-5 -ml-0.5" />
                  </div>
                  <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-warm-white/50 cursor-pointer hover:text-orange hover:border-orange transition-all">
                    <ChevronRight className="w-5 h-5 ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Slider Track */}
              <div className="relative -mx-6 px-6 lg:-mx-14 lg:px-14">
                <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbars no-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  {section.items.map((dish, idx) => (
                    <div
                      key={idx}
                      className="min-w-[280px] w-[80vw] sm:w-[320px] lg:w-[350px] shrink-0 snap-center"
                    >
                      <div className="glass rounded-[24px] p-4 flex flex-col h-full group hover:border-orange hover:scale-[1.02] hover:shadow-[0_8px_24px_rgba(230,95,43,0.15)] transition-all duration-300 relative overflow-hidden">
                        <div className="relative w-full aspect-square rounded-[16px] overflow-hidden mb-4 bg-off-black">
                          <Image 
                            src={dish.img} 
                            alt={dish.name} 
                            fill 
                            className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 cursor-grab active:cursor-grabbing" 
                            referrerPolicy="no-referrer"
                            draggable={false}
                          />
                          <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md p-1.5 rounded-full z-10 pointer-events-auto">
                            <button 
                              onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleWishlist(dish); }}
                              className={`transition-colors flex items-center justify-center rounded-full p-1 ${isInWishlist(dish.id) ? 'text-red-500 hover:text-red-400' : 'text-warm-white/50 hover:text-red-400'}`}
                            >
                              <Heart className={`w-4 h-4 ${isInWishlist(dish.id) ? 'fill-red-500' : ''}`} />
                            </button>
                          </div>
                          <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded-full flex items-center gap-1 z-10 pointer-events-none">
                            <Star className="w-3 h-3 fill-orange text-orange" />
                            <span className="text-xs font-bold text-white">{dish.rating}</span>
                          </div>
                        </div>
                        
                        <div className="flex-1 flex flex-col relative z-10 pointer-events-none">
                          <h3 className="text-lg font-serif font-semibold text-warm-white mb-1 line-clamp-1">{dish.name}</h3>
                          <p className="text-sm text-warm-white/60 line-clamp-2 mb-4">{dish.desc}</p>
                          <div className="mt-auto flex items-center justify-between pt-2 pointer-events-auto">
                            <div className="flex flex-col">
                              {dish.originalPrice && (
                                <p className="text-xs text-warm-white/40 line-through mb-0.5">৳ {dish.originalPrice}</p>
                              )}
                              <p className="text-xl font-bold text-orange">৳ {dish.price}</p>
                            </div>
                            <button 
                              onClick={(e) => { e.preventDefault(); e.stopPropagation(); addToCart(dish); }}
                              className="bg-orange/20 text-orange w-10 h-10 rounded-full flex items-center justify-center hover:bg-orange hover:text-white transition-colors shrink-0 z-20 relative"
                            >
                              <ShoppingBag className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        })}

      </div>
    </section>
  );
}
