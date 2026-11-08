import Link from "next/link";
import { common } from "@/content/common";
import { contact, mailLink, whatsappLink } from "@/lib/contact";
import { href, type Locale } from "@/lib/i18n";
import { ButtonLink } from "@/components/ui/button";

export function Footer({ lang }: { lang: Locale }) {
  const c = common[lang];
  return (
    <footer className="weave relative overflow-hidden border-t border-line bg-night-2" id="iletisim">
      <div className="gutter mx-auto grid max-w-[1600px] gap-16 pt-24 pb-12 lg:grid-cols-12 lg:pt-32">
        <div className="lg:col-span-7">
          <p className="eyebrow mb-8">{c.footer.contact}</p>
          <h2 className="display max-w-[14ch] text-[clamp(2.4rem,5.4vw,5.2rem)] text-ink">{c.footer.lead}</h2>
          <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-ink-soft">{c.footer.body}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href={whatsappLink(c.whatsappMessage)} size="lg">
              {c.whatsapp}
            </ButtonLink>
            <ButtonLink href={mailLink(c.mailSubject)} variant="ghost" size="lg">
              {c.mail}
            </ButtonLink>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 text-[14px] lg:col-span-5 lg:pt-16">
          <div className="flex flex-col gap-3">
            <p className="eyebrow mb-2">{c.footer.contact}</p>
            <a className="text-ink-soft transition-colors hover:text-gold-hi" href={contact.phoneHref}>
              {contact.phone}
            </a>
            <a className="text-ink-soft transition-colors hover:text-gold-hi" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <p className="eyebrow mb-2">{c.footer.explore}</p>
            {c.nav.slice(0, 3).map((n) => (
              <Link key={n.path} href={href(lang, n.path)} className="text-ink-soft transition-colors hover:text-gold-hi">
                {n.label}
              </Link>
            ))}
            <a className="text-ink-soft transition-colors hover:text-gold-hi" href={contact.shop} target="_blank" rel="noreferrer">
              {c.footer.shop}
            </a>
            <a className="text-ink-soft transition-colors hover:text-gold-hi" href={contact.corporate} target="_blank" rel="noreferrer">
              {c.footer.corporate}
            </a>
          </div>
          <div className="col-span-2 flex flex-col gap-2">
            <p className="eyebrow mb-2">{c.footer.visit}</p>
            <p className="text-ink-soft">{contact.address}</p>
          </div>
        </div>
      </div>

      <div className="pointer-events-none select-none" aria-hidden>
        <p className="display text-gold-foil -mb-[0.18em] text-center text-[14vw] lg:text-[clamp(4rem,15.5vw,17rem)] leading-none whitespace-nowrap opacity-90">
          The Art of Scent
        </p>
      </div>

      <div className="gutter relative flex flex-col items-center justify-between gap-3 border-t border-line bg-night-2 py-6 text-[12px] text-muted sm:flex-row">
        <span>
          © {new Date().getFullYear()} Siner Prime · {c.footer.rights}
        </span>
        <span className="tracking-[0.3em] uppercase">{c.tagline}</span>
      </div>
    </footer>
  );
}
