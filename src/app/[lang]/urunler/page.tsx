import type { Metadata } from "next";
import Link from "next/link";
import { burners, kubbeStory, onixStory } from "@/content/burners";
import { asLocale, href } from "@/lib/i18n";
import { ProductStory } from "@/components/products/product-story";
import { FadeIn, RiseText } from "@/components/site/motion";

export async function generateMetadata({ params }: PageProps<"/[lang]/urunler">): Promise<Metadata> {
  const b = burners[asLocale((await params).lang)];
  return { title: b.meta.title, description: b.meta.description };
}

export default async function BurnersPage({ params }: PageProps<"/[lang]/urunler">) {
  const lang = asLocale((await params).lang);
  const b = burners[lang];

  return (
    <>
      {/* hero */}
      <section className="gutter mx-auto flex min-h-dvh max-w-[1600px] flex-col justify-end pt-32 pb-16">
        <FadeIn>
          <p className="eyebrow !text-gold">{b.hero.eyebrow}</p>
        </FadeIn>
        <h1 className="display mt-8 text-[clamp(3.4rem,10vw,11rem)] leading-[0.9] text-ink">
          <RiseText text={b.hero.title[0]} />
          <RiseText text={b.hero.title[1]} delay={0.12} className="italic" innerClassName="text-gold-foil" />
        </h1>
        <div className="mt-12 grid gap-10 border-t border-line pt-8 lg:grid-cols-12">
          <FadeIn delay={0.3} className="lg:col-span-5">
            <p className="max-w-lg text-[16px] leading-[1.75] text-ink-soft">{b.hero.lead}</p>
          </FadeIn>
          <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:col-span-7 lg:col-start-6">
            {b.pick.map((p, i) => (
              <FadeIn key={p.id} delay={0.4 + i * 0.1}>
                <a href={`#${p.id}`} className="group block">
                  <div className="aspect-[4/5] overflow-hidden bg-night-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.image}
                      alt={p.name}
                      className="h-full w-full object-cover transition-transform duration-1000 ease-[var(--ease-silk)] group-hover:scale-105"
                    />
                  </div>
                  <p className="eyebrow mt-4 !text-[9px] sm:!text-[11px]">{p.kind}</p>
                  <p className="display mt-2 text-[1.15rem] leading-tight text-ink transition-colors group-hover:text-gold-hi sm:text-3xl">
                    {p.name} ↓
                  </p>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <ProductStory id="onix" lang={lang} model="onix" content={onixStory[lang]} ctaHref={href(lang, "onix#studio")} />
      <ProductStory id="kubbe" lang={lang} model="kubbe" theme="stone" content={kubbeStory[lang]} ctaHref={href(lang, "kubbe")} />

      {/* discovery set */}
      <section id="set" className="scroll-mt-20 border-t border-line">
        <div className="gutter mx-auto grid max-w-[1600px] gap-12 py-20 sm:py-32 lg:grid-cols-12 lg:items-center lg:gap-16 lg:py-40">
          <div className="lg:col-span-7">
            <FadeIn y={24}>
              <figure className="aspect-[4/5] overflow-hidden bg-night-2 sm:mx-auto sm:w-[78%]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={b.set.main.src} alt={b.set.main.alt} loading="lazy" className="h-full w-full object-cover" />
              </figure>
            </FadeIn>
          </div>
          <div className="mt-8 lg:col-span-5 lg:mt-0">
            <FadeIn>
              <p className="eyebrow !text-gold">{b.set.eyebrow}</p>
            </FadeIn>
            <h2 className="display mt-6 text-[clamp(2.6rem,5vw,5rem)] leading-[0.95] text-ink">
              <RiseText text={b.set.title[0]} />
              <RiseText text={b.set.title[1]} delay={0.12} className="italic" innerClassName="text-gold-foil" />
            </h2>
            <FadeIn delay={0.2}>
              <p className="mt-8 max-w-md text-[16px] leading-[1.75] text-ink-soft">{b.set.lead}</p>
              <ul className="mt-8 border-t border-line">
                {b.set.facts.map((f) => (
                  <li key={f} className="flex items-center gap-4 border-b border-line py-3.5 text-[14px] text-ink-soft">
                    <span className="h-px w-5 bg-gold/70" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={b.shop.items[1].href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-3 rounded-full border border-gold/50 px-6 py-3 text-[13px] text-gold-hi transition-colors hover:bg-gold hover:text-night"
              >
                {b.shop.cta} ↗
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* deeper pages */}
      <section className="gutter mx-auto max-w-[1600px] py-20 sm:py-32 lg:py-40">
        <p className="eyebrow">{b.more.eyebrow}</p>
        <RiseText as="h2" text={b.more.title} className="display mt-5 text-[clamp(2.4rem,5vw,5rem)] text-ink" />
        <div className="mt-14 grid gap-px bg-line md:grid-cols-2">
          {(["onix", "kubbe"] as const).map((k) => (
            <Link
              key={k}
              href={href(lang, k === "onix" ? "onix#studio" : "kubbe")}
              className="group flex min-h-56 flex-col justify-between bg-night p-8 transition-colors duration-500 hover:bg-night-2 sm:p-10"
            >
              <span className="text-[12px] tracking-[0.2em] text-gold">{k === "onix" ? "ONIX" : "KUBBE"}</span>
              <div>
                <h3 className="display text-[clamp(2rem,3vw,3rem)] text-ink transition-colors group-hover:text-gold-hi">
                  {b.more[k].label} →
                </h3>
                <p className="mt-3 max-w-md text-[14px] leading-relaxed text-muted">{b.more[k].body}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* where to buy */}
        <div className="mt-20 flex flex-col gap-6 border-t border-line pt-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow">{b.shop.eyebrow}</p>
            <p className="display mt-3 text-[clamp(1.8rem,3vw,2.8rem)] text-ink">{b.shop.title}</p>
          </div>
          <ul className="flex flex-col gap-px bg-line sm:flex-row">
            {b.shop.items.map((s) => (
              <li key={s.href} className="bg-night">
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-1 px-1 py-4 transition-colors hover:bg-night-2 sm:px-8 sm:py-5"
                >
                  <span className="text-[11px] tracking-[0.2em] text-muted uppercase">{s.kind}</span>
                  <span className="display text-[1.5rem] text-ink transition-colors group-hover:text-gold-hi">{s.name} ↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
