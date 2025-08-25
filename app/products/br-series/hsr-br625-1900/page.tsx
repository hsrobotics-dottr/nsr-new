'use client';

import { Footer } from '@/components/footer';
import { ContactForm } from '@/components/forms/contact-form';
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
  model: 'HSR-BR625-1900',
  category: 'BR Serisi (Endüstriyel Altı Eksenli)',
  keywords: 'Endüstriyel Robotlar',
  axes: 6,
  payload: '25 kg',
  reach: '1900mm',
  description: `HSR-BR625-1900, Huashu Robotics'den gelen en güçlü, çok amaçlı robotlardan biridir ve "yüksek hassasiyet, yüksek yük kapasitesi ve maksimum çalışma alanı" gibi ağır sanayi üretiminin en yüksek gereksinimlerini karşılar. Tüm makine güçlü tasarım kullanır, maksimum erişim mesafesi sunar ve esnek kurulum yöntemleri sağlar. Bağımsız olarak geliştirilen çekirdek bileşenleri kullanarak, önemli bir maliyet avantajını korurken maksimum performans sergiler. Ağır montaj, büyük parça paketleme, ağır malzeme taşıma ve endüstriyel kalite kontrol gibi alanlarda yaygın olarak kullanılır.`,
  image: '/img/industrial/BR/HSR-BR625-1900.png',
  specifications: {
    model: 'HSR-BR625-1900',
    dof: '6',
    payload: '25kg',
    reach: '1900mm',
    repeatability: '±0.08mm',
  },
  movementRange: {
    J1: '±180°',
    J2: '-155°/+5°',
    J3: '-20°/+240°',
    J4: '±180°',
    J5: '±95°',
    J6: '±360°',
  },
  maxSpeed: {
    J1: '270°/s, 4.71rad/s',
    J2: '270°/s, 4.71rad/s',
    J3: '270°/s, 4.71rad/s',
    J4: '270°/s, 4.71rad/s',
    J5: '270°/s, 4.71rad/s',
    J6: '450°/s, 7.85rad/s',
  },
  allowedInertia: {
    J4: '0.25kg·m²',
    J5: '0.25kg·m²',
    J6: '0.16kg·m²',
  },
  allowedTorque: {
    J4: '50.8Nm',
    J5: '25.4Nm',
    J6: '25.4Nm',
  },
  environment: {
    temperature: '0-45°C',
    humidity: '20%-80%',
  },
  // Additional specifications for HSR-BR625-1900
  additionalSpecs: {
    teachPendantCable: '8 metre',
    mainUnitCabinetCable: '3 metre',
    ioParameters: 'Dijital: 32-bit giriş (NPN), 32-bit çıkış (NPN)',
    reservedSignalLines: '12 bit',
    reservedAirway: '1xΦ6',
    powerCapacity: '2.2kVA',
    ratedPower: '1.8kW',
    ratedVoltage: '220V',
    ratedCurrent: '7.8A',
    protectionLevel: 'IP54',
    installationMethod: 'Zemin/Yan/Ters Kurulum',
    weight: '50kg',
    cabinetProtectionLevel: 'IP20',
  },
};

const currentLang = 'tr';

