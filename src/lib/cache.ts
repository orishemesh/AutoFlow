import NodeCache from 'node-cache';
import { v4 as uuidv4 } from 'uuid';

const TTL = Number(process.env.TTL);
const CHECK_PERIOD = Number(process.env.CHECK_PERIOD);

class PaymentCacheManager {
  private cache: NodeCache;

  constructor() {
    // stdTTL: 1 hour (3600 seconds), checkperiod: 10 minutes (600 seconds)
    this.cache = new NodeCache({ stdTTL: TTL, checkperiod: CHECK_PERIOD });
  }

  /**
   * Generates a new unique payment ID and stores the initial data in the cache.
   * @param data Initial payment data
   * @returns The generated unique ID
   */
  public createPayment(data: any): string {
    const id = uuidv4();
    this.cache.mget
    this.cache.set(id, { ...data, id, success: false, status: 'pending', createdAt: new Date().toISOString() }, TTL);
    return id;
  }

  /**
   * Updates an existing payment in the cache.
   * @param id The payment ID
   * @param data Data to merge into the payment
   */
  public updatePayment(id: string, data = {}): any {
    const existing = this.getPayment(id) ?? {};
    const updatedPayment = { ...existing, ...data, status: 'paid', success: true }
    console.log("Updating payment:", updatedPayment);
    console.log("Existing payment:", existing);
    const all = this.cache.keys();
    console.log("All keys:", all);
    if (existing) {
      this.cache.set(id, { ...updatedPayment, id, updatedAt: new Date().toISOString() });
    } else {
      this.cache.set(id, { ...updatedPayment, id, updatedAt: new Date().toISOString() });
    }
    return updatedPayment;
  }

  /**
   * Retrieves payment data from the cache.
   * @param id The payment ID
   * @returns The payment data or undefined if not found
   */
  public getPayment(id: string): any {
    return this.cache.get(id);
  }

  public isPaymentPaid(id: string): boolean {
    const doc = this.getPayment(id);
    return Boolean(doc?.success);
  }
}

// Export a singleton instance
export const paymentCache = new PaymentCacheManager();
