import Link from "next/link";
import { siteConfig } from "@/lib/site";

const legalNav = [
  { href: "/legal/terms", label: "Terms & Conditions" },
  { href: "/legal/privacy", label: "Privacy Policy" },
  { href: "/legal/refund", label: "Refund Policy" },
  { href: "/legal/return", label: "Return Policy" },
  { href: "/legal/cancellation", label: "Cancellation Policy" },
  { href: "/legal/disclaimer", label: "Disclaimer" },
  { href: "/legal/disputes", label: "Chargebacks & Disputes" },
];

type Props = {
  title: string;
  updated?: string;
  children: React.ReactNode;
};

export function LegalLayout({ title, updated = "July 14, 2026", children }: Props) {
  return (
    <div className="bg-paper pt-24">
      <div className="section grid gap-12 lg:grid-cols-[220px_1fr]">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">Legal</p>
          <nav className="mt-4 flex flex-col gap-2" aria-label="Legal pages">
            {legalNav.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm text-stone-600 hover:text-brand">
                {l.label}
              </Link>
            ))}
          </nav>
        </aside>
        <article className="border border-stone-200 bg-white p-6 md:p-10">
          <h1 className="text-3xl font-extrabold text-ink md:text-4xl">{title}</h1>
          <p className="mt-2 text-sm text-stone-500">
            {siteConfig.legalName} · Last updated {updated}
          </p>
          <div className="prose-legal mt-10">{children}</div>
        </article>
      </div>
    </div>
  );
}
