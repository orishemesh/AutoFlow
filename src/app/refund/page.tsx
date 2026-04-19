import type { Metadata } from 'next';
import BodyClass from '@/components/BodyClass';

export const metadata: Metadata = {
  title: 'מדיניות החזרים — AutoFlow',
  description:
    'מדיניות ההחזרים של AutoFlow — פירוט מלא של זכאות להחזר וסיוע טכני.',
};

export default function RefundPage() {
  return (
    <>
      <BodyClass className="legal-body" />

      <main>
        <section className="page-hero">
          <div className="container">
            <div className="page-hero-label">מסמך משפטי</div>
            <h1>מדיניות החזרים</h1>
            <p>
              אנו עומדים מאחורי המוצר שלנו. להלן פירוט מלא של מדיניות ההחזרים
              וזכאות לסיוע.
            </p>
            <p className="page-hero-meta">עדכון אחרון: אפריל 2025</p>
          </div>
        </section>

        <section className="legal-wrap">
          <div className="container">
            <div className="legal-card">
              <div className="legal-section">
                <h2>1. מוצרים דיגיטליים — מדיניות ברירת מחדל</h2>
                <div className="legal-alert">
                  מוצרי AutoFlow הינם מוצרים דיגיטליים להורדה. בשל אופיים
                  הדיגיטלי, לא ניתן להחזיר מוצרים לאחר הורדתם — בדומה לתוכנה,
                  ספרים דיגיטליים, ומוסיקה שהורדו.
                </div>
                <p>
                  זאת בהתאם לסעיף 14ג(ד)(1) לחוק הגנת הצרכן,
                  התשמ&quot;א-1981, הקובע כי עסקאות בתכנים דיגיטליים שהועברו
                  לצרכן אינן חייבות בזכות ביטול לאחר שהחל ממשה של ההורדה.
                </p>
              </div>

              <div className="legal-section">
                <h2>2. חריג — כשל טכני ואי-מסירת המוצר</h2>
                <p>AutoFlow תספק החזר כספי מלא במקרים הבאים בלבד:</p>
                <ul>
                  <li>
                    <strong>אי-מסירה:</strong> לא קיבלתם גישה להורדה ולא קיבלתם
                    את המוצר בתוך 24 שעות מהרכישה, למרות שהתשלום עובד בהצלחה
                  </li>
                  <li>
                    <strong>כשל טכני מתועד:</strong> הקבצים פגומים, בלתי-קריאים,
                    או שאינם תואמים לפלטפורמה שפורסמה (n8n / Make.com) — כפי
                    שמתועד בפניית תמיכה
                  </li>
                  <li>
                    <strong>חיוב כפול:</strong> חויבתם פעמיים על אותה רכישה
                  </li>
                </ul>
                <p style={{ marginTop: '14px' }}>
                  בכל מקרה כזה, יטופל ההחזר בתוך 5–10 ימי עסקים לאחר אישורו.
                </p>
              </div>

              <div className="legal-section">
                <h2>3. מקרים שאינם זכאים להחזר</h2>
                <p>הבקשות הבאות לא תאושרנה:</p>
                <ul>
                  <li>המוצר הורד בהצלחה אך אינו מתאים לצרכים שלכם</li>
                  <li>שינוי דעה לאחר הרכישה</li>
                  <li>טעות בבחירת המוצר</li>
                  <li>
                    קשיים טכניים הנובעים מסביבת המשתמש (גרסת n8n לא נתמכת,
                    הגדרות שרת)
                  </li>
                  <li>בקשה שהוגשה לאחר יותר מ-7 ימים מיום הרכישה</li>
                </ul>
              </div>

              <div className="legal-section">
                <h2>4. כיצד ליצור קשר עם תמיכה</h2>
                <p>
                  לפניית החזר או דיווח על כשל טכני, אנא צרו קשר עם צוות
                  התמיכה שלנו עם הפרטים הבאים:
                </p>
                <ul>
                  <li>שם מלא וכתובת הדוא&quot;ל שבה בוצעה הרכישה</li>
                  <li>
                    מספר הזמנה (יופיע באישור הרכישה שנשלח לדוא&quot;ל)
                  </li>
                  <li>
                    תיאור מפורט של הבעיה, כולל צילומי מסך במידת האפשר
                  </li>
                </ul>

                <div className="contact-card">
                  <h3>צוות התמיכה של AutoFlow</h3>
                  <p>אנחנו כאן לעזור. שלחו לנו מייל ונחזור אליכם בהקדם.</p>
                  <a
                    href="mailto:support@autoflowil.co.il"
                    className="contact-email"
                  >
                    support@autoflowil.co.il
                  </a>
                  <p className="response-time">
                    זמן תגובה: עד 48 שעות בימי עסקים
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>5. זמן תגובה ועיבוד</h2>
                <div className="legal-highlight">
                  אנו מתחייבים להשיב לכל פנייה בתוך{' '}
                  <strong>48 שעות בימי עסקים</strong> (ראשון–חמישי). פניות
                  שהוגשו בסוף שבוע יטופלו בתחילת שבוע העסקים הבא.
                </div>
                <p>
                  ככל שאושר ההחזר, הזיכוי יופיע בכרטיס האשראי שלכם תוך 5–10
                  ימי עסקים, בהתאם למדיניות חברת כרטיס האשראי שלכם.
                </p>
              </div>

              <div className="legal-section">
                <h2>6. שינויים במדיניות</h2>
                <p>
                  AutoFlow שומרת לעצמה את הזכות לעדכן מדיניות זו בכל עת.
                  המדיניות שחלה על רכישתכם היא זו שהייתה בתוקף במועד הרכישה.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
