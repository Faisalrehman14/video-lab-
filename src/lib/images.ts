/** Curated Unsplash stills — matched to finishing specialties (HTTP 200 verified). */
const q = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

/**
 * One professional hero / gallery image per specialty.
 * Subject-matched for a finishing lab (no React screens, no logo mockups).
 */
export const serviceImages = {
  corporate: q("photo-1542744173-8e7e53415bb0"), // leadership boardroom
  product: q("photo-1505740420928-5e560c06d30e"), // product hero still
  testimonial: q("photo-1556761175-b413da4baf72"), // client conversation
  "real-estate": q("photo-1613490493576-7fde63acd811"), // luxury property exterior
  "social-shorts": q("photo-1512941937669-90a1b58e7e9c"), // phone-first creator
  youtube: q("photo-1574717024653-61fd2cf4d44d"), // timeline / long-form edit bay
  "saas-demo": q("photo-1460925895917-afdab827c52f"), // product analytics desk
  "wedding-event": q("photo-1519741497674-611481863552"), // wedding highlight
  "sales-pitch": q("photo-1557804506-669a67965ba0"), // presentation / pitch room
  interview: q("photo-1573496359142-b8d87734a5a2"), // executive / interview sit
  campaign: q("photo-1492691527719-9d1e07e534b4"), // campaign camera crew
  travel: q("photo-1476514525535-07fb3b4ae5f1"), // travel lifestyle
  "photo-catalog": q("photo-1441986300917-64674bd600d8"), // catalog / retail floor
  "commerce-pathing": q("photo-1607082348824-0a96f2a4b9da"), // packed commerce goods
  headshots: q("photo-1560250097-0b93528c311a"), // professional headshot
  cartoonic: q("photo-1618005182384-a83a8bd57fbe"), // stylized color motion
  "animation-2d": q("photo-1558591710-4b4a1ae0f04d"), // graphic 2D color field
  "animation-3d": q("photo-1617791160505-6f00504e3519"), // 3D abstract form
  "motion-graphics": q("photo-1550745165-9bc0b252726f"), // kinetic screens / tech
  "color-grading": q("photo-1478720568477-152d9b164e26"), // cinema / grade suite
} as const;

export type ServiceImageSlug = keyof typeof serviceImages;

/** Homepage proof strip */
export const proofImages = {
  campaign: q("photo-1523381210434-271e8be1f52b"),
  commerce: q("photo-1441986300917-64674bd600d8"),
  saas: q("photo-1460925895917-afdab827c52f"),
} as const;

/** Portfolio page tiles */
export const portfolioImages = {
  "Real Estate": serviceImages["real-estate"],
  "Wedding Video": serviceImages["wedding-event"],
  "Product Catalog": serviceImages.product,
  "Corporate Film": serviceImages.corporate,
  "Lifestyle Retouch": serviceImages.travel,
  "Event Highlight": serviceImages.campaign,
} as const;

/** Offering-card photos (ServiceDetailCard) — matched families per craft */
export const craftCardImages = {
  boardroom: q("photo-1542744173-8e7e53415bb0", 800),
  product: q("photo-1505740420928-5e560c06d30e", 800),
  interview: q("photo-1573496359142-b8d87734a5a2", 800),
  social: q("photo-1512941937669-90a1b58e7e9c", 800),
  editBay: q("photo-1574717024653-61fd2cf4d44d", 800),
  saas: q("photo-1460925895917-afdab827c52f", 800),
  wedding: q("photo-1519741497674-611481863552", 800),
  pitch: q("photo-1557804506-669a67965ba0", 800),
  property: q("photo-1613490493576-7fde63acd811", 800),
  camera: q("photo-1492691527719-9d1e07e534b4", 800),
  travel: q("photo-1476514525535-07fb3b4ae5f1", 800),
  retail: q("photo-1441986300917-64674bd600d8", 800),
  commerce: q("photo-1607082348824-0a96f2a4b9da", 800),
  portrait: q("photo-1560250097-0b93528c311a", 800),
  colorField: q("photo-1558591710-4b4a1ae0f04d", 800),
  abstract3d: q("photo-1617791160505-6f00504e3519", 800),
  motion: q("photo-1618005182384-a83a8bd57fbe", 800),
  cinema: q("photo-1478720568477-152d9b164e26", 800),
} as const;

export function asCardBg(url: string) {
  return `url(${url})`;
}
