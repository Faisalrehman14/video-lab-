import { serviceCatalogCategories } from "@/lib/serviceCatalog";
import { serviceImages } from "@/lib/images";

export const homeStats = [
  { value: "8+", label: "Years of experience" },
  { value: "500+", label: "Satisfied clients" },
  { value: "120", label: "4K resolution projects" },
  { value: "1,200+", label: "Projects done" },
];

export const serviceTabs = [
  {
    id: "editorial",
    label: "Editorial",
    items: ["Conform", "Color Correction", "Titles", "Captions", "Dubbing", "Storyboard", "Pacing"],
  },
  {
    id: "picture",
    label: "Picture Service",
    items: [
      "Rotoscoping",
      "Motion Tracking",
      "Chroma Removal",
      "Motion Graphics",
      "Beauty",
      "CleanUp",
      "Animation",
    ],
  },
  {
    id: "audio",
    label: "Audio Service",
    items: [
      "Music Mixing",
      "VO Sync",
      "Noise Reduction",
      "Podcast Editing",
      "Sound Design",
      "Loudness Norm",
      "SFX Beds",
    ],
  },
];

export { serviceCatalogCategories as categories };

export const steps = [
  {
    n: "01",
    title: "Brief & upload",
    text: "You share the brief and upload footage or stills securely. We confirm package, USD price, and turnaround in writing.",
  },
  {
    n: "02",
    title: "We edit",
    text: "Our editors cut, grade, retouch, and finish according to the agreed package and brand guidelines.",
  },
  {
    n: "03",
    title: "You review",
    text: "You review the draft using the revision rounds included in your package.",
  },
  {
    n: "04",
    title: "Download finals",
    text: "Approved files are delivered in the formats listed — ready to publish on web, ads, or social.",
  },
];

export const videoSpecialties = [
  {
    title: "Brand & Campaign Film Editing",
    featured: true,
    image: serviceImages.campaign,
    bullets: [
      "Multi-cam sync, selective story pacing, and beat-matched soundtrack cuts for launch films",
      "Secondary color grade with skin-tone protection and brand LUT application",
      "Lower-thirds, kinetic type, and logo end-cards matched to your brand kit",
      "Master 1080p/4K H.264 or ProRes plus 9:16 and 1:1 social cut-downs",
      "SRT captions and loudness normalization for ads and organic posts",
    ],
  },
  {
    title: "Product Demo & SaaS Video Editing",
    featured: false,
    image: serviceImages["saas-demo"],
    bullets: [
      "Screen recording cleanup, zoom punch-ins, and UI callout overlays",
      "Voiceover leveling, room-tone reduction, and music bed ducking",
      "Feature chapter markers and chapter thumbnails for long-form demos",
      "Platform-specific exports for website heroes, LinkedIn, and YouTube",
      "Revision rounds scoped to the purchased package before delivery lock",
    ],
  },
  {
    title: "Real Estate & Location Walkthrough Editing",
    featured: false,
    image: serviceImages["real-estate"],
    bullets: [
      "Stabilization, horizon correction, and exposure balancing room-to-room",
      "Chaptered tour structure with map/title cards and soft transitions",
      "Music rights-cleared beds and subtle ambience beds where needed",
      "Vertical reels for listing portals plus a master horizontal cut",
      "Color consistency across drones, phones, and cinema cameras",
    ],
  },
];

export const photoSpecialties = [
  {
    title: "E-commerce & Marketplace Photo Finishing",
    featured: true,
    image: serviceImages["commerce-pathing"],
    bullets: [
      "Clipping paths, edge cleanup, and white/transparent background variants",
      "Natural and reflected shadow matching for catalog consistency",
      "Color matching to brand swatches across full SKU batches",
      "Shopify, Amazon, and marketplace dimension presets with bulk naming",
      "Composite hero frames for PDPs when listed in your package",
    ],
  },
  {
    title: "Lifestyle & Campaign Still Retouching",
    featured: false,
    image: serviceImages.travel,
    bullets: [
      "Frequency-separation skin work with texture preservation",
      "Dodge/burn sculpting, fabric cleanup, and prop distraction removal",
      "Mood-board-driven color grade for campaign cohesion",
      "Print and web exports with soft-proof guidance on request",
      "Layered PSD/PSB delivery on Premium Retouch packages",
    ],
  },
  {
    title: "Headshot & Team Portrait Finishing",
    featured: false,
    image: serviceImages.headshots,
    bullets: [
      "Natural skin retouch, stray hair cleanup, and collar/wardrobe fixes",
      "Background tone matching for multi-person brand directories",
      "Eye brightening and catchlight balance without plastic skin",
      "Consistent crop and framing for LinkedIn, site, and press kits",
      "Batch delivery with naming conventions your HR/CMS can ingest",
    ],
  },
];

