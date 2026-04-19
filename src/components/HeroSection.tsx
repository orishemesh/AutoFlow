import FloatingIcons from './FloatingIcons';

export default function HeroSection() {
  return (
    <section id="hero" aria-labelledby="hero-heading">
      <FloatingIcons />

      <div className="container">
        <span className="section-tag hero-eyebrow">
          הספרייה הגדולה ביותר בישראל
        </span>
        <h1 className="hero-h1" id="hero-heading">
          גלה אוטומציות מוכנות
          <br />
          <span className="highlight">שחוסכות לך שעות כל שבוע</span>
        </h1>
        <p className="hero-sub">
          בנה חכם יותר, צמח מהר יותר — גם אם אין לך רקע טכני. 7,000+ וורקפלואים
          מוכנים לייבוא מיידי ל-n8n ו-Make.com.
        </p>
        <div className="hero-cta-wrap">
          <a href="#pricing" className="btn-primary btn-large">
            קבל את החבילה עכשיו ←
          </a>
        </div>
        <div className="hero-badges" role="list">
          <div className="hero-badge" role="listitem">
            <span className="badge-num">7,000+</span>
            <span>אוטומציות</span>
          </div>
          <div className="hero-badge" role="listitem">
            <span className="badge-num">₪200</span>
            <span>חד פעמי</span>
          </div>
          <div className="hero-badge" role="listitem">
            <span>0 ידע טכני נדרש</span>
          </div>
        </div>
      </div>
    </section>
  );
}
