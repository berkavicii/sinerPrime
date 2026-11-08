"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const silk = [0.22, 1, 0.36, 1] as const;

/** A stone-lit stage that opens up as you scroll, Apple-keynote style. */
export function ZoomHero({ name, eyebrow, title }: { name: string; eyebrow: string; title: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const inset = useTransform(p, [0, 0.6], ["9%", "0%"]);
  const radius = useTransform(p, [0, 0.6], [28, 0]);
  const scale = useTransform(p, [0, 1], [0.92, 1.12]);
  const nameY = useTransform(p, [0, 0.7], ["0%", "-60%"]);
  const nameOpacity = useTransform(p, [0.35, 0.7], [1, 0]);
  const titleOpacity = useTransform(p, [0.45, 0.75], [0, 1]);
  const titleY = useTransform(p, [0.45, 0.8], [40, 0]);

  return (
    <section ref={ref} className="relative h-[260vh]">
      <div className="sticky top-0 h-dvh overflow-hidden">
        <motion.div style={{ inset, borderRadius: radius }} className="absolute overflow-hidden bg-[#e9e6e1]">
          <motion.img
            src="/kubbe/hero.webp"
            alt={name}
            style={{ scale }}
            className="absolute top-1/2 left-1/2 h-[64%] w-auto max-w-none -translate-1/2 object-contain mix-blend-multiply sm:h-[78%]"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(10,10,11,0.35))]" />
        </motion.div>

        <motion.div style={{ y: nameY, opacity: nameOpacity }} className="pointer-events-none absolute inset-0 flex flex-col items-center justify-end pb-[12vh] sm:justify-center sm:pb-0">
          <motion.p
            className="eyebrow !text-night/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            {eyebrow}
          </motion.p>
          <h1 className="display mt-4 overflow-hidden text-[clamp(6rem,24vw,26rem)] leading-[0.8] tracking-[-0.05em] text-night mix-blend-overlay">
            <motion.span className="block" initial={{ y: "100%" }} animate={{ y: "0%" }} transition={{ duration: 1.4, ease: silk, delay: 0.2 }}>
              {name}
            </motion.span>
          </h1>
        </motion.div>

        <motion.div style={{ opacity: titleOpacity, y: titleY }} className="gutter absolute inset-x-0 bottom-[8vh]">
          <p className="display max-w-[12ch] text-[clamp(2.6rem,6vw,6.4rem)] text-night">{title}</p>
        </motion.div>
      </div>
    </section>
  );
}
