"use client";

import dynamic from "next/dynamic";
import { useMemo, useRef, useState } from "react";
import { onix } from "@/content/products";
import { whatsappLink } from "@/lib/contact";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { Button, ButtonLink } from "@/components/ui/button";
import { PRESETS, useSinerLogo, type PresetName } from "@/components/three/stage";
import { loadImage, type OnixDesign, type OnixPattern } from "@/components/three/brand-texture";
import { RiseText } from "@/components/site/motion";

const StudioCanvas = dynamic(() => import("@/components/three/studio-canvas"), {
  ssr: false,
  loading: () => <div className="h-full w-full animate-pulse bg-night-3/40" />,
});

const PATTERNS: OnixPattern[] = ["none", "lines", "wave", "rings"];

export function Studio({ lang }: { lang: Locale }) {
  const s = onix[lang].studio;
  const sinerLogo = useSinerLogo();
  const [preset, setPreset] = useState<PresetName | null>("ivory");
  const [base, setBase] = useState<Omit<OnixDesign, "logo">>({ ...PRESETS.ivory });
  const [custom, setCustom] = useState<{ img: HTMLImageElement; name: string } | null>(null);
  const [exploded, setExploded] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const input = useRef<HTMLInputElement>(null);

  const design: OnixDesign = useMemo(
    () => ({ ...base, logo: custom?.img ?? sinerLogo }),
    [base, custom, sinerLogo],
  );

  const update = (patch: Partial<Omit<OnixDesign, "logo">>) => {
    setPreset(null);
    setBase((b) => ({ ...b, ...patch }));
  };

  const onFile = async (file?: File | null) => {
    if (!file || !file.type.startsWith("image/")) return;
    const url = URL.createObjectURL(file);
    try {
      const img = await loadImage(url);
      setCustom({ img, name: file.name });
    } catch {
      URL.revokeObjectURL(url);
    }
  };

  return (
    <section id="studio" className="relative scroll-mt-16 border-y border-line bg-night-2">
      <div className="grid lg:min-h-dvh lg:grid-cols-12">
        <div
          className={cn(
            "relative h-[64vh] lg:col-span-8 lg:h-auto",
            dragOver && "outline outline-1 -outline-offset-8 outline-gold",
          )}
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragOver(false);
            onFile(e.dataTransfer.files?.[0]);
          }}
        >
          <div className="pointer-events-none absolute top-1/2 left-[40%] h-[60vmin] w-[60vmin] -translate-1/2 rounded-full bg-[radial-gradient(circle,rgba(200,164,106,0.22),transparent_65%)] blur-2xl" />
          <div className="absolute inset-0 cursor-grab active:cursor-grabbing">
            <StudioCanvas design={design} exploded={exploded} />
          </div>
          <p className="eyebrow pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2">{s.drag}</p>
        </div>

        <div className="gutter flex flex-col justify-center gap-10 border-t border-line py-16 lg:col-span-4 lg:border-t-0 lg:border-l lg:py-24">
          <div>
            <p className="eyebrow">{s.eyebrow}</p>
            <RiseText as="h2" text={s.title} className="display mt-5 text-[clamp(2rem,3vw,3rem)] text-ink" />
            <p className="mt-6 text-[14px] leading-relaxed text-ink-soft">{s.body}</p>
          </div>

          <div>
            <input
              ref={input}
              type="file"
              accept="image/png,image/svg+xml,image/webp,image/jpeg"
              className="sr-only"
              onChange={(e) => onFile(e.target.files?.[0])}
            />
            <button
              onClick={() => input.current?.click()}
              className="group flex w-full items-center gap-4 border border-dashed border-ink/25 p-5 text-left transition-colors hover:border-gold"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-gold text-night transition-transform group-hover:scale-110">
                <svg viewBox="0 0 20 20" className="size-4">
                  <path d="M10 14V3M5 8l5-5 5 5M3 17h14" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </span>
              <span className="min-w-0">
                <span className="block truncate text-[14px] text-ink">{custom ? custom.name : s.upload}</span>
                <span className="block text-[12px] text-muted">{s.uploadHint}</span>
              </span>
            </button>
            {custom && (
              <button onClick={() => setCustom(null)} className="mt-3 text-[12px] text-muted underline-offset-4 hover:text-gold hover:underline">
                {s.remove}
              </button>
            )}
          </div>

          <div className="flex gap-3">
            {(Object.keys(PRESETS) as PresetName[]).map((name) => (
              <button
                key={name}
                aria-label={name}
                onClick={() => {
                  setPreset(name);
                  setBase({ ...PRESETS[name] });
                }}
                className={cn(
                  "relative size-10 rounded-full border transition-transform hover:scale-110",
                  preset === name ? "border-gold ring-1 ring-gold ring-offset-4 ring-offset-night-2" : "border-ink/20",
                )}
                style={{ background: `linear-gradient(135deg, ${PRESETS[name].glaze} 55%, ${PRESETS[name].accent} 55%)` }}
              />
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {(
              [
                ["glaze", s.glaze],
                ["accent", s.accent],
              ] as const
            ).map(([key, label]) => (
              <label key={key} className="flex cursor-pointer items-center gap-3 border border-line p-3 transition-colors hover:border-ink/30">
                <span className="relative size-7 overflow-hidden rounded-full border border-ink/20" style={{ background: base[key] }}>
                  <input
                    type="color"
                    value={base[key]}
                    onChange={(e) => update({ [key]: e.target.value })}
                    className="absolute inset-0 cursor-pointer opacity-0"
                  />
                </span>
                <span className="text-[13px] text-ink-soft">{label}</span>
              </label>
            ))}
          </div>

          <div>
            <p className="eyebrow mb-3">{s.pattern}</p>
            <div className="grid grid-cols-4 gap-2">
              {PATTERNS.map((p) => (
                <button
                  key={p}
                  onClick={() => update({ pattern: p })}
                  className={cn(
                    "h-10 border text-[12px] transition-colors",
                    base.pattern === p ? "border-gold bg-gold/10 text-gold-hi" : "border-line text-ink-soft hover:border-ink/30",
                  )}
                >
                  {s.patterns[p]}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button variant="ghost" onClick={() => setExploded((v) => !v)}>
              {exploded ? s.assemble : s.explode}
            </Button>
            <ButtonLink href={whatsappLink(s.sendMessage)}>{s.send}</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
