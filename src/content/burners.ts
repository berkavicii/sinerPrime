import type { Locale } from "@/lib/i18n";

/* Content for the incense burners page and its two scroll stories. */

export type ProductStoryContent = {
  name: string;
  eyebrow: string;
  title: [string, string];
  lead: string;
  steps: { k: string; title: string; body: string }[];
  /** One per 3D anchor, in the model's anchor order. */
  labels: [text: string, side: "left" | "right", lang?: "en"][];
  specs: { value: number; unit: string; label: string }[];
  outro: string;
  outroCta: string;
};

export const onixStory: Record<Locale, ProductStoryContent> = {
  tr: {
    name: "ONIX",
    eyebrow: "ONIX · Kurumsal buhurdanlık",
    title: ["Bazı markalar görülür,", "bazıları hissedilir."],
    lead: "Koku, tasarım ve zanaatı tek bir nesnede buluşturuyoruz. Sayfayı kaydırın; ONIX'i parça parça tanıyın.",
    steps: [
      { k: "01", title: "El yapımı seramik gövde", body: "Seri üretimin sıradanlığından uzak. Her gövde elde şekillenir, sırlanır ve fırınlanır." },
      { k: "02", title: "Çıkarılabilir alüminyum hazne", body: "Yağ ve su için tasarlanmış metal hazne; çıkar, yıka, yeniden kullan." },
      { k: "03", title: "Sıcak bir kalp", body: "Tek bir tealight. Doğrudan yağ kullanımında koku yaklaşık 50 saniyede odaya yayılır." },
      { k: "04", title: "Markaya özel koku", body: "Her ONIX, kurumunuz için seçilen ya da sıfırdan geliştirilen bir koku imzasıyla gelir." },
    ],
    labels: [
      ["El yapımı seramik", "left"],
      ["Alüminyum hazne", "right"],
      ["Tealight", "right", "en"],
      ["Markaya özel koku", "right"],
    ],
    specs: [
      { value: 8, unit: "cm", label: "Yükseklik" },
      { value: 7.8, unit: "cm", label: "Çap" },
      { value: 50, unit: "sn", label: "Koku tepki süresi" },
    ],
    outro: "Markanızın adı, rengi ve kokusu. Hepsi tek bir objede.",
    outroCta: "ONIX'i kendi logonuzla görün",
  },
  en: {
    name: "ONIX",
    eyebrow: "ONIX · Corporate incense burner",
    title: ["Some brands are seen,", "others are felt."],
    lead: "Scent, design and craft brought together in a single object. Scroll to take ONIX apart, piece by piece.",
    steps: [
      { k: "01", title: "Handmade ceramic body", body: "Far from the sameness of mass production. Every body is shaped by hand, glazed and kiln fired." },
      { k: "02", title: "Removable aluminium bowl", body: "A metal bowl for oil and water. Lift it out, wash it, use it again." },
      { k: "03", title: "A warm heart", body: "A single tealight. With pure oil, the scent fills the room in about 50 seconds." },
      { k: "04", title: "A scent made for your brand", body: "Every ONIX ships with a fragrance chosen for, or developed from scratch with, your organisation." },
    ],
    labels: [
      ["Handmade ceramic", "left"],
      ["Aluminium bowl", "right"],
      ["Tealight", "right", "en"],
      ["Signature scent", "right"],
    ],
    specs: [
      { value: 8, unit: "cm", label: "Height" },
      { value: 7.8, unit: "cm", label: "Diameter" },
      { value: 50, unit: "s", label: "Scent response" },
    ],
    outro: "Your name, your colours, your scent. All in one object.",
    outroCta: "See ONIX with your logo",
  },
};

