import { serviceImages } from "@/lib/images";

export type PortfolioItem = {
  id: string;
  title: string;
  /** Filter group */
  category: "Brand & Narrative" | "Commerce" | "Places & Events" | "Animation & Motion" | "Photo";
  /** Playable media — YouTube id or local mp4; image-only when both absent */
  youtubeId?: string;
  videoSrc?: string;
  image: string;
  blurb: string;
  deliverables: string[];
  service: { href: string; label: string };
  featured?: boolean;
};

const ytThumb = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

export const portfolioCategories = [
  "Brand & Narrative",
  "Commerce",
  "Places & Events",
  "Animation & Motion",
  "Photo",
] as const;

export const portfolioItems: PortfolioItem[] = [
  {
    id: "corporate-film",
    title: "Structured Corporate Finishing",
    category: "Brand & Narrative",
    videoSrc: "/corporate-reel.mp4",
    image: serviceImages.corporate,
    blurb: "Brand-locked corporate edit — interview continuity, branded lower-thirds, and approval-ready master.",
    deliverables: ["16:9 master", "Lower-thirds", "Brand grade"],
    service: { href: "/services/corporate", label: "Corporate Videos" },
    featured: true,
  },
  {
    id: "campaign-film",
    title: "Cinematic Campaign Edit",
    category: "Brand & Narrative",
    youtubeId: "b0lFaU1Lfbk",
    image: ytThumb("b0lFaU1Lfbk"),
    blurb: "Multi-platform campaign master with beat-matched pacing and brand-kit motion language.",
    deliverables: ["Campaign master", "Ratio pack", "End cards"],
    service: { href: "/services/campaign", label: "Campaign Re-Editing" },
    featured: true,
  },
  {
    id: "sales-pitch",
    title: "High-Converting Sales Pitch",
    category: "Brand & Narrative",
    youtubeId: "7MFZmMYAAWo",
    image: ytThumb("7MFZmMYAAWo"),
    blurb: "Problem → proof → ask arc tightened for outbound, with CTA end card and email-friendly compression.",
    deliverables: ["Outbound cut", "CTA end card", "Captions"],
    service: { href: "/services/sales-pitch", label: "Sales Pitch Video" },
  },
  {
    id: "product-showcase",
    title: "Product Animation Showcase",
    category: "Commerce",
    youtubeId: "ImIDlchAD-w",
    image: ytThumb("ImIDlchAD-w"),
    blurb: "Hero product motion for PDP and paid placements — form, feature beats, and clean logo close.",
    deliverables: ["PDP hero", "Paid cutdowns", "4K master"],
    service: { href: "/services/product", label: "Product Video" },
  },
  {
    id: "saas-demo",
    title: "Modern SaaS Promo",
    category: "Commerce",
    youtubeId: "jWpUR4nTw3s",
    image: ytThumb("jWpUR4nTw3s"),
    blurb: "Feature-first SaaS story with UI callouts, VO balance, and chapters for site and sales decks.",
    deliverables: ["Website hero", "UI callouts", "Chapters"],
    service: { href: "/services/saas-demo", label: "SaaS Product Demos" },
  },
  {
    id: "commerce-pathing",
    title: "Marketplace Pathing Promo",
    category: "Commerce",
    videoSrc: "/commerce-pathing-reel.mp4",
    image: serviceImages["commerce-pathing"],
    blurb: "Listing-compliance finishing story — pure white backgrounds, margin discipline, contact shadows.",
    deliverables: ["Listing heroes", "Shadow set", "ASIN naming"],
    service: { href: "/services/commerce-pathing", label: "Commerce Pathing" },
  },
  {
    id: "real-estate",
    title: "Luxury Property Tour",
    category: "Places & Events",
    youtubeId: "HKj6T3u6YQU",
    image: ytThumb("HKj6T3u6YQU"),
    blurb: "Chaptered walkthrough with stabilized moves, room-to-room exposure balance, and listing verticals.",
    deliverables: ["Tour master", "Listing verticals", "Map cards"],
    service: { href: "/services/real-estate", label: "Real Estate Video Tour" },
  },
  {
    id: "travel-film",
    title: "Cinematic Travel Film",
    category: "Places & Events",
    youtubeId: "2ph6THnLvtA",
    image: ytThumb("2ph6THnLvtA"),
    blurb: "Editorial wanderlust pacing with location typography and a grade matched to destination light.",
    deliverables: ["Destination cut", "Social teasers", "Grade"],
    service: { href: "/services/travel", label: "Travel & Lifestyle Film" },
  },
  {
    id: "wedding-highlight",
    title: "Luxury Wedding Highlight",
    category: "Places & Events",
    youtubeId: "kOYyJsMQKew",
    image: ytThumb("kOYyJsMQKew"),
    blurb: "Emotion-first selects — vows intelligible, dance-floor energy intact, teaser cut for socials.",
    deliverables: ["Highlight film", "Vertical teaser", "Audio mix"],
    service: { href: "/services/wedding-event", label: "Wedding / Event Highlights" },
  },
  {
    id: "motion-graphics",
    title: "Professional Motion Graphics",
    category: "Animation & Motion",
    youtubeId: "8rB1Tsd-mSI",
    image: ytThumb("8rB1Tsd-mSI"),
    blurb: "Kinetic type and logo stings timed to beat — loop-safe exports for site heroes and ads.",
    deliverables: ["Logo stings", "Kinetic type", "Loop exports"],
    service: { href: "/services/motion-graphics", label: "Motion Graphics" },
  },
  {
    id: "cartoon-showcase",
    title: "Cartoon Animation Showcase",
    category: "Animation & Motion",
    youtubeId: "mPo9p3KI_6Q",
    image: ytThumb("mPo9p3KI_6Q"),
    blurb: "Stylized character motion with readable action and commercial discipline on color.",
    deliverables: ["Character cut", "Brand palette", "Platform pack"],
    service: { href: "/services/cartoonic", label: "Cartoonic Finishing" },
  },
  {
    id: "photo-catalog",
    title: "Catalog Still Retouching",
    category: "Photo",
    image: serviceImages["photo-catalog"],
    blurb: "Batch-consistent color, edge cleanup, and marketplace dimensions across a full SKU set.",
    deliverables: ["SKU batch", "Color match", "Bulk naming"],
    service: { href: "/services/photo-catalog", label: "Photo Catalog" },
  },
  {
    id: "headshots",
    title: "Team Headshot Finishing",
    category: "Photo",
    image: serviceImages.headshots,
    blurb: "Natural skin retouch and background tone matching for multi-person brand directories.",
    deliverables: ["Directory set", "Tone match", "Press crops"],
    service: { href: "/services/headshots", label: "Headshot Finishing" },
  },
];

