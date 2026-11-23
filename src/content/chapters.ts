/*
  Site content from "sinerprime.com - çatı" (Siner, 23.11.2026), one entry per left-menu chapter.
  Generated from the Word outline, then edited by hand; edit the copy here.
  Sektörel Çözümler shows sector titles only for now; their detail texts come in a later round.
*/

export type Block =
  | { type: "p"; text: string }
  | { type: "pull"; text: string }
  | { type: "h3"; text: string; tagline?: string }
  | { type: "label"; text: string }
  | { type: "list"; items: string[] }
  | { type: "steps"; items: { num: string; title: string; tagline?: string; body: Block[] }[] }
  | { type: "defs"; items: { term: string; body: string }[] }
  | { type: "table"; head: string[]; rows: string[][] }
  | { type: "faq"; items: { q: string; a: string }[] }
  | { type: "cta"; label: string; to: string }
  | { type: "names"; items: string[] };

export type Section = { id: string; num?: string; title: string; kicker?: string; blocks: Block[] };

export type Chapter = {
  slug: string;
  num: string;
  menu: string;
  title: string;
  subtitle?: string;
  intro: Block[];
  sections: Section[];
};

export const chapters: Chapter[] = [
  {
    "slug": "felsefemiz",
    "num": "01",
    "menu": "Felsefemiz",
    "title": "Bizim felsefemiz",
    "intro": [
      {
        "type": "p",
        "text": "Buraya çok şey yazmak isterdik…"
      },
      {
        "type": "p",
        "text": "Belki yıllar içinde edindiğimiz deneyimlerden, birlikte çalıştığımız insanlardan, tamamladığımız projelerden, tasarladığımız ürünlerden söz edebilirdik. Ancak biz kendimizi yalnızca geçmişte yaptıklarımızla anlatmayı tercih etmiyoruz."
      },
      {
        "type": "p",
        "text": "Çünkü bizi asıl heyecanlandıran, henüz yapmadıklarımız."
      },
      {
        "type": "p",
        "text": "Bazen uzun bir sohbetin ortasında, bir kahvenin ya da bir bardak çayın eşliğinde başlar her şey. Bazen bir masanın üzerinde biriken notlarda, bir malzemenin dokusunda, bir mekânda yapılan uzun yürüyüşlerde… Bazen de herkesin geçtiği bir yerde, kimsenin dönüp bakmadığı bir ayrıntıda."
      },
      {
        "type": "p",
        "text": "Kimi zaman bir fikrin peşinden gitmek için gece yeniden uyanır, bir mekânı başka bir gözle inceleriz. Dinleriz, okuruz, araştırırız, düşünürüz. Sorar, tartışır, yeniden deneriz. Çünkü iyi bir projenin yalnızca bir fikirden değil; meraktan, gözlemden, samimiyetten, bilgiden, arzudan ve birlikte üretme heyecanından doğduğuna inanırız."
      },
      {
        "type": "p",
        "text": "Biz her şeyi bildiğimizi iddia etmiyoruz. Koku ve tasarımın sınırlarını keşfetmenin bitmeyen bir yolculuk olduğuna inanıyoruz. Öğrenmeyi, yeni şeyler denemeyi, farklı disiplinleri bir araya getirmeyi ve her projede yeniden heyecan duymayı seviyoruz."
      },
      {
        "type": "p",
        "text": "Siner Prime'da koku, tasarım ve deneyimi birbirinden ayrı düşünmüyoruz. Bir kokunun bir mekânın hafızasına dönüşmesini, bir nesnenin yalnızca kullanılmakla kalmayıp bir hikâye taşımasını, bir fikrin doğru malzeme ve doğru insanlarla gerçek bir deneyime dönüşmesini önemsiyoruz."
      },
      {
        "type": "p",
        "text": "Bu nedenle yalnızca ürün veya hizmet sunmak için değil; birlikte düşünmek, yeni fikirler geliştirmek, tasarlamak ve üretmek için buradayız."
      },
      {
        "type": "p",
        "text": "Referanslarımız var, merak etmeyin. Ancak bizi yalnızca daha önce yaptıklarımız üzerinden değerlendirmenizi istemiyoruz. Asıl anlatmak istediğimiz, birlikte neler yapabileceğimiz ve henüz kimsenin denemediği hangi fikirleri hayata geçirebileceğimiz."
      },
      {
        "type": "p",
        "text": "Bizim için en değerli iş birlikleri; merak eden, okuyan, araştıran, soru soran, dinleyen ve birlikte düşünmekten keyif alan insanlarla kurulur. Çünkü inanıyoruz ki öğrenmeye açık insanlarla kurulan ilişkilerden güzel fikirler, güzel fikirlerden de değerli işler doğar."
      },
      {
        "type": "p",
        "text": "Eğer bu satırları okuyorsanız, belki de henüz birlikte gerçekleştirmediğimiz bir projenin ilk adımındayız."
      },
      {
        "type": "pull",
        "text": "Daha fazla ürün değil, daha fazla değer üretmek için…"
      }
    ],
    "sections": []
  },
  {
    "slug": "koku",
    "num": "02",
    "menu": "Koku",
    "title": "Koku",
    "subtitle": "Görünmeyen Bir Dünyanın Hafızası",
    "intro": [
      {
        "type": "p",
        "text": "Bazı şeyleri gözlerimizle görür, bazılarını dokunarak tanır; bazılarını ise yalnızca hissederiz."
      },
      {
        "type": "p",
        "text": "Koku, görünmeyen ama iz bırakabilen o dünyaya aittir."
      },
      {
        "type": "p",
        "text": "Bir an düşünün…"
      },
      {
        "type": "p",
        "text": "Yıllar önce bulunduğunuz bir evin kokusu, yağmurdan sonra ıslanan toprağın tanıdık kokusu ya da bir zamanlar hayatınızda önemli yeri olan birinin kullandığı parfüm… Hiç beklemediğiniz bir anda bu kokulardan biriyle karşılaşırsınız. Bir görüntü, bir ses, bir duygu ve belki de uzun zamandır hatırlamadığınız bir anı yeniden belirir."
      },
      {
        "type": "p",
        "text": "Bazen tek bir nefes, bizi hiç beklemediğimiz bir zamana götürür."
      },
      {
        "type": "p",
        "text": "Koku, yalnızca burnumuzla algıladığımız bir duyudan ibaret değildir. İnsanların çevrelerini tanıma, duygularla ilişki kurma ve yaşadıkları deneyimleri hatırlama biçimlerinin de bir parçasıdır. Görünmez; ama kimi zaman hafızamızda güçlü bir yer edinir."
      },
      {
        "type": "p",
        "text": "Biz kokuya, tam da bu nedenle, yalnızca güzel kokan bir şey olarak bakmıyoruz. Onu doğanın, bilimin, kültürün, hafızanın ve tasarımın kesiştiği geniş bir dünya olarak görüyoruz."
      }
    ],
    "sections": [
      {
        "id": "kokunun-hikayesi-insanliktan-daha-eski",
        "title": "Kokunun hikâyesi insanlıktan daha eski",
        "blocks": [
          {
            "type": "p",
            "text": "Koku, insanın icat ettiği bir şey değil. İnsanlık ortaya çıkmadan çok önce doğanın diliydi."
          },
          {
            "type": "p",
            "text": "Toprak, bitkiler, çiçekler, ağaç kabukları, reçineler, denizler ve canlılar… Doğa, kendine özgü kokularıyla milyonlarca yıldır varlığını sürdürüyor. İnsan ise zamanla bu kokuları tanımayı, onlardan yararlanmayı, biriktirmeyi ve dönüştürmeyi öğrendi."
          },
          {
            "type": "p",
            "text": "İlk insanlar için koku, çevreyi anlamanın ve hayatta kalmanın önemli yollarından biriydi. Zaman içinde güzel kokulu bitkiler, aromatik yağlar ve reçineler günlük yaşamın, bakımın, inancın, ticaretin ve törenlerin parçası hâline geldi."
          },
          {
            "type": "p",
            "text": "Mezopotamya ve Mısır'dan Akdeniz uygarlıklarına uzanan parfüm kültürü, binlerce yıllık bir geçmişe sahip. Kıbrıs'taki Pyrgos-Mavroraki yerleşiminde ortaya çıkarılan ve yaklaşık MÖ 1850'ye tarihlenen üretim alanı, eski çağlarda kokulu ürünlerin yalnızca kişisel kullanım için değil, organize üretim ve zanaat kapsamında da ele alındığını gösteren önemli bulgulardan biri."
          },
          {
            "type": "p",
            "text": "Antik dünyada kokular; tapınaklarda, gündelik bakımda, törenlerde ve ticarette yer buldu. Bitkilerden, çiçeklerden, baharatlardan ve reçinelerden elde edilen kokulu maddeler uzak coğrafyalar arasında taşındı. Her toplum, yaşadığı coğrafyanın bitkileri, gelenekleri ve inançlarıyla kendine özgü bir koku kültürü geliştirdi."
          },
          {
            "type": "p",
            "text": "Yüzyıllar boyunca yöntemler değişti. Bitkilerden özler elde edildi, damıtma teknikleri gelişti, parfümeri bir zanaatten bilim ve tasarım disiplinleriyle iç içe geçmiş bir alana dönüştü."
          },
          {
            "type": "p",
            "text": "Koku, insanlık tarihi boyunca yalnızca güzel kokmanın değil; yaşama, inanma, hatırlama ve kendini ifade etmenin de yollarından biri oldu."
          }
        ]
      },
      {
        "id": "bir-koku-nasil-olur-da-bir-aniyi-yeniden-canland",
        "title": "Bir koku, nasıl olur da bir anıyı yeniden canlandırır?",
        "blocks": [
          {
            "type": "p",
            "text": "Bir kokunun bizi yıllar öncesine götürmesi tesadüf değildir."
          },
          {
            "type": "p",
            "text": "Koku alma sistemi, beynin duygu ve hafızayla ilişkili bölgeleriyle yakın bağlantılar kurar. Kokuya ait bilgiler, koku işlemeyle ilişkili beyin bölgelerinden amigdala ve hipokampus gibi duygu ve hafızada rol oynayan yapılara ulaşır. Bu yakın ilişki, bazı kokuların kişisel anıları ve onlara eşlik eden duyguları canlı biçimde hatırlatabilmesine katkıda bulunur."
          },
          {
            "type": "p",
            "text": "Bu deneyim, edebiyattan gelen bir isimle Proust Etkisi olarak anılır."
          },
          {
            "type": "p",
            "text": "Fransız yazar Marcel Proust'un eserinde, bir kurabiyenin tadı ve kokusu anlatıcıyı çocukluğuna götürür. Bu edebî sahne, daha sonra koku ve otobiyografik hafıza arasındaki ilişkiyi inceleyen bilimsel araştırmalara da ilham vermiştir."
          },
          {
            "type": "p",
            "text": "Bugün araştırmalar, kokuların bazı koşullarda geçmişe ait kişisel anıları güçlü duygularla birlikte hatırlatabildiğini gösteriyor. Elbette her koku herkeste aynı etkiyi yaratmaz. Çünkü koku algısı; kişisel deneyimlerimiz, alışkanlıklarımız, yaşadığımız çevre ve bireysel farklılıklarımızla şekillenir."
          },
          {
            "type": "p",
            "text": "Bir hastane kokusu birine zor bir dönemi, taze ekmek kokusu bir başkasına çocukluğundaki mutfağı hatırlatabilir. Bir çiçek, hiç unutulmayan bir buluşmanın; bir parfüm, hayatımızda iz bırakmış bir insanın hatırasına dönüşebilir."
          },
          {
            "type": "p",
            "text": "Bazen bir kokuyu tanımamız için nereden geldiğini bilmemiz gerekmez. Bize neyi hatırlattığını hissetmemiz yeterlidir."
          }
        ]
      },
      {
        "id": "her-kokunun-bir-dili-var",
        "title": "Her kokunun bir dili var",
        "blocks": [
          {
            "type": "p",
            "text": "Kokuların dünyası, ilk anda düşündüğümüzden çok daha zengindir."
          },
          {
            "type": "p",
            "text": "Çiçeksi, odunsu, turunçgil, baharatlı, aromatik, reçineli, miskli, yeşil, deniz esintili… Her koku ailesi farklı çağrışımlar ve karakterler taşır. Bir kokunun kimliği ise çoğu zaman tek bir bileşenden değil, bir araya gelen pek çok kokusal unsurun oluşturduğu bütünden doğar."
          },
          {
            "type": "p",
            "text": "Parfümeri dilinde üst, orta ve alt notalar olarak tanımlanan yapı, kokunun zaman içindeki gelişimini anlamamıza yardımcı olur. İlk anda algılanan izlenim, zamanla değişebilir; daha sonra belirginleşen notalar kokunun karakterini derinleştirebilir."
          },
          {
            "type": "p",
            "text": "Bu kompozisyonlar kimi zaman doğadan elde edilen ham maddelerle, kimi zaman modern kimyanın geliştirdiği aromatik bileşenlerle oluşturulur. Doğal olan her zaman tek başına daha iyi, sentetik olan da daha az değerli değildir. Önemli olan; bileşenlerin niteliği, doğru kullanımı, uyumu, güvenliği ve ortaya çıkan kompozisyonun amacıdır."
          },
          {
            "type": "p",
            "text": "Bir parfümü, bir mekân kokusunu ya da özel bir koleksiyonu anlamak için yalnızca hangi malzemelerin kullanıldığına değil, bu malzemelerin nasıl bir araya getirildiğine de bakmak gerekir."
          },
          {
            "type": "pull",
            "text": "Çünkü koku, tek tek notaların toplamından daha fazlasıdır."
          }
        ]
      },
      {
        "id": "koku-ve-mekan-bir-yeri-nasil-hatirlariz",
        "title": "Koku ve mekân: bir yeri nasıl hatırlarız?",
        "blocks": [
          {
            "type": "p",
            "text": "Bir mekânı düşündüğümüzde aklımıza yalnızca duvarları, mobilyaları veya mimarisi gelmez."
          },
          {
            "type": "p",
            "text": "Işık, ses, sıcaklık, dokular, insanlar ve orada yaşadığımız anlar… Bütün bunlar bir araya gelerek mekân deneyimini oluşturur. Koku da bu bütünün bir parçasıdır."
          },
          {
            "type": "p",
            "text": "Bir otelin lobisinde, bir müzede, bir mağazada veya bir çalışma alanında duyduğumuz koku; mekânın atmosferini algılama biçimimize katkıda bulunabilir. Bazen farkında bile olmadan bir yerle ilişkilendirdiğimiz duyusal izlerden biri hâline gelir."
          },
          {
            "type": "p",
            "text": "Ancak her mekânın ihtiyacı aynı değildir."
          },
          {
            "type": "p",
            "text": "Bir müzenin atmosferiyle bir otelin karşılaması, bir mağazanın enerjisiyle bir sağlık ve bakım alanının beklentileri birbirinden farklıdır. Mekânın mimarisi, kullanım amacı, ziyaretçi profili, havalandırması ve yaratılmak istenen duygu birlikte değerlendirilmelidir."
          },
          {
            "type": "p",
            "text": "Bu nedenle koku, mekâna sonradan eklenen rastgele bir ayrıntı olarak görülmemelidir. Doğru düşünüldüğünde mimari, iç mekân tasarımı ve kullanıcı deneyimiyle birlikte ele alınabilecek bir tasarım unsurudur."
          },
          {
            "type": "pull",
            "text": "İyi düşünülmüş bir koku, mekânın önüne geçmek zorunda değildir. Onun karakterini tamamlayabilir."
          }
        ]
      },
      {
        "id": "markalarin-gorunmeyen-imzasi",
        "title": "Markaların görünmeyen imzası",
        "blocks": [
          {
            "type": "p",
            "text": "Bir markanın logosu, renkleri, yazı karakteri, sesi ve görsel dili vardır. Bunların her biri markanın kendini ifade etme biçimini oluşturur."
          },
          {
            "type": "p",
            "text": "Peki bir markanın kokusu olabilir mi?"
          },
          {
            "type": "p",
            "text": "Bir otel, misafirlerinin hafızasında nasıl yer etmek ister? Bir mağaza, ziyaretçilerine nasıl bir atmosfer sunmak ister? Bir marka, ürünlerinin ve mekânlarının ötesinde nasıl bir duyusal dünya oluşturabilir?"
          },
          {
            "type": "p",
            "text": "İşte duyusal marka kimliği bu sorularla başlar."
          },
          {
            "type": "p",
            "text": "Markaya özel geliştirilen bir koku, görsel kimliğin yerine geçmez; onu tamamlayan duyusal unsurlardan biri olabilir. Tutarlı ve doğru uygulandığında mekânla marka arasında hatırlanabilir bir ilişki kurulmasına katkı sağlayabilir."
          },
          {
            "type": "p",
            "text": "Burada amaç, her yerde yoğun bir koku kullanmak değildir. Amaç, markanın karakterini anlayarak ona uygun bir koku dili geliştirmektir."
          },
          {
            "type": "p",
            "text": "Çünkü her marka aynı şeyi söylemez. Her mekân aynı duyguyu yaşatmak istemez. Dolayısıyla her projeye aynı kokuyla yaklaşmak da doğru değildir."
          },
          {
            "type": "pull",
            "text": "Bir markanın görünmeyen imzası, önce onun kim olduğunu anlamakla başlar."
          }
        ]
      },
      {
        "id": "koku-bir-luks-degil-dusunulmus-bir-deneyim-olabi",
        "title": "Koku bir lüks değil, düşünülmüş bir deneyim olabilir",
        "blocks": [
          {
            "type": "p",
            "text": "Koku uzun yıllar boyunca çoğunlukla parfüm, kişisel bakım ve lüks tüketimle birlikte düşünüldü. Oysa bugün kişisel kullanımdan mekânsal deneyime, özel koleksiyonlardan kurumsal uygulamalara kadar uzanan geniş bir alanda değerlendiriliyor."
          },
          {
            "type": "p",
            "text": "Teknolojinin gelişmesiyle birlikte kokunun hazırlanması kadar, nasıl ve ne zaman uygulanacağı da önem kazandı. Soğuk hava difüzyonu, bağımsız koku cihazları, havalandırma sistemleriyle entegre çözümler ve akıllı kontrol teknolojileri, profesyonel kokulandırma uygulamalarının farklı ihtiyaçlara göre şekillenmesini sağlıyor."
          },
          {
            "type": "p",
            "text": "Ancak teknoloji tek başına iyi bir sonuç için yeterli değil."
          },
          {
            "type": "p",
            "text": "Kokunun yoğunluğu, yayılım biçimi, mekânın hacmi, hava akışı, kullanım süresi ve kullanıcıların hassasiyetleri birlikte değerlendirilmelidir. Güzel bir koku yanlış uygulandığında rahatsız edici olabilir. Doğru seçilmiş bir koku bile yanlış yoğunlukta veya yanlış yerde kullanıldığında amacından uzaklaşabilir."
          },
          {
            "type": "p",
            "text": "Bu nedenle başarılı bir kokulandırma yaklaşımı; estetik, teknik bilgi, doğru ürün seçimi, güvenli kullanım ve sürdürülebilir performansın birlikte düşünülmesini gerektirir."
          }
        ]
      },
      {
        "id": "siner-prime-kokuya-bakisimiz",
        "title": "Siner Prime: kokuya bakışımız",
        "blocks": [
          {
            "type": "p",
            "text": "Bizim için koku, hazır bir ürünü seçip bir mekâna uygulamaktan ibaret değil."
          },
          {
            "type": "p",
            "text": "Her şey önce bir soruyla başlar: Nasıl bir deneyim oluşturmak istiyoruz?"
          },
          {
            "type": "p",
            "text": "Bazen bir otelin karakterini anlamaya çalışırız. Bazen bir markanın yıllardır anlatmak istediği duyguyu keşfederiz. Bazen de henüz bir karşılığı olmayan fikrin peşine düşeriz."
          },
          {
            "type": "p",
            "text": "Dinler, gözlemler, araştırır ve farklı ihtimalleri değerlendiririz. Koku notalarını, malzemeleri, mekânın özelliklerini, teknolojiyi ve kullanım koşullarını bir arada düşünürüz. Gerektiğinde yeniden başlar, farklı kompozisyonlar dener ve projeye en uygun yaklaşımı ararız."
          },
          {
            "type": "p",
            "text": "Koku bilimi, parfümeri, tasarım, malzeme ve teknoloji arasında kurulan bu ilişkiyi önemsiyoruz. Çünkü bir fikrin değer kazanması, yalnızca güzel görünmesine veya güzel kokmasına değil; doğru amaca hizmet etmesine, uygulanabilir olmasına ve zaman içinde performansını sürdürebilmesine bağlıdır."
          },
          {
            "type": "p",
            "text": "Her şeyi bildiğimizi iddia etmiyoruz. Koku dünyasının keşfedilecek çok fazla yönü olduğuna inanıyoruz. Öğrenmeyi, araştırmayı, yeni şeyler denemeyi ve farklı disiplinlerden insanlarla birlikte üretmeyi seviyoruz."
          },
          {
            "type": "pull",
            "text": "Siner Prime olarak kokuya yaklaşımımızın merkezinde de bu merak var."
          }
        ]
      },
      {
        "id": "her-mekanin-bir-hikayesi-her-hikayenin-bir-kokus",
        "title": "Her mekânın bir hikâyesi, her hikâyenin bir kokusu olabilir",
        "blocks": [
          {
            "type": "p",
            "text": "Bir gün, yıllar önce ziyaret ettiğiniz bir otelin önünden geçerken tanıdık bir koku duyabilirsiniz. Belki bir tatil, belki özel bir buluşma, belki de hayatınızın güzel bir dönemi yeniden aklınıza gelir."
          },
          {
            "type": "p",
            "text": "O mekân değişmiş olabilir. Dekorasyonu yenilenmiş, duvarları boyanmış, insanlar ayrılmış olabilir. Ama o kokuyla ilişkilendirdiğiniz duygu yeniden canlanabilir."
          },
          {
            "type": "p",
            "text": "Biz kokunun bu ihtimalini seviyoruz."
          },
          {
            "type": "p",
            "text": "Çünkü tasarım yalnızca gözle gördüklerimizden ibaret değil. Bazen bir mekânı farklı kılan, bir markayı hatırlatan veya bir deneyimi tamamlayan şey, ilk bakışta görünmeyen ayrıntılardır."
          },
          {
            "type": "p",
            "text": "Belki de bu yüzden kokuya her defasında yeniden bakmak, yeniden düşünmek ve yeniden keşfetmek gerekiyor."
          },
          {
            "type": "pull",
            "text": "Bazı hikâyeler anlatılmaz. Koklanır."
          }
        ]
      }
    ]
  },
  {
    "slug": "koku-tasarimi",
    "num": "03",
    "menu": "Koku Tasarımı",
    "title": "Koku tasarımı",
    "subtitle": "Her Mekânın Bir İhtiyacı, Her Kokunun Bir Anlamı Vardır.",
    "intro": [
      {
        "type": "p",
        "text": "Bir mekâna koku tasarlamak, güzel kokan bir esans seçmekle başlamaz. O mekânı, insanlarını ve anlatmak istediği hikâyeyi anlamakla başlar."
      },
      {
        "type": "p",
        "text": "Bir otelin lobisi, bir müzenin sergi alanı, bir mağazanın girişi veya bir kurumun çalışma ortamı…"
      },
      {
        "type": "p",
        "text": "Her mekânın kendine özgü bir karakteri, her kurumun farklı bir kimliği, her ziyaretçinin farklı bir beklentisi vardır."
      },
      {
        "type": "p",
        "text": "Peki bütün bu farklılıkları tek bir kokuyla ifade etmek mümkün müdür?"
      },
      {
        "type": "p",
        "text": "Bizce iyi bir koku tasarımı, hazır bir çözümü her mekâna uygulamak değil; doğru soruları sorarak o projeye ait çözümü aramaktır."
      },
      {
        "type": "p",
        "text": "Siner Prime'da koku tasarımını yalnızca parfümeri veya kokulandırma alanıyla sınırlı görmüyoruz. Mimariyi, tasarımı, malzemeyi, kültürü, teknolojiyi ve insan deneyimini bir araya getiren çok yönlü bir çalışma alanı olarak ele alıyoruz."
      },
      {
        "type": "p",
        "text": "Biz bir mekâna yalnızca koku uygulamıyoruz. Onun karakterini anlayarak kendisine ait bir koku dili geliştirmeye çalışıyoruz."
      }
    ],
    "sections": [
      {
        "id": "once-dinleriz-gozlemleriz-anlamaya-calisiriz",
        "title": "Önce dinleriz. Gözlemleriz. Anlamaya çalışırız",
        "blocks": [
          {
            "type": "p",
            "text": "Her proje bir görüşmeyle başlayabilir. Bazen uzun bir sohbet, bazen yerinde yapılan bir inceleme, bazen de henüz kimsenin fark etmediği küçük bir ayrıntı…"
          },
          {
            "type": "p",
            "text": "Kurumun yöneticilerini ve ilgili ekiplerini dinler, beklentileri anlamaya çalışırız. Mekânın mimarisini, kullanım biçimini, ziyaretçi profilini, bulunduğu coğrafyayı ve yaratılmak istenen atmosferi inceleriz."
          },
          {
            "type": "p",
            "text": "Çünkü bir yöneticinin sevdiği koku ile kurumun ihtiyaç duyduğu koku her zaman aynı olmayabilir."
          },
          {
            "type": "p",
            "text": "Örneğin bir hastanede öncelik, dikkat çekici bir koku oluşturmak değildir. Kullanıcıların hassasiyetlerini ve sağlık kuruluşunun işleyişini dikkate almak gerekir. Bazı alanlarda hafif ve kontrollü bir uygulama değerlendirilebilirken, bazı alanlarda hiç koku kullanmamak en doğru tercih olabilir."
          },
          {
            "type": "p",
            "text": "Bir otelde ise yaklaşım farklıdır. Şehir oteli, sahil resortu, butik otel veya tarihi bir konaklama tesisi… Her birinin mimarisi, misafir profili ve yaşatmak istediği deneyim farklıdır."
          },
          {
            "type": "p",
            "text": "Bizim için önemli olan, önce bu farklılıkları görebilmektir."
          },
          {
            "type": "pull",
            "text": "Çünkü doğru koku, yalnızca beğenilen değil; bulunduğu yerle anlamlı bir ilişki kurabilen kokudur."
          }
        ]
      },
      {
        "id": "bir-kokudan-once-bir-fikir-gelistiririz",
        "title": "Bir kokudan önce bir fikir geliştiririz",
        "blocks": [
          {
            "type": "p",
            "text": "Bazen bir projenin başlangıç noktası bir koku notası değildir."
          },
          {
            "type": "p",
            "text": "Bir coğrafyanın bitki örtüsü, tarihî bir yapının dokusu, bir markanın hikâyesi, kullanılan malzemelerin karakteri veya bir mekânda yaratılmak istenen duygu olabilir."
          },
          {
            "type": "p",
            "text": "Bu ayrıntılardan hareketle farklı fikirler geliştirir, koku tasarımının yaratıcı yönünü araştırırız."
          },
          {
            "type": "p",
            "text": "Bir mekânın zarafetini nasıl ifade edebiliriz? Bir markanın karakterini hangi koku ailesiyle anlatabiliriz? Bir coğrafyanın kendine özgü izlerini çağdaş bir koku kompozisyonuna nasıl dönüştürebiliriz?"
          },
          {
            "type": "p",
            "text": "Bazen ilk fikir doğru sonuca götürür. Bazen de farklı denemeler yapmamız, yeniden düşünmemiz gerekir."
          },
          {
            "type": "pull",
            "text": "Biz bu süreci bir formül seçmekten çok, bir hikâyeyi duyularla ifade edebilme arayışı olarak görüyoruz."
          }
        ]
      },
      {
        "id": "koku-tasarimi-nasil-gelisir",
        "title": "Koku tasarımı nasıl gelişir?",
        "blocks": [
          {
            "type": "p",
            "text": "Her projenin kendine özgü koşulları vardır. Bu nedenle bütün projeleri aynı kalıba sokmuyoruz. Ancak çalışmalarımızda izlediğimiz temel bir yaklaşım bulunuyor."
          },
          {
            "type": "steps",
            "items": [
              {
                "num": "01",
                "title": "İhtiyacı ve Projeyi Tanımak",
                "body": [
                  {
                    "type": "p",
                    "text": "Kurumun kimliğini, hedef kitlesini, hizmet anlayışını ve beklentilerini anlamaya çalışırız."
                  },
                  {
                    "type": "pull",
                    "text": "Projenin amacı, uygulama alanları, ziyaretçi profili ve yaratılmak istenen deneyim hakkında bilgi toplarız."
                  }
                ]
              },
              {
                "num": "02",
                "title": "Mekânı ve Çevresini Keşfetmek",
                "body": [
                  {
                    "type": "p",
                    "text": "Uygulama alanını yerinde inceleriz."
                  },
                  {
                    "type": "p",
                    "text": "Mimari yapı, alanın hacmi, kullanım yoğunluğu, hava sirkülasyonu, havalandırma sistemi, malzemeler ve teknik altyapı gibi unsurları değerlendiririz."
                  },
                  {
                    "type": "p",
                    "text": "Gerektiğinde mekânın bulunduğu coğrafyayı, kültürel özelliklerini ve çevresel referanslarını da tasarım sürecine dahil ederiz."
                  }
                ]
              },
              {
                "num": "03",
                "title": "Konsept ve Koku Kimliği Oluşturmak",
                "body": [
                  {
                    "type": "p",
                    "text": "Topladığımız bilgilerden hareketle projenin yaratıcı yönünü belirleriz."
                  },
                  {
                    "type": "p",
                    "text": "Koku ailelerini, nota yapılarını, doğal ve sentetik bileşenleri, kompozisyonun karakterini ve kullanım amacını birlikte değerlendiririz."
                  },
                  {
                    "type": "p",
                    "text": "Amacımız yalnızca hoş bir koku oluşturmak değil; markanın veya mekânın karakterini ifade edebilecek özgün bir koku yaklaşımı geliştirmektir."
                  }
                ]
              },
              {
                "num": "04",
                "title": "Formülasyon, Numune ve Prototipleme",
                "body": [
                  {
                    "type": "p",
                    "text": "Geliştirilen fikirleri numunelere ve formülasyonlara dönüştürürüz."
                  },
                  {
                    "type": "p",
                    "text": "Farklı kompozisyonları değerlendirir, geri bildirimleri alır ve gerekli düzenlemeleri yaparız."
                  },
                  {
                    "type": "p",
                    "text": "Çünkü bir kokunun numune ortamındaki algısıyla gerçek bir mekândaki davranışı aynı olmayabilir. Bu nedenle tasarımın uygulama koşullarında da değerlendirilmesini önemseriz."
                  }
                ]
              },
              {
                "num": "05",
                "title": "Farklı Ürünlere ve Koleksiyonlara Uyarlamak",
                "body": [
                  {
                    "type": "p",
                    "text": "Bir kurum için geliştirilen koku karakterinin yalnızca tek bir uygulamada kalmasını istemeyiz."
                  },
                  {
                    "type": "p",
                    "text": "Projenin kapsamına göre bu karakteri farklı ürün kategorilerine uyarlayabiliriz:"
                  },
                  {
                    "type": "list",
                    "items": [
                      "Profesyonel mekân kokulandırma esansları",
                      "Reed diffuser ve ortam kokuları",
                      "Oda ve tekstil spreyleri",
                      "Mum ve özel koku koleksiyonları",
                      "Araç kokuları",
                      "Kolonya ve kişisel parfümler",
                      "Kurumsal hediye ve özel tasarım koleksiyonları"
                    ]
                  },
                  {
                    "type": "p",
                    "text": "Her ürünün kullanım amacı ve formülasyon gereklilikleri farklıdır. Bu nedenle ana koku karakterini korurken, her ürün için uygun formülasyon ve uygulama koşullarını ayrıca değerlendiririz."
                  },
                  {
                    "type": "p",
                    "text": "Böylece bir otelin lobisinde başlayan koku hikâyesi, misafir odasında, özel bir parfümde veya kurumsal hediye koleksiyonunda farklı biçimlerde devam edebilir."
                  }
                ]
              },
              {
                "num": "06",
                "title": "Teknoloji ve Uygulama Tasarımı",
                "body": [
                  {
                    "type": "p",
                    "text": "Kokunun karakteri kadar, mekâna nasıl uygulanacağı da önemlidir."
                  },
                  {
                    "type": "p",
                    "text": "Alan büyüklüğünü, hava akışını, kullanım yoğunluğunu ve teknik altyapıyı değerlendirerek uygun kokulandırma sistemini belirleriz."
                  },
                  {
                    "type": "p",
                    "text": "Bağımsız cihazlar, profesyonel difüzyon sistemleri veya havalandırma altyapısıyla entegre çözümler proje ihtiyaçlarına göre ele alınabilir."
                  },
                  {
                    "type": "p",
                    "text": "Koku yoğunluğu, yayılım dengesi, çalışma programı, esans tüketimi, enerji ihtiyacı ve işletme maliyetlerini birlikte düşünürüz."
                  }
                ]
              },
              {
                "num": "07",
                "title": "Test, Performans ve İyileştirme",
                "body": [
                  {
                    "type": "p",
                    "text": "Uygulama sonrasında kokuyu gerçek kullanım koşullarında değerlendiririz."
                  },
                  {
                    "type": "p",
                    "text": "Yayılım, yoğunluk, kullanıcı geri bildirimleri, tüketim ve sistem performansı gibi unsurları takip ederek gerekli düzenlemeleri yaparız."
                  },
                  {
                    "type": "p",
                    "text": "Çünkü başarılı bir tasarım yalnızca ilk gün beğenilen değil, kullanım sürecinde de amacına uygun şekilde çalışabilen tasarımdır."
                  }
                ]
              },
              {
                "num": "08",
                "title": "Süreklilik ve Proje Sonrası Destek",
                "body": [
                  {
                    "type": "p",
                    "text": "Kurumsal projelerde uygulamanın devamlılığı da tasarımın bir parçasıdır."
                  },
                  {
                    "type": "p",
                    "text": "Projenin kapsamına göre bakım, teknik servis, sarf malzeme planlaması, esans tedariki ve sistem kontrollerini değerlendiririz."
                  },
                  {
                    "type": "p",
                    "text": "Özellikle çok alanlı ve çok lokasyonlu projelerde standartların korunmasını, tüketimin izlenmesini ve uygulama sürekliliğini önemseriz."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "bizim-icin-bir-koku-baska-tasarimlarin-da-baslan",
        "title": "Bizim için bir koku, başka tasarımların da başlangıcı olabilir",
        "blocks": [
          {
            "type": "p",
            "text": "Siner Prime'ın yaklaşımını farklı kılan noktalardan biri, koku tasarımını tek başına ele almamasıdır."
          },
          {
            "type": "p",
            "text": "Bir koku projesi bazen bir mekânın atmosferiyle başlar. Zamanla o mekâna özel bir ürüne, bir koleksiyona, bir ambalaja, bir objeye veya kurumsal bir hediye tasarımına dönüşebilir."
          },
          {
            "type": "p",
            "text": "Cam, ahşap, metal, seramik, ambalaj ve farklı malzeme disiplinleriyle kurulan ilişkileri bu nedenle önemsiyoruz."
          },
          {
            "type": "p",
            "text": "Bir ürünün yalnızca kokusunu değil; nasıl göründüğünü, nasıl kullanıldığını, hangi malzemeyle hayat bulduğunu ve nasıl bir deneyim sunduğunu da düşünürüz."
          },
          {
            "type": "p",
            "text": "Bazen tek bir koku fikri, birbirini tamamlayan birçok tasarımın başlangıç noktası olabilir."
          },
          {
            "type": "p",
            "text": "Biz projeleri yalnızca ürünler üzerinden değil, birbirini tamamlayan deneyimler bütünü olarak düşünmeyi seviyoruz."
          }
        ]
      },
      {
        "id": "her-sektorun-degil-her-projenin-kendine-ozgu-bir",
        "title": "Her sektörün değil, her projenin kendine özgü bir dili vardır",
        "blocks": [
          {
            "type": "p",
            "text": "Oteller, müzeler, havalimanları, mağazalar, restoranlar, ofisler, sağlık kuruluşları ve kültür merkezleri…"
          },
          {
            "type": "p",
            "text": "Her sektörün kendine özgü ihtiyaçları olduğu gibi, aynı sektör içerisindeki iki kurumun bile beklentileri birbirinden farklı olabilir."
          },
          {
            "type": "p",
            "text": "Bir otelin bulunduğu coğrafya, diğerinden farklı bir koku yaklaşımı gerektirebilir. Aynı markanın iki farklı ülkedeki mekânları bile kültürel alışkanlıklar ve kullanım koşulları nedeniyle farklı değerlendirmeler isteyebilir."
          },
          {
            "type": "p",
            "text": "Bu nedenle hazır reçetelerle ilerlemek yerine, projenin gerçek koşullarını anlamaya çalışırız."
          },
          {
            "type": "p",
            "text": "Bazen en doğru çözüm özgün bir koku geliştirmektir. Bazen mevcut bir koku karakterini yeniden yorumlamak, bazen de belirli bir alanda koku kullanmamayı tercih etmektir."
          },
          {
            "type": "pull",
            "text": "Bizim için önemli olan, her koşulda bir şey satmak değil; projenin ihtiyacına uygun yaklaşımı bulmaktır."
          }
        ]
      },
      {
        "id": "guzel-kokmak-yeterli-degil",
        "title": "Güzel kokmak yeterli değil",
        "blocks": [
          {
            "type": "p",
            "text": "Bir koku tasarımının estetik olduğu kadar sorumlu, uygulanabilir ve sürdürülebilir olması gerektiğine inanıyoruz."
          },
          {
            "type": "p",
            "text": "Kullanım alanına göre ürün güvenliği, ilgili mevzuat, formülasyon gereklilikleri, uygun teknik dokümantasyon ve uygulama koşullarını dikkate alırız."
          },
          {
            "type": "p",
            "text": "Aynı zamanda esans tüketimini, uygulama verimliliğini, bakım ihtiyacını ve işletme maliyetlerini değerlendiririz."
          },
          {
            "type": "p",
            "text": "Çünkü bizim için iyi bir proje yalnızca etkileyici bir ilk izlenim bırakmamalı; uzun vadede de anlamlı bir değer oluşturmalıdır."
          }
        ]
      },
      {
        "id": "siner-prime-in-kokuya-yaklasimi",
        "title": "Siner Prime'ın kokuya yaklaşımı",
        "blocks": [
          {
            "type": "p",
            "text": "Her şeyi bildiğimizi iddia etmiyoruz. Koku ve tasarım dünyasının keşfedilecek çok fazla yönü olduğuna inanıyoruz."
          },
          {
            "type": "p",
            "text": "Bizi heyecanlandıran, her projede yeniden düşünmek, öğrenmek, farklı disiplinleri bir araya getirmek ve henüz denenmemiş fikirlerin peşinden gitmek."
          },
          {
            "type": "p",
            "text": "Bazen bir kahve eşliğinde başlayan sohbet, bazen mekânda yapılan uzun bir yürüyüş, bazen de üzerinde tekrar tekrar çalıştığımız küçük bir ayrıntı yeni bir projenin başlangıcı olabilir."
          },
          {
            "type": "p",
            "text": "Dinlemeyi, araştırmayı, gözlemlemeyi ve birlikte üretmeyi seviyoruz."
          },
          {
            "type": "p",
            "text": "Yurt içinde ve yurt dışında farklı disiplinlerden profesyonellerle kurulan iş birliklerinin, bir fikri daha güçlü bir tasarıma dönüştürebileceğine inanıyoruz."
          },
          {
            "type": "p",
            "text": "Siner Prime olarak koku tasarımını, yalnızca bir esans geliştirmek değil; bir ihtiyacı anlamak, bir fikir oluşturmak ve onu uygulanabilir, anlamlı bir deneyime dönüştürmek olarak görüyoruz."
          },
          {
            "type": "p",
            "text": "Belki de birlikte henüz düşünmediğimiz bir şeyi tasarlayacağız."
          },
          {
            "type": "p",
            "text": "Bir mekânın hikâyesini, bir markanın görünmeyen kimliğini veya yeni bir koleksiyonun ilk fikrini…"
          },
          {
            "type": "p",
            "text": "Biz yeni fikirler için hazırız."
          },
          {
            "type": "pull",
            "text": "Önce mekânı tanırız. Sonra hikâyesini keşfeder, kokusunu tasarlarız."
          }
        ]
      }
    ]
  },
  {
    "slug": "koku-teknolojileri",
    "num": "04",
    "menu": "Koku Teknolojileri",
    "title": "Koku teknolojileri",
    "subtitle": "Teknoloji, Mekânın Önüne Geçmeden.",
    "intro": [
      {
        "type": "p",
        "text": "Görünmeyen bir deneyimin arkasında, doğru düşünülmüş bir teknoloji vardır."
      },
      {
        "type": "p",
        "text": "Bir otelin lobisinde hissedilen koku, geniş bir alışveriş merkezine yayılan kokuyla aynı yöntemle uygulanamaz. Bir ofisin çalışma saatleri, bir müzenin ziyaretçi yoğunluğu veya bir iş merkezinin havalandırma altyapısı birbirinden farklı ihtiyaçlar doğurur."
      },
      {
        "type": "p",
        "text": "Koku görünmez. Ancak onu taşıyan teknoloji; mekânın atmosferini, kullanım konforunu, uygulamanın sürekliliğini ve işletme maliyetini doğrudan etkiler."
      },
      {
        "type": "p",
        "text": "Siner Prime'da koku teknolojilerini yalnızca cihazlardan ibaret görmüyoruz. Koku formülasyonu, difüzyon yöntemi, cihaz tasarımı, mekânsal entegrasyon, akıllı kontrol ve işletme performansını bir arada ele alıyoruz."
      },
      {
        "type": "p",
        "text": "Çünkü doğru kokuyu tasarlamak kadar, onu doğru koşullarda uygulamak da önemlidir."
      },
      {
        "type": "p",
        "text": "Bizim için en iyi teknoloji, en fazla özelliğe sahip olan değil; müşterinin ihtiyacına en doğru cevabı veren teknolojidir."
      }
    ],
    "sections": [
      {
        "id": "teknoloji-felsefemiz",
        "title": "Teknoloji felsefemiz",
        "blocks": [
          {
            "type": "p",
            "text": "Bir cihazın teknik özellikleri ne kadar gelişmiş olursa olsun, bulunduğu mekânın ihtiyaçlarına cevap vermiyorsa doğru çözüm değildir."
          },
          {
            "type": "p",
            "text": "Bir otelde cihazın görünürlüğü, bir alışveriş merkezinde dağılım dengesi, bir ofiste çalışma programı, çok lokasyonlu bir işletmede ise merkezi yönetim ve operasyon kolaylığı ön plana çıkabilir."
          },
          {
            "type": "p",
            "text": "Bu nedenle teknoloji seçiminde yalnızca kapasiteye veya güce bakmıyoruz."
          },
          {
            "type": "p",
            "text": "Bir sistemi değerlendirirken:"
          },
          {
            "type": "list",
            "items": [
              "Mekânın mimarisini ve kullanım amacını",
              "Alanın hacmini ve hava hareketlerini",
              "Koku karakterini ve hedeflenen yoğunluğu",
              "Cihazın yerleşim ve montaj seçeneklerini",
              "Esans kapasitesini ve gerçek tüketimini",
              "Çalışma programını ve kontrol imkânlarını",
              "Bakım, servis ve tedarik gereksinimlerini",
              "İlk yatırım ve uzun vadeli işletme maliyetini"
            ]
          },
          {
            "type": "p",
            "text": "birlikte değerlendiriyoruz."
          },
          {
            "type": "p",
            "text": "Teknolojiyi karmaşıklaştırmak yerine sadeleştirmeyi, gereksiz özellikler yerine gerçek fayda üretmeyi önemsiyoruz."
          },
          {
            "type": "pull",
            "text": "İyi tasarlanmış bir sistem yalnızca çalışmaz; bulunduğu mekâna ve onu kullanan insanlara uyum sağlar."
          }
        ],
        "num": "01",
        "kicker": "Daha Fazla Teknoloji Değil, Daha Doğru Teknoloji"
      },
      {
        "id": "koku-teknolojisi-nasil-calisir",
        "title": "Koku teknolojisi nasıl çalışır?",
        "blocks": [
          {
            "type": "p",
            "text": "Profesyonel kokulandırma sistemlerinde amaç, uygun bir koku formülasyonunu kontrollü bir yöntemle havaya taşımak ve hedeflenen mekânda dengeli bir duyusal deneyim oluşturmaktır."
          },
          {
            "type": "p",
            "text": "Kullanılan teknolojilerden biri, sıvı esansın basınçlı hava ve özel atomizasyon mekanizması yardımıyla küçük damlacıklara ayrılarak havaya taşınmasıdır. Bu yöntem, soğuk hava difüzyonu olarak da bilinir."
          },
          {
            "type": "p",
            "text": "Uygulama sırasında ısıtma yerine hava akışı ve atomizasyon mekanizması kullanılır. Ancak her cihazın çalışma prensibi, damlacık karakteri ve dağıtım performansı aynı değildir."
          },
          {
            "type": "p",
            "text": "Bu nedenle bir sistemi yalnızca atomizasyon teknolojisi üzerinden değerlendirmiyoruz."
          },
          {
            "type": "p",
            "text": "Beş temel unsuru birlikte ele alıyoruz:"
          },
          {
            "type": "steps",
            "items": [
              {
                "num": "01",
                "title": "Formülasyon",
                "body": [
                  {
                    "type": "p",
                    "text": "Kullanılacak esansın cihazın pompa, nozul, conta ve hazne malzemeleriyle teknik uyumu değerlendirilir."
                  }
                ]
              },
              {
                "num": "02",
                "title": "Atomizasyon",
                "body": [
                  {
                    "type": "p",
                    "text": "Esansın cihazın çalışma mekanizmasına uygun şekilde havaya taşınması sağlanır. Parçacık boyutu ve dağılım özellikleri, sistemin gerçek performansını değerlendirmek açısından önemlidir."
                  }
                ]
              },
              {
                "num": "03",
                "title": "Hava hareketi ve dağılım",
                "body": [
                  {
                    "type": "p",
                    "text": "Kokunun mekânda nasıl taşınacağı; hava akışı, havalandırma, tavan yüksekliği, mimari bölümlenme ve cihazın konumuyla ilişkilidir."
                  }
                ]
              },
              {
                "num": "04",
                "title": "Kontrol",
                "body": [
                  {
                    "type": "p",
                    "text": "Çalışma süresi, püskürtme aralıkları ve yoğunluk ayarları, desteklenen cihaz özelliklerine göre düzenlenir."
                  }
                ]
              },
              {
                "num": "05",
                "title": "Performans",
                "body": [
                  {
                    "type": "p",
                    "text": "Gerçek kullanım koşullarında koku algısı, tüketim, dağılım ve sistemin sürekliliği değerlendirilir."
                  }
                ]
              }
            ]
          },
          {
            "type": "p",
            "text": "Burada önemli bir ayrıntı var: Daha küçük damlacıklar her koşulda daha iyi bir koku deneyimi anlamına gelmez. Damlacık boyutu, formülasyon, hava hareketi ve uygulama koşulları birlikte değerlendirilmelidir."
          },
          {
            "type": "p",
            "text": "Bizim için teknoloji, kokuyu mümkün olduğunca fazla yaymak değil; ihtiyaç duyulan alanda doğru şekilde uygulayabilmektir."
          }
        ],
        "num": "02",
        "kicker": "Bir Esansın Mekânsal Deneyime Dönüşme Yolculuğu"
      },
      {
        "id": "mekana-ozel-sistem-tasarimi",
        "title": "Mekâna özel sistem tasarımı",
        "blocks": [
          {
            "type": "p",
            "text": "Bir otel lobisi, yüzlerce odadan oluşan bir konaklama tesisi, bir müze, bir mağaza ve merkezi havalandırmaya sahip bir iş merkezi aynı uygulama yöntemiyle değerlendirilmemelidir."
          },
          {
            "type": "p",
            "text": "Proje öncesinde şu kriterleri inceleriz:"
          },
          {
            "type": "list",
            "items": [
              "Alanın toplam hacmi ve mimari yapısı",
              "Tavan yüksekliği ve mekânsal bölümlenme",
              "Hava sirkülasyonu ve havalandırma koşulları",
              "İnsan hareketliliği ve kullanım yoğunluğu",
              "Cihazın konumlandırılacağı noktalar",
              "Hedeflenen koku karakteri ve yoğunluğu",
              "Günlük ve haftalık çalışma saatleri",
              "Esans tüketimi ve işletme bütçesi",
              "Bakım, dolum ve teknik erişim gereksinimleri"
            ]
          },
          {
            "type": "p",
            "text": "Örneğin bir otel lobisinde bağımsız bir cihaz yeterli olabilirken, geniş ve merkezi havalandırmalı bir yapıda HVAC entegrasyonu değerlendirilebilir."
          },
          {
            "type": "p",
            "text": "Bir mağazada cihazın mimari bütünlüğü bozmaması önemliyken, teknik bir alanda erişilebilirlik ve bakım kolaylığı daha fazla önem taşıyabilir."
          },
          {
            "type": "p",
            "text": "Aynı tesisin giriş, koridor, restoran ve dinlenme alanları bile farklı uygulama ihtiyaçlarına sahip olabilir."
          },
          {
            "type": "p",
            "text": "Bu nedenle cihaz seçimi, yerleşim ve uygulama yöntemi birbirinden bağımsız kararlar değildir."
          },
          {
            "type": "pull",
            "text": "Önce mekânı tanır, sonra teknolojiyi konumlandırırız."
          }
        ],
        "num": "03",
        "kicker": "Her Mekânın İhtiyacı Farklıdır"
      },
      {
        "id": "siner-prime-profesyonel-kokulandirma-sistemleri",
        "title": "Siner Prime profesyonel kokulandırma sistemleri",
        "blocks": [
          {
            "type": "h3",
            "text": "Siner Minimal Line",
            "tagline": "Minimal Form. Çok Yönlü Kullanım."
          },
          {
            "type": "p",
            "text": "Minimal olmak, yalnızca küçük görünmek değildir. Gereksiz ayrıntılardan uzaklaşmak, işlevi korumak ve teknolojiyi ihtiyaç duyulan yere doğru biçimde yerleştirebilmektir."
          },
          {
            "type": "p",
            "text": "Siner Minimal Line, kompakt gövdesi ve farklı uygulama seçenekleriyle profesyonel kokulandırma projeleri için tasarlanmış bir sistemdir."
          },
          {
            "type": "p",
            "text": "1.000 ml esans kapasitesini kompakt bir gövdede bir araya getiren cihaz, duvar montajı, uygun zeminde bağımsız konumlandırma ve uygun teknik altyapıda HVAC entegrasyonu gibi farklı uygulama seçenekleriyle değerlendirilebilir."
          },
          {
            "type": "p",
            "text": "Bu yaklaşım, cihazın yalnızca tek bir noktada ve tek bir kullanım biçiminde düşünülmesini gerektirmez."
          },
          {
            "type": "p",
            "text": "Bir otelin teknik alanında, uygun bir duvar konumunda veya merkezi havalandırma altyapısına entegre bir uygulamada aynı cihaz farklı bir görev üstlenebilir."
          },
          {
            "type": "p",
            "text": "Buradaki asıl değer, cihazın her yerde aynı şekilde kullanılması değil; projenin gerektirdiği yerleşim biçimine göre planlanabilmesidir."
          },
          {
            "type": "label",
            "text": "Öne çıkan özellikler"
          },
          {
            "type": "list",
            "items": [
              "Kompakt ve minimal gövde tasarımı",
              "1.000 ml esans kapasitesi",
              "Dahili pompa ve atomizasyon sistemi",
              "Dahili fan desteği",
              "Wi-Fi ve Bluetooth kontrol desteği",
              "Çalışma süresi ve koku yoğunluğu ayarları",
              "Uygun teknik altyapıda HVAC entegrasyonu",
              "Projeye göre duvar, zemin ve teknik alan yerleşimi"
            ]
          },
          {
            "type": "label",
            "text": "Teknik özellikler"
          },
          {
            "type": "table",
            "head": [
              "Özellik",
              "Değer"
            ],
            "rows": [
              [
                "Ürün adı",
                "Siner Minimal Line"
              ],
              [
                "Esans kapasitesi",
                "1.000 ml"
              ],
              [
                "Voltaj",
                "12 V"
              ],
              [
                "Güç",
                "15 W"
              ],
              [
                "Net ağırlık",
                "2,9 kg"
              ],
              [
                "Üretici nominal kapsama hacmi",
                "3.000–4.000 m³"
              ],
              [
                "Bildirilen gürültü seviyesi",
                "≤45 dB(A)"
              ],
              [
                "Boyutlar",
                "295 × 113 × 230 mm"
              ],
              [
                "Kontrol",
                "Wi-Fi / Bluetooth"
              ],
              [
                "Uygulama",
                "Bağımsız kullanım / uygun HVAC entegrasyonu"
              ]
            ]
          },
          {
            "type": "p",
            "text": "Teknik değerler üretici tarafından sağlanan ürün verileridir. Gerçek uygulama kapasitesi mekânın hacmine, hava hareketlerine, yerleşime ve çalışma koşullarına bağlıdır. Gürültü değeri için ölçüm koşulları teknik föy üzerinden doğrulanmalıdır."
          },
          {
            "type": "p",
            "text": "Daha az yer kaplayan, farklı yerleşim seçenekleri sunan ve mekânın tasarımına saygı duyan bir teknoloji."
          },
          {
            "type": "h3",
            "text": "Siner Tower",
            "tagline": "Dikey Form. Bağımsız Uygulama. Kontrollü Deneyim."
          },
          {
            "type": "p",
            "text": "Bazı mekânlarda bağımsız bir kokulandırma sistemine ihtiyaç duyulur."
          },
          {
            "type": "p",
            "text": "Otel lobileri, geniş ofisler, alışveriş merkezleri ve ortak kullanım alanlarında cihazın kendi başına çalışabilmesi, kolay konumlandırılması ve kontrol edilebilmesi önemlidir."
          },
          {
            "type": "p",
            "text": "Siner Tower, dikey gövde tasarımı ve zemin tipi kullanım yaklaşımıyla bu tür uygulamalar için değerlendirilen profesyonel bir kokulandırma sistemidir."
          },
          {
            "type": "p",
            "text": "Titanyum renkli görünümü, alüminyum ve plastik gövde yapısı, 500 ml esans kapasitesiyle teknik işlevi sade bir tasarım anlayışıyla buluşturur."
          },
          {
            "type": "p",
            "text": "Yüksek akışlı hava pompası ve çift sıvı püskürtme mekanizması, sistemin koku yayılımını sağlayan temel bileşenleridir."
          },
          {
            "type": "p",
            "text": "Wi-Fi ve Bluetooth bağlantı seçenekleri üzerinden çalışma süresi ve koku yoğunluğu ayarlanabilir. Kızılötesi algılama teknolojisi ise esans seviyesinin takibine yardımcı olur."
          },
          {
            "type": "label",
            "text": "Öne çıkan özellikler"
          },
          {
            "type": "list",
            "items": [
              "Dikey ve bağımsız zemin tipi tasarım",
              "Titanyum görünümlü gövde",
              "Alüminyum ve plastik malzeme",
              "500 ml PET esans şişesi",
              "Yüksek akışlı ve yüksek basınçlı hava pompası",
              "Çift sıvı püskürtme mekanizması",
              "Wi-Fi ve Bluetooth kontrolü",
              "Çalışma süresi ve koku yoğunluğu ayarları",
              "Kızılötesi esans seviye algılama"
            ]
          },
          {
            "type": "label",
            "text": "Teknik özellikler"
          },
          {
            "type": "table",
            "head": [
              "Özellik",
              "Değer"
            ],
            "rows": [
              [
                "Ürün adı",
                "Siner Tower"
              ],
              [
                "Renk",
                "Titanyum"
              ],
              [
                "Malzeme",
                "Alüminyum + plastik"
              ],
              [
                "Esans kapasitesi",
                "500 ml"
              ],
              [
                "Üretici nominal kapsama hacmi",
                "2.500–3.500 m³"
              ],
              [
                "Üretici nominal alan karşılığı",
                "625–875 m²"
              ],
              [
                "Voltaj",
                "12 V DC"
              ],
              [
                "Güç",
                "12 W"
              ],
              [
                "Net ağırlık",
                "3,2 kg"
              ],
              [
                "Brüt ağırlık",
                "4,5 kg"
              ],
              [
                "Bildirilen gürültü seviyesi",
                "≤45 dB(A)"
              ],
              [
                "Boyutlar",
                "106,6 × 106,6 × 550 mm"
              ],
              [
                "Kontrol",
                "Wi-Fi / Bluetooth"
              ]
            ]
          },
          {
            "type": "p",
            "text": "Alan karşılığı yaklaşık 4 metre tavan yüksekliği varsayımıyla hesaplanmıştır. Nominal hacim ve alan değerleri üretici beyanıdır; gerçek performans proje koşullarına göre değişebilir."
          },
          {
            "type": "pull",
            "text": "Teknolojinin mekân içerisinde kendi yerini bulduğu bağımsız bir tasarım yaklaşımı."
          }
        ],
        "num": "04"
      },
      {
        "id": "hangi-sistem-hangi-ihtiyac-icin",
        "title": "Hangi sistem, hangi ihtiyaç için?",
        "blocks": [
          {
            "type": "p",
            "text": "İki cihazı yalnızca kapasitelerine göre karşılaştırmak doğru değildir. Kullanım biçimi, yerleşim ihtiyacı ve teknik altyapı da seçimde belirleyicidir."
          },
          {
            "type": "table",
            "head": [
              "Karşılaştırma",
              "Siner Minimal Line",
              "Siner Tower"
            ],
            "rows": [
              [
                "Tasarım",
                "Kompakt",
                "Dikey, zemin tipi"
              ],
              [
                "Esans kapasitesi",
                "1.000 ml",
                "500 ml"
              ],
              [
                "Bağımsız kullanım",
                "Proje koşullarına göre",
                "Evet"
              ],
              [
                "Duvar montajı",
                "Uygun montajla",
                "Ürün tanımında belirtilmiyor"
              ],
              [
                "HVAC entegrasyonu",
                "Uygun altyapıda",
                "Üretici verisinde belirtilmiyor"
              ],
              [
                "Kontrol",
                "Wi-Fi / Bluetooth",
                "Wi-Fi / Bluetooth"
              ],
              [
                "Öne çıkan yaklaşım",
                "Yerleşim esnekliği",
                "Bağımsız konumlandırma"
              ]
            ]
          },
          {
            "type": "p",
            "text": "Cihaz seçerken yalnızca hazne kapasitesine veya üreticinin belirttiği kapsama hacmine bakmıyoruz."
          },
          {
            "type": "p",
            "text": "Örneğin 1.000 ml hazneye sahip bir cihazın 500 ml hazneli bir cihazdan iki kat daha uzun süre çalışacağını söylemek doğru değildir. Çalışma programı, tüketim hızı, esans formülasyonu ve yoğunluk ayarı bu süreyi değiştirir."
          },
          {
            "type": "p",
            "text": "Aynı şekilde nominal kapsama hacmi, her mekânda aynı koku yoğunluğunun sağlanacağı anlamına gelmez."
          },
          {
            "type": "pull",
            "text": "Doğru seçim, teknik özelliklerin projenin gerçek ihtiyaçlarıyla eşleştirilmesiyle yapılır."
          }
        ],
        "num": "05"
      },
      {
        "id": "hvac-ve-merkezi-sistem-entegrasyonu",
        "title": "HVAC ve merkezi sistem entegrasyonu",
        "blocks": [
          {
            "type": "p",
            "text": "Büyük ölçekli projelerde kokulandırma yalnızca bağımsız cihazlarla gerçekleştirilmeyebilir."
          },
          {
            "type": "p",
            "text": "Uygun cihaz ve teknik altyapı bulunduğunda koku sistemleri, merkezi havalandırma ve iklimlendirme altyapısıyla birlikte çalışacak şekilde planlanabilir."
          },
          {
            "type": "p",
            "text": "Bu yöntemde kokunun belirlenen hava kanalları üzerinden ilgili alanlara taşınması hedeflenir."
          },
          {
            "type": "p",
            "text": "Ancak her HVAC sistemi aynı özelliklere sahip değildir."
          },
          {
            "type": "p",
            "text": "Kanal basıncı, hava debisi, taze hava oranı, hava dağıtım noktaları, sistemin çalışma programı ve bakım erişimi değerlendirilmeden entegrasyon kararı verilmemelidir."
          },
          {
            "type": "p",
            "text": "Siner Prime'da HVAC uygulamasını yalnızca bir cihaz bağlantısı olarak görmüyoruz."
          },
          {
            "type": "p",
            "text": "Birlikte değerlendirdiğimiz başlıca unsurlar:"
          },
          {
            "type": "list",
            "items": [
              "Uygun enjeksiyon noktasının belirlenmesi",
              "Hava akışı ve kanal koşullarının incelenmesi",
              "Cihaz ile teknik altyapının uyumluluğu",
              "Koku dağılımının planlanması",
              "Çalışma programının oluşturulması",
              "Bakım ve teknik erişimin planlanması",
              "Kullanıcı konforunun ve havalandırma koşullarının gözetilmesi"
            ]
          },
          {
            "type": "p",
            "text": "Birden fazla alanı bulunan yapılarda farklı bölgeler için ayrı uygulama senaryoları değerlendirilebilir."
          },
          {
            "type": "p",
            "text": "Doğru entegrasyon, kokunun yalnızca kanala verilmesi değil; sistemin mekânın ihtiyaçlarıyla birlikte tasarlanmasıdır."
          }
        ],
        "num": "06",
        "kicker": "Kokunun Mimari Altyapıyla Buluşması"
      },
      {
        "id": "akilli-kontrol-ve-yonetim",
        "title": "Akıllı kontrol ve yönetim",
        "blocks": [
          {
            "type": "p",
            "text": "Profesyonel kokulandırmada doğru çalışma programı, koku yoğunluğu ve kullanım süreleri en az cihaz seçimi kadar önemlidir."
          },
          {
            "type": "p",
            "text": "Wi-Fi ve Bluetooth bağlantıları, desteklenen modellerde cihazların yerel veya uzaktan kontrol edilmesine yardımcı olur."
          },
          {
            "type": "p",
            "text": "Kullanılan cihaz ve yazılım altyapısına göre:"
          },
          {
            "type": "list",
            "items": [
              "Çalışma ve durma saatleri programlanabilir",
              "Gün ve saat bazlı çalışma senaryoları oluşturulabilir",
              "Koku yoğunluğu ayarlanabilir",
              "Cihazın çalışma durumu takip edilebilir",
              "Desteklenen modellerde esans seviyesi izlenebilir",
              "Birden fazla cihazın yönetimi için uygun kontrol senaryoları değerlendirilebilir"
            ]
          },
          {
            "type": "p",
            "text": "Burada önemli olan, bağlantı özelliklerinin kapsamını doğru tanımlamaktır."
          },
          {
            "type": "p",
            "text": "Bluetooth ile yakın mesafeden kontrol, Wi-Fi ile ağ üzerinden kontrol ve farklı lokasyonlardaki cihazların tek bir merkezden yönetilmesi birbirinden farklı işlevlerdir."
          },
          {
            "type": "p",
            "text": "Bu nedenle her projede kullanılan cihazın ve yazılımın gerçek kapasitesine göre kontrol altyapısı belirlenir."
          },
          {
            "type": "p",
            "text": "Akıllı teknoloji, daha fazla kontrol seçeneği değil; işletmenin ihtiyacına uygun kontrol kolaylığı sunmalıdır."
          }
        ],
        "num": "07",
        "kicker": "Teknolojiyi Yönetmek, Deneyimi Kontrol Etmek"
      },
      {
        "id": "performans-ve-isletme-ekonomisi",
        "title": "Performans ve işletme ekonomisi",
        "blocks": [
          {
            "type": "p",
            "text": "Bir kokulandırma sisteminin maliyeti yalnızca cihazın satın alma bedelinden oluşmaz."
          },
          {
            "type": "p",
            "text": "Esans tüketimi, çalışma süresi, enerji kullanımı, bakım, yedek parça, servis ve tedarik ihtiyaçları toplam işletme maliyetini belirler."
          },
          {
            "type": "p",
            "text": "Bu nedenle teknoloji değerlendirmesini yalnızca ilk yatırım üzerinden yapmıyoruz."
          },
          {
            "type": "p",
            "text": "Bir sistemin uzun vadeli performansını değerlendirirken şu başlıklara odaklanıyoruz:"
          },
          {
            "type": "defs",
            "items": [
              {
                "term": "Esans tüketimi",
                "body": "Çalışma programı, püskürtme döngüsü, yoğunluk ayarı ve esansın teknik özelliklerine bağlı tüketim miktarı."
              },
              {
                "term": "Enerji kullanımı",
                "body": "Cihazın elektrik gücü, çalışma süresi ve günlük kullanım düzeni."
              },
              {
                "term": "Kontrollü uygulama",
                "body": "Mekânın kullanım saatlerine uygun programlama sayesinde gereksiz çalışmanın azaltılması."
              },
              {
                "term": "Bakım kolaylığı",
                "body": "Dolum, temizlik, teknik kontrol ve servis süreçlerinin yönetimi."
              },
              {
                "term": "Operasyonel süreklilik",
                "body": "İşletmenin günlük düzenine, personel kullanımına ve tedarik planına uyum."
              },
              {
                "term": "Toplam sahip olma maliyeti",
                "body": "Cihaz, esans, enerji, bakım, servis ve işletme giderlerinin birlikte değerlendirilmesi."
              }
            ]
          },
          {
            "type": "p",
            "text": "Örneğin 15 W gücündeki bir cihazın teorik olarak 24 saat kesintisiz çalışması durumunda günlük enerji tüketimi 0,36 kWh, 30 günlük tüketimi ise 10,8 kWh olur. Gerçek tüketim, cihazın çalışma döngüsüne göre daha düşük olabilir."
          },
          {
            "type": "p",
            "text": "Benzer şekilde aylık esans tüketimini hesaplamak için yalnızca hazne kapasitesi yeterli değildir. Gerçek tüketim hızı ve programlanan çalışma süresi bilinmelidir."
          },
          {
            "type": "pull",
            "text": "Gerçek ekonomik değer, doğru performansın sürdürülebilir maliyetle sağlanmasıdır."
          }
        ],
        "num": "08",
        "kicker": "Gerçek Başarı, İlk Günden Sonra Başlar"
      },
      {
        "id": "guvenli-kullanim-ve-kullanici-konforu",
        "title": "Güvenli kullanım ve kullanıcı konforu",
        "blocks": [
          {
            "type": "p",
            "text": "Kokulandırma uygulamalarında estetik ve teknik performans kadar kullanıcı konforunu da önemsiyoruz."
          },
          {
            "type": "p",
            "text": "Her insan aynı kokuyu aynı şekilde algılamaz. Bazı kişiler kokulara karşı daha hassas olabilir. Bu nedenle uygulama alanı, kullanıcı profili ve hedeflenen yoğunluk birlikte değerlendirilmelidir."
          },
          {
            "type": "p",
            "text": "Özellikle sağlık kuruluşları, eğitim alanları, ortak çalışma ortamları ve hassas kullanıcıların bulunduğu mekânlarda koku uygulamasının uygunluğu ayrıca ele alınmalıdır."
          },
          {
            "type": "p",
            "text": "Gerekli durumlarda yoğunluğun düşürülmesi, uygulamanın sınırlandırılması veya belirli alanlarda hiç koku kullanılmaması tercih edilebilir."
          },
          {
            "type": "p",
            "text": "Kokulandırmanın temizlik, hijyen, dezenfeksiyon veya havalandırmanın yerine geçmediğini özellikle belirtmek isteriz."
          },
          {
            "type": "p",
            "text": "Koku, doğru koşullarda değerlendirildiğinde mekân deneyimini tamamlayan bir duyusal unsurdur."
          },
          {
            "type": "p",
            "text": "Ürünlerin kullanım alanına uygunluğu, formülasyon özellikleri, malzeme uyumluluğu ve ilgili güvenlik dokümantasyonu da uygulama öncesinde değerlendirilmelidir."
          },
          {
            "type": "p",
            "text": "Bizim için başarılı bir uygulama, yalnızca güzel kokan değil; bulunduğu ortamın ihtiyaçlarına ve kullanıcı konforuna saygı gösteren uygulamadır."
          }
        ],
        "num": "09",
        "kicker": "Teknoloji, İnsanları ve Mekânı Birlikte Düşünmelidir"
      },
      {
        "id": "projelendirme-uygulama-ve-teknik-destek",
        "title": "Projelendirme, uygulama ve teknik destek",
        "blocks": [
          {
            "type": "p",
            "text": "Profesyonel bir kokulandırma projesi, cihazın teslim edilmesiyle tamamlanmaz."
          },
          {
            "type": "p",
            "text": "Doğru cihazın seçilmesi, esansın teknik uyumluluğu, yerleşim planı, montaj, devreye alma ve kullanım sürecinin değerlendirilmesi bir bütün olarak ele alınmalıdır."
          },
          {
            "type": "p",
            "text": "Projenin kapsamına göre çalışma sürecimiz şu aşamalardan oluşur:"
          },
          {
            "type": "steps",
            "items": [
              {
                "num": "01",
                "title": "Keşif ve ihtiyaç analizi",
                "body": [
                  {
                    "type": "p",
                    "text": "Mekânın fiziksel, mimari ve operasyonel koşullarını değerlendiririz."
                  }
                ]
              },
              {
                "num": "02",
                "title": "Teknik çözüm geliştirme",
                "body": [
                  {
                    "type": "p",
                    "text": "Uygun cihazı, difüzyon yöntemini ve yerleşim biçimini belirleriz."
                  }
                ]
              },
              {
                "num": "03",
                "title": "Koku ve sistem eşleştirmesi",
                "body": [
                  {
                    "type": "p",
                    "text": "Projenin koku karakteriyle kullanılacak esansın teknik uyumluluğunu değerlendiririz."
                  }
                ]
              },
              {
                "num": "04",
                "title": "Uygulama ve montaj",
                "body": [
                  {
                    "type": "p",
                    "text": "Belirlenen yerleşim planına ve teknik koşullara göre sistemi kurarız."
                  }
                ]
              },
              {
                "num": "05",
                "title": "Devreye alma",
                "body": [
                  {
                    "type": "p",
                    "text": "Çalışma programını ve yoğunluk ayarlarını proje ihtiyaçlarına göre düzenleriz."
                  }
                ]
              },
              {
                "num": "06",
                "title": "Performans değerlendirmesi",
                "body": [
                  {
                    "type": "p",
                    "text": "Kullanım koşullarını, tüketimi ve uygulama sonuçlarını değerlendiririz."
                  }
                ]
              },
              {
                "num": "07",
                "title": "Süreklilik ve destek",
                "body": [
                  {
                    "type": "p",
                    "text": "Proje anlaşmasının kapsamına göre bakım, teknik destek, servis ve sarf malzeme tedarik süreçlerini planlarız."
                  }
                ]
              }
            ]
          },
          {
            "type": "p",
            "text": "Amacımız yalnızca çalışan bir cihaz teslim etmek değil; işletmenin günlük düzenine uyum sağlayan, sürdürülebilir bir kokulandırma çözümü oluşturmaktır."
          }
        ],
        "num": "10",
        "kicker": "Bir Cihaz Tesliminden Daha Fazlası"
      },
      {
        "id": "teknoloji-hakkinda-merak-edilenler",
        "title": "Teknoloji hakkında merak edilenler",
        "blocks": [
          {
            "type": "faq",
            "items": [
              {
                "q": "Her mekân için aynı cihaz kullanılabilir mi?",
                "a": "Hayır. Mekânın hacmi, hava hareketleri, mimari özellikleri, kullanım yoğunluğu ve uygulama yöntemi cihaz seçimini etkiler."
              },
              {
                "q": "Kapsama hacmi ne anlama gelir?",
                "a": "Üreticinin belirttiği nominal hacim değeridir. Gerçek uygulama kapasitesi; havalandırma, tavan yüksekliği, mekân geometrisi, hava akışı ve hedeflenen yoğunluğa bağlıdır."
              },
              {
                "q": "1.000 ml kapasiteli bir cihaz daha uzun süre mi çalışır?",
                "a": "Daha büyük hazne daha fazla esans depolayabilir. Ancak çalışma süresi yalnızca kapasiteye bağlı değildir. Esans tüketim hızı, çalışma programı ve yoğunluk ayarı belirleyicidir."
              },
              {
                "q": "HVAC sistemine entegrasyon mümkün müdür?",
                "a": "Uygun cihaz ve teknik altyapı bulunduğunda mümkündür. Kanal koşulları, hava debisi, enjeksiyon noktası ve bakım erişimi önceden değerlendirilmelidir."
              },
              {
                "q": "Cihazlar uzaktan kontrol edilebilir mi?",
                "a": "Desteklenen Wi-Fi ve Bluetooth bağlantıları üzerinden kontrol sağlanabilir. Kontrolün mesafesi ve kapsamı kullanılan uygulama, ağ ve yazılım altyapısına bağlıdır."
              },
              {
                "q": "Bir cihazın aylık esans tüketimi nasıl hesaplanır?",
                "a": "Gerçek tüketim hızı ile günlük çalışma süresinin birlikte değerlendirilmesi gerekir. Ölçülmüş tüketim verileri varsa aylık tahmin daha güvenilir biçimde hesaplanabilir."
              },
              {
                "q": "Koku yoğunluğu ayarlanabilir mi?",
                "a": "Desteklenen modellerde çalışma programı ve yoğunluk ayarları yapılabilir. Mekândaki gerçek koku algısı ise hava akışı ve kullanım koşullarına da bağlıdır."
              },
              {
                "q": "Cihazların bakımı gerekli midir?",
                "a": "Evet. Hazne, nozul, bağlantılar ve diğer çalışma bileşenleri üreticinin bakım talimatlarına uygun şekilde kontrol edilmelidir."
              },
              {
                "q": "Her esans her cihazda kullanılabilir mi?",
                "a": "Hayır. Esansın formülasyonu, viskozitesi, cihazın difüzyon sistemi ve temas ettiği malzemelerle uyumlu olması gerekir."
              }
            ]
          }
        ],
        "num": "11"
      },
      {
        "id": "bir-sonraki-projeniz-icin-dogru-teknolojiyi-birl",
        "title": "Bir sonraki projeniz için doğru teknolojiyi birlikte belirleyelim",
        "blocks": [
          {
            "type": "p",
            "text": "Bir mekânın ihtiyaçları bazen tek bir cihazla, bazen birden fazla sistemin birlikte çalışmasıyla karşılanabilir."
          },
          {
            "type": "p",
            "text": "Önemli olan en fazla cihazı kullanmak değil; ihtiyacı doğru analiz ederek uygun sistemi geliştirmektir."
          },
          {
            "type": "p",
            "text": "Oteliniz, alışveriş merkeziniz, ofisiniz, mağazanız, müzeniz veya farklı bir ticari mekânınız için profesyonel kokulandırma çözümü arıyorsanız projenizi birlikte değerlendirebiliriz."
          },
          {
            "type": "p",
            "text": "Alanı, kullanım amacını, teknik altyapıyı ve işletme beklentilerinizi dinleyerek size uygun çözümü birlikte arayabiliriz."
          },
          {
            "type": "pull",
            "text": "Önce ihtiyacı anlarız. Sonra teknolojiyi tasarlarız."
          }
        ],
        "num": "12"
      }
    ]
  },
  {
    "slug": "tasarim-ve-koleksiyonlar",
    "num": "05",
    "menu": "Tasarım ve Koleksiyonlar",
    "title": "Tasarım ve koleksiyonlar",
    "subtitle": "Tasarımdan Ürüne, Üründen Deneyime.",
    "intro": [
      {
        "type": "p",
        "text": "Her ürün bir fikirle başlar. Her fikir, doğru bir yaklaşımla kendine özgü bir forma dönüşür."
      },
      {
        "type": "pull",
        "text": "Anlamı Tasarlıyor, Hatırayı Yaşatıyoruz."
      },
      {
        "type": "p",
        "text": "Kutusundan içeriğine, ilk dokunuşundan yıllar sonra hatırlanacak hikâyesine kadar her ayrıntıyı bir bütün olarak ele alıyoruz."
      },
      {
        "type": "p",
        "text": "Bazen bir malzemenin dokusunda, bazen bir çizginin sadeliğinde, bazen bir kokunun karakterinde, bazen de henüz var olmayan bir ürünün hayalinde…"
      },
      {
        "type": "p",
        "text": "Bizim için tasarım, yalnızca güzel görünen bir nesne oluşturmak değildir. Bir ihtiyacı anlamak, bir fikre karakter kazandırmak ve onu dokunulabilir, kullanılabilir, hissedilebilir bir deneyime dönüştürmektir."
      },
      {
        "type": "p",
        "text": "Siner Prime'da koku, tasarım, malzeme ve üretimi birbirinden bağımsız düşünmüyoruz. Bir ürünün formunu, dokusunu, işlevini, kokusunu, ambalajını ve sunumunu aynı hikâyenin parçaları olarak değerlendiriyoruz."
      },
      {
        "type": "p",
        "text": "Camın şeffaflığı, ahşabın sıcaklığı, metalin karakteri, seramiğin dokusu ve ambalajın dili… Her malzemenin kendine özgü bir anlatımı olduğuna inanıyoruz."
      },
      {
        "type": "p",
        "text": "Kendi koleksiyonlarımızı geliştiriyor, farklı malzemeleri ve üretim disiplinlerini bir araya getiriyor, kurumlara ve markalara özel ürünler tasarlıyoruz."
      },
      {
        "type": "p",
        "text": "Buhurdanlıklardan koku koleksiyonlarına, reed diffuser ürünlerinden kişisel parfümlere, özel hediye setlerinden markaya özgü tasarım objelerine kadar uzanan çalışmalarımızda estetik, işlev, kalite ve deneyimi birlikte ele alıyoruz."
      },
      {
        "type": "p",
        "text": "Bizim için bir ürünün değeri yalnızca ne olduğuyla değil, nasıl düşünüldüğü, nasıl tasarlandığı ve insanda nasıl bir iz bıraktığıyla ölçülür."
      }
    ],
    "sections": [
      {
        "id": "tasarim-felsefemiz",
        "title": "Tasarım felsefemiz",
        "blocks": [
          {
            "type": "p",
            "text": "İyi tasarımın yalnızca görsel bir tercih olmadığına inanıyoruz."
          },
          {
            "type": "p",
            "text": "Bir ürünün neden var olduğunu, hangi ihtiyaca karşılık geldiğini, nasıl kullanılacağını, hangi malzemeyle üretileceğini ve kullanıcıyla nasıl bir ilişki kuracağını sorguluyoruz."
          },
          {
            "type": "p",
            "text": "Bu nedenle tasarım sürecine çoğu zaman bir ürün çizerek değil, bir fikir geliştirerek başlıyoruz."
          },
          {
            "type": "p",
            "text": "Bazen bir koku, bir ürün koleksiyonunun çıkış noktası oluyor. Bazen bir markanın hikâyesi, yeni bir ambalajın veya özel tasarım objenin ilhamını oluşturuyor. Bazen de bir mekânın atmosferi, orada kullanılacak ürünlerin bütünsel tasarım dilini belirliyor."
          },
          {
            "type": "p",
            "text": "Biz tasarımda geçici beğenilerden çok, zamana karşı değerini koruyabilen fikirleri önemsiyoruz."
          },
          {
            "type": "p",
            "text": "Sade ama karakterli, estetik ama işlevsel, özgün ama üretilebilir tasarımlar geliştirmeyi hedefliyoruz."
          },
          {
            "type": "p",
            "text": "Çünkü bir ürünün yalnızca güzel görünmesi yeterli değildir. Kullanılmalı, amacına hizmet etmeli, ait olduğu markayı doğru temsil etmeli ve kullanıcıyla anlamlı bir ilişki kurmalıdır."
          },
          {
            "type": "pull",
            "text": "Tasarım, bir nesnenin nasıl göründüğünden önce ne anlatmak istediğini bilmektir."
          }
        ],
        "kicker": "Bir Nesneye Form Vermek Değil, Ona Bir Anlam Kazandırmak"
      },
      {
        "id": "malzeme-ve-uretim-kulturu",
        "title": "Malzeme ve üretim kültürü",
        "blocks": [
          {
            "type": "p",
            "text": "Bir tasarımın karakterini yalnızca biçimi belirlemez. Kullanılan malzeme, yüzey dokusu, ağırlık, oran, birleşim detayları ve işçilik de ürünün kimliğinin bir parçasıdır."
          },
          {
            "type": "p",
            "text": "Cam, ışığı ve şeffaflığıyla; ahşap, doğallığı ve sıcaklığıyla; metal, dayanıklılığı ve karakteriyle; seramik ise dokusu ve form çeşitliliğiyle tasarıma farklı anlamlar kazandırır."
          },
          {
            "type": "p",
            "text": "Biz bu malzemeleri yalnızca üretim araçları olarak değil, tasarımın anlatım dilini oluşturan unsurlar olarak görüyoruz."
          },
          {
            "type": "p",
            "text": "Projeye göre farklı malzemeleri bir araya getiriyor; ürün, kapak, aksesuar, ambalaj ve sunum detaylarını bütünlük içerisinde değerlendiriyoruz."
          },
          {
            "type": "p",
            "text": "Bazen cam bir şişe ile ahşap bir kapağın birlikteliği, bazen metal bir detayın seramik bir objeyle buluşması, bazen de özel tasarlanmış bir kutunun ürünün hikâyesini tamamlaması…"
          },
          {
            "type": "p",
            "text": "Her ayrıntının bir amacı olması gerektiğine inanıyoruz."
          },
          {
            "type": "pull",
            "text": "Bizim için malzeme seçimi, üretimden önce başlayan bir tasarım kararıdır."
          }
        ],
        "kicker": "Her Malzemenin Bir Dili, Her Formun Bir Karakteri Vardır"
      },
      {
        "id": "koleksiyonlarimiz",
        "title": "Koleksiyonlarımız",
        "blocks": [
          {
            "type": "p",
            "text": "Her koleksiyonumuzun kendine özgü bir kullanım amacı, malzeme karakteri ve duyusal dünyası vardır."
          },
          {
            "type": "p",
            "text": "Bir koleksiyon geliştirirken yalnızca birbirine benzeyen ürünleri bir araya getirmiyoruz. Ortak bir tasarım dili, kullanım deneyimi ve bütünlük oluşturmayı amaçlıyoruz."
          },
          {
            "type": "steps",
            "items": [
              {
                "num": "01",
                "title": "Buhurdanlık Koleksiyonları",
                "body": [
                  {
                    "type": "p",
                    "text": "Buhurdanlık, yalnızca koku kullanımına yönelik bir obje değildir. Bulunduğu mekânın atmosferine eşlik eden, dekorasyonun bir parçası hâline gelen ve kendine özgü bir kullanım ritüeli oluşturan tasarım nesnesidir."
                  },
                  {
                    "type": "p",
                    "text": "Büyük ve orta boy kubbe buhurdanlıklar, lamp buhurdanlıklar ve maşalı modellerden oluşan koleksiyonumuzda farklı formları, malzemeleri ve kullanım biçimlerini bir araya getiriyoruz."
                  },
                  {
                    "type": "p",
                    "text": "Her modelde estetik görünümün yanında kullanım kolaylığını, malzeme uyumunu ve ürünün mekân içerisindeki duruşunu önemsiyoruz."
                  }
                ],
                "tagline": "Geleneksel bir deneyimin çağdaş tasarımla buluşması."
              },
              {
                "num": "02",
                "title": "Koku Yağları Koleksiyonu",
                "body": [
                  {
                    "type": "p",
                    "text": "Buhurdanlık kullanımına yönelik farklı koku karakterlerinden oluşan yağ koleksiyonumuz, farklı atmosferler ve kişisel koku tercihleri için seçenekler sunar."
                  },
                  {
                    "type": "p",
                    "text": "Her kokunun kendine özgü bir karakteri, nota yapısı ve bıraktığı bir iz vardır."
                  },
                  {
                    "type": "p",
                    "text": "Koku seçimlerini yalnızca güzel kokma üzerinden değil, oluşturduğu çağrışımlar ve kullanım deneyimi üzerinden de değerlendiriyoruz."
                  }
                ],
                "tagline": "Kokunun karakterini keşfetmek."
              },
              {
                "num": "03",
                "title": "Reed Diffuser Koleksiyonu",
                "body": [
                  {
                    "type": "p",
                    "text": "Reed diffuser koleksiyonumuzda camın şeffaflığını, formun sadeliğini ve koku deneyiminin sürekliliğini bir araya getiriyoruz."
                  },
                  {
                    "type": "p",
                    "text": "Reed Diffuser  modellerimiz, yaşam alanlarına uyum sağlayan sade tasarım anlayışıyla geliştirilmiştir."
                  },
                  {
                    "type": "p",
                    "text": "Şişe formu, kapak, çubuk ve koku karakterinin birbirini tamamlamasını önemsiyoruz. Çünkü bir reed diffuser yalnızca koku veren bir ürün değil, bulunduğu ortamın görsel bütünlüğüne de katılan bir tasarım objesidir."
                  }
                ],
                "tagline": "Sadelik, denge ve zamansız form."
              },
              {
                "num": "04",
                "title": "Minimal Reed Diffuser Deneyim Seti",
                "body": [
                  {
                    "type": "p",
                    "text": "Koku keşfetmenin en güzel yollarından biri, farklı karakterleri karşılaştırarak deneyimlemektir."
                  },
                  {
                    "type": "p",
                    "text": "Minimal Reed Diffuser Deneyim Seti, farklı koku seçeneklerini bir araya getirerek kullanıcıya kendi tercihlerini keşfedebileceği bir deneyim sunmak üzere tasarlanmıştır."
                  },
                  {
                    "type": "pull",
                    "text": "Buradaki amaç yalnızca bir ürün sunmak değil, kokuyla kurulacak kişisel ilişkinin ilk adımını oluşturmaktır."
                  }
                ],
                "tagline": "Küçük bir koleksiyon, farklı koku dünyaları."
              },
              {
                "num": "05",
                "title": "Siner Box — 7'li Parfüm Deneyim Seti",
                "body": [
                  {
                    "type": "p",
                    "text": "Siner Box, yedi farklı kokuyu tek bir koleksiyonda buluşturan özel bir keşif deneyimidir."
                  },
                  {
                    "type": "p",
                    "text": "Her koku, kendine özgü bir karakteri ve anlatımı temsil eder. Kullanıcı farklı kokuları deneyimleyerek kendi beğenisini keşfeder, kendisine yakın bulduğu koku dünyasını tanır."
                  },
                  {
                    "type": "p",
                    "text": "Bu koleksiyonda özellikle önemsediğimiz şey, kokuyu yalnızca tüketilen bir ürün olmaktan çıkarıp keşfedilen bir deneyime dönüştürmektir."
                  },
                  {
                    "type": "p",
                    "text": "Siner Box yaklaşımında ürün sunumunu da deneyimin parçası olarak görüyoruz. Her kokuya eşlik eden mesajlar, koleksiyonun hikâyesini tamamlayan ayrıntılar olarak düşünülebilir."
                  }
                ],
                "tagline": "Yedi koku, yedi farklı karakter, keşfedilecek yeni bir dünya."
              },
              {
                "num": "06",
                "title": "El Yapımı Kolonya Koleksiyonu",
                "body": [
                  {
                    "type": "p",
                    "text": "Kolonya, kültürümüzde misafirperverliğin, paylaşmanın ve gündelik yaşamın önemli parçalarından biridir."
                  },
                  {
                    "type": "p",
                    "text": "Koleksiyonumuzda bu geleneksel kültürü farklı koku seçimleri, özenli sunum ve el işçiliğiyle buluşturuyoruz."
                  },
                  {
                    "type": "p",
                    "text": "Bizim için kolonya yalnızca bir ferahlık ürünü değil; aynı zamanda ikramın, hatırlanmanın ve kültürel bir alışkanlığın taşıyıcısıdır."
                  }
                ],
                "tagline": "Geleneksel bir kültür, özgün koku karakterleri."
              },
              {
                "num": "07",
                "title": "Refill Koleksiyonu",
                "body": [
                  {
                    "type": "p",
                    "text": "Bir ürünün tasarımı kadar kullanım ömrü de önemlidir."
                  },
                  {
                    "type": "p",
                    "text": "Refill koleksiyonumuz, yeniden kullanılabilir ürün sistemlerini destekleyen tamamlayıcı çözümlerden oluşur."
                  },
                  {
                    "type": "list",
                    "items": [
                      "Reed diffuser refill ürünleri",
                      "Oda spreyi refill ürünleri",
                      "Yedekli oto araç kokusu sistemleri"
                    ]
                  },
                  {
                    "type": "p",
                    "text": "Bu yaklaşımımızla uygun ürünlerin yeniden kullanılmasını, tamamlayıcı dolum çözümleriyle kullanım sürelerinin desteklenmesini hedefliyoruz."
                  },
                  {
                    "type": "pull",
                    "text": "Çünkü iyi tasarım yalnızca ilk kullanım anını değil, ürünün yaşam döngüsünü de düşünmelidir."
                  }
                ],
                "tagline": "Yeniden kullanım, daha uzun bir ürün yolculuğu."
              },
              {
                "num": "08",
                "title": "Kişisel Parfüm Koleksiyonu",
                "body": [
                  {
                    "type": "p",
                    "text": "Parfüm, insanın kendisini ifade etme biçimlerinden biridir."
                  },
                  {
                    "type": "p",
                    "text": "Bazı kokular bir karakteri, bazıları bir anıyı, bazıları ise kişinin kendisine ait bir dünyayı temsil eder."
                  },
                  {
                    "type": "p",
                    "text": "Kişisel parfüm koleksiyonumuzda farklı koku karakterlerini, kişisel kullanım ve özgün tercihleri bir araya getiriyoruz."
                  },
                  {
                    "type": "p",
                    "text": "Koku kompozisyonundan şişe tasarımına, kapak detayından sunuma kadar ürünün bütününü bir deneyim olarak ele alıyoruz."
                  }
                ],
                "tagline": "Koku, kişisel bir imzadır."
              }
            ]
          }
        ],
        "kicker": "Farklı Formlar, Farklı Karakterler, Aynı Tasarım Yaklaşımı"
      },
      {
        "id": "markalara-ve-kurumlara-ozel-tasarim",
        "title": "Markalara ve kurumlara özel tasarım",
        "blocks": [
          {
            "type": "p",
            "text": "Kendi koleksiyonlarımızın yanında, markaların ve kurumların ihtiyaçlarına özel ürünler ve koleksiyonlar geliştiriyoruz."
          },
          {
            "type": "p",
            "text": "Çünkü her markanın kendine özgü bir kimliği, hedef kitlesi ve anlatmak istediği bir hikâyesi vardır."
          },
          {
            "type": "p",
            "text": "Bir otelin misafirlerine sunacağı özel bir karşılama koleksiyonu, bir müzenin kültürel kimliğini taşıyan tasarım objeleri, bir şirketin çalışanlarına veya iş ortaklarına hazırlayacağı özel hediye seti…"
          },
          {
            "type": "p",
            "text": "Her proje farklı bir yaklaşım gerektirir."
          },
          {
            "type": "p",
            "text": "Bu nedenle hazır ürünleri yalnızca logo uygulayarak sunmakla yetinmiyoruz. Projenin amacını, markanın karakterini, kullanım alanını ve beklentilerini anlayarak özgün çözümler geliştirmeyi hedefliyoruz."
          },
          {
            "type": "h3",
            "text": "Tasarımdan Üretime Uzanan Süreç"
          },
          {
            "type": "steps",
            "items": [
              {
                "num": "01",
                "title": "Fikir ve konsept geliştirme",
                "body": [
                  {
                    "type": "p",
                    "text": "Markanın kimliğini, proje amacını ve hedef kitlesini anlayarak tasarım yönünü belirleriz."
                  }
                ]
              },
              {
                "num": "02",
                "title": "Ürün tasarımı",
                "body": [
                  {
                    "type": "p",
                    "text": "Ürünün formunu, kullanım biçimini, boyutlarını ve görsel karakterini geliştiririz."
                  }
                ]
              },
              {
                "num": "03",
                "title": "Malzeme ve yüzey seçimi",
                "body": [
                  {
                    "type": "p",
                    "text": "Cam, ahşap, metal, seramik ve diğer uygun malzemeleri projenin ihtiyaçlarına göre değerlendiririz."
                  }
                ]
              },
              {
                "num": "04",
                "title": "Koku ve ürün bütünlüğü",
                "body": [
                  {
                    "type": "p",
                    "text": "Proje gerektiriyorsa özgün koku karakterini ürün tasarımıyla buluştururuz."
                  }
                ]
              },
              {
                "num": "05",
                "title": "Ambalaj ve sunum tasarımı",
                "body": [
                  {
                    "type": "p",
                    "text": "Kutudan etikete, baskıdan özel aksesuarlara kadar ürünün sunum dilini oluştururuz."
                  }
                ]
              },
              {
                "num": "06",
                "title": "Prototip ve üretim geliştirme",
                "body": [
                  {
                    "type": "p",
                    "text": "Tasarımın uygulanabilirliğini değerlendirir, numune ve prototip süreçlerini proje kapsamına göre yürütürüz."
                  }
                ]
              },
              {
                "num": "07",
                "title": "Üretim ve kalite değerlendirmesi",
                "body": [
                  {
                    "type": "p",
                    "text": "Belirlenen teknik ve görsel kriterlere göre üretim sürecini ve son ürün bütünlüğünü değerlendiririz."
                  }
                ]
              }
            ]
          },
          {
            "type": "p",
            "text": "Bu yaklaşım sayesinde bir ürünün yalnızca kendisini değil, onu çevreleyen bütün deneyimi tasarlamayı önemsiyoruz."
          },
          {
            "type": "h3",
            "text": "Hangi Alanlarda Çalışıyoruz?"
          },
          {
            "type": "list",
            "items": [
              "Otel ve konaklama koleksiyonları",
              "Kurumsal hediye ve özel sunum setleri",
              "Marka kimliğine özel koku ürünleri",
              "Özel tasarım şişe ve kapak uygulamaları",
              "Cam, ahşap, metal ve seramik objeler",
              "Özel ambalaj ve kutu tasarımları",
              "Mağaza ve perakende koleksiyonları",
              "Müze, kültür ve deneyim projeleri",
              "Lansman ve etkinliklere özel ürün serileri"
            ]
          },
          {
            "type": "p",
            "text": "Bir markaya özel ürün geliştirmek, yalnızca üzerine logo koymak değildir. O markanın karakterini ürüne taşıyabilmektir."
          }
        ],
        "kicker": "Her Markanın Bir Hikâyesi Vardır. Biz O Hikâyeye Form Veriyoruz"
      },
      {
        "id": "tasarimda-onemsedigimiz-degerler",
        "title": "Tasarımda önemsediğimiz değerler",
        "blocks": [
          {
            "type": "defs",
            "items": [
              {
                "term": "Özgünlük",
                "body": "Her projenin kendi karakterine sahip olmasını önemsiyoruz."
              },
              {
                "term": "İşlev",
                "body": "Tasarımın günlük kullanımda karşılığının bulunması gerektiğine inanıyoruz."
              },
              {
                "term": "Malzeme",
                "body": "Doğru malzemenin ürünün karakterini belirlediğini düşünüyoruz."
              },
              {
                "term": "Bütünlük",
                "body": "Ürün, koku, ambalaj ve sunumun aynı hikâyeyi anlatmasını hedefliyoruz."
              },
              {
                "term": "Zamansızlık",
                "body": "Geçici eğilimler yerine uzun vadede değerini koruyabilecek tasarımlara odaklanıyoruz."
              },
              {
                "term": "Sorumluluk",
                "body": "Malzeme seçimi, kullanım ömrü, yeniden kullanım ve üretim koşullarını tasarım sürecinin bir parçası olarak değerlendiriyoruz."
              }
            ]
          }
        ]
      },
      {
        "id": "bizim-icin-tasarim-biten-bir-urun-degil-baslayan",
        "title": "Bizim için tasarım, biten bir ürün değil; başlayan bir deneyimdir",
        "blocks": [
          {
            "type": "p",
            "text": "Bir ürün tasarlandığında yolculuğu sona ermez."
          },
          {
            "type": "p",
            "text": "Onu kullanan insanla, bulunduğu mekânla, temsil ettiği markayla ve zaman içerisinde oluşturduğu anılarla yeni bir anlam kazanır."
          },
          {
            "type": "p",
            "text": "Bazen bir buhurdanlık evin en özel köşesine yerleşir. Bazen bir parfüm kişinin imzasına dönüşür. Bazen bir hediye, yıllar sonra bile hatırlanan bir anının parçası olur."
          },
          {
            "type": "p",
            "text": "Biz tasarımın bu görünmeyen tarafını önemsiyoruz."
          },
          {
            "type": "p",
            "text": "Çünkü bir ürünün gerçek değeri yalnızca üretildiği anda değil, hayatın içinde kazandığı anlamda ortaya çıkar."
          },
          {
            "type": "pull",
            "text": "Daha fazla ürün değil, daha fazla değer üretiyoruz."
          }
        ]
      },
      {
        "id": "koleksiyonlarimizi-kesfedin",
        "title": "Koleksiyonlarımızı keşfedin",
        "blocks": [
          {
            "type": "p",
            "text": "Koku, tasarım ve malzemenin bir araya geldiği koleksiyonlarımızı yakından inceleyin. Kendinize, yaşam alanınıza veya sevdiklerinize ait bir deneyim keşfedin."
          },
          {
            "type": "cta",
            "label": "Tüm Koleksiyonları Keşfedin",
            "to": "urunler"
          }
        ]
      },
      {
        "id": "markaniza-ozel-bir-koleksiyon-gelistirelim",
        "title": "Markanıza özel bir koleksiyon geliştirelim",
        "blocks": [
          {
            "type": "p",
            "text": "Henüz bir ürüne dönüşmemiş bir fikriniz mi var?"
          },
          {
            "type": "p",
            "text": "Markanız, kurumunuz, oteliniz veya projeniz için özgün bir ürün, özel bir koku koleksiyonu ya da tasarım odaklı bir hediye serisi geliştirmek istiyorsanız birlikte düşünelim."
          },
          {
            "type": "p",
            "text": "Fikrinizi dinleyelim, ihtiyaçlarınızı anlayalım ve onu tasarımdan ürüne uzanan bir yolculuğa dönüştürelim."
          },
          {
            "type": "cta",
            "label": "Projenizi Birlikte Geliştirelim",
            "to": "#iletisim"
          }
        ]
      }
    ]
  },
  {
    "slug": "proje-gelistirme",
    "num": "06",
    "menu": "Proje Geliştirme ve Uygulama",
    "title": "Proje geliştirme ve uygulama",
    "subtitle": "Bir Fikirden Daha Fazlası. Bir Kimlik, Bir Deneyim, Bir Değer.",
    "intro": [
      {
        "type": "p",
        "text": "Bazı projeler bir ürünle başlar. Bazıları bir mekânla. Bazıları ise henüz kelimelere dökülmemiş bir fikirle…"
      },
      {
        "type": "p",
        "text": "Her kurumun anlatmak istediği bir hikâye, her markanın kendine özgü bir kimliği ve her mekânın yaşatabileceği farklı bir deneyim vardır."
      },
      {
        "type": "p",
        "text": "Biz bu hikâyelerin nasıl tasarıma, ürüne, mekâna ve deneyime dönüşebileceğini keşfetmekle başlarız."
      },
      {
        "type": "p",
        "text": "Bir otelin misafirlerini kendine özgü bir kokuyla karşılaması, bir müzenin ziyaretçilerine farklı duyularla keşfedebilecekleri bir atmosfer sunması, bir markanın kendi kimliğini taşıyan özel bir koleksiyon geliştirmesi veya insanların fotoğraf çekmek ve paylaşmak isteyeceği özgün bir alan oluşturması…"
      },
      {
        "type": "p",
        "text": "Bunların her biri farklı ihtiyaçlardan doğar. Ancak ortak noktaları aynıdır: İnsanlarla bağ kurmak, değer üretmek ve hafızada yer etmek."
      },
      {
        "type": "p",
        "text": "Çünkü bizim için bir proje, yalnızca ortaya çıkan bir ürün veya tamamlanan bir uygulama değildir. İnsanların gördüğü, hissettiği, deneyimlediği ve hatırladığı bir bütündür."
      }
    ],
    "sections": [
      {
        "id": "kurumsal-mekan-ve-deneyim-projeleri",
        "title": "Kurumsal mekân ve deneyim projeleri",
        "blocks": [
          {
            "type": "p",
            "text": "Bir kurumun kimliği yalnızca logosu, mimarisi veya dekorasyonuyla oluşmaz. İnsanların o mekâna girdiklerinde hissettikleri atmosfer, karşılaştıkları detaylar, yaşadıkları deneyimler ve yanlarında götürdükleri hatıralar da bu kimliğin bir parçasıdır."
          },
          {
            "type": "p",
            "text": "Bu nedenle mekânları yalnızca kullanılan alanlar olarak değil, markanın kendisini ifade edebildiği ve ziyaretçileriyle bağ kurabildiği deneyim noktaları olarak ele alıyoruz."
          },
          {
            "type": "p",
            "text": "Kurumun sektörünü, mekânın özelliklerini, hedef kitlesini ve beklentilerini değerlendirerek birbirini tamamlayan çözümler geliştiriyoruz."
          },
          {
            "type": "h3",
            "text": "Mekânın Koku Kimliğini Oluşturuyoruz"
          },
          {
            "type": "p",
            "text": "Bir mekânın kendine özgü bir koku karakterine sahip olması, ziyaretçinin yaşadığı deneyimin farklı bir parçasını oluşturabilir."
          },
          {
            "type": "p",
            "text": "Kurumun kimliğine, mekânın kullanım amacına ve hedef kitlesine uygun koku geliştirme ve mekânsal kokulandırma projeleri hazırlıyoruz."
          },
          {
            "type": "list",
            "items": [
              "Kuruma ve mekâna özel imza kokular",
              "Otel, müze, mağaza, ofis ve ortak kullanım alanları için koku tasarımı",
              "Lobi, resepsiyon, oda, restoran ve özel alanlara yönelik koku yaklaşımları",
              "Profesyonel kokulandırma cihazları ve sistemleri",
              "Mekânın teknik koşullarına uygun sistem planlaması ve uygulama",
              "Kurumsal koku kimliğini destekleyen özel ürünler"
            ]
          },
          {
            "type": "h3",
            "text": "Mekânları Deneyim Alanlarına Dönüştürüyoruz"
          },
          {
            "type": "p",
            "text": "Bazı alanlar yalnızca güzel görünmek için değil, insanların içinde vakit geçirmek, etkileşim kurmak ve bir deneyimin parçası olmak istemesi için tasarlanır."
          },
          {
            "type": "p",
            "text": "Kurumun kimliğine ve mekânın kullanım amacına uygun özgün deneyim alanları geliştiriyoruz."
          },
          {
            "type": "list",
            "items": [
              "Karşılama ve ağırlama alanları",
              "Tematik deneyim ve etkileşim alanları",
              "Ziyaretçi deneyimini destekleyen özel tasarım uygulamaları",
              "Sergileme ve sunum alanları",
              "Duyusal deneyim ve koku keşif alanları",
              "Markanın veya kurumun hikâyesini yansıtan konsept uygulamalar"
            ]
          },
          {
            "type": "h3",
            "text": "Fotoğraf Noktaları ve Sosyal Medya Deneyim Alanları"
          },
          {
            "type": "p",
            "text": "İnsanların yalnızca görüp geçtiği değil, içinde yer almak ve deneyimini paylaşmak istediği alanlar tasarlıyoruz."
          },
          {
            "type": "p",
            "text": "Fotoğraf ve video çekimine uygun, markanın karakterini yansıtan ve sosyal medyada paylaşılmaya değer görsel deneyim noktaları oluşturuyoruz."
          },
          {
            "type": "list",
            "items": [
              "Markaya özel fotoğraf çekim noktaları",
              "Özgün fotoğraf fonları ve dekoratif enstalasyonlar",
              "Tematik fotoğraf ve video alanları",
              "Sosyal medya paylaşımına uygun deneyim köşeleri",
              "Mevsimsel ve dönemsel konsept dekorasyonlar",
              "Özel gün, kampanya ve etkinlik alanları",
              "Markanın kimliğini yansıtan görsel tasarım uygulamaları"
            ]
          },
          {
            "type": "p",
            "text": "Amacımız yalnızca dikkat çeken bir dekor oluşturmak değil; ziyaretçinin mekânla etkileşime girmesini, kendi deneyimini paylaşmasını ve bu deneyim aracılığıyla kurumun daha fazla kişiyle buluşmasını desteklemektir."
          },
          {
            "type": "h3",
            "text": "Dekorasyon ve Mekânsal Tasarım Uygulamaları"
          },
          {
            "type": "p",
            "text": "Mekânın karakterini güçlendiren, ziyaretçi deneyimini destekleyen ve oluşturulan konsepti görünür kılan dekorasyon çözümleri geliştiriyoruz."
          },
          {
            "type": "list",
            "items": [
              "Tematik ve konsept dekorasyonlar",
              "Özel tasarım dekoratif objeler",
              "Ahşap, cam, metal ve seramik uygulamalar",
              "Karşılama ve sergileme üniteleri",
              "Mevsimsel ve dönemsel mekân düzenlemeleri",
              "Etkinlik ve organizasyon dekorasyonu",
              "Fotoğraf ve deneyim alanlarına yönelik özel tasarımlar"
            ]
          },
          {
            "type": "h3",
            "text": "Kurumun Kokusunu Mekânın Dışına Taşıyoruz"
          },
          {
            "type": "p",
            "text": "Bir misafirin otel odasında karşılaştığı koku, ayrılırken yanında götürdüğü bir kolonya, ziyaret ettiği müzeden aldığı kokulu bir kartpostal veya kendisine sunulan özel bir hediye kutusu…"
          },
          {
            "type": "p",
            "text": "Aynı koku karakteri farklı temas noktalarında karşısına çıkarak kurumla kurduğu bağı destekleyebilir."
          },
          {
            "type": "p",
            "text": "Bu nedenle kuruma özel geliştirilen koku kimliğini yalnızca mekânda kullanılan bir unsur olarak bırakmıyor, farklı ürün ve koleksiyonlara uyarlıyoruz."
          },
          {
            "type": "p",
            "text": "Geliştirilebilecek ürün ve koleksiyonlar:"
          },
          {
            "type": "list",
            "items": [
              "Araç kokuları",
              "Reed diffuser ve oda kokuları",
              "Kokulu tablolar",
              "Kokulu kartpostallar",
              "Kokulu kâğıt ve özel baskılı materyaller",
              "Kolonya ve mini kolonya",
              "Buhurdanlık ve buhurdanlık yağları",
              "Kokulu mumlar",
              "Kolonyalı mendiller",
              "Özel tasarım koku ürünleri",
              "Kurumsal hediye setleri ve özel hediye kutuları"
            ]
          },
          {
            "type": "p",
            "text": "Bu ürünlerin tamamı her projede zorunlu değildir. Kurumun hedeflerine, bütçesine, kullanım alanlarına ve hediye politikasına göre uygun ürün ailesini birlikte belirliyoruz."
          },
          {
            "type": "pull",
            "text": "Mekândan ürüne, üründen hatıraya uzanan bir deneyim bütünlüğü oluşturuyoruz."
          }
        ],
        "num": "01",
        "kicker": "Mekânın Kimliğini Tasarlıyor, Deneyimi Zenginleştiriyoruz"
      },
      {
        "id": "markaya-ozel-urun-ve-koleksiyon-projeleri",
        "title": "Markaya özel ürün ve koleksiyon projeleri",
        "blocks": [
          {
            "type": "p",
            "text": "Bazı markalar yalnızca kendilerine ait bir kokuya sahip olmak ister. Bazıları bu kokuyu müşterilerine hediye etmek, bazıları satışa sunmak, bazıları ise marka bilinirliğini destekleyen özgün ürünler geliştirmek ister."
          },
          {
            "type": "p",
            "text": "İhtiyaç ne olursa olsun, markanın kimliğini, hedef kitlesini, konumlandırmasını ve ticari beklentilerini değerlendirerek özel ürün ve koleksiyonlar geliştiriyoruz."
          },
          {
            "type": "h3",
            "text": "Markanıza Özel Koku Kimliği"
          },
          {
            "type": "p",
            "text": "Markanın karakterini, hikâyesini, hedef kitlesini ve konumlandırmasını değerlendirerek kendine özgü koku karakterleri üzerinde çalışıyoruz."
          },
          {
            "type": "p",
            "text": "Geliştirilen koku karakterlerini farklı ürün gruplarına uyarlayarak bütünlüklü koleksiyonlara dönüştürebiliyoruz."
          },
          {
            "type": "list",
            "items": [
              "Markaya özel imza kokular",
              "Kişisel parfüm ve özel koku koleksiyonları",
              "Kurumsal kolonya serileri",
              "Mekânsal koku ürünleri",
              "Araç ve yaşam alanı kokuları",
              "Ürün ve hediye koleksiyonlarına özel koku geliştirme"
            ]
          },
          {
            "type": "h3",
            "text": "Markaya Özel Ürün Koleksiyonları"
          },
          {
            "type": "p",
            "text": "Markanın kimliğini taşıyan, farklı kullanım alanlarına ve hedeflere yönelik ürün aileleri geliştiriyoruz."
          },
          {
            "type": "list",
            "items": [
              "Kişisel parfüm ve özel koku koleksiyonları",
              "Kolonya ve mini kolonya",
              "Araç kokuları",
              "Reed diffuser ve oda kokuları",
              "Kokulu tablolar ve kartpostallar",
              "Kokulu kâğıt ve özel baskılı ürünler",
              "Buhurdanlık ve koku yağları",
              "Kokulu mumlar",
              "Kolonyalı mendiller",
              "Özel tasarım hediye setleri",
              "Markaya özel kutu ve ambalaj koleksiyonları"
            ]
          },
          {
            "type": "h3",
            "text": "Tasarımdan Üretime Bütünsel Marka Çözümleri"
          },
          {
            "type": "p",
            "text": "Bir ürünün yalnızca kokusunu veya dış görünüşünü değil, bütün deneyimini değerlendiriyoruz."
          },
          {
            "type": "p",
            "text": "Fikir ve konsept geliştirmeden malzeme seçimine, ürün formundan ambalaja kadar farklı bileşenleri bir araya getiriyoruz."
          },
          {
            "type": "list",
            "items": [
              "Marka hikâyesine uygun konsept geliştirme",
              "Koku karakteri ve ürün içeriği",
              "Şişe, kapak ve ürün formu tasarımı",
              "Cam, ahşap, metal ve seramik gibi malzemelerin seçimi",
              "Etiket, baskı ve ambalaj tasarımı",
              "Hediye kutusu ve koleksiyon kurgusu",
              "Numune ve prototip geliştirme",
              "Üretim, tedarik ve kalite koordinasyonu"
            ]
          },
          {
            "type": "h3",
            "text": "Bir Koleksiyonun Farklı Kullanım Alanları"
          },
          {
            "type": "p",
            "text": "Markaya özel geliştirilen ürünler, yalnızca tek bir amaçla sınırlı kalmak zorunda değildir."
          },
          {
            "type": "defs",
            "items": [
              {
                "term": "Satış",
                "body": "Markanın kendi satış kanallarında veya perakende noktalarında sunulabilecek yeni ürün grupları oluşturmak."
              },
              {
                "term": "Kurumsal hediye",
                "body": "Müşterilere, iş ortaklarına ve çalışanlara markanın kimliğini taşıyan özel hediyeler sunmak."
              },
              {
                "term": "Tanıtım ve iletişim",
                "body": "Lansmanlarda, organizasyonlarda, fuarlarda ve kampanyalarda markanın hatırlanmasını destekleyen ürünler geliştirmek."
              },
              {
                "term": "Marka deneyimi",
                "body": "Müşterinin markayla yalnızca satın alma anında değil, ürünün kullanımı boyunca da bağ kurmasını desteklemek."
              },
              {
                "term": "Yeni gelir alanları",
                "body": "Markanın mevcut ürün ve hizmetlerini tamamlayan, satışa sunulabilir özel koleksiyonlar oluşturmak."
              }
            ]
          },
          {
            "type": "p",
            "text": "Bizim için önemli olan, ortaya çıkan ürünün yalnızca güzel görünmesi değil; markanın kimliğine uygun, işlevsel, anlamlı ve hedefleriyle uyumlu bir değer taşımasıdır."
          }
        ],
        "num": "02",
        "kicker": "Markanızın Kimliğini Ürüne, Koleksiyona ve Yeni Değer Alanlarına Dönüştürelim"
      },
      {
        "id": "etkinlik-atolye-ve-marka-deneyimleri",
        "title": "Etkinlik, atölye ve marka deneyimleri",
        "blocks": [
          {
            "type": "p",
            "text": "Bazı deneyimler anlatılarak değil, yaşanarak hatırlanır."
          },
          {
            "type": "p",
            "text": "Markaların, kurumların ve mekânların hedef kitleleriyle doğrudan etkileşim kurabileceği etkinlikler ve katılımcı deneyimleri geliştiriyoruz."
          },
          {
            "type": "p",
            "text": "Kurumun kimliğine, sektörüne, hedef kitlesine ve etkinliğin amacına göre farklı konseptler oluşturuyoruz."
          },
          {
            "type": "list",
            "items": [
              "Koku keşif ve parfüm atölyeleri",
              "Uygulamalı koku ve ürün geliştirme workshopları",
              "Marka lansmanları ve ürün tanıtımları",
              "Kurumsal özel gün organizasyonları",
              "Tematik deneyim etkinlikleri",
              "Otel ve turizm tesislerine özel misafir etkinlikleri",
              "Müze ve kültürel alanlarda katılımcı deneyimler",
              "Özel tasarım etkinlik ve sunum alanları",
              "Etkinliklere özel hediye ve ürün koleksiyonları"
            ]
          },
          {
            "type": "p",
            "text": "Etkinliğin yalnızca gerçekleştiği ana değil, öncesinde oluşturulan meraka, etkinlik sırasında yaşanan etkileşime ve sonrasında hatırlanacak detaylara da önem veriyoruz."
          }
        ],
        "num": "03",
        "kicker": "İnsanları İzleyici Olmaktan Çıkarıp Deneyimin Bir Parçası Yapıyoruz"
      },
      {
        "id": "sektore-gore-degisen-ihtiyaca-gore-sekillenen-pr",
        "title": "Sektöre göre değişen, ihtiyaca göre şekillenen projeler",
        "blocks": [
          {
            "type": "p",
            "text": "Bir otelin misafirine sunduğu deneyim ile bir müzenin ziyaretçisine sunduğu deneyim aynı değildir. Bir alışveriş merkezinde dikkat çeken uygulama, bir markanın mağazasında farklı bir amaca hizmet eder."
          },
          {
            "type": "p",
            "text": "Bu nedenle her kuruma aynı çözümü sunmuyoruz. Sektörün dinamiklerine, mekânın özelliklerine, hedef kitleye ve projenin amacına göre farklı disiplinleri bir araya getiriyoruz."
          },
          {
            "type": "h3",
            "text": "Oteller ve Turizm Tesisleri"
          },
          {
            "type": "p",
            "text": "Misafirlerin konaklama deneyimini zenginleştiren, otelin kimliğini güçlendiren ve hatırlanabilir temas noktaları oluşturan projeler."
          },
          {
            "type": "list",
            "items": [
              "Otele özel imza koku ve mekânsal kokulandırma",
              "Lobi, oda, restoran ve ortak alan deneyimleri",
              "Özel tasarım hediye ve misafir koleksiyonları",
              "Fotoğraf çekim ve sosyal medya paylaşım alanları",
              "Tematik dekorasyon ve dönemsel konseptler",
              "Koku ve parfüm atölyeleri",
              "Özel etkinlik ve misafir deneyimi uygulamaları"
            ]
          },
          {
            "type": "h3",
            "text": "Müzeler ve Kültürel Alanlar"
          },
          {
            "type": "p",
            "text": "Ziyaretçilerin mekânla daha güçlü bir bağ kurmasını, anlatımı farklı duyularla keşfetmesini ve deneyimini hatırlamasını destekleyen projeler."
          },
          {
            "type": "list",
            "items": [
              "Tematik koku ve duyusal deneyim tasarımları",
              "Sergi ve ziyaretçi etkileşim alanları",
              "Hikâyeye özel dekoratif uygulamalar",
              "Fotoğraf ve hatıra noktaları",
              "Özel ürün ve hediyelik koleksiyonlar",
              "Kokulu kartpostal ve tematik ürünler",
              "Atölye ve katılımcı deneyim etkinlikleri"
            ]
          },
          {
            "type": "h3",
            "text": "Alışveriş Merkezleri ve Perakende"
          },
          {
            "type": "p",
            "text": "Ziyaretçilerin mekânda etkileşim kurmasını, markaları keşfetmesini ve deneyimlerini paylaşmasını destekleyen projeler."
          },
          {
            "type": "list",
            "items": [
              "Tematik fotoğraf ve sosyal medya alanları",
              "Dönemsel dekorasyon ve konsept uygulamaları",
              "Koku ve atmosfer tasarımı",
              "Marka aktivasyon ve tanıtım alanları",
              "Özel hediye ve ürün koleksiyonları",
              "Workshop ve deneyim organizasyonları",
              "Özel gün ve kampanya dekorasyonları"
            ]
          },
          {
            "type": "h3",
            "text": "Restoranlar, Kafeler ve Sosyal Yaşam Alanları"
          },
          {
            "type": "p",
            "text": "Mekânın karakterini destekleyen, ziyaretçi deneyimini zenginleştiren ve kendine özgü bir atmosfer oluşturan uygulamalar."
          },
          {
            "type": "list",
            "items": [
              "Mekâna uygun koku ve atmosfer tasarımı",
              "Tematik dekorasyon ve fotoğraf noktaları",
              "Özel sunum ve hediye ürünleri",
              "Dönemsel konsept uygulamaları",
              "Marka kimliğini destekleyen tasarım detayları",
              "Katılımcı deneyim ve etkinlikler"
            ]
          },
          {
            "type": "h3",
            "text": "Kurumlar ve Markalar"
          },
          {
            "type": "p",
            "text": "Marka kimliğini fiziksel ürünlere, mekânlara ve müşteri deneyimlerine taşıyan özel çalışmalar."
          },
          {
            "type": "list",
            "items": [
              "Kurumsal hediye koleksiyonları",
              "Markaya özel koku ve parfüm geliştirme",
              "Özel tasarım ürün ve ambalajlar",
              "Lansman ve marka deneyimi projeleri",
              "Ofis ve karşılama alanı tasarımları",
              "Fotoğraf ve etkileşim alanları",
              "Müşteri ve iş ortağı deneyim projeleri"
            ]
          }
        ],
        "num": "04",
        "kicker": "Her Sektörün Deneyimi Farklıdır"
      },
      {
        "id": "proje-gelistirme-ve-uygulama-surecimiz",
        "title": "Proje geliştirme ve uygulama sürecimiz",
        "blocks": [
          {
            "type": "p",
            "text": "Her proje aynı kapsamda ilerlemek zorunda değildir. Bazı projelerde yalnızca fikir ve tasarım geliştirmek yeterlidir. Bazılarında numune, prototip, üretim ve uygulama gerekir. Bazılarında ise farklı disiplinlerin tek bir proje kapsamında birlikte yönetilmesi beklenir."
          },
          {
            "type": "p",
            "text": "Bu nedenle çalışma sürecini kurumun veya markanın ihtiyaçlarına göre şekillendiriyoruz."
          },
          {
            "type": "steps",
            "items": [
              {
                "num": "01",
                "title": "Keşif ve İhtiyaç Analizi",
                "body": [
                  {
                    "type": "p",
                    "text": "Kurumunuzu veya markanızı, hedef kitlenizi, kullanım alanlarınızı, beklentilerinizi ve projenin amacını anlamaya çalışıyoruz. Gerekli durumlarda mekân ve uygulama koşullarını yerinde değerlendiriyoruz."
                  }
                ]
              },
              {
                "num": "02",
                "title": "Fikir ve Konsept Geliştirme",
                "body": [
                  {
                    "type": "p",
                    "text": "Projenin hikâyesini, koku yaklaşımını, tasarım dilini, ürün alternatiflerini ve deneyim kurgusunu oluşturuyoruz."
                  }
                ]
              },
              {
                "num": "03",
                "title": "Tasarım ve Planlama",
                "body": [
                  {
                    "type": "p",
                    "text": "Ürün, koku, malzeme, şişe, kapak, ambalaj, dekorasyon, teknik detaylar, bütçe ve uygulama takvimini bir bütün olarak değerlendiriyoruz."
                  }
                ]
              },
              {
                "num": "04",
                "title": "Numune ve Prototip",
                "body": [
                  {
                    "type": "p",
                    "text": "Gerekli projelerde numune ve prototip hazırlayarak ürünlerin, tasarımların ve uygulama detaylarının değerlendirme ve onay sürecini yürütüyoruz."
                  }
                ]
              },
              {
                "num": "05",
                "title": "Üretim ve Uygulama",
                "body": [
                  {
                    "type": "p",
                    "text": "Onaylanan proje doğrultusunda üretim, tedarik, üretim koordinasyonu, dekorasyon, kokulandırma ve saha uygulamalarını projenin kapsamına göre kendi ekibimiz ve uzman çözüm ortaklarımızla yönetiyoruz."
                  }
                ]
              },
              {
                "num": "06",
                "title": "Teslimat ve Süreklilik",
                "body": [
                  {
                    "type": "p",
                    "text": "Kalite kontrol, paketleme, teslimat ve projenin devam eden ihtiyaçlarını planlıyoruz. Projenin niteliğine göre tekrar sipariş, ürün yenileme, ikmal ve yeni koleksiyon geliştirme süreçlerinde destek sağlıyoruz."
                  }
                ]
              }
            ]
          }
        ],
        "num": "05",
        "kicker": "Fikirden Uygulamaya, Her Aşamada Planlı Bir Yaklaşım"
      },
      {
        "id": "her-projenin-kapsami-farkli-olabilir",
        "title": "Her projenin kapsamı farklı olabilir",
        "blocks": [
          {
            "type": "p",
            "text": "Bazen yalnızca bir fikir geliştirmek gerekir. Bazen o fikrin tasarlanması, prototipinin hazırlanması ve üretime dönüştürülmesi…"
          },
          {
            "type": "p",
            "text": "Bazı projelerde ise koku, ürün, ambalaj, dekorasyon, mekânsal deneyim ve saha uygulamalarının birlikte ele alınması gerekir."
          },
          {
            "type": "p",
            "text": "Siner Prime olarak projenin başından sonuna kadar farklı aşamaları üstlenebildiğimiz gibi, ihtiyaca göre belirli aşamalarda da çözüm ortağı olabiliriz."
          },
          {
            "type": "list",
            "items": [
              "Fikir ve konsept geliştirme",
              "Tasarım ve danışmanlık",
              "Koku ve ürün geliştirme",
              "Numune ve prototip hazırlama",
              "Üretim ve tedarik koordinasyonu",
              "Dekorasyon ve mekânsal uygulama",
              "Etkinlik ve deneyim organizasyonu",
              "Teslimat ve devam eden proje desteği"
            ]
          },
          {
            "type": "p",
            "text": "Çalışma kapsamını projenin ihtiyaçlarına, teknik koşullarına, bütçesine ve takvimine göre birlikte belirliyoruz."
          },
          {
            "type": "pull",
            "text": "Her projeye aynı çözümü değil, ihtiyacına uygun yaklaşımı sunuyoruz."
          }
        ],
        "num": "06",
        "kicker": "İhtiyaca Göre Tasarlıyor, Doğru Disiplinleri Bir Araya Getiriyoruz"
      },
      {
        "id": "projelerimizi-kesfedin",
        "title": "Projelerimizi keşfedin",
        "blocks": [
          {
            "type": "p",
            "text": "Koku tasarımından özel ürün koleksiyonlarına, kurumsal hediyelerden mekânsal uygulamalara, dekorasyondan deneyim alanlarına kadar farklı çalışmalarımızı keşfedin."
          },
          {
            "type": "p",
            "text": "Projelerimizi yalnızca sonuçlarıyla değil, fikirden uygulamaya uzanan tasarım süreçleriyle de paylaşmayı önemsiyoruz."
          },
          {
            "type": "defs",
            "items": [
              {
                "term": "Gerçekleşen Projeler",
                "body": "Hayata geçirilmiş çalışmalarımız ve uygulamalarımız."
              },
              {
                "term": "Tasarım ve Konsept Çalışmaları",
                "body": "Geliştirdiğimiz fikirler, tasarımlar ve prototipler."
              },
              {
                "term": "Ürün ve Koleksiyon Geliştirme",
                "body": "Kurumlara ve markalara özel ürünler, ambalajlar ve koleksiyonlar."
              }
            ]
          },
          {
            "type": "p",
            "text": "Her çalışma, farklı bir ihtiyaca verilen özgün bir cevaptır."
          },
          {
            "type": "cta",
            "label": "Projelerimizi keşfedin",
            "to": "referanslar"
          }
        ],
        "num": "07",
        "kicker": "Her Projenin Arkasında Farklı Bir Fikir, Farklı Bir Yolculuk Var"
      },
      {
        "id": "sikca-sorulan-sorular",
        "title": "Sıkça sorulan sorular",
        "blocks": [
          {
            "type": "faq",
            "items": [
              {
                "q": "Henüz netleşmiş bir fikrim yok. Siner Prime ile proje geliştirebilir miyim?",
                "a": "Evet. Bir projenin başlangıcında hazır bir ürün veya konseptiniz olması gerekmiyor. Kurumunuzun veya markanızın ihtiyacını, hedeflerini ve beklentilerini birlikte değerlendirerek fikir ve konsept geliştirme sürecini başlatabiliriz."
              },
              {
                "q": "Markamıza özel ürün ve hediye koleksiyonu hazırlayabilir misiniz?",
                "a": "Evet. Markanızın kimliğine ve hedef kitlesine uygun koku, parfüm, kolonya, araç kokusu, reed diffuser, mum, buhurdanlık, kokulu materyaller ve farklı ürün gruplarından oluşan özel koleksiyonlar geliştirebiliriz. Ürünleri markanıza özel ambalaj ve hediye kutularıyla bütünleştirebiliriz."
              },
              {
                "q": "Sadece tasarım hizmeti alabilir miyiz?",
                "a": "Evet. Projenin ihtiyacına göre yalnızca fikir geliştirme, konsept tasarımı, ürün tasarımı, ambalaj tasarımı veya koku geliştirme aşamalarında çalışabiliriz. Üretim ve uygulama hizmetleri her proje için zorunlu değildir."
              },
              {
                "q": "Tasarlanan ürünlerin numunesini veya prototipini hazırlayabilir misiniz?",
                "a": "Evet. Projenin teknik özelliklerine ve üretim yöntemine göre numune veya prototip çalışmaları gerçekleştirebiliriz. Böylece seri üretim öncesinde ürünün formu, malzemesi, kokusu, ambalajı ve genel görünümü değerlendirilebilir."
              },
              {
                "q": "Üretim ve tedarik süreçlerini de yönetiyor musunuz?",
                "a": "Evet. Projenin kapsamına göre üretim, malzeme temini, ambalaj, ürün bileşenleri, kalite kontrol ve teslimat koordinasyonunu yönetiyoruz. İhtiyaç duyulan uzmanlık ve üretim kapasitesine göre kendi ekibimizle veya çözüm ortaklarımızla ilerliyoruz."
              },
              {
                "q": "Kendi markamızla özel kokular ve parfümler geliştirebilir misiniz?",
                "a": "Evet. Markanızın karakterine, hedef kitlesine ve kullanım amacına uygun özel koku geliştirme ve ürün koleksiyonu çalışmaları yapabiliriz. Geliştirilen koku karakteri parfüm, kolonya, reed diffuser, oda kokusu, araç kokusu ve farklı ürün gruplarına uyarlanabilir. Ürün formülü, kullanım alanı ve mevzuata ilişkin gereklilikler proje kapsamında değerlendirilir."
              },
              {
                "q": "Otelimiz veya işletmemiz için özel koku ve kokulandırma sistemi kurabilir misiniz?",
                "a": "Evet. Öncelikle mekânı ve kullanım alanlarını değerlendiriyoruz. Lobi, genel alanlar, odalar ve diğer bölümlerin ihtiyaçlarını belirleyerek kuruma özel koku yaklaşımı ve uygun kokulandırma sistemi planlıyoruz. Uygulama, mekânın teknik koşullarına ve işletme ihtiyaçlarına göre şekillendirilir."
              },
              {
                "q": "Mekânımız için fotoğraf noktaları ve sosyal medyada paylaşılabilecek özel alanlar tasarlayabilir misiniz?",
                "a": "Evet. Kurumun kimliğine, mekânın özelliklerine ve hedef kitlesine uygun fotoğraf çekim noktaları, tematik dekorasyonlar, özel tasarım fonlar ve ziyaretçi etkileşim alanları geliştirebiliriz. Bu alanları markanın görsel kimliğini ve paylaşılabilir deneyimlerini destekleyecek şekilde planlıyoruz."
              },
              {
                "q": "Küçük adetli özel projeler kabul ediyor musunuz?",
                "a": "Projenin içeriğine, kullanılacak malzemelere, üretim yöntemine ve teknik gerekliliklere göre küçük adetli çalışmaları da değerlendirebiliriz. Minimum üretim miktarı ürün ve tedarik koşullarına göre değişebilir."
              },
              {
                "q": "Proje maliyeti ve teslim süresi nasıl belirleniyor?",
                "a": "Maliyet ve teslim süresi; proje kapsamı, ürün adedi, çeşit sayısı, tasarım ihtiyacı, kullanılacak malzemeler, numune süreci, üretim yöntemi ve uygulama gerekliliklerine göre belirlenir. İhtiyaçlar netleştirildikten sonra bütçe ve tahmini teslim takvimi hazırlanır."
              },
              {
                "q": "Türkiye dışındaki projelerde de çalışıyor musunuz?",
                "a": "Türkiye dışındaki proje taleplerini de değerlendiriyoruz. Projenin uygulanacağı ülke, lokasyon, ürün ve hizmet kapsamı, lojistik, gümrük ve saha uygulama gerekliliklerine göre çalışma planı oluşturuyoruz."
              }
            ]
          }
        ]
      },
      {
        "id": "projenizi-birlikte-gelistirelim",
        "title": "Projenizi birlikte geliştirelim",
        "blocks": [
          {
            "type": "p",
            "text": "Kurumunuzun kendine ait bir koku kimliği olmasını mı istiyorsunuz?"
          },
          {
            "type": "p",
            "text": "Markanız için satışa sunulabilecek özel bir koleksiyon mu geliştirmek istiyorsunuz?"
          },
          {
            "type": "p",
            "text": "Müşterilerinize anlamlı bir hediye sunmak, mekânınızda unutulmayacak bir deneyim oluşturmak veya ziyaretçilerinizin fotoğraf çekmek ve paylaşmak isteyeceği özgün bir alan tasarlamak mı istiyorsunuz?"
          },
          {
            "type": "p",
            "text": "Belki de henüz şekillenmemiş bir fikriniz var."
          },
          {
            "type": "p",
            "text": "Bize anlatın."
          },
          {
            "type": "p",
            "text": "İhtiyacınızı, beklentilerinizi, hedeflerinizi ve projenizin kapsamını birlikte değerlendirelim. Olasılıkları keşfedelim ve hayata geçirilebilir bir projeye dönüştürelim."
          },
          {
            "type": "p",
            "text": "Her projenin kendine özgü bir hikâyesi vardır. Biz o hikâyeyi tasarıma, ürüne ve deneyime dönüştürmek için buradayız."
          },
          {
            "type": "cta",
            "label": "Projenizi anlatın",
            "to": "#iletisim"
          },
          {
            "type": "pull",
            "text": "Fikrinizi bizimle paylaşın. Birlikte keşfedelim, geliştirelim ve hayata geçirelim."
          }
        ]
      }
    ]
  },
  {
    "slug": "sektorel-cozumler",
    "num": "07",
    "menu": "Sektörel Çözümler",
    "title": "Sektörel çözümler",
    "subtitle": "Her Sektörün İhtiyacı Farklı. Her Projenin Yaklaşımı Kendine Özel.",
    "intro": [
      {
        "type": "p",
        "text": "Her kurumun anlatacak bir hikâyesi, temsil ettiği bir kimliği ve müşterilerine sunmak istediği bir deneyim vardır."
      },
      {
        "type": "p",
        "text": "Siner Prime olarak farklı sektörlerin ihtiyaçlarını analiz ediyor; koku tasarımı, ürün geliştirme, özel koleksiyonlar, ambalaj, dekorasyon ve deneyim uygulamalarını bir araya getirerek projeler geliştiriyoruz."
      },
      {
        "type": "p",
        "text": "Bazen bir otelin kendine özgü kokusunu ürün koleksiyonuna dönüştürüyoruz. Bazen bir müzenin hikâyesini duyusal bir deneyimle destekliyoruz. Bazen bir markanın yeni ürününü tasarlıyor, ambalajını geliştiriyor ve üretim sürecini koordine ediyoruz."
      },
      {
        "type": "p",
        "text": "Bizim için her proje, hazır bir ürünü sunmakla değil; doğru ihtiyacı anlayıp doğru çözümü geliştirmekle başlar."
      }
    ],
    "sections": [
      {
        "id": "sektorlerimiz",
        "title": "Sektörlerimiz",
        "blocks": [
          {
            "type": "names",
            "items": [
              "Oteller ve Turizm Tesisleri",
              "Alışveriş Merkezleri",
              "Müzeler ve Kültürel Alanlar",
              "Sağlık Kuruluşları",
              "Kozmetik ve Parfüm Markaları",
              "Restoran ve Kafe Zincirleri",
              "Perakende ve Mağaza Zincirleri",
              "Gayrimenkul ve Rezidans Projeleri",
              "Otomotiv Markaları ve Bayileri",
              "Bankalar ve Finans Kuruluşları",
              "Üniversiteler ve Özel Eğitim Kurumları",
              "Havalimanları ve Ulaşım Merkezleri",
              "Etkinlik ve Organizasyon Şirketleri",
              "Spor Kulüpleri ve Tesisleri",
              "Sanayi ve Üretim Şirketleri",
              "Kamu Kurumları ve Belediyeler",
              "Vakıflar, Dernekler ve Odalar",
              "Gayrimenkul Yatırım Şirketleri",
              "Güzellik ve Wellness Zincirleri",
              "Medya ve Reklam Ajansları",
              "Tarım ve Gıda Markaları",
              "Enerji Şirketleri",
              "Lojistik Şirketleri",
              "Profesyonel Danışmanlık Firmaları",
              "Fuar ve Stand Tasarım Firmaları",
              "Mimarlık ve İç Mimarlık Ofisleri",
              "E-Ticaret Markaları",
              "Özel Kulüpler ve Üyelik İşletmeleri",
              "Uluslararası Markalar ve Distribütörler",
              "Franchıse İşletmeleri"
            ]
          }
        ]
      },
      {
        "id": "tum-sektorler-icin-ortak-proje-yaklasimimiz",
        "title": "Tüm sektörler için ortak proje yaklaşımımız",
        "blocks": [
          {
            "type": "p",
            "text": "Siner Prime olarak her sektöre aynı ürünleri veya aynı uygulamaları sunmuyoruz."
          },
          {
            "type": "p",
            "text": "Önce kurumunuzu, hedef kitlenizi, mekânınızı, beklentilerinizi ve ulaşmak istediğiniz sonucu anlamaya çalışıyoruz. Ardından projenin ihtiyacına göre farklı tasarım ve üretim disiplinlerini bir araya getiriyoruz."
          },
          {
            "type": "h3",
            "text": "Projelerimizde bir araya getirdiğimiz disiplinler"
          },
          {
            "type": "list",
            "items": [
              "Fikir ve konsept geliştirme",
              "Koku tasarımı ve koku teknolojileri",
              "Ürün ve koleksiyon geliştirme",
              "Şişe, kapak ve aksesuar tasarımı",
              "Cam, ahşap, metal ve seramik uygulamalar",
              "Kutu ve ambalaj tasarımı",
              "Kurumsal hediye ve özel seri geliştirme",
              "Dekorasyon ve mekânsal uygulamalar",
              "Fotoğraf ve sosyal medya deneyim alanları",
              "Etkinlik ve workshop organizasyonları",
              "Numune ve prototip geliştirme",
              "Üretim, tedarik ve uygulama koordinasyonu"
            ]
          },
          {
            "type": "h3",
            "text": "Proje sürecimiz"
          },
          {
            "type": "steps",
            "items": [
              {
                "num": "01",
                "title": "Keşif ve ihtiyaç analizi",
                "body": [
                  {
                    "type": "p",
                    "text": "Kurumunuzu, hedef kitlenizi, mekânınızı, beklentilerinizi ve projenin amacını tanıyoruz."
                  }
                ]
              },
              {
                "num": "02",
                "title": "Fikir ve konsept geliştirme",
                "body": [
                  {
                    "type": "p",
                    "text": "İhtiyaca uygun proje yaklaşımını, tasarım dilini ve kapsamı belirliyoruz."
                  }
                ]
              },
              {
                "num": "03",
                "title": "Tasarım ve planlama",
                "body": [
                  {
                    "type": "p",
                    "text": "Ürün, koku, malzeme, ambalaj, dekorasyon ve uygulama detaylarını geliştiriyoruz."
                  }
                ]
              },
              {
                "num": "04",
                "title": "Numune ve prototip",
                "body": [
                  {
                    "type": "p",
                    "text": "Gerekli projelerde ürün ve tasarım örneklerini hazırlayarak değerlendirmenize sunuyoruz."
                  }
                ]
              },
              {
                "num": "05",
                "title": "Üretim ve uygulama",
                "body": [
                  {
                    "type": "p",
                    "text": "Projenin kapsamına göre kendi üretim imkânlarımızı ve uzman çözüm ortaklarımızı koordine ediyoruz."
                  }
                ]
              },
              {
                "num": "06",
                "title": "Teslimat ve devamlılık",
                "body": [
                  {
                    "type": "p",
                    "text": "Kalite kontrol, teslimat, tekrar sipariş ve devam eden ihtiyaçları planlıyoruz."
                  }
                ]
              }
            ]
          }
        ],
        "kicker": "Her Kurumun İhtiyacı Farklı. Proje Yaklaşımımız İhtiyaca Özel"
      },
      {
        "id": "birlikte-nasil-bir-proje-gelistirebiliriz",
        "title": "Birlikte nasıl bir proje geliştirebiliriz?",
        "blocks": [
          {
            "type": "p",
            "text": "Henüz fikriniz netleşmemiş olabilir. Belki yeni bir ürün geliştirmek, mevcut markanızı farklılaştırmak, mekânınızda yeni bir deneyim oluşturmak veya bir tasarım fikrini üretime dönüştürmek istiyorsunuz."
          },
          {
            "type": "p",
            "text": "İlk aşamada bütün detayların hazır olması gerekmez."
          },
          {
            "type": "p",
            "text": "Bir ihtiyacınız, bir fikriniz veya gerçekleştirmek istediğiniz bir hedefiniz olması yeterli."
          },
          {
            "type": "p",
            "text": "Siner Prime olarak projenizi değerlendiriyor; doğru fikirleri, tasarım disiplinlerini ve uygulanabilir çözümleri bir araya getiriyoruz."
          },
          {
            "type": "p",
            "text": "Daha fazla ürün değil, daha fazla değer üretmek için."
          },
          {
            "type": "cta",
            "label": "Projenizi anlatın",
            "to": "#iletisim"
          }
        ]
      }
    ]
  }
];
