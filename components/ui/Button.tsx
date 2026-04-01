import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'outlined' | 'outlined-white';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  type?: 'button' | 'submit';
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-accent text-white hover:bg-accent-hover shadow-md hover:shadow-lg',
  secondary:
    'bg-primary text-white hover:bg-primary-light shadow-md hover:shadow-lg',
  outlined:
    'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  'outlined-white':
    'border-2 border-white text-white hover:bg-white hover:text-primary',
};

export default function Button({
  children,
  href,
  variant = 'primary',
  type = 'button',
  onClick,
  className = '',
  ariaLabel,
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center px-6 py-3 rounded-lg font-heading font-semibold text-base transition-all duration-300 cursor-pointer min-h-[48px]';

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
