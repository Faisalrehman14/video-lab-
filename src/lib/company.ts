/**
 * Company-level narrative content — what we offer, who we serve, how we
 * engage, and why teams pick a remote finishing lab. Kept separate from
 * per-service catalog copy so the homepage/about can tell the business story.
 */

export type Capability = {
  id: string;
  title: string;
  tagline: string;
  points: string[];
  href: string;
  cta: string;
};

/** What we actually deliver — the four production surfaces. */
export const capabilities: Capability[] = [
  {
    id: "video",
    title: "Video Finishing",
    tagline: "Raw footage into publish-ready masters.",
    points: [
      "Editorial cutting, pacing, and multicam sync",
      "Brand-locked lower-thirds and title systems",
      "Platform packs — 16:9, 1:1, 9:16 with safe zones",
    ],
    href: "/services/video-editing",
    cta: "Video services",
  },
  {
    id: "photo",
    title: "Photo Finishing",
    tagline: "Catalog and campaign stills at scale.",
    points: [
      "Clipping paths, background, and shadow standards",
      "Batch color matching to brand swatches",
      "Marketplace dimensions and bulk naming",
    ],
    href: "/services/photo-editing",
    cta: "Photo services",
  },
  {
    id: "motion",
    title: "Motion & Animation",
    tagline: "Graphics that move with intent.",
    points: [
      "Logo stings, kinetic type, and explainer overlays",
      "2D / 3D animation finishing and polish",
      "Loop-safe exports for heroes and ads",
    ],
    href: "/services/motion-graphics",
    cta: "Motion services",
  },
  {
    id: "audio",
    title: "Audio Polish",
    tagline: "Clean, level, and mix for every platform.",
    points: [
      "Noise reduction and dialogue clean-up",
      "VO sync, music beds, and ducking",
      "Loudness normalization to platform targets",
    ],
    href: "/services/color-grading",
    cta: "Finishing passes",
  },
];

export type Audience = {
  title: string;
  need: string;
};

/** Who briefs us — segment-specific framing so buyers self-identify. */
export const audiences: Audience[] = [
  { title: "DTC & E-commerce brands", need: "Listing-ready stills and product films that convert across marketplaces." },
  { title: "Agencies & studios", need: "White-label overflow capacity with brand SOPs and predictable turnaround." },
  { title: "SaaS & tech", need: "Demo, feature, and explainer finishing for site, sales, and paid." },
  { title: "Real estate & hospitality", need: "Property tours and location films with consistent, corrected color." },
  { title: "Event & wedding pros", need: "Season post capacity without hiring — highlights and teasers on schedule." },
  { title: "Marketing & comms teams", need: "Campaign adaptation, corporate, and leadership video under one scope." },
];

export type EngagementModel = {
  id: string;
  name: string;
  best: string;
  summary: string;
  points: string[];
  cta: { href: string; label: string };
  featured?: boolean;
};

/** The business model — three clear ways to buy. */
export const engagementModels: EngagementModel[] = [
  {
    id: "package",
    name: "Fixed Packages",
    best: "Best for one-off deliverables",
    summary: "Buy a defined scope with a published USD price and turnaround. Pay once via Stripe.",
    points: ["Deliverables listed up front", "Set revision rounds", "Turnaround in writing", "No surprise invoices"],
    cta: { href: "/checkout", label: "View packages" },
  },
  {
    id: "hourly",
    name: "Hourly Scope",
    best: "Best for evolving or mixed work",
    summary: "For projects that don't fit a template — we estimate hours, lock the rate, and confirm before work starts.",
    points: ["USD rate confirmed at intake", "Estimate before payment", "Flexible across video / photo / audio", "Transparent time reporting"],
    cta: { href: "/pricing", label: "See hourly rates" },
    featured: true,
  },
  {
    id: "retainer",
    name: "Monthly Retainer",
    best: "Best for always-on volume",
    summary: "A dedicated editor and priority queue for teams shipping continuously. Cancel per policy.",
    points: ["Dedicated editor + brand lock", "Priority scheduling", "Monthly capacity report", "Cancel-anytime terms"],
    cta: { href: "/contact?topic=retainer", label: "Discuss a retainer" },
  },
];

export type CompareRow = {
  factor: string;
  us: string;
  freelancer: string;
  inhouse: string;
};

/** Doubt-clearing comparison vs the two realistic alternatives. */
export const comparison: CompareRow[] = [
  { factor: "Pricing clarity", us: "USD scope in writing before Stripe", freelancer: "Varies per gig, scope creep common", inhouse: "Salary + software + overhead" },
  { factor: "Capacity", us: "Scales with a bench of editors", freelancer: "One person, single point of failure", inhouse: "Fixed headcount" },
  { factor: "Turnaround", us: "Confirmed dates, rush when scoped", freelancer: "Depends on their other clients", inhouse: "Competes with internal priorities" },
  { factor: "Brand consistency", us: "Brand kit locked across the team", freelancer: "Re-briefed every engagement", inhouse: "Strong but limited bandwidth" },
  { factor: "Revisions", us: "Rounds defined in every scope", freelancer: "Often unclear or extra", inhouse: "Informal, unbounded" },
  { factor: "Payment protection", us: "Stripe + published policies", freelancer: "Platform-dependent", inhouse: "N/A" },
];

export type Commitment = {
  title: string;
  text: string;
};

/** Process commitments — reassurance without over-promising outcomes. */
export const commitments: Commitment[] = [
  { title: "Scope before payment", text: "You approve deliverables, USD price, and turnaround in writing. Stripe charges exactly that." },
  { title: "Multi-pass QC", text: "Every file is checked against platform specs and your brand kit before it reaches you." },
  { title: "Revisions in scope", text: "Structured, time-coded revision rounds are included in every package and quote." },
  { title: "NDA-ready security", text: "Restricted-access handoff via your preferred cloud. We never store raw card data — Stripe does." },
];

export type DeepFaq = {
  q: string;
  a: string;
};

/** Extended FAQ that answers operational + trust doubts. */
export const companyFaqs: DeepFaq[] = [
  {
    q: "How do I send my footage or photos?",
    a: "Fully online. Drop a Google Drive, Dropbox, Frame.io, WeTransfer, or Box link — no upload portal to learn and no office visit.",
  },
  {
    q: "What turnaround can I expect?",
    a: "Each package and quote lists a turnaround window in business days. Rush is available when capacity is confirmed at booking and is scoped separately.",
  },
  {
    q: "How are revisions handled?",
    a: "Every scope includes a set number of time-coded revision rounds. Feedback goes through Frame.io or written notes; changes beyond scope are quoted before we proceed.",
  },
  {
    q: "Do you sign NDAs and keep work confidential?",
    a: "Yes. We work under restricted-access handoff and can sign your NDA before files move. Sensitive corporate content is handled on a need-to-know basis.",
  },
  {
    q: "What if I'm not happy with the result?",
    a: "Use your included revision rounds to align to the brief. Our Refund and Return policies define eligibility and the revise-vs-refund path — contact support before any chargeback.",
  },
  {
    q: "Can you match our brand guidelines?",
    a: "Yes. Share your brand kit — fonts, colors, LUTs, logo safe-zones — and we lock it across the team so output stays consistent across editors and months.",
  },
];
