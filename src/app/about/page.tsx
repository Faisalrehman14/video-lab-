import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { WhyPoint } from "@/components/WhyPoint";
import { siteConfig } from "@/lib/site";
import { whyChoose } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description: "About RenderReady Labs — mission, process, and why brands choose us.",
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

export default function AboutPage() {
  return (
    <div className="pt-[68px]">
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
            pricing, and Stripe-secured checkout.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact">Start a remote brief</ButtonLink>
            <ButtonLink href="/pricing" variant="outlineDark">
              Hourly rates
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="border-t border-stone-200 bg-white">
        <div className="section">
          <h2 className="font-display text-3xl font-extrabold text-ink">Our Mission</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-stone-600">
            Make remote post-production predictable: what you buy, USD cost, turnaround, and refund
            rules — before you pay. No office visit required.
          </p>
        </div>
      </section>

      <section className="border-t border-stone-200 bg-paper">
        <div className="section">
          <h2 className="font-display text-3xl font-extrabold text-ink">How We Work Online</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {process.map((p) => (
              <div key={p.step} className="border border-stone-200 bg-white p-6">
                <span className="font-display text-4xl font-bold text-stone-200">{p.step}</span>
                <h3 className="mt-2 font-display text-xl font-bold text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
    </div>
  );
}
