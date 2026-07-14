import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";

export const metadata: Metadata = {
  title: "Client Reviews",
  description: "Client testimonials for RenderReady Labs.",
};

const reviews = [
  {
    quote:
      "Clear scope, clear price, and the Pro Narrative cut landed exactly on brand. Revisions were structured — no surprise fees.",
    name: "Maya Chen",
    role: "Head of Brand",
    company: "Vera Goods",
  },
  {
    quote:
      "We needed 200+ path outs for a relaunch. Commerce Studio delivery matched the turnaround published on the site.",
    name: "Jordan Blake",
    role: "E-commerce Lead",
    company: "Pulse Athletic",
  },
  {
    quote:
      "Retainer made weekly product demos sustainable. Cancel was simple when our campaign paused.",
    name: "Sam Ortiz",
    role: "Product Marketing",
    company: "Kinetic Co",
  },
  {
    quote:
      "Stripe checkout showed the same USD amount as the package page. Finance loved that transparency.",
    name: "Priya Nair",
    role: "Operations Manager",
    company: "Harbor Studio",
  },
];

export default function ReviewsPage() {
  return (
    <div className="pt-[68px]">
      <section className="bg-ink">
        <div className="section pb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Clients feedback
          </p>
          <h1 className="mt-3 font-display text-4xl font-extrabold uppercase text-white md:text-5xl">
            What Our Clients Say
          </h1>
          <p className="mt-4 max-w-xl text-stone-400">
            Sample testimonials for demonstration — replace with verified reviews in production.
          </p>
        </div>
      </section>

      <section className="border-t border-stone-200 bg-white">
        <div className="section grid gap-5 md:grid-cols-2">
          {reviews.map((r, i) => (
            <blockquote
              key={r.name}
              className={`flex flex-col justify-between border p-6 md:p-8 ${
                i % 2 === 1 ? "border-ink bg-ink text-white" : "border-stone-200 bg-paper text-ink"
              }`}
            >
              <p className="text-base leading-relaxed">&ldquo;{r.quote}&rdquo;</p>
              <footer
                className={`mt-6 border-t pt-4 ${i % 2 === 1 ? "border-white/10" : "border-stone-200"}`}
              >
                <p className="font-display font-bold">{r.name}</p>
                <p className={`text-sm ${i % 2 === 1 ? "text-stone-400" : "text-stone-500"}`}>
                  {r.role}, {r.company}{" "}
                  <span className="ml-1 text-xs opacity-70">(Sample)</span>
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
        <div className="section pt-0 text-center">
          <ButtonLink href="/contact">Work with us</ButtonLink>
        </div>
      </section>
    </div>
  );
}
