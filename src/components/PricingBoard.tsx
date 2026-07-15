import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { pricingCategories, pricingFeatures } from "@/lib/pricing";
import { siteConfig } from "@/lib/site";

type Props = {
  /** Show the big page-style intro / watermark */
  showIntro?: boolean;
  id?: string;
};

export function PricingBoard({ showIntro = false, id = "pricing" }: Props) {
  return (
    <section id={id} className="scroll-mt-24">
      {showIntro && (
        <div className="relative overflow-hidden border-b border-stone-200 bg-paper">
          <p
            className="pointer-events-none absolute -right-4 bottom-0 select-none font-display text-[7rem] font-extrabold uppercase leading-none text-stone-200/80 md:text-[10rem]"
            aria-hidden
          >
            Pricing
          </p>
          <div className="relative mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
            <h1 className="font-display text-4xl font-extrabold uppercase tracking-tight text-ink md:text-6xl">
              Pricing
            </h1>
            <p className="mt-5 max-w-3xl text-base font-semibold leading-relaxed text-ink md:text-lg">
              Our pricing is built around professional editor hours vs. tight budgets. Starting
              USD rates are listed per hour below — final hours and total are confirmed in writing
              before Stripe Checkout, so you always know what you are buying.
            </p>
            <p className="mt-6 inline-flex items-center gap-2 border border-stone-200 bg-white px-3 py-1.5 text-xs font-medium text-stone-600">
              <Link href="/" className="hover:text-brand">
                Home
              </Link>
              <span aria-hidden>▸</span>
              <span className="text-ink">Pricing</span>
            </p>
          </div>
        </div>
      )}

      <div className={showIntro ? "bg-white" : "border-t border-stone-200 bg-paper"}>
        <div className="section">
          {!showIntro && (
            <>
              <h2 className="font-display text-3xl font-extrabold uppercase text-ink md:text-4xl">
                Pricing
              </h2>
              <p className="mt-4 max-w-3xl text-sm font-medium leading-relaxed text-ink md:text-base">
                Professional finishing priced per editor hour — starting USD rates published below,
                advanced influencers listed clearly, and Stripe Checkout only after hours are
                confirmed.
              </p>
            </>
          )}

          <div className={`grid gap-0 border border-stone-200 md:grid-cols-3 ${showIntro ? "" : "mt-10"}`}>
            {pricingCategories.map((cat) => (
              <article
                key={cat.id}
                className={`flex flex-col border-stone-200 p-7 md:border-r md:p-8 md:last:border-r-0 ${
                  cat.featured ? "bg-ink text-white" : "bg-[#ececec] text-ink"
                }`}
              >
                <span className="inline-flex w-fit bg-brand px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                  {cat.badge}
                </span>

                <p
                  className={`mt-6 text-xs font-bold uppercase tracking-wider ${
                    cat.featured ? "text-stone-400" : "text-stone-500"
                  }`}
                >
                  {cat.startingLabel}
                </p>
                <p className="mt-2 font-display text-3xl font-extrabold leading-none md:text-[2rem]">
                  {cat.priceLine}{" "}
                  <span className="text-lg font-bold md:text-xl">{cat.priceSuffix}</span>
                </p>
                {cat.priceNote && (
                  <p className={`mt-2 text-xs ${cat.featured ? "text-stone-400" : "text-stone-500"}`}>
                    {cat.priceNote}
                  </p>
                )}

                <div className={`my-6 h-px ${cat.featured ? "bg-white/15" : "bg-stone-300"}`} />

                <p className="text-sm font-bold uppercase tracking-wide">{cat.influencersTitle}</p>
                <ul className="mt-4 flex-1 space-y-3">
                  {cat.influencers.map((item) => (
                    <li key={item.label} className="flex gap-3 text-sm leading-relaxed">
                      <span
                        className={`mt-1.5 h-2 w-2 shrink-0 ${
                          cat.featured ? "bg-stone-500" : "bg-stone-400"
                        }`}
                        aria-hidden
                      />
                      <span className={cat.featured ? "text-stone-300" : "text-stone-600"}>
                        <strong className={cat.featured ? "text-white" : "text-ink"}>
                          {item.label}
                        </strong>
                        {item.detail ? ` — ${item.detail}` : null}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={cat.checkoutHref}
                  className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold uppercase tracking-wide transition ${
                    cat.featured
                      ? "bg-brand text-white hover:bg-brand-dark"
                      : "border-2 border-brand text-brand hover:bg-brand hover:text-white"
                  }`}
                >
                  {cat.ctaLabel}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Features band — VC “Our Features” pattern */}
      <div className="border-t border-stone-200 bg-white">
        <div className="section">
          <h2 className="font-display text-2xl font-extrabold uppercase text-ink md:text-3xl">
            Our Features
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pricingFeatures.map((f) => (
              <div key={f.title} className="border-t-4 border-brand pt-4">
                <h3 className="font-display text-sm font-extrabold uppercase tracking-wide text-ink">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-stone-200 bg-paper">
        <div className="section max-w-4xl">
          <h2 className="font-display text-xl font-extrabold uppercase text-ink md:text-2xl">
            Pricing Disclaimer
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-stone-600">
            {siteConfig.name} keeps published information accurate. Hourly rates marked with * are
            INDICATIVE starting rates. Final pricing is set only after project nature, complexity,
            skill level, estimated editor hours, and contract terms are confirmed. Confirmed totals
            are what Stripe charges — no surprise fees at payment. Fixed{" "}
            <Link href="/checkout" className="text-brand hover:underline">
              package checkout
            </Link>{" "}
            options remain available when you prefer a locked USD deliverable instead of hourly
            billing.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-stone-600">
            Quotes are provided in writing before any payment. See our{" "}
            <Link href="/legal/refund" className="text-brand hover:underline">
              Refund Policy
            </Link>
            ,{" "}
            <Link href="/legal/terms" className="text-brand hover:underline">
              Terms
            </Link>
            , and{" "}
            <Link href="/legal/cancellation" className="text-brand hover:underline">
              Cancellation Policy
            </Link>
            .
          </p>
        </div>
      </div>

      {/* Get started */}
      <div className="border-t border-stone-200 bg-ink">
        <div className="section flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-2xl font-extrabold uppercase text-white md:text-3xl">
              Get Started Now
            </h2>
            <p className="mt-2 text-sm text-stone-400">
              Share your brief — we confirm hours and USD total before Stripe Checkout.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/contact">Contact Us</ButtonLink>
            <ButtonLink href={`mailto:${siteConfig.email}`} variant="ghost">
              Email Us
            </ButtonLink>
            <ButtonLink href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`} variant="outline">
              Call
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
