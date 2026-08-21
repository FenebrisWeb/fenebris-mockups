"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

/**
 * Renders a stat string like "10,000+" or "100%" and, once scrolled into view,
 * counts up from 0 to the target number — preserving whatever non-digit
 * prefix/suffix (+, %, commas) the original string had.
 */
export default function Counter({ value }: { value: string }) {
  const match = value.match(/^([\d,]+)(.*)$/);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(match ? `0${match[2]}` : value);

  useEffect(() => {
    if (!inView || !match) return;
    const target = parseInt(match[1].replace(/,/g, ""), 10);
    const suffix = match[2];
    const controls = animate(0, target, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(`${Math.round(v).toLocaleString("en-IN")}${suffix}`),
    });
    return () => controls.stop();
    // `match` is derived fresh from `value` each render — depend on `value` itself.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, value]);

  return <span ref={ref}>{display}</span>;
}
