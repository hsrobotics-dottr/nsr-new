'use client';

export const dynamic = 'force-dynamic';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronRight, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

// Product data
const productData = {
  model: 'HSR-BR612-1100',
  category: 'BR Serisi (Endüstriyel Altı Eksenli)',
  keywords: 'Endüstriyel Robotlar',
  axes: 6,
  payload: '12 kg',
  reach: '1100mm',
  description: `Yepyeni nesil robot HSR-BR612-1100, BR serisi robotlar temelinde daha da optimize edilmiş ve yükseltilmiş olup, cam makineleri, kenar taşlama makineleri, gravür ve freze makineleri ve diğer makine aletleri için tasarlanmış yüksek koruma ön uç versiyonu sunar. Herhangi bir yönden su püskürtme veya daldırma gereksinimlerini karşılar, kol ön ucu IP67 koruma seviyesine ulaşır. Daha hızlı hız, daha güçlü yük kapasitesi ve daha yüksek koruma standartları özelliklerine sahiptir.`,
  image: '/img/industrial/BR/HSR-BR612-1100.png',
  specifications: {
    model: 'HSR-BR612-1100',
    dof: '6',
    payload: '12kg',
    reach: '1100mm',
    repeatability: '±0.05mm',
  },
  movementRange: {
    J1: '±155°',
    J2: '-178° to -2°',
    J3: '+120° to +420°',
    J4: '±360°',
    J5: '±161°',
    J6: '±360°',
  },
  maxSpeed: {
    J1: '360°/s (6.28 rad/s)',
    J2: '250°/s (4.36 rad/s)',
    J3: '360°/s (6.28 rad/s)',
    J4: '480°/s (8.38 rad/s)',
    J5: '360°/s (6.28 rad/s)',
    J6: '450°/s (7.85 rad/s)',
  },
  allowedInertia: {
    J4: '0.52 kg·㎡',
    J5: '1.5 kg·㎡',
    J6: '1.1 kg·㎡',
  },
  allowedTorque: {
    J4: '20.3 Nm',
    J5: '42 Nm',
    J6: '36 Nm',
  },
  environment: {
    temperature: '0°C – 45°C',
    humidity: '20% – 80%',
    other:
      'Yanıcı, patlayıcı veya aşındırıcı gaz/sıvılarla temas etmekten kaçının. Elektronik gürültü kaynaklarından (örn. plazma) uzak durun.',
  },
  // Additional specifications for HSR-BR612-1100
  additionalSpecs: {
    teachPendantCable: '8 metre',
    mainUnitCabinetCable: '6 metre',
    ioParameters: 'Dijital: 32 giriş (NPN), 32 çıkış (NPN)',
    reservedSignalLines: '12 (havacılık fişi)',
    reservedAirway: '1 x Φ8',
    powerCapacity: '2.8 kVA',
    ratedPower: '2.23 kW',
    ratedVoltage: 'Tek faz AC220V',
    ratedCurrent: '12.1A',
    protectionLevel: 'IP54 (kol IP67)',
    installationMethod: 'Zemin / Ters / Duvar Kurulumu',
    weight: '65kg',
    cabinetProtectionLevel: 'IP53',
    cabinetWeight: '15kg',
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
      additionalSpecs: 'Ek Teknik Özellikler',
      model: 'Model',
      dof: 'Serbestlik Derecesi',
      repeatability: 'Tekrarlanabilirlik',
      temperature: 'Sıcaklık',
      humidity: 'Nem',
      other: 'Diğer',
      teachPendantCable: 'Öğretme Cihazı Kablosu',
      mainUnitCabinetCable: 'Ana Ünite Kabinet Kablosu',
      ioParameters: 'Giriş/Çıkış Parametreleri',
      reservedSignalLines: 'Rezerve Sinyal Hatları',
      reservedAirway: 'Rezerve Hava Yolu',
      powerCapacity: 'Güç Kapasitesi',
      ratedPower: 'Nominal Güç',
      ratedVoltage: 'Nominal Gerilim',
      ratedCurrent: 'Nominal Akım',
      protectionLevel: 'Koruma Seviyesi',
      installationMethod: 'Kurulum Yöntemi',
      weight: 'Ağırlık',
      cabinetProtectionLevel: 'Kabinet Koruma Seviyesi',
      cabinetWeight: 'Kabinet Ağırlığı',
    },
  },
};

