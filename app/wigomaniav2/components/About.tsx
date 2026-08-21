"use client";

import Image from "next/image";
import FadeUp from "./FadeUp";

function AboutContent({ card }: { card?: boolean }) {
  return (
    <FadeUp
      className={
        card
          ? "flex flex-col items-center gap-4 rounded-2xl bg-white px-6 py-8 text-center shadow-xl"
          : "flex max-w-xl flex-col items-start gap-4 text-left"
      }
    >
      <span className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--brand)]">
        Behind the Brand
      </span>

      <h1 className="font-[family-name:var(--font-cormorant)] text-4xl leading-[1.1] tracking-tight text-black sm:text-5xl lg:text-6xl">
        A Journey of Passion and Purpose
      </h1>

      <p className="max-w-xl text-sm leading-relaxed text-black sm:text-base">
        WIG-O-MANIA brand of hair products is a UK based company since 2006, that offers a
        one-stop solution for an exclusive range of Extensions, Wigs &amp; Hairpieces. It is
        capable of catering to a very wide segment of the industry as its products are made in
        Remy human hair, Japanese high heat fibre and European synthetic fibre. The quality of
        all its products befits the European standards.
      </p>

      <p className="max-w-xl text-sm leading-relaxed text-black sm:text-base">
        Wig-O-Mania clients can now have hair-wear options they never dreamed possible. Whether
        it is for a personal use, a social occasion, catwalk show or even a magazine shoot
        &ndash; our versatile and durable styles is aimed at creating a variety of stunning
        looks with that added sophistication.
      </p>

      <a
        href="#our-story"
        className="mt-1 inline-flex h-12 w-fit items-center justify-center gap-2 rounded-md bg-black px-7 text-xs font-bold uppercase tracking-[0.12em] text-white transition-opacity hover:opacity-90"
      >
        Our Story
        <span aria-hidden>→</span>
      </a>
    </FadeUp>
  );
}

export default function About() {
  return (
    <section className="bg-[#fbf7f4]">
      <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[16/9] lg:aspect-[2.5/1]">
        <Image
          src="/wigomaniaV2/aboutus.png"
          alt="Wig O Mania studio reception"
          fill
          quality={100}
          sizes="100vw"
          className="object-cover object-[75%_center] sm:object-[68%_center] lg:object-center"
        />

        {/* Desktop/tablet: text overlays the image directly */}
        <div className="absolute inset-0 mx-auto hidden w-full max-w-[1400px] items-center px-10 sm:flex lg:px-16">
          <AboutContent />
        </div>
      </div>

      {/* Mobile: text card straddles the bottom edge of the banner — half on the image, half below it */}
      <div className="relative z-10 -mt-28 px-6 sm:hidden">
        <AboutContent card />
      </div>
    </section>
  );
}
