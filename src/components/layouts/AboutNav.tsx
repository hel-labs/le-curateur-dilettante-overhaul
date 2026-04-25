'use client';

import Link from 'next/link';
import {PiUser} from 'react-icons/pi'
import '@/styles/presentation/aboutNavbar.css';

export type NavTheme = 'glass' | 'paper';

interface AboutButtonProps {
  theme?: NavTheme;
  href?: string;
}

export default function AboutButton({ theme = 'glass', href = '/about' }: AboutButtonProps) {
  return (
    <div className="fixed top-4 right-4 md:top-6 md:right-6 z-50">
      <nav
        className={`nav nav--${theme} !w-[48px] justify-center`}
        aria-label="About navigation"
      >
        <div className="nav__icon-wrap">
          <Link
            href={href}
            className="nav__link-icon"
            aria-label="About"
          >
            <PiUser size={20} />
          </Link>

          {/* Tooltip - matching your existing style */}
          <div className="nav__tooltip" role="tooltip">
            <span className="nav__tooltip-arrow" aria-hidden />
            <span className="nav__tooltip-label">About</span>
          </div>
        </div>
      </nav>
    </div>
  );
}