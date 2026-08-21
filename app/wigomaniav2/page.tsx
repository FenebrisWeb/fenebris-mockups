"use client";

import { useEffect, useRef, useState } from "react";
import SmoothScroll from "./components/SmoothScroll";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Solutions from "./components/Solutions";
import Transformations from "./components/Transformations";
import Reviews from "./components/Reviews";
import WhyChooseUs from "./components/WhyChooseUs";
import About from "./components/About";
import OurStory from "./components/OurStory";
import ContactSupport from "./components/ContactSupport";
import Footer from "./components/Footer";

// Wigomania V2 brand palette — muted gold, matched from the reference design.
const BRAND = "#B4915A";
const BRAND_DARK = "#8F7040";

export default function WigomaniaPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const measure = () => setHeaderHeight(el.offsetHeight);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      className="flex flex-1 flex-col"
      style={{ "--brand": BRAND, "--brand-dark": BRAND_DARK } as React.CSSProperties}
    >
      {/* Kept outside SmoothScroll's virtual-scroll layer so Header's `sticky` still
         works against the real page scroll. */}
      <div ref={headerRef}>
        <TopBar />
        <Header />
      </div>

      <SmoothScroll topOffset={headerHeight}>
        <main className="flex flex-1 flex-col">
          <Hero />
          <Solutions />
          <Transformations />
          <Reviews />
          <WhyChooseUs />
          <About />
          <OurStory />
          <ContactSupport />
        </main>
        <Footer />
      </SmoothScroll>
    </div>
  );
}
