"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const KEY = "siner-intro-seen";
const silk = [0.22, 1, 0.36, 1] as const;

/** A short curtain with the deer mark, shown once per browser session. */
export function Intro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(KEY) === "1";
      sessionStorage.setItem(KEY, "1");
    } catch {}
    const id = window.setTimeout(() => setShow(false), seen ? 0 : 2300);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-night"
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 1.1, ease: silk }}
        >
          <div className="flex flex-col items-center">
            <motion.div
              className="relative overflow-hidden"
              initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.2, ease: silk }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand/deer.png" alt="" className="h-24 w-auto sm:h-28" />
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent mix-blend-overlay"
                initial={{ x: "-120%" }}
                animate={{ x: "120%" }}
                transition={{ duration: 1.4, delay: 0.6, ease: "easeInOut" }}
              />
            </motion.div>
            <motion.p
              className="font-display mt-6 text-2xl text-ink"
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              animate={{ opacity: 1, letterSpacing: "0.55em" }}
              transition={{ duration: 1.6, delay: 0.3, ease: silk }}
            >
              SINER
            </motion.p>
            <motion.p
              className="eyebrow mt-4 !text-gold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              The Art of Scent
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
