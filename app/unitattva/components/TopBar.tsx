"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MESSAGES = [
  "Welcome 2026 | Enjoy Special Discounts",
  "Free Shipping Above ₹498",
  "Shop Our Latest Arrivals!",
];

const AUTOPLAY_MS = 3000;

export default function TopBar() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const id = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % MESSAGES.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, []);

  const go = (delta: number) => {
    setDirection(delta);
    setIndex((i) => (i + delta + MESSAGES.length) % MESSAGES.length);
  };

  return (
    <div className="overflow-hidden bg-[var(--brand)] text-white">
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between gap-2 px-4 py-2.5">
      <button
        type="button"
        onClick={() => go(-1)}
        aria-label="Previous announcement"
        className="shrink-0 opacity-80 transition-opacity hover:opacity-100"
      >
        <ChevronLeft className="h-4 w-4" strokeWidth={2} />
      </button>

      <div className="relative h-5 flex-1 overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.p
            key={index}
            custom={direction}
            initial={{ x: direction > 0 ? 40 : -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? -40 : 40, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="absolute inset-0 text-center text-xs font-semibold uppercase tracking-wide sm:text-sm"
          >
            {MESSAGES[index]}
          </motion.p>
        </AnimatePresence>
      </div>

      <button
        type="button"
        onClick={() => go(1)}
        aria-label="Next announcement"
        className="shrink-0 opacity-80 transition-opacity hover:opacity-100"
      >
        <ChevronRight className="h-4 w-4" strokeWidth={2} />
      </button>
      </div>
    </div>
  );
}
