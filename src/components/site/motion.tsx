"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView, useScroll, useTransform, animate, useMotionValue, type MotionValue } from "motion/react";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

const silk = [0.22, 1, 0.36, 1] as const;

/** Splits a line into words that rise out of a mask, one after another. */
export function RiseText({
  text,
  className,
  delay = 0,
  as: Tag = "span",
  innerClassName,
}: {
  text: string;
  className?: string;
  /** Applied to each moving word, e.g. for background-clip text effects. */
  innerClassName?: string;
  delay?: number;
  as?: "span" | "h1" | "h2" | "h3" | "p";
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -12% 0px" });
  const words = text.split(" ");
  return (
    <Tag ref={ref as never} className={cn("block", className)} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} aria-hidden className="inline-block overflow-hidden pb-[0.12em] align-bottom">
          <motion.span
            className={cn("inline-block will-change-transform", innerClassName)}
            initial={{ y: "110%" }}
            animate={inView ? { y: "0%" } : undefined}
            transition={{ duration: 1.1, ease: silk, delay: delay + i * 0.06 }}
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

export function FadeIn({
  children,
  className,
  delay = 0,
  y = 28,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 1.1, ease: silk, delay }}
    >
      {children}
    </motion.div>
  );
}

function Word({ word, progress, range: [a, b] }: { word: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, [a, b], [0.14, 1]);
  return (
    <motion.span style={{ opacity }} className="inline">
      {word}{" "}
    </motion.span>
  );
}

/** Words light up as the paragraph scrolls through the viewport. */
export function ScrollLitText({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = text.split(" ");
  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => (
        <Word key={i} word={w} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} />
      ))}
    </p>
  );
}

/** Counts up to a value the first time it enters the viewport. */
export function Counter({ value, decimals = 0, className }: { value: number; decimals?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, value, { duration: 2, ease: silk });
    const unsub = mv.on("change", (v) => {
      if (ref.current) ref.current.textContent = v.toFixed(decimals).replace(".", ",");
    });
    return () => {
      controls.stop();
      unsub();
    };
  }, [inView, mv, value, decimals]);
  return (
    <span ref={ref} className={className}>
      {(0).toFixed(decimals)}
    </span>
  );
}

/** Image that drifts against the scroll and settles from a slight zoom. */
export function ParallaxImage({
  src,
  alt,
  className,
  imgClassName,
  strength = 60,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-strength, strength]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1.18, 1.06]);
  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        style={{ y, scale }}
        className={cn("absolute inset-0 h-full w-full object-cover", imgClassName)}
      />
    </div>
  );
}
