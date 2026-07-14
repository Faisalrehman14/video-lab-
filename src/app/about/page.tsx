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
  { step: "01", title: "Brief & scope", text: "Footage, refs, and goals. Package, deliverables, and USD price confirmed in writing before payment." },
  { step: "02", title: "Edit & review", text: "Cut, grade, retouch. Structured revision rounds matching your package." },
  { step: "03", title: "Deliver & ship", text: "Finals in listed formats with handoff notes. Support per refund and dispute policies." },
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
            A Finishing Lab for Brands That Move Fast
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
            {siteConfig.legalName} (DBA {siteConfig.dba}) helps marketing teams and creators ship
            publish-ready video and photo — with clear packages and Stripe-compliant transparency.
          </p>
          <div className="mt-8">
            <ButtonLink href="/contact">Start a Project</ButtonLink>
          </div>
        </div>
      </section>

      <section className="border-t border-stone-200 bg-white">
        <div className="section">
          <h2 className="font-display text-3xl font-extrabold text-ink">Our Mission</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-stone-600">
            Make post-production predictable: what you buy, USD cost, turnaround, and refund rules —
            before you pay.
          </p>
        </div>
      </section>

      <section className="border-t border-stone-200 bg-paper">
        <div className="section">
          <h2 className="font-display text-3xl font-extrabold text-ink">How We Work</h2>
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
                Why Brands Choose Us
              </h2>
              <div
                className="relative mt-8 aspect-[4/3]"
                style={{
                  backgroundImage:
                    "linear-gradient(160deg,#2a1212,#111),radial-gradient(circle at 40% 40%,rgba(227,6,19,.35),transparent 50%)",
                }}
                role="img"
                aria-label="Studio finishing environment"
              >
                <div className="absolute bottom-0 right-0 h-14 w-14 bg-brand" />
              </div>
            </div>
            <div className="space-y-8 self-center">
              {whyChoose.map((w) => (
                <WhyPoint key={w.title} title={w.title} text={w.text} />
              ))}
              <ButtonLink href="/contact" variant="outlineDark">
                Contact Us
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
