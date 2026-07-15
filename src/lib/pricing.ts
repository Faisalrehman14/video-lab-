export type PricingCategory = {
  id: string;
  badge: string;
  featured?: boolean;
  startingLabel: string;
  priceLine: string;
  priceSuffix: string;
  priceNote?: string;
  ctaLabel: string;
  checkoutHref: string;
  influencersTitle: string;
  influencers: { label: string; detail?: string }[];
};

/** Hourly starting rates — standard finishing-lab range (indicative). */
export const pricingCategories: PricingCategory[] = [
  {
    id: "video",
    badge: "Video Editing",
    startingLabel: "Basic Pricing (starting)",
    priceLine: "$12* – $15*",
    priceSuffix: "/per hour",
    priceNote: "USD · editor hour · scope locked before payment",
    ctaLabel: "Get Hourly Quote",
    checkoutHref: "/contact?topic=video-hourly",
    influencersTitle: "Advanced Pricing Influencers",
    influencers: [
      {
        label: "Standard",
        detail:
          "Basic editing + transitions / fine cut / audio normalizing / social exports",
      },
      {
        label: "Advanced",
        detail:
          "Standard features + color grade / motion graphics / captions / multi-cam sync",
      },
      {
        label: "Also affects rate",
        detail: "Raw hours, revision rounds, rush TAT, and deliverable count",
      },
    ],
  },
  {
    id: "photo",
    badge: "Photo Editing",
    featured: true,
    startingLabel: "Basic Pricing (starting)",
    priceLine: "$10* – $14*",
    priceSuffix: "/per hour",
    priceNote: "USD · artist hour · batch size confirmed at intake",
    ctaLabel: "Get Hourly Quote",
    checkoutHref: "/contact?topic=photo-hourly",
    influencersTitle: "Advanced Pricing Influencers",
    influencers: [
      {
        label: "Catalog",
        detail: "Color / exposure / cleanup + web export per SKU volume",
      },
      {
        label: "Commerce",
        detail: "Pathing, shadows, marketplace dimensions, naming at scale",
      },
      {
        label: "Premium",
        detail: "Beauty / campaign retouch, composites, layered PSD delivery",
      },
    ],
  },
  {
    id: "audio",
    badge: "Audio Polish",
    startingLabel: "Basic Pricing (starting)",
    priceLine: "$10*",
    priceSuffix: "/per hour",
    priceNote: "USD · engineer hour · stems & loudness target at intake",
    ctaLabel: "Get Hourly Quote",
    checkoutHref: "/contact?topic=audio-hourly",
    influencersTitle: "Advanced Pricing Influencers",
    influencers: [
      { label: "Sources", detail: "Number of microphones / tracks used" },
      { label: "Participants", detail: "Number of speakers and crosstalk complexity" },
      { label: "Quality target", detail: "Desired audio quality, music mix, or program loudness" },
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
    text: "Multi-pass QC on picture, audio, and exports. Clear revision rounds. Escalations answered within one business day.",
  },
  {
    title: "Turnaround Time",
    text: "Hour estimates convert to calendars at intake. Rush capacity available when confirmed before Stripe Checkout.",
  },
  {
    title: "Security",
    text: "NDA-ready workflows, restricted file handoff, and Stripe-hosted payment so card data never touches our servers.",
  },
];
