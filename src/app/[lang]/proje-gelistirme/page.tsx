import { asLocale } from "@/lib/i18n";
import { ChapterPage, chapterMetadata } from "@/components/chapter/chapter-page";

export const metadata = chapterMetadata("proje-gelistirme");

export default async function Page({ params }: PageProps<"/[lang]/proje-gelistirme">) {
  return <ChapterPage lang={asLocale((await params).lang)} slug="proje-gelistirme" />;
}
