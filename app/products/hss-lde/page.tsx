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
Power,
Settings,
Shield,
Wifi,
Zap,
} from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

// Product data
const productData = {
model: 'HSS-LDE',
category: 'Servo Sürücü (Çekirdek Bileşenler)',
keywords:
'HSS-LDE, Modular Drives, Servo Sürücü, Modüler Sürücü, EtherCAT, DC Common Bus',
title: 'Modular Drives',
description: `HSS-LDE modüler serisi servo sürücü, gelişmiş tüm dijital motor kontrol algoritması ile akım döngüsü, hız döngüsü ve pozisyon döngüsünün kapalı döngü servo kontrolünü gerçekleştirir. İyi sağlamlık ve adaptif yeteneklere sahiptir. DC ortak veri yolu yapısı ile tasarlanmıştır ve çok eksenli kapalı döngü uygulamaları için EtherCAT endüstriyel veri yolu çözümü müşterilere önemli ölçüde alan, maliyet ve sistem karmaşıklığı optimizasyonu sağlar.`,
image: '/img/ServoDrives/HSS-LDE.png',
    specifications: {
    model: 'HSS-LDE',
type: 'Modüler AC Servo Sürücü',
powerRange: '200W - 1000W',
maxCurrent: '29A',
responseFrequency: '3KHz',
},
  driveModels: {
'HSS-LDER-022': { ratedCurrent: '2.2A', maxCurrent: '6.6A' },
'HSS-LDER-045': { ratedCurrent: '4.5A', maxCurrent: '13.5A' },
'HSS-LDER-076': { ratedCurrent: '7.6A', maxCurrent: '22.8A' },
'HSS-LDER-082': { ratedCurrent: '8.2A', maxCurrent: '25.8A' },
'HSS-LDER-097': { ratedCurrent: '9.7A', maxCurrent: '29A' },
},
    inputSpecs: {
    mainPower: 'Tek faz/üç faz, AC 220 ±15%, 50/60Hz',
controlPower: 'DC24V ±10%',
},
mainFeatures: [
'Yüksek bant genişliği yanıtı, hız döngüsü yanıt frekansı 3KHz, komutun ayar zamanına ulaşma süresini etkili şekilde kısaltır.',
'Zayıf manyetik kontrol teknolojisi, motorun nominal maksimum hızına kadar hızı büyük ölçüde artırabilir.',
'Düşük frekanslı titreşim bastırma algoritması, düşük frekanslı titreşim frekansını etkili şekilde azaltır.',
'Yerçekimi adaptif kompanzasyon yeteneği, yerçekimi ekseninin anlık dış kuvvet etkinleştirildiğinde meydana gelen düşme olayını engelleyebilir.',
'Sürtünme kompanzasyon teknolojisi, çeyrek çıkıntı olayını etkili şekilde bastırabilir.',
'EtherCAT veri yolu aracılığıyla, elektrik panosundaki tüm sürücüler bir ağ parametresi ile sona kadar yönetilir.',
"DC ortak veri yolu teknolojisi, kurulum hacminde aynı özellikteki ürünlerden %50'den fazla tasarruf sağlar.",
'23bit mutlak değer kodlayıcıya kadar okunabilir, bu da ekipmanın tekrarlanan konumlandırma doğruluğunu önemli ölçüde iyileştirir.',
'EtherCAT senkron saat kompanzasyon teknolojisi ile çok eksenli kontrolün senkronizasyonu daha da iyileştirilir.',
'Çeşitli kodlayıcı protokollerine uyum sağlayabilir, özel geliştirmeyi destekler.',
'Tüm standart EtherCAT veri yolu kontrolörlerine uyum sağlar ve tüm standart EtherCAT veri yolu servo sürücüleri ile karıştırılabilir ve eşleştirilebilir.',
],
    communication: {
    standard: ['EtherCAT', 'CANopen', 'Modbus RTU'],
optional: ['Profinet', 'Ethernet IP', 'CC-Link'],
},
    protection: {
    overcurrent: 'Evet',
overvoltage: 'Evet',
overtemperature: 'Evet',
shortCircuit: 'Evet',
undervoltage: 'Evet',
},
};

const currentLang = 'tr';

