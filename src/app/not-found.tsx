import Link from 'next/link';
import BodyClass from '@/components/BodyClass';

export default function NotFound() {
  return (
    <>
      <BodyClass className="error-404-body" />
      <main id="main-content" style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem'
      }}>
        <div style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 107, 107, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '2rem'
        }}>
          <svg viewBox="0 0 24 24" width="64" height="64" stroke="#ff6b6b" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>

        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>404</h1>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>העמוד לא נמצא</h2>
        <p style={{ maxWidth: '400px', marginBottom: '2rem' }}>
          מצטערים, אך העמוד שחיפשת אינו קיים או הוסר מהמערכת.
        </p>

        <Link href="/" className="btn-primary btn-large">
          חזרה לעמוד הבית ←
        </Link>
      </main>
    </>
  );
}
