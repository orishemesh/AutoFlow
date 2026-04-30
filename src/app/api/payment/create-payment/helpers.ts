import logger from "@/lib/logger";

export interface IPaymentMetadata {
  name: string;
  email: string;
  phone: string;
  city: string;
}


export interface IPaymentResposne extends IPaymentMetadata {
  paymentId: string;
  success: boolean;
}

export async function getAccessToken() {
  try {
    const payload = getJWTTokenPayload();
    const tokenRes = await fetch(`${process.env.MORNING_ACCESS_TOKEN_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!tokenRes.ok) {
      const errorText = await tokenRes.text();
      throw new Error('Failed to get Morning token');
    }

    const tokenData = await tokenRes.json();
    return tokenData.accessToken;
  } catch (error: any) {
    logger.error(`Error in getAccessToken: ${error.message}`, { stack: error.stack });
    throw error;
  }
}

export async function getPaymentForm(token: string, data: IPaymentMetadata, localPaymentId: string) {
  try {
    const payload = getPaymentPayload({ ...data, paymentId: localPaymentId });
    logger.info(`Creating payment form for email: ${data.email}, paymentID: ${localPaymentId}`);
    
    const paymentRes = await fetch(`${process.env.MORNING_API_URL}/api/v1/payments/form`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    if (!paymentRes.ok) {
      const errorText = await paymentRes.text();
      logger.error(`Failed to create payment form: ${paymentRes.status} ${paymentRes.statusText} - ${errorText}`);
      throw new Error('Failed to create payment form');
    }

    const paymentData = await paymentRes.json();
    logger.info(`Payment form created successfully: ${paymentData.url}`);
    return paymentData.url;
  } catch (error: any) {
    logger.error(`Error in getPaymentForm: ${error.message}`, { stack: error.stack });
    throw error;
  }
}

export async function sendPaymentToWebhook(data: IPaymentResposne) {
  try {
    logger.info(`Sending payment notification to webhook for email: ${data.email}, paymentId: ${data.paymentId}`);
    const response = await fetch(`${process.env.WEBHOOK_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorText = await response.text();
      logger.warn(`Webhook notification returned non-ok status: ${response.status} - ${errorText}`);
    } else {
      logger.info('Webhook notification sent successfully');
    }
    
    return response;
  } catch (error: any) {
    logger.error(`Error sending to webhook: ${error.message}`, { stack: error.stack });
    throw error;
  }
}


function getPaymentPayload({ city, name, email, phone, paymentId }: IPaymentMetadata & { paymentId: string }) {
  const baseUrl = process.env.BASE_URL;
  const description = process.env.DESCRIPTION_ORDER;
  const successUrl = `${baseUrl}${process.env.SUCCESS_URL}`;
  const failureUrl = `${baseUrl}${process.env.FAILED_URL}`;
  const notifyUrl = `${baseUrl}${process.env.NOTIFY_URL}`;
  const amount = Number(process.env.AMOUNT);

  const client = {
    emails: [email],
    phone,
    name,
    city
  }

  const paymentConfig = {
    lang: 'he',
    currency: 'ILS',
    vatType: 1,
    type: 400,
    group: 100,
    pluginId: process.env.MORNING_PLUGIN_ID,
    maxPayments: 1,
  }

  const urls = {
    notifyUrl,
    successUrl,
    failureUrl,
  }
  const custom = `paymentId=${paymentId}&email=${email}`

  return {
    client,
    description,
    amount,
    custom,
    ...paymentConfig,
    ...urls,
  }
}

function getJWTTokenPayload() {
  return {
    'grant_type': 'client_credentials',
    'client_id': process.env.MORNING_API_KEY,
    'client_secret': process.env.MORNING_API_SECRET,
  }
}