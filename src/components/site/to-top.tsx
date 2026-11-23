"use client";

import { useEffect, useState } from "react";
import { common } from "@/content/common";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/** A quiet "back to top" mark, bottom right; shows up once the page has been scrolled. */
export function ToTop({ lang }: { lang: Locale }) {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    // a plain #top anchor, so the smooth scroller carries it up gently
    <a
      href="#top"
      aria-label={common[lang].toTop}
      tabIndex={shown ? 0 : -1}
      className={cn(
        "group fixed right-5 bottom-5 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-night/70 text-gold-hi backdrop-blur-md transition-all duration-500 hover:border-gold hover:bg-gold hover:text-night sm:right-8 sm:bottom-8",
        shown ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0",
      )}
    >
      <svg viewBox="0 0 12 12" className="h-3 w-3 transition-transform duration-500 group-hover:-translate-y-0.5" aria-hidden>
        <path d="M6 10V2M2.5 5.5 6 2l3.5 3.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    </a>
  );
}
