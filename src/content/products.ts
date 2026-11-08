import type { Locale } from "@/lib/i18n";

const onixTr = {
  meta: {
    title: "ONIX Kurumsal Buhurdanlık",
    description: "Markanızın kimliğini kokuyla buluşturan, el yapımı seramik kurumsal buhurdanlık.",
  },
  hero: {
    eyebrow: "Kurumsal buhurdanlık · Kurumsal hediye deneyimi",
    name: "ONIX",
    title: "Bir hediyeden fazlası: markanızın hissedilen imzası.",
    body: "Gerçek bir kurumsal hediye verildiği anla sınırlı kalmaz; hayatın içinde kendine yer bulur. ONIX, el yapımı seramik tasarımı ve markaya özel kişiselleştirmesiyle kurumunuzun kimliğini günlük yaşamın doğal bir parçasına dönüştürür.",
  },
  studio: {
    eyebrow: "Tasarım stüdyosu",
    title: "Logonuzu yükleyin. ONIX'i markanızla görün.",
    body: "Sır rengini seçin, desen ekleyin, logonuzu bırakın. Ürünü çevirerek her açıdan inceleyin. Sipariş öncesi onay süreci tam olarak böyle başlar.",
    upload: "Logo yükle",
    uploadHint: "PNG veya SVG, şeffaf arka plan önerilir",
    remove: "Logoyu kaldır",
    glaze: "Sır rengi",
    accent: "Vurgu rengi",
    pattern: "Desen",
    patterns: { none: "Yalın", lines: "Çizgiler", wave: "Dalga", rings: "Halkalar" },
    explode: "Parçalara ayır",
    assemble: "Birleştir",
    drag: "Döndürmek için sürükleyin",
    send: "Bu tasarımla teklif isteyin",
    sendMessage: "Merhaba, ONIX için kendi tasarımımla teklif almak istiyorum.",
  },
  showcase: {
    eyebrow: "Kişiselleştirme örnekleri",
    title: "Her kurumun kendine ait bir koku imzası olabilir.",
    body: "Aynı ürün formu, her marka için farklı bir anlatı ve sunum kazanır. Görseller, ASELSAN ve Turkish Airlines için hazırlanmış kişiselleştirme örnekleridir.",
    items: [
      { title: "Logo ve grafik uygulaması", body: "Seramik gövde üzerinde markanın kurumsal kimliğine uygun görsel uygulama." },
      { title: "Markaya özel koku", body: "Kurumun tercihine göre koku seçimi ve özel koku sunumu." },
      { title: "Ambalaj ve hediye kartı", body: "Kurumsal kimlikle uyumlu kutu, ambalaj ve mesaj kartı seçenekleri." },
    ],
  },
  specs: {
    eyebrow: "Teknik bilgiler",
    rows: [
      ["Gövde", "El yapımı seramik"],
      ["Yükseklik", "8 cm"],
      ["Çap", "7,8 cm"],
      ["Üst hazne", "Alüminyum metal"],
      ["Hazne", "Çıkarılabilir ve yıkanabilir"],
      ["Tepki süresi", "Doğrudan yağ kullanımında yaklaşık 50 saniye"],
    ],
  },
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
    eyebrow: "Kullanım alanları",
    title: "Markanızın temas ettiği herkes için.",
    items: [
      { name: "Mevcut müşteriler", body: "İş ilişkisini güçlendiren ve teşekkür duygusunu taşıyan kurumsal armağan." },
      { name: "Potansiyel müşteriler", body: "Henüz iş birliği başlamadan markayla pozitif bir ilk temas." },
      { name: "Çalışanlar ve ekipler", body: "Hoş geldin, doğum günü, çalışma yıl dönümü ve motivasyon hediyeleri." },
      { name: "İş ortakları", body: "Tedarikçiler, bayiler, distribütörler ve çözüm ortakları için özel hediye." },
      { name: "Etkinlik ve organizasyonlar", body: "Lansman, toplantı, fuar, kongre ve özel davetlerde hatırlanır bir sunum." },
    ],
  },
  order: {
    eyebrow: "Toplu sipariş",
    title: "Adede göre avantajlı fiyatlandırma.",
    body: "500, 1.000 ve 2.000 adetlik kurumsal siparişlerde birim fiyat avantajı sunuyoruz. Logo uygulaması, özel ambalaj ve koku kapsamı sipariş içeriğine göre netleştirilir.",
    steps: [
      { name: "Kişiselleştirme", body: "Logo ve grafik uygulamasının onayı." },
      { name: "Ambalaj", body: "Standart veya markaya özel ambalaj tercihi." },
      { name: "Koku", body: "Koku seçimi ve ürün içeriği." },
      { name: "Teslimat", body: "Üretim takvimi, sevkiyat ve ödeme planı." },
    ],
    cta: "Teklif alın",
    message: "Merhaba, ONIX kurumsal buhurdanlık için toplu sipariş teklifi almak istiyorum.",
  },
};

