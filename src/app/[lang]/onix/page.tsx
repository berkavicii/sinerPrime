import type { Metadata } from "next";
import { onix } from "@/content/products";
import { asLocale } from "@/lib/i18n";
import { whatsappLink } from "@/lib/contact";
import { Studio } from "@/components/onix/studio";
import { FadeIn, ParallaxImage, RiseText } from "@/components/site/motion";
import { ButtonLink } from "@/components/ui/button";

export async function generateMetadata({ params }: PageProps<"/[lang]/onix">): Promise<Metadata> {
  const o = onix[asLocale((await params).lang)];
  return { title: o.meta.title, description: o.meta.description };
}

export default async function OnixPage({ params }: PageProps<"/[lang]/onix">) {
  const lang = asLocale((await params).lang);
  const o = onix[lang];

  return (
    <>
      {/* hero */}
      <section className="relative min-h-dvh overflow-hidden pt-28">
        <div className="gutter mx-auto grid max-w-[1600px] items-end gap-10 lg:grid-cols-12">
          <div className="relative z-10 pb-10 lg:col-span-6 lg:pb-24">
            <FadeIn>
              <p className="eyebrow !text-gold">{o.hero.eyebrow}</p>
            </FadeIn>
            <FadeIn delay={0.1} y={60}>
              <h1 className="display text-gold-foil mt-6 pb-[0.06em] text-[clamp(6rem,14.5vw,15rem)] leading-[0.82] tracking-[-0.04em]">
                {o.hero.name}
              </h1>
            </FadeIn>
            <RiseText
              as="p"
              text={o.hero.title}
              delay={0.2}
              className="display mt-10 max-w-[20ch] text-[clamp(1.8rem,3vw,3rem)] text-ink"
            />
            <FadeIn delay={0.35}>
              <p className="mt-8 max-w-lg text-[15px] leading-relaxed text-ink-soft">{o.hero.body}</p>
            </FadeIn>
          </div>
          <div className="relative lg:col-span-6">
            <ParallaxImage src="/onix/thy-stone.webp" alt="ONIX" className="aspect-[4/5] w-full lg:h-[86vh] lg:aspect-auto" strength={50} />
          </div>
        </div>
      </section>

      <Studio lang={lang} />

      {/* personalisation showcase */}
      <section className="gutter mx-auto max-w-[1600px] py-20 sm:py-32 lg:py-44">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">{o.showcase.eyebrow}</p>
            <RiseText as="h2" text={o.showcase.title} className="display mt-5 text-[clamp(2.4rem,4.6vw,4.6rem)] text-ink" />
          </div>
          <FadeIn className="self-end lg:col-span-5 lg:col-start-8">
            <p className="text-[15px] leading-relaxed text-ink-soft">{o.showcase.body}</p>
          </FadeIn>
        </div>
        <div className="mt-20 grid gap-5 md:grid-cols-2">
          <ParallaxImage src="/onix/thy-detail.webp" alt="ONIX — Turkish Airlines" className="aspect-[3/4]" />
          <ParallaxImage src="/onix/aselsan-detail.webp" alt="ONIX — ASELSAN" className="aspect-[3/4] md:mt-32" />
        </div>
        <div className="mt-20 grid gap-px bg-line md:grid-cols-3">
          {o.showcase.items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08} className="bg-night p-8 lg:p-10">
              <p className="font-display text-gold-foil text-5xl">0{i + 1}</p>
              <h3 className="display mt-6 text-2xl text-ink">{item.title}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">{item.body}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* specs */}
      <section className="weave border-y border-line bg-night-2 py-32">
        <div className="gutter mx-auto grid max-w-[1600px] gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">{o.specs.eyebrow}</p>
            <h2 className="display mt-5 text-[clamp(5rem,12vw,11rem)] leading-[0.8] text-ink">
              8<span className="text-gold-foil text-[0.4em]">cm</span>
            </h2>
            <ParallaxImage src="/onix/hand-thy.webp" alt="" className="mt-12 aspect-[4/5] max-w-sm" strength={30} />
          </div>
          <dl className="self-center lg:col-span-6 lg:col-start-7">
            {o.specs.rows.map(([k, v], i) => (
              <FadeIn key={k} delay={i * 0.05} className="grid grid-cols-[1fr_1.4fr] gap-6 border-b border-line py-6">
                <dt className="eyebrow self-center">{k}</dt>
                <dd className="display text-[clamp(1.2rem,2vw,1.7rem)] text-ink">{v}</dd>
              </FadeIn>
            ))}
          </dl>
        </div>
      </section>

      {/* strategy */}
      <section className="gutter mx-auto max-w-[1600px] py-20 sm:py-32 lg:py-44">
        <p className="eyebrow">{o.strategy.eyebrow}</p>
        <RiseText as="h2" text={o.strategy.title} className="display mt-5 max-w-[18ch] text-[clamp(2.6rem,6vw,6rem)] text-ink" />
        <ol className="mt-20 grid gap-x-16 md:grid-cols-2">
          {o.strategy.questions.map((q, i) => (
            <FadeIn key={q} delay={(i % 2) * 0.08} className="flex gap-6 border-t border-line py-8">
              <span className="text-[12px] tracking-[0.2em] text-gold">{String(i + 1).padStart(2, "0")}</span>
              <p className="display text-[clamp(1.3rem,2vw,1.8rem)] leading-snug text-ink">{q}</p>
            </FadeIn>
          ))}
        </ol>
      </section>

      {/* audiences */}
      <section className="relative overflow-hidden">
        <ParallaxImage src="/onix/thy-box-open.webp" alt="" className="absolute inset-0 opacity-35" strength={80} />
        <div className="absolute inset-0 bg-gradient-to-b from-night via-night/60 to-night" />
        <div className="gutter relative mx-auto max-w-[1600px] py-20 sm:py-32 lg:py-44">
          <p className="eyebrow">{o.audiences.eyebrow}</p>
          <RiseText as="h2" text={o.audiences.title} className="display mt-5 text-[clamp(2.6rem,6vw,6rem)] text-ink" />
          <div className="mt-20 grid gap-px bg-line/60 sm:grid-cols-2 lg:grid-cols-5">
            {o.audiences.items.map((a, i) => (
              <FadeIn key={a.name} delay={i * 0.07} className="flex min-h-44 flex-col sm:min-h-64 justify-between bg-night/85 p-7 backdrop-blur">
                <span className="text-[12px] tracking-[0.2em] text-gold">0{i + 1}</span>
                <div>
                  <h3 className="display text-2xl text-ink">{a.name}</h3>
                  <p className="mt-3 text-[13px] leading-relaxed text-ink-soft">{a.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* order */}
      <section className="gutter mx-auto max-w-[1600px] py-20 sm:py-32 lg:py-44">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="eyebrow">{o.order.eyebrow}</p>
            <RiseText as="h2" text={o.order.title} className="display mt-5 text-[clamp(2.6rem,5vw,5rem)] text-ink" />
            <p className="mt-8 max-w-lg text-[15px] leading-relaxed text-ink-soft">{o.order.body}</p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <ButtonLink href={whatsappLink(o.order.message)} size="lg">
                {o.order.cta}
              </ButtonLink>
              <span className="display text-gold-foil text-3xl">500 · 1.000 · 2.000</span>
            </div>
          </div>
          <ol className="relative lg:col-span-5 lg:col-start-8">
            <span className="absolute top-3 bottom-3 left-[7px] w-px bg-gradient-to-b from-gold via-gold/30 to-transparent" />
            {o.order.steps.map((step, i) => (
              <FadeIn key={step.name} delay={i * 0.1} className="relative flex gap-8 pb-12 last:pb-0">
                <span className="relative mt-2 size-[15px] shrink-0 rounded-full border border-gold bg-night">
                  <span className="absolute inset-[4px] rounded-full bg-gold" />
                </span>
                <div>
                  <h3 className="display text-3xl text-ink">{step.name}</h3>
                  <p className="mt-2 text-[14px] text-ink-soft">{step.body}</p>
                </div>
              </FadeIn>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
