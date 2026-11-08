import type { Locale } from "@/lib/i18n";

const tr = {
  story: {
    eyebrow: "Siner Prime · The Art of Scent",
    title: ["Bazı markalar görülür,", "bazıları hissedilir."],
    lead: "Koku, tasarım ve zanaatı tek bir nesnede buluşturuyoruz. Sayfayı kaydırın; ONIX'i parça parça tanıyın.",
    steps: [
      {
        k: "01",
        title: "El yapımı seramik gövde",
        body: "Seri üretimin sıradanlığından uzak. Her gövde elde şekillenir, sırlanır ve fırınlanır.",
      },
      {
        k: "02",
        title: "Çıkarılabilir alüminyum hazne",
        body: "Yağ ve su için tasarlanmış metal hazne; çıkar, yıka, yeniden kullan.",
      },
      {
        k: "03",
        title: "Sıcak bir kalp",
        body: "Tek bir tealight. Doğrudan yağ kullanımında koku yaklaşık 50 saniyede odaya yayılır.",
      },
      {
        k: "04",
        title: "Markaya özel koku",
        body: "Her ONIX, kurumunuz için seçilen ya da sıfırdan geliştirilen bir koku imzasıyla gelir.",
      },
    ],
    labels: {
      bowl: "Alüminyum hazne",
      body: "El yapımı seramik",
      light: "Tealight",
      bottle: "Markaya özel koku",
    },
    specs: [
      { value: 8, unit: "cm", label: "Yükseklik" },
      { value: 7.8, unit: "cm", label: "Çap" },
      { value: 50, unit: "sn", label: "Koku tepki süresi" },
    ],
    outro: "Markanızın adı, rengi ve kokusu. Hepsi tek bir objede.",
    outroCta: "ONIX'i kendi logonuzla görün",
  },
  marquee: ["Koku", "Tasarım", "Deneyim", "Üretim"],
  about: {
    eyebrow: "Biz kimiz",
    years: "yıllık birikim",
    more: "Bizi tanıyın",
    quote:
      "İşini tutkuyla yapan markaların duyulara dokunan imzasını tasarlıyoruz. Antalya'da başlayan yolculuğumuz bugün tek bir inancın etrafında şekilleniyor: tüketilen bir dünyada, hatırlanmaya değer deneyimler üretmek.",
    body: "Atık camları özgün koku şişelerine dönüştürüyor, turizm sektörüne sıradan hediyelerin ötesinde anlam taşıyan ürünler kazandırıyor, müzeler ve turistik alanlar için mekânın kimliğini duyularla buluşturan deneyimler tasarlıyoruz. Çünkü bazı mekânlar yalnızca görülmez, bazı anlar yalnızca yaşanmaz; koku aracılığıyla hafızada yer edinir.",
  },
  pillars: {
    eyebrow: "Yaklaşım",
    title: "Üründen deneyime, tasarımdan hatıraya.",
    items: [
      {
        word: "Koku",
        body: "Markanın kimliğine, mekânın mimarisine ve hedef kitlesine uygun koku seçimi ya da sıfırdan geliştirilen imza kokular.",
        image: "/onix/thy-detail.webp",
      },
      {
        word: "Tasarım",
        body: "Ürünün görsel dili, logo uygulaması ve ambalaj bütünlüğü. Seramik, cam ve ahşapta el işçiliği.",
        image: "/onix/aselsan-detail.webp",
      },
      {
        word: "Deneyim",
        body: "Hediyenin teslim edildiği andan günlük kullanıma uzanan temas. Kutunun açıldığı an da tasarımın parçası.",
        image: "/onix/thy-box-open.webp",
      },
      {
        word: "Üretim",
        body: "Sipariş kapsamına uygun kişiselleştirme, üretim planlaması ve sevkiyat. Seramik bölümünden ambalaja kadar kendi atölyemizde.",
        image: "/onix/hand-aselsan.webp",
      },
    ],
  },
  collection: {
    eyebrow: "Koleksiyon",
    title: "Üç farklı ölçekte koku.",
    items: [
      {
        path: "onix",
        name: "ONIX",
        kind: "Kurumsal buhurdanlık",
        body: "Markanıza özel, el yapımı seramik hediye.",
        image: "/onix/thy-candle.webp",
      },
      {
        path: "kubbe",
        name: "Kubbe",
        kind: "Seramik buhurdanlık",
        body: "Sırlı siyah seramik, 50 ml hazne, 1 dakikada koku.",
        image: "/kubbe/hero.webp",
      },
      {
        path: "cihazlar",
        name: "Tower · Minimal · Wall",
        kind: "Profesyonel kokulandırma",
        body: "Lobiden kliniğe, 2000 m³'e kadar mekân kokulandırma.",
        image: "/devices/tower-lobby.webp",
      },
    ],
    cta: "Keşfedin",
  },
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
  team: {
    eyebrow: "Atölye",
    title: "Kokunun arkasındaki eller.",
    lead: "Cam, seramik, ahşap, heykel ve grafik. On iki zanaatkâr, tek bir imza.",
    people: [
      { slug: "sefa-yaman", name: "Sefa Yaman", role: "Genel Koordinatör · Tasarımcı" },
      { slug: "ahmet-yaman", name: "Ahmet Yaman", role: "Ahşap Sanatları · Ürün Geliştirici" },
      { slug: "busra-yaman", name: "Büşra Yaman", role: "Kalite ve Üretim Sorumlusu" },
      { slug: "emrah-kopal", name: "Emrah Kopal", role: "Cam Sanatları · Ürün Geliştirici" },
      { slug: "abdulkadir-oz", name: "Abdulkadir Öz", role: "El Sanatları · Ambalaj Geliştirici" },
      { slug: "mucahit-ozdemir", name: "Mücahit H. Özdemir", role: "Grafik Tasarım · Ürün Tasarımı" },
      { slug: "metehan-ilhan", name: "Metehan İlhan", role: "Müşteri İlişkileri" },
      { slug: "habib-tuncez", name: "Habib Tuncez", role: "Heykeltıraş · 3D Tasarımcı" },
      { slug: "dilber-akkas", name: "Dilber Akkaş", role: "Marketing · Üretim Sorumlusu" },
      { slug: "batur-dilisen", name: "Batur Dilişen", role: "Fotoğraf · Ürün Tanıtımı" },
      { slug: "ali-riza-zengin", name: "Ali Rıza Zengin", role: "Hammadde · Ambalaj Sorumlusu" },
      { slug: "ibrahim-celikci", name: "H. İbrahim Celikci", role: "Seramik Bölümü" },
    ],
  },
  refs: {
    eyebrow: "Referanslarımızdan bazıları",
    title: "Hafızada yer eden markalar.",
    count: "50+",
    countLabel: "kurum, otel ve marka",
    all: "Tüm referanslar",
  },
  closing: {
    line: ["Bir koku bırakın.", "Markanız hafızalarda", "yaşamaya devam etsin."],
  },
};

