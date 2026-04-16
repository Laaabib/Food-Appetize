'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FullMenu from '@/components/FullMenu';

export default function MenuPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-charcoal">
      <Header />
      <div className="pt-[120px] pb-12 text-center">
        <h1 className="text-5xl font-serif font-medium text-warm-white mb-4">Our Full Menu</h1>
        <p className="text-warm-white/70 max-w-xl mx-auto px-6">Explore our wide variety of dishes prepared fresh every day.</p>
      </div>
      <FullMenu />
      <Footer />
    </main>
  );
}
