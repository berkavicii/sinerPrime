import { asLocale } from "@/lib/i18n";
import { ChapterPage, chapterMetadata } from "@/components/chapter/chapter-page";

export const metadata = chapterMetadata("sektorel-cozumler");

export default async function Page({ params }: PageProps<"/[lang]/sektorel-cozumler">) {
  return <ChapterPage lang={asLocale((await params).lang)} slug="sektorel-cozumler" />;
}
