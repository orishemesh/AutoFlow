export interface IPaymentMetadata {
  name: string;
  email: string;
  phone: string;
  city: string;
}


export interface IPaymentResposne extends IPaymentMetadata {
  success: boolean;
}

export async function getAccessToken() {
  const payload = getJWTTokenPayload();
  const tokenRes = await fetch(`${process.env.MORNING_ACCESS_TOKEN_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!tokenRes.ok) {
    throw new Error('Failed to get Morning token');
  }

  const tokenData = await tokenRes.json();
  return tokenData.accessToken;
}

export async function getPaymentForm(token: string, data: IPaymentMetadata, localPaymentId: string) {
  const payload = getPaymentPayload({ ...data, paymentId: localPaymentId });
  const paymentRes = await fetch(`${process.env.MORNING_API_URL}/api/v1/payments/form`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });

  const paymentData = await paymentRes.json();
  return paymentData.url;
}

export async function sendPaymentToWebhook(data: IPaymentResposne) {
  return await fetch(`${process.env.WEBHOOK_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
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