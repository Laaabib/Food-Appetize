'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

const categories = [
  { name: 'Burgers', type: 'International', icon: '🍔', delay: 0 },
  { name: 'Pizza', type: 'International', icon: '🍕', delay: 0.05 },
  { name: 'Pasta', type: 'International', icon: '🍝', delay: 0.1 },
  { name: 'Kacchi Biryani', type: 'Bangladeshi', icon: '🍛', delay: 0.15 },
  { name: 'Beef Tehari', type: 'Bangladeshi', icon: '🥘', delay: 0.2 },
  { name: 'Fuchka', type: 'Bangladeshi', icon: '🧆', delay: 0.25 },
  { name: 'Desserts', type: 'International', icon: '🍰', delay: 0.3 },
  { name: 'Coffee', type: 'International', icon: '☕', delay: 0.35 },
  { name: 'Sandwich', type: 'International', icon: '🥪', delay: 0.4 },
  { name: 'Ice Cream', type: 'International', icon: '🍦', delay: 0.45 },
  { name: 'Sushi', type: 'International', icon: '🍣', delay: 0.5 },
  { name: 'Noodles', type: 'International', icon: '🍜', delay: 0.55 },
  { name: 'Breakfast', type: 'International', icon: '🍳', delay: 0.6 },
  { name: 'Fries', type: 'International', icon: '🍟', delay: 0.65 },
];

export default function FeaturedCategories() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDown(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };
  const handleMouseLeave = () => setIsDown(false);
  const handleMouseUp = () => setIsDown(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; 
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="bg-off-black border-t border-glass-border py-5 lg:py-6" id="menu">
      <div className="max-w-7xl mx-auto px-6 lg:px-14">
        
        <div className="text-[10px] uppercase tracking-[2px] opacity-70 text-white mb-3">
          Featured Categories
        </div>

        <div 
          ref={scrollRef}
          className={`flex gap-3 lg:gap-4 overflow-x-auto pb-6 pt-4 -mt-4 px-2 -ml-2 scrollbar-hide snap-x ${isDown ? 'cursor-grabbing select-none snap-none' : 'cursor-grab'}`}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                type: "spring",
                stiffness: 200,
                damping: 20,
                delay: cat.delay 
              }}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="snap-start shrink-0 glass min-w-[105px] max-w-[120px] p-4 rounded-xl flex flex-col items-center gap-2 cursor-pointer transition-colors duration-300 hover:bg-orange group"
            >
              <div className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-white/20 flex flex-col items-center justify-center text-orange group-hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all duration-300 text-[20px] group-hover:scale-110">
                {cat.icon}
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-white/90 group-hover:text-white text-[11px] transition-colors duration-300">{cat.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
