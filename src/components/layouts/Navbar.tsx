'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinksRoot } from '@/data/navLinks';
import NavbarHamburger from '@/components/buttons/NavHamburger';
import '@/styles/presentation/navbar.css';

export type NavTheme = 'glass' | 'paper' | 'dark' | 'light';

interface NavbarProps {
  theme?: NavTheme;
}

const SHRINK_VAL = 150;
const HIDE_VAL   = 600;

type NavState = 'full' | 'shrunk' | 'hidden';

export default function Navbar({ theme = 'glass' }: NavbarProps) {
  const [navState, setNavState]   = useState<NavState>('full');
  const [isOpen, setIsOpen]       = useState(true);
  const [isMobile, setIsMobile]   = useState(false);

  const userToggledRef  = useRef(false);
  const prevStateRef    = useRef<NavState>('full');
  const pathname        = usePathname();

  useEffect(() => {
    const handleLayout = () => {
      const scrollY = window.scrollY;
      const mobile  = window.innerWidth < 768;
      setIsMobile(mobile);

      let next: NavState;
      if (scrollY < SHRINK_VAL && !mobile) next = 'full';
      else if (scrollY < HIDE_VAL)         next = 'shrunk';
      else                                 next = 'hidden';

      if (next !== prevStateRef.current) {
        userToggledRef.current = false;
        prevStateRef.current   = next;
      }

      setNavState(next);
      if (!userToggledRef.current) setIsOpen(next !== 'hidden');
    };

    handleLayout();
    window.addEventListener('scroll', handleLayout, { passive: true });
    window.addEventListener('resize', handleLayout);
    return () => {
      window.removeEventListener('scroll', handleLayout);
      window.removeEventListener('resize', handleLayout);
    };
  }, []);

  const handleToggle = () => {
    userToggledRef.current = true;
    setIsOpen((prev) => !prev);
  };

  const getWidth = (): string => {
    if (!isOpen)  return '48px';
    if (isMobile) return 'min(80vw, 300px)';
    return navState === 'full' ? '620px' : '360px';
  };

  const showText   = navState === 'full'                              && isOpen;
  const showIcons  = (navState === 'shrunk' || navState === 'hidden') && isOpen;

  return (
    <div className="fixed top-4 right-4 md:top-6 md:right-6 z-50">
      <nav
        className={`nav nav--${theme}`}
        style={{ width: getWidth() }}
        aria-label="Site navigation"
      >
        {/* Hamburger — always rightmost */}
        <div className="nav__hamburger-wrap">
          <NavbarHamburger isOpen={isOpen} onClick={handleToggle} />
        </div>

        <div className="nav__links">

          {/* Full text links */}
          <div className={`nav__group nav__group--text${showText ? ' is-visible' : ''}`}>
            {navLinksRoot.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={`nav__link-text${pathname === href ? ' is-active' : ''}`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Shrunk icon links */}
          <div className={`nav__group nav__group--icon${showIcons ? ' is-visible' : ''}`}>
            {navLinksRoot.map(({ label, href, icon: Icon }) => (
              <div key={href} className="nav__icon-wrap">
                <Link
                  href={href}
                  className={`nav__link-icon${pathname === href ? ' is-active' : ''}`}
                  aria-label={label}
                >
                  <Icon size={isMobile ? 16 : 19} />
                </Link>
                {pathname === href && <span className="nav__active-dot" aria-hidden />}

                {/* Tooltip */}
                <div className="nav__tooltip" role="tooltip">
                  <span className="nav__tooltip-arrow" aria-hidden />
                  <span className="nav__tooltip-label">{label}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </nav>
    </div>
  );
}