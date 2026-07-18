import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { FreeTrialForm } from "@/components/FreeTrialForm";
import { FinishBayVisual } from "@/components/FinishBayVisual";
import { BrandMark } from "@/components/BrandMark";
import { StatCut } from "@/components/StatCut";
import { PricingBoard } from "@/components/PricingBoard";
import { CategoryShowcase } from "@/components/CategoryShowcase";
import { ProofStrip } from "@/components/ProofStrip";
import { CapabilityPillars } from "@/components/CapabilityPillars";
import { AudienceGrid } from "@/components/AudienceGrid";
import { EngagementModels } from "@/components/EngagementModels";
import { CompareTable } from "@/components/CompareTable";
import { CommitmentBand } from "@/components/CommitmentBand";
import { siteConfig } from "@/lib/site";
import { homeStats, steps } from "@/lib/content";
import { companyFaqs } from "@/lib/company";

export const metadata: Metadata = {
  title: "Professional Video & Photo Editing Services",
  description: siteConfig.description,
};

/**
 * Conversion order (what → who → proof → price → model → process →
 * differentiation → coverage → commitments → objections → close).
 */
const remoteSteps = steps.slice(0, 3);

const trustChips = [
  "Written USD before Stripe",
  "Fully remote handoff",
  "Frame.io / Drive review",
  "Revision rounds in scope",
];

export default function HomePage() {
  return (
    <>
      {/* 1 — Brand + promise + CTA + visual */}
      <section className="hero-stage relative min-h-[100svh] overflow-hidden pt-[68px]">
        <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden />

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-14 md:px-8 lg:min-h-[calc(100svh-68px)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-20 lg:pt-10">
          <div className="relative z-10 max-w-xl">
            <p className="font-display text-sm font-extrabold uppercase tracking-[0.12em] text-white md:text-base">
              <span className="text-brand">{siteConfig.name.split(" ")[0]}</span>{" "}
              {siteConfig.name.split(" ").slice(1).join(" ")}
            </p>

            <h1 className="mt-5 font-display text-[2.35rem] font-extrabold uppercase leading-[1.05] sm:text-5xl md:text-[3.25rem] md:leading-[1.02]">
              <span className="text-white">Finish that</span>
              <span className="text-outline block">ships online.</span>
            </h1>

            <p className="mt-5 max-w-md text-base leading-relaxed text-stone-300">
              A fully remote video &amp; photo finishing lab for campaigns, commerce, and product
              stories — you brief online, we finish to spec, and the USD scope is locked before
              Stripe Checkout.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/contact">Start a Project</ButtonLink>
              <ButtonLink href="/portfolio" variant="outline">
                See our work
              </ButtonLink>
            </div>

            <p className="mt-6 text-xs text-stone-500">
              {siteConfig.remote.coverage} · {siteConfig.remote.timezone}
            </p>
          </div>

          <div className="relative z-10 w-full lg:pl-2">
            <FinishBayVisual />
          </div>
        </div>
      </section>

      {/* 2 — Trust strip */}
      <section className="border-y border-white/10 bg-[#0a0a0a]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 py-5 md:px-8 md:justify-between">
          {trustChips.map((t) => (
            <p
              key={t}
              className="text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-400"
            >
              <span className="mr-2 text-brand" aria-hidden>
                ▸
              </span>
              {t}
            </p>
          ))}
        </div>
      </section>

      {/* 3 — What we offer */}
      <CapabilityPillars />

      {/* 4 — Who we serve */}
      <AudienceGrid />

      {/* 5 — Proof */}
      <ProofStrip />

      {/* 6 — Stats band */}
      <section className="bg-ink">
        <div className="mx-auto max-w-6xl px-5 pb-4 md:px-8">
          <div className="grid grid-cols-2 gap-6 border-x border-b border-white/10 bg-ink px-4 py-8 md:grid-cols-4 md:px-6 md:py-10">
            {homeStats.map((s) => (
              <StatCut key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      {/* 7 — Price */}
      <PricingBoard />

      {/* 8 — Engagement / business model */}
      <EngagementModels />

      {/* 9 — Remote process */}
      <section className="border-t border-stone-200 bg-white">
        <div className="section">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
              Remote handoff
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-ink md:text-4xl">
              From Drive drop to finals
            </h2>
            <p className="mt-3 text-sm text-stone-600 md:text-base">
              No walk-in studio. Upload online, review with time codes, download publish-ready files.
            </p>
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {remoteSteps.map((s) => (
              <div key={s.n} className="relative">
                <p className="font-display text-5xl font-extrabold text-brand/15">{s.n}</p>
                <h3 className="mt-2 font-display text-xl font-bold text-ink">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">{s.text}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-xs text-stone-500">
            Handoff via {siteConfig.remote.handoff.slice(0, 3).join(" · ")} + more
          </p>
        </div>
      </section>

      {/* 10 — Differentiation vs alternatives */}
      <CompareTable />

      {/* 11 — Match specialty */}
      <CategoryShowcase />

      {/* 12 — Commitments */}
      <CommitmentBand />

      {/* 13 — Objections + brief */}
      <section className="border-t border-stone-200 bg-paper">
        <div className="section grid gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-3xl font-extrabold text-ink md:text-4xl">
              Frequently asked
            </h2>
            <p className="mt-3 text-sm text-stone-600">
              The operational and trust questions buyers ask before the first brief.
            </p>
            <div className="mt-8 space-y-3">
              {companyFaqs.map((f) => (
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
            <Link
              href="/contact"
              className="mt-6 inline-block text-sm font-semibold text-brand hover:underline"
            >
              More questions? Contact us →
            </Link>
          </div>

          <div>
            <h2 className="font-display text-3xl font-extrabold uppercase text-ink">
              Start a brief
            </h2>
            <p className="mt-3 text-sm text-stone-600">
              Share scope and deadline. We confirm hours or package USD before any Stripe payment.
            </p>
            <FreeTrialForm />
          </div>
        </div>
      </section>

      {/* 14 — Close */}
      <section className="bg-ink">
        <div className="section flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
          <div className="flex items-start gap-4">
            <BrandMark size={44} />
            <div>
              <h2 className="font-display text-2xl font-extrabold text-white md:text-3xl">
                Ready to lock a finish date?
              </h2>
              <p className="mt-2 text-sm text-stone-400">
                Call {siteConfig.phone} · {siteConfig.remote.coverage}
              </p>
            </div>
          </div>
          <ButtonLink href="/contact">Get Started</ButtonLink>
        </div>
      </section>
    </>
  );
}
