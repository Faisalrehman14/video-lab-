import { ServiceLanding } from "@/components/ServiceLanding";
import { getServiceBySlug } from "@/lib/serviceCatalog";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const service = getServiceBySlug("product");

export const metadata: Metadata = {
  title: service?.metaTitle ?? "Product Video Editing",
  description: service?.metaDescription,
};

export default function ProductVideoPage() {
  if (!service) notFound();
  return <ServiceLanding service={service} />;
}
