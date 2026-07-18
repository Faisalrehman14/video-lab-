import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { StatCut } from "@/components/StatCut";
import { PortfolioGallery } from "@/components/PortfolioGallery";
import { homeStats } from "@/lib/content";
import { caseStudyDetails, portfolioCategories, portfolioItems } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Portfolio / Work Showcase",
  description:
    "Finished work from RenderReady Labs — campaign films, product motion, property tours, marketplace stills, and detailed case studies with real delivery numbers.",
};

const processSteps = [
  { n: "01", title: "Brief locked", text: "Scope, USD price, and turnaround confirmed in writing before payment." },
  { n: "02", title: "Finishing pass", text: "Edit, grade, retouch, and mix against your brand kit and approved refs." },
  { n: "03", title: "Structured review", text: "Time-coded notes through the revision rounds listed in your package." },
  { n: "04", title: "Master delivery", text: "Platform-ready exports, named for your ops — publish without rework." },
];

export default function PortfolioPage() {
  return (
    <div className="pt-[68px]">
      {/* Hero */}
      <section className="bg-paper">
        <div className="section relative pb-12">
          <p
            className="pointer-events-none absolute right-8 top-8 hidden select-none font-display text-[6rem] font-extrabold leading-none text-stone-200/70 md:block"
            aria-hidden
          >
            PORTFOLIO
          </p>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Work showcase</p>
          <h1 className="relative mt-3 max-w-3xl font-display text-4xl font-extrabold uppercase text-ink md:text-5xl">
            Finished work.
            <span className="mt-1 block text-stone-500">Real delivery numbers.</span>
          </h1>
          <p className="relative mt-6 max-w-2xl text-lg text-stone-600">
            Campaign films, product motion, property tours, and marketplace stills — every project
            below shipped under a written scope with USD pricing confirmed before Stripe.
          </p>
          <div className="relative mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact">Start a Project</ButtonLink>
            <ButtonLink href="/services" variant="outline">
              Browse Specialties
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <div className="relative z-10 mx-auto -mt-2 max-w-6xl px-5 md:-mt-6 md:px-8">
        <div className="grid grid-cols-2 gap-6 border border-stone-200 bg-ink px-4 py-8 shadow-[0_16px_40px_rgba(0,0,0,0.18)] md:grid-cols-4 md:px-6 md:py-10">
          {homeStats.map((s) => (
            <StatCut key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </div>

      {/* Filterable gallery with lightbox players */}
      <section className="bg-white">
        <div className="section pt-14">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="section-badge">Selected work</span>
              <h2 className="mt-4 font-display text-3xl font-extrabold text-ink md:text-4xl">
                The reel room
              </h2>
              <p className="mt-2 max-w-xl text-sm text-stone-600">
                Click any project to play it in place. Each card links to the specialty that
                produced it — same scope you can buy.
              </p>
            </div>
          </div>
          <PortfolioGallery items={portfolioItems} categories={portfolioCategories} />
        </div>
      </section>

      {/* Case studies — detailed, with outcomes */}
      <section className="border-t border-white/10 bg-ink">
        <div className="section">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
                Success stories
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold text-white md:text-4xl">
                Case studies with numbers
              </h2>
            </div>
            <ButtonLink href="/contact">Start a Project</ButtonLink>
          </div>

          <div className="mt-12 space-y-6">
            {caseStudyDetails.map((c, i) => (
              <article
                key={c.client}
                className="grid gap-6 border border-white/10 bg-white/[0.03] p-6 md:grid-cols-[1fr_1fr_auto] md:gap-10 md:p-8"
              >
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-400">
                    {String(i + 1).padStart(2, "0")} · {c.tag}
                  </p>
                  <h3 className="mt-3 font-display text-xl font-extrabold leading-snug text-white">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-brand">{c.client}</p>
                </div>

                <div className="space-y-4 text-sm leading-relaxed text-stone-300">
                  <p>
                    <span className="font-semibold uppercase tracking-wide text-white">
                      Challenge —{" "}
                    </span>
                    {c.challenge}
                  </p>
                  <p>
                    <span className="font-semibold uppercase tracking-wide text-white">
                      Approach —{" "}
                    </span>
                    {c.approach}
                  </p>
                  <Link
                    href={c.serviceHref}
                    className="inline-block text-xs font-semibold uppercase tracking-wide text-brand hover:underline"
                  >
                    View this specialty →
                  </Link>
                </div>

                <div className="flex gap-8 md:flex-col md:gap-5 md:border-l md:border-white/10 md:pl-8">
                  {c.results.map((r) => (
                    <div key={r.label}>
                      <p className="font-display text-2xl font-extrabold text-white">{r.value}</p>
                      <p className="mt-0.5 text-[11px] uppercase tracking-wide text-stone-400">
                        {r.label}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How every project ships */}
      <section className="border-t border-stone-200 bg-paper">
        <div className="section">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-badge">Delivery discipline</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-ink md:text-4xl">
              How every project above shipped
            </h2>
            <p className="mt-3 text-sm text-stone-600">
              Same four steps, every scope — no open-ended creative loops.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((s) => (
              <div key={s.n} className="border border-stone-200 bg-white p-6">
                <p className="font-display text-2xl font-extrabold text-brand">{s.n}</p>
                <h3 className="mt-3 font-display text-base font-extrabold uppercase text-ink">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Close */}
      <section className="border-t border-stone-200 bg-white">
        <div className="section flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-2xl font-extrabold uppercase text-ink md:text-3xl">
              Your project belongs on this page.
            </h2>
            <p className="mt-2 max-w-xl text-sm text-stone-600">
              Share footage or stills, get a written USD scope, and see your master delivered on
              the same discipline shown above.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <ButtonLink href="/contact">Get a Scope</ButtonLink>
            <ButtonLink href="/pricing" variant="outline">
              See Pricing
            </ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
}
