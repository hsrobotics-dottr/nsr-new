'use client';

import { Globe, Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { LanguageSelector } from './language-selector';
import { Navigation } from './navigation';
import { SearchOverlay } from './search-overlay';

// Kategori görselleri eşleştirmesi
const getCategoryImage = (categoryId: string): string => {
  const categoryImages: { [key: string]: string } = {
    // Products
    'industrial-robots': '/img/industrial/JR/HSR-JR603-570.png',
    'collaborative-robots': '/img/Collaborative/CO/HSR-CO605-1000.png',
    'composite-robots': '/img/industrial/MD/HSR-MD410-1500.png',
    'core-components': '/img/MotionController/hrc-i.png',
    'standard-peripheral': '/img/quick/HST-C06.png',
  };
  return categoryImages[categoryId] || '/img/industrial/JR/HSR-JR603-570.png';
};

// Ürün görselleri eşleştirmesi
const getProductImage = (productHref: string): string => {
  const productImages: { [key: string]: string } = {
    // JR Serisi
    'jr-serisi': '/img/industrial/JR/HSR-JR603-570.png',
    // JH Serisi
    'jh-serisi': '/img/industrial/JH/HSR-JH605-1500.png',
    // BR Serisi
    'br-serisi': '/img/industrial/BR/HSR-BR312-1100.png',
    // SR Serisi
    'sr-serisi': '/img/industrial/SR/HSR-SR6-500.png',
    // MD Serisi
    'md-serisi': '/img/industrial/MD/HSR-MD410-1500.png',
    // HC Serisi
    'hc-serisi': '/img/industrial/HC/HSR-HC403-590.png',
    // CR Serisi
    'cr-serisi': '/img/Collaborative/CR/HSR-CR605-790.png',
    // CO Serisi
    'co-serisi': '/img/Collaborative/CO/HSR-CO605-1000.png',
    // Kompozit Robot
    'kompozit-robot': '/img/industrial/MD/HSR-MD410-1500.png',
    // Çekirdek Bileşenler
    'hareket-denetleyicisi': '/img/MotionController/hrc-i.png',
    'servo-surucu': '/img/ServoDrives/HSS-LDE.png',
    'servo-motor': '/img/servomotors/LDD Series 130ST Motor.png',
    'teaching-pendant': '/img/teaching/HsPad-03.png',
    // Standart Çevresel Ürünler
    'hizli-degistirilen-disk': '/img/quick/HST-C06.png',
    'yuzer-flanj': '/img/floatingflange/floating-flange.png',
    'kuvvet-kontrol': '/img/forcecontrol/HST-AFC-P100.png',
    'taslama-araclari': '/img/grinding/HST-M-RC350.png',
  };

  // URL'den ürün ID'sini çıkar
  const productId = productHref.split('/').pop();
  return (
    productImages[productId || ''] || '/img/industrial/JR/HSR-JR603-570.png'
  );
};

// Mega menü verisi - Güncellenmiş ürün kategorileri
const megaMenuData = {
  products: [
    {
      id: 'industrial-robots',
      title: 'Endüstriyel Robotlar',
      subItems: [
        {
          title: 'JR Serisi',
          href: '/products/jr-serisi',
          image: '/placeholder-robot.svg',
        },
        {
          title: 'JH Serisi',
          href: '/products/jh-serisi',
          image: '/placeholder-robot.svg',
        },
        {
          title: 'BR Serisi',
          href: '/products/br-serisi',
          image: '/placeholder-robot.svg',
        },
        {
          title: 'SR Serisi',
          href: '/products/sr-serisi',
          image: '/placeholder-robot.svg',
        },
        {
          title: 'MD Serisi',
          href: '/products/md-serisi',
          image: '/placeholder-robot.svg',
        },
        {
          title: 'HC Serisi',
          href: '/products/hc-serisi',
          image: '/placeholder-robot.svg',
        },
      ],
    },
    {
      id: 'collaborative-robots',
      title: 'İşbirlikçi Robotlar',
      subItems: [
        {
          title: 'CR Serisi',
          href: '/products/cr-serisi',
          image: '/placeholder-robot.svg',
        },
        {
          title: 'CO Serisi',
          href: '/products/co-serisi',
          image: '/placeholder-robot.svg',
        },
      ],
    },
    {
      id: 'composite-robots',
      title: 'Kompozit Robotlar',
      subItems: [
        {
          title: 'Kompozit Robot',
          href: '/products/kompozit-robot',
          image: '/placeholder-robot.svg',
        },
      ],
    },
    {
      id: 'core-components',
      title: 'Çekirdek Bileşenler',
      subItems: [
        {
          title: 'Hareket Denetleyicisi',
          href: '/products/hareket-denetleyicisi',
          image: '/placeholder-robot.svg',
        },
        {
          title: 'Servo Sürücü',
          href: '/products/servo-surucu',
          image: '/placeholder-robot.svg',
        },
        {
          title: 'Servo Motor',
          href: '/products/servo-motor',
          image: '/placeholder-robot.svg',
        },
        {
          title: 'Öğretme Cihazı',
          href: '/products/teaching-pendant',
          image: '/placeholder-robot.svg',
        },
      ],
    },
    {
      id: 'standard-peripheral',
      title: 'Standart Çevresel Ürünler',
      subItems: [
        {
          title: 'Hızlı Değiştirilen Disk',
          href: '/products/hizli-degistirilen-disk',
          image: '/placeholder-robot.svg',
        },
        {
          title: 'Yüzer Flanş',
          href: '/products/yuzer-flanj',
          image: '/img/floatingflange/floating-flange.png',
        },
        {
          title: 'Kuvvet Kontrol Ürünleri',
          href: '/products/kuvvet-kontrol',
          image: '/img/forcecontrol/HST-AFC-P100.png',
        },
        {
          title: 'Taşlama Araçları',
          href: '/products/taslama-araclari',
          image: '/placeholder-robot.svg',
        },
      ],
    },
  ],
  solutions: [
    {
      id: '3c-industry',
      title: '3C Endüstrisi',
      href: '/sectors/3c',
      subItems: [
        { title: 'Bilgisayar Üretimi', href: '/sectors/3c#bilgisayar' },
        { title: 'İletişim Cihazları', href: '/sectors/3c#iletisim' },
        { title: 'Tüketici Elektroniği', href: '/sectors/3c#tuketici' },
        { title: 'PCB Montajı', href: '/sectors/3c#pcb' },
        { title: 'Akıllı Telefon Üretimi', href: '/sectors/3c#telefon' },
        { title: 'Tablet Üretimi', href: '/sectors/3c#tablet' },
      ],
    },
    {
      id: 'automotive',
      title: 'Otomotiv',
      href: '/sectors/automotive',
      subItems: [
        { title: 'Kaynak İşlemleri', href: '/sectors/automotive#kaynak' },
        { title: 'Boyama Sistemleri', href: '/sectors/automotive#boyama' },
        { title: 'Montaj Hatları', href: '/sectors/automotive#montaj' },
        { title: 'Kalite Kontrol', href: '/sectors/automotive#kalite' },
        { title: 'Motor Üretimi', href: '/sectors/automotive#motor' },
        { title: 'Şanzıman Montajı', href: '/sectors/automotive#sanziman' },
        { title: 'Kaporta Üretimi', href: '/sectors/automotive#kaporta' },
      ],
    },
    {
      id: 'textile',
      title: 'Ayakkabı ve Tekstil',
      href: '/sectors/shoes-clothes',
      subItems: [
        { title: 'Tekstil Üretimi', href: '/sectors/shoes-clothes#tekstil' },
        { title: 'Ayakkabı İmalatı', href: '/sectors/shoes-clothes#ayakkabi' },
        { title: 'Kesim İşlemleri', href: '/sectors/shoes-clothes#kesim' },
        {
          title: 'Paketleme Sistemleri',
          href: '/sectors/shoes-clothes#paketleme',
        },
        { title: 'Dikim İşlemleri', href: '/sectors/shoes-clothes#dikim' },
        { title: 'Kalite Kontrol', href: '/sectors/shoes-clothes#kalite' },
      ],
    },
    {
      id: 'appliances',
      title: 'Ev Aletleri Endüstrisi',
      href: '/sectors/appliances',
      subItems: [
        { title: 'Beyaz Eşya Üretimi', href: '/sectors/appliances#beyaz-esya' },
        { title: 'Küçük Ev Aletleri', href: '/sectors/appliances#kucuk-esya' },
        { title: 'Montaj Sistemleri', href: '/sectors/appliances#montaj' },
        { title: 'Test İşlemleri', href: '/sectors/appliances#test' },
        {
          title: 'Paketleme Sistemleri',
          href: '/sectors/appliances#paketleme',
        },
        { title: 'Kalite Kontrol', href: '/sectors/appliances#kalite' },
      ],
    },
    {
      id: 'metal-processing',
      title: 'Metal İşleme Sektörü',
      href: '/sectors/metalworking',
      subItems: [
        { title: 'CNC Tezgah Entegrasyonu', href: '/sectors/metalworking#cnc' },
        { title: 'Kaynak Uygulamaları', href: '/sectors/metalworking#kaynak' },
        { title: 'Malzeme Taşıma', href: '/sectors/metalworking#tasima' },
        { title: 'Yüzey İşlemleri', href: '/sectors/metalworking#yuzeysel' },
        { title: 'Kesim İşlemleri', href: '/sectors/metalworking#kesim' },
        { title: 'Bükme İşlemleri', href: '/sectors/metalworking#bukme' },
        { title: 'Delme İşlemleri', href: '/sectors/metalworking#delme' },
      ],
    },
    {
      id: 'other-industries',
      title: 'Diğer Sektörler',
      href: '/sectors/others',
      subItems: [
        { title: 'Gıda ve İçecek', href: '/sectors/others#gida' },
        { title: 'İlaç ve Kozmetik', href: '/sectors/others#ilac' },
        { title: 'Ambalaj Endüstrisi', href: '/sectors/others#ambalaj' },
        { title: 'Özel Uygulamalar', href: '/sectors/others#ozel' },
        {
          title: 'Laboratuvar Otomasyonu',
          href: '/sectors/others#laboratuvar',
        },
        { title: 'Temizlik Sistemleri', href: '/sectors/others#temizlik' },
      ],
    },
  ],
};

// Dil verisi
const languages = [
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
];

// Çeviri metinleri
const translations = {
  tr: {
    nav: {
      products: 'Ürünler',
      solutions: 'Çözümler',
      support: 'Destek',
      library: 'Kütüphane',
      about: 'Hakkımızda',
      news: 'Haberler',
    },
    search: {
      placeholder: 'Ürün ara...',
      close: 'Kapat',
    },
    language: {
      title: 'Dil Seçimi',
      turkish: 'Türkçe',
      english: 'English',
    },
  },
  en: {
    nav: {
      products: 'Products',
      solutions: 'Solutions',
      support: 'Support',
      library: 'Library',
      about: 'About',
      news: 'News',
    },
    search: {
      placeholder: 'Search products...',
      close: 'Close',
    },
    language: {
      title: 'Language Selection',
      turkish: 'Türkçe',
      english: 'English',
    },
  },
};

export function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [selectedMegaMenuItem, setSelectedMegaMenuItem] = useState<
    string | null
  >(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentLang, setCurrentLang] = useState<'tr' | 'en'>('tr');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState<
    'products' | 'solutions' | null
  >(null);
  const [activeMobileCategory, setActiveMobileCategory] = useState<
    string | null
  >(null);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Escape key handler for mega menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (activeMobileCategory) {
          setActiveMobileCategory(null);
        } else if (activeMobileMenu) {
          setActiveMobileMenu(null);
        } else if (isMobileMenuOpen) {
          setIsMobileMenuOpen(false);
        } else {
          setActiveDropdown(null);
          setSelectedMegaMenuItem(null);
        }
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [activeMobileCategory, activeMobileMenu, isMobileMenuOpen]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        if (activeMobileCategory) {
          setActiveMobileCategory(null);
        } else if (activeMobileMenu) {
          setActiveMobileMenu(null);
        } else if (isMobileMenuOpen) {
          setIsMobileMenuOpen(false);
        }
      }
    };

    if (isMobileMenuOpen || activeMobileMenu || activeMobileCategory) {
      document.addEventListener('mousedown', handleClickOutside);
      // Prevent body scroll when mobile menu is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen, activeMobileMenu, activeMobileCategory]);

  // Close desktop mega menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if click is outside mega menu area
      const target = event.target as Element;
      const isInsideMegaMenu =
        target.closest('[data-mega-menu]') ||
        target.closest('[data-mega-menu-trigger]');

      if (!isInsideMegaMenu && activeDropdown) {
        setActiveDropdown(null);
        setSelectedMegaMenuItem(null);
      }
    };

    if (activeDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeDropdown]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Mobile menu handlers
  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setActiveMobileMenu(null);
      setActiveMobileCategory(null);
    }
  };

  const handleMobileSubmenuOpen = (menu: 'products' | 'solutions') => {
    setActiveMobileMenu(menu);
  };

  const handleMobileSubmenuClose = () => {
    setActiveMobileMenu(null);
  };

  const handleMobileCategoryOpen = (categoryId: string) => {
    setActiveMobileCategory(categoryId);
  };

  const handleMobileCategoryClose = () => {
    setActiveMobileCategory(null);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
    setActiveMobileMenu(null);
    setActiveMobileCategory(null);
  };

  // Mega menu handlers - Completely rewritten for stability
  const handleDropdownEnter = (menu: string) => {
    if (isMobileMenuOpen || activeMobileMenu) return;

    // Clear any existing timeout immediately
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    // If same menu is already open, do nothing
    if (activeDropdown === menu) return;

    // Set new menu
    setActiveDropdown(menu);

    // Set default selected item
    if (menu === 'products' && megaMenuData.products.length > 0) {
      setSelectedMegaMenuItem(megaMenuData.products[0].id);
    } else if (menu === 'solutions' && megaMenuData.solutions.length > 0) {
      setSelectedMegaMenuItem(megaMenuData.solutions[0].id);
    } else {
      setSelectedMegaMenuItem(null);
    }
  };

  const handleDropdownLeave = () => {
    if (isMobileMenuOpen || activeMobileMenu) return;

    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    // Set timeout to close menu with longer delay
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setSelectedMegaMenuItem(null);
      timeoutRef.current = null;
    }, 200); // Reduced delay for better responsiveness
  };

  const handleMegaMenuItemHover = (itemId: string) => {
    if (isMobileMenuOpen || activeMobileMenu || !activeDropdown) return;
    setSelectedMegaMenuItem(itemId);
  };

  const handleMegaMenuItemTouch = (itemId: string) => {
    if (isMobileMenuOpen || activeMobileMenu || !activeDropdown) return;
    setSelectedMegaMenuItem(itemId);
  };

  const closeMegaMenu = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(null);
    setSelectedMegaMenuItem(null);
  };

  // Enhanced click handler for mega menu items
  const handleMegaMenuClick = (menu: string) => {
    if (isMobileMenuOpen || activeMobileMenu) return;

    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (activeDropdown === menu) {
      // If same menu is open, close it
      setActiveDropdown(null);
      setSelectedMegaMenuItem(null);
    } else {
      // Open new menu, close previous one immediately
      setActiveDropdown(menu);
      if (menu === 'products' && megaMenuData.products.length > 0) {
        setSelectedMegaMenuItem(megaMenuData.products[0].id);
      } else if (menu === 'solutions' && megaMenuData.solutions.length > 0) {
        setSelectedMegaMenuItem(megaMenuData.solutions[0].id);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, menu: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleMegaMenuClick(menu); // Use click handler instead
    }
  };

  const handleMenuItemKeyDown = (e: React.KeyboardEvent, itemId: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setSelectedMegaMenuItem(itemId);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90 shadow-sm border-b border-gray-200'
          : 'bg-[#111827] backdrop-blur supports-[backdrop-filter]:bg-[#111827]'
      }`}
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <Link href='/' className='flex items-center space-x-3'>
              <Image
                src={
                  isScrolled ? '/img/hsr-logo-blue.svg' : '/img/hsr-logo.svg'
                }
                alt='HSR Robotics Logo'
                width={80}
                height={80}
                className='w-20 h-20 transition-all duration-300'
              />
            </Link>
          </div>

          {/* Navigation */}
          <Navigation
            activeDropdown={activeDropdown}
            selectedMegaMenuItem={selectedMegaMenuItem}
            isScrolled={isScrolled}
            t={translations[currentLang]}
            megaMenuData={megaMenuData}
            handleDropdownEnter={handleDropdownEnter}
            handleDropdownLeave={handleDropdownLeave}
            handleMegaMenuItemHover={handleMegaMenuItemHover}
            handleMegaMenuItemTouch={handleMegaMenuItemTouch}
            closeMegaMenu={closeMegaMenu}
            handleKeyDown={handleKeyDown}
            handleMenuItemKeyDown={handleMenuItemKeyDown}
          />

          {/* Search and Language Buttons */}
          <div className='hidden lg:flex items-center space-x-4 ml-6'>
            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className={`p-2 rounded-md transition-colors ${
                isScrolled
                  ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  : 'text-white hover:text-gray-300 hover:bg-white/10'
              }`}
              aria-label='Search'
            >
              <Search className='h-5 w-5' />
            </button>

            {/* Language Button */}
            <button
              onClick={() => setIsLanguageOpen(true)}
              className={`p-2 rounded-md transition-colors flex items-center space-x-1 ${
                isScrolled
                  ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  : 'text-white hover:text-gray-300 hover:bg-white/10'
              }`}
              aria-label='Language'
            >
              <Globe className='h-5 w-5' />
              <span className='text-sm font-medium'>
                {languages.find(lang => lang.code === currentLang)?.flag}
              </span>
            </button>
          </div>

          {/* Mobile Search and Language Buttons */}
          <div className='lg:hidden flex items-center space-x-3'>
            {/* Mobile Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className={`p-2.5 rounded-full transition-all duration-200 ${
                isScrolled
                  ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  : 'text-white hover:text-gray-300 hover:bg-white/20'
              }`}
              aria-label='Search'
            >
              <Search className='h-5 w-5' />
            </button>

            {/* Mobile Language Button */}
            <button
              onClick={() => setIsLanguageOpen(true)}
              className={`p-2.5 rounded-full transition-all duration-200 ${
                isScrolled
                  ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  : 'text-white hover:text-gray-300 hover:bg-white/20'
              }`}
              aria-label='Language'
            >
              <span className='text-lg font-medium leading-none'>
                {languages.find(lang => lang.code === currentLang)?.flag}
              </span>
            </button>

            {/* Hamburger Menu Button */}
            <button
              onClick={handleMobileMenuToggle}
              className={`p-2.5 rounded-full transition-all duration-300 ${
                isScrolled
                  ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  : 'text-white hover:text-gray-300 hover:bg-white/20'
              } ${isMobileMenuOpen ? 'bg-white/30' : ''}`}
              aria-label='Menu'
            >
              <div className='relative w-5 h-5 flex items-center justify-center'>
                <span
                  className={`absolute block w-5 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen
                      ? 'rotate-45 translate-y-1.5'
                      : '-translate-y-1.5'
                  }`}
                ></span>
                <span
                  className={`absolute block w-5 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen
                      ? 'opacity-0 scale-0'
                      : 'opacity-100 scale-100'
                  }`}
                ></span>
                <span
                  className={`absolute block w-5 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen
                      ? '-rotate-45 -translate-y-1.5'
                      : 'translate-y-1.5'
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      <SearchOverlay
        isSearchOpen={isSearchOpen}
        searchQuery={searchQuery}
        t={translations[currentLang]}
        setIsSearchOpen={setIsSearchOpen}
        setSearchQuery={setSearchQuery}
      />

      {/* Language Selector */}
      <LanguageSelector
        isLanguageOpen={isLanguageOpen}
        currentLang={currentLang}
        languages={languages}
        t={translations[currentLang]}
        setIsLanguageOpen={setIsLanguageOpen}
        setCurrentLang={setCurrentLang}
      />

      {/* Mobile Menu Overlay - Sağdan Sola Açılan */}
      {isMobileMenuOpen &&
        createPortal(
          <div
            className='lg:hidden fixed inset-0 z-[200] bg-black/50 backdrop-blur-sm animate-in fade-in duration-300'
            onClick={handleMobileMenuClose}
          >
            <div
              ref={mobileMenuRef}
              className='absolute inset-y-0 right-0 w-full bg-white shadow-2xl animate-in slide-in-from-right duration-300 ease-out'
              onClick={e => e.stopPropagation()}
            >
              <div className='h-full flex flex-col'>
                {/* Header with Close Button */}
                <div className='flex-shrink-0 flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50'>
                  <h2 className='text-lg font-bold text-gray-900'>Menü</h2>
                  <button
                    onClick={handleMobileMenuClose}
                    className='p-2 rounded-full bg-white hover:bg-gray-100 transition-colors shadow-sm'
                    aria-label='Close menu'
                  >
                    <svg
                      className='w-5 h-5 text-gray-600'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M6 18L18 6M6 6l12 12'
                      />
                    </svg>
                  </button>
                </div>

                {/* Menu Content - İlk Sayfa (Ana Başlıklar) */}
                <div className='flex-1 overflow-y-auto p-4 space-y-3 min-h-0'>
                  {/* Anasayfa */}
                  <Link
                    href='/'
                    className='flex items-center p-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 hover:scale-[1.02]'
                    onClick={handleMobileMenuClose}
                  >
                    <div className='w-8 h-8 bg-blue-100 rounded-lg mr-3 flex items-center justify-center'>
                      <svg
                        className='w-5 h-5 text-blue-600'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                        />
                      </svg>
                    </div>
                    <span className='font-medium'>Anasayfa</span>
                  </Link>

                  {/* Ürünler - Mega Menu */}
                  <button
                    onClick={() => handleMobileSubmenuOpen('products')}
                    className='w-full flex items-center justify-between p-3 text-left text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 hover:scale-[1.02] group'
                  >
                    <div className='flex items-center'>
                      <div className='w-8 h-8 bg-blue-100 rounded-lg mr-3 flex items-center justify-center group-hover:bg-blue-200 transition-colors'>
                        <svg
                          className='w-5 h-5 text-blue-600'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
                          />
                        </svg>
                      </div>
                      <span className='font-medium'>Ürünler</span>
                    </div>
                    <svg
                      className='w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors'
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
                  </button>

                  {/* Çözümler - Mega Menu */}
                  <button
                    onClick={() => handleMobileSubmenuOpen('solutions')}
                    className='w-full flex items-center justify-between p-3 text-left text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 hover:scale-[1.02] group'
                  >
                    <div className='flex items-center'>
                      <div className='w-8 h-8 bg-blue-100 rounded-lg mr-3 flex items-center justify-center group-hover:bg-blue-200 transition-colors'>
                        <svg
                          className='w-5 h-5 text-blue-600'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
                          />
                        </svg>
                      </div>
                      <span className='font-medium'>Çözümler</span>
                    </div>
                    <svg
                      className='w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors'
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
                  </button>

                  {/* Destek */}
                  <Link
                    href='/support'
                    className='flex items-center p-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 hover:scale-[1.02]'
                    onClick={handleMobileMenuClose}
                  >
                    <div className='w-8 h-8 bg-blue-100 rounded-lg mr-3 flex items-center justify-center'>
                      <svg
                        className='w-5 h-5 text-blue-600'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z'
                        />
                      </svg>
                    </div>
                    <span className='font-medium'>Destek</span>
                  </Link>

                  {/* Kütüphane */}
                  <Link
                    href='/library'
                    className='flex items-center p-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 hover:scale-[1.02]'
                    onClick={handleMobileMenuClose}
                  >
                    <div className='w-8 h-8 bg-blue-100 rounded-lg mr-3 flex items-center justify-center'>
                      <svg
                        className='w-5 h-5 text-blue-600'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
                        />
                      </svg>
                    </div>
                    <span className='font-medium'>Kütüphane</span>
                  </Link>

                  {/* Hakkımızda */}
                  <Link
                    href='/about'
                    className='flex items-center p-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 hover:scale-[1.02]'
                    onClick={handleMobileMenuClose}
                  >
                    <div className='w-8 h-8 bg-blue-100 rounded-lg mr-3 flex items-center justify-center'>
                      <svg
                        className='w-5 h-5 text-blue-600'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                    </div>
                    <span className='font-medium'>Hakkımızda</span>
                  </Link>

                  {/* Haberler */}
                  <Link
                    href='/haberler'
                    className='flex items-center p-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 hover:scale-[1.02]'
                    onClick={handleMobileMenuClose}
                  >
                    <div className='w-8 h-8 bg-blue-100 rounded-lg mr-3 flex items-center justify-center'>
                      <svg
                        className='w-5 h-5 text-blue-600'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z'
                        />
                      </svg>
                    </div>
                    <span className='font-medium'>Haberler</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}

      {/* Products Submenu - İkinci Panel */}
      {activeMobileMenu === 'products' &&
        createPortal(
          <div
            className='lg:hidden fixed inset-0 z-[200] animate-in fade-in duration-200'
            onClick={handleMobileSubmenuClose}
          >
            <div
              ref={mobileMenuRef}
              className='absolute inset-y-0 right-0 w-full bg-white shadow-2xl animate-in slide-in-from-right duration-200 ease-in-out'
              onClick={e => e.stopPropagation()}
            >
              <div className='h-full flex flex-col'>
                {/* Header with Back Button */}
                <div className='flex-shrink-0 flex items-center justify-between p-4 border-b border-gray-200 bg-blue-50'>
                  <button
                    onClick={handleMobileSubmenuClose}
                    className='flex items-center space-x-2 text-blue-700 hover:text-blue-900 transition-colors'
                  >
                    <svg
                      className='w-5 h-5'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M15 19l-7-7 7-7'
                      />
                    </svg>
                  </button>
                  <h3 className='text-lg font-semibold text-gray-900'>
                    Ürünler
                  </h3>
                  <div className='w-5'></div>
                </div>

                {/* Category List */}
                <div className='flex-1 overflow-y-auto p-4 space-y-3 min-h-0'>
                  {megaMenuData.products.map(category => (
                    <button
                      key={category.id}
                      onClick={() => handleMobileCategoryOpen(category.id)}
                      className='w-full flex items-center justify-between p-4 text-left bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 hover:scale-[1.02] group'
                    >
                      <div className='flex items-center space-x-3 flex-1 min-w-0'>
                        <div className='w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center shadow-sm overflow-hidden flex-shrink-0'>
                          <Image
                            src={getCategoryImage(category.id)}
                            alt={category.title}
                            width={40}
                            height={40}
                            className='w-10 h-10 object-contain'
                          />
                        </div>
                        <div className='flex-1 min-w-0'>
                          <h4 className='text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors'>
                            {category.title}
                          </h4>
                        </div>
                      </div>
                      <svg
                        className='w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors'
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
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}

      {/* Solutions Submenu - İkinci Panel */}
      {activeMobileMenu === 'solutions' &&
        createPortal(
          <div
            className='lg:hidden fixed inset-0 z-[200] animate-in fade-in duration-200'
            onClick={handleMobileSubmenuClose}
          >
            <div
              ref={mobileMenuRef}
              className='absolute inset-y-0 right-0 w-full bg-white shadow-2xl animate-in slide-in-from-right duration-200 ease-in-out'
              onClick={e => e.stopPropagation()}
            >
              <div className='h-full flex flex-col'>
                {/* Header with Back Button */}
                <div className='flex-shrink-0 flex items-center justify-between p-4 border-b border-gray-200 bg-blue-50'>
                  <button
                    onClick={handleMobileSubmenuClose}
                    className='flex items-center space-x-2 text-blue-700 hover:text-blue-900 transition-colors'
                  >
                    <svg
                      className='w-5 h-5'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M15 19l-7-7 7-7'
                      />
                    </svg>
                  </button>
                  <h3 className='text-lg font-semibold text-gray-900'>
                    Çözümler
                  </h3>
                  <div className='w-5'></div>
                </div>

                {/* Category List */}
                <div className='flex-1 overflow-y-auto p-4 space-y-3 min-h-0'>
                  {megaMenuData.solutions.map(category => (
                    <Link
                      key={category.id}
                      href={category.href}
                      className='w-full flex items-center justify-between p-4 text-left bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 hover:scale-[1.02] group'
                      onClick={handleMobileMenuClose}
                    >
                      <div className='flex-1 min-w-0'>
                        <h4 className='text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors'>
                          {category.title}
                        </h4>
                      </div>
                      <svg
                        className='w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors'
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
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}

      {/* Third Level Menu - Product/Solution Details */}
      {activeMobileCategory &&
        createPortal(
          <div
            className='lg:hidden fixed inset-0 z-[200] animate-in fade-in duration-200'
            onClick={handleMobileCategoryClose}
          >
            <div
              ref={mobileMenuRef}
              className='absolute inset-y-0 right-0 w-full bg-white shadow-2xl animate-in slide-in-from-right duration-200 ease-in-out'
              onClick={e => e.stopPropagation()}
            >
              <div className='h-full flex flex-col'>
                {/* Header with Back Button */}
                <div className='flex-shrink-0 flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50'>
                  <button
                    onClick={handleMobileCategoryClose}
                    className='flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors'
                  >
                    <svg
                      className='w-5 h-5'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M15 19l-7-7 7-7'
                      />
                    </svg>
                  </button>
                  <h3 className='text-lg font-semibold text-gray-900'>
                    {(() => {
                      // Sadece products kategorileri için başlık göster
                      const category = megaMenuData.products.find(
                        cat => cat.id === activeMobileCategory
                      );
                      return category?.title || 'Detaylar';
                    })()}
                  </h3>
                  <div className='w-5'></div>
                </div>

                {/* Product/Solution Grid */}
                <div className='flex-1 overflow-y-auto p-4 min-h-0'>
                  <div className='grid grid-cols-1 gap-4'>
                    {(() => {
                      // Sadece products kategorileri için 3. adım göster
                      const category = megaMenuData.products.find(
                        cat => cat.id === activeMobileCategory
                      );

                      if (!category) return null;

                      return category.subItems.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className='block bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 hover:scale-[1.02] group'
                          onClick={handleMobileMenuClose}
                        >
                          <div className='flex items-center space-x-3'>
                            <div className='w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center shadow-sm overflow-hidden flex-shrink-0'>
                              <Image
                                src={getProductImage(item.href)}
                                alt={item.title}
                                width={40}
                                height={40}
                                className='w-10 h-10 object-contain'
                              />
                            </div>
                            <div className='flex-1 min-w-0'>
                              <h5 className='text-base font-semibold text-gray-800 group-hover:text-blue-600 transition-colors mb-1'>
                                {item.title}
                              </h5>
                              <p className='text-sm text-gray-600 leading-relaxed'>
                                {(() => {
                                  // Ürün/çözüm açıklamaları
                                  const descriptions: {
                                    [key: string]: string;
                                  } = {
                                    // Endüstriyel Robotlar
                                    'jr-serisi': 'Endüstriyel robot serisi',
                                    'jh-serisi':
                                      'Yatay eksenli robot çözümleri',
                                    'br-serisi': 'Çift döndü teknolojisi',
                                    'sr-serisi': 'Dört eksenli planar robot',
                                    'md-serisi': 'Paketleme ve paletleme',
                                    'hc-serisi': 'Üç eksenli düzlemli robot',

                                    // İşbirlikçi Robotlar
                                    'cr-serisi': 'Endüstriyel işbirliği robotu',
                                    'co-serisi': 'İnsan-robot işbirliği',

                                    // Kompozit Robotlar
                                    'kompozit-robot': 'Kompozit malzeme işleme',

                                    // Çekirdek Bileşenler
                                    'hareket-denetleyicisi':
                                      'Hareket denetleyici ürünleri',
                                    'servo-surucu': 'Servo sürücü ürünleri',
                                    'servo-motor': 'Servo motor ürünleri',
                                    'teaching-pendant':
                                      'Öğretme cihazı ürünleri',

                                    // Standart Çevresel Ürünler
                                    'hizli-degistirilen-disk':
                                      'Hızlı değiştirilen disk ürünleri',
                                    'yuzer-flanj': 'Yüzer flanş ürünleri',
                                    'kuvvet-kontrol': 'Kuvvet kontrol ürünleri',
                                    'taslama-araclari':
                                      'Taşlama araçları ürünleri',
                                  };

                                  // URL'den ürün ID'sini çıkar
                                  const productId = item.href.split('/').pop();
                                  return (
                                    descriptions[productId || ''] ||
                                    'Profesyonel robot çözümleri'
                                  );
                                })()}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ));
                    })()}
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </header>
  );
}
