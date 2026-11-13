"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { home } from "@/content/home";
import { href, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { RiseText } from "@/components/site/motion";
import { ButtonLink } from "@/components/ui/button";

const silk = [0.22, 1, 0.36, 1] as const;

export function Departments({ lang }: { lang: Locale }) {
  const d = home[lang].departments;
  const [open, setOpen] = useState(0);
  return (
    <section className="gutter mx-auto max-w-[1600px] py-20 sm:py-32 lg:py-44">
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:sticky lg:top-32 lg:col-span-4 lg:self-start">
          <p className="eyebrow">{d.eyebrow}</p>
          <RiseText as="h2" text={d.title} className="display mt-5 text-[clamp(2.4rem,4.6vw,4.6rem)] text-ink" />
          <p className="mt-8 max-w-sm text-[15px] leading-[1.75] text-ink-soft">{d.lead}</p>
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
                      <p className="max-w-2xl pb-8 pl-14 text-[15px] leading-[1.75] text-ink-soft sm:pl-[4.5rem]">{item.body}</p>
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

export function References({ lang, header = true, eyebrow }: { lang: Locale; header?: boolean; eyebrow?: string }) {
  const r = home[lang].refs;
  const rows = [1, 2, 3, 4, 5, 6, 7];
  return (
    <section className="py-20 sm:py-28 lg:py-36">
      <div
        className={cn(
          "gutter mx-auto mb-14 flex max-w-[1600px] flex-col justify-between gap-10 lg:flex-row lg:items-end",
          !header && "hidden",
        )}
      >
        <div>
          <p className="eyebrow !text-gold">{eyebrow ?? r.eyebrow}</p>
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
