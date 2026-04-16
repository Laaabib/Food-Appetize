'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function OffersPage() {
  const [pizzaCoupon, setPizzaCoupon] = useState(false);
  const [appCoupon, setAppCoupon] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-charcoal">
      <Header />
      <div className="pt-[140px] pb-24 px-6 lg:px-14 max-w-7xl mx-auto min-h-[70vh]">
        <div className="text-center mb-16">
          <p className="text-orange font-semibold uppercase tracking-wider mb-2 text-sm">Special Deals</p>
          <h1 className="text-5xl font-serif font-medium text-warm-white mb-4">Current Offers</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass p-8 rounded-[32px] flex flex-col justify-center border border-orange/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[20vw] h-[20vw] bg-orange/10 rounded-full blur-[80px] pointer-events-none"></div>
            <h2 className="text-3xl font-serif text-warm-white mb-2 relative z-10">Buy 1 Get 1 Free</h2>
            <p className="text-warm-white/70 mb-6 relative z-10">On all regular pizzas every Tuesday. Use code <strong>TUESDAYPIZZA</strong> at checkout.</p>
            <button 
              onClick={() => {
                navigator.clipboard.writeText('TUESDAYPIZZA');
                setPizzaCoupon(true);
                setTimeout(() => setPizzaCoupon(false), 3000);
              }}
              className={`${pizzaCoupon ? 'bg-orange-light text-white' : 'bg-orange text-white hover:bg-orange-light'} px-6 py-3 rounded-xl font-semibold uppercase tracking-wide text-sm w-max transition-colors relative z-10`}
            >
              {pizzaCoupon ? 'Copied Code!' : 'Collect Coupon'}
            </button>
          </div>
          
          <div className="glass p-8 rounded-[32px] flex flex-col justify-center border border-green/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[20vw] h-[20vw] bg-green/10 rounded-full blur-[80px] pointer-events-none"></div>
            <h2 className="text-3xl font-serif text-warm-white mb-2 relative z-10">20% Off First App Order</h2>
            <p className="text-warm-white/70 mb-6 relative z-10">Download our mobile app and get a flat 20% discount on your first order with code <strong>FIRST20APP</strong>.</p>
            <button 
              onClick={() => {
                navigator.clipboard.writeText('FIRST20APP');
                setAppCoupon(true);
                setTimeout(() => setAppCoupon(false), 3000);
              }}
              className={`${appCoupon ? 'bg-green/80 text-white' : 'bg-green hover:bg-green/80 text-white'} px-6 py-3 rounded-xl font-semibold uppercase tracking-wide text-sm w-max transition-colors relative z-10`}
            >
               {appCoupon ? 'Copied Code!' : 'Collect Coupon'}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
