"use client";

import Image from "next/image";
import { Award, Users, MapPin, HeartHandshake } from "lucide-react";
import FadeUp from "./FadeUp";
import Counter from "./Counter";

const STATS = [
  { value: "30+", label: "Years of Expertise", icon: Award },
  { value: "10,000+", label: "Happy Clients", icon: Users },
  { value: "20+", label: "Studios Worldwide", icon: MapPin },
  { value: "100%", label: "Commitment to You", icon: HeartHandshake },
];

export default function OurStory() {
  return (
    <section id="our-story" className="bg-white py-16 sm:py-20">
      <FadeUp className="mx-auto flex w-full max-w-[1400px] flex-col gap-10 px-6 sm:px-10 lg:flex-row lg:items-center lg:gap-14 lg:px-16">
        {/* Desktop/tablet: image in its own column */}
        <div className="group relative hidden aspect-[4/5] w-full max-w-sm shrink-0 overflow-hidden rounded-2xl bg-zinc-200 lg:mx-0 lg:block">
          <Image
            src="/wigomaniaV2/founder.png"
            alt="Wig O Mania studio"
            fill
            quality={100}
            sizes="24vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          />
        </div>

        <div className="flex flex-1 flex-col items-center gap-8 text-center lg:items-start lg:text-left">
          <div className="flex flex-col items-center gap-2 lg:items-start">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--brand)]">
              Studio Tour
            </span>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl tracking-tight text-black sm:text-5xl">
              Glimpse of Wig-O-Mania Hair Studios
            </h2>
          </div>

          {/* Mobile: image appears right after the title */}
          <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-zinc-200 lg:hidden">
            <Image
              src="/wigomaniaV2/founder.png"
              alt="Wig O Mania studio"
              fill
              quality={100}
              sizes="90vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-sm leading-relaxed text-black sm:text-base">
              Wig-O-Mania Hair Studios offer a private, comfortable, and expert-led space for
              people seeking human hair wigs, cancer wigs, hair toppers, hair extensions, and
              men&apos;s hair replacement solutions. With studios in Chennai, Hyderabad &amp;
              Coimbatore, we provide one-on-one consultations, a calm environment, and a
              respectful try-before-you-buy experience &ndash; allowing you to explore the right
              solution without pressure.
            </p>
            <p className="text-sm leading-relaxed text-black sm:text-base">
              Our studios are designed to support individuals experiencing medical hair loss,
              thinning hair, or complete hair loss, with a strong focus on comfort, privacy, and
              confidence at every step.
            </p>
          </div>

          <div className="grid w-full grid-cols-2 gap-x-6 gap-y-8 sm:flex sm:flex-wrap sm:justify-between">
            {STATS.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="flex flex-col items-center gap-1.5 text-center">
                  <Icon className="h-11 w-11 text-[var(--brand)]" strokeWidth={1.1} />
                  <span className="flex flex-col items-center leading-tight">
                    <span className="text-xl font-medium text-black sm:text-2xl">
                      <Counter value={stat.value} />
                    </span>
                    <span className="text-xs text-black/60">{stat.label}</span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
