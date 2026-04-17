'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Search, MapPin, Clock, Star, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-[120px] lg:pt-[120px] pb-16 lg:pb-20 min-h-[calc(100vh-80px)] xl:min-h-[768px] flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col pr-0 lg:pr-10 relative z-10"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-serif font-normal leading-[1.1] mb-4 lg:mb-5 text-white">
              Delicious Meals from FoodAppetize Delivered.
            </h1>

            <p className="text-base sm:text-lg text-white/70 font-light mb-8 lg:mb-10 leading-[1.6]">
              From gourmet burgers to authentic Kacchi biryani — enjoy fresh meals prepared in our world-class smart cloud kitchen.
            </p>

            <div className="glass rounded-full flex w-full max-w-[500px] mb-8 p-1.5 sm:p-2">
              <input 
                type="text" 
                placeholder="Enter delivery address..." 
                className="bg-transparent border-none px-4 sm:px-6 py-2 sm:py-3 text-white flex-1 text-sm sm:text-[15px] focus:outline-none placeholder:text-white/50 w-full"
              />
              <button className="bg-orange text-white rounded-full px-5 sm:px-8 py-2 sm:py-3 font-semibold text-xs sm:text-sm cursor-pointer whitespace-nowrap hover:bg-orange-light transition-colors">
                Find Food
              </button>
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              <div className="glass px-3 sm:px-4 py-2 rounded-lg flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.5px]">
                <span className="text-orange font-bold text-xs sm:text-sm">⏱</span> 25-35 MIN
              </div>
              <div className="glass px-3 sm:px-4 py-2 rounded-lg flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.5px]">
                <span className="text-orange font-bold text-xs sm:text-sm">🌿</span> 100% HALAL
              </div>
              <div className="glass px-3 sm:px-4 py-2 rounded-lg flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.5px]">
                <span className="text-orange font-bold text-xs sm:text-sm">★</span> 4.9 RATING
              </div>
            </div>
          </motion.div>

          {/* Collages & Promo Component */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative h-[380px] sm:h-[450px] lg:h-[500px] w-full mt-8 lg:mt-0"
          >
            <div className="grid grid-cols-2 gap-4 h-full">
              {/* Big Item */}
              <div className="row-span-2 rounded-[24px] overflow-hidden bg-[#1a1a1a] relative flex items-end p-5 group">
                <div className="absolute bg-green text-white px-3 py-1.5 rounded-full text-[10px] uppercase font-bold top-5 right-5 z-10 tracking-wider">
                  Trending
                </div>
                <Image 
                  src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80" 
                  alt="Kacchi Biryani Royale" 
                  fill 
                  className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="relative z-10 font-serif text-xl bg-black/40 px-3 py-1 rounded-md text-white backdrop-blur-sm">
                  Kacchi Biryani Royale
                </div>
              </div>
              
              {/* Smaller items */}
              <div className="rounded-[24px] overflow-hidden glass relative flex items-end p-5 group">
                <Image 
                  src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80" 
                  alt="The Wagyu Burger" 
                  fill 
                  className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
                  referrerPolicy="no-referrer"
                />
                <div className="relative z-10 font-serif text-lg bg-black/40 px-3 py-1 rounded-md text-white backdrop-blur-sm">
                  The Wagyu Burger
                </div>
              </div>
              
              <div className="rounded-[24px] overflow-hidden glass relative flex items-end p-5 group">
                <Image 
                  src="https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80" 
                  alt="Spicy Fuchka Platter" 
                  fill 
                  className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
                  referrerPolicy="no-referrer"
                />
                <div className="relative z-10 font-serif text-lg bg-black/40 px-3 py-1 rounded-md text-white backdrop-blur-sm">
                  Spicy Fuchka Platter
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
