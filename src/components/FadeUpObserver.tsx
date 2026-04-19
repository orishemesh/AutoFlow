'use client';

import { useEffect } from 'react';

export default function FadeUpObserver() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-up, .stagger-children');
    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    els.forEach((el) => obs.observe(el));

    return () => obs.disconnect();
  }, []);

  return null;
}
