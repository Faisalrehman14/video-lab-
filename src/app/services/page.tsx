import type { Metadata } from "next";
import { formatPrice, photoPackages, videoPackages } from "@/lib/packages";
import { ButtonLink } from "@/components/ButtonLink";
import { ServiceDetailCard } from "@/components/ServiceDetailCard";
import { photoSpecialties, videoSpecialties } from "@/lib/content";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Overview of RenderReady Labs video and photo editing services with clear packaging, turnaround, and USD pricing.",
};

export default function ServicesPage() {
  return (
    <div className="pt-[68px]">
      <section className="bg-paper">
        <div className="section pb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Services</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-extrabold uppercase text-ink md:text-5xl">
            Editing Services Built for Clarity
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-stone-600">
            Every service page lists what you buy, formats, turnaround, and USD pricing before
            checkout.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/services/video-editing">Video Editing</ButtonLink>
            <ButtonLink href="/services/corporate" variant="outline">
              Corporate
            </ButtonLink>
            <ButtonLink href="/services/photo-editing" variant="outlineDark">
              Photo Editing
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="border-t border-stone-200 bg-ink">
        <div className="section flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              Enterprise finishing
            </p>
            <h2 className="mt-2 font-display text-2xl font-extrabold text-white md:text-3xl">
              Corporate Video Editing
            </h2>
            <p className="mt-2 max-w-xl text-sm text-stone-400">
              Explainers, internal comms, webinars, pitches, and testimonials — brand-governed
              delivery with clear USD packages.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/services/corporate">Corporate →</ButtonLink>
            <ButtonLink href="/services/testimonial" variant="outline">
              Testimonials →
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="border-t border-stone-200 bg-white">
        <div className="section">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="font-display text-3xl font-extrabold text-ink">Video Editing</h2>
              <p className="mt-2 text-sm text-stone-600">
                From {formatPrice(videoPackages[0].price)} USD
              </p>
            </div>
            <Link href="/services/video-editing" className="text-sm font-semibold text-brand hover:underline">
              Full video page →
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {videoSpecialties.map((s) => (
              <ServiceDetailCard key={s.title} {...s} href="/services/video-editing" />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-stone-200 bg-paper">
        <div className="section">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="font-display text-3xl font-extrabold text-ink">Photo Editing</h2>
              <p className="mt-2 text-sm text-stone-600">
                From {formatPrice(photoPackages[0].price)} USD
              </p>
            </div>
            <Link href="/services/photo-editing" className="text-sm font-semibold text-brand hover:underline">
              Full photo page →
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {photoSpecialties.map((s) => (
              <ServiceDetailCard key={s.title} {...s} href="/services/photo-editing" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
