'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function SignupPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-charcoal">
      <Header />
      <div className="pt-[140px] pb-24 px-6 lg:px-14 flex items-center justify-center min-h-[70vh]">
        <div className="glass p-10 rounded-[32px] w-full max-w-md relative overflow-hidden">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange/20 rounded-full blur-[60px] pointer-events-none"></div>
          
          <div className="text-center mb-10 relative z-10">
            <h1 className="text-4xl font-serif font-medium text-warm-white mb-2">Create Account</h1>
            <p className="text-warm-white/60 text-sm">Join us to start ordering premium meals.</p>
          </div>

          <form className="flex flex-col gap-5 relative z-10">
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-wider font-semibold text-warm-white/80">Full Name</label>
              <input type="text" className="bg-off-black border border-glass-border rounded-xl px-4 py-3 text-warm-white focus:outline-none focus:border-orange transition-colors" placeholder="John Doe" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-wider font-semibold text-warm-white/80">Email</label>
              <input type="email" className="bg-off-black border border-glass-border rounded-xl px-4 py-3 text-warm-white focus:outline-none focus:border-orange transition-colors" placeholder="user@example.com" />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-wider font-semibold text-warm-white/80">Password</label>
              <input type="password" className="bg-off-black border border-glass-border rounded-xl px-4 py-3 text-warm-white focus:outline-none focus:border-orange transition-colors" placeholder="••••••••" />
            </div>

            <button type="button" className="bg-orange hover:bg-orange-light text-white px-6 py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-colors mt-4">
              Sign Up
            </button>
            
            <p className="text-center text-sm text-warm-white/60 mt-4">
              Already have an account? <Link href="/login" className="text-orange hover:text-orange-light transition-colors font-medium">Log in</Link>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
}
