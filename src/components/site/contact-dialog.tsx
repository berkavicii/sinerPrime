"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { common } from "@/content/common";
import { contact, whatsappLink } from "@/lib/contact";
import type { Locale } from "@/lib/i18n";
import { ContactForm } from "@/components/site/contact-form";

/*
  The contact form as a pop-up. Every "contact" / "quote" button on the site links to #iletisim;
  instead of scrolling anywhere, a click on such a link (or opening a URL ending in #iletisim)
  brings this up. Esc, the close button or a click on the backdrop closes it.
*/

const HASH = "#iletisim";
const closeLabel = { tr: "Kapat", en: "Close" };

export function ContactDialog({ lang }: { lang: Locale }) {
  const c = common[lang];
  const [open, setOpen] = useState(false);
  const panel = useRef<HTMLDivElement>(null);
  const opener = useRef<HTMLElement | null>(null);

  const close = useCallback(() => {
    setOpen(false);
    if (location.hash === HASH) history.replaceState(null, "", location.pathname + location.search);
    opener.current?.focus?.();
  }, []);

  // open from any link to #iletisim, and from a URL that already carries the hash
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.("a[href]");
      if (!a) return;
      const url = new URL((a as HTMLAnchorElement).href, location.href);
      if (url.hash !== HASH) return;
      e.preventDefault(); // nothing on the page carries this id, so nothing scrolls either
      opener.current = a as HTMLElement;
      setOpen(true);
    };
    document.addEventListener("click", onClick, true);
    const onHash = () => location.hash === HASH && setOpen(true);
    onHash(); // a link from another page, e.g. /tr/#iletisim
    window.addEventListener("hashchange", onHash);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("hashchange", onHash);
    };
  }, []);

  // while open: page underneath stays put, Esc closes, Tab stays inside
  useEffect(() => {
    if (!open) return;
    const html = document.documentElement;
    const prev = html.style.overflow;
    html.style.overflow = "hidden";
    const t = setTimeout(() => panel.current?.querySelector<HTMLElement>("input,select,textarea")?.focus(), 350);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key !== "Tab" || !panel.current) return;
      const els = [...panel.current.querySelectorAll<HTMLElement>("a[href],button:not([disabled]),input:not([tabindex='-1']),select,textarea")];
      if (!els.length) return;
      const first = els[0];
      const last = els[els.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(t);
      html.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="contact"
          data-lenis-prevent
          className="fixed inset-0 z-[90] overflow-y-auto overscroll-contain"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div aria-hidden onClick={close} className="fixed inset-0 bg-night/80 backdrop-blur-md" />
          <div className="relative flex min-h-full items-center justify-center p-0 sm:p-6 lg:p-10" onClick={(e) => e.target === e.currentTarget && close()}>
            <motion.div
              ref={panel}
              role="dialog"
              aria-modal="true"
              aria-labelledby="contact-title"
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="weave relative grid min-h-dvh w-full max-w-[1080px] bg-night-2 ring-1 ring-gold/25 sm:min-h-0 lg:grid-cols-12"
            >
              <button
                type="button"
                onClick={close}
                aria-label={closeLabel[lang]}
                className="absolute top-4 right-4 z-10 grid h-11 w-11 place-items-center rounded-full border border-ink/15 text-ink-soft transition-colors hover:border-gold hover:text-gold-hi sm:top-6 sm:right-6"
              >
                <svg viewBox="0 0 14 14" className="h-3.5 w-3.5" aria-hidden>
                  <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.3" fill="none" />
                </svg>
              </button>

              <div className="border-b border-line px-6 pt-16 pb-8 sm:px-10 sm:pt-12 lg:col-span-5 lg:border-r lg:border-b-0 lg:py-14">
                <p className="eyebrow mb-5">{c.footer.contact}</p>
                <h2 id="contact-title" className="display text-[clamp(2rem,3.4vw,3rem)] leading-[1.05] text-ink">
                  {c.footer.lead}
                </h2>
                <p className="mt-5 max-w-sm text-[14px] leading-[1.7] text-ink-soft">{c.footer.body}</p>
                <div className="mt-8 grid gap-2.5 text-[13px] lg:mt-12">
                  <a className="text-ink-soft transition-colors hover:text-gold-hi" href={contact.phoneHref}>
                    {contact.phone}
                  </a>
                  <a className="text-ink-soft transition-colors hover:text-gold-hi" href={`mailto:${contact.email}`}>
                    {contact.email}
                  </a>
                  <a
                    className="text-gold-hi transition-colors hover:text-gold"
                    href={whatsappLink(c.whatsappMessage)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {c.whatsapp} →
                  </a>
                </div>
              </div>

              <div className="px-6 py-10 sm:px-10 lg:col-span-7 lg:py-14 lg:pr-20">
                <ContactForm lang={lang} />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
