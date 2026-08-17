import { ChevronRight } from "lucide-react";
import FadeUp from "./FadeUp";

const LOCATIONS = ["Chennai", "Hyderabad"];

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path d="M12.6 3H10.4C8.8 3 7.5 4.3 7.5 5.9V8H5.4v2.9h2.1V17h3v-6.1h2.1l.4-2.9H10.5V6.2c0-.5.4-.9.9-.9h1.2V3Z" />
    </svg>
  );
}

export default function Glimpse() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-4xl px-6 py-20">
        <FadeUp className="flex flex-col items-center gap-3 text-center">
          <span className="text-sm font-semibold text-[var(--brand)]">
            Wig-O-Mania Hair Studios Serve Clients Directly
          </span>
          <h2 className="text-2xl font-bold uppercase tracking-tight text-zinc-900 sm:text-3xl">
            A Glimpse of Wig-O-Mania Hair Studios
          </h2>
          <a
            href="#"
            className="flex items-center gap-1.5 text-sm font-semibold text-[var(--brand)] transition-colors hover:text-zinc-900"
          >
            <FacebookIcon className="h-4 w-4" />
            Wigomania Franchise
          </a>
        </FadeUp>

        <FadeUp delay={0.1} className="mt-8 overflow-hidden rounded-2xl shadow-lg">
          <div className="relative aspect-video w-full">
            <iframe
              src="https://www.youtube.com/embed/6fkUmZBAVUw"
              title="A Glimpse of Wig-O-Mania Hair Studios"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </FadeUp>

        <FadeUp delay={0.2} className="mt-8 flex items-center justify-center gap-4">
          {LOCATIONS.map((city) => (
            <a
              key={city}
              href="#clinics"
              className="flex items-center gap-1 rounded-full border-2 border-[var(--brand)] px-6 py-2.5 text-sm font-semibold uppercase tracking-wide text-[var(--brand)] transition-colors hover:bg-[var(--brand)] hover:text-white"
            >
              {city}
              <ChevronRight className="h-4 w-4" strokeWidth={2} />
            </a>
          ))}
        </FadeUp>
      </div>
    </section>
  );
}
