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
                  Solid round disc (half outside). Parent overflow + rounded-xl
                  reveals a clean quarter-circle curve on every tile size.
                */}
                <div
                  className="pointer-events-none absolute bottom-0 right-0 z-[1] h-[145%] w-[145%] translate-x-[42%] translate-y-[42%] scale-0 transition duration-500 ease-out group-hover:scale-100"
                  aria-hidden
                >
                  <div
                    className="h-full w-full rounded-full shadow-[inset_8px_8px_24px_rgba(255,255,255,0.12),inset_-10px_-14px_28px_rgba(0,0,0,0.35)]"
                    style={{
                      background:
                        "radial-gradient(circle at 32% 32%, #ff3340 0%, #e30613 42%, #b00510 72%, #8a0410 100%)",
                    }}
                  />
                </div>

                <span className="pointer-events-none absolute bottom-4 right-4 z-[2] translate-y-2 text-right font-display text-xs font-bold uppercase tracking-wide text-white opacity-0 transition duration-300 delay-75 group-hover:translate-y-0 group-hover:opacity-100 sm:text-sm">
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
