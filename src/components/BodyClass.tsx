'use client';

import { useEffect } from 'react';

type Props = { className: string };

export default function BodyClass({ className }: Props) {
  useEffect(() => {
    const classes = className.split(' ').filter(Boolean);
    classes.forEach((c) => document.body.classList.add(c));
    return () => {
      classes.forEach((c) => document.body.classList.remove(c));
    };
  }, [className]);

  return null;
}
