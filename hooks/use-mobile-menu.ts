'use client';

import { useEffect, useState } from 'react';

export function useMobileMenu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState<{
    [key: string]: boolean;
  }>({});
  const [activeMobileCategory, setActiveMobileCategory] = useState<
    string | null
  >(null);
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      // Menü açılırken diğer state'leri sıfırla
      setMobileDropdowns({});
      setActiveMobileCategory(null);
      setMobileSubMenuOpen(false);
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileDropdowns({});
    setActiveMobileCategory(null);
    setMobileSubMenuOpen(false);
  };

  const toggleMobileDropdown = (menu: string) => {
    setMobileDropdowns(prev => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const closeMobileDropdowns = () => {
    setMobileDropdowns({});
  };

  const handleMobileMenuItemClick = () => {
    setIsMobileMenuOpen(false);
    setMobileDropdowns({});
    setActiveMobileCategory(null);
    setMobileSubMenuOpen(false);
  };

  const openMobileSubMenu = (categoryId: string) => {
    setActiveMobileCategory(categoryId);
    setMobileSubMenuOpen(true);
  };

  const closeMobileSubMenu = () => {
    setActiveMobileCategory(null);
    setMobileSubMenuOpen(false);
  };

  // Body scroll kilidi - Geliştirilmiş versiyon
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Mevcut scroll pozisyonunu kaydet
      const scrollY = window.scrollY;

      // Body'yi sabitle
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.overflow = 'hidden';
      document.body.style.width = '100%';

      // HTML elementini de sabitle
      document.documentElement.style.overflow = 'hidden';

      return () => {
        // Cleanup fonksiyonu - menü kapandığında çalışacak
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        document.body.style.overflow = '';
        document.body.style.width = '';
        document.documentElement.style.overflow = '';

        // Scroll pozisyonunu geri yükle
        if (scrollY) {
          window.scrollTo(0, Number.parseInt(scrollY || '0') * -1);
        }
      };
    }

    // Menü kapalıysa cleanup fonksiyonu döndür
    return undefined;
  }, [isMobileMenuOpen]);

  return {
    isMobileMenuOpen,
    mobileDropdowns,
    activeMobileCategory,
    mobileSubMenuOpen,
    setIsMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
    toggleMobileDropdown,
    closeMobileDropdowns,
    handleMobileMenuItemClick,
    openMobileSubMenu,
    closeMobileSubMenu,
  };
}
