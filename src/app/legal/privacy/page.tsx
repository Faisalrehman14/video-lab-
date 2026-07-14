import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { formatAddress, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "GDPR/CCPA-aware privacy policy for RenderReady Labs — data collection, Stripe payment processing, cookies, and user rights.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy">
      <p>
        This Privacy Policy explains how {siteConfig.legalName} (“we”) collects, uses, and shares
        personal information when you use our website and purchase editing services. It is designed
        to align with GDPR and CCPA-style transparency expectations.
      </p>

      <h2>1. What data we collect</h2>
      <ul>
        <li>
          <strong>Identity &amp; contact:</strong> name, email address, phone number, company name
          (from contact forms and checkout).
        </li>
        <li>
          <strong>Project data:</strong> messages, briefs, and files you upload so we can deliver
          editing services.
        </li>
        <li>
          <strong>Payment information:</strong> payment card details are collected and processed by{" "}
          <strong>Stripe, Inc.</strong> (our payment processor). We do not store raw card numbers
          on our servers. Stripe may share limited payment metadata with us (e.g., last4, brand,
          billing country, transaction ID).
        </li>
        <li>
          <strong>Technical data:</strong> IP address, browser type, device, pages visited, and
          cookie identifiers (see Cookies).
        </li>
      </ul>

      <h2>2. How we use data</h2>
      <p>
        We use personal data to respond to inquiries, fulfill orders, provide support, prevent
        fraud, improve our site, and comply with legal obligations. We do not sell personal
        information.
      </p>

      <h2>3. Third-party processors</h2>
      <p>
        We disclose that <strong>Stripe</strong> is our payment processor. Depending on
        configuration, we may also use email or hosting providers under data-processing terms. Those
        providers process data only to provide services to us.
      </p>

      <h2>4. Storage &amp; retention</h2>
      <p>
        Contact and project records are retained as long as needed for the business relationship,
        tax/accounting, and legal claims, then deleted or anonymized. Payment records retained by
        Stripe are subject to Stripe’s policies.
      </p>

      <h2>5. Cookies</h2>
      <p>
        We use essential cookies for site functionality and consent preferences. With your consent
        (via our cookie banner), we may use analytics cookies. You can choose “Essential only” at
        any time by clearing site data and revisiting the banner prompt.
      </p>

      <h2>6. Your rights (GDPR / CCPA-style)</h2>
      <p>Subject to applicable law, you may request:</p>
      <ul>
        <li>Access to personal data we hold about you</li>
        <li>Correction of inaccurate data</li>
        <li>Deletion of personal data (where no legal retention override applies)</li>
        <li>Restriction or objection to certain processing</li>
        <li>Data portability for information you provided</li>
        <li>Opt-out of “sale” or “sharing” if ever applicable (we do not sell data)</li>
      </ul>
      <p>
        To exercise rights, email <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.
        We will respond within a reasonable period required by law.
      </p>

      <h2>7. International transfers</h2>
      <p>
        Our team and vendors may process data in the United States and other countries. Where
        required, we rely on appropriate safeguards for cross-border transfers.
      </p>

      <h2>8. Children</h2>
      <p>Our services are directed to businesses and adults. We do not knowingly collect data from children under 16.</p>

      <h2>9. Contact</h2>
      <p>
        Privacy inquiries: {siteConfig.supportEmail}
        <br />
        {siteConfig.legalName}, {formatAddress()}
      </p>
    </LegalLayout>
  );
}
