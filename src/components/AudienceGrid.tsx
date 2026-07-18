import { audiences } from "@/lib/company";

/** Who we serve — helps visitors self-identify. */
export function AudienceGrid() {
  return (
    <section className="border-t border-stone-200 bg-white">
      <div className="section">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
              Who we work with
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-ink md:text-4xl">
              Built for teams that ship online
            </h2>
          </div>
          <p className="max-w-sm text-sm text-stone-600">
            If your work lives on a storefront, a feed, a listing, or a sales deck — it belongs in
            the finishing queue.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden border border-stone-200 bg-stone-200 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((a) => (
            <div key={a.title} className="group bg-white p-6 transition hover:bg-paper">
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 shrink-0 bg-brand" aria-hidden />
                <div>
                  <h3 className="font-display text-base font-extrabold uppercase text-ink">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">{a.need}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
