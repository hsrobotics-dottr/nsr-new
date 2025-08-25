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
model: 'HST-AFC-P100',
category: 'Kuvvet Kontrol Sistemi',
keywords: 'Standart Çevresel Ürünler',
forceControlRange: '10-100N',
floatingStroke: '0-50mm',
forceControlAccuracy: '±3N',
grindingPower: '3kW',
powerSupply: 'AC380V & DC24V/2A',
polishingMachineShaftLength: '1100mm',
polishingMachineInstallationPositionShaftDiameter: 'φ32mm',
gasSupplyRequirements:
'Air pressure ≥ 0.6MPa Cleanliness: no oil and no water',
description: `HST-AFC-P100, endüstriyel robotlarda hassas kuvvet kontrolü ve kompansasyon için geliştirilmiş gelişmiş sistemdir. Bu sistem, el ile tutulan iş parçası taşlama operasyonları için optimize edilmiştir. Yüksek hassasiyetli kuvvet kontrolü ile ±3N'ye kadar hassasiyet sağlar ve bakır, alüminyum, titanyum alaşımı, ahşap, plastik, seramik, karbon fiber gibi çeşitli iş parçaları için uygundur. Kuvvet kontrollü yüzer taban, evrensel tipte olup, kayış zımpara makinesi, cilalama makinesi, taşlama makinesi ve diğer ekipmanların yerini alabilir. Kuvvet kapalı döngü kontrolünün yanıt süresi 20ms'den azdır ve robot yüksek hızlı taşlama operasyonu ihtiyaçlarını karşılar.`,
image: '/img/forcecontrol/HST-AFC-P100.png',
    specifications: {
    model: 'HST-AFC-P100',
forceControlRange: '10-100N',
floatingStroke: '0-50mm',
forceControlAccuracy: '±3N',
grindingPower: '3kW',
powerSupply: 'AC380V & DC24V/2A',
polishingMachineShaftLength: '1100mm',
polishingMachineInstallationPositionShaftDiameter: 'φ32mm',
gasSupplyRequirements:
'Air pressure ≥ 0.6MPa Cleanliness: no oil and no water',
},
productCharacteristics: [
'El ile tutulan iş parçası taşlama operasyonları için uygun',
"Yüksek hassasiyetli kuvvet kontrolü, en yüksek hassasiyet ±3N'ye kadar, ince taşlama operasyonları için uygun",
'Bakır, alüminyum, titanyum alaşımı, ahşap, plastik, seramik, karbon fiber ve diğer iş parçaları için uygun',
'Kuvvet kontrollü yüzer taban evrensel tipte, kayış zımpara makinesi, cilalama makinesi, taşlama makinesi ve diğer ekipmanların yerini alabilir',
'Farklı cilalama uygulama senaryolarına uyum sağlar',
"Kuvvet kapalı döngü kontrolünün yanıt süresi 20ms'den az, robot yüksek hızlı taşlama operasyonu ihtiyaçlarını karşılar",
],
    environment: {
    temperature: '0-60°C',
humidity: '20%-95%',
},
};

const currentLang = 'tr';

// Translations
const translations = {
    tr: {
    product: {
category: 'Kategori',
keywords: 'Anahtar Kelimeler',
forceControlRange: 'Kuvvet Kontrol Aralığı',
floatingStroke: 'Yüzer Vuruş',
forceControlAccuracy: 'Kuvvet Kontrol Hassasiyeti',
grindingPower: 'Taşlama Gücü',
powerSupply: 'Güç Kaynağı',
polishingMachineShaftLength: 'Cilalama Makinesi Mil Uzunluğu',
polishingMachineInstallationPositionShaftDiameter:
'Cilalama Makinesi Kurulum Pozisyonu Mil Çapı',
gasSupplyRequirements: 'Gaz Besleme Gereksinimleri',
contactForConsultation: 'Mesaj bırakın',
specifications: 'Teknik Özellikler',
productCharacteristics: 'Ürün Özellikleri',
environment: 'Uygulanabilir Çevre',
temperature: 'Sıcaklık',
humidity: 'Nem',
requestQuote: 'Fiyat Teklifi İste',
contactUs: 'İletişime Geç',
},
},
    en: {
    product: {
category: 'Category',
keywords: 'Keywords',
forceControlRange: 'Force Control Range',
floatingStroke: 'Floating Stroke',
forceControlAccuracy: 'Force Control Accuracy',
grindingPower: 'Grinding Power',
powerSupply: 'Power Supply',
polishingMachineShaftLength: 'Polishing Machine Shaft Length',
polishingMachineInstallationPositionShaftDiameter:
'Polishing Machine Installation Position Shaft Diameter',
gasSupplyRequirements: 'Gas Supply Requirements',
contactForConsultation: 'Leave a Message',
specifications: 'Technical Specifications',
productCharacteristics: 'Product Characteristics',
environment: 'Applicable Environment',
temperature: 'Temperature',
humidity: 'Humidity',
requestQuote: 'Request Quote',
contactUs: 'Contact Us',
},
},
};

