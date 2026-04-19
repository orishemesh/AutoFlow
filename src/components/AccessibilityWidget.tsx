'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

/* -------------------------------------------------------------------------- */
/*  Accessibility Widget — IS 5568 / WCAG 2.0 AA                              */
/*  Floating button bottom-left + popup toolbar with 8 toggles.               */
/*  All state persisted to localStorage under a11y.v1                          */
/* -------------------------------------------------------------------------- */

const STORAGE_KEY = 'autoflow_a11y_prefs_v1';
const FONT_CLASSES = ['a11y-font-up-1', 'a11y-font-up-2', 'a11y-font-up-3'];
const MIN_FONT_STEP = 0;
const MAX_FONT_STEP = 3;

type Prefs = {
  fontStep: number; // -0 .. +3
  highContrast: boolean;
  grayscale: boolean;
  highlightLinks: boolean;
  readableFont: boolean;
  stopAnimations: boolean;
};

const DEFAULT_PREFS: Prefs = {
  fontStep: 0,
  highContrast: false,
  grayscale: false,
  highlightLinks: false,
  readableFont: false,
  stopAnimations: false,
};

function loadPrefs(): Prefs {
  if (typeof window === 'undefined') return DEFAULT_PREFS;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_PREFS;
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_PREFS, ...parsed };
  } catch {
    return DEFAULT_PREFS;
  }
}

function savePrefs(prefs: Prefs) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
  } catch {
    /* ignore */
  }
}

function applyPrefs(prefs: Prefs) {
  if (typeof document === 'undefined') return;
  const html = document.documentElement;

  // Font size — clear all then set current
  FONT_CLASSES.forEach((c) => html.classList.remove(c));
  if (prefs.fontStep > 0) {
    html.classList.add(`a11y-font-up-${prefs.fontStep}`);
  }

  html.classList.toggle('a11y-high-contrast', prefs.highContrast);
  html.classList.toggle('a11y-grayscale', prefs.grayscale);
  html.classList.toggle('a11y-highlight-links', prefs.highlightLinks);
  html.classList.toggle('a11y-readable-font', prefs.readableFont);
  html.classList.toggle('a11y-stop-animations', prefs.stopAnimations);
}

/* --- icons --- */

const AccessibilityIcon = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {/* Head */}
    <circle cx="12" cy="4.25" r="1.75" fill="currentColor" stroke="none" />
    {/* Body / outstretched arms */}
    <path d="M5 8.5h14" />
    {/* Torso & legs */}
    <path d="M12 8.5v5" />
    <path d="M9 21l3-7.5 3 7.5" />
  </svg>
);

const CloseIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="6" y1="6" x2="18" y2="18" />
    <line x1="18" y1="6" x2="6" y2="18" />
  </svg>
);

const PlusIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    aria-hidden="true"
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const MinusIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    aria-hidden="true"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const ContrastIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 3 A9 9 0 0 1 12 21 Z" fill="currentColor" stroke="none" />
  </svg>
);

const GrayscaleIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 3v18" />
  </svg>
);

const LinkIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M10 14a4 4 0 0 1 0-6l3-3a4 4 0 1 1 6 6l-1.5 1.5" />
    <path d="M14 10a4 4 0 0 1 0 6l-3 3a4 4 0 1 1-6-6L6.5 11.5" />
  </svg>
);

const FontIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.9}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M4 20 L9 6 L14 20" />
    <path d="M5.5 16h7" />
    <path d="M16 20V10h2.5a2.5 2.5 0 0 1 0 5H16" />
  </svg>
);

const PauseIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.9}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="6" y="5" width="4" height="14" rx="1" />
    <rect x="14" y="5" width="4" height="14" rx="1" />
  </svg>
);

const ResetIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.9}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3 12a9 9 0 1 0 3-6.7" />
    <polyline points="3 4 3 10 9 10" />
  </svg>
);

