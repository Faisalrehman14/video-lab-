import type { Metadata } from "next";
import { PricingBoard } from "@/components/PricingBoard";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing",
  description: `Transparent USD starting packages for video, photo, and audio finishing at ${siteConfig.name}. Scope confirmed before Stripe Checkout.`,
};

export default function PricingPage() {
  return (
    <div className="pt-[68px]">
      <PricingBoard showIntro />
    </div>
  );
}
