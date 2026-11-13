import type { Metadata } from "next";
import { kubbe } from "@/content/products";
import { asLocale } from "@/lib/i18n";
import { contact } from "@/lib/contact";
import { common } from "@/content/common";
import { ZoomHero } from "@/components/kubbe/zoom-hero";
import { Counter, FadeIn, ParallaxImage, RiseText, ScrollLitText } from "@/components/site/motion";
import { ButtonLink } from "@/components/ui/button";

export async function generateMetadata({ params }: PageProps<"/[lang]/kubbe">): Promise<Metadata> {
  const k = kubbe[asLocale((await params).lang)];
  return { title: k.meta.title, description: k.meta.description };
}

export default async function KubbePage({ params }: PageProps<"/[lang]/kubbe">) {
  const lang = asLocale((await params).lang);
  const k = kubbe[lang];
  const c = common[lang];

  return (
    <>
      <ZoomHero name={k.hero.name} eyebrow={k.hero.eyebrow} title={k.hero.title} />

      <section className="gutter mx-auto max-w-[1600px] py-20 sm:py-32 lg:py-44">
        <ScrollLitText text={k.hero.body} className="display max-w-[30ch] text-[clamp(1.8rem,3.6vw,3.6rem)] leading-[1.12] text-ink" />
        <div className="mt-24 grid grid-cols-2 gap-px bg-line lg:grid-cols-4">
          {k.stats.map((s) => (
            <div key={s.label} className="bg-night py-10 pr-6">
              <p className="display text-[clamp(3.4rem,6vw,6rem)] leading-none text-ink">
                <Counter value={s.value} decimals={s.value % 1 ? 1 : 0} />
                <span className="text-gold-foil ml-2 text-[0.35em]">{s.unit}</span>
              </p>
              <p className="eyebrow mt-4">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* craft */}
      <section className="grid min-h-dvh lg:grid-cols-2">
        <ParallaxImage src="/kubbe/scene.webp" alt="" className="min-h-[70vh]" strength={70} />
        <div className="gutter flex flex-col justify-center bg-night-2 py-24">
          <p className="eyebrow">{k.craft.eyebrow}</p>
          <RiseText as="h2" text={k.craft.title} className="display mt-5 max-w-[14ch] text-[clamp(2.4rem,4.4vw,4.4rem)] text-ink" />
          <FadeIn>
            <p className="mt-8 max-w-md text-[15px] leading-[1.75] text-ink-soft">{k.craft.body}</p>
          </FadeIn>
        </div>
      </section>

      {/* parts */}
      <section className="gutter mx-auto max-w-[1600px] py-20 sm:py-32 lg:py-44">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">{k.parts.eyebrow}</p>
            <RiseText as="h2" text={k.parts.title} className="display mt-5 text-[clamp(2.4rem,4.6vw,4.6rem)] text-ink" />
            <FadeIn>
              <p className="mt-8 max-w-md text-[15px] leading-[1.75] text-ink-soft">{k.parts.body}</p>
            </FadeIn>
          </div>
          <FadeIn className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-[2px] bg-[#f3f2f0]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/kubbe/parts.webp" alt="" loading="lazy" className="w-full mix-blend-multiply" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ritual */}
      <section className="weave border-y border-line bg-night-2 py-20 sm:py-32 lg:py-44">
        <div className="gutter mx-auto max-w-[1600px]">
          <p className="eyebrow">{k.ritual.eyebrow}</p>
          <RiseText as="h2" text={k.ritual.title} className="display mt-5 text-[clamp(2.6rem,6vw,6rem)] text-ink" />
          <ol className="mt-20 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {k.ritual.steps.map((step, i) => (
              <FadeIn key={step} delay={i * 0.1} className="flex min-h-48 flex-col sm:min-h-72 justify-between bg-night-2 p-8">
                <span className="display text-gold-foil text-7xl leading-none">{i + 1}</span>
                <p className="text-[16px] leading-[1.75] text-ink">{step}</p>
              </FadeIn>
            ))}
          </ol>
        </div>
      </section>

      {/* why + places */}
      <section className="gutter mx-auto grid max-w-[1600px] gap-20 py-20 sm:py-32 lg:grid-cols-12 lg:py-44">
        <div className="lg:col-span-6">
          <p className="eyebrow">{k.why.eyebrow}</p>
          <ul className="mt-8">
            {k.why.items.map((item, i) => (
              <FadeIn key={item} delay={i * 0.05} className="flex items-baseline gap-5 border-b border-line py-5">
                <span className="text-gold">✦</span>
                <span className="display text-[clamp(1.3rem,2vw,1.8rem)] text-ink">{item}</span>
              </FadeIn>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          <ParallaxImage src="/kubbe/box.webp" alt="" className="aspect-[4/3] bg-[#f3f2f0]" imgClassName="object-contain mix-blend-multiply" strength={20} />
          <p className="eyebrow mt-12">{k.places.eyebrow}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {k.places.items.map((p) => (
              <span key={p} className="rounded-full border border-line px-4 py-2 text-[13px] text-ink-soft">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* scents */}
      <section className="border-t border-line py-20 sm:py-32 lg:py-44">
        <div className="gutter mx-auto max-w-[1600px]">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="eyebrow">{k.scents.eyebrow}</p>
              <RiseText as="h2" text={k.scents.title} className="display mt-5 text-[clamp(2.4rem,5vw,5rem)] text-ink" />
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href={contact.shop} variant="ghost">
                {k.scents.shop}
              </ButtonLink>
              <ButtonLink href="#iletisim">{c.contact}</ButtonLink>
            </div>
          </div>
          <div className="mt-16 flex flex-wrap gap-x-8 gap-y-3">
            {k.scents.items.map(([no, name]) => (
              <span key={name} className="group display text-[clamp(1.6rem,3vw,3rem)] text-ink/40 transition-colors duration-500 hover:text-gold-hi">
                <sup className="mr-1 font-sans text-[11px] tracking-widest text-gold">No.{no}</sup>
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
