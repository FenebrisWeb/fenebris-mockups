"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, animate } from "framer-motion";
import FadeUp from "./FadeUp";

const REVIEWS = [
  {
    name: "Hema Kumaresan",
    date: "07 Aug, 2025",
    rating: 5,
    text: "I'm back for my second hair topper purchase after a year, which says everything about this amazing shop! The owner provides exceptional personalized service and genuine care for every client's needs.",
  },
  {
    name: "Anusha Ragavan",
    date: "28 Jun, 2025",
    rating: 5,
    text: "I am very pleased about the wig that I have purchased from the shop recently. I live in London, via WhatsApp Aysha and her team provided a good support and helped me get the right option.",
  },
  {
    name: "Jenny Babe",
    date: "27 May, 2025",
    rating: 4,
    text: "As a cancer patient undergoing treatment, losing my hair was one of the most emotional parts of the journey. I decided to look for a wig to regain some normalcy and confidence.",
  },
  {
    name: "Marlima Muralidharan",
    date: "11 Mar, 2025",
    rating: 5,
    text: "No one knows that what I'm wearing is wig. So much elegance. I thank Wig-O-Mania for giving me the solution to the hair problem. Aysha's guidance is also very special.",
  },
  {
    name: "Meera Shunmugam",
    date: "09 Mar, 2025",
    rating: 4,
    text: "Last month I visited Wigomania for my hair problem. I was unsure of the results before I met Aysha. It's absolutely stunning and miraculous experience for me.",
  },
  {
    name: "Moula Ali Aajaz",
    date: "04 Mar, 2025",
    rating: 5,
    text: "Dear friends, I would like to share my personal experience which we had in Wig-O-Mania. We had a fantastic experience, the staff was incredibly helpful throughout.",
  },
  {
    name: "Melvin Xavier",
    date: "18 Jan, 2025",
    rating: 4,
    text: "Wig-O-Mania has a fantastic collection of wigs for women & men. This was my first visit with my wife, and it was an outstanding experience.",
  },
  {
    name: "Rekha Kumta",
    date: "10 Jan, 2025",
    rating: 5,
    text: "I have been using toppers for some years now but was having issues lately with the comfort of using them. Then I went to Aysha at Wig O Mania and she fixed it.",
  },
];

function Stars({ rating, className = "h-4 w-4" }: { rating: number; className?: string }) {
  return (
    <div className="flex items-center justify-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          fill={i < rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.2"
          className={`${className} text-[var(--brand)]`}
        >
          <path d="m10 1.5 2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6-4.5-4.2 6.1-.7L10 1.5Z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCardBody({
  review,
  onReadMore,
}: {
  review: (typeof REVIEWS)[number];
  onReadMore: () => void;
}) {
  return (
    <>
      <div className="flex flex-1 flex-col items-center gap-2 p-4 text-center">
        <Stars rating={review.rating} className="h-3.5 w-3.5" />
        <p className="line-clamp-3 max-w-xs text-sm leading-snug text-zinc-600">
          {review.text}
        </p>
        <button
          type="button"
          onClick={onReadMore}
          className="text-xs font-semibold text-[var(--brand)] hover:text-zinc-900"
        >
          Read More
        </button>
      </div>

      <div className="flex items-center justify-center gap-2 border-t border-black/5 bg-black/[.015] px-4 py-2.5">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--brand)] text-[10px] font-bold text-white">
          {review.name.charAt(0)}
        </span>
        <span className="text-xs font-semibold text-zinc-900">
          {review.name}
        </span>
      </div>
    </>
  );
}

function ReviewModal({
  review,
  onClose,
}: {
  review: (typeof REVIEWS)[number];
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-6"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 12 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg rounded-2xl bg-white p-8 text-center shadow-2xl"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-zinc-400 transition-colors hover:bg-black/5 hover:text-zinc-900"
        >
          <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
            <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        <Stars rating={review.rating} className="h-5 w-5" />
        <p className="mt-4 text-base leading-relaxed text-zinc-700">
          {review.text}
        </p>

        <div className="mt-6 flex flex-col items-center gap-2 border-t border-black/5 pt-5">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand)] text-sm font-bold text-white">
            {review.name.charAt(0)}
          </span>
          <span className="text-sm font-semibold text-zinc-900">{review.name}</span>
          <span className="text-xs text-zinc-400">{review.date}</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

