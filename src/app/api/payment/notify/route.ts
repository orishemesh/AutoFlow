import { NextResponse } from "next/server";
import { sendPaymentToWebhook, extractPaymentData } from "../create-payment/helpers";
import logger from "@/lib/logger";

export async function POST(req: Request) {
  try {
    const text = await req.text();

    logger.info("🔔 [NOTIFY URL] WEBHOOK RECEIVED", { payload: text });

    const paymentData = extractPaymentData(text);

    if (!paymentData) {
      logger.warn("Webhook received without valid payment data", { text });
      return NextResponse.json({ error: "Invalid payment data" }, { status: 400 });
    }

    const { paymentId } = paymentData;

    logger.info(`Processing webhook for paymentId: ${paymentId}`);
    
    logger.info(`Forwarding payment data to external webhook for: ${JSON.stringify(paymentData)}`);
    await sendPaymentToWebhook({...paymentData, success: true});

    return NextResponse.json({ success: true, message: "Webhook received successfully" });

  } catch (error: any) {
    logger.error("🔔 [NOTIFY URL] Error processing webhook", {
      message: error.message,
      stack: error.stack
    });

    return NextResponse.json({ error: "Failed to process webhook" }, { status: 500 });
  }
}
