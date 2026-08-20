"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Search, MapPin, Phone, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Women", href: "#women", dropdown: true },
  { label: "Men", href: "#men", dropdown: true },
  { label: "Hair Extensions", href: "#hair-extensions", dropdown: true },
  { label: "Clinics", href: "#clinics" },
  { label: "About Us", href: "#about-us" },
  { label: "Franchise", href: "#franchise" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white">
      <div className="mx-auto flex w-full max-w-[1400px] items-center gap-6 px-6 py-4">
        <Link href="#" className="flex shrink-0 flex-col leading-none">
          <span className="font-[family-name:var(--font-cormorant)] text-[28px] font-bold tracking-[0.03em] text-black sm:text-[32px]">
            WIG<span className="text-[var(--brand)]">O</span>MANIA
          </span>
          <span className="mt-1.5 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-black">
            <span className="h-px w-4 bg-black" />
            Confidence. Always.
            <span className="h-px w-4 bg-black" />
          </span>
        </Link>

        <nav className="ml-4 hidden items-center gap-7 text-[13px] font-semibold uppercase tracking-[0.03em] text-black lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-1 transition-colors hover:text-[var(--brand)]"
            >
              {link.label}
              {link.dropdown && <ChevronDown className="h-3.5 w-3.5" strokeWidth={2} />}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-5">
          <a
            href="#store-locator"
            aria-label="Store Locator"
            className="hidden text-black transition-colors hover:text-[var(--brand)] lg:block"
          >
            <MapPin className="h-[18px] w-[18px]" strokeWidth={1.75} />
          </a>
          <a
            href="tel:+919952012454"
            aria-label="Call Us"
            className="hidden text-black transition-colors hover:text-[var(--brand)] lg:block"
          >
            <Phone className="h-[18px] w-[18px]" strokeWidth={1.75} />
          </a>
          <button
            type="button"
            aria-label="Search"
            className="hidden text-black transition-colors hover:text-[var(--brand)] lg:block"
          >
            <Search className="h-[18px] w-[18px]" strokeWidth={1.75} />
          </button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="text-black lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-0.5 border-t border-black/5 bg-white px-6 py-3 lg:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-lg px-2 py-2.5 text-sm font-semibold uppercase tracking-wide text-black transition-colors hover:bg-[var(--brand)]/10 hover:text-[var(--brand)]"
            >
              {link.label}
              {link.dropdown && <ChevronDown className="h-3.5 w-3.5" strokeWidth={2} />}
            </a>
          ))}
          <a
            href="#appointment"
            className="mt-2 flex h-11 items-center justify-center rounded-full bg-[var(--brand)] text-[13px] font-semibold uppercase tracking-wide text-white"
          >
            Book Consultation
          </a>
        </nav>
      )}
    </header>
  );
}
