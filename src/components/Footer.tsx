import Link from "next/link";
import { Logo } from "./Logo";
import { formatAddress, siteConfig } from "@/lib/site";

const serviceLinks = [
  { href: "/services", label: "All Services" },
  { href: "/services/video-editing", label: "Video Editing" },
  { href: "/services/corporate", label: "Corporate Video" },
  { href: "/services/product", label: "Product Video" },
  { href: "/services/testimonial", label: "Testimonial Video" },
  { href: "/services/real-estate", label: "Real Estate Tours" },
  { href: "/services/social-shorts", label: "Social Shorts" },
  { href: "/services/youtube", label: "YouTube Long-Form" },
  { href: "/services/photo-catalog", label: "Photo Catalog" },
  { href: "/services/commerce-pathing", label: "Commerce Pathing" },
  { href: "/services/photo-editing", label: "Photo Editing" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/checkout", label: "Packages & Checkout" },
];
const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/reviews", label: "Client Reviews" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/legal/terms", label: "Terms & Conditions" },
  { href: "/legal/privacy", label: "Privacy Policy" },
  { href: "/legal/refund", label: "Refund Policy" },
  { href: "/legal/return", label: "Return Policy" },
  { href: "/legal/cancellation", label: "Cancellation Policy" },
  { href: "/legal/disclaimer", label: "Disclaimer" },
  { href: "/legal/disputes", label: "Chargebacks & Disputes" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo size="sm" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-stone-400">
              {siteConfig.tagline}
            </p>
            <div className="mt-6 space-y-1 text-sm text-stone-400">
              <p className="font-medium text-white">{siteConfig.legalName}</p>
              <p>DBA: {siteConfig.dba}</p>
              <p>{formatAddress()}</p>
              <p>
                <a href={`mailto:${siteConfig.supportEmail}`} className="hover:text-brand">
                  {siteConfig.supportEmail}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
                  className="hover:text-brand"
                >
                  {siteConfig.phone}
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-stone-400 hover:text-brand">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Company</h3>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-stone-400 hover:text-brand">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Legal</h3>
            <ul className="mt-4 space-y-2.5">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-stone-400 hover:text-brand">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-stone-500">
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved. Payments by
            Stripe · SSL/TLS encrypted.
          </p>
          <div className="flex flex-wrap gap-3 text-xs text-stone-500">
            <span className="rounded border border-white/15 px-2.5 py-1">SSL Secured</span>
            <span className="rounded border border-white/15 px-2.5 py-1">Powered by Stripe</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
