import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      message,
      service,
      phone,
      company,
      budget,
      timeline,
      preferredContact,
      handoff,
      timezone,
      cloudLink,
      topic,
    } = body ?? {};

    if (!name || !email || !message || !service) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email));
    if (!emailOk) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    if (String(message).length > 2000) {
      return NextResponse.json({ error: "Message too long" }, { status: 400 });
    }

    // Production: forward to email/CRM. Logged for demo/dev.
    console.info("[contact]", {
      name: String(name).slice(0, 120),
      email: String(email).slice(0, 120),
      phone: phone ? String(phone).slice(0, 40) : null,
      company: company ? String(company).slice(0, 120) : null,
      service: String(service).slice(0, 60),
      budget: budget ? String(budget).slice(0, 40) : null,
      timeline: timeline ? String(timeline).slice(0, 40) : null,
      preferredContact: preferredContact ? String(preferredContact).slice(0, 20) : null,
      handoff: handoff ? String(handoff).slice(0, 40) : null,
      timezone: timezone ? String(timezone).slice(0, 20) : null,
      cloudLink: cloudLink ? String(cloudLink).slice(0, 300) : null,
      topic: topic ? String(topic).slice(0, 60) : null,
      message: String(message).slice(0, 500),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
