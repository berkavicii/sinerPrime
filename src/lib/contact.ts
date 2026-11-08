export const contact = {
  phone: "+90 xxx xxx xx xx",
  phoneHref: "tel:+90xxxxxxxxxx",
  phone2: "+90 xxx xxx xx xx",
  phone2Href: "tel:+90xxxxxxxxxx",
  email: "xxxxx@xxxxx.com",
  infoEmail: "xxxxx@xxxxx.com",
  // Örnek değer — gerçek numara (ülke kodu ile, yalnızca rakam) yayından önce girilmeli
  whatsapp: "90xxxxxxxxxx",
  address: "Fevziçakmak, 10721. Sk. D Blok No:22 F, Karatay / Konya",
  shop: "https://sinershop.com",
  corporate: "https://sinerkurumsal.com",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function mailLink(subject: string, body = "") {
  const q = new URLSearchParams({ subject, body }).toString().replace(/\+/g, "%20");
  return `mailto:${contact.email}?${q}`;
}
