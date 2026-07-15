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
 * Dark masonry category gallery with clear round red “Read More” corner hover.
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
              {/* isolate keeps overflow + radius clipping stable on hover */}
              <div
                className={`relative isolate overflow-hidden rounded-xl bg-stone-900 ${heightClass[c.aspect]}`}
              >
                {/* Photo — no filter:blur (breaks rounded clip). Dim overlay used instead. */}
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

                {/*
                  Corner chip sized so “Read More →” sits fully inside the red arc.
                */}
                <div
                  className="pointer-events-none absolute bottom-0 right-0 z-[1] h-[12.5rem] w-[12.5rem] translate-x-1/2 translate-y-1/2 scale-0 transition duration-500 ease-out group-hover:scale-100 sm:h-[13.5rem] sm:w-[13.5rem]"
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

                <span className="pointer-events-none absolute bottom-3.5 right-3.5 z-[2] max-w-[5.5rem] translate-y-2 text-right font-display text-[11px] font-bold uppercase leading-snug tracking-wide text-white opacity-0 transition duration-300 delay-75 group-hover:translate-y-0 group-hover:opacity-100 sm:bottom-4 sm:right-4 sm:max-w-[6.5rem] sm:text-xs">
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
