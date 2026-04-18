'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-off-black text-warm-white pt-20 pb-10 border-t border-glass-border" id="contact">
      <div className="max-w-7xl mx-auto px-6 lg:px-14">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div>
            <Link href="/" className="inline-block mb-6 uppercase tracking-widest">
              <span className="font-serif font-bold text-2xl tracking-[1px] text-warm-white">
                FOOD<span className="text-orange">APPETIZE</span>
              </span>
            </Link>
            <p className="text-warm-white/60 text-[14px] leading-relaxed mb-6 font-light border-l-2 border-orange pl-3">
              We bring the best of international flavors and authentic Bangladeshi cuisine together. Premium quality, delivered fast to your door.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com/FoodAppetize" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-warm-white/80 hover:bg-orange hover:text-white transition-colors hover:border-orange">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://tiktok.com/@foodappetize" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-warm-white/80 hover:bg-orange hover:text-white transition-colors hover:border-orange cursor-pointer">
                {/* Fallback TikTok SVG since it's not in standard lucide sometimes, or we can use an internal icon, but using custom SVG for perfect match */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
              <a href="https://instagram.com/food.appetize" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-warm-white/80 hover:bg-orange hover:text-white transition-colors hover:border-orange">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://youtube.com/@foodappetize" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-warm-white/80 hover:bg-orange hover:text-white transition-colors hover:border-orange">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Col */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-warm-white/60 hover:text-orange transition-colors text-[14px]">Home</Link></li>
              <li><Link href="/menu" className="text-warm-white/60 hover:text-orange transition-colors text-[14px]">Our Menu</Link></li>
              <li><Link href="/offers" className="text-warm-white/60 hover:text-orange transition-colors text-[14px]">Special Offers</Link></li>
              <li><Link href="/contact" className="text-warm-white/60 hover:text-orange transition-colors text-[14px]">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6 tracking-wide">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-orange shrink-0 mt-1" />
                <span className="text-warm-white/60 text-[14px] leading-relaxed">
                  123 Kitchen Avenue, Gulshan, <br />Dhaka 1212, Bangladesh
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-orange shrink-0" />
                <span className="text-warm-white/60 text-[14px]">
                  +880 1234 567890
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-orange shrink-0" />
                <span className="text-warm-white/60 text-[14px]">
                  foodappetize@gmail.com
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter Col */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6 tracking-wide">Newsletter</h4>
            <p className="text-warm-white/60 text-[14px] mb-4 leading-relaxed tracking-wide">
              Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
            </p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-charcoal border border-glass-border rounded-lg px-4 py-3 text-[14px] focus:outline-none focus:border-orange text-white placeholder:text-white/40"
              />
              <button 
                type="button" 
                className="bg-orange hover:bg-orange-light text-white font-semibold py-3 px-4 rounded-lg transition-colors text-sm uppercase tracking-wide cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-glass-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-warm-white/40 text-[12px] tracking-widest uppercase">
            © {new Date().getFullYear()} FoodAppetize. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-warm-white/40 text-[12px] tracking-widest uppercase hover:text-white transition-colors cursor-pointer">Terms</span>
            <span className="text-warm-white/40 text-[12px] tracking-widest uppercase hover:text-white transition-colors cursor-pointer">Privacy</span>
            <span className="text-warm-white/40 text-[12px] tracking-widest uppercase hover:text-white transition-colors cursor-pointer">Cookies</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
