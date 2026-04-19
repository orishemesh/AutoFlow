import Link from 'next/link';

type Props = {
  href: string;
  className?: string;
  children: React.ReactNode;
  large?: boolean;
  style?: React.CSSProperties;
  ariaLabel?: string;
};

export default function CTAButton({
  href,
  className = '',
  children,
  large = false,
  style,
  ariaLabel,
}: Props) {
  const classes = ['btn-primary', large ? 'btn-large' : '', className]
    .filter(Boolean)
    .join(' ');

  const isInternal = href.startsWith('/') && !href.startsWith('//');
  const isHashOnly = href.startsWith('#');

  if (isHashOnly) {
    return (
      <a href={href} className={classes} style={style} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  if (isInternal) {
    return (
      <Link href={href} className={classes} style={style} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} style={style} aria-label={ariaLabel}>
      {children}
    </a>
  );
}
