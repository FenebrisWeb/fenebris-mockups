"use client";

import { motion } from "framer-motion";

const ENTRIES = [
  { phone: "+91 44 4557 9229", city: "Chennai", email: "support@wigomania.com" },
  { phone: "+91 96189 07865", city: "Hyderabad", email: "womhyderabad@wigomania.com" },
  { phone: "+91 98651 87166", city: "Coimbatore", email: "wigomaniacbe@wigomania.com" },
];

function Item({ entry }: { entry: (typeof ENTRIES)[number] }) {
  return (
    <span className="flex items-center gap-4">
      <a
        href={`tel:${entry.phone.replace(/\s+/g, "")}`}
        className="whitespace-nowrap text-white/85 transition-colors hover:text-white"
      >
        <span className="font-semibold text-white">{entry.phone}</span> {entry.city}
      </a>
      <span aria-hidden className="text-[var(--brand)]">
        |
      </span>
      <span className="whitespace-nowrap font-semibold uppercase tracking-[0.15em] text-[var(--brand)]">
        Designed in London, made for the World
      </span>
      <span aria-hidden className="text-[var(--brand)]">
        |
      </span>
      <a
        href={`mailto:${entry.email}`}
        className="whitespace-nowrap text-white/85 transition-colors hover:text-white"
      >
        {entry.email}
      </a>
      <span aria-hidden className="text-[var(--brand)]">
        |
      </span>
    </span>
  );
}

export default function ContactBar() {
  const loop = [...ENTRIES, ...ENTRIES];

  return (
    <section className="overflow-hidden bg-zinc-950 py-3 text-sm">
      <motion.div
        className="flex w-max items-center gap-4 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 34, ease: "linear", repeat: Infinity }}
      >
        {loop.map((entry, i) => (
          <Item key={i} entry={entry} />
        ))}
      </motion.div>
    </section>
  );
}
