"use client";
import Link from 'next/link';

export default function Button({
  href,
  children,
  variant = 'primary', // 'primary', 'secondary', 'outline'
  className = '',     // Allow passing additional classes
  onClick,
  type = 'button',    // Default type for button element
  target,             // For links: _blank, etc.
  rel,                // For links: noopener, etc.
  ...props          // Allow passing other props like aria-label
}) {
  const baseClasses = "button"; // From globals.css
  const variantClasses = {
    primary: 'button-primary',
    secondary: 'button-secondary',
    outline: 'button-outline',
  }[variant];

  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`;

  if (href) {
    // If href starts with '/', use NextLink, otherwise use regular <a>
    const isInternal = href.startsWith('/');
    if (isInternal) {
      return (
        <Link href={href} className={combinedClasses} onClick={onClick} {...props}>
          {children}
        </Link>
      );
    } else {
      return (
        <a href={href} className={combinedClasses} target={target || "_blank"} rel={rel || "noopener noreferrer"} onClick={onClick} {...props}>
          {children}
        </a>
      );
    }
  }

  // Render as a button element if no href is provided
  return (
    <button type={type} className={combinedClasses} onClick={onClick} {...props}>
      {children}
    </button>
  );
}