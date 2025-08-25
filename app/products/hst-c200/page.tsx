'use client';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
model: 'HST-C200',
category: 'Hızlı Değiştirilen Disk',
keywords: 'HST-C200, hızlı değiştirilen disk, takım değiştirici, HSRobot',
capacity: '200 kg',
material: 'Havacılık Alüminyumu',
weight: '7.8 kg',
description:
'HST-C200, 200 kg yük kapasitesine sahip yüksek hassasiyetli hızlı değiştirilen disk sistemidir. En ağır endüstriyel uygulamalar için tasarlanmıştır.',
image: '/img/quick/HST-C200.png',
    specifications: {
    capacity: '200 kg',
material: 'Havacılık Alüminyumu',
weight: '7.8 kg',
dimensions: 'ø200mm',
surfaceFinish: 'Yüksek Hassasiyet',
hardness: 'Dayanıklı',
tolerance: '±0.015mm',
loadCapacity: '200 kg',
allowableBendingMoment: '1360 N·m',
allowableTorque: '1270 N·m',
lockingForce: '19800 N',
overallDimension: 'ø200mm',
lockedStateThickness: '87mm',
repeatedPositioningAccuracy: '±0.015mm',
workingDrivingPressure: '0.4-0.7 MPa',
lockingMechanism: 'Çelik bilya kilitleme',
applicableAmbientTemperature: '0-60 ℃',
applicableAmbientHumidity: '95%',
bodyMaterial: 'Havacılık Alüminyumu',
lockingMechanismPart: 'Yüksek Dayanımlı Alaşım Çelik',
mainDiskWeight: '5.3 kg',
toolTrayWeight: '2.5 kg',
gasPathChannel: '10',
circuitChannel: 'Opsiyonel',
},
features: [
'200 kg yük kapasitesi',
'±0.015mm hassasiyet',
'Çelik bilya kilitleme sistemi',
'0.4-0.7 MPa çalışma basıncı',
'0-60 ℃ sıcaklık aralığı',
'95% nem toleransı',
'10 gaz yolu kanalı',
'Opsiyonel devre kanalları',
],
applications: [
'En ağır endüstriyel uygulamalar',
'Büyük parça işleme',
'Endüstriyel robotik sistemleri',
'CNC makineleri',
'Montaj hatları',
'Kalite kontrol sistemleri',
],
advantages: [
'En yüksek yük kapasitesi',
'Üstün hassasiyet ve tekrarlanabilirlik',
'Hızlı takım değişimi',
'Havacılık alüminyumu yapı',
'Geniş sıcaklık ve nem aralığı',
'Çoklu kanal desteği',
'Güvenli çelik bilya kilitleme sistemi',
'Endüstriyel standartlarda performans',
],
};

const currentLang = 'tr';

// Translations
const translations = {
    tr: {
    product: {
category: 'Kategori',
keywords: 'Anahtar Kelimeler',
capacity: 'Kapasite',
material: 'Malzeme',
weight: 'Ağırlık',
contactForConsultation: 'Mesaj bırakın',
specifications: 'Teknik Özellikler',
dimensions: 'Boyutlar',
surfaceFinish: 'Yüzey Pürüzlülüğü',
hardness: 'Sertlik',
tolerance: 'Tolerans',
features: 'Özellikler',
applications: 'Uygulama Alanları',
advantages: 'Avantajlar',
requestQuote: 'Fiyat Teklifi İste',
contactUs: 'İletişime Geç',
},
},
    en: {
    product: {
category: 'Category',
keywords: 'Keywords',
capacity: 'Capacity',
material: 'Material',
weight: 'Weight',
contactForConsultation: 'Leave a Message',
specifications: 'Technical Specifications',
dimensions: 'Dimensions',
surfaceFinish: 'Surface Finish',
hardness: 'Hardness',
tolerance: 'Tolerance',
features: 'Features',
applications: 'Applications',
advantages: 'Advantages',
requestQuote: 'Request Quote',
contactUs: 'Contact Us',
},
},
};

