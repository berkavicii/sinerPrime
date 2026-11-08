"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { home } from "@/content/home";
import { href, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { Counter, FadeIn, ParallaxImage, RiseText, ScrollLitText } from "@/components/site/motion";
import { ButtonLink } from "@/components/ui/button";

const silk = [0.22, 1, 0.36, 1] as const;

export function Marquee({ lang }: { lang: Locale }) {
  const words = home[lang].marquee;
  const row = [...words, ...words, ...words];
  return (
    <div className="relative overflow-hidden border-y border-line py-8" aria-hidden>
      <motion.div
        className="flex w-max gap-14 whitespace-nowrap"
        animate={{ x: ["0%", "-33.333%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-14">
            <span
              className={cn(
                "display text-[clamp(3rem,7vw,7rem)]",
                i % 2 ? "text-gold-foil italic" : "text-transparent [-webkit-text-stroke:1px_rgba(242,237,228,0.35)]",
              )}
            >
              {w}
            </span>
            <svg viewBox="0 0 20 20" className="size-4 text-gold">
              <path d="M10 0l2.4 7.6L20 10l-7.6 2.4L10 20l-2.4-7.6L0 10l7.6-2.4z" fill="currentColor" />
            </svg>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function About({ lang }: { lang: Locale }) {
  const a = home[lang].about;
  return (
    <section className="gutter relative mx-auto max-w-[1600px] py-20 sm:py-32 lg:py-48">
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="eyebrow">{a.eyebrow}</p>
          <div className="mt-10 flex items-end gap-4">
            <Counter value={15} className="display text-gold-foil text-[clamp(7rem,14vw,13rem)] leading-[0.8]" />
            <span className="pb-3 text-[13px] tracking-wide text-muted">
              {a.years}
              <br />
              2010 — {new Date().getFullYear()}
            </span>
          </div>
        </div>
        <div className="lg:col-span-8">
          <ScrollLitText text={a.quote} className="display text-[clamp(1.7rem,3.2vw,3.1rem)] leading-[1.12] text-ink" />
          <FadeIn className="mt-14 grid gap-10 border-t border-line pt-10 sm:grid-cols-2">
            <div>
              <p className="text-[15px] leading-relaxed text-ink-soft">{a.body}</p>
              <ButtonLink href={href(lang, "kurumsal")} variant="ghost" className="mt-8">
                {a.more}
              </ButtonLink>
            </div>
            <ParallaxImage
              src="/onix/aselsan-stone.webp"
              alt=""
              className="aspect-[4/5] rounded-sm sm:-mt-32"
              strength={40}
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export function Pillars({ lang }: { lang: Locale }) {
  const p = home[lang].pillars;
  const track = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: track, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);
  const bar = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={track} className="relative h-[400vh] bg-night-2">
      <div className="sticky top-0 flex h-dvh flex-col overflow-hidden">
        <div className="gutter flex items-end justify-between pt-28">
          <div>
            <p className="eyebrow">{p.eyebrow}</p>
            <h2 className="display mt-4 max-w-[22ch] text-[clamp(1.8rem,3.4vw,3.2rem)] text-ink">{p.title}</h2>
          </div>
          <div className="hidden h-px w-48 bg-line md:block">
            <motion.div style={{ width: bar }} className="h-px bg-gold" />
          </div>
        </div>
        <motion.div style={{ x }} className="flex h-full w-[400%] items-stretch">
          {p.items.map((item, i) => (
            <article key={item.word} className="gutter grid w-1/4 shrink-0 items-center gap-10 py-10 md:grid-cols-2 md:gap-16">
              <div className="order-2 md:order-1">
                <p className="eyebrow !text-gold">0{i + 1} / 04</p>
                <h3 className="display mt-6 text-[clamp(4rem,11vw,11rem)] text-ink">{item.word}</h3>
                <p className="mt-6 max-w-md text-[16px] leading-relaxed text-ink-soft">{item.body}</p>
              </div>
              <div className="order-1 h-[34vh] overflow-hidden md:order-2 md:h-[62vh]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.image} alt="" loading="lazy" className="h-full w-full object-cover" />
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function Collection({ lang }: { lang: Locale }) {
  const c = home[lang].collection;
  return (
    <section className="gutter mx-auto max-w-[1600px] py-20 sm:py-32 lg:py-44">
      <div className="mb-16 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div>
          <p className="eyebrow">{c.eyebrow}</p>
          <RiseText as="h2" text={c.title} className="display mt-5 text-[clamp(2.6rem,6vw,6rem)] text-ink" />
        </div>
      </div>
      <div className="grid gap-5 lg:grid-cols-12 lg:grid-rows-[1fr_1fr]">
        {c.items.map((item, i) => (
          <FadeIn
            key={item.path}
            delay={i * 0.1}
            className={cn(
              i === 0 && "lg:col-span-7 lg:row-span-2",
              i === 1 && "lg:col-span-5",
              i === 2 && "lg:col-span-5",
            )}
          >
            <Link
              href={href(lang, item.path)}
              className={cn(
                "group relative flex h-full min-h-[440px] flex-col justify-end overflow-hidden",
                i === 0 && "lg:min-h-[860px]",
                i === 1 && "bg-stone",
              )}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                className={cn(
                  "absolute inset-0 h-full w-full transition-transform duration-[1.6s] ease-[var(--ease-silk)] group-hover:scale-[1.04]",
                  i === 1 ? "object-contain p-12 pb-40 mix-blend-multiply" : "object-cover",
                )}
              />
              <div
                className={cn(
                  "absolute inset-0",
                  i === 1
                    ? "bg-gradient-to-t from-night/90 via-night/10 to-transparent"
                    : "bg-gradient-to-t from-night via-night/30 to-transparent",
                )}
              />
              <div className="relative flex items-end justify-between gap-6 p-7 sm:p-10">
                <div>
                  <p className="eyebrow !text-gold-hi">{item.kind}</p>
                  <h3 className="display mt-3 text-[clamp(2.4rem,4.2vw,4.4rem)] text-ink">{item.name}</h3>
                  <p className="mt-3 max-w-xs text-[14px] text-ink-soft">{item.body}</p>
                </div>
                <span className="flex size-14 shrink-0 items-center justify-center rounded-full border border-ink/25 text-ink transition-all duration-500 group-hover:rotate-[-45deg] group-hover:border-gold group-hover:bg-gold group-hover:text-night">
                  <svg viewBox="0 0 16 12" className="h-3 w-4">
                    <path d="M0 6h14M9 1l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.3" />
                  </svg>
                  <span className="sr-only">{c.cta}</span>
                </span>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

export function Departments({ lang }: { lang: Locale }) {
  const d = home[lang].departments;
  const [open, setOpen] = useState(0);
  return (
    <section className="gutter mx-auto max-w-[1600px] py-20 sm:py-32 lg:py-44">
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:sticky lg:top-32 lg:col-span-4 lg:self-start">
          <p className="eyebrow">{d.eyebrow}</p>
          <RiseText as="h2" text={d.title} className="display mt-5 text-[clamp(2.4rem,4.6vw,4.6rem)] text-ink" />
          <p className="mt-8 max-w-sm text-[15px] leading-relaxed text-ink-soft">{d.lead}</p>
        </div>
        <ol className="border-t border-line lg:col-span-8">
          {d.items.map((item, i) => {
            const active = open === i;
            return (
              <li key={item.name} className="border-b border-line">
                <button
                  onClick={() => setOpen(active ? -1 : i)}
                  aria-expanded={active}
                  className="group flex w-full items-baseline gap-6 py-7 text-left sm:gap-10"
                >
                  <span className={cn("w-8 shrink-0 text-[12px] tracking-[0.2em] transition-colors", active ? "text-gold" : "text-muted")}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={cn(
                      "display flex-1 text-[clamp(1.5rem,2.8vw,2.6rem)] transition-all duration-500",
                      active ? "text-gold-hi italic" : "text-ink group-hover:translate-x-2",
                    )}
                  >
                    {item.name}
                  </span>
                  <span className="relative size-4 shrink-0 self-center">
                    <span className="absolute top-1/2 left-0 h-px w-4 bg-ink" />
                    <span
                      className={cn(
                        "absolute top-0 left-1/2 h-4 w-px bg-ink transition-transform duration-500",
                        active && "scale-y-0",
                      )}
                    />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {active && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease: silk }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-8 pl-14 text-[15px] leading-relaxed text-ink-soft sm:pl-[4.5rem]">{item.body}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export function Team({ lang }: { lang: Locale }) {
  const t = home[lang].team;
  return (
    <section className="weave border-y border-line bg-night-2 py-20 sm:py-32 lg:py-44">
      <div className="gutter mx-auto max-w-[1600px]">
        <div className="mb-16 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow">{t.eyebrow}</p>
            <RiseText as="h2" text={t.title} className="display mt-5 text-[clamp(2.6rem,6vw,6rem)] text-ink" />
          </div>
          <p className="max-w-sm self-end text-[15px] leading-relaxed text-ink-soft lg:col-span-4 lg:col-start-9">{t.lead}</p>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {t.people.map((p, i) => (
            <FadeIn key={p.slug} delay={(i % 6) * 0.06} className="group">
              <div className="relative aspect-square overflow-hidden bg-night">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/team/${p.slug}.webp`}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-80 grayscale transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                />
                <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gold transition-transform duration-700 group-hover:scale-x-100" />
              </div>
              <p className="mt-4 text-[15px] text-ink transition-colors group-hover:text-gold-hi">{p.name}</p>
              <p className="mt-1 text-[12px] leading-snug text-muted">{p.role}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export function References({ lang, header = true }: { lang: Locale; header?: boolean }) {
  const r = home[lang].refs;
  const rows = [1, 2, 3, 4, 5, 6, 7];
  return (
    <section className="py-20 sm:py-32 lg:py-44">
      <div
        className={cn(
          "gutter mx-auto mb-16 flex max-w-[1600px] flex-col justify-between gap-10 lg:flex-row lg:items-end",
          !header && "hidden",
        )}
      >
        <div>
          <p className="eyebrow">{r.eyebrow}</p>
          <RiseText as="h2" text={r.title} className="display mt-5 text-[clamp(2.6rem,6vw,6rem)] text-ink" />
        </div>
        <div className="flex flex-wrap items-end gap-4">
          <span className="display text-gold-foil text-8xl leading-[0.8]">{r.count}</span>
          <span className="max-w-[12ch] pb-1 text-[13px] text-muted">{r.countLabel}</span>
          <ButtonLink href={href(lang, "referanslar")} variant="ghost" className="sm:ml-4">
            {r.all}
          </ButtonLink>
        </div>
      </div>
      <div className="flex flex-col gap-6 [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        {rows.map((n, i) => (
          <div key={n} className="overflow-hidden">
            <motion.div
              className="flex w-max gap-24"
              animate={{ x: i % 2 ? ["-50%", "0%"] : ["0%", "-50%"] }}
              transition={{ duration: 46 + i * 5, repeat: Infinity, ease: "linear" }}
            >
              {[0, 1, 2, 3].map((k) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={k}
                  src={`/refs/row-${n}.png`}
                  alt=""
                  loading="lazy"
                  className="h-12 w-auto max-w-none opacity-60 transition-opacity duration-500 hover:opacity-100 sm:h-16"
                />
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Closing({ lang }: { lang: Locale }) {
  const lines = home[lang].closing.line;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  return (
    <section ref={ref} className="relative overflow-hidden py-20 sm:py-32 lg:py-48">
      <motion.div style={{ scale }} className="gutter mx-auto max-w-[1600px] text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/deer.png" alt="" className="mx-auto mb-12 h-20 w-auto opacity-90" />
        {lines.map((line, i) => (
          <RiseText
            key={line}
            text={line}
            delay={i * 0.12}
            className={cn("display text-[clamp(2.4rem,6.6vw,7rem)]", i === 0 ? "italic" : "text-ink")}
            innerClassName={i === 0 ? "text-gold-foil" : undefined}
          />
        ))}
      </motion.div>
    </section>
  );
}
