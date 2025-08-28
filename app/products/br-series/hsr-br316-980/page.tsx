'use client';

import React from 'react';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/language-context';
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
  model: 'HSR-BR316-980',
  category: 'BR Serisi (Endüstriyel Altı Eksenli)',
  keywords: 'Endüstriyel Robotlar',
  axes: 3,
  payload: '16 kg',
  reach: '980mm',
  description: `HSR-BR316-980, PCB kart üretim endüstrisi için öncelikle geliştirilmiş olup, PCB kart üretimi için üç eksenli veya dört eksenli pick-and-place robotların ihtiyaçlarını karşılamak üzere tasarlanmıştır. Kompakt yapısı, küçük boyutu, hafif ağırlığı, yüksek eklem hızı ve hızlı dinamik tepkisi, 6 eksenli robotların kullanımından kaynaklanan maliyet israfını etkili bir şekilde azaltır.`,
  image: '/img/industrial/BR/HSR-BR316-980.png',
  specifications: {
    model: 'HSR-BR316-980',
    dof: '3',
    payload: '16kg',
    reach: '980mm',
    repeatability: '±0.05mm',
  },
  movementRange: {
    J1: '-178°/-2°',
    J2: '+130°/+430°',
    J3: '±161°',
    J4: '-',
    J5: '-',
    J6: '-',
  },
  maxSpeed: {
    J1: '217°/s，3.78rad/s',
    J2: '357°/s，6.23rad/s',
    J3: '360°/s，6.28rad/s',
    J4: '-',
    J5: '-',
    J6: '-',
  },
  allowedInertia: {
    J6: '1.2kg㎡ (J3)',
    J5: '-',
    J4: '-',
  },
  allowedTorque: {
    J6: '43Nm (J3)',
    J5: '-',
    J4: '-',
  },
  environment: {
    temperature: '0°C～45°C',
    humidity: '20%～80%',
    other:
      'Avoid contact with flammable, explosive, or corrosive gases and liquids. Keep away from electronic noise sources (plasma).',
  },
  // Additional specifications for HSR-BR316-980
  additionalSpecs: {
    teachPendantCable: '8m',
    mainUnitCabinetCable: '6m',
    ioParameters: 'Digital: 32-bit input (NPN), 32-bit output (NPN)',
    reservedSignalLines: '12-bit (Aviation connector)',
    reservedAirway: '2*Φ8',
    powerCapacity: '2.45kVA',
    ratedPower: '2.28kW',
    ratedVoltage: 'Single-phase AC220V',
    ratedCurrent: '13A',
    protectionLevel: 'IP67',
    installationMethod: 'Floor/Inverted/Side-mounted',
    weight: '64kg',
    cabinetProtectionLevel: 'IP54',
    cabinetWeight: '15kg',
  },
};

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
      other: 'Diğer',
      powerCapacity: 'Güç Kapasitesi',
      ratedPower: 'Nominal Güç',
      ratedVoltage: 'Nominal Gerilim',
      ratedCurrent: 'Nominal Akım',
      protectionLevel: 'Koruma Seviyesi',
      installationMethod: 'Kurulum Yöntemi',
      weight: 'Ana Ünite Ağırlığı',
      cabinetWeight: 'Kabin Ağırlığı',
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
      other: 'Other',
      powerCapacity: 'Power Capacity',
      ratedPower: 'Rated Power',
      ratedVoltage: 'Rated Voltage',
      ratedCurrent: 'Rated Current',
      protectionLevel: 'Protection Level',
      installationMethod: 'Installation Method',
      weight: 'Main Unit Weight',
      cabinetWeight: 'Cabinet Weight',
      cabinetProtectionLevel: 'Cabinet Protection Level',
      requestQuote: 'Request Quote',
      contactUs: 'Contact Us',
    },
  },
};

export default function HSRBR316980Page() {
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
                    ±0.05mm Hassasiyet
                  </span>
                </div>
                <div className='flex items-center space-x-3'>
                  <div className='w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center'>
                    <Zap className='w-5 h-5 text-blue-600' />
                  </div>
                  <span className='text-sm font-medium text-gray-700'>
                    360°/s Maksimum Hız
                  </span>
                </div>
                <div className='flex items-center space-x-3'>
                  <div className='w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center'>
                    <Package className='w-5 h-5 text-purple-600' />
                  </div>
                  <span className='text-sm font-medium text-gray-700'>
                    16kg Yük Kapasitesi
                  </span>
                </div>
                <div className='flex items-center space-x-3'>
                  <div className='w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center'>
                    <Settings className='w-5 h-5 text-orange-600' />
                  </div>
                  <span className='text-sm font-medium text-gray-700'>
                    980mm Kol Açıklığı
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
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4'>
          <div className='bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto'>
            <div className='flex justify-between items-center p-6 border-b'>
              <div>
                <h3 className='text-lg font-semibold text-gray-900'>
                  İletişim Formu
                </h3>
                <p className='text-sm text-gray-500'>
                  Bu ürün hakkında bilgi almak için formu doldurun.
                </p>
              </div>
              <button
                onClick={() => setIsContactFormOpen(false)}
                className='text-gray-400 hover:text-gray-600'
              >
                <svg
                  className='w-6 h-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
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
            <form className='p-6 space-y-4'>
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Ad Soyad *
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  required
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                />
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  E-posta *
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  required
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                />
              </div>
              <div>
                <label
                  htmlFor='phone'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Telefon
                </label>
                <input
                  type='tel'
                  id='phone'
                  name='phone'
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                />
              </div>
              <div>
                <label
                  htmlFor='company'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Şirket
                </label>
                <input
                  type='text'
                  id='company'
                  name='company'
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                />
              </div>
              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Mesaj *
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows={4}
                  required
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                />
              </div>
              <button
                type='submit'
                className='w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200'
              >
                Gönder
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
