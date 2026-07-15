import Link from "next/link";
import { categories } from "@/lib/content";
import { ButtonLink } from "@/components/ButtonLink";

const aspectClass = {
  tall: "aspect-[3/4]",
  mid: "aspect-[4/5]",
  wide: "aspect-[16/10]",
} as const;

/**
 * Dark masonry category gallery — VideoCaddy-inspired image grid, RenderReady branding.
 */
export function CategoryShowcase() {
  return (
    <section className="border-t border-white/10 bg-ink">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand">
            Categories
          </p>
          <h2 className="mt-4 font-display text-2xl font-extrabold uppercase leading-tight text-white md:text-4xl">
            Some of the popular work categories we support
          </h2>
          <p className="mt-4 text-sm text-stone-400 md:text-base">
            Remote finishing across video, photo, and audio — pick a category to see scoped
            delivery options.
          </p>
        </div>

        <div className="mt-12 columns-1 gap-x-6 sm:columns-2 lg:columns-3">
          {categories.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="group mb-8 block break-inside-avoid"
            >
              <div
                className={`relative overflow-hidden bg-stone-900 ${aspectClass[c.aspect]}`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700 ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url(${c.image})` }}
                  role="img"
                  aria-label={c.title}
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10 opacity-80 transition group-hover:opacity-95"
                  aria-hidden
                />
                <span className="pointer-events-none absolute left-3 top-3 h-8 w-8 border-l-2 border-t-2 border-brand opacity-0 transition group-hover:opacity-100" />
              </div>
              <p className="mt-3 font-display text-sm font-bold uppercase tracking-wide text-white transition group-hover:text-brand md:text-base">
                {c.title}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-4 flex justify-center">
          <ButtonLink href="/services" variant="outline">
            All Services
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
