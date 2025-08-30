'use client';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ExternalLink, Factory, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Structured data for SEO
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'HSR JR Serisi Endüstriyel Robotlar',
  description:
    'HSR JR Serisi, 6 eksenli endüstriyel robotlar. Yük kapasitesi 3kg-20kg, erişim mesafesi 570mm-2000mm. Montaj, paketleme, kaynak ve malzeme taşıma uygulamaları için ideal.',
  brand: {
    '@type': 'Brand',
    name: 'HSR Robotics',
  },
  manufacturer: {
    '@type': 'Organization',
    name: 'HSR Robotics',
  },
  category: 'Industrial Robots',
  url: 'https://hsr-robotics.com/products/jr-serisi',
  image: [
    '/img/industrial/JR/HSR-JR603-570.png',
    '/img/industrial/JR/HSR-JR607-730.png',
    '/img/industrial/JR/HSR-JR607-910.png',
  ],
  offers: {
    '@type': 'Offer',
    seller: {
      '@type': 'Organization',
      name: 'HSR Robotics',
    },
    availability: 'https://schema.org/InStock',
    priceCurrency: 'TRY',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '156',
  },
};

// JR Serisi robot modelleri - Güncellenmiş liste;
const jrSeriesRobots = [
  {
    model: 'HSR-JR603-570',
    payload: '3kg',
    reach: '570mm',
    image: '/img/industrial/JR/HSR-JR603-570.png',
    specs: {
      dof: '6 Eksen',
      repeatability: '±0.03mm',
      maxSpeed: '3.2 m/s',
      weight: '18 kg',
    },
    features: ['Güvenlik Sensörleri', 'Kolay Programlama', 'Kompakt Tasarım'],
    applications: ['Montaj', 'Paketleme', 'Kalite Kontrol'],
  },
  {
    model: 'HSR-JR607-730',
    payload: '7kg',
    reach: '730mm',
    image: '/img/industrial/JR/HSR-JR607-730.png',
    specs: {
      dof: '6 Eksen',
      repeatability: '±0.05mm',
      maxSpeed: '2.8 m/s',
      weight: '22 kg',
    },
    features: ['Yüksek Hassasiyet', 'Çoklu Sensör', 'Esnek Programlama'],
    applications: ['Kaynak', 'Boyama', 'Malzeme Taşıma'],
  },
  {
    model: 'HSR-JR607-910',
    payload: '7kg',
    reach: '910mm',
    image: '/img/industrial/JR/HSR-JR607-910.png',
    specs: {
      dof: '6 Eksen',
      repeatability: '±0.05mm',
      maxSpeed: '2.5 m/s',
      weight: '25 kg',
    },
    features: ['Geniş Çalışma Alanı', 'Yüksek Yük', 'Dayanıklı Yapı'],
    applications: ['Ağır Montaj', 'Paletleme', 'CNC Besleme'],
  },
  {
    model: 'HSR-JR612-1600',
    payload: '12kg',
    reach: '1600mm',
    image: '/img/industrial/JR/HSR-JR612-1600.png',
    specs: {
      dof: '6 Eksen',
      repeatability: '±0.08mm',
      maxSpeed: '2.2 m/s',
      weight: '35 kg',
    },
    features: ['Yüksek Yük Kapasitesi', 'Güçlü Motor', 'Endüstriyel Dayanım'],
    applications: ['Ağır Sanayi', 'Otomotiv', 'Metal İşleme'],
  },
  {
    model: 'HSR-JR612-1600-DM',
    payload: '12kg',
    reach: '1600mm',
    image: '/img/industrial/JR/HSR-JR612-1600-DM.png',
    specs: {
      dof: '6 Eksen',
      repeatability: '±0.08mm',
      maxSpeed: '2.2 m/s',
      weight: '35 kg',
    },
    features: ['Dual Mode', 'Yüksek Yük Kapasitesi', 'Güçlü Motor'],
    applications: ['Ağır Sanayi', 'Otomotiv', 'Metal İşleme'],
  },
  {
    model: 'HSR-JR615-2000',
    payload: '15kg',
    reach: '2000mm',
    image: '/img/industrial/JR/HSR-JR615-2000.png',
    specs: {
      dof: '6 Eksen',
      repeatability: '±0.1mm',
      maxSpeed: '2.0 m/s',
      weight: '42 kg',
    },
    features: ['Maksimum Yük', 'Geniş Erişim', 'Profesyonel Çözüm'],
    applications: ['Büyük Parça Montajı', 'Yükleme/Boşaltma', 'Pres Besleme'],
  },

  {
    model: 'HSR-JR620-1800',
    payload: '20kg',
    reach: '1800mm',
    image: '/img/industrial/JR/HSR-JR620-1800.png',
    specs: {
      dof: '6 Eksen',
      repeatability: '±0.12mm',
      maxSpeed: '1.8 m/s',
      weight: '55 kg',
    },
    features: ['En Yüksek Kapasite', 'Maksimum Erişim', 'Endüstriyel Güç'],
    applications: ['Ağır Sanayi', 'Büyük Montaj', 'Otomotiv Üretimi'],
  },
  {
    model: 'HSR-JR630-1800',
    payload: '30kg',
    reach: '1800mm',
    image: '/img/industrial/JR/HSR-JR630-1800.png',
    specs: {
      dof: '6 Eksen',
      repeatability: '±0.15mm',
      maxSpeed: '1.6 m/s',
      weight: '68 kg',
    },
    features: ['Ağır Yük Kapasitesi', 'Güçlü Yapı', 'Endüstriyel Dayanım'],
    applications: ['Ağır Sanayi', 'Metal İşleme', 'Pres Operasyonları'],
  },
  {
    model: 'HSR-JR650-2400',
    payload: '50kg',
    reach: '2400mm',
    image: '/img/industrial/JR/HSR-JR650-2400.png',
    specs: {
      dof: '6 Eksen',
      repeatability: '±0.18mm',
      maxSpeed: '1.4 m/s',
      weight: '85 kg',
    },
    features: ['Çok Yüksek Yük', 'Uzun Erişim', 'Endüstriyel Güç'],
    applications: ['Ağır Sanayi', 'Büyük Parça Taşıma', 'Pres Besleme'],
  },
  {
    model: 'HSR-JR670-2100',
    payload: '70kg',
    reach: '2100mm',
    image: '/img/industrial/JR/HSR-JR670-2100.png',
    specs: {
      dof: '6 Eksen',
      repeatability: '±0.2mm',
      maxSpeed: '1.2 m/s',
      weight: '110 kg',
    },
    features: ['Maksimum Yük Kapasitesi', 'Güçlü Motor', 'Endüstriyel Dayanım'],
    applications: ['Ağır Sanayi', 'Metal İşleme', 'Büyük Pres Operasyonları'],
  },
  {
    model: 'HSR-JR6210-2700',
    payload: '210kg',
    reach: '2700mm',
    image: '/img/industrial/JR/HSR-JR6210-2700.png',
    specs: {
      dof: '6 Eksen',
      repeatability: '±0.25mm',
      maxSpeed: '1.0 m/s',
      weight: '180 kg',
    },
    features: ['Çok Ağır Yük', 'Uzun Erişim', 'Endüstriyel Güç'],
    applications: ['Ağır Sanayi', 'Metal İşleme', 'Büyük Pres Operasyonları'],
  },
  {
    model: 'HSR-JR6210-3100',
    payload: '210kg',
    reach: '3100mm',
    image: '/img/industrial/JR/HSR-JR6210-3100.png',
    specs: {
      dof: '6 Eksen',
      repeatability: '±0.25mm',
      maxSpeed: '1.0 m/s',
      weight: '175 kg',
    },
    features: ['Ağır Yük', 'Çok Uzun Erişim', 'Endüstriyel Dayanım'],
    applications: ['Ağır Sanayi', 'Metal İşleme', 'Büyük Pres Operasyonları'],
  },
  {
    model: 'HSR-JR6300-3000',
    payload: '300kg',
    reach: '3000mm',
    image: '/img/industrial/JR/HSR-JR6300-3000,.png',
    specs: {
      dof: '6 Eksen',
      repeatability: '±0.3mm',
      maxSpeed: '0.8 m/s',
      weight: '250 kg',
    },
    features: ['Çok Ağır Yük', 'Uzun Erişim', 'Endüstriyel Güç'],
    applications: ['Ağır Sanayi', 'Metal İşleme', 'Büyük Pres Operasyonları'],
  },
  {
    model: 'HSR-JR6360-2700',
    payload: '360kg',
    reach: '2700mm',
    image: '/img/industrial/JR/HSR-JR6360-2700.png',
    specs: {
      dof: '6 Eksen',
      repeatability: '±0.3mm',
      maxSpeed: '0.8 m/s',
      weight: '280 kg',
    },
    features: ['Maksimum Ağır Yük', 'Güçlü Yapı', 'Endüstriyel Dayanım'],
    applications: ['Ağır Sanayi', 'Metal İşleme', 'Büyük Pres Operasyonları'],
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

export default function JRSeriesPage() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return (
    <div className='min-h-screen bg-white'>
      <Header />
      <main role='main'>
        {/* Structured Data Script */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

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
              <h1 className='text-4xl md:text-6xl font-bold mb-6'>JR Serisi</h1>
              <p className='text-xl md:text-2xl text-blue-100 mb-8'>
                Endüstriyel Altı Eksenli Robotlar
              </p>
              <p className='text-lg text-blue-200 max-w-3xl mx-auto leading-relaxed'>
                Yüksek hassasiyet, güvenilirlik ve esneklik sunan JR serisi
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
                  JR serisi robotlar, endüstrinin çeşitli alanlarında yaygın
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
                  JR Serisi Robot Modelleri
                </h2>
                <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
                  Farklı yük kapasiteleri ve erişim mesafeleri ile
                  ihtiyaçlarınıza; uygun robot seçimi yapın.
                </p>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {jrSeriesRobots.map((robot, index) => (
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
                          href={`/products/jr-series/${robot.model
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
              JR Serisi Hakkında Daha Fazla Bilgi
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
                  JR Serisi hakkında bilgi almak için formu doldurun.
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
                      placeholder='JR Serisi hakkında bilgi almak istiyorum...'
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
      </main>
      <Footer />
    </div>
  );
}
