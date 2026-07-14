import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { WhyPoint } from "@/components/WhyPoint";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { FreeTrialForm } from "@/components/FreeTrialForm";
import { BrandMark } from "@/components/BrandMark";
import { StatCut } from "@/components/StatCut";
import { siteConfig } from "@/lib/site";
import { formatPrice, videoPackages } from "@/lib/packages";
import { caseStudies, homeStats } from "@/lib/content";
import {
  testimonialBenefits,
  testimonialFaqs,
  testimonialOffers,
} from "@/lib/testimonial";

export const metadata: Metadata = {
  title: "Testimonial Video Editing Services",
  description:
    "Professional testimonial video editing — narrative building, brand polish, and platform-ready exports. Clear USD pricing and Stripe checkout.",
};

export default function TestimonialEditingPage() {
  return (
    <div className="pt-[68px]">
      {/* Hero */}
      <section className="hero-stage relative overflow-hidden">
        <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
          <div className="relative z-10 max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand">
              Testimonial video editing
            </p>
            <h1 className="mt-4 font-display text-[2rem] font-extrabold uppercase leading-[1.1] text-white sm:text-4xl md:text-[2.75rem]">
              Testimonial finishing
              <span className="text-outline block">that keeps proof real</span>
              <span className="mt-1 block text-white">and brand-clean.</span>
            </h1>
            <p className="mt-5 text-sm leading-relaxed text-stone-300 md:text-base">
              {siteConfig.name} structures client footage into consistent, brand-aligned
              testimonial films — on deadline, with published USD pricing and Stripe-secured
              checkout.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact">Get Started Now</ButtonLink>
              <ButtonLink href="/portfolio" variant="outline">
                Portfolio
              </ButtonLink>
            </div>
            <p className="mt-6 text-xs text-stone-500">
              <Link href="/legal/refund" className="hover:text-brand">
                Refund Policy
              </Link>
              {" · "}
              <Link href="/legal/terms" className="hover:text-brand">
                Terms
              </Link>
              {" · "}
              <Link href="/checkout?package=video-essential" className="hover:text-brand">
                From {formatPrice(videoPackages[0].price)} USD
              </Link>
            </p>
          </div>

          <div className="relative z-10 hidden min-h-[320px] lg:block">
            <div
              className="absolute inset-y-[8%] left-[-8%] right-[4%] overflow-hidden rounded-xl border border-white/10 shadow-[0_28px_70px_rgba(0,0,0,0.5)]"
              style={{
                backgroundImage:
                  "linear-gradient(145deg, #1a1824 0%, #0a0a0a 55%), radial-gradient(circle at 55% 40%, rgba(227,6,19,0.4), transparent 55%)",
              }}
              role="img"
              aria-label="Testimonial edit preview"
            >
              <div className="absolute left-4 top-4 h-10 w-10 border-l-4 border-t-4 border-brand" />
              <div className="absolute inset-x-8 bottom-10">
                <p className="font-display text-sm font-bold uppercase tracking-wider text-white">
                  Client proof · Locked cut
                </p>
                <div className="mt-3 h-2 w-2/3 rounded-sm bg-brand" />
                <div className="mt-2 h-1.5 w-1/2 rounded-sm bg-white/25" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-5 pb-10 md:px-8">
          <div className="grid grid-cols-2 gap-6 border border-white/10 bg-black/50 px-4 py-8 backdrop-blur md:grid-cols-4 md:px-6 md:py-10">
            {homeStats.map((s) => (
              <StatCut key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section className="bg-white">
        <div className="section">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              Video testimonial services
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold uppercase text-ink md:text-4xl">
              What RenderReady Offers
            </h2>
            <p className="mt-4 text-sm text-stone-600 md:text-base">
              A complete finishing path from raw interviews to distribution-ready proof —
              specialized, inclusive scope, and quality-checked every round.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonialOffers.map((o, i) => (
              <article
                key={o.title}
                className={`border p-6 md:p-7 ${
                  i === 0
                    ? "border-ink bg-ink text-white md:col-span-2 lg:col-span-1"
                    : "border-stone-200 bg-paper text-ink"
                }`}
              >
                <p
                  className={`font-display text-xs font-bold uppercase tracking-[0.15em] ${
                    i === 0 ? "text-brand" : "text-brand"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-xl font-bold">{o.title}</h3>
                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    i === 0 ? "text-stone-300" : "text-stone-600"
                  }`}
                >
                  {o.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-t border-stone-200 bg-paper">
        <div className="section">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                Benefits
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold text-ink md:text-4xl">
                Why Outsource Testimonial Editing to Us
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-stone-600">
                Cut internal effort on footage review, narrative sequencing, brand integration, and
                QC — while keeping editorial control you define at intake.
              </p>
              <div
                className="relative mt-8 aspect-[4/3] overflow-hidden shadow-card"
                style={{
                  backgroundImage:
                    "linear-gradient(160deg, #1a1824, #111), radial-gradient(circle at 40% 40%, rgba(227,6,19,0.35), transparent 50%)",
                }}
                role="img"
                aria-label="Testimonial finishing atmosphere"
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                  <BrandMark size={88} />
                </div>
                <div className="absolute bottom-0 right-0 h-14 w-14 bg-brand" />
              </div>
            </div>
            <div className="space-y-7 self-center">
              {testimonialBenefits.map((b) => (
                <WhyPoint key={b.title} title={b.title} text={b.text} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="bg-ink">
        <div className="section grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-extrabold text-white md:text-4xl">
              Need pricing details?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-stone-300">
              Packages show deliverables, turnaround, and USD amounts before checkout. Discuss
              volume, brand standards, and deadlines with our delivery team.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-stone-400">
              <li>
                <Link href="/checkout" className="text-brand hover:underline">
                  View packages &amp; checkout
                </Link>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
                  className="hover:text-white"
                >
                  {siteConfig.phone}
                </a>
              </li>
            </ul>
            <div className="mt-8">
              <ButtonLink href="/contact">Contact Us</ButtonLink>
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
            <p className="font-display text-lg font-bold text-white">Start from</p>
            <p className="mt-2 font-display text-4xl font-extrabold text-brand">
              {formatPrice(videoPackages[0].price)}
              <span className="ml-1 text-base font-medium text-stone-400">USD</span>
            </p>
            <p className="mt-2 text-sm text-stone-400">
              {videoPackages[0].name} · {videoPackages[0].turnaround}
            </p>
            <p className="mt-4 text-xs text-stone-500">
              Or choose{" "}
              <Link href={`/checkout?package=${videoPackages[1].id}`} className="text-brand hover:underline">
                {videoPackages[1].name} ({formatPrice(videoPackages[1].price)})
              </Link>{" "}
              for multi-cut social suites.
            </p>
            <Link
              href={`/checkout?package=${videoPackages[0].id}`}
              className="btn-primary mt-6 inline-flex normal-case tracking-normal"
            >
              Select package
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews strip */}
      <section className="border-t border-stone-200 bg-white">
        <div className="section">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Clients feedback
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-ink md:text-4xl">
            What Clients Say
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                q: "Quick turnaround and clear scope made finance happy — same USD price as the package page.",
                n: "Priya Nair",
                r: "Operations · Harbor Studio",
              },
              {
                q: "They protected authentic client voice while applying our brand kit perfectly.",
                n: "Maya Chen",
                r: "Brand · Vera Goods",
              },
              {
                q: "Long-form plus social cuts delivered with captions — revisions stayed inside the package.",
                n: "Sam Ortiz",
                r: "Product Marketing · Kinetic Co",
              },
            ].map((t) => (
              <blockquote
                key={t.n}
                className="flex flex-col justify-between border border-stone-200 bg-paper p-6"
              >
                <p className="text-sm leading-relaxed text-stone-700">&ldquo;{t.q}&rdquo;</p>
                <footer className="mt-5 border-t border-stone-200 pt-4">
                  <p className="font-display font-bold text-ink">{t.n}</p>
                  <p className="text-xs text-stone-500">
                    {t.r} <span className="opacity-70">(Sample)</span>
                  </p>
                </footer>
              </blockquote>
            ))}
          </div>
          <div className="mt-8">
            <ButtonLink href="/reviews" variant="outlineDark">
              More reviews
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Discuss CTA */}
      <section className="border-t border-stone-200 bg-ink">
        <div className="section max-w-3xl text-center">
          <h2 className="font-display text-3xl font-extrabold text-white md:text-4xl">
            Discuss your testimonial editing requirements
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-stone-300">
            Evaluating partners? We&apos;ll walk through workflow, volume fit, brand standards, and
            turnaround — then confirm the exact USD package before any payment.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/contact">Request a consultation</ButtonLink>
            <ButtonLink href="/services/corporate" variant="ghost">
              Corporate services →
            </ButtonLink>
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
            {testimonialFaqs.map((f) => (
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

      {/* Case studies */}
      <section className="border-t border-stone-200 bg-white">
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

      {/* Form */}
      <section className="border-t border-stone-200 bg-paper">
        <div className="section max-w-3xl">
          <h2 className="font-display text-3xl font-extrabold uppercase text-ink">
            Request a Testimonial Scope Review
          </h2>
          <p className="mt-3 text-sm text-stone-600">
            Share footage type, target length, and channels. Payment only via Stripe after package
            confirmation.
          </p>
          <FreeTrialForm />
        </div>
      </section>

      <section className="bg-ink">
        <div className="section flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
          <div className="flex items-start gap-4">
            <BrandMark size={44} />
            <div>
              <h2 className="font-display text-2xl font-extrabold text-white md:text-3xl">
                Ready to finish your client proof?
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
