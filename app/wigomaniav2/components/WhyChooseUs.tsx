"use client";

import { Globe, ShieldCheck } from "lucide-react";
import FadeUp from "./FadeUp";

function LaurelBadge(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        d="M12.5 6c-2.4 2.6-3.2 6.6-2.3 11.4M11 9.2c-1.6 1.7-2 3.4-1.6 5.1M10.6 14c-1.4 1.3-1.7 2.6-1.4 3.9M11.4 18.4c-1.2 1-1.4 2.1-1.1 3.3"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M19.5 6c2.4 2.6 3.2 6.6 2.3 11.4M21 9.2c1.6 1.7 2 3.4 1.6 5.1M21.4 14c1.4 1.3 1.7 2.6 1.4 3.9M20.6 18.4c1.2 1 1.4 2.1 1.1 3.3"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <text
        x="16"
        y="17.5"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="7.5"
        fontWeight="700"
        fill="currentColor"
      >
        30+
      </text>
    </svg>
  );
}

function NaturalResultsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        d="M15 7c-4.5 1.6-6.8 5.2-6 9 .6 3 2.8 4.6 2.2 8"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M18 7c3.5 2 5 5.5 4 9-.8 2.8-2.8 4.2-2.2 8"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M22 8.2 23 6.5l1 1.7 2 .8-2 .8-1 1.7-1-1.7-2-.8 2-.8Z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PrivateProfileIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        d="M16 7c-3.3 0-6 2.6-6 6 0 2.4 1.2 4.3 3 5.5-2.7.8-5 2.4-5 4.5v1h13.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 13c0-2.3-1.4-4-4-4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <rect x="18.5" y="17.5" width="7" height="6" rx="1.4" stroke="currentColor" strokeWidth="1.4" />
      <path d="M20.2 17.5v-1.3a1.8 1.8 0 0 1 3.6 0v1.3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function HumanHairIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        d="M8 20c1-3.5 4-6 8-6s7 2.5 8 6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M8 20c0 1.6 1.4 2.4 3 2.4M24 20c0 1.6-1.4 2.4-3 2.4M12 22.4c0 1 1 1.6 2 1.6h4c1 0 2-.6 2-1.6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M14.5 12c-1-2 0-4 1.5-4.5-.6 1.6.2 2.7 1.5 3-.4-1.6.4-2.8 1.5-3.2-.3 1.8.6 3 2 3.4"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ITEMS = [
  {
    title: "30+ Years of Expertise",
    copy: "Decades of experience dedicated to helping you look and feel your best.",
    icon: LaurelBadge,
  },
  {
    title: "Natural, Beautiful Results",
    copy: "Premium quality hair and advanced techniques for a flawless, natural look.",
    icon: NaturalResultsIcon,
  },
  {
    title: "Private & Personalized",
    copy: "Discreet consultations and customized solutions tailored just for you.",
    icon: PrivateProfileIcon,
  },
  {
    title: "100% Human Hair Specialists",
    copy: "We use only ethically sourced, premium human hair for unmatched quality.",
    icon: HumanHairIcon,
  },
  {
    title: "Worldwide Trust",
    copy: "Proudly serving clients across the globe with care and commitment.",
    icon: Globe,
  },
  {
    title: "Lifetime Care & Support",
    copy: "We're with you every step of the way, long after your purchase.",
    icon: ShieldCheck,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#fbf7f4] py-16 sm:py-20">
      <FadeUp className="mx-auto flex w-full max-w-[1400px] flex-col items-center gap-3 px-6 text-center">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--brand)]">
          Why Choose Us
        </span>
        <h2 className="font-[family-name:var(--font-cormorant)] text-4xl tracking-tight text-black sm:text-5xl">
          Excellence in Every Strand
        </h2>
        <p className="max-w-lg text-sm text-black sm:text-base">
          For over 30 years, we have been at the forefront of premium hair solutions, trusted by
          thousands worldwide.
        </p>
      </FadeUp>

      <FadeUp>
        {/* Mobile: horizontal drag/swipe strip. sm+: static 3x2 grid with divider lines. */}
        <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 sm:mt-14 sm:grid sm:grid-cols-3 sm:gap-0 sm:overflow-visible sm:px-0 sm:pb-0 lg:mx-auto lg:max-w-[1400px]">
          {ITEMS.map((item, i) => {
            const Icon = item.icon;
            const col = i % 3;
            const row = Math.floor(i / 3);
            const dividers = [
              row !== 0 ? "sm:border-t" : "sm:border-t-0",
              col !== 0 ? "sm:border-l" : "",
            ].join(" ");
            return (
              <div
                key={item.title}
                className={`group flex w-[75vw] max-w-[280px] shrink-0 snap-center flex-col items-center gap-3 rounded-2xl border border-black/5 bg-white px-6 py-8 text-center transition-shadow hover:shadow-lg sm:w-auto sm:max-w-none sm:shrink sm:rounded-none sm:border-0 sm:bg-transparent sm:px-6 sm:py-8 sm:hover:shadow-none ${dividers} border-black/10`}
              >
                <span className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-white p-1.5 text-[var(--brand)] shadow-[0_4px_18px_rgba(180,145,90,0.18)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_8px_24px_rgba(180,145,90,0.3)]">
                  <Icon
                    className="h-full w-full scale-[1.35] transition-transform duration-300 group-hover:scale-[1.5]"
                    strokeWidth={1.1}
                  />
                </span>

                <h3 className="text-sm font-bold uppercase tracking-[0.08em] text-black transition-colors group-hover:text-[var(--brand)]">
                  {item.title}
                </h3>
                <p className="max-w-[240px] text-sm text-black/60">{item.copy}</p>
              </div>
            );
          })}
        </div>
      </FadeUp>
    </section>
  );
}
