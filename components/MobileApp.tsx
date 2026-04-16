'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

export default function MobileApp() {
  return (
    <section className="py-24 bg-off-black overflow-hidden border-t border-glass-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-14">
        <div className="glass rounded-[40px] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-orange/5 rounded-full blur-[100px] pointer-events-none z-0"></div>
          <div className="grid lg:grid-cols-2 items-center gap-16 px-8 py-16 lg:p-20 relative z-10">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6 text-warm-white leading-tight">
              Deliciousness in your pocket.
            </h2>
            <p className="text-[16px] text-warm-white/70 mb-10 max-w-md leading-relaxed font-light">
              Download the FoodAppetize app and enjoy your favorite meals anytime. Smart live tracking, exclusive offers, and a premium experience.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-3 bg-charcoal border border-glass-border text-white px-6 py-3 rounded-xl hover:border-orange transition-colors">
                <div className="text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"/><path d="M10 2c1 .5 2 2 2 5h-2c0-3-1-4-2-4Z"/></svg>
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-wider text-warm-white/60">Download on the</p>
                  <p className="text-base font-semibold leading-tight text-white">App Store</p>
                </div>
              </button>
              
              <button className="flex items-center gap-3 bg-charcoal border border-glass-border text-white px-6 py-3 rounded-xl hover:border-orange transition-colors">
                <div className="text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"><path d="M5 4L19 12L5 20L5 4Z"/></svg>
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-wider text-warm-white/60">Get it on</p>
                  <p className="text-base font-semibold leading-tight text-white">Google Play</p>
                </div>
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:absolute lg:-bottom-12 lg:right-[5%] w-full max-w-[400px] mx-auto lg:mx-0 h-[500px] lg:h-[700px] z-10"
          >
            <Image 
              src="https://picsum.photos/seed/phone_mockup/600/1000" 
              alt="FoodAppetize Mobile App" 
              fill 
              className="object-contain drop-shadow-2xl opacity-90"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
        </div>
        </div>
      </div>
    </section>
  );
}
