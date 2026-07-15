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

export const categories = [
  {
    title: "Corporate Videos",
    href: "/services/corporate",
    image:
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=900&q=80",
    aspect: "tall" as const,
  },
  {
    title: "Campaign Re-Editing",
    href: "/services/video-editing",
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=900&q=80",
    aspect: "wide" as const,
  },
  {
    title: "Travel & Lifestyle Film",
    href: "/portfolio",
    image:
      "https://images.unsplash.com/photo-1506923821422-49322bed9b4b?auto=format&fit=crop&w=900&q=80",
    aspect: "mid" as const,
  },
  {
    title: "Product Video",
    href: "/services/video-editing",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
    aspect: "mid" as const,
  },
  {
    title: "Interview & Leadership",
    href: "/services/corporate",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80",
    aspect: "tall" as const,
  },
  {
    title: "Real Estate Video Tour",
    href: "/services/video-editing",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80",
    aspect: "wide" as const,
  },
  {
    title: "Sales Pitch Video",
    href: "/services/corporate",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
    aspect: "mid" as const,
  },
  {
    title: "Testimonial Video",
    href: "/services/testimonial",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80",
    aspect: "tall" as const,
  },
  {
    title: "Social Shorts / Reels",
    href: "/services/video-editing",
    image:
      "https://images.unsplash.com/photo-1611162616471-46b635cb1dd1?auto=format&fit=crop&w=900&q=80",
    aspect: "mid" as const,
  },
  {
    title: "YouTube Long-Form",
    href: "/services/video-editing",
    image:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=900&q=80",
    aspect: "wide" as const,
  },
  {
    title: "Photo Catalog Retouch",
    href: "/services/photo-editing",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80",
    aspect: "mid" as const,
  },
  {
    title: "Commerce Pathing",
    href: "/services/photo-editing",
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=900&q=80",
    aspect: "tall" as const,
  },
];

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
    image:
      "linear-gradient(145deg, #2a1010 0%, #111 55%), radial-gradient(circle at 70% 30%, rgba(227,6,19,0.45), transparent 55%)",
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
    image:
      "linear-gradient(145deg, #1a1a22 0%, #111 55%), radial-gradient(circle at 30% 70%, rgba(227,6,19,0.25), transparent 50%)",
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
    image:
      "linear-gradient(145deg, #1a1814 0%, #111 55%), radial-gradient(circle at 60% 40%, rgba(255,138,0,0.25), transparent 50%)",
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
    image:
      "linear-gradient(145deg, #221410 0%, #111 55%), radial-gradient(circle at 40% 30%, rgba(227,6,19,0.3), transparent 50%)",
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
    image:
      "linear-gradient(145deg, #141820 0%, #111 55%), radial-gradient(circle at 70% 60%, rgba(227,6,19,0.2), transparent 50%)",
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
    image:
      "linear-gradient(145deg, #1a1414 0%, #111 55%), radial-gradient(circle at 50% 40%, rgba(255,193,7,0.15), transparent 45%)",
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
    image:
      "linear-gradient(135deg, #1a1010, #111), radial-gradient(circle at 80% 20%, rgba(227,6,19,0.35), transparent)",
    bullets: [
      "A-roll / B-roll weaving with pattern interrupts for retention",
      "Thumbnail still pulls and chapter markers for SEO structure",
      "Loudness targets for YouTube (−14 LUFS integrated guidance)",
      "End screens, subscribe moments, and mid-roll placement cues",
    ],
  },
  {
    title: "Event Highlight & Recap Films",
    image:
      "linear-gradient(135deg, #1a1410, #111), radial-gradient(circle at 20% 80%, rgba(255,138,0,0.25), transparent)",
    bullets: [
      "Multi-angle sync and crowd-audio bed balancing",
      "Speaker highlight reels and sponsor bumpers",
      "Same-day or rush options when contracted separately",
      "Vertical teasers for post-event social bursts",
    ],
  },
  {
    title: "Color Grading & Finishing Passes",
    image:
      "linear-gradient(135deg, #141018, #111), radial-gradient(circle at 50% 50%, rgba(227,6,19,0.25), transparent)",
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
