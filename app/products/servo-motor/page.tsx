'use client';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ExternalLink, MessageCircle, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Servo Motor modelleri
const servoMotors = [
  {
    model: 'LDD Series 130ST Motor',
    power: '130W',
    torque: '0.4 Nm',
    image: '/img/servomotors/LDD Series 130ST Motor.png',
    specs: {
      voltage: '110V',
      speed: '3000 RPM',
      weight: '1.2 kg',
    },
    features: ['Yüksek Hassasiyet', 'Düşük Gürültü', 'Kompakt Tasarım'],
    applications: ['Hassas Kontrol', 'Otomasyon', 'Robotik'],
  },
  {
    model: 'HDD Series 180ST Motor',
    power: '180W',
    torque: '0.6 Nm',
    image: '/img/servomotors/HDD Series 180ST Motor.png',
    specs: {
      voltage: '220V',
      speed: '3000 RPM',
      weight: '1.8 kg',
    },
    features: ['Yüksek Güç', 'Dayanıklı Yapı', 'Endüstriyel Kalite'],
    applications: ['Endüstriyel Otomasyon', 'Ağır Yük', 'Sürekli Çalışma'],
  },
  {
    model: 'HDD Series 130ST Motor',
    power: '130W',
    torque: '0.4 Nm',
    image: '/img/servomotors/HDD Series 130ST Motor.png',
    specs: {
      voltage: '220V',
      speed: '3000 RPM',
      weight: '1.5 kg',
    },
    features: ['Optimum Güç', 'Güvenilir Performans', 'Verimli Çalışma'],
    applications: ['Orta Yük', 'Otomasyon', 'Hassas Kontrol'],
  },
  {
    model: 'LDD Series 110ST Motor',
    power: '110W',
    torque: '0.35 Nm',
    image: '/img/servomotors/LDD Series 110ST Motor.png',
    specs: {
      voltage: '110V',
      speed: '3000 RPM',
      weight: '1.0 kg',
    },
    features: ['Kompakt Tasarım', 'Düşük Enerji', 'Hassas Kontrol'],
    applications: ['Küçük Otomasyon', 'Hassas Uygulamalar', 'Eğitim'],
  },
  {
    model: 'LB Series 110ST Motor',
    power: '110W',
    torque: '0.35 Nm',
    image: '/img/servomotors/LB Series 110ST Motor.png',
    specs: {
      voltage: '110V',
      speed: '3000 RPM',
      weight: '1.1 kg',
    },
    features: ['Güvenilir Çalışma', 'Kolay Montaj', 'Çok Yönlü'],
    applications: ['Genel Otomasyon', 'Küçük Sistemler', 'Prototip'],
  },
  {
    model: 'LEE Series 60ST Motor',
    power: '60W',
    torque: '0.2 Nm',
    image: '/img/servomotors/LEE Series 60ST Motor.png',
    specs: {
      voltage: '110V',
      speed: '3000 RPM',
      weight: '0.8 kg',
    },
    features: ['Küçük Boyut', 'Düşük Maliyet', 'Kolay Entegrasyon'],
    applications: ['Küçük Projeler', 'Eğitim', 'Prototip'],
  },
  {
    model: 'LB Series 150ST Motor',
    power: '150W',
    torque: '0.48 Nm',
    image: '/img/servomotors/LB Series 150ST Motor.png',
    specs: {
      voltage: '110V',
      speed: '3000 RPM',
      weight: '1.4 kg',
    },
    features: ['Yüksek Verim', 'Güvenilir Çalışma', 'Çok Yönlü'],
    applications: ['Orta Güç Uygulamalar', 'Otomasyon', 'Robotik'],
  },
  {
    model: 'LB Series 130ST Motor',
    power: '130W',
    torque: '0.4 Nm',
    image: '/img/servomotors/LB Series 130ST Motor.png',
    specs: {
      voltage: '110V',
      speed: '3000 RPM',
      weight: '1.2 kg',
    },
    features: ['Optimum Performans', 'Dayanıklı Yapı', 'Kolay Kullanım'],
    applications: ['Genel Otomasyon', 'Hassas Kontrol', 'Sistem Entegrasyonu'],
  },
  {
    model: 'HDD Series 110ST Motor',
    power: '110W',
    torque: '0.35 Nm',
    image: '/img/servomotors/HDD Series 110ST Motor.png',
    specs: {
      voltage: '220V',
      speed: '3000 RPM',
      weight: '1.3 kg',
    },
    features: ['Endüstriyel Kalite', 'Güvenilir Çalışma', 'Yüksek Verim'],
    applications: [
      'Endüstriyel Otomasyon',
      'Küçük Sistemler',
      'Hassas Uygulamalar',
    ],
  },
  {
    model: 'HEE Series 80ST Motor',
    power: '80W',
    torque: '0.25 Nm',
    image: '/img/servomotors/HEE Series 80ST Motor.png',
    specs: {
      voltage: '220V',
      speed: '3000 RPM',
      weight: '1.0 kg',
    },
    features: ['Kompakt Tasarım', 'Endüstriyel Kalite', 'Verimli Çalışma'],
    applications: [
      'Küçük Endüstriyel Sistemler',
      'Hassas Kontrol',
      'Otomasyon',
    ],
  },
  {
    model: 'LEE Series 80ST Motor',
    power: '80W',
    torque: '0.25 Nm',
    image: '/img/servomotors/LEE Series 80ST Motor.png',
    specs: {
      voltage: '110V',
      speed: '3000 RPM',
      weight: '0.9 kg',
    },
    features: ['Küçük Boyut', 'Düşük Enerji', 'Kolay Entegrasyon'],
    applications: [
      'Küçük Projeler',
      'Eğitim Sistemleri',
      'Prototip Uygulamalar',
    ],
  },
];

