const SERVICES = [
  {
    title: "Service One",
    description: "Short placeholder description for the first service offering.",
  },
  {
    title: "Service Two",
    description: "Short placeholder description for the second service offering.",
  },
  {
    title: "Service Three",
    description: "Short placeholder description for the third service offering.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-black/[.02] dark:bg-white/[.03]">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="mx-auto flex max-w-xl flex-col items-center gap-3 text-center">
          <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
            Services
          </span>
          <h2 className="text-3xl font-semibold tracking-tight">
            What we offer
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="flex flex-col gap-3 rounded-2xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-black"
            >
              <div className="h-10 w-10 rounded-full bg-[var(--brand)]/10" />
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
