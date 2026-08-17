import Image from "next/image";
import {
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  ShieldCheck,
  Award,
  Users,
  HeartHandshake,
  Gem,
  Handshake,
  ChevronRight,
} from "lucide-react";
import PatternOverlay from "./PatternOverlay";
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
    heading: "About",
    links: ["About Us", "Our Story", "Why Choose Us", "Client Stories", "Careers"],
  },
  {
    heading: "Help",
    links: ["FAQs", "Hair Care Guide", "How to Order", "Shipping & Delivery", "Returns & Refunds", "Track Your Order"],
  },
  {
    heading: "Franchise",
    links: ["Franchise Overview", "Benefits", "Investment Details", "Enquiry Form"],
  },
];

const SOCIALS = [
  { label: "Instagram", href: "#", icon: InstagramIcon },
  { label: "Facebook", href: "#", icon: FacebookIcon },
  { label: "YouTube", href: "#", icon: YoutubeIcon },
  { label: "WhatsApp", href: "#", icon: MessageCircle },
];

const TRUST_BADGES = [
  { label: "Premium Human Hair", value: "100%", icon: ShieldCheck },
  { label: "of Expertise", value: "30+ Years", icon: Award },
  { label: "Happy Clients", value: "10,000+", icon: Users },
  { label: "Care & Support", value: "Lifetime", icon: HeartHandshake },
];

const TOP_STATS = [
  { label: "Happy Clients", value: "10,000+", icon: Users },
  { label: "Of Expertise", value: "30+ Years", icon: Award },
  { label: "Human Hair", value: "100% Premium", icon: Gem },
  { label: "One Time Investment", value: "No Royalty", icon: ShieldCheck },
  { label: "We Grow Together", value: "Lifetime Support", icon: Handshake },
];

const LEGAL_LINKS = ["Privacy Policy", "Terms & Conditions", "Disclaimer", "Sitemap"];
const PAYMENT_METHODS = ["VISA", "Mastercard", "UPI", "RuPay"];

export default function Footer() {
  return (
    <footer className="border-t border-black/10">
      {/* Top stats bar */}
      <div className="bg-zinc-950 text-white">
        <div className="mx-auto flex w-full max-w-[1400px] flex-wrap items-center justify-center gap-x-8 gap-y-4 px-6 py-5 sm:flex-nowrap sm:justify-between lg:divide-x lg:divide-white/10">
          {TOP_STATS.map((stat) => {
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

      {/* CTA bar */}
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

      {/* Main footer */}
      <div className="bg-zinc-950 text-white">
        <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-12 px-6 py-16 lg:grid-cols-[1.2fr_1fr_1fr_1fr_1fr_1.1fr] lg:gap-8">
          <FadeUp className="flex flex-col gap-4 lg:col-span-1">
            <span className="inline-flex w-fit items-center rounded-lg bg-white px-4 py-2.5">
              <Image
                src="https://www.wigomania.com/public/assets/images/logo-website.webp"
                alt="Wigomania"
                width={170}
                height={68}
                className="h-9 w-auto"
              />
            </span>
            <p className="max-w-xs text-sm leading-relaxed text-white/60">
              India&apos;s most trusted hair solutions brand. Helping
              thousands look and feel their best every single day.
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
              <span className="h-px w-6 bg-[var(--brand)]/40" />
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

          <FadeUp delay={0.4} className="flex flex-col gap-4">
            <span className="text-sm font-bold uppercase tracking-[0.15em] text-[var(--brand)]">
              Contact Us
            </span>
            <span className="h-px w-6 bg-[var(--brand)]/40" />

            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand)]" strokeWidth={1.75} />
              <p className="text-sm leading-relaxed text-white/60">
                Wig O Mania Studio, Nungambakkam,
                <br />
                Chennai, 600034, Tamil Nadu, India
              </p>
            </div>

            <a href="tel:+914442146666" className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white">
              <Phone className="h-4 w-4 shrink-0 text-[var(--brand)]" strokeWidth={1.75} />
              +91 44 4214 6666
            </a>
            <a href="https://wa.me/919940155566" className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white">
              <MessageCircle className="h-4 w-4 shrink-0 text-[var(--brand)]" strokeWidth={1.75} />
              +91 99401 55566
            </a>
            <a href="mailto:info@wigomania.com" className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white">
              <Mail className="h-4 w-4 shrink-0 text-[var(--brand)]" strokeWidth={1.75} />
              info@wigomania.com
            </a>
          </FadeUp>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto w-full max-w-[1400px] px-6 py-10">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">
              Trusted by Thousands
            </span>
            <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {TRUST_BADGES.map((badge, i) => {
                const Icon = badge.icon;
                return (
                  <FadeUp
                    key={badge.label}
                    delay={i * 0.06}
                    className="flex flex-col items-start gap-2 rounded-2xl border border-white/10 bg-white/[.03] p-5 transition-colors hover:border-[var(--brand)]/40"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand)]/10 text-[var(--brand)]">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                    <span className="text-base font-bold leading-tight">{badge.value}</span>
                    <span className="text-xs leading-tight text-white/50">{badge.label}</span>
                  </FadeUp>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center justify-between gap-4 px-6 py-6 text-center text-xs text-white/50 sm:flex-row sm:text-left">
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
              <span>{"©"} 2026 Wig O Mania. All Rights Reserved.</span>
              <span className="hidden sm:inline">|</span>
              {LEGAL_LINKS.map((label, i) => (
                <span key={label} className="flex items-center gap-2">
                  <a href="#" className="transition-colors hover:text-white">
                    {label}
                  </a>
                  {i < LEGAL_LINKS.length - 1 && <span>|</span>}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <span>Secured Payments By</span>
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
