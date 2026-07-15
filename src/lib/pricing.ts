import { formatPrice, photoPackages, videoPackages } from "@/lib/packages";

export type PricingCategory = {
  id: string;
  badge: string;
  featured?: boolean;
  startingLabel: string;
  priceLine: string;
  priceNote?: string;
  checkoutHref: string;
  influencersTitle: string;
  influencers: { label: string; detail?: string }[];
};

export const pricingCategories: PricingCategory[] = [
  {
    id: "video",
    badge: "Video Editing",
    startingLabel: "Basic Pricing (starting)",
    priceLine: `${formatPrice(videoPackages[0].price)}* USD`,
    priceNote: "per scoped package · Essential Cut",
    checkoutHref: `/checkout?package=${videoPackages[0].id}`,
    influencersTitle: "Advanced Pricing Influencers",
    influencers: [
      {
        label: "Essential",
        detail:
          "Single-cam cut, color correction, text overlays, royalty-free music · up to 90s",
      },
      {
        label: "Pro",
        detail: `Multi-clip narrative, motion graphics, grade, captions · from ${formatPrice(videoPackages[1].price)}`,
      },
      {
        label: "Retainer",
        detail: `Monthly capacity & priority queue · from ${formatPrice(videoPackages[2].price)}/mo`,
      },
    ],
  },
  {
    id: "photo",
    badge: "Photo Editing",
    featured: true,
    startingLabel: "Basic Pricing (starting)",
    priceLine: `${formatPrice(photoPackages[0].price)}* USD`,
    priceNote: "per batch package · Batch Retouch",
    checkoutHref: `/checkout?package=${photoPackages[0].id}`,
    influencersTitle: "Advanced Pricing Influencers",
    influencers: [
      {
        label: "Commerce",
        detail: `Clipping paths, shadows, marketplace exports · from ${formatPrice(photoPackages[1].price)}`,
      },
      {
        label: "Premium",
        detail: `Beauty / campaign retouch, composites · from ${formatPrice(photoPackages[2].price)}`,
      },
      {
        label: "Volume",
        detail: "SKU count, pathing complexity, rush turnaround, layered PSD delivery",
      },
    ],
  },
  {
    id: "audio",
    badge: "Audio Polish",
    startingLabel: "Basic Pricing (starting)",
    priceLine: "$199* USD",
    priceNote: "per scoped audio finish · quote locked before Stripe",
    checkoutHref: "/contact?topic=audio",
    influencersTitle: "Advanced Pricing Influencers",
    influencers: [
      { label: "Sources", detail: "Number of mics / tracks and room noise floor" },
      { label: "Participants", detail: "Speakers, crosstalk, and dialogue repair depth" },
      { label: "Deliverable", detail: "Podcast, jingle, VO mix, or program loudness target" },
    ],
  },
];

export const pricingFeatures = [
  {
    title: "Benefit",
    text: "Editors trained on Premiere, Resolve, Final Cut, After Effects, Photoshop, and Audition — quality optimization for campaigns, commerce, and product stories.",
  },
  {
    title: "Quality",
    text: "Multi-pass QC on picture, audio, and exports. Clear revision rounds in every package. Escalations answered within one business day.",
  },
  {
    title: "Turnaround Time",
    text: "Published TAT on every package (e.g. 2–8 business days). Rush capacity available when scoped and confirmed before Stripe Checkout.",
  },
  {
    title: "Security",
    text: "NDA-ready workflows, restricted file handoff, and Stripe-hosted payment so card data never touches our servers.",
  },
];
