import type { Locale } from "@/lib/i18n";

export const common = {
  tr: {
    nav: [
      { label: "ONIX", path: "onix" },
      { label: "Kubbe", path: "kubbe" },
      { label: "Cihazlar", path: "cihazlar" },
      { label: "Kurumsal", path: "kurumsal" },
      { label: "Referanslar", path: "referanslar" },
    ],
    quote: "Teklif alın",
    menu: "Menü",
    close: "Kapat",
    tagline: "Scent · Design · Experience",
    footer: {
      lead: "Markanızın koku hikâyesini birlikte tasarlayalım.",
      body: "Yeni bir otel açılışı, mevcut tesisinizin koku kimliğini yenileme ya da markanıza özel bir koku. İhtiyacınızı dinleyelim, mekânınızı değerlendirelim ve size özel bir öneri hazırlayalım.",
      contact: "İletişim",
      visit: "Atölye",
      explore: "Keşfet",
      rights: "Tüm hakları saklıdır.",
      shop: "Siner Shop",
      corporate: "Siner Kurumsal",
    },
    whatsappMessage: "Merhaba, Siner Prime hakkında bilgi ve teklif almak istiyorum.",
    mailSubject: "Siner Prime — teklif talebi",
    whatsapp: "WhatsApp ile yazın",
    mail: "E-posta gönderin",
    back: "Ana sayfa",
    scroll: "Kaydırın",
  },
  en: {
    nav: [
      { label: "ONIX", path: "onix" },
      { label: "Dome", path: "kubbe" },
      { label: "Diffusers", path: "cihazlar" },
      { label: "Studio", path: "kurumsal" },
      { label: "Clients", path: "referanslar" },
    ],
    quote: "Request a quote",
    menu: "Menu",
    close: "Close",
    tagline: "Scent · Design · Experience",
    footer: {
      lead: "Let's design your brand's scent story together.",
      body: "A new hotel opening, a refreshed scent identity for your property, or a fragrance made only for your brand. We listen, assess your space and prepare a proposal tailored to you.",
      contact: "Contact",
      visit: "Studio",
      explore: "Explore",
      rights: "All rights reserved.",
      shop: "Siner Shop",
      corporate: "Siner Corporate",
    },
    whatsappMessage: "Hello, I would like to learn more about Siner Prime and request a quote.",
    mailSubject: "Siner Prime — quote request",
    whatsapp: "Message on WhatsApp",
    mail: "Send an email",
    back: "Home",
    scroll: "Scroll",
  },
} satisfies Record<Locale, unknown>;

export type Common = (typeof common)["tr"];
