"use client";

import Image from "next/image";
import { Quote, Star, User } from "lucide-react";
import FadeUp from "./FadeUp";

const REVIEWS = [
  {
    category: "Women's Wigs",
    image: "/wigomaniaV2/chemo-wigs.png",
    quote:
      "The quality of the wig is incredible and looks so natural. It has given me my confidence back. The team was so patient and supportive throughout.",
    name: "Neha S.",
    city: "Mumbai",
  },
  {
    category: "Men's Toupee",
    image: "/wigomaniaV2/mens-hair-systems.png",
    quote:
      "My toupee looks completely natural. No one can tell it's not my real hair! Excellent service and perfect fit. Truly life changing.",
    name: "Arvind R.",
    city: "Chennai",
  },
  {
    category: "Hair Extensions",
    image: "/wigomaniaV2/luscious-locks-extensions.png",
    quote:
      "The hair extensions blend so well with my natural hair. They feel so light and comfortable. Absolutely love the length and volume!",
    name: "Pooja M.",
    city: "Bengaluru",
  },
  {
    category: "Hair Toppers",
    image: "/wigomaniaV2/hair-toppers.png",
    quote:
      "The hair topper is a game changer for me. It covers perfectly and looks so natural. Thank you for giving me my confidence back!",
    name: "Sunita K.",
    city: "Hyderabad",
  },
];

function GoogleWordmark() {
  return (
    <span className="text-sm font-semibold">
      <span className="text-[#4285F4]">G</span>
      <span className="text-[#EA4335]">o</span>
      <span className="text-[#FBBC05]">o</span>
      <span className="text-[#4285F4]">g</span>
      <span className="text-[#34A853]">l</span>
      <span className="text-[#EA4335]">e</span>
    </span>
  );
}

export default function Reviews() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <FadeUp className="mx-auto flex w-full max-w-[1400px] flex-col items-center gap-3 px-6 text-center">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--brand)]">
          Client Stories
        </span>
        <h2 className="font-[family-name:var(--font-cormorant)] text-4xl tracking-tight text-black sm:text-5xl">
          Real People. Real Stories. Real Confidence.
        </h2>
        <p className="max-w-md text-sm text-black sm:text-base">
          Hear from our amazing clients who found their confidence with Wig O Mania.
        </p>
      </FadeUp>

      <FadeUp>
        <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-2 sm:mt-14 lg:mx-auto lg:max-w-[1400px] lg:grid lg:snap-none lg:grid-cols-4 lg:gap-6 lg:overflow-visible lg:px-16 lg:pb-0">
          {REVIEWS.map((review) => (
            <div
              key={review.name}
              className="group flex w-[78vw] max-w-[300px] shrink-0 snap-center flex-col overflow-hidden rounded-2xl border border-black/10 bg-white lg:w-auto lg:max-w-none"
            >
              <div className="flex items-center gap-2.5 px-4 pt-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--brand)]/10 text-[var(--brand)]">
                  <User className="h-4 w-4" strokeWidth={1.75} />
                </span>
                <span className="text-xs font-bold uppercase tracking-[0.1em] text-black">
                  {review.category}
                </span>
              </div>

              <div className="relative mx-4 mt-3 aspect-[4/3] overflow-hidden rounded-xl bg-zinc-200">
                <Image
                  src={review.image}
                  alt={`${review.name} — ${review.category}`}
                  fill
                  quality={100}
                  sizes="(min-width: 1024px) 22vw, 78vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </div>

              <div className="flex flex-1 flex-col gap-3 p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Quote className="h-5 w-5 text-[var(--brand)]" strokeWidth={2} />
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-[var(--brand)] text-[var(--brand)]" />
                      ))}
                    </div>
                  </div>
                  <GoogleWordmark />
                </div>

                <p className="flex-1 text-sm leading-relaxed text-black">&ldquo;{review.quote}&rdquo;</p>

                <div className="flex flex-col leading-tight">
                  <span className="text-sm font-bold text-black">— {review.name}</span>
                  <span className="text-xs text-black/60">{review.city}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </FadeUp>
    </section>
  );
}
