import Link from "next/link";
import { common } from "@/content/common";
import { contact, mailLink, whatsappLink } from "@/lib/contact";
import { href, type Locale } from "@/lib/i18n";
import { ButtonLink } from "@/components/ui/button";

/** A compact closing band: one invitation with the two contact buttons, then the addresses and links in small type. */
export function Footer({ lang }: { lang: Locale }) {
  const c = common[lang];
  const link = "text-ink-soft transition-colors hover:text-gold-hi";
  return (
    <footer className="weave relative border-t border-line bg-night-2" id="iletisim">
      <div className="gutter mx-auto grid max-w-[1400px] gap-12 py-14 sm:py-20 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <p className="eyebrow mb-5">{c.footer.contact}</p>
          <h2 className="display text-[clamp(2rem,3.2vw,3rem)] leading-[1.05] text-ink">{c.footer.lead}</h2>
          <p className="mt-5 max-w-md text-[14px] leading-[1.7] text-ink-soft">{c.footer.body}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <ButtonLink href={whatsappLink(c.whatsappMessage)}>{c.whatsapp}</ButtonLink>
            <ButtonLink href={mailLink(c.mailSubject)} variant="ghost">
              {c.mail}
            </ButtonLink>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-10 text-[13px] sm:grid-cols-[1fr_1.6fr] lg:col-span-6 lg:col-start-7 lg:pt-2">
          <div className="flex flex-col gap-2.5">
            <p className="eyebrow mb-1">{c.footer.contact}</p>
            <a className={link} href={contact.phoneHref}>
              {contact.phone}
            </a>
            <a className={link} href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
            <p className="eyebrow mt-5 mb-1">{c.footer.visit}</p>
            <p className="max-w-[28ch] leading-[1.6] text-ink-soft">{contact.address}</p>
          </div>
          <div className="flex flex-col gap-2.5">
            <p className="eyebrow mb-1">{c.footer.explore}</p>
            <div className="grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
              {c.nav.map((n) => (
                <Link key={n.path} href={href(lang, n.path)} className={link}>
                  {n.label}
                </Link>
              ))}
              <a className={link} href={contact.shop} target="_blank" rel="noreferrer">
                {c.footer.shop}
              </a>
              <a className={link} href={contact.corporate} target="_blank" rel="noreferrer">
                {c.footer.corporate}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="gutter mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-2 pt-5 pb-20 text-[11px] text-muted sm:flex-row sm:pb-5 sm:pr-24">
          <span>
            <span className="display text-gold-foil mr-3 text-[14px] tracking-[0.3em]">SINER PRIME</span>© {new Date().getFullYear()} ·{" "}
            {c.footer.rights}
          </span>
          <span lang="en" className="text-center tracking-[0.3em] uppercase">
            The Art of Scent · {c.tagline}
          </span>
        </div>
      </div>
    </footer>
  );
}
