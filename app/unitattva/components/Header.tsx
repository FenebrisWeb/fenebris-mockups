"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, User, Heart, ShoppingBag } from "lucide-react";
import { useCart } from "./CartContext";
import { useWishlist } from "./WishlistContext";
import SearchPanel from "./SearchPanel";

const NAV_LINKS = [
  { label: "Home", href: "/unitattva" },
  { label: "Shop", href: "/unitattva/shop" },
  { label: "Contact", href: "#contact" },
  { label: "Policies", href: "#policies" },
];

export default function Header() {
  const { count } = useCart();
  const { count: wishlistCount } = useWishlist();
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-[1400px] items-center gap-6 px-6 py-4">
        <Link href="/unitattva" className="flex shrink-0 items-center">
          <Image
            src="/unitattva/logo.PNG"
            alt="UniTattva"
            width={160}
            height={48}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <nav className="mx-auto hidden items-center gap-8 text-sm font-semibold text-zinc-800 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-[var(--brand)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2.5 lg:ml-0">
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            aria-label="Search"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 text-violet-700 transition-transform hover:-translate-y-0.5"
          >
            <Search className="h-[18px] w-[18px]" strokeWidth={1.75} />
          </button>
          <button
            type="button"
            aria-label="Account"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-700 transition-transform hover:-translate-y-0.5"
          >
            <User className="h-[18px] w-[18px]" strokeWidth={1.75} />
          </button>
          <button
            type="button"
            aria-label="Wishlist"
            className="relative flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-700 transition-transform hover:-translate-y-0.5"
          >
            <Heart className="h-[18px] w-[18px]" strokeWidth={1.75} />
            <AnimatePresence mode="wait">
              <motion.span
                key={wishlistCount}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white"
              >
                {wishlistCount}
              </motion.span>
            </AnimatePresence>
          </button>
          <button
            type="button"
            aria-label="Cart"
            className="relative flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-700 transition-transform hover:-translate-y-0.5"
          >
            <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1.75} />
            <AnimatePresence mode="wait">
              <motion.span
                key={count}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white"
              >
                {count}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </div>
    </header>

    <SearchPanel open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
