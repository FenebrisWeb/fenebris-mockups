import { Leaf } from "lucide-react";
import FadeUp from "./FadeUp";

export default function TrustSection() {
  return (
    <section className="bg-white py-10 sm:py-16">
      <div className="mx-auto w-full max-w-[1400px] px-6">
        <div className="relative flex items-center">
          <div className="relative z-10 hidden shrink-0 items-center justify-center sm:flex sm:w-40 lg:w-56">
            <Leaf
              className="h-32 w-32 -rotate-12 text-[var(--brand)] drop-shadow-lg lg:h-44 lg:w-44"
              strokeWidth={1.1}
              fill="var(--brand)"
              fillOpacity={0.15}
            />
          </div>

          <FadeUp className="relative -ml-0 flex-1 overflow-hidden rounded-2xl bg-[var(--brand)] px-8 py-10 text-white shadow-lg sm:-ml-16 sm:py-12 lg:-ml-24 lg:px-16">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:18px_18px]"
            />
            <div className="relative flex flex-col gap-4">
              <h2 className="font-serif text-2xl leading-snug tracking-tight sm:text-3xl lg:text-4xl">
                Why We Are the Most Trusted Spices Brand of India?
              </h2>
              <p className="text-base font-semibold text-white/90 sm:text-lg">
                The promise of purity, in every single pack.
              </p>
              <p className="max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
                We are single-origin sourced and lab-tested at every step, so
                every pack of Unitattva reaches you the way it should, pure,
                aromatic, and free of fillers or artificial colors. Wholeheartedly
                invested in quality over quantity, our FSSAI-certified
                facilities and eco-friendly packaging ensure you get real
                flavor, not shortcuts.
              </p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
