import type { Metadata } from "next";
import Link from "next/link";
import { PackageCard } from "@/components/PackageCard";
import { ServiceDetailCard } from "@/components/ServiceDetailCard";
import { WhyPoint } from "@/components/WhyPoint";
import { videoPackages, formatPrice } from "@/lib/packages";
import { moreVideoServices, videoSpecialties, whyChoose } from "@/lib/content";
import { ButtonLink } from "@/components/ButtonLink";

export const metadata: Metadata = {
  title: "Video Editing Services",
  description:
    "Professional video editing packages with listed deliverables, turnaround times, and transparent USD pricing. Secure Stripe checkout.",
};

export default function VideoEditingPage() {
  return (
    <div className="pt-[68px]">
      <section className="overflow-hidden">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative flex flex-col justify-center bg-paper px-5 py-16 md:px-12 lg:py-24">
            <p
              className="pointer-events-none absolute left-3 top-24 hidden select-none font-display text-[5.5rem] font-extrabold leading-none text-stone-200/90 [writing-mode:vertical-rl] rotate-180 xl:block"
              aria-hidden
            >
              VIDEO
            </p>
            <div className="relative max-w-xl xl:ml-14">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                Video editing services
              </p>
              <h1 className="mt-4 font-display text-4xl font-extrabold uppercase leading-[1.08] text-ink md:text-5xl">
                Professional Video Editing Services
              </h1>
              <p className="mt-5 text-base leading-relaxed text-stone-600">
                You are purchasing professional post-production on client-supplied footage.
                Prices are in <strong className="text-ink">USD</strong> and match Stripe Checkout —
                no hidden fees. Starting from {formatPrice(videoPackages[0].price)}.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/checkout">Get Started Now</ButtonLink>
                <ButtonLink href="/portfolio" variant="outline">
                  Portfolio
                </ButtonLink>
              </div>
              <p className="mt-6 text-xs text-stone-500">
                <Link href="/legal/refund" className="hover:text-brand">
                  Refund Policy
                </Link>
                {" · "}
                <Link href="/legal/return" className="hover:text-brand">
                  Return / Revisions
                </Link>
                {" · "}
                <Link href="/legal/cancellation" className="hover:text-brand">
                  Cancellation
                </Link>
              </p>
            </div>
          </div>
          <div className="relative hidden min-h-[360px] bg-ink lg:block">
            <div
              className="absolute inset-y-[10%] left-[-14%] right-[6%] shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
              style={{
                backgroundImage:
                  "linear-gradient(145deg, #2a1212, #111), radial-gradient(circle at 65% 35%, rgba(227,6,19,0.45), transparent 50%)",
              }}
              role="img"
              aria-label="Video finishing preview"
            >
              <div className="corner-accent left-4 top-4" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-stone-200 bg-white">
        <div className="section">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:items-end">
            <h2 className="font-display text-3xl font-extrabold text-ink md:text-4xl">
              Our Video Editing Services in Detail
            </h2>
            <p className="text-sm leading-relaxed text-stone-600 md:text-base">
              From campaign films to product demos and property walkthroughs — each specialty lists
              the technical work included.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {videoSpecialties.map((s) => (
              <ServiceDetailCard key={s.title} {...s} href="/checkout" />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-stone-200 bg-paper">
        <div className="section">
          <h2 className="font-display text-3xl font-extrabold text-ink md:text-4xl">
            Additional Finishing Specialties
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {moreVideoServices.map((s, i) => (
              <ServiceDetailCard
                key={s.title}
                title={s.title}
                bullets={s.bullets}
                image={s.image}
                featured={i === 1}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-stone-200 bg-white">
        <div className="section">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-extrabold text-ink md:text-4xl">
                Why Teams Outsource Video Editing to Us
              </h2>
              <div
                className="relative mt-8 aspect-[4/3]"
                style={{
                  backgroundImage:
                    "linear-gradient(160deg, #2a1212, #111), radial-gradient(circle at 40% 40%, rgba(227,6,19,0.35), transparent 50%)",
                }}
                role="img"
                aria-label="Colorist at calibrated display"
              >
                <div className="absolute bottom-0 right-0 h-14 w-14 bg-brand" />
              </div>
            </div>
            <div className="space-y-8 self-center">
              {whyChoose.map((w) => (
                <WhyPoint key={w.title} title={w.title} text={w.text} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-stone-200 bg-paper">
        <div className="section">
          <h2 className="font-display text-3xl font-extrabold text-ink md:text-4xl">
            Video Packages &amp; USD Pricing
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-stone-600">
            Starting from {formatPrice(videoPackages[0].price)} USD. Deliverables and turnaround
            listed per tier.
          </p>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {videoPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
