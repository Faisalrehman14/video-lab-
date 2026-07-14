import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "RenderReady Labs refund eligibility window, non-refundable conditions, processing method, and timelines.",
};

export default function RefundPage() {
  return (
    <LegalLayout title="Refund Policy">
      <p>
        This Refund Policy applies to all paid packages purchased from {siteConfig.legalName} via
        Stripe. It is linked on our checkout page so you can review it before payment.
      </p>

      <h2>1. Eligibility window</h2>
      <p>
        You may request a full refund within <strong>24 hours of purchase</strong> if we have{" "}
        <strong>not yet started work</strong> on your project (no editing begun, no assets ingested
        into an active project folder).
      </p>
      <p>
        After work has started — including download/ingest of your media, timeline setup, or first
        edit pass — refunds are handled as follows:
      </p>
      <ul>
        <li>
          <strong>Before first draft delivery:</strong> Partial refund of unused effort may be
          offered at our discretion, typically up to 50% of the package price after deducting hours
          already expended.
        </li>
        <li>
          <strong>After first draft delivery:</strong> The package is{" "}
          <strong>non-refundable</strong>, except where we materially fail to deliver the stated
          deliverables and cannot cure within a reasonable period.
        </li>
      </ul>

      <h2>2. Non-refundable conditions</h2>
      <ul>
        <li>Work has started or a draft has been delivered</li>
        <li>Revision rounds included in the package have been consumed</li>
        <li>
          Client-caused delays or failure to supply usable media after payment
        </li>
        <li>
          Change of mind after approving a final deliverable
        </li>
        <li>
          Subscription/retainer fees for periods already started (see Cancellation Policy for future
          billing)
        </li>
      </ul>

      <h2>3. How refunds are processed</h2>
      <p>
        Approved refunds are issued to the <strong>original payment method via Stripe</strong>. We
        do not issue cash refunds. You will receive email confirmation when the refund is
        initiated.
      </p>

      <h2>4. Expected processing time</h2>
      <p>
        Once approved, Stripe typically reflects refunds within <strong>5–10 business days</strong>,
        depending on your bank or card issuer. We respond to refund requests within{" "}
        <strong>2 business days</strong>.
      </p>

      <h2>5. How to request a refund</h2>
      <p>
        Email <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a> with your
        order/receipt email, package name, and reason. Please contact us before filing a payment
        dispute — see <a href="/legal/disputes">Chargebacks &amp; Disputes</a>.
      </p>
    </LegalLayout>
  );
}
