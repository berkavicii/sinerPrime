import type { Locale } from "@/lib/i18n";

const corporateTr = {
  meta: {
    title: "Kurumsal",
    description: "Turizm ve konaklama sektörüne özel koku tasarımı, profesyonel koku teknolojileri ve mekânsal deneyim çözümleri.",
  },
  hero: {
    eyebrow: "Biz kimiz · Koku, tasarım, deneyim, üretim",
    title: ["İşini tutkuyla yapan markaların", "duyulara dokunan imzasını", "tasarlıyoruz."],
    lead: "Turizm ve konaklama sektörüne özel koku tasarımı, profesyonel koku teknolojileri ve mekânsal deneyim çözümleri.",
  },
  numbers: [
    { value: 15, suffix: "", label: "Yıllık birikim" },
    { value: 12, suffix: "", label: "Zanaatkâr ve uzman" },
    { value: 50, suffix: "+", label: "Kurum, otel ve marka" },
    { value: 8, suffix: "", label: "Departmana özel çözüm" },
  ],
  story: {
    eyebrow: "Hikâyemiz",
    paragraphs: [
      "15 yıl önce temelleri Antalya'da atılan yolculuğumuz, bugün bir düşüncenin etrafında şekilleniyor: tüketilen dünyada, hatırlanmaya değer deneyimler üretmek. Hızla tükettiğimiz, eskittiğimiz ve geride bıraktığımız bir çağda yaşıyoruz. Biz ise bu hızın içinde atıl kalmış kaynaklara yeniden hayat vermeye, gündelik yaşamın bir parçası olabilecek nitelikli ürünler ve uzun ömürlü projeler geliştirmeye odaklanıyoruz.",
      "Atık camları özgün koku şişelerine dönüştürüyor, turizm sektörüne sıradan hediyelerin ötesinde anlam taşıyan ürünler kazandırıyor, müzeler ve turistik alanlar için mekânın kimliğini duyularla buluşturan deneyimler tasarlıyoruz. Kurumsal kokular oluşturuyor, markalara özgü koku kimlikleri geliştiriyor, hatırlanmak istenen anları duyusal imzalara dönüştürüyoruz.",
      "Tasarım, üretim, danışmanlık ve hizmet anlayışımızı bir araya getirerek sürdürülebilirliği estetikle, işlevselliği deneyimle, ürünü ise hikâyeyle buluşturuyoruz.",
    ],
    belief:
      "Bizim için mesele yalnızca güzel kokular üretmek değil; kaynaklara yeniden değer kazandırmak, mekânlara kimlik katmak ve zaman geçse de hatırlanacak izler bırakmak.",
  },
  evaluate: {
    eyebrow: "Mevcut durumu değerlendirin",
    title: "Koku bir sistemdir, bir şişe değil.",
    items: [
      "Koku sistemleriniz alanın büyüklüğüne, kullanım yoğunluğuna ve gün içindeki ihtiyaca göre çalışıyor mu?",
      "Lobi, spa, restoran, koridor ve odalar kendi kullanım amacı ve atmosferine göre ayrı ayrı değerlendiriliyor mu?",
      "Seçtiğiniz koku; mimarinizi, konseptinizi ve hedef kitlenizi destekleyerek tutarlı bir kimlik oluşturuyor mu?",
      "Tuvalet, mutfak çevresi ve atık alanlarında istenmeyen kokular kaynağında kontrol altına alınıyor mu?",
      "Cihaz, bakım, sarf malzeme ve teknik servis süreçleriniz takip edilebilir ve kesintisiz yönetiliyor mu?",
      "Birden fazla lokasyonda aynı koku, ürün ve hizmet standardını sürdürebiliyor musunuz?",
      "Misafir geri bildirimlerini koku ve hizmet deneyiminizi geliştirmek için kullanıyor musunuz?",
    ],
  },
  approach: {
    eyebrow: "Siner'in yaklaşımı",
    body: "Otele özel koku tasarımı, deneyim odaklı projeler, markaya özel ürünler, kurumsal hediyeler ve sürdürülebilir hizmet çözümleriyle misafir ve çalışan deneyimini güçlendiren, markanın hafızada kalmasını sağlayan bütünsel projeler geliştiriyoruz.",
  },
  cta: "Tanışalım",
};

