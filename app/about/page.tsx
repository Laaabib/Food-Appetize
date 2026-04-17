'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-charcoal">
      <Header />
      <div className="pt-[140px] pb-24 px-6 lg:px-14 max-w-7xl mx-auto min-h-[70vh]">
        <div className="text-center mb-16">
          <p className="text-orange font-semibold uppercase tracking-wider mb-2 text-sm">Our Story</p>
          <h1 className="text-5xl font-serif font-medium text-warm-white mb-4">About FoodAppetize</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] w-full rounded-[40px] overflow-hidden glass p-2 border border-glass-border">
            <div className="relative h-full w-full rounded-[32px] overflow-hidden">
              <Image 
                src="https://picsum.photos/seed/kitchen/800/800" 
                alt="Our Cloud Kitchen" 
                fill 
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 glass p-6 rounded-[24px] border border-glass-border hidden md:block">
              <p className="font-serif italic text-xl text-warm-white mb-1">&quot;Perfection in every bite.&quot;</p>
              <p className="text-xs text-orange uppercase tracking-widest font-bold">Executive Chef</p>
            </div>
          </div>
          
          <div className="flex flex-col gap-6 text-warm-white/80">
            <h2 className="text-3xl font-serif text-warm-white">Elevating the Cloud Kitchen Experience</h2>
            <p>
              Founded with a passion for exceptional culinary experiences, FoodAppetize blends the speed of modern technology with the rich, authentic warmth of traditional cooking. We believe that ordering food shouldn&apos;t mean compromising on quality, luxury, or taste.
            </p>
            <p>
              Our premium cloud kitchen model means we focus entirely on the food. From authentic Dhaka-style Kacchi Biryani to gourmet Wagyu Burgers, every dish is crafted with the highest hygiene standards and the finest ingredients available.
            </p>
            <p>
              We don&apos;t just deliver meals; we deliver a premium dining experience straight to your doorstep in minutes, staying true to our promise: Fresh. Fast. Fantastic.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-6">
              <div className="border-l-2 border-orange pl-4 text-warm-white">
                <span className="block text-4xl font-serif mb-1">50+</span>
                <span className="text-sm uppercase tracking-wider text-warm-white/60">Gourmet Dishes</span>
              </div>
              <div className="border-l-2 border-orange pl-4 text-warm-white">
                <span className="block text-4xl font-serif mb-1">10k+</span>
                <span className="text-sm uppercase tracking-wider text-warm-white/60">Happy Customers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
