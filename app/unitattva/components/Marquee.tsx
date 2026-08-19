"use client";

import { Heart } from "lucide-react";
import { motion } from "framer-motion";

const MESSAGES = [
  "Pure Ingredients",
  "Real Flavors",
  "Nothing Artificial",
  "Single-Origin Spices",
  "Lab-Tested Purity",
  "FSSAI Certified",
];

export default function Marquee() {
  // Duplicate the list so the loop can scroll seamlessly.
  const loop = [...MESSAGES, ...MESSAGES];

  return (
    <div className="overflow-hidden bg-[var(--brand)] py-2 text-white sm:py-3.5">
      <motion.div
        className="flex w-max items-center gap-3 whitespace-nowrap sm:gap-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 24, ease: "linear", repeat: Infinity }}
      >
        {loop.map((message, i) => (
          <span key={i} className="flex items-center gap-3 sm:gap-6">
            <span className="text-xs font-extrabold uppercase tracking-wide sm:text-xl">
              {message}
            </span>
            <Heart className="h-3.5 w-3.5 shrink-0 text-orange-300 sm:h-5 sm:w-5" fill="currentColor" strokeWidth={0} />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
