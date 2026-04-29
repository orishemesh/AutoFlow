import type { Metadata } from 'next';
import ThankYouClient from './ThankYouClient';

export const metadata: Metadata = {
  title: 'תודה על הרכישה! — AutoFlow',
  description: 'הרכישה הושלמה בהצלחה. החבילה שלך מוכנה להורדה.',
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return <ThankYouClient />;
}
