import { asLocale } from "@/lib/i18n";
import { landing } from "@/content/landing";
import { Intro } from "@/components/home/landing";
import { ChapterIndex } from "@/components/home/chapter-index";
import { References } from "@/components/home/sections";

/* A short shop window: the opening, the seven chapters of the left menu, then references. */
export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const lang = asLocale((await params).lang);
  return (
    <>
      <Intro lang={lang} />
      <ChapterIndex lang={lang} />
      <div id="referanslar" className="scroll-mt-20 border-t border-line">
        <References lang={lang} eyebrow={landing[lang].refs.eyebrow} />
      </div>
    </>
  );
}
