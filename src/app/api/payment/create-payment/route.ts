import { NextResponse } from "next/server";
import { getAccessToken, getPaymentForm } from "./helpers";
import { paymentCache } from "@/lib/cache";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, phone, city } = body;

    // Create a local ID using the cache manager class and store initial payment details

    const token = await getAccessToken();
    const payment = {
      name, email, phone, city
    }
    const paymentId = paymentCache.createPayment({ ...payment, amount: Number(process.env.AMOUNT) });


    // Pass the localPaymentId to the payment form if needed
    const paymentUrl = await getPaymentForm(token, payment, paymentId);
    console.log("Creating payment:", paymentUrl);
    return NextResponse.json({
      url: paymentUrl,
      paymentId
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Payment creation failed", e: error },
      { status: 500 }
    );
  }
}