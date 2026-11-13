import type { Locale } from "@/lib/i18n";

/*
  The two project tracks, written for a purchasing manager: what scent does for a hotel or a company,
  where it goes (and with which product), and why buying it from Siner is simple.
  Used on the home page (03, with a switch) and on /projeler (one tab per track).
  Draft copy: Siner should confirm the claims and figures before launch (see NOTLAR.md).
*/

export type TrackId = "oteller" | "kurumsal";

type Space = {
  name: string;
  body: string;
  /** products we put there; `path` links to the product page or device anchor */
  fit: { label: string; path: string }[];
};

type Track = {
  tab: string;
  title: string;
  lead: string;
  benefits: { k: string; body: string }[];
  spacesTitle: string;
  spacesLead: string;
  spaces: Space[];
  purchase: { eyebrow: string; title: string; items: { k: string; body: string }[] };
  cta: string;
  more: string;
};

const TOWER = { label: "Siner Tower", path: "cihazlar#tower" };
const MINIMAL = { label: "Minimal Line", path: "cihazlar#minimal" };
const WALL = { label: "Extra-Wall", path: "cihazlar#wall" };
const KUBBE = { label: "Kubbe", path: "kubbe" };
const ONIX = { label: "ONIX", path: "onix" };

const tr: { eyebrow: string; title: string; lead: string; tracks: Record<TrackId, Track> } = {
  eyebrow: "03 · Projelendirme",
  title: "Koku, işinize ne katar?",
  lead: "Otel ya da kurum: alanı inceliyor, kokuyu tasarlıyor, doğru cihazı ve ürünü seçiyor, kurulum ve servisi tek elden yürütüyoruz.",
  tracks: {
    oteller: {
      tab: "Oteller",
      title: "Otelinizde koku ne işe yarar?",
      lead: "Koku, misafirin otelinizi hatırlamasını sağlayan en güçlü duyudur. Lobiden odaya, spadan toplantı salonuna her alan için doğru kokuyu, doğru cihazı ve servisi tek elden sağlıyoruz.",
      benefits: [
        { k: "Misafir sizi hatırlar", body: "Size ait bir imza koku, konaklamayı hafızaya bağlar; misafir otelinizi yıllar sonra bile kokusundan tanır." },
        { k: "İlk izlenim lobide başlar", body: "Kapıdan girildiği an hissedilen ferah ve özenli bir hava, otelin kalitesini daha resepsiyona varmadan anlatır." },
        { k: "Sorunlu alanlar ferahlar", body: "Havuz, spa, fitness, koridor ve ortak alanlarda istenmeyen kokuların öne çıkmadığı dengeli bir ortam." },
        { k: "Yeni bir gelir kalemi", body: "Otelinizin kokusunu taşıyan oda ürünleri, butik satış ve VIP hediyeleriyle koku bir gider değil, gelir olur." },
      ],
      spacesTitle: "Otelinizde nerelerde kullanılır?",
      spacesLead: "Her alanın büyüklüğüne ve kullanımına göre cihaz ve koku planını biz çıkarırız.",
      spaces: [
        { name: "Lobi ve resepsiyon", body: "Otelin imza kokusu ilk burada karşılar. Geniş ve yüksek tavanlı alanlarda tek cihazla dengeli yayılım.", fit: [TOWER] },
        { name: "Koridor ve asansör holleri", body: "Katlar boyunca aynı kokunun sürekliliği; misafir odasına giden yol da otelin bir parçası.", fit: [MINIMAL] },
        { name: "Misafir odaları ve süitler", body: "Odaya özel hafif koku, süitlerde ışığıyla da atmosfer katan seramik buhurdanlık.", fit: [WALL, KUBBE] },
        { name: "Spa, hamam ve havuz", body: "Rahatlatan, nemli alanlarda bile dengeli kalan kokular; spa deneyiminin ayrılmaz bir parçası.", fit: [MINIMAL] },
        { name: "Restoran ve bar", body: "Yemeğin önüne geçmeyen, girişte ve bekleme alanlarında hissedilen hafif bir imza; masada mum ışığı.", fit: [MINIMAL, KUBBE] },
        { name: "Toplantı ve balo salonları", body: "Kongre, düğün ve davetlerde etkinliğe özel koku; büyük hacimlerde güçlü ve eşit yayılım.", fit: [TOWER] },
        { name: "Fitness ve soyunma odaları", body: "Kapalı ve yoğun kullanılan alanlarda gün boyu temiz ve ferah bir his.", fit: [WALL] },
        { name: "Butik, VIP ve hediye", body: "Otelinizin kokusunu taşıyan, logolu, el yapımı ürünler: misafir eve dönerken oteli de yanında götürür.", fit: [ONIX] },
      ],
      purchase: {
        eyebrow: "Satın alma için",
        title: "Tek tedarikçi, tek standart.",
        items: [
          { k: "Üreticiden", body: "Koku, cihaz, seramik ve ambalajı kendi fabrikamızda üretiyoruz; aracı yok, takvim ve kalite bizde." },
          { k: "Hepsi tek elden", body: "Keşif, koku tasarımı, cihaz, kurulum, periyodik bakım ve koku yenileme tek sözleşmede." },
          { k: "Tüm tesislerde aynı", body: "Zincir ve çoklu tesislerde her lokasyonda aynı koku, aynı cihaz ve aynı servis standardı." },
          { k: "Isısız, güvenli sistem", body: "Cihazlarımız kokuyu ısı kullanmadan, mikron boyutunda dağıtır; açık alev yok, yayılım dengeli." },
        ],
      },
      cta: "Oteliniz için koku planı isteyin",
      more: "Otel projelerini inceleyin",
    },
    kurumsal: {
      tab: "Kurumsal",
      title: "Kurumunuzda koku ne işe yarar?",
      lead: "Koku, markanızın görünmeyen ama en uzun akılda kalan yüzüdür. Genel merkezden şubelere, toplantı odasından kurumsal hediyeye kadar kurumunuza ait tek bir koku kimliği kuruyoruz.",
      benefits: [
        { k: "Markanız hatırlanır", body: "Size ait bir kurum kokusu, ofisinize, mağazanıza ya da şubenize gelen herkesin markanızı kokusuyla hatırlamasını sağlar." },
        { k: "Güçlü bir ilk izlenim", body: "Ziyaretçi, müşteri ve iş ortağınız kapıdan girdiği an özenli ve kurumsal bir ortamla karşılaşır." },
        { k: "Ekibiniz için iyi bir ortam", body: "Çalışma alanlarında, toplantı odalarında ve ortak alanlarda gün boyu ferah ve dengeli bir hava." },
        { k: "Hediyeniz her gün hatırlatır", body: "Kurumun kokusunu taşıyan, logolu, el yapımı hediyeler; kullanıldıkça markanızı hatırlatır." },
      ],
      spacesTitle: "Kurumunuzda nerelerde kullanılır?",
      spacesLead: "Alanın büyüklüğüne, kullanımına ve markanızın karakterine göre cihaz, koku ve ürün planını biz çıkarırız.",
      spaces: [
        { name: "Giriş ve resepsiyon", body: "Kurum kokusu ilk burada karşılar. Geniş giriş ve bekleme alanlarında tek cihazla dengeli yayılım.", fit: [TOWER] },
        { name: "Ofis katları", body: "Çalışma alanlarında gün boyu ferah, dikkat dağıtmayan hafif bir koku.", fit: [MINIMAL] },
        { name: "Toplantı odaları ve yönetim katı", body: "Misafir ağırlanan alanlarda kurumun özenini hissettiren bir imza.", fit: [MINIMAL, KUBBE] },
        { name: "Showroom, mağaza ve şubeler", body: "Müşterinin markanızla buluştuğu her noktada aynı koku; her şubede aynı deneyim.", fit: [TOWER, MINIMAL] },
        { name: "Lavabo ve ortak alanlar", body: "Küçük ve yoğun kullanılan alanlarda gün boyu temiz bir his.", fit: [WALL] },
        { name: "Lansman, fuar ve etkinlik", body: "Etkinliğe özel koku ve ziyaretçiye verilecek, markanızı taşıyan hediyeler.", fit: [TOWER, ONIX] },
        { name: "Müşteri ve iş ortağı hediyeleri", body: "Logolu, el yapımı ve kurumun kokusunu taşıyan hediyeler; bir gün değil, her gün hatırlanır.", fit: [ONIX, KUBBE] },
        { name: "Çalışan hediyeleri", body: "Hoş geldin setleri, doğum günü, yıl dönümü ve motivasyon hediyeleri.", fit: [ONIX] },
      ],
      purchase: {
        eyebrow: "Satın alma için",
        title: "Tek tedarikçi, toplu üretim.",
        items: [
          { k: "Üreticiden", body: "Koku, cihaz, seramik ve ambalajı kendi fabrikamızda üretiyoruz; aracı yok, takvim ve kalite bizde." },
          { k: "Toplu sipariş", body: "500, 1.000 ve 2.000 adetlik siparişlerde logo uygulaması, özel ambalaj ve koku seçimi siparişe göre netleşir." },
          { k: "Hepsi tek elden", body: "Kurum kokusu, cihaz, kurulum, periyodik bakım ve kurumsal hediye aynı tedarikçiden." },
          { k: "Tüm şubelerde aynı", body: "Genel merkezde, şubelerde ve mağazalarda aynı koku, aynı cihaz ve aynı servis standardı." },
        ],
      },
      cta: "Kurumunuz için koku planı isteyin",
      more: "Kurumsal projeleri inceleyin",
    },
  },
};

