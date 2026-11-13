import { asLocale } from "@/lib/i18n";
import { landing } from "@/content/landing";
import { ChapterRail, Intro, KubbeFeature, Machines, OnixFeature, Projects, Scent, Who } from "@/components/home/landing";
import { References } from "@/components/home/sections";

/* Seven stops, readable in about two minutes; the footer is the single place to get in touch. */
export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const lang = asLocale((await params).lang);
  return (
    <>
      <ChapterRail lang={lang} />
      <Intro lang={lang} />
      <Scent lang={lang} />
      <Who lang={lang} />
      <Projects lang={lang} />
      <Machines lang={lang} />
      <KubbeFeature lang={lang} />
      <OnixFeature lang={lang} />
      <div id="referanslar" className="scroll-mt-20 border-t border-line">
        <References lang={lang} eyebrow={landing[lang].refs.eyebrow} />
      </div>
    </>
  );
}
