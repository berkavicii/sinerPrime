"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { common } from "@/content/common";
import { href, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/** Which home scene is under the middle of the screen; null above the first one or off the home page. */
export function useHomeScene(lang: Locale, slugs: string[]) {
  const pathname = usePathname();
  const onHome =
    pathname === href(lang) || pathname === href(lang).slice(0, -1);
  const [scene, setScene] = useState<string | null>(null);

  useEffect(() => {
    if (!onHome) return;
    const els = slugs
      .map((s) => document.getElementById(s))
      .filter((e): e is HTMLElement => !!e);
    const pick = () => {
      const mid = window.innerHeight * 0.5;
      let hit: string | null = null;
      for (const el of els)
        if (el.getBoundingClientRect().top <= mid) hit = el.id;
      setScene(hit);
    };
    pick();
    window.addEventListener("scroll", pick, { passive: true });
    window.addEventListener("resize", pick);
    return () => {
      window.removeEventListener("scroll", pick);
      window.removeEventListener("resize", pick);
    };
  }, [onHome, slugs]);

  return { onHome, scene: onHome ? scene : null };
}

/**
 * The left menu from "çatı" as a ghost rail: hairlines floating over the page.
 * On the home page it runs through the seven scenes in place and marks the one on screen;
 * elsewhere it marks the current chapter and leads back to that chapter's scene.
 * Hovering the rail brings every label up, with the deeper pages beneath. Desktop only.
 */
export function Sidebar({ lang }: { lang: Locale }) {
  const c = common[lang];
  const pathname = usePathname();
  const at = (path: string) =>
    pathname === href(lang, path) || pathname === href(lang, path).slice(0, -1);
  const { onHome, scene } = useHomeScene(
    lang,
    // stable list for the effect
    SLUGS,
  );

  return (
    <nav
      aria-label={c.menu}
      className="group/rail pointer-events-none fixed top-1/2 left-0 z-30 hidden -translate-y-1/2 py-6 pr-10 pl-5 lg:block"
    >
      {/* the hidden names still take up room, so only the hairlines and numbers catch the mouse
          until the rail is open; otherwise the invisible labels would block clicks on the page */}
      {/* soft veil so labels stay readable over the page while the rail is open */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 -z-10 w-[22rem] bg-gradient-to-r from-night via-night/85 to-transparent opacity-0 transition-opacity duration-500 group-hover/rail:opacity-100 group-focus-within/rail:opacity-100"
      />
      <ol className="pointer-events-none flex flex-col gap-4 group-hover/rail:pointer-events-auto group-focus-within/rail:pointer-events-auto">
        {c.nav.map((item, i) => {
          const on = onHome ? scene === item.path : at(item.path);
          const childOn =
            !onHome && (item.children?.some((ch) => at(ch.path)) ?? false);
          const here = on || childOn;
          // on the home page a plain anchor, so the smooth scroller glides there
          const target = onHome ? `#${item.path}` : href(lang, `#${item.path}`);
          return (
            <li key={item.path}>
              <div className="flex items-center gap-3">
                <a
                  href={target}
                  aria-current={on ? (onHome ? "location" : "page") : undefined}
                  className="group flex items-center gap-3"
                >
                  {/* fixed-width slot so numbers and names line up while the hairline grows inside it */}
                  <span className="pointer-events-auto flex h-4 w-10 shrink-0 items-center justify-end">
                    <span
                      className={cn(
                        "block h-px transition-all duration-500",
                        here
                          ? "w-10 bg-gold"
                          : "w-4 bg-white/30 group-hover:w-6 group-hover:bg-white/60",
                      )}
                    />
                  </span>
                  {/* the number always shows, faintly, so the rail reads as a contents list at a glance */}
                  <span
                    className={cn(
                      "pointer-events-auto w-5 shrink-0 text-[10px] tracking-[0.2em] tabular-nums transition-colors duration-500",
                      here
                        ? "text-gold"
                        : "text-white/35 group-hover:text-white/80",
                    )}
                  >
                    0{i + 1}
                  </span>
                  {/* names stay hidden until the rail is hovered; the gold line and number mark the current chapter */}
                  <span
                    className={cn(
                      "-ml-1 text-[10px] tracking-[0.28em] whitespace-nowrap uppercase opacity-0 transition-all duration-500 group-hover/rail:opacity-100 group-focus-within/rail:opacity-100",
                      here
                        ? "text-ink"
                        : "text-white/60 group-hover:text-white",
                    )}
                  >
                    {item.label}
                  </span>
                </a>
                {/* the full chapter, for whoever wants to read on */}
                <Link
                  href={href(lang, item.path)}
                  aria-label={`${item.label}: ${c.fullChapter}`}
                  title={c.fullChapter}
                  className="text-[11px] text-gold/70 opacity-0 transition-all duration-500 group-hover/rail:opacity-100 group-focus-within/rail:opacity-100 hover:translate-x-0.5 hover:text-gold-hi"
                >
                  →
                </Link>
              </div>
              {item.children && (
                <ul className="mt-2 ml-20 hidden flex-col gap-1.5 group-hover/rail:flex group-focus-within/rail:flex">
                  {item.children.map((ch) => (
                    <li key={ch.path}>
                      <Link
                        href={href(lang, ch.path)}
                        aria-current={at(ch.path) ? "page" : undefined}
                        className={cn(
                          "text-[10px] tracking-[0.2em] whitespace-nowrap uppercase transition-colors",
                          at(ch.path)
                            ? "text-gold-hi"
                            : "text-white/40 hover:text-white",
                        )}
                      >
                        {ch.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

const SLUGS = common.tr.nav.map((n) => n.path);
