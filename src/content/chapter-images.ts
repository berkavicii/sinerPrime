/**
 * Pictures for the long chapter pages, kept apart from the copy so they can be swapped or removed in one place.
 *
 * - Set `showChapterImages` to false to hide every picture below at once.
 * - A shot without `src` renders as a marked placeholder ("Örnek görsel") with `hint` saying what belongs there.
 * - Files in /prime were cropped from siner.com.tr and sinershop.com (banner text painted out);
 *   the two smoke-gold files were generated for this site.
 */

export const showChapterImages = true;

export type Shot = {
  src?: string;
  alt: string;
  /** what the final picture should show, printed on placeholders */
  hint?: string;
  /** CSS object-position, for crops that need a nudge */
  position?: string;
};

export type ChapterShots = {
  /** sits behind the page title */
  hero?: Shot;
  /** beside each section's title (keyed by section id) */
  sections?: Record<string, Shot>;
  /** full-width picture after a section (keyed by section id) */
  bands?: Record<string, Shot>;
  /** beside the opening text on wide screens, in the otherwise empty left column; stays in view while reading */
  aside?: Shot;
  /** pictures inside the opening text, after the given number of paragraphs */
  inline?: { after: number; shot: Shot }[];
};

const P = "/prime";
/** photos from Siner's own workshop, studio and shoots */
const A = "/atolye";

