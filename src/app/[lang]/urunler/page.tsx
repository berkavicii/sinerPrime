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
          <div className="grid grid-cols-2 gap-4 lg:col-span-6 lg:col-start-7">
            {b.pick.map((p, i) => (
              <FadeIn key={p.id} delay={0.4 + i * 0.1}>
                <a href={`#${p.id}`} className="group block">
                  <div className="aspect-[4/3] overflow-hidden bg-night-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.image}
                      alt={p.name}
                      className="h-full w-full object-cover transition-transform duration-1000 ease-[var(--ease-silk)] group-hover:scale-105"
                    />
                  </div>
                  <p className="eyebrow mt-4">{p.kind}</p>
                  <p className="display mt-2 text-3xl text-ink transition-colors group-hover:text-gold-hi">{p.name} ↓</p>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <ProductStory id="onix" lang={lang} model="onix" content={onixStory[lang]} ctaHref={href(lang, "onix#studio")} />
      <ProductStory id="kubbe" lang={lang} model="kubbe" theme="stone" content={kubbeStory[lang]} ctaHref={href(lang, "kubbe")} />

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
      </section>
    </>
  );
}
