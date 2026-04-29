import { paymentCache } from "@/lib/cache";
import { NextResponse } from "next/server";
import { sendPaymentToWebhook } from "../create-payment/helpers";

export async function POST(req: Request) {
  try {
    // מנסה לקרוא את התוכן שנשלח כ-JSON
    const body = await req.json();

    console.log("======================================");
    console.log("🔔 [NOTIFY URL] WEBHOOK RECEIVED:");
    console.log(JSON.stringify(body, null, 2));
    console.log("======================================");
    const paymentId = body.custom?.split("paymentId=")[1].split("&")[0];
    const data = paymentCache.updatePayment(paymentId);
    console.log('payment data', { data })
    const webookData = {
      email: data?.email,
      name: data?.name,
      phone: data?.phone,
      city: data?.city,
      paymentId: data?.paymentId,
      success: true,
    }
    await sendPaymentToWebhook(webookData);
    // חובה להחזיר תקין (200 OK) כדי שחברת הסליקה תדע שקיבלנו את העדכון בהצלחה
    return NextResponse.json({ success: true, message: "Webhook received successfully" });

  } catch (error: any) {
    console.error("🔔 [NOTIFY URL] Error processing webhook:", error);

    // במקרה של שגיאה, מחזירים גם תשובה כדי לא לתקוע את הבקשה
    return NextResponse.json({ error: "Failed to process webhook" }, { status: 500 });
  }
}
