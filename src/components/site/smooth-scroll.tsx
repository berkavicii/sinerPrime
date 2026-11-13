"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export function SmoothScroll() {
  const lenis = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const l = new Lenis({ lerp: 0.09, wheelMultiplier: 0.9, anchors: { offset: -40 } });
    lenis.current = l;
    let raf = requestAnimationFrame(function loop(time) {
      l.raf(time);
      raf = requestAnimationFrame(loop);
    });
    return () => {
      cancelAnimationFrame(raf);
      l.destroy();
      lenis.current = null;
    };
  }, []);

  // Lenis keeps its own scroll position, so a new page would open where the last one was left:
  // start every page at the top, or at its #anchor when the link carries one.
  useEffect(() => {
    const l = lenis.current;
    const id = decodeURIComponent(window.location.hash.slice(1));
    const target = id ? document.getElementById(id) : null;
    if (target) {
      const t = window.setTimeout(() => {
        if (l) l.scrollTo(target, { offset: -40, immediate: true, force: true });
        else target.scrollIntoView();
      }, 60);
      return () => window.clearTimeout(t);
    }
    if (l) l.scrollTo(0, { immediate: true, force: true });
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