export default function HSTAFC100Page() {
  
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
{t.product.forceControlRange}
      </div>
      <div
        className='text-2xl font-bold text-blue-600'>
{productData.forceControlRange}
      </div>
      </Card>
      <Card
        className='p-4 text-center border-2 border-gray-100'>
      <div
        className='text-sm text-gray-600 mb-1'>
{t.product.forceControlAccuracy}
      </div>
      <div
        className='text-2xl font-bold text-gray-800'>
{productData.forceControlAccuracy}
      </div>
      </Card>
      <Card
        className='p-4 text-center border-2 border-gray-100'>
      <div
        className='text-sm text-gray-600 mb-1'>
{t.product.grindingPower}
      </div>
      <div
        className='text-2xl font-bold text-gray-800'>
{productData.grindingPower}
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
±3N Hassasiyet
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
20ms Yanıt Süresi
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
3kW Taşlama Gücü
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
0-50mm Yüzer Vuruş
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
{/* Product Parameters */}
      <Card
        className='p-6'>
      <h3
        className='text-xl font-semibold text-gray-800 mb-4 flex items-center'>
      <Info
        className='w-5 h-5 mr-2 text-blue-600' />
Ürün Parametreleri
      </h3>
      <div
        className='space-y-3'>
      <div
        className='flex justify-between py-2 border-b border-gray-100'>
      <span
        className='text-gray-600 font-medium'>Ürün Modeli      </span>
      <span
        className='font-semibold text-gray-800'>
{productData.specifications.model}
      </span>
      </div>
      <div
        className='flex justify-between py-2 border-b border-gray-100'>
      <span
        className='text-gray-600 font-medium'>
{t.product.forceControlRange}
      </span>
      <span
        className='font-semibold text-gray-800'>
{productData.specifications.forceControlRange}
      </span>
      </div>
      <div
        className='flex justify-between py-2 border-b border-gray-100'>
      <span
        className='text-gray-600 font-medium'>
{t.product.floatingStroke}
      </span>
      <span
        className='font-semibold text-gray-800'>
{productData.specifications.floatingStroke}
      </span>
      </div>
      <div
        className='flex justify-between py-2 border-b border-gray-100'>
      <span
        className='text-gray-600 font-medium'>
{t.product.forceControlAccuracy}
      </span>
      <span
        className='font-semibold text-gray-800'>
{productData.specifications.forceControlAccuracy}
      </span>
      </div>
      <div
        className='flex justify-between py-2 border-b border-gray-100'>
      <span
        className='text-gray-600 font-medium'>
{t.product.grindingPower}
      </span>
      <span
        className='font-semibold text-gray-800'>
{productData.specifications.grindingPower}
      </span>
      </div>
      <div
        className='flex justify-between py-2 border-b border-gray-100'>
      <span
        className='text-gray-600 font-medium'>
{t.product.powerSupply}
      </span>
      <span
        className='font-semibold text-gray-800'>
{productData.specifications.powerSupply}
      </span>
      </div>
      <div
        className='flex justify-between py-2 border-b border-gray-100'>
      <span
        className='text-gray-600 font-medium'>
{t.product.polishingMachineShaftLength}
      </span>
      <span
        className='font-semibold text-gray-800'>
{productData.specifications.polishingMachineShaftLength}
      </span>
      </div>
      <div
        className='flex justify-between py-2 border-b border-gray-100'>
      <span
        className='text-gray-600 font-medium'>
{
t.product
.polishingMachineInstallationPositionShaftDiameter
}
      </span>
      <span
        className='font-semibold text-gray-800'>
{
productData.specifications
.polishingMachineInstallationPositionShaftDiameter
}
      </span>
      </div>
      <div
        className='flex justify-between py-2 border-b border-gray-100'>
      <span
        className='text-gray-600 font-medium'>
{t.product.gasSupplyRequirements}
      </span>
      <span
        className='font-semibold text-gray-800 text-sm'>
{productData.specifications.gasSupplyRequirements}
      </span>
      </div>
      </div>
      </Card>

{/* Product Characteristics */}
      <Card
        className='p-6'>
      <h3
        className='text-xl font-semibold text-gray-800 mb-4 flex items-center'>
      <Settings
        className='w-5 h-5 mr-2 text-blue-600' />
Ürün Özellikleri
      </h3>
      <div
        className='space-y-3'>
{productData.productCharacteristics.map(
(characteristic, index) => (
<div
key={index}
className='flex items-start space-x-3 py-2 border-b border-gray-100'
>
      <div
        className='w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0'>      </div>
      <span
        className='text-gray-700 text-sm leading-relaxed'>
{characteristic}
      </span>
      </div>
)
)}
      </div>
      </Card>
      </div>

      <div
        className='mt-8'>
      <div
        className='grid md:grid-cols-2 gap-8'>
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
