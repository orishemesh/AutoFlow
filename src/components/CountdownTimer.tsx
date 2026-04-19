'use client';

import { useEffect, useState } from 'react';

type Props = {
  variant?: 'pricing' | 'mid-cta';
};

const STORAGE_KEY = 'autoflow_deadline';
const WINDOW_MS = 48 * 60 * 60 * 1000;

function getDeadline(): number {
  if (typeof window === 'undefined') return Date.now() + WINDOW_MS;
  const raw = window.localStorage.getItem(STORAGE_KEY);
  const parsed = parseInt(raw || '0', 10);
  if (!parsed || parsed < Date.now()) {
    const d = Date.now() + WINDOW_MS;
    window.localStorage.setItem(STORAGE_KEY, String(d));
    return d;
  }
  return parsed;
}

export default function CountdownTimer({ variant = 'pricing' }: Props) {
  const [time, setTime] = useState({ h: '48', m: '00', s: '00' });

  useEffect(() => {
    let deadline = getDeadline();
    const tick = () => {
      const diff = Math.max(0, deadline - Date.now());
      const h = Math.floor(diff / 3_600_000);
      const m = Math.floor((diff % 3_600_000) / 60_000);
      const s = Math.floor((diff % 60_000) / 1_000);
      setTime({
        h: String(h).padStart(2, '0'),
        m: String(m).padStart(2, '0'),
        s: String(s).padStart(2, '0'),
      });
      if (diff === 0) {
        deadline = Date.now() + WINDOW_MS;
        window.localStorage.setItem(STORAGE_KEY, String(deadline));
      }
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (variant === 'mid-cta') {
    return (
      <div
        style={{
          marginTop: 14,
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          flexWrap: 'wrap',
        }}
      >
        <span
          style={{
            fontSize: '.85rem',
            fontWeight: 700,
            color: 'var(--text-mid)',
          }}
        >
          המבצע מסתיים בעוד:
        </span>
        <div style={{ display: 'flex', gap: 6 }}>
          <div
            style={{
              background: 'var(--deep-indigo)',
              borderRadius: 8,
              padding: '6px 12px',
              textAlign: 'center',
              minWidth: 52,
            }}
          >
            <span
              id="mc-hours"
              style={{
                display: 'block',
                fontFamily: 'var(--font-en)',
                fontWeight: 800,
                fontSize: '1.2rem',
                color: '#fff',
                lineHeight: 1,
              }}
            >
              {time.h}
            </span>
            <small
              style={{ fontSize: '.65rem', color: 'rgba(255,255,255,.6)' }}
            >
              שעות
            </small>
          </div>
          <div
            style={{
              background: 'var(--deep-indigo)',
              borderRadius: 8,
              padding: '6px 12px',
              textAlign: 'center',
              minWidth: 52,
            }}
          >
            <span
              id="mc-minutes"
              style={{
                display: 'block',
                fontFamily: 'var(--font-en)',
                fontWeight: 800,
                fontSize: '1.2rem',
                color: '#fff',
                lineHeight: 1,
              }}
            >
              {time.m}
            </span>
            <small
              style={{ fontSize: '.65rem', color: 'rgba(255,255,255,.6)' }}
            >
              דקות
            </small>
          </div>
          <div
            style={{
              background: 'var(--deep-indigo)',
              borderRadius: 8,
              padding: '6px 12px',
              textAlign: 'center',
              minWidth: 52,
            }}
          >
            <span
              id="mc-seconds"
              style={{
                display: 'block',
                fontFamily: 'var(--font-en)',
                fontWeight: 800,
                fontSize: '1.2rem',
                color: '#fff',
                lineHeight: 1,
              }}
            >
              {time.s}
            </span>
            <small
              style={{ fontSize: '.65rem', color: 'rgba(255,255,255,.6)' }}
            >
              שניות
            </small>
          </div>
        </div>
      </div>
    );
  }

  // Default pricing variant
  return (
    <div className="countdown-wrap">
      <div className="countdown-label">המבצע מסתיים בעוד:</div>
      <div className="countdown-timer" id="countdown">
        <div className="cd-unit">
          <span id="cd-hours">{time.h}</span>
          <small>שעות</small>
        </div>
        <div className="cd-unit">
          <span id="cd-minutes">{time.m}</span>
          <small>דקות</small>
        </div>
        <div className="cd-unit">
          <span id="cd-seconds">{time.s}</span>
          <small>שניות</small>
        </div>
      </div>
    </div>
  );
}
