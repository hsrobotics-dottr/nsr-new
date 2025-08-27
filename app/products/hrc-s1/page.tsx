'use client';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Cable,
  ChevronRight,
  Cloud,
  MessageCircle,
  Package,
  Power,
  Settings,
  Shield,
  Thermometer,
  Wifi,
} from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

// Product data
const productData = {
  model: 'HRC-S1',
  category: 'Hareket Denetleyicisi (Çekirdek Bileşenler)',
  keywords: 'Hareket Denetleyicisi, Elektrik Panosu, Kontrol Kabini',
  title: 'Elektrik Panosu',
  description: `HRC-S1 elektrik panosu, endüstriyel robotik uygulamalar için tasarlanmış yüksek performanslı kontrol kabinidir. Kompakt tasarımı ve gelişmiş koruma özellikleri ile çeşitli endüstriyel ortamlarda güvenli çalışma sağlar. Modbus TCP, Ethernet IP ve seri iletişim protokollerini destekleyerek esnek entegrasyon imkanı sunar.`,
  image: '/img/MotionController/hrc-s1.png',
  specifications: {
    structural: {
      dimensions: '540x508.5x670mm',
      weight: '56kg',
      protectionLevel: 'IP54',
    },
    environment: {
      workingTemperature: '0°C ~ 45°C',
      storageTemperature: '-20°C ~ 85°C',
      humidity: '≤ 95% RH, No condensation, no freezing',
    },
    power: {
      powerType: 'Three-phase five-wire AC 380V 50HZ',
      ratedPower: '5.5KW',
      motorVoltage: '220V motor',
      axisPower: {
        axis1: '3.1KW',
        axis2: '3.1KW',
        axis3: '2.4KW',
        axis4: '1.2KW',
        axis5: '0.75KW',
        axis6: '0.75KW',
      },
    },
    io: {
      standardIO: '32 in 31 out',
    },
    communication: {
      standard: ['Modbus TCP', 'Ethernet IP', 'Serial Port'],
      optional: ['Profinet', 'CC-Link'],
    },
    additional: {
      cableLength: '6m',
      cloudCollection:
        'Robot bilgileri gerçek zamanlı olarak toplanabilir ve buluta yüklenebilir',
    },
    additionalCabinet: {
      model: 'HRC-E-A',
      protectionLevel: 'IP54',
      workingTemperature: '0°C ~ 40°C',
      installableDrives:
        '1~3 adet 20A güç sürücü kurulabilir, 20A güç sürücü 1~2 adet kurulabilir',
      dimensions: '540x508.5x600mm',
      remarks:
        'S1 serisi kontrol kabini ile kullanıldığında istiflenebilir, alan tasarrufu sağlar',
    },
  },
};

const currentLang = 'tr';

// Translations
const translations = {
  tr: {
    product: {
      category: 'Kategori',
      keywords: 'Anahtar Kelimeler',
      contactForConsultation: 'Mesaj bırakın',
      specifications: 'Teknik Özellikler',
      structural: 'Yapısal Parametreler',
      environment: 'Çalışma Ortamı',
      power: 'Güç Özellikleri',
      io: 'Giriş/Çıkış Özellikleri',
      communication: 'İletişim Özellikleri',
      additional: 'Ek Özellikler',
      additionalCabinet: 'Ek Şaft Kontrol Kabini',
      dimensions: 'Boyutlar',
      weight: 'Ağırlık',
      protectionLevel: 'Koruma Seviyesi',
      workingTemperature: 'Çalışma Sıcaklığı',
      storageTemperature: 'Depolama Sıcaklığı',
      humidity: 'Nem',
      powerType: 'Güç Tipi',
      ratedPower: 'Nominal Güç',
      motorVoltage: 'Motor Gerilimi',
      axisPower: 'Eksen Güçleri',
      standardIO: 'Standart G/Ç',
      standard: 'Standart',
      optional: 'Opsiyonel',
      cableLength: 'Kablo Uzunluğu',
      cloudCollection: 'Bulut Toplama',
      model: 'Model',
      installableDrives: 'Kurulabilir Sürücüler',
      remarks: 'Notlar',
      requestQuote: 'Fiyat Teklifi İste',
    },
  },
  en: {
    product: {
      category: 'Category',
      keywords: 'Keywords',
      contactForConsultation: 'Leave a Message',
      specifications: 'Technical Specifications',
      structural: 'Structural Parameters',
      environment: 'Working Environment',
      power: 'Power Features',
      io: 'I/O Features',
      communication: 'Communication Features',
      additional: 'Additional Features',
      additionalCabinet: 'Additional Shaft Control Cabinet',
      dimensions: 'Dimensions',
      weight: 'Weight',
      protectionLevel: 'Protection Level',
      workingTemperature: 'Working Temperature',
      storageTemperature: 'Storage Temperature',
      humidity: 'Humidity',
      powerType: 'Power Type',
      ratedPower: 'Rated Power',
      motorVoltage: 'Motor Voltage',
      axisPower: 'Axis Power',
      standardIO: 'Standard I/O',
      standard: 'Standard',
      optional: 'Optional',
      cableLength: 'Cable Length',
      cloudCollection: 'Cloud Collection',
      model: 'Model',
      installableDrives: 'Installable Drives',
      remarks: 'Remarks',
      requestQuote: 'Request Quote',
    },
  },
};