// Translations
const translations = {
  tr: {
    product: {
      category: 'Kategori',
      keywords: 'Anahtar Kelimeler',
      axes: 'Eksen Sayısı',
      payload: 'Yük',
      reach: 'Kol Açıklığı',
      contactForConsultation: 'Mesaj bırakın',
      specifications: 'Teknik Özellikler',
      movementRange: 'Hareket Aralığı',
      maxSpeed: 'En Yüksek Hız',
      allowedInertia: 'İzin Verilen Eylemsizlik Momenti',
      allowedTorque: 'İzin Verilen Yük Torku',
      environment: 'Uygulanabilir Çevre',
      temperature: 'Sıcaklık',
      humidity: 'Nem',
      powerCapacity: 'Güç Kapasitesi',
      ratedPower: 'Nominal Güç',
      ratedVoltage: 'Nominal Gerilim',
      ratedCurrent: 'Nominal Akım',
      protectionLevel: 'Koruma Seviyesi',
      installationMethod: 'Kurulum Yöntemi',
      weight: 'Ağırlık',
      cabinetProtectionLevel: 'Kabin Koruma Seviyesi',
      requestQuote: 'Fiyat Teklifi İste',
      contactUs: 'İletişime Geç',
    },
  },
  en: {
    product: {
      category: 'Category',
      keywords: 'Keywords',
      axes: 'Number of Axes',
      payload: 'Payload',
      reach: 'Reach',
      contactForConsultation: 'Leave a Message',
      specifications: 'Technical Specifications',
      movementRange: 'Movement Range',
      maxSpeed: 'Maximum Speed',
      allowedInertia: 'Allowed Inertia Moment',
      allowedTorque: 'Allowed Load Torque',
      environment: 'Applicable Environment',
      temperature: 'Temperature',
      humidity: 'Humidity',
      powerCapacity: 'Power Capacity',
      ratedPower: 'Rated Power',
      ratedVoltage: 'Rated Voltage',
      ratedCurrent: 'Rated Current',
      protectionLevel: 'Protection Level',
      installationMethod: 'Installation Method',
      weight: 'Weight',
      cabinetProtectionLevel: 'Cabinet Protection Level',
      requestQuote: 'Request Quote',
      contactUs: 'Contact Us',
    },
  },
};

