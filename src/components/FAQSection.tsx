'use client';

import { useState } from 'react';

type FAQItem = { q: string; a: string };

const items: FAQItem[] = [
  {
    q: 'מה כלול בחבילה?',
    a: '7,000+ וורקפלואים לn8n, 50+ סינריאות לMake.com, מדריך ייבוא לn8n ולMake.com, רישיון מסחרי מורחב, מדריך Zapier, וספריית פרומפטים לAI.',
  },
  {
    q: 'האם אני צריך ידע טכני?',
    a: 'בכלל לא. אם אתה יכול להעתיק ולהדביק, אתה יכול להשתמש בחבילה. הכל מגיע עם הוראות ברורות בעברית.',
  },
  {
    q: 'איך אני מקבל את הקבצים?',
    a: 'מיד לאחר הרכישה תקבל קישור להורדה מיידית. אין המתנה, אין שליחה — הכל דיגיטלי.',
  },
  {
    q: 'אילו פלטפורמות נתמכות?',
    a: 'n8n (self-hosted או cloud) ו-Make.com. הבונוסים כוללים מדריך Zapier ופרומפטים שעובדים עם כל node שמשתמש ב-GPT.',
  },
  {
    q: 'האם יש מדיניות החזר?',
    a: 'בגלל שמדובר במוצר דיגיטלי עם גישה מיידית, אין אפשרות להחזר לאחר ההורדה. שאלות? שלח אלינו ל-support@autoflowil.com',
  },
  {
    q: 'האם החבילה בעברית?',
    a: 'המדריכים תורגמו לעברית. הוורקפלואים הם קבצי JSON — הם עובדים בכל שפה ישירות בתוך n8n או Make.com.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" aria-labelledby="faq-heading">
      <div className="container">
        <header className="section-header fade-up">
          <span className="section-tag">שאלות נפוצות</span>
          <h2 className="section-title" id="faq-heading">
            יש לך שאלה? יש לנו תשובה.
          </h2>
        </header>
        <div className="faq-list" role="list">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`faq-item${isOpen ? ' open' : ''}`}
                role="listitem"
              >
                <button
                  className="faq-trigger"
                  aria-expanded={isOpen}
                  aria-controls={`faq-body-${i + 1}`}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span>{item.q}</span>
                  <span className="faq-icon">+</span>
                </button>
                <div
                  className="faq-body"
                  id={`faq-body-${i + 1}`}
                  hidden={!isOpen}
                >
                  <div className="faq-inner">{item.a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
