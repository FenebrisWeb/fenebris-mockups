"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { PRODUCTS } from "./products";

const MOST_SEARCHED = [
  "Green Cardamom Supreme",
  "Biryani Masala",
  "Chicken Masala",
  "Thandai Premix",
  "Kasoori Methi",
  "Paratha Masala",
  "Jaljeera Premix",
];

const MIN_CHARS = 3;

export default function SearchPanel({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const trimmed = query.trim();
  const showResults = trimmed.length >= MIN_CHARS;
  const results = showResults
    ? PRODUCTS.filter((p) => p.title.toLowerCase().includes(trimmed.toLowerCase()))
    : [];

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[9998] bg-black/40"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-y-0 right-0 z-[9999] flex w-full flex-col bg-white shadow-2xl sm:w-[420px]"
          >
            <div className="flex items-center justify-between border-b border-black/10 px-6 py-5">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--brand)]">
                Search
              </span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close search"
                className="flex h-9 w-9 items-center justify-center rounded-full text-zinc-500 transition-colors hover:bg-black/5 hover:text-zinc-900"
              >
                <X className="h-5 w-5" strokeWidth={1.75} />
              </button>
            </div>

            <div className="border-b border-black/10 px-6 py-5">
              <div className="flex items-center gap-3 border-b-2 border-zinc-200 pb-2 focus-within:border-[var(--brand)]">
                <input
                  autoFocus
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="What are you looking for?"
                  className="w-full text-sm text-zinc-900 outline-none placeholder:text-zinc-400"
                />
                <Search className="h-4 w-4 shrink-0 text-zinc-400" strokeWidth={1.75} />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6">
              {!showResults && (
                <div>
                  <span className="text-sm font-bold uppercase tracking-[0.15em] text-[var(--brand)]">
                    Most Searched
                  </span>
                  <div className="mt-4 flex flex-col gap-4">
                    {MOST_SEARCHED.map((term) => (
                      <button
                        key={term}
                        type="button"
                        onClick={() => setQuery(term)}
                        className="text-left text-sm text-zinc-700 transition-colors hover:text-[var(--brand)]"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {showResults && results.length > 0 && (
                <div className="flex flex-col gap-1">
                  {results.map((product) => (
                    <a
                      key={product.handle}
                      href={`https://unitattva.com/products/${product.handle}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-black/[.03]"
                    >
                      <span className="text-sm font-medium text-zinc-800">
                        {product.title}
                      </span>
                      <span className="shrink-0 text-sm font-semibold text-[var(--brand)]">
                        &#8377;{product.price}
                      </span>
                    </a>
                  ))}
                </div>
              )}

              {showResults && results.length === 0 && (
                <p className="text-sm text-zinc-500">
                  No products found for &ldquo;{trimmed}&rdquo;.
                </p>
              )}

              {!showResults && trimmed.length > 0 && (
                <p className="mt-6 text-xs text-zinc-400">
                  Keep typing, at least {MIN_CHARS} characters to search.
                </p>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
