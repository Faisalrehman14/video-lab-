export const siteConfig = {
  name: "RenderReady Labs",
  legalName: "RenderReady Labs LLC",
  dba: "RenderReady Labs",
  tagline: "Precision video & photo editing for brands that ship.",
  logoTagline: "Finish that ships.",
  description:
    "Professional video and photo editing agency. Clear packages, transparent USD pricing, and Stripe-secured checkout.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://renderreadylabs.com",
  email: "hello@renderreadylabs.com",
  supportEmail: "support@renderreadylabs.com",
  phone: "+1 (415) 555-0187",
  address: {
    street: "548 Market Street, Suite 34567",
    city: "San Francisco",
    state: "CA",
    zip: "94104",
    country: "United States",
  },
  hours: {
    weekdays: "Monday – Friday, 9:00 AM – 6:00 PM PT",
    weekend: "Saturday by appointment · Sunday closed",
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
