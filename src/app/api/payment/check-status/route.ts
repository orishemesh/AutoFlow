import { NextResponse } from "next/server";
import { paymentCache } from "@/lib/cache";
import logger from "@/lib/logger";

export async function POST(req: Request) {
  try {
    const { paymentId } = await req.json();

    if (!paymentId) {
      logger.warn("Check status request missing paymentId");
      return NextResponse.json({ error: "Missing paymentId" }, { status: 400 });
    }
    
    const isSuccess = paymentCache.isPaymentPaid(paymentId);
    
    logger.info(`Status check for paymentId ${paymentId}: ${isSuccess ? 'PAID' : 'PENDING'}`);

    return NextResponse.json({ success: isSuccess });

  } catch (error: any) {
    logger.error(`Check status error for paymentId: ${error.message}`, { stack: error.stack });
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
