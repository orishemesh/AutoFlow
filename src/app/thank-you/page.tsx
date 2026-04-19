import type { Metadata } from 'next';
import BodyClass from '@/components/BodyClass';

export const metadata: Metadata = {
  title: 'תודה על הרכישה! — AutoFlow',
  description: 'הרכישה הושלמה בהצלחה. החבילה שלך מוכנה להורדה.',
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <>
      <BodyClass className="ty-body" />

      <section className="ty-hero" aria-labelledby="ty-heading">
        <div className="ty-check-wrap">
          <div className="ty-check" aria-hidden="true">
            <span className="pulse-ring" />
            <svg
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="26"
                cy="26"
                r="25"
                stroke="#30B9F6"
                strokeWidth={2}
                fill="rgba(48,185,246,0.1)"
              />
              <path
                d="M14 27L22 35L38 18"
                stroke="#30B9F6"
                strokeWidth={3.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <h1 className="ty-heading" id="ty-heading">
          תודה! הרכישה הושלמה בהצלחה 🎉
        </h1>
        <p className="ty-subheading">הקובץ שלך מוכן להורדה</p>

        <div>
          <a
            href="/AutoFlow%20-%20Full%20Pack.zip"
            download="AutoFlow - Full Pack.zip"
            className="ty-download-btn"
            aria-label="הורד את חבילת AutoFlow"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            להורדת החבילה ← לחץ כאן
          </a>
        </div>
        <p className="ty-email-note">קישור להורדה נשלח גם לאימייל שלך</p>
      </section>

      <main className="ty-main">
        <p className="ty-section-label">Getting started</p>
        <h2 className="ty-section-title">מה עכשיו? 🚀</h2>

        <div className="ty-steps">
          <div className="ty-step">
            <div className="ty-step-num">1</div>
            <div className="ty-step-icon" aria-hidden="true">
              📂
            </div>
            <h3 className="ty-step-title">פתח את הקובץ</h3>
            <p className="ty-step-desc">
              חלץ את קובץ ה-ZIP שהורדת. תמצא בפנים תיקיות מסודרות לפי פלטפורמה
              וקטגוריה.
            </p>
          </div>

          <div className="ty-step">
            <div className="ty-step-num">2</div>
            <div className="ty-step-icon" aria-hidden="true">
              🔍
            </div>
            <h3 className="ty-step-title">בחר אוטומציה</h3>
            <p className="ty-step-desc">
              עיין בספריה ובחר את הוורקפלואו שמתאים לצורך שלך. כל קובץ מגיע עם
              תיאור קצר.
            </p>
          </div>

          <div className="ty-step">
            <div className="ty-step-num">3</div>
            <div className="ty-step-icon" aria-hidden="true">
              ⚡
            </div>
            <h3 className="ty-step-title">ייבא ל-n8n או Make.com</h3>
            <p className="ty-step-desc">
              עקוב אחרי מדריך הייבוא הכלול (בעברית) — העתק, הדבק, הרץ. תוך דקות
              תהיה פעיל.
            </p>
          </div>
        </div>

        <div className="ty-info-grid">
          <div className="ty-info-card">
            <span className="ty-info-icon" aria-hidden="true">
              📧
            </span>
            <div>
              <p className="ty-info-title">לא קיבלת מייל?</p>
              <p className="ty-info-body">
                בדוק את תיקיית הספאם, לפעמים המיילים מגיעים לשם. אם עדיין לא
                קיבלת — צור קשר בכתובת info@autoflowil.co.il
              </p>
            </div>
          </div>
          <div className="ty-info-card">
            <span className="ty-info-icon" aria-hidden="true">
              🔄
            </span>
            <div>
              <p className="ty-info-title">עדכונים בחינם לכל החיים</p>
              <p className="ty-info-body">
                כשנוסיף תכנים חדשים לחבילה, תקבל גישה אוטומטית. שלמת פעם אחת —
                מקבל לנצח.
              </p>
            </div>
          </div>
          <div className="ty-info-card">
            <span className="ty-info-icon" aria-hidden="true">
              💬
            </span>
            <div>
              <p className="ty-info-title">צריך עזרה?</p>
              <p className="ty-info-body">
                צוות AutoFlow זמין למענה בכל שאלה. שלח ל-info@autoflowil.co.il
                ונחזור אליך תוך יום עסקים.
              </p>
            </div>
          </div>
          <div className="ty-info-card">
            <span className="ty-info-icon" aria-hidden="true">
              🛡️
            </span>
            <div>
              <p className="ty-info-title">רישיון מסחרי מורחב</p>
              <p className="ty-info-body">
                הרכישה שלך כוללת רישיון מסחרי — אתה יכול להשתמש בוורקפלואים
                לצרכי עסק, כולל מכירה ללקוחות.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
