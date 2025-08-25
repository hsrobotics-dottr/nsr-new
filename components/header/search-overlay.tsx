'use client';

import { Search, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

interface SearchOverlayProps {
  isSearchOpen: boolean;
  searchQuery: string;
  t: {
    search: {
      placeholder: string;
      close: string;
    };
  };
  setIsSearchOpen: (open: boolean) => void;
  setSearchQuery: (query: string) => void;
}

// Ürün verileri - Sitedeki tüm ürünler
const productData = [
  // JR Serisi - Endüstriyel Robotlar
  {
    id: 1,
    model: 'HSR-JR603-570',
    payload: '3kg',
    reach: '570mm',
    image: '/img/industrial/JR/HSR-JR603-570.png',
    category: 'Endüstriyel Robot',
    series: 'JR Serisi',
    href: '/products/jr-series/hsr-jr603-570',
  },
  {
    id: 2,
    model: 'HSR-JR607-730',
    payload: '7kg',
    reach: '730mm',
    image: '/img/industrial/JR/HSR-JR607-730.png',
    category: 'Endüstriyel Robot',
    series: 'JR Serisi',
    href: '/products/jr-series/hsr-jr607-730',
  },
  {
    id: 3,
    model: 'HSR-JR607-910',
    payload: '7kg',
    reach: '910mm',
    image: '/img/industrial/JR/HSR-JR607-910.png',
    category: 'Endüstriyel Robot',
    series: 'JR Serisi',
    href: '/products/jr-series/hsr-jr607-910',
  },
  {
    id: 4,
    model: 'HSR-JR612-1600',
    payload: '12kg',
    reach: '1600mm',
    image: '/img/industrial/JR/HSR-JR612-1600.png',
    category: 'Endüstriyel Robot',
    series: 'JR Serisi',
    href: '/products/jr-series/hsr-jr612-1600',
  },
  {
    id: 5,
    model: 'HSR-JR615-2000',
    payload: '15kg',
    reach: '2000mm',
    image: '/img/industrial/JR/HSR-JR615-2000.png',
    category: 'Endüstriyel Robot',
    series: 'JR Serisi',
    href: '/products/jr-series/hsr-jr615-2000',
  },
  {
    id: 6,
    model: 'HSR-JR620-1800',
    payload: '20kg',
    reach: '1800mm',
    image: '/img/industrial/JR/HSR-JR620-1800.png',
    category: 'Endüstriyel Robot',
    series: 'JR Serisi',
    href: '/products/jr-series/hsr-jr620-1800',
  },
  {
    id: 7,
    model: 'HSR-JR630-1800',
    payload: '30kg',
    reach: '1800mm',
    image: '/img/industrial/JR/HSR-JR630-1800.png',
    category: 'Endüstriyel Robot',
    series: 'JR Serisi',
    href: '/products/jr-series/hsr-jr630-1800',
  },
  {
    id: 8,
    model: 'HSR-JR650-2400',
    payload: '50kg',
    reach: '2400mm',
    image: '/img/industrial/JR/HSR-JR650-2400.png',
    category: 'Endüstriyel Robot',
    series: 'JR Serisi',
    href: '/products/jr-series/hsr-jr650-2400',
  },
  {
    id: 9,
    model: 'HSR-JR670-2100',
    payload: '70kg',
    reach: '2100mm',
    image: '/img/industrial/JR/HSR-JR670-2100.png',
    category: 'Endüstriyel Robot',
    series: 'JR Serisi',
    href: '/products/jr-series/hsr-jr670-2100',
  },
  {
    id: 10,
    model: 'HSR-JR618-2000',
    payload: '18kg',
    reach: '2000mm',
    image: '/img/industrial/JR/HSR-JR618-2000.png',
    category: 'Endüstriyel Robot',
    series: 'JR Serisi',
    href: '/products/jr-series/hsr-jr618-2000',
  },
  {
    id: 11,
    model: 'HSR-JR6210-2700',
    payload: '210kg',
    reach: '2700mm',
    image: '/img/industrial/JR/HSR-JR6210-2700.png',
    category: 'Endüstriyel Robot',
    series: 'JR Serisi',
    href: '/products/jr-series/hsr-jr6210-2700',
  },
  {
    id: 12,
    model: 'HSR-JR6210-3100',
    payload: '210kg',
    reach: '3100mm',
    image: '/img/industrial/JR/HSR-JR6210-3100.png',
    category: 'Endüstriyel Robot',
    series: 'JR Serisi',
    href: '/products/jr-series/hsr-jr6210-3100',
  },
  {
    id: 13,
    model: 'HSR-JR6360-2700',
    payload: '360kg',
    reach: '2700mm',
    image: '/img/industrial/JR/HSR-JR6360-2700.png',
    category: 'Endüstriyel Robot',
    series: 'JR Serisi',
    href: '/products/jr-series/hsr-jr6360-2700',
  },
  {
    id: 14,
    model: 'HSR-JR6300-3000',
    payload: '300kg',
    reach: '3000mm',
    image: '/img/industrial/JR/HSR-JR6300-3000.png',
    category: 'Endüstriyel Robot',
    series: 'JR Serisi',
    href: '/products/jr-series/hsr-jr6300-3000',
  },

  // JH Serisi - Yatay Eksenli Robotlar
  {
    id: 15,
    model: 'HSR-JH605-1500',
    payload: '5kg',
    reach: '1500mm',
    image: '/img/industrial/JH/HSR-JH605-1500.png',
    category: 'Yatay Eksenli Robot',
    series: 'JH Serisi',
    href: '/products/jh-serisi/hsr-jh605-1500',
  },
  {
    id: 16,
    model: 'HSR-JH615-2000',
    payload: '15kg',
    reach: '2000mm',
    image: '/img/industrial/JH/HSR-JH615-2000.png',
    category: 'Yatay Eksenli Robot',
    series: 'JH Serisi',
    href: '/products/jh-serisi/hsr-jh615-2000',
  },
  {
    id: 17,
    model: 'HSR-JH620-1800',
    payload: '20kg',
    reach: '1800mm',
    image: '/img/industrial/JH/HSR-JH620-1800.png',
    category: 'Yatay Eksenli Robot',
    series: 'JH Serisi',
    href: '/products/jh-serisi/hsr-jh620-1800',
  },
  {
    id: 18,
    model: 'HSR-JH630-1800',
    payload: '30kg',
    reach: '1800mm',
    image: '/img/industrial/JH/HSR-JH630-1800.png',
    category: 'Yatay Eksenli Robot',
    series: 'JH Serisi',
    href: '/products/jh-serisi/hsr-jh630-1800',
  },

  // BR Serisi - Çift Döndü Teknolojisi
  {
    id: 19,
    model: 'HSR-BR312-1100',
    payload: '12kg',
    reach: '1100mm',
    image: '/img/industrial/BR/HSR-BR312-1100.png',
    category: 'Çift Döndü Robot',
    series: 'BR Serisi',
    href: '/products/br-serisi/hsr-br312-1100',
  },
  {
    id: 20,
    model: 'HSR-BR316-980',
    payload: '16kg',
    reach: '980mm',
    image: '/img/industrial/BR/HSR-BR316-980.png',
    category: 'Çift Döndü Robot',
    series: 'BR Serisi',
    href: '/products/br-serisi/hsr-br316-980',
  },
  {
    id: 21,
    model: 'HSR-BR610-1300',
    payload: '10kg',
    reach: '1300mm',
    image: '/img/industrial/BR/HSR-BR610-1300.png',
    category: 'Çift Döndü Robot',
    series: 'BR Serisi',
    href: '/products/br-serisi/hsr-br610-1300',
  },
  {
    id: 22,
    model: 'HSR-BR612-1100',
    payload: '12kg',
    reach: '1100mm',
    image: '/img/industrial/BR/HSR-BR612-1100.png',
    category: 'Çift Döndü Robot',
    series: 'BR Serisi',
    href: '/products/br-serisi/hsr-br612-1100',
  },
  {
    id: 23,
    model: 'HSR-BR616-1600',
    payload: '16kg',
    reach: '1600mm',
    image: '/img/industrial/BR/HSR-BR616-1600.png',
    category: 'Çift Döndü Robot',
    series: 'BR Serisi',
    href: '/products/br-serisi/hsr-br616-1600',
  },
  {
    id: 24,
    model: 'HSR-BR625-1900',
    payload: '25kg',
    reach: '1900mm',
    image: '/img/industrial/BR/HSR-BR625-1900.png',
    category: 'Çift Döndü Robot',
    series: 'BR Serisi',
    href: '/products/br-serisi/hsr-br625-1900',
  },

  // SR Serisi - Dört Eksenli Planar Robot
  {
    id: 25,
    model: 'HSR-SR3-400',
    payload: '3kg',
    reach: '400mm',
    image: '/img/industrial/SR/HSR-SR3-400.png',
    category: 'Planar Robot',
    series: 'SR Serisi',
    href: '/products/sr-serisi/hsr-sr3-400',
  },
  {
    id: 26,
    model: 'HSR-SR5-700',
    payload: '5kg',
    reach: '700mm',
    image: '/img/industrial/SR/HSR-SR5-700.png',
    category: 'Planar Robot',
    series: 'SR Serisi',
    href: '/products/sr-serisi/hsr-sr5-700',
  },
  {
    id: 27,
    model: 'HSR-SR6-500',
    payload: '6kg',
    reach: '500mm',
    image: '/img/industrial/SR/HSR-SR6-500.png',
    category: 'Planar Robot',
    series: 'SR Serisi',
    href: '/products/sr-serisi/hsr-sr6-500',
  },
  {
    id: 28,
    model: 'HSR-SR6-600',
    payload: '6kg',
    reach: '600mm',
    image: '/img/industrial/SR/HSR-SR6-600.png',
    category: 'Planar Robot',
    series: 'SR Serisi',
    href: '/products/sr-serisi/hsr-sr6-600',
  },
  {
    id: 29,
    model: 'HSR-SR10-600',
    payload: '10kg',
    reach: '600mm',
    image: '/img/industrial/SR/HSR-SR10-600.png',
    category: 'Planar Robot',
    series: 'SR Serisi',
    href: '/products/sr-serisi/hsr-sr10-600',
  },
  {
    id: 30,
    model: 'HSR-SR10-800',
    payload: '10kg',
    reach: '800mm',
    image: '/img/industrial/SR/HSR-SR10-800.png',
    category: 'Planar Robot',
    series: 'SR Serisi',
    href: '/products/sr-serisi/hsr-sr10-800',
  },
  {
    id: 31,
    model: 'HSR-SR20-800',
    payload: '20kg',
    reach: '800mm',
    image: '/img/industrial/SR/HSR-SR20-800.png',
    category: 'Planar Robot',
    series: 'SR Serisi',
    href: '/products/sr-serisi/hsr-sr20-800',
  },
  {
    id: 32,
    model: 'HSR-SR20-1000',
    payload: '20kg',
    reach: '1000mm',
    image: '/img/industrial/SR/HSR-SR20-1000.png',
    category: 'Planar Robot',
    series: 'SR Serisi',
    href: '/products/sr-serisi/hsr-sr20-1000',
  },

  // MD Serisi - Paketleme ve Paletleme
  {
    id: 33,
    model: 'HSR-MD410-1500',
    payload: '10kg',
    reach: '1500mm',
    image: '/img/industrial/MD/HSR-MD410-1500.png',
    category: 'Paketleme Robot',
    series: 'MD Serisi',
    href: '/products/md-serisi/hsr-md410-1500',
  },
  {
    id: 34,
    model: 'HSR-MD4110-2500',
    payload: '110kg',
    reach: '2500mm',
    image: '/img/industrial/MD/HSR-MD4110-2500.png',
    category: 'Paketleme Robot',
    series: 'MD Serisi',
    href: '/products/md-serisi/hsr-md4110-2500',
  },

  // HC Serisi - Üç Eksenli Düzlemli Robot
  {
    id: 35,
    model: 'HSR-HC403-590',
    payload: '3kg',
    reach: '590mm',
    image: '/img/industrial/HC/HSR-HC403-590.png',
    category: 'Düzlemli Robot',
    series: 'HC Serisi',
    href: '/products/hc-serisi/hsr-hc403-590',
  },

  // CR Serisi - İşbirlikçi Robotlar
  {
    id: 36,
    model: 'HSR-CR605-790',
    payload: '5kg',
    reach: '790mm',
    image: '/img/Collaborative/CR/HSR-CR605-790.png',
    category: 'İşbirlikçi Robot',
    series: 'CR Serisi',
    href: '/products/cr-serisi/hsr-cr605-790',
  },
  {
    id: 37,
    model: 'HSR-CR607-890',
    payload: '7kg',
    reach: '890mm',
    image: '/img/Collaborative/CR/HSR-CR607-890.png',
    category: 'İşbirlikçi Robot',
    series: 'CR Serisi',
    href: '/products/cr-serisi/hsr-cr607-890',
  },
  {
    id: 38,
    model: 'HSR-CR612-1500',
    payload: '12kg',
    reach: '1500mm',
    image: '/img/Collaborative/CR/HSR-CR612-1500.png',
    category: 'İşbirlikçi Robot',
    series: 'CR Serisi',
    href: '/products/cr-serisi/hsr-cr612-1500',
  },
  {
    id: 39,
    model: 'HSR-CR616-1200',
    payload: '16kg',
    reach: '1200mm',
    image: '/img/Collaborative/CR/HSR-CR616-1200.png',
    category: 'İşbirlikçi Robot',
    series: 'CR Serisi',
    href: '/products/cr-serisi/hsr-cr616-1200',
  },
  {
    id: 40,
    model: 'HSR-CR625-200',
    payload: '25kg',
    reach: '200mm',
    image: '/img/Collaborative/CR/HSR-CR625-200.png',
    category: 'İşbirlikçi Robot',
    series: 'CR Serisi',
    href: '/products/cr-serisi/hsr-cr625-200',
  },
  {
    id: 41,
    model: 'HSR-CR630-1750',
    payload: '30kg',
    reach: '1750mm',
    image: '/img/Collaborative/CR/HSR-CR630-1750.png',
    category: 'İşbirlikçi Robot',
    series: 'CR Serisi',
    href: '/products/cr-serisi/hsr-cr630-1750',
  },

  // CO Serisi - İnsan-Robot İşbirliği
  {
    id: 42,
    model: 'HSR-CO605-1000',
    payload: '5kg',
    reach: '1000mm',
    image: '/img/Collaborative/CO/HSR-CO605-1000.png',
    category: 'İnsan-Robot İşbirliği',
    series: 'CO Serisi',
    href: '/products/co-serisi/hsr-co605-1000',
  },
  {
    id: 43,
    model: 'HSR-CO610-1400',
    payload: '10kg',
    reach: '1400mm',
    image: '/img/Collaborative/CO/HSR-CO610-1400.png',
    category: 'İnsan-Robot İşbirliği',
    series: 'CO Serisi',
    href: '/products/co-serisi/hsr-co610-1400',
  },
  {
    id: 44,
    model: 'HSR-CO616-1100',
    payload: '16kg',
    reach: '1100mm',
    image: '/img/Collaborative/CO/HSR-CO616-1100.png',
    category: 'İnsan-Robot İşbirliği',
    series: 'CO Serisi',
    href: '/products/co-serisi/hsr-co616-1100',
  },

  // AMR Serisi - Mobil Robotlar
  {
    id: 45,
    model: 'HSR-AMR605-400',
    payload: '5kg',
    reach: '400mm',
    image: '/img/AMR/HSR-AMR605-400.png',
    category: 'Mobil Robot',
    series: 'AMR Serisi',
    href: '/products/amr-series/hsr-amr605-400',
  },

  // Çekirdek Bileşenler
  {
    id: 46,
    model: 'HRC-I',
    payload: 'Hareket Denetleyici',
    reach: 'Kontrol Sistemi',
    image: '/img/MotionController/hrc-i.png',
    category: 'Çekirdek Bileşen',
    series: 'Hareket Denetleyici',
    href: '/products/hareket-denetleyicisi',
  },
  {
    id: 47,
    model: 'HSS-LDE',
    payload: 'Servo Sürücü',
    reach: 'Güç Sistemi',
    image: '/img/ServoDrives/HSS-LDE.png',
    category: 'Çekirdek Bileşen',
    series: 'Servo Sürücü',
    href: '/products/servo-surucu',
  },
  {
    id: 48,
    model: 'LDD Series 130ST',
    payload: 'Servo Motor',
    reach: 'Hareket Sistemi',
    image: '/img/servomotors/LDD Series 130ST Motor.png',
    category: 'Çekirdek Bileşen',
    series: 'Servo Motor',
    href: '/products/servo-motor',
  },
  {
    id: 49,
    model: 'HsPad-03',
    payload: 'Öğretme Cihazı',
    reach: 'Kontrol Arayüzü',
    image: '/img/teaching/HsPad-03.png',
    category: 'Çekirdek Bileşen',
    series: 'Öğretme Cihazı',
    href: '/products/teaching-pendant',
  },

  // Standart Çevresel Ürünler
  {
    id: 50,
    model: 'HST-C06',
    payload: 'Hızlı Değiştirilen Disk',
    reach: 'Takım Sistemi',
    image: '/img/quick/HST-C06.png',
    category: 'Çevresel Ürün',
    series: 'Quick Change',
    href: '/products/hizli-degistirilen-disk',
  },
  {
    id: 51,
    model: 'HST-C20',
    payload: 'Yüzer Flanş',
    reach: 'Bağlantı Sistemi',
    image: '/img/quick/HST-C20.png',
    category: 'Çevresel Ürün',
    series: 'Quick Change',
    href: '/products/yuzer-flanj',
  },
  {
    id: 52,
    model: 'HST-C70',
    payload: 'Kuvvet Kontrol',
    reach: 'Sensör Sistemi',
    image: '/img/quick/HST-C70.png',
    category: 'Çevresel Ürün',
    series: 'Quick Change',
    href: '/products/kuvvet-kontrol',
  },
  {
    id: 53,
    model: 'HST-C200',
    payload: 'Taşlama Araçları',
    reach: 'İşleme Sistemi',
    image: '/img/quick/HST-C200.png',
    category: 'Çevresel Ürün',
    series: 'Quick Change',
    href: '/products/taslama-araclari',
  },
];

export default function SearchOverlay({
  isSearchOpen,
  searchQuery,
  t,
  setIsSearchOpen,
  setSearchQuery,
}: SearchOverlayProps) {
  const [debouncedQuery, setDebouncedQuery] = useState('');

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Filter products based on search query
  const filteredProducts = useMemo(() => {
    if (!debouncedQuery.trim()) return [];

    const query = debouncedQuery.toLowerCase();
    return productData
      .filter(
        product =>
          product.model.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query) ||
          product.series.toLowerCase().includes(query) ||
          product.payload.toLowerCase().includes(query) ||
          product.reach.toLowerCase().includes(query)
      )
      .slice(0, 12); // Maksimum 12 sonuç göster
  }, [debouncedQuery]);

  const handleProductClick = () => {
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  return (
    <div
      className={`fixed inset-0 z-[150] bg-black/50 backdrop-blur-sm transition-all duration-300 ${
        isSearchOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      <div
        className={`absolute inset-x-0 top-0 bg-white shadow-2xl transition-all duration-500 ${
          isSearchOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className='container mx-auto px-4 py-8 max-w-4xl'>
          <div className='flex items-center justify-between mb-6'>
            <h2 className='text-2xl font-bold text-gray-800'>Ürün Arama</h2>
            <button
              onClick={() => setIsSearchOpen(false)}
              className='p-2 hover:bg-gray-100 rounded-lg transition-colors'
            >
              <X className='w-6 h-6 text-gray-600' />
            </button>
          </div>

          <div className='relative mb-6'>
            <Search className='absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400' />
            <input
              type='text'
              placeholder='Robot modeli, kategori veya özellik ara...'
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className='w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors'
              autoFocus
            />
          </div>

          {/* Arama Sonuçları */}
          {searchQuery.trim() && (
            <div className='bg-gray-50 rounded-xl p-4'>
              {filteredProducts.length > 0 ? (
                <>
                  <div className='flex items-center justify-between mb-4'>
                    <h3 className='text-lg font-semibold text-gray-800'>
                      Arama Sonuçları ({filteredProducts.length})
                    </h3>
                    {filteredProducts.length === 12 && (
                      <span className='text-sm text-gray-500'>
                        İlk 12 sonuç gösteriliyor
                      </span>
                    )}
                  </div>

                  {/* Responsive Grid Layout */}
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4 max-h-96 overflow-y-auto'>
                    {filteredProducts.map(product => (
                      <Link
                        key={product.id}
                        href={product.href}
                        onClick={handleProductClick}
                        className='group bg-white rounded-lg p-4 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200'
                      >
                        <div className='flex items-center space-x-4'>
                          {/* Ürün Thumbnail */}
                          <div className='flex-shrink-0 w-16 h-16 bg-gray-100 rounded-lg overflow-hidden'>
                            <Image
                              src={product.image || '/placeholder.svg'}
                              alt={product.model}
                              width={64}
                              height={64}
                              className='w-full h-full object-contain p-2'
                            />
                          </div>

                          {/* Ürün Bilgileri */}
                          <div className='flex-1 min-w-0'>
                            <h4 className='font-semibold text-gray-800 group-hover:text-blue-600 transition-colors truncate'>
                              {product.model}
                            </h4>
                            <p className='text-sm text-gray-500 mb-1'>
                              {product.series} • {product.category}
                            </p>
                            <div className='flex items-center space-x-3 text-xs text-gray-600'>
                              <span className='bg-blue-100 text-blue-700 px-2 py-1 rounded'>
                                {product.payload}
                              </span>
                              <span className='bg-gray-100 text-gray-700 px-2 py-1 rounded'>
                                {product.reach}
                              </span>
                            </div>
                          </div>

                          {/* İncele Butonu */}
                          <div className='flex-shrink-0'>
                            <span className='inline-flex items-center px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors'>
                              İncele
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <div className='text-center py-8'>
                  <div className='w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <Search className='w-8 h-8 text-gray-400' />
                  </div>
                  <h3 className='text-lg font-medium text-gray-800 mb-2'>
                    Sonuç Bulunamadı
                  </h3>
                  <p className='text-gray-600'>
                    "{searchQuery}" için herhangi bir ürün bulunamadı. Farklı
                    anahtar kelimeler deneyin.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Arama Önerileri */}
          {!searchQuery.trim() && (
            <div className='bg-gray-50 rounded-xl p-6'>
              <h3 className='text-lg font-semibold text-gray-800 mb-4'>
                Popüler Aramalar
              </h3>
              <div className='flex flex-wrap gap-2'>
                {[
                  'JR Serisi',
                  'BR Serisi',
                  'SR Serisi',
                  'İşbirlikçi',
                  'Endüstriyel',
                  'Mobil',
                  'Çekirdek Bileşen',
                  'Quick Change',
                ].map(suggestion => (
                  <button
                    key={suggestion}
                    onClick={() => setSearchQuery(suggestion)}
                    className='px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:border-blue-300 hover:text-blue-600 transition-colors'
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export { SearchOverlay };
