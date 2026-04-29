'use client';

import Link from 'next/link';
import BodyClass from '@/components/BodyClass';

export default function PaymentFailedPage() {
  return (
    <>
      <BodyClass className="payment-fail-body" />
      <main id="main-content" style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem'
      }}>
        <div style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 107, 107, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '2rem',
          animation: 'scaleIn 0.3s ease-out'
        }}>
          <svg viewBox="0 0 24 24" width="60" height="60" stroke="#ff6b6b" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="15" y1="9" x2="9" y2="15"></line>
            <line x1="9" y1="9" x2="15" y2="15"></line>
          </svg>
        </div>
        
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          התשלום נכשל 😔
        </h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '450px', marginBottom: '2.5rem', lineHeight: '1.5' }}>
          הייתה בעיה בסליקת התשלום שלך.<br/>
          אנא ודא שפרטי האשראי נכונים ונסה שנית.
        </p>

        <Link href="/checkout" className="btn-primary btn-large" style={{ backgroundColor: '#ff6b6b', borderColor: '#ff6b6b' }}>
          נסה שנית — חזרה לעמוד רכישה ←
        </Link>
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes scaleIn {
            from { transform: scale(0.5); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
        `}} />
      </main>
    </>
  );
}
