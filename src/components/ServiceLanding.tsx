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
import { formatPrice, photoPackages, videoPackages } from "@/lib/packages";
import { caseStudies, homeStats } from "@/lib/content";
import type { ServiceEntry } from "@/lib/serviceCatalog";

type Props = {
  service: ServiceEntry;
};

const serviceReels: Record<string, { src: string; label: string; caption: string }> = {
  "commerce-pathing": {
    src: "/commerce-pathing-reel.mp4",
    label: "Marketplace Pathing",
    caption: "Built for listing compliance",
  },
  corporate: {
    src: "/corporate-reel.mp4",
    label: "Structured Corporate",
    caption: "Video finishing services",
  },
};

export function ServiceLanding({ service }: Props) {
  const isPhoto = service.contactTopic === "photo";
  const packs = isPhoto ? photoPackages : videoPackages;
  const startPack = packs[0];
  const featuredPack = packs[1] ?? packs[0];
  const topic = service.contactTopic ?? (isPhoto ? "photo" : "video");
  const contactHref = `/contact?topic=${topic}`;
  const checkoutHref = `/checkout?package=${featuredPack.id}`;
  const reel = serviceReels[service.slug];

  return (
    <div className="pt-[68px] pb-20">
      <SplitServiceHero
        eyebrow={service.eyebrow}
        watermark="8+ YEARS"
        title={
          <>
            {service.heroLines[0]}
            <span className="block">{service.heroLines[1]}</span>
          </>
        }
        description={service.heroDescription}
        primaryCta={{ href: contactHref, label: "Contact Us" }}
        secondaryCta={{ href: checkoutHref, label: "View Packages" }}
        reelSrc={reel?.src}
        reelLabel={reel?.label}
        reelCaption={reel?.caption}
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

      <section className="border-b border-stone-200 bg-white">
        <div className="section grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-extrabold text-ink md:text-4xl">
              {service.introTitle}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-stone-600 md:text-base">
              {service.introBody} {siteConfig.name} delivers with human editorial oversight,
              locked brand kits, and published USD pricing before Stripe Checkout.
            </p>
          </div>
          <p className="rounded-xl border border-stone-200 bg-paper p-6 text-sm leading-relaxed text-stone-600">
            {service.introAside} Starting from{" "}
            <strong className="text-ink">{formatPrice(startPack.price)} USD</strong> or standard
            hourly rates on{" "}
            <Link href="/pricing" className="text-brand hover:underline">
              Pricing
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="section">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              Service menu
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold uppercase text-ink md:text-4xl">
              {service.menuTitle}
            </h2>
            <p className="mt-4 text-sm text-stone-600 md:text-base">{service.menuLead}</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {service.offerings.map((s) => (
              <ServiceDetailCard
                key={s.title}
                title={s.title}
                bullets={s.bullets}
                image={s.image}
                featured={s.featured}
                href={checkoutHref}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-stone-200 bg-white">
        <div className="section">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                {service.whyEyebrow}
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold text-ink md:text-4xl">
                {service.whyTitle}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-stone-600">{service.whyLead}</p>
              <div
                className="relative mt-8 aspect-[4/3] overflow-hidden shadow-card"
                style={{ backgroundImage: service.whyVisual }}
                role="img"
                aria-label={`${service.label} finishing suite`}
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                  <BrandMark size={88} />
                </div>
                <div className="absolute bottom-0 right-0 h-14 w-14 bg-brand" />
              </div>
            </div>
            <div className="space-y-7 self-center">
              {service.why.map((w) => (
                <WhyPoint key={w.title} title={w.title} text={w.text} />
              ))}
              <ButtonLink href="/about" variant="outlineDark">
                View More
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink">
        <div className="section grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-extrabold text-white md:text-4xl">
              {service.ctaTitle}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-stone-300 md:text-base">
              {service.ctaBody}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={contactHref}>Contact Us</ButtonLink>
              <ButtonLink href="/pricing" variant="outline">
                Hourly rates
              </ButtonLink>
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
            <p className="font-display text-lg font-bold text-white">Popular starting package</p>
            <p className="mt-2 font-display text-4xl font-extrabold text-brand">
              {formatPrice(featuredPack.price)}
              <span className="ml-1 text-base font-medium text-stone-400">USD</span>
            </p>
            <p className="mt-2 text-sm text-stone-400">
              {featuredPack.name} · {featuredPack.turnaround}
            </p>
            <Link
              href={`/checkout?package=${featuredPack.id}`}
              className="btn-primary mt-6 inline-flex normal-case tracking-normal"
            >
              Select package
            </Link>
            <p className="mt-4 text-xs text-stone-500">
              Prefer hourly? See{" "}
              <Link href="/pricing" className="text-brand hover:underline">
                Pricing
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

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

      <section className="border-t border-stone-200 bg-white">
        <div className="section max-w-3xl">
          <h2 className="font-display text-3xl font-extrabold text-ink md:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-10 space-y-3">
            {service.faqs.map((f) => (
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

      <section className="border-t border-stone-200 bg-paper">
        <div className="section max-w-3xl">
          <h2 className="font-display text-3xl font-extrabold uppercase text-ink">
            {service.inquiryTitle}
          </h2>
          <p className="mt-3 text-sm text-stone-600">{service.inquiryLead}</p>
          <FreeTrialForm />
        </div>
      </section>

      <section className="bg-ink">
        <div className="section flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
          <div className="flex items-start gap-4">
            <BrandMark size={44} />
            <div>
              <h2 className="font-display text-2xl font-extrabold text-white md:text-3xl">
                {service.bottomTitle}
              </h2>
              <p className="mt-2 text-sm text-stone-400">Call {siteConfig.phone}</p>
            </div>
          </div>
          <ButtonLink href={contactHref}>Get Started</ButtonLink>
        </div>
      </section>

      {/* Sticky conversion bar */}
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-white/10 bg-ink/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-3 md:px-8">
          <p className="text-sm text-stone-300">
            <span className="font-display font-bold text-white">{service.label}</span>
            <span className="mx-2 text-stone-600">·</span>
            From {formatPrice(startPack.price)} USD
            <span className="hidden sm:inline"> · or hourly on Pricing</span>
          </p>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/pricing"
              className="inline-flex items-center rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:border-brand hover:text-brand"
            >
              Rates
            </Link>
            <Link
              href={contactHref}
              className="inline-flex items-center rounded-full bg-brand px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-brand-dark"
            >
              Start project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
