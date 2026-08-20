"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FadeUp from "./FadeUp";

const CATEGORIES = [
  {
    name: "Chemo Wigs",
    copy: "Soft, comfortable wigs crafted with extra care for sensitive scalps.",
    image: "/wigomaniaV2/chemo-wigs.png",
  },
  {
    name: "Hair Toppers",
    copy: "Volume and coverage exactly where you need it most.",
    image: "/wigomaniaV2/hair-toppers.png",
  },
  {
    name: "Luscious Locks Extensions",
    copy: "Length, volume and style that blends beautifully.",
    image: "/wigomaniaV2/luscious-locks-extensions.png",
  },
  {
    name: "Men's Hair Systems",
    copy: "Natural-looking hair systems designed for men.",
    image: "/wigomaniaV2/mens-hair-systems.png",
  },
];

export default function Solutions() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <FadeUp className="mx-auto flex w-full max-w-[1400px] flex-col items-center gap-3 px-6 text-center">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--brand)]">
          Our Solutions
        </span>
        <h2 className="font-[family-name:var(--font-cormorant)] text-4xl tracking-tight text-black sm:text-5xl">
          Solutions for Every You
        </h2>
        <p className="max-w-md text-sm text-black sm:text-base">
          Discover our expertly crafted hair solutions designed to enhance, transform and empower.
        </p>
      </FadeUp>

      <div className="mt-10 flex snap-x snap-mandatory items-start gap-4 overflow-x-auto px-6 pb-2 sm:mt-14 sm:grid sm:snap-none sm:grid-cols-2 sm:items-start sm:gap-6 sm:overflow-visible sm:px-10 lg:mx-auto lg:max-w-[1400px] lg:grid-cols-4 lg:px-16">
        {CATEGORIES.map((cat, i) => (
          <motion.a
            key={cat.name}
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
            className="group relative w-[78vw] max-w-[320px] shrink-0 snap-center overflow-hidden rounded-xl bg-zinc-200 sm:w-full sm:max-w-none"
            style={{ aspectRatio: "1080 / 1220" }}
          >
            <Image
              src={cat.image}
              alt={cat.name}
              fill
              quality={100}
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 78vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1.5 p-5">
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl leading-tight text-white">
                {cat.name}
              </h3>
              <p className="text-xs leading-relaxed text-white/80">{cat.copy}</p>
              <span className="mt-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[var(--brand)] transition-transform group-hover:translate-x-1">
                Explore
                <span aria-hidden>→</span>
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
