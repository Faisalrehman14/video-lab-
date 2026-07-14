import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, service } = body ?? {};

    if (!name || !email || !message || !service) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // In production, forward to email/CRM. Logged for demo/dev.
    console.info("[contact]", {
      name,
      email,
      service,
      phone: body.phone || null,
      message: String(message).slice(0, 500),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
