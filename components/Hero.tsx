'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: 'Daily Deals',
    subtitle: 'Exclusive discounts on your everyday favorites.',
    img: 'https://picsum.photos/seed/burger1/1920/1080',
    cta: 'Order Now',
    color: 'from-black/80 via-black/50 to-transparent'
  },
  {
    id: 2,
    title: 'Food & Beverage',
    subtitle: 'Explore our wide range of authentic and fast-food cravings.',
    img: 'https://picsum.photos/seed/pizza1/1920/1080',
    cta: 'Explore Menu',
    color: 'from-charcoal/90 via-charcoal/50 to-transparent'
  },
  {
    id: 3,
    title: 'Current Offers',
    subtitle: 'Huge savings with our exclusive family packs and combos.',
    img: 'https://picsum.photos/seed/biryani1/1920/1080',
    cta: 'Claim Offers',
    color: 'from-orange/90 via-black/50 to-transparent'
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);

  return (
    <section className="relative w-full h-[50vh] xl:h-[550px] mt-[80px] overflow-hidden bg-charcoal">
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <Image 
            src={slides[current].img} 
            alt={slides[current].title}
            fill
            className="object-cover object-center"
            priority
            referrerPolicy="no-referrer"
          />
          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-r ${slides[current].color} z-10`} />
          <div className="absolute inset-0 bg-black/30 z-10" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-14 h-full flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={`text-${current}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-orange/20 text-orange border border-orange border-opacity-50 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
              FoodAppetize Specials
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-[1.1]">
              {slides[current].title}
            </h1>
            <p className="text-lg sm:text-xl text-white/80 font-light mb-10 leading-relaxed max-w-xl">
              {slides[current].subtitle}
            </p>
            <button className="bg-orange hover:bg-orange-light text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all shadow-[0_0_20px_rgba(230,95,43,0.4)] hover:shadow-[0_0_30px_rgba(230,95,43,0.6)]">
              {slides[current].cta}
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-10 right-6 lg:right-14 z-30 flex gap-4">
        <button 
          onClick={prevSlide}
          className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-orange transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-orange transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-6 lg:left-14 z-30 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1.5 transition-all duration-300 rounded-full ${current === idx ? 'w-8 bg-orange' : 'w-4 bg-white/30 hover:bg-white/50'}`}
          />
        ))}
      </div>
    </section>
  );
}