export default function HRCS1Page() {
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
                  {productData.title}
                </h1>
              </div>

              {/* Quick Specs */}
              <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                <Card className='p-4 text-center border-2 border-blue-100 bg-blue-50'>
                  <div className='text-sm text-gray-600 mb-1'>
                    {t.product.dimensions}
                  </div>
                  <div className='text-sm font-bold text-blue-600 leading-tight'>
                    {productData.specifications.structural.dimensions}
                  </div>
                </Card>
                <Card className='p-4 text-center border-2 border-gray-100'>
                  <div className='text-sm text-gray-600 mb-1'>
                    {t.product.weight}
                  </div>
                  <div className='text-2xl font-bold text-gray-800'>
                    {productData.specifications.structural.weight}
                  </div>
                </Card>
                <Card className='p-4 text-center border-2 border-gray-100'>
                  <div className='text-sm text-gray-600 mb-1'>
                    {t.product.protectionLevel}
                  </div>
                  <div className='text-2xl font-bold text-gray-800'>
                    {productData.specifications.structural.protectionLevel}
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
                    <Shield className='w-5 h-5 text-green-600' />
                  </div>
                  <span className='text-sm font-medium text-gray-700'>
                    IP54 Koruma
                  </span>
                </div>
                <div className='flex items-center space-x-3'>
                  <div className='w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center'>
                    <Wifi className='w-5 h-5 text-blue-600' />
                  </div>
                  <span className='text-sm font-medium text-gray-700'>
                    Çoklu İletişim
                  </span>
                </div>
                <div className='flex items-center space-x-3'>
                  <div className='w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center'>
                    <Power className='w-5 h-5 text-purple-600' />
                  </div>
                  <span className='text-sm font-medium text-gray-700'>
                    5.5KW Güç
                  </span>
                </div>
                <div className='flex items-center space-x-3'>
                  <div className='w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center'>
                    <Cloud className='w-5 h-5 text-orange-600' />
                  </div>
                  <span className='text-sm font-medium text-gray-700'>
                    Bulut Entegrasyonu
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
            {t.product.specifications}
          </h2>

          {/* Structural Parameters */}
          <div className='grid lg:grid-cols-2 gap-8 mb-8'>
            <Card className='p-6'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4 flex items-center'>
                <Package className='w-5 h-5 mr-2 text-blue-600' />
                {t.product.structural}
              </h3>
              <div className='space-y-3'>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    {t.product.dimensions}
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.specifications.structural.dimensions}
                  </span>
                </div>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    {t.product.weight}
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.specifications.structural.weight}
                  </span>
                </div>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    {t.product.protectionLevel}
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.specifications.structural.protectionLevel}
                  </span>
                </div>
              </div>
            </Card>

            {/* Environment */}
            <Card className='p-6'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4 flex items-center'>
                <Thermometer className='w-5 h-5 mr-2 text-blue-600' />
                {t.product.environment}
              </h3>
              <div className='space-y-3'>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    {t.product.workingTemperature}
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.specifications.environment.workingTemperature}
                  </span>
                </div>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    {t.product.storageTemperature}
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.specifications.environment.storageTemperature}
                  </span>
                </div>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    {t.product.humidity}
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.specifications.environment.humidity}
                  </span>
                </div>
              </div>
            </Card>
          </div>

          {/* Power and I/O */}
          <div className='grid lg:grid-cols-2 gap-8 mb-8'>
            <Card className='p-6'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4 flex items-center'>
                <Power className='w-5 h-5 mr-2 text-blue-600' />
                {t.product.power}
              </h3>
              <div className='space-y-3'>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    {t.product.powerType}
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.specifications.power.powerType}
                  </span>
                </div>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    {t.product.ratedPower}
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.specifications.power.ratedPower}
                  </span>
                </div>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    {t.product.motorVoltage}
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.specifications.power.motorVoltage}
                  </span>
                </div>
              </div>
            </Card>

            <Card className='p-6'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4 flex items-center'>
                <Settings className='w-5 h-5 mr-2 text-blue-600' />
                {t.product.io}
              </h3>
              <div className='space-y-3'>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    {t.product.standardIO}
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.specifications.io.standardIO}
                  </span>
                </div>
              </div>
            </Card>
          </div>

          {/* Communication */}
          <div className='grid lg:grid-cols-1 gap-8 mb-8'>
            <Card className='p-6'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4 flex items-center'>
                <Wifi className='w-5 h-5 mr-2 text-blue-600' />
                {t.product.communication}
              </h3>
              <div className='grid md:grid-cols-2 gap-6'>
                <div className='space-y-3'>
                  <h4 className='font-semibold text-gray-700 mb-2'>
                    {t.product.standard}
                  </h4>
                  <div className='space-y-2'>
                    {productData.specifications.communication.standard.map(
                      (protocol, index) => (
                        <div
                          key={index}
                          className='flex items-center space-x-2'
                        >
                          <div className='w-2 h-2 bg-green-500 rounded-full'>
                            {' '}
                          </div>
                          <span className='text-gray-700'>{protocol} </span>
                        </div>
                      )
                    )}
                  </div>
                </div>
                <div className='space-y-3'>
                  <h4 className='font-semibold text-gray-700 mb-2'>
                    {t.product.optional}
                  </h4>
                  <div className='space-y-2'>
                    {productData.specifications.communication.optional.map(
                      (protocol, index) => (
                        <div
                          key={index}
                          className='flex items-center space-x-2'
                        >
                          <div className='w-2 h-2 bg-blue-500 rounded-full'>
                            {' '}
                          </div>
                          <span className='text-gray-700'>{protocol} </span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Additional Features */}
          <div className='grid lg:grid-cols-2 gap-8 mb-8'>
            <Card className='p-6'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4 flex items-center'>
                <Cable className='w-5 h-5 mr-2 text-blue-600' />
                {t.product.additional}
              </h3>
              <div className='space-y-3'>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    {t.product.cableLength}
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.specifications.additional.cableLength}
                  </span>
                </div>
                <div className='py-2'>
                  <span className='text-gray-600 font-medium block mb-2'>
                    {t.product.cloudCollection}
                  </span>
                  <span className='text-gray-700 text-sm'>
                    {productData.specifications.additional.cloudCollection}
                  </span>
                </div>
              </div>
            </Card>

            {/* Additional Cabinet */}
            <Card className='p-6'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4 flex items-center'>
                <Package className='w-5 h-5 mr-2 text-blue-600' />
                {t.product.additionalCabinet}
              </h3>
              <div className='space-y-3'>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    {t.product.model}
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.specifications.additionalCabinet.model}
                  </span>
                </div>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    {t.product.protectionLevel}
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {
                      productData.specifications.additionalCabinet
                        .protectionLevel
                    }
                  </span>
                </div>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    {t.product.workingTemperature}
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {
                      productData.specifications.additionalCabinet
                        .workingTemperature
                    }
                  </span>
                </div>
                <div className='py-2'>
                  <span className='text-gray-600 font-medium block mb-2'>
                    {t.product.remarks}
                  </span>
                  <span className='text-gray-700 text-sm'>
                    {productData.specifications.additionalCabinet.remarks}
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
