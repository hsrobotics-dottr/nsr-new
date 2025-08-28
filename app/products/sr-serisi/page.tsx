'use client';

export const dynamic = 'force-dynamic';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ExternalLink, Factory, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// SR Serisi robot modelleri;
const srSeriesRobots = [
  {
    model: 'HSR-SR3-400',
    payload: '3kg',
    reach: '400mm',
    image: '/img/industrial/SR/HSR-SR3-400.png',
    specs: {
      dof: '6 Eksen',
      repeatability: '±0.02mm',
      maxSpeed: '4.5 m/s',
      weight: '12 kg',
    },
    features: ['Ultra Hassas', 'Kompakt Tasarım', 'Hızlı Hareket'],
    applications: ['Hassas Montaj', 'Elektronik', 'Test İşlemleri'],
  },
  {
    model: 'HSR-SR5-700',
    payload: '5kg',
    reach: '700mm',
    image: '/img/industrial/SR/HSR-SR5-700.png',
    specs: {
      dof: '6 Eksen',
      repeatability: '±0.03mm',
      maxSpeed: '3.8 m/s',
      weight: '16 kg',
    },
    features: ['Yüksek Hassasiyet', 'Orta Yük', 'Çok Amaçlı'],
    applications: ['Montaj', 'Paketleme', 'Kalite Kontrol'],
  },
  {
    model: 'HSR-SR6-500',
    payload: '6kg',
    reach: '500mm',
    image: '/img/industrial/SR/HSR-SR6-500.png',
    specs: {
      dof: '6 Eksen',
      repeatability: '±0.03mm',
      maxSpeed: '3.5 m/s',
      weight: '18 kg',
    },
    features: ['Güçlü Yük', 'Kompakt', 'Hassas İşlem'],
    applications: ['Ağır Montaj', 'Makine Besleme', 'Taşıma'],
  },
  {
    model: 'HSR-SR6-600',
    payload: '6kg',
    reach: '600mm',
    image: '/img/industrial/SR/HSR-SR6-600.png',
    specs: {
      dof: '6 Eksen',
      repeatability: '±0.03mm',
      maxSpeed: '3.5 m/s',
      weight: '19 kg',
    },
    features: ['Orta Erişim', 'Güçlü Yük', 'Esnek Kullanım'],
    applications: ['Montaj', 'Paletleme', 'CNC Besleme'],
  },
  {
    model: 'HSR-SR10-600',
    payload: '10kg',
    reach: '600mm',
    image: '/img/industrial/SR/HSR-SR10-600.png',
    specs: {
      dof: '6 Eksen',
      repeatability: '±0.05mm',
      maxSpeed: '3.0 m/s',
      weight: '25 kg',
    },
    features: ['Yüksek Yük', 'Güçlü Motor', 'Dayanıklı'],
    applications: ['Ağır Montaj', 'Metal İşleme', 'Kaynak'],
  },
  {
    model: 'HSR-SR10-800',
    payload: '10kg',
    reach: '800mm',
    image: '/img/industrial/SR/HSR-SR10-800.png',
    specs: {
      dof: '6 Eksen',
      repeatability: '±0.05mm',
      maxSpeed: '2.8 m/s',
      weight: '28 kg',
    },
    features: ['Geniş Erişim', 'Yüksek Yük', 'Çok Amaçlı'],
    applications: ['Paletleme', 'Büyük Montaj', 'Malzeme Taşıma'],
  },
  {
    model: 'HSR-SR20-800',
    payload: '20kg',
    reach: '800mm',
    image: '/img/industrial/SR/HSR-SR20-800.png',
    specs: {
      dof: '6 Eksen',
      repeatability: '±0.08mm',
      maxSpeed: '2.2 m/s',
      weight: '35 kg',
    },
    features: ['Ağır Yük', 'Güçlü Yapı', 'Endüstriyel'],
    applications: ['Ağır Sanayi', 'Otomotiv', 'Pres Besleme'],
  },
  {
    model: 'HSR-SR20-1000',
    payload: '20kg',
    reach: '1000mm',
    image: '/img/industrial/SR/HSR-SR20-1000.png',
    specs: {
      dof: '6 Eksen',
      repeatability: '±0.08mm',
      maxSpeed: '2.0 m/s',
      weight: '38 kg',
    },
    features: ['Maksimum Erişim', 'Ağır Yük', 'Profesyonel'],
    applications: ['Büyük Montaj', 'Yükleme/Boşaltma', 'Endüstriyel'],
  },
];

// Kullanım alanları;
const applicationAreas = [
  'Otomotiv Endüstrisi - Hassas Montaj ve Kaynak İşlemleri',
  'Elektronik Sektörü - Mikro Montaj ve Test',
  'Medikal Cihaz - Steril Üretim ve Montaj',
  'Gıda ve İlaç - Hijyenik Paketleme İşlemleri',
  'Plastik Endüstrisi - Enjeksiyon Sonrası İşlemler',
  'Tekstil Sektörü - Hassas Dokuma ve Dikim',
  'Optik Endüstri - Lens ve Prizma Montajı',
  'Saatçilik - Hassas Mekanik Montaj',
  'Kimyasal Endüstri - Tehlikeli Madde İşlemleri',
  'Lojistik ve Depolama - Hassas Sıralama ve Paketleme',
];

