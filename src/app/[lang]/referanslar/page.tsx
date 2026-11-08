import type { Metadata } from "next";
import { references } from "@/content/pages";
import { common } from "@/content/common";
import { asLocale } from "@/lib/i18n";
import { whatsappLink } from "@/lib/contact";
import { References } from "@/components/home/sections";
import { FadeIn, ParallaxImage, RiseText } from "@/components/site/motion";
import { ButtonLink } from "@/components/ui/button";

export async function generateMetadata({ params }: PageProps<"/[lang]/referanslar">): Promise<Metadata> {
  const r = references[asLocale((await params).lang)];
  return { title: r.meta.title, description: r.meta.description };
}

export default async function ReferencesPage({ params }: PageProps<"/[lang]/referanslar">) {
  const lang = asLocale((await params).lang);
  const r = references[lang];
  const cm = common[lang];

  return (
    <>
      {/* hero */}
      <section className="gutter mx-auto flex min-h-[86dvh] max-w-[1600px] flex-col justify-end pt-32 pb-16">
        <FadeIn>
          <p className="eyebrow !text-gold">{r.hero.eyebrow}</p>
        </FadeIn>
        <h1 className="display mt-8 text-[clamp(3.4rem,10vw,11rem)] leading-[0.9] text-ink">
          <RiseText text={r.hero.title[0]} />
          <RiseText text={r.hero.title[1]} delay={0.12} className="italic" innerClassName="text-gold-foil" />
        </h1>
        <div className="mt-12 flex flex-col justify-between gap-8 border-t border-line pt-8 md:flex-row md:items-end">
          <FadeIn delay={0.3}>
            <p className="max-w-lg text-[16px] leading-relaxed text-ink-soft">{r.hero.lead}</p>
          </FadeIn>
          <p className="display text-gold-foil text-[clamp(4rem,8vw,8rem)] leading-none">50+</p>
        </div>
      </section>

      {/* logo wall */}
      <div className="border-t border-line">
        <p className="eyebrow gutter mx-auto max-w-[1600px] pt-16">{r.wall.eyebrow}</p>
        <References lang={lang} header={false} />
      </div>

      {/* sectors */}
      <section className="border-y border-line bg-night-2 py-20 sm:py-32 lg:py-40">
        <div className="gutter mx-auto max-w-[1600px]">
          <p className="eyebrow mb-12">{r.sectors.eyebrow}</p>
          <div className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
            {r.sectors.items.map((s, i) => (
              <FadeIn key={s.name} delay={(i % 3) * 0.08} className="group flex min-h-44 flex-col sm:min-h-56 justify-between bg-night-2 p-8 transition-colors duration-500 hover:bg-night">
                <span className="text-[12px] tracking-[0.2em] text-gold">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="display text-[clamp(1.8rem,2.6vw,2.6rem)] text-ink transition-colors group-hover:text-gold-hi">{s.name}</h3>
                  <p className="mt-3 text-[13px] leading-relaxed text-muted">{s.examples}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* case studies */}
      <section className="gutter mx-auto max-w-[1600px] py-20 sm:py-32 lg:py-44">
        <p className="eyebrow">{r.cases.eyebrow}</p>
        <RiseText as="h2" text={r.cases.title} className="display mt-5 text-[clamp(2.6rem,6vw,6rem)] text-ink" />
        <div className="mt-20 flex flex-col gap-32">
          {r.cases.items.map((c, i) => (
            <article key={c.brand} className="grid items-center gap-10 lg:grid-cols-12">
              <div className={`grid grid-cols-5 gap-4 lg:col-span-7 ${i % 2 ? "lg:order-2 lg:col-start-6" : ""}`}>
                <ParallaxImage src={c.images[0]} alt={c.brand} className="col-span-3 aspect-[3/4]" />
                <ParallaxImage src={c.images[1]} alt="" className="col-span-2 mt-12 aspect-[3/4] sm:mt-24" strength={30} />
              </div>
              <div className={`lg:col-span-4 ${i % 2 ? "lg:order-1" : "lg:col-start-9"}`}>
                <p className="eyebrow !text-gold">{c.brand}</p>
                <h3 className="display mt-5 text-[clamp(2rem,3.4vw,3.4rem)] text-ink">{c.title}</h3>
                <p className="mt-6 text-[15px] leading-relaxed text-ink-soft">{c.body}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-20 text-[12px] text-muted">{r.cases.note}</p>
      </section>

      {/* cta */}
      <section className="gutter mx-auto max-w-[1600px] pb-20 sm:pb-32 lg:pb-44">
        <div className="grid items-end gap-10 border-t border-line pt-16 lg:grid-cols-12">
          <RiseText as="h2" text={r.cta.title} className="display text-[clamp(2.4rem,5vw,5rem)] text-ink lg:col-span-8" />
          <div className="lg:col-span-3 lg:col-start-10">
            <ButtonLink href={whatsappLink(cm.whatsappMessage)} size="lg">
              {r.cta.button}
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
