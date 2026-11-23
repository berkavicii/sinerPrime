import { asLocale } from "@/lib/i18n";
import { ChapterPage, chapterMetadata } from "@/components/chapter/chapter-page";

export const metadata = chapterMetadata("koku-teknolojileri");

export default async function Page({ params }: PageProps<"/[lang]/koku-teknolojileri">) {
  return <ChapterPage lang={asLocale((await params).lang)} slug="koku-teknolojileri" />;
}
