'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Menu, X, User } from 'lucide-react';
import { useCart } from '@/components/CartProvider';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'Offers', href: '/offers' },
    { name: 'About', href: '/#about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'h-[80px] bg-gradient-to-b from-off-black to-transparent backdrop-blur-md' : 'h-[80px] bg-gradient-to-b from-off-black to-transparent'}`}>
      <div className="max-w-7xl mx-auto h-full px-6 lg:px-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-50 uppercase tracking-widest">
          <span className="font-serif font-bold text-2xl tracking-[1px] text-warm-white">
            FOOD<span className="text-orange">APPETIZE</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`text-sm tracking-[1px] uppercase font-medium transition-colors ${link.name === 'Home' ? 'text-orange opacity-100' : 'text-warm-white opacity-80 hover:opacity-100 hover:text-orange'}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => setIsCartOpen(true)}
            className="glass px-4 py-2 rounded-lg flex items-center gap-2 text-xs uppercase tracking-[0.5px] hover:border-orange transition-colors cursor-pointer"
          >
            <span className="text-orange font-bold text-base">🛒</span> {cartCount} Items
          </button>
          <Link href="/login" className="bg-orange border-none text-white px-4 py-2 rounded-lg text-xs uppercase tracking-[0.5px] font-bold">
            Login
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4 z-50">
          <button 
            onClick={() => setIsCartOpen(true)}
            className="glass p-2 rounded-lg relative hover:border-orange transition-colors"
          >
            <ShoppingCart className="w-5 h-5 text-warm-white" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-orange text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-warm-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-off-black pt-24 px-6 flex flex-col z-40 border-b border-glass-border overflow-y-auto"
          >
            <nav className="flex flex-col gap-6 text-xl tracking-[1px] uppercase pb-10">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`border-b border-glass-border pb-4 ${link.name === 'Home' ? 'text-orange font-bold' : 'text-warm-white opacity-80'}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link href="/login" onClick={() => setMobileMenuOpen(false)} className="mt-8 flex items-center gap-4 text-orange font-sans font-medium text-base">
                <User className="w-5 h-5" />
                <span>Login / Signup to your account</span>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
