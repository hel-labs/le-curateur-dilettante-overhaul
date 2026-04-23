'use client';

interface NavbarHamburgerProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export default function NavbarHamburger({
  isOpen,
  onClick,
  className = '',
}: NavbarHamburgerProps) {
  return (
    <button
      onClick={onClick}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
      className={`nav-hamburger ${className}`}
    >
      <span className={`nav-hamburger__line nav-hamburger__line--top${isOpen ? ' is-open' : ''}`} />
      <span className={`nav-hamburger__line nav-hamburger__line--mid${isOpen ? ' is-open' : ''}`} />
      <span className={`nav-hamburger__line nav-hamburger__line--bot${isOpen ? ' is-open' : ''}`} />
    </button>
  );
}