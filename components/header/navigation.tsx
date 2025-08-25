'use client';

import type React from 'react';

import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Kategori görselleri eşleştirmesi
const getCategoryImage = (categoryId: string): string => {
  const categoryImages: { [key: string]: string } = {
    'industrial-robots': '/img/industrial/JR/HSR-JR603-570.png',
    'collaborative-robots': '/img/Collaborative/CO/HSR-CO605-1000.png',
    'composite-robots': '/img/industrial/MD/HSR-MD410-1500.png',
    'core-components': '/img/MotionController/hrc-i.png',
    'standard-peripheral': '/img/quick/HST-C06.png',
  };
  return categoryImages[categoryId] || '/img/industrial/JR/HSR-JR603-570.png';
};

interface NavigationProps {
  activeDropdown: string | null;
  selectedMegaMenuItem: string | null;
  isScrolled: boolean;
  t: any;
  megaMenuData: any;
  handleDropdownEnter: (menu: string) => void;
  handleDropdownLeave: () => void;
  handleMegaMenuItemHover: (itemId: string) => void;
  handleMegaMenuItemTouch: (itemId: string) => void;
  closeMegaMenu: () => void;
  handleKeyDown: (e: React.KeyboardEvent, menu: string) => void;
  handleMenuItemKeyDown: (e: React.KeyboardEvent, itemId: string) => void;
}

