"use client";

import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { deck } from "@/content/deck";
import { href, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import {
  Counter,
  FadeIn,
  ParallaxImage,
  RiseText,
  ScrollLitText,
} from "@/components/site/motion";
import { References } from "@/components/home/sections";

/*
  The home page as a meeting presentation: seven short scenes, one per chapter of the left
  menu. Each says one thing, shows it, and offers the full chapter for whoever wants more.
*/

export type SceneMeta = { slug: string; num: string; menu: string };

/** Chapter number and name, the scene's one line, and the way into the full chapter. */
function Head({
  meta,
  title,
  lang,
  className,
  titleClassName,
}: {
  meta: SceneMeta;
  title: string;
  lang: Locale;
  className?: string;
  titleClassName?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between",
        className,
      )}
    >
      <div>
        <FadeIn>
          <p className="eyebrow !text-gold">
            {meta.num} · {meta.menu}
          </p>
        </FadeIn>
        <RiseText
          as="h2"
          text={title}
          className={cn(
            "display mt-5 max-w-[20ch] text-[clamp(2.4rem,5vw,5.2rem)] leading-[1] text-ink",
            titleClassName,
          )}
        />
      </div>
      <MoreLink lang={lang} slug={meta.slug} />
    </div>
  );
}

function MoreLink({
  lang,
  slug,
  className,
}: {
  lang: Locale;
  slug: string;
  className?: string;
}) {
  return (
    <Link
      href={href(lang, slug)}
      className={cn(
        "group inline-flex shrink-0 items-center gap-3 self-start text-[11px] tracking-[0.28em] text-ink-soft uppercase transition-colors hover:text-gold-hi lg:self-end",
        className,
      )}
    >
      <span className="h-px w-8 bg-gold/60 transition-all duration-500 group-hover:w-12 group-hover:bg-gold" />
      {deck[lang].more}
    </Link>
  );
}

/* ---------- 01 Felsefemiz: one sentence, three facts ---------- */

