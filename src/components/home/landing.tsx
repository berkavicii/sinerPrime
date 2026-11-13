"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { landing } from "@/content/landing";
import { tracks } from "@/content/tracks";
import { HomeTracks } from "@/components/projects/pitch";
import { href, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { Counter, FadeIn, RiseText, ScrollLitText } from "@/components/site/motion";
import { ButtonLink } from "@/components/ui/button";

const ScentField = dynamic(() => import("@/components/three/scent-field"), { ssr: false });

const silk = [0.22, 1, 0.36, 1] as const;

/** Shared chapter heading: numbered eyebrow and a rising title. */
function Heading({ eyebrow, title, className }: { eyebrow: string; title: string; className?: string }) {
  return (
    <div className={className}>
      <p className="eyebrow !text-gold">{eyebrow}</p>
      <RiseText as="h2" text={title} className="display mt-5 text-[clamp(2.2rem,4.2vw,4.4rem)] text-ink" />
    </div>
  );
}

/** A photo, or a framed placeholder until Siner sends the picture. */
function MediaSlot({ label, image, className }: { label: string; image: string | null; className?: string }) {
  return (
    <div className={cn("relative overflow-hidden bg-night-3", className)}>
      {image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={image} alt={label} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      ) : (
        <div className="weave absolute inset-0 flex items-center justify-center border border-line">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/deer.png" alt="" className="h-10 w-auto opacity-15" />
        </div>
      )}
      <span className="absolute bottom-3 left-3 rounded-full bg-night/70 px-3 py-1 text-[10px] tracking-[0.28em] text-ink-soft uppercase backdrop-blur">
        {label}
      </span>
    </div>
  );
}

/* ---------- opening ---------- */

