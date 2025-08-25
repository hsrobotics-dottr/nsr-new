'use client';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ExternalLink, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Servo Motor ürün verileri;
const servoMotors = [
{
id: 'lb-110st',
model: 'LB Series 110ST',
title: 'Motor',
description: 'Yüksek performanslı 110ST serisi servo motor',
image: '/img/servomotors/LB Series 110ST Motor.png',
    specs: {
    type: '110ST Motor',
voltage: '220V',
power: '110W',
weight: '2.1 kg',
},
features: ['Yüksek Performans', 'Hassas Kontrol', 'Dayanıklı Yapı'],
applications: [
'Hassas Konumlandırma',
'CNC Sistemleri',
'Robotik Uygulamalar',
],
slug: 'lb-110st-motor',
},
{
id: 'lb-130st',
model: 'LB Series 130ST',
title: 'Motor',
description: 'Güçlü 130ST serisi servo motor çözümü',
image: '/img/servomotors/LB Series 130ST Motor.png',
    specs: {
    type: '130ST Motor',
voltage: '220V',
power: '130W',
weight: '2.5 kg',
},
features: ['Güçlü Motor', 'Yüksek Tork', 'Güvenilir Çalışma'],
applications: [
'Endüstriyel Otomasyon',
'Ağır Yük Taşıma',
'Pres Operasyonları',
],
slug: 'lb-130st-motor',
},
{
id: 'lb-150st',
model: 'LB Series 150ST',
title: 'Motor',
description: '150ST serisi yüksek güçlü servo motor',
image: '/img/servomotors/LB Series 150ST Motor.png',
    specs: {
    type: '150ST Motor',
voltage: '220V',
power: '150W',
weight: '3.0 kg',
},
features: ['Yüksek Güç', 'Maksimum Tork', 'Endüstriyel Dayanım'],
applications: ['Ağır Sanayi', 'Metal İşleme', 'Büyük Sistemler'],
slug: 'lb-150st-motor',
},
{
id: 'hdd-110st',
model: 'HDD Series 110ST',
title: 'Motor',
description: 'HDD serisi 110ST yüksek verimli servo motor',
image: '/img/servomotors/HDD Series 110ST Motor.png',
    specs: {
    type: '110ST Motor',
voltage: '220V',
power: '110W',
weight: '2.2 kg',
},
features: ['Yüksek Verim', 'Düşük Gürültü', 'Enerji Tasarrufu'],
applications: [
'Hassas Sistemler',
'Laboratuvar Ekipmanları',
'Medikal Cihazlar',
],
slug: 'hdd-110st-motor',
},
{
id: 'hdd-130st',
model: 'HDD Series 130ST',
title: 'Motor',
description: 'HDD serisi 130ST gelişmiş servo motor',
image: '/img/servomotors/HDD Series 130ST Motor.png',
    specs: {
    type: '130ST Motor',
voltage: '220V',
power: '130W',
weight: '2.6 kg',
},
features: ['Gelişmiş Kontrol', 'Yüksek Hassasiyet', 'Uzun Ömür'],
applications: ['Kalite Kontrol', 'Test Sistemleri', 'Ölçüm Cihazları'],
slug: 'hdd-130st-motor',
},
{
id: 'hdd-180st',
model: 'HDD Series 180ST',
title: 'Motor',
description: 'HDD serisi 180ST yüksek güçlü servo motor',
image: '/img/servomotors/HDD Series 180ST Motor.png',
    specs: {
    type: '180ST Motor',
voltage: '220V',
power: '180W',
weight: '3.5 kg',
},
features: ['Yüksek Güç', 'Gelişmiş Soğutma', 'Endüstriyel Güç'],
applications: ['Ağır Makineler', 'Endüstriyel Robotlar', 'Büyük Sistemler'],
slug: 'hdd-180st-motor',
},
{
id: 'ldd-110st',
model: 'LDD Series 110ST',
title: 'Motor',
description: 'LDD serisi 110ST kompakt servo motor',
image: '/img/servomotors/LDD Series 110ST Motor.png',
    specs: {
    type: '110ST Motor',
voltage: '220V',
power: '110W',
weight: '1.8 kg',
},
features: ['Kompakt Tasarım', 'Hafif Yapı', 'Kolay Kurulum'],
applications: ['Küçük Sistemler', 'Portatif Cihazlar', 'Otomasyon'],
slug: 'ldd-110st-motor',
},
{
id: 'ldd-130st',
model: 'LDD Series 130ST',
title: 'Motor',
description: 'LDD serisi 130ST hafif servo motor',
image: '/img/servomotors/LDD Series 130ST Motor.png',
    specs: {
    type: '130ST Motor',
voltage: '220V',
power: '130W',
weight: '2.0 kg',
},
features: ['Hafif Tasarım', 'Yüksek Verim', 'Esnek Kullanım'],
applications: ['Mobil Sistemler', 'Hafif Otomasyon', 'Küçük Robotlar'],
slug: 'ldd-130st-motor',
},
{
id: 'hee-80st',
model: 'HEE Series 80ST',
title: 'Motor',
description: 'HEE serisi 80ST yüksek verimli servo motor',
image: '/img/servomotors/HEE Series 80ST Motor.png',
    specs: {
    type: '80ST Motor',
voltage: '220V',
power: '80W',
weight: '1.5 kg',
},
features: ['Yüksek Verim', 'Düşük Güç', 'Çevre Dostu'],
applications: [
'Enerji Tasarruflu Sistemler',
'Küçük Otomasyon',
'Hassas Kontrol',
],
slug: 'hee-80st-motor',
},
{
id: 'lee-80st',
model: 'LEE Series 80ST',
title: 'Motor',
description: 'LEE serisi 80ST kompakt servo motor',
image: '/img/servomotors/LEE Series 80ST Motor.png',
    specs: {
    type: '80ST Motor',
voltage: '220V',
power: '80W',
weight: '1.3 kg',
},
features: ['Kompakt Boyut', 'Hafif Yapı', 'Kolay Entegrasyon'],
applications: ['Küçük Cihazlar', 'Portatif Sistemler', 'Hafif Otomasyon'],
slug: 'lee-80st-motor',
},
{
id: 'lee-60st',
model: 'LEE Series 60ST',
title: 'Motor',
description: 'LEE serisi 60ST mini servo motor',
image: '/img/servomotors/LEE Series 60ST Motor.png',
    specs: {
    type: '60ST Motor',
voltage: '220V',
power: '60W',
weight: '1.0 kg',
},
features: ['Mini Boyut', 'Ultra Hafif', 'Maksimum Kompakt'],
applications: ['Mini Sistemler', 'Hassas Cihazlar', 'Küçük Robotlar'],
slug: 'lee-60st-motor',
},
];

