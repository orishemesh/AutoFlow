export default function BonusSection() {
  return (
    <section id="bonuses" aria-labelledby="bonuses-heading">
      <div className="container">
        <header className="section-header fade-up">
          <span className="section-tag">בונוסים בחינם</span>
          <h2 className="section-title" id="bonuses-heading">
            שלושה בונוסים — בלי עלות נוספת
          </h2>
        </header>
        <div className="bonuses-grid stagger-children">
          <article className="bonus-card">
            <h3 className="bonus-title">מדריך Zapier המלא</h3>
            <p className="bonus-body">
              שלב בשלב מ-Zap ראשון ועד וורקפלואים מורכבים — גם ללא ניסיון קודם.
            </p>
            <span className="bonus-badge">🎁 בחינם</span>
          </article>
          <article className="bonus-card">
            <h3 className="bonus-title">ספריית פרומפטים לAI</h3>
            <p className="bonus-body">
              מאות פרומפטים מוכנים לChatGPT המיועדים לסינריאות n8n ו-Make.com —
              העתק, הדבק, הרץ.
            </p>
            <span className="bonus-badge">🎁 בחינם</span>
          </article>
          <article className="bonus-card">
            <h3 className="bonus-title">עדכונים לכל החיים — בחינם</h3>
            <p className="bonus-body">
              כל פעם שנוסיף וורקפלואים חדשים, תקבל גישה אוטומטית. שלמת פעם אחת,
              מקבל לנצח.
            </p>
            <span className="bonus-badge">🎁 בחינם</span>
          </article>
        </div>
      </div>
    </section>
  );
}
