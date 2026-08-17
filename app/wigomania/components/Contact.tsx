import PatternOverlay from "./PatternOverlay";
import FadeUp from "./FadeUp";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-6 py-20">
      <FadeUp className="mx-auto flex max-w-xl flex-col items-center gap-3 text-center">
        <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
          Contact
        </span>
        <h2 className="text-3xl font-semibold tracking-tight">
          Let&apos;s talk
        </h2>
        <p className="text-base text-zinc-600 dark:text-zinc-400">
          Placeholder contact section for Wigomania. Wire this up to the
          client&apos;s real form or contact details later.
        </p>
      </FadeUp>

      <FadeUp delay={0.1} className="mx-auto mt-10 w-full max-w-xl">
        <form className="flex w-full flex-col gap-4">
          <input
            type="text"
            placeholder="Your name"
            className="w-full rounded-full border border-black/10 bg-white px-5 py-3 text-sm outline-none focus:border-[var(--brand)]/50 dark:border-white/15 dark:bg-white/[.04]"
          />
          <input
            type="email"
            placeholder="Your email"
            className="w-full rounded-full border border-black/10 bg-white px-5 py-3 text-sm outline-none focus:border-[var(--brand)]/50 dark:border-white/15 dark:bg-white/[.04]"
          />
          <textarea
            placeholder="Your message"
            rows={4}
            className="w-full rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm outline-none focus:border-[var(--brand)]/50 dark:border-white/15 dark:bg-white/[.04]"
          />
          <button
            type="submit"
            className="relative flex h-12 items-center justify-center overflow-hidden rounded-full bg-[var(--brand)] px-8 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            <PatternOverlay />
            <span className="relative">Send Message</span>
          </button>
        </form>
      </FadeUp>
    </section>
  );
}
