import { commitments } from "@/lib/company";

/** Process commitments — reassurance without over-promising outcomes. */
export function CommitmentBand() {
  return (
    <section className="border-t border-white/10 bg-ink">
      <div className="section">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
              Our commitments
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-white md:text-4xl">
              What every engagement guarantees
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-stone-400">
              We don&apos;t promise vanity outcomes. We commit to the things that actually protect your
              budget and timeline — clarity, quality control, and secure delivery.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
            {commitments.map((c) => (
              <div key={c.title} className="bg-ink p-6">
                <h3 className="font-display text-base font-extrabold uppercase text-white">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-400">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
