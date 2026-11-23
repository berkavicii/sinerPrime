import { asLocale } from "@/lib/i18n";
import { ChapterPage, chapterMetadata } from "@/components/chapter/chapter-page";

export const metadata = chapterMetadata("koku-tasarimi");

export default async function Page({ params }: PageProps<"/[lang]/koku-tasarimi">) {
  return <ChapterPage lang={asLocale((await params).lang)} slug="koku-tasarimi" />;
}
