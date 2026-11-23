import { asLocale } from "@/lib/i18n";
import { ChapterPage, chapterMetadata } from "@/components/chapter/chapter-page";

export const metadata = chapterMetadata("felsefemiz");

export default async function Page({ params }: PageProps<"/[lang]/felsefemiz">) {
  return <ChapterPage lang={asLocale((await params).lang)} slug="felsefemiz" />;
}
