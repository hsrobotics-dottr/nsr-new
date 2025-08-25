'use client';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Car, MessageCircle, Wrench } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function AutomotiveIndustryPage() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return (
    <>
      <Header />
      <div className='min-h-screen bg-white'>
        {/* Hero Section */}
        <section className='relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white pt-32 pb-16'>
          <div className='absolute inset-0 bg-black/20'></div>
          <div className='container mx-auto max-w-8xl relative z-10'>
            <div className='max-w-4xl mx-auto text-center'>
              <div className='flex items-center justify-center mb-6'>
                <Link
                  href='/'
                  className='flex items-center text-blue-200 hover:text-white transition-colors duration-300'
                >
                  <ArrowLeft className='w-5 h-5 mr-2' />
                  Anasayfaya Dön
                </Link>
              </div>
              <h1 className='text-4xl md:text-6xl font-bold mb-6'>
                Otomotiv Sektörü
              </h1>
            </div>
          </div>
        </section>

        {/* Ana İçerik */}
        <div className='py-16'>
          <div className='container mx-auto max-w-8xl px-4'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16'>
              <div>
                <h2 className='text-3xl font-bold text-gray-800 mb-6'>
                  Otomotiv Endüstrisinde Robotik Otomasyon
                </h2>
                <p className='text-lg text-gray-600 leading-relaxed mb-6'>
                  Otomotiv endüstrisinde Huashu robotları, yüksek koruma, yüksek
                  işlem hassasiyeti ve iyi stabilite özellikleriyle otomotiv
                  parçalarının üretim süreçlerinde mükemmel performans sergiler.
                </p>
                <div className='space-y-4'>
                  <div className='flex items-center space-x-3'>
                    <div className='w-2 h-2 bg-blue-600 rounded-full'></div>
                    <span className='text-gray-700'>
                      Yüksek hassasiyetli montaj işlemleri
                    </span>
                  </div>
                  <div className='flex items-center space-x-3'>
                    <div className='w-2 h-2 bg-blue-600 rounded-full'></div>
                    <span className='text-gray-700'>
                      Güvenilir üretim ve kalite kontrol
                    </span>
                  </div>
                  <div className='flex items-center space-x-3'>
                    <div className='w-2 h-2 bg-blue-600 rounded-full'></div>
                    <span className='text-gray-700'>Esnek üretim hatları</span>
                  </div>
                </div>
              </div>
              <div className='relative'>
                <div className='bg-gradient-to-br from-blue-50 to-red-50 rounded-2xl p-8'>
                  <div className='grid grid-cols-2 gap-4'>
                    <div className='text-center'>
                      <Car className='w-12 h-12 text-blue-600 mx-auto mb-2' />
                      <p className='text-sm text-gray-600'>Otomobil Üretimi</p>
                    </div>
                    <div className='text-center'>
                      <Wrench className='w-12 h-12 text-red-600 mx-auto mb-2' />
                      <p className='text-sm text-gray-600'>Parça Montajı</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Uygulama Alanları */}
            <div className='mb-16'>
              <h2 className='text-3xl font-bold text-gray-800 text-center mb-12'>
                Uygulama Alanları
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                <Card className='hover:shadow-xl transition-all duration-300'>
                  <CardHeader>
                    <CardTitle className='text-xl text-blue-600'>
                      Parça Montajı
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-gray-600'>
                      Motor, şanzıman ve diğer kritik parçaların hassas
                      montajında robotik otomasyon ile mükemmel kalite.
                    </p>
                  </CardContent>
                </Card>

                <Card className='hover:shadow-xl transition-all duration-300'>
                  <CardHeader>
                    <CardTitle className='text-xl text-green-600'>
                      Kaynak İşlemleri
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-gray-600'>
                      Otomotiv gövde parçalarında yüksek kaliteli kaynak
                      işlemleri ile güvenli ve dayanıklı üretim.
                    </p>
                  </CardContent>
                </Card>

                <Card className='hover:shadow-xl transition-all duration-300'>
                  <CardHeader>
                    <CardTitle className='text-xl text-purple-600'>
                      Boya ve Kaplama
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-gray-600'>
                      Otomotiv parçalarında uniform boya ve kaplama işlemleri
                      ile mükemmel görünüm kalitesi.
                    </p>
                  </CardContent>
                </Card>

                <Card className='hover:shadow-xl transition-all duration-300'>
                  <CardHeader>
                    <CardTitle className='text-xl text-orange-600'>
                      Kalite Kontrol
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-gray-600'>
                      Görsel tanıma teknolojisi ile otomatik kalite kontrol,
                      hatalı ürünlerin erken tespitini sağlar.
                    </p>
                  </CardContent>
                </Card>

                <Card className='hover:shadow-xl transition-all duration-300'>
                  <CardHeader>
                    <CardTitle className='text-xl text-red-600'>
                      Test ve Doğrulama
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-gray-600'>
                      Otomotiv parçalarının fonksiyonel testlerinde robotik
                      otomasyon ile tutarlı sonuçlar elde edilir.
                    </p>
                  </CardContent>
                </Card>

                <Card className='hover:shadow-xl transition-all duration-300'>
                  <CardHeader>
                    <CardTitle className='text-xl text-indigo-600'>
                      Lojistik ve Depolama
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-gray-600'>
                      Üretim hattından depolama alanlarına otomatik malzeme
                      taşıma ve stok yönetimi.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Avantajlar */}
            <div className='bg-gray-50 rounded-2xl p-8 mb-16'>
              <h2 className='text-3xl font-bold text-gray-800 text-center mb-8'>
                Otomotiv Endüstrisinde Huashu Robotlarının Avantajları
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className='space-y-4'>
                  <div className='flex items-start space-x-3'>
                    <div className='w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1'>
                      <span className='text-white text-sm font-bold'>1</span>
                    </div>
                    <div>
                      <h3 className='font-semibold text-gray-800 mb-2'>
                        Yüksek Hassasiyet
                      </h3>
                      <p className='text-gray-600'>
                        Kritik otomotiv parçalarının mükemmel montajında mikro
                        seviyede hassasiyet sağlar.
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <div className='w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1'>
                      <span className='text-white text-sm font-bold'>2</span>
                    </div>
                    <div>
                      <h3 className='font-semibold text-gray-800 mb-2'>
                        Güvenilir Üretim
                      </h3>
                      <p className='text-gray-600'>
                        24/7 kesintisiz çalışma ile üretim verimliliğini
                        maksimuma çıkarır ve kaliteyi garanti eder.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='space-y-4'>
                  <div className='flex items-start space-x-3'>
                    <div className='w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1'>
                      <span className='text-white text-sm font-bold'>3</span>
                    </div>
                    <div>
                      <h3 className='font-semibold text-gray-800 mb-2'>
                        Kalite Kontrol
                      </h3>
                      <p className='text-gray-600'>
                        Görsel tanıma ile otomatik kalite kontrol, hatalı ürün
                        oranını minimize eder.
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <div className='w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1'>
                      <span className='text-white text-sm font-bold'>4</span>
                    </div>
                    <div>
                      <h3 className='font-semibold text-gray-800 mb-2'>
                        Esnek Üretim
                      </h3>
                      <p className='text-gray-600'>
                        Farklı otomotiv modellerine hızlı adaptasyon ile çok
                        çeşitli üretim ihtiyaçlarını karşılar.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className='text-center'>
              <h2 className='text-3xl font-bold text-gray-800 mb-6'>
                Otomotiv Endüstrisinde Robotik Çözümler
              </h2>
              <p className='text-lg text-gray-600 mb-8 max-w-3xl mx-auto'>
                Otomotiv endüstrisinde Huashu robotları ile üretim
                verimliliğinizi artırın, kalite standartlarınızı yükseltin.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Button
                  className='bg-blue-600 hover:bg-blue-700 px-8 py-3'
                  onClick={() => setIsContactFormOpen(true)}
                >
                  <MessageCircle className='w-5 h-5 mr-2' />
                  Teklif İste
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                Otomotiv endüstrisi için robotik çözümler hakkında bilgi almak
                için formu doldurun.
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
                    placeholder='Otomotiv endüstrisi için robotik çözümler hakkında bilgi almak istiyorum...'
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
    </>
  );
}