const en: typeof tr = {
  story: {
    eyebrow: "Siner Prime · The Art of Scent",
    title: ["Some brands are seen,", "others are felt."],
    lead: "Scent, design and craft brought together in a single object. Scroll to take ONIX apart, piece by piece.",
    steps: [
      {
        k: "01",
        title: "Handmade ceramic body",
        body: "Far from the sameness of mass production. Every body is shaped by hand, glazed and kiln fired.",
      },
      {
        k: "02",
        title: "Removable aluminium bowl",
        body: "A metal bowl for oil and water. Lift it out, wash it, use it again.",
      },
      {
        k: "03",
        title: "A warm heart",
        body: "A single tealight. With pure oil, the scent fills the room in about 50 seconds.",
      },
      {
        k: "04",
        title: "A scent made for your brand",
        body: "Every ONIX ships with a fragrance chosen for, or developed from scratch with, your organisation.",
      },
    ],
    labels: {
      bowl: "Aluminium bowl",
      body: "Handmade ceramic",
      light: "Tealight",
      bottle: "Signature scent",
    },
    specs: [
      { value: 8, unit: "cm", label: "Height" },
      { value: 7.8, unit: "cm", label: "Diameter" },
      { value: 50, unit: "s", label: "Scent response" },
    ],
    outro: "Your name, your colours, your scent. All in one object.",
    outroCta: "See ONIX with your logo",
  },
  marquee: ["Scent", "Design", "Experience", "Production"],
  about: {
    eyebrow: "Who we are",
    years: "years of craft",
    more: "Meet the studio",
    quote:
      "We design the sensory signature of brands that are passionate about what they do. A journey that began in Antalya is shaped today by one belief: in a world built on consumption, create experiences worth remembering.",
    body: "We turn waste glass into distinctive fragrance bottles, give the tourism industry products that mean more than souvenirs, and design sensory experiences for museums and destinations that bring a place's identity together with the senses. Some places are not only seen, some moments are not only lived; through scent, they become memory.",
  },
  pillars: {
    eyebrow: "Approach",
    title: "From product to experience, from design to memory.",
    items: [
      {
        word: "Scent",
        body: "Fragrances selected for a brand's identity, its architecture and its audience, or signature scents developed from scratch.",
        image: "/onix/thy-detail.webp",
      },
      {
        word: "Design",
        body: "The visual language of the object, logo application and packaging as one. Handwork in ceramic, glass and wood.",
        image: "/onix/aselsan-detail.webp",
      },
      {
        word: "Experience",
        body: "Every touchpoint from the moment a gift is delivered to its daily use. Opening the box is part of the design.",
        image: "/onix/thy-box-open.webp",
      },
      {
        word: "Production",
        body: "Personalisation, production planning and delivery sized to your order. From the ceramics department to packaging, in our own studio.",
        image: "/onix/hand-aselsan.webp",
      },
    ],
  },
  collection: {
    eyebrow: "Collection",
    title: "Scent at three scales.",
    items: [
      {
        path: "onix",
        name: "ONIX",
        kind: "Corporate oil burner",
        body: "A handmade ceramic gift, made for your brand.",
        image: "/onix/thy-candle.webp",
      },
      {
        path: "kubbe",
        name: "Dome",
        kind: "Ceramic oil burner",
        body: "Glazed black ceramic, 50 ml bowl, scent within a minute.",
        image: "/kubbe/hero.webp",
      },
      {
        path: "cihazlar",
        name: "Tower · Minimal · Wall",
        kind: "Professional diffusers",
        body: "From lobby to clinic, scenting spaces up to 2000 m³.",
        image: "/devices/tower-lobby.webp",
      },
    ],
    cta: "Discover",
  },
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
  team: {
    eyebrow: "Studio",
    title: "The hands behind the scent.",
    lead: "Glass, ceramic, wood, sculpture and graphics. Twelve craftspeople, one signature.",
    people: [
      { slug: "sefa-yaman", name: "Sefa Yaman", role: "General Coordinator · Designer" },
      { slug: "ahmet-yaman", name: "Ahmet Yaman", role: "Wood Arts · Product Developer" },
      { slug: "busra-yaman", name: "Büşra Yaman", role: "Quality & Production" },
      { slug: "emrah-kopal", name: "Emrah Kopal", role: "Glass Arts · Product Developer" },
      { slug: "abdulkadir-oz", name: "Abdulkadir Öz", role: "Handicrafts · Packaging" },
      { slug: "mucahit-ozdemir", name: "Mücahit H. Özdemir", role: "Graphic & Product Design" },
      { slug: "metehan-ilhan", name: "Metehan İlhan", role: "Customer Relations" },
      { slug: "habib-tuncez", name: "Habib Tuncez", role: "Sculptor · 3D Designer" },
      { slug: "dilber-akkas", name: "Dilber Akkaş", role: "Marketing · Production" },
      { slug: "batur-dilisen", name: "Batur Dilişen", role: "Photography · Promotion" },
      { slug: "ali-riza-zengin", name: "Ali Rıza Zengin", role: "Raw Materials · Packaging" },
      { slug: "ibrahim-celikci", name: "H. İbrahim Celikci", role: "Ceramics Department" },
    ],
  },
  refs: {
    eyebrow: "Some of our references",
    title: "Brands that stay in memory.",
    count: "50+",
    countLabel: "institutions, hotels and brands",
    all: "All clients",
  },
  closing: {
    line: ["Leave a scent.", "Let your brand", "live on in memory."],
  },
};

export const home: Record<Locale, typeof tr> = { tr, en };
export type HomeContent = typeof tr;
