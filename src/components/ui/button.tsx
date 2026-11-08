import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "group/btn relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full text-[13px] font-medium tracking-wide transition-colors duration-500 ease-[var(--ease-silk)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold",
  {
    variants: {
      variant: {
        gold: "bg-gold text-night hover:bg-gold-hi",
        ghost: "border border-ink/20 text-ink hover:border-gold hover:text-gold-hi",
        light: "bg-ink text-night hover:bg-gold-hi",
      },
      size: {
        md: "h-11 px-6",
        lg: "h-14 px-8 text-sm",
      },
    },
    defaultVariants: { variant: "gold", size: "md" },
  },
);

type Common = VariantProps<typeof buttonVariants> & { children: ReactNode; className?: string; arrow?: boolean };

function Arrow() {
  return (
    <span className="relative block h-3 w-4 overflow-hidden" aria-hidden>
      <svg
        viewBox="0 0 16 12"
        className="absolute inset-0 h-3 w-4 transition-transform duration-500 ease-[var(--ease-silk)] group-hover/btn:translate-x-full"
      >
        <path d="M0 6h14M9 1l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.3" />
      </svg>
      <svg
        viewBox="0 0 16 12"
        className="absolute inset-0 h-3 w-4 -translate-x-full transition-transform duration-500 ease-[var(--ease-silk)] group-hover/btn:translate-x-0"
      >
        <path d="M0 6h14M9 1l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    </span>
  );
}

export function ButtonLink({
  href,
  variant,
  size,
  children,
  className,
  arrow = true,
  external,
  ...rest
}: Common & { href: string; external?: boolean } & Omit<ComponentProps<"a">, "href">) {
  const cls = cn(buttonVariants({ variant, size }), className);
  const inner = (
    <>
      <span>{children}</span>
      {arrow && <Arrow />}
    </>
  );
  if (external || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a href={href} className={cls} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" {...rest}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {inner}
    </Link>
  );
}

export function Button({ variant, size, children, className, arrow = false, ...rest }: Common & ComponentProps<"button">) {
  return (
    <button className={cn(buttonVariants({ variant, size }), className)} {...rest}>
      <span>{children}</span>
      {arrow && <Arrow />}
    </button>
  );
}
