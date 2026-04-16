'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Search, MapPin, Clock, Star, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-[100px] lg:pt-[120px] pb-20 min-h-[calc(100vh-80px)] xl:min-h-[768px] flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-14 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center relative">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col pr-0 lg:pr-10 relative z-10"
          >
            <h1 className="text-5xl lg:text-[56px] font-serif font-normal leading-[1.1] mb-5 text-white">
              Delicious Meals from FoodAppetize Delivered.
            </h1>

            <p className="text-lg text-white/70 font-light mb-10 leading-[1.6]">
              From gourmet burgers to authentic Kacchi biryani — enjoy fresh meals prepared in our world-class smart cloud kitchen.
            </p>

            <div className="glass rounded-full flex w-full max-w-[500px] mb-8 p-2">
              <input 
                type="text" 
                placeholder="Enter delivery address..." 
                className="bg-transparent border-none px-6 py-3 text-white flex-1 text-[15px] focus:outline-none placeholder:text-white/50"
              />
              <button className="bg-orange text-white rounded-full px-8 py-3 font-semibold text-sm cursor-pointer whitespace-nowrap hover:bg-orange-light transition-colors">
                Find Food
              </button>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="glass px-4 py-2 rounded-lg flex items-center gap-2 text-xs uppercase tracking-[0.5px]">
                <span className="text-orange font-bold text-sm">⏱</span> 25-35 MIN
              </div>
              <div className="glass px-4 py-2 rounded-lg flex items-center gap-2 text-xs uppercase tracking-[0.5px]">
                <span className="text-orange font-bold text-sm">🌿</span> 100% HALAL
              </div>
              <div className="glass px-4 py-2 rounded-lg flex items-center gap-2 text-xs uppercase tracking-[0.5px]">
                <span className="text-orange font-bold text-sm">★</span> 4.9 RATING
              </div>
            </div>
          </motion.div>

          {/* Collages & Promo Component */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative h-[500px] w-full mt-12 lg:mt-0"
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

            {/* App Promo overlapping the visual area */}
            <div className="absolute -bottom-10 lg:bottom-[50px] right-4 lg:-right-4 w-[240px] bg-cream text-charcoal p-5 rounded-[20px] shadow-2xl flex flex-col gap-2 z-20 hover:-translate-y-2 transition-transform duration-300">
              <h4 className="font-serif text-[18px] font-bold">Get the App</h4>
              <p className="text-[12px] opacity-80 leading-snug">Download our mobile app and track your order in real-time.</p>
              <div className="flex gap-2 mt-2">
                <button className="bg-charcoal text-white text-[10px] px-2.5 py-1.5 rounded-md flex-1 uppercase tracking-wider font-semibold hover:bg-black transition-colors">
                  iOS Store
                </button>
                <button className="bg-charcoal text-white text-[10px] px-2.5 py-1.5 rounded-md flex-1 uppercase tracking-wider font-semibold hover:bg-black transition-colors">
                  Play Store
                </button>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
