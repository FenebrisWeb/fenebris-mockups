"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Add a new entry here whenever a new client mockup is built.
// `href` should point to that mockup's route inside this app.
const BRANDS = [
  { name: "Yogyashree", href: "/yogyashree" },
  { name: "SMV Fitness", href: "/smv-fitness" },
  { name: "Wigomania", href: "/wigomania" },
  { name: "Unitattva", href: "/unitattva" },
];

function highlight(name: string, query: string) {
  const i = name.toLowerCase().indexOf(query.toLowerCase());
  if (i === -1) return name;
  return (
    <>
      {name.slice(0, i)}
      <span className="font-semibold">{name.slice(i, i + query.length)}</span>
      {name.slice(i + query.length)}
    </>
  );
}

export default function Home() {
  const [query, setQuery] = useState("");
  const trimmed = query.trim();

  const results = useMemo(() => {
    const q = trimmed.toLowerCase();
    if (!q) return [];
    return BRANDS.filter((b) => b.name.toLowerCase().includes(q));
  }, [trimmed]);

  return (
    <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-6 py-16">
      {/* subtle animated backdrop, no brand color baked in */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.05] [background-image:radial-gradient(currentColor_1px,transparent_1px)] [background-size:22px_22px] dark:opacity-[0.08]" />

        <motion.div
          className="absolute -left-1/4 top-[-10%] h-[60vh] w-[60vh] rounded-full bg-black/[0.05] blur-3xl dark:bg-white/[0.06]"
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 18, ease: "easeInOut", repeat: Infinity }}
        />
        <motion.div
          className="absolute -right-1/4 bottom-[-10%] h-[55vh] w-[55vh] rounded-full bg-black/[0.04] blur-3xl dark:bg-white/[0.05]"
          animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
          transition={{ duration: 22, ease: "easeInOut", repeat: Infinity }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative flex w-full max-w-lg flex-col items-center gap-10 text-center"
      >
        <div className="flex flex-col items-center gap-5">
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
          >
            <Image
              src="https://fenebrisindia.com/light-logo.svg"
              alt="Fenebris"
              width={320}
              height={80}
              className="h-20 w-auto dark:invert sm:h-24"
              priority
            />
          </motion.div>
          <p className="text-lg text-black dark:text-white">
            Use your specific link to visit your website mockup, made by
            the Fenebris Team.
          </p>
        </div>

        <div className="w-full">
          <div className="relative">
            <svg
              aria-hidden
              viewBox="0 0 20 20"
              fill="none"
              className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400"
            >
              <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M18 18l-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search your brand name..."
              className="w-full rounded-full border border-black/10 bg-white py-3 pl-11 pr-11 text-sm shadow-sm outline-none transition-colors focus:border-black/25 dark:border-white/15 dark:bg-white/[.04] dark:focus:border-white/30"
            />
            {trimmed && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
              >
                <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
                  <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            )}
          </div>

          {trimmed && (
            <div className="mt-3 w-full overflow-hidden rounded-2xl border border-black/10 bg-white text-left shadow-sm dark:border-white/15 dark:bg-white/[.03]">
              {results.length > 0 ? (
                results.map((brand) => (
                  <Link
                    key={brand.name}
                    href={brand.href}
                    className="group flex items-center justify-between border-b border-black/10 px-5 py-3 text-sm last:border-b-0 hover:bg-black/[.04] dark:border-white/10 dark:hover:bg-white/[.06]"
                  >
                    <span>{highlight(brand.name, trimmed)}</span>
                    <span className="text-zinc-400 transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </Link>
                ))
              ) : (
                <p className="px-5 py-4 text-sm text-zinc-500">
                  No brand found for &ldquo;{trimmed}&rdquo;.
                </p>
              )}
            </div>
          )}
        </div>

        <div className="flex w-full items-center gap-3 text-xs text-zinc-400">
          <span className="h-px flex-1 bg-black/10 dark:bg-white/10" />
          or
          <span className="h-px flex-1 bg-black/10 dark:bg-white/10" />
        </div>

        <a
          href="https://fenebrisindia.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-8 text-sm font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
        >
          Explore all our services
          <span aria-hidden>→</span>
        </a>
      </motion.div>
    </div>
  );
}
