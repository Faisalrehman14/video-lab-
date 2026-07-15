import type { Metadata } from "next";
import { PricingBoard } from "@/components/PricingBoard";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing",
  description: `Hourly USD starting rates for video, photo, and audio finishing at ${siteConfig.name}. Hours confirmed before Stripe Checkout.`,
};

export default function PricingPage() {
  return (
    <div className="pt-[68px]">
      <PricingBoard showIntro />
    </div>
  );
}
