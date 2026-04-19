export default function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading">
      <div className="container">
        <div className="about-inner">
          <div className="about-text-col fade-up">
            <span className="section-tag">על AutoFlow</span>
            <h2 className="about-title" id="about-heading">
              נוצרנו כדי שאוטומציה
              <br />
              <span className="highlight">תהיה נגישה לכולם</span>
            </h2>
            <p className="about-body">
              AutoFlow נוסדה על ידי יזמים ישראליים שנמאס להם לבנות את אותו
              וורקפלואו שוב ושוב. ראינו עסקים שמאבדים שעות על משימות ידניות,
              ואמרנו — יש דרך טובה יותר.
            </p>
            <p className="about-body">
              היום, עם 7,000+ אוטומציות מוכנות, אנחנו מאפשרים לאלפי עסקים
              ישראליים לעבוד חכם יותר — בלי לקודד, בלי מנויים חודשיים, ובלי לבזבז
              שבועות על הגדרה.
            </p>
            <div className="about-stats">
              <div className="about-stat">
                <span className="about-stat-num">7K+</span>
                <span className="about-stat-label">אוטומציות</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-num">1.2K</span>
                <span className="about-stat-label">לקוחות</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-num">₪200</span>
                <span className="about-stat-label">חד פעמי</span>
              </div>
            </div>
          </div>
          <div className="about-visual" aria-hidden="true">
            <p className="about-visual-headline">
              עסק ישראלי.
              <br />
              אוטומציה ישראלית.
            </p>
            <p className="about-visual-sub">
              מדריכים בעברית, תמיכה לכלים ישראליים כמו חשבונית ירוקה ו-WhatsApp
              Business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
