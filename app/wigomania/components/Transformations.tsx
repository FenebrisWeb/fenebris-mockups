"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, animate } from "framer-motion";
import FadeUp from "./FadeUp";

const MEN_IMAGES = [
  "https://www.wigomania.com/public/uploads/beforeafter/1775892529_69d9f83176f6b.png",
  "https://www.wigomania.com/public/uploads/beforeafter/1775892392_69d9f7a8dfc9e.png",
  "https://www.wigomania.com/public/uploads/beforeafter/1767869798_695f8d66689c0.webp",
  "https://www.wigomania.com/public/uploads/beforeafter/1767869756_695f8d3caa846.webp",
  "https://www.wigomania.com/public/uploads/beforeafter/1767869673_695f8ce90bdb5.webp",
];

const WOMEN_IMAGES = [
  "https://www.wigomania.com/public/uploads/beforeafter/1767868024_695f867841713.webp",
  "https://www.wigomania.com/public/uploads/beforeafter/1767867981_695f864d9a187.webp",
  "https://www.wigomania.com/public/uploads/beforeafter/1767867131_695f82fb47f74.webp",
  "https://www.wigomania.com/public/uploads/beforeafter/1767864906_695f7a4a3785a.webp",
  "https://www.wigomania.com/public/uploads/beforeafter/1767864759_695f79b75212f.webp",
  "https://www.wigomania.com/public/uploads/beforeafter/1767864717_695f798df1cd5.webp",
];

const TABS = ["Men Transformation", "Women Transformation"] as const;

const ITEMS_BY_GROUP: Record<(typeof TABS)[number], { group: string; title: string; tagline: string; image: string }[]> = {
  "Men Transformation": MEN_IMAGES.map((image) => ({
    group: "Men Transformation",
    title: "Men's Hair Systems",
    tagline: "Natural hairline. Confident you.",
    image,
  })),
  "Women Transformation": WOMEN_IMAGES.map((image) => ({
    group: "Women Transformation",
    title: "Women's Hair Solutions",
    tagline: "Natural volume. Beautiful you.",
    image,
  })),
};

const GAP = 24;
const AUTOPLAY_MS = 3500;

