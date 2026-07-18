import Link from "next/link";
import { engagementModels } from "@/lib/company";

/** The business model — three clear ways to buy. */
export function EngagementModels() {
  return (
    <section className="border-t border-stone-200 bg-paper">
      <div className="section">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
            How to engage
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-ink md:text-4xl">
            Three ways to work with us
          </h2>
          <p className="mt-3 text-sm text-stone-600 md:text-base">
            One-off, flexible, or always-on — the pricing model flexes to the work, and every path
            is confirmed in USD before you pay.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {engagementModels.map((m) => (
            <div
              key={m.id}
              className={`flex flex-col border p-6 md:p-7 ${
                m.featured
                  ? "border-brand bg-ink text-white shadow-card"
                  : "border-stone-200 bg-white text-ink"
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-display text-lg font-extrabold uppercase">{m.name}</h3>
                {m.featured && (
                  <span className="bg-brand px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                    Popular
                  </span>
                )}
              </div>
              <p
                className={`mt-1 text-[11px] font-semibold uppercase tracking-wide ${
                  m.featured ? "text-brand" : "text-brand"
                }`}
              >
                {m.best}
              </p>
              <p
                className={`mt-4 text-sm leading-relaxed ${
                  m.featured ? "text-stone-300" : "text-stone-600"
                }`}
              >
                {m.summary}
              </p>
              <ul className="mt-5 flex-1 space-y-2">
                {m.points.map((p) => (
                  <li
                    key={p}
                    className={`flex gap-2 text-sm ${
                      m.featured ? "text-stone-200" : "text-stone-600"
                    }`}
                  >
                    <span className="mt-[3px] text-brand" aria-hidden>
                      ✓
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <Link
                href={m.cta.href}
                className={`mt-6 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold uppercase tracking-wide transition ${
                  m.featured
                    ? "bg-brand text-white hover:bg-brand-dark"
                    : "border-2 border-ink text-ink hover:bg-ink hover:text-white"
                }`}
              >
                {m.cta.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
