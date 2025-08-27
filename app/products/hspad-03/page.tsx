'use client';

export const dynamic = 'force-dynamic';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  ChevronRight,
  Info,
  MessageCircle,
  Package,
  Settings,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

// Product data
const productData = {
  model: 'HsPad-03',
  category: 'Öğretme Cihazları',
  keywords: 'Öğretme Cihazı, Teaching Pendant',
  display: '8 inç/LCD',
  resolution: '800*600 piksel',
  touchScreen: '8 inç/tam dokunmatik',
  description: `HsPad-03, endüstriyel robotlar için gelişmiş öğretme cihazıdır. 8 inç renkli çoklu dokunmatik ekran, yardımcı fiziksel fonksiyon tuşları ve özelleştirilebilir fonksiyon tuşları ile donatılmıştır. Manuel ve otomatik üç hızlı operasyon modunu destekler ve üç aşamalı güvenlik anahtarı ile maksimum güvenliği sağlar.`,
  image: '/img/teaching/HsPad-03.png',
  specifications: {
    model: 'HsPad-03',
    display: '8 inç/LCD',
    resolution: '800*600 piksel',
    touchScreen: '8 inç/tam dokunmatik',
    emergencyStop: 'Desteklenir',
    selectorSwitch: 'Desteklenir',
    enableSwitch: 'Desteklenir',
    usbInterface: 'Desteklenir',
  },
  performance: {
    cpu: 'PX30/Cortex-A35 Quad Core 1.3G',
    memory: 'LPDDR3/2G/1600MHZ',
    storage: "8GBeMMC bellek, 64G'ye kadar genişletilebilir",
    system: 'Android 8.1',
  },
  operating: {
    inputPower: 'DC24V+15%',
    ratedPower: '10W',
    workingTemp: '-40°C ~ 55°C',
    workingHumidity: '10-90% RH (yoğuşmasız)',
    protectionGrade: 'IP54',
  },
  advantages: [
    '8 inç renkli çoklu dokunmatik ekran, yardımcı fiziksel fonksiyon tuşları, bazı fonksiyon tuşları özelleştirilebilir',
    'Manuel ve otomatik üç hızlı operasyon modunu destekler, üç aşamalı güvenlik anahtarı ile maksimum güvenliği sağlar',
    'Basit ve kullanışlı programlama arayüzü, hızlı öğretme programlamasını gerçekleştirebilir',
    'Mükemmel alarm mekanizması ve inceleme yöntemleri, sahada sorun gidermeyi kolaylaştırır',
    'Otomatik olarak hata alarmını, operasyon geçmişini ve ağ durumunu kaydeder',
    'USB ile program yedekleme, geri yükleme ve yükseltmeyi destekler. İsteğe bağlı paletleme, cilalama, püskürtme ve diğer işlem uygulama paketleri',
  ],
};

const currentLang = 'tr';

// Translations
const translations = {
  tr: {
    product: {
      category: 'Kategori',
      keywords: 'Anahtar Kelimeler',
      display: 'Ekran',
      resolution: 'Çözünürlük',
      touchScreen: 'Dokunmatik Ekran',
      contactForConsultation: 'Mesaj bırakın',
      specifications: 'Teknik Özellikler',
      performance: 'Performans Parametreleri',
      operating: 'Operasyon Parametreleri',
      advantages: 'Ürün Avantajları',
      emergencyStop: 'Acil Durdurma',
      selectorSwitch: 'Seçici Anahtar',
      enableSwitch: 'Etkinleştirme Anahtarı',
      usbInterface: 'USB Arayüzü',
      cpu: 'İşlemci',
      memory: 'Bellek',
      storage: 'Depolama',
      system: 'Sistem',
      inputPower: 'Giriş Gücü',
      ratedPower: 'Nominal Güç',
      workingTemp: 'Çalışma Sıcaklığı',
      workingHumidity: 'Çalışma Nem Oranı',
      protectionGrade: 'Koruma Seviyesi',
      requestQuote: 'Fiyat Teklifi İste',
      contactUs: 'İletişime Geç',
    },
  },
  en: {
    product: {
      category: 'Category',
      keywords: 'Keywords',
      display: 'Display',
      resolution: 'Resolution',
      touchScreen: 'Touch Screen',
      contactForConsultation: 'Leave a Message',
      specifications: 'Technical Specifications',
      performance: 'Performance Parameters',
      operating: 'Operating Parameters',
      advantages: 'Product Advantages',
      emergencyStop: 'Emergency Stop',
      selectorSwitch: 'Selector Switch',
      enableSwitch: 'Enable Switch',
      usbInterface: 'USB Interface',
      cpu: 'CPU',
      memory: 'Memory',
      storage: 'Storage',
      system: 'System',
      inputPower: 'Input Power',
      ratedPower: 'Rated Power',
      workingTemp: 'Working Temperature',
      workingHumidity: 'Working Humidity',
      protectionGrade: 'Protection Grade',
      requestQuote: 'Request Quote',
      contactUs: 'Contact Us',
    },
  },
};

