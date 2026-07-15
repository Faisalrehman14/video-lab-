import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { serviceCatalog } from "@/lib/serviceCatalog";

type TileSize = "feature" | "tall" | "wide" | "sm";

/** Short gallery labels */
const SHORT: Record<string, string> = {
  corporate: "Corporate",
  product: "Product",
  testimonial: "Testimonials",
  "real-estate": "Real Estate",
  "social-shorts": "Social Shorts",
  youtube: "YouTube",
  "saas-demo": "SaaS Demos",
  "wedding-event": "Wedding / Event",
  "sales-pitch": "Sales Pitch",
  interview: "Interview",
  campaign: "Campaign",
  travel: "Travel",
  "photo-catalog": "Photo Catalog",
  "commerce-pathing": "Commerce Pathing",
  headshots: "Headshots",
  cartoonic: "Cartoonic",
  "animation-2d": "2D Animation",
  "animation-3d": "3D Animation",
  "motion-graphics": "Motion Graphics",
  "color-grading": "Color Grading",
};

/**
 * Intentional rhythm — not every tile equal.
 * feature = hero, tall = vertical, wide = landscape band, sm = compact.
 */
const SIZE: Record<string, TileSize> = {
  corporate: "feature",
  product: "wide",
  testimonial: "tall",
  "social-shorts": "sm",
  youtube: "sm",
  "real-estate": "tall",
  "saas-demo": "sm",
  "wedding-event": "wide",
  "sales-pitch": "sm",
  interview: "tall",
  campaign: "sm",
  travel: "sm",
  "photo-catalog": "tall",
  "commerce-pathing": "wide",
  headshots: "sm",
  cartoonic: "sm",
  "animation-2d": "tall",
  "animation-3d": "sm",
  "motion-graphics": "wide",
  "color-grading": "sm",
};

const tileClass: Record<TileSize, string> = {
  feature:
    "min-h-[280px] sm:min-h-[300px] md:col-span-2 md:row-span-2 md:min-h-0",
  tall: "min-h-[240px] sm:min-h-[260px] md:row-span-2 md:min-h-0",
  wide: "min-h-[200px] sm:min-h-[220px] md:col-span-2 md:min-h-0",
  sm: "min-h-[180px] sm:min-h-[200px] md:min-h-0",
};

/**
 * All specialties — mixed-size dense gallery (bento / masonry feel).
 * Titles live on the image so spans stay clean with no empty holes.
 */
export function CategoryShowcase() {
  const items = serviceCatalog.map((s) => ({
    title: SHORT[s.slug] ?? s.label,
    href: `/services/${s.slug}`,
    image: s.image,
    size: SIZE[s.slug] ?? "sm",
  }));

  return (
    <section className="border-t border-white/10 bg-ink">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
            Specialties
          </p>
          <h2 className="mt-3 font-display text-2xl font-extrabold text-white md:text-4xl">
            Every finishing category we run
          </h2>
          <p className="mt-3 text-sm text-stone-400">
            {items.length} professions — mixed tiles, one clear door into each scope.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-flow-dense md:grid-cols-4 md:auto-rows-[150px] lg:auto-rows-[160px] lg:gap-5">
          {items.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              title={c.title}
              className={`group relative isolate block overflow-hidden rounded-xl bg-stone-900 ${tileClass[c.size]}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={
                  c.image.includes("crop=")
                    ? c.image
                    : `${c.image}${c.image.includes("?") ? "&" : "?"}crop=faces`
                }
                alt=""
                className="absolute inset-0 h-full w-full object-cover object-[center_28%] transition duration-700 ease-out will-change-transform group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />

              <div
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent transition duration-500 group-hover:from-black/95"
                aria-hidden
              />

              <div
                className="pointer-events-none absolute bottom-0 right-0 z-[1] h-[10rem] w-[10rem] translate-x-1/2 translate-y-1/2 scale-0 transition duration-500 ease-out group-hover:scale-100 sm:h-[11.5rem] sm:w-[11.5rem]"
                aria-hidden
              >
                <div
                  className="h-full w-full rounded-full shadow-[inset_6px_6px_16px_rgba(255,255,255,0.14),inset_-8px_-10px_20px_rgba(0,0,0,0.35)]"
                  style={{
                    background:
                      "radial-gradient(circle at 32% 32%, #ff3340 0%, #e30613 42%, #b00510 72%, #8a0410 100%)",
                  }}
                />
              </div>

              <div className="absolute inset-x-0 bottom-0 z-[2] flex items-end justify-between gap-3 p-4 sm:p-5">
                <p
                  className={`font-display font-extrabold uppercase leading-tight tracking-wide text-white transition group-hover:text-white ${
                    c.size === "feature"
                      ? "text-lg sm:text-2xl"
                      : c.size === "wide" || c.size === "tall"
                        ? "text-base sm:text-lg"
                        : "text-sm sm:text-[15px]"
                  }`}
                >
                  {c.title}
                </p>
                <span className="shrink-0 translate-y-1 font-display text-[10px] font-bold uppercase tracking-wide text-white opacity-0 transition duration-300 delay-75 group-hover:translate-y-0 group-hover:opacity-100 sm:text-[11px]">
                  Read More →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <ButtonLink href="/services" variant="outline">
            Open full services directory
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
