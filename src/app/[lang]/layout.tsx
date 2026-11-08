import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { display, sans } from "@/lib/fonts";
import { isLocale, localeParams } from "@/lib/i18n";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { SmoothScroll } from "@/components/site/smooth-scroll";
import { Intro } from "@/components/site/intro";

export const dynamicParams = false;
export const generateStaticParams = localeParams;

export const viewport: Viewport = { themeColor: "#0a0a0b" };

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  const tr = lang === "tr";
  return {
    metadataBase: new URL("https://sinerprime.com"),
    title: {
      default: tr ? "Siner Prime — The Art of Scent" : "Siner Prime — The Art of Scent",
      template: "%s · Siner Prime",
    },
    description: tr
      ? "Markaların duyulara dokunan imzasını tasarlıyoruz. Kurumsal koku, el yapımı seramik buhurdanlıklar ve profesyonel mekân kokulandırma."
      : "We design the sensory signature of brands. Corporate scent, handmade ceramic oil burners and professional space scenting.",
    alternates: { languages: { tr: "/tr/", en: "/en/" } },
  };
}

export default async function LangLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return (
    <html lang={lang} className={`${display.variable} ${sans.variable}`}>
      <body className="grain min-h-dvh">
        <SmoothScroll />
        <Intro />
        <Header lang={lang} />
        <main>{children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
