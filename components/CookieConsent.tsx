'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface CookiePreferences {
  necessary: boolean;
  statistical: boolean;
  marketing: boolean;
}

const STORAGE_KEY = 'cookie-consent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    statistical: false,
    marketing: false,
  });

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setVisible(true);
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    setVisible(false);
  };

  const acceptAll = () => {
    savePreferences({ necessary: true, statistical: true, marketing: true });
  };

  const acceptNecessary = () => {
    savePreferences({ necessary: true, statistical: false, marketing: false });
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-bg-alt shadow-[0_-4px_20px_rgba(0,0,0,0.1)] p-4 md:p-6 lg:hidden-false"
      role="dialog"
      aria-label="Zgoda na pliki cookie"
    >
      <div className="max-w-5xl mx-auto">
        <p className="text-text text-sm mb-4">
          Korzystamy z plik\u00f3w cookie, aby zapewni\u0107 prawid\u0142owe dzia\u0142anie
          strony oraz analizowa\u0107 ruch. Mo\u017cesz wybra\u0107, kt\u00f3re rodzaje
          plik\u00f3w cookie chcesz zaakceptowa\u0107.
        </p>

        {/* Toggles */}
        <div className="flex flex-wrap gap-4 mb-4">
          {/* Necessary - always on */}
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked
              disabled
              className="w-4 h-4 accent-accent"
            />
            <span className="text-text-light">Niezb\u0119dne</span>
          </label>

          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <input
              type="checkbox"
              checked={preferences.statistical}
              onChange={(e) =>
                setPreferences((p) => ({ ...p, statistical: e.target.checked }))
              }
              className="w-4 h-4 accent-accent"
            />
            <span className="text-text">Statystyczne</span>
          </label>

          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <input
              type="checkbox"
              checked={preferences.marketing}
              onChange={(e) =>
                setPreferences((p) => ({ ...p, marketing: e.target.checked }))
              }
              className="w-4 h-4 accent-accent"
            />
            <span className="text-text">Marketingowe</span>
          </label>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={acceptAll}
            className="bg-accent text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-accent-hover transition-colors min-h-[44px] cursor-pointer"
          >
            Akceptuj wszystkie
          </button>
          <button
            onClick={acceptNecessary}
            className="border-2 border-primary text-primary px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-primary hover:text-white transition-colors min-h-[44px] cursor-pointer"
          >
            Tylko niezb\u0119dne
          </button>
          <Link
            href="/polityka-cookies"
            className="text-sm text-text-light underline hover:text-accent transition-colors"
          >
            Polityka cookies
          </Link>
        </div>
      </div>
    </div>
  );
}
