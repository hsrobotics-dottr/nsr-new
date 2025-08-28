'use client';

import { X } from 'lucide-react';

interface Language {
  code: string;
  name: string;
  displayName: string;
}

interface LanguageSelectorProps {
  isLanguageOpen: boolean;
  currentLang: 'tr' | 'en';
  languages: Language[];
  t: {
    language: {
      title: string;
      turkish: string;
      english: string;
    };
  };
  setIsLanguageOpen: (open: boolean) => void;
  setCurrentLang: (lang: 'tr' | 'en') => void;
}

export function LanguageSelector({
  isLanguageOpen,
  currentLang,
  languages,
  t,
  setIsLanguageOpen,
  setCurrentLang,
}: LanguageSelectorProps) {
  return (
    <div
      className={`fixed inset-0 z-[150] bg-black/50 backdrop-blur-sm transition-all duration-300 ${
        isLanguageOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      <div
        className={`absolute inset-x-0 top-0 bg-white shadow-2xl transition-all duration-500 ${
          isLanguageOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className='container mx-auto px-4 py-8'>
          <div className='flex items-center justify-between mb-6'>
            <h2 className='text-2xl font-bold text-gray-800'>
              {t.language.title}
            </h2>
            <button
              onClick={() => setIsLanguageOpen(false)}
              className='p-2 hover:bg-gray-100 rounded-lg transition-colors'
            >
              <X className='w-6 h-6 text-gray-600' />
            </button>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto'>
            {languages.map(language => (
              <button
                key={language.code}
                onClick={() => {
                  setCurrentLang(language.code as 'tr' | 'en');
                  setIsLanguageOpen(false);
                }}
                className={`p-6 rounded-xl border-2 transition-all duration-300 text-left flex items-center space-x-4 ${
                  currentLang === language.code
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                }`}
              >
                <div className='w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center'>
                  <span className='text-lg font-bold text-blue-600'>
                    {language.displayName}
                  </span>
                </div>
                <div>
                  <div className='text-lg font-semibold'>{language.name}</div>
                  <div className='text-sm text-gray-600 mt-1'>
                    {language.code === 'tr' ? 'Türkiye' : 'International'}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
