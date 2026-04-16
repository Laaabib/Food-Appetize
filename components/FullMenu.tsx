'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/components/CartProvider';

const menuCategories = [
  {
    name: 'Desi Classics',
    items: [
      { id: 'm1', name: 'Kacchi Biryani Royale', desc: 'Authentic dhaka style kacchi with tender mutton and baby potatoes', price: 450, rating: 4.9, img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=400&q=80' },
      { id: 'm2', name: 'Shahi Mutton Tehari', desc: 'Flavorful mustard oil tehari packed with small beef chunks', price: 320, rating: 4.8, img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=400&q=80' },
      { id: 'm3', name: 'Old Dhaka Chicken Biryani', desc: 'Light, flavorful chicken biryani with boiled egg', price: 300, rating: 4.7, img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=400&q=80' },
      { id: 'm4', name: 'Beef Vuna Khichuri', desc: 'Rainy day special vuna khichuri served with rich beef bhuna', price: 380, rating: 4.9, img: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=400&q=80' },
      { id: 'm5', name: 'Kala Bhuna & Paratha', desc: 'Slow-cooked dark, spicy beef with 2 flaky parathas', price: 420, rating: 4.8, img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=400&q=80' },
    ]
  },
  {
    name: 'Fast Food',
    items: [
      { id: 'm6', name: 'The Wagyu Burger', desc: 'Premium wagyu beef, caramelized onions, truffle mayo', price: 650, rating: 5.0, img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80' },
      { id: 'm7', name: 'Classic Cheeseburger', desc: 'Double smash patty with cheddar and special house sauce', price: 350, rating: 4.6, img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80' },
      { id: 'm8', name: 'Margherita Wood-fired Pizza', desc: 'Authentic Neapolitan crust with fresh basil and mozzarella', price: 550, rating: 4.8, img: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=400&q=80' },
      { id: 'm9', name: 'Pepperoni Feast Pizza', desc: 'Loaded with premium beef pepperoni and extra cheese', price: 650, rating: 4.7, img: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=400&q=80' },
    ]
  },
  {
    name: 'Snacks & Sides',
    items: [
      { id: 'm10', name: 'Spicy Fuchka Platter', desc: '10 crispy shells with spicy tamarind water, chickpea mash, and egg', price: 150, rating: 4.9, img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=80' },
      { id: 'm11', name: 'Chotpoti Bowl', desc: 'Hot yellow pea soup topped with crunchy bits, fresh chilli and egg', price: 130, rating: 4.6, img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=80' },
    ]
  },
  {
    name: 'Beverages',
    items: [
      { id: 'm12', name: 'Classic Borhani', desc: 'Traditional spiced yogurt drink with mint and coriander notes', price: 120, rating: 4.8, img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80' },
      { id: 'm13', name: 'Fresh Mint Lemonade', desc: 'Chilled sweet and sour lemonade with crushed mint', price: 100, rating: 4.7, img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80' },
    ]
  },
  {
    name: 'Desserts',
    items: [
      { id: 'm14', name: 'Dark Chocolate Fudge Cake', desc: 'Rich dark chocolate moist layered cake piece', price: 220, rating: 4.8, img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=400&q=80' },
      { id: 'm15', name: 'Red Velvet Slice', desc: 'Cream cheese frosted smooth red velvet sponge', price: 250, rating: 4.9, img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=400&q=80' },
    ]
  }
];

export default function FullMenu() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].name);
  const { addToCart } = useCart();

  const currentCategoryData = menuCategories.find(c => c.name === activeCategory);

  return (
    <section className="pb-24 w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-14">
        
        {/* Category Tabs */}
        <div className="flex overflow-x-auto pb-4 md:pb-0 md:flex-wrap md:justify-center items-center gap-3 mb-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {menuCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`whitespace-nowrap shrink-0 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === category.name 
                  ? 'bg-orange text-white shadow-[0_0_20px_rgba(230,95,43,0.3)] border border-orange' 
                  : 'glass text-warm-white/70 hover:text-white hover:border-warm-white/30 border border-transparent'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              {currentCategoryData?.items.map((dish, idx) => (
                <div
                  key={dish.id}
                  className="glass rounded-[24px] p-4 flex flex-col h-full group hover:border-orange transition-colors duration-300 relative overflow-hidden"
                >
                  <div className="relative w-full aspect-square rounded-[16px] overflow-hidden mb-4 bg-off-black">
                    <Image 
                      src={dish.img} 
                      alt={dish.name} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" 
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3 fill-orange text-orange" />
                      <span className="text-xs font-bold text-white">{dish.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex-1 flex flex-col relative z-10">
                    <h3 className="text-lg font-serif font-semibold text-warm-white mb-1">{dish.name}</h3>
                    <p className="text-sm text-warm-white/60 line-clamp-2 mb-4">{dish.desc}</p>
                    <div className="mt-auto flex items-center justify-between pt-2">
                      <p className="text-xl font-bold text-orange">৳ {dish.price}</p>
                      <button 
                        onClick={() => addToCart(dish as any)}
                        className="bg-orange/20 text-orange w-10 h-10 rounded-full flex items-center justify-center hover:bg-orange hover:text-white transition-colors cursor-pointer"
                      >
                        <ShoppingBag className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