export type CaseStudyDetail = {
  tag: string;
  client: string;
  title: string;
  challenge: string;
  approach: string;
  results: { value: string; label: string }[];
  serviceHref: string;
};

export const caseStudyDetails: CaseStudyDetail[] = [
  {
    tag: "DTC Apparel · Campaign",
    client: "Vera Goods",
    title: "Holiday campaign film + social suite from multi-cam raw",
    challenge:
      "A cohesive holiday narrative was needed from three cameras of unsynced raw footage, with a fixed launch date and brand-locked motion rules.",
    approach:
      "Pro Narrative master with multi-cam sync, beat-matched soundtrack cuts, brand LUT grade with skin-tone protection, and motion graphics locked to the brand kit.",
    results: [
      { value: "6", label: "Business days" },
      { value: "2", label: "Revision rounds" },
      { value: "3", label: "Platform formats" },
    ],
    serviceHref: "/services/campaign",
  },
  {
    tag: "Sportswear · Commerce Stills",
    client: "Pulse Athletic",
    title: "220-SKU catalog with marketplace-ready pathing",
    challenge:
      "Inconsistent white backgrounds and shadows across a 220-SKU catalog were blocking a marketplace relaunch with strict listing rules.",
    approach:
      "Commerce Studio pipeline: clipping paths, dual shadow sets, Shopify dimension presets, and PIM-friendly naming — QC checklist signed off per batch.",
    results: [
      { value: "220", label: "SKUs finished" },
      { value: "5", label: "Business days" },
      { value: "100%", label: "Listing compliance" },
    ],
    serviceHref: "/services/commerce-pathing",
  },
  {
    tag: "B2B SaaS · Product Demo",
    client: "Kinetic Co",
    title: "Sub-2-minute demo with UI callouts and captioned verticals",
    challenge:
      "Long, unpaced screen recordings had to become a demo that holds attention on both the website and paid social.",
    approach:
      "Paced a sub-2-minute cut with precision UI callouts, mixed VO against a ducked music bed, and exported horizontal plus 9:16 with burned and SRT captions.",
    results: [
      { value: "<2min", label: "Final runtime" },
      { value: "2", label: "Aspect ratios" },
      { value: "SRT", label: "Caption delivery" },
    ],
    serviceHref: "/services/saas-demo",
  },
];
