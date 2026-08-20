"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Award, Wind, User, Globe, Gem, Headset } from "lucide-react";

type Slide = {
  eyebrow: string;
  heading: [string, string];
  copy: string;
  image: string;
  alt: string;
};

const SLIDES: Slide[] = [
  {
    eyebrow: "Premium Hair Solutions",
    heading: ["Confidence.", "Reimagined."],
    copy: "World-class hair solutions crafted for a natural look & a confident you.",
    image: "/wigomaniaV2/banner01-women.png",
    alt: "Woman with premium human-hair styling",
  },
  {
    eyebrow: "Premium Hair Solutions for Men",
    heading: ["Confidence.", "Redefined."],
    copy: "Natural-looking men's wigs and hair patches, crafted for a seamless, undetectable finish.",
    image: "/wigomaniaV2/banner02-men.png",
    alt: "Man with natural-looking hair patch",
  },
  {
    eyebrow: "Premium Hair Extensions",
    heading: ["Length.", "Reinvented."],
    copy: "Clip-in, weft, and micro-loop extensions for instant length, volume, and versatility.",
    image: "/wigomaniaV2/banner03-hair-extension.png",
    alt: "Woman applying clip-in hair extensions",
  },
];

const STATS = [
  { value: "30+", label: "Years of Expertise", icon: Award },
  { value: "100%", label: "Premium Human Hair", icon: Wind },
  { value: "Personalized", label: "Private Consultation", icon: User },
  { value: "Worldwide", label: "Shipping", icon: Globe },
  { value: "Custom Made", label: "For You", icon: Gem },
  { value: "Lifetime", label: "Service Support", icon: Headset },
];

function HeroContent({ slide, active, card }: { slide: Slide; active: number; card?: boolean }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -14 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={
          card
            ? "flex flex-col items-center gap-6 rounded-2xl bg-white px-6 py-8 text-center shadow-xl"
            : "pointer-events-auto flex max-w-xl flex-col items-start gap-6 text-left"
        }
      >
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--brand)]">
          {slide.eyebrow}
        </span>

        <h1 className="font-[family-name:var(--font-cormorant)] text-4xl leading-[1.08] tracking-tight text-black sm:text-6xl lg:text-7xl">
          {slide.heading[0].replace(".", "")}
          <span className="text-[var(--brand)]">.</span>
          <br />
          {slide.heading[1].replace(".", "")}
          <span className="text-[var(--brand)]">.</span>
        </h1>

        <p className="max-w-sm text-sm text-black sm:text-base">{slide.copy}</p>

        <div className={`mt-2 flex flex-col gap-4 sm:flex-row ${card ? "items-center" : "items-stretch"}`}>
          <a
            href="#appointment"
            className="flex h-12 items-center justify-center gap-2 rounded-md bg-[var(--brand)] px-7 text-xs font-bold uppercase tracking-[0.12em] text-white transition-opacity hover:opacity-90"
          >
            Book Consultation
            <span aria-hidden>→</span>
          </a>
          <a
            href="#services"
            className="flex h-12 items-center justify-center gap-2 rounded-md border-2 border-[var(--brand)] px-7 text-xs font-bold uppercase tracking-[0.12em] text-[var(--brand)] transition-colors hover:bg-[var(--brand)] hover:text-white"
          >
            Explore Collections
            <span aria-hidden>→</span>
          </a>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length);
    }, 5500);
    return () => clearInterval(id);
  }, []);

  const goTo = (i: number) => setActive(((i % SLIDES.length) + SLIDES.length) % SLIDES.length);

  const slide = SLIDES[active];

  return (
    <section className="bg-[#fbf7f4] dark:bg-zinc-950">
      <div className="relative sm:overflow-hidden">
        <motion.div
          className="relative aspect-[4/5] w-full cursor-grab touch-pan-y overflow-hidden active:cursor-grabbing sm:aspect-[16/9] lg:aspect-[2.5/1]"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={(_, info) => {
            if (info.offset.x < -60 || info.velocity.x < -400) {
              goTo(active + 1);
            } else if (info.offset.x > 60 || info.velocity.x > 400) {
              goTo(active - 1);
            }
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="pointer-events-none absolute inset-0"
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={active === 0}
                quality={100}
                sizes="100vw"
                draggable={false}
                className="object-cover object-[72%_20%] sm:object-[68%_center] lg:object-center"
              />
            </motion.div>
          </AnimatePresence>

          {/* Desktop/tablet: text overlays the image directly */}
          <div className="pointer-events-none absolute inset-0 z-10 mx-auto hidden w-full max-w-[1400px] items-center px-10 sm:flex lg:px-16">
            <HeroContent slide={slide} active={active} />
          </div>

          <div className="pointer-events-auto absolute top-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 sm:left-auto sm:top-auto sm:bottom-6 sm:right-10 sm:translate-x-0">
            {SLIDES.map((s, i) => (
              <button
                key={s.alt}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Show slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === active ? "w-6 bg-[var(--brand)]" : "w-1.5 bg-white/70"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Mobile: text card straddles the bottom edge of the banner — half on the image, half below it */}
        <div className="relative z-10 -mt-28 px-6 sm:hidden">
          <HeroContent slide={slide} active={active} card />
        </div>
      </div>

      <div className="relative overflow-hidden border-t border-black/5 bg-white">
        <div className="relative mx-auto flex w-full max-w-[1400px] snap-x snap-mandatory items-stretch gap-0 overflow-x-auto px-6 py-6 sm:grid sm:snap-none sm:grid-cols-3 sm:gap-y-8 sm:overflow-visible lg:grid-cols-6 lg:gap-y-0">
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" }}
                className="flex shrink-0 snap-center items-center gap-3 border-l border-black/10 px-5 py-3 first:border-l-0 first:pl-0 sm:shrink lg:py-0"
              >
                <Icon className="h-6 w-6 shrink-0 text-black" strokeWidth={1.25} />
                <span className="flex flex-col whitespace-nowrap leading-tight">
                  <span className="text-sm font-bold text-black">{stat.value}</span>
                  <span className="text-xs text-black">{stat.label}</span>
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
