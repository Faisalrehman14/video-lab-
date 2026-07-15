export const siteConfig = {
  name: "RenderReady Labs",
  legalName: "RenderReady Labs LLC",
  dba: "RenderReady Labs",
  tagline: "Remote video & photo finishing for brands that ship online.",
  logoTagline: "Finish that ships.",
  description:
    "Online video and photo editing lab. Remote collaboration, clear hourly or package USD pricing, and Stripe-secured checkout.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://renderreadylabs.com",
  email: "hello@renderreadylabs.com",
  supportEmail: "support@renderreadylabs.com",
  phone: "+1 (415) 555-0187",
  /** Remote-first: this is the registered business address for billing/legal — not a walk-in studio. */
  address: {
    street: "548 Market Street, Suite 34567",
    city: "San Francisco",
    state: "CA",
    zip: "94104",
    country: "United States",
  },
  remote: {
    model: "Fully remote online finishing lab",
    coverage: "Clients worldwide · async by default",
    timezone: "Primary coverage: Pacific Time (PT)",
    handoff: ["Google Drive", "Dropbox", "Frame.io", "WeTransfer", "Box"],
    reviews: ["Frame.io", "Email time-coded notes", "Zoom / Google Meet"],
  },
  hours: {
    weekdays: "Monday – Friday, 9:00 AM – 6:00 PM PT (online)",
    weekend: "Saturday by remote appointment · Sunday closed",
  },
  social: {
    instagram: "https://instagram.com/renderreadylabs",
    linkedin: "https://linkedin.com/company/renderready-labs",
    vimeo: "https://vimeo.com/renderreadylabs",
  },
} as const;

export const formatAddress = () => {
  const { street, city, state, zip, country } = siteConfig.address;
  return `${street}, ${city}, ${state} ${zip}, ${country}`;
};
