import type { Locale } from "@/lib/i18n";

const tr = {
  audit: {
    eyebrow: "Kısa bir değerlendirme",
    title: "Tesisinizde gözden kaçan neler var?",
    lead: "Birkaç soruya içgüdüsel olarak cevap verin. Her “hayır” geliştirebileceğiniz yeni bir fırsat.",
    yes: "Evet",
    no: "Hayır",
    restart: "Yeniden başla",
    of: "/",
    resultTitle: (n: number): string => (n === 0 ? "Koku kimliğiniz güçlü görünüyor." : `${n} yeni fırsat buldunuz.`),
    resultBody: (n: number): string =>
      n === 0
        ? "Yine de bir sonraki adımı birlikte konuşabiliriz: yeni lokasyonlar, sezonluk kokular, misafir hediyeleri."
        : "Bu başlıkların her biri için mekânınıza özel bir çözüm önerebiliriz. Değerlendirmeyi birlikte tamamlayalım.",
    resultCta: "Sonuçları paylaşın",
    questions: [
      "Misafirleriniz otelinizden ayrıldıktan sonra sizi kokunuzla hatırlıyor mu?",
      "Tesisinizin kokusu gerçekten size mi ait, yoksa herhangi bir yerde karşılaşılabilecek kadar genel mi?",
      "Koku sisteminiz alanın tamamında gün boyunca aynı kaliteyi sağlayabiliyor mu?",
      "İstenmeyen kokuları kaynağında kontrol altına alıyor musunuz?",
      "Misafirleriniz otelinizde yaşadığı koku deneyimini evine taşıyabiliyor mu?",
      "Oda içi ürünleriniz ve hediyeleriniz markanızın kimliğini gerçekten yansıtıyor mu?",
      "VIP misafirlerinize ve özel günlere özel, yalnızca size ait ürünler sunabiliyor musunuz?",
      "Birden fazla tesisiniz varsa misafirleriniz her lokasyonda sizi aynı kokuyla tanıyabiliyor mu?",
      "Koku, ürün, ambalaj ve mekân deneyiminiz tek bir marka hikâyesi anlatıyor mu?",
      "Rakiplerinizden sizi ayıran duyusal bir imzanız var mı?",
    ],
  },
  departments: {
    eyebrow: "Otellere özel",
    title: "Departman bazlı projeler",
    lead: "Bir otelde koku yalnızca lobinin meselesi değil. Her departman için ayrı bir dokunuş tasarlıyoruz.",
    items: [
      {
        name: "İnsan Kaynakları",
        body: "Yeni personel karşılama setleri, doğum günü ve çalışma yıl dönümü hediyeleri, motivasyon setleri, çalışanlara özel koku ve parfüm atölyeleri.",
      },
      {
        name: "Misafir İlişkileri",
        body: "VIP misafir hediyeleri, balayı ve özel gün setleri, tekrar gelen misafirlere sürprizler ve konaklama hatırası olarak sunulabilecek özel ürünler.",
      },
      {
        name: "Pazarlama ve Marka Yönetimi",
        body: "Otele özel imza koku, parfüm, kolonya ve ortam kokuları; kurumsal hediye koleksiyonları ve markanın hikâyesini destekleyen sezonluk ürünler.",
      },
      {
        name: "Etkinlik ve Organizasyon",
        body: "Parfüm yapım atölyeleri, koku deneyimi etkinlikleri; düğün, kongre ve özel davetler için etkinliğin konseptine uygun kişiselleştirilmiş ürünler.",
      },
      {
        name: "Sosyal Medya ve Dijital Pazarlama",
        body: "Kampanyalara entegre koku deneyimleri, fotoğraf ve video içeriğine uygun ürün konseptleri, QR kodla desteklenen koku hikâyeleri.",
      },
      {
        name: "Satın Alma ve Ticari Birimler",
        body: "Otele özel kokulu ürünlerin geliştirilmesi ve tedariki, markalı hediyelik ürünler, oda içi ve butik satış ürünleriyle yeni gelir modelleri.",
      },
      {
        name: "Kat Hizmetleri · Housekeeping",
        body: "Misafir odaları ve ortak alanlar için koku standartları, alana uygun cihaz ve koku planlaması, tesis genelinde koku sürekliliği.",
      },
      {
        name: "Genel Müdürlük",
        body: "Otelin genel koku ve deneyim stratejisi, departmanlar arası proje planlaması ve çoklu tesislerde ortak koku, ürün ve hizmet standardı.",
      },
    ],
  },
  refs: {
    eyebrow: "Referanslarımızdan bazıları",
    title: "Hafızada yer eden markalar.",
    count: "50+",
    countLabel: "kurum, otel ve marka",
    all: "Tüm referanslar",
  },
};

