'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

// Lazy load heavy components;
const Header = dynamic(
() => import('@/components/header').then(mod => ({ default: mod.Header })),
{
ssr: false,
loading: () =>       <div
        className='h-20 bg-gray-900' />,
}
);

const Footer = dynamic(
() => import('@/components/footer').then(mod => ({ default: mod.Footer })),
{
ssr: false,
loading: () => null,
}
);

// Ürün serileri verisi;
const productSeries = [
{
name: 'JR Serisi',
title: 'Endüstriyel Robot Kollar',
description:
'Yüksek hassasiyet ve performans sunan 6 eksenli endüstriyel robot kollar',
image: '/img/industrial/JR/HSR-JR603-570.png',
href: '/products/jr-serisi',
},
{
name: 'CR Serisi',
title: 'İşbirlikçi Robotlar',
description:
'İnsan-robot işbirliği için tasarlanmış güvenli collaborative robotlar',
image: '/img/Collaborative/CR/HSR-CR605-790.png',
href: '/products/cr-serisi',
},
{
name: 'SR Serisi',
title: 'SCARA Robotlar',
description:
'Hızlı ve hassas horizontal hareket için optimize edilmiş SCARA robotlar',
image: '/img/industrial/SR/HSR-SR10-800.png',
href: '/products/sr-serisi',
},
{
name: 'BR Serisi',
title: 'Ağır Yük Robotları',
description:
'Yüksek yük kapasiteli endüstriyel uygulamalar için güçlü robotlar',
image: '/img/industrial/BR/HSR-BR610-1300.png',
href: '/products/br-serisi',
},
{
name: 'CO Serisi',
title: 'Kompakt Robotlar',
description:
'Sınırlı alanlarda maksimum verimlilik sunan kompakt robot çözümleri',
image: '/img/Collaborative/CO/HSR-CO605-1000.png',
href: '/products/co-serisi',
},
{
name: 'JH Serisi',
title: 'Yüksek Performans Robotları',
description:
'Uzun erişim mesafesi ve yüksek performans gerektiren uygulamalar için',
image: '/img/industrial/JH/HSR-JH605-1500.png',
href: '/products/jh-serisi',
},
{
name: 'MD Serisi',
title: 'Çok Fonksiyonlu Robotlar',
description:
'Çeşitli endüstriyel uygulamalara uyum sağlayan esnek robot sistemleri',
image: '/img/industrial/MD/HSR-MD410-1500.png',
href: '/products/md-serisi',
},
{
name: 'AMR Serisi',
title: 'Otonom Mobil Robotlar',
description:
'Akıllı navigasyon ile otonom hareket eden mobil robot platformları',
image: '/img/industrial/JR/HSR-JR603-570.png',
href: '/products/amr-serisi',
},
{
name: 'HST-F-XY3',
title: 'Yüzer Flanş Sistemi',
description:
'Endüstriyel robotlarda hassas pozisyonlama ve esnek montaj için geliştirilmiş yüzer flanş sistemi',
image: '/img/floatingflange/floating-flange.png',
href: '/products/yuzer-flanj',
},
{
name: 'HST-AFC-P100',
title: 'Kuvvet Kontrol Sistemi',
description:
'Endüstriyel robotlarda hassas kuvvet kontrolü ve kompansasyon için geliştirilmiş sistem',
image: '/img/forcecontrol/HST-AFC-P100.png',
href: '/products/kuvvet-kontrol',
},
{
name: 'HST-AFC-E100',
title: 'Terminal Active Force Control',
description:
'Yerçekimi kompansatörü algoritması ile tam pozisyon aktif kuvvet kontrolü sistemi',
image: '/img/forcecontrol/HST-AFC-P100.png',
href: '/products/kuvvet-kontrol/terminal-active',
},
{
name: 'HST-M-RC350',
title: 'Taşlama Araçları',
description:
'Endüstriyel taşlama ve cilalama operasyonları için yüksek performanslı taşlama araçları',
image: '/img/grinding/HST-M-RC350.png',
href: '/products/taslama-araclari',
},
];

export default function ProductsPage() {
  
  return (
          <div
        className='min-h-screen bg-white'>
<Header />

{/* Hero Section */}
            <section
        className='relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white pt-32 pb-16'>
      <div
        className='absolute inset-0 bg-black/20'>      </div>
      <div
        className='container mx-auto px-4 relative z-10'>
      <div
        className='max-w-4xl mx-auto text-center'>
      <h1
        className='text-4xl md:text-6xl font-bold mb-6'>
Ürün       <span
        className='text-blue-200'>Merkezi      </span>
      </h1>
      <p
        className='text-xl md:text-2xl text-blue-100 mb-8'>
Endüstriyel Otomasyon Çözümleri
      </p>
      <p
        className='text-lg text-blue-200 max-w-3xl mx-auto leading-relaxed'>
HSRobot olarak, farklı endüstriyel ihtiyaçlara yönelik geniş robot;
serisi yelpazemiz ile üretim süreçlerinizi otomatikleştirin ve;
verimliliğinizi artırın.
      </p>
      </div>
      </div>
      </section>

{/* Ürün Serileri */}
            <section
        className='py-16 bg-white'>
      <div
        className='container mx-auto px-4'>
      <div
        className='text-center mb-12'>
      <h2
        className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
Robot Serilerimiz
      </h2>
      <p
        className='text-xl text-gray-600 max-w-3xl mx-auto'>
Her endüstriyel ihtiyaca uygun tasarlanmış kapsamlı robot serisi;
yelpazemizi keşfedin
      </p>
      </div>

      <div
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
{productSeries.map((series, index) => (
<Card
key={index}
className='group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-gray-200'
>
      <CardHeader
        className='p-0'>
      <div
        className='h-48 bg-gray-50 relative overflow-hidden'>
      <div
        className='flex items-center justify-center h-full'>
<Image
src={series.image}
alt={series.name}
width={200}
height={200}
className='object-contain p-4 group-hover:scale-105 transition-transform duration-300'
/>
      </div>
      </div>
      </CardHeader>

      <CardContent
        className='p-6'>
      <div
        className='mb-6'>
      <h3
        className='text-xl font-bold text-gray-900 mb-2'>
{series.name}
      </h3>
      <h4
        className='text-lg font-semibold text-gray-700 mb-3'>
{series.title}
      </h4>
      <p
        className='text-gray-600 text-sm leading-relaxed'>
{series.description}
      </p>
      </div>

<Link href={series.href} className='block'>
      <Button
        className='w-full bg-blue-600 hover:bg-blue-700 text-white group'>
<span>Ürünleri Gör      </span>
      <ArrowRight
        className='ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200' />
      </Button>
      </Link>
      </CardContent>
      </Card>
))}
      </div>
      </div>
      </section>

<Footer />
      </div>
);
}
