'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Menu, X, User, Search, ChevronDown, Heart } from 'lucide-react';
import { useCart } from '@/components/CartProvider';
import { useWishlist } from '@/components/WishlistProvider';
import SearchOverlay from '@/components/SearchOverlay';

const navLinks = [
  { name: 'Home', href: '/' },
  { 
    name: 'Menu', 
    href: '/menu',
    subitems: [
      { name: 'Desi Classics', href: '/menu/desi-classics' },
      { 
        name: 'Fast Food', 
        href: '/menu/fast-food',
        subsubitems: [
          { name: 'Burgers', href: '/menu/fast-food#burgers' },
          { name: 'Pizzas', href: '/menu/fast-food#pizzas' }
        ]
      },
      { name: 'Snacks & Sides', href: '/menu/snacks-sides' },
      { 
        name: 'Beverages', 
        href: '/menu/beverages',
        subsubitems: [
          { name: 'Cold Drinks', href: '/menu/beverages#cold' },
          { name: 'Hot Coffee', href: '/menu/beverages#hot' }
        ]
      },
      { name: 'Desserts', href: '/menu/desserts' }
    ]
  },
  { 
    name: 'FA Mart', 
    href: '#',
    subitems: [
      { 
        name: 'Groceries', 
        href: '/groceries',
        subsubitems: [
          { name: 'Baby Food', href: '/groceries#baby-food' },
          { name: 'Raw Items', href: '/groceries#raw-items' },
          { name: 'Bangladeshi Masalas', href: '/groceries#masalas' }
        ]
      },
      { 
        name: 'Kitchen & Appliance', 
        href: '/kitchen-appliance',
        subsubitems: [
          { name: 'Small Appliances', href: '/kitchen-appliance#small' },
          { name: 'Kitchen Utensils', href: '/kitchen-appliance#utensils' },
          { name: 'Smart Gadgets', href: '/kitchen-appliance#gadgets' }
        ]
      }
    ]
  },
  { 
    name: 'Offers', 
    href: '/offers',
    subitems: [
      { name: 'Bank Deals', href: '/offers#bank' },
      { name: 'BOGO', href: '/offers#bogo' },
      { name: 'Combos', href: '/offers#combos' }
    ]
  },
  { 
    name: 'Contact', 
    href: '/contact',
    subitems: [
      { name: 'Support', href: '/contact#support' },
      { name: 'Locations', href: '/contact#locations' }
    ]
  },
  { 
    name: 'Shop Tools', 
    href: '#',
    subitems: [
      { name: 'My Cart', href: '/checkout' },
      { name: 'Checkout', href: '/checkout' },
      { name: 'My Profile', href: '/login' },
      { name: 'Order History', href: '/login' }
    ]
  },
];

