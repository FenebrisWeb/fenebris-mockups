"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { Sprout, Award, ShieldOff, ShieldCheck, Leaf, Recycle } from "lucide-react";
import FadeUp from "./FadeUp";

const REASONS = [
  {
    title: "Single-Origin Sourcing",
    description:
      "Sourced directly from the regions where each spice grows best, so every batch carries its true, authentic character.",
    icon: Sprout,
  },
  {
    title: "Premium Grade Quality",
    description:
      "Hand-selected and lab-tested, chosen for superior aroma, purity, and natural potency.",
    icon: Award,
  },
  {
    title: "No Artificial Colours",
    description:
      "Completely free from added colours, fillers, or anti-caking agents.",
    icon: ShieldOff,
  },
  {
    title: "Food Safety Certified",
    description:
      "Processed in FSSAI-certified facilities with strict quality checks at every step.",
    icon: ShieldCheck,
  },
  {
    title: "Pure & Vegetarian",
    description: "100% plant-based, clean, and naturally wholesome.",
    icon: Leaf,
  },
  {
    title: "Eco-Friendly Packaging",
    description:
      "Thoughtful, planet-kind packaging that keeps every spice fresher for longer.",
    icon: Recycle,
  },
];

// A fast, looping sequence of organic blob radii the icon badge morphs
// through, same idea as CategoryRow's circles but on a much quicker cycle.
const BLOB_RADII = [
  "42% 58% 65% 35% / 45% 40% 60% 55%",
  "65% 35% 40% 60% / 55% 65% 35% 45%",
  "35% 65% 55% 45% / 40% 55% 45% 60%",
  "42% 58% 65% 35% / 45% 40% 60% 55%",
];

const GAP = 24;
const VISIBLE_ON_DESKTOP = 3;
const DESKTOP_BREAKPOINT = 1024;
const MOBILE_ITEM_WIDTH_FRACTION = 0.8;

function ReasonCard({
  reason,
  delay,
  index,
}: {
  reason: (typeof REASONS)[number];
  delay: number;
  index: number;
}) {
  const Icon = reason.icon;
  return (
    <FadeUp
      delay={delay}
      className="group relative flex h-full flex-col items-center gap-3 overflow-hidden rounded-3xl bg-white p-8 text-center shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--brand)]/0 via-[var(--brand)] to-[var(--brand)]/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <span className="absolute right-4 top-4 font-serif text-3xl font-semibold text-[var(--brand)]/[0.07]">
        {String(index + 1).padStart(2, "0")}
      </span>

      <motion.span
        animate={{ borderRadius: BLOB_RADII }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.1,
        }}
        className="relative flex h-16 w-16 items-center justify-center bg-gradient-to-br from-[var(--brand)]/15 to-[var(--brand)]/5 text-[var(--brand)] transition-colors duration-300 group-hover:from-[var(--brand)] group-hover:to-[var(--brand)] group-hover:text-white"
      >
        <Icon className="h-7 w-7" strokeWidth={1.5} />
      </motion.span>

      <h3 className="relative text-base font-bold text-zinc-900">
        {reason.title}
      </h3>
      <span className="h-px w-8 bg-[var(--brand)]" />
      <p className="relative text-sm leading-relaxed text-zinc-600">
        {reason.description}
      </p>
    </FadeUp>
  );
}

export default function WhySpices() {
  const x = useMotionValue(0);
  const [containerWidth, setContainerWidth] = useState(1400);
  const [isDesktop, setIsDesktop] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
      setIsDesktop(window.innerWidth >= DESKTOP_BREAKPOINT);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const availableWidth = containerWidth - 48;
  const step = isDesktop
    ? availableWidth / VISIBLE_ON_DESKTOP
    : availableWidth * MOBILE_ITEM_WIDTH_FRACTION + GAP;
  const itemWidth = step - GAP;
  const trackWidth = REASONS.length * step - GAP;
  const maxOffset = Math.min(0, availableWidth - trackWidth);

  return (
    <section className="relative overflow-hidden bg-[#fdf8f4] py-16 sm:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(currentColor_1px,transparent_1px)] [background-size:20px_20px]"
      />

      {/* Slow drifting glow blobs, looping in the background */}
      <motion.div
        aria-hidden
        animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[var(--brand)]/10 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, -30, 20, 0], y: [0, 30, -20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="pointer-events-none absolute -bottom-32 -right-16 h-96 w-96 rounded-full bg-[var(--brand)]/[0.08] blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-[1400px] px-6">
        <FadeUp className="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">
            Why Choose Our Spices?
          </span>
          <h2 className="font-serif text-3xl tracking-tight text-zinc-900 sm:text-4xl">
            Ethically Sourced, Expertly Crafted
          </h2>
        </FadeUp>

        {/* Drag-to-slide on every breakpoint, same mechanics as CategoryRow */}
        <div ref={containerRef} className="mt-12 overflow-hidden">
          <motion.div
            drag="x"
            dragConstraints={{ left: maxOffset, right: 0 }}
            dragElastic={0.1}
            onDragStart={() => {
              draggingRef.current = true;
            }}
            onDragEnd={() => {
              draggingRef.current = false;
              const clamped = Math.min(0, Math.max(maxOffset, x.get()));
              animate(x, clamped, { duration: 0.3, ease: "easeOut" });
            }}
            style={{ x }}
            className="flex w-max cursor-grab select-none active:cursor-grabbing"
          >
            {REASONS.map((reason, i) => (
              <div
                key={reason.title}
                style={{ width: itemWidth, marginRight: GAP }}
                className="shrink-0"
              >
                <ReasonCard reason={reason} delay={(i % VISIBLE_ON_DESKTOP) * 0.06} index={i} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
