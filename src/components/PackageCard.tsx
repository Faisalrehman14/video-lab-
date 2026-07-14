import Link from "next/link";
import { formatPrice, type PackageTier } from "@/lib/packages";

type Props = {
  pkg: PackageTier;
  checkoutHref?: string;
};

export function PackageCard({ pkg, checkoutHref }: Props) {
  const href = checkoutHref || `/checkout?package=${pkg.id}`;

  return (
    <article
      id={pkg.id.replace(/^(video|photo)-/, "")}
      className={`relative flex scroll-mt-28 flex-col border p-6 md:p-8 ${
        pkg.popular ? "border-brand bg-ink text-white" : "border-stone-200 bg-white text-ink"
      }`}
    >
      {pkg.popular && (
        <span className="absolute -top-3 left-6 rounded-full bg-brand px-3 py-0.5 text-xs font-semibold uppercase tracking-wide text-white">
          Most popular
        </span>
      )}
      <h3 className="font-display text-xl font-bold">{pkg.name}</h3>
      <p className={`mt-2 text-sm leading-relaxed ${pkg.popular ? "text-stone-300" : "text-stone-600"}`}>
        {pkg.description}
      </p>

      <div className="mt-6">
        <p className={`text-xs uppercase tracking-wider ${pkg.popular ? "text-stone-400" : "text-stone-500"}`}>
          Starting at
        </p>
        <p className="mt-1 font-display text-4xl font-extrabold">
          {formatPrice(pkg.price, pkg.currency)}
          <span className={`ml-1 text-base font-medium ${pkg.popular ? "text-stone-400" : "text-stone-500"}`}>
            USD
          </span>
        </p>
        <p className="mt-1 text-sm text-brand">Turnaround: {pkg.turnaround}</p>
        <p className={`mt-1 text-xs ${pkg.popular ? "text-stone-500" : "text-stone-400"}`}>
          Price shown is complete — no hidden fees at checkout.
        </p>
      </div>

      <div className="mt-6">
        <h4 className={`text-xs font-semibold uppercase tracking-wider ${pkg.popular ? "text-stone-400" : "text-stone-500"}`}>
          What you receive
        </h4>
        <ul className="mt-3 space-y-2">
          {pkg.deliverables.map((d) => (
            <li
              key={d}
              className={`flex gap-2 text-sm ${pkg.popular ? "text-stone-300" : "text-stone-600"}`}
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
              {d}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h4 className={`text-xs font-semibold uppercase tracking-wider ${pkg.popular ? "text-stone-400" : "text-stone-500"}`}>
          Included
        </h4>
        <ul className="mt-3 space-y-2">
          {pkg.features.map((f) => (
            <li
              key={f}
              className={`flex gap-2 text-sm ${pkg.popular ? "text-stone-300" : "text-stone-600"}`}
            >
              <span className="text-brand" aria-hidden>
                ✓
              </span>
              {f}
            </li>
          ))}
        </ul>
      </div>

      <div className={`mt-8 flex flex-col gap-3 border-t pt-6 ${pkg.popular ? "border-white/10" : "border-stone-200"}`}>
        <Link href={href} className="btn-primary text-center normal-case tracking-normal">
          Buy {pkg.name} — {formatPrice(pkg.price)}
        </Link>
        <p className={`text-center text-xs ${pkg.popular ? "text-stone-500" : "text-stone-400"}`}>
          By purchasing you agree to our{" "}
          <Link href="/legal/terms" className="underline hover:text-brand">
            Terms
          </Link>
          ,{" "}
          <Link href="/legal/refund" className="underline hover:text-brand">
            Refund Policy
          </Link>
          , and{" "}
          <Link href="/legal/cancellation" className="underline hover:text-brand">
            Cancellation Policy
          </Link>
          .
        </p>
      </div>
    </article>
  );
}
