"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  className?: string;
  /** Compact chrome for side panels */
  compact?: boolean;
};

export function HeroReel({ className = "", compact = false }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    const play = v.play();
    if (play && typeof play.catch === "function") {
      play.catch(() => {
        /* autoplay may be blocked — user can tap */
      });
    }
  }, []);

  const toggleMute = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    if (v.paused) void v.play();
  };

  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-white/15 bg-black shadow-[0_30px_80px_rgba(0,0,0,0.65)] ${className}`}
    >
      <video
        ref={ref}
        className="h-full w-full object-cover"
        src="/hero-reel.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label="RenderReady Labs finish reel"
      />

      {/* Soft edge vignette */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/25"
        aria-hidden
      />

      <div
        className={`absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 ${
          compact ? "p-3" : "p-4 md:p-5"
        }`}
      >
        <div>
          <p className="font-display text-xs font-extrabold uppercase tracking-[0.22em] text-white md:text-sm">
            Finish Reel ’26
          </p>
          {!compact && (
            <p className="mt-1 text-[11px] text-stone-300">Campaign · Commerce · Demo cuts</p>
          )}
        </div>
        <button
          type="button"
          onClick={toggleMute}
          className="rounded-full border border-white/20 bg-black/50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-white backdrop-blur transition hover:border-brand hover:bg-brand"
          aria-label={muted ? "Unmute video" : "Mute video"}
        >
          {muted ? "Unmute" : "Mute"}
        </button>
      </div>

      <div className="absolute left-3 top-3 h-8 w-8 border-l-2 border-t-2 border-brand" aria-hidden />
    </div>
  );
}
