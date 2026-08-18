"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type WishlistContextValue = {
  items: Set<string>;
  count: number;
  toggle: (id: string) => void;
  has: (id: string) => boolean;
};

const WishlistContext = createContext<WishlistContextValue | null>(null);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setItems((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const has = (id: string) => items.has(id);

  return (
    <WishlistContext.Provider value={{ items, count: items.size, toggle, has }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return ctx;
}
