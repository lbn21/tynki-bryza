'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import MobileMenu from './MobileMenu';

const navLinks = [
  { href: '/o-nas', label: 'O nas' },
  {
    href: '/uslugi',
    label: 'Usługi',
    children: [
      { href: '/uslugi/tynki-gipsowe', label: 'Tynki gipsowe' },
      { href: '/uslugi/tynki-cementowo-wapienne', label: 'Tynki cementowo-wapienne' },
      { href: '/uslugi/tynki-hybrydowe', label: 'Tynki hybrydowe' },
      { href: '/uslugi/tynki-gliniane', label: 'Tynki gliniane' },
    ],
  },
  { href: '/realizacje', label: 'Realizacje' },
  { href: '/kontakt', label: 'Kontakt' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-white'
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20"
        aria-label="Nawigacja główna"
      >
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-tight" aria-label="Strona główna">
          <span className="font-heading font-bold text-xl md:text-2xl text-primary tracking-tight">
            BARYZA
          </span>
          <span className="font-heading font-medium text-xs text-secondary tracking-widest uppercase">
            Tynki Maszynowe
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={link.href}
                  className="text-text hover:text-accent transition-colors font-medium"
                >
                  {link.label}
                  <svg
                    className="inline-block ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                {servicesOpen && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="bg-white rounded-lg shadow-lg py-2 min-w-[240px] border border-bg-alt">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-text hover:bg-bg-alt hover:text-accent transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-text hover:text-accent transition-colors font-medium"
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Phone + CTA (desktop) */}
        <div className="hidden lg:flex items-center gap-4">
          {/* {TELEFON} - uzupełnić numer telefonu */}
          <a
            href="tel:+48XXXXXXXXX"
            className="flex items-center gap-2 text-accent font-bold hover:text-accent-hover transition-colors"
            aria-label="Zadzwoń: +48 XXX XXX XXX"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            +48 XXX XXX XXX
          </a>
          <Button href="/kontakt" variant="primary">
            Darmowa wycena
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 min-w-[48px] min-h-[48px] flex items-center justify-center"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Zamknij menu' : 'Otwórz menu'}
          aria-expanded={mobileOpen}
        >
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>
    </header>

    <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} links={navLinks} />
    </>
  );
}