function MobileSlider({ onReadMore }: { onReadMore: (i: number) => void }) {
  const x = useMotionValue(0);
  const [cardWidth, setCardWidth] = useState(280);
  const draggingRef = useRef(false);

  useEffect(() => {
    const update = () => setCardWidth(Math.min(window.innerWidth - 80, 300));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const gap = 16;
  const step = cardWidth + gap;
  const maxOffset = -(REVIEWS.length - 1) * step;

  return (
    <div className="overflow-hidden sm:hidden">
      <motion.div
        drag="x"
        dragConstraints={{ left: maxOffset, right: 0 }}
        dragElastic={0.1}
        style={{ x }}
        onDragStart={() => {
          draggingRef.current = true;
        }}
        onDragEnd={() => {
          draggingRef.current = false;
          const nearest = Math.min(
            REVIEWS.length - 1,
            Math.max(0, Math.round(-x.get() / step))
          );
          animate(x, -nearest * step, { duration: 0.4, ease: "easeOut" });
        }}
        className="flex select-none gap-4 px-6 pb-2 active:cursor-grabbing"
      >
        {REVIEWS.map((review, i) => (
          <div
            key={review.name}
            className="flex shrink-0 cursor-grab flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm"
            style={{ width: cardWidth }}
          >
            <ReviewCardBody review={review} onReadMore={() => onReadMore(i)} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Reviews() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="reviews" className="bg-[#f4f5f7]">
      <div className="mx-auto w-full max-w-[1400px] px-6 py-16">
        <FadeUp className="mx-auto flex max-w-2xl flex-col items-center gap-2 text-center">
          <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            <svg viewBox="0 0 48 48" className="h-4 w-4">
              <path fill="#4285F4" d="M45.1 24.5c0-1.6-.1-3.1-.4-4.6H24v9h11.8c-.5 2.7-2 5-4.3 6.6v5.5h7C42.7 37 45.1 31.3 45.1 24.5Z" />
              <path fill="#34A853" d="M24 46c5.9 0 10.8-1.9 14.4-5.3l-7-5.5c-1.9 1.3-4.4 2.1-7.4 2.1-5.7 0-10.5-3.8-12.2-9H4.6v5.7C8.2 41.5 15.5 46 24 46Z" />
              <path fill="#FBBC05" d="M11.8 28.3c-.4-1.3-.7-2.7-.7-4.3s.2-3 .7-4.3v-5.7H4.6C3 16.8 2 20.3 2 24s1 7.2 2.6 10.3l7.2-6Z" />
              <path fill="#EA4335" d="M24 10.7c3.2 0 6.1 1.1 8.4 3.3l6.2-6.2C34.7 4.3 29.9 2 24 2 15.5 2 8.2 6.5 4.6 13.7l7.2 5.7c1.7-5.2 6.5-9 12.2-9Z" />
            </svg>
            Google Reviews
          </span>
          <h2 className="text-xl font-bold uppercase tracking-tight text-[var(--brand)] sm:text-2xl">
            Google Reviews Given by Our Clients
          </h2>
        </FadeUp>

        <div className="mt-8 hidden gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-4">
          {REVIEWS.map((review, i) => (
            <FadeUp
              key={review.name}
              delay={(i % 4) * 0.05}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <ReviewCardBody review={review} onReadMore={() => setOpenIndex(i)} />
            </FadeUp>
          ))}
        </div>

        <div className="mt-8">
          <MobileSlider onReadMore={setOpenIndex} />
        </div>

        <FadeUp className="mt-8 flex justify-center">
          <a
            href="https://www.google.com/search?q=wigomania+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 items-center justify-center gap-2 rounded-full bg-[var(--brand)] px-7 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
          >
            View All Reviews
            <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
              <path d="m5 8 5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </FadeUp>
      </div>

      <AnimatePresence>
        {openIndex !== null && (
          <ReviewModal review={REVIEWS[openIndex]} onClose={() => setOpenIndex(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
