import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { HeroReel } from "./HeroReel";

/**
 * Main hero media — widescreen finish reel framed like a real edit monitor.
 */
export function FinishBayVisual() {
  return (
    <div className="relative mx-auto w-full max-w-2xl lg:max-w-none">
      {/* Soft stage glow behind the screen */}
      <div
        className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-brand/10 blur-3xl"
        aria-hidden
      />

      {/* Monitor chrome / bezel */}
      <div className="relative rounded-xl bg-gradient-to-b from-stone-700 via-stone-900 to-black p-[3px] shadow-[0_40px_90px_rgba(0,0,0,0.65)] ring-1 ring-white/10">
        <div className="rounded-[10px] bg-black p-1.5 sm:p-2">
          {/* Thin top bar — studio panel feel */}
          <div className="mb-1.5 flex items-center justify-between px-1 sm:mb-2">
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              <span className="h-1.5 w-1.5 rounded-full bg-stone-600" />
              <span className="h-1.5 w-1.5 rounded-full bg-stone-600" />
            </div>
            <p className="font-display text-[9px] font-semibold uppercase tracking-[0.24em] text-stone-500">
              Monitor · 16:9
            </p>
          </div>

          <HeroReel className="aspect-video w-full !rounded-md !shadow-none" />
        </div>
      </div>

      {/* Slim stand cue */}
      <div className="mx-auto mt-3 h-1.5 w-16 rounded-full bg-stone-800" aria-hidden />

      <div className="absolute -bottom-3 left-0 hidden rounded-lg border border-white/10 bg-ink/90 px-3 py-2 shadow-xl backdrop-blur sm:block">
        <p className="text-[9px] font-semibold uppercase tracking-wider text-stone-400">Status</p>
        <p className="font-display text-sm font-bold text-white">
          Reel live <span className="text-brand">●</span>
        </p>
      </div>
    </div>
  );
}

export function HeroQuickActions() {
  const actions = [
    {
      href: "/contact",
      label: "Brief us",
      icon: (
        <path
          d="M4 6h16v12H4V6zm0 0l8 6 8-6"
          stroke="currentColor"
          strokeWidth="1.6"
          fill="none"
        />
      ),
    },
    {
      href: `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`,
      label: siteConfig.phone.replace("+1 ", ""),
      icon: (
        <path
          d="M7 3h3l1.5 4-2 1.5a12 12 0 006 6L17 13l4 1.5V18a2 2 0 01-2 2A15 15 0 015 5a2 2 0 012-2z"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
      ),
    },
    {
      href: `mailto:${siteConfig.email}`,
      label: "Email",
      icon: (
        <path
          d="M4 7h16v10H4V7zm0 0l8 6 8-6"
          stroke="currentColor"
          strokeWidth="1.6"
          fill="none"
        />
      ),
    },
    {
      href: "/pricing",
      label: "Packages",
      icon: (
        <path
          d="M4 8h16v11H4V8zm2-3h12l1 3H5l1-3z"
          stroke="currentColor"
          strokeWidth="1.6"
          fill="none"
        />
      ),
    },
  ];

  return (
    <div className="mt-9 flex flex-wrap gap-2">
      {actions.map((a) => (
        <Link
          key={a.label}
          href={a.href}
          className="group inline-flex min-w-[7.5rem] flex-col items-start gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-3 transition hover:border-brand/60 hover:bg-brand/10"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            className="text-stone-400 group-hover:text-brand"
            aria-hidden
          >
            {a.icon}
          </svg>
          <span className="text-[11px] font-semibold uppercase tracking-wide text-stone-300 group-hover:text-white">
            {a.label}
          </span>
        </Link>
      ))}
    </div>
  );
}
