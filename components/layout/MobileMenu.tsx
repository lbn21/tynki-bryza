'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface NavLink {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
}

export default function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  const [expandedService, setExpandedService] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            onClick={onClose}
          />

          {/* Menu panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white z-50 lg:hidden shadow-xl overflow-y-auto"
          >
            <div className="p-6">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 min-w-[48px] min-h-[48px] flex items-center justify-center"
                aria-label="Zamknij menu"
              >
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <nav className="mt-12 flex flex-col gap-1" aria-label="Menu mobilne">
                {links.map((link) =>
                  link.children ? (
                    <div key={link.href}>
                      <button
                        onClick={() => setExpandedService(!expandedService)}
                        className="w-full flex items-center justify-between py-3 px-2 text-lg font-medium text-text hover:text-accent transition-colors min-h-[48px]"
                        aria-expanded={expandedService}
                      >
                        {link.label}
                        <svg
                          className={`w-5 h-5 transition-transform ${expandedService ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <AnimatePresence>
                        {expandedService && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <Link
                              href={link.href}
                              onClick={onClose}
                              className="block py-2 px-6 text-text-light hover:text-accent transition-colors min-h-[48px] flex items-center"
                            >
                              Wszystkie usługi
                            </Link>
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={onClose}
                                className="block py-2 px-6 text-text-light hover:text-accent transition-colors min-h-[48px] flex items-center"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={onClose}
                      className="py-3 px-2 text-lg font-medium text-text hover:text-accent transition-colors min-h-[48px] flex items-center"
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </nav>

              {/* Phone + CTA */}
              <div className="mt-8 pt-6 border-t border-bg-alt">
                {/* {TELEFON} - uzupełnić numer telefonu */}
                <a
                  href="tel:+48XXXXXXXXX"
                  className="flex items-center gap-3 text-accent font-bold text-lg mb-4"
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
                <Link
                  href="/kontakt"
                  onClick={onClose}
                  className="block w-full text-center bg-accent text-white py-3 rounded-lg font-heading font-semibold hover:bg-accent-hover transition-colors min-h-[48px]"
                >
                  Darmowa wycena
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
