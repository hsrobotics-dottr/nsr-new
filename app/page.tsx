'use client';

export const dynamic = 'force-dynamic';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ArrowRight, Bot, Shield, Target, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className='min-h-screen bg-white'>
      <Header />

      {/* Hero Section */}
      <section className='relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20'>
        <div className='container mx-auto px-4'>
          <div className='text-center max-w-4xl mx-auto'>
            <h1 className='text-5xl md:text-6xl font-bold text-gray-900 mb-6'>
              HSR Robotics
            </h1>
            <p className='text-xl md:text-2xl text-gray-600 mb-8'>
              Endüstriyel robotik çözümlerde lider teknoloji
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link href='/products'>
                <Button
                  size='lg'
                  className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg'
                >
                  Ürünleri Keşfet
                  <ArrowRight className='ml-2 w-5 h-5' />
                </Button>
              </Link>
              <Link href='/contact'>
                <Button
                  size='lg'
                  variant='outline'
                  className='border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg'
                >
                  İletişime Geç
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              Neden HSR Robotics?
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              Endüstriyel otomasyonda güvenilir, verimli ve yenilikçi çözümler
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <Card className='text-center p-6 hover:shadow-lg transition-shadow'>
              <CardHeader className='pb-4'>
                <div className='mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4'>
                  <Bot className='w-8 h-8 text-blue-600' />
                </div>
                <h3 className='text-xl font-semibold text-gray-900'>
                  Yüksek Performans
                </h3>
              </CardHeader>
              <CardContent>
                <p className='text-gray-600'>
                  Hassas hareket ve yüksek hız ile maksimum verimlilik
                </p>
              </CardContent>
            </Card>

            <Card className='text-center p-6 hover:shadow-lg transition-shadow'>
              <CardHeader className='pb-4'>
                <div className='mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4'>
                  <Shield className='w-8 h-8 text-green-600' />
                </div>
                <h3 className='text-xl font-semibold text-gray-900'>
                  Güvenlik
                </h3>
              </CardHeader>
              <CardContent>
                <p className='text-gray-600'>
                  İnsan-robot işbirliği için gelişmiş güvenlik sistemleri
                </p>
              </CardContent>
            </Card>

            <Card className='text-center p-6 hover:shadow-lg transition-shadow'>
              <CardHeader className='pb-4'>
                <div className='mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4'>
                  <Zap className='w-8 h-8 text-purple-600' />
                </div>
                <h3 className='text-xl font-semibold text-gray-900'>
                  Hızlı Kurulum
                </h3>
              </CardHeader>
              <CardContent>
                <p className='text-gray-600'>
                  Kolay kurulum ve hızlı entegrasyon ile zaman tasarrufu
                </p>
              </CardContent>
            </Card>

            <Card className='text-center p-6 hover:shadow-lg transition-shadow'>
              <CardHeader className='pb-4'>
                <div className='mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4'>
                  <Target className='w-8 h-8 text-orange-600' />
                </div>
                <h3 className='text-xl font-semibold text-gray-900'>
                  Hassasiyet
                </h3>
              </CardHeader>
              <CardContent>
                <p className='text-gray-600'>
                  Mikron seviyesinde hassasiyet ile mükemmel sonuçlar
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Categories Preview */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              Ürün Kategorileri
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              Her ihtiyaca uygun robotik çözümler
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <Link href='/products/jr-serisi' className='group'>
              <Card className='h-full hover:shadow-xl transition-all duration-300 group-hover:scale-105'>
                <CardHeader className='pb-4'>
                  <div className='relative w-full h-48 mb-4'>
                    <Image
                      src='/img/industrial/JR/HSR-JR603-570.png'
                      alt='JR Serisi'
                      fill
                      className='object-contain p-4 group-hover:scale-105 transition-transform duration-300'
                    />
                  </div>
                  <h3 className='text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors'>
                    JR Serisi
                  </h3>
                  <p className='text-gray-600'>Endüstriyel Robot Kollar</p>
                </CardHeader>
              </Card>
            </Link>

            <Link href='/products/cr-serisi' className='group'>
              <Card className='h-full hover:shadow-xl transition-all duration-300 group-hover:scale-105'>
                <CardHeader className='pb-4'>
                  <div className='relative w-full h-48 mb-4'>
                    <Image
                      src='/img/Collaborative/CR/HSR-CR605-790.png'
                      alt='CR Serisi'
                      fill
                      className='object-contain p-4 group-hover:scale-105 transition-transform duration-300'
                    />
                  </div>
                  <h3 className='text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors'>
                    CR Serisi
                  </h3>
                  <p className='text-gray-600'>İşbirlikçi Robotlar</p>
                </CardHeader>
              </Card>
            </Link>

            <Link href='/products/sr-serisi' className='group'>
              <Card className='h-full hover:shadow-xl transition-all duration-300 group-hover:scale-105'>
                <CardHeader className='pb-4'>
                  <div className='relative w-full h-48 mb-4'>
                    <Image
                      src='/img/industrial/SR/HSR-SR10-800.png'
                      alt='SR Serisi'
                      fill
                      className='object-contain p-4 group-hover:scale-105 transition-transform duration-300'
                    />
                  </div>
                  <h3 className='text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors'>
                    SR Serisi
                  </h3>
                  <p className='text-gray-600'>SCARA Robotlar</p>
                </CardHeader>
              </Card>
            </Link>
          </div>

          <div className='text-center mt-12'>
            <Link href='/products'>
              <Button
                size='lg'
                className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg'
              >
                Tüm Ürünleri Gör
                <ArrowRight className='ml-2 w-5 h-5' />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-blue-600'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>
            Robotik Çözümlerinizi Keşfedin
          </h2>
          <p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>
            Endüstriyel otomasyonda bir sonraki seviyeye geçin. Uzman ekibimiz
            size yardımcı olmaya hazır.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href='/contact'>
              <Button
                size='lg'
                variant='secondary'
                className='bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg'
              >
                Teklif Al
              </Button>
            </Link>
            <Link href='/about'>
              <Button
                size='lg'
                variant='outline'
                className='border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg'
              >
                Hakkımızda
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
