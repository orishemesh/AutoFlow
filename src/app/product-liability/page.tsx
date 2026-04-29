import type { Metadata } from 'next';
import BodyClass from '@/components/BodyClass';

export const metadata: Metadata = {
  title: 'אחריות מוצר — AutoFlow',
  description:
    'מדיניות אחריות המוצר של AutoFlow — פלטפורמת האוטומציות המובילה לעסקים ישראליים.',
};

export default function ProductLiabilityPage() {
  return (
    <>
      <BodyClass className="legal-body" />

      <main id="main-content">
        <section className="page-hero">
          <div className="container">
            <div className="page-hero-label">מסמך משפטי</div>
            <h1>אחריות מוצר</h1>
            <p>
              מדיניות אחריות המוצר של AutoFlow — אנא קראו בעיון לפני רכישה או
              שימוש במוצרים הדיגיטליים שלנו.
            </p>
            <p className="page-hero-meta">עדכון אחרון: אפריל 2025</p>
          </div>
        </section>

        <section className="legal-wrap">
          <div className="container">
            <div className="legal-card">
              <div className="legal-section">
                <h2>1. אופי המוצר</h2>
                <p>
                  המוצרים הנמכרים באמצעות AutoFlow הינם{' '}
                  <strong>מוצרים דיגיטליים בלבד</strong> — תבניות אוטומציה,
                  וורקפלואים וקבצים להורדה, המיועדים לשימוש בפלטפורמות n8n
                  ו-Make.com.
                </p>
                <p>
                  המוצרים מסופקים ככלי עזר טכני בלבד, ואינם מהווים פתרון שלם
                  או מותאם אישית לכל עסק. האחריות להתאמת המוצר לצרכים הספציפיים
                  של העסק חלה על הרוכש בלבד.
                </p>
              </div>

              <div className="legal-section">
                <h2>2. הגבלת אחריות</h2>
                <div className="legal-highlight">
                  החברה ו/או מי מטעמה לא יהיו אחראים לנזק ישיר ו/או עקיף
                  שייגרם כתוצאה משימוש או מהסתמכות על המוצרים הדיגיטליים שנרכשו
                  באתר.
                </div>
                <p>
                  מבלי לגרוע מכלליות האמור לעיל, החברה לא תישא באחריות לכל אחד
                  מהמקרים הבאים:
                </p>
                <ul>
                  <li>
                    אובדן רווחים, אובדן הכנסות, או אובדן הזדמנויות עסקיות
                  </li>
                  <li>אובדן נתונים או פגיעה במערכות קיימות</li>
                  <li>
                    הפרעה לפעילות עסקית או השבתה של מערכות אוטומציה
                  </li>
                  <li>
                    נזקים הנובעים מאי-התאמה בין המוצר לתצורה הטכנית של הרוכש
                  </li>
                  <li>
                    נזקים שנגרמו עקב שימוש לא נכון או שינויים שבוצעו על ידי
                    הרוכש בתבניות
                  </li>
                </ul>
              </div>

              <div className="legal-section">
                <h2>3. אי-מתן ייעוץ מקצועי</h2>
                <p>
                  AutoFlow אינה מספקת ייעוץ עסקי, משפטי, חשבונאי או טכני.
                  המוצרים הדיגיטליים הם כלי עזר בלבד ואין להסתמך עליהם כתחליף
                  לייעוץ מקצועי. כל החלטה עסקית המבוססת על שימוש במוצרים הינה
                  באחריות הרוכש בלבד.
                </p>
              </div>

              <div className="legal-section">
                <h2>4. מוצר &quot;כמות שהוא&quot; (AS-IS)</h2>
                <p>
                  כלל המוצרים הדיגיטליים מסופקים &quot;כמות שהם&quot; (AS-IS)
                  ו-&quot;כפי שהם זמינים&quot; (AS-AVAILABLE), ללא כל מצג או
                  התחייבות מכל סוג, בין מפורשת ובין משתמעת.
                </p>
                <p>
                  AutoFlow אינה מתחייבת כי המוצרים יתאימו לדרישות הרוכש, יפעלו
                  ללא תקלות, או ישיגו תוצאה עסקית מסוימת. אין אנו מבטיחים
                  תאימות מלאה עם כל גרסה של n8n, Make.com, או כל פלטפורמה אחרת.
                </p>
              </div>

              <div className="legal-section">
                <h2>5. תקרת אחריות</h2>
                <div className="legal-highlight">
                  בכל מקרה, אחריות AutoFlow לא תעלה על הסכום ששולם בפועל על ידי
                  הרוכש עבור המוצר הספציפי שבגינו נטענת הטענה.
                </div>
                <p>
                  הגבלה זו חלה בין אם עילת התביעה מבוססת על חוזה, נזיקין
                  (לרבות רשלנות), אחריות מוחלטת או כל עילה משפטית אחרת, גם אם
                  AutoFlow יודעה על האפשרות לנזקים כאמור.
                </p>
              </div>

              <div className="legal-section">
                <h2>6. אחריות המשתמש</h2>
                <p>
                  הרוכש מאשר ומסכים כי:
                </p>
                <ul>
                  <li>
                    הוא בחן את המוצר ואת התאמתו לצרכיו לפני הרכישה
                  </li>
                  <li>
                    השימוש במוצרים הדיגיטליים הוא על אחריותו הבלעדית
                  </li>
                  <li>
                    הוא אחראי לגיבוי המערכות והנתונים שלו לפני התקנת או שימוש
                    בתבניות
                  </li>
                  <li>
                    לא תהיה לו כל טענה כלפי AutoFlow בגין תוצאות השימוש
                    במוצרים
                  </li>
                </ul>
              </div>

              <div className="legal-section">
                <h2>7. יצירת קשר</h2>
                <p>
                  לשאלות בנוגע למדיניות אחריות המוצר, ניתן לפנות אלינו:{' '}
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
        </section>
      </main>
    </>
  );
}
