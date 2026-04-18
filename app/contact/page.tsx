'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-charcoal">
      <Header />
      <div className="pt-[140px] pb-24 px-6 lg:px-14 max-w-7xl mx-auto min-h-[70vh]">
        <div className="text-center mb-16">
          <p className="text-orange font-semibold uppercase tracking-wider mb-2 text-sm">Reach Out</p>
          <h1 className="text-5xl font-serif font-medium text-warm-white mb-4">Contact Us</h1>
          <p className="text-warm-white/60 max-w-xl mx-auto">Have a question about an order, our menu, or want to partner with us? We&apos;d love to hear from you.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="flex flex-col justify-center space-y-8 glass p-10 rounded-[32px] border border-glass-border">
            <h2 className="text-3xl font-serif text-warm-white mb-4">Get in Touch</h2>
            
            <div className="flex items-start gap-4">
              <div className="bg-orange/10 p-3 rounded-xl border border-orange/20 shrink-0">
                <MapPin className="text-orange w-6 h-6" />
              </div>
              <div>
                <h3 className="text-warm-white font-medium text-lg mb-1">Headquarters</h3>
                <p className="text-warm-white/60">House 12, Road 5, Block C<br />Gulshan-1, Dhaka 1212</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-orange/10 p-3 rounded-xl border border-orange/20 shrink-0">
                <Phone className="text-orange w-6 h-6" />
              </div>
              <div>
                <h3 className="text-warm-white font-medium text-lg mb-1">Phone Number</h3>
                <p className="text-warm-white/60">+880 1711-000000<br />+880 1811-000000</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-orange/10 p-3 rounded-xl border border-orange/20 shrink-0">
                <Mail className="text-orange w-6 h-6" />
              </div>
              <div>
                <h3 className="text-warm-white font-medium text-lg mb-1">Email Address</h3>
                <p className="text-warm-white/60">foodappetize@gmail.com<br />careers@foodappetize.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass p-10 rounded-[32px] border border-glass-border relative overflow-hidden">
             <div className="absolute top-0 right-0 w-[20vw] h-[20vw] bg-orange/10 rounded-full blur-[80px] pointer-events-none"></div>
             
             {success ? (
               <div className="flex flex-col items-center justify-center h-full text-center py-10 relative z-10">
                 <div className="w-16 h-16 bg-green/20 rounded-full flex items-center justify-center mb-4">
                   <Send className="w-8 h-8 text-green" />
                 </div>
                 <h3 className="text-2xl font-serif text-warm-white mb-2">Message Sent!</h3>
                 <p className="text-warm-white/60">Thank you for reaching out. Our team will get back to you shortly.</p>
               </div>
             ) : (
               <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-wider font-semibold text-warm-white/80">Your Name</label>
                  <input required type="text" className="bg-off-black border border-glass-border rounded-xl px-4 py-3 text-warm-white focus:outline-none focus:border-orange transition-colors" placeholder="John Doe" />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-wider font-semibold text-warm-white/80">Email Address</label>
                  <input required type="email" className="bg-off-black border border-glass-border rounded-xl px-4 py-3 text-warm-white focus:outline-none focus:border-orange transition-colors" placeholder="user@example.com" />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-wider font-semibold text-warm-white/80">Message</label>
                  <textarea required rows={4} className="bg-off-black border border-glass-border rounded-xl px-4 py-3 text-warm-white focus:outline-none focus:border-orange transition-colors resize-none" placeholder="How can we help you?"></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-orange hover:bg-orange-light disabled:bg-orange/50 text-white px-6 py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-colors mt-2 flex justify-center items-center gap-2"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
             )}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
