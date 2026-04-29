import type { Metadata } from 'next';
import BodyClass from '@/components/BodyClass';

export const metadata: Metadata = {
  title: 'יצירת קשר — AutoFlow',
  description:
    'צרו קשר עם AutoFlow — פלטפורמת האוטומציות המובילה לעסקים ישראליים.',
};

export default function ContactPage() {
  return (
    <>
      <BodyClass className="legal-body" />

      <main id="main-content">
        <section className="page-hero">
          <div className="container">
            <div className="page-hero-label">צרו קשר</div>
            <h1>יצירת קשר</h1>
            <p>נשמח לעמוד לשירותכם בכל שאלה או בקשה.</p>
          </div>
        </section>

        <section className="legal-wrap">
          <div className="container">
            <div className="legal-card">
              <div className="legal-section">
                <h2>פרטי התקשרות</h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginTop: '10px' }}>
                  <div>
                    <strong>כתובת</strong>
                    <p>דוד רזיאל 3, תל אביב</p>
                  </div>

                  <div>
                    <strong>מספר טלפון</strong>
                    <p>
                      <a
                        href="tel:0533389943"
                        style={{ color: 'var(--deep-indigo)', fontWeight: 600 }}
                      >
                        053-338-9943
                      </a>
                    </p>
                  </div>

                  <div>
                    <strong>אימייל</strong>
                    <p>
                      <a
                        href="mailto:support@autoflowil.com"
                        style={{ color: 'var(--deep-indigo)', fontWeight: 600 }}
                      >
                        support@autoflowil.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
