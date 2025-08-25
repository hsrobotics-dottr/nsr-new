'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from 'react';

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
];

interface LanguageContextType {
  currentLang: 'tr' | 'en';
  setCurrentLang: (lang: 'tr' | 'en') => void;
  languages: Language[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [currentLang, setCurrentLangState] = useState<'tr' | 'en'>('tr');

  // localStorage'dan dil ayarını yükle
  useEffect(() => {
    const savedLang = localStorage.getItem('huashu-language');
    if (savedLang === 'tr' || savedLang === 'en') {
      setCurrentLangState(savedLang);
    }
  }, []);

  // Dil değiştiğinde localStorage'a kaydet
  const setCurrentLang = (lang: 'tr' | 'en') => {
    setCurrentLangState(lang);
    localStorage.setItem('huashu-language', lang);
  };

  const value: LanguageContextType = {
    currentLang,
    setCurrentLang,
    languages,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
