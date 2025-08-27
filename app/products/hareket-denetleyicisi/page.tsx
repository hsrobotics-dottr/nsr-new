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

// Hareket Denetleyicisi ürün verileri;
const motionControllers = [
  {
    id: 'hrc-i-series',
    model: 'HRC-I Serisi',
    title: 'Kontrol-Sürücü Entegre Sistemi',
    description:
      'The HRC-I series control-drive integrated system adopts industry-leading multi-core heterogeneous SoC chips, and integrates the most advanced robot motion control technology and servo drive technology so far, to re-create a new generation of lightweight, high-performance robot control system. Perfect motor drive, input/output, field bus and other control interfaces, and platform system support, to maximize the reliable control of SCARA robots, small load 6-axis robots, small CNC machine tools and automation workstations.',
    image: '/img/MotionController/hrc-i.png',
    specs: {
      type: 'Entegre Sistem',
      dimensions: '405.5*213.8*159.5mm',
      weight: '12kg',
      protectionLevel: 'IP20',
      inputVoltage: '220VAC ± 15%, 50Hz ± 20%',
      maxCurrent: '30Arms',
    },
    features: [
      'Multi-Core SoC Teknolojisi',
      'Robot Hareket Kontrolü',
      'Servo Sürücü Teknolojisi',
      'SCARA Robot Desteği',
      '6-Eksen Robot Desteği',
    ],
    applications: [
      'SCARA Robotlar',
      'Küçük Yük 6-Eksen Robotlar',
      'Küçük CNC Makineleri',
      'Otomasyon İş İstasyonları',
    ],
    slug: 'hrc-i-series',
  },
  {
    id: 'hrc-s1',
    model: 'HRC-S1',
    title: 'Elektrik Panosu',
    description: 'Kompakt ve güvenli elektrik panosu çözümü',
    image: '/img/MotionController/hrc-s1.png',
    specs: {
      type: 'Elektrik Panosu',
      voltage: '220V-380V',
      power: '5000W',
      weight: '56kg',
      protectionLevel: 'IP54',
    },
    features: ['Güvenli Tasarım', 'Modüler Yapı', 'Kolay Bakım'],
    applications: [
      'Güç Dağıtımı',
      'Kontrol Sistemleri',
      'Endüstriyel Tesisler',
    ],
    slug: 'hrc-s1',
  },
  {
    id: 'hrc-s2',
    model: 'HRC-S2',
    title: 'Elektrik Panosu',
    description: 'Yüksek güç kapasiteli endüstriyel elektrik panosu',
    image: '/img/MotionController/hrc-s2.png',
    specs: {
      type: 'Elektrik Panosu',
      voltage: '220V-380V',
      power: '19000W',
      weight: '80kg',
      protectionLevel: 'IP54',
    },
    features: ['Yüksek Güç', 'Gelişmiş Koruma', 'Uzaktan İzleme'],
    applications: ['Büyük Sistemler', 'Fabrika Otomasyonu', 'Güç Santralleri'],
    slug: 'hrc-s2',
  },
];

export default function HareketDenetleyicisiPage() {
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
              Hareket Denetleyicisi
            </h1>
            <p className='text-xl md:text-2xl text-blue-100 mb-8'>
              Kontrol-Sürücü Entegre Sistemleri ve Elektrik Panoları
            </p>
            <p className='text-lg text-blue-200 max-w-3xl mx-auto leading-relaxed'>
              Gelişmiş kontrol ve sürücü entegrasyonu ile yüksek performanslı
              hareket kontrolü sağlayan endüstriyel çözümler.
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
                Hareket Denetleyicisi Ürün Modelleri
              </h2>
              <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
                Farklı güç kapasiteleri ve uygulama alanları ile ihtiyaçlarınıza
                uygun hareket kontrol çözümü seçin.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {motionControllers.map((controller, index) => (
                <Card
                  key={index}
                  className='group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-gray-200'
                >
                  <CardHeader className='pb-4'>
                    <div className='relative h-48 bg-gray-50 rounded-lg overflow-hidden mb-4'>
                      <Image
                        src={controller.image}
                        alt={controller.model}
                        fill
                        className='object-contain p-4 group-hover:scale-105 transition-transform duration-300'
                      />
                    </div>
                    <CardTitle className='text-xl font-bold text-gray-800 mb-2'>
                      {controller.model}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-4'>
                    <div className='grid grid-cols-2 gap-3'>
                      <div className='bg-blue-50 p-3 rounded-lg text-center'>
                        <div className='text-xs text-gray-600 mb-1'>
                          Ağırlık
                        </div>
                        <div className='text-sm font-bold text-blue-600'>
                          {controller.specs.weight}
                        </div>
                      </div>
                      <div className='bg-green-50 p-3 rounded-lg text-center'>
                        <div className='text-xs text-gray-600 mb-1'>
                          Koruma Seviyesi
                        </div>
                        <div className='text-sm font-bold text-green-600'>
                          {controller.specs.protectionLevel}
                        </div>
                      </div>
                    </div>

                    <div className='pt-4'>
                      <Link
                        href={`/products/${controller.slug}`}
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
        <div className='container mx-auto px-4 max-w-7xl text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-6'>
            Hareket Denetleyicisi Hakkında Daha Fazla Bilgi
          </h2>
          <p className='text-xl text-blue-100 mb-8 max-w-3xl mx-auto'>
            Teknik özellikler, kullanım kılavuzları ve fiyat teklifleri için;
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
                Hareket denetleyicisi ürünleri hakkında bilgi almak için formu;
                doldurun.
              </p>
            </div>

            <div className='p-6 border-b border-gray-200'>
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
                    placeholder='Hareket denetleyicisi ürünleri hakkında bilgi almak istiyorum...'
                  />
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
