'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-charcoal">
      <Header />
      <div className="pt-[140px] pb-24 px-6 lg:px-14 max-w-3xl mx-auto min-h-[70vh]">
        <div className="text-center mb-16">
          <p className="text-green font-semibold uppercase tracking-wider mb-2 text-sm">Get in Touch</p>
          <h1 className="text-5xl font-serif font-medium text-warm-white mb-4">Contact Us</h1>
        </div>

        <form className="glass p-8 rounded-[32px] flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-warm-white tracking-wide">Full Name</label>
            <input type="text" className="bg-off-black border border-glass-border rounded-xl px-4 py-3 text-warm-white focus:outline-none focus:border-orange transition-colors" placeholder="John Doe" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-warm-white tracking-wide">Email Address</label>
            <input type="email" className="bg-off-black border border-glass-border rounded-xl px-4 py-3 text-warm-white focus:outline-none focus:border-orange transition-colors" placeholder="john@example.com" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-warm-white tracking-wide">Message</label>
            <textarea rows={5} className="bg-off-black border border-glass-border rounded-xl px-4 py-3 text-warm-white focus:outline-none focus:border-orange transition-colors resize-none" placeholder="How can we help you?"></textarea>
          </div>
          <button type="button" className="bg-orange hover:bg-orange-light text-white px-6 py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-colors mt-2">
            Send Message
          </button>
        </form>
      </div>
      <Footer />
    </main>
  );
}
