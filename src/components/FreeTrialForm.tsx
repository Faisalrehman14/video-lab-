"use client";

import { useState, FormEvent } from "react";

export function FreeTrialForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sent");
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={onSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
      <div>
        <label htmlFor="ft-first" className="label-field">
          First Name*
        </label>
        <input id="ft-first" name="first" required className="input-field" />
      </div>
      <div>
        <label htmlFor="ft-last" className="label-field">
          Last Name*
        </label>
        <input id="ft-last" name="last" required className="input-field" />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="ft-email" className="label-field">
          Email*
        </label>
        <input id="ft-email" name="email" type="email" required className="input-field" />
      </div>
      <div className="sm:col-span-2">
        <button type="submit" className="btn-primary w-full sm:w-auto">
          Submit
        </button>
        {status === "sent" && (
          <p className="mt-3 text-sm text-stone-600" role="status">
            Thanks — we&apos;ll follow up within one business day. (Demo form; wire to CRM in
            production.)
          </p>
        )}
      </div>
    </form>
  );
}
