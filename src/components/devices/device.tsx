"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { devices } from "@/content/products";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { FadeIn, RiseText } from "@/components/site/motion";

const silk = [0.22, 1, 0.36, 1] as const;

export function DeviceChapter({ lang, index }: { lang: Locale; index: number }) {
  const d = devices[lang];
  const device = d.devices[index];
  const hasVariant = device.id === "minimal";
  const [variant, setVariant] = useState<"black" | "white">("black");
  const image = hasVariant ? (variant === "black" ? device.image : device.scene) : device.image;

  return (
    <section id={device.id} className="grid border-t border-line lg:min-h-dvh lg:grid-cols-12">
      <div className={cn("relative lg:sticky lg:top-0 lg:col-span-7 lg:h-dvh", index % 2 && "lg:order-2")}>
        <div className="relative h-[70vh] overflow-hidden bg-[#ecebe8] lg:h-full">
          <AnimatePresence mode="popLayout">
            <motion.img
              key={image}
              src={image}
              alt={device.name}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: silk }}
              className="absolute inset-0 m-auto h-full w-full object-contain mix-blend-multiply"
            />
          </AnimatePresence>
          <span className="display pointer-events-none absolute bottom-4 left-6 text-[clamp(5rem,12vw,12rem)] leading-none text-night/[0.06]">
            0{index + 1}
          </span>
          {hasVariant && (
            <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-1 rounded-full bg-night/85 p-1 backdrop-blur">
              {(["black", "white"] as const).map((v) => (
                <button
                  key={v}
                  onClick={() => setVariant(v)}
                  className={cn(
                    "flex h-9 items-center gap-2 rounded-full px-4 text-[12px] transition-colors",
                    variant === v ? "bg-ink text-night" : "text-ink-soft hover:text-ink",
                  )}
                >
                  <span className={cn("size-3 rounded-full border border-ink/40", v === "black" ? "bg-[#1b1b1d]" : "bg-white")} />
                  {d.variant[v]}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="gutter flex flex-col justify-center gap-12 py-20 lg:col-span-5 lg:py-32">
        <div>
          <p className="eyebrow !text-gold">{device.kind}</p>
          <RiseText as="h2" text={device.name} className="display mt-5 text-[clamp(3rem,5.6vw,5.6rem)] text-ink" />
          <FadeIn>
            <p className="mt-6 text-[15px] leading-[1.75] text-ink-soft">{device.body}</p>
          </FadeIn>
        </div>
        <FadeIn>
          <p className="eyebrow mb-4">{d.specLabels.features}</p>
          <ul>
            {device.features.map((f) => (
              <li key={f} className="flex gap-4 border-b border-line py-3.5 text-[14px] text-ink">
                <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-gold" />
                {f}
              </li>
            ))}
          </ul>
        </FadeIn>
        <FadeIn>
          <p className="eyebrow mb-4">{d.specLabels.specs}</p>
          <dl className="grid grid-cols-2 gap-px bg-line">
            {device.specs.map(([k, v], i, all) => (
              <div key={k} className={cn("bg-night p-4", all.length % 2 === 1 && i === all.length - 1 && "col-span-2")}>
                <dt className="text-[11px] tracking-[0.2em] text-muted uppercase">{k}</dt>
                <dd className="display mt-2 text-xl text-ink">{v}</dd>
              </div>
            ))}
          </dl>
        </FadeIn>
      </div>
    </section>
  );
}

export function Spaces({ lang }: { lang: Locale }) {
  const s = devices[lang].spaces;
  const [active, setActive] = useState(0);
  return (
    <section className="gutter mx-auto max-w-[1600px] py-20 sm:py-32 lg:py-44">
      <p className="eyebrow mb-10">{s.eyebrow}</p>
      <div className="flex h-[70vh] flex-col gap-3 md:flex-row">
        {s.items.map((item, i) => (
          <motion.button
            key={item.name}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
            animate={{ flexGrow: active === i ? 4 : 1 }}
            transition={{ duration: 0.9, ease: silk }}
            className="relative min-h-16 basis-0 overflow-hidden text-left"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-night/90 via-night/20 to-night/10" />
            <span
              className={cn(
                "display absolute bottom-5 left-5 text-[clamp(1.4rem,2.4vw,2.6rem)] text-ink transition-opacity duration-500",
                active === i ? "opacity-100" : "opacity-70",
              )}
            >
              {item.name}
            </span>
          </motion.button>
        ))}
      </div>
    </section>
  );
}
