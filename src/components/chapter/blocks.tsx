import type { Block } from "@/content/chapters";
import { href, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/button";

/** Renders the typed copy blocks of a chapter section. */
export function Blocks({ blocks, lang, compact }: { blocks: Block[]; lang: Locale; compact?: boolean }) {
  return (
    <div className={cn("flex flex-col", compact ? "gap-3" : "gap-6")}>
      {blocks.map((b, i) => (
        <BlockView key={i} block={b} lang={lang} compact={compact} first={i === 0} />
      ))}
    </div>
  );
}

const para = "max-w-[68ch] text-[16px] leading-[1.85] text-ink-soft";

function BlockView({ block: b, lang, compact, first }: { block: Block; lang: Locale; compact?: boolean; first: boolean }) {
  switch (b.type) {
    case "p":
      return <p className={cn(para, compact && "text-[15px] leading-[1.75]")}>{b.text}</p>;

    case "pull":
      return (
        <p className="display max-w-[30ch] py-2 text-[clamp(1.6rem,2.5vw,2.3rem)] leading-[1.15] text-gold-hi italic">{b.text}</p>
      );

    case "h3":
      return (
        <div className={cn(!first && "mt-10")}>
          <h3 className="display text-[clamp(1.6rem,2.3vw,2.2rem)] leading-[1.1] text-ink">{b.text}</h3>
          {b.tagline && <p className="mt-2 text-[14px] text-gold italic">{b.tagline}</p>}
        </div>
      );

    case "label":
      return <p className="eyebrow mt-4 !text-gold">{b.text}</p>;

    case "list":
      return (
        <ul className="grid max-w-[72ch] gap-x-8 sm:grid-cols-2">
          {b.items.map((item) => (
            <li key={item} className="flex gap-3 border-t border-line py-3 text-[15px] leading-[1.6] text-ink-soft">
              <span className="mt-[0.6em] h-1 w-1 shrink-0 rotate-45 bg-gold" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      );

    case "steps":
      return (
        <ol className="border-b border-line">
          {b.items.map((s) => (
            <li key={s.num + s.title} className="grid gap-x-6 gap-y-3 border-t border-line py-7 sm:grid-cols-[4.5rem_1fr]">
              <span className="display text-[2.2rem] leading-none text-gold/90">{s.num}</span>
              <div>
                <h4 className="text-[17px] font-medium text-ink">{s.title}</h4>
                {s.tagline && <p className="mt-1 text-[15px] text-gold-hi italic">{s.tagline}</p>}
                {s.body.length > 0 && (
                  <div className="mt-3">
                    <Blocks blocks={s.body} lang={lang} compact />
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      );

    case "defs":
      return (
        <dl className="grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2">
          {b.items.map((d) => (
            <div key={d.term} className="bg-night p-6">
              <dt className="text-[15px] font-medium text-gold-hi">{d.term}</dt>
              <dd className="mt-2 text-[14.5px] leading-[1.7] text-ink-soft">{d.body}</dd>
            </div>
          ))}
        </dl>
      );

    case "table":
      return (
        <div className="-mx-4 overflow-x-auto px-4">
          {/* two-column spec tables fit a phone as they are; wider ones scroll sideways */}
          <table className={cn("w-full border-collapse text-left text-[14px]", b.head.length > 2 && "min-w-[420px]")}>
            <thead>
              <tr>
                {b.head.map((h, i) => (
                  <th key={h} scope="col" className={cn("eyebrow border-b border-line pb-3 font-normal", i > 0 && "!text-gold")}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {b.rows.map((row) => (
                <tr key={row[0]} className="border-b border-line">
                  {row.map((cell, i) =>
                    i === 0 ? (
                      <th key={i} scope="row" className="py-3 pr-6 font-normal text-muted">
                        {cell}
                      </th>
                    ) : (
                      <td key={i} className="py-3 pr-6 text-ink">
                        {cell}
                      </td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "faq":
      return (
        <div className="border-b border-line">
          {b.items.map((f) => (
            <details key={f.q} className="group border-t border-line">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-[16px] text-ink transition-colors hover:text-gold-hi [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="relative mt-2 h-3 w-3 shrink-0" aria-hidden>
                  <span className="absolute top-1/2 left-0 h-px w-3 bg-gold" />
                  <span className="absolute top-0 left-1/2 h-3 w-px bg-gold transition-transform duration-300 group-open:scale-y-0" />
                </span>
              </summary>
              <p className={cn(para, "pb-6 text-[15px]")}>{f.a}</p>
            </details>
          ))}
        </div>
      );

    case "cta":
      return (
        <div className="pt-2">
          <ButtonLink href={b.to.startsWith("#") ? b.to : href(lang, b.to)} size="lg">
            {b.label}
          </ButtonLink>
        </div>
      );

    case "names":
      return (
        <ol className="grid gap-x-10 border-b border-line sm:grid-cols-2">
          {b.items.map((name, i) => (
            <li key={name} className="flex items-baseline gap-4 border-t border-line py-5">
              <span className="w-6 shrink-0 text-[11px] tracking-[0.2em] text-gold">{String(i + 1).padStart(2, "0")}</span>
              <span className="display text-[clamp(1.35rem,1.8vw,1.7rem)] leading-[1.15] text-ink">{name}</span>
            </li>
          ))}
        </ol>
      );
  }
}