// Translations
const translations = {
    tr: {
    product: {
category: 'Kategori',
keywords: 'Anahtar Kelimeler',
type: 'Tip',
powerRange: 'Güç Aralığı',
maxCurrent: 'Maksimum Akım',
responseFrequency: 'Yanıt Frekansı',
contactForConsultation: 'Mesaj bırakın',
specifications: 'Teknik Özellikler',
driveModels: 'Sürücü Modelleri',
inputSpecs: 'Giriş Özellikleri',
mainFeatures: 'Ana Özellikler',
communication: 'İletişim Özellikleri',
protection: 'Koruma Özellikleri',
ratedCurrent: 'Nominal Akım',
maxCurrentOutput: 'Maksimum Akım',
mainPower: 'Ana Güç Kaynağı',
controlPower: 'Kontrol Güç Kaynağı',
standard: 'Standart',
optional: 'Opsiyonel',
overcurrent: 'Aşırı Akım',
overvoltage: 'Aşırı Gerilim',
overtemperature: 'Aşırı Sıcaklık',
shortCircuit: 'Kısa Devre',
undervoltage: 'Düşük Gerilim',
requestQuote: 'Fiyat Teklifi İste',
contactUs: 'İletişime Geç',
},
},
    en: {
    product: {
category: 'Category',
keywords: 'Keywords',
type: 'Type',
powerRange: 'Power Range',
maxCurrent: 'Maximum Current',
responseFrequency: 'Response Frequency',
contactForConsultation: 'Leave a Message',
specifications: 'Technical Specifications',
driveModels: 'Drive Models',
inputSpecs: 'Input Specifications',
mainFeatures: 'Main Features',
communication: 'Communication Features',
protection: 'Protection Features',
ratedCurrent: 'Rated Current',
maxCurrentOutput: 'Maximum Current',
mainPower: 'Main Power Supply',
controlPower: 'Control Power Supply',
standard: 'Standard',
optional: 'Optional',
overcurrent: 'Overcurrent',
overvoltage: 'Overvoltage',
overtemperature: 'Overtemperature',
shortCircuit: 'Short Circuit',
undervoltage: 'Undervoltage',
requestQuote: 'Request Quote',
contactUs: 'Contact Us',
},
},
};

