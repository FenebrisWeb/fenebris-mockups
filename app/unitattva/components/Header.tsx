"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, User, Heart, ShoppingBag, Menu, X } from "lucide-react";
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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <header className="border-b border-black/5 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-[1400px] items-center gap-6 px-6 py-4">
        <Link href="/unitattva" className="flex shrink-0 items-center">
          <Image
            src="/unitattva/logo0.png"
            alt="UniTattva"
            width={160}
            height={48}
            className="h-7 w-auto sm:h-10"
            priority
          />
        </Link>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 text-zinc-700 transition-colors hover:border-[var(--brand)] hover:text-[var(--brand)] sm:h-10 sm:w-10 lg:hidden"
        >
          <Menu className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.75} />
        </button>

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

        <div className="ml-auto flex items-center gap-1.5 sm:gap-2.5 lg:ml-0">
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            aria-label="Search"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-100 text-violet-700 transition-transform hover:-translate-y-0.5 sm:h-10 sm:w-10"
          >
            <Search className="h-3.5 w-3.5 sm:h-[18px] sm:w-[18px]" strokeWidth={1.75} />
          </button>
          <button
            type="button"
            aria-label="Account"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-700 transition-transform hover:-translate-y-0.5 sm:h-10 sm:w-10"
          >
            <User className="h-3.5 w-3.5 sm:h-[18px] sm:w-[18px]" strokeWidth={1.75} />
          </button>
          <button
            type="button"
            aria-label="Wishlist"
            className="relative flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sky-700 transition-transform hover:-translate-y-0.5 sm:h-10 sm:w-10"
          >
            <Heart className="h-3.5 w-3.5 sm:h-[18px] sm:w-[18px]" strokeWidth={1.75} />
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
            className="relative flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-700 transition-transform hover:-translate-y-0.5 sm:h-10 sm:w-10"
          >
            <ShoppingBag className="h-3.5 w-3.5 sm:h-[18px] sm:w-[18px]" strokeWidth={1.75} />
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

    <AnimatePresence>
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[9999] flex h-dvh w-full flex-col bg-white lg:hidden"
        >
          <div className="flex items-center justify-between border-b border-black/10 px-6 py-5">
            <Image
              src="/unitattva/logo0.png"
              alt="UniTattva"
              width={140}
              height={42}
              className="h-9 w-auto"
            />
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-500 transition-colors hover:bg-black/5 hover:text-zinc-900"
            >
              <X className="h-6 w-6" strokeWidth={1.75} />
            </button>
          </div>

          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-6 py-6">
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, delay: i * 0.05 }}
                className="rounded-xl px-3 py-4 text-xl font-semibold text-zinc-800 transition-colors hover:bg-[var(--brand)]/5 hover:text-[var(--brand)]"
              >
                {link.label}
              </motion.a>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>

    <SearchPanel open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
