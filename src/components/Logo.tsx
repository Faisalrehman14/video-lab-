import Link from "next/link";
import { BrandMark } from "./BrandMark";
import { siteConfig } from "@/lib/site";

type LogoProps = {
  className?: string;
  href?: string;
  size?: "sm" | "md" | "lg";
  light?: boolean;
  showTagline?: boolean;
};

const sizes = {
  sm: { icon: 36, name: "text-[15px] md:text-base", tag: "text-[8px] md:text-[9px]", gap: "gap-2.5" },
  md: { icon: 44, name: "text-lg md:text-xl", tag: "text-[10px]", gap: "gap-3" },
  lg: { icon: 56, name: "text-2xl md:text-3xl", tag: "text-xs", gap: "gap-3.5" },
};

export function Logo({
  className = "",
  href = "/",
  size = "md",
  light = true,
  showTagline = true,
}: LogoProps) {
  const s = sizes[size];
  const word = light ? "text-white" : "text-ink";
  const muted = light ? "text-stone-400" : "text-stone-500";

  const content = (
    <span className={`inline-flex items-center ${s.gap} ${className}`}>
      <BrandMark size={s.icon} />
      <span className="flex flex-col justify-center leading-none">
        <span
          className={`font-display font-extrabold uppercase tracking-[0.06em] ${word} ${s.name}`}
        >
          Render<span className="text-brand">Ready</span>
          <span className={`ml-1.5 font-semibold tracking-[0.12em] ${muted}`}>Labs</span>
        </span>
        {showTagline && (
          <span className={`mt-1.5 font-medium tracking-[0.18em] ${muted} ${s.tag} uppercase`}>
            {siteConfig.logoTagline}
          </span>
        )}
      </span>
    </span>
  );

  if (href) {
    return (
      <Link href={href} className="focus-ring rounded-lg" aria-label="RenderReady Labs home">
        {content}
      </Link>
    );
  }
  return content;
}
