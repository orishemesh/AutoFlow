import Link from 'next/link';
import CountdownTimer from './CountdownTimer';

export default function PricingBox() {
  return (
    <section id="pricing" aria-labelledby="pricing-heading">
      <div className="container">
        <header className="section-header fade-up">
          <span className="section-tag">מחיר השקה</span>
          <h2 className="section-title" id="pricing-heading">
            אל תשלם על כל אוטומציה בנפרד
          </h2>
        </header>
        <div className="pricing-box fade-up">
          <span className="section-tag pricing-tag">
            70% הנחה — מחיר השקה בלבד
          </span>
          <CountdownTimer variant="pricing" />
          <p className="pricing-old">₪997</p>
          <div className="pricing-price" aria-label="מחיר: ₪200">
            <span className="pricing-shekel">₪</span>200
          </div>
          <p className="pricing-note">
            תשלום חד פעמי. גישה לנצח. אפס דמי מנוי.
          </p>
          <div style={{ marginBottom: 0 }}>
            <Link href="/checkout" className="btn-primary btn-large">
              קבל גישה מיידית ←
            </Link>
          </div>
          <div className="guarantee-wrap">
            <div className="guarantee-badge" role="note">
              <span className="guarantee-icon">🛡️</span>
              <div className="guarantee-content">
                <span className="guarantee-headline">100% תשלום מאובטח</span>
                <span className="guarantee-body">
                  הרכישה שלך מוגנת בהצפנה מלאה. גישה מיידית לאחר התשלום.
                </span>
              </div>
            </div>
          </div>
          <div className="trust-icons" role="list">
            <div className="trust-item" role="listitem">
              <span>🔒</span>
              <span>תשלום מאובטח</span>
            </div>
            <div className="trust-item" role="listitem">
              <span>⚡</span>
              <span>גישה מיידית</span>
            </div>
            <div className="trust-item" role="listitem">
              <span>📁</span>
              <span>הכל בקובץ אחד</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
