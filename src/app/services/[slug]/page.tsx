import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceLanding } from "@/components/ServiceLanding";
import {
  getAllServiceSlugs,
  getServiceBySlug,
} from "@/lib/serviceCatalog";

/** Static folders still serve corporate / product / testimonial for existing URLs. */
const STATIC_SLUGS = new Set(["corporate", "product", "testimonial"]);

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getAllServiceSlugs()
    .filter((slug) => !STATIC_SLUGS.has(slug))
    .map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
  };
}

export default function ServiceProfessionPage({ params }: Props) {
  if (STATIC_SLUGS.has(params.slug)) notFound();
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();
  return <ServiceLanding service={service} />;
}
