import type { Metadata } from 'next';
import Link from 'next/link';
import BodyClass from '@/components/BodyClass';
import FadeUpObserver from '@/components/FadeUpObserver';

export const metadata: Metadata = {
  title: 'איך זה עובד | AutoFlow — דוגמאות אמיתיות',
  description:
    '6 דוגמאות אמיתיות לאוטומציות מתוך החבילה — ראו כמה שעות תחסכו כל שבוע.',
};

type Tool = { src: string; alt: string; label: string };
type UseCase = {
  number: string;
  img: string;
  imgAlt: string;
  headline: string;
  body: string;
  timeSaved: string;
  tools: Tool[];
};

const useCases: UseCase[] = [
  {
    number: '01',
    img: '/automation%20situation/insta-test.png',
    imgAlt: 'מגיב אוטומטי לדיירקט מסג\' באינסטגרם',
    headline: 'מגיב אוטומטי לDM באינסטגרם — מופעל על ידי AI',
    body: 'תפוס כל הודעה נכנסת באינסטגרם, השתמש בAI להבנת ההקשר, וצור תשובה טבעית ומותאמת אישית לפי ההוראות שלך — הכל בשניות, בלי שתגע בטלפון. לקוחות מקבלים מענה מיידי 24/7.',
    timeSaved: 'חוסך 5–10 שעות בשבוע',
    tools: [
      { src: 'https://cdn.simpleicons.org/instagram/E4405F', alt: 'Instagram', label: 'Instagram' },
      { src: 'https://cdn.simpleicons.org/openai/000000', alt: 'OpenAI', label: 'OpenAI' },
    ],
  },
  {
    number: '02',
    img: '/automation%20situation/notion-job.png',
    imgAlt: 'הזנת נתונים חכמה ועדכון צוות',
    headline: 'הזנת נתונים חכמה ועדכון צוות אוטומטי',
    body: 'מקבל טקסט גולמי כמו מודעות דרושים, מיילים, או הודעות — מחלץ את הפרטים המרכזיים בעזרת AI, מתעד הכל ישירות בגיליון, ומעדכן את הצוות ב-Slack. בלי העתק-הדבק, בלי שגיאות.',
    timeSaved: 'חוסך 5–8 שעות בשבוע',
    tools: [
      { src: 'https://cdn.simpleicons.org/openai/000000', alt: 'OpenAI', label: 'OpenAI' },
      { src: 'https://cdn.simpleicons.org/googlesheets/34A853', alt: 'Google Sheets', label: 'Google Sheets' },
      { src: 'https://cdn.simpleicons.org/slack/4A154B', alt: 'Slack', label: 'Slack' },
    ],
  },
  {
    number: '03',
    img: '/automation%20situation/solar-output.png',
    imgAlt: 'תחזית תפוקה סולארית אוטומטית',
    headline: 'תחזית תפוקה סולארית אוטומטית',
    body: 'מקבל נתוני סביבה ואנרגיה, משתמש בAI לניתוח ולחיזוי תפוקת אנרגיה סולארית, ומתעד את התחזיות הפרטניות ישירות בגיליון. לא עוד חישובים ידניים ועדכוני טבלאות שגוזלים שעות.',
    timeSaved: 'חוסך 4–6 שעות בשבוע',
    tools: [
      { src: 'https://cdn.simpleicons.org/openai/000000', alt: 'OpenAI', label: 'OpenAI' },
      { src: 'https://cdn.simpleicons.org/googlesheets/34A853', alt: 'Google Sheets', label: 'Google Sheets' },
    ],
  },
  {
    number: '04',
    img: '/automation%20situation/monthly-social.png',
    imgAlt: 'דוח חודשי אוטומטי לסושיאל מדיה',
    headline: 'דוח ביצועי סושיאל מדיה חודשי — בלי לגעת בזה',
    body: 'מושך מדדים מהרשתות החברתיות, מנתח טרנדים ומייצר תובנות בעזרת AI, מתעד הכל בגיליון מסודר, ושולח סיכום ישירות ל-Slack. לא עוד ייצוא ידני מ-5 פלטפורמות שונות.',
    timeSaved: 'חוסך 3–5 שעות בשבוע',
    tools: [
      { src: 'https://cdn.simpleicons.org/openai/000000', alt: 'OpenAI', label: 'OpenAI' },
      { src: 'https://cdn.simpleicons.org/googlesheets/34A853', alt: 'Google Sheets', label: 'Google Sheets' },
      { src: 'https://cdn.simpleicons.org/slack/4A154B', alt: 'Slack', label: 'Slack' },
    ],
  },
  {
    number: '05',
    img: '/automation%20situation/sales-agent.png',
    imgAlt: 'סוכן מכירות AI בWhatsApp',
    headline: 'סוכן מכירות AI ב-WhatsApp — פועל 24/7',
    body: 'קורא את קטלוג המוצרים שלך ולומד את המידע, ואז משמש כסוכן מכירות AI זמין 24/7 ב-WhatsApp — עונה על שאלות לקוחות מיידית ובדיוק. לא עוד לידים שהולכים לאיבוד כי לא ענית מהר מספיק.',
    timeSaved: 'חוסך 10–15 שעות בשבוע',
    tools: [
      { src: 'https://cdn.simpleicons.org/whatsapp/25D366', alt: 'WhatsApp', label: 'WhatsApp' },
      { src: 'https://cdn.simpleicons.org/openai/000000', alt: 'OpenAI', label: 'OpenAI' },
    ],
  },
  {
    number: '06',
    img: '/automation%20situation/expense-tracker.png',
    imgAlt: 'מעקב הוצאות אוטומטי',
    headline: 'מגיב אוטומטי לDM — גם כשאתה ישן',
    body: 'זיהוי הודעות נכנסות ב-Instagram DM, ניתוח ההקשר בעזרת AI, ושליחת תגובה מותאמת אישית לפי ההוראות שלך — הכל מיידי ואוטומטי. לא עוד לידים שמחכים ואז הולכים למתחרים.',
    timeSaved: 'חוסך 5–10 שעות בשבוע',
    tools: [
      { src: 'https://cdn.simpleicons.org/instagram/E4405F', alt: 'Instagram', label: 'Instagram' },
      { src: 'https://cdn.simpleicons.org/openai/000000', alt: 'OpenAI', label: 'OpenAI' },
    ],
  },
];

