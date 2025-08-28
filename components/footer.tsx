'use client';

import { useLanguage } from '@/contexts/language-context';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const footerTranslations = {
  tr: {
    company: {
      description:
        'HSRobot, endüstriyel robotlar, işbirlikçi robotlar ve otomasyon çözümleri konusunda önde gelen üreticilerden biridir.',
      copyright: '© 2025 HSRobot. Tüm hakları saklıdır.',
    },
    quickAccess: {
      title: 'Hızlı Erişim',
      support: 'Destek',
      library: 'Kütüphane',
      about: 'Hakkımızda',
      contact: 'İletişim',
    },
    productCategories: {
      title: 'Ürün Kategorileri',
      industrial: 'Endüstriyel Robotlar',
      collaborative: 'İşbirlikçi Robotlar',
      composite: 'Kompozit Robotlar',
      components: 'Çekirdek Bileşenler',
      peripherals: 'Standart Çevresel Ürünler',
    },
    solutions: {
      title: 'Çözümler',
      c3c: '3C Endüstrisi Detayları',
      automotive: 'Otomotiv Detayları',
      textile: 'Ayakkabı ve Tekstil',
      appliances: 'Ev Aletleri Endüstrisi',
      metalworking: 'Metal İşleme Sektörü',
      other: 'Diğer Sektörler',
    },
    contact: {
      title: 'İletişim',
      phone: '0531 760 40 31',
      email: 'info@hsrobotics.tr',
      headquarters:
        'Genel Merkez: No.19 Taoyuan East Road, Shishan Town, Nanhai District, Foshan City, Guangdong Province',
      turkeyOffice:
        'Türkiye Temsilciliği: İkitelli OSB, TEM34 İkitelli no127, 34490 Başakşehir/İstanbul',
    },
  },
  en: {
    company: {
      description:
        'HSRobot is one of the leading manufacturers in industrial robots, collaborative robots and automation solutions.',
      copyright: '© 2025 HSRobot. All rights reserved.',
    },
    quickAccess: {
      title: 'Quick Access',
      support: 'Support',
      library: 'Library',
      about: 'About',
      contact: 'Contact',
    },
    productCategories: {
      title: 'Product Categories',
      industrial: 'Industrial Robots',
      collaborative: 'Collaborative Robots',
      composite: 'Composite Robots',
      components: 'Core Components',
      peripherals: 'Standard Peripheral Products',
    },
    solutions: {
      title: 'Solutions',
      c3c: '3C Industry Details',
      automotive: 'Automotive Details',
      textile: 'Shoes and Textiles',
      appliances: 'Home Appliances Industry',
      metalworking: 'Metal Processing Sector',
      other: 'Other Sectors',
    },
    contact: {
      title: 'Contact',
      phone: '0531 760 40 31',
      email: 'info@hsrobotics.tr',
      headquarters:
        'Headquarters: No.19 Taoyuan East Road, Shishan Town, Nanhai District, Foshan City, Guangdong Province',
      turkeyOffice:
        'Turkey Office: İkitelli OSB, TEM34 İkitelli no127, 34490 Başakşehir/İstanbul',
    },
  },
};

