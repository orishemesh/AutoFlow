'use client';

import Link from 'next/link';
import { useState } from 'react';

type MenuLink = { href: string; label: string };

type Props = {
  links: MenuLink[];
  ctaHref: string;
};

export default function MobileMenu({ links, ctaHref }: Props) {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <>
      <button
        className="nav-hamburger"
        id="nav-hamburger"
        aria-label={open ? 'סגור תפריט' : 'פתח תפריט'}
        aria-expanded={open}
        aria-controls="nav-mobile-menu"
        onClick={() => setOpen((o) => !o)}
      >
        {!open ? (
          <svg
            id="icon-ham"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.2}
            strokeLinecap="round"
            aria-hidden="true"
          >
            <line x1="3" y1="6" x2="19" y2="6" />
            <line x1="3" y1="11" x2="19" y2="11" />
            <line x1="3" y1="16" x2="19" y2="16" />
          </svg>
        ) : (
          <svg
            id="icon-x"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.2}
            strokeLinecap="round"
            aria-hidden="true"
          >
            <line x1="4" y1="4" x2="18" y2="18" />
            <line x1="18" y1="4" x2="4" y2="18" />
          </svg>
        )}
      </button>

      <div
        className={`nav-mobile-menu${open ? ' open' : ''}`}
        id="nav-mobile-menu"
        aria-hidden={!open}
      >
        <div className="nav-mobile-inner">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-mobile-link"
              onClick={close}
            >
              {link.label}
            </Link>
          ))}
          <div className="nav-mobile-cta-wrap">
            <Link href={ctaHref} className="btn-primary" onClick={close}>
              רכוש עכשיו ←
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
