import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import FadeUp from "./FadeUp";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path d="M10 2.2c2.4 0 2.7 0 3.6.05 1 .05 1.6.2 2 .35a4 4 0 0 1 1.5 1 4 4 0 0 1 1 1.5c.15.4.3 1 .35 2 .05.9.05 1.2.05 3.6s0 2.7-.05 3.6c-.05 1-.2 1.6-.35 2a4 4 0 0 1-1 1.5 4 4 0 0 1-1.5 1c-.4.15-1 .3-2 .35-.9.05-1.2.05-3.6.05s-2.7 0-3.6-.05c-1-.05-1.6-.2-2-.35a4 4 0 0 1-1.5-1 4 4 0 0 1-1-1.5c-.15-.4-.3-1-.35-2C2 12.7 2 12.4 2 10s0-2.7.05-3.6c.05-1 .2-1.6.35-2a4 4 0 0 1 1-1.5 4 4 0 0 1 1.5-1c.4-.15 1-.3 2-.35C7.3 2.2 7.6 2.2 10 2.2Zm0 1.8c-2.35 0-2.63 0-3.56.05-.8.04-1.24.17-1.53.28-.38.15-.66.32-.95.6-.28.29-.45.57-.6.95-.11.29-.24.72-.28 1.53C3.03 7.37 3 7.65 3 10s0 2.63.05 3.56c.04.8.17 1.24.28 1.53.15.38.32.66.6.95.29.28.57.45.95.6.29.11.72.24 1.53.28.93.05 1.21.05 3.56.05s2.63 0 3.56-.05c.8-.04 1.24-.17 1.53-.28.38-.15.66-.32.95-.6.28-.29.45-.57.6-.95.11-.29.24-.72.28-1.53.05-.93.05-1.21.05-3.56s0-2.63-.05-3.56c-.04-.8-.17-1.24-.28-1.53a2.4 2.4 0 0 0-.6-.95 2.4 2.4 0 0 0-.95-.6c-.29-.11-.72-.24-1.53-.28C12.63 4 12.35 4 10 4Zm0 3.1a2.9 2.9 0 1 1 0 5.8 2.9 2.9 0 0 1 0-5.8Zm0 1.5a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8Zm3.7-1.65a.68.68 0 1 1-1.36 0 .68.68 0 0 1 1.36 0Z" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path d="M12.6 3H10.4C8.8 3 7.5 4.3 7.5 5.9V8H5.4v2.9h2.1V17h3v-6.1h2.1l.4-2.9H10.5V6.2c0-.5.4-.9.9-.9h1.2V3Z" />
    </svg>
  );
}

function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path d="M17.5 6.2a2.1 2.1 0 0 0-1.5-1.5C14.6 4.3 10 4.3 10 4.3s-4.6 0-6 .4a2.1 2.1 0 0 0-1.5 1.5A22 22 0 0 0 2 10c0 1.3.1 2.6.5 3.8.2.7.8 1.3 1.5 1.5 1.4.4 6 .4 6 .4s4.6 0 6-.4a2.1 2.1 0 0 0 1.5-1.5c.4-1.2.5-2.5.5-3.8 0-1.3-.1-2.6-.5-3.8ZM8.4 12.5V7.5l4.4 2.5-4.4 2.5Z" />
    </svg>
  );
}

const LINK_COLUMNS = [
  {
    heading: "Shop",
    links: ["Women's Wigs", "Men's Hair Systems", "Hair Extensions", "Hair Toppers", "Accessories", "Aftercare Products"],
  },
  {
    heading: "Support",
    links: ["FAQs", "Shipping & Delivery", "Returns & Refunds", "Track Your Order", "Product Care Guides", "Contact Us"],
  },
  {
    heading: "Company",
    links: ["About Us", "Our Story", "Careers", "Client Stories", "Terms & Conditions", "Privacy Policy"],
  },
];

const SOCIALS = [
  { label: "Instagram", href: "#", icon: InstagramIcon },
  { label: "Facebook", href: "#", icon: FacebookIcon },
  { label: "YouTube", href: "#", icon: YoutubeIcon },
  { label: "WhatsApp", href: "https://wa.me/919940155566", icon: MessageCircle },
];

const PAYMENT_METHODS = ["VISA", "Mastercard", "UPI", "RuPay"];

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white">
      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1.1fr] lg:gap-8 lg:px-16">
        <FadeUp className="flex flex-col gap-4">
          <span className="flex flex-col leading-none">
            <span className="font-[family-name:var(--font-cormorant)] text-[26px] font-bold tracking-[0.02em] text-white">
              WIG<span className="text-[var(--brand)]">O</span>MANIA
            </span>
            <span className="mt-1.5 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.3em] text-white/50">
              <span className="h-px w-4 bg-white/30" />
              Confidence. Always.
              <span className="h-px w-4 bg-white/30" />
            </span>
          </span>
          <p className="max-w-xs text-sm leading-relaxed text-white/60">
            India&apos;s most trusted hair solutions brand. Helping thousands look and feel their
            best every single day.
          </p>

          <div className="mt-1 flex items-center gap-3">
            {SOCIALS.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-[var(--brand)] hover:bg-[var(--brand)] hover:text-white"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.75} />
                </a>
              );
            })}
          </div>
        </FadeUp>

        {LINK_COLUMNS.map((col, i) => (
          <FadeUp key={col.heading} delay={(i + 1) * 0.08} className="flex flex-col gap-3">
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
          </FadeUp>
        ))}

        <FadeUp delay={0.32} className="flex flex-col gap-3">
          <span className="text-sm font-bold uppercase tracking-[0.15em] text-[var(--brand)]">
            Contact Us
          </span>

          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand)]" strokeWidth={1.75} />
            <p className="text-sm leading-relaxed text-white/60">
              Wig O Mania Studio, Nungambakkam,
              <br />
              Chennai - 600034, Tamil Nadu, India
            </p>
          </div>

          <a href="tel:+914442146666" className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white">
            <Phone className="h-4 w-4 shrink-0 text-[var(--brand)]" strokeWidth={1.75} />
            +91 44 4214 6666
          </a>
          <a href="tel:+919940155566" className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white">
            <Phone className="h-4 w-4 shrink-0 text-[var(--brand)]" strokeWidth={1.75} />
            +91 99401 55566
          </a>
          <a href="mailto:info@wigomania.com" className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white">
            <Mail className="h-4 w-4 shrink-0 text-[var(--brand)]" strokeWidth={1.75} />
            info@wigomania.com
          </a>
        </FadeUp>
      </div>

      <div className="border-t border-white/10">
        <FadeUp className="mx-auto flex w-full max-w-[1400px] flex-col items-center justify-between gap-4 px-6 py-6 text-center text-xs text-white/50 sm:flex-row sm:px-10 sm:text-left lg:px-16">
          <span>{"©"} 2024 Wig O Mania. All Rights Reserved.</span>
          <div className="flex items-center gap-1.5">
            {PAYMENT_METHODS.map((method) => (
              <span
                key={method}
                className="rounded border border-white/15 bg-white/5 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-white/70"
              >
                {method}
              </span>
            ))}
          </div>
        </FadeUp>
      </div>
    </footer>
  );
}
