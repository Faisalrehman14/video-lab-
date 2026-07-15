import type { Metadata } from "next";
import Link from "next/link";
import { formatPrice, photoPackages, videoPackages } from "@/lib/packages";
import { ButtonLink } from "@/components/ButtonLink";
import { serviceCatalog } from "@/lib/serviceCatalog";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Professional video and photo finishing specialties — each with a dedicated service page, clear scope, and USD pricing before Stripe Checkout.",
};

export default function ServicesPage() {
  const video = serviceCatalog.filter((s) => s.contactTopic !== "photo");
  const photo = serviceCatalog.filter((s) => s.contactTopic === "photo");

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
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {video.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group border border-stone-200 bg-paper p-5 transition hover:border-brand hover:shadow-card"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand">
                  {s.eyebrow}
                </p>
                <h3 className="mt-2 font-display text-lg font-extrabold text-ink group-hover:text-brand">
                  {s.label}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-stone-600">{s.metaDescription}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-brand">
                  Open profession →
                </span>
              </Link>
            ))}
          </div>
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
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {photo.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group border border-stone-200 bg-white p-5 transition hover:border-brand hover:shadow-card"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand">
                  {s.eyebrow}
                </p>
                <h3 className="mt-2 font-display text-lg font-extrabold text-ink group-hover:text-brand">
                  {s.label}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-stone-600">{s.metaDescription}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-brand">
                  Open profession →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
