import type { Metadata } from 'next';
import Link from 'next/link';
import BodyClass from '@/components/BodyClass';
import FadeUpObserver from '@/components/FadeUpObserver';
import TestimonialCard from '@/components/TestimonialCard';

export const metadata: Metadata = {
  title: 'ביקורות לקוחות | AutoFlow',
  description:
    'ביקורות אמיתיות מלקוחות AutoFlow — 4.97 מתוך 5 על בסיס 1,366 ביקורות.',
};

const testimonials = [
  {
    text: 'הוורקפלואים לMake.com ול-n8n עזרו לי לאוטמט ניהול לידים, מיילים, וסושיאל מדיה בכמה קליקים.',
    name: 'אלכס ר.',
    role: 'פרילנסר',
  },
  {
    text: 'אנחנו משתמשים בסינריאות Make.com ובפרומפטים כל יום. קל להגדרה, והמדריכים ברורים לגמרי.',
    name: 'לאורה מ.',
    role: 'מנהלת סוכנות שיווק',
  },
  {
    text: 'אני לא אדם טכני, אבל עם המדריכים הכלולים הייתי פעיל תוך דקות. אוטומציה מעולם לא הייתה קלה יותר.',
    name: 'שם ק.',
    role: 'בעל עסק קטן',
  },
  {
    text: 'מסינכרון הזמנות לGoogle Sheets ועד שליחת תזכורות ב-WhatsApp — הצוות הקטן שלנו עובד חכם יותר.',
    name: 'דייגו פ.',
    role: 'מנהל צוות',
  },
  {
    text: 'קניתי בשביל Make.com, אבל סיימתי לאהוב את n8n אפילו יותר. ועדכונים לכל החיים — בונוס ענק.',
    name: 'אלנה ק.',
    role: 'יזמת',
  },
  {
    text: 'עם הרישיון המסחרי, אני כבר מוכר הגדרות וורקפלואים כשירות. החבילה הפכה להכנסה נוספת.',
    name: 'יוסי ת.',
    role: 'יועץ אוטומציה',
  },
  {
    text: 'חיברתי את הטופס ל-CRM תוך 20 דקות. בלי לגעת בקוד, בלי לשלם לפרילנסר. שווה כל שקל.',
    name: 'מיכל ס.',
    role: 'בעלת עסק',
  },
  {
    text: 'חסכנו יותר מ-15 שעות עבודה שבועיות. ה-ROI הכי מהיר שעשינו בעסק.',
    name: 'רון א.',
    role: 'מנכ"ל סטארטאפ',
  },
  {
    text: 'המדריכים בעברית עשו את כל ההבדל. לא הצלחתי להתחיל עם n8n — אחרי החבילה הזו הייתי פעיל תוך שעה.',
    name: 'נטלי ג.',
    role: 'מנהלת שיווק',
  },
];

export default function ReviewsPage() {
  return (
    <>
      <BodyClass className="reviews-body" />
      <FadeUpObserver />

      <section id="page-hero">
        <div className="container">
          <span className="section-tag page-hero-tag">ביקורות לקוחות</span>
          <h1 className="page-hero-title">ביקורות אמיתיות מלקוחות AutoFlow</h1>
          <p className="page-hero-sub">
            4.97 מתוך 5 — על בסיס 1,366 ביקורות
          </p>
        </div>
      </section>

      <section id="testimonials">
        <div className="container">
          <div className="review-count-bar fade-up">
            <span className="review-count-stars">★★★★★</span>
            <span className="review-count-text">
              <strong>4.97</strong> / 5
            </span>
            <span className="review-count-divider" />
            <span className="review-count-badge">
              ✅ <strong>1,366</strong>&nbsp;ביקורות מאומתות
            </span>
            <span className="review-count-divider" />
            <span className="review-count-text">
              <strong>1,200+</strong> לקוחות מרוצים
            </span>
          </div>
          <div className="testimonials-grid stagger-children">
            {testimonials.map((t, i) => (
              <TestimonialCard
                key={i}
                text={t.text}
                name={t.name}
                role={t.role}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="reviews-cta">
        <div className="container">
          <p className="reviews-cta-title">מוכן להצטרף ל-1,200+ עסקים?</p>
          <p className="reviews-cta-sub">
            7,000+ אוטומציות מוכנות. ₪200 חד פעמי. גישה מיידית.
          </p>
          <Link href="/#pricing" className="btn-primary btn-large">
            חזרה לרכישה ← לחץ כאן
          </Link>
        </div>
      </section>
    </>
  );
}
