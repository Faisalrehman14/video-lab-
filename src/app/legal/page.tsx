import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Legal",
  description: "Legal policies for RenderReady Labs — terms, privacy, refunds, and dispute handling.",
};

const links = [
  { href: "/legal/terms", label: "Terms & Conditions", desc: "Service agreement, payments, IP, liability" },
  { href: "/legal/privacy", label: "Privacy Policy", desc: "Data, Stripe, cookies, GDPR/CCPA rights" },
  { href: "/legal/refund", label: "Refund Policy", desc: "Eligibility, non-refundable rules, timelines" },
  { href: "/legal/return", label: "Return Policy", desc: "Revisions vs cancellations for digital services" },
  { href: "/legal/cancellation", label: "Cancellation Policy", desc: "Retainers and in-progress work" },
  { href: "/legal/disclaimer", label: "Disclaimer", desc: "Scope limits and copyright responsibilities" },
  { href: "/legal/disputes", label: "Chargebacks & Disputes", desc: "Contact support before disputing" },
];

export default function LegalIndexPage() {
  return (
    <LegalLayout title="Legal center">
      <p>All policies governing purchases and site use.</p>
      <ul className="mt-6 list-none space-y-4 pl-0">
        {links.map((l) => (
          <li key={l.href} className="rounded-lg border border-white/8 bg-ink p-4">
            <Link href={l.href} className="font-display text-base font-semibold text-brand no-underline hover:underline">
              {l.label}
            </Link>
            <p className="mt-1 mb-0 text-sm text-stone-300">{l.desc}</p>
          </li>
        ))}
      </ul>
    </LegalLayout>
  );
}
