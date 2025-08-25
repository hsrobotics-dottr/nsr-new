#!/usr/bin/env python3

import os

# MD ürün verileri
md_products = [
    {
        "model": "HSR-MD410-1500",
        "payload": "10 kg",
        "reach": "1500mm",
        "repeatability": "±0.1mm",
        "description": "HSR-MD410-1500, Huashu Robotics'den gelen güçlü, dört eksenli robottur ve \"yüksek yük kapasitesi, geniş erişim ve güçlü yapı\" gibi ağır endüstriyel üretimin gereksinimlerini karşılar. Tüm makine sağlam tasarım kullanır, geniş erişim sunar ve esnek kurulum yöntemleri sağlar. Bağımsız olarak geliştirilen çekirdek bileşenleri kullanarak, önemli bir maliyet avantajını korurken yüksek performans sergiler. Paletleme, yükleme/boşaltma, malzeme taşıma ve endüstriyel uygulamalarda yaygın olarak kullanılır.",
        "maxSpeed": {
            "J1": "250°/s, 4.36rad/s",
            "J2": "250°/s, 4.36rad/s",
            "J3": "250°/s, 4.36rad/s",
            "J4": "300°/s, 5.24rad/s"
        },
        "allowedInertia": {
            "J1": "0.15kg·m²",
            "J2": "0.15kg·m²",
            "J3": "0.12kg·m²",
            "J4": "0.08kg·m²"
        },
        "allowedTorque": {
            "J1": "45.2Nm",
            "J2": "45.2Nm",
            "J3": "35.8Nm",
            "J4": "25.4Nm"
        },
        "additionalSpecs": {
            "powerCapacity": "2.5kVA",
            "ratedPower": "2.0kW",
            "ratedCurrent": "9.8A",
            "weight": "45kg"
        },
        "features": ["4 Eksen Tasarım", "Yüksek Yük", "Geniş Erişim"]
    },
    {
        "model": "HSR-MD4110-2500",
        "payload": "110 kg",
        "reach": "2500mm",
        "repeatability": "±0.15mm",
        "description": "HSR-MD4110-2500, Huashu Robotics'den gelen ağır yük taşıyan, dört eksenli robottur ve \"maksimum yük kapasitesi, uzun erişim ve endüstriyel güç\" gibi ağır endüstriyel üretimin en yüksek gereksinimlerini karşılar. Tüm makine ağır tasarım kullanır, maksimum erişim sunar ve esnek kurulum yöntemleri sağlar. Bağımsız olarak geliştirilen çekirdek bileşenleri kullanarak, önemli bir maliyet avantajını korurken yüksek performans sergiler. Ağır sanayi, otomotiv, metal işleme ve endüstriyel uygulamalarda yaygın olarak kullanılır.",
        "maxSpeed": {
            "J1": "180°/s, 3.14rad/s",
            "J2": "180°/s, 3.14rad/s",
            "J3": "180°/s, 3.14rad/s",
            "J4": "220°/s, 3.84rad/s"
        },
        "allowedInertia": {
            "J1": "0.35kg·m²",
            "J2": "0.35kg·m²",
            "J3": "0.28kg·m²",
            "J4": "0.18kg·m²"
        },
        "allowedTorque": {
            "J1": "125.6Nm",
            "J2": "125.6Nm",
            "J3": "98.4Nm",
            "J4": "65.2Nm"
        },
        "additionalSpecs": {
            "powerCapacity": "5.2kVA",
            "ratedPower": "4.5kW",
            "ratedCurrent": "22.5A",
            "weight": "85kg"
        },
        "features": ["Ağır Yük Kapasitesi", "Uzun Erişim", "Endüstriyel Güç"]
    }
]

