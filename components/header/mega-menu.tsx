'use client';

import Link from 'next/link';
import { useState } from 'react';

export function MegaMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='relative'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors'
      >
        <span>Çözümler</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M19 9l-7 7-7-7'
          />
        </svg>
      </button>

      {isOpen && (
        <div className='absolute top-full left-0 w-96 bg-white border border-gray-200 rounded-lg shadow-lg z-50'>
          <div className='p-4'>
            <div className='grid grid-cols-2 gap-4'>
              <div>
                <h3 className='font-semibold text-gray-900 mb-2'>Ürünler</h3>
                <ul className='space-y-1'>
                  <li>
                    <Link
                      href='/products/sr-serisi'
                      className='text-sm text-gray-600 hover:text-blue-600 block py-1'
                    >
                      SR Serisi
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/products/jr-serisi'
                      className='text-sm text-gray-600 hover:text-blue-600 block py-1'
                    >
                      JR Serisi
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/products/md-serisi'
                      className='text-sm text-gray-600 hover:text-blue-600 block py-1'
                    >
                      MD Serisi
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className='font-semibold text-gray-900 mb-2'>Hizmetler</h3>
                <ul className='space-y-1'>
                  <li>
                    <Link
                      href='/support'
                      className='text-sm text-gray-600 hover:text-blue-600 block py-1'
                    >
                      Teknik Destek
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/library'
                      className='text-sm text-gray-600 hover:text-blue-600 block py-1'
                    >
                      Dokümantasyon
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