const onixEn: typeof onixTr = {
  meta: {
    title: "ONIX Corporate Oil Burner",
    description: "A handmade ceramic oil burner that brings your brand identity together with scent.",
  },
  hero: {
    eyebrow: "Corporate oil burner · Corporate gifting",
    name: "ONIX",
    title: "More than a gift: the felt signature of your brand.",
    body: "A real corporate gift does not end the moment it is given; it finds a place in everyday life. With its handmade ceramic body and brand-specific personalisation, ONIX turns your organisation's identity into a natural part of the day.",
  },
  studio: {
    eyebrow: "Design studio",
    title: "Upload your logo. See ONIX in your brand.",
    body: "Choose a glaze, add a pattern, drop in your logo. Turn the piece to see it from every angle. This is exactly how the approval process before an order begins.",
    upload: "Upload logo",
    uploadHint: "PNG or SVG, transparent background recommended",
    remove: "Remove logo",
    glaze: "Glaze",
    accent: "Accent",
    pattern: "Pattern",
    patterns: { none: "Plain", lines: "Lines", wave: "Wave", rings: "Rings" },
    explode: "Take apart",
    assemble: "Assemble",
    drag: "Drag to rotate",
    send: "Request a quote with this design",
    sendMessage: "Hello, I would like a quote for ONIX with my own design.",
  },
  showcase: {
    eyebrow: "Personalisation",
    title: "Every organisation can have a scent signature of its own.",
    body: "The same form takes on a different story for every brand. These images show personalisation studies prepared for ASELSAN and Turkish Airlines.",
    items: [
      { title: "Logo and graphics", body: "Artwork on the ceramic body that follows the brand's corporate identity." },
      { title: "A scent for the brand", body: "Fragrance selection and a dedicated scent presentation." },
      { title: "Packaging and card", body: "Boxes, wrapping and message cards that match the corporate identity." },
    ],
  },
  specs: {
    eyebrow: "Specifications",
    rows: [
      ["Body", "Handmade ceramic"],
      ["Height", "8 cm"],
      ["Diameter", "7.8 cm"],
      ["Top bowl", "Aluminium"],
      ["Bowl", "Removable and washable"],
      ["Response time", "About 50 seconds with pure oil"],
    ],
  },
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
    title: "Better pricing with volume.",
    body: "Corporate orders of 500, 1,000 and 2,000 units come with unit-price advantages. Logo application, custom packaging and scent are finalised according to the order.",
    steps: [
      { name: "Personalisation", body: "Approval of logo and artwork." },
      { name: "Packaging", body: "Standard or brand-specific packaging." },
      { name: "Scent", body: "Fragrance selection and contents." },
      { name: "Delivery", body: "Production schedule, shipping and payment plan." },
    ],
    cta: "Request a quote",
    message: "Hello, I would like a bulk order quote for the ONIX corporate oil burner.",
  },
};

