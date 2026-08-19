import { Sprout, FlaskConical, ShieldCheck } from "lucide-react";
import FadeUp from "./FadeUp";
import TrustBadge from "./TrustBadge";

const TRUST_POINTS = [
  { label: "Single-Origin Sourced", icon: Sprout },
  { label: "Lab-Tested Purity", icon: FlaskConical },
  { label: "FSSAI Certified", icon: ShieldCheck },
];

export default function TrustSection() {
  return (
    <section className="bg-white py-6 sm:py-8">
      <div className="mx-auto w-full max-w-[1400px] px-6">
        <FadeUp className="relative overflow-hidden rounded-3xl bg-[var(--brand)] shadow-xl">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:18px_18px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/5 blur-2xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-20 left-1/3 h-72 w-72 rounded-full bg-black/10 blur-2xl"
          />

          <div className="relative grid grid-cols-1 items-center gap-10 px-6 py-8 sm:px-10 sm:py-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-12 lg:px-16 lg:py-12">
            <div className="flex flex-col items-start gap-4 text-left text-white">
              <span className="rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em]">
                Our Promise
              </span>

              <h2 className="font-serif text-2xl leading-snug tracking-tight sm:text-3xl lg:text-4xl">
                Why We Are the Most Trusted Spices Brand of India?
              </h2>

              <span className="h-1 w-16 rounded-full bg-white/60" />

              <p className="max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
                We are single-origin sourced and lab-tested at every step, so
                every pack of Unitattva reaches you the way it should, pure,
                aromatic, and free of fillers or artificial colors.
                Wholeheartedly invested in quality over quantity, our
                FSSAI-certified facilities and eco-friendly packaging ensure
                you get real flavor, not shortcuts.
              </p>

              <div className="mt-2 flex flex-wrap gap-3">
                {TRUST_POINTS.map((point) => {
                  const Icon = point.icon;
                  return (
                    <span
                      key={point.label}
                      className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold sm:text-sm"
                    >
                      <Icon className="h-4 w-4 shrink-0" strokeWidth={1.75} />
                      {point.label}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="relative hidden items-center justify-center lg:flex">
              <TrustBadge />
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
