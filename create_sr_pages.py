#!/usr/bin/env python3

import os

# SR ürün verileri
sr_products = [
    {
        "model": "HSR-SR6-500",
        "payload": "6 kg",
        "reach": "500mm",
        "repeatability": "±0.03mm",
        "description": "HSR-SR6-500, Huashu Robotics'den gelen güçlü, hassas robottur ve \"yüksek hassasiyet, güçlü yük kapasitesi ve kompakt tasarım\" gibi hassas üretimin gereksinimlerini karşılar. Tüm makine sağlam tasarım kullanır, kompakt boyutludur ve esnek kurulum yöntemleri sunar. Bağımsız olarak geliştirilen çekirdek bileşenleri kullanarak, önemli bir maliyet avantajını korurken yüksek performans sergiler. Ağır montaj, hassas işleme, test işlemleri ve kalite kontrol gibi alanlarda yaygın olarak kullanılır.",
        "maxSpeed": {
            "J1": "360°/s, 6.28rad/s",
            "J2": "360°/s, 6.28rad/s",
            "J3": "360°/s, 6.28rad/s",
            "J4": "380°/s, 6.63rad/s",
            "J5": "380°/s, 6.63rad/s",
            "J6": "600°/s, 10.47rad/s"
        },
        "allowedInertia": {
            "J4": "0.07kg·m²",
            "J5": "0.07kg·m²",
            "J6": "0.05kg·m²"
        },
        "allowedTorque": {
            "J4": "16.8Nm",
            "J5": "8.4Nm",
            "J6": "8.4Nm"
        },
        "additionalSpecs": {
            "powerCapacity": "0.9kVA",
            "ratedPower": "0.65kW",
            "ratedCurrent": "3.2A",
            "weight": "26kg"
        },
        "features": ["Güçlü Yük", "Kompakt", "Hassas İşlem"]
    },
    {
        "model": "HSR-SR6-600",
        "payload": "6 kg",
        "reach": "600mm",
        "repeatability": "±0.03mm",
        "description": "HSR-SR6-600, Huashu Robotics'den gelen çok amaçlı, güçlü robottur ve \"yüksek hassasiyet, güçlü yük kapasitesi ve orta erişim\" gibi hassas üretimin gereksinimlerini karşılar. Tüm makine dengeli tasarım kullanır, orta boyutludur ve esnek kurulum yöntemleri sunar. Bağımsız olarak geliştirilen çekirdek bileşenleri kullanarak, önemli bir maliyet avantajını korurken yüksek performans sergiler. Montaj, paletleme, CNC besleme ve kalite kontrol gibi alanlarda yaygın olarak kullanılır.",
        "maxSpeed": {
            "J1": "350°/s, 6.11rad/s",
            "J2": "350°/s, 6.11rad/s",
            "J3": "350°/s, 6.11rad/s",
            "J4": "370°/s, 6.46rad/s",
            "J5": "370°/s, 6.46rad/s",
            "J6": "590°/s, 10.30rad/s"
        },
        "allowedInertia": {
            "J4": "0.08kg·m²",
            "J5": "0.08kg·m²",
            "J6": "0.055kg·m²"
        },
        "allowedTorque": {
            "J4": "18.2Nm",
            "J5": "9.1Nm",
            "J6": "9.1Nm"
        },
        "additionalSpecs": {
            "powerCapacity": "0.95kVA",
            "ratedPower": "0.7kW",
            "ratedCurrent": "3.4A",
            "weight": "28kg"
        },
        "features": ["Orta Erişim", "Güçlü Yük", "Esnek Kullanım"]
    },
    {
        "model": "HSR-SR10-600",
        "payload": "10 kg",
        "reach": "600mm",
        "repeatability": "±0.05mm",
        "description": "HSR-SR10-600, Huashu Robotics'den gelen güçlü, endüstriyel robottur ve \"yüksek hassasiyet, yüksek yük kapasitesi ve güçlü motor\" gibi ağır üretimin gereksinimlerini karşılar. Tüm makine güçlü tasarım kullanır, kompakt boyutludur ve esnek kurulum yöntemleri sunar. Bağımsız olarak geliştirilen çekirdek bileşenleri kullanarak, önemli bir maliyet avantajını korurken yüksek performans sergiler. Ağır montaj, metal işleme, kaynak ve endüstriyel uygulamalarda yaygın olarak kullanılır.",
        "maxSpeed": {
            "J1": "320°/s, 5.58rad/s",
            "J2": "320°/s, 5.58rad/s",
            "J3": "320°/s, 5.58rad/s",
            "J4": "340°/s, 5.93rad/s",
            "J5": "340°/s, 5.93rad/s",
            "J6": "550°/s, 9.60rad/s"
        },
        "allowedInertia": {
            "J4": "0.12kg·m²",
            "J5": "0.12kg·m²",
            "J6": "0.08kg·m²"
        },
        "allowedTorque": {
            "J4": "28.5Nm",
            "J5": "14.2Nm",
            "J6": "14.2Nm"
        },
        "additionalSpecs": {
            "powerCapacity": "1.2kVA",
            "ratedPower": "0.9kW",
            "ratedCurrent": "4.2A",
            "weight": "32kg"
        },
        "features": ["Yüksek Yük", "Güçlü Motor", "Dayanıklı"]
    },
    {
        "model": "HSR-SR10-800",
        "payload": "10 kg",
        "reach": "800mm",
        "repeatability": "±0.05mm",
        "description": "HSR-SR10-800, Huashu Robotics'den gelen güçlü, geniş erişimli robottur ve \"yüksek hassasiyet, yüksek yük kapasitesi ve geniş erişim\" gibi endüstriyel üretimin gereksinimlerini karşılar. Tüm makine güçlü tasarım kullanır, geniş erişim sunar ve esnek kurulum yöntemleri sağlar. Bağımsız olarak geliştirilen çekirdek bileşenleri kullanarak, önemli bir maliyet avantajını korurken yüksek performans sergiler. Paletleme, büyük montaj, malzeme taşıma ve endüstriyel uygulamalarda yaygın olarak kullanılır.",
        "maxSpeed": {
            "J1": "300°/s, 5.24rad/s",
            "J2": "300°/s, 5.24rad/s",
            "J3": "300°/s, 5.24rad/s",
            "J4": "320°/s, 5.58rad/s",
            "J5": "320°/s, 5.58rad/s",
            "J6": "520°/s, 9.08rad/s"
        },
        "allowedInertia": {
            "J4": "0.15kg·m²",
            "J5": "0.15kg·m²",
            "J6": "0.1kg·m²"
        },
        "allowedTorque": {
            "J4": "32.4Nm",
            "J5": "16.2Nm",
            "J6": "16.2Nm"
        },
        "additionalSpecs": {
            "powerCapacity": "1.4kVA",
            "ratedPower": "1.1kW",
            "ratedCurrent": "4.8A",
            "weight": "36kg"
        },
        "features": ["Geniş Erişim", "Yüksek Yük", "Çok Amaçlı"]
    },
    {
        "model": "HSR-SR20-800",
        "payload": "20 kg",
        "reach": "800mm",
        "repeatability": "±0.08mm",
        "description": "HSR-SR20-800, Huashu Robotics'den gelen ağır yük taşıyan, güçlü robottur ve \"yüksek hassasiyet, ağır yük kapasitesi ve güçlü yapı\" gibi ağır endüstriyel üretimin gereksinimlerini karşılar. Tüm makine ağır tasarım kullanır, güçlü yapıya sahiptir ve esnek kurulum yöntemleri sunar. Bağımsız olarak geliştirilen çekirdek bileşenleri kullanarak, önemli bir maliyet avantajını korurken yüksek performans sergiler. Ağır sanayi, otomotiv, pres besleme ve endüstriyel uygulamalarda yaygın olarak kullanılır.",
        "maxSpeed": {
            "J1": "270°/s, 4.71rad/s",
            "J2": "270°/s, 4.71rad/s",
            "J3": "270°/s, 4.71rad/s",
            "J4": "290°/s, 5.06rad/s",
            "J5": "290°/s, 5.06rad/s",
            "J6": "480°/s, 8.38rad/s"
        },
        "allowedInertia": {
            "J4": "0.22kg·m²",
            "J5": "0.22kg·m²",
            "J6": "0.15kg·m²"
        },
        "allowedTorque": {
            "J4": "48.6Nm",
            "J5": "24.3Nm",
            "J6": "24.3Nm"
        },
        "additionalSpecs": {
            "powerCapacity": "1.8kVA",
            "ratedPower": "1.4kW",
            "ratedCurrent": "6.2A",
            "weight": "45kg"
        },
        "features": ["Ağır Yük", "Güçlü Yapı", "Endüstriyel"]
    },
    {
        "model": "HSR-SR20-1000",
        "payload": "20 kg",
        "reach": "1000mm",
        "repeatability": "±0.08mm",
        "description": "HSR-SR20-1000, Huashu Robotics'den gelen maksimum erişimli, ağır yük taşıyan robottur ve \"yüksek hassasiyet, ağır yük kapasitesi ve maksimum erişim\" gibi büyük endüstriyel üretimin gereksinimlerini karşılar. Tüm makine profesyonel tasarım kullanır, maksimum erişim sunar ve esnek kurulum yöntemleri sağlar. Bağımsız olarak geliştirilen çekirdek bileşenleri kullanarak, önemli bir maliyet avantajını korurken yüksek performans sergiler. Büyük montaj, yükleme/boşaltma, endüstriyel uygulamalarda yaygın olarak kullanılır.",
        "maxSpeed": {
            "J1": "250°/s, 4.36rad/s",
            "J2": "250°/s, 4.36rad/s",
            "J3": "250°/s, 4.36rad/s",
            "J4": "270°/s, 4.71rad/s",
            "J5": "270°/s, 4.71rad/s",
            "J6": "450°/s, 7.85rad/s"
        },
        "allowedInertia": {
            "J4": "0.28kg·m²",
            "J5": "0.28kg·m²",
            "J6": "0.18kg·m²"
        },
        "allowedTorque": {
            "J4": "56.8Nm",
            "J5": "28.4Nm",
            "J6": "28.4Nm"
        },
        "additionalSpecs": {
            "powerCapacity": "2.2kVA",
            "ratedPower": "1.8kW",
            "ratedCurrent": "7.8A",
            "weight": "52kg"
        },
        "features": ["Maksimum Erişim", "Ağır Yük", "Profesyonel"]
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
  category: 'SR Serisi (Hassas Endüstriyel Altı Eksenli)',
  keywords: 'Hassas Endüstriyel Robotlar',
  axes: 6,
  payload: '{{PAYLOAD}}',
  reach: '{{REACH}}',
  description: `{{DESCRIPTION}}`,
  image: '/placeholder-robot.svg',
  specifications: {
    model: '{{MODEL}}',
    dof: '6',
    payload: '{{PAYLOAD_SPEC}}',
    reach: '{{REACH}}',
    repeatability: '{{REPEATABILITY}}',
  },
  movementRange: {
    J1: '±180°',
    J2: '-135°/+45°',
    J3: '-10°/+200°',
    J4: '±180°',
    J5: '±120°',
    J6: '±360°',
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
for product in sr_products:
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

print("🎉 Tüm SR ürün sayfaları başarıyla oluşturuldu!")
