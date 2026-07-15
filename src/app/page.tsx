import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { ServiceDetailCard } from "@/components/ServiceDetailCard";
import { WhyPoint } from "@/components/WhyPoint";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { FreeTrialForm } from "@/components/FreeTrialForm";
import { FinishBayVisual, HeroQuickActions } from "@/components/FinishBayVisual";
import { BrandMark } from "@/components/BrandMark";
import { CraftDeckGrid } from "@/components/CraftDeckGrid";
import { StatCut } from "@/components/StatCut";
import { PricingBoard } from "@/components/PricingBoard";
import { CategoryShowcase } from "@/components/CategoryShowcase";
import { siteConfig } from "@/lib/site";
import { formatPrice, videoPackages } from "@/lib/packages";
import {
  caseStudies,
  faqs,
  homeStats,
  industries,
  steps,
  videoSpecialties,
  whyChoose,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Professional Video & Photo Editing Services",
  description: siteConfig.description,
};

const software = [
  "Premiere Pro",
  "DaVinci Resolve",
  "Final Cut Pro",
  "After Effects",
  "Photoshop",
  "Audition",
];

const clients = [
  "Northline",
  "Vera Goods",
  "Pulse Athletic",
  "Kinetic Co",
  "Harbor Studio",
  "Lumen Soft",
];

