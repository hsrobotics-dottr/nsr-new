'use client';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ExternalLink, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Hızlı Değiştirilen Disk ürün verileri;
const quickChangeDisks = [
  {
    id: 'hst-c06',
    model: 'HST-C06',
    title: 'Hızlı Değiştirilen Disk',
    description: 'Kompakt boyutlu hızlı değiştirilen disk sistemi',
    image: '/img/quick/HST-C06.png',
    specs: {
      type: 'Hızlı Değiştirilen Disk',
      capacity: '6mm',
      material: 'Yüksek Kalite Çelik',
      weight: '0.8 kg',
    },
    features: ['Kompakt Tasarım', 'Hızlı Değişim', 'Yüksek Dayanım'],
    applications: [
      'Küçük Kesim İşlemleri',
      'Hassas İşleme',
      'Kompakt Sistemler',
    ],
    slug: 'hst-c06',
  },
  {
    id: 'hst-c20',
    model: 'HST-C20',
    title: 'Hızlı Değiştirilen Disk',
    description: 'Orta boyutlu hızlı değiştirilen disk çözümü',
    image: '/img/quick/HST-C20.png',
    specs: {
      type: 'Hızlı Değiştirilen Disk',
      capacity: '20mm',
      material: 'Yüksek Kalite Çelik',
      weight: '1.2 kg',
    },
    features: ['Orta Boyut', 'Hızlı Değişim', 'Çok Yönlü Kullanım'],
    applications: [
      'Orta Boyutlu Kesim',
      'Genel İşleme',
      'Endüstriyel Uygulamalar',
    ],
    slug: 'hst-c20',
  },
  {
    id: 'hst-c70',
    model: 'HST-C70',
    title: 'Hızlı Değiştirilen Disk',
    description: '70mm kapasiteli hızlı değiştirilen disk sistemi',
    image: '/img/quick/HST-C70.png',
    specs: {
      type: 'Hızlı Değiştirilen Disk',
      capacity: '70mm',
      material: 'Yüksek Kalite Çelik',
      weight: '2.1 kg',
    },
    features: ['70mm Kapasite', 'Güçlü Yapı', 'Endüstriyel Dayanım'],
    applications: [
      'Büyük Kesim İşlemleri',
      'Ağır İşleme',
      'Endüstriyel Sistemler',
    ],
    slug: 'hst-c70',
  },
  {
    id: 'hst-c200',
    model: 'HST-C200',
    title: 'Hızlı Değiştirilen Disk',
    description: '200mm kapasiteli profesyonel hızlı değiştirilen disk',
    image: '/img/quick/HST-C200.png',
    specs: {
      type: 'Hızlı Değiştirilen Disk',
      capacity: '200mm',
      material: 'Yüksek Kalite Çelik',
      weight: '4.5 kg',
    },
    features: ['200mm Kapasite', 'Profesyonel Kalite', 'Yüksek Performans'],
    applications: [
      'Profesyonel Kesim',
      'Büyük Sistemler',
      'Endüstriyel Üretim',
    ],
    slug: 'hst-c200',
  },
  {
    id: 'hst-c300',
    model: 'HST-C300',
    title: 'Hızlı Değiştirilen Disk',
    description: '300mm kapasiteli endüstriyel hızlı değiştirilen disk',
    image: '/img/quick/HST-C300.png',
    specs: {
      type: 'Hızlı Değiştirilen Disk',
      capacity: '300mm',
      material: 'Yüksek Kalite Çelik',
      weight: '6.8 kg',
    },
    features: ['300mm Kapasite', 'Endüstriyel Güç', 'Maksimum Dayanım'],
    applications: [
      'Endüstriyel Kesim',
      'Ağır Sanayi',
      'Büyük Üretim Sistemleri',
    ],
    slug: 'hst-c300',
  },
  {
    id: 'hst-c500',
    model: 'HST-C500',
    title: 'Hızlı Değiştirilen Disk',
    description: '500mm kapasiteli büyük ölçekli hızlı değiştirilen disk',
    image: '/img/quick/HST-C500.png',
    specs: {
      type: 'Hızlı Değiştirilen Disk',
      capacity: '500mm',
      material: 'Yüksek Kalite Çelik',
      weight: '12.5 kg',
    },
    features: ['500mm Kapasite', 'Büyük Ölçek', 'Endüstriyel Güç'],
    applications: ['Büyük Ölçekli Kesim', 'Ağır Sanayi', 'Endüstriyel Üretim'],
    slug: 'hst-c500',
  },
  {
    id: 'hst-c700',
    model: 'HST-C700',
    title: 'Hızlı Değiştirilen Disk',
    description: '700mm kapasiteli maksimum boyutlu hızlı değiştirilen disk',
    image: '/img/quick/HST-C700.png',
    specs: {
      type: 'Hızlı Değiştirilen Disk',
      capacity: '700mm',
      material: 'Yüksek Kalite Çelik',
      weight: '18.2 kg',
    },
    features: ['700mm Kapasite', 'Maksimum Boyut', 'Endüstriyel Güç'],
    applications: [
      'Maksimum Boyutlu Kesim',
      'Ağır Sanayi',
      'Endüstriyel Üretim',
    ],
    slug: 'hst-c700',
  },
];

