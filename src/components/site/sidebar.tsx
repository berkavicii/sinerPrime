"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { common } from "@/content/common";
import { href, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/**
 * The left menu from "çatı" as a ghost rail: hairlines floating over the page,
 * the current chapter in gold. Hovering the rail brings every label up. Desktop only.
 */
export function Sidebar({ lang }: { lang: Locale }) {
  const c = common[lang];
  const pathname = usePathname();
  const at = (path: string) => pathname === href(lang, path) || pathname === href(lang, path).slice(0, -1);

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
          const on = at(item.path);
          const childOn = item.children?.some((ch) => at(ch.path)) ?? false;
          const here = on || childOn;
          return (
            <li key={item.path}>
              <Link
                href={href(lang, item.path)}
                aria-current={on ? "page" : undefined}
                className="group flex items-center gap-3"
              >
                {/* fixed-width slot so numbers and names line up while the hairline grows inside it */}
                <span className="pointer-events-auto flex h-4 w-10 shrink-0 items-center justify-end">
                  <span
                    className={cn(
                      "block h-px transition-all duration-500",
                      here ? "w-10 bg-gold" : "w-4 bg-white/30 group-hover:w-6 group-hover:bg-white/60",
                    )}
                  />
                </span>
                {/* the number always shows, faintly, so the rail reads as a contents list at a glance */}
                <span
                  className={cn(
                    "pointer-events-auto w-5 shrink-0 text-[10px] tracking-[0.2em] tabular-nums transition-colors duration-500",
                    here ? "text-gold" : "text-white/35 group-hover:text-white/80",
                  )}
                >
                  0{i + 1}
                </span>
                {/* names stay hidden until the rail is hovered; the gold line and number mark the current chapter */}
                <span
                  className={cn(
                    "-ml-1 text-[10px] tracking-[0.28em] whitespace-nowrap uppercase opacity-0 transition-all duration-500 group-hover/rail:opacity-100 group-focus-within/rail:opacity-100",
                    here ? "text-ink" : "text-white/60 group-hover:text-white",
                  )}
                >
                  {item.label}
                </span>
              </Link>
              {item.children && (
                <ul className="mt-2 ml-20 hidden flex-col gap-1.5 group-hover/rail:flex group-focus-within/rail:flex">
                  {item.children.map((ch) => (
                    <li key={ch.path}>
                      <Link
                        href={href(lang, ch.path)}
                        aria-current={at(ch.path) ? "page" : undefined}
                        className={cn(
                          "text-[10px] tracking-[0.2em] whitespace-nowrap uppercase transition-colors",
                          at(ch.path) ? "text-gold-hi" : "text-white/40 hover:text-white",
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
