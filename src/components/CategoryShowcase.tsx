import Link from "next/link";
import { categories } from "@/lib/content";
import { ButtonLink } from "@/components/ButtonLink";

/** Mixed heights so masonry tiles aren’t uniform */
const heightClass = {
  short: "h-[200px] sm:h-[220px]",
  mid: "h-[280px] sm:h-[300px]",
  tall: "h-[360px] sm:h-[400px]",
  wide: "h-[240px] sm:h-[260px]",
} as const;

/**
 * Dark masonry category gallery with VC-style red “Read More” corner hover.
 */
export function CategoryShowcase() {
  return (
    <section className="border-t border-white/10 bg-ink">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl font-extrabold uppercase leading-tight text-white md:text-4xl">
            Some of the popular work
            <span className="mt-1 block">categories we support</span>
          </h2>
        </div>

        <div className="mt-12 columns-1 gap-x-5 sm:columns-2 sm:gap-x-6 lg:columns-3 lg:gap-x-7 xl:columns-4">
          {categories.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              title={c.title}
              className="group mb-7 block break-inside-avoid sm:mb-8"
            >
              <div
                className={`relative overflow-hidden rounded-xl bg-stone-900 ${heightClass[c.aspect]}`}
              >
                {/* Photo */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-500 ease-out group-hover:scale-105 group-hover:blur-[2px]"
                  style={{ backgroundImage: `url(${c.image})` }}
                  role="img"
                  aria-label={c.title}
                />

                {/* Soft base gradient */}
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
                  aria-hidden
                />

                {/* Shaded red corner — bottom right */}
                <div
                  className="pointer-events-none absolute -bottom-[50%] -right-[50%] h-[120%] w-[120%] origin-bottom-right scale-0 rounded-full opacity-0 transition duration-500 ease-out group-hover:scale-100 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle at 100% 100%, rgba(227,6,19,0.95) 0%, rgba(227,6,19,0.75) 28%, rgba(180,0,12,0.45) 48%, rgba(227,6,19,0.12) 62%, transparent 72%)",
                  }}
                  aria-hidden
                />

                {/* Soft light edge on the red for shading depth */}
                <div
                  className="pointer-events-none absolute bottom-0 right-0 h-28 w-28 opacity-0 transition duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle at 85% 85%, rgba(255,255,255,0.22) 0%, transparent 55%)",
                  }}
                  aria-hidden
                />

                {/* Read More label inside red corner */}
                <span className="pointer-events-none absolute bottom-4 right-4 z-10 translate-y-2 text-right font-display text-xs font-bold uppercase tracking-wide text-white opacity-0 drop-shadow-[0_1px_8px_rgba(0,0,0,0.45)] transition duration-300 delay-75 group-hover:translate-y-0 group-hover:opacity-100 sm:text-sm">
                  Read More →
                </span>
              </div>

              <p className="mt-3 font-display text-sm font-bold uppercase tracking-wide text-white transition group-hover:text-brand md:text-[15px]">
                {c.title}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <ButtonLink href="/services" variant="outline">
            All Services
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
