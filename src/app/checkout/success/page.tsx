import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";

export const metadata: Metadata = {
  title: "Payment Successful",
  robots: { index: false, follow: false },
};

export default function CheckoutSuccessPage() {
  return (
    <div className="flex min-h-[70vh] items-center bg-paper pt-24">
      <section className="section text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
          Payment received
        </p>
        <h1 className="mt-3 font-display text-4xl font-extrabold text-ink">Thank you</h1>
        <p className="mx-auto mt-4 max-w-md text-stone-600">
          Your Stripe payment succeeded. Our team will email next steps within one business day.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <ButtonLink href="/">Back home</ButtonLink>
          <ButtonLink href="/contact" variant="outlineDark">
            Contact support
          </ButtonLink>
        </div>
        <p className="mt-8 text-xs text-stone-500">
          Need a refund or change? See our{" "}
          <Link href="/legal/refund" className="text-brand hover:underline">
            Refund Policy
          </Link>{" "}
          and{" "}
          <Link href="/legal/disputes" className="text-brand hover:underline">
            Dispute process
          </Link>{" "}
          before filing a chargeback.
        </p>
      </section>
    </div>
  );
}
