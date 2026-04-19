'use client';

import { useState } from 'react';

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div id="announcement-bar" role="banner">
      <span className="ann-badge">מחיר השקה</span>
      <span>
        7,000+ אוטומציות ב-₪200 בלבד —{' '}
        <a href="#pricing">לרכישה מיידית ←</a>
      </span>
      <button
        className="ann-close"
        aria-label="סגור"
        onClick={() => {
          setVisible(false);
          const nav = document.getElementById('navbar');
          if (nav) nav.classList.add('ann-hidden');
          document.body.classList.remove('has-announcement');
        }}
      >
        ✕
      </button>
    </div>
  );
}
