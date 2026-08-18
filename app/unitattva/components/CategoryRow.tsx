"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, animate } from "framer-motion";

const CATEGORIES = [
  { label: "Seasonings", image: "https://cdn.shopify.com/s/files/1/0782/2413/0298/files/KasooriMethi.jpg?v=1777551688" },
  { label: "5 Min Gravy Marinade", image: "https://cdn.shopify.com/s/files/1/0782/2413/0298/files/Chickenmasala.png?v=1764218489" },
  { label: "Powdered Spices", image: "https://cdn.shopify.com/s/files/1/0782/2413/0298/files/paranthamasala2.png?v=1784625976" },
  { label: "Blended Spices", image: "https://cdn.shopify.com/s/files/1/0782/2413/0298/files/B1.jpg?v=1784631479" },
  { label: "Whole Spices", image: "https://cdn.shopify.com/s/files/1/0782/2413/0298/files/GreenCardamomSeeds.png?v=1765013369" },
  { label: "Combo Packs", image: "https://cdn.shopify.com/s/files/1/0782/2413/0298/files/DreamCombo.jpg?v=1771312585" },
  { label: "Whole Food Products", image: "https://cdn.shopify.com/s/files/1/0782/2413/0298/files/AN1.jpg?v=1784631530" },
  { label: "Dry Fruits", image: "https://cdn.shopify.com/s/files/1/0782/2413/0298/files/Untitleddesign_21.jpg?v=1784628848" },
  { label: "Flavoured Dry Fruits", image: "https://cdn.shopify.com/s/files/1/0782/2413/0298/files/Untitleddesign_18.jpg?v=1784624939" },
];

// A slow, looping sequence of organic blob radii the circle morphs through.
const BLOB_RADII = [
  "50% 50% 50% 50% / 50% 50% 50% 50%",
  "58% 42% 45% 55% / 45% 55% 42% 58%",
  "42% 58% 55% 45% / 55% 45% 58% 42%",
  "50% 50% 50% 50% / 50% 50% 50% 50%",
];

const CIRCLE_SIZE = 104;
const GAP = 24;
const VISIBLE_ON_DESKTOP = 7;
const MOBILE_ITEM_WIDTH = 118;
const DESKTOP_BREAKPOINT = 1024;

export default function CategoryRow() {
  const x = useMotionValue(0);
  const [containerWidth, setContainerWidth] = useState(1400);
  const [isDesktop, setIsDesktop] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
      setIsDesktop(window.innerWidth >= DESKTOP_BREAKPOINT);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const availableWidth = containerWidth - 48; // minus the container's own px-6 padding
  const step = isDesktop
    ? availableWidth / VISIBLE_ON_DESKTOP
    : MOBILE_ITEM_WIDTH + GAP;
  const itemWidth = step - GAP;
  const trackWidth = CATEGORIES.length * step - GAP;
  const maxOffset = Math.min(0, availableWidth - trackWidth);

  return (
    <section className="bg-white py-12 sm:py-16">
      <div
        ref={containerRef}
        className="mx-auto w-full max-w-[1400px] overflow-hidden px-6"
      >
        <motion.div
          drag="x"
          dragConstraints={{ left: maxOffset, right: 0 }}
          dragElastic={0.1}
          onDragStart={() => {
            draggingRef.current = true;
          }}
          onDragEnd={() => {
            draggingRef.current = false;
            const clamped = Math.min(0, Math.max(maxOffset, x.get()));
            animate(x, clamped, { duration: 0.3, ease: "easeOut" });
          }}
          style={{ x }}
          className="flex w-max cursor-grab select-none active:cursor-grabbing"
        >
          {CATEGORIES.map((cat, i) => (
            <a
              key={cat.label}
              href="/unitattva/shop"
              draggable={false}
              className="flex shrink-0 flex-col items-center gap-3 text-center"
              style={{ width: itemWidth, marginRight: GAP }}
            >
              <motion.div
                animate={{ borderRadius: BLOB_RADII }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.15,
                }}
                style={{
                  width: CIRCLE_SIZE,
                  height: CIRCLE_SIZE,
                  backgroundColor: "var(--brand)",
                }}
                className="relative shrink-0 overflow-hidden shadow-md transition-transform duration-300 hover:scale-105"
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 8,
                    borderRadius: "9999px",
                    overflow: "hidden",
                    backgroundColor: "white",
                  }}
                >
                  <Image
                    src={cat.image}
                    alt={cat.label}
                    fill
                    draggable={false}
                    sizes="104px"
                    style={{ objectFit: "contain", padding: 4 }}
                  />
                </div>
              </motion.div>
              <span className="text-xs font-semibold leading-snug text-zinc-800 sm:text-sm">
                {cat.label}
              </span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