const corporateEn: typeof corporateTr = {
  meta: {
    title: "Studio",
    description: "Custom scent design, professional scenting technologies and spatial experience solutions for tourism and hospitality.",
  },
  hero: {
    eyebrow: "Who we are · Scent, design, experience, production",
    title: ["We design the sensory signature", "of brands that are passionate", "about what they do."],
    lead: "Custom scent design, professional scenting technologies and spatial experience solutions tailored to tourism and hospitality.",
  },
  numbers: [
    { value: 15, suffix: "", label: "Years of craft" },
    { value: 12, suffix: "", label: "Craftspeople and specialists" },
    { value: 50, suffix: "+", label: "Institutions, hotels and brands" },
    { value: 8, suffix: "", label: "Department-specific solutions" },
  ],
  story: {
    eyebrow: "Our story",
    paragraphs: [
      "Our journey began in Antalya 15 years ago and is shaped today by one belief: to create experiences worth remembering in a world built on consumption. We live in an age where we consume, wear out and leave things behind at an ever-increasing pace. Within that speed, we choose to give new life to overlooked resources and to build quality products and long-lasting projects that become part of everyday life.",
      "We turn waste glass into distinctive fragrance bottles, create products for the tourism industry that go beyond ordinary souvenirs, and design sensory experiences for museums and destinations that bring a place's identity together with the senses. We create corporate scents, develop olfactory identities for brands and turn moments worth remembering into sensory signatures.",
      "Bringing together design, production, consultancy and service, we combine sustainability with aesthetics, function with experience, and products with stories.",
    ],
    belief:
      "For us, it is not simply about creating beautiful fragrances. It is about giving new value to resources, adding identity to spaces and leaving impressions that last long after the moment has passed.",
  },
  evaluate: {
    eyebrow: "Evaluate the current situation",
    title: "Scent is a system, not a bottle.",
    items: [
      "Do your scent systems work to the size of the space, its usage intensity and the changing needs of the day?",
      "Are the lobby, spa, restaurant, corridors and rooms each assessed for their own purpose and atmosphere?",
      "Does your chosen scent support your architecture, concept and audience to form a consistent identity?",
      "Are unpleasant odours in restrooms, kitchens and waste areas controlled at the source?",
      "Are devices, maintenance, consumables and technical service managed in a trackable, uninterrupted way?",
      "Can you keep the same scent, product and service standard across every location?",
      "Do you use guest feedback to improve your scent and service experience?",
    ],
  },
  approach: {
    eyebrow: "Siner's approach",
    body: "Through custom scent design for hotels, experience-driven projects, brand-specific products, corporate gifts and sustainable service solutions, we build holistic projects that strengthen guest and employee experience and make the brand more memorable.",
  },
  cta: "Let's meet",
};

