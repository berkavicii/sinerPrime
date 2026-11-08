"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { home } from "@/content/home";
import { common } from "@/content/common";
import { href, type Locale } from "@/lib/i18n";
import { ButtonLink } from "@/components/ui/button";

const StoryCanvas = dynamic(() => import("@/components/three/story-canvas"), { ssr: false });

const silk = [0.22, 1, 0.36, 1] as const;

function Step({
  progress,
  at,
  k,
  title,
  body,
}: {
  progress: MotionValue<number>;
  at: [number, number];
  k: string;
  title: string;
  body: string;
}) {
  const [a, b] = at;
  const opacity = useTransform(progress, [a, a + 0.03, b - 0.03, b], [0, 1, 1, 0]);
  const y = useTransform(progress, [a, a + 0.04, b - 0.03, b], [40, 0, 0, -30]);
  return (
    <motion.div style={{ opacity, y }} className="absolute inset-x-0 bottom-0 lg:top-1/2 lg:bottom-auto lg:-translate-y-1/2">
      <p className="font-display text-gold-foil text-6xl leading-none sm:text-7xl">{k}</p>
      <h3 className="display mt-4 text-[clamp(1.9rem,3.2vw,3rem)] text-ink">{title}</h3>
      <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-ink-soft">{body}</p>
    </motion.div>
  );
}

export function Story({ lang }: { lang: Locale }) {
  const s = home[lang].story;
  const c = common[lang];
  const track = useRef<HTMLDivElement>(null);
  const labelEls = useRef<(HTMLElement | null)[]>([]);
  const { scrollYProgress: p } = useScroll({ target: track, offset: ["start start", "end end"] });

  const heroOpacity = useTransform(p, [0, 0.07], [1, 0]);
  const heroY = useTransform(p, [0, 0.08], [0, -80]);
  const specsOpacity = useTransform(p, [0.5, 0.56, 0.78, 0.82], [0, 1, 1, 0]);
  const outroOpacity = useTransform(p, [0.86, 0.92], [0, 1]);
  const outroY = useTransform(p, [0.86, 0.94], [60, 0]);
  const outroEvents = useTransform(p, (v) => (v > 0.88 ? "auto" : "none"));
  const rail = useTransform(p, [0, 1], ["0%", "100%"]);
  const glow = useTransform(p, [0, 0.3, 0.5, 0.9], [0.9, 0.5, 0.25, 0.7]);

  const steps: [number, number][] = [
    [0.18, 0.33],
    [0.33, 0.48],
    [0.48, 0.63],
    [0.63, 0.8],
  ];

  return (
    <section ref={track} className="relative h-[620vh]" aria-label="ONIX">
      <div className="sticky top-0 h-dvh overflow-hidden">
        {/* warm halo behind the object */}
        <motion.div
          style={{ opacity: glow }}
          className="pointer-events-none absolute top-[27%] left-1/2 lg:top-[38%] h-[70vmin] w-[70vmin] -translate-1/2 rounded-full bg-[radial-gradient(circle,rgba(200,164,106,0.28),rgba(200,164,106,0.06)_45%,transparent_70%)] blur-2xl lg:left-[68%]"
        />
        <div className="absolute inset-0">
          <StoryCanvas progress={p} labelEls={labelEls} />
        </div>

        {/* part labels, positioned every frame by the canvas */}
        <div className="pointer-events-none absolute inset-0 z-10 hidden sm:block" aria-hidden>
          {([
            [s.labels.body, "left"],
            [s.labels.bowl, "right"],
            [s.labels.light, "right"],
            [s.labels.bottle, "right"],
          ] as const).map(([text, side], i) => (
            <div
              key={text}
              ref={(el) => {
                labelEls.current[i] = el;
              }}
              className="absolute top-0 left-0 opacity-0 will-change-transform"
            >
              <div
                className={`flex -translate-y-1/2 items-center gap-3 whitespace-nowrap ${side === "left" ? "-translate-x-full flex-row-reverse" : ""}`}
              >
                <span className="block size-1.5 rounded-full bg-gold-hi shadow-[0_0_12px_2px_rgba(236,215,170,0.6)]" />
                <span className={`block h-px w-10 sm:w-16 ${side === "left" ? "bg-gradient-to-l" : "bg-gradient-to-r"} from-gold/80 to-gold/0`} />
                <span className="eyebrow !text-[10px] !text-ink sm:!text-[11px]">{text}</span>
              </div>
            </div>
          ))}
        </div>

        {/* hero copy */}
        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="gutter pointer-events-none absolute inset-x-0 bottom-0 pb-[12vh] lg:pb-[14vh]"
        >
          <motion.p
            className="eyebrow mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4, duration: 1 }}
          >
            {s.eyebrow}
          </motion.p>
          <h1 className="display text-[clamp(2.9rem,7.6vw,9.5rem)] text-ink">
            {s.title.map((line, i) => (
              <span key={i} className="block overflow-hidden pb-[0.08em]">
                <motion.span
                  className={i === 1 ? "text-gold-foil block italic" : "block"}
                  initial={{ y: "105%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1.4, ease: silk, delay: 2.35 + i * 0.14 }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>
          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <motion.p
              className="max-w-md text-[15px] leading-relaxed text-ink-soft"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.9, duration: 1.2, ease: silk }}
            >
              {s.lead}
            </motion.p>
            <motion.div
              className="flex items-center gap-4 text-[11px] tracking-[0.3em] text-muted uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.2, duration: 1 }}
            >
              <span className="relative block h-12 w-px overflow-hidden bg-line">
                <motion.span
                  className="absolute inset-x-0 top-0 h-1/2 bg-gold"
                  animate={{ y: ["-100%", "200%"] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                />
              </span>
              {c.scroll}
            </motion.div>
          </div>
        </motion.div>

        {/* exploded-view steps */}
        <div className="gutter pointer-events-none absolute inset-x-0 bottom-[8vh] h-[42vh] lg:top-0 lg:bottom-0 lg:h-auto lg:w-[38%]">
          <div className="relative h-full">
            {s.steps.map((step, i) => (
              <Step key={step.k} progress={p} at={steps[i]} {...step} />
            ))}
          </div>
        </div>

        {/* specs */}
        <motion.div
          style={{ opacity: specsOpacity }}
          className="gutter pointer-events-none absolute top-24 right-0 hidden gap-10 lg:flex"
        >
          {s.specs.map((spec) => (
            <div key={spec.label} className="text-right">
              <p className="font-display text-4xl text-ink">
                {String(spec.value).replace(".", lang === "tr" ? "," : ".")}
                <span className="ml-1 text-lg text-gold">{spec.unit}</span>
              </p>
              <p className="eyebrow mt-2">{spec.label}</p>
            </div>
          ))}
        </motion.div>

        {/* outro */}
        <motion.div
          style={{ opacity: outroOpacity, y: outroY, pointerEvents: outroEvents }}
          className="gutter absolute inset-x-0 bottom-[10vh] lg:top-1/2 lg:bottom-auto lg:w-1/2 lg:-translate-y-1/2"
        >
          <p className="display max-w-[16ch] text-[clamp(2.2rem,4.6vw,4.6rem)] text-ink">{s.outro}</p>
          <ButtonLink href={href(lang, "onix#studio")} className="mt-10" size="lg">
            {s.outroCta}
          </ButtonLink>
        </motion.div>

        {/* progress rail */}
        <div className="absolute top-1/2 right-4 hidden h-40 w-px -translate-y-1/2 bg-line sm:block lg:right-8">
          <motion.div style={{ height: rail }} className="w-px bg-gold" />
        </div>
      </div>
    </section>
  );
}
