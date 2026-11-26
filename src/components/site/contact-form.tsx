"use client";

import { useId, useState, type FormEvent } from "react";
import { contact } from "@/lib/contact";
import type { Locale } from "@/lib/i18n";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/*
  Posts to /api/contact.php, a small PHP sender that lives beside the static site on Plesk and
  mails the company inbox over SMTP. Name, e-mail and message are required; phone, company and
  topic are optional. `next dev` has no PHP, so in development the send is only simulated.
*/

const ENDPOINT = "/api/contact.php";
type Status = "idle" | "sending" | "sent" | "error" | "rate";

const text = {
  tr: {
    name: "Ad soyad",
    email: "E-posta",
    phone: "Telefon",
    company: "Firma adı",
    topic: "Konu",
    topicNone: "Seçiniz",
    topics: ["Kurumsal mekân ve otel projesi", "Koku makineleri", "Buhurdanlık ve ONIX", "Markaya özel ürün", "Etkinlik ve atölye", "Diğer"],
    message: "Mesajınız",
    messageHint: "Mekânınızdan, ihtiyacınızdan ve zamanlamadan kısaca bahsedin.",
    optional: "isteğe bağlı",
    required: "Bu alan zorunlu.",
    badEmail: "Geçerli bir e-posta adresi yazın.",
    send: "Gönder",
    sending: "Gönderiliyor…",
    note: "* ile işaretli alanlar zorunludur. Bilgileriniz yalnızca size dönüş yapmak için kullanılır.",
    sentTitle: "Mesajınız bize ulaştı.",
    sentBody: "En kısa sürede size dönüş yapacağız.",
    again: "Yeni mesaj yaz",
    error: "Mesaj şu an gönderilemedi. Lütfen biraz sonra tekrar deneyin ya da doğrudan",
    rate: "Kısa sürede çok fazla mesaj gönderildi. Lütfen biraz sonra tekrar deneyin ya da doğrudan",
    errorTail: "adresine yazın.",
  },
  en: {
    name: "Full name",
    email: "E-mail",
    phone: "Phone",
    company: "Company",
    topic: "Topic",
    topicNone: "Select",
    topics: ["Corporate space or hotel project", "Scent machines", "Burners and ONIX", "Brand products", "Events and workshops", "Other"],
    message: "Your message",
    messageHint: "Tell us briefly about your space, your needs and your timing.",
    optional: "optional",
    required: "This field is required.",
    badEmail: "Please enter a valid e-mail address.",
    send: "Send",
    sending: "Sending…",
    note: "Fields marked * are required. Your details are only used to get back to you.",
    sentTitle: "Your message has reached us.",
    sentBody: "We will get back to you shortly.",
    again: "Write another message",
    error: "The message couldn't be sent right now. Please try again shortly or write directly to",
    rate: "Too many messages in a short time. Please try again shortly or write directly to",
    errorTail: "",
  },
};

type Field = "name" | "email" | "phone" | "company" | "topic" | "message";
type Values = Record<Field, string>;
const empty: Values = { name: "", email: "", phone: "", company: "", topic: "", message: "" };