// Kullanım alanları
const applicationAreas = [
  'Endüstriyel Otomasyon Sistemleri',
  'Robotik Uygulamalar ve Manipülatörler',
  'CNC Makineler ve Hassas Kesim Sistemleri',
  'Paketleme ve Malzeme Taşıma Sistemleri',
  'Kalite Kontrol ve Test Sistemleri',
  'Medikal Cihazlar ve Laboratuvar Ekipmanları',
  'Havacılık ve Uzay Uygulamaları',
  'Denizcilik ve Gemi Sistemleri',
  'Eğitim ve Araştırma Projeleri',
  'Prototip ve Geliştirme Sistemleri',
];

export default function ServoMotorPage() {
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
            <h1 className='text-4xl md:text-6xl font-bold mb-6'>Servo Motor</h1>
            <p className='text-xl md:text-2xl text-blue-100 mb-8'>
              Hassas Kontrol ve Yüksek Performans
            </p>
            <p className='text-lg text-blue-200 max-w-3xl mx-auto leading-relaxed'>
              Farklı güç aralıklarında servo motorlarımız, hassas kontrol
              gerektiren endüstriyel uygulamalar için optimize edilmiş çözümler
              sunar.
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
                Servo motorlarımız, endüstrinin çeşitli alanlarında hassas
                kontrol gerektiren uygulamalarda yaygın olarak kullanılmaktadır.
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
                      <Zap className='w-4 h-4 text-white' />
                    </div>
                    <p className='text-gray-700 font-medium'>{area}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Servo Motor Modelleri */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto max-w-8xl'>
          <div className='max-w-7xl mx-auto'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-6'>
                Servo Motor Modelleri
              </h2>
              <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
                Farklı güç aralıklarında ve çalışma voltajlarında servo
                motorlarımızla ihtiyaçlarınıza uygun çözüm bulun.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {servoMotors.map((motor, index) => (
                <Card
                  key={index}
                  className='group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-gray-200'
                >
                  <CardHeader className='pb-4'>
                    <div className='relative h-48 bg-gray-50 rounded-lg overflow-hidden mb-4'>
                      <Image
                        src={motor.image}
                        alt={motor.model}
                        fill
                        className='object-contain p-4 group-hover:scale-105 transition-transform duration-300'
                      />
                    </div>
                    <CardTitle className='text-lg font-bold text-gray-800 mb-2'>
                      {motor.model}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className='space-y-4'>
                    <div className='grid grid-cols-3 gap-3'>
                      <div className='bg-blue-50 p-3 rounded-lg text-center'>
                        <div className='text-xs text-gray-600 mb-1'>Güç</div>
                        <div className='text-sm font-bold text-blue-600'>
                          {motor.power}
                        </div>
                      </div>
                      <div className='bg-green-50 p-3 rounded-lg text-center'>
                        <div className='text-xs text-gray-600 mb-1'>Tork</div>
                        <div className='text-sm font-bold text-green-600'>
                          {motor.torque}
                        </div>
                      </div>
                      <div className='bg-purple-50 p-3 rounded-lg text-center'>
                        <div className='text-xs text-gray-600 mb-1'>Voltaj</div>
                        <div className='text-sm font-bold text-purple-600'>
                          {motor.specs.voltage}
                        </div>
                      </div>
                    </div>

                    <div className='pt-4'>
                      <Button
                        className='w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center'
                        onClick={() => setIsContactFormOpen(true)}
                      >
                        <ExternalLink className='w-4 h-4 mr-2' />
                        Teklif İste
                      </Button>
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
            Servo Motor Hakkında Daha Fazla Bilgi
          </h2>
          <p className='text-xl text-blue-100 mb-8 max-w-3xl mx-auto'>
            Teknik özellikler, kullanım kılavuzları ve fiyat teklifleri için
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
                Servo Motor hakkında bilgi almak için formu doldurun.
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
                    placeholder='Servo Motor hakkında bilgi almak istiyorum...'
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
