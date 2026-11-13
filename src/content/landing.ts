import type { Locale } from "@/lib/i18n";

/*
  The home page is a business card that reads in about two minutes, in seven stops:
  01 scent & our approach → 02 who we are (maker, factory, vision) → 03 hotels →
  04 scent machines → 05 Kubbe → 06 ONIX → 07 references.
  Figures and copy are drafts until Siner sends the final content (see NOTLAR.md).
  `image: null` renders a framed placeholder until the photo arrives.
*/

type Media = { label: string; image: string | null };

const tr = {
  chapters: [
    { id: "koku", label: "Koku" },
    { id: "biz", label: "Biz kimiz" },
    { id: "projeler", label: "Projelendirme" },
    { id: "makineler", label: "Koku makineleri" },
    { id: "kubbe", label: "Kubbe" },
    { id: "onix", label: "ONIX" },
    { id: "referanslar", label: "Referanslar" },
  ],
  intro: {
    eyebrow: "Siner Prime · The Art of Scent",
    title: ["Hatırlanmak", "bir kokudur."],
    lead: "15 yıldır kendi fabrikamızda kurumlara, otellere ve markalara özel kokular, profesyonel koku makineleri ve el yapımı koku objeleri üretiyoruz.",
    scroll: "Kaydırın",
  },
  scent: {
    eyebrow: "01 · Kokunun önemi",
    history: [
      "Koku, insanlığın en eski dilidir. Mısır tapınaklarında tütsü, Osmanlı saraylarında buhurdanlık ve gül suyu; misafiri karşılamanın, bir mekâna ruh vermenin yolu hep koku oldu.",
      "Bugün de değişmedi. Koku, duyularımız içinde hafızaya ve duyguya en doğrudan bağlanan duyudur. Göz unutur, kulak alışır; ama bir koku yıllar sonra bile bir anıyı tek nefeste geri getirir.",
    ],
    statement: "Koku bir sistemdir, şişe değil.",
    approach: {
      label: "Siner'in yaklaşımı",
      body: "Mekânı ölçer, markayı dinler, kokuyu sıfırdan tasarlar; onu her gün aynı kalitede yaşatacak makineyi, objeyi ve hizmeti kendimiz üretiriz. Biz o nefesi tasarlıyoruz.",
    },
  },
  who: {
    eyebrow: "02 · Biz kimiz",
    title: "Üreticiyiz. Fikirden fabrikaya, fabrikadan mekânınıza.",
    lead: "Koku tasarımcılarımız, cam, seramik ve ahşap sanatçılarımız, heykeltıraşlarımız ve teknik ekibimizle bir markanın kokusunu ilk fikirden mekândaki son cihaza kadar kendi tesisimizde üretiyoruz.",
    media: [
      { label: "Fabrika", image: null },
      { label: "Üretim", image: null },
      { label: "Atölye", image: null },
    ] as Media[],
    numbers: [
      { value: 15, suffix: "", label: "Yıllık tecrübe" },
      { value: 50, suffix: "+", label: "Kurum ve marka" },
      { value: 12, suffix: "", label: "Sanatçı ve uzman" },
      { value: 2000, suffix: " m³", label: "Tek cihazla kokulandırma" },
    ],
    pillars: [
      { k: "Kendi fabrikamız", body: "Koku, şişe, seramik ve ambalaj aynı çatı altında üretilir; kalite ve takvim bizim kontrolümüzdedir." },
      { k: "Kuruma özel koku", body: "Markanızın karakterine göre kokuyu seçer ya da sıfırdan geliştirir, yalnızca size ait bir imza oluştururuz." },
      { k: "El yapımı ve tek", body: "Ahşap, cam ve seramik sanatçılarımız ve heykeltıraşlarımızla her parça sanatsal, el yapımı ve benzersizdir." },
      { k: "Butik duruş", body: "Seri üretimin sıradanlığı yerine estetik kaygıyla tasarlanan, hatırlanan işler." },
      { k: "Doğayı sev, yeşili koru", body: "Atık camları koku şişelerine dönüştürüyor, geri dönüşüm projeleriyle sıfır karbon ayak izine katkı sağlıyoruz." },
      { k: "İnsana iyi gelen koku", body: "Kokularımızı insan sağlığını gözeterek, yormayan ve rahatlatan formüllerle geliştiriyoruz." },
    ],
  },
  machines: {
    eyebrow: "04 · Koku makineleri",
    title: "Kokusunu size özel ürettiğimiz makineler.",
    lead: "Isı kullanmadan, mikron boyutunda ve dengeli yayan profesyonel cihazlar. Kokusu da, kurulumu da, servisi de bizden.",
    items: [
      { id: "tower", name: "Siner Tower", kind: "Ayaklı nebülizasyon", spec: "2000 m³", image: "/devices/tower.webp" },
      { id: "minimal", name: "Minimal Line", kind: "Kompakt koku makinesi", spec: "Resepsiyon · ofis", image: "/devices/minimal-black.webp" },
      { id: "wall", name: "Extra-Wall", kind: "Prize takılan difüzör", spec: "250 m³", image: "/devices/wall.webp" },
    ],
    more: "Tüm koku makineleri",
  },
  kubbe: {
    eyebrow: "05 · Seramik buhurdanlık",
    name: "Kubbe",
    title: "Kokusu kadar ışığı da güzel.",
    body: "Delikli kubbe, içindeki mumun ışığını odaya yıldız gibi dağıtır. Kubbe hem kokulandırır hem de mekâna sıcak, dekoratif bir aydınlatma katar.",
    specs: [
      { value: "11,5", unit: "cm", label: "Yükseklik" },
      { value: "50", unit: "ml", label: "Hazne" },
      { value: "1", unit: "dk", label: "Koku yayılımı" },
    ],
    more: "Kubbe'yi keşfedin",
  },
  onix: {
    eyebrow: "06 · Kurumsal buhurdanlık",
    name: "ONIX",
    title: "Logonuz, renginiz ve kokunuzla.",
    body: "El yapımı seramik gövde, markanıza özel grafik ve koku. Logonuzu yükleyin, ONIX'i 3D olarak kendi markanızla görün.",
    image: "/onix/aselsan-candle.webp",
    imageAlt: "ASELSAN için kişiselleştirilmiş ONIX",
    studio: "Logonuzla deneyin",
    story: "Parça parça izleyin",
  },
  refs: {
    eyebrow: "07 · Referanslar",
  },
};

