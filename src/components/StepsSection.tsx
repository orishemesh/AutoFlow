export default function StepsSection() {
  return (
    <section id="how" aria-labelledby="how-heading">
      <div className="container">
        <header className="section-header fade-up">
          <span className="section-tag">איך זה עובד</span>
          <h2 className="section-title" id="how-heading">
            שלושה צעדים. זהו.
          </h2>
          <p className="section-subtitle">
            מרכישה ועד אוטומציה פועלת — תוך דקות.
          </p>
        </header>
        <div className="how-steps stagger-children">
          <div className="how-step">
            <div className="step-number">1</div>
            <h3 className="step-title">רכוש</h3>
            <p className="step-desc">
              שלם פעם אחת, ₪200 בלבד. מיד לאחר הרכישה — גישה לכל הקבצים. אין
              המתנה.
            </p>
          </div>
          <div className="how-step">
            <div className="step-number">2</div>
            <h3 className="step-title">הורד</h3>
            <p className="step-desc">
              קובץ ZIP אחד עם 7,000+ וורקפלואים, מדריכים בעברית, ופרומפטים לAI.
            </p>
          </div>
          <div className="how-step">
            <div className="step-number">3</div>
            <h3 className="step-title">ייבא והרץ</h3>
            <p className="step-desc">
              עקוב אחרי המדריך הכלול, ייבא לn8n או Make.com — אם אתה יכול להעתיק
              ולהדביק, אתה יכול לעשות את זה.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
