import type { Locale } from "@/lib/i18n";

/*
  The home page as a presentation for a meeting: the opening, then the seven chapters
  of the left menu as short scenes, each with one idea, a picture and a way into the
  full chapter page. Copy is condensed from "çatı"; the chapter pages keep the long text.
  Section ids match the chapter slugs, so the left menu scrolls here instead of navigating.
*/

const tr = {
  more: "Detaylı incele",
  felsefemiz: {
    statement: "Bizi asıl heyecanlandıran, henüz yapmadıklarımız.",
    lead: "Koku, tasarım ve deneyimi tek bir bütün olarak düşünüyor; fikirden fabrikaya, fabrikadan mekânınıza kendimiz üretiyoruz.",
    facts: [
      { value: 15, suffix: "", label: "Yıllık tecrübe" },
      { value: 50, suffix: "+", label: "Kurum ve marka" },
      { value: 1, suffix: "", label: "Çatı altında koku, cam, seramik, ahşap" },
    ],
    pull: "Daha fazla ürün değil, daha fazla değer üretmek için…",
    image: "/prime/burner-rocks.webp",
  },
  koku: {
    title: "Görünmeyen bir dünyanın hafızası.",
    scenes: [
      {
        label: "Hafıza",
        text: "Göz unutur, kulak alışır. Bir koku ise yıllar sonra bile bir anıyı tek nefeste geri getirir.",
        image: "/prime/koku-hafiza.webp",
      },
      {
        label: "Mekân",
        text: "Bir yeri hatırlarken duvarlarını değil, orada ne hissettiğimizi hatırlarız.",
        image: "/prime/koku-mekan.webp",
      },
      {
        label: "Marka",
        text: "Koku, markaların görünmeyen imzasıdır.",
        image: "/prime/koku-marka.webp",
      },
    ],
  },
  tasarim: {
    title: "Her mekânın bir ihtiyacı, her kokunun bir anlamı vardır.",
    steps: [
      { k: "01", title: "Dinleriz", body: "Markayı, insanlarını ve anlatmak istediği hikâyeyi." },
      { k: "02", title: "Keşfederiz", body: "Mekânı yerinde: hacmi, havası, ritmi." },
      { k: "03", title: "Kurgularız", body: "Konsepti ve yalnızca size ait koku kimliğini." },
      { k: "04", title: "Deneriz", body: "Formülasyon, numune ve prototiplerle." },
      { k: "05", title: "Yaşatırız", body: "Kokuyu mekâna, ürüne ve deneyime taşırız." },
    ],
    band: { image: "/prime/marble-reed.webp", text: "Güzel kokmak yeterli değil." },
  },
  teknoloji: {
    title: "Teknoloji, mekânın önüne geçmeden.",
    devices: [
      { id: "tower", name: "Siner Tower", kind: "Ayaklı nebülizasyon", image: "/devices/tower.webp" },
      { id: "minimal", name: "Minimal Line", kind: "Kompakt koku makinesi", image: "/devices/minimal-black.webp" },
      { id: "wall", name: "Extra-Wall", kind: "Prize takılan difüzör", image: "/devices/wall.webp" },
    ],
    stage: {
      image: "/devices/trio.webp",
      alt: "Siyah ve beyaz Minimal Line arasında Siner Tower",
      // box: left, top, width, height in % of the picture; the name lights up on hover, above the machine or beside it (side)
      spots: [
        { id: "minimal", name: "Minimal Line", kind: "Kompakt koku makinesi · Siyah", box: [21, 56, 15.5, 33] },
        { id: "tower", name: "Siner Tower", kind: "Ayaklı nebülizasyon · 2000 m³", box: [46.5, 9, 7, 72], side: true },
        { id: "minimal", name: "Minimal Line", kind: "Kompakt koku makinesi · Beyaz", box: [63.5, 56, 15.8, 34] },
      ],
    },
    facts: [
      { value: "Isısız", label: "Soğuk hava difüzyonu" },
      { value: "2000 m³", label: "Tek cihazla" },
      { value: "HVAC", label: "Merkezi sistem entegrasyonu" },
      { value: "Akıllı", label: "Zamanlama ve uzaktan kontrol" },
    ],
    devicesLink: "Tüm koku makineleri",
  },
  koleksiyon: {
    title: "Tasarımdan ürüne, üründen deneyime.",
    kubbe: {
      name: "Kubbe",
      kind: "Seramik buhurdanlık",
      line: "Delikli kubbe, mumun ışığını odaya yıldız gibi dağıtır.",
      link: "Kubbe'yi parça parça izleyin",
    },
    items: [
      {
        name: "ONIX",
        kind: "Markaya özel buhurdanlık",
        line: "Logonuz, renginiz ve kokunuzla.",
        image: "/onix/aselsan-night.webp",
        path: "onix#studio",
        link: "Logonuzla deneyin",
      },
      {
        name: "Deneyim Seti",
        kind: "Buhurdanlık ve 21 yağ",
        line: "21 koku, tek bir ritüel.",
        image: "/burners/set-office.webp",
        path: "urunler#set",
        link: "Seti inceleyin",
      },
    ],
  },
  proje: {
    title: "Bir fikirden daha fazlası.",
    tiles: [
      { title: "Kurumsal mekân ve deneyim", body: "Otel, ofis, mağaza ve showroomlara koku kimliği.", tags: "Otel · Ofis · Mağaza · Showroom", image: "/devices/tower-lobby.webp" },
      { title: "Markaya özel ürün", body: "Koleksiyonlar, hediye setleri ve ambalaj.", tags: "Buhurdanlık · Koku · Ambalaj", image: "/onix/thy-night.webp" },
      { title: "Etkinlik ve atölye", body: "Misafirleri deneyimin bir parçası yapan buluşmalar.", tags: "Lansman · Atölye · Marka deneyimi", image: "/prime/oil-drop.webp" },
    ],
    steps: ["Fikir", "Tasarım", "Prototip", "Üretim", "Uygulama"],
    refs: "Birlikte çalıştığımız kurumlar",
    refsLink: "Tüm referanslar",
  },
  sektor: {
    title: "Her sektörün ihtiyacı farklı.",
    countLabel: "sektör için ayrı bir yaklaşım",
  },
};

