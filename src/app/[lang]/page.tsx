import { asLocale } from "@/lib/i18n";
import { Story } from "@/components/home/story";
import { Audit } from "@/components/home/audit";
import {
  About,
  Closing,
  Collection,
  Marquee,
  Pillars,
  References,
} from "@/components/home/sections";

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const lang = asLocale((await params).lang);
  return (
    <>
      <Story lang={lang} />
      <Marquee lang={lang} />
      <About lang={lang} />
      <Pillars lang={lang} />
      <Collection lang={lang} />
      <Audit lang={lang} />
      <References lang={lang} />
      <Closing lang={lang} />
    </>
  );
}
