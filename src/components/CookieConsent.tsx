"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const CONSENT_KEY = "rrl-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(CONSENT_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const choose = (value: "accepted" | "essential") => {
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[60] p-4 md:p-6 animate-fade-up"
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-xl border border-stone-200 bg-white p-5 shadow-mega md:flex-row md:items-center md:justify-between">
        <p className="text-sm leading-relaxed text-stone-600">
          We use essential cookies to run this site and optional analytics cookies to improve it.
          Payment data is processed by <strong className="text-ink">Stripe</strong> — never stored
          on our servers. See our{" "}
          <Link href="/legal/privacy" className="text-brand underline-offset-2 hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-2">
          <button type="button" className="btn-outline-dark !px-4 !py-2 text-xs" onClick={() => choose("essential")}>
            Essential only
          </button>
          <button type="button" className="btn-primary !px-4 !py-2 text-xs" onClick={() => choose("accepted")}>
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
