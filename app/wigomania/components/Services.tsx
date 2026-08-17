"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, animate } from "framer-motion";
import FadeUp from "./FadeUp";

const CARDS = [
  {
    title: "Women's Hair Solutions",
    description: "Wigs, toppers & bespoke solutions for women.",
    image: "https://www.wigomania.com/public/uploads/bannerimages/ladieswig.webp",
    icon: "M10 2c-3 3-5 6-5 9.5A5 5 0 0 0 10 18a5 5 0 0 0 5-6.5C15 8 13 5 10 2Z",
  },
  {
    title: "Men's Hair Systems",
    description: "Natural looking hair systems designed for men.",
    image: "https://www.wigomania.com/public/assets/rest/17260560011673517964slide-img-4.webp",
    icon: "M10 2a4 4 0 0 0-4 4v2a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4Zm-3 9.5C4.5 12.5 3 14.5 3 17v1h14v-1c0-2.5-1.5-4.5-4-5.5",
  },
  {
    title: "Hair Extensions",
    description: "Length, volume and style that blends beautifully.",
    image: "https://www.wigomania.com/public/assets/rest/17260560921681805521hairextensions.webp",
    icon: "M6 3c2 3 2 5 0 8m4-8c2 3 2 5 0 8m4-8c2 3 2 5 0 8M5 15h10",
  },
  {
    title: "Hair Toppers",
    description: "Volume and coverage where you need it most.",
    image: "https://www.wigomania.com/public/uploads/bannerimages/topper.webp",
    icon: "M4 12c0-4.4 2.7-8 6-8s6 3.6 6 8c-2 1-4 1.5-6 1.5S6 13 4 12Z",
  },
  {
    title: "Cancer Care Wigs",
    description: "Soft, gentle wigs designed with extra care for sensitive scalps.",
    image: "https://www.wigomania.com/public/uploads/bannerimages/cancerwig.webp",
    icon: "M10 18s-6.5-4-6.5-9A4 4 0 0 1 10 6a4 4 0 0 1 6.5 3c0 5-6.5 9-6.5 9Z",
  },
];

const GAP = 24;
const AUTOPLAY_MS = 3200;

export default function Services() {
  const x = useMotionValue(0);
  const [paused, setPaused] = useState(false);
  const [cardWidth, setCardWidth] = useState(320);
  const [active, setActive] = useState(0);
  const draggingRef = useRef(false);

  useEffect(() => {
    const updateWidth = () => {
      setCardWidth(window.innerWidth < 640 ? 240 : 320);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const step = cardWidth + GAP;
  const maxOffset = -(CARDS.length - 1) * step;

  useEffect(() => {
    const unsub = x.on("change", (latest) => {
      setActive(Math.min(CARDS.length - 1, Math.max(0, Math.round(-latest / step))));
    });
    return unsub;
  }, [x, step]);

  useEffect(() => {
    if (paused) return;

    const id = setInterval(() => {
      if (draggingRef.current) return;
      const currentIndex = Math.min(
        CARDS.length - 1,
        Math.max(0, Math.round(-x.get() / step))
      );

      // At the last card, slide all the way back to the start instead of looping.
      const nextIndex = currentIndex >= CARDS.length - 1 ? 0 : currentIndex + 1;

      animate(x, -nextIndex * step, { duration: 0.7, ease: "easeInOut" });
    }, AUTOPLAY_MS);

    return () => clearInterval(id);
  }, [paused, x, step]);

  const goTo = (i: number) => {
    animate(x, -i * step, { duration: 0.6, ease: "easeInOut" });
  };

  return (
    <section id="services" className="overflow-hidden bg-[#fbf7f5]">
      <div className="mx-auto w-full max-w-[1400px] px-6 py-20">
        <FadeUp className="mx-auto flex max-w-xl flex-col items-center gap-3 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">
            Our Solutions
          </span>
          <span className="h-6 w-px bg-[var(--brand)]/40" />
          <h2 className="font-serif text-4xl tracking-tight text-zinc-900 sm:text-5xl">
            Solutions for Every You
          </h2>
          <p className="text-base text-zinc-600">
            Expertly crafted hair solutions to enhance your natural beauty and
            confidence.
          </p>
          <span className="mt-1 flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-zinc-400">
            <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
              <path d="M13 5 6 10l7 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Drag to explore
            <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
              <path d="m7 5 7 5-7 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </FadeUp>
      </div>

      <div
        className="relative mx-auto w-full max-w-[1400px] cursor-grab pb-6 active:cursor-grabbing"
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
              CARDS.length - 1,
              Math.max(0, Math.round(-x.get() / step))
            );
            animate(x, -nearest * step, { duration: 0.4, ease: "easeOut" });
          }}
          className="flex select-none gap-6 px-6"
        >
          {CARDS.map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="group relative h-[420px] shrink-0 overflow-hidden rounded-3xl shadow-md sm:h-[480px]"
              style={{ width: cardWidth }}
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                draggable={false}
                loading="eager"
                sizes="(min-width: 640px) 320px, 240px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0 transition-colors duration-300 group-hover:from-[var(--brand)]/60" />

              <div className="absolute inset-x-3 bottom-3 rounded-2xl bg-white/95 p-6 pt-9 text-center shadow-lg backdrop-blur-sm">
                <span className="absolute -top-7 left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full bg-white text-[var(--brand)] shadow-md transition-colors duration-300 group-hover:bg-[var(--brand)] group-hover:text-white">
                  <svg viewBox="0 0 20 20" fill="none" className="h-6 w-6">
                    <path d={card.icon} stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>

                <h3 className="font-serif text-xl text-zinc-900">
                  {card.title}
                </h3>
                <span className="mx-auto mt-2 block h-px w-8 bg-[var(--brand)]" />
                <p className="mt-3 text-sm text-zinc-500">
                  {card.description}
                </p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-[var(--brand)] transition-colors hover:text-zinc-900"
                >
                  Explore
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {CARDS.map((card, i) => (
            <button
              key={card.title}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to ${card.title}`}
              className={`h-1.5 rounded-full transition-all ${
                i === active ? "w-6 bg-[var(--brand)]" : "w-1.5 bg-zinc-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
