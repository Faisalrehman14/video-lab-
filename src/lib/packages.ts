export type PackageTier = {
  id: string;
  name: string;
  price: number;
  currency: "USD";
  description: string;
  deliverables: string[];
  turnaround: string;
  features: string[];
  popular?: boolean;
  stripePriceEnv?: string;
};

export const videoPackages: PackageTier[] = [
  {
    id: "video-essential",
    name: "Essential Cut",
    price: 299,
    currency: "USD",
    description:
      "Single-camera social or product video with a clean narrative cut, color correction, and branded export.",
    turnaround: "3–5 business days",
    deliverables: [
      "1 final MP4 (1080p, H.264)",
      "1 vertical crop (9:16) for social",
      "Licensed royalty-free soundtrack selection",
      "2 revision rounds included",
    ],
    features: [
      "Up to 90 seconds finished length",
      "Basic color correction",
      "Text overlays & lower-thirds",
      "Royalty-free music sync",
    ],
  },
  {
    id: "video-pro",
    name: "Pro Narrative",
    price: 749,
    currency: "USD",
    description:
      "Multi-clip brand or campaign film with advanced pace, motion graphics, and color grade.",
    turnaround: "5–8 business days",
    deliverables: [
      "1 final MP4 (1080p or 4K)",
      "1 social cut-down (≤45s)",
      "1 Teaser thumbnail still (PNG)",
      "Project export notes & asset list",
      "3 revision rounds included",
    ],
    features: [
      "Up to 3 minutes finished length",
      "Advanced color grade",
      "Custom motion graphics package",
      "Sound design & mix polish",
      "Caption/subtitle file (SRT)",
    ],
    popular: true,
  },
  {
    id: "video-retainer",
    name: "Studio Retainer",
    price: 2499,
    currency: "USD",
    description:
      "Monthly subscription for ongoing video editing capacity — ideal for content teams with recurring deliverables.",
    turnaround: "Priority queue · Typical 48–72 hour turnaround",
    deliverables: [
      "Up to 8 finished videos / month (≤90s each) or equivalent longer cuts by agreement",
      "Shared Slack/email support channel",
      "Monthly capacity report",
      "Unused hours do not roll over",
    ],
    features: [
      "Dedicated editor allocation",
      "Brand kit lock-in",
      "Priority scheduling",
      "Cancel anytime per Cancellation Policy",
    ],
  },
];

export const photoPackages: PackageTier[] = [
  {
    id: "photo-batch",
    name: "Batch Retouch",
    price: 149,
    currency: "USD",
    description:
      "Product or lifestyle photo batch with consistent color, cleanup, and export-ready web files.",
    turnaround: "2–3 business days",
    deliverables: [
      "Up to 25 edited images (JPEG + optional PNG)",
      "Consistent color & exposure across set",
      "Background cleanup where specified",
      "1 revision round included",
    ],
    features: [
      "Color correction & exposure balance",
      "Dust / minor defect removal",
      "Crop & resize for web or print",
      "Light skin retouch (lifestyle)",
    ],
  },
  {
    id: "photo-commerce",
    name: "Commerce Studio",
    price: 399,
    currency: "USD",
    description:
      "E-commerce ready product set with clipping paths, shadow work, and marketplace-optimized exports.",
    turnaround: "3–5 business days",
    deliverables: [
      "Up to 40 images with clipping paths",
      "White / transparent background variants",
      "Natural & reflected shadow options",
      "Shopify/Amazon-ready dimensions",
      "2 revision rounds included",
    ],
    features: [
      "Pathing & mask cleanup",
      "Color matching to brand swatches",
      "Composite Hero image (1)",
      "Bulk naming & folder structure",
    ],
    popular: true,
  },
  {
    id: "photo-premium",
    name: "Premium Retouch",
    price: 899,
    currency: "USD",
    description:
      "High-end beauty, fashion, or campaign stills with detailed frequency separation and compositing.",
    turnaround: "5–7 business days",
    deliverables: [
      "Up to 15 hero-grade retouched frames",
      "Layered PSD/PSB on request",
      "Print & web exports",
      "3 revision rounds included",
    ],
    features: [
      "Advanced skin & fabric work",
      "Dodge/burn & tonal sculpting",
      "Composite & background extension",
      "Color grade to mood board",
    ],
  },
];

export const getPackageById = (id: string): PackageTier | undefined =>
  [...videoPackages, ...photoPackages].find((p) => p.id === id);

export const formatPrice = (amount: number, currency: string = "USD") =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
