"use client";

import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

type Tab = "kurumsal" | "oteller";
const tabs: Tab[] = ["kurumsal", "oteller"];

/** Two project tracks behind one switch; `#kurumsal` and `#oteller` in the URL pick the tab. */
export function ProjectTabs({
  labels,
  kurumsal,
  oteller,
}: {
  labels: Record<Tab, string>;
  kurumsal: ReactNode;
  oteller: ReactNode;
}) {
  const [active, setActive] = useState<Tab>("kurumsal");

  useEffect(() => {
    const read = () => {
      const h = window.location.hash.slice(1);
      if (tabs.includes(h as Tab)) setActive(h as Tab);
    };
    read();
    window.addEventListener("hashchange", read);
    return () => window.removeEventListener("hashchange", read);
  }, []);

  const pick = (t: Tab) => {
    setActive(t);
    history.replaceState(null, "", `#${t}`);
  };

  return (
    <section className="relative border-t border-line">
      {/* anchors for links from the home page */}
      <span id="kurumsal" className="absolute -top-20" aria-hidden />
      <span id="oteller" className="absolute -top-20" aria-hidden />

      <div className="border-b border-line bg-night/80 backdrop-blur-xl lg:sticky lg:top-[72px] lg:z-20">
        <div className="gutter mx-auto flex max-w-[1600px] gap-2 py-3" role="tablist">
          {tabs.map((t) => (
            <button
              key={t}
              role="tab"
              aria-selected={active === t}
              onClick={() => pick(t)}
              className={cn(
                "h-11 rounded-full px-5 text-[13px] tracking-wide transition-colors duration-500 sm:px-7",
                active === t ? "bg-gold text-night" : "border border-line text-ink-soft hover:border-gold hover:text-ink",
              )}
            >
              {labels[t]}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          role="tabpanel"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {active === "kurumsal" ? kurumsal : oteller}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
