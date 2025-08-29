'use client';

import { useEffect, useState } from 'react';

export function SkipToContent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        setIsVisible(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!isVisible) return null;

  return (
    <a
      href='#main-content'
      className='sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
      onClick={() => setIsVisible(false)}
      aria-label='Ana içeriğe atla (Enter tuşu ile aktifleştir)'
      tabIndex={0}
    >
      Ana içeriğe atla
    </a>
  );
}
