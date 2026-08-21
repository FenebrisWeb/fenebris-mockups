"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, animate, useDragControls } from "framer-motion";
import { Users, Award, Sparkles, Heart } from "lucide-react";
import FadeUp from "./FadeUp";
import BeforeAfterSlider from "./BeforeAfterSlider";

// 4 categories, 4 photos — one before/after slide per category. Both sides currently
// reuse the same solution photo as a placeholder until distinct before/after shots
// (bald→wig, scanty→full, short→long, patch before→after) are supplied.
const SLIDES = [
  {
    key: "wig",
    title: "Wig",
    tagline: "Bald and with wig.",
    image: "/wigomaniaV2/chemo-wigs.png",
  },
  {
    key: "topper",
    title: "Topper",
    tagline: "Scanty and full hair head.",
    image: "/wigomaniaV2/hair-toppers.png",
  },
  {
    key: "extn",
    title: "Hair Extensions",
    tagline: "Short hair and long hair.",
    image: "/wigomaniaV2/luscious-locks-extensions.png",
  },
  {
    key: "hair-patch",
    title: "Hair Patch",
    tagline: "Before and after.",
    image: "/wigomaniaV2/mens-hair-systems.png",
  },
].map((s) => ({ ...s, before: s.image, after: s.image }));

const STATS = [
  { value: "10,000+", label: "Happy Clients", icon: Users },
  { value: "30+", label: "Years of Expertise", icon: Award },
  { value: "100%", label: "Premium Human Hair", icon: Sparkles },
  { value: "Lifetime", label: "Care & Support", icon: Heart },
];

const GAP = 20;

export default function Transformations() {
  const x = useMotionValue(0);
  const dragControls = useDragControls();
  const viewportRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(280);
  const [maxOffset, setMaxOffset] = useState(0);
  const [active, setActive] = useState(0);
  // Only 4 cards — on desktop they all fit in one static row, so the drag/slide
  // interaction (and its dots) is mobile/tablet only.
  const [dragEnabled, setDragEnabled] = useState(true);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      const isDesktop = w >= 1024;
      setDragEnabled(!isDesktop);

      const width = w < 640 ? w * 0.7 : isDesktop ? 300 : w * 0.38;
      setCardWidth(width);

      const totalWidth = SLIDES.length * width + (SLIDES.length - 1) * GAP;
      const viewportWidth = viewportRef.current?.clientWidth ?? 0;
      // Hard bound: can't drag past the point where the last card's right edge
      // meets the viewport's right edge — no trailing blank space.
      setMaxOffset(isDesktop ? 0 : -Math.max(0, totalWidth - viewportWidth));
      if (isDesktop) x.set(0);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [x]);

  const step = cardWidth + GAP;

  useEffect(() => {
    const unsub = x.on("change", (latest) => {
      setActive(Math.min(SLIDES.length - 1, Math.max(0, Math.round(-latest / step))));
    });
    return unsub;
  }, [x, step]);

  const clampX = (value: number) => Math.min(0, Math.max(maxOffset, value));

  const goTo = (i: number) => {
    const clamped = Math.min(SLIDES.length - 1, Math.max(0, i));
    animate(x, clampX(-clamped * step), { type: "spring", stiffness: 300, damping: 32 });
  };

  const startDrag = (e: React.PointerEvent) => {
    // Let drags that start on a before/after slider's own handle control that slider
    // instead of dragging the row.
    if ((e.target as HTMLElement).closest("[data-drag-lock]")) return;
    dragControls.start(e);
  };

  return (
    <section className="overflow-hidden bg-[#fbf7f4] py-16 sm:py-20">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-10 px-6 sm:px-10 lg:px-16">
        {/* Header: copy, CTA, stats */}
        <FadeUp className="flex flex-col items-center gap-6 text-center lg:flex-row lg:items-start lg:justify-between lg:gap-10 lg:text-left">
          <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--brand)]">
              Transformations
            </span>

            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl leading-[1.1] tracking-tight text-black sm:text-5xl">
              Real Transformations.
              <br />
              Real Confidence.
            </h2>

            <p className="max-w-sm text-sm text-black sm:text-base">
              Every transformation is unique. Every story is real. Be inspired.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 lg:items-end">
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 rounded-2xl border border-black/10 bg-white px-6 py-5 sm:flex sm:flex-wrap">
              {STATS.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="flex items-center gap-2.5">
                    <Icon className="h-6 w-6 shrink-0 text-black" strokeWidth={1.25} />
                    <span className="flex flex-col whitespace-nowrap text-left leading-tight">
                      <span className="text-sm font-bold text-black">{stat.value}</span>
                      <span className="text-xs text-black">{stat.label}</span>
                    </span>
                  </div>
                );
              })}
            </div>

            <a
              href="#appointment"
              className="inline-flex h-12 w-fit items-center justify-center gap-2 rounded-md bg-black px-7 text-xs font-bold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--brand)] hover:shadow-md"
            >
              Book Your Transformation
              <span aria-hidden>→</span>
            </a>
          </div>
        </FadeUp>

        {/* Before/after slider strip — framer-motion drag, hard-stops at the last card */}
        <FadeUp>
          <div ref={viewportRef} className="relative w-full overflow-hidden pb-2">
            <motion.div
              drag={dragEnabled ? "x" : false}
              dragControls={dragControls}
              dragListener={false}
              dragConstraints={{ left: maxOffset, right: 0 }}
              dragElastic={0}
              dragMomentum={false}
              style={{ x }}
              onPointerDown={dragEnabled ? startDrag : undefined}
              onDragEnd={() => {
                const nearest = Math.min(SLIDES.length - 1, Math.max(0, Math.round(-x.get() / step)));
                animate(x, clampX(-nearest * step), { type: "spring", stiffness: 300, damping: 32 });
              }}
              className={`flex select-none gap-5 lg:justify-between ${dragEnabled ? "cursor-grab active:cursor-grabbing" : ""}`}
            >
              {SLIDES.map((slide) => (
                <div
                  key={slide.key}
                  className="flex shrink-0 flex-col gap-3"
                  style={{ width: cardWidth }}
                >
                  <BeforeAfterSlider before={slide.before} after={slide.after} alt={slide.title} />
                  <div className="flex flex-col gap-0.5">
                    <h3 className="text-sm font-bold uppercase tracking-[0.08em] text-black">
                      {slide.title}
                    </h3>
                    <p className="text-xs text-black/60">{slide.tagline}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="mt-3 flex items-center justify-center gap-2 lg:hidden">
            {SLIDES.map((slide, i) => (
              <button
                key={slide.key}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to ${slide.title} transformation`}
                className={`h-1.5 rounded-full transition-all ${
                  i === active ? "w-6 bg-[var(--brand)]" : "w-1.5 bg-black/20"
                }`}
              />
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
