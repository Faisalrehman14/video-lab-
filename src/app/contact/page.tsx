import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ContactForm } from "@/components/ContactForm";
import { ButtonLink } from "@/components/ButtonLink";
import { formatAddress, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Start a remote finish brief with RenderReady Labs. Online collaboration worldwide — hourly or package USD quotes confirmed before Stripe Checkout.",
};

const trustPoints = [
  {
    title: "100% remote",
    text: "Fully online finishing lab — brief, upload, review, and delivery without leaving your workflow.",
  },
  {
    title: "Async-first",
    text: "Drive / Dropbox / Frame.io handoffs and time-coded notes. Live calls only when you need them.",
  },
  {
    title: "Global clients",
    text: "We work across time zones. PT coverage hours with clear reply SLAs on every inquiry.",
  },
  {
    title: "Pay after confirm",
    text: "No card on this form. Stripe Checkout only after a written USD hours or package total.",
  },
];

const channels = [
  {
    label: "Email (primary)",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    hint: "Briefs, Drive links, Frame.io invites",
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
    hint: "Capacity checks · Mon–Fri PT online hours",
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
    label: "Project support",
    value: siteConfig.supportEmail,
    href: `mailto:${siteConfig.supportEmail}`,
    hint: "Active jobs, revisions & Stripe receipts",
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

const remoteStack = [
  {
    title: "Secure upload",
    text: siteConfig.remote.handoff.join(" · "),
  },
  {
    title: "Online review",
    text: siteConfig.remote.reviews.join(" · "),
  },
  {
    title: "Coverage",
    text: `${siteConfig.remote.coverage} · ${siteConfig.remote.timezone}`,
  },
];

const processSteps = [
  {
    n: "01",
    title: "Send brief online",
    text: "Form or email + cloud link to footage / stills.",
  },
  {
    n: "02",
    title: "Get hours or package",
    text: "Written estimate in USD before any payment.",
  },
  {
    n: "03",
    title: "Pay via Stripe",
    text: "Checkout only after you approve the total.",
  },
  {
    n: "04",
    title: "Review remotely",
    text: "Frame.io or notes → finals delivered online.",
  },
];

const faqs = [
  {
    q: "Do I need to visit an office?",
    a: "No. RenderReady Labs is a fully remote online finishing lab. Everything — brief, upload, review, and delivery — happens through cloud tools and email/calls.",
  },
  {
    q: "How do I send footage securely?",
    a: "Share a Drive, Dropbox, Frame.io, WeTransfer, or Box link after we confirm scope. We never ask for card details on the inquiry form.",
  },
  {
    q: "What time zone do you work in?",
    a: "Primary coverage is Pacific Time (Mon–Fri). We collaborate asynchronously with worldwide clients and schedule live calls when useful.",
  },
  {
    q: "Do I pay on this form?",
    a: "No. Inquiry only. Stripe Checkout opens after you approve a written hourly total or fixed USD package.",
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
      {/* Hero — remote-first */}
      <section className="relative overflow-hidden border-b border-stone-200 bg-ink">
        <div className="hero-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand">
              Contact · Remote
            </p>
            <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-stone-300">
              {siteConfig.remote.model}
            </span>
          </div>
          <h1 className="mt-4 max-w-3xl font-display text-3xl font-extrabold uppercase leading-tight text-white md:text-5xl">
            Start a remote finish brief
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-stone-300 md:text-base">
            You work online — so do we. Share the brief and a cloud link; we confirm editor hours or
            a fixed package and the USD total in writing before Stripe Checkout.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={`mailto:${siteConfig.email}`}>Email a brief</ButtonLink>
            <ButtonLink href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`} variant="ghost">
              {siteConfig.phone}
            </ButtonLink>
            <ButtonLink href="/pricing" variant="outline">
              Hourly rates
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

      {/* Remote stack band */}
      <section className="border-b border-stone-200 bg-paper">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-10 md:grid-cols-3 md:px-8 md:py-12">
          {remoteStack.map((item) => (
            <div key={item.title}>
              <p className="font-display text-xs font-extrabold uppercase tracking-[0.18em] text-ink">
                {item.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Main */}
      <section className="bg-white">
        <div className="section grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div className="space-y-10">
            <div>
              <h2 className="font-display text-2xl font-extrabold uppercase text-ink">
                Online channels
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                No walk-ins required. Email for asset links; call or WhatsApp for quick capacity
                checks during PT coverage hours.
              </p>
            </div>

            <ul className="space-y-3">
              {channels.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    className="group flex gap-4 border border-stone-200 bg-paper p-4 transition hover:border-brand/50 hover:bg-white hover:shadow-sm"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-stone-200 bg-white text-stone-500 transition group-hover:border-brand group-hover:text-brand">
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

            <div>
              <h3 className="font-display text-sm font-extrabold uppercase tracking-wide text-ink">
                Remote production loop
              </h3>
              <ol className="mt-4 grid gap-3 sm:grid-cols-2">
                {processSteps.map((s) => (
                  <li key={s.n} className="border border-stone-200 bg-paper p-4">
                    <span className="font-display text-xs font-bold text-brand">{s.n}</span>
                    <p className="mt-1 font-display text-sm font-bold uppercase text-ink">{s.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-stone-500">{s.text}</p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Legal registered address — not a visit venue */}
            <div className="border border-stone-200 bg-paper p-5">
              <h3 className="font-display text-sm font-extrabold uppercase tracking-wide text-ink">
                Online coverage hours
              </h3>
              <div className="mt-4 grid gap-2 text-sm">
                <div className="flex justify-between gap-4">
                  <span className="text-stone-500">Weekdays</span>
                  <span className="text-right font-medium text-ink">9:00 AM – 6:00 PM PT</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-stone-500">Saturday</span>
                  <span className="text-right font-medium text-ink">Remote appointment</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-stone-500">Sunday</span>
                  <span className="text-right font-medium text-ink">Closed</span>
                </div>
              </div>
              <div className="mt-5 border-t border-stone-200 pt-4">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-stone-400">
                  Registered business address (billing / legal)
                </p>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">{formatAddress()}</p>
                <p className="mt-1 text-xs text-stone-400">
                  {siteConfig.legalName} · DBA {siteConfig.dba} · Not a public walk-in studio
                </p>
              </div>
            </div>
          </div>

          {/* Form panel */}
          <div className="border border-stone-200 bg-white shadow-mega">
            <div className="border-b border-stone-200 bg-ink px-6 py-5 md:px-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
                Online inquiry
              </p>
              <h2 className="mt-2 font-display text-xl font-extrabold uppercase text-white md:text-2xl">
                Brief us remotely
              </h2>
              <p className="mt-2 text-sm text-stone-400">
                Include your cloud folder link if ready. No payment on this form — Stripe only after
                written USD confirm.
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
      <section className="border-t border-stone-200 bg-paper">
        <div className="section max-w-3xl">
          <h2 className="font-display text-2xl font-extrabold uppercase text-ink md:text-3xl">
            Remote collaboration FAQ
          </h2>
          <div className="mt-8 space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group border border-stone-200 bg-white open:shadow-sm"
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
            Policies:{" "}
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
