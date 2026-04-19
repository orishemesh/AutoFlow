'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Footer() {
  const pathname = usePathname() || '/';
  const [year, setYear] = useState('');

  useEffect(() => {
    setYear(String(new Date().getFullYear()));
  }, []);

  const isThankYou = pathname === '/thank-you';
  const isLegal =
    pathname === '/terms' ||
    pathname === '/privacy' ||
    pathname === '/refund';

  // Thank-you page — minimal centered footer
  if (isThankYou) {
    return (
      <footer role="contentinfo">
        <div className="footer-inner-ty">
          <div className="footer-logo">AutoFlow</div>
          <p className="footer-copy">
            © <span>{year}</span> AutoFlow. כל הזכויות שמורות.
          </p>
          <span className="footer-domain">autoflowil.co.il</span>
        </div>
      </footer>
    );
  }

  // Legal pages — footer with footer-legal-links (different class)
  if (isLegal) {
    return (
      <footer role="contentinfo">
        <div className="container footer-inner">
          <div className="footer-logo-wrap">
            <div className="footer-logo">AutoFlow</div>
            <span className="footer-tagline">
              אוטומציות מוכנות לעסקים ישראליים
            </span>
          </div>
          <div className="footer-legal-links">
            <Link href="/terms">תנאי שימוש</Link>
            <Link href="/privacy">מדיניות פרטיות</Link>
            <Link href="/refund">מדיניות החזרים</Link>
          </div>
          <p className="footer-copy">
            © <span>{year}</span> AutoFlow. כל הזכויות שמורות.
          </p>
          <span className="footer-domain">autoflowil.co.il</span>
        </div>
      </footer>
    );
  }

  // Home / reviews / use-cases — full footer with nav + inner row
  return (
    <footer role="contentinfo">
      <div
        className="container"
        style={{ display: 'flex', flexDirection: 'column', gap: 0 }}
      >
        <nav className="footer-legal" aria-label="קישורים משפטיים">
          {pathname !== '/' && <Link href="/">דף הבית</Link>}
          <Link href="/reviews">ביקורות</Link>
          <Link href="/use-cases">לצפייה בדוגמאות</Link>
          {pathname === '/' && <Link href="/automation">מה זה אוטומציה?</Link>}
          <Link href="/terms">תנאי שימוש</Link>
          <Link href="/privacy">מדיניות פרטיות</Link>
          <Link href="/refund">מדיניות החזרים</Link>
        </nav>
        <div className="footer-inner">
          <div className="footer-logo-wrap">
            <div className="footer-logo">AutoFlow</div>
            <span className="footer-tagline">
              אוטומציות מוכנות לעסקים ישראליים
            </span>
          </div>
          <p className="footer-copy">
            © <span>{year}</span> AutoFlow. כל הזכויות שמורות.
          </p>
          <span className="footer-domain">autoflowil.co.il</span>
        </div>
      </div>
    </footer>
  );
}
