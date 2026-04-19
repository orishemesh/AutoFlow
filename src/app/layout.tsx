import type { Metadata } from 'next';
import { Heebo, Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AccessibilityWidget from '@/components/AccessibilityWidget';

const heebo = Heebo({
  subsets: ['hebrew', 'latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-he-loaded',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-en-loaded',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://autoflowil.com'),
  title: 'AutoFlow | 7,000+ אוטומציות לעסק שלך — תשלום חד פעמי',
  description:
    '7,000+ אוטומציות מוכנות לn8n ו-Make.com. חסוך שעות כל שבוע — בלי לקודד. הורד, ייבא, והרץ. ₪200 תשלום חד פעמי לנצח.',
  alternates: {
    canonical: 'https://autoflowil.com',
  },
  openGraph: {
    type: 'website',
    url: 'https://autoflowil.com',
    title: 'AutoFlow | 7,000+ אוטומציות לעסק שלך — תשלום חד פעמי',
    description:
      '7,000+ אוטומציות מוכנות לn8n ו-Make.com. חסוך שעות כל שבוע — בלי לקודד. ₪200 בלבד.',
    locale: 'he_IL',
    images: [{ url: '/og-image.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AutoFlow | 7,000+ אוטומציות לעסק שלך',
    description: '7,000+ אוטומציות מוכנות — ₪200 חד פעמי.',
    images: ['/og-image.png'],
  },
};

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'AutoFlow',
  description:
    '7,000+ אוטומציות מוכנות לעסקים ישראליים — n8n, Make.com, Zapier ובינה מלאכותית',
  brand: { '@type': 'Brand', name: 'AutoFlow' },
  offers: {
    '@type': 'Offer',
    price: '200',
    priceCurrency: 'ILS',
    availability: 'https://schema.org/InStock',
    url: 'https://autoflowil.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} ${inter.variable}`}>
      <head>
        <Script
          id="ld-json-product"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-nav">
          דלג לתוכן המרכזי
        </a>
        <Navbar />
        {children}
        <Footer />
        <AccessibilityWidget />
      </body>
    </html>
  );
}
