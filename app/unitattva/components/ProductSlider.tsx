"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, animate } from "framer-motion";
import { Heart, ShoppingBag, Check, Star, Tag, Leaf } from "lucide-react";
import type { Product } from "./products";
import { useCart } from "./CartContext";
import { useWishlist } from "./WishlistContext";
import FadeUp from "./FadeUp";

const GAP = 20;
const VISIBLE_ON_DESKTOP = 4;
const DESKTOP_BREAKPOINT = 1024;
const AUTOPLAY_MS = 3500;

export default function ProductSlider({
  eyebrow,
  heading,
  products,
  badgeLabel,
}: {
  eyebrow: string;
  heading: string;
  products: Product[];
  badgeLabel: string;
}) {
  const { addToCart } = useCart();
  const { has: isWishlisted, toggle: toggleWishlist } = useWishlist();
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set());

  const x = useMotionValue(0);
  const [containerWidth, setContainerWidth] = useState(1400);
  const [isDesktop, setIsDesktop] = useState(true);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  // Render two copies back to back so there's always a "next" card to slide
  // into, then invisibly rewind by one full set once we cross that boundary.
  // That's what makes reaching the last card wrap seamlessly back to the
  // first, instead of hitting a dead end.
  const loop = [...products, ...products];

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

  const availableWidth = containerWidth - 48;
  const step = isDesktop
    ? availableWidth / VISIBLE_ON_DESKTOP
    : availableWidth * 0.78 + GAP;
  const itemWidth = step - GAP;
  const setWidth = products.length * step;

  // Keep x within [-setWidth, 0] at all times: once autoplay/drag pushes it
  // past a full set width, jump back by exactly one set width. Since set 2
  // is an identical copy of set 1, that jump is visually invisible.
  useEffect(() => {
    const unsub = x.on("change", (latest) => {
      if (latest <= -setWidth) {
        x.set(latest + setWidth);
      } else if (latest > 0) {
        x.set(latest - setWidth);
      }
      const raw = Math.round(-x.get() / step);
      setActive(((raw % products.length) + products.length) % products.length);
    });
    return unsub;
  }, [x, step, setWidth, products.length]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      if (draggingRef.current) return;
      animate(x, x.get() - step, { duration: 0.7, ease: "easeInOut" });
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, x, step]);

  const goTo = (i: number) => {
    // Animate to the nearest occurrence of index i, forward or backward,
    // whichever is the shorter distance from where we are right now.
    const current = -x.get() / step;
    const k = Math.round((current - i) / products.length);
    const target = i + k * products.length;
    animate(x, -target * step, { duration: 0.6, ease: "easeInOut" });
  };

  const handleAddToCart = (handle: string) => {
    if (addedItems.has(handle)) return;
    addToCart();
    setAddedItems((prev) => new Set(prev).add(handle));
  };

  return (
    <section
      className="bg-white py-14 sm:py-16"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto mb-10 flex w-full max-w-[1400px] flex-col items-center gap-3 px-6 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">
          {eyebrow}
        </span>
        <h2 className="font-serif text-3xl tracking-tight text-zinc-900 sm:text-4xl">
          {heading}
        </h2>
      </div>

      <div ref={containerRef} className="mx-auto w-full max-w-[1400px] overflow-hidden px-6">
        <motion.div
          drag="x"
          dragConstraints={{ left: -setWidth * 1.5, right: setWidth * 0.5 }}
          dragElastic={0.02}
          onDragStart={() => {
            draggingRef.current = true;
          }}
          onDragEnd={() => {
            draggingRef.current = false;
            const nearest = Math.round(x.get() / step) * step;
            animate(x, nearest, { duration: 0.4, ease: "easeOut" });
          }}
          style={{ x }}
          className="flex w-max cursor-grab select-none active:cursor-grabbing"
        >
          {loop.map((product, i) => {
            const savings =
              product.compareAt && product.compareAt > product.price
                ? product.compareAt - product.price
                : null;
            const savingsPercent = savings
              ? Math.round((savings / product.compareAt!) * 100)
              : null;

            return (
              <div
                key={`${product.handle}-${i}`}
                style={{ width: itemWidth, marginRight: GAP }}
                className="shrink-0"
              >
                <FadeUp
                  delay={(i % VISIBLE_ON_DESKTOP) * 0.06}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <a
                    href={`https://unitattva.com/products/${product.handle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    draggable={false}
                    onClick={(e) => {
                      if (draggingRef.current) e.preventDefault();
                    }}
                    className="relative aspect-square w-full overflow-hidden bg-[var(--brand)]/[.05]"
                  >
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        draggable={false}
                        loading={i === 0 ? "eager" : "lazy"}
                        sizes="(min-width: 1024px) 320px, 78vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-xs text-zinc-400">
                        Image coming soon
                      </div>
                    )}

                    <span className="absolute left-2.5 top-2.5 rounded-full bg-[var(--brand)] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                      {badgeLabel}
                    </span>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleWishlist(product.handle);
                      }}
                      aria-label="Add to wishlist"
                      className="absolute right-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-zinc-500 shadow-sm transition-colors hover:text-[var(--brand)]"
                    >
                      <Heart
                        className="h-4 w-4"
                        strokeWidth={1.75}
                        fill={isWishlisted(product.handle) ? "currentColor" : "none"}
                        color={isWishlisted(product.handle) ? "var(--brand)" : "currentColor"}
                      />
                    </button>
                  </a>

                  <div className="flex flex-1 flex-col gap-1.5 p-4">
                    <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-zinc-900">
                      {product.title}
                    </h3>
                    <span className="text-xs text-zinc-400">{product.weight}</span>

                    <div className="flex items-center gap-1.5">
                      <div className="flex items-center gap-0.5 text-amber-400">
                        {Array.from({ length: 5 }).map((_, s) => (
                          <Star
                            key={s}
                            className="h-3.5 w-3.5"
                            strokeWidth={0}
                            fill={s < Math.round(product.rating) ? "currentColor" : "#e4e4e7"}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-zinc-400">
                        ({product.reviewCount} reviews)
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-base font-bold text-zinc-900">
                        &#8377;{product.price}
                      </span>
                      {product.compareAt && product.compareAt > product.price && (
                        <span className="text-xs text-zinc-400 line-through">
                          &#8377;{product.compareAt}
                        </span>
                      )}
                    </div>

                    {savings ? (
                      <div className="flex items-center gap-1.5">
                        <span className="flex items-center gap-1 rounded-full bg-green-50 px-2 py-0.5 text-[11px] font-semibold text-green-700">
                          <Tag className="h-3 w-3" strokeWidth={2} />
                          You Save: &#8377;{savings}
                        </span>
                        <span className="rounded-full bg-green-600 px-2 py-0.5 text-[11px] font-bold text-white">
                          {savingsPercent}% OFF
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1.5">
                        <span className="flex items-center gap-1 rounded-full bg-[var(--brand)]/10 px-2 py-0.5 text-[11px] font-semibold text-[var(--brand)]">
                          <Leaf className="h-3 w-3" strokeWidth={2} />
                          100% Pure &amp; Natural
                        </span>
                      </div>
                    )}

                    <button
                      type="button"
                      onClick={() => handleAddToCart(product.handle)}
                      disabled={addedItems.has(product.handle)}
                      className={`mt-2 flex h-9 items-center justify-center gap-1.5 rounded-full text-xs font-semibold uppercase tracking-wide text-white transition-colors ${
                        addedItems.has(product.handle)
                          ? "bg-green-600"
                          : "bg-[var(--brand)] hover:opacity-90"
                      }`}
                    >
                      {addedItems.has(product.handle) ? (
                        <>
                          <Check className="h-3.5 w-3.5" strokeWidth={2} />
                          Already Added
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="h-3.5 w-3.5" strokeWidth={1.75} />
                          Add to Cart
                        </>
                      )}
                    </button>
                  </div>
                </FadeUp>
              </div>
            );
          })}
        </motion.div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {products.map((product, i) => (
            <button
              key={product.handle}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to ${product.title}`}
              className={`h-1.5 rounded-full transition-all ${
                i === active ? "w-6 bg-[var(--brand)]" : "w-1.5 bg-zinc-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
