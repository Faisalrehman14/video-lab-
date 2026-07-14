import type { Metadata } from "next";
import { Suspense } from "react";
import { CheckoutClient } from "@/components/CheckoutClient";

export const metadata: Metadata = {
  title: "Checkout & Packages",
  description:
    "Select a RenderReady Labs editing package. Transparent USD pricing and secure Stripe Checkout.",
};

export default function CheckoutPage() {
  return (
    <div className="bg-paper pt-24">
      <section className="section">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Checkout</p>
        <h1 className="mt-3 font-display text-4xl font-extrabold text-ink md:text-5xl">
          Packages &amp; secure payment
        </h1>
        <p className="mt-4 max-w-2xl text-stone-600">
          Review what you&apos;re buying, confirm the USD price, then pay via Stripe Checkout.
        </p>
        <div className="mt-10">
          <Suspense fallback={<p className="text-stone-500">Loading packages…</p>}>
            <CheckoutClient />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
