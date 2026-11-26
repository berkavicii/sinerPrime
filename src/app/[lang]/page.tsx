import { asLocale } from "@/lib/i18n";
import { chapters } from "@/content/chapters";
import { Intro } from "@/components/home/landing";
import {
  CollectionScene,
  DesignScene,
  PhilosophyScene,
  ProjectScene,
  ScentScene,
  SectorScene,
  TechScene,
  type SceneMeta,
} from "@/components/home/deck";

/*
  A presentation for a meeting: the opening, then the seven chapters of the left menu as
  short scenes in order. The menu scrolls through them; each scene links to its full chapter.
*/
export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const lang = asLocale((await params).lang);
  const meta = (slug: string): SceneMeta => {
    const c = chapters.find((x) => x.slug === slug)!;
    return { slug, num: c.num, menu: c.menu };
  };
  // the chapter pages carry the full copy; only the sector names travel to the client here
  const sectorBlock = chapters
    .find((c) => c.slug === "sektorel-cozumler")
    ?.sections[0]?.blocks.find((b) => b.type === "names");
  const sectors =
    sectorBlock && "items" in sectorBlock
      ? (sectorBlock.items as string[])
      : [];

  return (
    <>
      <Intro lang={lang} />
      <PhilosophyScene lang={lang} meta={meta("felsefemiz")} />
      <ScentScene lang={lang} meta={meta("koku")} />
      <DesignScene lang={lang} meta={meta("koku-tasarimi")} />
      <TechScene lang={lang} meta={meta("koku-teknolojileri")} />
      <CollectionScene lang={lang} meta={meta("tasarim-ve-koleksiyonlar")} />
      <ProjectScene lang={lang} meta={meta("proje-gelistirme")} />
      <SectorScene
        lang={lang}
        meta={meta("sektorel-cozumler")}
        sectors={sectors}
      />
    </>
  );
}
