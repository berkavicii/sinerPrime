"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { home } from "@/content/home";
import { common } from "@/content/common";
import { whatsappLink } from "@/lib/contact";
import type { Locale } from "@/lib/i18n";
import { Button, ButtonLink } from "@/components/ui/button";
import { RiseText } from "@/components/site/motion";

const silk = [0.22, 1, 0.36, 1] as const;

export function Audit({ lang }: { lang: Locale }) {
  const a = home[lang].audit;
  const c = common[lang];
  const [answers, setAnswers] = useState<boolean[]>([]);
  const i = answers.length;
  const done = i >= a.questions.length;
  const noes = answers.map((v, k) => (v ? -1 : k)).filter((k) => k >= 0);

  const message = `${c.whatsappMessage}\n\n${a.title}\n${noes.map((k) => `— ${a.questions[k]}`).join("\n")}`;

  return (
    <section className="relative overflow-hidden border-y border-line bg-night-2 py-20 sm:py-32 lg:py-44">
      <div className="weave absolute inset-0 opacity-60" aria-hidden />
      <div className="gutter relative mx-auto grid max-w-[1600px] gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow">{a.eyebrow}</p>
          <RiseText as="h2" text={a.title} className="display mt-5 text-[clamp(2.4rem,5vw,5rem)] text-ink" />
          <p className="mt-8 max-w-md text-[15px] leading-relaxed text-ink-soft">{a.lead}</p>
          <div className="mt-12 flex gap-1.5" aria-hidden>
            {a.questions.map((_, k) => (
              <span
                key={k}
                className="h-1 flex-1 rounded-full transition-colors duration-500"
                style={{
                  background: k < i ? (answers[k] ? "var(--ink-soft)" : "var(--gold)") : "var(--line)",
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative min-h-[420px] lg:col-span-6 lg:col-start-7">
          <AnimatePresence mode="wait">
            {!done ? (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, rotate: 1.5 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                exit={{ opacity: 0, y: -30, rotate: -1.5 }}
                transition={{ duration: 0.6, ease: silk }}
                className="flex h-full min-h-[420px] flex-col justify-between border border-line bg-night/80 p-8 backdrop-blur sm:p-12"
              >
                <p className="text-[12px] tracking-[0.3em] text-gold">
                  {String(i + 1).padStart(2, "0")} {a.of} {a.questions.length}
                </p>
                <p className="display my-10 text-[clamp(1.6rem,2.6vw,2.4rem)] leading-[1.15] text-ink">{a.questions[i]}</p>
                <div className="flex gap-3">
                  <Button variant="ghost" size="lg" className="flex-1" onClick={() => setAnswers([...answers, true])}>
                    {a.yes}
                  </Button>
                  <Button size="lg" className="flex-1" onClick={() => setAnswers([...answers, false])}>
                    {a.no}
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: silk }}
                className="flex min-h-[420px] flex-col justify-between border border-gold/40 bg-night/80 p-8 backdrop-blur sm:p-12"
              >
                <div>
                  <p className="display text-gold-foil text-[clamp(5rem,10vw,8rem)] leading-none">{noes.length}</p>
                  <p className="display mt-4 text-[clamp(1.8rem,3vw,2.8rem)] text-ink">{a.resultTitle(noes.length)}</p>
                  <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-soft">{a.resultBody(noes.length)}</p>
                </div>
                <div className="mt-10 flex flex-wrap gap-3">
                  <ButtonLink href={whatsappLink(message)} size="lg">
                    {a.resultCta}
                  </ButtonLink>
                  <Button variant="ghost" size="lg" onClick={() => setAnswers([])}>
                    {a.restart}
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
