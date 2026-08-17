export default function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="grid gap-10 sm:grid-cols-2 sm:items-center">
        <div className="aspect-video w-full rounded-2xl border border-black/10 bg-black/[.03] dark:border-white/10 dark:bg-white/[.04]" />
        <div className="flex flex-col gap-4">
          <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
            About Us
          </span>
          <h2 className="text-3xl font-semibold tracking-tight">
            Who we are
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-400">
            Placeholder about section for Wigomania. Swap this with the
            client&apos;s real story, mission, and background once available.
          </p>
        </div>
      </div>
    </section>
  );
}
