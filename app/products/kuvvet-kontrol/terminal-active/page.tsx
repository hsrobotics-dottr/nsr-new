'use client';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Terminal Active Force Control ürün modelleri;
const terminalActiveProducts = [
  {
    model: 'HST-AFC-E100',
    title: 'Terminal Active Force Control',
    forceControlRange: '3-100N',
    floatingStroke: '20mm',
    forceControlAccuracy: '±1N',
    positionAccuracy: '0.1mm',
    toolLoad: '10kg',
    bodyWeight: '3.5kg',
    overallDimension: '200*150*80mm',
    image: '/img/forcecontrol/HST-AFC-P100.png', // Geçici görsel;
    specs: {
      material: 'Yüksek Dayanımlı Çelik',
      weight: '3.5 kg',
      dimensions: '200 x 150 x 80 mm',
      temperature: '-20°C to +80°C',
    },
    features: [
      'Yüksek Hassasiyetli Kuvvet Kontrolü',
      'Yerçekimi Kompansatörü',
      'Hızlı Yanıt',
    ],
    applications: ['İnce Taşlama', 'Yüzey İşleme', 'Hassas İşlemler'],
  },
  {
    model: 'HST-AFC-E300',
    title: 'Terminal Active Force Control',
    forceControlRange: '5-300N',
    floatingStroke: '20mm',
    forceControlAccuracy: '±3N',
    positionAccuracy: '0.1mm',
    toolLoad: '20kg',
    bodyWeight: '8kg',
    overallDimension: '250*190*130mm',
    image: '/img/forcecontrol/HST-AFC-P100.png', // Geçici görsel;
    specs: {
      material: 'Yüksek Dayanımlı Çelik',
      weight: '8 kg',
      dimensions: '250 x 190 x 130 mm',
      temperature: '-20°C to +80°C',
    },
    features: [
      'Orta Hassasiyetli Kuvvet Kontrolü',
      'Yerçekimi Kompansatörü',
      'Hızlı Yanıt',
    ],
    applications: ['Orta Taşlama', 'Yüzey İşleme', 'Montaj'],
  },
  {
    model: 'HST-AFC-E500',
    title: 'Terminal Active Force Control',
    forceControlRange: '10-500N',
    floatingStroke: '20mm',
    forceControlAccuracy: '±5N',
    positionAccuracy: '0.1mm',
    toolLoad: '30kg',
    bodyWeight: '10kg',
    overallDimension: '290*220*190mm',
    image: '/img/forcecontrol/HST-AFC-P100.png', // Geçici görsel;
    specs: {
      material: 'Yüksek Dayanımlı Çelik',
      weight: '10 kg',
      dimensions: '290 x 220 x 190 mm',
      temperature: '-20°C to +80°C',
    },
    features: [
      'Yüksek Yük Kapasitesi',
      'Yerçekimi Kompansatörü',
      'Hızlı Yanıt',
    ],
    applications: ['Ağır Taşlama', 'Yüzey İşleme', 'Endüstriyel Montaj'],
  },
];

