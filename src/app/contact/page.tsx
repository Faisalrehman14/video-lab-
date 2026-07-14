import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { formatAddress, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact RenderReady Labs — email, phone, address, and inquiry form.",
};

export default function ContactPage() {
  return (
    <div className="bg-paper pt-[68px]">
      <section className="section">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Contact</p>
            <h1 className="mt-3 font-display text-4xl font-extrabold uppercase text-ink md:text-5xl">
              Let&apos;s Scope Your Next Edit
            </h1>
            <p className="mt-6 text-lg text-stone-600">
              We confirm package, USD price, and turnaround before any Stripe payment.
            </p>
            <dl className="mt-10 space-y-6 text-sm">
              <div>
                <dt className="font-semibold text-ink">Business email</dt>
                <dd className="mt-1">
                  <a href={`mailto:${siteConfig.email}`} className="text-brand hover:underline">
                    {siteConfig.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Phone</dt>
                <dd className="mt-1 text-stone-600">
                  <a href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}>{siteConfig.phone}</a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Physical business address</dt>
                <dd className="mt-1 text-stone-600">{formatAddress()}</dd>
                <dd className="mt-1 text-xs text-stone-400">
                  {siteConfig.legalName} (DBA {siteConfig.dba})
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Business hours</dt>
                <dd className="mt-1 text-stone-600">{siteConfig.hours.weekdays}</dd>
                <dd className="text-stone-600">{siteConfig.hours.weekend}</dd>
              </div>
            </dl>
          </div>

          <div className="border border-stone-200 bg-white p-6 shadow-mega md:p-8">
            <h2 className="font-display text-xl font-bold text-ink">Project inquiry</h2>
            <p className="mt-2 text-sm text-stone-500">
              Payment is never collected on this form — only via Stripe Checkout.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
