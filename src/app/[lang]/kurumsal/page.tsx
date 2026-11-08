import type { Metadata } from "next";
import { corporate } from "@/content/pages";
import { common } from "@/content/common";
import { asLocale } from "@/lib/i18n";
import { whatsappLink } from "@/lib/contact";
import { Departments, Pillars, Team } from "@/components/home/sections";
import { Counter, FadeIn, ParallaxImage, RiseText, ScrollLitText } from "@/components/site/motion";
import { ButtonLink } from "@/components/ui/button";

export async function generateMetadata({ params }: PageProps<"/[lang]/kurumsal">): Promise<Metadata> {
  const c = corporate[asLocale((await params).lang)];
  return { title: c.meta.title, description: c.meta.description };
}

export default async function CorporatePage({ params }: PageProps<"/[lang]/kurumsal">) {
  const lang = asLocale((await params).lang);
  const c = corporate[lang];
  const cm = common[lang];

  return (
    <>
      {/* hero */}
      <section className="weave relative flex min-h-dvh flex-col justify-end overflow-hidden pt-32 pb-[10vh]">
        <div className="pointer-events-none absolute -top-[10vh] right-[-10vw] h-[80vh] w-[80vh] rounded-full bg-[radial-gradient(circle,rgba(200,164,106,0.18),transparent_65%)] blur-2xl" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/deer.png"
          alt=""
          className="pointer-events-none absolute top-[14vh] right-[6vw] hidden h-[46vh] w-auto opacity-[0.08] lg:block"
        />
        <div className="gutter relative mx-auto w-full max-w-[1600px]">
          <FadeIn>
            <p className="eyebrow !text-gold">{c.hero.eyebrow}</p>
          </FadeIn>
          <h1 className="display mt-8 text-[clamp(2.8rem,7vw,7.6rem)] text-ink">
            {c.hero.title.map((line, i) => (
              <RiseText
                key={line}
                text={line}
                delay={i * 0.12}
                className={i === 2 ? "italic" : undefined}
                innerClassName={i === 2 ? "text-gold-foil" : undefined}
              />
            ))}
          </h1>
          <FadeIn delay={0.4}>
            <p className="mt-10 max-w-xl text-[16px] leading-relaxed text-ink-soft">{c.hero.lead}</p>
          </FadeIn>
        </div>
      </section>

      {/* numbers */}
      <section className="border-y border-line">
        <div className="mx-auto grid max-w-[1600px] grid-cols-2 lg:grid-cols-4">
          {c.numbers.map((n, i) => (
            <div key={n.label} className={`gutter py-14 ${i > 0 ? "lg:border-l lg:border-line" : ""} ${i % 2 ? "border-l border-line" : ""}`}>
              <p className="display text-[clamp(4rem,7vw,7rem)] leading-none text-ink">
                <Counter value={n.value} />
                <span className="text-gold-foil">{n.suffix}</span>
              </p>
              <p className="eyebrow mt-4">{n.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* story */}
      <section className="gutter mx-auto max-w-[1600px] py-20 sm:py-32 lg:py-44">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">{c.story.eyebrow}</p>
            <ParallaxImage src="/onix/aselsan-stone.webp" alt="" className="mt-10 aspect-[4/5]" strength={40} />
          </div>
          <div className="flex flex-col gap-8 lg:col-span-6 lg:col-start-7 lg:pt-24">
            {c.story.paragraphs.map((p, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <p className={i === 0 ? "display text-[clamp(1.5rem,2.2vw,2.1rem)] leading-snug text-ink" : "text-[15px] leading-relaxed text-ink-soft"}>
                  {p}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
        <ScrollLitText
          text={c.story.belief}
          className="display mt-32 max-w-[28ch] text-[clamp(2rem,4.4vw,4.4rem)] leading-[1.08] text-ink italic"
        />
      </section>

      <Pillars lang={lang} />

      <Departments lang={lang} />

      {/* evaluate */}
      <section className="border-y border-line bg-night-2 py-20 sm:py-32 lg:py-44">
        <div className="gutter mx-auto max-w-[1600px]">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow">{c.evaluate.eyebrow}</p>
              <RiseText as="h2" text={c.evaluate.title} className="display mt-5 text-[clamp(2.4rem,4.6vw,4.6rem)] text-ink" />
            </div>
            <ol className="lg:col-span-7">
              {c.evaluate.items.map((q, i) => (
                <FadeIn key={q} delay={i * 0.04} className="flex gap-6 border-b border-line py-6 first:border-t">
                  <span className="pt-1 text-[12px] tracking-[0.2em] text-gold">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-[16px] leading-relaxed text-ink">{q}</p>
                </FadeIn>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <Team lang={lang} />

      {/* approach */}
      <section className="gutter mx-auto max-w-[1600px] py-32 text-center lg:py-44">
        <p className="eyebrow">{c.approach.eyebrow}</p>
        <ScrollLitText
          text={c.approach.body}
          className="display mx-auto mt-10 max-w-[34ch] text-[clamp(1.8rem,3.4vw,3.4rem)] leading-[1.12] text-ink"
        />
        <ButtonLink href={whatsappLink(cm.whatsappMessage)} size="lg" className="mt-14">
          {c.cta}
        </ButtonLink>
      </section>
    </>
  );
}
