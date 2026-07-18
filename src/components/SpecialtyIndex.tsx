"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

export type SpecialtyItem = {
  slug: string;
  label: string;
  eyebrow: string;
  description: string;
  image: string;
  group: string;
};

type Props = {
  items: SpecialtyItem[];
  /** Slugs rendered as large visual tiles at the top of the list */
  featuredSlugs?: string[];
  /** Group order for filter chips; chips hidden when fewer than 2 groups */
  groups?: string[];
};

function withFaceCrop(url: string) {
  if (url.includes("crop=")) return url;
  return `${url}${url.includes("?") ? "&" : "?"}crop=faces`;
}

export function SpecialtyIndex({ items, featuredSlugs = [], groups = [] }: Props) {
  const [active, setActive] = useState<string>("All");

  const chips = groups.length > 1 ? ["All", ...groups] : [];
  const visible = useMemo(
    () => (active === "All" ? items : items.filter((i) => i.group === active)),
    [items, active],
  );
  const featured = visible.filter((i) => featuredSlugs.includes(i.slug));
  const rest = visible.filter((i) => !featuredSlugs.includes(i.slug));

  return (
    <div>
      {chips.length > 0 && (
        <div className="mt-8 flex flex-wrap items-center gap-2" role="tablist" aria-label="Filter specialties">
          {chips.map((chip) => {
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
                    : "border-stone-300 bg-transparent text-stone-600 hover:border-ink hover:text-ink"
                }`}
              >
                {chip}
              </button>
            );
          })}
          <span className="ml-auto hidden text-xs text-stone-400 sm:block">
            {visible.length} {visible.length === 1 ? "specialty" : "specialties"}
          </span>
        </div>
      )}

      {featured.length > 0 && (
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {featured.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group relative isolate block min-h-[220px] overflow-hidden bg-stone-900 md:min-h-[260px]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={withFaceCrop(s.image)}
                alt=""
                className="absolute inset-0 h-full w-full object-cover object-[center_28%] transition duration-700 ease-out will-change-transform group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"
                aria-hidden
              />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
                  {s.group}
                </p>
                <h3 className="mt-1 font-display text-xl font-extrabold uppercase text-white md:text-2xl">
                  {s.label}
                </h3>
                <p className="mt-1 line-clamp-1 text-sm text-stone-300">{s.description}</p>
              </div>
              <span
                className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-brand transition duration-300 group-hover:scale-y-100"
                aria-hidden
              />
            </Link>
          ))}
        </div>
      )}

      <div className={`grid gap-x-8 md:grid-cols-2 ${featured.length > 0 ? "mt-4" : "mt-8"}`}>
        {rest.map((s) => (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            className="group relative flex items-center gap-4 border-b border-stone-200 py-4 pl-3 transition"
          >
            <span
              className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-brand transition duration-300 group-hover:scale-y-100"
              aria-hidden
            />
            <span className="relative block h-16 w-24 shrink-0 overflow-hidden bg-stone-900">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={withFaceCrop(s.image)}
                alt=""
                className="absolute inset-0 h-full w-full object-cover object-[center_28%] transition duration-500 ease-out group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-400">
                {s.group}
              </span>
              <span className="mt-0.5 block truncate font-display text-base font-extrabold uppercase text-ink transition group-hover:text-brand">
                {s.label}
              </span>
              <span className="mt-0.5 line-clamp-1 block text-xs text-stone-500">
                {s.description}
              </span>
            </span>
            <span
              className="shrink-0 text-stone-300 transition group-hover:translate-x-1 group-hover:text-brand"
              aria-hidden
            >
              →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
