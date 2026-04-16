'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { Leaf, Shield, Clock, MapPin, DollarSign, Headset } from 'lucide-react';

const benefits = [
  { title: "Fresh Halal Ingredients", icon: Leaf },
  { title: "Hygienic Cloud Kitchen", icon: Shield },
  { title: "Fast Delivery", icon: Clock },
  { title: "Local Favorite Foods", icon: MapPin },
  { title: "Affordable Pricing", icon: DollarSign },
  { title: "Premium Customer Service", icon: Headset },
];

export default function WhyChoose() {
  return (
    <section id="about" className="py-24 bg-charcoal text-white overflow-hidden relative border-t border-glass-border">
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-orange/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-14 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-orange-light font-semibold uppercase tracking-wider mb-2 text-sm">Our Promise</p>
            <h2 className="text-4xl md:text-5xl font-serif font-medium mb-8 leading-tight">
              Why Choose FoodAppetize?
            </h2>
            <p className="text-gray-400 mb-10 text-lg leading-relaxed max-w-lg">
              We combine the speed of technology with the warmth of authentic cooking to deliver a premium dining experience right to your home.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {benefits.map((bg, idx) => {
                const Icon = bg.icon;
                return (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-orange-light" />
                    </div>
                    <span className="font-medium">{bg.title}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[600px] w-full rounded-[40px] overflow-hidden"
          >
            <Image 
              src="https://images.unsplash.com/photo-1556910103-1c02745a872f?auto=format&fit=crop&w=800&q=80" 
              alt="Cloud Kitchen" 
              fill 
              className="object-cover opacity-80"
              referrerPolicy="no-referrer"
            />
            {/* Elegant overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 glass-dark p-6 rounded-2xl">
              <p className="font-serif italic text-xl text-white mb-2">&quot;Quality is our recipe&quot;</p>
              <p className="text-sm text-gray-300 uppercase tracking-widest font-semibold">— Head Chef</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