export default function UseCasesPage() {
  return (
    <>
      <BodyClass className="use-cases-body" />
      <FadeUpObserver />

      <main id="main-content">
      <section id="page-hero">
        <div className="container">
          <span className="section-tag page-hero-tag">דוגמאות מהחבילה</span>
          <h1 className="page-hero-title">
            תראו איך AutoFlow חוסך שעות בשבוע
          </h1>
          <p className="page-hero-sub">
            דוגמאות אמיתיות מתוך החבילה — כל אוטומציה חוסכת זמן, כסף, וטעויות
            אנוש
          </p>
        </div>
      </section>

      <section id="use-cases">
        <div className="container">
          {useCases.map((uc) => (
            <div key={uc.number} className="use-case fade-up">
              <div className="use-case-img-wrap">
                <img
                  src={uc.img}
                  alt={uc.imgAlt}
                  className="use-case-img"
                  loading="lazy"
                />
              </div>
              <div className="use-case-text">
                <div className="use-case-number">{uc.number}</div>
                <h2 className="use-case-headline">{uc.headline}</h2>
                <p className="use-case-body">{uc.body}</p>
                <span className="time-saved-badge">{uc.timeSaved}</span>
                <div className="use-case-tools">
                  {uc.tools.map((t, i) => (
                    <span key={i} className="tool-label">
                      <img src={t.src} alt={t.alt} />
                      {t.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="use-cases-cta">
        <div className="container">
          <p className="cta-title">רוצה את כל 7,000+ האוטומציות?</p>
          <p className="cta-sub">
            כל מה שראיתם כאן — ועוד אלפים — כלולים בחבילה אחת, ₪200 תשלום חד
            פעמי.
          </p>
          <Link href="/#pricing" className="btn-primary btn-large">
            קבל גישה לכל 7,000+ האוטומציות ← ₪200
          </Link>
        </div>
      </section>
      </main>
    </>
  );
}
