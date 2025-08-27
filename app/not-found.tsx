'use client';

export const dynamic = 'force-dynamic';

import { Button } from '@/components/ui/button';
import { ArrowLeft, Home, Package } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='min-h-screen bg-gray-50 flex items-center justify-center p-4'>
      <div className='max-w-2xl w-full text-center'>
        {/* 404 Icon */}
        <div className='mb-8'>
          <div className='relative'>
            <div className='w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl'>
              <Package className='w-16 h-16 text-white' />
            </div>
            <div className='absolute -top-4 -right-4 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg'>
              4
            </div>
            <div className='absolute -bottom-4 -left-4 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg'>
              4
            </div>
          </div>
        </div>

        {/* Main Content */}
        <h1 className='text-6xl md:text-8xl font-bold text-gray-900 mb-4'>
          Sayfa Bulunamadı
        </h1>

        <p className='text-xl text-gray-600 mb-8 max-w-md mx-auto'>
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </p>

        {/* Search Suggestions */}
        <div className='bg-white rounded-lg shadow-lg p-6 mb-8 max-w-md mx-auto'>
          <h3 className='text-lg font-semibold text-gray-800 mb-4'>
            Popüler Sayfalar
          </h3>
          <div className='space-y-3'>
            <Link
              href='/products/jr-serisi'
              className='block p-3 text-left hover:bg-gray-50 rounded-lg transition-colors'
            >
              <div className='flex items-center'>
                <Package className='w-5 h-5 text-blue-600 mr-3' />
                <div>
                  <div className='font-medium text-gray-900'>
                    JR Serisi Robotlar
                  </div>
                  <div className='text-sm text-gray-500'>
                    6 eksenli endüstriyel robotlar
                  </div>
                </div>
              </div>
            </Link>

            <Link
              href='/products/scara-serisi'
              className='block p-3 text-left hover:bg-gray-50 rounded-lg transition-colors'
            >
              <div className='flex items-center'>
                <Package className='w-5 h-5 text-green-600 mr-3' />
                <div>
                  <div className='font-medium text-gray-900'>
                    SCARA Robotlar
                  </div>
                  <div className='text-sm text-gray-500'>
                    Hızlı pick & place çözümleri
                  </div>
                </div>
              </div>
            </Link>

            <Link
              href='/support'
              className='block p-3 text-left hover:bg-gray-50 rounded-lg transition-colors'
            >
              <div className='flex items-center'>
                <Package className='w-5 h-5 text-purple-600 mr-3' />
                <div>
                  <div className='font-medium text-gray-900'>Teknik Destek</div>
                  <div className='text-sm text-gray-500'>
                    Uzman yardımı ve servis
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Action Buttons */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <Button
            onClick={() => window.history.back()}
            variant='outline'
            size='lg'
            className='flex-1 sm:flex-none'
          >
            <ArrowLeft className='w-4 h-4 mr-2' />
            Geri Dön
          </Button>

          <Link href='/' className='flex-1 sm:flex-none'>
            <Button size='lg' className='w-full'>
              <Home className='w-4 h-4 mr-2' />
              Ana Sayfa
            </Button>
          </Link>
        </div>

        {/* Help Text */}
        <p className='text-sm text-gray-500 mt-8'>
          Yardıma mı ihtiyacınız var?{' '}
          <Link
            href='/support'
            className='text-blue-600 hover:text-blue-800 underline'
          >
            Bizimle iletişime geçin
          </Link>
        </p>
      </div>
    </div>
  );
}
