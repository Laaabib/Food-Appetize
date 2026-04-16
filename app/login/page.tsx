'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-charcoal">
      <Header />
      <div className="pt-[140px] pb-24 px-6 lg:px-14 flex items-center justify-center min-h-[70vh]">
        <div className="glass p-10 rounded-[32px] w-full max-w-md relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange/20 rounded-full blur-[60px] pointer-events-none"></div>
          
          <div className="text-center mb-10 relative z-10">
            <h1 className="text-4xl font-serif font-medium text-warm-white mb-2">Welcome Back</h1>
            <p className="text-warm-white/60 text-sm">Sign in to track your orders and more.</p>
          </div>

          <form className="flex flex-col gap-5 relative z-10">
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-wider font-semibold text-warm-white/80">Email</label>
              <input type="email" className="bg-off-black border border-glass-border rounded-xl px-4 py-3 text-warm-white focus:outline-none focus:border-orange transition-colors" placeholder="user@example.com" />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-wider font-semibold text-warm-white/80">Password</label>
              <input type="password" className="bg-off-black border border-glass-border rounded-xl px-4 py-3 text-warm-white focus:outline-none focus:border-orange transition-colors" placeholder="••••••••" />
            </div>

            <div className="flex justify-between items-center mb-2 mt-1 px-1">
              <label className="flex items-center gap-2 cursor-pointer text-sm text-warm-white/70">
                <input type="checkbox" className="accent-orange w-4 h-4" />
                Remember me
              </label>
              <a href="#" className="text-sm text-orange hover:text-orange-light transition-colors">Forgot password?</a>
            </div>

            <button type="button" className="bg-orange hover:bg-orange-light text-white px-6 py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-colors mt-2">
              Login
            </button>
            
            <p className="text-center text-sm text-warm-white/60 mt-4">
              Don&apos;t have an account? <Link href="/signup" className="text-orange hover:text-orange-light transition-colors font-medium">Sign up</Link>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
}
