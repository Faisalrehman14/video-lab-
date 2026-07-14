"use client";

import { useState } from "react";
import { serviceTabs } from "@/lib/content";

export function ServiceTabs() {
  const [active, setActive] = useState(serviceTabs[0].id);
  const tab = serviceTabs.find((t) => t.id === active) || serviceTabs[0];

  return (
    <div>
      <div className="flex flex-wrap gap-2 border-b border-stone-200 pb-0">
        {serviceTabs.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setActive(t.id)}
            className={`-mb-px border-b-2 px-4 py-3 text-sm font-semibold uppercase tracking-wide transition ${
              active === t.id
                ? "border-brand text-brand"
                : "border-transparent text-stone-500 hover:text-ink"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {tab.items.map((item) => (
          <li
            key={item}
            className="border border-stone-200 bg-white px-4 py-3 text-sm font-medium text-ink shadow-sm"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
