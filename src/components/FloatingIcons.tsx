'use client';

import { useEffect, useRef } from 'react';

type Icon = {
  src: string;
  alt: string;
  label: string;
  style: React.CSSProperties & Record<string, string>;
};

const icons: Icon[] = [
  {
    src: 'https://cdn.simpleicons.org/gmail/EA4335',
    alt: 'Gmail',
    label: 'Gmail',
    style: { top: '11%', left: '5%', '--fi-dur': '6.1s', '--fi-delay': '0s' } as React.CSSProperties & Record<string, string>,
  },
  {
    src: 'https://cdn.simpleicons.org/slack/4A154B',
    alt: 'Slack',
    label: 'Slack',
    style: { top: '9%', right: '5%', '--fi-dur': '5.8s', '--fi-delay': '-1.2s' } as React.CSSProperties & Record<string, string>,
  },
  {
    src: 'https://cdn.simpleicons.org/n8n/EA4B71',
    alt: 'n8n',
    label: 'n8n',
    style: { top: '32%', left: '2%', '--fi-dur': '7.2s', '--fi-delay': '-2.1s' } as React.CSSProperties & Record<string, string>,
  },
  {
    src: 'https://cdn.simpleicons.org/make/6D00CC',
    alt: 'Make',
    label: 'Make',
    style: { top: '30%', right: '2%', '--fi-dur': '6.7s', '--fi-delay': '-0.8s' } as React.CSSProperties & Record<string, string>,
  },
  {
    src: 'https://cdn.simpleicons.org/googlesheets/34A853',
    alt: 'Sheets',
    label: 'Sheets',
    style: { top: '58%', left: '3%', '--fi-dur': '6.4s', '--fi-delay': '-3s' } as React.CSSProperties & Record<string, string>,
  },
  {
    src: 'https://cdn.simpleicons.org/whatsapp/25D366',
    alt: 'WhatsApp',
    label: 'WhatsApp',
    style: { top: '60%', right: '3%', '--fi-dur': '5.5s', '--fi-delay': '-1.7s' } as React.CSSProperties & Record<string, string>,
  },
  {
    src: 'https://cdn.simpleicons.org/shopify/96BF48',
    alt: 'Shopify',
    label: 'Shopify',
    style: { top: '78%', left: '6%', '--fi-dur': '7s', '--fi-delay': '-0.4s' } as React.CSSProperties & Record<string, string>,
  },
  {
    src: 'https://cdn.simpleicons.org/stripe/635BFF',
    alt: 'Stripe',
    label: 'Stripe',
    style: { top: '76%', right: '6%', '--fi-dur': '6.3s', '--fi-delay': '-2.5s' } as React.CSSProperties & Record<string, string>,
  },
  {
    src: 'https://cdn.simpleicons.org/hubspot/FF7A59',
    alt: 'HubSpot',
    label: 'HubSpot',
    style: { top: '45%', left: '7%', '--fi-dur': '6.8s', '--fi-delay': '-1.5s' } as React.CSSProperties & Record<string, string>,
  },
  {
    src: 'https://cdn.simpleicons.org/airtable/18BFFF',
    alt: 'Airtable',
    label: 'Airtable',
    style: { top: '43%', right: '7%', '--fi-dur': '5.9s', '--fi-delay': '-3.5s' } as React.CSSProperties & Record<string, string>,
  },
];

export default function FloatingIcons() {
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const hero = document.getElementById('hero');
    if (!hero) return;

    const iconEls = hero.querySelectorAll<HTMLElement>('.float-icon');
    const RADIUS = 130;
    const FORCE = 55;

    const onMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      iconEls.forEach((icon) => {
        const ir = icon.getBoundingClientRect();
        const ix = ir.left - rect.left + ir.width / 2;
        const iy = ir.top - rect.top + ir.height / 2;
        const dx = ix - mx;
        const dy = iy - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < RADIUS && dist > 0) {
          const f = (1 - dist / RADIUS) * FORCE;
          const angle = Math.atan2(dy, dx);
          icon.style.setProperty('--fi-x', (Math.cos(angle) * f).toFixed(1) + 'px');
          icon.style.setProperty('--fi-y', (Math.sin(angle) * f).toFixed(1) + 'px');
        } else {
          icon.style.setProperty('--fi-x', '0px');
          icon.style.setProperty('--fi-y', '0px');
        }
      });
    };

    const onMouseLeave = () => {
      iconEls.forEach((icon) => {
        icon.style.setProperty('--fi-x', '0px');
        icon.style.setProperty('--fi-y', '0px');
      });
    };

    hero.addEventListener('mousemove', onMouseMove);
    hero.addEventListener('mouseleave', onMouseLeave);
    return () => {
      hero.removeEventListener('mousemove', onMouseMove);
      hero.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <div ref={wrapRef}>
      {icons.map((icon, i) => (
        <div key={i} className="float-icon" style={icon.style} aria-hidden="true">
          <div className="fi-card">
            <span className="fi-icon">
              <img src={icon.src} alt={icon.alt} width={28} height={28} />
            </span>
          </div>
          <span className="fi-label">{icon.label}</span>
        </div>
      ))}
    </div>
  );
}
