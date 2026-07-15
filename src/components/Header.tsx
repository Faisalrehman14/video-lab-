"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";
import { siteConfig } from "@/lib/site";

const videoCols = [
  {
    title: "Popular",
    links: [
      { href: "/services/video-editing", label: "All Video Editing" },
      { href: "/services/corporate", label: "Corporate Videos" },
      { href: "/services/video-editing", label: "Product Videos" },
      { href: "/services/video-editing", label: "Real Estate Tours" },
      { href: "/portfolio", label: "Wedding / Event Highlights" },
    ],
  },
  {
    title: "Formats",
    links: [
      { href: "/services/video-editing", label: "YouTube & Long-Form" },
      { href: "/services/video-editing", label: "Social Shorts / Reels" },
      { href: "/services/video-editing", label: "SaaS Product Demos" },
      { href: "/services/testimonial", label: "Testimonials" },
      { href: "/checkout", label: "Studio Retainer" },
    ],
  },
  {
    title: "Finishing",
    links: [
      { href: "/services/video-editing", label: "Color Grading" },
      { href: "/services/video-editing", label: "Motion Graphics" },
      { href: "/services/video-editing", label: "Captions & Subtitles" },
      { href: "/legal/refund", label: "Refund Policy" },
      { href: "/checkout", label: "Get a Quote" },
    ],
  },
];

const photoCols = [
  {
    title: "Commerce",
    links: [
      { href: "/services/photo-editing", label: "All Photo Editing" },
      { href: "/services/photo-editing", label: "Marketplace Pathing" },
      { href: "/services/photo-editing", label: "Product Catalog" },
      { href: "/services/photo-editing", label: "Shadow & Background" },
    ],
  },
  {
    title: "Creative",
    links: [
      { href: "/services/photo-editing", label: "Campaign Retouch" },
      { href: "/services/photo-editing", label: "Lifestyle Still Finishing" },
      { href: "/services/photo-editing", label: "Headshots & Team" },
      { href: "/portfolio", label: "Before / After Work" },
    ],
  },
  {
    title: "Packages",
    links: [
      { href: "/checkout?package=photo-batch", label: "Batch Retouch" },
      { href: "/checkout?package=photo-commerce", label: "Commerce Studio" },
      { href: "/checkout?package=photo-premium", label: "Premium Retouch" },
      { href: "/contact", label: "Custom Quote" },
    ],
  },
];

type MegaKey = "video" | "photo" | null;

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState<MegaKey>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setOpen(false);
    setMega(null);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMega(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openMega = (key: MegaKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMega(key);
  };

  const closeMegaDelayed = () => {
    closeTimer.current = setTimeout(() => setMega(null), 140);
  };

  const megaCols = mega === "video" ? videoCols : mega === "photo" ? photoCols : null;

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-ink shadow-[0_2px_12px_rgba(0,0,0,0.35)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <Logo size="sm" />

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {(
            [
              { key: "video" as const, label: "Video Editing", href: "/services/video-editing" },
              { key: "photo" as const, label: "Photo Editing", href: "/services/photo-editing" },
            ] as const
          ).map((item) => (
            <div
              key={item.key}
              className="relative"
              onMouseEnter={() => openMega(item.key)}
              onMouseLeave={closeMegaDelayed}
            >
              <button
                type="button"
                className={`inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider transition ${
                  mega === item.key || pathname.startsWith(item.href)
                    ? "text-brand"
                    : "text-white hover:text-brand"
                }`}
                aria-expanded={mega === item.key}
                onClick={() => setMega((m) => (m === item.key ? null : item.key))}
                onFocus={() => openMega(item.key)}
              >
                {item.label}
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden>
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          ))}

          {[
            { href: "/portfolio", label: "Portfolio" },
            { href: "/pricing", label: "Pricing" },
            { href: "/about", label: "About" },
            { href: "/reviews", label: "Reviews" },
            { href: "/contact", label: "Contact" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-xs font-semibold uppercase tracking-wider transition ${
                pathname === l.href ? "text-brand" : "text-white hover:text-brand"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
            className="btn-phone"
          >
            {siteConfig.phone}
          </a>
        </div>

        <button
          type="button"
          className="focus-ring flex h-10 w-10 items-center justify-center text-white lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Full-width mega panel */}
      {megaCols && (
        <div
          className="absolute inset-x-0 top-full hidden lg:block"
          onMouseEnter={() => mega && openMega(mega)}
          onMouseLeave={closeMegaDelayed}
        >
          <div className="mega-menu mx-auto max-w-6xl border border-black/5 bg-white px-8 py-7">
            <div className="grid grid-cols-3 gap-0 divide-x divide-stone-200">
              {megaCols.map((col) => (
                <div key={col.title} className="px-6 first:pl-0 last:pr-0">
                  <p className="mb-3 text-xs font-bold uppercase tracking-wider text-ink">
                    {col.title}
                  </p>
                  <ul className="divide-y divide-stone-100">
                    {col.links.map((l) => (
                      <li key={l.label}>
                        <Link
                          href={l.href}
                          className="block py-2.5 text-sm text-stone-600 transition hover:text-brand"
                          onClick={() => setMega(null)}
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {open && (
        <div className="border-t border-white/10 bg-ink-soft px-5 py-6 lg:hidden">
          <nav className="flex flex-col gap-3 text-sm font-semibold uppercase tracking-wider text-white">
            <Link href="/services/video-editing">Video Editing</Link>
            <Link href="/services/photo-editing">Photo Editing</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/about">About</Link>
            <Link href="/reviews">Reviews</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/pricing">Packages</Link>
            <a href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`} className="btn-primary mt-2 text-center normal-case tracking-normal">
              {siteConfig.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
