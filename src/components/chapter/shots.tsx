import type { Shot } from "@/content/chapter-images";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/site/motion";

/** The picture behind a chapter title: sits on the right, melts into the page on the left and bottom. */
export function HeroBackdrop({ shot }: { shot: Shot }) {
  if (!shot.src) return null;
  return (
    <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[92svh] max-h-[960px] overflow-hidden">
      <div className="absolute inset-y-0 right-0 w-full lg:w-[68%]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={shot.src}
          alt=""
          className="prime-drift h-full w-full object-cover opacity-45 lg:opacity-60"
          style={{ objectPosition: shot.position }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-night/60 via-night/70 to-night lg:bg-gradient-to-r lg:from-night lg:via-night/75 lg:to-night/10" />
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-night to-transparent" />
    </div>
  );
}

/** A picture beside a section title; a marked placeholder when the photo hasn't arrived yet. */
export function SectionShot({ shot, className }: { shot: Shot; className?: string }) {
  return (
    <FadeIn className={className} y={24}>
      <Frame shot={shot} className="aspect-[16/11] lg:aspect-[4/5]" />
    </FadeIn>
  );
}

/** A full-width picture between sections. */
export function Band({ shot }: { shot: Shot }) {
  if (!shot.src) {
    return (
      <div className="gutter mx-auto max-w-[1400px] py-4">
        <Frame shot={shot} className="aspect-[16/10] sm:aspect-[21/8]" />
      </div>
    );
  }
  return (
    <figure className="relative h-[52svh] min-h-[320px] overflow-hidden sm:h-[68svh]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={shot.src}
        alt={shot.alt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: shot.position }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-night via-transparent to-night" />
    </figure>
  );
}

/** A picture placed inside running text. */
export function InlineShot({ shot }: { shot: Shot }) {
  return (
    <FadeIn y={24} className="my-4">
      <Frame shot={shot} className="aspect-[16/10]" />
    </FadeIn>
  );
}

function Frame({ shot, className }: { shot: Shot; className?: string }) {
  if (!shot.src) return <Placeholder shot={shot} className={className} />;
  return (
    <figure className={cn("group relative overflow-hidden rounded-sm bg-night-2", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={shot.src}
        alt={shot.alt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.6s] ease-[var(--ease-silk)] group-hover:scale-[1.03]"
        style={{ objectPosition: shot.position }}
      />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-white/5 ring-inset" />
    </figure>
  );
}

/** Says plainly that a real photo goes here, and what it should show. */
function Placeholder({ shot, className }: { shot: Shot; className?: string }) {
  return (
    <figure
      className={cn(
        "relative flex flex-col justify-end overflow-hidden rounded-sm border border-dashed border-gold/35 bg-[radial-gradient(ellipse_at_70%_20%,rgba(200,164,106,0.12),transparent_60%)] bg-night-2 p-5 sm:p-6",
        className,
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/deer.png"
        alt=""
        aria-hidden
        className="absolute top-1/2 left-1/2 h-1/3 w-auto -translate-x-1/2 -translate-y-1/2 opacity-[0.07]"
      />
      <figcaption className="relative">
        <span className="eyebrow !text-gold">Örnek görsel</span>
        {shot.hint && <span className="mt-2 block max-w-[34ch] text-[13px] leading-[1.5] text-muted">{shot.hint}</span>}
      </figcaption>
    </figure>
  );
}