/* --- component --- */

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState<Prefs>(DEFAULT_PREFS);
  const [mounted, setMounted] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  // Hydrate prefs from storage on mount and apply to DOM
  useEffect(() => {
    const loaded = loadPrefs();
    setPrefs(loaded);
    applyPrefs(loaded);
    setMounted(true);
  }, []);

  // Whenever prefs change (after hydration), apply + persist
  useEffect(() => {
    if (!mounted) return;
    applyPrefs(prefs);
    savePrefs(prefs);
  }, [prefs, mounted]);

  // Close on Escape; focus-trap inside panel when open
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        setOpen(false);
        buttonRef.current?.focus();
        return;
      }
      if (e.key !== 'Tab') return;

      const panel = panelRef.current;
      if (!panel) return;

      const focusables = panel.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    // Move focus to close button when opened
    closeBtnRef.current?.focus();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  // Toggle helpers
  const toggle = useCallback(
    (key: Exclude<keyof Prefs, 'fontStep'>) =>
      setPrefs((p) => ({ ...p, [key]: !p[key] })),
    []
  );

  const increaseFont = useCallback(
    () =>
      setPrefs((p) => ({
        ...p,
        fontStep: Math.min(MAX_FONT_STEP, p.fontStep + 1),
      })),
    []
  );

  const decreaseFont = useCallback(
    () =>
      setPrefs((p) => ({
        ...p,
        fontStep: Math.max(MIN_FONT_STEP, p.fontStep - 1),
      })),
    []
  );

  const resetAll = useCallback(() => setPrefs(DEFAULT_PREFS), []);

  return (
    <>
      {/* Floating launcher button */}
      <button
        ref={buttonRef}
        type="button"
        className="a11y-fab"
        aria-label={open ? 'סגור כלי נגישות' : 'פתח כלי נגישות'}
        aria-expanded={open}
        aria-controls="a11y-panel"
        onClick={() => setOpen((o) => !o)}
      >
        <AccessibilityIcon />
      </button>

      {/* Toolbar panel */}
      <div
        id="a11y-panel"
        ref={panelRef}
        className={`a11y-panel${open ? ' a11y-panel--open' : ''}`}
        role="dialog"
        aria-modal="false"
        aria-label="כלי נגישות"
        aria-hidden={!open}
      >
        <div className="a11y-panel__header">
          <h2 className="a11y-panel__title">כלי נגישות</h2>
          <button
            ref={closeBtnRef}
            type="button"
            className="a11y-panel__close"
            aria-label="סגור חלון נגישות"
            onClick={() => setOpen(false)}
          >
            <CloseIcon />
          </button>
        </div>

        <div className="a11y-panel__body">
          {/* Font size (two buttons) */}
          <div className="a11y-row">
            <button
              type="button"
              className={`a11y-toggle${
                prefs.fontStep >= MAX_FONT_STEP ? ' a11y-toggle--disabled' : ''
              }`}
              aria-pressed={prefs.fontStep > 0}
              disabled={prefs.fontStep >= MAX_FONT_STEP}
              onClick={increaseFont}
            >
              <span className="a11y-toggle__icon" aria-hidden="true">
                <PlusIcon />
              </span>
              <span className="a11y-toggle__label">הגדל טקסט</span>
            </button>
            <button
              type="button"
              className={`a11y-toggle${
                prefs.fontStep <= MIN_FONT_STEP ? ' a11y-toggle--disabled' : ''
              }`}
              aria-pressed={false}
              disabled={prefs.fontStep <= MIN_FONT_STEP}
              onClick={decreaseFont}
            >
              <span className="a11y-toggle__icon" aria-hidden="true">
                <MinusIcon />
              </span>
              <span className="a11y-toggle__label">הקטן טקסט</span>
            </button>
          </div>

          <div className="a11y-row">
            <button
              type="button"
              className={`a11y-toggle${
                prefs.highContrast ? ' a11y-toggle--on' : ''
              }`}
              aria-pressed={prefs.highContrast}
              onClick={() => toggle('highContrast')}
            >
              <span className="a11y-toggle__icon" aria-hidden="true">
                <ContrastIcon />
              </span>
              <span className="a11y-toggle__label">ניגודיות גבוהה</span>
            </button>
            <button
              type="button"
              className={`a11y-toggle${
                prefs.grayscale ? ' a11y-toggle--on' : ''
              }`}
              aria-pressed={prefs.grayscale}
              onClick={() => toggle('grayscale')}
            >
              <span className="a11y-toggle__icon" aria-hidden="true">
                <GrayscaleIcon />
              </span>
              <span className="a11y-toggle__label">גוני אפור</span>
            </button>
          </div>

          <div className="a11y-row">
            <button
              type="button"
              className={`a11y-toggle${
                prefs.highlightLinks ? ' a11y-toggle--on' : ''
              }`}
              aria-pressed={prefs.highlightLinks}
              onClick={() => toggle('highlightLinks')}
            >
              <span className="a11y-toggle__icon" aria-hidden="true">
                <LinkIcon />
              </span>
              <span className="a11y-toggle__label">הדגש קישורים</span>
            </button>
            <button
              type="button"
              className={`a11y-toggle${
                prefs.readableFont ? ' a11y-toggle--on' : ''
              }`}
              aria-pressed={prefs.readableFont}
              onClick={() => toggle('readableFont')}
            >
              <span className="a11y-toggle__icon" aria-hidden="true">
                <FontIcon />
              </span>
              <span className="a11y-toggle__label">גופן קריא</span>
            </button>
          </div>

          <div className="a11y-row">
            <button
              type="button"
              className={`a11y-toggle${
                prefs.stopAnimations ? ' a11y-toggle--on' : ''
              }`}
              aria-pressed={prefs.stopAnimations}
              onClick={() => toggle('stopAnimations')}
            >
              <span className="a11y-toggle__icon" aria-hidden="true">
                <PauseIcon />
              </span>
              <span className="a11y-toggle__label">עצור אנימציות</span>
            </button>
            <button
              type="button"
              className="a11y-toggle a11y-toggle--reset"
              onClick={resetAll}
            >
              <span className="a11y-toggle__icon" aria-hidden="true">
                <ResetIcon />
              </span>
              <span className="a11y-toggle__label">איפוס</span>
            </button>
          </div>
        </div>

        <div className="a11y-panel__footer">
          <a href="/accessibility" className="a11y-panel__link">
            הצהרת נגישות
          </a>
        </div>
      </div>
    </>
  );
}
