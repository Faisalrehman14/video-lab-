import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { ServiceDetailCard } from "@/components/ServiceDetailCard";
import { WhyPoint } from "@/components/WhyPoint";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { FreeTrialForm } from "@/components/FreeTrialForm";
import { BrandMark } from "@/components/BrandMark";
import { StatCut } from "@/components/StatCut";
import { SplitServiceHero } from "@/components/SplitServiceHero";
import { siteConfig } from "@/lib/site";
import { formatPrice, videoPackages } from "@/lib/packages";
import { caseStudies, homeStats } from "@/lib/content";
import {
  corporateFaqs,
  corporateServices,
  corporateWhy,
} from "@/lib/corporate";

export const metadata: Metadata = {
  title: "Corporate Video Editing Services",
  description:
    "Brand-aligned corporate video editing for explainers, internal comms, webinars, sales pitches, and testimonials. Clear USD pricing and Stripe checkout.",
};

export default function CorporatePage() {
  return (
    <div className="pt-[68px]">
      {/* Split hero — light / dark with overlapping reel (corporate agency pattern) */}
      <SplitServiceHero
        eyebrow="Corporate video editing"
        watermark="8+ YEARS"
        title={
          <>
            Structured corporate
            <span className="block">video finishing services</span>
          </>
        }
        description="Brand-aligned corporate edits with clear review control — explainers, leadership interviews, webinars, pitches, and testimonials. Delivered with human editorial oversight and published USD pricing before Stripe Checkout."
        primaryCta={{ href: "/contact", label: "Contact Us" }}
        secondaryCta={{ href: "/checkout?package=video-pro", label: "View Packages" }}
        policyLinks={
          <>
            <Link href="/legal/refund" className="hover:text-brand">
              Refund Policy
            </Link>
            {" · "}
            <Link href="/legal/terms" className="hover:text-brand">
              Terms
            </Link>
            {" · "}
            <Link href="/legal/cancellation" className="hover:text-brand">
              Cancellation
            </Link>
          </>
        }
      />

      <div className="relative z-10 mx-auto -mt-2 max-w-6xl px-5 md:-mt-8 md:px-8">
        <div className="grid grid-cols-2 gap-6 border border-stone-200 bg-ink px-4 py-8 shadow-[0_16px_40px_rgba(0,0,0,0.18)] md:grid-cols-4 md:px-6 md:py-10">
          {homeStats.map((s) => (
            <StatCut key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </div>

      {/* Intro */}
      <section className="border-b border-stone-200 bg-white">
        <div className="section grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-extrabold text-ink md:text-4xl">
              Why corporate edits stall — and how we fix it
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-stone-600 md:text-base">
              Initiatives often stall at editing: inconsistent brand alignment and fragmented review
              cycles. {siteConfig.name} combines experienced human editors with structured intake,
              revision limits, and brand kits locked before work starts — so deliverables stay
              credible and on schedule.
            </p>
          </div>
          <p className="rounded-xl border border-stone-200 bg-paper p-6 text-sm leading-relaxed text-stone-600">
            Built for agencies, enterprise marketing, HR / L&amp;D, production houses, and
            professional services firms that need controlled execution — not open-ended creative
            experiments. Starting from{" "}
            <strong className="text-ink">{formatPrice(videoPackages[0].price)} USD</strong>.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-paper">
        <div className="section">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              Service menu
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold uppercase text-ink md:text-4xl">
              Our Corporate Video Editing Services
            </h2>
            <p className="mt-4 text-sm text-stone-600 md:text-base">
              Each offering lists exact work included — so Stripe checkout and your stakeholders see
              a clear description of what you are buying.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {corporateServices.map((s) => (
              <ServiceDetailCard
                key={s.title}
                title={s.title}
                bullets={s.bullets}
                image={s.image}
                featured={s.featured}
                href="/checkout?package=video-pro"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="border-t border-stone-200 bg-white">
        <div className="section">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                Delivery control
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold text-ink md:text-4xl">
                Why Teams Choose Our Corporate Finishing
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-stone-600">
                Built for environments that need documented workflows and defined review controls —
                delivery discipline over open-ended creative cycles.
              </p>
              <div
                className="relative mt-8 aspect-[4/3] overflow-hidden shadow-card"
                style={{
                  backgroundImage:
                    "linear-gradient(160deg, #2a1212, #111), radial-gradient(circle at 40% 40%, rgba(227,6,19,0.35), transparent 50%)",
                }}
                role="img"
                aria-label="Corporate edit suite"
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                  <BrandMark size={88} />
                </div>
                <div className="absolute bottom-0 right-0 h-14 w-14 bg-brand" />
              </div>
            </div>
            <div className="space-y-7 self-center">
              {corporateWhy.map((w) => (
                <WhyPoint key={w.title} title={w.title} text={w.text} />
              ))}
              <ButtonLink href="/about" variant="outlineDark">
                View More
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* Dark CTA */}
      <section className="bg-ink">
        <div className="section grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-extrabold text-white md:text-4xl">
              Strengthen delivery control with scoped corporate finishing.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-stone-300 md:text-base">
              Defined intake, documented review cycles, and approval-ready outputs aligned to brand
              governance. Ready to outsource under a clear USD package?
            </p>
            <div className="mt-8">
              <ButtonLink href="/contact">Contact Us</ButtonLink>
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
            <p className="font-display text-lg font-bold text-white">Popular starting package</p>
            <p className="mt-2 font-display text-4xl font-extrabold text-brand">
              {formatPrice(videoPackages[1].price)}
              <span className="ml-1 text-base font-medium text-stone-400">USD</span>
            </p>
            <p className="mt-2 text-sm text-stone-400">
              {videoPackages[1].name} · {videoPackages[1].turnaround}
            </p>
            <Link
              href={`/checkout?package=${videoPackages[1].id}`}
              className="btn-primary mt-6 inline-flex normal-case tracking-normal"
            >
              Select package
            </Link>
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="border-t border-stone-200 bg-paper">
        <div className="section">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="section-badge">Success stories</span>
              <h2 className="mt-4 font-display text-3xl font-extrabold text-ink md:text-4xl">
                Recent Case Studies
              </h2>
            </div>
            <ButtonLink href="/portfolio">View All</ButtonLink>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {caseStudies.map((c) => (
              <CaseStudyCard key={c.title} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-stone-200 bg-white">
        <div className="section max-w-3xl">
          <h2 className="font-display text-3xl font-extrabold text-ink md:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-10 space-y-3">
            {corporateFaqs.map((f) => (
              <details
                key={f.q}
                className="group border border-stone-200 bg-paper open:bg-white open:shadow-sm"
              >
                <summary className="cursor-pointer list-none px-5 py-4 font-display text-base font-bold text-ink marker:content-none [&::-webkit-details-marker]:hidden">
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
        </div>
      </section>

      {/* Inquiry */}
      <section className="border-t border-stone-200 bg-paper">
        <div className="section max-w-3xl">
          <h2 className="font-display text-3xl font-extrabold uppercase text-ink">
            Request a Corporate Scope Call
          </h2>
          <p className="mt-3 text-sm text-stone-600">
            Tell us volume, brand kit status, and deadlines. We confirm package and USD price before
            any Stripe payment.
          </p>
          <FreeTrialForm />
        </div>
      </section>

      {/* Bottom bar */}
      <section className="bg-ink">
        <div className="section flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
          <div className="flex items-start gap-4">
            <BrandMark size={44} />
            <div>
              <h2 className="font-display text-2xl font-extrabold text-white md:text-3xl">
                Ready to lock a corporate finish?
              </h2>
              <p className="mt-2 text-sm text-stone-400">Call {siteConfig.phone}</p>
            </div>
          </div>
          <ButtonLink href="/contact">Get Started</ButtonLink>
        </div>
      </section>
    </div>
  );
}
