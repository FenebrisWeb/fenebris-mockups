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
    <div className="overflow-hidden bg-[var(--brand)] py-3.5 text-white">
      <motion.div
        className="flex w-max items-center gap-6 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 24, ease: "linear", repeat: Infinity }}
      >
        {loop.map((message, i) => (
          <span key={i} className="flex items-center gap-6">
            <span className="text-lg font-extrabold uppercase tracking-wide sm:text-xl">
              {message}
            </span>
            <Heart className="h-5 w-5 shrink-0 text-orange-300" fill="currentColor" strokeWidth={0} />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
