"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PatternOverlay from "./PatternOverlay";
import FadeUp from "./FadeUp";

const CODE = "NEW20";

export default function Promo() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CODE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard not available, ignore
    }
  };

  return (
    <section className="relative overflow-hidden bg-[var(--brand)]">
      <PatternOverlay />

      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 right-10 h-72 w-72 rounded-full bg-black/10 blur-2xl"
      />

      <div className="relative mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-10 px-6 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-24">
        <FadeUp className="flex flex-col items-start gap-5 text-left text-white">
          <span className="rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em]">
            Limited Time Offer
          </span>

          <h2 className="max-w-lg font-serif text-4xl leading-[1.1] tracking-tight sm:text-5xl">
            Flat 20% off your first hair consultation
          </h2>

          <p className="max-w-md text-sm text-white/85 sm:text-base">
            New here? Use the code below at checkout or mention it during your
            in-studio visit to unlock 20% off, plus a free consultation.
          </p>

          <button
            type="button"
            onClick={handleCopy}
            className="group mt-2 flex items-center gap-3 rounded-full border-2 border-dashed border-white/60 bg-white/10 px-5 py-3 text-left transition-colors hover:bg-white/15"
          >
            <span className="text-lg font-bold tracking-[0.15em]">{CODE}</span>
            <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-white/80">
              <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
                <rect x="7" y="7" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.4" />
                <path d="M4 13V5a2 2 0 0 1 2-2h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              {copied ? "Copied!" : "Copy Code"}
            </span>
          </button>
        </FadeUp>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full rounded-2xl bg-white p-6 shadow-xl sm:p-8"
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
            Claim Your Offer
          </p>
          <h3 className="mt-1 text-2xl font-semibold tracking-tight text-zinc-900">
            Get 20% Off Today
          </h3>

          <div className="mt-6 flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-full border border-black/10 bg-white px-5 py-3 text-sm text-zinc-900 outline-none focus:border-[var(--brand)]/50"
              />
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-full border border-black/10 bg-white px-5 py-3 text-sm text-zinc-900 outline-none focus:border-[var(--brand)]/50"
              />
              <input
                type="tel"
                placeholder="WhatsApp number"
                className="w-full rounded-full border border-black/10 bg-white px-5 py-3 text-sm text-zinc-900 outline-none focus:border-[var(--brand)]/50"
              />
              <select
                defaultValue=""
                className="w-full rounded-full border border-black/10 bg-white px-5 py-3 text-sm text-zinc-900 outline-none focus:border-[var(--brand)]/50"
              >
                <option value="" disabled>
                  What are you looking for?
                </option>
                <option value="mens-wig">Men&apos;s Wig</option>
                <option value="toppers">Toppers for Women</option>
                <option value="ladies-wig">Ladies Wigs</option>
                <option value="hair-extensions">Hair Extensions</option>
                <option value="cancer-wig">Cancer Wigs for Women</option>
              </select>
            </div>
            <input
              type="text"
              placeholder="Message for us"
              className="w-full rounded-full border border-black/10 bg-white px-5 py-3 text-sm text-zinc-900 outline-none focus:border-[var(--brand)]/50"
            />
            <button
              type="submit"
              className="relative flex h-12 items-center justify-center overflow-hidden rounded-full bg-[var(--brand)] px-8 text-sm font-semibold uppercase tracking-wide text-white transition-opacity hover:opacity-90"
            >
              <PatternOverlay />
              <span className="relative">Claim Offer</span>
            </button>
          </div>

          <p className="mt-4 text-center text-xs text-zinc-400">
            No spam, ever. We&apos;ll only reach out about your consultation.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
