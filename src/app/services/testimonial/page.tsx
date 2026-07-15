import { ServiceLanding } from "@/components/ServiceLanding";
import { getServiceBySlug } from "@/lib/serviceCatalog";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const service = getServiceBySlug("testimonial");

export const metadata: Metadata = {
  title: service?.metaTitle ?? "Testimonial Video Editing",
  description: service?.metaDescription,
};

export default function TestimonialPage() {
  if (!service) notFound();
  return <ServiceLanding service={service} />;
}
