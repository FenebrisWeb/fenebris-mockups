"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, animate, AnimatePresence } from "framer-motion";
import { Play, X, ShoppingBag } from "lucide-react";

const VIDEOS = [
  {
    youtubeId: "2oRQm2w4_nc",
    product: {
      name: "Biryani Masala",
      price: 295,
      handle: "unitattva-biryani-masala-premium-aromatic-spice-blend-for-perfect-biryani",
      image: "https://cdn.shopify.com/s/files/1/0782/2413/0298/files/B1.jpg?v=1784631479",
    },
  },
  {
    youtubeId: "b92bjNbiOc0",
    product: {
      name: "Green Cardamom Supreme",
      price: 1210,
      handle: "green-cardamom-supreme-premium-whole-elaichi-pods-aromatic-fresh-spice-for-tea-desserts-curries-baking",
      image: "https://cdn.shopify.com/s/files/1/0782/2413/0298/files/GreenCardamomSeeds.png?v=1765013369",
    },
  },
  {
    youtubeId: "9QMz9YPGTpk",
    product: {
      name: "Anda Curry Masala",
      price: 304,
      handle: "unitattva-anda-curry-masala-authentic-indian-egg-curry-spice-blend",
      image: "https://cdn.shopify.com/s/files/1/0782/2413/0298/files/AN1.jpg?v=1784631530",
    },
  },
  {
    youtubeId: "KeNJWefCU2c",
    product: {
      name: "Thandai Premix",
      price: 300,
      handle: "thandai-premix-instant-traditional-milk-drink-mix",
      image: "https://cdn.shopify.com/s/files/1/0782/2413/0298/files/Untitleddesign_21.jpg?v=1784628848",
    },
  },
  {
    youtubeId: "c-cllLTWMFo",
    product: {
      name: "Kasoori Methi",
      price: 300,
      handle: "kasoori-methi-premium-dried-fenugreek-leaves",
      image: "https://cdn.shopify.com/s/files/1/0782/2413/0298/files/KasooriMethi.jpg?v=1777551688",
    },
  },
  {
    youtubeId: "Zc2AyCAOlQg",
    product: {
      name: "Jaljeera Premix",
      price: 200,
      handle: "jaljeera-premix-instant-refreshing-drink-mix",
      image: "https://cdn.shopify.com/s/files/1/0782/2413/0298/files/Untitleddesign_18.jpg?v=1784624939",
    },
  },
  {
    youtubeId: "maMOshYFH-Y",
    product: {
      name: "Paratha Masala",
      price: 275,
      handle: "paratha-masala-authentic-spice-blend-for-tasty-parathas",
      image: "https://cdn.shopify.com/s/files/1/0782/2413/0298/files/paranthamasala2.png?v=1784625976",
    },
  },
];

const GAP = 20;
const VISIBLE_ON_DESKTOP = 4;
const DESKTOP_BREAKPOINT = 1024;

function embedSrc(youtubeId: string) {
  const params = new URLSearchParams({
    autoplay: "1",
    mute: "1",
    loop: "1",
    playlist: youtubeId,
    controls: "0",
    modestbranding: "1",
    rel: "0",
    showinfo: "0",
    playsinline: "1",
    enablejsapi: "1",
  });
  return `https://www.youtube.com/embed/${youtubeId}?${params.toString()}`;
}

function postToPlayer(iframe: HTMLIFrameElement | null, func: "playVideo" | "pauseVideo") {
  iframe?.contentWindow?.postMessage(
    JSON.stringify({ event: "command", func, args: [] }),
    "*"
  );
}

