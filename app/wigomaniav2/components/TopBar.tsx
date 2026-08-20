"use client";

import { Calendar, MapPin, Phone, Globe } from "lucide-react";

export default function TopBar() {
  return (
    <div className="hidden border-b border-black/5 bg-white text-[11px] tracking-wide text-black lg:block">
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 py-2">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-[var(--brand)]" strokeWidth={1.75} />
            Store Locator
          </span>
          <span className="flex items-center gap-1.5">
            <Phone className="h-3.5 w-3.5 text-[var(--brand)]" strokeWidth={1.75} />
            India: +91 99520 12454
          </span>
          <span className="flex items-center gap-1.5">
            <Globe className="h-3.5 w-3.5 text-[var(--brand)]" strokeWidth={1.75} />
            Worldwide Shipping
          </span>
        </div>

        <a
          href="#appointment"
          className="flex items-center gap-1.5 font-semibold uppercase tracking-[0.15em] text-[var(--brand)] transition-colors hover:text-[var(--brand-dark)]"
        >
          Book Consultation
          <Calendar className="h-3.5 w-3.5" strokeWidth={1.75} />
        </a>
      </div>
    </div>
  );
}
