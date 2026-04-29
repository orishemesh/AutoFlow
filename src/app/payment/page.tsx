'use client';

import { useEffect, useState } from 'react';
import BodyClass from '@/components/BodyClass';
import './payment.css';

export default function PaymentPage() {
  const [paymentUrl, setPaymentUrl] = useState('https://mrng.to/aaP9y69JJF'); // Placeholder as requested
  const [isClearing, setIsClearing] = useState(false);

  useEffect(() => {
    const status = sessionStorage.getItem('paymentStatus');
    const storedUrl = sessionStorage.getItem('paymentUrl');
    
    if (status === 'clearing') {
      setIsClearing(true);
      // If the user wants to use the actual payment URL eventually, 
      // they can uncomment the line below. 
      // For now, using google.com as requested.
      if (storedUrl) setPaymentUrl(storedUrl);
    }
  }, []);

  return (
    <>
      <BodyClass className="payment-body" />
      
      <main className="payment-main">
        <div className="payment-container">
          {isClearing ? (
            <div className="iframe-wrapper">
              <div className="payment-header">
                <h2>סליקה מאובטחת</h2>
                <p>נא מלא את כל השדות הרלוונטים והמתן לאישור ביצוע התשלום.</p>
              </div>
              <iframe 
                src={paymentUrl}
                className="payment-iframe"
                title="Secure Payment"
                allow="payment"
              />
            </div>
          ) : (
            <div className="error-message">
              <h2>שגיאה בגישה לדף</h2>
              <p> אנא חזור לדף הרכישה.</p>
              <a href="/checkout" className="btn-primary">חזרה לרכישה</a>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
