import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { caseStudies } from "@/lib/content";
import { portfolioImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Portfolio / Work Showcase",
  description: "Case studies and work showcase from RenderReady Labs.",
};

const gallery = [
  { title: "Real Estate", image: portfolioImages["Real Estate"] },
  { title: "Wedding Video", image: portfolioImages["Wedding Video"] },
  { title: "Product Catalog", image: portfolioImages["Product Catalog"] },
  { title: "Corporate Film", image: portfolioImages["Corporate Film"] },
  { title: "Lifestyle Retouch", image: portfolioImages["Lifestyle Retouch"] },
  { title: "Event Highlight", image: portfolioImages["Event Highlight"] },
] as const;

export default function PortfolioPage() {
  return (
    <div className="pt-[68px]">
      <section className="bg-paper">
        <div className="section relative pb-10">
          <p
            className="pointer-events-none absolute right-8 top-8 hidden select-none font-display text-[6rem] font-extrabold leading-none text-stone-200/70 md:block"
            aria-hidden
          >
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
                  <div
                    className="aspect-[16/10] bg-cover bg-center bg-stone-200"
                    style={{ backgroundImage: `url(${g.image})` }}
                    role="img"
                    aria-label={g.title}
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-black/25 transition hover:bg-black/40">
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
