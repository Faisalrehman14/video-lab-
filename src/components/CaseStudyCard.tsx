import Link from "next/link";

type Case = {
  tag: string;
  title: string;
  body: string;
  dark?: boolean;
  href?: string;
};

export function CaseStudyCard({
  tag,
  title,
  body,
  dark,
  href = "/portfolio",
}: Case) {
  return (
    <article
      className={`flex h-full flex-col border p-6 md:p-8 ${
        dark ? "border-ink bg-ink text-white" : "border-stone-200 bg-white text-ink"
      }`}
    >
      <p
        className={`text-xs font-semibold uppercase tracking-[0.15em] ${
          dark ? "text-stone-400" : "text-stone-500"
        }`}
      >
        {tag}
      </p>
      <div className={`mt-3 h-px w-full ${dark ? "bg-white/15" : "bg-stone-200"}`} />
      <h3 className="mt-5 font-display text-lg font-bold leading-snug md:text-xl">{title}</h3>
      <p className={`mt-4 flex-1 text-sm leading-relaxed ${dark ? "text-stone-300" : "text-stone-600"}`}>
        {body}
      </p>
      <Link
        href={href}
        className={`mt-6 inline-flex items-center gap-1 text-sm font-semibold ${
          dark ? "text-brand hover:underline" : "text-ink hover:text-brand"
        }`}
      >
        View more →
      </Link>
    </article>
  );
}
