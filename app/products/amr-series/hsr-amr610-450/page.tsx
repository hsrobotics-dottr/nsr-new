'use client';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/language-context';
import {
  ChevronRight,
  MessageCircle,
  Package,
  Settings,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

// Product data
const productData = {
  model: 'HSR-AMR610-450',
  category: 'AMR Serisi (Kompozit Robotlar)',
  keywords: 'Kompozit Robotlar',
  chassisLoad: '450kg',
  positioningAccuracy: '±5mm',
  movementSpeed: '0-1.2m/s',
  description: `Mobil robot uygulamaları için tasarlanmış evrensel şasi kullanarak, çeşitli zorlu koşullar altında (yağlı su lekeli zemin gibi) esnek bir şekilde kullanılabilir. Çok yönlü mobil kaldırma mekanizması, dar alanlarda çalışma ihtiyaçlarını karşılarken tüm makinenin doğruluğunu artırabilir ve aracın sallanmasını azaltabilir. Görünüm özelleştirmesini ve mekanik kol değişimini destekleyebilir.`,
  image: '/img/AMR/HSR-AMR610-450.png',
  specifications: {
    model: 'HSR-AMR610-450',
    mechanicalArm: {
      load: '10kg',
      workingRadius: '1455mm',
      repeatedPositioningAccuracy: '±0.03mm',
    },
    chassis: {
      maximumLoad: '450kg',
      positioningAccuracy: '±5mm',
      movingSpeed: '0-1.2m/s',
      navigationMode: 'Laser IMU Navigation',
      drivingMode: 'Differential',
      batterySpecifications: '48V60Ah',
      chargingMode: 'Manual/Automatic',
    },
  },
};

// Translations
const translations = {
  tr: {
    product: {
      category: 'Kategori',
      keywords: 'Anahtar Kelimeler',
      chassisLoad: 'Şasi Yükü',
      positioningAccuracy: 'Konumlandırma Doğruluğu',
      movementSpeed: 'Hareket Hızı',
      contactForConsultation: 'Mesaj bırakın',
      specifications: 'Teknik Özellikler',
      mechanicalArm: 'Mekanik Kol',
      chassis: 'Şasi',
      load: 'Yük',
      workingRadius: 'Çalışma Yarıçapı',
      repeatedPositioningAccuracy: 'Tekrarlanan Konumlandırma Doğruluğu',
      maximumLoad: 'Maksimum Yük',
      movingSpeed: 'Hareket Hızı',
      navigationMode: 'Navigasyon Modu',
      drivingMode: 'Sürüş Modu',
      batterySpecifications: 'Batarya Özellikleri',
      chargingMode: 'Şarj Modu',
      requestQuote: 'Fiyat Teklifi İste',
    },
  },
  en: {
    product: {
      category: 'Category',
      keywords: 'Keywords',
      chassisLoad: 'Chassis Load',
      positioningAccuracy: 'Positioning Accuracy',
      movementSpeed: 'Movement Speed',
      contactForConsultation: 'Leave a Message',
      specifications: 'Technical Specifications',
      mechanicalArm: 'Mechanical Arm',
      chassis: 'Chassis',
      load: 'Load',
      workingRadius: 'Working Radius',
      repeatedPositioningAccuracy: 'Repeated Positioning Accuracy',
      maximumLoad: 'Maximum Load',
      movingSpeed: 'Moving Speed',
      navigationMode: 'Navigation Mode',
      drivingMode: 'Driving Mode',
      batterySpecifications: 'Battery Specifications',
      chargingMode: 'Charging Mode',
      requestQuote: 'Request Quote',
    },
  },
};

export default function HSRAMR610450Page() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const { currentLang } = useLanguage();
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
                  className='max-w-full max-h-full object-contain'
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
                    {t.product.chassisLoad}
                  </div>
                  <div className='text-2xl font-bold text-blue-600'>
                    {productData.chassisLoad}
                  </div>
                </Card>
                <Card className='p-4 text-center border-2 border-gray-100'>
                  <div className='text-sm text-gray-600 mb-1'>
                    {t.product.positioningAccuracy}
                  </div>
                  <div className='text-2xl font-bold text-gray-800'>
                    {productData.positioningAccuracy}
                  </div>
                </Card>
                <Card className='p-4 text-center border-2 border-gray-100'>
                  <div className='text-sm text-gray-600 mb-1'>
                    {t.product.movementSpeed}
                  </div>
                  <div className='text-2xl font-bold text-gray-800'>
                    {productData.movementSpeed}
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
                    <Package className='w-5 h-5 text-green-600' />
                  </div>
                  <span className='text-sm font-medium text-gray-700'>
                    450kg Şasi Yükü
                  </span>
                </div>
                <div className='flex items-center space-x-3'>
                  <div className='w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center'>
                    <Zap className='w-5 h-5 text-blue-600' />
                  </div>
                  <span className='text-sm font-medium text-gray-700'>
                    1.2m/s Hareket Hızı
                  </span>
                </div>
                <div className='flex items-center space-x-3'>
                  <div className='w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center'>
                    <Settings className='w-5 h-5 text-purple-600' />
                  </div>
                  <span className='text-sm font-medium text-gray-700'>
                    ±5mm Konumlandırma
                  </span>
                </div>
                <div className='flex items-center space-x-3'>
                  <div className='w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center'>
                    <Settings className='w-5 h-5 text-orange-600' />
                  </div>
                  <span className='text-sm font-medium text-gray-700'>
                    10kg Kol Yükü
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
            {/* Mechanical Arm Specifications */}
            <Card className='p-6'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4 flex items-center'>
                <Package className='w-5 h-5 mr-2 text-blue-600' />
                {t.product.mechanicalArm}
              </h3>
              <div className='space-y-3'>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    {t.product.load}
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.specifications.mechanicalArm.load}
                  </span>
                </div>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    {t.product.workingRadius}
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.specifications.mechanicalArm.workingRadius}
                  </span>
                </div>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    {t.product.repeatedPositioningAccuracy}
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {
                      productData.specifications.mechanicalArm
                        .repeatedPositioningAccuracy
                    }
                  </span>
                </div>
              </div>
            </Card>

            {/* Chassis Specifications */}
            <Card className='p-6'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4 flex items-center'>
                <Settings className='w-5 h-5 mr-2 text-blue-600' />
                {t.product.chassis}
              </h3>
              <div className='space-y-3'>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    {t.product.maximumLoad}
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.specifications.chassis.maximumLoad}
                  </span>
                </div>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    {t.product.positioningAccuracy}
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.specifications.chassis.positioningAccuracy}
                  </span>
                </div>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    {t.product.movingSpeed}
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.specifications.chassis.movingSpeed}
                  </span>
                </div>
              </div>
            </Card>

            {/* Navigation and Driving Specifications */}
            <Card className='p-6'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4 flex items-center'>
                <Zap className='w-5 h-5 mr-2 text-blue-600' />
                Navigasyon ve Sürüş Özellikleri
              </h3>
              <div className='space-y-3'>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    {t.product.navigationMode}
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.specifications.chassis.navigationMode}
                  </span>
                </div>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    {t.product.drivingMode}
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.specifications.chassis.drivingMode}
                  </span>
                </div>
              </div>
            </Card>

            {/* Battery and Charging Specifications */}
            <Card className='p-6'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4 flex items-center'>
                <Settings className='w-5 h-5 mr-2 text-blue-600' />
                Batarya ve Şarj Özellikleri
              </h3>
              <div className='space-y-3'>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    {t.product.batterySpecifications}
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.specifications.chassis.batterySpecifications}
                  </span>
                </div>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    {t.product.chargingMode}
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.specifications.chassis.chargingMode}
                  </span>
                </div>
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
            hazır. Hemen iletişime geçin!
          </p>
          <Button
            onClick={() => setIsContactFormOpen(true)}
            className='bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300'
          >
            <MessageCircle className='w-5 h-5 mr-2' />
            {t.product.contactForConsultation}
          </Button>
        </div>
      </section>{' '}
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
                  ></textarea>
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
