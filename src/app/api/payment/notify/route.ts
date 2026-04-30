import { paymentCache } from "@/lib/cache";
import { NextResponse } from "next/server";
import { sendPaymentToWebhook } from "../create-payment/helpers";
import logger from "@/lib/logger";

export async function POST(req: Request) {
  try {
    const body = await req.text();

    logger.info("🔔 [NOTIFY URL] WEBHOOK RECEIVED", { payload: body });

    const paymentId = 'body.custom?.paymentId';
    // const paymentId = body.custom?.split("paymentId=")[1]?.split("&")[0];
    
    if (!paymentId) {
      logger.warn("Webhook received without paymentId in custom field", { body });
      return NextResponse.json({ error: "No paymentId found" }, { status: 400 });
    }

    logger.info(`Processing webhook for paymentId: ${paymentId}`);

    const data = paymentCache.updatePayment(paymentId);
    
    if (!data) {
      logger.warn(`No payment data found in cache for paymentId: ${paymentId}`);
    } else {
      logger.info(`Found payment data in cache: ${data.email}`);
    }

    const webookData = {
      email: data?.email,
      name: data?.name ,
      phone: data?.phone,
      city: data?.city,
      paymentId: paymentId,
      success: true,
    }

    logger.info(`Forwarding payment data to external webhook for: ${webookData.email}`);
    // await sendPaymentToWebhook(webookData);

    return NextResponse.json({ success: true, message: "Webhook received successfully" });

  } catch (error: any) {
    logger.error("🔔 [NOTIFY URL] Error processing webhook", { 
      message: error.message,
      stack: error.stack 
    });

    return NextResponse.json({ error: "Failed to process webhook" }, { status: 500 });
  }
}