export default function HSTC200Page() {
  
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
{t.product.capacity}
      </div>
      <div
        className='text-2xl font-bold text-blue-600'>
{productData.specifications.capacity}
      </div>
      </Card>
      <Card
        className='p-4 text-center border-2 border-gray-100'>
      <div
        className='text-sm text-gray-600 mb-1'>
{t.product.material}
      </div>
      <div
        className='text-2xl font-bold text-gray-800'>
{productData.specifications.material}
      </div>
      </Card>
      <Card
        className='p-4 text-center border-2 border-gray-100'>
      <div
        className='text-sm text-gray-600 mb-1'>
{t.product.weight}
      </div>
      <div
        className='text-2xl font-bold text-gray-800'>
{productData.specifications.weight}
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
±0.04mm Hassasiyet
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
Hızlı Değişim
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
200mm Kapasite
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
HRC 58-62 Sertlik
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
        className='py-16 bg-gray-50'>
      <div
        className='container mx-auto px-4'>
      <div
        className='text-center mb-12'>
      <h2
        className='text-3xl font-bold text-gray-900 mb-4'>
Teknik Özellikler
      </h2>
      <p
        className='text-lg text-gray-600 max-w-2xl mx-auto'>
HST-C200 hızlı değiştirilen disk sisteminin detaylı teknik;
parametreleri
      </p>
      </div>

      <div
        className='grid md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
{/* Temel Özellikler */}
      <Card
        className='p-6'>
      <CardHeader
        className='pb-4'>
      <CardTitle
        className='flex items-center gap-2 text-xl'>
      <Package
        className='h-5 w-5 text-blue-600' />
Temel Özellikler
      </CardTitle>
      </CardHeader>
      <CardContent
        className='space-y-3'>
      <div
        className='flex justify-between py-2 border-b border-gray-100'>
      <span
        className='font-medium text-gray-700'>
Yük Kapasitesi
      </span>
      <span
        className='text-gray-900'>200 kg      </span>
      </div>
      <div
        className='flex justify-between py-2 border-b border-gray-100'>
      <span
        className='font-medium text-gray-700'>
İzin Verilen Eğilme Momenti
      </span>
      <span
        className='text-gray-900'>1360 N·m      </span>
      </div>
      <div
        className='flex justify-between py-2 border-b border-gray-100'>
      <span
        className='font-medium text-gray-700'>
İzin Verilen Tork
      </span>
      <span
        className='text-gray-900'>1270 N·m      </span>
      </div>
      <div
        className='flex justify-between py-2 border-b border-gray-100'>
      <span
        className='font-medium text-gray-700'>Genel Boyut      </span>
      <span
        className='text-gray-900'>ø200mm      </span>
      </div>
      <div
        className='flex justify-between py-2 border-b border-gray-100'>
      <span
        className='font-medium text-gray-700'>
Kilitli Durum Kalınlığı
      </span>
      <span
        className='text-gray-900'>87mm      </span>
      </div>
      <div
        className='flex justify-between py-2 border-b border-gray-100'>
      <span
        className='font-medium text-gray-700'>
Tekrarlanan Konumlandırma Hassasiyeti
      </span>
      <span
        className='text-gray-900'>±0.015mm      </span>
      </div>
      </CardContent>
      </Card>

{/* Çalışma Parametreleri */}
      <Card
        className='p-6'>
      <CardHeader
        className='pb-4'>
      <CardTitle
        className='flex items-center gap-2 text-xl'>
      <Settings
        className='h-5 w-5 text-green-600' />
Çalışma Parametreleri
      </CardTitle>
      </CardHeader>
      <CardContent
        className='space-y-3'>
      <div
        className='flex justify-between py-2 border-b border-gray-100'>
      <span
        className='font-medium text-gray-700'>
Çalışma Sürücü Basıncı
      </span>
      <span
        className='text-gray-900'>0.4-0.7 MPa      </span>
      </div>
      <div
        className='flex justify-between py-2 border-b border-gray-100'>
      <span
        className='font-medium text-gray-700'>
Kilitleme Mekanizması
      </span>
      <span
        className='text-gray-900'>Çelik Bilya Kilitleme      </span>
      </div>
      <div
        className='flex justify-between py-2 border-b border-gray-100'>
      <span
        className='font-medium text-gray-700'>
Kilitleme Kuvveti (0.49MPa)
      </span>
      <span
        className='text-gray-900'>19800 N      </span>
      </div>
      <div
        className='flex justify-between py-2 border-b border-gray-100'>
      <span
        className='font-medium text-gray-700'>
Uygulanabilir Ortam Sıcaklığı
      </span>
      <span
        className='text-gray-900'>0-60 ℃      </span>
      </div>
      <div
        className='flex justify-between py-2 border-b border-gray-100'>
      <span
        className='font-medium text-gray-700'>
Uygulanabilir Ortam Nem Oranı
      </span>
      <span
        className='text-gray-900'>95%      </span>
      </div>
      <div
        className='flex justify-between py-2 border-b border-gray-100'>
      <span
        className='font-medium text-gray-700'>
Gaz Yolu Kanalları
      </span>
      <span
        className='text-gray-900'>10      </span>
      </div>
      <div
        className='flex justify-between py-2 border-b border-gray-100'>
      <span
        className='font-medium text-gray-700'>
Devre Kanalları
      </span>
      <span
        className='text-gray-900'>Opsiyonel      </span>
      </div>
      </CardContent>
      </Card>

{/* Malzeme Özellikleri */}
      <Card
        className='p-6'>
      <CardHeader
        className='pb-4'>
      <CardTitle
        className='flex items-center gap-2 text-xl'>
      <Zap
        className='h-5 w-5 text-purple-600' />
Malzeme Özellikleri
      </CardTitle>
      </CardHeader>
      <CardContent
        className='space-y-3'>
      <div
        className='flex justify-between py-2 border-b border-gray-100'>
      <span
        className='font-medium text-gray-700'>
Gövde Malzemesi
      </span>
      <span
        className='text-gray-900'>Havacılık Alüminyumu      </span>
      </div>
      <div
        className='flex justify-between py-2 border-b border-gray-100'>
      <span
        className='font-medium text-gray-700'>
Kilitleme Mekanizması Parçası
      </span>
      <span
        className='text-gray-900'>
Yüksek Dayanımlı Alaşım Çelik
      </span>
      </div>
      <div
        className='flex justify-between py-2 border-b border-gray-100'>
      <span
        className='font-medium text-gray-700'>
Ana Disk Ağırlığı
      </span>
      <span
        className='text-gray-900'>5.3 kg      </span>
      </div>
      <div
        className='flex justify-between py-2 border-b border-gray-100'>
      <span
        className='font-medium text-gray-700'>
Takım Tepsisi Ağırlığı
      </span>
      <span
        className='text-gray-900'>2.5 kg      </span>
      </div>
      <div
        className='flex justify-between py-2 border-b border-gray-100'>
      <span
        className='font-medium text-gray-700'>
Toplam Ağırlık
      </span>
      <span
        className='text-gray-900'>7.8 kg      </span>
      </div>
      </CardContent>
      </Card>
      </div>
      </div>
      </section>

{/* Product Features and Advantages */}
            <section
        className='py-16 bg-white'>
      <div
        className='container mx-auto px-4'>
      <div
        className='text-center mb-12'>
      <h2
        className='text-3xl font-bold text-gray-900 mb-4'>
Ürün Özellikleri ve Avantajları
      </h2>
      <p
        className='text-lg text-gray-600 max-w-2xl mx-auto'>
HST-C200'nin sunduğu gelişmiş özellikler ve endüstriyel;
avantajları
      </p>
      </div>

      <div
        className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
{/* Özellikler */}
      <Card
        className='p-6'>
      <CardHeader
        className='pb-4'>
      <CardTitle
        className='flex items-center gap-2 text-xl'>
      <Zap
        className='h-5 w-5 text-blue-600' />
Özellikler
      </CardTitle>
      </CardHeader>
      <CardContent
        className='space-y-3'>
{productData.features.map((feature, index) => (
<div key={index} className='flex items-center space-x-3'>
      <div
        className='w-2 h-2 bg-blue-600 rounded-full'>      </div>
      <span
        className='text-gray-700'>{feature}      </span>
      </div>
))}
      </CardContent>
      </Card>

{/* Uygulama Alanları */}
      <Card
        className='p-6'>
      <CardHeader
        className='pb-4'>
      <CardTitle
        className='flex items-center gap-2 text-xl'>
      <Package
        className='h-5 w-5 text-green-600' />
Uygulama Alanları
      </CardTitle>
      </CardHeader>
      <CardContent
        className='space-y-3'>
{productData.applications.map((application, index) => (
<div key={index} className='flex items-center space-x-3'>
      <div
        className='w-2 h-2 bg-green-600 rounded-full'>      </div>
      <span
        className='text-gray-700'>{application}      </span>
      </div>
))}
      </CardContent>
      </Card>

{/* Avantajlar */}
      <Card
        className='p-6'>
      <CardHeader
        className='pb-4'>
      <CardTitle
        className='flex items-center gap-2 text-xl'>
      <Info
        className='h-5 w-5 text-purple-600' />
Avantajlar
      </CardTitle>
      </CardHeader>
      <CardContent
        className='space-y-3'>
{productData.advantages.map((advantage, index) => (
<div key={index} className='flex items-center space-x-3'>
      <div
        className='w-2 h-2 bg-purple-600 rounded-full'>      </div>
      <span
        className='text-gray-700'>{advantage}      </span>
      </div>
))}
      </CardContent>
      </Card>
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
