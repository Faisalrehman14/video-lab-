"use client";

import { useState, FormEvent } from "react";
import { siteConfig } from "@/lib/site";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          service: data.get("service"),
          message: data.get("message"),
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name" className="label-field">
          Full name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="input-field"
          placeholder="Alex Rivera"
        />
      </div>
      <div>
        <label htmlFor="email" className="label-field">
          Work email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="input-field"
          placeholder="alex@company.com"
        />
      </div>
      <div>
        <label htmlFor="phone" className="label-field">
          Phone (optional)
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className="input-field"
          placeholder={siteConfig.phone}
        />
      </div>
      <div>
        <label htmlFor="service" className="label-field">
          Service interest
        </label>
        <select id="service" name="service" required className="input-field" defaultValue="">
          <option value="" disabled>
            Select a service
          </option>
          <option value="video">Video editing</option>
          <option value="photo">Photo editing</option>
          <option value="retainer">Studio retainer</option>
          <option value="custom">Custom project</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="label-field">
          Project details
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="input-field resize-y"
          placeholder="Footage type, length, deadline, and any references…"
        />
      </div>
      <button type="submit" className="btn-primary w-full sm:w-auto" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      {status === "sent" && (
        <p className="text-sm text-brand" role="status">
          Thanks — we received your message and will reply within one business day.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-400" role="alert">
          Something went wrong. Email us directly at {siteConfig.email}.
        </p>
      )}
    </form>
  );
}