export const kubbeStory: Record<Locale, ProductStoryContent> = {
  tr: {
    name: "Kubbe",
    eyebrow: "Kubbe · Seramik buhurdanlık",
    title: ["Siyahın", "en sıcak hali."],
    lead: "Sırlı siyah seramik, delikli bir kubbe ve içinde saklı bir alev. Kaydırın; Kubbe açılsın.",
    steps: [
      { k: "01", title: "Sırlı siyah seramik", body: "Kalın sırlı gövde ısıyı dengeli dağıtır; parlak yüzeyi bulunduğu mekânın ışığını yansıtır." },
      { k: "02", title: "Delikli kubbe", body: "Üst kubbe kalkar. Delikler, mumun sıcaklığını ve ışığını dengeli biçimde dışarı taşır." },
      { k: "03", title: "50 ml hazne", body: "Kubbenin üstündeki hazneye biraz su ve 3–5 damla buhurdanlık yağı eklenir." },
      { k: "04", title: "Bir dakikada koku", body: "Tealight yakıldıktan yaklaşık 1–1,5 dakika sonra koku ortama yayılmaya başlar." },
    ],
    labels: [
      ["Sırlı seramik gövde", "left"],
      ["Delikli kubbe", "right"],
      ["50 ml hazne", "right"],
      ["Tealight", "right", "en"],
    ],
    specs: [
      { value: 11.5, unit: "cm", label: "Yükseklik" },
      { value: 50, unit: "ml", label: "Hazne" },
      { value: 1, unit: "dk", label: "Koku yayılımı" },
    ],
    outro: "Evin, ofisin ya da spanın sessiz köşesi için.",
    outroCta: "Kubbe'yi inceleyin",
  },
  en: {
    name: "Kubbe",
    eyebrow: "Kubbe · Ceramic incense burner",
    title: ["The warmest", "shade of black."],
    lead: "Glazed black ceramic, a perforated dome and a flame kept inside. Scroll to open Kubbe.",
    steps: [
      { k: "01", title: "Glazed black ceramic", body: "The thick glazed body spreads heat evenly; its gloss mirrors the light of the room." },
      { k: "02", title: "Perforated dome", body: "The dome lifts away. Its openings let the candle's warmth and light out evenly." },
      { k: "03", title: "50 ml bowl", body: "Add a little water and 3–5 drops of burner oil to the bowl on top of the dome." },
      { k: "04", title: "Scent within a minute", body: "About 1–1.5 minutes after lighting the tealight, the scent begins to fill the room." },
    ],
    labels: [
      ["Glazed ceramic base", "left"],
      ["Perforated dome", "right"],
      ["50 ml bowl", "right"],
      ["Tealight", "right", "en"],
    ],
    specs: [
      { value: 11.5, unit: "cm", label: "Height" },
      { value: 50, unit: "ml", label: "Bowl" },
      { value: 1, unit: "min", label: "Scent release" },
    ],
    outro: "For the quiet corner of a home, an office or a spa.",
    outroCta: "Explore Kubbe",
  },
};

const burnersTr = {
  meta: {
    title: "Buhurdanlıklar",
    description: "El yapımı seramik buhurdanlıklar: markaya özel ONIX ve sırlı siyah Kubbe.",
  },
  hero: {
    eyebrow: "Koku objeleri",
    title: ["Ateş, seramik", "ve koku."],
    lead: "Atölyemizde elde şekillenen, fırınlanan ve sırlanan buhurdanlıklar. Biri markanızın imzasını taşır, diğeri evin en sıcak köşesine yerleşir.",
  },
  pick: [
    { id: "onix", name: "ONIX", kind: "Kurumsal buhurdanlık", image: "/onix/aselsan-candle.webp" },
    { id: "kubbe", name: "Kubbe", kind: "Seramik buhurdanlık", image: "/kubbe/hero.webp" },
  ],
  more: {
    eyebrow: "Daha yakından",
    title: "Bir sonraki adım.",
    onix: { label: "ONIX tasarım stüdyosu", body: "Logonuzu yükleyin, rengini seçin, ONIX'i 3D olarak döndürün." },
    kubbe: { label: "Kubbe detayları", body: "Kullanım ritüeli, kullanım alanları ve koku kütüphanesi." },
  },
};

const burnersEn: typeof burnersTr = {
  meta: {
    title: "Incense burners",
    description: "Handmade ceramic incense burners: the brandable ONIX and the glazed black Kubbe.",
  },
  hero: {
    eyebrow: "Scent objects",
    title: ["Fire, ceramic", "and scent."],
    lead: "Burners shaped, fired and glazed by hand in our workshop. One carries your brand's signature, the other settles into the warmest corner of a home.",
  },
  pick: [
    { id: "onix", name: "ONIX", kind: "Corporate incense burner", image: "/onix/aselsan-candle.webp" },
    { id: "kubbe", name: "Kubbe", kind: "Ceramic incense burner", image: "/kubbe/hero.webp" },
  ],
  more: {
    eyebrow: "Closer",
    title: "The next step.",
    onix: { label: "ONIX design studio", body: "Upload your logo, pick a colour and turn ONIX around in 3D." },
    kubbe: { label: "Kubbe details", body: "The ritual, where it belongs and the scent library." },
  },
};

export const burners: Record<Locale, typeof burnersTr> = { tr: burnersTr, en: burnersEn };
