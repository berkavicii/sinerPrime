"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { tracks, trackIds, type TrackId } from "@/content/tracks";
import { href, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/site/motion";
import { ButtonLink } from "@/components/ui/button";

/* The pitch blocks for each project track (hotels, corporate), shared by the home page and /projeler. */

/** What scent does for a hotel or a company. */
export function TrackBenefits({ lang, track, className }: { lang: Locale; track: TrackId; className?: string }) {
  const c = tracks[lang].tracks[track];
  return (
    <div className={className}>
      <h3 className="display max-w-[22ch] text-[clamp(1.8rem,3vw,3rem)] leading-[1.08] text-ink">{c.title}</h3>
      <p className="mt-3 max-w-2xl text-[14px] leading-[1.7] text-ink-soft sm:mt-4 sm:text-[15px]">{c.lead}</p>
      <ul className="mt-8 grid grid-cols-2 gap-px bg-line sm:mt-10 lg:grid-cols-4">
        {c.benefits.map((b, i) => (
          <FadeIn key={b.k} delay={i * 0.06} className="bg-night py-5 pr-3 even:pl-3 sm:p-8 lg:even:pl-8">
            <span className="text-[11px] tracking-[0.2em] text-gold">{String(i + 1).padStart(2, "0")}</span>
            <h4 className="display mt-2 text-[clamp(1.25rem,1.9vw,1.9rem)] leading-[1.08] text-ink sm:mt-4">{b.k}</h4>
            <p className="mt-2 text-[12.5px] leading-[1.6] text-ink-soft sm:mt-3 sm:text-[14px] sm:leading-[1.7]">{b.body}</p>
          </FadeIn>
        ))}
      </ul>
    </div>
  );
}

/** Where it goes, and with which product. `compact` drops the descriptions on phones. */
export function TrackSpaces({
  lang,
  track,
  compact = false,
  className,
}: {
  lang: Locale;
  track: TrackId;
  compact?: boolean;
  className?: string;
}) {
  const c = tracks[lang].tracks[track];
  return (
    <div className={className}>
      <div className="mb-6 flex flex-col gap-2 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
        <h3 className="display text-[clamp(1.8rem,3vw,3rem)] text-ink">{c.spacesTitle}</h3>
        <p className="max-w-md text-[13px] leading-[1.6] text-muted sm:text-right">{c.spacesLead}</p>
      </div>
      <ul className="grid grid-cols-2 gap-px bg-line lg:grid-cols-4">
        {c.spaces.map((s, i) => (
          <FadeIn key={s.name} delay={(i % 4) * 0.05} className="flex flex-col justify-between gap-4 bg-night-2 p-4 sm:gap-6 sm:p-7">
            <div>
              <span className="text-[11px] tracking-[0.2em] text-muted">{String(i + 1).padStart(2, "0")}</span>
              <h4 className="display mt-2 text-[clamp(1.2rem,1.6vw,1.6rem)] leading-[1.1] text-ink">{s.name}</h4>
              <p className={cn("mt-2 text-[12.5px] leading-[1.6] text-ink-soft sm:text-[13.5px] sm:leading-[1.65]", compact && "hidden sm:block")}>
                {s.body}
              </p>
            </div>
            <ul className="flex flex-wrap gap-1.5">
              {s.fit.map((f) => (
                <li key={f.label}>
                  <Link
                    href={href(lang, f.path)}
                    className="inline-block rounded-full border border-gold/40 px-2.5 py-1 text-[10.5px] tracking-wide text-gold transition-colors hover:border-gold hover:bg-gold hover:text-night sm:px-3 sm:text-[11.5px]"
                  >
                    {f.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FadeIn>
        ))}
      </ul>
    </div>
  );
}

/** Why buying from Siner is simple: written for the purchasing desk. */
export function TrackPurchase({ lang, track, className }: { lang: Locale; track: TrackId; className?: string }) {
  const c = tracks[lang].tracks[track].purchase;
  return (
    <div className={cn("grid gap-5 sm:gap-8 lg:grid-cols-12", className)}>
      <div className="lg:col-span-4">
        <p className="eyebrow !text-gold">{c.eyebrow}</p>
        <h3 className="display mt-4 text-[clamp(1.9rem,3.2vw,3.2rem)] leading-[1.05] text-ink">{c.title}</h3>
      </div>
      <ul className="grid gap-x-10 sm:grid-cols-2 lg:col-span-8">
        {c.items.map((it, i) => (
          <FadeIn key={it.k} delay={(i % 2) * 0.06} className="flex gap-4 border-t border-line py-4 sm:py-6">
            <span className="pt-1 text-[11px] tracking-[0.2em] text-gold">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <p className="text-[15px] text-ink sm:text-[16px]">{it.k}</p>
              <p className="mt-1 text-[12.5px] leading-[1.6] text-ink-soft sm:mt-1.5 sm:text-[14px] sm:leading-[1.65]">{it.body}</p>
            </div>
          </FadeIn>
        ))}
      </ul>
    </div>
  );
}

/** Home page 03: one switch, two complete pitches. */
export function HomeTracks({ lang }: { lang: Locale }) {
  const [active, setActive] = useState<TrackId>("oteller");
  const c = tracks[lang].tracks[active];
  return (
    <div className="mt-10 sm:mt-14">
      <div className="flex gap-2" role="tablist">
        {trackIds.map((t) => (
          <button
            key={t}
            role="tab"
            aria-selected={active === t}
            onClick={() => setActive(t)}
            className={cn(
              "h-11 rounded-full px-6 text-[13px] tracking-wide transition-colors duration-500 sm:px-8",
              active === t ? "bg-gold text-night" : "border border-line text-ink-soft hover:border-gold hover:text-ink",
            )}
          >
            {tracks[lang].tracks[t].tab}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          role="tabpanel"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 sm:mt-14"
        >
          <TrackBenefits lang={lang} track={active} />
          <TrackSpaces lang={lang} track={active} compact className="mt-12 sm:mt-20" />
          <TrackPurchase lang={lang} track={active} className="mt-12 sm:mt-20" />
          <div className="mt-10 flex flex-wrap gap-3 sm:mt-14">
            <ButtonLink href="#iletisim">{c.cta}</ButtonLink>
            <ButtonLink href={href(lang, `projeler#${active}`)} variant="ghost">
              {c.more}
            </ButtonLink>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
