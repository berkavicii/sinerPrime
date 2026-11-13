import type { Locale } from "@/lib/i18n";

/* The projects page: our story, the process, and two tracks (corporate and hotels). */
const projectsTr = {
  meta: {
    title: "Projeler",
    description: "Oteller ve kurumlar için imza koku, alan bazlı koku makinesi planı, kurulum, servis ve kurumsal hediye.",
  },
  hero: {
    eyebrow: "Projeler · Projelendirme",
    title: ["Otelinize ve kurumunuza", "imza bir koku,", "tek elden."],
    lead: "Oteller ve kurumlar için alanı inceliyor, kokuyu tasarlıyor, doğru cihazı ve ürünü seçiyor; kurulum, servis ve kurumsal hediyeyi tek elden yürütüyoruz.",
  },
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
  process: {
    eyebrow: "Nasıl çalışıyoruz",
    steps: [
      { k: "01", title: "Keşif", body: "Mekânı ya da markayı yerinde inceliyor; ihtiyacı, alanı ve hedef kitleyi çıkarıyoruz." },
      { k: "02", title: "Koku tasarımı", body: "Markanızın karakterine uygun imza kokuyu seçiyor ya da sıfırdan geliştiriyoruz." },
      { k: "03", title: "Üretim", body: "Koku, cihaz, seramik obje ve ambalajı kendi fabrikamızda üretiyoruz." },
      { k: "04", title: "Kurulum ve servis", body: "Kurulum, periyodik bakım, koku yenileme ve teknik servis; her lokasyonda aynı standart." },
    ],
  },
  tabs: { oteller: "Otel projeleri", kurumsal: "Kurumsal projeler" },
  corporate: {
    strategy: {
      eyebrow: "Kurumsal hediye stratejisi",
      title: "Hediyeniz markanız hakkında ne anlatıyor?",
      questions: [
        "Verdiğiniz hediye, kullanıldığı ortamda markanızın kimliğini yansıtıyor mu?",
        "Yalnızca mevcut müşterilerinize mi ulaşıyorsunuz, yoksa potansiyel iş ortaklarınızla da anlamlı bir ilk temas kuruyor musunuz?",
        "Hediyeniz özel bir günün ardından günlük yaşamda kullanılmaya devam ediyor mu?",
        "Farklı müşteri gruplarına aynı kalite ve marka bütünlüğünü sunabiliyor musunuz?",
        "Kurumsal hediyeniz yalnızca dağıtılan bir ürün mü, yoksa hatırlanmayı sağlayan bir deneyim mi?",
      ],
    },
    audiences: {
      eyebrow: "Kimler için",
      title: "Markanızın temas ettiği herkes için.",
      items: [
        { name: "Mevcut müşteriler", body: "İş ilişkisini güçlendiren ve teşekkür duygusunu taşıyan kurumsal armağan." },
        { name: "Potansiyel müşteriler", body: "Henüz iş birliği başlamadan markayla pozitif bir ilk temas." },
        { name: "Çalışanlar ve ekipler", body: "Hoş geldin, doğum günü, çalışma yıl dönümü ve motivasyon hediyeleri." },
        { name: "İş ortakları", body: "Tedarikçiler, bayiler, distribütörler ve çözüm ortakları için özel hediye." },
        { name: "Etkinlikler", body: "Lansman, toplantı, fuar, kongre ve özel davetlerde hatırlanır bir sunum." },
      ],
    },
    order: {
      eyebrow: "Toplu sipariş",
      title: "Toplu üretim, tek elden.",
      body: "500, 1.000 ve 2.000 adetlik kurumsal siparişlerde logo uygulaması, özel ambalaj ve koku kapsamı sipariş içeriğine göre birlikte netleştirilir.",
      steps: [
        { name: "Kişiselleştirme", body: "Logo ve grafik uygulamasının onayı." },
        { name: "Ambalaj", body: "Standart veya markaya özel ambalaj tercihi." },
        { name: "Koku", body: "Koku seçimi ve ürün içeriği." },
        { name: "Teslimat", body: "Üretim takvimi, sevkiyat ve ödeme planı." },
      ],
    },
  },
};

const projectsEn: typeof projectsTr = {
  meta: {
    title: "Projects",
    description: "Signature scents for hotels and companies, space-by-space device plans, installation, service and corporate gifts.",
  },
  hero: {
    eyebrow: "Projects · Project design",
    title: ["A signature scent", "for your hotel and company,", "from one source."],
    lead: "For hotels and companies we survey the space, design the scent, choose the right device and product, and run installation, service and corporate gifts from a single source.",
  },
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
  process: {
    eyebrow: "How we work",
    steps: [
      { k: "01", title: "Survey", body: "We study the space or the brand on site and map the need, the area and the audience." },
      { k: "02", title: "Scent design", body: "We choose, or build from scratch, a signature scent that suits your brand." },
      { k: "03", title: "Production", body: "Scent, devices, ceramic objects and packaging are made in our own factory." },
      { k: "04", title: "Installation & service", body: "Installation, maintenance, refills and technical service; one standard at every location." },
    ],
  },
  tabs: { kurumsal: "Corporate projects", oteller: "Hotel projects" },
  corporate: {
    strategy: {
      eyebrow: "Corporate gifting strategy",
      title: "What does your gift say about your brand?",
      questions: [
        "Does your gift reflect your brand identity where it is used?",
        "Do you only reach existing clients, or also make a meaningful first contact with potential partners?",
        "Does your gift stay in daily use after the special day has passed?",
        "Can you offer every client group the same quality and brand consistency?",
        "Is your corporate gift just a product handed out, or an experience that makes you remembered?",
      ],
    },
    audiences: {
      eyebrow: "Who it is for",
      title: "For everyone your brand touches.",
      items: [
        { name: "Existing clients", body: "A corporate gift that strengthens the relationship and carries your thanks." },
        { name: "Prospective clients", body: "A positive first contact before the partnership even begins." },
        { name: "Employees and teams", body: "Welcome, birthday, work-anniversary and motivation gifts." },
        { name: "Business partners", body: "A special gift for suppliers, dealers, distributors and partners." },
        { name: "Events", body: "A memorable presentation at launches, meetings, fairs, congresses and private invitations." },
      ],
    },
    order: {
      eyebrow: "Bulk orders",
      title: "Volume production, one partner.",
      body: "For corporate orders of 500, 1,000 and 2,000 units, logo application, custom packaging and scent are finalised with you according to the order.",
      steps: [
        { name: "Personalisation", body: "Approval of logo and artwork." },
        { name: "Packaging", body: "Standard or brand-specific packaging." },
        { name: "Scent", body: "Fragrance selection and contents." },
        { name: "Delivery", body: "Production schedule, shipping and payment plan." },
      ],
    },
  },
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
  cta: { title: "Let the next story be your brand's.", button: "Let's talk about your project" },
};

export const projects: Record<Locale, typeof projectsTr> = { tr: projectsTr, en: projectsEn };
export const references: Record<Locale, typeof referencesTr> = { tr: referencesTr, en: referencesEn };