export default function HSSLDEPage() {
  
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
{productData.title}
      </h1>
      </div>

{/* Quick Specs */}
      <div
        className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
      <Card
        className='p-4 text-center border-2 border-blue-100 bg-blue-50'>
      <div
        className='text-sm text-gray-600 mb-1'>
{t.product.type}
      </div>
      <div
        className='text-sm font-bold text-blue-600 leading-tight'>
Modüler Sürücü
      </div>
      </Card>
      <Card
        className='p-4 text-center border-2 border-gray-100'>
      <div
        className='text-sm text-gray-600 mb-1'>
{t.product.powerRange}
      </div>
      <div
        className='text-lg font-bold text-gray-800'>
{productData.specifications.powerRange}
      </div>
      </Card>
      <Card
        className='p-4 text-center border-2 border-gray-100'>
      <div
        className='text-sm text-gray-600 mb-1'>
{t.product.maxCurrent}
      </div>
      <div
        className='text-lg font-bold text-gray-800'>
{productData.specifications.maxCurrent}
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
      <Zap
        className='w-5 h-5 text-green-600' />
      </div>
      <span
        className='text-sm font-medium text-gray-700'>
3KHz Yanıt Frekansı
      </span>
      </div>
      <div
        className='flex items-center space-x-3'>
      <div
        className='w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center'>
      <Wifi
        className='w-5 h-5 text-blue-600' />
      </div>
      <span
        className='text-sm font-medium text-gray-700'>
EtherCAT İletişim
      </span>
      </div>
      <div
        className='flex items-center space-x-3'>
      <div
        className='w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center'>
      <Power
        className='w-5 h-5 text-purple-600' />
      </div>
      <span
        className='text-sm font-medium text-gray-700'>
DC Ortak Veri Yolu
      </span>
      </div>
      <div
        className='flex items-center space-x-3'>
      <div
        className='w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center'>
      <Shield
        className='w-5 h-5 text-orange-600' />
      </div>
      <span
        className='text-sm font-medium text-gray-700'>
Gelişmiş Koruma
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
{t.product.specifications}
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
        className='text-gray-600 font-medium'>Tip      </span>
      <span
        className='font-semibold text-gray-800'>
{productData.specifications.type}
      </span>
      </div>
      <div
        className='flex justify-between py-2 border-b border-gray-100'>
      <span
        className='text-gray-600 font-medium'>Güç Aralığı      </span>
      <span
        className='font-semibold text-gray-800'>
{productData.specifications.powerRange}
      </span>
      </div>
      <div
        className='flex justify-between py-2 border-b border-gray-100'>
      <span
        className='text-gray-600 font-medium'>
Maksimum Akım
      </span>
      <span
        className='font-semibold text-gray-800'>
{productData.specifications.maxCurrent}
      </span>
      </div>
      <div
        className='flex justify-between py-2 border-b border-gray-100'>
      <span
        className='text-gray-600 font-medium'>
Yanıt Frekansı
      </span>
      <span
        className='font-semibold text-gray-800'>
{productData.specifications.responseFrequency}
      </span>
      </div>
      </div>
      </Card>

{/* Drive Models */}
      <Card
        className='p-6'>
      <h3
        className='text-xl font-semibold text-gray-800 mb-4 flex items-center'>
      <Package
        className='w-5 h-5 mr-2 text-blue-600' />
{t.product.driveModels}
      </h3>
      <div
        className='space-y-3'>
{Object.entries(productData.driveModels).map(
([model, specs]) => (
<div key={model} className='border-b pb-3 last:border-b-0'>
      <div
        className='font-semibold text-blue-600 mb-2'>
{model}
      </div>
      <div
        className='grid grid-cols-2 gap-4 text-sm'>
<div>
      <span
        className='text-gray-600'>
{t.product.ratedCurrent}:
      </span>
      <span
        className='ml-2 font-medium'>
{specs.ratedCurrent}
      </span>
      </div>
<div>
      <span
        className='text-gray-600'>
{t.product.maxCurrentOutput}:
      </span>
      <span
        className='ml-2 font-medium'>
{specs.maxCurrent}
      </span>
      </div>
      </div>
      </div>
)
)}
      </div>
      </Card>
      </div>

      <div
        className='grid md:grid-cols-2 gap-8 mt-8'>
{/* Input Specifications */}
      <Card
        className='p-6'>
      <h3
        className='text-xl font-semibold text-gray-800 mb-4 flex items-center'>
      <Power
        className='w-5 h-5 mr-2 text-blue-600' />
{t.product.inputSpecs}
      </h3>
      <div
        className='space-y-3'>
      <div
        className='flex justify-between py-2 border-b border-gray-100'>
      <span
        className='text-gray-600 font-medium'>
{t.product.mainPower}
      </span>
      <span
        className='font-semibold text-gray-800 text-sm'>
{productData.inputSpecs.mainPower}
      </span>
      </div>
      <div
        className='flex justify-between py-2 border-b border-gray-100'>
      <span
        className='text-gray-600 font-medium'>
{t.product.controlPower}
      </span>
      <span
        className='font-semibold text-gray-800 text-sm'>
{productData.inputSpecs.controlPower}
      </span>
      </div>
      </div>
      </Card>

{/* Communication Features */}
      <Card
        className='p-6'>
      <h3
        className='text-xl font-semibold text-gray-800 mb-4 flex items-center'>
      <Wifi
        className='w-5 h-5 mr-2 text-blue-600' />
{t.product.communication}
      </h3>
      <div
        className='space-y-4'>
<div>
      <h4
        className='font-semibold text-gray-700 mb-2'>
{t.product.standard}
      </h4>
      <div
        className='space-y-2'>
{productData.communication.standard.map(
(protocol, index) => (
<div
key={index}
className='flex items-center space-x-2'
>
      <div
        className='w-2 h-2 bg-green-500 rounded-full'>      </div>
      <span
        className='text-gray-700'>{protocol}      </span>
      </div>
)
)}
      </div>
      </div>
<div>
      <h4
        className='font-semibold text-gray-700 mb-2'>
{t.product.optional}
      </h4>
      <div
        className='space-y-2'>
{productData.communication.optional.map(
(protocol, index) => (
<div
key={index}
className='flex items-center space-x-2'
>
      <div
        className='w-2 h-2 bg-blue-500 rounded-full'>      </div>
      <span
        className='text-gray-700'>{protocol}      </span>
      </div>
)
)}
      </div>
      </div>
      </div>
      </Card>
      </div>

      <div
        className='mt-8'>
      <h2
        className='text-2xl font-bold text-gray-800 mb-6 text-center'>
{t.product.mainFeatures}
      </h2>
      <div
        className='grid md:grid-cols-2 gap-8'>
{/* Main Features */}
      <Card
        className='p-6'>
      <h3
        className='text-xl font-semibold text-gray-800 mb-4 flex items-center'>
      <Settings
        className='w-5 h-5 mr-2 text-blue-600' />
Teknik Özellikler
      </h3>
      <div
        className='space-y-3'>
{productData.mainFeatures
.slice(0, 6)
.map((feature, index) => (
<div key={index} className='flex items-start'>
      <div
        className='w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0'>      </div>
      <p
        className='text-gray-700 text-sm leading-relaxed'>
{feature}
      </p>
      </div>
))}
      </div>
      </Card>

{/* Protection Features */}
      <Card
        className='p-6'>
      <h3
        className='text-xl font-semibold text-gray-800 mb-4 flex items-center'>
      <Shield
        className='w-5 h-5 mr-2 text-blue-600' />
{t.product.protection}
      </h3>
      <div
        className='space-y-3'>
{Object.entries(productData.protection).map(
([key, value]) => (
<div
key={key}
className='flex justify-between py-2 border-b border-gray-100'
>
      <span
        className='text-gray-600 font-medium'>
{t.product[key as keyof typeof t.product]}
      </span>
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
      </div>

      <div
        className='mt-8'>
      <div
        className='grid md:grid-cols-1 gap-8'>
{/* Additional Features */}
      <Card
        className='p-6'>
      <h3
        className='text-xl font-semibold text-gray-800 mb-4 flex items-center'>
      <Settings
        className='w-5 h-5 mr-2 text-blue-600' />
Ek Özellikler
      </h3>
      <div
        className='space-y-3'>
{productData.mainFeatures.slice(6).map((feature, index) => (
<div key={index} className='flex items-start'>
      <div
        className='w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0'>      </div>
      <p
        className='text-gray-700 text-sm leading-relaxed'>
{feature}
      </p>
      </div>
))}
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
hazır. Hemen iletişime geçin!
      </p>
<Button
onClick={() => setIsContactFormOpen(true)}
className='bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300'
>
      <MessageCircle
        className='w-5 h-5 mr-2' />
{t.product.contactForConsultation}
      </Button>
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
