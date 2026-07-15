import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { proofImages } from "@/lib/images";

const proofs = [
  {
    title: "Campaign film + social suite",
    tag: "DTC apparel",
    image: proofImages.campaign,
    href: "/portfolio",
  },
  {
    title: "220-SKU commerce pathing",
    tag: "Marketplace",
    image: proofImages.commerce,
    href: "/services/commerce-pathing",
  },
  {
    title: "SaaS demo + vertical cuts",
    tag: "Product marketing",
    image: proofImages.saas,
    href: "/services/saas-demo",
  },
];

/** Three proof stills — real-work visual anchor after the hero */
export function ProofStrip() {
  return (
    <section className="border-t border-white/10 bg-[#0a0a0a]">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
              Recent finish
            </p>
            <h2 className="mt-3 font-display text-2xl font-extrabold text-white md:text-3xl">
              Proof that ships
            </h2>
            <p className="mt-2 max-w-md text-sm text-stone-400">
              Still frames from remote finishing jobs — campaign, catalog, and product demo.
            </p>
          </div>
          <ButtonLink href="/portfolio" variant="outline">
            View portfolio
          </ButtonLink>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {proofs.map((p) => (
            <Link key={p.title} href={p.href} className="group relative block overflow-hidden">
              <div className="relative aspect-[4/5] overflow-hidden bg-stone-900 sm:aspect-[3/4]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700 ease-out group-hover:scale-[1.04]"
                  style={{ backgroundImage: `url(${p.image})` }}
                  role="img"
                  aria-label={p.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand">
                    {p.tag}
                  </p>
                  <p className="mt-2 font-display text-lg font-bold leading-snug text-white">
                    {p.title}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
