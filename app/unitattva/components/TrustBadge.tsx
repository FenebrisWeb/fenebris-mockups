"use client";

import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

export default function TrustBadge() {
  return (
    <div className="relative flex h-52 w-52 items-center justify-center">
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.3, 0.6] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute h-52 w-52 rounded-full bg-white/10"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.8, 0.4, 0.8] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute h-40 w-40 rounded-full bg-white/10"
      />
      <motion.span
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="relative flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-lg"
      >
        <Leaf className="h-14 w-14 text-[var(--brand)]" strokeWidth={1.25} />
      </motion.span>
    </div>
  );
}