export default function VideoShowcase() {
  const x = useMotionValue(0);
  const [containerWidth, setContainerWidth] = useState(1400);
  const [isDesktop, setIsDesktop] = useState(true);
  const [activeProduct, setActiveProduct] = useState<(typeof VIDEOS)[number]["product"] | null>(null);
  const [paused, setPaused] = useState<Record<string, boolean>>({});
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const iframeRefs = useRef<Record<string, HTMLIFrameElement | null>>({});

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

  const toggleVideo = (youtubeId: string) => {
    const isPaused = !!paused[youtubeId];
    postToPlayer(iframeRefs.current[youtubeId], isPaused ? "playVideo" : "pauseVideo");
    setPaused((prev) => ({ ...prev, [youtubeId]: !isPaused }));
  };

  const availableWidth = containerWidth - 48;
  const step = isDesktop
    ? availableWidth / VISIBLE_ON_DESKTOP
    : availableWidth * 0.82 + GAP;
  const itemWidth = step - GAP;
  const trackWidth = VIDEOS.length * step - GAP;
  const maxOffset = Math.min(0, availableWidth - trackWidth);

  return (
    <section className="bg-[#fdf8f4] py-14 sm:py-16">
      <div className="mx-auto mb-10 flex w-full max-w-[1400px] flex-col items-center gap-3 px-6 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">
          Watch &amp; Shop
        </span>
        <h2 className="font-serif text-3xl tracking-tight text-zinc-900 sm:text-4xl">
          Recipes Worth Repeating
        </h2>
      </div>

      <div ref={containerRef} className="mx-auto w-full max-w-[1400px] overflow-hidden px-6">
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
          {VIDEOS.map((video, i) => (
            <div
              key={video.youtubeId}
              style={{ width: itemWidth, marginRight: GAP }}
              className="shrink-0"
            >
              <div
                draggable={false}
                className="group relative aspect-[9/16] w-full select-none overflow-hidden rounded-2xl bg-zinc-900 shadow-md"
              >
                <iframe
                  ref={(el) => {
                    iframeRefs.current[video.youtubeId] = el;
                  }}
                  src={embedSrc(video.youtubeId)}
                  title={video.product.name}
                  className="pointer-events-none absolute inset-0 h-full w-full scale-[1.35] object-cover"
                  allow="autoplay; encrypted-media"
                  frameBorder={0}
                />

                <button
                  type="button"
                  onClick={() => {
                    if (!draggingRef.current) toggleVideo(video.youtubeId);
                  }}
                  aria-label={paused[video.youtubeId] ? "Play video" : "Pause video"}
                  className="absolute inset-0"
                >
                  <span
                    className={`absolute inset-0 flex items-center justify-center bg-black/0 transition-colors ${
                      paused[video.youtubeId] ? "bg-black/30" : "group-hover:bg-black/10"
                    }`}
                  >
                    {paused[video.youtubeId] && (
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-[var(--brand)] shadow-lg">
                        <Play className="h-5 w-5 translate-x-0.5" fill="currentColor" strokeWidth={0} />
                      </span>
                    )}
                  </span>
                </button>

                <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-white px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wide text-[var(--brand)] shadow-sm">
                  Unitattva
                </span>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />

                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setActiveProduct(video.product);
                  }}
                  className="absolute bottom-3 left-3 right-3 flex items-center gap-2.5 rounded-full bg-white/95 py-1.5 pl-1.5 pr-3 text-left shadow-md backdrop-blur transition-transform hover:scale-[1.03]"
                >
                  <span className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full bg-zinc-100">
                    <Image
                      src={video.product.image}
                      alt={video.product.name}
                      fill
                      sizes="32px"
                      className="object-contain p-0.5"
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-[11px] font-semibold text-zinc-900 sm:text-xs">
                      {video.product.name}
                    </span>
                    <span className="block text-[11px] font-bold text-[var(--brand)]">
                      &#8377;{video.product.price}
                    </span>
                  </span>
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {activeProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProduct(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setActiveProduct(null)}
                aria-label="Close"
                className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-zinc-500 shadow-sm transition-colors hover:text-[var(--brand)]"
              >
                <X className="h-4 w-4" strokeWidth={2} />
              </button>

              <div className="relative aspect-square w-full bg-[var(--brand)]/[.05]">
                <Image
                  src={activeProduct.image}
                  alt={activeProduct.name}
                  fill
                  sizes="384px"
                  className="object-contain p-8"
                />
              </div>

              <div className="flex flex-col items-center gap-3 p-6 text-center">
                <h3 className="text-lg font-semibold text-zinc-900">
                  {activeProduct.name}
                </h3>
                <span className="text-xl font-bold text-[var(--brand)]">
                  &#8377;{activeProduct.price}
                </span>

                <a
                  href={`https://unitattva.com/products/${activeProduct.handle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[var(--brand)] text-sm font-semibold uppercase tracking-wide text-white transition-opacity hover:opacity-90"
                >
                  <ShoppingBag className="h-4 w-4" strokeWidth={1.75} />
                  View Product
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