const en: typeof tr = {
  chapters: [
    { id: "koku", label: "Scent" },
    { id: "biz", label: "Who we are" },
    { id: "projeler", label: "Projects" },
    { id: "makineler", label: "Scent machines" },
    { id: "kubbe", label: "Kubbe" },
    { id: "onix", label: "ONIX" },
    { id: "referanslar", label: "Clients" },
  ],
  intro: {
    eyebrow: "Siner Prime · The Art of Scent",
    title: ["To be remembered", "is a scent."],
    lead: "For 15 years, in our own factory, we have produced bespoke scents, professional scent machines and handmade scent objects for institutions, hotels and brands.",
    scroll: "Scroll",
  },
  scent: {
    eyebrow: "01 · Why scent matters",
    history: [
      "Scent is humanity's oldest language. Incense in Egyptian temples, burners and rose water in Ottoman palaces; scent has always been how a guest is welcomed and how a place is given a soul.",
      "That has not changed. Of all our senses, smell is the one most directly tied to memory and emotion. The eye forgets, the ear grows used to things; yet a scent can bring back a memory in a single breath, years later.",
    ],
    statement: "Scent is a system, not a bottle.",
    approach: {
      label: "Siner's approach",
      body: "We measure the space, listen to the brand and design the scent from scratch; then we make the machine, the object and the service that keep it alive every day, ourselves. We design that breath.",
    },
  },
  who: {
    eyebrow: "02 · Who we are",
    title: "We are makers. From idea to factory, from factory to your space.",
    lead: "With perfumers, glass, ceramic and wood artists, sculptors and a technical team, we produce a brand's scent in our own facility, from the first idea to the last device in the space.",
    media: [
      { label: "Factory", image: null },
      { label: "Production", image: null },
      { label: "Studio", image: null },
    ],
    numbers: [
      { value: 15, suffix: "", label: "Years of experience" },
      { value: 50, suffix: "+", label: "Institutions and brands" },
      { value: 12, suffix: "", label: "Artists and specialists" },
      { value: 2000, suffix: " m³", label: "Scented by a single device" },
    ],
    pillars: [
      { k: "Our own factory", body: "Scent, bottle, ceramic and packaging are made under one roof, so quality and timing stay in our hands." },
      { k: "A scent of your own", body: "We select or build from scratch a fragrance that fits your brand, a signature that belongs only to you." },
      { k: "Handmade, one of a kind", body: "With our wood, glass and ceramic artists and sculptors, every piece is artistic, handmade and unique." },
      { k: "A boutique stance", body: "Work designed with an eye for beauty and made to be remembered, not the sameness of mass production." },
      { k: "Love nature, keep it green", body: "We turn waste glass into fragrance bottles and contribute to a zero carbon footprint through recycling projects." },
      { k: "Scent that does you good", body: "Our fragrances are developed with human health in mind, in formulas that soothe rather than tire." },
    ],
  },
  machines: {
    eyebrow: "04 · Scent machines",
    title: "Machines with a scent made just for you.",
    lead: "Professional devices that diffuse scent without heat, as an even, micron-fine mist. The scent, the installation and the service all come from us.",
    items: [
      { id: "tower", name: "Siner Tower", kind: "Floor-standing nebuliser", spec: "2000 m³", image: "/devices/tower.webp" },
      { id: "minimal", name: "Minimal Line", kind: "Compact scent machine", spec: "Reception · office", image: "/devices/minimal-black.webp" },
      { id: "wall", name: "Extra-Wall", kind: "Plug-in diffuser", spec: "250 m³", image: "/devices/wall.webp" },
    ],
    more: "All scent machines",
  },
  kubbe: {
    eyebrow: "05 · Ceramic incense burner",
    name: "Kubbe",
    title: "Its light is as lovely as its scent.",
    body: "The perforated dome scatters the candle's light across the room like stars. Kubbe scents the space and adds warm, decorative lighting at the same time.",
    specs: [
      { value: "11.5", unit: "cm", label: "Height" },
      { value: "50", unit: "ml", label: "Bowl" },
      { value: "1", unit: "min", label: "Scent release" },
    ],
    more: "Discover Kubbe",
  },
  onix: {
    eyebrow: "06 · Corporate incense burner",
    name: "ONIX",
    title: "With your logo, colours and scent.",
    body: "A handmade ceramic body with your brand's artwork and fragrance. Upload your logo and see ONIX in your brand, in 3D.",
    image: "/onix/aselsan-candle.webp",
    imageAlt: "ONIX personalised for ASELSAN",
    studio: "Try it with your logo",
    story: "Watch it come apart",
  },
  refs: {
    eyebrow: "07 · Clients",
  },
};

export const landing: Record<Locale, typeof tr> = { tr, en };
