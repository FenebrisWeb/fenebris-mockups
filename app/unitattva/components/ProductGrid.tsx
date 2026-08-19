"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Heart, ShoppingBag, Check } from "lucide-react";
import { useCart } from "./CartContext";
import { useWishlist } from "./WishlistContext";
import { PRODUCTS } from "./products";

const INITIAL_COUNT = 8;
const LOAD_STEP = 2;

export default function ProductGrid() {
  const { addToCart } = useCart();
  const { has: isWishlisted, toggle: toggleWishlist } = useWishlist();
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set());
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const handleAddToCart = (handle: string) => {
    if (addedItems.has(handle)) return;
    addToCart();
    setAddedItems((prev) => new Set(prev).add(handle));
  };

  useEffect(() => {
    const node = sentinelRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((count) => Math.min(count + LOAD_STEP, PRODUCTS.length));
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const visibleProducts = PRODUCTS.slice(0, visibleCount);

  return (
    <section id="shop" className="bg-[#fdf8f4]">
      <div className="mx-auto w-full max-w-[1400px] px-6 py-16">
        <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-3 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">
            Shop All
          </span>
          <h1 className="font-serif text-3xl tracking-tight text-zinc-900 sm:text-4xl">
            Whole Spices, Powders &amp; Blends
          </h1>
          <p className="text-sm text-zinc-600 sm:text-base">
            Single-origin, lab-tested, and hand-selected for purity. No
            artificial colors, no fillers, nothing but the real thing.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {visibleProducts.map((product, i) => (
            <a
              key={product.handle}
              href={`https://unitattva.com/products/${product.handle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-square overflow-hidden bg-[var(--brand)]/[.05]">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(min-width: 1024px) 320px, 45vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-xs text-zinc-400">
                    Image coming soon
                  </div>
                )}

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
                <span className="absolute left-2.5 top-2.5 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-zinc-500">
                  {product.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-1.5 p-4">
                <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-zinc-900">
                  {product.title}
                </h3>
                <span className="text-xs text-zinc-400">{product.weight}</span>

                <div className="mt-1 flex items-center gap-2">
                  <span className="text-base font-bold text-zinc-900">
                    &#8377;{product.price}
                  </span>
                  {product.compareAt && product.compareAt > product.price && (
                    <span className="text-xs text-zinc-400 line-through">
                      &#8377;{product.compareAt}
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    handleAddToCart(product.handle);
                  }}
                  disabled={addedItems.has(product.handle)}
                  className={`mt-3 flex h-9 items-center justify-center gap-1.5 rounded-full text-xs font-semibold uppercase tracking-wide text-white transition-colors ${
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
            </a>
          ))}
        </div>

        {visibleCount < PRODUCTS.length && (
          <div ref={sentinelRef} className="flex justify-center py-10">
            <span className="h-6 w-6 animate-spin rounded-full border-2 border-[var(--brand)]/30 border-t-[var(--brand)]" />
          </div>
        )}
      </div>
    </section>
  );
}