const en: typeof tr = {
  audit: {
    eyebrow: "A quick self-check",
    title: "What are you overlooking in your property?",
    lead: "Answer a few questions on instinct. Every “no” could be a new opportunity.",
    yes: "Yes",
    no: "No",
    restart: "Start over",
    of: "/",
    resultTitle: (n: number): string => (n === 0 ? "Your scent identity looks strong." : `You found ${n} new opportunities.`),
    resultBody: (n: number): string =>
      n === 0
        ? "We can still talk about what comes next: new locations, seasonal scents, guest gifts."
        : "We can propose a solution tailored to your property for each of these. Let's finish the assessment together.",
    resultCta: "Share your results",
    questions: [
      "Do your guests still remember you by your scent after they leave?",
      "Is your property's scent truly yours, or generic enough to be found anywhere?",
      "Does your scenting system keep the same quality across the whole space, all day?",
      "Are unwanted odours controlled at the source rather than masked?",
      "Can your guests take the scent experience of your hotel home with them?",
      "Do your in-room products and gifts truly reflect your brand identity?",
      "Can you offer VIP guests and special occasions products that are yours alone?",
      "If you run several properties, do guests recognise you by the same scent everywhere?",
      "Do your scent, products, packaging and spaces tell one brand story?",
      "Do you have a sensory signature that sets you apart from competitors?",
    ],
  },
  departments: {
    eyebrow: "For hotels",
    title: "Department-based projects",
    lead: "In a hotel, scent is not only the lobby's business. We design a distinct touch for every department.",
    items: [
      {
        name: "Human Resources",
        body: "Welcome sets for new staff, birthday and work-anniversary gifts, motivation sets, and scent and perfume workshops for employees.",
      },
      {
        name: "Guest Relations",
        body: "VIP guest gifts, honeymoon and special-occasion sets, surprises for returning guests and keepsakes from their stay.",
      },
      {
        name: "Marketing & Brand",
        body: "Signature scents, perfumes, colognes and ambient fragrances for the hotel; gift collections and seasonal products that support the brand story.",
      },
      {
        name: "Events & Organisation",
        body: "Perfume-making workshops, scent experiences and personalised products for weddings, congresses and private invitations.",
      },
      {
        name: "Social Media & Digital",
        body: "Scent experiences built into campaigns, product concepts made for photo and video, QR-code scent stories.",
      },
      {
        name: "Purchasing & Commercial",
        body: "Developing and supplying hotel-specific scented products, branded gift items and in-room retail lines as new revenue models.",
      },
      {
        name: "Housekeeping",
        body: "Scent standards for rooms and common areas, device and fragrance planning per space, and scent consistency across the property.",
      },
      {
        name: "General Management",
        body: "The hotel's overall scent and experience strategy, cross-department projects and shared scent, product and service standards across properties.",
      },
    ],
  },
  refs: {
    eyebrow: "Some of our references",
    title: "Brands that stay in memory.",
    count: "50+",
    countLabel: "institutions, hotels and brands",
    all: "All clients",
  },
};

export const home: Record<Locale, typeof tr> = { tr, en };
export type HomeContent = typeof tr;
