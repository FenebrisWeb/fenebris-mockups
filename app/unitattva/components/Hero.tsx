"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BANNERS = [
  { src: "/unitattva/home-banner-01.png", alt: "Unitattva Real Authentic Masale" },
  { src: "/unitattva/home-banner-02.png", alt: "Bringing Authentic Flavours to Your Kitchen" },
  { src: "/unitattva/home-banner-03.png", alt: "Unitattva spice blends" },
];

const AUTOPLAY_MS = 4500;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % BANNERS.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused]);

  const go = (delta: number) => {
    setDirection(delta);
    setIndex((i) => (i + delta + BANNERS.length) % BANNERS.length);
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-zinc-100"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative aspect-[4/3] w-full sm:aspect-[16/7]">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={index}
            custom={direction}
            initial={{ x: direction > 0 ? "100%" : "-100%", opacity: 0.6 }}
            animate={{ x: "0%", opacity: 1 }}
            exit={{ x: direction > 0 ? "-100%" : "100%", opacity: 0.6 }}
            transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) go(1);
              else if (info.offset.x > 60) go(-1);
            }}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
          >
            <Image
              src={BANNERS[index].src}
              alt={BANNERS[index].alt}
              fill
              priority={index === 0}
              draggable={false}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous banner"
          className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-zinc-700 shadow-md backdrop-blur transition-colors hover:bg-white sm:left-5 sm:h-11 sm:w-11"
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={2} />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next banner"
          className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-zinc-700 shadow-md backdrop-blur transition-colors hover:bg-white sm:right-5 sm:h-11 sm:w-11"
        >
          <ChevronRight className="h-5 w-5" strokeWidth={2} />
        </button>

        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 sm:bottom-6">
          {BANNERS.map((banner, i) => (
            <button
              key={banner.src}
              type="button"
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              aria-label={`Show banner ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-white" : "w-1.5 bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
