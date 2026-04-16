'use client';

import { motion } from 'motion/react';
import { Smartphone, ChefHat, Bike } from 'lucide-react';

const steps = [
  {
    num: "1",
    title: "Choose your favorite meal",
    desc: "Browse our extensive menu of local and international cuisines.",
    icon: Smartphone
  },
  {
    num: "2",
    title: "FoodAppetize prepares it fresh",
    desc: "Our top chefs cook your meal with fresh halal ingredients.",
    icon: ChefHat
  },
  {
    num: "3",
    title: "Fast delivery to your location",
    desc: "Enjoy steaming hot food delivered straight to your door.",
    icon: Bike
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-off-black border-t border-glass-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-14">
        
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <p className="text-green font-semibold uppercase tracking-wider mb-2 text-sm">Simple Process</p>
          <h2 className="text-4xl md:text-5xl font-serif font-medium mb-4 text-warm-white">How It Works</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-[1px] border-t border-dashed border-white/20 -z-10"></div>

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                className="flex flex-col items-center text-center relative"
              >
                <div className="w-24 h-24 rounded-full glass flex items-center justify-center mb-8 relative border-[6px] border-off-black z-10">
                  <Icon className="w-10 h-10 text-orange" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-orange text-white font-serif font-bold text-lg flex items-center justify-center shadow-lg">
                    {step.num}
                  </div>
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3 text-warm-white">{step.title}</h3>
                <p className="text-warm-white/60 max-w-xs mx-auto leading-relaxed">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
