import React, { createContext, useContext, useState, useCallback } from "react";
import type { MenuItem } from "@/data/menuData";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  option?: string; // e.g. "Single", "Half", "Full" for mandis
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: MenuItem | CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = useCallback((item: MenuItem | CartItem) => {
    const cartId = 'option' in item && item.option ? `${item.id}-${item.option}` : item.id;
    const option = 'option' in item ? item.option : undefined;

    setItems((prev) => {
      const existing = prev.find((i) => i.id === cartId);
      if (existing) {
        return prev.map((i) => (i.id === cartId ? { ...i, quantity: i.quantity + 1 } : i));
      }
      return [...prev, {
        id: cartId,
        name: item.name,
        price: item.price,
        image: item.image,
        category: item.category,
        description: item.description,
        option,
        quantity: 1,
      }];
    });
  }, []);

  const removeFromCart = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const updateQuantity = useCallback((id: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((prev) => prev.filter((i) => i.id !== id));
    } else {
      setItems((prev) => prev.map((i) => (i.id === id ? { ...i, quantity } : i)));
    }
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};
