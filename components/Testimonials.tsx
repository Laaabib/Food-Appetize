'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Ayesha Rahman",
    review: "FoodAppetize serves the best kacchi biryani delivery in the city. Fresh and delicious every time. Highly recommended!",
    img: "woman1",
    rating: 5
  },
  {
    name: "Farhan Ahmed",
    review: "The packaging is truly premium and the food stays hot. Their beef tehari reminds me of authentic old Dhaka taste.",
    img: "man1",
    rating: 5
  },
  {
    name: "Sarah Choudhury",
    review: "Finally a food app that delivers exactly what it promises. The UI is sleek and delivery is always on time.",
    img: "woman2",
    rating: 4
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-charcoal overflow-hidden border-t border-glass-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-14">
        
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-green font-semibold uppercase tracking-wider mb-2 text-sm">Customer Stories</p>
          <h2 className="text-4xl md:text-5xl font-serif font-medium mb-4 text-warm-white">Loved by Foodies</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="glass p-8 rounded-[32px] relative group hover:border-orange transition-colors duration-300"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-orange/20 group-hover:text-orange/40 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-orange text-orange" />
                ))}
              </div>
              
              <p className="text-warm-white/80 mb-8 leading-relaxed italic text-[15px] line-clamp-4 relative z-10">
                &quot;{t.review}&quot;
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full overflow-hidden relative border border-white/20">
                  <Image 
                    src={`https://picsum.photos/seed/${t.img}/100/100`} 
                    alt={t.name} 
                    fill 
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-warm-white text-[15px]">{t.name}</h4>
                  <p className="text-[10px] text-warm-white/50 uppercase tracking-widest mt-0.5">Verified Buyer</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
