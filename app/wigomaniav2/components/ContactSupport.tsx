"use client";

import { MessageCircle, Phone, Mail, MapPin, ShieldCheck, Headset, Lock } from "lucide-react";
import FadeUp from "./FadeUp";

const CHANNELS = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    lines: ["Chat with our support executives in real-time."],
    cta: "Start Chat",
    href: "#chat",
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+91 44 4214 6666", "+91 99401 55566", "(Mon - Sat, 10 AM - 7 PM)"],
    cta: "Call Now",
    href: "tel:+914442146666",
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["info@wigomania.com", "We'll get back to you within 24 hours."],
    cta: "Email Us",
    href: "mailto:info@wigomania.com",
  },
  {
    icon: MapPin,
    title: "Visit a Studio",
    lines: ["Find your nearest Wig O Mania studio."],
    cta: "Find a Studio",
    href: "#store-locator",
  },
];

const ASSURANCES = [
  {
    icon: ShieldCheck,
    title: "100% Authentic Premium Hair",
    copy: "We use only the finest quality human hair.",
  },
  {
    icon: Headset,
    title: "Expert Support Always",
    copy: "Get guidance from our hair experts.",
  },
  {
    icon: ShieldCheck,
    title: "Lifetime Care & Maintenance",
    copy: "We're with you for the long run.",
  },
  {
    icon: Lock,
    title: "Safe & Secure Experience",
    copy: "Your privacy and satisfaction matter.",
  },
];

export default function ContactSupport() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <FadeUp className="mx-auto flex w-full max-w-[1400px] flex-col items-center gap-2 px-6 text-center">
        <h2 className="font-[family-name:var(--font-cormorant)] text-3xl tracking-tight text-black sm:text-4xl">
          Still Need Help? Contact Us
        </h2>
        <p className="text-sm text-black sm:text-base">
          Our support team is available to assist you
        </p>
      </FadeUp>

      <FadeUp>
        <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 sm:mt-14 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-10 lg:mx-auto lg:max-w-[1400px] lg:grid-cols-4 lg:gap-6 lg:px-16">
          {CHANNELS.map((channel) => {
            const Icon = channel.icon;
            return (
              <div
                key={channel.title}
                className="flex w-[75vw] max-w-[280px] shrink-0 snap-center flex-col items-center justify-between gap-3 rounded-2xl border border-black/10 bg-white px-6 py-8 text-center sm:w-auto sm:max-w-none sm:shrink"
              >
                <div className="flex flex-col items-center gap-3">
                  <Icon className="h-9 w-9 text-[var(--brand)]" strokeWidth={1.25} />
                  <h3 className="text-base font-bold text-black">{channel.title}</h3>
                  <div className="flex flex-col gap-0.5">
                    {channel.lines.map((line) => (
                      <p key={line} className="text-sm text-black/70">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
                <a
                  href={channel.href}
                  className="mt-3 flex h-11 w-full items-center justify-center rounded-md bg-black px-6 text-xs font-bold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--brand)] hover:shadow-md"
                >
                  {channel.cta}
                </a>
              </div>
            );
          })}
        </div>
      </FadeUp>

      <FadeUp>
        <div className="mx-auto mt-10 w-full max-w-[1400px] px-6 sm:mt-14 sm:px-10 lg:px-16">
          <div className="flex snap-x snap-mandatory gap-8 overflow-x-auto rounded-2xl border border-black/10 bg-[#fbf7f4] px-6 py-8 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-10 lg:grid-cols-4 lg:divide-x lg:divide-black/10 lg:px-16">
            {ASSURANCES.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex w-[70vw] max-w-[240px] shrink-0 snap-center flex-col items-start gap-2 lg:w-auto lg:max-w-none lg:px-6 lg:first:pl-0 lg:last:pr-0"
                >
                  <Icon className="h-7 w-7 text-[var(--brand)]" strokeWidth={1.25} />
                  <h3 className="text-sm font-bold text-black">{item.title}</h3>
                  <p className="text-xs text-black/60">{item.copy}</p>
                </div>
              );
            })}
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