export default function HSRBR6121100Page() {
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

              {/* Description */}
              <div>
                <p className='text-gray-600 leading-relaxed'>
                  {productData.description}
                </p>
              </div>

              {/* Contact Button */}
              <div>
                <Button
                  onClick={() => setIsContactFormOpen(true)}
                  className='w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold'
                >
                  <MessageCircle className='w-5 h-5 mr-2' />
                  {t.product.contactForConsultation}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4 max-w-7xl'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-800 mb-4'>
              {t.product.specifications}
            </h2>
          </div>

          <div className='grid lg:grid-cols-2 gap-8'>
            {/* Basic Specs */}
            <Card className='p-6'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4'>
                Temel Özellikler
              </h3>
              <div className='space-y-3'>
                <div className='flex justify-between'>
                  <span className='text-gray-600'>{t.product.model}:</span>
                  <span className='font-medium'>
                    {productData.specifications.model}
                  </span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-600'>{t.product.dof}:</span>
                  <span className='font-medium'>
                    {productData.specifications.dof}
                  </span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-600'>{t.product.payload}:</span>
                  <span className='font-medium'>
                    {productData.specifications.payload}
                  </span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-600'>{t.product.reach}:</span>
                  <span className='font-medium'>
                    {productData.specifications.reach}
                  </span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-600'>
                    {t.product.repeatability}:
                  </span>
                  <span className='font-medium'>
                    {productData.specifications.repeatability}
                  </span>
                </div>
              </div>
            </Card>

            {/* Movement Range */}
            <Card className='p-6'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4'>
                {t.product.movementRange}
              </h3>
              <div className='space-y-3'>
                {Object.entries(productData.movementRange).map(
                  ([axis, range]) => (
                    <div key={axis} className='flex justify-between'>
                      <span className='text-gray-600'>{axis}:</span>
                      <span className='font-medium'>{range}</span>
                    </div>
                  )
                )}
              </div>
            </Card>
          </div>

          <div className='grid lg:grid-cols-2 gap-8 mt-8'>
            {/* Max Speed */}
            <Card className='p-6'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4'>
                {t.product.maxSpeed}
              </h3>
              <div className='space-y-3'>
                {Object.entries(productData.maxSpeed).map(([axis, speed]) => (
                  <div key={axis} className='flex justify-between'>
                    <span className='text-gray-600'>{axis}:</span>
                    <span className='font-medium'>{speed}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Allowed Inertia */}
            <Card className='p-6'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4'>
                {t.product.allowedInertia}
              </h3>
              <div className='space-y-3'>
                {Object.entries(productData.allowedInertia).map(
                  ([axis, inertia]) => (
                    <div key={axis} className='flex justify-between'>
                      <span className='text-gray-600'>{axis}:</span>
                      <span className='font-medium'>{inertia}</span>
                    </div>
                  )
                )}
              </div>
            </Card>
          </div>

          <div className='grid lg:grid-cols-2 gap-8 mt-8'>
            {/* Allowed Torque */}
            <Card className='p-6'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4'>
                {t.product.allowedTorque}
              </h3>
              <div className='space-y-3'>
                {Object.entries(productData.allowedTorque).map(
                  ([axis, torque]) => (
                    <div key={axis} className='flex justify-between'>
                      <span className='text-gray-600'>{axis}:</span>
                      <span className='font-medium'>{torque}</span>
                    </div>
                  )
                )}
              </div>
            </Card>

            {/* Environment */}
            <Card className='p-6'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4'>
                {t.product.environment}
              </h3>
              <div className='space-y-3'>
                <div className='flex justify-between'>
                  <span className='text-gray-600'>
                    {t.product.temperature}:
                  </span>
                  <span className='font-medium'>
                    {productData.environment.temperature}
                  </span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-600'>{t.product.humidity}:</span>
                  <span className='font-medium'>
                    {productData.environment.humidity}
                  </span>
                </div>
                {productData.environment.other && (
                  <div className='text-sm text-gray-600 mt-2'>
                    {productData.environment.other}
                  </div>
                )}
              </div>
            </Card>
          </div>

          {/* Additional Specifications */}
          <div className='mt-8'>
            <Card className='p-6'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4'>
                {t.product.additionalSpecs}
              </h3>
              <div className='grid lg:grid-cols-2 gap-6'>
                <div className='space-y-3'>
                  <div className='flex justify-between'>
                    <span className='text-gray-600'>
                      {t.product.teachPendantCable}:
                    </span>
                    <span className='font-medium'>
                      {productData.additionalSpecs.teachPendantCable}
                    </span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gray-600'>
                      {t.product.mainUnitCabinetCable}:
                    </span>
                    <span className='font-medium'>
                      {productData.additionalSpecs.mainUnitCabinetCable}
                    </span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gray-600'>
                      {t.product.ioParameters}:
                    </span>
                    <span className='font-medium'>
                      {productData.additionalSpecs.ioParameters}
                    </span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gray-600'>
                      {t.product.reservedSignalLines}:
                    </span>
                    <span className='font-medium'>
                      {productData.additionalSpecs.reservedSignalLines}
                    </span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gray-600'>
                      {t.product.reservedAirway}:
                    </span>
                    <span className='font-medium'>
                      {productData.additionalSpecs.reservedAirway}
                    </span>
                  </div>
                </div>
                <div className='space-y-3'>
                  <div className='flex justify-between'>
                    <span className='text-gray-600'>
                      {t.product.powerCapacity}:
                    </span>
                    <span className='font-medium'>
                      {productData.additionalSpecs.powerCapacity}
                    </span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gray-600'>
                      {t.product.ratedPower}:
                    </span>
                    <span className='font-medium'>
                      {productData.additionalSpecs.ratedPower}
                    </span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gray-600'>
                      {t.product.ratedVoltage}:
                    </span>
                    <span className='font-medium'>
                      {productData.additionalSpecs.ratedVoltage}
                    </span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gray-600'>
                      {t.product.ratedCurrent}:
                    </span>
                    <span className='font-medium'>
                      {productData.additionalSpecs.ratedCurrent}
                    </span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gray-600'>
                      {t.product.protectionLevel}:
                    </span>
                    <span className='font-medium'>
                      {productData.additionalSpecs.protectionLevel}
                    </span>
                  </div>
                </div>
              </div>
              <div className='grid lg:grid-cols-2 gap-6 mt-6'>
                <div className='space-y-3'>
                  <div className='flex justify-between'>
                    <span className='text-gray-600'>
                      {t.product.installationMethod}:
                    </span>
                    <span className='font-medium'>
                      {productData.additionalSpecs.installationMethod}
                    </span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gray-600'>{t.product.weight}:</span>
                    <span className='font-medium'>
                      {productData.additionalSpecs.weight}
                    </span>
                  </div>
                </div>
                <div className='space-y-3'>
                  <div className='flex justify-between'>
                    <span className='text-gray-600'>
                      {t.product.cabinetProtectionLevel}:
                    </span>
                    <span className='font-medium'>
                      {productData.additionalSpecs.cabinetProtectionLevel}
                    </span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gray-600'>
                      {t.product.cabinetWeight}:
                    </span>
                    <span className='font-medium'>
                      {productData.additionalSpecs.cabinetWeight}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {isContactFormOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4'>
          <div className='bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto'>
            <div className='p-6 border-b border-gray-200'>
              <div className='flex items-center justify-between'>
                <h3 className='text-xl font-semibold text-gray-800'>
                  Ürün Bilgisi
                </h3>
                <button
                  onClick={() => setIsContactFormOpen(false)}
                  className='text-gray-400 hover:text-gray-600 transition-colors'
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
