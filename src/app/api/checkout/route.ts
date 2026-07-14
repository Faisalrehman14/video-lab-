import { NextResponse } from "next/server";
import Stripe from "stripe";
import { getPackageById } from "@/lib/packages";
import { siteConfig } from "@/lib/site";

export async function POST(request: Request) {
  const secret = process.env.STRIPE_SECRET_KEY;

  try {
    const { packageId } = await request.json();
    const pkg = getPackageById(packageId);

    if (!pkg) {
      return NextResponse.json({ error: "Unknown package" }, { status: 400 });
    }

    if (!secret || secret.includes("xxxxxxxx")) {
      return NextResponse.json(
        {
          error:
            "Stripe is not configured. Add STRIPE_SECRET_KEY to .env.local (see .env.example).",
          demo: true,
          package: pkg,
        },
        { status: 503 }
      );
    }

    const stripe = new Stripe(secret, { apiVersion: "2025-02-24.acacia" });
    const origin = process.env.NEXT_PUBLIC_SITE_URL || siteConfig.url;

    const session = await stripe.checkout.sessions.create({
      mode: pkg.id.includes("retainer") ? "subscription" : "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: pkg.price * 100,
            product_data: {
              name: `${pkg.name} — ${siteConfig.name}`,
              description: `${pkg.description} Turnaround: ${pkg.turnaround}. Deliverables: ${pkg.deliverables.join("; ")}`,
            },
            ...(pkg.id.includes("retainer")
              ? { recurring: { interval: "month" as const } }
              : {}),
          },
        },
      ],
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout?package=${pkg.id}&canceled=1`,
      customer_email: undefined,
      metadata: {
        packageId: pkg.id,
        packageName: pkg.name,
      },
      // Surface policies near payment (Stripe favorability)
      consent_collection: undefined,
      custom_text: {
        submit: {
          message:
            "By paying you agree to our Terms, Refund, and Cancellation policies linked on the checkout page.",
        },
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("[stripe checkout]", err);
    return NextResponse.json({ error: "Unable to create checkout session" }, { status: 500 });
  }
}
