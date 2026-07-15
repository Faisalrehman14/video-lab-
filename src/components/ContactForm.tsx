"use client";

import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { siteConfig } from "@/lib/site";

const TOPIC_MAP: Record<string, string> = {
  "video-hourly": "video-hourly",
  "photo-hourly": "photo-hourly",
  "audio-hourly": "audio-hourly",
  video: "video",
  photo: "photo",
  audio: "audio-hourly",
  retainer: "retainer",
  corporate: "corporate",
  testimonial: "testimonial",
  custom: "custom",
};

const SERVICE_OPTIONS = [
  { value: "video-hourly", label: "Video editing — hourly quote" },
  { value: "photo-hourly", label: "Photo editing — hourly quote" },
  { value: "audio-hourly", label: "Audio polish — hourly quote" },
  { value: "video", label: "Video editing — fixed package" },
  { value: "photo", label: "Photo editing — fixed package" },
  { value: "corporate", label: "Corporate video finishing" },
  { value: "testimonial", label: "Testimonial editing" },
  { value: "retainer", label: "Studio retainer" },
  { value: "custom", label: "Custom / hybrid scope" },
];

export function ContactForm() {
  const params = useSearchParams();
  const topic = params.get("topic") || "";
  const initialService = TOPIC_MAP[topic] || "";

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [messageLen, setMessageLen] = useState(0);

  const topicBanner = useMemo(() => {
    if (!initialService) return null;
    const opt = SERVICE_OPTIONS.find((o) => o.value === initialService);
    return opt?.label ?? null;
  }, [initialService]);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — bots fill this
    if (String(data.get("website") || "").trim()) {
      setStatus("sent");
      form.reset();
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          company: data.get("company"),
          service: data.get("service"),
          budget: data.get("budget"),
          timeline: data.get("timeline"),
          preferredContact: data.get("preferredContact"),
          handoff: data.get("handoff"),
          timezone: data.get("timezone"),
          cloudLink: data.get("cloudLink"),
          message: data.get("message"),
          topic: topic || null,
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      form.reset();
      setMessageLen(0);
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div
        className="border border-brand/30 bg-brand/5 px-6 py-10 text-center"
        role="status"
        aria-live="polite"
      >
        <p className="font-display text-xl font-extrabold uppercase text-ink">Message received</p>
        <p className="mt-3 text-sm leading-relaxed text-stone-600">
          Thanks — a remote producer will reply within one business day with hours or package
          options and a confirmed USD total before any Stripe Checkout. Have a Drive / Dropbox /
          Frame.io link ready if you haven’t shared one yet.
        </p>
        <button
          type="button"
          className="btn-outline mt-6"
          onClick={() => setStatus("idle")}
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="relative space-y-5" noValidate>
      {topicBanner && (
        <div className="flex items-start gap-3 border border-brand/25 bg-brand/5 px-4 py-3 text-sm text-ink">
          <span className="mt-0.5 h-2 w-2 shrink-0 bg-brand" aria-hidden />
          <p>
            Prefill from pricing: <strong>{topicBanner}</strong>. Adjust anything below before
            sending.
          </p>
        </div>
      )}

      {/* Honeypot */}
      <div className="absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden" aria-hidden>
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="label-field">
            Full name*
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="input-field"
            placeholder="Alex Rivera"
          />
        </div>
        <div>
          <label htmlFor="company" className="label-field">
            Company / brand
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className="input-field"
            placeholder="Acme Studios"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="label-field">
            Work email*
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="input-field"
            placeholder="alex@company.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="label-field">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="input-field"
            placeholder={siteConfig.phone}
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="label-field">
          Service interest*
        </label>
        <select
          id="service"
          name="service"
          required
          className="input-field"
          defaultValue={initialService}
          key={initialService || "empty"}
        >
          <option value="" disabled>
            Select a service
          </option>
          {SERVICE_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="budget" className="label-field">
            Estimated budget / hours
          </label>
          <select id="budget" name="budget" className="input-field" defaultValue="">
            <option value="">Not sure yet</option>
            <option value="under-5h">Under 5 editor hours</option>
            <option value="5-15h">5–15 editor hours</option>
            <option value="15-40h">15–40 editor hours</option>
            <option value="40h-plus">40+ hours / retainer</option>
            <option value="fixed-package">Prefer a fixed USD package</option>
          </select>
        </div>
        <div>
          <label htmlFor="timeline" className="label-field">
            Target delivery
          </label>
          <select id="timeline" name="timeline" className="input-field" defaultValue="">
            <option value="">Flexible</option>
            <option value="asap">ASAP / rush</option>
            <option value="1-week">Within 1 week</option>
            <option value="2-weeks">Within 2 weeks</option>
            <option value="month">This month</option>
          </select>
        </div>
      </div>

      <fieldset>
        <legend className="label-field">Preferred reply*</legend>
        <div className="mt-2 flex flex-wrap gap-3">
          {[
            { value: "email", label: "Email" },
            { value: "phone", label: "Phone" },
            { value: "either", label: "Either" },
          ].map((opt) => (
            <label
              key={opt.value}
              className="inline-flex cursor-pointer items-center gap-2 border border-stone-200 bg-paper px-3 py-2 text-sm text-ink has-[:checked]:border-brand has-[:checked]:bg-brand/5"
            >
              <input
                type="radio"
                name="preferredContact"
                value={opt.value}
                required
                defaultChecked={opt.value === "email"}
                className="accent-brand"
              />
              {opt.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="handoff" className="label-field">
            Preferred file handoff
          </label>
          <select id="handoff" name="handoff" className="input-field" defaultValue="">
            <option value="">Select tool</option>
            <option value="google-drive">Google Drive</option>
            <option value="dropbox">Dropbox</option>
            <option value="frameio">Frame.io</option>
            <option value="wetransfer">WeTransfer</option>
            <option value="box">Box</option>
            <option value="other">Other / TBD</option>
          </select>
        </div>
        <div>
          <label htmlFor="timezone" className="label-field">
            Your time zone
          </label>
          <select id="timezone" name="timezone" className="input-field" defaultValue="">
            <option value="">Select</option>
            <option value="PT">Pacific (PT)</option>
            <option value="MT">Mountain (MT)</option>
            <option value="CT">Central (CT)</option>
            <option value="ET">Eastern (ET)</option>
            <option value="GMT">GMT / UK</option>
            <option value="CET">Central Europe</option>
            <option value="GST">Gulf (GST)</option>
            <option value="PKT">Pakistan (PKT)</option>
            <option value="IST">India (IST)</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="cloudLink" className="label-field">
          Cloud folder / review link (optional)
        </label>
        <input
          id="cloudLink"
          name="cloudLink"
          type="url"
          className="input-field"
          placeholder="https://drive.google.com/… or Frame.io project"
        />
        <p className="mt-1.5 text-[11px] text-stone-400">
          Share only what you&apos;re comfortable with. You can send a private invite after we reply.
        </p>
      </div>

      <div>
        <div className="flex items-end justify-between gap-3">
          <label htmlFor="message" className="label-field">
            Project details*
          </label>
          <span className="text-[11px] text-stone-400">{messageLen}/2000</span>
        </div>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          maxLength={2000}
          className="input-field mt-1.5 resize-y"
          placeholder="Footage type & length, platforms, brand kit status, references, hard deadlines, and how you’d like remote reviews to run…"
          onChange={(e) => setMessageLen(e.target.value.length)}
        />
      </div>

      <p className="text-xs leading-relaxed text-stone-500">
        By sending you agree we may contact you about this inquiry. Payment is never taken here —
        only via Stripe after a written USD confirm. See our{" "}
        <a href="/legal/privacy" className="text-brand hover:underline">
          Privacy Policy
        </a>
        .
      </p>

      <button
        type="submit"
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending inquiry…" : "Send inquiry"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-600" role="alert">
          Something went wrong. Email us directly at{" "}
          <a href={`mailto:${siteConfig.email}`} className="underline">
            {siteConfig.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
