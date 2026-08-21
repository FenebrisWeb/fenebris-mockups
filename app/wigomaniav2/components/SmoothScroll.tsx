"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

/**
 * Framer-motion virtual scroll for this page only.
 *
 * The page still scrolls natively (a spacer div reserves the real height, so the
 * browser's own scrollbar/wheel/touch handling — and every nested drag gesture in
 * Hero/Transformations/etc — is completely untouched). The wrapped content renders in
 * a `position: fixed` layer whose vertical offset is a spring chasing the real scroll
 * position. Because the spring lags and slightly overshoots, the content keeps
 * "traveling" after you stop scrolling — that lag is the slippery feel.
 *
 * `topOffset` should equal the height of whatever sticky header sits above this
 * (rendered outside SmoothScroll, in real flow, so its own `sticky` still works) —
 * the fixed layer starts right below it instead of at the very top of the viewport.
 */
export default function SmoothScroll({
  children,
  topOffset = 0,
}: {
  children: ReactNode;
  topOffset?: number;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const measure = () => setHeight(el.scrollHeight);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const { scrollY } = useScroll();
  // Low stiffness/damping = pronounced slip, with a touch of overshoot before it settles.
  const ySpring = useSpring(scrollY, { stiffness: 90, damping: 16, mass: 0.4 });
  const y = useTransform(ySpring, (v) => -v);

  return (
    <>
      <div aria-hidden style={{ height }} />
      <motion.div
        ref={contentRef}
        style={{ y, top: topOffset }}
        className="fixed left-0 w-full will-change-transform"
      >
        {children}
      </motion.div>
    </>
  );
}