const en: typeof tr = {
  eyebrow: "03 · Projects",
  title: "What can scent do for your business?",
  lead: "Hotel or company: we survey the space, design the scent, choose the right device and product, and run installation and service from a single source.",
  tracks: {
    oteller: {
      tab: "Hotels",
      title: "What does scent do for your hotel?",
      lead: "Scent is the sense that makes guests remember your hotel. From lobby to room, from spa to ballroom, we supply the right scent, the right device and the service for every space, from a single source.",
      benefits: [
        { k: "Guests remember you", body: "A signature scent of your own ties the stay to memory; guests recognise your hotel by its scent years later." },
        { k: "First impressions start in the lobby", body: "A fresh, cared-for air felt at the door tells guests about your quality before they reach reception." },
        { k: "Problem areas feel fresh", body: "A balanced atmosphere in pools, spas, gyms, corridors and shared spaces, where unwanted odours never take over." },
        { k: "A new revenue line", body: "In-room products, boutique retail and VIP gifts carrying your hotel's scent turn scent from a cost into revenue." },
      ],
      spacesTitle: "Where does it go in your hotel?",
      spacesLead: "We draw up the device and scent plan for each space based on its size and use.",
      spaces: [
        { name: "Lobby and reception", body: "Your signature scent greets guests here first. Even coverage of large, high-ceilinged spaces from a single device.", fit: [TOWER] },
        { name: "Corridors and lift halls", body: "The same scent carried floor by floor; the way to the room is part of the hotel too.", fit: [MINIMAL] },
        { name: "Guest rooms and suites", body: "A light scent for the room, and in suites a ceramic burner that adds atmosphere with its light.", fit: [WALL, KUBBE] },
        { name: "Spa, hammam and pool", body: "Relaxing scents that stay balanced even in humid areas; an essential part of the spa experience.", fit: [MINIMAL] },
        { name: "Restaurant and bar", body: "A light signature at the entrance and waiting areas that never competes with the food; candlelight on the table.", fit: [MINIMAL, KUBBE] },
        { name: "Meeting rooms and ballrooms", body: "Event-specific scents for congresses, weddings and galas; strong, even coverage of large volumes.", fit: [TOWER] },
        { name: "Gym and changing rooms", body: "A clean, fresh feeling all day in enclosed, heavily used spaces.", fit: [WALL] },
        { name: "Boutique, VIP and gifts", body: "Handmade, logo-branded products carrying your hotel's scent: guests take the hotel home with them.", fit: [ONIX] },
      ],
      purchase: {
        eyebrow: "For purchasing",
        title: "One supplier, one standard.",
        items: [
          { k: "Direct from the maker", body: "We produce scent, devices, ceramics and packaging in our own factory; no middlemen, and we own the schedule and quality." },
          { k: "All from one source", body: "Survey, scent design, devices, installation, periodic maintenance and refills under a single contract." },
          { k: "Same at every property", body: "For chains and multi-property groups, the same scent, devices and service standard at every location." },
          { k: "Heat-free, safe system", body: "Our devices diffuse scent at micron size without heat; no open flame, even coverage." },
        ],
      },
      cta: "Request a scent plan for your hotel",
      more: "Explore hotel projects",
    },
    kurumsal: {
      tab: "Corporate",
      title: "What does scent do for your company?",
      lead: "Scent is your brand's invisible but most memorable face. From headquarters to branches, from the meeting room to the corporate gift, we build one scent identity that is yours alone.",
      benefits: [
        { k: "Your brand is remembered", body: "A corporate scent of your own lets everyone who visits your office, store or branch remember your brand by its scent." },
        { k: "A strong first impression", body: "Visitors, customers and partners step into a cared-for, professional space the moment they walk in." },
        { k: "A better place for your team", body: "A fresh, balanced air all day in workspaces, meeting rooms and shared areas." },
        { k: "Gifts that remind every day", body: "Handmade, logo-branded gifts carrying your company's scent remind people of your brand every time they are used." },
      ],
      spacesTitle: "Where does it go in your company?",
      spacesLead: "We draw up the device, scent and product plan based on the size and use of each space and the character of your brand.",
      spaces: [
        { name: "Entrance and reception", body: "Your corporate scent greets visitors here first. Even coverage of large entrance and waiting areas from a single device.", fit: [TOWER] },
        { name: "Office floors", body: "A light, fresh scent all day in workspaces that never distracts.", fit: [MINIMAL] },
        { name: "Meeting rooms and executive floor", body: "A signature that shows your care in the rooms where you host guests.", fit: [MINIMAL, KUBBE] },
        { name: "Showrooms, stores and branches", body: "The same scent at every point where customers meet your brand; the same experience in every branch.", fit: [TOWER, MINIMAL] },
        { name: "Restrooms and shared areas", body: "A clean feeling all day in small, heavily used spaces.", fit: [WALL] },
        { name: "Launches, fairs and events", body: "Event-specific scents and gifts for visitors that carry your brand.", fit: [TOWER, ONIX] },
        { name: "Client and partner gifts", body: "Handmade, logo-branded gifts carrying your company's scent; remembered every day, not for a day.", fit: [ONIX, KUBBE] },
        { name: "Employee gifts", body: "Welcome sets, birthday, work-anniversary and motivation gifts.", fit: [ONIX] },
      ],
      purchase: {
        eyebrow: "For purchasing",
        title: "One supplier, volume production.",
        items: [
          { k: "Direct from the maker", body: "We produce scent, devices, ceramics and packaging in our own factory; no middlemen, and we own the schedule and quality." },
          { k: "Volume orders", body: "For orders of 500, 1,000 and 2,000 units, logo application, custom packaging and scent are settled per order." },
          { k: "All from one source", body: "Corporate scent, devices, installation, periodic maintenance and corporate gifts from the same supplier." },
          { k: "Same at every branch", body: "The same scent, devices and service standard at headquarters, branches and stores." },
        ],
      },
      cta: "Request a scent plan for your company",
      more: "Explore corporate projects",
    },
  },
};

export const tracks: Record<Locale, typeof tr> = { tr, en };
export const trackIds: TrackId[] = ["oteller", "kurumsal"];
