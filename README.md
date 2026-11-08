# Siner Prime — The Art of Scent

Siner Prime tanıtım sitesi. Next.js 16 (App Router) + Tailwind CSS v4 + Motion + React Three Fiber.
Yazı tipleri: Cormorant Garamond (başlık) + Jost (metin).
Statik export olarak derlenir; Node.js gerektirmeden Plesk üzerinde yayınlanır.

## Sayfalar

| Yol | İçerik |
| --- | --- |
| `/tr/`, `/en/` | Scroll ile ilerleyen 3D ONIX anlatımı (exploded view), yaklaşım, koleksiyon, öz-değerlendirme, referans şeridi |
| `/[dil]/kurumsal/` | Hikâye, rakamlar, departman bazlı projeler, mevcut durum değerlendirmesi, ekip |
| `/[dil]/referanslar/` | Logo duvarı, sektörler, THY ve ASELSAN örnek çalışmaları |
| `/[dil]/onix/` | ONIX kurumsal buhurdanlık + logo yüklenebilen 3D tasarım stüdyosu |
| `/[dil]/kubbe/` | Kubbe seramik buhurdanlık |
| `/[dil]/cihazlar/` | Siner Tower, Minimal Line, Extra-Wall |

## Geliştirme

```bash
npm install
npm run dev        # http://localhost:3000
```

> Dev sunucusunu `localhost` üzerinden açın; Next 16, `127.0.0.1` gibi başka origin'lerden dev kaynaklarını engeller.

İçerik metinleri `src/content/` altında (TR + EN), iletişim bilgileri `src/lib/contact.ts` dosyasında.
ONIX'in 3D modeli `src/components/three/onix.tsx` içinde ölçülere göre (8 cm × Ø 7,8 cm) kodla üretilir.

## Render'a yayınlama

Render'da **Static Site** olarak yayınlanır (Web Service değil; Node sunucusu gerekmez, ücretsiz plan yeterli).
Ayarlar `render.yaml` dosyasında hazırdır.

1. Projeyi GitHub'a gönderin.
2. Render → **New → Blueprint** → depoyu seçin → **Apply**. Render, `render.yaml`'ı okuyup statik siteyi kurar.
   - Blueprint yerine elle kurmak isterseniz: **New → Static Site**, Build Command `npm ci && npm run build`,
     Publish Directory `out`, Environment'a `NODE_VERSION=22` ekleyin.
3. Her `git push` sonrası Render otomatik olarak yeniden derleyip yayınlar.
4. Alan adı: Settings → Custom Domains. SSL otomatik kurulur.

`public/.htaccess` yalnızca Apache/Plesk içindir; Render onu yok sayar. `/` adresi sayfa içi yönlendirmeyle
tarayıcı diline göre `/tr/` veya `/en/` adresine gider.

## Plesk'e yayınlama

1. `npm run build` → çıktı `out/` klasörüne yazılır.
2. Plesk → Dosyalar → `httpdocs` içeriğini temizleyin ve `out/` klasörünün **içeriğini** yükleyin
   (zip'leyip yükleyip Plesk'te açmak en hızlısı).
3. `out/.htaccess` dosyası da gelir: `/` adresini dile göre `/tr/` veya `/en/` adresine yönlendirir,
   eksik `/` ekler ve önbellek/sıkıştırma ayarlarını yapar. Plesk'te Apache kapalıysa (yalnızca nginx),
   Apache & nginx Ayarları → "Ek nginx yönergeleri" alanına şunu ekleyin:

   ```nginx
   location = / { return 302 /tr/; }
   location / { try_files $uri $uri/ $uri/index.html =404; }
   error_page 404 /404.html;
   ```

4. SSL kurulduktan sonra `.htaccess` içindeki HTTPS yönlendirmesinin yorumunu kaldırın.
5. Alan adı belli olunca `src/app/[lang]/layout.tsx` ve `src/app/(root)/layout.tsx` içindeki
   `metadataBase` değerini (`https://sinerprime.com`) gerçek adresle değiştirin.
