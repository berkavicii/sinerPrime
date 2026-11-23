import Link from "next/link";
import { chapters } from "@/content/chapters";
import { common } from "@/content/common";
import { href, type Locale } from "@/lib/i18n";
import { FadeIn } from "@/components/site/motion";

/** The home page's table of contents: the seven chapters of the left menu. */
export function ChapterIndex({ lang }: { lang: Locale }) {
  const t = common[lang];
  return (
    <section id="bolumler" className="scroll-mt-10 border-t border-line">
      <div className="gutter mx-auto max-w-[1400px] py-20 sm:py-28">
        <FadeIn>
          <p lang="en" className="eyebrow !text-gold">
            The Art of Scent · Design · Experience
          </p>
          <h2 className="display mt-5 text-[clamp(2.2rem,4.2vw,4.2rem)] text-ink">{t.explore}</h2>
        </FadeIn>

        <ol className="mt-14 border-b border-line">
          {chapters.map((c) => {
            const lead = c.intro[0];
            const teaser = c.subtitle ?? (lead && "text" in lead ? lead.text : "");
            return (
              <li key={c.slug}>
                <Link
                  href={href(lang, c.slug)}
                  className="group grid items-baseline gap-x-8 gap-y-2 border-t border-line py-7 transition-colors sm:grid-cols-[3.5rem_1fr] lg:grid-cols-[3.5rem_minmax(0,1fr)_minmax(0,1fr)_2rem] lg:py-9"
                >
                  <span className="text-[11px] tracking-[0.3em] text-gold">{c.num}</span>
                  <span className="display text-[clamp(1.9rem,3.4vw,3.3rem)] leading-[1.02] text-ink transition-colors duration-500 group-hover:text-gold-hi">
                    {c.menu}
                  </span>
                  <span className="max-w-[44ch] text-[15px] leading-[1.6] text-ink-soft italic sm:col-start-2 lg:col-start-auto">
                    {teaser}
                  </span>
                  <span
                    aria-hidden
                    className="hidden text-gold transition-transform duration-500 group-hover:translate-x-1 lg:block"
                  >
                    →
                  </span>
                </Link>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
