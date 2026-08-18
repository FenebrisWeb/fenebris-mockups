import Image from "next/image";

const LINK_COLUMNS = [
  {
    heading: "Shop",
    links: ["Whole Spices", "Spice Powders", "Spice Blends", "Herbal Powders", "Seasonings", "Combos & Premixes"],
  },
  {
    heading: "Company",
    links: ["Our Story", "Purity Promise", "FSSAI Certification", "Sustainability"],
  },
  {
    heading: "Help",
    links: ["Contact Us", "Shipping Policy", "Returns & Refunds", "FAQs"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-zinc-950 text-white">
      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div className="flex flex-col gap-3">
          <span className="inline-flex w-fit items-center rounded-lg bg-white px-4 py-2.5">
            <Image
              src="/unitattva/logo.PNG"
              alt="UniTattva"
              width={160}
              height={48}
              className="h-9 w-auto"
            />
          </span>
          <p className="max-w-xs text-sm text-white/60">
            Pure ingredients. Real flavors. Nothing artificial. Single-origin
            spices, powders, and blends, hand-selected and lab-tested for
            authentic taste.
          </p>
          <p className="mt-2 text-xs text-white/40">
            Free shipping above &#8377;498.
          </p>
        </div>

        {LINK_COLUMNS.map((col) => (
          <div key={col.heading} className="flex flex-col gap-3">
            <span className="text-sm font-bold uppercase tracking-[0.15em] text-[var(--brand)]">
              {col.heading}
            </span>
            {col.links.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>

      <div className="border-t border-white/10 px-6 py-6 text-center text-xs text-white/40">
        {"©"} 2026 UniTattva. A mockup site built by the Fenebris Team.
      </div>
    </footer>
  );
}