const kubbeTr = {
  meta: {
    title: "Kubbe Seramik Buhurdanlık",
    description: "Sırlı siyah seramik, 50 ml hazne ve 1–1,5 dakikada koku yayılımı.",
  },
  hero: {
    eyebrow: "Seramik buhurdanlık",
    name: "Kubbe",
    title: "Siyahın en sıcak hali.",
    body: "Evlerimiz yalnızca yaşadığımız yer değil, ruhumuzun dinlendiği alanlardır. Kubbe, bulunduğu ortama hoş bir kokunun yanında sıcak ve huzurlu bir atmosfer getirmek için tasarlandı.",
  },
  stats: [
    { value: 50, unit: "ml", label: "Geniş hazne" },
    { value: 1, unit: "dk", label: "Koku yayılımına kadar" },
    { value: 11.5, unit: "cm", label: "Yükseklik" },
    { value: 13, unit: "cm", label: "Alt genişlik" },
  ],
  craft: {
    eyebrow: "Sırlı seramik",
    title: "Isıyı dengeli dağıtan bir gövde.",
    body: "Kalın sırlı seramik yapısı ısıyı dengeli dağıtır. Yağ hazneye damlatıldıktan sonra kısa sürede ısınır; yaklaşık 1–1,5 dakika içinde koku yayılımı başlar ve ortamdaki ağır kokuların nötralize edilmesine yardımcı olur.",
  },
  parts: {
    eyebrow: "İki parça, tek form",
    title: "Kubbe kalkar, ışık görünür.",
    body: "Üst kubbe ve alt gövde birbirinden ayrılır. Tealight'ı yerleştirmek, hazneyi temizlemek ve kokuyu değiştirmek saniyeler alır.",
  },
  ritual: {
    eyebrow: "Kullanım",
    title: "Dört adımlık bir ritüel.",
    steps: [
      "Alt gövdeye bir tealight mum yerleştirin.",
      "Üst hazneye bir miktar su ekleyin.",
      "İçine 3–5 damla buhurdanlık yağı damlatın.",
      "Mumu yakın; koku kısa sürede ortama yayılır.",
    ],
  },
  places: {
    eyebrow: "Kullanım alanları",
    items: ["Salon", "Ofis", "Mutfak", "Banyo", "Spa", "Yoga alanları", "Meditasyon odaları"],
  },
  why: {
    eyebrow: "Neden Kubbe",
    items: [
      "Hızlı koku yayılımı: 1–1,5 dakika",
      "Ortamdaki kötü kokuları nötralize etmeye yardımcı olur",
      "Kalın sırlı seramik gövde",
      "50 ml geniş hazne",
      "Dekoratif ve estetik tasarım",
      "Tüm buhurdanlık yağlarıyla uyumlu",
    ],
  },
  scents: {
    eyebrow: "Koku kütüphanesi",
    title: "Koku kütüphanesinden seçmeler.",
    items: [
      [1, "Aşk-ı Toprak"], [2, "Dam"], [10, "White Soap"], [11, "Clean Room"], [12, "Gizli Bahçe"], [13, "Hibiscus"],
      [14, "Tatlı Çiçekler"], [15, "Kurabiye"], [16, "Special Oud"], [17, "Premium Vanilla"], [18, "Hanımeli"],
      [19, "Zambak"], [20, "Sümbülteber"], [21, "Misk"], [22, "Orchid"], [23, "Itır"], [24, "Sardunya"],
    ] as [number, string][],
    shop: "Kokuları Siner Shop'ta keşfedin",
  },
  cta: { message: "Merhaba, Kubbe seramik buhurdanlık hakkında bilgi almak istiyorum." },
};

const kubbeEn: typeof kubbeTr = {
  meta: {
    title: "Dome Ceramic Oil Burner",
    description: "Glazed black ceramic, 50 ml bowl and scent within 1–1.5 minutes.",
  },
  hero: {
    eyebrow: "Ceramic oil burner",
    name: "Dome",
    title: "Black, at its warmest.",
    body: "Our homes are not just where we live; they are where we rest. Dome was designed to bring not only a pleasant scent but a warm, calm atmosphere to the room it sits in.",
  },
  stats: [
    { value: 50, unit: "ml", label: "Generous bowl" },
    { value: 1, unit: "min", label: "Until scent spreads" },
    { value: 11.5, unit: "cm", label: "Height" },
    { value: 13, unit: "cm", label: "Base width" },
  ],
  craft: {
    eyebrow: "Glazed ceramic",
    title: "A body that spreads heat evenly.",
    body: "The thick glazed ceramic spreads heat evenly. Once oil is dropped into the bowl it warms quickly; the scent begins to spread in about 1–1.5 minutes and helps neutralise heavy odours.",
  },
  parts: {
    eyebrow: "Two pieces, one form",
    title: "Lift the dome, reveal the light.",
    body: "The upper dome lifts off the base. Placing a tealight, cleaning the bowl or changing the scent takes seconds.",
  },
  ritual: {
    eyebrow: "How to use",
    title: "A four-step ritual.",
    steps: [
      "Place a tealight in the base.",
      "Add a little water to the upper bowl.",
      "Drop in 3–5 drops of burner oil.",
      "Light the candle; the scent soon fills the room.",
    ],
  },
  places: {
    eyebrow: "Where to use it",
    items: ["Living room", "Office", "Kitchen", "Bathroom", "Spa", "Yoga studios", "Meditation rooms"],
  },
  why: {
    eyebrow: "Why Dome",
    items: [
      "Fast scent release: 1–1.5 minutes",
      "Helps neutralise unpleasant odours",
      "Thick glazed ceramic body",
      "Generous 50 ml bowl",
      "Decorative, considered design",
      "Works with every burner oil",
    ],
  },
  scents: {
    eyebrow: "Scent library",
    title: "From the scent library.",
    items: kubbeTr.scents.items,
    shop: "Explore the scents at Siner Shop",
  },
  cta: { message: "Hello, I would like to learn more about the Dome ceramic oil burner." },
};

