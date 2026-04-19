import BodyClass from '@/components/BodyClass';
import FadeUpObserver from '@/components/FadeUpObserver';
import HeroSection from '@/components/HeroSection';
import PainSection from '@/components/PainSection';
import ToolsGrid from '@/components/ToolsGrid';
import BonusSection from '@/components/BonusSection';
import MidCTA from '@/components/MidCTA';
import StepsSection from '@/components/StepsSection';
import AboutSection from '@/components/AboutSection';
import PricingBox from '@/components/PricingBox';
import FAQSection from '@/components/FAQSection';

export default function HomePage() {
  return (
    <>
      <BodyClass className="home-body has-announcement" />
      <FadeUpObserver />

      <main id="main-content">
        <HeroSection />
        <PainSection />
        <ToolsGrid />
        <BonusSection />
        <MidCTA />
        <StepsSection />
        <AboutSection />
        <PricingBox />
        <FAQSection />

        <section id="final-cta" aria-labelledby="final-cta-heading">
          <div className="container">
            <span
              className="section-tag"
              style={{
                background: 'rgba(48,185,246,.18)',
                color: 'var(--sky-blue)',
                border: '1px solid rgba(48,185,246,.3)',
              }}
            >
              מוכן להתחיל?
            </span>
            <h2 className="final-cta-h2" id="final-cta-heading">
              מוכן לשים את העסק שלך על טייס אוטומטי?
            </h2>
            <p className="final-cta-sub">
              7,000+ אוטומציות מחכות לך. תשלום אחד. גישה לנצח.
            </p>
            <a href="#pricing" className="btn-primary btn-large">
              קבל גישה עכשיו — ₪200 בלבד ←
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
