import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { WhyPoint } from "@/components/WhyPoint";
import { StatCut } from "@/components/StatCut";
import { EngagementModels } from "@/components/EngagementModels";
import { CommitmentBand } from "@/components/CommitmentBand";
import { siteConfig } from "@/lib/site";
import { whyChoose, homeStats } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "About RenderReady Labs — a fully remote video & photo finishing lab. Our operating model, engagement options, values, and why brands outsource finishing to us.",
};

const process = [
  {
    step: "01",
    title: "Brief online",
    text: "Share goals + a Drive / Dropbox / Frame.io link. Hours or package USD confirmed in writing before payment.",
  },
  {
    step: "02",
    title: "Edit remotely",
    text: "Editors cut, grade, and retouch online. Structured revision rounds matching your scope.",
  },
  {
    step: "03",
    title: "Deliver online",
    text: "Review on Frame.io or notes, then download masters from a secure cloud handoff.",
  },
];

const operatingModel = [
  {
    title: "A bench, not a single desk",
    text: "Work is routed to editors matched to the job — video, photo, motion, or audio — so capacity scales with your volume instead of stalling on one person's calendar.",
  },
  {
    title: "Brand kits locked at intake",
    text: "Fonts, colors, LUTs, and logo safe-zones are captured once and enforced across every editor and every month, so output stays consistent as your catalog grows.",
  },
  {
    title: "Async by default",
    text: "We operate on written scopes and time-coded reviews across time zones. No meetings required — though we'll hop on Zoom or Meet when a kickoff needs it.",
  },
  {
    title: "Priced before produced",
    text: "Every engagement starts with a written USD scope. Stripe charges exactly that amount, and policy links travel with the invoice for dispute-ready clarity.",
  },
];

const values = [
  { title: "Clarity over hype", text: "We publish scope, price, and turnaround — no vague 'creative retainers' that balloon." },
  { title: "Craft with discipline", text: "Technical accuracy and platform specs come first; taste is aligned through structured revisions." },
  { title: "Reliability at scale", text: "Predictable delivery for launch weeks and always-on calendars, without you hiring in-house." },
  { title: "Respect for the brief", text: "Your footage, your brand, your deadline — finished the way you approved, not reinterpreted." },
];

export default function AboutPage() {
  return (
    <div className="pt-[68px]">
      {/* Hero */}
      <section className="bg-paper">
        <div className="section pb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            About {siteConfig.name}
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-extrabold uppercase text-ink md:text-5xl">
            A Remote Finishing Lab for Brands That Move Fast
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
            {siteConfig.legalName} (DBA {siteConfig.dba}) is an online video &amp; photo finishing
            lab. Clients worldwide brief us remotely — clear hours or packages, transparent USD
            pricing, and Stripe-secured checkout. {siteConfig.remote.coverage}.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact">Start a remote brief</ButtonLink>
            <ButtonLink href="/pricing" variant="outlineDark">
              Hourly rates
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

      {/* Mission */}
      <section className="border-t border-stone-200 bg-white">
        <div className="section grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
              Our mission
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-ink md:text-4xl">
              Make remote post predictable
            </h2>
          </div>
          <div className="space-y-4 text-stone-600">
            <p className="leading-relaxed">
              Most teams don&apos;t lose time in the shoot — they lose it in finishing: unclear quotes,
              scope creep, and revision loops with no end. We exist to remove that friction.
            </p>
            <p className="leading-relaxed">
              Before you pay, you know exactly what you&apos;re buying, what it costs in USD, how long it
              takes, and what the refund rules are. No office visit, no ambiguity — just finished
              files that ship on time.
            </p>
          </div>
        </div>
      </section>

      {/* Operating model */}
      <section className="border-t border-stone-200 bg-paper">
        <div className="section">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
              How the lab runs
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-ink md:text-4xl">
              Our operating model
            </h2>
            <p className="mt-3 text-sm text-stone-600 md:text-base">
              The structure that lets a remote lab deliver studio capacity with fixed-scope clarity.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {operatingModel.map((o) => (
              <div key={o.title} className="border border-stone-200 bg-white p-6 md:p-7">
                <h3 className="font-display text-lg font-extrabold uppercase text-ink">
                  {o.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">{o.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work online */}
      <section className="border-t border-stone-200 bg-white">
        <div className="section">
          <h2 className="font-display text-3xl font-extrabold text-ink">How We Work Online</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {process.map((p) => (
              <div key={p.step} className="border border-stone-200 bg-paper p-6">
                <span className="font-display text-4xl font-bold text-stone-200">{p.step}</span>
                <h3 className="mt-2 font-display text-xl font-bold text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement / business model */}
      <EngagementModels />

      {/* Values */}
      <section className="border-t border-stone-200 bg-white">
        <div className="section">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
              What we stand for
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-ink md:text-4xl">
              Values that shape the work
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="border-t-2 border-brand bg-paper p-6">
                <h3 className="font-display text-base font-extrabold uppercase text-ink">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments */}
      <CommitmentBand />

      {/* Why remote finishing */}
      <section className="border-t border-stone-200 bg-white">
        <div className="section">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-extrabold text-ink md:text-4xl">
                Why Brands Choose Remote Finishing
              </h2>
              <div
                className="relative mt-8 aspect-video overflow-hidden"
                style={{
                  backgroundImage:
                    "linear-gradient(160deg,#2a1212,#111),radial-gradient(circle at 40% 40%,rgba(227,6,19,.35),transparent 50%)",
                }}
                role="img"
                aria-label="Remote finishing workflow"
              >
                <div className="absolute inset-x-6 bottom-6 space-y-2">
                  <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-brand">
                    Online · Async · Stripe
                  </p>
                  <p className="font-display text-lg font-bold text-white">
                    {siteConfig.remote.model}
                  </p>
                </div>
                <div className="absolute bottom-0 right-0 h-14 w-14 bg-brand" />
              </div>
            </div>
            <div className="space-y-8 self-center">
              {whyChoose.map((w) => (
                <WhyPoint key={w.title} title={w.title} text={w.text} />
              ))}
              <ButtonLink href="/contact" variant="outlineDark">
                Brief us online
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* Close */}
      <section className="bg-ink">
        <div className="section flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-2xl font-extrabold uppercase text-white md:text-3xl">
              Let&apos;s finish your next project.
            </h2>
            <p className="mt-2 max-w-xl text-sm text-stone-400">
              Share footage or stills and get a written USD scope — no office visit, no obligation.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <ButtonLink href="/contact">Start a Project</ButtonLink>
            <ButtonLink href="/portfolio" variant="outline">
              See our work
            </ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
}