function MobileNavItem({ link, pathname, setMobileMenuOpen, setSearchOpen }: { link: any, pathname: string, setMobileMenuOpen: any, setSearchOpen?: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const isActive = pathname === link.href;

  const renderName = (name: string) => {
    if (name === 'FA Mart') {
      return <><span className="text-white">F</span><span className="text-orange">A</span> Mart</>;
    }
    return name;
  };

  if (!link.subitems) {
    return (
      <Link 
        href={link.href}
        onClick={() => setMobileMenuOpen(false)}
        className={`border-b border-glass-border pb-4 transition-colors ${isActive ? 'text-orange font-bold' : 'text-warm-white opacity-80 hover:text-orange'}`}
      >
        {renderName(link.name)}
      </Link>
    );
  }

  return (
    <div className="border-b border-glass-border pb-4 flex flex-col">
      <div className={`flex justify-between items-center ${link.name === 'FA Mart' ? 'bg-orange/10 px-3 py-2 rounded-xl border border-orange/30' : ''}`}>
        <Link 
          href={link.href}
          onClick={() => setMobileMenuOpen(false)}
          className={`transition-colors ${isActive ? 'text-orange font-bold' : 'text-warm-white opacity-80 hover:text-orange'} ${link.name === 'FA Mart' ? 'opacity-100' : ''}`}
        >
          {renderName(link.name)}
        </Link>
        <button onClick={() => setIsOpen(!isOpen)} className="text-warm-white/50 hover:text-orange p-2 -mr-2">
          <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="flex flex-col gap-4 overflow-hidden"
          >
            <div className="pt-5 flex flex-col gap-4 pl-4 border-l-2 border-glass-border/50 ml-1">
              {link.name === 'FA Mart' && setSearchOpen && (
                <div className="pr-4 mb-2">
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-warm-white/40" />
                    <input 
                      type="text" 
                      placeholder="Search FA Mart..." 
                      className="w-full bg-[#1a1a1a] border border-glass-border rounded-lg pl-9 pr-3 py-2.5 text-sm text-warm-white focus:outline-none focus:border-orange transition-colors placeholder:text-warm-white/40"
                      onClick={() => {
                        setSearchOpen(true);
                        setMobileMenuOpen(false);
                      }}
                    />
                  </div>
                </div>
              )}
              {link.subitems.map((sub: any, idx: number) => (
                <div key={idx} className="flex flex-col">
                  {sub.subsubitems ? (
                    <div className="flex flex-col">
                      {/* Sub-item with its own dropdown toggle */}
                      <div className="flex justify-between items-center pr-4">
                        <Link 
                          href={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-[14px] uppercase tracking-[1px] text-warm-white/60 hover:text-orange transition-colors flex-1"
                        >
                          {sub.name}
                        </Link>
                      </div>
                      <div className="pl-4 mt-3 flex flex-col gap-3 border-l-2 border-glass-border/30 ml-1">
                        {sub.subsubitems.map((subsub: any, subidx: number) => (
                          <Link 
                            key={subidx} 
                            href={subsub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-[12px] uppercase tracking-[1px] text-warm-white/40 hover:text-orange transition-colors"
                          >
                            - {subsub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link 
                      href={sub.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-[14px] uppercase tracking-[1px] text-warm-white/60 hover:text-orange transition-colors"
                    >
                      {sub.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

import { getSupabase } from '@/lib/supabase';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const { wishlistCount, setIsWishlistOpen } = useWishlist();
  const pathname = usePathname();

  useEffect(() => {
    // Check local storage placeholder first
    if (typeof window !== 'undefined') {
      const logged = localStorage.getItem('isLoggedIn');
      setIsLoggedIn(logged === 'true');
    }

    // Connect to Supabase Auth if the keys are available
    const supabase = getSupabase();
    if (supabase) {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setIsLoggedIn(!!session);
      });

      const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
        setIsLoggedIn(!!session);
      });

      // Cleanup
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
        subscription.unsubscribe();
      };
    } else {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'h-[80px] bg-gradient-to-b from-off-black to-transparent backdrop-blur-md' : 'h-[80px] bg-gradient-to-b from-off-black to-transparent'}`}>
      <div className="max-w-[1400px] mx-auto h-full px-6 lg:px-10 flex items-center justify-between gap-4 xl:gap-8">
        {/* Logo */}
        <div className="flex flex-1 justify-start z-50 min-w-max">
          <Link href="/" className="flex items-center gap-2 uppercase tracking-widest shrink-0">
            <span className="font-serif font-bold text-xl md:text-2xl tracking-[1px] text-warm-white whitespace-nowrap">
              FOOD<span className="text-orange">APPETIZE</span>
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex flex-none justify-center space-x-3 xl:space-x-7 items-center h-full">
          {navLinks.filter(link => link.name !== 'Shop Tools' || isLoggedIn).map((link) => {
            const isActive = pathname === link.href;
            return (
              <div key={link.name} className="relative group h-full flex items-center">
                <Link 
                  href={link.href === '#' ? '/' : link.href}
                  className={`flex items-center gap-1 text-[10px] xl:text-xs tracking-[1px] uppercase font-bold transition-colors whitespace-nowrap ${isActive ? 'text-orange opacity-100' : 'text-warm-white opacity-80 hover:opacity-100 hover:text-orange'} ${link.name === 'FA Mart' ? 'bg-orange/20 px-3 py-1.5 rounded-full border border-orange/40 shadow-[0_0_15px_rgba(230,95,43,0.2)]' : ''}`}
                >
                  {link.name === 'FA Mart' ? <><span className="text-white transition-colors duration-300">F</span><span className="text-orange">A</span> Mart</> : link.name}
                  {link.subitems && <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:text-orange transition-transform duration-300 group-hover:-rotate-180" />}
                </Link>
                
                {link.subitems && (
                  <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-48 bg-[#151515] border border-glass-border rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-2xl flex flex-col py-3 z-50">
                    {/* Invisible hover bridge to prevent menu from closing when mouse moves down */}
                    <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent"></div>
                    <div className="absolute -top-[9px] left-1/2 -translate-x-1/2 border-x-8 border-b-8 border-x-transparent border-b-glass-border"></div>
                    <div className="absolute -top-[8px] left-1/2 -translate-x-1/2 border-x-8 border-b-8 border-x-transparent border-b-[#151515]"></div>
                    
                    {link.name === 'FA Mart' && (
                      <div className="px-3 pb-2 mb-1 border-b border-glass-border">
                        <div className="relative">
                          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-warm-white/40" />
                          <input 
                            type="text" 
                            placeholder="Search FA Mart..." 
                            className="w-full bg-[#1a1a1a] border border-glass-border rounded-lg pl-8 pr-3 py-1.5 text-[11px] text-warm-white focus:outline-none focus:border-orange transition-colors placeholder:text-warm-white/40"
                            onClick={() => setSearchOpen(true)}
                          />
                        </div>
                      </div>
                    )}

                    {link.subitems.map((sub, idx) => (
                      <div key={idx} className="relative group/sub">
                        <Link 
                          href={sub.href} 
                          className="px-5 py-2.5 text-[11px] xl:text-xs tracking-[1px] uppercase font-bold text-warm-white/70 hover:text-orange hover:bg-white/5 transition-colors flex items-center justify-between"
                        >
                          {sub.name}
                          {(sub as any).subsubitems && <ChevronDown className="w-3 h-3 opacity-70 group-hover/sub:-rotate-90 transition-transform duration-300" />}
                        </Link>
                        
                        {/* 3rd Level Sub-menu */}
                        {(sub as any).subsubitems && (
                          <div className="absolute top-0 left-[100%] w-48 bg-[#151515] border border-glass-border rounded-xl opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 shadow-2xl flex flex-col py-3 z-50 ml-1">
                            {/* Invisible bridge for 3rd level */}
                            <div className="absolute top-0 -left-6 bottom-0 w-6 bg-transparent"></div>
                            {(sub as any).subsubitems.map((subsub: any, subidx: number) => (
                              <Link 
                                key={subidx} 
                                href={subsub.href} 
                                className="px-5 py-2.5 text-[11px] xl:text-xs tracking-[1px] uppercase font-bold text-warm-white/70 hover:text-orange hover:bg-white/5 transition-colors"
                              >
                                {subsub.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </nav>

        {/* Actions Desktop */}
        <div className="hidden lg:flex flex-1 justify-end items-center gap-3 xl:gap-6 min-w-max">
          <button 
            onClick={() => setSearchOpen(true)}
            className="text-warm-white hover:text-orange transition-colors"
          >
            <Search className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setIsWishlistOpen(true)}
            className="text-warm-white hover:text-red-400 transition-colors relative"
          >
            <Heart className="w-5 h-5" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </button>
          <button 
            onClick={() => setIsCartOpen(true)}
            className="glass px-3 py-2 rounded-lg flex items-center gap-2 text-[10px] xl:text-xs uppercase tracking-[0.5px] hover:border-orange transition-colors cursor-pointer whitespace-nowrap"
          >
            <span className="text-orange font-bold text-sm xl:text-base">🛒</span> {cartCount} Items
          </button>
          {isLoggedIn ? (
            <button 
              onClick={async () => {
                const supabase = getSupabase();
                if (supabase) await supabase.auth.signOut();
                localStorage.removeItem('isLoggedIn');
                window.location.reload();
              }}
              className="bg-white/10 hover:bg-white/20 border-none text-white px-3 py-2 rounded-lg text-[10px] xl:text-xs uppercase tracking-[0.5px] font-bold block shrink-0 transition-colors"
            >
              Logout
            </button>
          ) : (
            <Link href="/login" className="bg-orange border-none text-white px-3 py-2 rounded-lg text-[10px] xl:text-xs uppercase tracking-[0.5px] font-bold block shrink-0">
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex flex-1 justify-end items-center gap-4 z-50">
          <button 
             onClick={() => setSearchOpen(true)}
             className="text-warm-white hover:text-orange transition-colors"
          >
             <Search className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setIsWishlistOpen(true)}
            className="text-warm-white hover:text-red-400 transition-colors relative"
          >
            <Heart className="w-5 h-5" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </button>
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
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30"
            />
            <motion.div 
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed top-0 right-0 h-full bg-off-black pt-24 px-6 flex flex-col z-40 border-l border-glass-border overflow-y-auto w-full max-w-sm"
            >
              <nav className="flex flex-col gap-6 text-xl tracking-[1px] uppercase pb-10">
                {navLinks.filter(link => link.name !== 'Shop Tools' || isLoggedIn).map((link) => (
                  <MobileNavItem 
                    key={link.name} 
                    link={link} 
                    pathname={pathname} 
                    setMobileMenuOpen={setMobileMenuOpen} 
                    setSearchOpen={setSearchOpen}
                  />
                ))}
                
                {isLoggedIn ? (
                  <button onClick={async () => {
                    const supabase = getSupabase();
                    if (supabase) await supabase.auth.signOut();
                    localStorage.removeItem('isLoggedIn');
                    window.location.reload();
                  }} className="mt-8 flex items-center gap-4 text-warm-white/70 hover:text-white transition-colors font-sans font-medium text-base text-left">
                    <User className="w-5 h-5" />
                    <span>Logout</span>
                  </button>
                ) : (
                  <Link href="/login" onClick={() => setMobileMenuOpen(false)} className="mt-8 flex items-center gap-4 text-orange font-sans font-medium text-base">
                    <User className="w-5 h-5" />
                    <span>Login / Signup to your account</span>
                  </Link>
                )}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