const referencesTr = {
  meta: {
    title: "Referanslar",
    description: "Otellerden kamu kurumlarına, bankalardan sağlık gruplarına Siner'in koku ve hediye projeleri.",
  },
  hero: {
    eyebrow: "Referanslar",
    title: ["Hafızada", "yer eden markalar."],
    lead: "Otel zincirlerinden belediyelere, bankalardan sağlık gruplarına; her biri için ayrı bir koku hikâyesi.",
  },
  sectors: {
    eyebrow: "Sektörler",
    items: [
      { name: "Otel ve turizm", examples: "Hilton, Ramada, Titanic Deluxe, Sueño Hotels, Mardan Palace, Club Hotel Sera" },
      { name: "Kamu ve belediyeler", examples: "Konya Büyükşehir, Selçuklu Belediyesi, KOSKİ, Vakıflar Genel Müdürlüğü" },
      { name: "Finans", examples: "Ziraat Bankası, Halyk Bank" },
      { name: "Sağlık", examples: "Medipol Sağlık Grubu" },
      { name: "Otomotiv", examples: "Kia Motorcu, Bayraktarlar Merkon, Kosifler Oto" },
      { name: "Kültür ve kongre", examples: "Çatalhöyük Müzesi, Selçuklu Kongre Merkezi, Bayır Diamond" },
    ],
  },
  wall: { eyebrow: "Referanslarımızdan bazıları" },
  cases: {
    eyebrow: "Örnek çalışmalar",
    title: "Aynı form, farklı hikâyeler.",
    items: [
      {
        brand: "Turkish Airlines",
        title: "Seyahatin kokusu, masada.",
        body: "Kırmızı-lacivert gövde grafiği, uçuş rotasını çağrıştıran çizgiler, kurumsal kutu ve 'No.2 Dam' kokusuyla ONIX kişiselleştirme çalışması.",
        images: ["/onix/thy-candle.webp", "/onix/thy-box-open.webp"],
      },
      {
        brand: "ASELSAN",
        title: "Teknolojinin sıcak yüzü.",
        body: "Kurumsal mavinin diyagonal hatlarla seramiğe taşındığı, 'A-01' özel koku serisiyle tamamlanan hediye konsepti.",
        images: ["/onix/aselsan-candle.webp", "/onix/hand-aselsan.webp"],
      },
    ],
    note: "Görseller, markalara uyarlanabilecek tasarım yaklaşımını gösteren kişiselleştirme örnekleridir.",
  },
  cta: { title: "Sıradaki hikâye sizin markanız olsun.", button: "Projenizi konuşalım" },
};

const referencesEn: typeof referencesTr = {
  meta: {
    title: "Clients",
    description: "Siner's scent and gifting projects, from hotels and public institutions to banks and healthcare groups.",
  },
  hero: {
    eyebrow: "Clients",
    title: ["Brands that", "stay in memory."],
    lead: "From hotel chains to municipalities, from banks to healthcare groups; a different scent story for each.",
  },
  sectors: {
    eyebrow: "Sectors",
    items: [
      { name: "Hotels & tourism", examples: "Hilton, Ramada, Titanic Deluxe, Sueño Hotels, Mardan Palace, Club Hotel Sera" },
      { name: "Public sector", examples: "Konya Metropolitan, Selçuklu Municipality, KOSKİ, General Directorate of Foundations" },
      { name: "Finance", examples: "Ziraat Bankası, Halyk Bank" },
      { name: "Healthcare", examples: "Medipol Healthcare Group" },
      { name: "Automotive", examples: "Kia Motorcu, Bayraktarlar Merkon, Kosifler Oto" },
      { name: "Culture & congress", examples: "Çatalhöyük Museum, Selçuklu Congress Center, Bayır Diamond" },
    ],
  },
  wall: { eyebrow: "Some of our references" },
  cases: {
    eyebrow: "Case studies",
    title: "One form, different stories.",
    items: [
      {
        brand: "Turkish Airlines",
        title: "The scent of travel, on the desk.",
        body: "An ONIX personalisation study with red and navy body graphics, lines that recall a flight path, a corporate box and the 'No.2 Dam' scent.",
        images: ["/onix/thy-candle.webp", "/onix/thy-box-open.webp"],
      },
      {
        brand: "ASELSAN",
        title: "The warm side of technology.",
        body: "A gift concept carrying corporate blue onto ceramic in diagonal lines, completed with the 'A-01' signature scent series.",
        images: ["/onix/aselsan-candle.webp", "/onix/hand-aselsan.webp"],
      },
    ],
    note: "These images are personalisation studies showing a design approach that can be adapted to any brand.",
  },
  cta: { title: "Let the next story be your brand's.", button: "Let's talk about your project" },
};

export const corporate: Record<Locale, typeof corporateTr> = { tr: corporateTr, en: corporateEn };
export const references: Record<Locale, typeof referencesTr> = { tr: referencesTr, en: referencesEn };
