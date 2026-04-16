'use client';

import React, { createContext, useContext, useState } from 'react';

type CartItem = {
  id: string | number;
  name: string;
  price: number;
  img?: string;
  quantity?: number;
};

type CartContextType = {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string | number) => void;
  updateQuantity: (id: string | number, delta: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
};

const CartContext = createContext<CartContextType>({
  items: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
  cartCount: 0,
  cartTotal: 0,
  isCartOpen: false,
  setIsCartOpen: () => {},
});

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item: CartItem) => {
    setItems((prev) => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: (i.quantity || 1) + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string | number) => {
    setItems(prev => prev.filter(i => i.id !== id));
  };
  
  const updateQuantity = (id: string | number, delta: number) => {
    setItems(prev => prev.map(i => {
      if (i.id === id) {
        const newQ = Math.max(1, (i.quantity || 1) + delta);
        return { ...i, quantity: newQ };
      }
      return i;
    }));
  };

  const clearCart = () => setItems([]);

  const cartTotal = items.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);

  return (
    <CartContext.Provider value={{ items, addToCart, cartCount: items.reduce((acc, i) => acc + (i.quantity || 1), 0), isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, clearCart, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