export const moreVideoServices = [
  {
    title: "YouTube & Long-Form Narrative Editing",
    image: serviceImages.youtube,
    bullets: [
      "A-roll / B-roll weaving with pattern interrupts for retention",
      "Thumbnail still pulls and chapter markers for SEO structure",
      "Loudness targets for YouTube (−14 LUFS integrated guidance)",
      "End screens, subscribe moments, and mid-roll placement cues",
    ],
  },
  {
    title: "Event Highlight & Recap Films",
    image: serviceImages["wedding-event"],
    bullets: [
      "Multi-angle sync and crowd-audio bed balancing",
      "Speaker highlight reels and sponsor bumpers",
      "Same-day or rush options when contracted separately",
      "Vertical teasers for post-event social bursts",
    ],
  },
  {
    title: "Color Grading & Finishing Passes",
    image: serviceImages["color-grading"],
    bullets: [
      "Log-to-Rec.709 or cinematic look development from still refs",
      "Shot matching across cameras and mixed lighting",
      "Skin-priority grades for beauty and lifestyle content",
      "Deliverables in timeline-friendly intermediates when scoped",
    ],
  },
];

export const whyChoose = [
  {
    title: "Technically Accurate Finishing",
    text: "Frame-accurate cuts, calibrated color, and export specs that match platform expectations — not guesswork compressions.",
  },
  {
    title: "Clear Scope Before You Pay",
    text: "Every package lists deliverables, turnaround, revision rounds, and USD price on-page. Stripe charges that same amount.",
  },
  {
    title: "Revision Rounds Built In",
    text: "Structured feedback cycles keep taste aligned to the brief. Scope changes are quoted separately so timelines stay honest.",
  },
  {
    title: "Secure, Policy-Transparent Checkout",
    text: "Payments via Stripe. Refund, return, and cancellation policies are linked at checkout for dispute-ready clarity.",
  },
];

export const caseStudies = [
  {
    tag: "Case study",
    title: "Campaign film + social suite for a DTC apparel launch",
    body: "Vera Goods needed a cohesive holiday narrative from multi-cam raw. We delivered a Pro Narrative master, two social cut-downs, SRT captions, and brand-locked motion graphics in six business days with two revision rounds.",
    dark: false,
  },
  {
    tag: "Case study",
    title: "220-SKU commerce catalog with marketplace-ready pathing",
    body: "Pulse Athletic required consistent white-background assets. Commerce Studio: clipping paths, dual shadow sets, Shopify dimensions, and PIM-friendly naming — full set in five business days.",
    dark: true,
  },
  {
    tag: "Case study",
    title: "SaaS product demo with UI callouts and captioned verticals",
    body: "Kinetic Co supplied long screen recordings. We paced a sub-2-minute demo, added precision callouts, mixed VO and music, and exported horizontal plus 9:16 with captions for paid social.",
    dark: false,
  },
];

export const industries = [
  {
    title: "Corporate",
    text: "Internal communications, training, marketing, and brand films aligned to business strategy.",
  },
  {
    title: "Real Estate",
    text: "Property tours and listing videos that highlight features and support buying decisions.",
  },
  {
    title: "E-commerce",
    text: "Product films and packshot finishing for marketplaces and brand storefronts.",
  },
  {
    title: "Education",
    text: "Instructional and promotional video polished for e-learning and enrollment.",
  },
  {
    title: "Media & Entertainment",
    text: "Highlights, interviews, and long-form editorial finishing for audience platforms.",
  },
  {
    title: "Other Industries",
    text: "Healthcare, automotive, tourism, and more — scoped packages confirmed before payment.",
  },
];

export const faqs = [
  {
    q: "What exactly am I buying?",
    a: "Professional editing labor and digital deliverables as listed on each package — formats, turnaround, and revision rounds included. Prices are in USD and match Stripe Checkout.",
  },
  {
    q: "How does pricing work?",
    a: "Packages show starting USD prices with no hidden fees. Custom scopes are quoted in writing before payment. Retainers bill monthly until canceled per our Cancellation Policy.",
  },
  {
    q: "How do refunds and revisions work?",
    a: "See our Refund Policy (eligibility window and non-refundable conditions), Return Policy (revisions vs cancellations), and contact support before filing a chargeback.",
  },
  {
    q: "Is payment secure?",
    a: "Yes. Card data is processed by Stripe — we never store raw card numbers. Checkout is served over HTTPS/SSL.",
  },
];
