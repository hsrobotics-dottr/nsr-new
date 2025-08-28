'use client';

import { Header } from '@/components/header';
import { useLanguage } from '@/contexts/language-context';

export default function HSRBR3121100Page() {
  const { currentLang } = useLanguage();

  return (
    <div className='min-h-screen bg-white'>
      <Header />

      <div className='container mx-auto px-4 py-8'>
        <h1 className='text-3xl font-bold text-center'>
          {currentLang === 'tr' ? 'HSR-BR312-1100 Ürün Sayfası' : 'HSR-BR312-1100 Product Page'}
        </h1>
        <p className='text-center mt-4'>
          {currentLang === 'tr'
            ? 'Bu sayfa yakında güncellenecektir.'
            : 'This page will be updated soon.'
          }
        </p>
      </div>
    </div>
  );
}

