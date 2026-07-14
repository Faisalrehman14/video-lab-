import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Chargebacks & Dispute Handling",
  description:
    "Contact RenderReady Labs support before filing a Stripe or card dispute — our proactive dispute-prevention process.",
};

export default function DisputesPage() {
  return (
    <LegalLayout title="Chargebacks & Dispute Handling">
      <p>
        We want issues resolved quickly without chargebacks. Stripe and card networks favor
        merchants who provide a clear path to contact support first — please use it.
      </p>

      <h2>1. Contact us before filing a dispute</h2>
      <p>
        If you are unhappy with a charge, deliverable, or timeline, email{" "}
        <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a> with:
      </p>
      <ul>
        <li>Your name and checkout receipt email</li>
        <li>Package purchased and approximate purchase date</li>
        <li>A clear description of the issue and the resolution you want</li>
      </ul>
      <p>
        We respond within <strong>2 business days</strong> and will work toward a revision, partial
        refund, or full refund per our{" "}
        <a href="/legal/refund">Refund Policy</a> when applicable.
      </p>

      <h2>2. What happens if a chargeback is filed</h2>
      <p>
        If a dispute is filed with your bank or via Stripe without contacting us, we will submit
        evidence including: package description and pricing shown pre-checkout, policy links
        presented at checkout, deliverables and communication records, and any files already
        provided. Unwarranted disputes may result in suspension of future services.
      </p>

      <h2>3. Evidence we keep</h2>
      <ul>
        <li>Stripe payment records and package metadata</li>
        <li>Briefs, emails, and revision notes</li>
        <li>Delivery timestamps and file transfer logs</li>
      </ul>

      <h2>4. Good-faith resolution</h2>
      <p>
        Most problems are fixed with an extra revision or clarified brief. Filing a dispute as the
        first step delays resolution and may prevent us from re-issuing files while evidence is
        under review.
      </p>
    </LegalLayout>
  );
}
