import Image from "next/image";
import { Users, Award, Gem, ShieldCheck, Handshake, Phone, ChevronRight } from "lucide-react";
import PatternOverlay from "./PatternOverlay";
import FadeUp from "./FadeUp";

const STATS = [
  { label: "Happy Clients", value: "10,000+", icon: Users },
  { label: "Of Expertise", value: "30+ Years", icon: Award },
  { label: "Human Hair", value: "100% Premium", icon: Gem },
  { label: "One Time Investment", value: "No Royalty", icon: ShieldCheck },
  { label: "We Grow Together", value: "Lifetime Support", icon: Handshake },
];

const FOOTER_LINKS = [
  {
    heading: "Explore",
    links: [
      { label: "Behind the Brand", href: "#behind-the-brand" },
      { label: "Our Forte", href: "#our-forte" },
      { label: "Reviews", href: "#reviews" },
      { label: "Gallery", href: "#gallery" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Partnership Opportunity", href: "#partnership" },
      { label: "CSR", href: "#csr" },
      { label: "Blog", href: "#blog" },
      { label: "Reach Us", href: "#reach-us" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
];

const SOCIALS = [
  { label: "Instagram", href: "#", path: "M10 2.2c2.4 0 2.7 0 3.6.05 1 .05 1.6.2 2 .35a4 4 0 0 1 1.5 1 4 4 0 0 1 1 1.5c.15.4.3 1 .35 2 .05.9.05 1.2.05 3.6s0 2.7-.05 3.6c-.05 1-.2 1.6-.35 2a4 4 0 0 1-1 1.5 4 4 0 0 1-1.5 1c-.4.15-1 .3-2 .35-.9.05-1.2.05-3.6.05s-2.7 0-3.6-.05c-1-.05-1.6-.2-2-.35a4 4 0 0 1-1.5-1 4 4 0 0 1-1-1.5c-.15-.4-.3-1-.35-2C2 12.7 2 12.4 2 10s0-2.7.05-3.6c.05-1 .2-1.6.35-2a4 4 0 0 1 1-1.5 4 4 0 0 1 1.5-1c.4-.15 1-.3 2-.35C7.3 2.2 7.6 2.2 10 2.2Zm0 1.8c-2.35 0-2.63 0-3.56.05-.8.04-1.24.17-1.53.28-.38.15-.66.32-.95.6-.28.29-.45.57-.6.95-.11.29-.24.72-.28 1.53C3.03 7.37 3 7.65 3 10s0 2.63.05 3.56c.04.8.17 1.24.28 1.53.15.38.32.66.6.95.29.28.57.45.95.6.29.11.72.24 1.53.28.93.05 1.21.05 3.56.05s2.63 0 3.56-.05c.8-.04 1.24-.17 1.53-.28.38-.15.66-.32.95-.6.28-.29.45-.57.6-.95.11-.29.24-.72.28-1.53.05-.93.05-1.21.05-3.56s0-2.63-.05-3.56c-.04-.8-.17-1.24-.28-1.53a2.4 2.4 0 0 0-.6-.95 2.4 2.4 0 0 0-.95-.6c-.29-.11-.72-.24-1.53-.28C12.63 4 12.35 4 10 4Zm0 3.1a2.9 2.9 0 1 1 0 5.8 2.9 2.9 0 0 1 0-5.8Zm0 1.5a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8Zm3.7-1.65a.68.68 0 1 1-1.36 0 .68.68 0 0 1 1.36 0Z" },
  { label: "Facebook", href: "#", path: "M12.6 3H10.4C8.8 3 7.5 4.3 7.5 5.9V8H5.4v2.9h2.1V17h3v-6.1h2.1l.4-2.9H10.5V6.2c0-.5.4-.9.9-.9h1.2V3Z" },
  { label: "YouTube", href: "#", path: "M17.5 6.2a2.1 2.1 0 0 0-1.5-1.5C14.6 4.3 10 4.3 10 4.3s-4.6 0-6 .4a2.1 2.1 0 0 0-1.5 1.5A22 22 0 0 0 2 10c0 1.3.1 2.6.5 3.8.2.7.8 1.3 1.5 1.5 1.4.4 6 .4 6 .4s4.6 0 6-.4a2.1 2.1 0 0 0 1.5-1.5c.4-1.2.5-2.5.5-3.8 0-1.3-.1-2.6-.5-3.8ZM8.4 12.5V7.5l4.4 2.5-4.4 2.5Z" },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10">
      <div className="bg-zinc-950 text-white">
        <div className="mx-auto flex w-full max-w-[1400px] flex-wrap items-center justify-center gap-x-8 gap-y-4 px-6 py-5 sm:flex-nowrap sm:justify-between lg:divide-x lg:divide-white/10">
          {STATS.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="flex items-center gap-3 px-2 first:pl-0">
                <Icon className="h-6 w-6 shrink-0 text-[var(--brand)]" strokeWidth={1.5} />
                <div className="flex flex-col leading-tight">
                  <span className="text-sm font-bold uppercase tracking-wide">{stat.value}</span>
                  <span className="text-xs text-white/60">{stat.label}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative overflow-hidden bg-[var(--brand)]">
        <PatternOverlay />
        <div className="relative mx-auto flex w-full max-w-[1400px] flex-col items-center justify-between gap-4 px-6 py-5 text-white sm:flex-row">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15">
              <Phone className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <div>
              <p className="text-base font-semibold">Let&apos;s build success together!</p>
              <p className="text-sm text-white/80">
                Enquire today and our team will get in touch with you.
              </p>
            </div>
          </div>

          <a
            href="#appointment"
            className="flex h-11 shrink-0 items-center gap-1.5 rounded-full border-2 border-white px-6 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-[var(--brand)]"
          >
            Enquire Now
            <ChevronRight className="h-4 w-4" strokeWidth={2} />
          </a>
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-[1400px] gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <FadeUp className="flex flex-col gap-4">
          <Image
            src="https://www.wigomania.com/public/assets/images/logo-website.webp"
            alt="Wigomania"
            width={150}
            height={60}
            className="h-11 w-auto"
          />
          <p className="max-w-xs text-sm text-zinc-500 dark:text-zinc-400">
            Wigs, toppers, extensions, and patch solutions, crafted by the
            Wigomania hair studio team.
          </p>
          <div className="mt-1 flex items-center gap-3">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-black/[.05] text-zinc-600 transition-colors hover:bg-[var(--brand)] hover:text-white dark:bg-white/[.08] dark:text-zinc-300"
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </FadeUp>

        {FOOTER_LINKS.map((group, i) => (
          <FadeUp key={group.heading} delay={(i + 1) * 0.1} className="flex flex-col gap-3">
            <span className="text-sm font-semibold">{group.heading}</span>
            {group.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-zinc-500 transition-colors hover:text-[var(--brand)] dark:text-zinc-400 dark:hover:text-[var(--brand)]"
              >
                {link.label}
              </a>
            ))}
          </FadeUp>
        ))}
      </div>

      <div className="flex flex-col items-center justify-between gap-2 border-t border-black/10 px-6 py-6 text-center text-xs text-zinc-500 sm:flex-row sm:text-left dark:border-white/10 dark:text-zinc-400">
        <span>{"©"} Wigomania. All rights reserved.</span>
        <span>A mockup site built by the Fenebris Team.</span>
      </div>
    </footer>
  );
}
