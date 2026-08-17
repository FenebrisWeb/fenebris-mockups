"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar } from "lucide-react";
import PatternOverlay from "./PatternOverlay";

const NAV_LINKS = [
  { label: "Behind the Brand", href: "#behind-the-brand", icon: "M10 2 2 6l8 4 8-4-8-4Zm0 6.5L3.5 5.2 10 9.5l6.5-4.3L10 8.5ZM2 10l8 4 8-4M2 14l8 4 8-4" },
  { label: "Our Forte", href: "#our-forte", icon: "M10 2 3 5v5c0 4.4 3 8.4 7 9.5 4-1.1 7-5.1 7-9.5V5l-7-3Z" },
  { label: "Reviews", href: "#reviews", icon: "m10 2 2.5 5.5L18 8.2l-4.3 3.9L14.9 18 10 15l-4.9 3 1.2-5.9L2 8.2l5.5-.7L10 2Z" },
  { label: "Partnership Opportunity", href: "#partnership", icon: "M6 8V6a4 4 0 1 1 8 0v2m-9 0h10a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a1 1 0 0 1 1-1Z" },
  { label: "CSR", href: "#csr", icon: "M10 18s-6.5-4-6.5-9A4 4 0 0 1 10 6a4 4 0 0 1 6.5 3c0 5-6.5 9-6.5 9Z" },
  { label: "Gallery", href: "#gallery", icon: "M3 5h14v10H3V5Zm0 8 4-4 3 3 4-5 3 3M7 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" },
  { label: "Blog", href: "#blog", icon: "M4 3h9l3 3v11H4V3Zm9 0v3h3M7 9h6M7 12h6M7 15h4" },
  { label: "Reach Us", href: "#reach-us", icon: "M10 2a6 6 0 0 0-6 6c0 4.5 6 10 6 10s6-5.5 6-10a6 6 0 0 0-6-6Zm0 8.3a2.3 2.3 0 1 1 0-4.6 2.3 2.3 0 0 1 0 4.6Z" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 shadow-sm backdrop-blur dark:border-white/10 dark:bg-black/95">
      <div className="mx-auto flex w-full max-w-[1400px] items-center gap-4 px-6 py-2.5">
        <Link href="#" className="flex shrink-0 items-center">
          <Image
            src="https://www.wigomania.com/public/assets/images/logo-website.webp"
            alt="Wigomania"
            width={180}
            height={72}
            className="h-16 w-auto"
            priority
          />
        </Link>

        <div className="relative shrink-0">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className={`group relative flex h-11 items-center gap-2 overflow-hidden rounded-full border px-4 text-[13px] font-semibold transition-colors ${
              open
                ? "border-[var(--brand)] bg-[var(--brand)] text-white"
                : "border-black/10 text-zinc-700 hover:border-[var(--brand)] hover:text-[var(--brand)] dark:border-white/15 dark:text-zinc-200"
            }`}
          >
            {open && <PatternOverlay />}
            <span className="relative flex h-4 w-4 flex-col items-center justify-center gap-[5px]">
              <motion.span
                animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                className="block h-[1.5px] w-4 rounded-full bg-current"
              />
              <motion.span
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.15 }}
                className="block h-[1.5px] w-4 rounded-full bg-current"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute block h-[1.5px] w-4 rounded-full bg-current"
              />
            </span>
            <span className="relative">Menu</span>
          </button>

          <AnimatePresence>
            {open && (
              <motion.nav
                initial={{ opacity: 0, y: -8, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.97 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute left-0 top-full mt-3 w-[calc(100vw-3rem)] max-w-xs overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl sm:left-auto sm:right-0 sm:w-72 sm:max-w-none dark:border-white/10 dark:bg-zinc-900"
              >
                <div className="relative overflow-hidden bg-[var(--brand)] px-5 py-4">
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-20 [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:14px_14px]"
                  />
                  <p className="relative text-xs font-semibold uppercase tracking-widest text-white/80">
                    Explore
                  </p>
                  <p className="relative text-sm font-semibold text-white">
                    Wigomania Hair Studio
                  </p>
                </div>

                <div className="flex flex-col gap-0.5 p-2">
                  {NAV_LINKS.map((link, i) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.18, delay: i * 0.03 }}
                      className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-[var(--brand)]/10 hover:text-[var(--brand)] dark:text-zinc-300"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-black/[.05] text-zinc-500 transition-colors group-hover:bg-[var(--brand)] group-hover:text-white dark:bg-white/[.08]">
                        <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
                          <path d={link.icon} stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {link.label}
                    </motion.a>
                  ))}
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>

        <div className="ml-auto flex items-center gap-2.5">
          <a
            href="#appointment"
            className="relative hidden h-10 items-center justify-center overflow-hidden rounded-full bg-[var(--brand)] px-5 text-[13px] font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md sm:flex"
          >
            <PatternOverlay />
            <span className="relative">Book Consultation</span>
          </a>
          <a
            href="#coupon"
            className="relative hidden h-10 items-center justify-center overflow-hidden rounded-full border-2 border-[var(--brand)] px-5 text-[13px] font-semibold text-[var(--brand)] transition-colors hover:bg-[var(--brand)] hover:text-white sm:flex"
          >
            <PatternOverlay />
            <span className="relative">Coupon</span>
          </a>
          <a
            href="#appointment"
            aria-label="Book Consultation"
            className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[var(--brand)] text-white shadow-sm sm:hidden"
          >
            <PatternOverlay />
            <Calendar className="relative h-4 w-4" strokeWidth={1.75} />
          </a>
          <a
            href="tel:+919962831281"
            className="flex h-10 items-center justify-center gap-2 rounded-full bg-black px-4 text-[13px] font-semibold text-white transition-opacity hover:opacity-85 dark:bg-white dark:text-black"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5 shrink-0">
              <path d="M4 3a1 1 0 0 0-1 1v1.5c0 8 6.5 14.5 14.5 14.5H19a1 1 0 0 0 1-1v-2.7a1 1 0 0 0-.8-1L15.8 13a1 1 0 0 0-1 .3l-1 1.2a11.4 11.4 0 0 1-5.3-5.3l1.2-1a1 1 0 0 0 .3-1L8.7 3.8a1 1 0 0 0-1-.8H4Z" />
            </svg>
            <span className="hidden sm:inline">+91 99628-31281</span>
          </a>
        </div>
      </div>
    </header>
  );
}
