'use client';

import React, { createContext, useContext, useState } from 'react';

type WishlistItem = {
  id: string | number;
  name: string;
  price: number;
  originalPrice?: number;
  img?: string;
  rating?: number;
  desc?: string;
};

type WishlistContextType = {
  items: WishlistItem[];
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: string | number) => void;
  toggleWishlist: (item: WishlistItem) => void;
  isInWishlist: (id: string | number) => boolean;
  clearWishlist: () => void;
  wishlistCount: number;
  isWishlistOpen: boolean;
  setIsWishlistOpen: (open: boolean) => void;
};

const WishlistContext = createContext<WishlistContextType>({
  items: [],
  addToWishlist: () => {},
  removeFromWishlist: () => {},
  toggleWishlist: () => {},
  isInWishlist: () => false,
  clearWishlist: () => {},
  wishlistCount: 0,
  isWishlistOpen: false,
  setIsWishlistOpen: () => {},
});

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<WishlistItem[]>([]);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  const addToWishlist = (item: WishlistItem) => {
    setItems((prev) => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) return prev;
      return [...prev, item];
    });
  };

  const removeFromWishlist = (id: string | number) => {
    setItems(prev => prev.filter(i => i.id !== id));
  };
  
  const toggleWishlist = (item: WishlistItem) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.filter(i => i.id !== item.id);
      }
      return [...prev, item];
    });
  };

  const isInWishlist = (id: string | number) => {
    return items.some(i => i.id === id);
  };

  const clearWishlist = () => setItems([]);

  return (
    <WishlistContext.Provider value={{ 
      items, 
      addToWishlist, 
      removeFromWishlist, 
      toggleWishlist, 
      isInWishlist, 
      clearWishlist, 
      wishlistCount: items.length, 
      isWishlistOpen, 
      setIsWishlistOpen 
    }}>
      {children}
    </WishlistContext.Provider>
  );
}

export const useWishlist = () => useContext(WishlistContext);
