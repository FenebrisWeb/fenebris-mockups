"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, MessageCircle } from "lucide-react";
import PatternOverlay from "./PatternOverlay";
import FadeUp from "./FadeUp";

const FAQS = [
  {
    question: "How do I know which wig or hair system is right for me?",
    answer:
      "During your free consultation, our stylists assess your hair type, lifestyle, and goals to recommend the best fit, whether that's a full wig, topper, closure, or extensions. We never suggest a one-size-fits-all solution.",
  },
  {
    question: "Is the hair 100% human hair?",
    answer:
      "Yes. All our premium products use either 100% Remy human hair or Japanese high-heat fiber, with no synthetic mixing. Every strand is sourced and quality-checked to meet the same standard we'd want for ourselves.",
  },
  {
    question: "Do you offer solutions for chemo or alopecia patients?",
    answer:
      "Absolutely, this is one of our specialties. We offer lightweight, breathable, and cap-friendly wigs designed for sensitive scalps, along with private consultation rooms and a dedicated, compassionate support team.",
  },
  {
    question: "How long does a wig or topper typically last?",
    answer:
      "With proper care, a quality human-hair wig or topper can last 1 to 2 years of regular wear. Lifespan depends on how often it's worn, how it's maintained, and the styling techniques used, our team will guide you through care after fitting.",
  },
  {
    question: "Can I book a free consultation before purchasing?",
    answer:
      "Yes. Every client starts with a free, no-obligation consultation at our Chennai, Hyderabad, or Coimbatore studio, or via WhatsApp if you're not local. We'll walk you through your options with zero pressure to buy.",
  },
  {
    question: "How do I maintain my hair extensions or topper at home?",
    answer:
      "We provide simple aftercare instructions and product recommendations tailored to your specific hair system. Most clients only need a few minutes of care a day, and we're always a message away if you have questions.",
  },
  {
    question: "What is your exchange or return policy?",
    answer:
      "Because these are custom-fitted products, we work closely with you during the consultation and fitting stages to get it right the first time. If something isn't right, reach out within 7 days and we'll make it right.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#fbf7f5]">
      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <FadeUp className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left lg:sticky lg:top-24 lg:self-start">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">
            FAQ
          </span>
          <span className="h-6 w-px bg-[var(--brand)]/40" />
          <h2 className="font-serif text-3xl tracking-tight text-zinc-900 sm:text-4xl">
            Questions? We&apos;ve got answers.
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-zinc-600 sm:text-base">
            Everything you need to know before your first visit. Can&apos;t
            find what you&apos;re looking for? Our team is one message away.
          </p>

          <div className="relative mt-2 flex w-full max-w-sm flex-col items-center gap-4 overflow-hidden rounded-2xl bg-[var(--brand)] p-6 text-center text-white shadow-sm sm:flex-row sm:text-left">
            <PatternOverlay />
            <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15">
              <MessageCircle className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <div className="relative flex flex-col items-center gap-2 sm:items-start">
              <p className="text-sm font-semibold">Still have questions?</p>
              <a
                href="#contact"
                className="inline-flex w-fit items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[var(--brand)] transition-opacity hover:opacity-90"
              >
                Talk to Us
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </FadeUp>

        <div className="flex flex-col">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <FadeUp key={faq.question} delay={i * 0.04} className="border-b border-black/10">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span
                    className={`text-base font-semibold transition-colors sm:text-lg ${
                      isOpen ? "text-[var(--brand)]" : "text-zinc-900"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "rotate-45 border-[var(--brand)] bg-[var(--brand)] text-white"
                        : "border-black/10 text-zinc-500"
                    }`}
                  >
                    <Plus className="h-4 w-4" strokeWidth={2} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-xl pb-6 text-sm leading-relaxed text-zinc-600 sm:text-base">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
