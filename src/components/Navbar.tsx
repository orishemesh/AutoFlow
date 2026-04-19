'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import AnnouncementBar from './AnnouncementBar';
import MobileMenu from './MobileMenu';

const HomeIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9.5z" />
    <polyline points="9 21 9 12 15 12 15 21" />
  </svg>
);

export default function Navbar() {
  const pathname = usePathname() || '/';

  // Navbar scroll shadow effect
  useEffect(() => {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    const onScroll = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);

  // Home page: /
  const isHome = pathname === '/';
  const isReviews = pathname === '/reviews';
  const isUseCases = pathname === '/use-cases';
  const isAutomation = pathname === '/automation';
  const isThankYou = pathname === '/thank-you';
  const isLegal =
    pathname === '/terms' ||
    pathname === '/privacy' ||
    pathname === '/refund';

  // Thank-you variant: simple static navbar
  if (isThankYou) {
    return (
      <nav id="navbar-ty" role="navigation" aria-label="ניווט">
        <div className="navbar-inner-ty">
          <Link
            href="/"
            className="navbar-logo"
            aria-label="AutoFlow — חזרה לדף הבית"
          >
            AutoFlow <span className="logo-dot" aria-hidden="true" />
          </Link>
          <Link href="/" className="nav-link">
            ← חזרה לדף הבית
          </Link>
        </div>
      </nav>
    );
  }

  // Legal variant: simple logo + CTA only (no hamburger, no nav links)
  if (isLegal) {
    return (
      <nav id="navbar" role="navigation" aria-label="ניווט ראשי">
        <div className="container navbar-inner">
          <Link
            href="/"
            className="navbar-logo"
            aria-label="AutoFlow — דף הבית"
          >
            AutoFlow
            <span className="logo-dot" aria-hidden="true" />
          </Link>
          <Link href="/#pricing" className="btn-primary navbar-cta-legal">
            רכוש עכשיו ←
          </Link>
        </div>
      </nav>
    );
  }

  // Mobile menu links
  const mobileLinks = [
    { href: '/', label: 'דף הבית' },
    { href: '/reviews', label: 'ביקורות' },
    { href: '/use-cases', label: 'לצפייה בדוגמאות' },
    { href: '/automation', label: 'מה זה אוטומציה?' },
  ];

  const pricingHref = isHome ? '#pricing' : '/#pricing';

  return (
    <>
      {isHome && <AnnouncementBar />}
      <nav id="navbar" role="navigation" aria-label="ניווט ראשי">
        <div className="container navbar-inner">
          <Link
            href="/"
            className="navbar-logo"
            aria-label="AutoFlow — דף הבית"
          >
            AutoFlow
            <span className="logo-dot" aria-hidden="true" />
          </Link>

          <div
            className="nav-desktop"
            style={{ display: 'flex', alignItems: 'center', gap: 20 }}
          >
            {!isHome && (
              <Link
                href="/"
                className="nav-home-icon"
                aria-label="חזרה לדף הבית"
                title="דף הבית"
              >
                <HomeIcon />
              </Link>
            )}

            <Link
              href="/reviews"
              className="nav-desktop-link"
              style={
                isReviews
                  ? {
                      color: '#fff',
                      fontSize: '.9rem',
                      fontWeight: 700,
                    }
                  : {
                      color: 'rgba(255,255,255,.8)',
                      fontSize: '.9rem',
                      fontWeight: 600,
                      transition: 'color .2s',
                    }
              }
            >
              ביקורות
            </Link>

            <Link
              href="/use-cases"
              className="nav-desktop-link"
              style={
                isUseCases
                  ? {
                      color: '#fff',
                      fontSize: '.9rem',
                      fontWeight: 700,
                    }
                  : {
                      color: 'rgba(255,255,255,.8)',
                      fontSize: '.9rem',
                      fontWeight: 600,
                      transition: 'color .2s',
                    }
              }
            >
              לצפייה בדוגמאות
            </Link>

            {(isHome || isUseCases || isAutomation) && (
              <Link
                href="/automation"
                className="nav-desktop-link"
                style={
                  isAutomation
                    ? {
                        color: '#fff',
                        fontSize: '.9rem',
                        fontWeight: 700,
                      }
                    : {
                        color: 'rgba(255,255,255,.8)',
                        fontSize: '.9rem',
                        fontWeight: 600,
                        transition: 'color .2s',
                      }
                }
              >
                מה זה אוטומציה?
              </Link>
            )}

            <Link href={pricingHref} className="btn-primary navbar-cta">
              רכוש עכשיו ←
            </Link>
          </div>

          <MobileMenu links={mobileLinks} ctaHref={pricingHref} />
        </div>
      </nav>
    </>
  );
}