type Device = {
  id: string;
  name: string;
  kind: string;
  body: string;
  image: string;
  scene: string;
  features: string[];
  specs: [string, string][];
};

const devicesTr = {
  meta: {
    title: "Profesyonel Kokulandırma Cihazları",
    description: "Siner Tower, Minimal Line ve Extra-Wall ile otel, mağaza ve ofisler için kurumsal kokulandırma.",
  },
  hero: {
    eyebrow: "Mekân kokulandırma",
    title: "Mekânın görünmeyen mimarisi.",
    body: "2010'dan bu yana koku teknolojileri ve mekân kokulandırma alanında çalışıyoruz. Siner'de koku satılmaz, deneyim yaşatılır.",
  },
  spaces: {
    eyebrow: "Mekânlar",
    items: [
      { name: "Otel lobileri", image: "/devices/tower-lobby.webp" },
      { name: "Klinikler", image: "/devices/tower-clinic.webp" },
      { name: "Ofisler", image: "/devices/wall-office.webp" },
      { name: "Yaşam alanları", image: "/devices/wall-living.webp" },
    ],
  },
  specLabels: { features: "Özellikler", specs: "Teknik" },
  variant: { black: "Siyah", white: "Beyaz" },
  devices: [
    {
      id: "tower",
      name: "Siner Tower",
      kind: "Ayaklı nebülizasyon cihazı",
      body: "Çift sıvı nebülizasyon teknolojisi kullanan profesyonel bir ortam kokulandırma cihazı. Metalik alüminyum alaşımlı gövdesi ve yüksek basınçlı pompasıyla geniş alanlarda dengeli koku dağılımı sağlar.",
      image: "/devices/tower.webp",
      scene: "/devices/tower-scene.webp",
      features: [
        "Wi-Fi, Bluetooth, dokunmatik ekran ve bilgisayar kontrolü",
        "Metalik alüminyum alaşımlı dış gövde",
        "Yüksek debili, yüksek basınçlı hava pompası",
        "Kızılötesi yağ seviye tespiti",
      ],
      specs: [
        ["Model", "SNRTWR"],
        ["Boyut", "106,6 × 106,6 × 550 mm"],
        ["Kapasite", "500 mL"],
        ["Kapsam", "2000 m³"],
        ["Güç", "DC 12V · 12W"],
        ["Ses", "≤ 45 dBA"],
      ],
    },
    {
      id: "minimal",
      name: "Minimal Line",
      kind: "Kompakt koku makinesi",
      body: "Siyah ve beyaz seçenekleriyle minimal ve estetik bir koku makinesi. Resepsiyon, mağaza ve ofis gibi alanlara şıklık katarken kokuyu kesintisiz ve dengeli şekilde yayar.",
      image: "/devices/minimal-black.webp",
      scene: "/devices/minimal-white.webp",
      features: [
        "Siyah ve beyaz renk seçenekleri",
        "Masaüstü ya da duvar kullanımına uygun form",
        "Zamanlama ve yoğunluk ayarı",
        "Sessiz çalışma",
      ],
      specs: [
        ["Renk", "Siyah · Beyaz"],
        ["Kullanım", "Resepsiyon, mağaza, ofis"],
        ["Detaylar", "Projeye göre belirlenir"],
      ],
    },
    {
      id: "wall",
      name: "Extra-Wall",
      kind: "Prize takılan difüzör",
      body: "Duvar prizine doğrudan takılan, soğuk hava difüzyon teknolojisiyle çalışan kompakt difüzör. Isı kullanmadan, sessizce ve homojen biçimde kokulandırır.",
      image: "/devices/wall.webp",
      scene: "/devices/wall-parts.webp",
      features: [
        "Wi-Fi ve Bluetooth ile mobil uygulama kontrolü",
        "Soğuk hava difüzyon teknolojisi",
        "Duvar prizine uyumlu kompakt tasarım",
        "Kişiselleştirilebilir zamanlama ve yoğunluk",
      ],
      specs: [
        ["Model", "SNRWLL"],
        ["Boyut", "118 × 69 × 152 mm"],
        ["Kapasite", "100 mL"],
        ["Kapsam", "200–250 m³"],
        ["Güç", "100–240V · 1,5W"],
        ["Ses", "≤ 30 dBA"],
      ],
    },
  ] as Device[],
  cta: {
    title: "Mekânınızı birlikte değerlendirelim.",
    body: "Alanın büyüklüğü, kullanım yoğunluğu ve gün içindeki ihtiyaca göre doğru cihazı ve kokuyu birlikte planlayalım.",
    message: "Merhaba, mekânım için kokulandırma cihazları hakkında bilgi almak istiyorum.",
  },
};

