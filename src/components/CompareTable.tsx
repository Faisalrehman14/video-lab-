import { comparison } from "@/lib/company";

/** Doubt-clearing comparison vs freelancer and in-house hire. */
export function CompareTable() {
  return (
    <section className="border-t border-stone-200 bg-white">
      <div className="section">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
            Why a finishing lab
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-ink md:text-4xl">
            Compared to the alternatives
          </h2>
          <p className="mt-3 text-sm text-stone-600 md:text-base">
            A dedicated remote lab sits between a single freelancer and a full in-house team — the
            capacity of a studio with the clarity of a fixed scope.
          </p>
        </div>

        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-stone-200">
                <th className="py-4 pr-4 text-xs font-semibold uppercase tracking-wide text-stone-400">
                  Factor
                </th>
                <th className="bg-ink px-4 py-4 font-display text-sm font-extrabold uppercase text-white">
                  RenderReady Labs
                </th>
                <th className="px-4 py-4 text-sm font-semibold uppercase tracking-wide text-stone-500">
                  Solo freelancer
                </th>
                <th className="px-4 py-4 text-sm font-semibold uppercase tracking-wide text-stone-500">
                  In-house hire
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.factor} className="border-b border-stone-100 align-top">
                  <td className="py-4 pr-4 text-sm font-semibold text-ink">{row.factor}</td>
                  <td className="bg-brand-soft px-4 py-4 text-sm font-medium text-ink">
                    <span className="mr-1.5 text-brand" aria-hidden>
                      ✓
                    </span>
                    {row.us}
                  </td>
                  <td className="px-4 py-4 text-sm text-stone-500">{row.freelancer}</td>
                  <td className="px-4 py-4 text-sm text-stone-500">{row.inhouse}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