export function PhilosophyScene({
  lang,
  meta,
}: {
  lang: Locale;
  meta: SceneMeta;
}) {
  const c = deck[lang].felsefemiz;
  return (
    <section id={meta.slug} className="scroll-mt-0 border-t border-line">
      <div className="gutter mx-auto grid max-w-[1600px] gap-12 py-24 sm:py-32 lg:grid-cols-12 lg:items-center lg:py-40">
        <div className="lg:col-span-7">
          <FadeIn>
            <p className="eyebrow !text-gold">
              {meta.num} · {meta.menu}
            </p>
          </FadeIn>
          <ScrollLitText
            text={c.statement}
            className="display mt-8 text-[clamp(2.6rem,6vw,6.2rem)] leading-[1.02] text-ink"
          />
          <FadeIn delay={0.1}>
            <p className="mt-10 max-w-[46ch] text-[16px] leading-[1.75] text-ink-soft">
              {c.lead}
            </p>
          </FadeIn>
          <MoreLink lang={lang} slug={meta.slug} className="mt-10" />
        </div>
        <FadeIn y={40} className="lg:col-span-4 lg:col-start-9">
          <ParallaxImage
            src={c.image}
            alt=""
            className="aspect-[4/5] rounded-sm"
            strength={40}
          />
        </FadeIn>
      </div>
      <div className="gutter mx-auto max-w-[1600px] pb-24 sm:pb-32">
        {/* phones: one fact per row, number beside its label; wider screens: three columns */}
        <div className="grid gap-px border-y border-line bg-line sm:grid-cols-3">
          {c.facts.map((f) => (
            <div
              key={f.label}
              className="flex items-center gap-6 bg-night py-6 sm:block sm:py-12 sm:pr-6 sm:[&:not(:first-child)]:pl-8"
            >
              <p className="display w-[4.5rem] shrink-0 text-[clamp(2.6rem,6vw,6rem)] leading-none text-ink sm:w-auto">
                <Counter value={f.value} />
                <span className="text-gold-foil">{f.suffix}</span>
              </p>
              <p className="max-w-[22ch] text-[11px] leading-[1.5] tracking-[0.18em] text-muted uppercase sm:mt-4 sm:text-[12px]">
                {f.label}
              </p>
            </div>
          ))}
        </div>
        <FadeIn>
          <p className="display text-gold-foil mt-16 text-center text-[clamp(1.6rem,3vw,2.8rem)] italic">
            {c.pull}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ---------- 02 Koku: three short truths over full-screen pictures ---------- */

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

/**
 * Opacity keyframes for scene i of n over the section's scroll: the first starts visible,
 * the last stays visible, the rest cross-fade at their edges. Offsets stay inside 0–1,
 * which the browser's animation engine requires.
 */
function fadeWindow(i: number, n: number, edge: number): [number[], number[]] {
  const a = i / n;
  const b = (i + 1) / n;
  const stops: number[] = [];
  const values: number[] = [];
  if (i > 0) {
    stops.push(a - edge, a + edge);
    values.push(0, 1);
  } else {
    stops.push(0);
    values.push(1);
  }
  if (i < n - 1) {
    stops.push(b - edge, b + edge);
    values.push(1, 0);
  } else {
    stops.push(1);
    values.push(1);
  }
  return [stops, values];
}

/** One full-screen picture of the Koku scene, cross-fading and settling from a slight zoom. */
function Scene({
  i,
  n,
  progress,
  image,
}: {
  i: number;
  n: number;
  progress: MotionValue<number>;
  image: string;
}) {
  const [stops, values] = fadeWindow(i, n, 0.04);
  const opacity = useTransform(progress, stops, values);
  const scale = useTransform(
    progress,
    [clamp01(i / n - 0.1), clamp01((i + 1) / n + 0.1)],
    [1.12, 1],
  );
  return (
    <motion.div style={{ opacity }} className="absolute inset-0">
      <motion.img
        src={image}
        alt=""
        style={{ scale }}
        className="h-full w-full object-cover opacity-60"
      />
    </motion.div>
  );
}

export function ScentScene({ lang, meta }: { lang: Locale; meta: SceneMeta }) {
  const c = deck[lang].koku;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const bar = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <section
      id={meta.slug}
      ref={ref}
      className="relative h-[300vh] scroll-mt-0 border-t border-line"
    >
      <div className="sticky top-0 h-dvh overflow-hidden bg-night">
        {c.scenes.map((s, i) => (
          <Scene
            key={s.label}
            i={i}
            n={c.scenes.length}
            progress={scrollYProgress}
            image={s.image}
          />
        ))}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night via-night/40 to-night/70" />
        {/* the scenes sit under the shade, their copy above it */}
        <div className="absolute inset-0">
          {c.scenes.map((s, i) => (
            <SceneCopy
              key={s.label}
              i={i}
              n={c.scenes.length}
              progress={scrollYProgress}
              text={s.text}
              label={s.label}
            />
          ))}
        </div>
        <div className="gutter absolute inset-x-0 top-24 mx-auto flex max-w-[1600px] items-start justify-between gap-6 sm:top-28">
          <div>
            <p className="eyebrow !text-gold">
              {meta.num} · {meta.menu}
            </p>
            <p className="display text-gold-foil mt-4 text-[clamp(1.3rem,2.2vw,2rem)] italic">
              {c.title}
            </p>
          </div>
          <MoreLink lang={lang} slug={meta.slug} />
        </div>
        <div className="gutter absolute inset-x-0 bottom-8 mx-auto max-w-[1600px]">
          <div className="h-px w-full bg-line">
            <motion.div style={{ width: bar }} className="h-px bg-gold" />
          </div>
        </div>
      </div>
    </section>
  );
}

function SceneCopy({
  i,
  n,
  progress,
  text,
  label,
}: {
  i: number;
  n: number;
  progress: MotionValue<number>;
  text: string;
  label: string;
}) {
  const [stops, values] = fadeWindow(i, n, 0.05);
  const opacity = useTransform(progress, stops, values);
  const a = i / n;
  const y = useTransform(
    progress,
    [clamp01(a - 0.03), clamp01(a + 0.07)],
    [i === 0 ? 0 : 50, 0],
  );
  return (
    <motion.div
      style={{ opacity, y }}
      className="gutter absolute inset-x-0 bottom-[16vh] mx-auto max-w-[1600px]"
    >
      <p className="eyebrow">
        0{i + 1} · {label}
      </p>
      <p className="display mt-6 max-w-[20ch] text-[clamp(2.3rem,5.6vw,5.8rem)] leading-[1.03] text-ink">
        {text}
      </p>
    </motion.div>
  );
}

/* ---------- 03 Koku tasarımı: five verbs down the page, a gold line filling beside them, then the client's favourite picture ---------- */

export function DesignScene({ lang, meta }: { lang: Locale; meta: SceneMeta }) {
  const c = deck[lang].tasarim;
  const list = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: list,
    offset: ["start 0.7", "end 0.6"],
  });
  const fill = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      <section id={meta.slug} className="scroll-mt-0 border-t border-line">
        <div className="gutter mx-auto grid max-w-[1600px] gap-14 py-24 sm:py-32 lg:grid-cols-12 lg:py-40">
          <div className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
            <FadeIn>
              <p className="eyebrow !text-gold">
                {meta.num} · {meta.menu}
              </p>
            </FadeIn>
            <RiseText
              as="h2"
              text={c.title}
              className="display mt-5 max-w-[16ch] text-[clamp(2.3rem,4.2vw,4.2rem)] leading-[1.02] text-ink"
            />
            <MoreLink lang={lang} slug={meta.slug} className="mt-10" />
          </div>
          <ol ref={list} className="relative lg:col-span-7">
            {/* the process line fills as the steps scroll by */}
            <span
              aria-hidden
              className="absolute top-0 bottom-0 left-0 w-px bg-line"
            >
              <motion.span
                style={{ height: fill }}
                className="block w-px bg-gold"
              />
            </span>
            {c.steps.map((s, i) => (
              <li key={s.k} className="pl-8 sm:pl-14">
                <FadeIn
                  delay={0.05}
                  y={30}
                  className={cn(
                    "grid grid-cols-[4.5rem_1fr] items-baseline gap-x-4 py-9 sm:grid-cols-[7rem_1fr] sm:py-12",
                    i > 0 && "border-t border-line",
                  )}
                >
                  <span className="display text-gold-foil text-[clamp(2.6rem,5vw,4.6rem)] leading-none">
                    {s.k}
                  </span>
                  <div>
                    <h3 className="display text-[clamp(2rem,3.4vw,3.4rem)] leading-none text-ink">
                      {s.title}
                    </h3>
                    <p className="mt-4 max-w-[38ch] text-[15px] leading-[1.7] text-ink-soft sm:text-[16px]">
                      {s.body}
                    </p>
                  </div>
                </FadeIn>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <figure className="relative h-[80svh] min-h-[420px] overflow-hidden">
        <ParallaxImage
          src={c.band.image}
          alt=""
          className="absolute inset-0"
          strength={70}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-night via-transparent to-night" />
        <figcaption className="gutter absolute inset-x-0 bottom-[12%] mx-auto max-w-[1600px]">
          <RiseText
            text={c.band.text}
            className="display text-[clamp(2.4rem,6vw,6.4rem)] text-ink italic"
          />
        </figcaption>
      </figure>
    </>
  );
}

/* ---------- 04 Koku teknolojileri: the machines, and four facts ---------- */

export function TechScene({ lang, meta }: { lang: Locale; meta: SceneMeta }) {
  const c = deck[lang].teknoloji;
  return (
    <section
      id={meta.slug}
      className="scroll-mt-0 border-t border-line bg-night-2"
    >
      <div className="gutter mx-auto max-w-[1600px] py-24 sm:py-32 lg:py-40">
        <Head meta={meta} title={c.title} lang={lang} />
        {/* one shot of the range; each machine names itself on hover (always on touch screens) and opens its page */}
        <FadeIn className="mt-14 sm:mt-20">
          <figure className="relative -mx-4 aspect-[1920/760] overflow-hidden sm:mx-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={c.stage.image} alt={c.stage.alt} loading="lazy" className="absolute inset-0 h-full w-full" />
            {c.stage.spots.map((s, i) => {
              const [l, t, w, h] = s.box;
              return (
                <Link
                  key={i}
                  href={href(lang, `cihazlar#${s.id}`)}
                  aria-label={`${s.name}, ${s.kind}`}
                  className="group/spot absolute"
                  style={{ left: `${l}%`, top: `${t}%`, width: `${w}%`, height: `${h}%` }}
                >
                  <span className="pointer-events-none absolute -inset-[6%] rounded-sm bg-[radial-gradient(ellipse_at_center,rgba(232,201,150,0.16),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover/spot:opacity-100" />
                  <span
                    className={cn(
                      "pointer-events-none absolute flex translate-y-1 whitespace-nowrap opacity-0 transition-all duration-500 ease-[var(--ease-silk)] group-hover/spot:translate-y-0 group-hover/spot:opacity-100 group-focus-visible/spot:translate-y-0 group-focus-visible/spot:opacity-100 [@media(hover:none)]:translate-y-0 [@media(hover:none)]:opacity-100",
                      s.side
                        ? "top-[24%] left-full ml-[0.8vw] items-center gap-[0.8vw]"
                        : "bottom-full left-1/2 mb-[0.6vw] -translate-x-1/2 flex-col items-center",
                    )}
                  >
                    {s.side && <span className="block h-px w-[2.4vw] bg-gold/70" />}
                    <span className={cn("flex flex-col", s.side ? "items-start" : "items-center")}>
                      <span className="display text-[clamp(0.8rem,1.7vw,1.9rem)] leading-none text-ink">{s.name}</span>
                      <span className="mt-[0.4vw] hidden text-[10px] tracking-[0.22em] text-gold-hi uppercase sm:block sm:text-[11px]">
                        {s.kind}
                      </span>
                    </span>
                    {!s.side && <span className="mt-[0.5vw] block h-[1.4vw] w-px bg-gold/70" />}
                  </span>
                </Link>
              );
            })}
          </figure>
        </FadeIn>
        <dl className="mt-14 grid grid-cols-2 gap-px border-y border-line bg-line sm:mt-20 lg:grid-cols-4">
          {c.facts.map((f, i) => (
            <FadeIn
              key={f.label}
              delay={i * 0.06}
              className="bg-night-2 py-7 pr-3 sm:py-10 [&:nth-child(even)]:pl-4 lg:[&:not(:first-child)]:pl-8"
            >
              <dt className="sr-only">{f.label}</dt>
              <dd className="display text-[clamp(2rem,3.6vw,3.6rem)] leading-none text-ink">
                {f.value}
              </dd>
              <p
                aria-hidden
                className="mt-3 text-[11px] tracking-[0.18em] text-muted uppercase sm:text-[12px]"
              >
                {f.label}
              </p>
            </FadeIn>
          ))}
        </dl>
        <Link
          href={href(lang, "cihazlar")}
          className="mt-10 inline-block text-[13px] text-gold-hi underline-offset-4 hover:underline"
        >
          {c.devicesLink} →
        </Link>
      </div>
    </section>
  );
}

/* ---------- 05 Tasarım ve koleksiyonlar: Kubbe on its stage, ONIX and the set beside it ---------- */

export function CollectionScene({
  lang,
  meta,
}: {
  lang: Locale;
  meta: SceneMeta;
}) {
  const c = deck[lang].koleksiyon;
  const stage = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: stage,
    offset: ["start end", "end start"],
  });
  const productY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  return (
    <section id={meta.slug} className="scroll-mt-0 border-t border-line">
      <div className="gutter mx-auto max-w-[1600px] pt-24 pb-14 sm:pt-32 sm:pb-20">
        <Head meta={meta} title={c.title} lang={lang} />
      </div>

      <div
        ref={stage}
        className="theme-stone relative overflow-hidden bg-[#f6f5f2]"
      >
        <Link
          href={href(lang, "urunler#kubbe")}
          className="group relative flex h-[76vh] items-start justify-center pt-[16vh] sm:h-[84vh] sm:pt-0 sm:items-center sm:pb-0"
        >
          <motion.p
            aria-hidden
            className="display pointer-events-none absolute inset-x-0 top-[12%] text-center text-[clamp(6.5rem,34vw,30rem)] leading-none tracking-[-0.05em] whitespace-nowrap text-[#ddd7cc] select-none sm:top-1/2 sm:-translate-y-1/2"
          >
            {c.kubbe.name}
          </motion.p>
          <motion.img
            src="/kubbe/hero.webp"
            alt={c.kubbe.name}
            loading="lazy"
            style={{ y: productY }}
            className="relative h-[48%] w-auto max-w-none object-contain mix-blend-multiply transition-transform duration-1000 ease-[var(--ease-silk)] group-hover:scale-[1.03] sm:h-[66%]"
          />
          <div className="gutter absolute inset-x-0 bottom-6 mx-auto flex max-w-[1600px] flex-col gap-2 sm:bottom-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">{c.kubbe.kind}</p>
              <p className="mt-2 max-w-[34ch] text-[14px] leading-[1.6] text-ink-soft sm:text-[15px]">
                {c.kubbe.line}
              </p>
            </div>
            <span className="text-[12px] tracking-[0.2em] text-ink uppercase transition-colors group-hover:text-gold">
              {c.kubbe.link} →
            </span>
          </div>
        </Link>
      </div>

      <div className="gutter mx-auto grid max-w-[1600px] gap-4 py-4 sm:grid-cols-2">
        {c.items.map((p, i) => (
          <FadeIn key={p.name} delay={i * 0.08}>
            <Link
              href={href(lang, p.path)}
              className="group relative block aspect-[4/5] overflow-hidden bg-night-2 sm:aspect-[5/6]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.image}
                alt={p.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.6s] ease-[var(--ease-silk)] group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night via-night/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
                <p className="eyebrow !text-gold">{p.kind}</p>
                <p className="display mt-3 text-[clamp(2.6rem,5vw,4.6rem)] leading-none text-ink">
                  {p.name}
                </p>
                <p className="mt-3 text-[15px] text-ink-soft">{p.line}</p>
                <span className="mt-6 inline-block text-[12px] tracking-[0.2em] text-gold-hi uppercase">
                  {p.link} →
                </span>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

/* ---------- 06 Proje geliştirme: three kinds of project, then who we work with ---------- */

export function ProjectScene({
  lang,
  meta,
}: {
  lang: Locale;
  meta: SceneMeta;
}) {
  const c = deck[lang].proje;
  return (
    <section id={meta.slug} className="scroll-mt-0 border-t border-line">
      <div className="gutter mx-auto max-w-[1600px] pt-24 sm:pt-32 lg:pt-40">
        <Head meta={meta} title={c.title} lang={lang} />
        <div className="mt-14 grid gap-4 sm:mt-20 sm:grid-cols-3">
          {c.tiles.map((t, i) => (
            <FadeIn key={t.title} delay={i * 0.1} y={50}>
              <figure className="group relative aspect-[4/3] overflow-hidden bg-night-2 sm:aspect-[3/4]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.image}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.6s] ease-[var(--ease-silk)] group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night via-night/30 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <span className="text-[11px] tracking-[0.3em] text-gold">
                    0{i + 1}
                  </span>
                  <p className="display mt-3 text-[clamp(1.7rem,2.6vw,2.6rem)] leading-[1.05] text-ink">
                    {t.title}
                  </p>
                  <p className="mt-2 max-w-[30ch] text-[14px] leading-[1.6] text-ink-soft">
                    {t.body}
                  </p>
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
        <div className="mt-20 flex items-end justify-between gap-6 border-t border-line pt-8 sm:mt-28">
          <p className="eyebrow">{c.refs}</p>
          <Link
            href={href(lang, "referanslar")}
            className="text-[12px] tracking-[0.2em] text-gold-hi uppercase hover:text-gold"
          >
            {c.refsLink} →
          </Link>
        </div>
      </div>
      <div className="-mt-10">
        <References lang={lang} header={false} />
      </div>
    </section>
  );
}

/* ---------- 07 Sektörel çözümler: the sectors flow past ---------- */

export function SectorScene({
  lang,
  meta,
  sectors,
}: {
  lang: Locale;
  meta: SceneMeta;
  sectors: string[];
}) {
  const c = deck[lang].sektor;
  return (
    <section
      id={meta.slug}
      className="scroll-mt-0 overflow-hidden border-t border-line bg-night-2 py-24 sm:py-32 lg:py-40"
    >
      <div className="gutter mx-auto grid max-w-[1600px] gap-10 lg:grid-cols-12 lg:items-end">
        <Head
          meta={meta}
          title={c.title}
          lang={lang}
          className="lg:col-span-8 lg:!flex-col lg:!items-start"
        />
        <div className="flex items-end gap-4 lg:col-span-4 lg:justify-end">
          <span className="display text-gold-foil text-[clamp(5rem,10vw,9rem)] leading-[0.8]">
            <Counter value={sectors.length} />
          </span>
          <span className="max-w-[14ch] pb-1 text-[13px] leading-[1.5] text-muted">
            {c.countLabel}
          </span>
        </div>
      </div>
      {/* the sector names sit still, wrapped like a typeset list; nothing slides sideways */}
      <ul className="gutter mx-auto mt-12 flex max-w-[1600px] flex-col items-center gap-1.5 text-center sm:mt-24 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-8 sm:gap-y-3">
        {sectors.map((s, i) => (
          <li key={s}>
            <FadeIn y={12} delay={Math.min(i * 0.02, 0.4)} className="flex items-center gap-5 sm:gap-8">
            <span
              className={cn(
                "display text-[clamp(1.25rem,2.6vw,2.6rem)] leading-[1.25]",
                i % 3 === 1 ? "text-gold-foil italic" : "text-ink/85",
              )}
            >
              {s}
            </span>
            {i < sectors.length - 1 && <span aria-hidden className="hidden size-1.5 rounded-full bg-gold/60 sm:inline-block" />}
            </FadeIn>
          </li>
        ))}
      </ul>
    </section>
  );
}
