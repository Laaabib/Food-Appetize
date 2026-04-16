'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '@/components/CartProvider';
import { motion } from 'motion/react';
import { CheckCircle2, ChevronLeft, CreditCard, Smartphone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const paymentMethods = [
  { id: 'bkash', name: 'bKash', icon: Smartphone, color: 'bg-pink-600/10 text-pink-500 border-pink-500/30' },
  { id: 'nagad', name: 'Nagad', icon: Smartphone, color: 'bg-orange-600/10 text-orange-500 border-orange-500/30' },
  { id: 'rocket', name: 'Rocket', icon: Smartphone, color: 'bg-purple-600/10 text-purple-500 border-purple-500/30' },
  { id: 'aamarpay', name: 'aamarPay', icon: CreditCard, color: 'bg-teal-600/10 text-teal-500 border-teal-500/30' },
  { id: 'card', name: 'Credit / Debit Card', icon: CreditCard, color: 'bg-blue-600/10 text-blue-400 border-blue-500/30' },
];

export default function CheckoutPage() {
  const { items, cartTotal, clearCart } = useCart();
  const [selectedMethod, setSelectedMethod] = useState('bkash');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const deliveryFee = 60;
  const totalAmount = cartTotal + deliveryFee;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;
    
    setIsProcessing(true);
    // Simulate backend processing delay
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      clearCart();
    }, 2000);
  };

  if (isSuccess) {
    return (
      <main className="min-h-screen overflow-x-hidden bg-charcoal flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center pt-[120px] pb-24 px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass p-12 rounded-[32px] max-w-lg w-full text-center border border-green/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-full h-full bg-green/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="relative z-10 flex flex-col items-center">
              <CheckCircle2 className="w-24 h-24 text-green mb-6" />
              <h1 className="text-4xl font-serif font-medium text-warm-white mb-4">Order Confirmed!</h1>
              <p className="text-warm-white/70 mb-8 max-w-sm">
                Your order has been placed successfully via {paymentMethods.find(p => p.id === selectedMethod)?.name}. Kitchen is preparing your food!
              </p>
              <Link href="/" className="bg-orange hover:bg-orange-light text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-colors cursor-pointer w-full inline-block">
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-charcoal">
      <Header />
      <div className="pt-[140px] pb-24 px-6 lg:px-14 max-w-7xl mx-auto min-h-[70vh]">
        <div className="mb-10">
          <Link href="/menu" className="inline-flex items-center gap-2 text-warm-white/60 hover:text-orange transition-colors text-sm font-semibold uppercase tracking-wider mb-6">
            <ChevronLeft className="w-4 h-4" /> Back to Menu
          </Link>
          <h1 className="text-4xl md:text-5xl font-serif font-medium text-warm-white">Checkout</h1>
        </div>

        {items.length === 0 ? (
          <div className="glass p-12 rounded-[32px] text-center">
            <h2 className="text-2xl font-serif text-warm-white mb-4">Your cart is empty</h2>
            <p className="text-warm-white/60 mb-8">Add some delicious meals to proceed with checkout.</p>
            <Link href="/menu" className="bg-orange text-white px-8 py-3 rounded-xl font-bold uppercase tracking-widest text-sm transition-colors">
              Browse Menu
            </Link>
          </div>
        ) : (
          <form onSubmit={handleCheckout} className="grid lg:grid-cols-3 gap-10">
            {/* Left Column: Form & Payment */}
            <div className="lg:col-span-2 space-y-8">
              {/* Delivery Details */}
              <div className="glass p-8 rounded-[32px]">
                <h2 className="text-2xl font-serif text-warm-white mb-6">Delivery Details</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-wider font-semibold text-warm-white/80">Full Name</label>
                    <input required type="text" className="bg-off-black border border-glass-border rounded-xl px-4 py-3 text-warm-white focus:outline-none focus:border-orange transition-colors" placeholder="e.g. Asif Mahmud" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-wider font-semibold text-warm-white/80">Phone Number</label>
                    <input required type="tel" className="bg-off-black border border-glass-border rounded-xl px-4 py-3 text-warm-white focus:outline-none focus:border-orange transition-colors" placeholder="+880 17XXXXXXXX" />
                  </div>
                  <div className="md:col-span-2 flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-wider font-semibold text-warm-white/80">Full Address</label>
                    <textarea required rows={3} className="bg-off-black border border-glass-border rounded-xl px-4 py-3 text-warm-white focus:outline-none focus:border-orange transition-colors resize-none" placeholder="House/Flat No, Road, Area (e.g. Gulshan, Dhaka)"></textarea>
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="glass p-8 rounded-[32px]">
                <h2 className="text-2xl font-serif text-warm-white mb-6">Payment Method (Bangladesh)</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {paymentMethods.map((method) => {
                    const MethodIcon = method.icon;
                    return (
                      <button
                        key={method.id}
                        type="button"
                        onClick={() => setSelectedMethod(method.id)}
                        className={`flex items-center gap-4 p-4 rounded-xl border text-left transition-all ${
                          selectedMethod === method.id 
                            ? 'border-orange bg-orange/10' 
                            : 'border-glass-border bg-off-black hover:border-warm-white/30'
                        }`}
                      >
                        <div className={`p-3 rounded-lg border ${method.color}`}>
                          <MethodIcon className="w-6 h-6" />
                        </div>
                        <span className="font-semibold text-warm-white opacity-90">{method.name}</span>
                        {selectedMethod === method.id && (
                          <CheckCircle2 className="w-5 h-5 text-orange ml-auto" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: Order Summary */}
            <div className="relative">
              <div className="glass p-8 rounded-[32px] sticky top-[100px]">
                <h2 className="text-2xl font-serif text-warm-white mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6 max-h-[30vh] overflow-y-auto pr-2 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-glass-border [&::-webkit-scrollbar-track]:bg-transparent">
                  {items.map(item => (
                    <div key={item.id} className="flex justify-between items-center gap-4 text-sm">
                      <div className="flex gap-3 items-center">
                        <span className="text-warm-white/60 font-medium">{item.quantity}x</span>
                        <span className="text-warm-white truncate max-w-[150px]">{item.name}</span>
                      </div>
                      <span className="text-warm-white font-medium shrink-0">৳ {item.price * (item.quantity || 1)}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-glass-border pt-4 mb-6 space-y-3">
                  <div className="flex justify-between text-warm-white/70 text-sm">
                    <span>Subtotal</span>
                    <span>৳ {cartTotal}</span>
                  </div>
                  <div className="flex justify-between text-warm-white/70 text-sm">
                    <span>Delivery Fee</span>
                    <span>৳ {deliveryFee}</span>
                  </div>
                </div>

                <div className="flex justify-between text-warm-white text-xl font-bold mb-8">
                  <span>Total</span>
                  <span className="text-orange">৳ {totalAmount}</span>
                </div>

                <button 
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-orange hover:bg-orange-light disabled:bg-orange/50 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-colors flex justify-center items-center gap-2"
                >
                  {isProcessing ? (
                    <span className="animate-pulse">Processing Payment...</span>
                  ) : (
                    `Pay ৳ ${totalAmount}`
                  )}
                </button>
                <p className="text-center text-xs text-warm-white/40 mt-4">
                  Secure checkout processed by FoodAppetize Tech
                </p>
              </div>
            </div>
          </form>
        )}
      </div>
      <Footer />
    </main>
  );
}
