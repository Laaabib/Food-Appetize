'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

const categories = [
  { name: 'Burgers', type: 'International', img: 'burger', delay: 0 },
  { name: 'Pizza', type: 'International', img: 'pizza', delay: 0.1 },
  { name: 'Pasta', type: 'International', img: 'pasta', delay: 0.2 },
  { name: 'Kacchi Biryani', type: 'Bangladeshi', img: 'biryani', delay: 0.3 },
  { name: 'Beef Tehari', type: 'Bangladeshi', img: 'tehari', delay: 0.4 },
  { name: 'Fuchka', type: 'Bangladeshi', img: 'fuchka', delay: 0.5 },
  { name: 'Desserts', type: 'International', img: 'dessert', delay: 0.6 },
  { name: 'Coffee', type: 'International', img: 'coffee', delay: 0.7 },
];

export default function FeaturedCategories() {
  return (
    <section className="bg-off-black border-t border-glass-border py-8 lg:py-10" id="menu">
      <div className="max-w-7xl mx-auto px-6 lg:px-14">
        
        <div className="text-[12px] uppercase tracking-[2px] opacity-70 text-white mb-6">
          Featured Categories
        </div>

        <div className="flex gap-4 lg:gap-5 overflow-x-auto pb-4 scrollbar-hide snap-x">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: cat.delay, duration: 0.5 }}
              whileHover={{ y: -2 }}
              className="snap-start shrink-0 glass min-w-[140px] p-4 rounded-2xl flex flex-col items-center gap-3 cursor-pointer hover:bg-orange/10 hover:border-orange transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-white/5 flex flex-col items-center justify-center text-orange font-bold text-[18px]">
                {idx === 0 ? '🍔' : idx === 1 ? '🍕' : idx === 2 ? '🍝' : idx === 3 ? 'KB' : idx === 4 ? 'BT' : idx === 5 ? '🧆' : idx === 6 ? '🍰' : '☕'}
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-white/90 text-[13px]">{cat.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
