'use client';

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
model: 'HST-F-XY3',
category: 'Yüzer Flanş Sistemi',
keywords: 'Standart Çevresel Ürünler',
payload: '3 kg',
precision: '±0.03mm',
reach: '80 x 80mm',
description: `HST-F-XY3, Huashu Robotics'den gelen düz yüzer flanş sistemidir. Robot uç aracını veya diğer mekanizmaları X ve Y ekseninde küçük doğrusal hareket yaparak, paletleme, besleme, montaj, kavrama ve işleme sürecinde robot ile iş parçası ekseni arasındaki ofset hatasını telafi edebilir. Tüm makine hafif tasarım kullanır, küçük boyutludur ve esnek kurulum yöntemleri sunar. Bağımsız olarak geliştirilen çekirdek bileşenleri kullanarak, önemli bir maliyet avantajını korurken yüksek performans sergiler. Montaj, kalite kontrol ve hassas işlemler gibi alanlarda yaygın olarak kullanılır.`,
image: '/img/floatingflange/floating-flange.png',
    specifications: {
    model: 'HST-F-XY3',
payload: '3kg',
precision: '±0.03mm',
reach: '80 x 80mm',
thickness: '48.5mm',
weight: '670g',
},
  movementRange: {
'X Ekseni': '±2mm',
'Y Ekseni': '±2mm',
'Z Ekseni': 'Sabit',
},
  maxSpeed: {
'X Ekseni': '2mm/s',
'Y Ekseni': '2mm/s',
'Z Ekseni': 'Sabit',
},
  allowedInertia: {
'X Ekseni': '0.05kg·m²',
'Y Ekseni': '0.05kg·m²',
'Z Ekseni': '0.04kg·m²',
},
  allowedTorque: {
'X Ekseni': '12.6Nm',
'Y Ekseni': '6.4Nm',
'Z Ekseni': '6.4Nm',
},
    environment: {
    temperature: '0-60°C',
humidity: '20%-95%',
},
// Additional specifications for HST-F-XY3
    additionalSpecs: {
    material: 'Havacılık Alüminyumu',
lockingMechanism: 'Yüksek Dayanımlı Alaşım Çeliği',
floatingDirection: 'X, Y',
applicableTemperature: '-20°C - 60°C',
minimumLockingAirPressure: '0.4MPa',
powerCapacity: '0.1kVA',
ratedPower: '0.05kW',
ratedVoltage: 'Tek faz AC220V',
ratedCurrent: '0.5A',
protectionLevel: 'IP54',
installationMethod: 'Zemin/Yan Kurulum',
weight: '670g',
cabinetWeight: 'N/A',
cabinetProtectionLevel: 'N/A',
other:
'Yanıcı, patlayıcı veya aşındırıcı gaz ve sıvılarla temas etmekten kaçının. Elektronik gürültü kaynaklarından (plazma) uzak durun.',
},
};

const currentLang = 'tr';

// Translations
const translations = {
    tr: {
    product: {
category: 'Kategori',
keywords: 'Anahtar Kelimeler',
payload: 'Yük',
precision: 'Hassasiyet',
reach: 'Boyutlar',
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
weight: 'Ana Ünite Ağırlığı',
cabinetWeight: 'Kabin Ağırlığı',
cabinetProtectionLevel: 'Kabin Koruma Seviyesi',
other: 'Diğer',
requestQuote: 'Fiyat Teklifi İste',
contactUs: 'İletişime Geç',
},
},
    en: {
    product: {
category: 'Category',
keywords: 'Keywords',
payload: 'Payload',
precision: 'Precision',
reach: 'Dimensions',
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
weight: 'Main Unit Weight',
cabinetWeight: 'Cabinet Weight',
cabinetProtectionLevel: 'Cabinet Protection Level',
other: 'Other',
requestQuote: 'Request Quote',
contactUs: 'Contact Us',
},
},
};

