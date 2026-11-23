import { asLocale } from "@/lib/i18n";
import { ChapterPage, chapterMetadata } from "@/components/chapter/chapter-page";

export const metadata = chapterMetadata("tasarim-ve-koleksiyonlar");

export default async function Page({ params }: PageProps<"/[lang]/tasarim-ve-koleksiyonlar">) {
  return <ChapterPage lang={asLocale((await params).lang)} slug="tasarim-ve-koleksiyonlar" />;
}
