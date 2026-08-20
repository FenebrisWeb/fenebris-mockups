"use client";

import { useRef } from "react";
import { Users, Award, Sparkles, Heart } from "lucide-react";
import FadeUp from "./FadeUp";
import BeforeAfterSlider from "./BeforeAfterSlider";

// The 4 solution photos already used in the Solutions section above.
const SOLUTIONS = [
  { name: "Chemo Wigs", image: "/wigomaniaV2/chemo-wigs.png" },
  { name: "Hair Toppers", image: "/wigomaniaV2/hair-toppers.png" },
  { name: "Luscious Locks Extensions", image: "/wigomaniaV2/luscious-locks-extensions.png" },
  { name: "Men's Hair Systems", image: "/wigomaniaV2/mens-hair-systems.png" },
];

// Repeat across 7 cards, cycling through consecutive solution pairs as before/after.
const SLIDES = Array.from({ length: 7 }, (_, i) => {
  const before = SOLUTIONS[i % SOLUTIONS.length];
  const after = SOLUTIONS[(i + 1) % SOLUTIONS.length];
  return {
    key: `${before.name}-${after.name}-${i}`,
    title: after.name,
    tagline: "Real results. Real confidence.",
    before: before.image,
    after: after.image,
  };
});

const STATS = [
  { value: "10,000+", label: "Happy Clients", icon: Users },
  { value: "30+", label: "Years of Expertise", icon: Award },
  { value: "100%", label: "Premium Human Hair", icon: Sparkles },
  { value: "Lifetime", label: "Care & Support", icon: Heart },
];

export default function Transformations() {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({ dragging: false, startX: 0, scrollLeft: 0 });

  const onPointerDown = (e: React.PointerEvent) => {
    const track = trackRef.current;
    // Let drags that start on a before/after slider control that slider instead of
    // scrolling the row.
    if (!track || (e.target as HTMLElement).closest("[data-drag-lock]")) return;
    dragState.current = { dragging: true, startX: e.clientX, scrollLeft: track.scrollLeft };
    track.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const track = trackRef.current;
    if (!track || !dragState.current.dragging) return;
    track.scrollLeft = dragState.current.scrollLeft - (e.clientX - dragState.current.startX);
  };

  const endDrag = () => {
    dragState.current.dragging = false;
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
              className="inline-flex h-12 w-fit items-center justify-center gap-2 rounded-md bg-black px-7 text-xs font-bold uppercase tracking-[0.12em] text-white transition-opacity hover:opacity-90"
            >
              Book Your Transformation
              <span aria-hidden>→</span>
            </a>
          </div>
        </FadeUp>

        {/* Before/after slider strip — drag with mouse or touch, one card at a time */}
        <div
          ref={trackRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {SLIDES.map((slide, i) => (
            <FadeUp
              key={slide.key}
              delay={i * 0.06}
              className="flex w-[70vw] max-w-[280px] shrink-0 snap-center flex-col gap-3 sm:w-[38vw] sm:max-w-[260px] lg:w-[22vw] lg:max-w-[280px]"
            >
              <BeforeAfterSlider before={slide.before} after={slide.after} alt={slide.title} />
              <div className="flex flex-col gap-0.5">
                <h3 className="text-sm font-bold uppercase tracking-[0.08em] text-black">
                  {slide.title}
                </h3>
                <p className="text-xs text-black/60">{slide.tagline}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
