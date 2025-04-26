import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req) {
  try {
    const body = await req.json();
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const { products, totalPrice } = body;

    // Map products to Stripe line items
    const line_items = products.map((item) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: item.name,
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    }));

    const headers = req.headers;
    // fallback for origin
    let origin = headers.get("origin") || headers.get("referer") || "http://localhost:3000";
    if (origin.endsWith("/")) origin = origin.slice(0, -1);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      success_url: `${origin}/order-placed`,
      cancel_url: `${origin}/placeorder`,
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error("Stripe error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
