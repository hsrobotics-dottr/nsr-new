'use client';

import type React from 'react';

import { useLanguage } from '@/contexts/language-context';
import { useCallback, useEffect, useState } from 'react';

const translations = {
  tr: {
    nav: {
      products: 'Ürünler',
      solutions: 'Çözümler',
      support: 'Destek',
      library: 'Kütüphane',
      about: 'Hakkımızda',
    },
    search: {
      placeholder: 'Arama yapın...',
      noResults: 'Sonuç bulunamadı',
      searchResults: 'Arama Sonuçları',
    },
    language: {
      select: 'Dil Seçin',
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
    },
    search: {
      placeholder: 'Search...',
      noResults: 'No results found',
      searchResults: 'Search Results',
    },
    language: {
      select: 'Select Language',
      turkish: 'Türkçe',
      english: 'English',
    },
  },
};

export const megaMenuData = {
  products: [
    {
      id: 'endustriyel-robotlar',
      title: 'Endüstriyel Robotlar',
      titleEn: 'Industrial Robots',
      subItems: [
        {
          title: 'JR Serisi',
          titleEn: 'JR Series',
          href: '/products/jr-serisi',
          image: '/img/industrial/JR/HSR-JR603-570.png',
        },
        {
          title: 'JH Serisi',
          titleEn: 'JH Series',
          href: '/products/jh-serisi',
          image: '/img/industrial/JH/HSR-JH605-1500.png',
        },
        {
          title: 'BR Serisi',
          titleEn: 'BR Series',
          href: '/products/br-serisi',
          image: '/img/industrial/BR/HSR-BR312-1100.png',
        },
        {
          title: 'SR Serisi',
          titleEn: 'SR Series',
          href: '/products/sr-serisi',
          image: '/img/industrial/SR/HSR-SR10-600.png',
        },
        {
          title: 'MD Serisi',
          titleEn: 'MD Series',
          href: '/products/md-serisi',
          image: '/img/industrial/MD/HSR-MD410-1500.png',
        },
        {
          title: 'HC Serisi',
          titleEn: 'HC Series',
          href: '/products/hc-serisi',
          image: '/img/industrial/HC/HSR-HC403-590.png',
        },
      ],
    },
    {
      id: 'isbirlikci-robotlar',
      title: 'İşbirlikçi Robotlar',
      titleEn: 'Collaborative Robots',
      subItems: [
        {
          title: 'CR Serisi',
          titleEn: 'CR Series',
          href: '/products/cr-serisi',
          image: '/img/Collaborative/CR/HSR-CR605-790.png',
        },
        {
          title: 'CO Serisi',
          titleEn: 'CO Series',
          href: '/products/co-serisi',
          image: '/img/Collaborative/CO/HSR-CO605-1000.png',
        },
      ],
    },
    {
      id: 'kompozit-robotlar',
      title: 'Kompozit Robotlar',
      titleEn: 'Composite Robots',
      subItems: [
        {
          title: 'Kompozit Robotlar',
          titleEn: 'Composite Robots',
          href: '/products/kompozit-robot',
          image: '/img/industrial/MD/HSR-MD4110-2500.png',
        },
      ],
    },
    {
      id: 'cekirdek-bilesenler',
      title: 'Çekirdek Bileşenler',
      titleEn: 'Core Components',
      subItems: [
        {
          title: 'Hareket Denetleyicisi',
          titleEn: 'Motion Controller',
          href: '/products/hareket-denetleyicisi',
          image: '/img/MotionController/hrc-i.png',
        },
        {
          title: 'Servo Sürücü',
          titleEn: 'Servo Drive',
          href: '/products/servo-surucu',
          image: '/img/ServoDrives/HSS-LDE.png',
        },
        {
          title: 'Servo Motor',
          titleEn: 'Servo Motor',
          href: '/products/servo-motor',
          image: '/img/servomotors/HDD Series 110ST Motor.png',
        },
        {
          title: 'Öğretme Cihazı',
          titleEn: 'Teaching Device',
          href: '/products/ogretme-cihazi',
          image: '/img/teaching/HsPad-03.png',
        },
      ],
    },
    {
      id: 'standart-cevresel-urunler',
      title: 'Standart Çevresel Ürünler',
      titleEn: 'Standard Peripheral Products',
      subItems: [
        {
          title: 'Hızlı Değiştirilen Disk',
          titleEn: 'Quick Change Disk',
          href: '/products/hizli-degistirilen-disk',
          image: '/img/industrial/JR/HSR-JR603-570.png',
        },
        {
          title: 'Yüzer Flanş',
          titleEn: 'Floating Flange',
          href: '/products/yuzer-flanj',
          image: '/img/industrial/JR/HSR-JR607-730.png',
        },
        {
          title: 'Kuvvet Kontrol Ürünleri',
          titleEn: 'Force Control Products',
          href: '/products/kuvvet-kontrol-urunleri',
          image: '/img/industrial/JR/HSR-JR607-910.png',
        },
        {
          title: 'Taşlama Araçları',
          titleEn: 'Grinding Tools',
          href: '/products/taslama-araclari',
          image: '/img/industrial/JR/HSR-JR612-1600.png',
        },
      ],
    },
  ],
  solutions: [
    {
      id: 'endustri-programi',
      title: 'Endüstri Programı',
      titleEn: 'Industry Program',
      subItems: [
        {
          title: '3C Endüstrisi',
          titleEn: '3C Industry',
          href: '/endustriler/3c',
        },
        {
          title: 'Ayakkabı ve Giyim Endüstrisi',
          titleEn: 'Footwear and Apparel Industry',
          href: '/endustriler/ayakkabi-giyim',
        },
        {
          title: 'Otomobil Endüstrisi',
          titleEn: 'Automotive Industry',
          href: '/endustriler/otomobil',
        },
        {
          title: 'Ev Aletleri Endüstrisi',
          titleEn: 'Home Appliances Industry',
          href: '/endustriler/ev-aletleri',
        },
        {
          title: 'Metal İşleme Endüstrisi',
          titleEn: 'Metal Processing Industry',
          href: '/endustriler/metal-isleme',
        },
        {
          title: 'Diğer Endüstriler',
          titleEn: 'Other Industries',
          href: '/endustriler/diger',
        },
      ],
    },
    {
      id: 'surec-semasi',
      title: 'Süreç Şeması',
      titleEn: 'Process Schema',
      subItems: [
        {
          title: 'Kaynak Uygulaması',
          titleEn: 'Welding Application',
          href: '/solutions/kaynak-uygulamasi',
        },
        {
          title: 'Uygulamayı Ele Alma',
          titleEn: 'Handling Application',
          href: '/solutions/uygulama-ele-alma',
        },
        {
          title: 'Montaj Uygulaması',
          titleEn: 'Assembly Application',
          href: '/solutions/montaj-uygulamasi',
        },
        {
          title: 'Makine Artı Uygulama',
          titleEn: 'Machine Plus Application',
          href: '/solutions/makine-arti-uygulama',
        },
        {
          title: 'Parlatma Uygulaması',
          titleEn: 'Polishing Application',
          href: '/solutions/parlatma-uygulamasi',
        },
        {
          title: 'Tutkal Kaplama Uygulaması',
          titleEn: 'Glue Coating Application',
          href: '/solutions/tutkal-kaplama-uygulamasi',
        },
        {
          title: 'Püskürtme Uygulaması',
          titleEn: 'Spraying Application',
          href: '/solutions/puskurtme-uygulamasi',
        },
        {
          title: 'Diğer Uygulamalar',
          titleEn: 'Other Applications',
          href: '/solutions/diger-uygulamalar',
        },
      ],
    },
    {
      id: 'dijital-cozumler',
      title: 'Dijital Çözümler',
      titleEn: 'Digital Solutions',
      subItems: [
        {
          title: 'Genel Çözüm',
          titleEn: 'General Solution',
          href: '/solutions/genel-cozum',
        },
        {
          title: 'Dijital İkizler',
          titleEn: 'Digital Twins',
          href: '/solutions/dijital-ikizler',
        },
        {
          title: 'Çevrimdışı Programlama Yazılımı',
          titleEn: 'Offline Programming Software',
          href: '/solutions/cevrimdisi-programlama-yazilimi',
        },
      ],
    },
  ],
};

