'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import { Star, ShoppingBag, ChevronRight, ChevronLeft, Heart } from 'lucide-react';
import { useCart } from '@/components/CartProvider';
import { useWishlist } from '@/components/WishlistProvider';
import { getSupabase } from '@/lib/supabase';

const fallbackSliderContent = [
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
    title: 'Current Offers',
    items: [
      { id: '9', name: 'Family Biryani Pack', desc: 'Serves 4 - Premium Mutton Kacchi with Borhani', price: 1500, originalPrice: 1900, rating: 5.0, img: 'https://picsum.photos/seed/biryani2/400/400' },
      { id: '10', name: 'Burger Duo', desc: 'Two classic cheeseburgers with large fries', price: 650, originalPrice: 850, rating: 4.8, img: 'https://picsum.photos/seed/burger2/400/400' },
      { id: '11', name: 'Dessert Box', desc: 'Assortment of cakes and pastries', price: 500, originalPrice: 650, rating: 4.9, img: 'https://picsum.photos/seed/cake2/400/400' },
      { id: '12', name: 'Party Pizza Combo', desc: '2 Large pizzas and 2 liter soft drink', price: 1100, originalPrice: 1400, rating: 4.7, img: 'https://picsum.photos/seed/pizza2/400/400' },
    ]
  },
  {
    title: 'Coupon Codes',
    items: [
      { id: 'c1', name: 'FLAT 50% OFF', desc: 'Use CODE: FIFTYOFF (Max discount ৳250, Valid till Nov 30)', price: 0, originalPrice: undefined, rating: 5.0, img: 'https://picsum.photos/seed/coupon1/400/400' },
      { id: 'c2', name: 'Free Delivery', desc: 'Use CODE: FREEDEL (On orders above ৳1000)', price: 0, originalPrice: undefined, rating: 4.9, img: 'https://picsum.photos/seed/coupon2/400/400' },
      { id: 'c3', name: 'BOGO Burger', desc: 'Use CODE: BOGOBURGER (Buy 1 get 1 free on selected items)', price: 0, originalPrice: undefined, rating: 4.8, img: 'https://picsum.photos/seed/coupon3/400/400' },
      { id: 'c4', name: 'New User 20%', desc: 'Use CODE: WELCOME20 (First time users only)', price: 0, originalPrice: undefined, rating: 4.9, img: 'https://picsum.photos/seed/coupon4/400/400' },
    ]
  }
]

export default function PopularDishes() {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [sliderContent, setSliderContent] = useState(fallbackSliderContent);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const supabase = getSupabase();
      if (!supabase) {
        setLoading(false);
        return; // Use fallback content
      }

      try {
        // Example logic showing how to fetch Categories, Items, and Offers manually from Supabase:
        const { data, error } = await supabase.from('items').select('*').limit(8);
        const dbItems = data as any[] | null;
        
        // If the user has set up the database and we get a response, map them into the site layout!
        if (!error && dbItems && dbItems.length > 0) {
           const mappedItems = dbItems.map((item: any) => ({
             id: item.id || Math.random().toString(),
             name: item.name || 'Unnamed Dish',
             desc: item.description || '',
             price: Number(item.price) || 0,
             originalPrice: item.original_price ? Number(item.original_price) : undefined,
             rating: Number(item.rating) || 5.0,
             img: item.img_url || `https://picsum.photos/seed/${item.id || Math.random()}/400/400`
           }));

           // Override the fallback content's first section ('Daily Deals') with real database data
           setSliderContent(prev => {
             const newContent = [...prev];
             newContent[0] = {
               ...newContent[0],
               title: 'Fresh from Database',
               items: mappedItems
             };
             return newContent;
           });
        }
      } catch (err) {
        console.warn("Could not query Supabase tables. Displaying static data.");
      }
      setLoading(false);
    }
    
    loadData();
  }, []);

  const scrollSlider = (id: string, direction: 'left' | 'right') => {
    const container = document.getElementById(id);
    if (container) {
      const scrollAmount = container.clientWidth * 0.8;
      container.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

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
                  <button 
                    onClick={() => scrollSlider(`slider-${sectionIdx}`, 'left')}
                    className="w-10 h-10 rounded-full glass flex items-center justify-center text-warm-white/50 cursor-pointer hover:text-orange hover:border-orange transition-all"
                  >
                    <ChevronLeft className="w-5 h-5 -ml-0.5" />
                  </button>
                  <button 
                    onClick={() => scrollSlider(`slider-${sectionIdx}`, 'right')}
                    className="w-10 h-10 rounded-full glass flex items-center justify-center text-warm-white/50 cursor-pointer hover:text-orange hover:border-orange transition-all"
                  >
                    <ChevronRight className="w-5 h-5 ml-0.5" />
                  </button>
                </div>
              </div>

              {/* Slider Track */}
              <div className="relative -mx-6 px-6 lg:-mx-14 lg:px-14">
                <div id={`slider-${sectionIdx}`} className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbars no-scrollbar scroll-smooth" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
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
                              <p className="text-xl font-bold text-orange">
                                {dish.price === 0 ? 'CLAIM OFFER' : `৳ ${dish.price}`}
                              </p>
                            </div>
                            {dish.price > 0 && (
                              <button 
                                onClick={(e) => { e.preventDefault(); e.stopPropagation(); addToCart(dish); }}
                                className="bg-orange/20 text-orange w-10 h-10 rounded-full flex items-center justify-center hover:bg-orange hover:text-white transition-colors shrink-0 z-20 relative"
                              >
                                <ShoppingBag className="w-5 h-5" />
                              </button>
                            )}
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
