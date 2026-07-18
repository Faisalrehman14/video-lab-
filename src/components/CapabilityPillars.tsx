import Link from "next/link";
import { capabilities } from "@/lib/company";

/** What we offer — four production surfaces, dark editorial band. */
export function CapabilityPillars() {
  return (
    <section className="border-t border-white/10 bg-ink">
      <div className="section">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
            What we finish
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-white md:text-4xl">
            One lab, four finishing surfaces
          </h2>
          <p className="mt-3 text-sm text-stone-400 md:text-base">
            Brief video, photo, motion, or audio — or all four under one scope. Every surface ships
            to platform spec with your brand locked in.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c, i) => (
            <div
              key={c.id}
              className="group flex flex-col border border-white/10 bg-white/[0.02] p-6 transition hover:border-brand/60"
            >
              <p className="font-display text-4xl font-extrabold text-white/10">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-display text-lg font-extrabold uppercase text-white">
                {c.title}
              </h3>
              <p className="mt-1 text-sm text-brand">{c.tagline}</p>
              <ul className="mt-4 flex-1 space-y-2">
                {c.points.map((p) => (
                  <li key={p} className="flex gap-2 text-sm leading-snug text-stone-300">
                    <span className="mt-[3px] text-brand" aria-hidden>
                      ▸
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <Link
                href={c.href}
                className="mt-5 inline-block text-xs font-semibold uppercase tracking-wide text-white transition group-hover:text-brand"
              >
                {c.cta} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
