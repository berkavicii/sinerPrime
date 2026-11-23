import type { Metadata } from "next";
import Link from "next/link";
import { chapters, type Chapter } from "@/content/chapters";
import { common } from "@/content/common";
import { href, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { FadeIn, RiseText } from "@/components/site/motion";
import { Blocks } from "@/components/chapter/blocks";

export function getChapter(slug: string): Chapter {
  const c = chapters.find((x) => x.slug === slug);
  if (!c) throw new Error(`Unknown chapter: ${slug}`);
  return c;
}

export function chapterMetadata(slug: string): Metadata {
  const c = getChapter(slug);
  const first = c.intro.find((b) => b.type === "p");
  return {
    title: c.menu,
    description: c.subtitle ?? (first && "text" in first ? first.text.slice(0, 160) : undefined),
  };
}

/** One left-menu chapter: a quiet hero, then numbered sections with a sticky title column. */
export function ChapterPage({ lang, slug }: { lang: Locale; slug: string }) {
  const c = getChapter(slug);
  const t = common[lang];
  const index = chapters.findIndex((x) => x.slug === slug);
  const prev = chapters[index - 1];
  const next = chapters[index + 1];
  const [lead, ...rest] = c.intro;

  return (
    <article>
      <header className="gutter mx-auto max-w-[1400px] pt-32 pb-16 sm:pb-24 lg:pt-28">
        <FadeIn>
          <p className="eyebrow !text-gold">
            {c.num} · {c.menu}
          </p>
        </FadeIn>
        <RiseText as="h1" text={c.title} className="display mt-6 text-[clamp(3rem,7.5vw,7.5rem)] leading-[0.95] text-ink" />
        {c.subtitle && (
          <FadeIn delay={0.25}>
            <p className="display text-gold-foil mt-6 max-w-[26ch] text-[clamp(1.6rem,3vw,2.8rem)] leading-[1.1] italic">
              {c.subtitle}
            </p>
          </FadeIn>
        )}

        <div className="mt-14 grid gap-10 border-t border-line pt-10 lg:grid-cols-12">
          <div className="lg:col-span-8 lg:col-start-5">
            <FadeIn delay={0.3}>
              {lead && lead.type === "p" && (
                <p className="display max-w-[36ch] text-[clamp(1.5rem,2.2vw,2.1rem)] leading-[1.25] text-ink">{lead.text}</p>
              )}
            </FadeIn>
            {rest.length > 0 && (
              <div className="mt-8">
                <Blocks blocks={rest} lang={lang} />
              </div>
            )}
          </div>
        </div>

        {c.sections.length > 2 && (
          <nav aria-label={t.onThisPage} className="mt-16 flex flex-col gap-4 lg:grid lg:grid-cols-12">
            <p className="eyebrow lg:col-span-4">{t.onThisPage}</p>
            <ol className="flex flex-wrap gap-2 lg:col-span-8">
              {c.sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="inline-flex rounded-full border border-line px-4 py-1.5 text-[12.5px] text-ink-soft transition-colors hover:border-gold/60 hover:text-gold-hi"
                  >
                    {s.num && <span className="mr-2 text-gold">{s.num}</span>}
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}
      </header>

      {c.sections.map((s) => (
        <section key={s.id} id={s.id} className="scroll-mt-20 border-t border-line">
          <div className="gutter mx-auto grid max-w-[1400px] grid-cols-1 gap-10 py-20 sm:py-24 lg:grid-cols-12 lg:py-28">
            <div className="lg:sticky lg:top-12 lg:col-span-4 lg:self-start">
              {s.num && <p className="display text-[2.6rem] leading-none text-gold/80">{s.num}</p>}
              <h2 className={cn("display text-[clamp(2rem,3.1vw,3.1rem)] leading-[1.02] text-ink", s.num && "mt-4")}>{s.title}</h2>
              {s.kicker && <p className="mt-4 max-w-[34ch] text-[15px] leading-[1.6] text-gold-hi italic">{s.kicker}</p>}
            </div>
            <FadeIn className="min-w-0 lg:col-span-8" y={20}>
              <Blocks blocks={s.blocks} lang={lang} />
            </FadeIn>
          </div>
        </section>
      ))}

      <section className="border-t border-line">
        <div className="gutter mx-auto max-w-[1400px] py-14 text-center">
          <p className="display text-gold-foil text-[clamp(1.4rem,2vw,1.9rem)] tracking-[0.3em]">SINER PRIME</p>
          <p lang="en" className="eyebrow mt-3">
            The Art of Scent · Design · Experience
          </p>
        </div>
        <nav className="grid border-t border-line sm:grid-cols-2">
          {prev ? <Pager lang={lang} chapter={prev} label={t.prev} /> : <span className="hidden sm:block" />}
          {next ? <Pager lang={lang} chapter={next} label={t.next} align="right" /> : <Pager lang={lang} home label={t.back} align="right" />}
        </nav>
      </section>
    </article>
  );
}

function Pager({
  lang,
  chapter,
  label,
  align,
  home,
}: {
  lang: Locale;
  chapter?: Chapter;
  label: string;
  align?: "right";
  home?: boolean;
}) {
  return (
    <Link
      href={home ? href(lang) : href(lang, chapter!.slug)}
      className={cn(
        "gutter group flex flex-col gap-2 border-line py-10 transition-colors hover:bg-night-2 sm:py-14",
        align === "right" ? "sm:items-end sm:border-l sm:text-right" : "border-b sm:border-b-0",
      )}
    >
      <span className="eyebrow">{label}</span>
      <span className="display text-[clamp(1.6rem,2.6vw,2.4rem)] text-ink transition-colors group-hover:text-gold-hi">
        {home ? "Siner Prime" : `${chapter!.num} · ${chapter!.menu}`}
      </span>
    </Link>
  );
}
