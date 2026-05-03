'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import BodyClass from '@/components/BodyClass';
import './checkout.css';

export default function CheckoutPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    phone: '',
    acceptedTerms: false
  });

  const [errors, setErrors] = useState({
    email: '',
    phone: ''
  });

// Fire Facebook Pixel InitiateCheckout event on page load
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('track', 'InitiateCheckout', {
        value: 200,
        currency: 'ILS',
      });
    }
  }, []);

    const validatePhone = (phone: string) => {
    // Validates Israeli phone numbers (mobile or landline)
    const regex = /^(05\d|07\d|0[23489])\-?\d{7}$/;
    return regex.test(phone);
  };

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (name === 'phone') {
      setErrors(prev => ({ ...prev, phone: '' }));
    }
    if (name === 'email') {
      setErrors(prev => ({ ...prev, email: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let valid = true;
    const newErrors = { email: '', phone: '' };

    if (!validateEmail(formData.email)) {
      newErrors.email = 'כתובת אימייל אינה תקינה';
      valid = false;
    }

    if (!validatePhone(formData.phone)) {
      newErrors.phone = 'מספר טלפון אינו תקין (ישראלי בלבד)';
      valid = false;
    }

    if (!valid) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    const { name, email, city, phone } = formData;
    try {
      const response = await fetch('/api/payment/create-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, city, phone })
      });

      if (!response.ok) {
        // throw new Error('שגיאה ביצירת תשלום');
      }

      const data = await response.json();

      if (data.url) {
        // Save status in session storage as requested
        sessionStorage.setItem('paymentStatus', 'clearing');
        sessionStorage.setItem('paymentUrl', data.url);
        sessionStorage.setItem('paymentId', data.paymentId);

        // Redirect to payment page
        router.push('/payment');
      } else {
        throw new Error('לא התקבל קישור לתשלום');
      }
    } catch (error) {
      console.error(error);
      // router.push('/payment');
      router.push('/payment/fail');
      setIsLoading(false);
    }
  };

  const isFormValid = formData.name.trim() !== '' &&
    formData.email.trim() !== '' &&
    formData.city.trim() !== '' &&
    formData.phone.trim() !== '' &&
    formData.acceptedTerms;

  return (
    <>
      <BodyClass className="checkout-body" />

      <main id="main-content" className="checkout-main">
        <div className="checkout-header">
          <h1 className="checkout-heading">השלמת רכישה</h1>
          <p className="checkout-subheading">אנא מלא את פרטי התשלום בצורה מאובטחת</p>
        </div>

        <form className="checkout-form fade-in" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>שם מלא <span className="required-asterisk">*</span></label>
            <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="ישראל ישראלי" />
          </div>

          <div className="form-group">
            <label>כתובת אימייל <span className="required-asterisk">*</span></label>
            <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="name@domain.com" dir="ltr" />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label>עיר מגורים <span className="required-asterisk">*</span></label>
            <input type="text" name="city" required value={formData.city} onChange={handleChange} placeholder="תל אביב" />
          </div>

          <div className="form-group">
            <label>מספר טלפון <span className="required-asterisk">*</span></label>
            <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="050-0000000" dir="ltr" />
            {errors.phone && <span className="error-text">{errors.phone}</span>}
          </div>

          <div className="form-group checkbox-group">
            <label className="checkbox-label">
              <input type="checkbox" name="acceptedTerms" checked={formData.acceptedTerms} onChange={handleChange} required />
              <span>
                קראתי והסכמתי ל<a href="#" className="terms-link" onClick={(e) => { e.preventDefault(); setShowTermsModal(true); }}>תקנון השימוש</a>
              </span>
            </label>
          </div>

          <button type="submit" className="btn-primary btn-large submit-btn" disabled={!isFormValid || isLoading}>
            {isLoading ? (
              <>
                <div className="btn-spinner"></div> מעביר לתשלום מאובטח...
              </>
            ) : 'המשך לתשלום מאובטח ←'}
          </button>
        </form>

        <div className="trust-icons-checkout" role="list">
          <div className="trust-item" role="listitem">
            <span>🔒</span>
            <span>תשלום מאובטח ומוצפן</span>
          </div>
          <div className="trust-item" role="listitem">
            <span>⚡</span>
            <span>גישה מיידית באותו הרגע</span>
          </div>
        </div>
      </main>

      {/* Terms Modal */}
      {showTermsModal && (
        <div className="modal-overlay" onClick={() => setShowTermsModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>תקנון שימוש</h2>
              <button className="close-modal" onClick={() => setShowTermsModal(false)}>&times;</button>
            </div>
            <div className="modal-body">
              <iframe src="/terms" className="terms-iframe" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
