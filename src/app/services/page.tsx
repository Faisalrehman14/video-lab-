import type { Metadata } from "next";
import Link from "next/link";
import { formatPrice, photoPackages, videoPackages } from "@/lib/packages";
import { ButtonLink } from "@/components/ButtonLink";
import { serviceCatalog } from "@/lib/serviceCatalog";
import { SpecialtyIndex, type SpecialtyItem } from "@/components/SpecialtyIndex";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Professional video and photo finishing specialties — each with a dedicated service page, clear scope, and USD pricing before Stripe Checkout.",
};

/** Intent groups — how buyers actually shop, not a flat directory. */
const VIDEO_GROUPS = ["Narrative", "Commerce", "Place & Events", "Format & Craft"] as const;

const VIDEO_GROUP_BY_SLUG: Record<string, (typeof VIDEO_GROUPS)[number]> = {
  corporate: "Narrative",
  interview: "Narrative",
  testimonial: "Narrative",
  "sales-pitch": "Narrative",
  product: "Commerce",
  campaign: "Commerce",
  "saas-demo": "Commerce",
  "real-estate": "Place & Events",
  travel: "Place & Events",
  "wedding-event": "Place & Events",
  "social-shorts": "Format & Craft",
  youtube: "Format & Craft",
  "motion-graphics": "Format & Craft",
  "animation-2d": "Format & Craft",
  "animation-3d": "Format & Craft",
  cartoonic: "Format & Craft",
  "color-grading": "Format & Craft",
};

const PHOTO_GROUP_BY_SLUG: Record<string, string> = {
  "photo-catalog": "Commerce Stills",
  "commerce-pathing": "Commerce Stills",
  headshots: "People",
};

function toItems(
  services: typeof serviceCatalog,
  groupMap: Record<string, string>,
): SpecialtyItem[] {
  return services.map((s) => ({
    slug: s.slug,
    label: s.label,
    eyebrow: s.eyebrow,
    description: s.metaDescription,
    image: s.image,
    group: groupMap[s.slug] ?? "Specialty",
  }));
}

export default function ServicesPage() {
  const video = toItems(
    serviceCatalog.filter((s) => s.contactTopic !== "photo"),
    VIDEO_GROUP_BY_SLUG,
  );
  const photo = toItems(
    serviceCatalog.filter((s) => s.contactTopic === "photo"),
    PHOTO_GROUP_BY_SLUG,
  );

  return (
    <div className="pt-[68px]">
      <section className="bg-paper">
        <div className="section pb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Services</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-extrabold uppercase text-ink md:text-5xl">
            20 Finishing Specialties.
            <span className="mt-1 block text-stone-500">One clear scope each.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-stone-600">
            Every profession page lists offerings, why teams hire us, FAQs, and USD pricing before
            checkout — remote delivery across time zones.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/services/video-editing">All Video</ButtonLink>
            <ButtonLink href="/services/photo-editing" variant="outlineDark">
              All Photo
            </ButtonLink>
            <ButtonLink href="/pricing" variant="outline">
              Pricing
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="border-t border-stone-200 bg-white">
        <div className="section">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="font-display text-3xl font-extrabold text-ink">Video specialties</h2>
              <p className="mt-2 text-sm text-stone-600">
                From {formatPrice(videoPackages[0].price)} USD · or hourly on{" "}
                <Link href="/pricing" className="text-brand hover:underline">
                  Pricing
                </Link>
              </p>
            </div>
            <Link
              href="/services/video-editing"
              className="text-sm font-semibold text-brand hover:underline"
            >
              General video page →
            </Link>
          </div>

          <SpecialtyIndex
            items={video}
            featuredSlugs={["corporate", "product"]}
            groups={[...VIDEO_GROUPS]}
          />
        </div>
      </section>

      <section className="border-t border-stone-200 bg-paper">
        <div className="section">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="font-display text-3xl font-extrabold text-ink">Photo specialties</h2>
              <p className="mt-2 text-sm text-stone-600">
                From {formatPrice(photoPackages[0].price)} USD
              </p>
            </div>
            <Link
              href="/services/photo-editing"
              className="text-sm font-semibold text-brand hover:underline"
            >
              General photo page →
            </Link>
          </div>

          <SpecialtyIndex items={photo} />
        </div>
      </section>
    </div>
  );
}
