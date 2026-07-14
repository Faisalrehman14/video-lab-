"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  formatPrice,
  getPackageById,
  photoPackages,
  videoPackages,
  type PackageTier,
} from "@/lib/packages";

const allPackages = [...videoPackages, ...photoPackages];

export function CheckoutClient() {
  const params = useSearchParams();
  const initial = params.get("package") || videoPackages[1].id;
  const canceled = params.get("canceled");
  const [selectedId, setSelectedId] = useState(initial);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const selected: PackageTier | undefined = useMemo(
    () => getPackageById(selectedId),
    [selectedId]
  );

  const startCheckout = async () => {
    if (!selected) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ packageId: selected.id }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
        return;
      }
      if (data.demo) {
        setError(
          `Stripe keys not configured yet. Selected “${selected.name}” at ${formatPrice(selected.price)} USD. Add keys from .env.example to enable live Checkout.`
        );
      } else {
        setError(data.error || "Checkout unavailable");
      }
    } catch {
      setError("Network error creating checkout session.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
      <div>
        {canceled && (
          <p
            className="mb-6 border border-stone-200 bg-white px-4 py-3 text-sm text-stone-600"
            role="status"
          >
            Checkout canceled — no charge was made. Select a package again below.
          </p>
        )}

        <h2 className="font-display text-xl font-bold text-ink">Select a package</h2>
        <p className="mt-2 text-sm text-stone-600">
          Pricing is shown in USD before Stripe Checkout. Card details are entered only on
          Stripe&apos;s secure pages.
        </p>

        <fieldset className="mt-6 space-y-3">
          <legend className="sr-only">Packages</legend>
          {allPackages.map((pkg) => (
            <label
              key={pkg.id}
              className={`flex cursor-pointer gap-4 border p-4 transition ${
                selectedId === pkg.id
                  ? "border-brand bg-brand-soft"
                  : "border-stone-200 bg-white hover:border-stone-400"
              }`}
            >
              <input
                type="radio"
                name="package"
                value={pkg.id}
                checked={selectedId === pkg.id}
                onChange={() => setSelectedId(pkg.id)}
                className="mt-1 accent-[#E30613]"
              />
              <span className="flex-1">
                <span className="flex flex-wrap items-baseline justify-between gap-2">
                  <span className="font-display font-bold text-ink">{pkg.name}</span>
                  <span className="font-display text-lg font-extrabold text-brand">
                    {formatPrice(pkg.price)}{" "}
                    <span className="text-xs font-medium text-stone-500">USD</span>
                  </span>
                </span>
                <span className="mt-1 block text-sm text-stone-600">{pkg.description}</span>
                <span className="mt-1 block text-xs text-brand">Turnaround: {pkg.turnaround}</span>
              </span>
            </label>
          ))}
        </fieldset>
      </div>

      <aside className="h-fit border border-stone-200 bg-white p-6 shadow-card lg:sticky lg:top-28">
        <h2 className="font-display text-lg font-bold text-ink">Order summary</h2>
        {selected ? (
          <>
            <p className="mt-4 text-sm text-ink">{selected.name}</p>
            <p className="mt-1 font-display text-3xl font-extrabold text-ink">
              {formatPrice(selected.price)}
              <span className="ml-1 text-sm font-medium text-stone-500">USD</span>
            </p>
            <p className="mt-1 text-xs text-stone-400">No hidden fees. Amount charged at Checkout.</p>
            <ul className="mt-4 space-y-1.5 text-xs text-stone-600">
              {selected.deliverables.slice(0, 4).map((d) => (
                <li key={d}>• {d}</li>
              ))}
            </ul>
            <button
              type="button"
              onClick={startCheckout}
              disabled={loading}
              className="btn-primary mt-6 w-full normal-case tracking-normal"
            >
              {loading ? "Redirecting…" : "Pay securely with Stripe"}
            </button>
          </>
        ) : (
          <p className="mt-4 text-sm text-stone-600">Select a package.</p>
        )}

        <div className="mt-6 space-y-2 border-t border-stone-200 pt-4 text-xs text-stone-500">
          <p className="font-semibold text-stone-600">Before you pay — policies</p>
          <p>
            <Link href="/legal/refund" className="text-brand hover:underline">
              Refund Policy
            </Link>
            {" · "}
            <Link href="/legal/return" className="text-brand hover:underline">
              Return / Revisions
            </Link>
            {" · "}
            <Link href="/legal/cancellation" className="text-brand hover:underline">
              Cancellation
            </Link>
          </p>
          <p>
            <Link href="/legal/terms" className="hover:text-brand">
              Terms
            </Link>
            {" · "}
            <Link href="/legal/privacy" className="hover:text-brand">
              Privacy
            </Link>
            {" · "}
            <Link href="/legal/disputes" className="hover:text-brand">
              Disputes
            </Link>
          </p>
          <p className="flex items-center gap-2 pt-2">
            <span className="rounded border border-stone-200 px-2 py-0.5">SSL / HTTPS</span>
            <span className="rounded border border-stone-200 px-2 py-0.5">Stripe Checkout</span>
          </p>
        </div>

        {error && (
          <p className="mt-4 text-sm text-amber-700" role="alert">
            {error}
          </p>
        )}
      </aside>
    </div>
  );
}