export function Intro({ lang }: { lang: Locale }) {
  const c = landing[lang].intro;
  const ref = useRef<HTMLElement>(null);
  const fade = useRef(0);
  // stop the shader as soon as the hero is mostly scrolled away
  const inView = useInView(ref, { amount: 0.2 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // let the smoke drift in as the intro curtain lifts
  useEffect(() => {
    const id = window.setTimeout(() => (fade.current = 1), 1600);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <section ref={ref} className="relative flex min-h-dvh flex-col justify-end overflow-hidden">
      <div className="absolute inset-0">
        <ScentField active={inView} fade={fade} />
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/deer.png"
        alt=""
        className="pointer-events-none absolute top-[13vh] left-1/2 h-[36vh] w-auto -translate-x-1/2 opacity-[0.13] lg:top-1/2 lg:right-[8vw] lg:left-auto lg:h-[52vh] lg:translate-x-0 lg:-translate-y-1/2 lg:opacity-[0.07]"
      />
      <motion.div style={{ y: copyY, opacity: copyOpacity }} className="gutter relative mx-auto w-full max-w-[1600px] pb-[12vh]">
        <motion.p
          lang="en"
          className="eyebrow mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 1 }}
        >
          {c.eyebrow}
        </motion.p>
        <h1 className="display text-[clamp(3.2rem,10vw,11.5rem)] leading-[0.9] text-ink">
          {c.title.map((line, i) => (
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
        <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <motion.p
            className="max-w-lg text-[16px] leading-[1.75] text-ink-soft"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.9, duration: 1.2, ease: silk }}
          >
            {c.lead}
          </motion.p>
          <motion.a
            href="#koku"
            className="flex items-center gap-4 text-[11px] tracking-[0.3em] text-muted uppercase transition-colors hover:text-ink"
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
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}

/* ---------- 01 why scent matters, and how we approach it ---------- */

export function Scent({ lang }: { lang: Locale }) {
  const c = landing[lang].scent;
  return (
    <section id="koku" className="scroll-mt-20">
      <div className="gutter mx-auto grid max-w-[1600px] gap-12 py-14 sm:py-28 lg:grid-cols-12 lg:py-36">
        <p className="eyebrow !text-gold lg:col-span-3">{c.eyebrow}</p>
        <div className="flex max-w-[62ch] flex-col gap-6 lg:col-span-7 lg:col-start-5">
          {c.history.map((p, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <p className={i === 0 ? "text-[17px] leading-[1.7] font-light text-ink sm:text-[20px] sm:leading-[1.75]" : "text-[15px] leading-[1.75] text-ink-soft sm:text-[16px] sm:leading-[1.8]"}>
                {p}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
      <div className="gutter mx-auto max-w-[1600px] pb-14 sm:pb-28 lg:pb-36">
        <ScrollLitText
          text={c.statement}
          className="display text-[clamp(2.6rem,7vw,7.4rem)] leading-[1.02] text-ink italic"
        />
        <div className="mt-10 grid gap-4 border-t border-line pt-6 sm:mt-12 sm:gap-6 sm:pt-8 lg:grid-cols-12">
          <p className="eyebrow lg:col-span-3">{c.approach.label}</p>
          <FadeIn className="lg:col-span-7 lg:col-start-5">
            <p className="max-w-[62ch] text-[15px] leading-[1.75] text-ink-soft sm:text-[16px] sm:leading-[1.8]">{c.approach.body}</p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ---------- 02 who we are: maker, factory, vision ---------- */

export function Who({ lang }: { lang: Locale }) {
  const c = landing[lang].who;
  return (
    <section id="biz" className="scroll-mt-20 border-t border-line bg-night-2">
      <div className="gutter mx-auto max-w-[1600px] py-14 sm:py-28 lg:py-36">
        <div className="grid gap-6 sm:gap-10 lg:grid-cols-12">
          <Heading eyebrow={c.eyebrow} title={c.title} className="lg:col-span-7" />
          <FadeIn className="lg:col-span-4 lg:col-start-9 lg:self-end">
            <p className="text-[15px] leading-[1.75] text-ink-soft sm:text-[16px]">{c.lead}</p>
          </FadeIn>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-2 sm:mt-14 sm:gap-4">
          {c.media.map((m, i) => (
            <FadeIn key={m.label} delay={i * 0.08}>
              <MediaSlot label={m.label} image={m.image} className="aspect-square sm:aspect-[4/3]" />
            </FadeIn>
          ))}
        </div>

        {/* the people behind it */}
        <div className="mt-12 border-t border-line pt-8 sm:mt-16 sm:pt-10">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <p className="eyebrow !text-gold">{c.team.label}</p>
            <p className="max-w-md text-[13px] leading-[1.6] text-muted sm:text-right">{c.team.note}</p>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-x-2 gap-y-6 sm:mt-8 sm:grid-cols-4 sm:gap-x-4 sm:gap-y-8 lg:grid-cols-6">
            {c.team.people.map((m, i) => (
              <FadeIn key={m.slug} delay={(i % 6) * 0.05} className="group">
                <div className="relative aspect-square overflow-hidden bg-night">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/team/${m.slug}.webp`}
                    alt={m.name}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover opacity-85 grayscale transition-[filter,opacity,transform] duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                  <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gold transition-transform duration-700 group-hover:scale-x-100" />
                </div>
                <p className="mt-2 text-[12px] leading-tight text-ink sm:mt-3 sm:text-[14px]">{m.name}</p>
                <p className="mt-1 text-[10.5px] leading-snug text-muted sm:text-[12px]">{m.role}</p>
              </FadeIn>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-px bg-line sm:mt-16 lg:grid-cols-4">
          {c.numbers.map((n) => (
            <div key={n.label} className="bg-night-2 py-6 pr-3 sm:py-10 sm:pr-4">
              <p className="display text-[clamp(2.4rem,4.6vw,4.6rem)] leading-none text-ink">
                <Counter value={n.value} />
                <span className="text-gold-foil">{n.suffix}</span>
              </p>
              <p className="eyebrow mt-3">{n.label}</p>
            </div>
          ))}
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-px bg-line sm:mt-14 lg:grid-cols-3">
          {c.pillars.map((p, i) => (
            <FadeIn key={p.k} delay={(i % 3) * 0.06} className="bg-night-2 py-5 pr-3 even:pl-3 sm:p-8">
              <span className="text-[11px] tracking-[0.2em] text-gold">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="display mt-2 text-[clamp(1.25rem,2vw,2rem)] leading-[1.05] text-ink sm:mt-4">{p.k}</h3>
              <p className="mt-2 text-[12.5px] leading-[1.6] text-ink-soft sm:mt-3 sm:text-[14px] sm:leading-[1.7]">{p.body}</p>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- 03 projects: hotels and corporate, each with what / where / why us ---------- */

export function Projects({ lang }: { lang: Locale }) {
  const c = tracks[lang];
  return (
    <section id="projeler" className="scroll-mt-20 border-t border-line">
      <div className="gutter mx-auto max-w-[1600px] py-14 sm:py-28 lg:py-36">
        <div className="grid gap-6 sm:gap-10 lg:grid-cols-12">
          <Heading eyebrow={c.eyebrow} title={c.title} className="lg:col-span-7" />
          <FadeIn className="lg:col-span-4 lg:col-start-9 lg:self-end">
            <p className="text-[15px] leading-[1.75] text-ink-soft sm:text-[16px]">{c.lead}</p>
          </FadeIn>
        </div>
        <HomeTracks lang={lang} />
      </div>
    </section>
  );
}

/* ---------- 04 scent machines ---------- */

export function Machines({ lang }: { lang: Locale }) {
  const c = landing[lang].machines;
  return (
    <section id="makineler" className="scroll-mt-20 border-t border-line bg-night-2">
      <div className="gutter mx-auto max-w-[1600px] py-14 sm:py-28 lg:py-36">
        <div className="grid gap-6 sm:gap-10 lg:grid-cols-12">
          <Heading eyebrow={c.eyebrow} title={c.title} className="lg:col-span-7" />
          <FadeIn className="lg:col-span-4 lg:col-start-9 lg:self-end">
            <p className="text-[15px] leading-[1.75] text-ink-soft sm:text-[16px]">{c.lead}</p>
            <ButtonLink href={href(lang, "cihazlar")} variant="ghost" className="mt-6">
              {c.more}
            </ButtonLink>
          </FadeIn>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-2 sm:mt-14 sm:gap-4">
          {c.items.map((d, i) => (
            <FadeIn key={d.id} delay={i * 0.08}>
              <Link href={href(lang, `cihazlar#${d.id}`)} className="group block">
                <div className="relative aspect-square overflow-hidden bg-[#ecebe8]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={d.image}
                    alt={d.name}
                    loading="lazy"
                    className="h-full w-full object-contain p-4 mix-blend-multiply transition-transform duration-1000 ease-[var(--ease-silk)] group-hover:scale-105 sm:p-8"
                  />
                </div>
                <p className="eyebrow mt-4 hidden sm:block">{d.kind}</p>
                <h3 className="display mt-2 text-[clamp(1.1rem,2.2vw,2.2rem)] text-ink transition-colors group-hover:text-gold-hi">{d.name}</h3>
                <p className="mt-1 text-[12px] text-muted sm:text-[13px]">{d.spec}</p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 05 Kubbe: black on white, its name set behind it ---------- */

export function KubbeFeature({ lang }: { lang: Locale }) {
  const c = landing[lang].kubbe;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const nameX = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);
  const productY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="kubbe" ref={ref} className="theme-stone relative scroll-mt-20 overflow-hidden bg-[#f6f5f2]">
      <div className="relative flex h-[56vh] items-end justify-center pb-[4vh] sm:h-[78vh] sm:items-center sm:pb-0">
        {/* the name sits behind the product */}
        <motion.p
          aria-hidden
          style={{ x: nameX }}
          className="display pointer-events-none absolute inset-x-0 top-[15%] text-center text-[clamp(6.5rem,34vw,30rem)] leading-none tracking-[-0.05em] whitespace-nowrap text-[#d9d3c9] select-none sm:top-1/2 sm:-translate-y-1/2 sm:text-[clamp(7rem,30vw,30rem)]"
        >
          {c.name}
        </motion.p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <motion.img
          src="/kubbe/hero.webp"
          alt={c.name}
          loading="lazy"
          style={{ y: productY }}
          className="relative h-[62%] w-auto max-w-none object-contain mix-blend-multiply sm:h-[70%]"
        />
      </div>
      <div className="gutter relative mx-auto grid max-w-[1600px] gap-8 pb-14 sm:gap-10 sm:pb-28 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="eyebrow !text-gold">{c.eyebrow}</p>
          <RiseText as="h2" text={c.title} className="display mt-5 text-[clamp(2.2rem,4.2vw,4.4rem)] text-ink" />
          <FadeIn>
            <p className="mt-6 max-w-lg text-[16px] leading-[1.75] text-ink-soft">{c.body}</p>
          </FadeIn>
        </div>
        <div className="flex flex-col justify-end gap-8 lg:col-span-5 lg:col-start-8">
          <dl className="grid grid-cols-3 gap-px bg-line">
            {c.specs.map((s) => (
              <div key={s.label} className="flex flex-col-reverse justify-end gap-2 bg-[#f6f5f2] py-4 pr-3">
                <dt className="eyebrow !text-[10px] !tracking-[0.2em] sm:!text-[11px] sm:!tracking-[0.32em]">{s.label}</dt>
                <dd className="display text-[clamp(1.8rem,3vw,3rem)] leading-none text-ink">
                  {s.value}
                  <span className="text-gold-foil ml-1 text-[0.45em]">{s.unit}</span>
                </dd>
              </div>
            ))}
          </dl>
          <ButtonLink href={href(lang, "urunler#kubbe")} variant="light" className="self-start !bg-[#16140f] !text-[#f6f5f2] hover:!bg-[#8d6b3a]">
            {c.more}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

/* ---------- 06 ONIX: one picture, the studio and the animation ---------- */

export function OnixFeature({ lang }: { lang: Locale }) {
  const c = landing[lang].onix;
  return (
    <section id="onix" className="scroll-mt-20">
      <div className="gutter mx-auto grid max-w-[1600px] items-center gap-10 py-14 sm:gap-12 sm:py-28 lg:grid-cols-12 lg:py-36">
        <FadeIn className="order-2 lg:order-1 lg:col-span-5">
          <div className="relative mx-auto aspect-[4/5] w-full overflow-hidden sm:aspect-[2/3] sm:max-h-[72vh]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={c.image} alt={c.imageAlt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </FadeIn>
        <div className="order-1 lg:order-2 lg:col-span-6 lg:col-start-7">
          <p className="eyebrow !text-gold">{c.eyebrow}</p>
          <p className="display text-gold-foil mt-6 text-[clamp(4.4rem,10vw,10rem)] leading-[0.82] tracking-[-0.04em]">{c.name}</p>
          <RiseText as="h2" text={c.title} className="display mt-8 text-[clamp(1.9rem,3.2vw,3.2rem)] text-ink" />
          <FadeIn>
            <p className="mt-6 max-w-lg text-[16px] leading-[1.75] text-ink-soft">{c.body}</p>
          </FadeIn>
          <div className="mt-8 flex flex-wrap gap-3 sm:mt-10">
            <ButtonLink href={href(lang, "onix#studio")}>{c.studio}</ButtonLink>
            <ButtonLink href={href(lang, "urunler#onix")} variant="ghost">
              {c.story}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- the story's table of contents ---------- */

export function ChapterRail({ lang }: { lang: Locale }) {
  const chapters = landing[lang].chapters;
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const els = chapters.map((c) => document.getElementById(c.id)).filter((e): e is HTMLElement => !!e);
    const io = new IntersectionObserver(
      (entries) => {
        // the chapter crossing the middle of the screen wins
        const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    els.forEach((e) => io.observe(e));
    // hide again above the first chapter
    const onScroll = () => {
      const first = els[0];
      if (first && first.getBoundingClientRect().top > window.innerHeight * 0.5) setActive(null);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [chapters]);

  return (
    <nav
      aria-label="Chapters"
      className={cn(
        "fixed top-1/2 left-5 z-30 hidden -translate-y-1/2 flex-col gap-4 transition-opacity duration-700 min-[1700px]:flex",
        active ? "opacity-100" : "pointer-events-none opacity-0",
      )}
    >
      {chapters.map((c, i) => {
        const on = c.id === active;
        const light = active === "kubbe"; // the white Kubbe stage needs dark marks
        return (
          <a key={c.id} href={`#${c.id}`} className="group flex items-center gap-3">
            <span className={cn("block h-px transition-all duration-500", on ? "w-10 bg-[#c8a46a]" : cn("w-4 group-hover:w-6", light ? "bg-black/30" : "bg-white/30"))} />
            <span
              className={cn(
                "text-[10px] tracking-[0.28em] whitespace-nowrap uppercase transition-all duration-500",
                on ? (light ? "text-[#141414] opacity-100" : "text-white opacity-100") : cn("opacity-0 group-hover:opacity-100", light ? "text-black/60" : "text-white/60"),
              )}
            >
              0{i + 1} · {c.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
