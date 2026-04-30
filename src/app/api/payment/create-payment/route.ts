import { NextResponse } from "next/server";
import { getAccessToken, getPaymentForm } from "./helpers";
import { paymentCache } from "@/lib/cache";
import logger from "@/lib/logger";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, city } = body;

    logger.info(`Received payment request for ${email}`);

    const token = await getAccessToken();
    const payment = {
      name, email, phone, city
    }
    const paymentId = paymentCache.createPayment({ ...payment, amount: Number(process.env.AMOUNT) });

    logger.info(`Payment record created in cache with ID: ${paymentId}`);

    const paymentUrl = await getPaymentForm(token, payment, paymentId);
    
    logger.info(`Payment URL generated: ${paymentUrl}`);
    
    return NextResponse.json({
      url: paymentUrl,
      paymentId
    });
  } catch (error: any) {
    logger.error(`Payment creation failed: ${error.message}`, { 
      stack: error.stack
    });
    return NextResponse.json(
      { error: "Payment creation failed" },
      { status: 500 }
    );
  }
}