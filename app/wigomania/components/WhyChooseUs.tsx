import { Award, Sparkles, ShieldCheck, Hand, Globe2, HeartHandshake } from "lucide-react";
import FadeUp from "./FadeUp";

const REASONS = [
  {
    title: "30+ Years of Expertise",
    description: "Decades of experience dedicated to helping you look and feel your best.",
    icon: Award,
  },
  {
    title: "Natural, Beautiful Results",
    description: "Premium quality hair and advanced techniques for a flawless, natural look.",
    icon: Sparkles,
  },
  {
    title: "Private & Personalized",
    description: "Discreet consultations and customized solutions tailored just for you.",
    icon: HeartHandshake,
  },
  {
    title: "100% Human Hair Specialists",
    description: "We use only ethically sourced, premium human hair for unmatched quality.",
    icon: Hand,
  },
  {
    title: "Worldwide Trust",
    description: "Proudly serving clients across the globe with care and commitment.",
    icon: Globe2,
  },
  {
    title: "Lifetime Care & Support",
    description: "We're with you every step of the way, long after your purchase.",
    icon: ShieldCheck,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#fbf7f5]">
      <div className="mx-auto w-full max-w-[1400px] px-6 py-20">
        <FadeUp className="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">
            Why Choose Us
          </span>
          <span className="h-6 w-px bg-[var(--brand)]/40" />
          <h2 className="font-serif text-3xl tracking-tight text-zinc-900 sm:text-4xl">
            Excellence in Every Strand
          </h2>
          <p className="text-sm leading-relaxed text-zinc-600 sm:text-base">
            For over 30 years, we have been at the forefront of premium hair
            solutions, trusted by thousands worldwide.
          </p>
        </FadeUp>

        <div className="mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-2 sm:grid sm:grid-cols-2 sm:snap-none sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3">
          {REASONS.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <FadeUp
                key={reason.title}
                delay={(i % 3) * 0.08}
                className="group flex w-[78vw] max-w-xs shrink-0 snap-center flex-col items-center gap-4 rounded-2xl border border-black/5 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:w-auto sm:max-w-none sm:shrink"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--brand)]/10 text-[var(--brand)] transition-colors duration-300 group-hover:bg-[var(--brand)] group-hover:text-white">
                  <Icon className="h-7 w-7" strokeWidth={1.5} />
                </span>
                <h3 className="text-base font-bold uppercase tracking-wide text-zinc-900">
                  {reason.title}
                </h3>
                <span className="h-px w-8 bg-[var(--brand)]" />
                <p className="text-sm leading-relaxed text-zinc-500">
                  {reason.description}
                </p>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