export const chapterImages: Record<string, ChapterShots> = {
  felsefemiz: {
    hero: { src: `${P}/smoke-gold.webp`, alt: "", position: "70% 50%" },
    aside: { src: `${A}/zanaatkar.webp`, alt: "Atölyede bir parçayı elle işleyen ustamız" },
    inline: [
      { after: 4, shot: { src: `${P}/ceramic-studio.webp`, alt: "Seramik formlar üzerinde çalışan bir tasarımcı" } },
      { after: 9, shot: { src: `${A}/seramik-sanatci.webp`, alt: "Delikli bir seramiği elle boyayan sanatçımız" } },
    ],
  },

  koku: {
    hero: { src: `${P}/smoke-gold-2.webp`, alt: "", position: "65% 50%" },
    aside: { src: `${A}/kubbe-duman.webp`, alt: "Karanlıkta tüten siyah Kubbe buhurdanlık" },
    sections: {
      "kokunun-hikayesi-insanliktan-daha-eski": {
        src: `${A}/geleneksel-buhurdan.webp`,
        alt: "Taş üzerinde mumla yanan geleneksel seramik buhurdanlık",
      },
      "bir-koku-nasil-olur-da-bir-aniyi-yeniden-canland": {
        src: `${P}/oil-drop.webp`,
        alt: "Seramik buhurdanlığa damlatılan esans",
      },
      "her-kokunun-bir-dili-var": { src: `${P}/reed-stone.webp`, alt: "Taş üzerinde Siner oda kokusu" },
      "koku-ve-mekan-bir-yeri-nasil-hatirlariz": {
        src: `${P}/lobby-tower.webp`,
        alt: "Otel lobisinde Siner Tower",
        position: "50% 50%",
      },
      "markalarin-gorunmeyen-imzasi": { src: `${P}/store-reed.webp`, alt: "Mağaza rafında oda kokuları" },
      "koku-bir-luks-degil-dusunulmus-bir-deneyim-olabi": {
        src: `${P}/burner-sand.webp`,
        alt: "Kum üzerinde beyaz seramik buhurdanlık",
      },
      "siner-prime-kokuya-bakisimiz": { src: `${A}/cubuklu-difuzor.webp`, alt: "Kurutulmuş çiçekler arasında Siner çubuklu difüzör" },
      "her-mekanin-bir-hikayesi-her-hikayenin-bir-kokus": { src: `${A}/pencere-sise.webp`, alt: "Pencereden süzülen ışıkta desenli koku şişesi" },
    },
    bands: {
      "her-kokunun-bir-dili-var": { src: `${P}/marble-reed.webp`, alt: "Mermer banyoda oda kokusu" },
    },
  },

  "koku-tasarimi": {
    hero: { src: `${P}/reed-stone.webp`, alt: "", position: "50% 70%" },
    aside: { src: `${A}/esans-buhurdan.webp`, alt: "Siner esansı ve yanan seramik buhurdanlık" },
    sections: {
      "once-dinleriz-gozlemleriz-anlamaya-calisiriz": { src: `${A}/studyo.webp`, alt: "Siner koku stüdyosunda çalışma masası" },
      "bir-kokudan-once-bir-fikir-gelistiririz": { src: `${A}/cizim.webp`, alt: "Bir koku markası için çizilen konsept illüstrasyonu" },
      "koku-tasarimi-nasil-gelisir": { src: `${P}/oil-drop.webp`, alt: "Esans damlatılan seramik buhurdanlık" },
      "bizim-icin-bir-koku-baska-tasarimlarin-da-baslan": {
        src: `${P}/burner-rocks.webp`,
        alt: "Taşların arasında siyah seramik buhurdanlık",
      },
      "her-sektorun-degil-her-projenin-kendine-ozgu-bir": { src: `${A}/ozel-siseler.webp`, alt: "Projeye özel hazırlanmış desenli koku şişeleri" },
      "siner-prime-in-kokuya-yaklasimi": { src: `${A}/kubbe-damlatma.webp`, alt: "Kubbe'nin haznesine esans damlatılırken" },
    },
    bands: {
      "koku-tasarimi-nasil-gelisir": { src: `${P}/marble-reed.webp`, alt: "Mermer banyoda oda kokusu" },
    },
  },

  "koku-teknolojileri": {
    hero: { src: `${P}/devices-dark.webp`, alt: "", position: "70% 50%" },
    sections: {
      "teknoloji-felsefemiz": { src: `${P}/machine-dark.webp`, alt: "Siner Minimal Line koku makinesi" },
      "koku-teknolojisi-nasil-calisir": { src: `${A}/laboratuvar.webp`, alt: "Siner laboratuvarında damıtma düzeneği" },
      "mekana-ozel-sistem-tasarimi": {
        src: `${P}/office-wall.webp`,
        alt: "Ofis duvarında Siner koku cihazı",
        position: "62% 50%",
      },
      "siner-prime-profesyonel-kokulandirma-sistemleri": { src: "/devices/tower.webp", alt: "Siner Tower" },
      "hvac-ve-merkezi-sistem-entegrasyonu": { src: `${A}/metal-atolye.webp`, alt: "Atölyede işlenen metal cihaz parçaları" },
      "projelendirme-uygulama-ve-teknik-destek": { src: `${A}/cnc.webp`, alt: "CNC tezgâhında kazınan uygulama" },
    },
    bands: {
      "mekana-ozel-sistem-tasarimi": { src: `${P}/lobby-tower.webp`, alt: "Otel lobisinde Siner Tower" },
    },
  },

  "tasarim-ve-koleksiyonlar": {
    hero: { src: `${P}/burners-dark.webp`, alt: "", position: "45% 50%" },
    aside: { src: `${A}/seramik-fincan.webp`, alt: "Elde tutulan desenli seramik, arkada Kubbe koleksiyonu" },
    sections: {
      "tasarim-felsefemiz": { src: `${P}/burner-sand.webp`, alt: "Kum üzerinde beyaz seramik buhurdanlık" },
      "malzeme-ve-uretim-kulturu": {
        src: `${P}/ceramic-studio.webp`,
        alt: "Seramik formlar üzerinde çalışan bir tasarımcı",
        position: "40% 50%",
      },
      koleksiyonlarimiz: { src: "/kubbe/scene.webp", alt: "Kubbe seramik buhurdanlık" },
      "markalara-ve-kurumlara-ozel-tasarim": { src: "/onix/thy-stone.webp", alt: "Kuruma özel ONIX buhurdanlık" },
      "tasarimda-onemsedigimiz-degerler": {
        src: `${P}/burner-rocks.webp`,
        alt: "Taşların arasında siyah seramik buhurdanlık",
      },
      "bizim-icin-tasarim-biten-bir-urun-degil-baslayan": { src: `${A}/seramik-firca.webp`, alt: "Seramik bir formu fırçayla desenleyen sanatçımız" },
      "markaniza-ozel-bir-koleksiyon-gelistirelim": { src: `${A}/forma-seramik.webp`, alt: "Bir spor kulübü için tasarlanan forma biçimli seramik" },
    },
    bands: {
      koleksiyonlarimiz: { src: `${P}/marble-reed.webp`, alt: "Mermer banyoda oda kokusu" },
    },
  },

  "proje-gelistirme": {
    hero: { src: `${P}/office-wall.webp`, alt: "", position: "60% 50%" },
    aside: { src: `${A}/ahsap-kutu.webp`, alt: "Bir marka için hazırlanan ahşap kutulu koku seti" },
    sections: {
      "kurumsal-mekan-ve-deneyim-projeleri": {
        src: `${P}/lobby-tower.webp`,
        alt: "Otel lobisinde Siner Tower",
      },
      "markaya-ozel-urun-ve-koleksiyon-projeleri": {
        src: "/onix/thy-box-open.webp",
        alt: "Kurumsal hediye kutusunda ONIX",
      },
      "etkinlik-atolye-ve-marka-deneyimleri": { src: `${A}/esans-damlatma.webp`, alt: "Buhurdanlığa esans damlatılırken" },
      "sektore-gore-degisen-ihtiyaca-gore-sekillenen-pr": {
        src: `${P}/showroom.webp`,
        alt: "Otomobil showroomunda Siner koku cihazı",
        position: "45% 50%",
      },
      "proje-gelistirme-ve-uygulama-surecimiz": { src: `${A}/seramik-prototip.webp`, alt: "Üretimdeki seramik prototipler" },
      "her-projenin-kapsami-farkli-olabilir": { src: `${A}/ambalaj.webp`, alt: "Markaya özel ambalaj ve kutular" },
      "projenizi-birlikte-gelistirelim": { src: `${A}/deri-canta.webp`, alt: "Bir marka için üretilen deri taşıma çantası" },
    },
    bands: {
      "etkinlik-atolye-ve-marka-deneyimleri": { src: `${P}/hall-tower.webp`, alt: "Geniş bir holde Siner Tower" },
    },
  },

  "sektorel-cozumler": {
    hero: { src: `${P}/showroom.webp`, alt: "", position: "40% 50%" },
    aside: { src: `${A}/kubbe-logolu.webp`, alt: "Bir otomotiv markasının logosuyla Kubbe" },
    sections: {
      "tum-sektorler-icin-ortak-proje-yaklasimimiz": {
        src: `${P}/hall-tower.webp`,
        alt: "Geniş bir holde Siner Tower",
        position: "40% 50%",
      },
      "birlikte-nasil-bir-proje-gelistirebiliriz": { src: `${A}/siner-kutu.webp`, alt: "Siner kutusu ve özel tasarım şişeler" },
    },
    bands: {
      sektorlerimiz: { src: `${A}/vitrin-siseler.webp`, alt: "Bir mekânın vitrininde Siner koku şişeleri", position: "50% 85%" },
    },
  },
};

export function shotsFor(slug: string): ChapterShots {
  return showChapterImages ? (chapterImages[slug] ?? {}) : {};
}