export default function Footer() {
  const { currentLang } = useLanguage();
  const ft = footerTranslations[currentLang];

  // Mobil akordiyon state'leri
  const [openSections, setOpenSections] = useState<{
    quickAccess: boolean;
    productCategories: boolean;
    solutions: boolean;
    contact: boolean;
  }>({
    quickAccess: true, // Varsayılan olarak açık
    productCategories: false,
    solutions: false,
    contact: false,
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <footer className='bg-gray-900 text-white py-12 md:py-16'>
      <div className='container mx-auto max-w-8xl'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {/* Hızlı Erişim */}
          <div>
            <button
              onClick={() => toggleSection('quickAccess')}
              className='w-full flex items-center justify-between text-lg font-semibold text-white mb-3 md:mb-3 lg:cursor-default'
            >
              <span>{ft.quickAccess.title}</span>
              <ChevronDown
                className={`w-5 h-5 text-gray-400 transition-transform duration-200 md:hidden ${
                  openSections.quickAccess ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </button>
            <ul
              className={`space-y-1.5 transition-all duration-200 md:block ${
                openSections.quickAccess ? 'block' : 'hidden md:block'
              }`}
            >
              <li>
                <Link
                  href='/support'
                  className='text-gray-300 hover:text-white transition-colors duration-300'
                >
                  {ft.quickAccess.support}
                </Link>
              </li>
              <li>
                <Link
                  href='/library'
                  className='text-gray-300 hover:text-white transition-colors duration-300'
                >
                  {ft.quickAccess.library}
                </Link>
              </li>
              <li>
                <Link
                  href='/about'
                  className='text-gray-300 hover:text-white transition-colors duration-300'
                >
                  {ft.quickAccess.about}
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='text-gray-300 hover:text-white transition-colors duration-300'
                >
                  {ft.quickAccess.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Ürün Kategorileri */}
          <div>
            <button
              onClick={() => toggleSection('productCategories')}
              className='w-full flex items-center justify-between text-lg font-semibold text-white mb-3 md:mb-3 lg:cursor-default'
            >
              <span>{ft.productCategories.title}</span>
              <ChevronDown
                className={`w-5 h-5 text-gray-400 transition-transform duration-200 md:hidden ${
                  openSections.productCategories ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </button>
            <ul
              className={`space-y-1.5 transition-all duration-200 md:block ${
                openSections.productCategories ? 'block' : 'hidden md:block'
              }`}
            >
              <li>
                <Link
                  href='/category/endustriyel-robotlar'
                  className='text-gray-300 hover:text-white transition-colors duration-300'
                >
                  {ft.productCategories.industrial}
                </Link>
              </li>
              <li>
                <Link
                  href='/category/isbirlikci-robotlar'
                  className='text-gray-300 hover:text-white transition-colors duration-300'
                >
                  {ft.productCategories.collaborative}
                </Link>
              </li>
              <li>
                <Link
                  href='/category/kompozit-robotlar'
                  className='text-gray-300 hover:text-white transition-colors duration-300'
                >
                  {ft.productCategories.composite}
                </Link>
              </li>
              <li>
                <Link
                  href='/category/cekirdek-bilesenler'
                  className='text-gray-300 hover:text-white transition-colors duration-300'
                >
                  {ft.productCategories.components}
                </Link>
              </li>
              <li>
                <Link
                  href='/category/standart-cevresel-urunler'
                  className='text-gray-300 hover:text-white transition-colors duration-300'
                >
                  {ft.productCategories.peripherals}
                </Link>
              </li>
            </ul>
          </div>

          {/* Çözümler */}
          <div>
            <button
              onClick={() => toggleSection('solutions')}
              className='w-full flex items-center justify-between text-lg font-semibold text-white mb-3 md:mb-3 lg:cursor-default'
            >
              <span>{ft.solutions.title}</span>
              <ChevronDown
                className={`w-5 h-5 text-gray-400 transition-transform duration-200 md:hidden ${
                  openSections.solutions ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </button>
            <ul
              className={`space-y-1.5 transition-all duration-200 md:block ${
                openSections.solutions ? 'block' : 'hidden md:block'
              }`}
            >
              <li>
                <Link
                  href='/solutions/3c-industry'
                  className='text-gray-300 hover:text-white transition-colors duration-300'
                >
                  {ft.solutions.c3c}
                </Link>
              </li>
              <li>
                <Link
                  href='/solutions/automotive'
                  className='text-gray-300 hover:text-white transition-colors duration-300'
                >
                  {ft.solutions.automotive}
                </Link>
              </li>
              <li>
                <Link
                  href='/solutions/textile'
                  className='text-gray-300 hover:text-white transition-colors duration-300'
                >
                  {ft.solutions.textile}
                </Link>
              </li>
              <li>
                <Link
                  href='/solutions/appliances'
                  className='text-gray-300 hover:text-white transition-colors duration-300'
                >
                  {ft.solutions.appliances}
                </Link>
              </li>
              <li>
                <Link
                  href='/solutions/metalworking'
                  className='text-gray-300 hover:text-white transition-colors duration-300'
                >
                  {ft.solutions.metalworking}
                </Link>
              </li>
              <li>
                <Link
                  href='/solutions/other'
                  className='text-gray-300 hover:text-white transition-colors duration-300'
                >
                  {ft.solutions.other}
                </Link>
              </li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <button
              onClick={() => toggleSection('contact')}
              className='w-full flex items-center justify-between text-lg font-semibold mb-3 md:mb-3 lg:cursor-default'
            >
              <span>{ft.contact.title}</span>
              <ChevronDown
                className={`w-5 h-5 text-gray-400 transition-transform duration-200 md:hidden ${
                  openSections.contact ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </button>
            <div
              className={`space-y-2 transition-all duration-200 md:block ${
                openSections.contact ? 'block' : 'hidden md:block'
              }`}
            >
              <div className='text-gray-300 text-sm'>{ft.contact.phone}</div>
              <div className='text-gray-300 text-sm'>{ft.contact.email}</div>
              <div className='text-gray-300 text-sm'>
                <div>
                  <span className='font-semibold'>Genel Merkez:</span> No.19
                  Taoyuan East Road, Shishan Town, Nanhai District, Foshan City,
                  Guangdong Province
                </div>
                <div className='mt-1'>
                  <span className='font-semibold'>Türkiye Temsilciliği:</span>{' '}
                  İkitelli OSB, TEM34 İkitelli no127, 34490 Başakşehir/İstanbul
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='border-t border-gray-800 mt-8 md:mt-12 pt-6 md:pt-8 text-center'>
          <div className='flex items-center justify-center'>
            <Link
              href='https://novagraph.com.tr'
              target='_blank'
              rel='noopener noreferrer'
              className='group hover:scale-110 hover:drop-shadow-lg transition-all duration-300 ease-in-out'
            >
              <Image
                src='/img/novagraph-footer-logo.svg'
                alt='Novagraph'
                width={120}
                height={30}
                className='h-6 w-auto group-hover:brightness-110 group-hover:contrast-125 transition-all duration-300'
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
export { Footer };
