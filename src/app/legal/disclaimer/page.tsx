import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Scope limitations, outcome disclaimer, and client media copyright responsibilities for RenderReady Labs.",
};

export default function DisclaimerPage() {
  return (
    <LegalLayout title="Disclaimer">
      <h2>1. Scope of services</h2>
      <p>
        {siteConfig.name} provides professional editing and finishing services as described in each
        package. We do not guarantee marketing outcomes such as sales, views, engagement rates, or
        ad platform approval beyond delivering the agreed files in the stated formats and
        turnaround (subject to timely client inputs).
      </p>

      <h2>2. No guarantee beyond agreed deliverables</h2>
      <p>
        Creative taste is subjective. Our obligation is to deliver work matching the purchased
        package specifications and reasonable professional standards, including the listed revision
        rounds — not to guarantee a specific aesthetic preference beyond the brief.
      </p>

      <h2>3. Client-submitted media &amp; copyright</h2>
      <p>
        You are solely responsible for ensuring you have all rights to footage, photos, logos,
        music, fonts, and likenesses you provide. {siteConfig.legalName} is not liable for copyright
        or publicity claims arising from client-supplied materials. We may suspend work if we
        reasonably suspect rights issues.
      </p>

      <h2>4. Third-party platforms</h2>
      <p>
        Export settings suitable for common platforms are provided when listed; platform policy
        changes or rejections are outside our control.
      </p>

      <h2>5. Prohibited content</h2>
      <p>
        We do not accept projects involving adult content, counterfeit goods media, or intentionally
        misleading advertising creative.
      </p>
    </LegalLayout>
  );
}
