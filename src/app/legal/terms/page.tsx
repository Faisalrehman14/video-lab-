import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { formatAddress, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Service agreement, payment terms, IP rights, liability, and dispute resolution for RenderReady Labs.",
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms & Conditions">
      <p>
        These Terms &amp; Conditions (“Terms”) govern your purchase and use of professional video
        and photo editing services from {siteConfig.legalName} (“RenderReady,” “we,” “us”). By
        placing an order or paying via Stripe Checkout, you agree to these Terms.
      </p>

      <h2>1. Service agreement</h2>
      <p>
        We provide digital creative editing services as described on our service and package pages.
        Each package specifies what you are buying, deliverable formats, revision rounds, and
        turnaround time. Custom scopes must be confirmed in writing (email) before work begins.
      </p>
      <p>
        We do not provide editing of adult content, counterfeit media, or materials intended for
        deceptive or misleading advertising. We may refuse projects that violate Stripe’s or our
        acceptable-use standards.
      </p>

      <h2>2. Payment terms</h2>
      <p>
        Prices are listed in United States Dollars (USD) and shown before checkout. Unless stated
        otherwise, payment is due upfront via Stripe Checkout or Stripe-hosted payment. We do not
        store raw card numbers; Stripe, Inc. processes payments. Taxes may apply based on your
        location where required by law.
      </p>

      <h2>3. Intellectual property &amp; usage rights</h2>
      <p>
        You retain ownership of raw footage, photos, and brand assets you supply. You grant us a
        limited license to use those materials solely to perform the purchased services. Upon full
        payment, you receive a perpetual, worldwide license to use the final deliverables for your
        business and marketing, unless a written work-for-hire or assignment agreement states
        otherwise. We may showcase anonymized or approved finished work in our portfolio unless you
        opt out in writing.
      </p>
      <p>
        You represent that you own or have obtained all rights, licenses, and permissions for media
        and music you provide. You are responsible for third-party licenses not expressly included
        in your package (e.g., proprietary stock you did not purchase through us).
      </p>

      <h2>4. Client responsibilities</h2>
      <p>
        Timely delivery of footage, stills, brand guidelines, and feedback is required to meet
        published turnaround times. Delays in client input pause the turnaround clock.
      </p>

      <h2>5. Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, {siteConfig.legalName}’s total liability for any
        claim arising from a project shall not exceed the amount you paid for that specific
        package. We are not liable for indirect, incidental, special, consequential, or lost-profit
        damages, including campaign performance outcomes beyond the agreed deliverable files.
      </p>

      <h2>6. Dispute resolution</h2>
      <p>
        Contact {siteConfig.supportEmail} first to resolve issues. See our{" "}
        <a href="/legal/disputes">Chargebacks &amp; Disputes</a> page. If unresolved, disputes are
        governed by the laws of the State of California, USA, without regard to conflict-of-law
        rules. Venue lies in San Francisco County, California, unless applicable consumer law
        requires otherwise.
      </p>

      <h2>7. Contact</h2>
      <p>
        {siteConfig.legalName} (DBA {siteConfig.dba})
        <br />
        {formatAddress()}
        <br />
        {siteConfig.email} · {siteConfig.phone}
      </p>
    </LegalLayout>
  );
}
