import type { Metadata } from "next";
import { devices } from "@/content/products";
import { asLocale } from "@/lib/i18n";
import { DeviceChapter, Spaces } from "@/components/devices/device";
import { FadeIn, ParallaxImage, RiseText } from "@/components/site/motion";
import { ButtonLink } from "@/components/ui/button";

export async function generateMetadata({ params }: PageProps<"/[lang]/cihazlar">): Promise<Metadata> {
  const d = devices[asLocale((await params).lang)];
  return { title: d.meta.title, description: d.meta.description };
}

export default async function DevicesPage({ params }: PageProps<"/[lang]/cihazlar">) {
  const lang = asLocale((await params).lang);
  const d = devices[lang];

  return (
    <>
      <section className="relative flex min-h-dvh items-end overflow-hidden">
        <ParallaxImage src="/devices/tower-lobby.webp" alt="" className="absolute inset-0" strength={90} />
        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/50 to-night/30" />
        <div className="gutter relative mx-auto w-full max-w-[1600px] pb-[12vh]">
          <FadeIn>
            <p className="eyebrow !text-gold-hi">{d.hero.eyebrow}</p>
          </FadeIn>
          <RiseText as="h1" text={d.hero.title} className="display mt-6 max-w-[14ch] text-[clamp(3rem,8vw,8.6rem)] text-ink" />
          <FadeIn delay={0.3}>
            <p className="mt-8 max-w-lg text-[15px] leading-[1.75] text-ink-soft">{d.hero.body}</p>
          </FadeIn>
          <nav className="mt-12 flex flex-wrap gap-3">
            {d.devices.map((dev, i) => (
              <a
                key={dev.id}
                href={`#${dev.id}`}
                className="flex items-center gap-3 rounded-full border border-ink/20 px-5 py-2.5 text-[13px] text-ink backdrop-blur transition-colors hover:border-gold hover:text-gold-hi"
              >
                <span className="text-[11px] text-gold">0{i + 1}</span>
                {dev.name}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {d.devices.map((dev, i) => (
        <DeviceChapter key={dev.id} lang={lang} index={i} />
      ))}

      <Spaces lang={lang} />

      <section className="gutter mx-auto max-w-[1600px] pb-20 sm:pb-32 lg:pb-44">
        <div className="grid items-end gap-10 border-t border-line pt-16 lg:grid-cols-12">
          <RiseText as="h2" text={d.cta.title} className="display text-[clamp(2.4rem,5vw,5rem)] text-ink lg:col-span-7" />
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-[15px] leading-[1.75] text-ink-soft">{d.cta.body}</p>
            <ButtonLink href="#iletisim" size="lg" className="mt-8">
              {lang === "tr" ? "İletişime geçin" : "Get in touch"}
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
