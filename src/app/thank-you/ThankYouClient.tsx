'use client';

import React, { useEffect, useState, Suspense } from 'react';
import Script from 'next/script';
import BodyClass from '@/components/BodyClass';
import { useSearchParams } from 'next/navigation';

function ThankYouContent() {
  const searchParams = useSearchParams();
  const paymentId = sessionStorage.get('paymentId');
  
  const [isVerifying, setIsVerifying] = useState(true);
  const [isVerified, setIsVerified] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (!paymentId) {
      setErrorMsg("אופס! משהו השתבש");
      setIsVerifying(false);
      return;
    }

    const checkPayment = async () => {
      try {
        const res = await fetch('/api/payment/check-status', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ paymentId })
        });
        const data = await res.json();
        
        if (res.ok && data.success) {
          setIsVerified(true);
        } else {
          setErrorMsg("כנראה שהתשלום נכשל או שהדף לא זמין נא ליצור קשר עם השירות");
        }
      } catch (err) {
        setErrorMsg("שגיאה בתקשורת עם שרת האימות.");
      } finally {
        setIsVerifying(false);
      }
    };

    checkPayment();
    return () => {
      sessionStorage.clear();
    }
  }, [paymentId]);

  const handleDownload = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!isVerified) return;
    
    setIsDownloading(true);
    try {
      const res = await fetch(`/api/download?paymentId=${paymentId}`, {
        method: 'GET'
      });
      
      if (!res.ok) throw new Error("Failed to download");
      
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = 'AutoFlow - Full Pack.zip';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      alert("שגיאה בהורדת הקובץ. אנא פנה לשירות הלקוחות במידה והבעיה נמשכת.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <>
      <BodyClass className="ty-body" />
      <style>{`
        @keyframes basic-spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
      `}</style>

      <section className="ty-hero" aria-labelledby="ty-heading">
        <div className="ty-check-wrap">

          {/* Meta Pixel — Purchase event fires on this page after a successful sale */}
          {isVerified && (
            <Script id="fb-purchase" strategy="afterInteractive">
              {`fbq('track', 'Purchase', {currency: 'ILS', value: 200.00});`}
            </Script>
          )}

          <div className="ty-check" aria-hidden="true" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {isVerified && <span className="pulse-ring" />}
            
            {isVerifying ? (
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', border: '4px solid rgba(48,185,246,0.2)', borderTopColor: '#30B9F6', animation: 'basic-spin 1s infinite linear', position: 'relative', zIndex: 10 }}></div>
            ) : isVerified ? (
              <svg
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="26"
                  cy="26"
                  r="25"
                  stroke="#30B9F6"
                  strokeWidth={2}
                  fill="rgba(48,185,246,0.1)"
                />
                <path
                  d="M14 27L22 35L38 18"
                  stroke="#30B9F6"
                  strokeWidth={3.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="26" cy="26" r="25" stroke="#e53e3e" strokeWidth={2} fill="rgba(229,62,62,0.1)" />
                <path d="M16 16L36 36M36 16L16 36" stroke="#e53e3e" strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </div>
        </div>

        <h1 className="ty-heading" id="ty-heading">
          {isVerifying ? "כמה רגעים ואנחנו מכינים את החבילה שלך" : isVerified ? "תודה! הרכישה הושלמה בהצלחה 🎉" : "שגיאה  ❌"}
        </h1>
        <p className="ty-subheading">
          {isVerifying ? "מיד תקבלו גישה לקובץ, נא להמתין במסך זה" : isVerified ? "הקובץ שלך מוכן להורדה" : errorMsg}
        </p>

        {isVerified && (
          <div>
            <a
              href="#"
              onClick={handleDownload}
              className="ty-download-btn"
              aria-label="הורד את חבילת AutoFlow"
              style={{ opacity: isDownloading ? 0.6 : 1, cursor: isDownloading ? 'wait' : 'pointer' }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              {isDownloading ? 'מוריד אל המערכת...' : 'להורדת החבילה ←'}
            </a>
          </div>
        )}
        
        {isVerified && <p className="ty-email-note">קישור להורדה נשלח גם לאימייל שלך</p>}
      </section>

      {isVerified ? <main id="main-content" className="ty-main">
        <p className="ty-section-label">Getting started</p>
        <h2 className="ty-section-title">מה עכשיו? 🚀</h2>

        <div className="ty-steps">
          <div className="ty-step">
            <div className="ty-step-num">1</div>
            <div className="ty-step-icon" aria-hidden="true">
              📂
            </div>
            <h3 className="ty-step-title">פתח את הקובץ</h3>
            <p className="ty-step-desc">
              חלץ את קובץ ה-ZIP שהורדת. תמצא בפנים תיקיות מסודרות לפי פלטפורמה
              וקטגוריה.
            </p>
          </div>

          <div className="ty-step">
            <div className="ty-step-num">2</div>
            <div className="ty-step-icon" aria-hidden="true">
              🔍
            </div>
            <h3 className="ty-step-title">בחר אוטומציה</h3>
            <p className="ty-step-desc">
              עיין בספריה ובחר את הוורקפלואו שמתאים לצורך שלך. כל קובץ מגיע עם
              תיאור קצר.
            </p>
          </div>

          <div className="ty-step">
            <div className="ty-step-num">3</div>
            <div className="ty-step-icon" aria-hidden="true">
              ⚡
            </div>
            <h3 className="ty-step-title">ייבא ל-n8n או Make.com</h3>
            <p className="ty-step-desc">
              עקוב אחרי מדריך הייבוא הכלול (בעברית) — העתק, הדבק, הרץ. תוך דקות
              תהיה פעיל.
            </p>
          </div>
        </div>

        <div className="ty-info-grid">
          <div className="ty-info-card">
            <span className="ty-info-icon" aria-hidden="true">
              📧
            </span>
            <div>
              <p className="ty-info-title">לא קיבלת מייל?</p>
              <p className="ty-info-body">
                בדוק את תיקיית הספאם, לפעמים המיילים מגיעים לשם. אם עדיין לא
                קיבלת — צור קשר בכתובת support@autoflowil.com
              </p>
            </div>
          </div>
          <div className="ty-info-card">
            <span className="ty-info-icon" aria-hidden="true">
              🔄
            </span>
            <div>
              <p className="ty-info-title">עדכונים בחינם לכל החיים</p>
              <p className="ty-info-body">
                כשנוסיף תכנים חדשים לחבילה, תקבל גישה אוטומטית. שלמת פעם אחת —
                מקבל לנצח.
              </p>
            </div>
          </div>
          <div className="ty-info-card">
            <span className="ty-info-icon" aria-hidden="true">
              💬
            </span>
            <div>
              <p className="ty-info-title">צריך עזרה?</p>
              <p className="ty-info-body">
                צוות AutoFlow זמין למענה בכל שאלה. שלח ל-support@autoflowil.com
                ונחזור אליך תוך יום עסקים.
              </p>
            </div>
          </div>
          <div className="ty-info-card">
            <span className="ty-info-icon" aria-hidden="true">
              🛡️
            </span>
            <div>
              <p className="ty-info-title">רישיון מסחרי מורחב</p>
              <p className="ty-info-body">
                הרכישה שלך כוללת רישיון מסחרי — אתה יכול להשתמש בוורקפלואים
                לצרכי עסק, כולל מכירה ללקוחות.
              </p>
            </div>
          </div>
        </div>
      </main> : (<></>)}
    </>
  );
}

export default function ThankYouClient() {
  return (
    <Suspense fallback={
      <div style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--bg-light)'}}>
        <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '4px solid rgba(48,185,246,0.2)', borderTopColor: '#30B9F6', animation: 'spin 1s infinite linear' }}></div>
      </div>
    }>
      <ThankYouContent />
    </Suspense>
  );
}
