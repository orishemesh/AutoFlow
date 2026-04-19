import type { Metadata } from 'next';
import Link from 'next/link';
import BodyClass from '@/components/BodyClass';
import FadeUpObserver from '@/components/FadeUpObserver';

export const metadata: Metadata = {
  title: 'מה זה אוטומציה? | AutoFlow — המדריך המלא',
  description:
    'מה זה אוטומציה, למה כולם צריכים אותה, ואיך אפשר לחסוך שעות בשבוע — בלי ידע טכני.',
};

export default function AutomationPage() {
  return (
    <>
      <BodyClass className="automation-body" />
      <FadeUpObserver />

      {/* HERO */}
      <section id="hero">
        <div className="container">
          <span className="section-tag hero-tag">המדריך שכולם צריכים לקרוא</span>
          <h1 className="hero-title">
            אוטומציה — זה לא
            <br />
            <span className="highlight">רק לחברות גדולות</span>
          </h1>
          <p className="hero-sub">
            כל עסק, כל פרילנסר, כל מי שחוזר על אותן משימות שוב ושוב — יכול
            לחסוך שעות בשבוע. בלי לקודד. בלי לשכור מפתח. בלי תקציב ענק.
          </p>
          <Link href="/#pricing" className="btn-primary btn-large">
            קבל 7,000+ אוטומציות — ₪200 ←
          </Link>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-num">7,000+</span>
              <span className="hero-stat-label">אוטומציות מוכנות</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-num">15h+</span>
              <span className="hero-stat-label">חיסכון ממוצע בשבוע</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-num">1,200+</span>
              <span className="hero-stat-label">עסקים ישראלים</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-num">₪0</span>
              <span className="hero-stat-label">ידע טכני נדרש</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS AUTOMATION */}
      <section id="what">
        <div className="container">
          <div className="what-grid fade-up">
            <div className="what-text">
              <span className="section-tag">הגדרה פשוטה</span>
              <div className="big-quote">
                אוטומציה = אתה מגדיר פעם אחת, המחשב עושה את השאר לנצח.
              </div>
              <p>
                דמיין שיש לך עוזר שלא ישן, לא שוכח, ולא עושה טעויות. כל פעם
                שקורה משהו — נכנסת הזמנה, מגיעה הודעה, מישהו ממלא טופס — העוזר
                הזה יודע בדיוק מה לעשות.
              </p>
              <p>
                זה מה שאוטומציה עושה. היא מחברת בין האפליקציות שכבר יש לך,
                ומריצה תהליכים שלמים בלי שתגע בהם. Gmail, WhatsApp, Google
                Sheets, CRM — הכל מדבר אחד עם השני.
              </p>
              <p>
                אתה מגדיר את הכלל. האוטומציה מריצה אותו — 24 שעות ביממה, 7 ימים
                בשבוע.
              </p>
            </div>
            <div className="what-visual" aria-hidden="true">
              <p
                style={{
                  fontSize: '.75rem',
                  color: 'rgba(255,255,255,.5)',
                  letterSpacing: '.1em',
                  textTransform: 'uppercase',
                  marginBottom: 20,
                  fontFamily: 'var(--font-en)',
                }}
              >
                דוגמה לאוטומציה
              </p>
              <div className="flow-row">
                <div className="flow-box">לקוח ממלא טופס</div>
                <div className="flow-arrow">←</div>
                <div className="flow-box">מייל אוטומטי נשלח</div>
              </div>
              <div className="flow-row">
                <div className="flow-box">ליד נכנס ל-CRM</div>
                <div className="flow-arrow">←</div>
                <div className="flow-box">הודעת WhatsApp</div>
              </div>
              <div className="flow-row">
                <div className="flow-box">הזמנה חדשה</div>
                <div className="flow-arrow">←</div>
                <div className="flow-box">חשבונית אוטומטית</div>
              </div>
              <div className="flow-result">
                <div className="flow-result-label">התוצאה</div>
                <div className="flow-result-text">
                  אתה לא עשית כלום — הכל קרה לבד
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IS IT FOR */}
      <section id="who">
        <div className="container">
          <header className="section-header fade-up">
            <span className="section-tag">בשבילך</span>
            <h2 className="section-title">אוטומציה מתאימה לכולם — ממש לכולם</h2>
            <p className="section-subtitle">
              אין צורך בידע טכני, אין צורך בצוות פיתוח. אם יש לך עסק — אתה צריך
              אוטומציות.
            </p>
          </header>
          <div className="who-grid stagger-children">
            <div className="who-card">
              <div className="who-icon-wrap">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <h3 className="who-title">בעלי עסקים קטנים</h3>
              <p className="who-body">
                ניהול הזמנות, מענה ללקוחות, עדכוני מלאי, שליחת חשבוניות — כל זה
                יכול לרוץ לבד בזמן שאתה מתמקד בלגדל את העסק.
              </p>
            </div>
            <div className="who-card">
              <div className="who-icon-wrap">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h3 className="who-title">פרילנסרים וסוכנויות</h3>
              <p className="who-body">
                אוטומט onboarding לקוחות, דוחות שבועיים, ניהול פרויקטים
                ותזכורות — ותפנה עצמך לעבודה שמשלמים עליה.
              </p>
            </div>
            <div className="who-card">
              <div className="who-icon-wrap">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  <polyline points="17 6 23 6 23 12" />
                </svg>
              </div>
              <h3 className="who-title">יזמים וסטארטאפים</h3>
              <p className="who-body">
                צמח מהר יותר בלי לגייס עוד עובדים. עם אוטומציות נכונות, צוות קטן
                יכול לעשות את העבודה של עשרים.
              </p>
            </div>
            <div className="who-card">
              <div className="who-icon-wrap">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
              </div>
              <h3 className="who-title">חנויות אונליין</h3>
              <p className="who-body">
                מעקב הזמנות, עדכוני לקוחות, ניהול מלאי, ביקורות אוטומטיות — כל
                מה שחנות צריכה כדי לרוץ בלי מגע אנושי.
              </p>
            </div>
            <div className="who-card">
              <div className="who-icon-wrap">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="20" x2="18" y2="10" />
                  <line x1="12" y1="20" x2="12" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
              </div>
              <h3 className="who-title">מנהלי מכירות ושיווק</h3>
              <p className="who-body">
                ניהול לידים, followup אוטומטי, דוחות ביצועים, פרסום ברשתות
                חברתיות — הכל ללא מגע יד אדם.
              </p>
            </div>
            <div className="who-card">
              <div className="who-icon-wrap">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <h3 className="who-title">מי שרוצה ללמוד</h3>
              <p className="who-body">
                גם אם אין לך עסק עכשיו — מיומנות האוטומציה שווה זהב בשוק
                העבודה. זה כישור שמשלמים עליו טוב.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits">
        <div className="container">
          <header className="section-header fade-up">
            <span className="section-tag">למה זה משנה</span>
            <h2 className="section-title">
              שלוש סיבות שיגרמו לך להצטער שלא התחלת קודם
            </h2>
          </header>
          <div className="benefits-list">
            <div className="benefit-row fade-up">
              <div className="benefit-text">
                <div className="benefit-number">01</div>
                <h3 className="benefit-title">
                  זמן הוא הדבר היקר ביותר שיש לך
                </h3>
                <p className="benefit-body">
                  בעל עסק ממוצע מבזבז 15–20 שעות בשבוע על משימות שחוזרות על
                  עצמן. מיילים, עדכונים, העברת מידע בין מערכות — כולן יכולות
                  לרוץ לבד. תחשוב מה תעשה עם 15 שעות נוספות בשבוע.
                </p>
                <span className="benefit-pill">
                  ⏱️ 15+ שעות חיסכון שבועי בממוצע
                </span>
              </div>
              <div className="benefit-visual">
                <div className="benefit-stat-row">
                  <span className="benefit-stat-label">
                    לפני אוטומציה — שעות ידניות בשבוע
                  </span>
                  <span className="benefit-stat-val">18h</span>
                </div>
                <div className="benefit-stat-row">
                  <span className="benefit-stat-label">
                    אחרי אוטומציה — שעות ידניות בשבוע
                  </span>
                  <span className="benefit-stat-val green">2h</span>
                </div>
                <div className="benefit-stat-row">
                  <span className="benefit-stat-label">
                    שעות שחזרת לחיים שלך
                  </span>
                  <span className="benefit-stat-val green">+16h</span>
                </div>
              </div>
            </div>

            <div className="benefit-row reverse fade-up">
              <div className="benefit-text">
                <div className="benefit-number">02</div>
                <h3 className="benefit-title">פחות טעויות = יותר כסף</h3>
                <p className="benefit-body">
                  בני אדם עושים טעויות — במיוחד כשעושים את אותה פעולה שלוש
                  פעמים ביום. אוטומציה לא שוכחת, לא מתעייפת, ולא מחמיצה שורה.
                  לקוחות מרוצים יותר, פחות החזרים, פחות בלאגן.
                </p>
                <span className="benefit-pill">
                  ✅ 0 טעויות אנוש בתהליכים אוטומטיים
                </span>
              </div>
              <div className="benefit-visual">
                <div className="benefit-stat-row">
                  <span className="benefit-stat-label">
                    טעויות בהזנת נתונים ידנית
                  </span>
                  <span className="benefit-stat-val">~3%</span>
                </div>
                <div className="benefit-stat-row">
                  <span className="benefit-stat-label">
                    טעויות בתהליך אוטומטי
                  </span>
                  <span className="benefit-stat-val green">0%</span>
                </div>
                <div className="benefit-stat-row">
                  <span className="benefit-stat-label">
                    זמן תגובה לליד חדש
                  </span>
                  <span className="benefit-stat-val green">מיידי</span>
                </div>
              </div>
            </div>

            <div className="benefit-row fade-up">
              <div className="benefit-text">
                <div className="benefit-number">03</div>
                <h3 className="benefit-title">גדל בלי לגייס עוד עובדים</h3>
                <p className="benefit-body">
                  כל שקל שמשלמים על כוח אדם לביצוע משימות חוזרות — זה שקל
                  שבוזבז. עם אוטומציות, צוות של שניים יכול לנהל עסק של עשרה.
                  גדל מהר יותר, שלם פחות, ועדיין תן שירות מצוין.
                </p>
                <span className="benefit-pill">
                  📈 צמיחה ללא עלויות תפעוליות נוספות
                </span>
              </div>
              <div className="benefit-visual">
                <div className="benefit-stat-row">
                  <span className="benefit-stat-label">
                    עלות עוזר אדמין בחודש
                  </span>
                  <span className="benefit-stat-val">₪8,000+</span>
                </div>
                <div className="benefit-stat-row">
                  <span className="benefit-stat-label">
                    עלות AutoFlow (חד פעמי)
                  </span>
                  <span className="benefit-stat-val green">₪200</span>
                </div>
                <div className="benefit-stat-row">
                  <span className="benefit-stat-label">
                    חיסכון בשנה הראשונה
                  </span>
                  <span className="benefit-stat-val green">₪95,800+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OPPORTUNITY */}
      <section id="opportunity">
        <div className="container">
          <div className="opp-inner fade-up">
            <div className="opp-text">
              <span
                className="section-tag"
                style={{
                  background: 'rgba(48,185,246,.2)',
                  border: '1px solid rgba(48,185,246,.35)',
                }}
              >
                הזדמנות עסקית
              </span>
              <h2 className="section-title" style={{ marginTop: 4 }}>
                זה לא רק חיסכון —
                <br />
                זו הכנסה חדשה
              </h2>
              <p className="section-subtitle">
                עם הרישיון המסחרי הכלול בחבילה, אתה יכול לא רק להשתמש
                באוטומציות — אתה יכול למכור אותן ולבנות עסק שלם.
              </p>
              <Link
                href="/#pricing"
                className="btn-primary"
                style={{ marginTop: 32 }}
              >
                התחל עכשיו — ₪200 בלבד ←
              </Link>
            </div>
            <div className="opp-cards">
              <div className="opp-card">
                <div className="opp-card-icon">💼</div>
                <div>
                  <p className="opp-card-title">מכור אוטומציות ללקוחות</p>
                  <p className="opp-card-body">
                    לקחת וורקפלואו מהחבילה, התאמת אותו לצרכי לקוח, וגבית
                    ₪500–₪3,000 להגדרה. הרישיון המסחרי מאפשר את זה.
                  </p>
                </div>
              </div>
              <div className="opp-card">
                <div className="opp-card-icon">🏗️</div>
                <div>
                  <p className="opp-card-title">בנה שירות אוטומציה כחיסכון</p>
                  <p className="opp-card-body">
                    פתח סוכנות אוטומציה. עסקים ישלמו לך דמי ניהול חודשיים תמורת
                    תחזוקה ושיפורים שוטפים.
                  </p>
                </div>
              </div>
              <div className="opp-card">
                <div className="opp-card-icon">📦</div>
                <div>
                  <p className="opp-card-title">צור מוצר SaaS מוכן</p>
                  <p className="opp-card-body">
                    בנה מוצר ספציפי לניצ&apos;ה (חנויות, קלינאיות, משרדי
                    עו&quot;ד) על בסיס האוטומציות — ותמכור מנוי חודשי.
                  </p>
                </div>
              </div>
              <div className="opp-card">
                <div className="opp-card-icon">🎓</div>
                <div>
                  <p className="opp-card-title">למד ומכור קורסים</p>
                  <p className="opp-card-body">
                    הפוך למומחה אוטומציה ולמד אחרים. כלי + ידע = קורס שמוכר.
                    השוק הישראלי רעב לתוכן כזה.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW EASY */}
      <section id="how-easy">
        <div className="container">
          <header className="section-header fade-up">
            <span className="section-tag">כמה פשוט</span>
            <h2 className="section-title">
              מרכישה לאוטומציה פועלת — 4 צעדים
            </h2>
            <p className="section-subtitle">
              לא צריך קורס, לא צריך מפתח. רק לעקוב אחרי המדריך הכלול.
            </p>
          </header>
          <div className="steps-grid stagger-children">
            <div className="step-card">
              <div className="step-badge">1</div>
              <h3 className="step-title">רכוש את החבילה</h3>
              <p className="step-body">
                ₪200 תשלום חד פעמי, גישה מיידית לכל 7,000+ האוטומציות.
              </p>
            </div>
            <div className="step-card">
              <div className="step-badge">2</div>
              <h3 className="step-title">בחר אוטומציה</h3>
              <p className="step-body">
                עיין בספרייה, בחר מה רלוונטי לך — WhatsApp, Gmail, Sheets, CRM
                ועוד.
              </p>
            </div>
            <div className="step-card">
              <div className="step-badge">3</div>
              <h3 className="step-title">יבא ל-n8n</h3>
              <p className="step-body">
                העתק-הדבק JSON, לחץ ייבוא. המדריך הכלול מסביר כל צעד בעברית.
              </p>
            </div>
            <div className="step-card">
              <div className="step-badge">4</div>
              <h3 className="step-title">הרץ — זהו</h3>
              <p className="step-body">
                האוטומציה פועלת. אתה חופשי. היא תמשיך לעבוד כשאתה ישן.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="page-cta">
        <div className="container">
          <h2 className="page-cta-title">
            מוכן לשים את העסק שלך
            <br />
            <span className="highlight">על טייס אוטומטי?</span>
          </h2>
          <p className="page-cta-sub">
            7,000+ אוטומציות מוכנות, מדריכים בעברית, רישיון מסחרי, ועדכונים לכל
            החיים — הכל בתשלום חד פעמי אחד.
          </p>
          <div className="cta-price-wrap">
            <div>
              <div className="cta-old-price">₪997</div>
              <div className="cta-price">₪200</div>
            </div>
            <div>
              <div
                style={{
                  fontWeight: 800,
                  fontSize: '1rem',
                  color: 'var(--text-dark)',
                }}
              >
                תשלום חד פעמי
              </div>
              <div className="cta-price-note">
                גישה לנצח · אפס דמי מנוי
              </div>
            </div>
          </div>
          <div style={{ marginBottom: 0 }}>
            <Link href="/#pricing" className="btn-primary btn-large">
              קבל גישה מיידית ← ₪200
            </Link>
          </div>
          <div className="cta-trust">
            <span className="cta-trust-item">🔒 תשלום מאובטח</span>
            <span className="cta-trust-item">⚡ גישה מיידית</span>
            <span className="cta-trust-item">🏆 רישיון מסחרי</span>
            <span className="cta-trust-item">♾️ עדכונים לכל החיים</span>
          </div>
        </div>
      </section>
    </>
  );
}
