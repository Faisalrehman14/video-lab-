import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Return Policy",
  description:
    "How “returns” work for RenderReady Labs digital editing services — revisions vs cancellations.",
};

export default function ReturnPage() {
  return (
    <LegalLayout title="Return Policy">
      <p>
        {siteConfig.name} sells <strong>digital professional services</strong> (video and photo
        editing), not physical goods. There is nothing to “ship back.” This policy clarifies what
        “return” means so Stripe and customers share the same expectations.
      </p>

      <h2>1. What “return” means here</h2>
      <p>For our services, a “return” is expressed as one of the following:</p>
      <ul>
        <li>
          <strong>Revision request</strong> — feedback on a delivered draft so we adjust the edit
          within the revision rounds included in your package.
        </li>
        <li>
          <strong>Cancellation before delivery</strong> — stopping the project under our{" "}
          <a href="/legal/cancellation">Cancellation Policy</a> and{" "}
          <a href="/legal/refund">Refund Policy</a>.
        </li>
        <li>
          <strong>Remake / redeliver</strong> — if a final file is corrupt or not in the agreed
          format, we will re-export at no charge.
        </li>
      </ul>

      <h2>2. Revisions (not returns)</h2>
      <p>
        Each package lists included revision rounds. Revisions must relate to the original brief.
        New scopes (extra length, new graphics packages, additional SKUs) are quoted separately.
        Unused revision rounds expire at project close.
      </p>

      <h2>3. Digital deliverables</h2>
      <p>
        Once final files are downloaded or approved, they are considered delivered. You cannot
        “return” files for a refund after approval, except as required by the Refund Policy for our
        material failure to perform.
      </p>

      <h2>4. Contact</h2>
      <p>
        For revision or cancellation requests:{" "}
        <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>
      </p>
    </LegalLayout>
  );
}
