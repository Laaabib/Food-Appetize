'use client';

import { useState, useMemo, useRef, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { groceryCategories } from '@/lib/menuData';
import MenuCard from '@/components/MenuCard';
import { ChevronDown, FilterX } from 'lucide-react';

export default function GroceriesPage() {
  const [selectedCat, setSelectedCat] = useState('All');
  const [catDropdownOpen, setCatDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setCatDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Augment items with categoryName for filtering
  const allGroceries = useMemo(() => {
    return groceryCategories.flatMap(c => c.items.map(item => ({ ...item, categoryName: c.name })));
  }, []);

  const highestPrice = useMemo(() => {
    return Math.max(...allGroceries.map(item => item.price), 100);
  }, [allGroceries]);

  const [maxPrice, setMaxPrice] = useState(highestPrice);

  const filteredItems = useMemo(() => {
    return allGroceries.filter(item => {
      const matchCat = selectedCat === 'All' || item.categoryName === selectedCat;
      const matchPrice = item.price <= maxPrice;
      return matchCat && matchPrice;
    });
  }, [selectedCat, maxPrice, allGroceries]);

  return (
    <main className="min-h-screen overflow-x-hidden bg-charcoal">
      <Header />
      <div className="pt-[140px] pb-24 px-6 lg:px-14 max-w-7xl mx-auto min-h-[70vh]">
        <div className="text-center mb-10">
          <p className="text-orange font-semibold uppercase tracking-wider mb-2 text-sm">Essentials</p>
          <h1 className="text-5xl font-serif font-medium text-warm-white mb-4">Groceries Market</h1>
          <p className="text-warm-white/60 max-w-xl mx-auto">Shop premium raw items, baby food, and authentic bangladeshi masalas directly from our pantry.</p>
        </div>

        {/* Top Filter Bar */}
        <div className="glass rounded-[24px] p-4 lg:px-6 mb-10 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-20">
          
          <div className="flex flex-col sm:flex-row items-center gap-4 xl:gap-8 w-full sm:w-auto">
            {/* Category Dropdown */}
            <div className="relative w-full sm:w-64" ref={dropdownRef}>
              <button 
                onClick={() => setCatDropdownOpen(!catDropdownOpen)}
                className="w-full glass-dark px-4 py-3 rounded-xl flex items-center justify-between text-warm-white hover:border-orange transition-colors"
              >
                <span className="text-sm font-medium">Category: <span className="text-orange font-bold ml-1">{selectedCat}</span></span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 text-warm-white/50 ${catDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {catDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-[#151515] border border-glass-border rounded-xl shadow-2xl py-2 z-50 flex flex-col">
                  <button 
                    onClick={() => { setSelectedCat('All'); setCatDropdownOpen(false); }}
                    className={`px-4 py-2.5 text-left text-sm font-medium transition-colors ${selectedCat === 'All' ? 'text-orange bg-white/5' : 'text-warm-white/70 hover:bg-white/5 hover:text-white'}`}
                  >
                    All Items
                  </button>
                  {groceryCategories.map(cat => (
                    <button 
                      key={cat.name}
                      onClick={() => { setSelectedCat(cat.name); setCatDropdownOpen(false); }}
                      className={`px-4 py-2.5 text-left text-sm font-medium transition-colors ${selectedCat === cat.name ? 'text-orange bg-white/5' : 'text-warm-white/70 hover:bg-white/5 hover:text-white'}`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Price Filter */}
            <div className="flex flex-col w-full sm:w-64">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[11px] font-bold text-warm-white/50 uppercase tracking-wider">Max Price</span>
                <span className="text-orange text-sm font-bold">৳{maxPrice}</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max={highestPrice} 
                step="10"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-orange h-1.5 bg-glass-border rounded-lg appearance-none cursor-pointer" 
              />
            </div>
          </div>

          <button 
            onClick={() => { setSelectedCat('All'); setMaxPrice(highestPrice); }}
            className={`flex items-center gap-2 text-sm font-bold transition-all px-4 py-2.5 rounded-xl ${selectedCat !== 'All' || maxPrice !== highestPrice ? 'text-white bg-orange/20 hover:bg-orange' : 'text-warm-white/30 cursor-default hidden sm:flex'}`}
          >
            <FilterX className="w-4 h-4" />
            Clear
          </button>
        </div>

        {/* Grid */}
        <div className="w-full relative z-10">
          {filteredItems.length === 0 ? (
            <div className="text-center py-32 glass rounded-[32px] flex flex-col items-center justify-center">
              <p className="text-warm-white/60 text-lg mb-6">No groceries found matching your filters.</p>
              <button 
                onClick={() => { setSelectedCat('All'); setMaxPrice(highestPrice); }}
                className="bg-orange text-white px-8 py-3 rounded-full font-bold hover:shadow-[0_0_20px_rgba(230,95,43,0.4)] transition-all flex items-center gap-2"
              >
                <FilterX className="w-5 h-5" />
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8">
              {filteredItems.map(item => (
                <MenuCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
}
