"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, animate } from "framer-motion";
import FadeUp from "./FadeUp";

const ITEMS = [
  {
    title: "Hair Extension / Remy Hair Extension / Permanent Hair Extension Clip & Go",
    description:
      "Wig-O-Mania has wide range of hair extension which gives you instant length, colour and texture. There are many different types of hair extensions available, the most popular types being clip in hair extensions, fusion skin weft hair extensions, keratin nail tip extensions and micro loop hair extension.",
    image: "https://www.wigomania.com/public/uploads/service/1770198039_698314177bb18.webp",
  },
  {
    title: "Hair Wigs for Women & Alopecia",
    description:
      "Our Wigs are an Instant solution for ladies who suffer from complete hair loss due to medical reasons such as Cancer, Chemo and Alopecia. A wig not only gives you original look but also makes her feel comfortable wearing it. Our products are an instant fix without risk of itch or allergy. Our wigs are cap type hence easy to wear and remove. our products are easy to wear and simple to maintain.",
    image: "https://www.wigomania.com/public/uploads/service/1772604207_69a7cb2f202cd.webp",
  },
  {
    title: "Closure and Toppers for Women",
    description:
      "Ladies suffering from scanty hair, balding patches due to Alopecia and other medical and non-medical reasons need a CLOSURE or TOPPER. It is perfect for covering hair thinning and adding volume. Wig-O-Mania provide 100% Premium human hair toppers, Lace Front Closure, ladies toupee. It look natural & are easy to wear.",
    image: "https://www.wigomania.com/public/uploads/service/1767434906_6958ea9ae4da3.webp",
  },
  {
    title: "Cancer Wigs for Women",
    description:
      "Hair loss during cancer treatment can be one of the most emotional experiences a woman faces. At Wig-O-Mania Chennai, we understand that hair is deeply tied to identity, self-esteem, and strength. That's why we specialize in premium wigs for women cancer patients, offering compassionate care, natural-looking wigs, and personalized solutions to help you regain your confidence during recovery.",
    image: "https://www.wigomania.com/public/uploads/service/1772604232_69a7cb48b2041.webp",
  },
  {
    title: "Mens Hair System - Toupee / Patches & Non Surgical Hair Replacement",
    description:
      "These are Hair Systems specially designed for men who suffer from bald scalp, receding hairline and scanty hair. Wig-O-Mania Wigs for men are made of Natural Human Hair and also in Japanese High Heat Fibre. Wig-O-Mania offers Hair Systems called Toupee. Our technique for putting on one's head is different from the commonly used technique by others.",
    image: "https://www.wigomania.com/public/uploads/service/1770198261_698314f5ad1b3.webp",
  },
  {
    title: "Hair Wigs for Men",
    description:
      "Expertly crafted men's wigs and hair patches that deliver a natural-looking hairline and lifelike scalp appearance. Made with breathable, lightweight materials, they ensure all-day comfort and simple maintenance. Designed for durability and a seamless blend with your existing hair, they offer a secure fit, long-lasting performance, and a confident, natural look in any setting.",
    image: "https://www.wigomania.com/public/uploads/service/1770198314_6983152a13a95.webp",
  },
];

const GAP = 32;
const AUTOPLAY_MS = 4500;

