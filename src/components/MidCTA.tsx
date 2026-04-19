import CountdownTimer from './CountdownTimer';

export default function MidCTA() {
  return (
    <section id="mid-cta" aria-label="הצעת מחיר">
      <div className="container">
        <div className="mid-cta-inner">
          <div className="mid-cta-text">
            <p className="mid-cta-title">מוכן לאוטמט את העסק שלך?</p>
            <p className="mid-cta-sub">
              הצטרף ל-1,200+ עסקים שכבר חוסכים שעות כל שבוע.
            </p>
            <CountdownTimer variant="mid-cta" />
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 24,
              flexWrap: 'wrap',
            }}
          >
            <div>
              <span className="mid-cta-price">
                ₪200 <span className="old-price">₪997</span>
              </span>
              <p
                style={{
                  fontSize: '.8rem',
                  color: 'var(--text-light)',
                  marginTop: 2,
                }}
              >
                תשלום חד פעמי · גישה לנצח
              </p>
            </div>
            <a href="#pricing" className="btn-primary btn-large">
              קבל גישה מיידית ←
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
