"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import PatternOverlay from "./PatternOverlay";

const SLIDES = [
  {
    label: "Men's Wig",
    eyebrow: "Premium Hair Solutions for Men",
    heading: ["Confidence", "Redefined"],
    copy: "Natural-looking men's wigs and hair patches, crafted for a seamless, undetectable finish.",
    image: "https://www.wigomania.com/public/assets/rest/17260560011673517964slide-img-4.webp",
    alt: "Men's wig",
  },
  {
    label: "Toppers for Women",
    eyebrow: "Toppers for Women",
    heading: ["Fuller", "Effortlessly"],
    copy: "Clip-on and semi-permanent toppers built to cover thinning at the crown, part, or hairline.",
    image: "https://www.wigomania.com/public/uploads/bannerimages/topper.webp",
    alt: "Toppers for women",
  },
  {
    label: "Ladies Wigs",
    eyebrow: "Ladies Wigs",
    heading: ["Elegance", "Reimagined"],
    copy: "Premium human-hair wigs designed to move, fall, and feel exactly like your own.",
    image: "https://www.wigomania.com/public/uploads/bannerimages/ladieswig.webp",
    alt: "Ladies wigs",
  },
  {
    label: "Hair Extensions",
    eyebrow: "Hair Extensions",
    heading: ["Length", "Reinvented"],
    copy: "Clip-in, weft, and micro-loop extensions for instant length, volume, and versatility.",
    image: "https://www.wigomania.com/public/assets/rest/17260560921681805521hairextensions.webp",
    alt: "Hair extensions",
  },
  {
    label: "Cancer Wigs for Women",
    eyebrow: "Cancer Wigs for Women",
    heading: ["Strength", "Restored"],
    copy: "Soft, comfortable, natural-looking wigs designed with extra care for sensitive scalps.",
    image: "https://www.wigomania.com/public/uploads/bannerimages/cancerwig.webp",
    alt: "Cancer wigs for women",
  },
];

const STATS = [
  {
    value: "20+",
    label: "Years of Expertise",
    path: "M10 2 3 5v5c0 4.4 3 8.4 7 9.5 4-1.1 7-5.1 7-9.5V5l-7-3Z",
  },
  {
    value: "100%",
    label: "Premium Human Hair",
    path: "M10 2c-3 3-5 6-5 9.5A5 5 0 0 0 10 18a5 5 0 0 0 5-6.5C15 8 13 5 10 2Z",
  },
  {
    value: "Personalized",
    label: "Private Consultation",
    path: "M10 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm0 1.5c-3 0-7 1.5-7 4.5v1h14v-1c0-3-4-4.5-7-4.5Z",
  },
  {
    value: "Worldwide",
    label: "Shipping",
    path: "M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm0 0v16M2 10h16M4 5.5c1.8 1.3 4 2 6 2s4.2-.7 6-2M4 14.5c1.8-1.3 4-2 6-2s4.2.7 6 2",
  },
  {
    value: "Custom Made",
    label: "For You",
    path: "m10 2 2 4 4.4.6-3.2 3.1.8 4.4L10 12l-3.9 2.1.8-4.4-3.2-3.1L8.1 6 10 2Z",
  },
  {
    value: "Lifetime",
    label: "Service Support",
    path: "M6 9V6.5a4 4 0 1 1 8 0V9m-9 0h10a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7a1 1 0 0 1 1-1Z",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length);
    }, 5500);
    return () => clearInterval(id);
  }, []);

  const slide = SLIDES[active];

  return (
    <section className="bg-[#fbf7f5] dark:bg-zinc-950">
      <div className="relative grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-0">
        <div
          className="relative z-10 flex flex-col items-start justify-center gap-6 px-6 py-16 sm:px-10 sm:py-20 lg:py-24"
          style={{
            paddingLeft: "max(1.5rem, calc((100vw - 1400px) / 2 + 1.5rem))",
            paddingRight: "3rem",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col items-start gap-5 text-left"
            >
              <span className="relative overflow-hidden rounded-full bg-[var(--brand)] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-sm">
                <PatternOverlay />
                <span className="relative">{slide.eyebrow}</span>
              </span>

              <h1 className="font-serif text-5xl leading-[1.05] tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl dark:text-white">
                {slide.heading[0]}
                <span className="text-[var(--brand)]">.</span>
                <br />
                {slide.heading[1]}
                <span className="text-[var(--brand)]">.</span>
              </h1>

              <span className="h-1 w-16 rounded-full bg-[var(--brand)]" />

              <p className="max-w-md text-base text-zinc-600 dark:text-zinc-400">
                {slide.copy}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-2 flex flex-col gap-4 sm:flex-row">
            <a
              href="#appointment"
              className="relative flex h-12 items-center justify-center gap-2 overflow-hidden rounded-md bg-[var(--brand)] px-7 text-sm font-semibold uppercase tracking-wide text-white transition-opacity hover:opacity-90"
            >
              <PatternOverlay />
              <span className="relative">Book Consultation</span>
              <span aria-hidden className="relative">→</span>
            </a>
            <a
              href="#services"
              className="flex h-12 items-center justify-center gap-2 rounded-md border border-zinc-300 px-7 text-sm font-semibold uppercase tracking-wide text-zinc-800 transition-colors hover:border-[var(--brand)] hover:text-[var(--brand)] dark:border-white/20 dark:text-zinc-200"
            >
              Explore Collections
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        <div className="relative aspect-[16/10] w-full overflow-hidden sm:aspect-[16/9] lg:aspect-auto lg:h-full lg:min-h-[520px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={active === 0}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>

          <motion.div
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.15}
            onDragEnd={(_, info) => {
              if (info.offset.y < -40) {
                setActive((i) => (i + 1) % SLIDES.length);
              } else if (info.offset.y > 40) {
                setActive((i) => (i - 1 + SLIDES.length) % SLIDES.length);
              }
            }}
            className="absolute bottom-4 right-4 z-10 flex w-44 cursor-grab flex-col overflow-hidden rounded-xl shadow-xl active:cursor-grabbing sm:bottom-6 sm:right-6 sm:w-52"
          >
            {SLIDES.map((s, i) => (
              <button
                key={s.label}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show ${s.label} slide`}
                className={`relative overflow-hidden border-b border-white/20 px-4 py-3 text-left text-xs font-semibold transition-colors last:border-b-0 sm:text-sm ${
                  i === active
                    ? "bg-[var(--brand)] text-white"
                    : "bg-[var(--brand)]/60 text-white/90 hover:bg-[var(--brand)]/80"
                }`}
              >
                {i === active && <PatternOverlay />}
                <span className="relative">{s.label}</span>
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="relative overflow-hidden border-t border-black/5 bg-white dark:border-white/10 dark:bg-black">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(currentColor_1px,transparent_1px)] [background-size:20px_20px]"
        />
        <div className="relative mx-auto grid w-full max-w-[1400px] grid-cols-2 gap-y-10 px-6 py-14 sm:grid-cols-3 lg:grid-cols-6 lg:gap-y-0">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" }}
              className="group flex flex-col items-center gap-3 border-l border-transparent px-2 text-center first:border-l-0 lg:border-black/5 dark:lg:border-white/10"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--brand)]/10 text-[var(--brand)] transition-transform duration-300 group-hover:scale-110 group-hover:bg-[var(--brand)] group-hover:text-white">
                <svg viewBox="0 0 20 20" fill="none" className="h-6 w-6">
                  <path d={stat.path} stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="text-lg font-semibold text-zinc-900 dark:text-white">
                {stat.value}
              </span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