const devicesEn: typeof devicesTr = {
  meta: {
    title: "Professional Scent Diffusers",
    description: "Corporate scenting for hotels, retail and offices with Siner Tower, Minimal Line and Extra-Wall.",
  },
  hero: {
    eyebrow: "Space scenting",
    title: "The invisible architecture of a space.",
    body: "We have worked in scent technology and space scenting since 2010. At Siner, scent is not sold; it is experienced.",
  },
  spaces: {
    eyebrow: "Spaces",
    items: [
      { name: "Hotel lobbies", image: "/devices/tower-lobby.webp" },
      { name: "Clinics", image: "/devices/tower-clinic.webp" },
      { name: "Offices", image: "/devices/wall-office.webp" },
      { name: "Living spaces", image: "/devices/wall-living.webp" },
    ],
  },
  specLabels: { features: "Features", specs: "Technical" },
  variant: { black: "Black", white: "White" },
  devices: [
    {
      id: "tower",
      name: "Siner Tower",
      kind: "Free-standing nebuliser",
      body: "A professional ambient scenting device using dual-liquid nebulisation. Its aluminium-alloy body and high-pressure pump deliver even scent across large spaces.",
      image: "/devices/tower.webp",
      scene: "/devices/tower-scene.webp",
      features: [
        "Wi-Fi, Bluetooth, touch screen and computer control",
        "Metallic aluminium-alloy housing",
        "High-flow, high-pressure air pump",
        "Infrared oil-level detection",
      ],
      specs: [
        ["Model", "SNRTWR"],
        ["Size", "106.6 × 106.6 × 550 mm"],
        ["Capacity", "500 mL"],
        ["Coverage", "2000 m³"],
        ["Power", "DC 12V · 12W"],
        ["Noise", "≤ 45 dBA"],
      ],
    },
    {
      id: "minimal",
      name: "Minimal Line",
      kind: "Compact scent machine",
      body: "A minimal, considered scent machine in black or white. It adds elegance to receptions, shops and offices while diffusing scent evenly and continuously.",
      image: "/devices/minimal-black.webp",
      scene: "/devices/minimal-white.webp",
      features: [
        "Black and white finishes",
        "Suited to desk or wall placement",
        "Scheduling and intensity control",
        "Quiet operation",
      ],
      specs: [
        ["Finish", "Black · White"],
        ["Use", "Reception, retail, office"],
        ["Details", "Defined per project"],
      ],
    },
    {
      id: "wall",
      name: "Extra-Wall",
      kind: "Plug-in diffuser",
      body: "A compact diffuser that plugs straight into a wall socket and uses cold-air diffusion. It scents quietly and evenly without heat.",
      image: "/devices/wall.webp",
      scene: "/devices/wall-parts.webp",
      features: [
        "Mobile app control via Wi-Fi and Bluetooth",
        "Cold-air diffusion technology",
        "Compact, socket-mounted design",
        "Custom scheduling and intensity",
      ],
      specs: [
        ["Model", "SNRWLL"],
        ["Size", "118 × 69 × 152 mm"],
        ["Capacity", "100 mL"],
        ["Coverage", "200–250 m³"],
        ["Power", "100–240V · 1.5W"],
        ["Noise", "≤ 30 dBA"],
      ],
    },
  ],
  cta: {
    title: "Let's assess your space together.",
    body: "We plan the right device and fragrance with you, based on the size of the space, how it is used and how needs change through the day.",
    message: "Hello, I would like to learn more about scent diffusers for my space.",
  },
};

export const onix: Record<Locale, typeof onixTr> = { tr: onixTr, en: onixEn };
export const kubbe: Record<Locale, typeof kubbeTr> = { tr: kubbeTr, en: kubbeEn };
export const devices: Record<Locale, typeof devicesTr> = { tr: devicesTr, en: devicesEn };
export type OnixContent = typeof onixTr;
