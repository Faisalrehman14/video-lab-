import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { caseStudies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Portfolio / Work Showcase",
  description: "Case studies and work showcase from RenderReady Labs.",
};

const gallery = [
  { title: "Real Estate", bg: "linear-gradient(145deg,#1a1814,#111),radial-gradient(circle at 60% 40%,rgba(227,6,19,.3),transparent 50%)" },
  { title: "Wedding Video", bg: "linear-gradient(145deg,#1a1010,#111),radial-gradient(circle at 70% 30%,rgba(227,6,19,.4),transparent 50%)" },
  { title: "Product Catalog", bg: "linear-gradient(145deg,#221410,#111),radial-gradient(circle at 30% 70%,rgba(255,138,0,.25),transparent 50%)" },
  { title: "Corporate Film", bg: "linear-gradient(145deg,#141018,#111),radial-gradient(circle at 50% 50%,rgba(227,6,19,.28),transparent 50%)" },
  { title: "Lifestyle Retouch", bg: "linear-gradient(145deg,#1a1418,#111),radial-gradient(circle at 40% 40%,rgba(227,6,19,.2),transparent 45%)" },
  { title: "Event Highlight", bg: "linear-gradient(145deg,#181410,#111),radial-gradient(circle at 60% 60%,rgba(255,193,7,.15),transparent 45%)" },
];

export default function PortfolioPage() {
  return (
    <div className="pt-[68px]">
      <section className="bg-paper">
        <div className="section relative pb-10">
          <p className="pointer-events-none absolute right-8 top-8 hidden select-none font-display text-[6rem] font-extrabold leading-none text-stone-200/70 md:block" aria-hidden>
            PORTFOLIO
          </p>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Work showcase</p>
          <h1 className="relative mt-3 font-display text-4xl font-extrabold uppercase text-ink md:text-5xl">
            Portfolio
          </h1>
          <div className="relative mt-8">
            <ButtonLink href="/contact">Get Started Now</ButtonLink>
          </div>
          <p className="relative mt-4 text-sm text-stone-500">Home &gt; Portfolio</p>
        </div>
      </section>

      <section className="border-t border-stone-200 bg-white">
        <div className="section pt-12">
          <div className="flex flex-wrap gap-2">
            {["All", "Video Editing", "Photo Editing"].map((f, i) => (
              <span
                key={f}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium ${
                  i === 0 ? "border-brand bg-brand text-white" : "border-stone-300 text-stone-600"
                }`}
              >
                {f}
              </span>
            ))}
          </div>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((g) => (
              <article key={g.title}>
                <div className="relative overflow-hidden">
                  <div className="aspect-[16/10]" style={{ backgroundImage: g.bg }} role="img" aria-label={g.title} />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white shadow-lg">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                        <path d="M8 5v14l11-7L8 5z" />
                      </svg>
                    </span>
                  </span>
                </div>
                <h2 className="mt-4 text-center font-display text-sm font-bold uppercase tracking-wide text-ink">
                  {g.title}
                </h2>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-stone-200 bg-paper">
        <div className="section">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="section-badge">Success stories</span>
              <h2 className="mt-4 font-display text-3xl font-extrabold text-ink md:text-4xl">
                Case Studies
              </h2>
            </div>
            <ButtonLink href="/contact">Start a Project</ButtonLink>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {caseStudies.map((c) => (
              <CaseStudyCard key={c.title} {...c} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