export function ContactForm({ lang }: { lang: Locale }) {
  const t = text[lang];
  const uid = useId();
  const [v, setV] = useState<Values>(empty);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [website, setWebsite] = useState(""); // honeypot

  const set = (f: Field) => (e: { target: { value: string } }) => {
    setV((p) => ({ ...p, [f]: e.target.value }));
    if (errors[f]) setErrors((p) => ({ ...p, [f]: undefined }));
  };

  function validate(): boolean {
    const e: Partial<Record<Field, string>> = {};
    if (!v.name.trim()) e.name = t.required;
    if (!v.email.trim()) e.email = t.required;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = t.badEmail;
    if (!v.message.trim()) e.message = t.required;
    setErrors(e);
    const first = (["name", "email", "message"] as Field[]).find((f) => e[f]);
    if (first) document.getElementById(`${uid}-${first}`)?.focus();
    return !first;
  }

  async function onSubmit(ev: FormEvent) {
    ev.preventDefault();
    if (status === "sending" || !validate()) return;
    setStatus("sending");
    try {
      if (process.env.NODE_ENV === "development") {
        await new Promise((r) => setTimeout(r, 900));
        setStatus("sent");
        return;
      }
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...v, lang, website }),
      });
      setStatus(res.ok ? "sent" : res.status === 429 ? "rate" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="flex min-h-[320px] flex-col items-start justify-center border-t border-gold/40 pt-10">
        <span aria-hidden className="display text-[44px] leading-none text-gold">✓</span>
        <p className="display mt-5 text-[clamp(1.8rem,2.6vw,2.4rem)] leading-[1.1] text-ink">{t.sentTitle}</p>
        <p className="mt-3 text-[14px] leading-[1.7] text-ink-soft">{t.sentBody}</p>
        <button
          type="button"
          onClick={() => {
            setV(empty);
            setStatus("idle");
          }}
          className="mt-8 text-[11px] tracking-[0.22em] text-gold-hi uppercase hover:text-gold"
        >
          {t.again} →
        </button>
      </div>
    );
  }

  const input =
    "peer w-full border-0 border-b bg-transparent px-0 pt-2 pb-3 text-[15px] text-ink outline-none transition-colors duration-300 placeholder:text-muted/60 focus:border-gold";

  const field = (f: Field, label: string, opts: { required?: boolean; type?: string; auto?: string; span?: boolean } = {}) => (
    <div className={cn("flex flex-col", opts.span && "sm:col-span-2")}>
      <label htmlFor={`${uid}-${f}`} className="flex items-baseline gap-2 text-[11px] tracking-[0.22em] text-ink-soft uppercase">
        {label}
        {opts.required ? (
          <span aria-hidden className="text-gold">*</span>
        ) : (
          <span className="text-[10px] tracking-[0.12em] text-muted normal-case">({t.optional})</span>
        )}
      </label>
      <input
        id={`${uid}-${f}`}
        name={f}
        type={opts.type ?? "text"}
        autoComplete={opts.auto}
        required={opts.required}
        aria-invalid={!!errors[f]}
        aria-describedby={errors[f] ? `${uid}-${f}-err` : undefined}
        value={v[f]}
        onChange={set(f)}
        className={cn(input, errors[f] ? "border-ember" : "border-ink/20")}
      />
      {errors[f] && (
        <p id={`${uid}-${f}-err`} className="mt-2 text-[12px] text-ember">
          {errors[f]}
        </p>
      )}
    </div>
  );

  return (
    <form noValidate onSubmit={onSubmit} className="relative grid gap-x-8 gap-y-7 sm:grid-cols-2">
      {field("name", t.name, { required: true, auto: "name" })}
      {field("email", t.email, { required: true, type: "email", auto: "email" })}
      {field("phone", t.phone, { type: "tel", auto: "tel" })}
      {field("company", t.company, { auto: "organization" })}

      <div className="flex flex-col sm:col-span-2">
        <label htmlFor={`${uid}-topic`} className="flex items-baseline gap-2 text-[11px] tracking-[0.22em] text-ink-soft uppercase">
          {t.topic}
          <span className="text-[10px] tracking-[0.12em] text-muted normal-case">({t.optional})</span>
        </label>
        <select
          id={`${uid}-topic`}
          name="topic"
          value={v.topic}
          onChange={set("topic")}
          className={cn(input, "cursor-pointer appearance-none border-ink/20 bg-[length:12px] bg-[right_2px_center] bg-no-repeat", !v.topic && "text-muted")}
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' fill='none' stroke='%23c8a46a' stroke-width='1.3'/%3E%3C/svg%3E\")",
          }}
        >
          <option value="" className="bg-night-2 text-muted">
            {t.topicNone}
          </option>
          {t.topics.map((o) => (
            <option key={o} value={o} className="bg-night-2 text-ink">
              {o}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col sm:col-span-2">
        <label htmlFor={`${uid}-message`} className="flex items-baseline gap-2 text-[11px] tracking-[0.22em] text-ink-soft uppercase">
          {t.message}
          <span aria-hidden className="text-gold">*</span>
        </label>
        <textarea
          id={`${uid}-message`}
          name="message"
          rows={4}
          required
          placeholder={t.messageHint}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? `${uid}-message-err` : undefined}
          value={v.message}
          onChange={set("message")}
          className={cn(input, "resize-y", errors.message ? "border-ember" : "border-ink/20")}
        />
        {errors.message && (
          <p id={`${uid}-message-err`} className="mt-2 text-[12px] text-ember">
            {errors.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-[46ch] text-[12px] leading-[1.6] text-muted">{t.note}</p>
        <button
          type="submit"
          disabled={status === "sending"}
          className={cn(buttonVariants({ size: "lg" }), "shrink-0 disabled:cursor-wait disabled:opacity-70")}
        >
          {status === "sending" ? t.sending : t.send}
          <span aria-hidden>→</span>
        </button>
      </div>

      {/* bots fill every field; people never see this one */}
      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Website
          <input tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
        </label>
      </div>

      {(status === "error" || status === "rate") && (
        <p role="alert" className="border-l-2 border-ember pl-4 text-[13px] leading-[1.7] text-ink-soft sm:col-span-2">
          {status === "rate" ? t.rate : t.error}{" "}
          <a href={`mailto:${contact.email}`} className="text-gold-hi underline-offset-4 hover:underline">
            {contact.email}
          </a>{" "}
          {t.errorTail}
        </p>
      )}
    </form>
  );
}