export default function HsPad03Page() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const t = translations[currentLang as keyof typeof translations];

  return (
    <div className='min-h-screen bg-white'>
      <Header />

      {/* Breadcrumb */}
      <section className='py-5 bg-gray-50 border-b border-gray-200'>
        <div className='container mx-auto px-4 max-w-7xl'>
          <nav className='flex items-center space-x-2 text-sm text-gray-600'>
            <span className='text-gray-800 font-medium'>
              {productData.category}
            </span>
            <ChevronRight className='w-4 h-4' />
            <span className='text-gray-800 font-medium'>
              {productData.model}
            </span>
          </nav>
        </div>
      </section>

      {/* Product Header */}
      <section className='py-12 bg-white'>
        <div className='container mx-auto px-4 max-w-7xl'>
          <div className='grid lg:grid-cols-2 gap-12 items-start'>
            {/* Product Image */}
            <div className='relative'>
              <div className='bg-gray-50 rounded-2xl p-8 flex items-center justify-center min-h-[400px]'>
                <Image
                  src={productData.image || '/placeholder.svg'}
                  alt={productData.model}
                  width={500}
                  height={400}
                  className='max-w-[400px] max-h-[300px] object-contain'
                />
              </div>
            </div>

            {/* Product Info */}
            <div className='space-y-6'>
              <div>
                <h1 className='text-4xl font-bold text-gray-800 mb-4'>
                  {productData.model}
                </h1>
              </div>

              {/* Quick Specs */}
              <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                <Card className='p-4 text-center border-2 border-blue-100 bg-blue-50'>
                  <div className='text-sm text-gray-600 mb-1'>
                    {t.product.display}
                  </div>
                  <div className='text-2xl font-bold text-blue-600'>
                    {productData.specifications.display}
                  </div>
                </Card>
                <Card className='p-4 text-center border-2 border-gray-100'>
                  <div className='text-sm text-gray-600 mb-1'>
                    {t.product.resolution}
                  </div>
                  <div className='text-2xl font-bold text-gray-800'>
                    {productData.specifications.resolution}
                  </div>
                </Card>
                <Card className='p-4 text-center border-2 border-gray-100'>
                  <div className='text-sm text-gray-600 mb-1'>
                    {t.product.touchScreen}
                  </div>
                  <div className='text-2xl font-bold text-gray-800'>
                    {productData.specifications.touchScreen}
                  </div>
                </Card>
              </div>

              {/* Action Button */}
              <div className='flex flex-col sm:flex-row gap-4'>
                <Button
                  onClick={() => setIsContactFormOpen(true)}
                  className='w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300'
                >
                  <MessageCircle className='w-5 h-5 mr-2' />
                  {t.product.contactForConsultation}
                </Button>
              </div>

              {/* Key Features */}
              <div className='grid grid-cols-2 gap-4'>
                <div className='flex items-center space-x-3'>
                  <div className='w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center'>
                    <Settings className='w-5 h-5 text-green-600' />
                  </div>
                  <span className='text-sm font-medium text-gray-700'>
                    Android 8.1
                  </span>
                </div>
                <div className='flex items-center space-x-3'>
                  <div className='w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center'>
                    <Zap className='w-5 h-5 text-blue-600' />
                  </div>
                  <span className='text-sm font-medium text-gray-700'>
                    IP54 Koruma
                  </span>
                </div>
                <div className='flex items-center space-x-3'>
                  <div className='w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center'>
                    <Package className='w-5 h-5 text-purple-600' />
                  </div>
                  <span className='text-sm font-medium text-gray-700'>
                    USB Arayüzü
                  </span>
                </div>
                <div className='flex items-center space-x-3'>
                  <div className='w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center'>
                    <Settings className='w-5 h-5 text-orange-600' />
                  </div>
                  <span className='text-sm font-medium text-gray-700'>
                    Güvenlik Anahtarları
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Description */}
      <section className='py-12 bg-gray-50'>
        <div className='container mx-auto px-4 max-w-7xl'>
          <div className='rounded-lg border bg-card text-card-foreground shadow-sm p-8'>
            <h2 className='text-2xl font-bold text-gray-800 mb-6'>
              Ürün Açıklaması
            </h2>
            <p className='text-gray-700 leading-relaxed text-lg'>
              {productData.description}
            </p>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className='py-12 bg-white'>
        <div className='container mx-auto px-4 max-w-7xl'>
          <h2 className='text-3xl font-bold text-gray-800 mb-8 text-center'>
            Teknik Özellikler
          </h2>
          <div className='grid lg:grid-cols-2 gap-8'>
            {/* Basic Specifications */}
            <Card className='p-6'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4 flex items-center'>
                <Info className='w-5 h-5 mr-2 text-blue-600' />
                Temel Özellikler
              </h3>
              <div className='space-y-3'>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>Model </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.specifications.model}
                  </span>
                </div>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>Ekran </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.specifications.display}
                  </span>
                </div>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>Çözünürlük </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.specifications.resolution}
                  </span>
                </div>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    Dokunmatik Ekran
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.specifications.touchScreen}
                  </span>
                </div>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    Acil Durdurma
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.specifications.emergencyStop}
                  </span>
                </div>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    Seçici Anahtar
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.specifications.selectorSwitch}
                  </span>
                </div>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    Etkinleştirme Anahtarı
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.specifications.enableSwitch}
                  </span>
                </div>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    USB Arayüzü{' '}
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.specifications.usbInterface}
                  </span>
                </div>
              </div>
            </Card>

            {/* Performance Parameters */}
            <Card className='p-6'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4 flex items-center'>
                <Zap className='w-5 h-5 mr-2 text-blue-600' />
                {t.product.performance}
              </h3>
              <div className='space-y-3'>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>İşlemci </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.performance.cpu}
                  </span>
                </div>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>Bellek </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.performance.memory}
                  </span>
                </div>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>Depolama </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.performance.storage}
                  </span>
                </div>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>Sistem </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.performance.system}
                  </span>
                </div>
              </div>
            </Card>

            {/* Operating Parameters */}
            <Card className='p-6'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4 flex items-center'>
                <Settings className='w-5 h-5 mr-2 text-blue-600' />
                {t.product.operating}
              </h3>
              <div className='space-y-3'>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>Giriş Gücü </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.operating.inputPower}
                  </span>
                </div>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    Nominal Güç{' '}
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.operating.ratedPower}
                  </span>
                </div>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    Çalışma Sıcaklığı
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.operating.workingTemp}
                  </span>
                </div>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    Çalışma Nem Oranı
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.operating.workingHumidity}
                  </span>
                </div>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    Koruma Seviyesi
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.operating.protectionGrade}
                  </span>
                </div>
              </div>
            </Card>

            {/* Product Advantages */}
            <Card className='p-6'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4 flex items-center'>
                <Package className='w-5 h-5 mr-2 text-blue-600' />
                {t.product.advantages}
              </h3>
              <div className='space-y-3'>
                {productData.advantages.map((advantage, index) => (
                  <div key={index} className='flex items-start space-x-3'>
                    <span className='text-blue-600 font-bold mt-1'>■ </span>
                    <span className='text-gray-700 text-sm leading-relaxed'>
                      {advantage}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className='py-16 bg-blue-600 text-white'>
        <div className='container mx-auto px-4 max-w-7xl text-center'>
          <h2 className='text-3xl font-bold mb-4'>
            Bu Ürün Hakkında Daha Fazla Bilgi Almak İster misiniz?
          </h2>
          <p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>
            Uzman ekibimiz size en uygun çözümü bulmak için yardımcı olmaya
            hazır
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              onClick={() => setIsContactFormOpen(true)}
              className='bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105'
            >
              <MessageCircle className='w-5 h-5 mr-2' />
              İletişime Geç
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {isContactFormOpen && (
        <div className='fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4'>
          <div className='bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto'>
            <div className='p-6 border-b border-gray-200'>
              <div className='flex items-center justify-between'>
                <h3 className='text-2xl font-bold text-gray-800'>
                  İletişim Formu
                </h3>
                <button
                  onClick={() => setIsContactFormOpen(false)}
                  className='p-2 hover:bg-gray-100 rounded-full transition-colors'
                >
                  <svg
                    className='w-6 h-6 text-gray-600'
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
              <p className='text-gray-600 mt-2'>
                Bu ürün hakkında bilgi almak için formu doldurun.
              </p>
            </div>

            <div className='p-6'>
              <form className='space-y-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Ad Soyad *
                    </label>
                    <input
                      type='text'
                      required
                      className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                      placeholder='Adınız ve soyadınız'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      E-posta *
                    </label>
                    <input
                      type='email'
                      required
                      className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                      placeholder='E-posta adresiniz'
                    />
                  </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Telefon
                    </label>
                    <input
                      type='tel'
                      className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                      placeholder='Telefon numaranız'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Şirket
                    </label>
                    <input
                      type='text'
                      className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                      placeholder='Şirket adınız'
                    />
                  </div>
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Mesaj *
                  </label>
                  <textarea
                    required
                    rows={4}
                    className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    placeholder='Bu ürün hakkında bilgi almak istiyorum...'
                  />
                </div>

                <div className='flex gap-3 pt-4'>
                  <Button
                    type='submit'
                    className='flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold'
                  >
                    <MessageCircle className='w-5 h-5 mr-2' />
                    Mesaj Gönder
                  </Button>
                  <Button
                    type='button'
                    variant='outline'
                    onClick={() => setIsContactFormOpen(false)}
                    className='px-6 py-3 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg'
                  >
                    İptal
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
