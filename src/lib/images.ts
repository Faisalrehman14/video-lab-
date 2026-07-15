/** Curated Unsplash stills — globally unique per specialty (HTTP verified). */
const q = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const serviceImages = {
  corporate: q("photo-1542744173-8e7e53415bb0"),
  product: q("photo-1505740420928-5e560c06d30e"),
  testimonial: q("photo-1556761175-5973dc0f32e7"),
  "real-estate": q("photo-1613490493576-7fde63acd811"),
  "social-shorts": q("photo-1512941937669-90a1b58e7e9c"),
  youtube: q("photo-1574717024653-61fd2cf4d44d"),
  "saas-demo": q("photo-1460925895917-afdab827c52f"),
  "wedding-event": q("photo-1519741497674-611481863552"),
  "sales-pitch": q("photo-1557804506-669a67965ba0"),
  interview: q("photo-1573496359142-b8d87734a5a2"),
  campaign: q("photo-1440404653325-ab127d49abc1"),
  travel: q("photo-1476514525535-07fb3b4ae5f1"),
  "photo-catalog": q("photo-1441986300917-64674bd600d8"),
  "commerce-pathing": q("photo-1607082348824-0a96f2a4b9da"),
  headshots: q("photo-1560250097-0b93528c311a"),
  cartoonic: q("photo-1618005182384-a83a8bd57fbe"),
  "animation-2d": q("photo-1614850715649-1d0106293bd1"),
  "animation-3d": q("photo-1617791160505-6f00504e3519"),
  "motion-graphics": q("photo-1511379938547-c1f69419868d"),
  "color-grading": q("photo-1478720568477-152d9b164e26"),
} as const;

export type ServiceImageSlug = keyof typeof serviceImages;