export default function Navigation({
  activeDropdown,
  selectedMegaMenuItem,
  isScrolled,
  t,
  megaMenuData,
  handleDropdownEnter,
  handleDropdownLeave,
  handleMegaMenuItemHover,
  handleMegaMenuItemTouch,
  closeMegaMenu,
  handleKeyDown,
  handleMenuItemKeyDown,
}: NavigationProps) {
  // Solutions menu data is now correctly passed via megaMenuData.solutions
  const solutionsMenuData = megaMenuData.solutions;

  return (
    <nav className='hidden lg:flex items-center space-x-8'>
      {/* Products Dropdown */}
      <div
        className='relative'
        onMouseEnter={() => handleDropdownEnter('products')}
        onMouseLeave={handleDropdownLeave}
        data-mega-menu-trigger
      >
        <button
          className={`flex items-center space-x-1 transition-colors py-2 ${
            isScrolled
              ? 'text-gray-800 hover:text-blue-600'
              : 'text-white hover:text-blue-400'
          }`}
          aria-expanded={activeDropdown === 'products'}
          aria-haspopup='true'
          role='button'
          aria-label='Products menu'
          onKeyDown={e => {
            handleKeyDown(e, 'products');
            if (e.key === 'Escape') closeMegaMenu();
          }}
        >
          <span>{t.nav.products}</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
              activeDropdown === 'products' ? 'rotate-180' : 'rotate-0'
            }`}
          />
        </button>

        {/* Products Mega Menu */}
        <div
          className={`fixed inset-x-0 bg-white shadow-2xl border-t border-gray-200 transition-all duration-200 ease-in-out z-[140] ${
            isScrolled ? 'top-[60px]' : 'top-[60px]'
          } ${
            activeDropdown === 'products'
              ? 'opacity-100 visible translate-y-0'
              : 'opacity-0 invisible -translate-y-2'
          }`}
          role='menu'
          aria-labelledby='products-menu-button'
          data-mega-menu
        >
          <div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl overflow-hidden overflow-x-hidden'>
            <div className='grid grid-cols-1 lg:grid-cols-5 min-h-[400px] lg:min-h-[500px] overflow-x-hidden'>
              {/* Sol Panel - Ana Başlıklar */}
              <div className='lg:col-span-2 bg-gray-50 p-6 lg:p-8 border-r border-gray-200'>
                <div className='flex items-center mb-6'>
                  <div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg'>
                    <svg
                      className='w-6 h-6 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className='text-xl font-bold text-gray-800 mb-1'>
                      Ürün Kategorileri
                    </h3>
                    <p className='text-gray-600 text-sm'>
                      {megaMenuData.products.length} ana kategori
                    </p>
                  </div>
                </div>
                <div className='space-y-3'>
                  {megaMenuData.products.map((category: any, index: number) => (
                    <button
                      key={category.id}
                      onMouseEnter={() => handleMegaMenuItemHover(category.id)}
                      className={`w-full text-left p-4 rounded-xl transition-colors duration-200 ${
                        selectedMegaMenuItem === category.id
                          ? 'bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg'
                          : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
                      }`}
                      role='menuitem'
                      tabIndex={0}
                      onKeyDown={e => {
                        handleMenuItemKeyDown(e, category.id);
                      }}
                    >
                      <div className='flex items-center space-x-3'>
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden ${
                            selectedMegaMenuItem === category.id
                              ? 'bg-white/20'
                              : 'bg-gray-50'
                          }`}
                        >
                          <Image
                            src={getCategoryImage(category.id)}
                            alt={category.title}
                            width={32}
                            height={32}
                            className='w-8 h-8 object-contain'
                          />
                        </div>
                        <div className='flex-1'>
                          <div className='font-semibold text-sm mb-1'>
                            {category.title}
                          </div>
                          <div
                            className={`text-xs ${
                              selectedMegaMenuItem === category.id
                                ? 'text-blue-100'
                                : 'text-gray-500'
                            }`}
                          >
                            {category.subItems.length} ürün kategorisi
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Sağ Panel - Alt Başlıklar Grid */}
              <div className='lg:col-span-3 p-6 lg:p-8 overflow-hidden overflow-x-hidden'>
                {(() => {
                  const selectedCategory = megaMenuData.products.find(
                    (cat: any) => cat.id === selectedMegaMenuItem
                  );
                  if (!selectedCategory) return null;

                  return (
                    <div className='h-full'>
                      <div className='flex items-center mb-6'>
                        <div className='w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mr-4 shadow-md overflow-hidden'>
                          <Image
                            src={getCategoryImage(selectedCategory.id)}
                            alt={selectedCategory.title}
                            width={40}
                            height={40}
                            className='w-10 h-10 object-contain'
                          />
                        </div>
                        <div>
                          <h4 className='text-lg lg:text-xl font-bold text-gray-800 mb-1'>
                            {selectedCategory.title}
                          </h4>
                          <p className='text-gray-500 text-xs'>
                            {selectedCategory.subItems.length} ürün bulundu
                          </p>
                        </div>
                      </div>
                      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 max-h-[300px] lg:max-h-[400px] overflow-y-auto overflow-x-hidden pr-2'>
                        {selectedCategory.subItems
                          .slice(0, 10)
                          .map((item: any, index: number) => (
                            <Link
                              key={index}
                              href={item.href}
                              className='group flex items-center bg-white rounded-xl border border-gray-200 hover:bg-blue-50 transition-colors duration-200 overflow-hidden p-4 space-x-4'
                              role='menuitem'
                              aria-label={item.title}
                            >
                              <div className='w-14 h-14 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center shadow-sm'>
                                <span className='text-xl font-bold text-gray-600 group-hover:text-blue-600 transition-colors'>
                                  {(() => {
                                    // Seri adlarını çıkar
                                    if (item.title.includes('JR Serisi'))
                                      return 'JR';
                                    if (item.title.includes('JH Serisi'))
                                      return 'JH';
                                    if (item.title.includes('BR Serisi'))
                                      return 'BR';
                                    if (item.title.includes('SR Serisi'))
                                      return 'SR';
                                    if (item.title.includes('MD Serisi'))
                                      return 'MD';
                                    if (item.title.includes('HC Serisi'))
                                      return 'HC';
                                    if (item.title.includes('CR Serisi'))
                                      return 'CR';
                                    if (item.title.includes('CO Serisi'))
                                      return 'CO';
                                    if (item.title.includes('Kompozit Robot'))
                                      return 'KR';
                                    if (
                                      item.title.includes(
                                        'Hareket Denetleyicisi'
                                      )
                                    )
                                      return 'HD';
                                    if (item.title.includes('Servo Sürücü'))
                                      return 'SS';
                                    if (item.title.includes('Servo Motor'))
                                      return 'SM';
                                    if (item.title.includes('Öğretme Cihazı'))
                                      return 'ÖC';
                                    return item.title.charAt(0);
                                  })()}
                                </span>
                              </div>
                              <div className='flex-1 min-w-0'>
                                <h5 className='font-semibold text-gray-800 group-hover:text-blue-600 transition-colors text-base leading-tight truncate mb-1'>
                                  {item.title}
                                </h5>
                                <p className='text-gray-500 text-sm group-hover:text-gray-600 transition-colors'>
                                  Detayları görüntüle
                                </p>
                              </div>
                              <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                <svg
                                  className='w-5 h-5 text-blue-500'
                                  fill='none'
                                  stroke='currentColor'
                                  viewBox='0 0 24 24'
                                >
                                  <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M9 5l7 7-7 7'
                                  />
                                </svg>
                              </div>
                            </Link>
                          ))}
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Dropdown */}
      <div
        className='relative'
        onMouseEnter={() => handleDropdownEnter('solutions')}
        onMouseLeave={handleDropdownLeave}
        data-mega-menu-trigger
      >
        <button
          className={`flex items-center space-x-1 transition-colors py-2 ${
            isScrolled
              ? 'text-gray-800 hover:text-blue-600'
              : 'text-white hover:text-blue-400'
          }`}
          aria-expanded={activeDropdown === 'solutions'}
          aria-haspopup='true'
          role='button'
          aria-label='Solutions menu'
          onKeyDown={e => {
            handleKeyDown(e, 'solutions');
            if (e.key === 'Escape') closeMegaMenu();
          }}
        >
          <span>{t.nav.solutions}</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
              activeDropdown === 'solutions' ? 'rotate-180' : 'rotate-0'
            }`}
          />
        </button>

        {/* Solutions Mega Menu */}
        <div
          className={`fixed inset-x-0 bg-white shadow-2xl border-t transition-all duration-200 ease-in-out z-[140] ${
            isScrolled ? 'top-[60px]' : 'top-[60px]'
          } ${
            activeDropdown === 'solutions'
              ? 'opacity-100 visible translate-y-0'
              : 'opacity-0 invisible -translate-y-2'
          }`}
          role='menu'
          aria-labelledby='solutions-menu-button'
          data-mega-menu
        >
          <div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
            <div className='py-8'>
              <div className='text-center mb-8'>
                <h3 className='text-2xl font-bold text-gray-800 mb-2'>
                  Sektör Çözümleri
                </h3>
                <p className='text-gray-600'>
                  Endüstrinizin ihtiyaçlarına özel robotik otomasyon çözümleri
                </p>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {[
                  {
                    title: '3C Endüstrisi',
                    href: '/sectors/3c',
                    solutions: 6,
                  },
                  {
                    title: 'Otomotiv',
                    href: '/sectors/automotive',
                    solutions: 7,
                  },
                  {
                    title: 'Ayakkabı ve Tekstil',
                    href: '/sectors/shoes-clothes',
                    solutions: 6,
                  },
                  {
                    title: 'Ev Aletleri Endüstrisi',
                    href: '/sectors/appliances',
                    solutions: 6,
                  },
                  {
                    title: 'Metal İşleme Sektörü',
                    href: '/sectors/metalworking',
                    solutions: 7,
                  },
                  {
                    title: 'Diğer Sektörler',
                    href: '/sectors/others',
                    solutions: 6,
                  },
                ].map((sector, index) => (
                  <Link
                    key={index}
                    href={sector.href}
                    className='group bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200 rounded-lg p-6 hover:bg-gray-50'
                    role='menuitem'
                    aria-label={sector.title}
                  >
                    <div className='flex items-center justify-between mb-4'>
                      <span className='text-xs text-black bg-gray-200 px-1.5 py-0.5 rounded-full'>
                        {sector.solutions} çözüm alanı
                      </span>
                    </div>

                    <h4 className='text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-200 mb-2'>
                      {sector.title}
                    </h4>

                    <div className='flex items-center text-black group-hover:text-gray-800 transition-colors duration-200'>
                      <span className='text-sm font-medium'>
                        Detayları İncele
                      </span>
                      <svg
                        className='w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M9 5l7 7-7 7'
                        />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Link
        href='/support'
        className={`transition-colors ${
          isScrolled
            ? 'text-gray-800 hover:text-blue-600'
            : 'text-white hover:text-blue-400'
        }`}
      >
        {t.nav.support}
      </Link>
      <Link
        href='/library'
        className={`transition-colors ${
          isScrolled
            ? 'text-gray-800 hover:text-blue-600'
            : 'text-white hover:text-blue-400'
        }`}
      >
        {t.nav.library}
      </Link>
      <Link
        href='/about'
        className={`transition-colors ${
          isScrolled
            ? 'text-gray-800 hover:text-blue-600'
            : 'text-white hover:text-blue-400'
        }`}
      >
        {t.nav.about}
      </Link>
    </nav>
  );
}
export { Navigation };
