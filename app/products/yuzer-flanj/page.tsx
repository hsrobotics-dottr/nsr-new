'use client';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Yüzer Flanş ürün modelleri;
const yuzerFlanjProducts = [
  {
    model: 'HST-F-XY3',
    payload: '3kg',
    precision: '±0.03mm',
    image: '/img/floatingflange/floating-flange.png',
    specs: {
      material: 'Havacılık Alüminyumu',
      weight: '670g',
      dimensions: '80 x 80 x 48.5 mm',
      temperature: '-20°C to +60°C',
    },
    features: [
      'X-Y Ekseninde Hareket',
      'Otomatik Merkezleme',
      'Hassas Kilitleme',
    ],
    applications: ['Montaj', 'Paletleme', 'Besleme'],
  },
];

export default function YuzerFlanjPage() {
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
              Yüzer Flanş Sistemi
            </h1>
            <p className='text-xl md:text-2xl text-blue-100 mb-8'>
              Hassas Pozisyonlama ve Esnek Montaj Çözümleri
            </p>
            <p className='text-lg text-blue-200 max-w-3xl mx-auto leading-relaxed'>
              Endüstriyel robotlarda hassas pozisyonlama ve esnek montaj için
              geliştirilmiş yüzer flanş sistemi, çeşitli endüstriyel uygulamalar
              için optimize edilmiş çözümler sağlar.
            </p>
          </div>
        </div>
      </section>

      {/* Ürün Modelleri */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto max-w-8xl'>
          <div className='max-w-7xl mx-auto'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-6'>
                Yüzer Flanş Ürün Modelleri
              </h2>
              <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
                Farklı yük kapasiteleri ve hassasiyet seviyeleri ile
                ihtiyaçlarınıza uygun yüzer flanş seçimi yapın.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {yuzerFlanjProducts.map((product, index) => (
                <Card
                  key={index}
                  className='group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-gray-200'
                >
                  <CardHeader className='pb-4'>
                    <div className='relative h-48 bg-gray-50 rounded-lg overflow-hidden mb-4'>
                      <Image
                        src={product.image}
                        alt={product.model}
                        fill
                        className='object-contain p-4 group-hover:scale-105 transition-transform duration-300'
                      />
                    </div>
                    <CardTitle className='text-xl font-bold text-gray-800 mb-2'>
                      {product.model}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className='space-y-4'>
                    <div className='grid grid-cols-3 gap-3'>
                      <div className='bg-blue-100 p-3 rounded-lg text-center'>
                        <div className='text-xs text-gray-600 mb-1'>
                          Malzeme
                        </div>
                        <div className='text-sm font-bold text-blue-700'>
                          {product.specs.material}
                        </div>
                      </div>
                      <div className='bg-blue-50 p-3 rounded-lg text-center'>
                        <div className='text-xs text-gray-600 mb-1'>
                          Yük Kapasitesi
                        </div>
                        <div className='text-sm font-bold text-blue-600'>
                          {product.payload}
                        </div>
                      </div>
                      <div className='bg-blue-25 p-3 rounded-lg text-center'>
                        <div className='text-xs text-gray-600 mb-1'>
                          Hassasiyet
                        </div>
                        <div className='text-sm font-bold text-blue-500'>
                          {product.precision}
                        </div>
                      </div>
                    </div>

                    <div className='pt-4'>
                      <Link
                        href={`/products/yuzer-flanj/${product.model.toLowerCase().replace(/\//g, '-').replace(/-/g, '-')}`}
                        className='w-full bg-blue-600 hover:bg-blue-700 text-white inline-flex items-center justify-center px-4 py-2 rounded-lg transition-colors duration-200'
                      >
                        <MessageCircle className='w-4 h-4 mr-2' />
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
            Yüzer Flanş Sistemi Hakkında Daha Fazla Bilgi
          </h2>
          <p className='text-xl text-blue-100 mb-8 max-w-3xl mx-auto'>
            Teknik özellikler, kullanım kılavuzları ve fiyat teklifleri için
            bizimle iletişime geçin.
          </p>
          <div className='flex justify-center'>
            <Button
              size='lg'
              className='bg-white text-blue-600 hover:bg-gray-100'
            >
              <MessageCircle className='w-5 h-5 mr-2' />
              Teknik Destek Al
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
