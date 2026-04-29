import { NextResponse } from "next/server";
import { getAccessToken } from "../create-payment/helpers";
import { paymentCache } from "@/lib/cache";

export async function POST(req: Request) {
  try {
    const { paymentId } = await req.json();

    if (!paymentId) {
      return NextResponse.json({ error: "Missing paymentId" }, { status: 400 });
    }
    const isSuccess = paymentCache.isPaymentPaid(paymentId);

    return NextResponse.json({ success: isSuccess });

  } catch (error: any) {
    console.error("Check status error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