export default function TerminalActivePage() {
  return (
    <div className='min-h-screen bg-white'>
      <Header />

      {/* Hero Section */}
      <section className='relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white pt-20 pb-16'>
        <div className='absolute inset-0 bg-black/20'></div>
        <div className='container mx-auto max-w-8xl relative z-10'>
          <div className='max-w-4xl mx-auto text-center'>
            <div className='flex items-center justify-center mb-6'>
              <Link
                href='/products/kuvvet-kontrol'
                className='flex items-center text-blue-200 hover:text-white transition-colors duration-300'
              >
                <ArrowLeft className='w-5 h-5 mr-2' />
                Kuvvet Kontrol Ürünleri
              </Link>
            </div>
            <h1 className='text-4xl md:text-6xl font-bold mb-6'>
              Terminal Active Force Control
            </h1>
            <p className='text-xl md:text-2xl text-blue-100 mb-8'>
              Yüksek Hassasiyetli Aktif Kuvvet Kontrolü ve Kompansasyon
              Çözümleri
            </p>
            <p className='text-lg text-blue-200 max-w-3xl mx-auto leading-relaxed'>
              Terminal active force control/compensator sistemleri, yerçekimi
              kompansatörü algoritması ile tam pozisyon aktif kuvvet kontrolü
              sağlar. Herhangi bir şekildeki iş parçasının yüzey işlemesi için
              optimize edilmiş, hassas ve kararlı temas kuvveti garantisi sunar.
            </p>
          </div>
        </div>
      </section>

      {/* Ürün Modelleri */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto max-w-8xl'>
          <div className='max-w-7xl mx-auto'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-6'>
                Terminal Active Force Control Modelleri
              </h2>
              <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
                Farklı kuvvet kontrol aralıkları ve hassasiyet seviyeleri ile
                ihtiyaçlarınıza uygun sistem seçimi yapın.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {terminalActiveProducts.map((product, index) => (
                <Card
                  key={index}
                  className='group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-gray-200'
                >
                  <CardHeader className='pb-4'>
                    <div className='relative h-48 bg-gray-50 rounded-lg overflow-hidden mb-4'>
                      <Image
                        src={product.image}
                        alt={product.model}
                        fill
                        className='object-contain p-4 group-hover:scale-105 transition-transform duration-300'
                      />
                    </div>
                    <CardTitle className='text-xl font-bold text-gray-800 mb-2'>
                      {product.model}
                    </CardTitle>
                    <p className='text-sm text-gray-600'>{product.title}</p>
                  </CardHeader>

                  <CardContent className='space-y-4'>
                    {/* Temel Özellikler */}
                    <div className='grid grid-cols-2 gap-3'>
                      <div className='bg-blue-50 p-3 rounded-lg text-center'>
                        <div className='text-xs text-gray-600 mb-1'>
                          Kuvvet Aralığı
                        </div>
                        <div className='text-sm font-bold text-blue-600'>
                          {product.forceControlRange}
                        </div>
                      </div>
                      <div className='bg-green-50 p-3 rounded-lg text-center'>
                        <div className='text-xs text-gray-600 mb-1'>
                          Hassasiyet
                        </div>
                        <div className='text-sm font-bold text-green-600'>
                          {product.forceControlAccuracy}
                        </div>
                      </div>
                      <div className='bg-purple-50 p-3 rounded-lg text-center'>
                        <div className='text-xs text-gray-600 mb-1'>
                          Pozisyon
                        </div>
                        <div className='text-sm font-bold text-purple-600'>
                          {product.positionAccuracy}
                        </div>
                      </div>
                      <div className='bg-orange-50 p-3 rounded-lg text-center'>
                        <div className='text-xs text-gray-600 mb-1'>Yük</div>
                        <div className='text-sm font-bold text-orange-600'>
                          {product.toolLoad}
                        </div>
                      </div>
                    </div>

                    {/* Detay Özellikler */}
                    <div className='space-y-2 text-sm'>
                      <div className='flex justify-between'>
                        <span className='text-gray-600'>Yüzer Vuruş:</span>
                        <span className='font-medium'>
                          {product.floatingStroke}
                        </span>
                      </div>
                      <div className='flex justify-between'>
                        <span className='text-gray-600'>Ağırlık:</span>
                        <span className='font-medium'>
                          {product.bodyWeight}
                        </span>
                      </div>
                      <div className='flex justify-between'>
                        <span className='text-gray-600'>Boyutlar:</span>
                        <span className='font-medium'>
                          {product.overallDimension}
                        </span>
                      </div>
                    </div>

                    <div className='pt-4'>
                      <Link
                        href={`/products/kuvvet-kontrol/terminal-active/${product.model.toLowerCase().replace(/\//g, '-').replace(/-/g, '-')}`}
                        className='w-full bg-blue-600 hover:bg-blue-700 text-white inline-flex items-center justify-center px-4 py-2 rounded-lg transition-colors duration-200'
                      >
                        <MessageCircle className='w-4 h-4 mr-2' />
                        Detayları İncele
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Teknik Özellikler */}
      <section className='py-16 bg-gray-50'>
        <div className='container mx-auto max-w-8xl'>
          <div className='max-w-7xl mx-auto'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-6'>
                Teknik Özellikler
              </h2>
              <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
                Tüm modeller için ortak teknik özellikler ve ürün
                karakteristikleri
              </p>
            </div>

            <div className='grid lg:grid-cols-2 gap-8'>
              {/* Ortak Özellikler */}
              <Card className='p-6'>
                <h3 className='text-xl font-semibold text-gray-800 mb-4'>
                  Ortak Özellikler
                </h3>
                <div className='space-y-3'>
                  <div className='flex items-start space-x-3 py-2 border-b border-gray-100'>
                    <div className='w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0'></div>
                    <span className='text-gray-700 text-sm leading-relaxed'>
                      Yerçekimi kompansatörü algoritması ile tam pozisyon aktif
                      kuvvet kontrolü
                    </span>
                  </div>
                  <div className='flex items-start space-x-3 py-2 border-b border-gray-100'>
                    <div className='w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0'></div>
                    <span className='text-gray-700 text-sm leading-relaxed'>
                      Herhangi bir şekildeki iş parçasının yüzey işlemesi için
                      uygun
                    </span>
                  </div>
                  <div className='flex items-start space-x-3 py-2 border-b border-gray-100'>
                    <div className='w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0'></div>
                    <span className='text-gray-700 text-sm leading-relaxed'>
                      Hassas ve kararlı temas kuvveti garantisi
                    </span>
                  </div>
                  <div className='flex items-start space-x-3 py-2 border-b border-gray-100'>
                    <div className='w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0'></div>
                    <span className='text-gray-700 text-sm leading-relaxed'>
                      Kuvvet kapalı döngü kontrolünün yanıt süresi 20ms'den az
                    </span>
                  </div>
                  <div className='flex items-start space-x-3 py-2 border-b border-gray-100'>
                    <div className='w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0'></div>
                    <span className='text-gray-700 text-sm leading-relaxed'>
                      Robot yüksek hızlı taşlama operasyonu ihtiyaçlarını
                      karşılar
                    </span>
                  </div>
                </div>
              </Card>

              {/* Uygulama Alanları */}
              <Card className='p-6'>
                <h3 className='text-xl font-semibold text-gray-800 mb-4'>
                  Uygulama Alanları
                </h3>
                <div className='space-y-3'>
                  <div className='flex items-start space-x-3 py-2 border-b border-gray-100'>
                    <div className='w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0'></div>
                    <span className='text-gray-700 text-sm leading-relaxed'>
                      Bakır, alüminyum, titanyum alaşımı, ahşap, plastik,
                      seramik, karbon fiber iş parçaları
                    </span>
                  </div>
                  <div className='flex items-start space-x-3 py-2 border-b border-gray-100'>
                    <div className='w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0'></div>
                    <span className='text-gray-700 text-sm leading-relaxed'>
                      İnce taşlama operasyonları
                    </span>
                  </div>
                  <div className='flex items-start space-x-3 py-2 border-b border-gray-100'>
                    <div className='w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0'></div>
                    <span className='text-gray-700 text-sm leading-relaxed'>
                      Yüzey işleme ve cilalama
                    </span>
                  </div>
                  <div className='flex items-start space-x-3 py-2 border-b border-gray-100'>
                    <div className='w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0'></div>
                    <span className='text-gray-700 text-sm leading-relaxed'>
                      Hassas montaj ve kalibrasyon
                    </span>
                  </div>
                  <div className='flex items-start space-x-3 py-2 border-b border-gray-100'>
                    <div className='w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0'></div>
                    <span className='text-gray-700 text-sm leading-relaxed'>
                      Endüstriyel robot uygulamaları
                    </span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* İletişim Modu ve Gaz Gereksinimleri */}
      <div className='mt-8'>
        <Card className='p-6'>
          <h3 className='text-xl font-semibold text-gray-800 mb-4'>
            Sistem Gereksinimleri
          </h3>
          <div className='grid md:grid-cols-2 gap-6'>
            <div>
              <h4 className='font-medium text-gray-700 mb-2'>İletişim Modu</h4>
              <p className='text-gray-600'>I/O & Modbus RTU</p>
            </div>
            <div>
              <h4 className='font-medium text-gray-700 mb-2'>
                Gaz Besleme Gereksinimleri
              </h4>
              <p className='text-gray-600'>
                Air pressure ≥ 0.6MPa Cleanliness: no oil and no water
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* CTA Section */}
      <section className='py-16 bg-blue-600 text-white'>
        <div className='container mx-auto max-w-8xl text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-6'>
            Terminal Active Force Control Sistemi Hakkında Daha Fazla Bilgi
          </h2>
          <p className='text-xl text-blue-100 mb-8 max-w-3xl mx-auto'>
            Teknik özellikler, kullanım kılavuzları ve fiyat teklifleri için;
            bizimle iletişime geçin.
          </p>
          <div className='flex justify-center'>
            <Button
              size='lg'
              className='bg-white text-blue-600 hover:bg-gray-100'
            >
              <MessageCircle className='w-5 h-5 mr-2' />
              Teknik Destek Al
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
