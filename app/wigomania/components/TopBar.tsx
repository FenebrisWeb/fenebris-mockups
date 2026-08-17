"use client";

import { motion } from "framer-motion";

const MESSAGES = [
  "3,00,000+ Happy Clients",
  "UK Brand",
  "Global Presence",
  "20+ Years of Experience",
  "Instant Transformation",
  "Non-Surgical",
  "100% Natural Look",
  "Natural Results",
  "Free Consultations",
];

export default function TopBar() {
  // Duplicate the list so the loop can scroll seamlessly.
  const loop = [...MESSAGES, ...MESSAGES];

  return (
    <div className="overflow-hidden bg-black py-2.5 text-white">
      <motion.div
        className="flex w-max items-center gap-4 whitespace-nowrap text-sm font-medium"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      >
        {loop.map((message, i) => (
          <span key={i} className="flex items-center gap-4">
            {message}
            <span aria-hidden className="text-[var(--brand)]">
              |
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
