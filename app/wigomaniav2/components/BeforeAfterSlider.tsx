"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronsLeftRight } from "lucide-react";

export default function BeforeAfterSlider({
  before,
  after,
  alt,
}: {
  before: string;
  after: string;
  alt: string;
}) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  const setFromClientX = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  };

  const onPointerDown = (e: React.PointerEvent) => {
    draggingRef.current = true;
    containerRef.current?.setPointerCapture?.(e.pointerId);
    setFromClientX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    setFromClientX(e.clientX);
  };

  const endDrag = () => {
    draggingRef.current = false;
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
      onPointerCancel={endDrag}
      onDragStart={(e) => e.preventDefault()}
      data-drag-lock
      className="relative aspect-[3/4] w-full touch-none select-none overflow-hidden rounded-xl bg-zinc-200 cursor-ew-resize [&_img]:pointer-events-none [&_img]:[-webkit-user-drag:none]"
    >
      {/* After — full image, revealed as the handle is dragged left */}
      <Image
        src={after}
        alt={`${alt} — after`}
        fill
        quality={100}
        sizes="(min-width: 1024px) 22vw, 70vw"
        className="object-cover"
        draggable={false}
      />

      {/* Before — clipped to the left of the handle */}
      <div className="pointer-events-none absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Image
          src={before}
          alt={`${alt} — before`}
          fill
          quality={100}
          sizes="(min-width: 1024px) 22vw, 70vw"
          className="object-cover"
          draggable={false}
        />
      </div>

      <span className="pointer-events-none absolute left-2 top-2 rounded-full bg-black/70 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide text-white">
        Before
      </span>
      <span className="pointer-events-none absolute right-2 top-2 rounded-full bg-[var(--brand)] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide text-white">
        After
      </span>

      {/* Divider line + drag handle */}
      <div
        className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.08)]"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md">
          <ChevronsLeftRight className="h-4 w-4 text-black" strokeWidth={2} />
        </div>
      </div>
    </div>
  );
}