export default function HSRBR6251900Page() {
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
                    {t.product.axes}
                  </div>
                  <div className='text-2xl font-bold text-blue-600'>
                    {productData.axes}
                  </div>
                </Card>
                <Card className='p-4 text-center border-2 border-gray-100'>
                  <div className='text-sm text-gray-600 mb-1'>
                    {t.product.payload}
                  </div>
                  <div className='text-2xl font-bold text-gray-800'>
                    {productData.payload}
                  </div>
                </Card>
                <Card className='p-4 text-center border-2 border-gray-100'>
                  <div className='text-sm text-gray-600 mb-1'>
                    {t.product.reach}
                  </div>
                  <div className='text-2xl font-bold text-gray-800'>
                    {productData.reach}
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
                    IP54 Koruma
                  </span>
                </div>
                <div className='flex items-center space-x-3'>
                  <div className='w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center'>
                    <Zap className='w-5 h-5 text-blue-600' />
                  </div>
                  <span className='text-sm font-medium text-gray-700'>
                    Yüksek Güç
                  </span>
                </div>
                <div className='flex items-center space-x-3'>
                  <div className='w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center'>
                    <Package className='w-5 h-5 text-purple-600' />
                  </div>
                  <span className='text-sm font-medium text-gray-700'>
                    Ağır Yük
                  </span>
                </div>
                <div className='flex items-center space-x-3'>
                  <div className='w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center'>
                    <Settings className='w-5 h-5 text-orange-600' />
                  </div>
                  <span className='text-sm font-medium text-gray-700'>
                    Maksimum Erişim
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
                  <span className='text-gray-600 font-medium'>Model</span>
                  <span className='font-semibold text-gray-800'>
                    {productData.specifications.model}
                  </span>
                </div>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    Özgürlük Dereceleri
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.specifications.dof}
                  </span>
                </div>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>Nominal Yük</span>
                  <span className='font-semibold text-gray-800'>
                    {productData.specifications.payload}
                  </span>
                </div>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    Maksimum Çalışma Yarıçapı
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.specifications.reach}
                  </span>
                </div>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    Tekrar Konumlandırma Doğruluğu
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.specifications.repeatability}
                  </span>
                </div>
              </div>
            </Card>

            {/* Movement Range */}
            <Card className='p-6'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4 flex items-center'>
                <Settings className='w-5 h-5 mr-2 text-blue-600' />
                Hareket Aralığı
              </h3>
              <div className='space-y-3'>
                {Object.entries(productData.movementRange).map(
                  ([key, value]) => (
                    <div
                      key={key}
                      className='flex justify-between py-2 border-b border-gray-100'
                    >
                      <span className='text-gray-600 font-medium'>{key}</span>
                      <span className='font-semibold text-gray-800'>
                        {value}
                      </span>
                    </div>
                  )
                )}
              </div>
            </Card>

            {/* Maximum Speed */}
            <Card className='p-6'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4 flex items-center'>
                <Zap className='w-5 h-5 mr-2 text-blue-600' />
                En Yüksek Hız
              </h3>
              <div className='space-y-3'>
                {Object.entries(productData.maxSpeed).map(([key, value]) => (
                  <div
                    key={key}
                    className='flex justify-between py-2 border-b border-gray-100'
                  >
                    <span className='text-gray-600 font-medium'>{key}</span>
                    <span className='font-semibold text-gray-800'>{value}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Allowed Inertia Moment */}
            <Card className='p-6'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4 flex items-center'>
                <Package className='w-5 h-5 mr-2 text-blue-600' />
                İzin Verilen Eylemsizlik Momenti
              </h3>
              <div className='space-y-3'>
                {Object.entries(productData.allowedInertia).map(
                  ([key, value]) => (
                    <div
                      key={key}
                      className='flex justify-between py-2 border-b border-gray-100'
                    >
                      <span className='text-gray-600 font-medium'>{key}</span>
                      <span className='font-semibold text-gray-800'>
                        {value}
                      </span>
                    </div>
                  )
                )}
              </div>
            </Card>
          </div>

          <div className='grid md:grid-cols-2 gap-8 mt-8'>
            {/* Allowed Load Torque */}
            <Card className='p-6'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4 flex items-center'>
                <Settings className='w-5 h-5 mr-2 text-blue-600' />
                İzin Verilen Yük Torku
              </h3>
              <div className='space-y-3'>
                {Object.entries(productData.allowedTorque).map(
                  ([key, value]) => (
                    <div
                      key={key}
                      className='flex justify-between py-2 border-b border-gray-100'
                    >
                      <span className='text-gray-600 font-medium'>{key}</span>
                      <span className='font-semibold text-gray-800'>
                        {value}
                      </span>
                    </div>
                  )
                )}
              </div>
            </Card>

            {/* Environment */}
            <Card className='p-6'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4 flex items-center'>
                <Settings className='w-5 h-5 mr-2 text-blue-600' />
                Uygulanabilir Çevre
              </h3>
              <div className='space-y-4'>
                <div className='flex items-center justify-between py-3 px-4 bg-red-50 rounded-lg'>
                  <div className='flex items-center space-x-3'>
                    <span className='text-gray-700 font-medium'>
                      {t.product.temperature}
                    </span>
                  </div>
                  <span className='font-semibold text-gray-800'>
                    {productData.environment.temperature}
                  </span>
                </div>
                <div className='flex items-center justify-between py-3 px-4 bg-blue-50 rounded-lg'>
                  <div className='flex items-center space-x-3'>
                    <span className='text-gray-700 font-medium'>
                      {t.product.humidity}
                    </span>
                  </div>
                  <span className='font-semibold text-gray-800'>
                    {productData.environment.humidity}
                  </span>
                </div>
              </div>
            </Card>
          </div>

          <div className='mt-8'>
            <h2 className='text-2xl font-bold text-gray-800 mb-6 text-center'>
              Ek Teknik Özellikler
            </h2>
            <div className='grid md:grid-cols-2 gap-8'>
              {/* Cable and Connection Specifications */}
              <Card className='p-6'>
                <h3 className='text-xl font-semibold text-gray-800 mb-4 flex items-center'>
                  <Settings className='w-5 h-5 mr-2 text-blue-600' />
                  Kablo ve Bağlantı Özellikleri
                </h3>
                <div className='space-y-3'>
                  <div className='flex justify-between py-2 border-b border-gray-100'>
                    <span className='text-gray-600 font-medium'>
                      Öğretim Paneli Kablosu
                    </span>
                    <span className='font-semibold text-gray-800'>
                      {productData.additionalSpecs.teachPendantCable}
                    </span>
                  </div>
                  <div className='flex justify-between py-2 border-b border-gray-100'>
                    <span className='text-gray-600 font-medium'>
                      Ana Ünite-Kabin Bağlantı Kablosu
                    </span>
                    <span className='font-semibold text-gray-800'>
                      {productData.additionalSpecs.mainUnitCabinetCable}
                    </span>
                  </div>
                  <div className='flex justify-between py-2 border-b border-gray-100'>
                    <span className='text-gray-600 font-medium'>
                      G/Ç Parametreleri
                    </span>
                    <span className='font-semibold text-gray-800'>
                      {productData.additionalSpecs.ioParameters}
                    </span>
                  </div>
                  <div className='flex justify-between py-2 border-b border-gray-100'>
                    <span className='text-gray-600 font-medium'>
                      Rezerve Sinyal Hatları
                    </span>
                    <span className='font-semibold text-gray-800'>
                      {productData.additionalSpecs.reservedSignalLines}
                    </span>
                  </div>
                  <div className='flex justify-between py-2 border-b border-gray-100'>
                    <span className='text-gray-600 font-medium'>
                      Rezerve Hava Yolu
                    </span>
                    <span className='font-semibold text-gray-800'>
                      {productData.additionalSpecs.reservedAirway}
                    </span>
                  </div>
                </div>
              </Card>

              {/* Power and Installation Specifications */}
              <Card className='p-6'>
                <h3 className='text-xl font-semibold text-gray-800 mb-4 flex items-center'>
                  <Zap className='w-5 h-5 mr-2 text-blue-600' />
                  Güç ve Kurulum Özellikleri
                </h3>
                <div className='space-y-3'>
                  <div className='flex justify-between py-2 border-b border-gray-100'>
                    <span className='text-gray-600 font-medium'>
                      {t.product.powerCapacity}
                    </span>
                    <span className='font-semibold text-gray-800'>
                      {productData.additionalSpecs.powerCapacity}
                    </span>
                  </div>
                  <div className='flex justify-between py-2 border-b border-gray-100'>
                    <span className='text-gray-600 font-medium'>
                      {t.product.ratedPower}
                    </span>
                    <span className='font-semibold text-gray-800'>
                      {productData.additionalSpecs.ratedPower}
                    </span>
                  </div>
                  <div className='flex justify-between py-2 border-b border-gray-100'>
                    <span className='text-gray-600 font-medium'>
                      {t.product.ratedVoltage}
                    </span>
                    <span className='font-semibold text-gray-800'>
                      {productData.additionalSpecs.ratedVoltage}
                    </span>
                  </div>
                  <div className='flex justify-between py-2 border-b border-gray-100'>
                    <span className='text-gray-600 font-medium'>
                      {t.product.ratedCurrent}
                    </span>
                    <span className='font-semibold text-gray-800'>
                      {productData.additionalSpecs.ratedCurrent}
                    </span>
                  </div>
                  <div className='flex justify-between py-2 border-b border-gray-100'>
                    <span className='text-gray-600 font-medium'>
                      {t.product.protectionLevel}
                    </span>
                    <span className='font-semibold text-gray-800'>
                      {productData.additionalSpecs.protectionLevel}
                    </span>
                  </div>
                  <div className='flex justify-between py-2 border-b border-gray-100'>
                    <span className='text-gray-600 font-medium'>
                      {t.product.installationMethod}
                    </span>
                    <span className='font-semibold text-gray-800'>
                      {productData.additionalSpecs.installationMethod}
                    </span>
                  </div>
                  <div className='flex justify-between py-2 border-b border-gray-100'>
                    <span className='text-gray-600 font-medium'>
                      {t.product.weight}
                    </span>
                    <span className='font-semibold text-gray-800'>
                      {productData.additionalSpecs.weight}
                    </span>
                  </div>
                  <div className='flex justify-between py-2 border-b border-gray-100'>
                    <span className='text-gray-600 font-medium'>
                      {t.product.cabinetProtectionLevel}
                    </span>
                    <span className='font-semibold text-gray-800'>
                      {productData.additionalSpecs.cabinetProtectionLevel}
                    </span>
                  </div>
                </div>
              </Card>
            </div>
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
      </section>      {/* Contact Form Modal */}
      <ContactForm
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
        title="İletişim Formu"
        description="Bu ürün hakkında bilgi almak için formu doldurun."
      />
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
