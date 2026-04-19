export default function PainSection() {
  return (
    <section id="pain" aria-labelledby="pain-heading">
      <div className="container">
        <header className="section-header fade-up">
          <span className="section-tag">מה הבעיה?</span>
          <h2 className="section-title" id="pain-heading">
            האם זה נשמע מוכר?
          </h2>
          <p className="section-subtitle">
            אתה לא לבד. רוב בעלי העסקים בישראל בדיוק שם.
          </p>
        </header>
        <p className="pain-urgency">
          כל יום שאתה לא אוטומט — אתה מפסיד כסף.
        </p>
        <div className="pain-grid stagger-children" role="list">
          <article className="pain-card" role="listitem">
            <h3 className="pain-title">מבזבז שעות על משימות חוזרות</h3>
            <p className="pain-body">
              אותו מייל, אותו עדכון בגיליון, אותה הודעה — כל יום, ידנית. יש לך
              עסק לנהל, לא robot להיות.
            </p>
          </article>
          <article className="pain-card" role="listitem">
            <h3 className="pain-title">כלי אוטומציה? יקרים ומסובכים מדי</h3>
            <p className="pain-body">
              מנויים חודשיים, ידע טכני, שבועות של הגדרה. ניסית פעם? ידעת שאתה
              צריך את זה — אבל מאיפה מתחילים?
            </p>
          </article>
          <article className="pain-card" role="listitem">
            <h3 className="pain-title">אין זמן לבנות מאפס</h3>
            <p className="pain-body">
              אתה יודע שאוטומציות יכולות לשנות את העסק שלך. אבל לבנות כל אחת לבד
              לוקח ימים. מי יש לו ימים?
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