const en: typeof tr = {
  more: "Read more",
  felsefemiz: {
    statement: "What excites us most is what we haven't made yet.",
    lead: "We think of scent, design and experience as one; from idea to factory, from factory to your space, we make it ourselves.",
    facts: [
      { value: 15, suffix: "", label: "Years of experience" },
      { value: 50, suffix: "+", label: "Institutions and brands" },
      { value: 1, suffix: "", label: "Roof for scent, glass, ceramic and wood" },
    ],
    pull: "Not more products, but more value…",
    image: "/prime/burner-rocks.webp",
  },
  koku: {
    title: "The memory of an invisible world.",
    scenes: [
      { label: "Memory", text: "The eye forgets, the ear grows used to things. A scent brings a memory back in one breath, years later.", image: "/prime/koku-hafiza.webp" },
      { label: "Place", text: "We remember a place not by its walls, but by how it made us feel.", image: "/prime/koku-mekan.webp" },
      { label: "Brand", text: "Scent is a brand's invisible signature.", image: "/prime/koku-marka.webp" },
    ],
  },
  tasarim: {
    title: "Every space has a need, every scent a meaning.",
    steps: [
      { k: "01", title: "We listen", body: "To the brand, its people and the story it wants to tell." },
      { k: "02", title: "We explore", body: "The space on site: its volume, its air, its rhythm." },
      { k: "03", title: "We compose", body: "The concept and a scent identity that is yours alone." },
      { k: "04", title: "We test", body: "With formulation, samples and prototypes." },
      { k: "05", title: "We bring it to life", body: "In the space, in products and in the experience." },
    ],
    band: { image: "/prime/marble-reed.webp", text: "Smelling good is not enough." },
  },
  teknoloji: {
    title: "Technology that never upstages the space.",
    devices: [
      { id: "tower", name: "Siner Tower", kind: "Floor-standing nebuliser", image: "/devices/tower.webp" },
      { id: "minimal", name: "Minimal Line", kind: "Compact scent machine", image: "/devices/minimal-black.webp" },
      { id: "wall", name: "Extra-Wall", kind: "Plug-in diffuser", image: "/devices/wall.webp" },
    ],
    stage: {
      image: "/devices/trio.webp",
      alt: "Siner Tower between a black and a white Minimal Line",
      spots: [
        { id: "minimal", name: "Minimal Line", kind: "Compact scent machine · Black", box: [21, 56, 15.5, 33] },
        { id: "tower", name: "Siner Tower", kind: "Floor-standing nebuliser · 2000 m³", box: [46.5, 9, 7, 72], side: true },
        { id: "minimal", name: "Minimal Line", kind: "Compact scent machine · White", box: [63.5, 56, 15.8, 34] },
      ],
    },
    facts: [
      { value: "No heat", label: "Cold-air diffusion" },
      { value: "2000 m³", label: "With a single device" },
      { value: "HVAC", label: "Central system integration" },
      { value: "Smart", label: "Scheduling and remote control" },
    ],
    devicesLink: "All scent machines",
  },
  koleksiyon: {
    title: "From design to product, from product to experience.",
    kubbe: {
      name: "Kubbe",
      kind: "Ceramic incense burner",
      line: "The perforated dome scatters candlelight across the room like stars.",
      link: "Watch Kubbe come apart",
    },
    items: [
      { name: "ONIX", kind: "Brandable incense burner", line: "With your logo, colours and scent.", image: "/onix/aselsan-night.webp", path: "onix#studio", link: "Try it with your logo" },
      { name: "Discovery Set", kind: "Burner and 21 oils", line: "21 scents, one ritual.", image: "/burners/set-office.webp", path: "urunler#set", link: "See the set" },
    ],
  },
  proje: {
    title: "More than an idea.",
    tiles: [
      { title: "Corporate spaces", body: "A scent identity for hotels, offices, stores and showrooms.", tags: "Hotel · Office · Store · Showroom", image: "/devices/tower-lobby.webp" },
      { title: "Brand products", body: "Collections, gift sets and packaging.", tags: "Burner · Scent · Packaging", image: "/onix/thy-night.webp" },
      { title: "Events and workshops", body: "Gatherings that make guests part of the experience.", tags: "Launch · Workshop · Brand experience", image: "/prime/oil-drop.webp" },
    ],
    steps: ["Idea", "Design", "Prototype", "Production", "Installation"],
    refs: "Organisations we work with",
    refsLink: "All clients",
  },
  sektor: {
    title: "Every sector needs something different.",
    countLabel: "sectors, each with its own approach",
  },
};

export const deck: Record<Locale, typeof tr> = { tr, en };
