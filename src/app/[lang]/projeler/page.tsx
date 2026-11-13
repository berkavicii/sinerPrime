import type { Metadata } from "next";
import { projects } from "@/content/pages";
import { asLocale } from "@/lib/i18n";
import { Departments } from "@/components/home/sections";
import { Audit } from "@/components/home/audit";
import { ProjectTabs } from "@/components/projects/tabs";
import { FadeIn, RiseText, ScrollLitText } from "@/components/site/motion";

export async function generateMetadata({ params }: PageProps<"/[lang]/projeler">): Promise<Metadata> {
  const p = projects[asLocale((await params).lang)];
  return { title: p.meta.title, description: p.meta.description };
}

export default async function ProjectsPage({ params }: PageProps<"/[lang]/projeler">) {
  const lang = asLocale((await params).lang);
  const p = projects[lang];
  const c = p.corporate;

  const corporateTrack = (
    <>
      {/* gifting strategy */}
      <section className="gutter mx-auto max-w-[1600px] py-20 sm:py-28 lg:py-36">
        <p className="eyebrow !text-gold">{c.strategy.eyebrow}</p>
        <RiseText as="h2" text={c.strategy.title} className="display mt-5 max-w-[18ch] text-[clamp(2.4rem,5vw,5rem)] text-ink" />
        <ol className="mt-14 grid gap-x-16 md:grid-cols-2">
          {c.strategy.questions.map((q, i) => (
            <FadeIn key={q} delay={(i % 2) * 0.08} className="flex gap-6 border-t border-line py-7">
              <span className="pt-1 text-[12px] tracking-[0.2em] text-gold">{String(i + 1).padStart(2, "0")}</span>
              <p className="display text-[clamp(1.3rem,2vw,1.8rem)] leading-snug text-ink">{q}</p>
            </FadeIn>
          ))}
        </ol>
      </section>

      {/* who it is for */}
      <section className="weave border-y border-line bg-night-2 py-20 sm:py-28 lg:py-36">
        <div className="gutter mx-auto max-w-[1600px]">
          <p className="eyebrow">{c.audiences.eyebrow}</p>
          <RiseText as="h2" text={c.audiences.title} className="display mt-5 text-[clamp(2.4rem,5vw,5rem)] text-ink" />
          <div className="mt-14 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-5">
            {c.audiences.items.map((a, i) => (
              <FadeIn key={a.name} delay={i * 0.07} className="flex min-h-44 flex-col justify-between bg-night-2 p-7 sm:min-h-60">
                <span className="text-[12px] tracking-[0.2em] text-gold">0{i + 1}</span>
                <div>
                  <h3 className="display text-2xl text-ink">{a.name}</h3>
                  <p className="mt-3 text-[13px] leading-[1.7] text-ink-soft">{a.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* bulk orders */}
      <section className="gutter mx-auto max-w-[1600px] py-20 sm:py-28 lg:py-36">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="eyebrow">{c.order.eyebrow}</p>
            <RiseText as="h2" text={c.order.title} className="display mt-5 text-[clamp(2.4rem,5vw,5rem)] text-ink" />
            <p className="mt-8 max-w-lg text-[15px] leading-[1.75] text-ink-soft">{c.order.body}</p>
          </div>
          <ol className="relative lg:col-span-5 lg:col-start-8">
            <span className="absolute top-3 bottom-3 left-[7px] w-px bg-gradient-to-b from-gold via-gold/30 to-transparent" />
            {c.order.steps.map((step, i) => (
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

  const hotelTrack = (
    <>
      <Departments lang={lang} />
      <Audit lang={lang} />
    </>
  );

  return (
    <>
      {/* hero */}
      <section className="weave relative flex min-h-[86dvh] flex-col justify-end overflow-hidden pt-32 pb-[10vh]">
        <div className="pointer-events-none absolute -top-[10vh] right-[-10vw] h-[80vh] w-[80vh] rounded-full bg-[radial-gradient(circle,rgba(200,164,106,0.18),transparent_65%)] blur-2xl" />
        <div className="gutter relative mx-auto w-full max-w-[1600px]">
          <FadeIn>
            <p className="eyebrow !text-gold">{p.hero.eyebrow}</p>
          </FadeIn>
          <h1 className="display mt-8 text-[clamp(2.8rem,7vw,7.6rem)] text-ink">
            {p.hero.title.map((line, i) => (
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
            <p className="mt-10 max-w-xl text-[16px] leading-[1.75] text-ink-soft">{p.hero.lead}</p>
          </FadeIn>
        </div>
      </section>

      {/* process */}
      <section className="border-t border-line">
        <div className="gutter mx-auto max-w-[1600px] py-16 sm:py-20">
          <p className="eyebrow mb-10">{p.process.eyebrow}</p>
          <ol className="grid grid-cols-2 gap-px bg-line lg:grid-cols-4">
            {p.process.steps.map((s, i) => (
              <FadeIn key={s.k} delay={i * 0.08} className="flex min-h-40 flex-col justify-between gap-6 bg-night p-4 sm:min-h-60 sm:p-7">
                <span className="display text-gold-foil text-4xl sm:text-5xl">{s.k}</span>
                <div>
                  <h3 className="display text-[clamp(1.6rem,2.2vw,2.2rem)] text-ink">{s.title}</h3>
                  <p className="mt-3 text-[14px] leading-[1.7] text-muted">{s.body}</p>
                </div>
              </FadeIn>
            ))}
          </ol>
        </div>
      </section>

      <ProjectTabs labels={p.tabs} kurumsal={corporateTrack} oteller={hotelTrack} />

      {/* our story */}
      <section className="border-t border-line">
        <div className="gutter mx-auto max-w-[1600px] py-20 sm:py-28 lg:py-36">
          <div className="grid gap-12 lg:grid-cols-12">
            <p className="eyebrow lg:col-span-4">{p.story.eyebrow}</p>
            <div className="flex max-w-[62ch] flex-col gap-8 lg:col-span-7 lg:col-start-6">
              {p.story.paragraphs.map((para, i) => (
                <FadeIn key={i} delay={i * 0.06}>
                  <p className={i === 0 ? "text-[18px] leading-[1.75] font-light text-ink sm:text-[20px]" : "text-[16px] leading-[1.8] text-ink-soft"}>
                    {para}
                  </p>
                </FadeIn>
              ))}
            </div>
          </div>
          <ScrollLitText
            text={p.story.belief}
            className="display mt-24 max-w-[28ch] text-[clamp(2rem,4.4vw,4.4rem)] leading-[1.18] text-ink italic"
          />
        </div>
      </section>
    </>
  );
}
