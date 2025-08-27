'use client';

export const dynamic = 'force-dynamic';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ExternalLink, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Endüstriyel Robot kategorileri
const industrialRobotCategories = [
  {
    id: 'jr-serisi',
    title: 'JR Serisi',
    description: 'Yüksek hassasiyetli ve hızlı endüstriyel robotlar',
    image: '/img/industrial/JR/HSR-JR603-570.png',
    specs: {
      type: 'Endüstriyel Robot',
      payload: '3-20 kg',
      reach: '570-2100 mm',
      applications: 'Kaynak, Montaj, Paletleme',
    },
    features: ['Yüksek Hassasiyet', 'Hızlı Çevrim', 'Güvenilir Performans'],
    href: '/products/jr-serisi',
  },
  {
    id: 'jh-serisi',
    title: 'JH Serisi',
    description: 'Ağır yük taşıma kapasitesine sahip endüstriyel robotlar',
    image: '/img/industrial/JH/HSR-JH605-1500.png',
    specs: {
      type: 'Endüstriyel Robot',
      payload: '5-30 kg',
      reach: '1500-2700 mm',
      applications: 'Ağır Yük Taşıma, Montaj, Transfer',
    },
    features: ['Yüksek Yük Kapasitesi', 'Geniş Erişim', 'Güçlü Yapı'],
    href: '/products/jh-serisi',
  },
  {
    id: 'br-serisi',
    title: 'BR Serisi',
    description: 'Kompakt boyutlu ve esnek endüstriyel robotlar',
    image: '/img/industrial/BR/HSR-BR610-1300.png',
    specs: {
      type: 'Endüstriyel Robot',
      payload: '10-16 kg',
      reach: '1100-1600 mm',
      applications: 'Montaj, Test, Paketleme',
    },
    features: ['Kompakt Tasarım', 'Esnek Uygulama', 'Kolay Entegrasyon'],
    href: '/products/br-serisi',
  },
  {
    id: 'sr-serisi',
    title: 'SR Serisi',
    description: 'Özel uygulamalar için tasarlanmış endüstriyel robotlar',
    image: '/img/industrial/SR/HSR-SR10-800.png',
    specs: {
      type: 'Endüstriyel Robot',
      payload: '5-12 kg',
      reach: '1200-1800 mm',
      applications: 'Özel Uygulamalar, Test, Montaj',
    },
    features: ['Özel Tasarım', 'Çok Yönlü', 'Yüksek Adaptasyon'],
    href: '/products/sr-serisi',
  },
  {
    id: 'md-serisi',
    title: 'MD Serisi',
    description: 'Orta boyutlu ve çok yönlü endüstriyel robotlar',
    image: '/img/industrial/MD/HSR-MD410-1500.png',
    specs: {
      type: 'Endüstriyel Robot',
      payload: '5-12 kg',
      reach: '1200-1800 mm',
      applications: 'Montaj, Test, Transfer',
    },
    features: ['Çok Yönlü', 'Orta Boyut', 'Güvenilir'],
    href: '/products/md-serisi',
  },
  {
    id: 'hc-serisi',
    title: 'HC Serisi',
    description: 'Yüksek hızda çalışan endüstriyel robotlar',
    image: '/img/industrial/HC/HSR-HC403-590.png',
    specs: {
      type: 'Endüstriyel Robot',
      payload: '5-12 kg',
      reach: '1200-1800 mm',
      applications: 'Yüksek Hız Uygulamaları, Montaj, Test',
    },
    features: ['Yüksek Hız', 'Hassas Kontrol', 'Hızlı Çevrim'],
    href: '/products/hc-serisi',
  },
];

export default function IndustrialRobotsPage() {
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
              Endüstriyel Robotlar
            </h1>
            <p className='text-xl md:text-2xl text-blue-100 mb-8'>
              JR, JH, BR, SR, MD ve HC Serisi Endüstriyel Robotlar
            </p>
            <p className='text-lg text-blue-200 max-w-3xl mx-auto leading-relaxed'>
              Yüksek hassasiyet, güvenilir performans ve esnek uygulama alanları
              ile endüstriyel otomasyonunuzu bir üst seviyeye taşıyın.
            </p>
          </div>
        </div>
      </section>

      {/* Kategori Listesi */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto max-w-8xl'>
          <div className='max-w-7xl mx-auto'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-6'>
                Endüstriyel Robot Kategorileri
              </h2>
              <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
                Farklı yük kapasiteleri ve uygulama alanları ile ihtiyaçlarınıza
                uygun endüstriyel robot çözümü seçin.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {industrialRobotCategories.map((category, index) => (
                <Card
                  key={index}
                  className='group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-gray-200'
                >
                  <CardHeader className='pb-4'>
                    <div className='relative h-48 bg-gray-50 rounded-lg overflow-hidden mb-4'>
                      <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        className='object-contain p-4 group-hover:scale-105 transition-transform duration-300'
                      />
                    </div>
                    <CardTitle className='text-xl font-bold text-gray-800 mb-2'>
                      {category.title}
                    </CardTitle>
                    <p className='text-gray-600 text-sm leading-relaxed'>
                      {category.description}
                    </p>
                  </CardHeader>
                  <CardContent className='space-y-4'>
                    <div className='grid grid-cols-2 gap-3'>
                      <div className='bg-blue-50 p-3 rounded-lg text-center'>
                        <div className='text-xs text-gray-600 mb-1'>Yük</div>
                        <div className='text-sm font-bold text-blue-600'>
                          {category.specs.payload}
                        </div>
                      </div>
                      <div className='bg-green-50 p-3 rounded-lg text-center'>
                        <div className='text-xs text-gray-600 mb-1'>Erişim</div>
                        <div className='text-sm font-bold text-green-600'>
                          {category.specs.reach}
                        </div>
                      </div>
                    </div>

                    <div className='pt-4'>
                      <Link
                        href={category.href}
                        className='w-full bg-blue-600 hover:bg-blue-700 text-white inline-flex items-center justify-center px-4 py-2 rounded-lg transition-colors duration-200'
                      >
                        <ExternalLink className='w-4 h-4 mr-2' />
                        Ürünleri Gör
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
            Endüstriyel Robotlar Hakkında Daha Fazla Bilgi
          </h2>
          <p className='text-xl text-blue-100 mb-8 max-w-3xl mx-auto'>
            Teknik özellikler, uygulama örnekleri ve fiyat teklifleri için uzman
            ekibimizle iletişime geçin
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
        <div className='fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4'>
          <div className='bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto'>
            <div className='p-6 border-b border-gray-200'>
              <div className='flex items-center justify-between'>
                <h3 className='text-2xl font-bold text-gray-800'>
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
              <p className='text-gray-600 mt-2'>
                Endüstriyel robotlar hakkında bilgi almak için formu doldurun.
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
                    placeholder='Endüstriyel robotlar hakkında bilgi almak istiyorum...'
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