export function useHeader() {
  const { currentLang, setCurrentLang } = useLanguage();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [selectedMegaMenuItem, setSelectedMegaMenuItem] = useState<
    string | null
  >(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  const t = translations[currentLang];
  const languages = [
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
  ];

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dropdown handlers
  const handleDropdownEnter = useCallback(
    (menu: string) => {
      setActiveDropdown(menu);
      // Auto-hover for the first category when menu opens
      if (menu === 'products' && megaMenuData.products.length > 0) {
        setSelectedMegaMenuItem(megaMenuData.products[0]?.id || null);
      } else if (menu === 'solutions' && megaMenuData.solutions.length > 0) {
        setSelectedMegaMenuItem(megaMenuData.solutions[0]?.id || null);
      } else {
        setSelectedMegaMenuItem(null);
      }
    },
    [] // Dependencies are intentionally empty as megaMenuData is a constant
  );

  const handleDropdownLeave = useCallback(() => {
    setActiveDropdown(null);
    setSelectedMegaMenuItem(null);
  }, []);

  const handleMegaMenuItemHover = useCallback((itemId: string) => {
    setSelectedMegaMenuItem(itemId);
  }, []);

  const handleMegaMenuItemTouch = useCallback(
    (itemId: string) => {
      setSelectedMegaMenuItem(selectedMegaMenuItem === itemId ? null : itemId);
    },
    [selectedMegaMenuItem]
  );

  const closeMegaMenu = useCallback(() => {
    setActiveDropdown(null);
    setSelectedMegaMenuItem(null);
  }, []);

  // Keyboard handlers
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, menu: string) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null);
        setSelectedMegaMenuItem(null);
        setIsSearchOpen(false);
        setIsLanguageOpen(false);
      } else if (
        (e.key === 'Enter' || e.key === ' ') &&
        activeDropdown !== menu
      ) {
        e.preventDefault();
        setActiveDropdown(menu);
        // Auto-hover for the first category when menu opens via keyboard
        if (menu === 'products' && megaMenuData.products.length > 0) {
          setSelectedMegaMenuItem(megaMenuData.products[0]?.id || null);
        } else if (menu === 'solutions' && megaMenuData.solutions.length > 0) {
          setSelectedMegaMenuItem(megaMenuData.solutions[0]?.id || null);
        } else {
          setSelectedMegaMenuItem(null);
        }
      }
    },
    [activeDropdown]
  );

  const handleMenuItemKeyDown = useCallback(
    (e: React.KeyboardEvent, itemId: string) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setSelectedMegaMenuItem(itemId);
      }
    },
    []
  );

  return {
    // States
    currentLang,
    isSearchOpen,
    isLanguageOpen,
    activeDropdown,
    selectedMegaMenuItem,
    searchQuery,
    isScrolled,
    t,
    languages,

    // Setters
    setCurrentLang,
    setIsSearchOpen,
    setIsLanguageOpen,
    setSearchQuery,

    // Handlers
    handleDropdownEnter,
    handleDropdownLeave,
    handleMegaMenuItemHover,
    handleMegaMenuItemTouch,
    closeMegaMenu,
    handleKeyDown,
    handleMenuItemKeyDown,
  };
}