/** 6 offering thumbs per specialty — exclusive IDs, never reused. */
export const serviceOfferingImages: Record<ServiceImageSlug, readonly string[]> = {
  corporate: [q("photo-1517245386807-bb43f82c33c4", 800), q("photo-1522071820081-009f0129c71c", 800), q("photo-1454165804606-c3d57bc86b40", 800), q("photo-1553877522-43269d4ea984", 800), q("photo-1497366754035-f200968a6e72", 800), q("photo-1556761175-b413da4baf72", 800)],
  product: [q("photo-1523275335684-37898b6baf30", 800), q("photo-1542291026-7eec264c27ff", 800), q("photo-1560343090-f0409e92791a", 800), q("photo-1572635196237-14b3f281503f", 800), q("photo-1560769629-975ec94e6a86", 800), q("photo-1552346154-21d32810aba3", 800)],
  testimonial: [q("photo-1600880292203-757bb62b4baf", 800), q("photo-1522202176988-66273c2fd55f", 800), q("photo-1531482615713-2afd69097998", 800), q("photo-1552581234-26160f608093", 800), q("photo-1543269865-cbf427effbad", 800), q("photo-1517048676732-d65bc937f952", 800)],
  "real-estate": [q("photo-1600596542815-ffad4c1539a9", 800), q("photo-1600585154340-be6161a56a0c", 800), q("photo-1560518883-ce09059eeffa", 800), q("photo-1605276374104-dee2a0ed3cd6", 800), q("photo-1600607687939-ce8a6c25118c", 800), q("photo-1600566753190-17f0baa2a6c3", 800)],
  "social-shorts": [q("photo-1616469829581-73993eb86b02", 800), q("photo-1533750349088-cd871a92f312", 800), q("photo-1596558450268-9c27524ba856", 800), q("photo-1611162618071-b39a2ec055fb", 800), q("photo-1600132806370-bf17e65e942f", 800), q("photo-1588702547919-26089e690ecc", 800)],
  youtube: [q("photo-1598488035139-bdbb2231ce04", 800), q("photo-1463453091185-61582044d556", 800), q("photo-1478144592103-25e218a04891", 800), q("photo-1589998059171-988d887df646", 800), q("photo-1492691527719-9d1e07e534b4", 800), q("photo-1478737270239-2f02b77fc618", 800)],
  "saas-demo": [q("photo-1551288049-bebda4e38f71", 800), q("photo-1516321318423-f06f85e504b3", 800), q("photo-1555949963-aa79dcee981c", 800), q("photo-1498050108023-c5249f4df085", 800), q("photo-1587620962725-abab7fe55159", 800), q("photo-1461749280684-dccba630e2f6", 800)],
  "wedding-event": [q("photo-1465495976277-4387d4b0b4c6", 800), q("photo-1520854221256-17451cc331bf", 800), q("photo-1519225421980-715cb0215aed", 800), q("photo-1460978812857-470ed1c77af0", 800), q("photo-1470337458703-46ad1756a187", 800), q("photo-1524504388940-b1c1722653e1", 800)],
  "sales-pitch": [q("photo-1552664730-d307ca884978", 800), q("photo-1507679799987-c73779587ccf", 800), q("photo-1559136555-9303baea8ebd", 800), q("photo-1560179707-f14e90ef3623", 800), q("photo-1486312338219-ce68d2c6f44d", 800), q("photo-1504384764586-bb4cdc1707b0", 800)],
  interview: [q("photo-1551836022-d5d88e9218df", 800), q("photo-1573497019940-1c28c88b4f3e", 800), q("photo-1519085360753-af0119f7cbe7", 800), q("photo-1472099645785-5658abf4ff4e", 800), q("photo-1500648767791-00dcc994a43e", 800), q("photo-1590602847861-f357a9332bbc", 800)],
  campaign: [q("photo-1544005313-94ddf0286df2", 800), q("photo-1539571696357-5a69c17a67c6", 800), q("photo-1487412720507-e7ab37603c6f", 800), q("photo-1477959858617-67f85cf4f1df", 800), q("photo-1620641788421-7a1c342ea42e", 800), q("photo-1635070041078-e363dbe005cb", 800)],
  travel: [q("photo-1488646953014-85cb44e25828", 800), q("photo-1469854523086-cc02fe5d8800", 800), q("photo-1500530855697-b586d89ba3ee", 800), q("photo-1520250497591-112f2f40a3f4", 800), q("photo-1507525428034-b723cf961d3e", 800), q("photo-1501785888041-af3ef285b470", 800)],
  "photo-catalog": [q("photo-1483985988355-763728e1935b", 800), q("photo-1469334031218-e382a71b716b", 800), q("photo-1523381210434-271e8be1f52b", 800), q("photo-1490481651871-ab68de25d43d", 800), q("photo-1445205170230-053b83016050", 800), q("photo-1515886657613-9f3515b0c78f", 800)],
  "commerce-pathing": [q("photo-1556742049-0cfed4f6a45d", 800), q("photo-1560472355-536de3962603", 800), q("photo-1555529771-835f59fc5efe", 800), q("photo-1607083206869-4c7672e72a8a", 800), q("photo-1549298916-b41d501d3772", 800), q("photo-1539635278303-d4002c07eae3", 800)],
  headshots: [q("photo-1507003211169-0a1dd7228f2d", 800), q("photo-1438761681033-6461ffad8d80", 800), q("photo-1580489944761-15a19d654956", 800), q("photo-1534528741775-53994a69daeb", 800), q("photo-1494790108377-be9c29b29330", 800), q("photo-1506794778202-cad84cf45f1d", 800)],
  cartoonic: [q("photo-1558591710-4b4a1ae0f04d", 800), q("photo-1579546929518-9e396f3cc809", 800), q("photo-1557683316-973673baf926", 800), q("photo-1557682250-33bd709cbe85", 800), q("photo-1618005198919-d3d4b5a92ead", 800), q("photo-1550684848-fac1c5b4e853", 800)],
  "animation-2d": [q("photo-1550745165-9bc0b252726f", 800), q("photo-1633356122544-f134324a6cee", 800), q("photo-1517694712202-14dd9538aa97", 800), q("photo-1504609773096-104ff2c73ba4", 800), q("photo-1581092918056-0c4c3acd3789", 800), q("photo-1486406146926-c627a92ad1ab", 800)],
  "animation-3d": [q("photo-1480714378408-67cf0d13bc1b", 800), q("photo-1449824913935-59a10b8d2000", 800), q("photo-1514565131-fce0801e5785", 800), q("photo-1497366216548-37526070297c", 800), q("photo-1600880292089-90a7e086ee0c", 800), q("photo-1611162616305-c69b3fa7fbe0", 800)],
  "motion-graphics": [q("photo-1555949963-ff9fe0c870eb", 800), q("photo-1508214751196-bcfd4ca60f91", 800), q("photo-1581092160562-40aa08e78837", 800), q("photo-1519389950473-47ba0277781c", 800), q("photo-1600210492486-724fe5c67fb0", 800), q("photo-1556761175-4b46a572b786", 800)],
  "color-grading": [q("photo-1536440136628-849c177e76a1", 800), q("photo-1574267432553-4b4628081c31", 800), q("photo-1598899134739-24c46f58b8c0", 800), q("photo-1516035069371-29a1b244cc32", 800), q("photo-1489599849927-2ee91cede3ba", 800), q("photo-1529626455594-4ff0802cfb7e", 800)],
};

export const proofImages = {
  campaign: q("photo-1517841905240-472988babdf9"),
  commerce: q("photo-1488426862026-3ee34a7d66df"),
  saas: q("photo-1531746020798-e6953c6e8e04"),
} as const;

export const portfolioImages = {
  "Real Estate": serviceImages["real-estate"],
  "Wedding Video": serviceImages["wedding-event"],
  "Product Catalog": serviceImages.product,
  "Corporate Film": serviceImages.corporate,
  "Lifestyle Retouch": serviceImages.travel,
  "Event Highlight": serviceImages.campaign,
} as const;