export default function QuickChangeDiskPage() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return (
    <div className='min-h-screen bg-white'>
      <Header />

      {/* Hero Section */}
      <section className='relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white pt-20 pb-16'>
        <div className='absolute inset-0 bg-black/20'></div>
        <div className='container mx-auto max-w-8xl relative z-10'>
          <div className='max-w-4xl mx-auto text-center'>
            <div className='flex items-center justify-center mb-6'>
              <Link
                href='/products'
                className='flex items-center text-blue-200 hover:text-white transition-colors duration-300'
              >
                <ArrowLeft className='w-5 h-5 mr-2' />
                Ürün Merkezi
              </Link>
            </div>
            <h1 className='text-4xl md:text-6xl font-bold mb-6'>
              Hızlı Değiştirilen Disk
            </h1>
            <p className='text-xl md:text-2xl text-blue-100 mb-8'>
              HST-C Serisi Hızlı Değiştirilen Disk Sistemleri
            </p>
            <p className='text-lg text-blue-200 max-w-3xl mx-auto leading-relaxed'>
              Farklı kapasitelerde ve boyutlarda hızlı değiştirilen disk
              çözümleri ile üretim verimliliğinizi artırın ve kesintisiz çalışma
              sağlayın.
            </p>
          </div>
        </div>
      </section>

      {/* Ürün Listesi */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto max-w-8xl'>
          <div className='max-w-7xl mx-auto'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-6'>
                Hızlı Değiştirilen Disk Ürün Modelleri
              </h2>
              <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
                Farklı kapasitelerde ve uygulama alanları ile ihtiyaçlarınıza
                uygun hızlı değiştirilen disk çözümü seçin.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {quickChangeDisks.map((disk, index) => (
                <Card
                  key={index}
                  className='group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-gray-200'
                >
                  <CardHeader className='pb-4'>
                    <div className='relative h-48 bg-gray-50 rounded-lg overflow-hidden mb-4'>
                      <Image
                        src={disk.image}
                        alt={disk.model}
                        fill
                        className='object-contain p-4 group-hover:scale-105 transition-transform duration-300'
                      />
                    </div>
                    <CardTitle className='text-xl font-bold text-gray-800 mb-2'>
                      {disk.model}
                    </CardTitle>
                    <p className='text-gray-600 text-sm leading-relaxed'>
                      {disk.description}
                    </p>
                  </CardHeader>
                  <CardContent className='space-y-4'>
                    <div className='grid grid-cols-2 gap-3'>
                      <div className='bg-blue-100 p-3 rounded-lg text-center'>
                        <div className='text-xs text-gray-600 mb-1'>
                          Kapasite
                        </div>
                        <div className='text-sm font-bold text-blue-700'>
                          {disk.specs.capacity}
                        </div>
                      </div>
                      <div className='bg-blue-50 p-3 rounded-lg text-center'>
                        <div className='text-xs text-gray-600 mb-1'>
                          Ağırlık
                        </div>
                        <div className='text-sm font-bold text-blue-600'>
                          {disk.specs.weight}
                        </div>
                      </div>
                    </div>

                    <div className='pt-4'>
                      <Link
                        href={`/products/${disk.slug}`}
                        className='w-full bg-blue-600 hover:bg-blue-700 text-white inline-flex items-center justify-center px-4 py-2 rounded-lg transition-colors duration-200'
                      >
                        <ExternalLink className='w-4 h-4 mr-2' />
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
      <section className='py-16 bg-blue-600 text-white'>
        <div className='container mx-auto max-w-8xl text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-6'>
            Hızlı Değiştirilen Disk Hakkında Daha Fazla Bilgi
          </h2>
          <p className='text-xl text-blue-100 mb-8 max-w-3xl mx-auto'>
            Teknik özellikler, kullanım kılavuzları ve fiyat teklifleri için
            uzman ekibimizle iletişime geçin
          </p>
          <div className='flex justify-center'>
            <Button
              size='lg'
              className='bg-white text-blue-600 hover:bg-gray-100 px-8 py-3'
              onClick={() => setIsContactFormOpen(true)}
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

      <Footer />
    </div>
  );
}