export default function SRSeriesPage() {
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
            <h1 className='text-4xl md:text-6xl font-bold mb-6'>SR Serisi</h1>
            <p className='text-xl md:text-2xl text-blue-100 mb-8'>
              Hassas Endüstriyel Altı Eksenli Robotlar
            </p>
            <p className='text-lg text-blue-200 max-w-3xl mx-auto leading-relaxed'>
              Ultra yüksek hassasiyet, hız ve güvenilirlik sunan SR serisi
              robotlar, hassas endüstriyel uygulamalar için özel olarak
              tasarlanmış çözümler sağlar.
            </p>
          </div>
        </div>
      </section>

      {/* Kullanım Alanları */}
      <section className='py-16 bg-gray-50'>
        <div className='container mx-auto max-w-8xl'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-6'>
                Kullanım Alanları
              </h2>
              <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
                SR serisi robotlar, hassas endüstriyel uygulamalarda yaygın
                olarak kullanılmaktadır.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {applicationAreas.map((area, index) => (
                <div
                  key={index}
                  className='bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300'
                >
                  <div className='flex items-start space-x-4'>
                    <div className='w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1'>
                      <Factory className='w-4 h-4 text-white' />
                    </div>
                    <p className='text-gray-700 font-medium'>{area}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Robot Modelleri */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto max-w-8xl'>
          <div className='max-w-7xl mx-auto'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-6'>
                SR Serisi Robot Modelleri
              </h2>
              <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
                Her model, farklı uygulama gereksinimlerine uygun olarak
                tasarlanmıştır.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {srSeriesRobots.map((robot, index) => (
                <Card
                  key={index}
                  className='group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-gray-200'
                >
                  <CardHeader className='pb-4'>
                    <div className='relative h-48 bg-gray-50 rounded-lg overflow-hidden mb-4'>
                      <Image
                        src={robot.image}
                        alt={robot.model}
                        fill
                        className='object-contain p-4 group-hover:scale-105 transition-transform duration-300'
                      />
                    </div>
                    <CardTitle className='text-xl font-bold text-gray-800 mb-2'>
                      {robot.model}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className='space-y-4'>
                    <div className='grid grid-cols-3 gap-3'>
                      <div className='bg-blue-50 p-3 rounded-lg text-center'>
                        <div className='text-xs text-gray-600 mb-1'>
                          Eksen Sayısı
                        </div>
                        <div className='text-sm font-bold text-blue-600'>
                          {robot.specs.dof}
                        </div>
                      </div>
                      <div className='bg-green-50 p-3 rounded-lg text-center'>
                        <div className='text-xs text-gray-600 mb-1'>
                          Yük Kapasitesi
                        </div>
                        <div className='text-sm font-bold text-green-600'>
                          {robot.payload}
                        </div>
                      </div>
                      <div className='bg-purple-50 p-3 rounded-lg text-center'>
                        <div className='text-xs text-gray-600 mb-1'>
                          Kol Açıklığı
                        </div>
                        <div className='text-sm font-bold text-purple-600'>
                          {robot.reach}
                        </div>
                      </div>
                    </div>

                    <div className='pt-4'>
                      <Link
                        href={`/products/sr-series/${robot.model
                          .toLowerCase()
                          .replace(/\//g, '-')
                          .replace(/-/g, '-')}`}
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

      {/* Teknik Özellikler */}
      <section className='py-16 bg-gray-50'>
        <div className='container mx-auto max-w-8xl'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-6'>
                Teknik Özellikler
              </h2>
              <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
                SR serisi robotlar, en yüksek kalite standartlarında
                üretilmektedir.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <div className='text-center'>
                <div className='w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Factory className='w-8 h-8 text-white' />
                </div>
                <h3 className='text-xl font-semibold text-gray-800 mb-2'>
                  Hassasiyet
                </h3>
                <p className='text-gray-600'>
                  ±0.02mm - ±0.08mm arası tekrar konumlandırma doğruluğu
                </p>
              </div>
              <div className='text-center'>
                <div className='w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <MessageCircle className='w-8 h-8 text-white' />
                </div>
                <h3 className='text-xl font-semibold text-gray-800 mb-2'>
                  Hız
                </h3>
                <p className='text-gray-600'>
                  2.8 m/s - 4.5 m/s arası maksimum hız
                </p>
              </div>
              <div className='text-center'>
                <div className='w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <ExternalLink className='w-8 h-8 text-white' />
                </div>
                <h3 className='text-xl font-semibold text-gray-800 mb-2'>
                  Güvenilirlik
                </h3>
                <p className='text-gray-600'>
                  Endüstriyel standartlarda dayanıklılık ve güvenilirlik
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-16 bg-blue-600 text-white'>
        <div className='container mx-auto max-w-8xl text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-6'>
            SR Serisi Hakkında Daha Fazla Bilgi
          </h2>
          <p className='text-xl text-blue-100 mb-8 max-w-3xl mx-auto'>
            Teknik özellikler, kullanım kılavuzları ve fiyat teklifleri için;
            bizimle iletişime geçin.
          </p>
          <div className='flex justify-center'>
            <Button
              size='lg'
              className='bg-white text-blue-600 hover:bg-gray-100 px-8 py-3'
              onClick={() => setIsContactFormOpen(true)}
            >
              <MessageCircle className='w-5 h-5 mr-2' />
              Teklif İste
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
                SR Serisi hakkında bilgi almak için formu doldurun.
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
                    placeholder='SR Serisi hakkında bilgi almak istiyorum...'
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
