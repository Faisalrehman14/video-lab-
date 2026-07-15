import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { getServiceBySlug } from "@/lib/serviceCatalog";

/** Homepage specialty set — 12 tiles, short labels, no empty grid holes */
const HOME_SPECIALTIES: { slug: string; short: string }[] = [
  { slug: "corporate", short: "Corporate" },
  { slug: "product", short: "Product" },
  { slug: "testimonial", short: "Testimonials" },
  { slug: "social-shorts", short: "Social Shorts" },
  { slug: "youtube", short: "YouTube" },
  { slug: "real-estate", short: "Real Estate" },
  { slug: "cartoonic", short: "Cartoonic" },
  { slug: "animation-2d", short: "2D Animation" },
  { slug: "animation-3d", short: "3D Animation" },
  { slug: "motion-graphics", short: "Motion Graphics" },
  { slug: "photo-catalog", short: "Photo Catalog" },
  { slug: "commerce-pathing", short: "Commerce Pathing" },
];

export function CategoryShowcase() {
  const items = HOME_SPECIALTIES.map((h) => {
    const s = getServiceBySlug(h.slug);
    return s
      ? { title: h.short, href: `/services/${s.slug}`, image: s.image }
      : null;
  }).filter(Boolean) as { title: string; href: string; image: string }[];

  return (
    <section className="border-t border-white/10 bg-ink">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
            Specialties
          </p>
          <h2 className="mt-3 font-display text-2xl font-extrabold text-white md:text-4xl">
            Popular finishing categories
          </h2>
          <p className="mt-3 text-sm text-stone-400">
            Twelve doors into the lab — full directory lives on Services.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-5">
          {items.map((c) => (
            <Link key={c.href} href={c.href} title={c.title} className="group block">
              <div className="relative isolate aspect-[4/3] overflow-hidden rounded-xl bg-stone-900">
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-500 ease-out will-change-transform group-hover:scale-105"
                  style={{ backgroundImage: `url(${c.image})` }}
                  role="img"
                  aria-label={c.title}
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/25"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute bottom-0 right-0 z-[1] h-[10rem] w-[10rem] translate-x-1/2 translate-y-1/2 scale-0 transition duration-500 ease-out group-hover:scale-100 sm:h-[11rem] sm:w-[11rem]"
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
                <span className="pointer-events-none absolute bottom-3 right-3 z-[2] translate-y-2 text-right font-display text-[10px] font-bold uppercase tracking-wide text-white opacity-0 transition duration-300 delay-75 group-hover:translate-y-0 group-hover:opacity-100 sm:text-[11px]">
                  Read More →
                </span>
              </div>
              <p className="mt-3 font-display text-sm font-bold uppercase tracking-wide text-white transition group-hover:text-brand">
                {c.title}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <ButtonLink href="/services" variant="outline">
            All 20 specialties
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
