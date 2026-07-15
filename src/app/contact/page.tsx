import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ContactForm } from "@/components/ContactForm";
import { ButtonLink } from "@/components/ButtonLink";
import { formatAddress, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Scope a video, photo, or audio finish with RenderReady Labs. Hourly or package quotes confirmed in USD before Stripe Checkout.",
};

const trustPoints = [
  {
    title: "Reply SLA",
    text: "Producer response within one business day — hours or package options in writing.",
  },
  {
    title: "No card on form",
    text: "Inquiries are free. Payment only through Stripe after you approve the USD total.",
  },
  {
    title: "NDA-ready",
    text: "Restricted file handoff and NDA workflows available for brand & enterprise work.",
  },
  {
    title: "Clear scope",
    text: "Deliverables, revision rounds, and turnaround locked before any invoice.",
  },
];

const channels = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    hint: "Best for briefs & links",
    icon: (
      <path
        d="M4 7h16v10H4V7zm0 0l8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
      />
    ),
  },
  {
    label: "Phone / WhatsApp",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`,
    hint: "Mon–Fri · PT business hours",
    icon: (
      <path
        d="M7 3h3l1.5 4-2 1.5a12 12 0 006 6L17 13l4 1.5V18a2 2 0 01-2 2A15 15 0 015 5a2 2 0 012-2z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
    ),
  },
  {
    label: "Support desk",
    value: siteConfig.supportEmail,
    href: `mailto:${siteConfig.supportEmail}`,
    hint: "Active projects & billing",
    icon: (
      <path
        d="M12 3l8 4v6c0 4.5-3.2 7.5-8 9-4.8-1.5-8-4.5-8-9V7l8-4z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
    ),
  },
];

const processSteps = [
  { n: "01", title: "Brief", text: "Share footage notes, refs, and deadline." },
  { n: "02", title: "Estimate", text: "We return hours or a fixed USD package." },
  { n: "03", title: "Confirm", text: "Approve scope in writing — then Stripe." },
  { n: "04", title: "Produce", text: "Edit, review rounds, deliver masters." },
];

const faqs = [
  {
    q: "Do I pay on this form?",
    a: "No. This form is inquiry-only. Stripe Checkout opens only after you approve a written USD total.",
  },
  {
    q: "Hourly or package — which should I pick?",
    a: "Hourly fits open-ended volume. Fixed packages suit clear deliverables. We’ll recommend one after seeing the brief.",
  },
  {
    q: "How fast do you reply?",
    a: "Within one business day (Mon–Fri PT). Rush requests flagged as ASAP are prioritized when capacity allows.",
  },
];

function FormFallback() {
  return (
    <div className="animate-pulse space-y-4 py-6">
      <div className="h-10 bg-stone-100" />
      <div className="h-10 bg-stone-100" />
      <div className="h-32 bg-stone-100" />
      <div className="h-11 w-40 bg-stone-200" />
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="pt-[68px]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-stone-200 bg-ink">
        <div className="hero-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand">Contact</p>
          <h1 className="mt-3 max-w-3xl font-display text-3xl font-extrabold uppercase leading-tight text-white md:text-5xl">
            Let&apos;s scope your next edit
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-stone-300 md:text-base">
            Tell us the brief — we confirm editor hours or a fixed package and the USD total in
            writing before any Stripe payment.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={`mailto:${siteConfig.email}`}>Email studio</ButtonLink>
            <ButtonLink href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`} variant="ghost">
              {siteConfig.phone}
            </ButtonLink>
            <ButtonLink href="/pricing" variant="outline">
              View hourly rates
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-0 px-5 md:grid-cols-4 md:px-8">
          {trustPoints.map((t) => (
            <div
              key={t.title}
              className="border-b border-stone-200 py-7 md:border-b-0 md:border-r md:px-5 md:py-9 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              <p className="font-display text-xs font-extrabold uppercase tracking-[0.18em] text-brand">
                {t.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">{t.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Main */}
      <section className="bg-paper">
        <div className="section grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div className="space-y-10">
            <div>
              <h2 className="font-display text-2xl font-extrabold uppercase text-ink">
                Reach the finish desk
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                Prefer email for asset links. Call for urgent capacity checks during business hours.
              </p>
            </div>

            <ul className="space-y-3">
              {channels.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    className="group flex gap-4 border border-stone-200 bg-white p-4 transition hover:border-brand/50 hover:shadow-sm"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-stone-200 text-stone-500 transition group-hover:border-brand group-hover:text-brand">
                      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
                        {c.icon}
                      </svg>
                    </span>
                    <span>
                      <span className="block text-[11px] font-semibold uppercase tracking-wider text-stone-400">
                        {c.label}
                      </span>
                      <span className="mt-0.5 block font-display text-base font-bold text-ink group-hover:text-brand">
                        {c.value}
                      </span>
                      <span className="mt-0.5 block text-xs text-stone-500">{c.hint}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="border border-stone-200 bg-white p-5">
              <h3 className="font-display text-sm font-extrabold uppercase tracking-wide text-ink">
                Studio location
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">{formatAddress()}</p>
              <p className="mt-2 text-xs text-stone-400">
                {siteConfig.legalName} · DBA {siteConfig.dba}
              </p>
              <div className="mt-5 grid gap-2 border-t border-stone-100 pt-4 text-sm">
                <div className="flex justify-between gap-4">
                  <span className="text-stone-500">Weekdays</span>
                  <span className="text-right font-medium text-ink">9:00 AM – 6:00 PM PT</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-stone-500">Saturday</span>
                  <span className="text-right font-medium text-ink">By appointment</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-stone-500">Sunday</span>
                  <span className="text-right font-medium text-ink">Closed</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-display text-sm font-extrabold uppercase tracking-wide text-ink">
                How it works
              </h3>
              <ol className="mt-4 grid gap-3 sm:grid-cols-2">
                {processSteps.map((s) => (
                  <li key={s.n} className="border border-stone-200 bg-white p-4">
                    <span className="font-display text-xs font-bold text-brand">{s.n}</span>
                    <p className="mt-1 font-display text-sm font-bold uppercase text-ink">{s.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-stone-500">{s.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Form panel */}
          <div className="border border-stone-200 bg-white shadow-mega">
            <div className="border-b border-stone-200 bg-ink px-6 py-5 md:px-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
                Project inquiry
              </p>
              <h2 className="mt-2 font-display text-xl font-extrabold uppercase text-white md:text-2xl">
                Start a finish brief
              </h2>
              <p className="mt-2 text-sm text-stone-400">
                Payment is never collected here — Stripe Checkout only after written USD confirm.
              </p>
            </div>
            <div className="relative px-6 py-7 md:px-8 md:py-8">
              <Suspense fallback={<FormFallback />}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-stone-200 bg-white">
        <div className="section max-w-3xl">
          <h2 className="font-display text-2xl font-extrabold uppercase text-ink md:text-3xl">
            Contact FAQ
          </h2>
          <div className="mt-8 space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group border border-stone-200 bg-paper open:bg-white open:shadow-sm"
              >
                <summary className="cursor-pointer list-none px-5 py-4 font-display text-sm font-bold uppercase text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {f.q}
                    <span className="text-brand transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="border-t border-stone-100 px-5 py-4 text-sm leading-relaxed text-stone-600">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
          <p className="mt-8 text-sm text-stone-500">
            Need policies first?{" "}
            <Link href="/legal/refund" className="text-brand hover:underline">
              Refund
            </Link>
            {" · "}
            <Link href="/legal/terms" className="text-brand hover:underline">
              Terms
            </Link>
            {" · "}
            <Link href="/pricing" className="text-brand hover:underline">
              Pricing
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
