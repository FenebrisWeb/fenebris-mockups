"use client";

import { motion } from "framer-motion";
import { Star, ChevronRight } from "lucide-react";
import FadeUp from "./FadeUp";

const MARQUEE_ITEMS = [
  "7-Day Easy Returns",
  "100% Authentic",
  "Free Shipping Above ₹498",
  "Pan-India Delivery",
  "FSSAI Certified",
  "Lab-Tested Purity",
];

export default function PromoOffer() {
  const loop = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <section className="relative overflow-hidden bg-zinc-950 text-white">
      {/* Slowly drifting glow blobs */}
      <motion.div
        aria-hidden
        animate={{ x: [0, 60, -30, 0], y: [0, -40, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[var(--brand)]/30 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, -50, 30, 0], y: [0, 40, -20, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="pointer-events-none absolute -bottom-40 -right-24 h-[28rem] w-[28rem] rounded-full bg-amber-500/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:radial-gradient(currentColor_1px,transparent_1px)] [background-size:22px_22px]"
      />

      <div className="relative mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-12 px-6 py-16 sm:py-20 lg:grid-cols-[1fr_1.1fr] lg:gap-10">
        {/* Animated discount badge */}
        <FadeUp className="flex justify-center lg:justify-center">
          <div className="relative flex h-72 w-72 items-center justify-center sm:h-[22rem] sm:w-[22rem]">
            {/* Rising aroma wisps, curling up from behind the badge */}
            {[-40, 0, 40].map((offset, i) => (
              <motion.span
                key={offset}
                aria-hidden
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: [-20, -90], opacity: [0, 0.5, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: i * 1.1,
                }}
                style={{ left: `calc(50% + ${offset}px)` }}
                className="absolute bottom-1/2 h-16 w-2 -translate-x-1/2 rounded-full bg-amber-200/60 blur-[2px]"
              />
            ))}

            {/* Ring of scattered whole-spice grains, slowly orbiting */}
            <motion.div
              aria-hidden
              animate={{ rotate: 360 }}
              transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              {[
                { deg: 0, size: 12, tone: "bg-amber-400" },
                { deg: 32, size: 8, tone: "bg-[var(--brand)]" },
                { deg: 68, size: 14, tone: "bg-amber-600" },
                { deg: 100, size: 9, tone: "bg-amber-300" },
                { deg: 140, size: 11, tone: "bg-[var(--brand)]" },
                { deg: 175, size: 8, tone: "bg-amber-500" },
                { deg: 205, size: 13, tone: "bg-amber-700" },
                { deg: 240, size: 9, tone: "bg-amber-300" },
                { deg: 275, size: 12, tone: "bg-[var(--brand)]" },
                { deg: 310, size: 8, tone: "bg-amber-400" },
                { deg: 340, size: 10, tone: "bg-amber-600" },
              ].map((seed) => (
                <span
                  key={seed.deg}
                  className={`absolute left-1/2 top-1/2 rounded-full ${seed.tone} shadow-[0_0_6px_rgba(0,0,0,0.3)]`}
                  style={{
                    width: seed.size,
                    height: seed.size * 0.8,
                    transform: `rotate(${seed.deg}deg) translate(9.5rem) rotate(-${seed.deg}deg)`,
                  }}
                />
              ))}
            </motion.div>

            {/* Thin dashed spice-box ring */}
            <motion.span
              aria-hidden
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-6 rounded-full border-2 border-dashed border-amber-400/30"
            />

            <motion.span
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              className="relative flex h-44 w-44 flex-col items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-[var(--brand)] text-center shadow-[0_0_50px_rgba(217,119,6,0.4)] sm:h-52 sm:w-52"
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/90">
                Up to
              </span>
              <span className="font-serif text-5xl font-bold leading-none sm:text-6xl">
                20%
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/90">
                Off
              </span>
            </motion.span>
          </div>
        </FadeUp>

        {/* Copy + CTAs */}
        <FadeUp
          delay={0.1}
          className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left"
        >
          <span className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-amber-300">
            Limited Time Offer
          </span>

          <h2 className="font-serif text-3xl leading-tight tracking-tight sm:text-4xl">
            Stock Up on Pure, Authentic Spices
          </h2>

          <p className="max-w-lg text-sm text-white/75 sm:text-base">
            On our entire collection of whole spices, powders &amp; masala
            blends. Single-origin, lab-tested, and never diluted.
          </p>

          <div className="mt-2 flex flex-col gap-4 sm:flex-row">
            <a
              href="/unitattva/shop"
              className="group relative flex h-12 items-center justify-center gap-1.5 overflow-hidden rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-8 text-sm font-bold uppercase tracking-wide text-zinc-900 shadow-lg transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-amber-500/40"
            >
              <span
                aria-hidden
                className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-500 group-hover:translate-x-full"
              />
              <span className="relative">Shop Now</span>
              <ChevronRight
                className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={2.5}
              />
            </a>
            <a
              href="/unitattva/shop"
              className="flex h-12 items-center justify-center rounded-full border border-white/20 px-8 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:border-amber-400 hover:text-amber-300"
            >
              Explore All
            </a>
          </div>

          <div className="mt-1 flex items-center gap-2">
            <div className="flex items-center gap-0.5 text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.3 }}
                >
                  <Star className="h-4 w-4" strokeWidth={0} fill="currentColor" />
                </motion.span>
              ))}
            </div>
            <span className="text-xs font-medium text-white/60 sm:text-sm">
              Trusted by 10,000+ customers
            </span>
          </div>
        </FadeUp>
      </div>

      <div className="relative overflow-hidden border-t border-white/10 bg-black/40 py-2.5">
        <motion.div
          className="flex w-max items-center gap-6 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 26, ease: "linear", repeat: Infinity }}
        >
          {loop.map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-6 text-xs font-semibold uppercase tracking-wide text-white/80"
            >
              {item}
              <Star className="h-3 w-3 text-amber-400" strokeWidth={0} fill="currentColor" />
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