export default function HSTFXY3Page() {
  
const [isContactFormOpen, setIsContactFormOpen] = useState(false);
const t = translations[currentLang as keyof typeof translations];

  return (
          <div
        className='min-h-screen bg-white'>
<Header />

{/* Breadcrumb */}
            <section
        className='py-5 bg-gray-50 border-b border-gray-200'>
      <div
        className='container mx-auto px-4 max-w-7xl'>
      <nav
        className='flex items-center space-x-2 text-sm text-gray-600'>
      <span
        className='text-gray-800 font-medium'>
{productData.category}
      </span>
      <ChevronRight
        className='w-4 h-4' />
      <span
        className='text-gray-800 font-medium'>
{productData.model}
      </span>
      </nav>
      </div>
      </section>

{/* Product Header */}
            <section
        className='py-12 bg-white'>
      <div
        className='container mx-auto px-4 max-w-7xl'>
      <div
        className='grid lg:grid-cols-2 gap-12 items-start'>
{/* Product Image */}
      <div
        className='relative'>
      <div
        className='bg-gray-50 rounded-2xl p-8 flex items-center justify-center min-h-[400px]'>
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
      <div
        className='space-y-6'>
<div>
      <h1
        className='text-4xl font-bold text-gray-800 mb-4'>
{productData.model}
      </h1>
      </div>

{/* Quick Specs */}
      <div
        className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
      <Card
        className='p-4 text-center border-2 border-blue-100 bg-blue-50'>
      <div
        className='text-sm text-gray-600 mb-1'>
{t.product.payload}
      </div>
      <div
        className='text-2xl font-bold text-blue-600'>
{productData.payload}
      </div>
      </Card>
      <Card
        className='p-4 text-center border-2 border-gray-100'>
      <div
        className='text-sm text-gray-600 mb-1'>
{t.product.precision}
      </div>
      <div
        className='text-2xl font-bold text-gray-800'>
{productData.precision}
      </div>
      </Card>
      <Card
        className='p-4 text-center border-2 border-gray-100'>
      <div
        className='text-sm text-gray-600 mb-1'>
{t.product.reach}
      </div>
      <div
        className='text-2xl font-bold text-gray-800'>
{productData.reach}
      </div>
      </Card>
      </div>

{/* Action Button */}
      <div
        className='flex flex-col sm:flex-row gap-4'>
<Button
onClick={() => setIsContactFormOpen(true)}
className='w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300'
>
      <MessageCircle
        className='w-5 h-5 mr-2' />
{t.product.contactForConsultation}
      </Button>
      </div>

{/* Key Features */}
      <div
        className='grid grid-cols-2 gap-4'>
      <div
        className='flex items-center space-x-3'>
      <div
        className='w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center'>
      <Settings
        className='w-5 h-5 text-green-600' />
      </div>
      <span
        className='text-sm font-medium text-gray-700'>
±0.03mm Hassasiyet
      </span>
      </div>
      <div
        className='flex items-center space-x-3'>
      <div
        className='w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center'>
      <Zap
        className='w-5 h-5 text-blue-600' />
      </div>
      <span
        className='text-sm font-medium text-gray-700'>
2mm/s Maksimum Hız
      </span>
      </div>
      <div
        className='flex items-center space-x-3'>
      <div
        className='w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center'>
      <Package
        className='w-5 h-5 text-purple-600' />
      </div>
      <span
        className='text-sm font-medium text-gray-700'>
3kg Yük Kapasitesi
      </span>
      </div>
      <div
        className='flex items-center space-x-3'>
      <div
        className='w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center'>
      <Settings
        className='w-5 h-5 text-orange-600' />
      </div>
      <span
        className='text-sm font-medium text-gray-700'>
80 x 80mm Boyutlar
      </span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>

{/* Product Description */}
            <section
        className='py-12 bg-gray-50'>
      <div
        className='container mx-auto px-4 max-w-7xl'>
      <div
        className='rounded-lg border bg-card text-card-foreground shadow-sm p-8'>
      <h2
        className='text-2xl font-bold text-gray-800 mb-6'>
Ürün Açıklaması
      </h2>
      <p
        className='text-gray-700 leading-relaxed text-lg'>
{productData.description}
      </p>
      </div>
      </div>
      </section>

{/* Technical Specifications */}
            <section
        className='py-12 bg-white'>
      <div
        className='container mx-auto px-4 max-w-7xl'>
      <h2
        className='text-3xl font-bold text-gray-800 mb-8 text-center'>
Teknik Özellikler
      </h2>
      <div
        className='grid lg:grid-cols-2 gap-8'>
{/* Basic Specifications */}
      <Card
        className='p-6'>
      <h3
        className='text-xl font-semibold text-gray-800 mb-4 flex items-center'>
      <Info
        className='w-5 h-5 mr-2 text-blue-600' />
Temel Özellikler
      </h3>
      <div
        className='space-y-3'>
      <div
        className='flex justify-between py-2 border-b border-gray-100'>
      <span
        className='text-gray-600 font-medium'>Model      </span>
      <span
        className='font-semibold text-gray-800'>
{productData.specifications.model}
      </span>
      </div>
      <div
        className='flex justify-between py-2 border-b border-gray-100'>
      <span
        className='text-gray-600 font-medium'>Nominal Yük      </span>
      <span
        className='font-semibold text-gray-800'>
{productData.specifications.payload}
      </span>
      </div>
      <div
        className='flex justify-between py-2 border-b border-gray-100'>
      <span
        className='text-gray-600 font-medium'>Hassasiyet      </span>
      <span
        className='font-semibold text-gray-800'>
{productData.specifications.precision}
      </span>
      </div>
      <div
        className='flex justify-between py-2 border-b border-gray-100'>
      <span
        className='text-gray-600 font-medium'>Boyutlar      </span>
      <span
        className='font-semibold text-gray-800'>
{productData.specifications.reach}
      </span>
      </div>
      <div
        className='flex justify-between py-2 border-b border-gray-100'>
      <span
        className='text-gray-600 font-medium'>Kalınlık      </span>
      <span
        className='font-semibold text-gray-800'>
{productData.specifications.thickness}
      </span>
      </div>
      <div
        className='flex justify-between py-2 border-b border-gray-100'>
      <span
        className='text-gray-600 font-medium'>Ağırlık      </span>
      <span
        className='font-semibold text-gray-800'>
{productData.specifications.weight}
      </span>
      </div>
      </div>
      </Card>

{/* Movement Range */}
      <Card
        className='p-6'>
      <h3
        className='text-xl font-semibold text-gray-800 mb-4 flex items-center'>
      <Settings
        className='w-5 h-5 mr-2 text-blue-600' />
Hareket Aralığı
      </h3>
      <div
        className='space-y-3'>
{Object.entries(productData.movementRange).map(
([key, value]) => (
<div
key={key}
className='flex justify-between py-2 border-b border-gray-100'
>
      <span
        className='text-gray-600 font-medium'>{key}      </span>
      <span
        className='font-semibold text-gray-800'>
{value}
      </span>
      </div>
)
)}
      </div>
      </Card>

{/* Maximum Speed */}
      <Card
        className='p-6'>
      <h3
        className='text-xl font-semibold text-gray-800 mb-4 flex items-center'>
      <Zap
        className='w-5 h-5 mr-2 text-blue-600' />
En Yüksek Hız
      </h3>
      <div
        className='space-y-3'>
{Object.entries(productData.maxSpeed).map(([key, value]) => (
<div
key={key}
className='flex justify-between py-2 border-b border-gray-100'
>
      <span
        className='text-gray-600 font-medium'>{key}      </span>
      <span
        className='font-semibold text-gray-800'>{value}      </span>
      </div>
))}
      </div>
      </Card>

{/* Allowed Inertia Moment */}
      <Card
        className='p-6'>
      <h3
        className='text-xl font-semibold text-gray-800 mb-4 flex items-center'>
      <Package
        className='w-5 h-5 mr-2 text-blue-600' />
İzin Verilen Eylemsizlik Momenti
      </h3>
      <div
        className='space-y-3'>
{Object.entries(productData.allowedInertia).map(
([key, value]) => (
<div
key={key}
className='flex justify-between py-2 border-b border-gray-100'
>
      <span
        className='text-gray-600 font-medium'>{key}      </span>
      <span
        className='font-semibold text-gray-800'>
{value}
      </span>
      </div>
)
)}
      </div>
      </Card>
      </div>

      <div
        className='grid md:grid-cols-2 gap-8 mt-8'>
{/* Allowed Load Torque */}
      <Card
        className='p-6'>
      <h3
        className='text-xl font-semibold text-gray-800 mb-4 flex items-center'>
      <Settings
        className='w-5 h-5 mr-2 text-blue-600' />
İzin Verilen Yük Torku
      </h3>
      <div
        className='space-y-3'>
{Object.entries(productData.allowedTorque).map(
([key, value]) => (
<div
key={key}
className='flex justify-between py-2 border-b border-gray-100'
>
      <span
        className='text-gray-600 font-medium'>{key}      </span>
      <span
        className='font-semibold text-gray-800'>
{value}
      </span>
      </div>
)
)}
      </div>
      </Card>

{/* Environment */}
      <Card
        className='p-6'>
      <h3
        className='text-xl font-semibold text-gray-800 mb-4 flex items-center'>
      <Settings
        className='w-5 h-5 mr-2 text-blue-600' />
Uygulanabilir Çevre
      </h3>
      <div
        className='space-y-4'>
      <div
        className='flex items-center justify-between py-3 px-4 bg-red-50 rounded-lg'>
      <div
        className='flex items-center space-x-3'>
      <span
        className='text-gray-700 font-medium'>
{t.product.temperature}
      </span>
      </div>
      <span
        className='font-semibold text-gray-800'>
{productData.environment.temperature}
      </span>
      </div>
      <div
        className='flex items-center justify-between py-3 px-4 bg-blue-50 rounded-lg'>
      <div
        className='flex items-center space-x-3'>
      <span
        className='text-gray-700 font-medium'>
{t.product.humidity}
      </span>
      </div>
      <span
        className='font-semibold text-gray-800'>
{productData.environment.humidity}
      </span>
      </div>
      </div>
      </Card>
      </div>

      <div
        className='mt-8'>
      <h2
        className='text-2xl font-bold text-gray-800 mb-6 text-center'>
Ek Teknik Özellikler
      </h2>
      <div
        className='grid md:grid-cols-2 gap-8'>
{/* Material and Construction Specifications */}
      <Card
        className='p-6'>
      <h3
        className='text-xl font-semibold text-gray-800 mb-4 flex items-center'>
      <Settings
        className='w-5 h-5 mr-2 text-blue-600' />
Malzeme ve Yapı Özellikleri
      </h3>
      <div
        className='space-y-3'>
      <div
        className='flex justify-between py-2 border-b border-gray-100'>
      <span
        className='text-gray-600 font-medium'>
Gövde Malzemesi
      </span>
      <span
        className='font-semibold text-gray-800'>
{productData.additionalSpecs.material}
      </span>
      </div>
      <div
        className='flex justify-between py-2 border-b border-gray-100'>
      <span
        className='text-gray-600 font-medium'>
Kilitleme Mekanizması
      </span>
      <span
        className='font-semibold text-gray-800'>
{productData.additionalSpecs.lockingMechanism}
      </span>
      </div>
      <div
        className='flex justify-between py-2 border-b border-gray-100'>
      <span
        className='text-gray-600 font-medium'>Yüzer Yön      </span>
      <span
        className='font-semibold text-gray-800'>
{productData.additionalSpecs.floatingDirection}
      </span>
      </div>
      <div
        className='flex justify-between py-2 border-b border-gray-100'>
      <span
        className='text-gray-600 font-medium'>
Uygulanabilir Sıcaklık
      </span>
      <span
        className='font-semibold text-gray-800'>
{productData.additionalSpecs.applicableTemperature}
      </span>
      </div>
      <div
        className='flex justify-between py-2 border-b border-gray-100'>
      <span
        className='text-gray-600 font-medium'>
Minimum Kilitleme Hava Basıncı
      </span>
      <span
        className='font-semibold text-gray-800'>
{productData.additionalSpecs.minimumLockingAirPressure}
      </span>
      </div>
      </div>
      </Card>

{/* Power and Installation Specifications */}
      <Card
        className='p-6'>
      <h3
        className='text-xl font-semibold text-gray-800 mb-4 flex items-center'>
      <Zap
        className='w-5 h-5 mr-2 text-blue-600' />
Güç ve Kurulum Özellikleri
      </h3>
      <div
        className='space-y-3'>
      <div
        className='flex justify-between py-2 border-b border-gray-100'>
      <span
        className='text-gray-600 font-medium'>
{t.product.powerCapacity}
      </span>
      <span
        className='font-semibold text-gray-800'>
{productData.additionalSpecs.powerCapacity}
      </span>
      </div>
      <div
        className='flex justify-between py-2 border-b border-gray-100'>
      <span
        className='text-gray-600 font-medium'>
{t.product.ratedPower}
      </span>
      <span
        className='font-semibold text-gray-800'>
{productData.additionalSpecs.ratedPower}
      </span>
      </div>
      <div
        className='flex justify-between py-2 border-b border-gray-100'>
      <span
        className='text-gray-600 font-medium'>
{t.product.ratedVoltage}
      </span>
      <span
        className='font-semibold text-gray-800'>
{productData.additionalSpecs.ratedVoltage}
      </span>
      </div>
      <div
        className='flex justify-between py-2 border-b border-gray-100'>
      <span
        className='text-gray-600 font-medium'>
{t.product.ratedCurrent}
      </span>
      <span
        className='font-semibold text-gray-800'>
{productData.additionalSpecs.ratedCurrent}
      </span>
      </div>
      <div
        className='flex justify-between py-2 border-b border-gray-100'>
      <span
        className='text-gray-600 font-medium'>
{t.product.protectionLevel}
      </span>
      <span
        className='font-semibold text-gray-800'>
{productData.additionalSpecs.protectionLevel}
      </span>
      </div>
      <div
        className='flex justify-between py-2 border-b border-gray-100'>
      <span
        className='text-gray-600 font-medium'>
{t.product.installationMethod}
      </span>
      <span
        className='font-semibold text-gray-800'>
{productData.additionalSpecs.installationMethod}
      </span>
      </div>
      <div
        className='flex justify-between py-2 border-b border-gray-100'>
      <span
        className='text-gray-600 font-medium'>
{t.product.weight}
      </span>
      <span
        className='font-semibold text-gray-800'>
{productData.additionalSpecs.weight}
      </span>
      </div>
      </div>
      </Card>

{/* Environment and Other Specifications */}
      <Card
        className='p-6'>
      <h3
        className='text-xl font-semibold text-gray-800 mb-4 flex items-center'>
      <Package
        className='w-5 h-5 mr-2 text-blue-600' />
Çevre ve Diğer Özellikler
      </h3>
      <div
        className='space-y-3'>
      <div
        className='flex justify-between py-2 border-b border-gray-100'>
      <span
        className='text-gray-600 font-medium'>
{t.product.temperature}
      </span>
      <span
        className='font-semibold text-gray-800'>
{productData.environment.temperature}
      </span>
      </div>
      <div
        className='flex justify-between py-2 border-b border-gray-100'>
      <span
        className='text-gray-600 font-medium'>
{t.product.humidity}
      </span>
      <span
        className='font-semibold text-gray-800'>
{productData.environment.humidity}
      </span>
      </div>
      <div
        className='py-2 border-b border-gray-100'>
      <div
        className='text-gray-600 font-medium mb-2'>
{t.product.other}
      </div>
      <div
        className='text-gray-800 text-sm leading-relaxed'>
{productData.additionalSpecs.other}
      </div>
      </div>
      </div>
      </Card>
      </div>
      </div>
      </div>
      </section>

{/* Contact CTA */}
            <section
        className='py-16 bg-blue-600 text-white'>
      <div
        className='container mx-auto px-4 max-w-7xl text-center'>
      <h2
        className='text-3xl font-bold mb-4'>
Bu Ürün Hakkında Daha Fazla Bilgi Almak İster misiniz?
      </h2>
      <p
        className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>
Uzman ekibimiz size en uygun çözümü bulmak için yardımcı olmaya
hazır
      </p>
      <div
        className='flex flex-col sm:flex-row gap-4 justify-center'>
<Button
onClick={() => setIsContactFormOpen(true)}
className='bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105'
>
      <MessageCircle
        className='w-5 h-5 mr-2' />
İletişime Geç
      </Button>
      </div>
      </div>
      </section>

{/* Contact Form Modal */}
{isContactFormOpen && (
      <div
        className='fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4'>
      <div
        className='bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto'>
      <div
        className='p-6 border-b border-gray-200'>
      <div
        className='flex items-center justify-between'>
      <h3
        className='text-2xl font-bold text-gray-800'>
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
      <p
        className='text-gray-600 mt-2'>
Bu ürün hakkında bilgi almak için formu doldurun.
      </p>
      </div>

      <div
        className='p-6'>
      <form
        className='space-y-4'>
      <div
        className='grid grid-cols-1 md:grid-cols-2 gap-4'>
<div>
      <label
        className='block text-sm font-medium text-gray-700 mb-2'>
Ad Soyad *
      </label>
<input
type='text'
required;
className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
placeholder='Adınız ve soyadınız'
/>
      </div>
<div>
      <label
        className='block text-sm font-medium text-gray-700 mb-2'>
E-posta *
      </label>
<input
type='email'
required;
className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
placeholder='E-posta adresiniz'
/>
      </div>
      </div>

      <div
        className='grid grid-cols-1 md:grid-cols-2 gap-4'>
<div>
      <label
        className='block text-sm font-medium text-gray-700 mb-2'>
Telefon
      </label>
<input
type='tel'
className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
placeholder='Telefon numaranız'
/>
      </div>
<div>
      <label
        className='block text-sm font-medium text-gray-700 mb-2'>
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
      <label
        className='block text-sm font-medium text-gray-700 mb-2'>
Mesaj *
      </label>
<textarea
required
rows={4}
className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
placeholder='Bu ürün hakkında bilgi almak istiyorum...'
>      </textarea>
      </div>

      <div
        className='flex gap-3 pt-4'>
<Button
type='submit'
className='flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold'
>
      <MessageCircle
        className='w-5 h-5 mr-2' />
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
