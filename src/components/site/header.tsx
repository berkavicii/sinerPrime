"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { common } from "@/content/common";
import { contact } from "@/lib/contact";
import { href, locales, showLocaleSwitch, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Header({ lang }: { lang: Locale }) {
  const c = common[lang];
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > 400 && y > last);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const onHome =
    pathname === href(lang) || pathname === href(lang).slice(0, -1);
  const switchTo = (l: Locale) =>
    pathname.replace(/^\/(tr|en)(?=\/|$)/, `/${l}`) || href(l);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-[var(--ease-silk)]",
          hidden && !open ? "-translate-y-full" : "translate-y-0",
        )}
      >
        <div
          className={cn(
            "gutter flex h-16 items-center justify-between border-b transition-colors duration-700 sm:h-[72px]",
            scrolled || open
              ? "border-line bg-night/85 backdrop-blur-md"
              : "border-transparent",
          )}
        >
          <div className="flex items-center gap-3 sm:gap-5">
            <button
              onClick={() => setOpen((v) => !v)}
              className="group relative -ml-2 flex h-10 w-10 items-center justify-center lg:hidden"
              aria-label={open ? c.close : c.menu}
              aria-expanded={open}
            >
              <span
                className={cn(
                  "absolute h-px w-6 bg-ink transition-transform duration-500",
                  open ? "rotate-45" : "-translate-y-[7px]",
                )}
              />
              <span
                className={cn(
                  "absolute h-px bg-ink transition-all duration-500",
                  open ? "w-0 opacity-0" : "w-6 group-hover:w-4",
                )}
              />
              <span
                className={cn(
                  "absolute h-px w-6 bg-ink transition-transform duration-500",
                  open ? "-rotate-45" : "translate-y-[7px]",
                )}
              />
            </button>
            <Link
              href={href(lang)}
              className="group flex items-center gap-3"
              aria-label="Siner Prime"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/brand/deer.png"
                alt=""
                className="h-8 w-auto transition-transform duration-700 group-hover:-rotate-6"
              />
              <span className="flex flex-col leading-none">
                <span className="font-display text-[17px] tracking-[0.42em] text-ink">
                  SINER
                </span>
                <span
                  lang="en"
                  className="mt-1 text-[9px] tracking-[0.5em] text-gold uppercase"
                >
                  Prime
                </span>
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {showLocaleSwitch && (
              <div className="hidden items-center gap-1 text-[11px] tracking-[0.2em] sm:flex">
                {locales.map((l, i) => (
                  <span key={l} className="flex items-center gap-1">
                    {i > 0 && <span className="text-muted">/</span>}
                    <Link
                      href={switchTo(l)}
                      className={cn(
                        "uppercase transition-colors",
                        l === lang ? "text-gold" : "text-muted hover:text-ink",
                      )}
                    >
                      {l}
                    </Link>
                  </span>
                ))}
              </div>
            )}
            <a
              href="#iletisim"
              onClick={() => setOpen(false)}
              className="hidden h-10 items-center rounded-full border border-gold/50 px-5 text-[12px] tracking-wide text-gold-hi transition-colors hover:bg-gold hover:text-night sm:inline-flex"
            >
              {c.quote}
            </a>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="weave fixed inset-0 z-40 flex flex-col justify-between gap-10 overflow-y-auto bg-night px-6 pt-24 pb-10 sm:px-10 lg:px-16"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            exit={{ clipPath: "inset(0 100% 0 0)" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="flex flex-col gap-1">
              {c.nav.map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.25 + i * 0.06,
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {/* the menu walks through the home presentation; the full chapter sits underneath */}
                  <a
                    href={
                      onHome ? `#${item.path}` : href(lang, `#${item.path}`)
                    }
                    onClick={() => setOpen(false)}
                    className="display flex items-baseline gap-4 py-1 text-[clamp(1.9rem,7vw,3rem)] leading-[1.05] text-ink transition-colors hover:text-gold-hi"
                  >
                    <span className="w-6 shrink-0 font-sans text-[11px] tracking-[0.3em] text-gold">
                      0{i + 1}
                    </span>
                    {item.label}
                  </a>
                  {
                    <div className="mb-2 ml-10 flex flex-wrap gap-x-5 gap-y-1">
                      {[
                        { label: c.fullChapter, path: item.path },
                        ...(item.children ?? []),
                      ].map((ch) => (
                        <Link
                          key={ch.path}
                          href={href(lang, ch.path)}
                          onClick={() => setOpen(false)}
                          className="text-[13px] text-muted transition-colors hover:text-gold-hi"
                        >
                          {ch.label}
                        </Link>
                      ))}
                    </div>
                  }
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.25 + c.nav.length * 0.06,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <a
                  href="#iletisim"
                  onClick={() => setOpen(false)}
                  className="display text-gold-foil flex items-baseline gap-4 py-1 text-[clamp(1.9rem,7vw,3rem)] italic"
                >
                  <span className="w-6 shrink-0 font-sans text-[11px] tracking-[0.3em] text-gold not-italic">
                    0{c.nav.length + 1}
                  </span>
                  {c.contact}
                </a>
              </motion.div>
            </nav>
            <div className="flex items-end justify-between text-sm text-ink-soft">
              <div className="flex flex-col gap-1">
                <a href={contact.phoneHref}>{contact.phone}</a>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </div>
              {showLocaleSwitch && (
                <div className="flex gap-3 text-[12px] tracking-[0.2em] uppercase">
                  {locales.map((l) => (
                    <Link
                      key={l}
                      href={switchTo(l)}
                      className={l === lang ? "text-gold" : "text-muted"}
                    >
                      {l}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