export default function HomePage() {
  return (
    <>
      {/* Unique dark Finish Bay hero — premium energy, original composition */}
      <section className="hero-stage relative overflow-hidden pt-[68px]">
        <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden />

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-12 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-20 lg:pt-16">
          <div className="relative z-10 max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand">
              {siteConfig.name}
            </p>

            <h1 className="mt-4 font-display text-[2.1rem] font-extrabold uppercase leading-[1.08] sm:text-4xl md:text-[3.1rem] md:leading-[1.05]">
              <span className="text-white">Ship-ready video</span>
              <span className="text-outline block">&amp; photo finishing</span>
              <span className="mt-1 block text-white">for brands that move.</span>
            </h1>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-stone-300 md:text-base">
              A finishing lab for campaigns, commerce, and product stories — scoped packages,
              published USD pricing, and Stripe-secured checkout. Built to feel premium, not templated.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact">Start a Project</ButtonLink>
              <ButtonLink href="/portfolio" variant="outline">
                See the Work
              </ButtonLink>
            </div>

            <HeroQuickActions />
          </div>

          <div className="relative z-10 w-full lg:pl-2">
            <FinishBayVisual />
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-5 pb-2 md:px-8">
          <div className="grid grid-cols-2 gap-6 border border-white/10 bg-black/50 px-4 py-8 backdrop-blur md:grid-cols-4 md:gap-4 md:px-6 md:py-10">
            {homeStats.map((s) => (
              <StatCut key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Trusted by / software */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-400">
              Trusted by growing brands
            </p>
            <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
              {clients.map((c) => (
                <li
                  key={c}
                  className="font-display text-sm font-bold tracking-wide text-stone-300 md:text-base"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:text-right">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-400">
              Built in industry tools
            </p>
            <ul className="mt-3 flex flex-wrap gap-2 md:justify-end">
              {software.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-stone-200 bg-paper px-3 py-1 text-xs font-medium text-stone-600"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Craft decks — dark showcase (unique naming & layout) */}
      <section className="bg-[#0a0a0a]">
        <div className="section">
          <h2 className="mx-auto max-w-3xl text-center font-display text-2xl font-extrabold uppercase leading-snug text-white md:text-4xl">
            Three decks. One finish line.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-sm text-stone-400">
            Picture, motion, and audio — the craft layers inside every RenderReady package.
          </p>
          <div className="mt-12">
            <CraftDeckGrid />
          </div>
        </div>
      </section>

      {/* Categories — dark image masonry */}
      <CategoryShowcase />

      {/* Detailed specialties */}
      <section className="border-t border-stone-200 bg-paper">
        <div className="section">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.05fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                Video specialties
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold text-ink md:text-4xl">
                Our Professional Video Editing Services
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-stone-600 md:text-base">
              Technical scope written clearly — so you know exactly what you are buying before
              Stripe Checkout.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {videoSpecialties.map((s) => (
              <ServiceDetailCard key={s.title} {...s} href="/services/video-editing" />
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/services/video-editing"
              className="text-sm font-semibold text-brand hover:underline"
            >
              View video packages from {formatPrice(videoPackages[0].price)} USD →
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-stone-200 bg-white">
        <div className="section">
          <h2 className="text-center font-display text-3xl font-extrabold uppercase text-ink md:text-4xl">
            From Brief to Finals
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-stone-600">
            A simple, documented path from brief to finals — with policies linked at payment.
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, idx) => (
              <div
                key={s.n}
                className="relative border border-stone-200 bg-paper p-6 text-center shadow-sm"
              >
                {idx < steps.length - 1 && (
                  <span
                    className="absolute -right-3 top-10 hidden h-px w-6 bg-brand/40 lg:block"
                    aria-hidden
                  />
                )}
                <p className="text-xs font-bold uppercase tracking-wider text-brand">Step</p>
                <p className="mt-1 font-display text-4xl font-extrabold text-ink">{s.n}</p>
                <h3 className="mt-3 font-display text-lg font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="border-t border-stone-200 bg-paper">
        <div className="section">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                Why RenderReady
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold text-ink md:text-4xl">
                Why Teams Stay With RenderReady
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-stone-600 md:text-base">
                Technical accuracy, transparent USD pricing, and support-first dispute handling —
                built for teams that need assets that ship.
              </p>
              <div
                className="relative mt-8 aspect-[4/3] overflow-hidden shadow-card"
                style={{
                  backgroundImage:
                    "linear-gradient(160deg, #2a1212, #111), radial-gradient(circle at 40% 40%, rgba(227,6,19,0.35), transparent 50%)",
                }}
                role="img"
                aria-label="Editor at a finishing desk"
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                  <BrandMark size={88} />
                </div>
                <div className="absolute bottom-0 right-0 h-16 w-16 bg-brand" aria-hidden />
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-8">
              {whyChoose.map((w) => (
                <WhyPoint key={w.title} title={w.title} text={w.text} />
              ))}
              <div>
                <ButtonLink href="/about" variant="outlineDark">
                  View More
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="border-t border-stone-200 bg-white">
        <div className="section">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="section-badge">Success stories</span>
              <h2 className="mt-4 font-display text-3xl font-extrabold text-ink md:text-4xl">
                Case Studies
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

      {/* Dark CTA */}
      <section className="relative overflow-hidden bg-ink">
        <div
          className="pointer-events-none absolute -right-16 top-8 h-80 w-80 rounded-full bg-brand/25 blur-3xl"
          aria-hidden
        />
        <div className="section relative grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-5">
              <BrandMark size={48} />
            </div>
            <h2 className="font-display text-3xl font-extrabold text-white md:text-4xl lg:text-[2.75rem]">
              Get Publish-Ready Visuals, Delivered at Scale.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-stone-300 md:text-base">
              Confirm scope and USD pricing before payment. Card data processed by Stripe — never
              stored on our servers.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact">Contact Us</ButtonLink>
              <ButtonLink href="/checkout" variant="ghost">
                View packages →
              </ButtonLink>
            </div>
          </div>
          <div className="relative overflow-visible">
            <FinishBayVisual />
          </div>
        </div>
      </section>

      {/* Free trial */}
      <section className="border-t border-stone-200 bg-white">
        <div className="section max-w-3xl">
          <h2 className="font-display text-3xl font-extrabold uppercase text-ink">
            Request a Project Fit Check
          </h2>
          <p className="mt-3 text-sm text-stone-600">
            Share a sample project. We reply within one business day. Payment only via Stripe after
            package confirmation.
          </p>
          <FreeTrialForm />
        </div>
      </section>

      {/* Pricing — VideoCaddy-style board */}
      <PricingBoard />

      {/* Industries */}
      <section className="border-t border-stone-200 bg-white">
        <div className="section">
          <h2 className="font-display text-3xl font-extrabold uppercase text-ink md:text-4xl">
            Industries We Serve
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => (
              <div
                key={ind.title}
                className="border border-stone-200 p-6 transition hover:border-brand/40 hover:shadow-card"
              >
                <h3 className="font-display text-lg font-bold uppercase text-brand">{ind.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">{ind.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-stone-200 bg-paper">
        <div className="section max-w-3xl">
          <h2 className="font-display text-3xl font-extrabold text-ink md:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-10 space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group border border-stone-200 bg-white open:shadow-sm"
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

      {/* Bottom CTA */}
      <section className="bg-ink">
        <div className="section flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
          <div className="flex items-start gap-4">
            <BrandMark size={44} />
            <div>
              <h2 className="font-display text-2xl font-extrabold text-white md:text-3xl">
                Ready to lock a finish date?
              </h2>
              <p className="mt-2 text-sm text-stone-400">
                Call {siteConfig.phone} or start a project inquiry online.
              </p>
            </div>
          </div>
          <ButtonLink href="/contact">Get Started</ButtonLink>
        </div>
      </section>
    </>
  );
}