export default function Transformations() {
  const x = useMotionValue(0);
  const [paused, setPaused] = useState(false);
  const [cardWidth, setCardWidth] = useState(320);
  const [active, setActive] = useState(0);
  const [tab, setTab] = useState<(typeof TABS)[number]>("Men Transformation");
  const draggingRef = useRef(false);

  const ITEMS = ITEMS_BY_GROUP[tab];

  useEffect(() => {
    const updateWidth = () => {
      setCardWidth(window.innerWidth < 640 ? 260 : 320);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const step = cardWidth + GAP;
  const maxOffset = -(ITEMS.length - 1) * step;

  useEffect(() => {
    // Reset the slider position whenever the active tab changes.
    x.set(0);
    setActive(0);
  }, [tab, x]);

  useEffect(() => {
    const unsub = x.on("change", (latest) => {
      setActive(Math.min(ITEMS.length - 1, Math.max(0, Math.round(-latest / step))));
    });
    return unsub;
  }, [x, step, ITEMS.length]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      if (draggingRef.current) return;
      const currentIndex = Math.min(
        ITEMS.length - 1,
        Math.max(0, Math.round(-x.get() / step))
      );
      const nextIndex = currentIndex >= ITEMS.length - 1 ? 0 : currentIndex + 1;
      animate(x, -nextIndex * step, { duration: 0.7, ease: "easeInOut" });
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, x, step, ITEMS.length]);

  const goTo = (i: number) => {
    const clamped = Math.min(ITEMS.length - 1, Math.max(0, i));
    animate(x, -clamped * step, { duration: 0.6, ease: "easeInOut" });
  };

  return (
    <section className="overflow-hidden bg-[#fbf7f5]">
      <div className="mx-auto w-full max-w-[1400px] px-6 py-20">
        <FadeUp className="mx-auto flex max-w-xl flex-col items-center gap-3 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">
            Transformations
          </span>
          <span className="h-6 w-px bg-[var(--brand)]/40" />
          <h2 className="font-serif text-3xl tracking-tight text-zinc-900 sm:text-4xl">
            Real Transformations. Real Confidence.
          </h2>
          <p className="text-sm text-zinc-600 sm:text-base">
            Discover the power of premium hair solutions that transform not
            just your look, but your life.
          </p>

          <div className="mt-4 flex items-center gap-2 rounded-full border border-black/10 bg-white p-1">
            {TABS.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                  tab === t
                    ? "bg-[var(--brand)] text-white"
                    : "text-zinc-600 hover:text-[var(--brand)]"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </FadeUp>
      </div>

      <div
        className="relative mx-auto w-full max-w-[1400px] cursor-grab pb-4 active:cursor-grabbing"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <motion.div
          drag="x"
          dragConstraints={{ left: maxOffset, right: 0 }}
          dragElastic={0.08}
          style={{ x }}
          onDragStart={() => {
            draggingRef.current = true;
          }}
          onDragEnd={() => {
            draggingRef.current = false;
            const nearest = Math.min(
              ITEMS.length - 1,
              Math.max(0, Math.round(-x.get() / step))
            );
            animate(x, -nearest * step, { duration: 0.4, ease: "easeOut" });
          }}
          className="flex select-none gap-6 px-6"
        >
          {ITEMS.map((item, i) => (
            <div
              key={i}
              className="flex shrink-0 flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm"
              style={{ width: cardWidth }}
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  draggable={false}
                  loading="eager"
                  sizes="(min-width: 640px) 320px, 260px"
                  className="object-cover"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-[var(--brand)] shadow-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="flex flex-col items-start gap-2 p-5">
                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-zinc-400">
                  {item.group}
                </span>
                <h3 className="font-serif text-xl text-zinc-900">{item.title}</h3>
                <span className="h-px w-8 bg-[var(--brand)]" />
                <p className="text-sm text-zinc-500">{item.tagline}</p>
                <a
                  href="#contact"
                  className="mt-1 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-[var(--brand)] transition-colors hover:text-zinc-900"
                >
                  Explore Now
                  <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => goTo(active - 1)}
            aria-label="Previous transformation"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-zinc-500 transition-colors hover:border-[var(--brand)] hover:text-[var(--brand)]"
          >
            <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
              <path d="m12 5-5 5 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="flex items-center gap-2">
            {ITEMS.map((item, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to transformation ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === active ? "w-6 bg-[var(--brand)]" : "w-1.5 bg-zinc-300"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => goTo(active + 1)}
            aria-label="Next transformation"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-zinc-500 transition-colors hover:border-[var(--brand)] hover:text-[var(--brand)]"
          >
            <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
              <path d="m8 5 5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1400px] px-6 pb-20 pt-4">
        <FadeUp className="grid grid-cols-2 gap-6 rounded-2xl border border-black/5 bg-white px-6 py-6 sm:grid-cols-4">
          {[
            { label: "30+ Years of Expertise", path: "M10 2 3 5v5c0 4.4 3 8.4 7 9.5 4-1.1 7-5.1 7-9.5V5l-7-3Z" },
            { label: "100% Premium Human Hair", path: "M10 2c-3 3-5 6-5 9.5A5 5 0 0 0 10 18a5 5 0 0 0 5-6.5C15 8 13 5 10 2Z" },
            { label: "Trusted by 10,000+ Clients", path: "M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm0 0v16M2 10h16" },
            { label: "Lifetime Care & Support", path: "M10 17.5s-6.5-4-6.5-9A4 4 0 0 1 10 6a4 4 0 0 1 6.5 2.5c0 5-6.5 9-6.5 9Z" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center justify-center gap-3 text-center sm:justify-start">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--brand)]/10 text-[var(--brand)]">
                <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5">
                  <path d={stat.path} stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="text-left text-xs font-semibold uppercase tracking-wide text-zinc-700 sm:text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </FadeUp>
      </div>
    </section>
  );
}
