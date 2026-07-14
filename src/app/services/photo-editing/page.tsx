import type { Metadata } from "next";
import Link from "next/link";
import { PackageCard } from "@/components/PackageCard";
import { ServiceDetailCard } from "@/components/ServiceDetailCard";
import { WhyPoint } from "@/components/WhyPoint";
import { photoPackages, formatPrice } from "@/lib/packages";
import { photoSpecialties, whyChoose } from "@/lib/content";
import { ButtonLink } from "@/components/ButtonLink";

export const metadata: Metadata = {
  title: "Photo Editing Services",
  description:
    "Professional photo editing and retouching packages with clear deliverables, turnaround, and USD pricing via Stripe.",
};

export default function PhotoEditingPage() {
  return (
    <div className="pt-[68px]">
      <section className="overflow-hidden">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative flex flex-col justify-center bg-paper px-5 py-16 md:px-12 lg:py-24">
            <div className="relative max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                Photo editing services
              </p>
              <h1 className="mt-4 font-display text-4xl font-extrabold uppercase leading-[1.08] text-ink md:text-5xl">
                Professional Photo Editing Services
              </h1>
              <p className="mt-5 text-base leading-relaxed text-stone-600">
                Color, cleanup, pathing, and retouching as listed. Prices in{" "}
                <strong className="text-ink">USD</strong> match Stripe Checkout. From{" "}
                {formatPrice(photoPackages[0].price)}.
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
                <Link href="/legal/terms" className="hover:text-brand">
                  Terms
                </Link>
              </p>
            </div>
          </div>
          <div className="relative hidden min-h-[360px] bg-ink lg:block">
            <div
              className="absolute inset-y-[10%] left-[-14%] right-[6%] shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
              style={{
                backgroundImage:
                  "linear-gradient(145deg, #221410, #111), radial-gradient(circle at 40% 30%, rgba(227,6,19,0.35), transparent 50%)",
              }}
              role="img"
              aria-label="Photo retouching preview"
            >
              <div className="corner-accent left-4 top-4" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-stone-200 bg-white">
        <div className="section">
          <h2 className="font-display text-3xl font-extrabold text-ink md:text-4xl">
            Our Photo Editing Services in Detail
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {photoSpecialties.map((s) => (
              <ServiceDetailCard key={s.title} {...s} href="/checkout" />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-stone-200 bg-paper">
        <div className="section">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-extrabold text-ink md:text-4xl">
                Why Brands Trust Our Photo Finishing
              </h2>
              <div
                className="relative mt-8 aspect-[4/3]"
                style={{
                  backgroundImage:
                    "linear-gradient(160deg, #221410, #111), radial-gradient(circle at 50% 40%, rgba(227,6,19,0.25), transparent 50%)",
                }}
                role="img"
                aria-label="Retoucher reviewing product stills"
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

      <section className="border-t border-stone-200 bg-white">
        <div className="section">
          <h2 className="font-display text-3xl font-extrabold text-ink md:text-4xl">
            Photo Packages &amp; USD Pricing
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {photoPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