export default function ServoMotorPage() {
  
const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return (
          <div
        className='min-h-screen bg-white'>
<Header />

{/* Hero Section */}
            <section
        className='relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white pt-20 pb-16'>
      <div
        className='absolute inset-0 bg-black/20'>      </div>
      <div
        className='container mx-auto max-w-8xl relative z-10'>
      <div
        className='max-w-4xl mx-auto text-center'>
      <div
        className='flex items-center justify-center mb-6'>
<Link
href='/products'
className='flex items-center text-blue-200 hover:text-white transition-colors duration-300'
>
      <ArrowLeft
        className='w-5 h-5 mr-2' />
Ürün Merkezi
      </Link>
      </div>
      <h1
        className='text-4xl md:text-6xl font-bold mb-6'>Servo Motor      </h1>
      <p
        className='text-xl md:text-2xl text-blue-100 mb-8'>
LB, HDD, LDD, HEE ve LEE Serisi Servo Motorlar
      </p>
      <p
        className='text-lg text-blue-200 max-w-3xl mx-auto leading-relaxed'>
Farklı güç kapasiteleri ve uygulama alanları için özel olarak;
tasarlanmış yüksek performanslı servo motor çözümleri.
      </p>
      </div>
      </div>
      </section>

{/* Ürün Listesi */}
            <section
        className='py-16 bg-white'>
      <div
        className='container mx-auto max-w-8xl'>
      <div
        className='max-w-7xl mx-auto'>
      <div
        className='text-center mb-12'>
      <h2
        className='text-3xl md:text-4xl font-bold text-gray-800 mb-6'>
Servo Motor Ürün Modelleri
      </h2>
      <p
        className='text-lg text-gray-600 max-w-3xl mx-auto'>
Farklı güç kapasiteleri ve uygulama alanları ile ihtiyaçlarınıza;
uygun servo motor çözümü seçin.
      </p>
      </div>

      <div
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
{servoMotors.map((motor, index) => (
<Card
key={index}
className='group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-gray-200'
>
      <CardHeader
        className='pb-4'>
      <div
        className='relative h-48 bg-gray-50 rounded-lg overflow-hidden mb-4'>
<Image
src={motor.image}
alt={motor.model}
fill;
className='object-contain p-4 group-hover:scale-105 transition-transform duration-300'
/>
      </div>
      <CardTitle
        className='text-xl font-bold text-gray-800 mb-2'>
{motor.model}
      </CardTitle>
      <p
        className='text-gray-600 text-sm leading-relaxed'>
{motor.description}
      </p>
      </CardHeader>
      <CardContent
        className='space-y-4'>
      <div
        className='grid grid-cols-2 gap-3'>
      <div
        className='bg-blue-50 p-3 rounded-lg text-center'>
      <div
        className='text-xs text-gray-600 mb-1'>Güç      </div>
      <div
        className='text-sm font-bold text-blue-600'>
{motor.specs.power}
      </div>
      </div>
      <div
        className='bg-green-50 p-3 rounded-lg text-center'>
      <div
        className='text-xs text-gray-600 mb-1'>
Ağırlık
      </div>
      <div
        className='text-sm font-bold text-green-600'>
{motor.specs.weight}
      </div>
      </div>
      </div>

      <div
        className='pt-4'>
<Link
href={`/products/${motor.slug}`}
className='w-full bg-blue-600 hover:bg-blue-700 text-white inline-flex items-center justify-center px-4 py-2 rounded-lg transition-colors duration-200'
>
      <ExternalLink
        className='w-4 h-4 mr-2' />
Detayları İncele
      </Link>
      </div>
      </CardContent>
      </Card>
))}
      </div>
      </div>
      </div>
      </section>

{/* CTA Section */}
            <section
        className='py-16 bg-blue-600 text-white'>
      <div
        className='container mx-auto max-w-8xl text-center'>
      <h2
        className='text-3xl md:text-4xl font-bold mb-6'>
Servo Motor Hakkında Daha Fazla Bilgi
      </h2>
      <p
        className='text-xl text-blue-100 mb-8 max-w-3xl mx-auto'>
Teknik özellikler, kullanım kılavuzları ve fiyat teklifleri için;
uzman ekibimizle iletişime geçin
      </p>
      <div
        className='flex justify-center'>
<Button
size='lg'
className='bg-white text-blue-600 hover:bg-gray-100 px-8 py-3'
onClick={() => setIsContactFormOpen(true)}
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
Servo motor ürünleri hakkında bilgi almak için formu doldurun.
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
placeholder='Servo motor ürünleri hakkında bilgi almak istiyorum...'
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