export default function Forte() {
  const x = useMotionValue(0);
  const [paused, setPaused] = useState(false);
  const [cardWidth, setCardWidth] = useState(1100);
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const draggingRef = useRef(false);

  useEffect(() => {
    const updateWidth = () => {
      const w = window.innerWidth;
      setCardWidth(Math.min(w - 48, 1100));
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const step = cardWidth + GAP;
  const maxOffset = -(ITEMS.length - 1) * step;

  useEffect(() => {
    const unsub = x.on("change", (latest) => {
      setActive(Math.min(ITEMS.length - 1, Math.max(0, Math.round(-latest / step))));
    });
    return unsub;
  }, [x, step]);

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
  }, [paused, x, step]);

  const goTo = (i: number) => {
    animate(x, -i * step, { duration: 0.6, ease: "easeInOut" });
  };

  return (
    <section id="our-forte" className="overflow-hidden bg-[#fbf7f5]">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <FadeUp className="mx-auto flex max-w-5xl flex-col items-center gap-3 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">
            Our Forte
          </span>
          <span className="h-6 w-px bg-[var(--brand)]/40" />
          <p className="whitespace-nowrap text-sm font-medium uppercase tracking-wide text-zinc-500">
            Wig Shop in Chennai &amp; Hyderabad, Wig-O-Mania
          </p>
          <h2 className="whitespace-nowrap font-serif text-2xl tracking-tight text-zinc-900 sm:text-3xl">
            Human Hair Wigs, Hair Toppers &amp; Hair Patch Solutions
          </h2>
          <p className="whitespace-nowrap font-serif text-3xl tracking-tight text-[var(--brand)] sm:text-4xl">
            Wig-O-Mania, One Stop UK Brand Hair Studio in India
          </p>

          <div className="max-w-2xl">
            <p
              className={`text-sm leading-relaxed text-zinc-600 sm:text-base ${
                expanded ? "" : "line-clamp-3"
              }`}
            >
              WIG-O-MANIA Brand of Hair Products is a UK based company since
              2006. Wig-O-Mania provide a wide variety of Wigs, Hair Patches,
              Toppers for women, Closures, Hair Extensions and Non-Surgical
              Hair Replacement for men in Chennai &amp; Hyderabad. Being a
              client-centric firm, we ensure that our solutions satisfy the
              requirements of clients. Some of our major services include:
              Hair Wigs, Wigs for men, Wigs for women, Hair Fixing like Hair
              Bonding, Hair Weaving and Clip-in Hair systems, Hair Extensions
              for Men and Women, Hair Toppers for women, Wigs including
              chemotherapy wigs. Be it for Fashion or Necessity wearers, we
              cater to all. Our products are made of the finest quality of
              either Remy human hair or Japanese high heat fiber, hence
              affordable to one and all. Our quality befits European
              standards.
            </p>
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="mt-2 text-sm font-semibold text-[var(--brand)] transition-colors hover:text-zinc-900"
            >
              {expanded ? "Read Less" : "Read More"}
            </button>
          </div>
        </FadeUp>
      </div>

      <div
        className="relative mx-auto w-full max-w-[1400px] cursor-grab pb-8 active:cursor-grabbing"
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
          className="flex select-none gap-8 px-6"
        >
          {ITEMS.map((item, i) => (
            <div
              key={i}
              className="grid min-h-[420px] shrink-0 grid-cols-1 overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm sm:grid-cols-2 sm:min-h-[480px]"
              style={{ width: cardWidth }}
            >
              <div className="relative h-64 w-full sm:h-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  draggable={false}
                  loading="eager"
                  sizes="(min-width: 640px) 560px, 90vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col items-start justify-center gap-5 p-8 sm:p-14">
                <h3 className="font-serif text-2xl uppercase leading-snug tracking-tight text-[var(--brand)] sm:text-3xl">
                  {item.title}
                </h3>
                <span className="h-1 w-20 rounded-full bg-[var(--brand)]" />
                <p className="max-w-md text-base leading-relaxed text-zinc-600">
                  {item.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-4">
                  <a
                    href="#contact"
                    className="flex h-[52px] items-center justify-center rounded-full bg-[var(--brand)] px-8 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
                  >
                    View Details
                    <span aria-hidden className="ml-2">→</span>
                  </a>
                  <a
                    href="#appointment"
                    className="flex h-[52px] items-center justify-center rounded-full border-2 border-[var(--brand)]/40 px-8 text-sm font-semibold text-[var(--brand)] transition-colors hover:bg-[var(--brand)]/10"
                  >
                    Book Free Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {ITEMS.map((item, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to ${item.title}`}
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
