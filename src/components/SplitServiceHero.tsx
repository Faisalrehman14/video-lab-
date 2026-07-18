import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ButtonLink";
import { HeroReel } from "@/components/HeroReel";

type Props = {
  eyebrow: string;
  watermark?: string;
  title: ReactNode;
  description: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  policyLinks?: ReactNode;
  reelSrc?: string;
  reelYoutubeId?: string;
  reelLabel?: string;
  reelCaption?: string;
};

/**
 * Split service hero — light copy rail + dark media rail with overlapping reel.
 * Inspired by agency corporate pages; composition unique to RenderReady.
 */
export function SplitServiceHero({
  eyebrow,
  watermark = "8+ YEARS",
  title,
  description,
  primaryCta = { href: "/contact", label: "Contact Us" },
  secondaryCta,
  policyLinks,
  reelSrc,
  reelYoutubeId,
  reelLabel,
  reelCaption,
}: Props) {
  const reel = (
    <HeroReel
      className="aspect-video w-full !rounded-none !border-0 !shadow-none"
      src={reelSrc}
      youtubeId={reelYoutubeId}
      label={reelLabel}
      caption={reelCaption}
    />
  );

  return (
    <section className="relative overflow-hidden">
      <div className="grid min-h-[72vh] lg:grid-cols-[1.15fr_0.85fr]">
        {/* Light copy side */}
        <div className="relative flex flex-col justify-center bg-paper px-5 py-14 md:px-12 lg:py-20">
          <p
            className="pointer-events-none absolute left-2 top-24 hidden select-none font-display text-[5.5rem] font-extrabold leading-none text-stone-200/90 [writing-mode:vertical-rl] rotate-180 xl:block"
            aria-hidden
          >
            {watermark}
          </p>

          <div className="relative z-10 max-w-xl xl:ml-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand">
              {eyebrow}
            </p>
            <h1 className="mt-4 font-display text-[2rem] font-extrabold uppercase leading-[1.1] text-ink sm:text-4xl md:text-[2.65rem]">
              {title}
            </h1>
            <p className="mt-5 text-sm leading-relaxed text-stone-600 md:text-base">{description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink>
              {secondaryCta && (
                <ButtonLink href={secondaryCta.href} variant="outline">
                  {secondaryCta.label}
                </ButtonLink>
              )}
            </div>
            {policyLinks && <div className="mt-6 text-xs text-stone-500">{policyLinks}</div>}
          </div>
        </div>

        {/* Dark media rail — reel overlaps paper/ink seam like agency corporate heroes */}
        <div className="relative hidden min-h-[520px] bg-ink lg:block">
          <div className="absolute left-[-28%] top-1/2 z-10 w-[118%] max-w-none -translate-y-1/2 overflow-hidden shadow-[0_28px_70px_rgba(0,0,0,0.45)] ring-1 ring-black/30">
            {reel}
          </div>
        </div>
      </div>

      {/* Mobile media */}
      <div className="bg-ink px-5 py-8 lg:hidden">
        <div className="relative mx-auto max-w-lg overflow-hidden shadow-xl">
          <HeroReel
            className="aspect-video w-full !rounded-md"
            compact
            src={reelSrc}
            youtubeId={reelYoutubeId}
            label={reelLabel}
            caption={reelCaption}
          />
        </div>
      </div>
    </section>
  );
}
