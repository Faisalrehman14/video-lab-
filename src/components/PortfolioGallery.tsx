"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import type { PortfolioItem } from "@/lib/portfolio";

type Props = {
  items: PortfolioItem[];
  categories: readonly string[];
};

export function PortfolioGallery({ items, categories }: Props) {
  const [active, setActive] = useState("All");
  const [open, setOpen] = useState<PortfolioItem | null>(null);

  const visible = useMemo(
    () => (active === "All" ? items : items.filter((i) => i.category === active)),
    [items, active],
  );

  const close = useCallback(() => setOpen(null), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Filter work">
        {["All", ...categories].map((chip) => {
          const isActive = chip === active;
          return (
            <button
              key={chip}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(chip)}
              className={`rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] transition ${
                isActive
                  ? "border-brand bg-brand text-white"
                  : "border-stone-300 text-stone-600 hover:border-ink hover:text-ink"
              }`}
            >
              {chip}
            </button>
          );
        })}
        <span className="ml-auto hidden text-xs text-stone-400 sm:block">
          {visible.length} {visible.length === 1 ? "project" : "projects"}
        </span>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((item) => {
          const playable = Boolean(item.youtubeId || item.videoSrc);
          return (
            <article key={item.id} className="group flex flex-col">
              <button
                type="button"
                onClick={() => playable && setOpen(item)}
                disabled={!playable}
                className="relative block w-full overflow-hidden bg-stone-900 text-left disabled:cursor-default"
                aria-label={playable ? `Play ${item.title}` : item.title}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt=""
                  className="aspect-[16/10] w-full object-cover transition duration-700 ease-out will-change-transform group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <span
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition group-hover:from-black/80"
                  aria-hidden
                />
                <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur">
                  {item.category}
                </span>
                {playable && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white shadow-lg transition duration-300 group-hover:scale-110">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                        <path d="M8 5v14l11-7L8 5z" />
                      </svg>
                    </span>
                  </span>
                )}
                <span className="absolute inset-x-0 bottom-0 p-4">
                  <span className="block font-display text-base font-extrabold uppercase leading-tight text-white">
                    {item.title}
                  </span>
                </span>
              </button>

              <div className="flex flex-1 flex-col border border-t-0 border-stone-200 bg-white p-4">
                <p className="text-sm leading-relaxed text-stone-600">{item.blurb}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.deliverables.map((d) => (
                    <span
                      key={d}
                      className="border border-stone-200 bg-paper px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-stone-500"
                    >
                      {d}
                    </span>
                  ))}
                </div>
                <Link
                  href={item.service.href}
                  className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-ink transition hover:text-brand"
                >
                  {item.service.label} →
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={open.title}
          onClick={close}
        >
          <div
            className="w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3">
              <p className="font-display text-sm font-extrabold uppercase tracking-[0.18em] text-white">
                {open.title}
              </p>
              <button
                type="button"
                onClick={close}
                className="rounded-full border border-white/25 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white transition hover:border-brand hover:bg-brand"
              >
                Close ✕
              </button>
            </div>
            <div className="relative aspect-video w-full overflow-hidden bg-black shadow-[0_30px_80px_rgba(0,0,0,0.65)]">
              {open.youtubeId ? (
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube-nocookie.com/embed/${open.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                  title={open.title}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : (
                <video
                  className="h-full w-full"
                  src={open.videoSrc}
                  autoPlay
                  controls
                  playsInline
                />
              )}
            </div>
            <div className="flex items-center justify-between pt-3 text-sm">
              <p className="text-stone-300">{open.blurb}</p>
              <Link
                href={open.service.href}
                className="shrink-0 pl-4 font-semibold text-brand hover:underline"
              >
                View service →
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