# Template
template = """'use client';

import Footer from '@/components/footer';
import Header from '@/components/header';
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
  model: '{{MODEL}}',
  category: 'MD Serisi (Dört Eksenli Endüstriyel)',
  keywords: 'Dört Eksenli Endüstriyel Robotlar',
  axes: 4,
  payload: '{{PAYLOAD}}',
  reach: '{{REACH}}',
  description: `{{DESCRIPTION}}`,
  image: '/placeholder-robot.svg',
  specifications: {
    model: '{{MODEL}}',
    dof: '4',
    payload: '{{PAYLOAD_SPEC}}',
    reach: '{{REACH}}',
    repeatability: '{{REPEATABILITY}}',
  },
  movementRange: {
    J1: '±180°',
    J2: '-135°/+45°',
    J3: '-10°/+200°',
    J4: '±180°',
  },
  maxSpeed: {{MAX_SPEED}},
  allowedInertia: {{ALLOWED_INERTIA}},
  allowedTorque: {{ALLOWED_TORQUE}},
  environment: {
    temperature: '0-45°C',
    humidity: '20%-80%',
  },
  // Additional specifications for {{MODEL}}
  additionalSpecs: {
    teachPendantCable: '8 metre',
    mainUnitCabinetCable: '3 metre',
    ioParameters: 'Dijital: 32-bit giriş (NPN), 32-bit çıkış (NPN)',
    reservedSignalLines: '12 bit',
    reservedAirway: '1xΦ6',
    powerCapacity: '{{POWER_CAPACITY}}',
    ratedPower: '{{RATED_POWER}}',
    ratedVoltage: '220V',
    ratedCurrent: '{{RATED_CURRENT}}',
    protectionLevel: 'IP54',
    installationMethod: 'Zemin/Yan/Ters Kurulum',
    weight: '{{WEIGHT}}',
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
      contactForConsultation: 'Danışma için Mesaj Bırakın',
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
      contactForConsultation: 'Leave a Message for Consultation',
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

export default function {{COMPONENT_NAME}}() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const t = translations[currentLang as keyof typeof translations];

  return (
    <div className='min-h-screen bg-white'>
      <Header />

      {/* Breadcrumb */}
      <section className='pt-24 pb-6 bg-gray-50 border-b border-gray-200'>
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
                    {{FEATURE_1}}
                  </span>
                </div>
                <div className='flex items-center space-x-3'>
                  <div className='w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center'>
                    <Package className='w-5 h-5 text-purple-600' />
                  </div>
                  <span className='text-sm font-medium text-gray-700'>
                    {{FEATURE_2}}
                  </span>
                </div>
                <div className='flex items-center space-x-3'>
                  <div className='w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center'>
                    <Settings className='w-5 h-5 text-orange-600' />
                  </div>
                  <span className='text-sm font-medium text-gray-700'>
                    {{FEATURE_3}}
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
            <Button
              variant='outline'
              className='border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-xl font-semibold transition-all duration-300 bg-transparent'
            >
              Hemen Ara
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}"""

# Her ürün için sayfa oluştur
for product in md_products:
    model = product["model"]
    slug = model.lower().replace("hsr-", "hsr-")
    component_name = model.replace("-", "").replace("HSR", "HSR")

    # Template değişkenlerini değiştir
    content = template
    content = content.replace("{{MODEL}}", model)
    content = content.replace("{{PAYLOAD}}", product["payload"])
    content = content.replace("{{PAYLOAD_SPEC}}", product["payload"].replace(" ", ""))
    content = content.replace("{{REACH}}", product["reach"])
    content = content.replace("{{REPEATABILITY}}", product["repeatability"])
    content = content.replace("{{DESCRIPTION}}", product["description"])
    content = content.replace("{{COMPONENT_NAME}}", component_name + "Page")

    # JSON formatında verileri ekle
    import json
    content = content.replace("{{MAX_SPEED}}", json.dumps(product["maxSpeed"], ensure_ascii=False, indent=4))
    content = content.replace("{{ALLOWED_INERTIA}}", json.dumps(product["allowedInertia"], ensure_ascii=False, indent=4))
    content = content.replace("{{ALLOWED_TORQUE}}", json.dumps(product["allowedTorque"], ensure_ascii=False, indent=4))

    # Ek özellikler
    content = content.replace("{{POWER_CAPACITY}}", product["additionalSpecs"]["powerCapacity"])
    content = content.replace("{{RATED_POWER}}", product["additionalSpecs"]["ratedPower"])
    content = content.replace("{{RATED_CURRENT}}", product["additionalSpecs"]["ratedCurrent"])
    content = content.replace("{{WEIGHT}}", product["additionalSpecs"]["weight"])

    # Özellikler
    features = product["features"]
    content = content.replace("{{FEATURE_1}}", features[0] if len(features) > 0 else "Yüksek Hız")
    content = content.replace("{{FEATURE_2}}", features[1] if len(features) > 1 else "Yüksek Hassasiyet")
    content = content.replace("{{FEATURE_3}}", features[2] if len(features) > 2 else "Kompakt Tasarım")

    # Dosyayı oluştur
    file_path = f"app/products/{slug}/page.tsx"
    print(f"✅ Oluşturuluyor: {file_path}")

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

print("🎉 Tüm MD ürün sayfaları başarıyla oluşturuldu!")
