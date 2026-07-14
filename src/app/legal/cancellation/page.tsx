import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cancellation Policy",
  description:
    "How to cancel RenderReady Labs retainers and in-progress editing packages, and what happens to work already started.",
};

export default function CancellationPage() {
  return (
    <LegalLayout title="Cancellation Policy">
      <p>
        This policy covers one-time packages and ongoing subscription/retainer editing packages
        purchased from {siteConfig.legalName}.
      </p>

      <h2>1. One-time packages</h2>
      <p>
        You may cancel before work starts under the eligibility rules in our{" "}
        <a href="/legal/refund">Refund Policy</a>. After work starts, cancellation stops further
        editing; fees for completed effort may be retained as described in the Refund Policy.
      </p>

      <h2>2. Subscription / Studio Retainer</h2>
      <p>
        Monthly retainers renew until canceled. You may cancel anytime by emailing{" "}
        <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a> or via the
        cancellation link in your Stripe customer portal (when enabled).
      </p>
      <ul>
        <li>
          <strong>Notice:</strong> Cancel at least <strong>3 business days</strong> before the next
          renewal date to avoid the next charge.
        </li>
        <li>
          <strong>Current period:</strong> Fees for an already-started billing period are generally
          non-refundable. You keep access to remaining capacity through the period end.
        </li>
        <li>
          <strong>Unused capacity:</strong> Unused video slots or hours do not roll over after
          period end or cancellation.
        </li>
      </ul>

      <h2>3. In-progress work upon cancellation</h2>
      <p>
        If you cancel while an edit is in progress, we will deliver the latest workable draft (if
        any) within 5 business days and close the project. Additional finishing beyond that draft
        requires a new purchase. We may retain work product until accounts are settled.
      </p>

      <h2>4. Our right to cancel</h2>
      <p>
        We may cancel or refuse service for non-payment, abusive conduct, IP infringement concerns,
        or prohibited content. Prepaid unused fees may be refunded pro-rata if we cancel for reasons
        other than your breach.
      </p>
    </LegalLayout>
  );
}
