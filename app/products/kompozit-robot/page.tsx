'use client';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ExternalLink, Factory, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Kompozit Robotlar ürün listesi;
const kompozitRobots = [
  {
    model: 'HSR-AMR610-450',
    payload: '10kg',
    reach: '450mm',
    image: '/img/AMR/HSR-AMR610-450.png',
    specs: {
      dof: '6 Eksen',
      repeatability: '±0.02mm',
      maxSpeed: '3.5 m/s',
      weight: '20 kg',
    },
    features: ['Güvenlik Sensörleri', 'Kolay Programlama', 'Kompakt Tasarım'],
    applications: ['Montaj', 'Paketleme', 'Kalite Kontrol'],
  },
  {
    model: 'HSR-AMR605-400',
    payload: '5kg',
    reach: '400mm',
    image: '/img/AMR/HSR-AMR605-400.png',
    specs: {
      dof: '6 Eksen',
      repeatability: '±0.02mm',
      maxSpeed: '3.8 m/s',
      weight: '18 kg',
    },
    features: ['Yüksek Hassasiyet', 'Çoklu Sensör', 'Esnek Programlama'],
    applications: ['Kaynak', 'Boyama', 'Malzeme Taşıma'],
  },
];

// Kullanım alanları;
const applicationAreas = [
  'Otomotiv Endüstrisi - Montaj ve Kaynak İşlemleri',
  'Elektronik Sektörü - Hassas Montaj ve Test',
  'Metal İşleme - Kesme, Kaynak ve Taşlama',
  'Gıda ve İlaç - Hijyenik Üretim Hatları',
  'Plastik Endüstrisi - Enjeksiyon ve Kalıp İşlemleri',
  'Tekstil Sektörü - Dokuma ve Dikim Otomasyonu',
  'Cam ve Seramik - Şekillendirme ve Sırlama',
  'Ahşap İşleme - Kesme ve Montaj İşlemleri',
  'Kimyasal Endüstri - Tehlikeli Ortam Uygulamaları',
  'Lojistik ve Depolama - Paletleme ve Sıralama',
];

export default function KompozitRobotPage() {
  return (
    <div className='min-h-screen bg-white'>
      <Header />

      {/* Hero Section */}
      <section className='relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white pt-20 pb-16'>
        <div className='absolute inset-0 bg-black/20'></div>
        <div className='container mx-auto px-4 relative z-10'>
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
              Kompozit Robotlar
            </h1>
            <p className='text-xl md:text-2xl text-blue-100 mb-8'>
              Yeni Nesil Robot Teknolojisi
            </p>
            <p className='text-lg text-blue-200 max-w-3xl mx-auto leading-relaxed'>
              Yüksek hassasiyet, güvenilirlik ve esneklik sunan kompozit
              robotlar, çeşitli endüstriyel uygulamalar için optimize edilmiş
              çözümler sağlar.
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
                Kompozit robotlar, endüstrinin çeşitli alanlarında yaygın olarak
                kullanılmaktadır.
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

      {/* Ürün Listesi */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto max-w-8xl'>
          <div className='max-w-7xl mx-auto'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-6'>
                Kompozit Robot Modelleri
              </h2>
              <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
                Farklı yük kapasiteleri ve erişim mesafeleri ile çeşitli
                endüstriyel ihtiyaçlara uygun çözümler.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {kompozitRobots.map((robot, index) => (
                <Card
                  key={index}
                  className='group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-gray-200'
                >
                  <CardHeader className='pb-4'>
                    <div className='relative bg-gray-50 rounded-lg overflow-hidden mb-4 min-h-[200px]'>
                      <Image
                        src={robot.image}
                        alt={robot.model}
                        width={400}
                        height={300}
                        className='w-full h-auto object-contain p-4 group-hover:scale-105 transition-transform duration-300'
                        style={{
                          minHeight: '200px',
                          maxHeight: '400px',
                        }}
                      />
                    </div>
                    <CardTitle className='text-xl font-bold text-gray-800 mb-2'>
                      {robot.model}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-4'>
                    <div className='grid grid-cols-3 gap-3'>
                      <div className='bg-blue-100 p-3 rounded-lg text-center'>
                        <div className='text-xs text-gray-600 mb-1'>
                          Eksen Sayısı
                        </div>
                        <div className='text-sm font-bold text-blue-700'>
                          {robot.specs.dof}
                        </div>
                      </div>
                      <div className='bg-blue-50 p-3 rounded-lg text-center'>
                        <div className='text-xs text-gray-600 mb-1'>
                          Yük Kapasitesi
                        </div>
                        <div className='text-sm font-bold text-blue-600'>
                          {robot.payload}
                        </div>
                      </div>
                      <div className='bg-blue-25 p-3 rounded-lg text-center'>
                        <div className='text-xs text-gray-600 mb-1'>
                          Kol Açıklığı
                        </div>
                        <div className='text-sm font-bold text-blue-500'>
                          {robot.reach}
                        </div>
                      </div>
                    </div>

                    <div className='pt-4'>
                      <Link
                        href={`/products/md-series/${robot.model
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

      {/* CTA Section */}
      <section className='py-16 bg-blue-600 text-white'>
        <div className='container mx-auto max-w-8xl text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-6'>
            Kompozit Robotlar Hakkında Daha Fazla Bilgi
          </h2>
          <p className='text-xl text-blue-100 mb-8 max-w-3xl mx-auto'>
            Teknik özellikler, kullanım kılavuzları ve fiyat teklifleri için;
            bizimle iletişime geçin.
          </p>
          <div className='flex justify-center'>
            <Button
              size='lg'
              className='bg-white text-blue-600 hover:bg-gray-100 px-8 py-3'
            >
              <MessageCircle className='w-5 h-5 mr-2' />
              Teklif İste
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
