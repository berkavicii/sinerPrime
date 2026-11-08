export const locales = ["tr", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "tr";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function asLocale(value: string): Locale {
  return isLocale(value) ? value : defaultLocale;
}

export const localeParams = () => locales.map((lang) => ({ lang }));

/** Builds an internal href for a locale, keeping the trailing slash the static export expects. */
export function href(lang: Locale, path = "") {
  const clean = path.replace(/^\/+|\/+$/g, "");
  const [base, hash] = clean.split("#");
  return `/${lang}/${base ? `${base}/` : ""}${hash ? `#${hash}` : ""}`;
}
