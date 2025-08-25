'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  ArrowRight,
  Award,
  Building,
  Car,
  ExternalLink,
  Factory,
  Home,
  Shield,
  Shirt,
  Smartphone,
  Wrench,
  Zap,
} from 'lucide-react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

// Lazy load heavy components
const Header = dynamic(
  () => import('@/components/header').then(mod => ({ default: mod.Header })),
  {
    ssr: false,
    loading: () => <div className='h-20 bg-gray-900' />,
  }
);

const Footer = dynamic(
  () => import('@/components/footer').then(mod => ({ default: mod.Footer })),
  {
    ssr: false,
    loading: () => null,
  }
);

// Çözüm kategorileri
const solutionCategories = [
  {
    name: '3C Endüstrisi',
    title: 'Bilgisayar, İletişim ve Tüketici Elektroniği',
    description:
      'Hassas elektronik montaj ve test süreçleri için özel robot çözümleri',
    icon: Smartphone,
    image: '/placeholder-robot.svg',
    applications: [
      'PCB Montajı',
      'Hassas Lehimleme',
      'Kalite Kontrolü',
      'Paketleme',
    ],
    benefits: [
      'Mikron Hassasiyeti',
      'Yüksek Hız',
      'Temiz Oda Uyumlu',
      'Esnek Programlama',
    ],
    href: '/endustriler/3c',
    color: 'from-blue-600 to-blue-800',
  },
  {
    name: 'Otomotiv Endüstrisi',
    title: 'Otomotiv Üretim ve Montaj',
    description:
      'Otomotiv sektörünün yüksek kalite ve hız gereksinimlerini karşılayan robot sistemleri',
    icon: Car,
    image: '/placeholder-robot.svg',
    applications: ['Kaynak İşlemleri', 'Boyama', 'Montaj', 'Kalite Kontrolü'],
    benefits: [
      'Yüksek Tekrarlanabilirlik',
      'Ağır Yük Kapasitesi',
      '7/24 Çalışma',
      'Güvenlik',
    ],
    href: '/endustriler/otomobil',
    color: 'from-red-600 to-red-800',
  },
  {
    name: 'Beyaz Eşya',
    title: 'Ev Aletleri Üretimi',
    description:
      'Beyaz eşya üretiminde verimlilik ve kaliteyi artıran otomasyon çözümleri',
    icon: Home,
    image: '/placeholder-robot.svg',
    applications: [
      'Kasa Montajı',
      'Kapak Takma',
      'Test İşlemleri',
      'Paletleme',
    ],
    benefits: [
      'Esnek Üretim',
      'Düşük Maliyetli',
      'Kolay Entegrasyon',
      'Yüksek Verimlilik',
    ],
    href: '/endustriler/ev-aletleri',
    color: 'from-green-600 to-green-800',
  },
  {
    name: 'Metal İşleme',
    title: 'Metal İşleme ve Makine',
    description:
      'Metal işleme endüstrisinde hassas işlemler için güçlü robot sistemleri',
    icon: Wrench,
    image: '/placeholder-robot.svg',
    applications: [
      'Kesme İşlemleri',
      'Torna-Freze',
      'Kaynak',
      'Malzeme Taşıma',
    ],
    benefits: [
      'Yüksek Güç',
      'Hassas Pozisyonlama',
      'Dayanıklılık',
      'CNC Entegrasyonu',
    ],
    href: '/endustriler/metal-isleme',
    color: 'from-purple-600 to-purple-800',
  },
  {
    name: 'Tekstil ve Ayakkabı',
    title: 'Tekstil ve Ayakkabı Üretimi',
    description:
      'Tekstil ve ayakkabı sektörünün esnek üretim ihtiyaçlarına uygun çözümler',
    icon: Shirt,
    image: '/placeholder-robot.svg',
    applications: [
      'Kumaş Kesme',
      'Dikiş İşlemleri',
      'Kalıp Çıkarma',
      'Paketleme',
    ],
    benefits: [
      'Esnek Programlama',
      'Hızlı Model Değişimi',
      'Hassas Kesim',
      'Verimlilik',
    ],
    href: '/endustriler/ayakkabi-giyim',
    color: 'from-pink-600 to-pink-800',
  },
  {
    name: 'Diğer Endüstriler',
    title: 'Özel Endüstriyel Çözümler',
    description:
      'Farklı sektörlerin özel ihtiyaçlarına yönelik customize edilmiş robot çözümleri',
    icon: Building,
    image: '/placeholder-robot.svg',
    applications: [
      'Özel Uygulamalar',
      'R&D Projeleri',
      'Pilot Üretim',
      'Test Sistemleri',
    ],
    benefits: [
      'Özelleştirilebilir',
      'Esnek Tasarım',
      'Hızlı Çözüm',
      'Teknik Destek',
    ],
    href: '/endustriler/diger',
    color: 'from-indigo-600 to-indigo-800',
  },
];

// Çözüm türleri
const solutionTypes = [
  {
    title: 'Otomasyon Danışmanlığı',
    description:
      'Üretim süreçlerinizi analiz ederek en uygun otomasyon çözümünü belirliyoruz',
    icon: Shield,
  },
  {
    title: 'Sistem Entegrasyonu',
    description:
      'Robot sistemlerini mevcut üretim hatlarınıza sorunsuz entegre ediyoruz',
    icon: Zap,
  },
  {
    title: 'Eğitim ve Destek',
    description:
      'Operatör eğitiminden teknik desteğe kadar kapsamlı hizmet sunuyoruz',
    icon: Award,
  },
  {
    title: 'Bakım ve Servis',
    description:
      '7/24 teknik destek ve periyodik bakım hizmetleriyle kesintisiz üretim',
    icon: Factory,
  },
];

export default function SolutionsPage() {
  return (
    <div className='min-h-screen bg-white'>
      <Header />

      {/* Hero Section */}
      <section className='relative bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 text-white pt-20 pb-16'>
        <div className='absolute inset-0 bg-black/20'></div>
        <div className='container mx-auto px-4 relative z-10'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-4xl md:text-6xl font-bold mb-6'>
              Endüstriyel <span className='text-green-400'>Çözümler</span>
            </h1>
            <p className='text-xl md:text-2xl text-gray-200 mb-8'>
              Sektörel İhtiyaçlara Özel Robot Sistemleri
            </p>
            <p className='text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed'>
              Her endüstri dalının kendine özgü ihtiyaçları vardır. HSR Robotics
              olarak, sektörünüzün özel gereksinimlerine göre tasarlanmış robot
              çözümleri sunuyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Çözüm Türleri */}
      <section className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              Kapsamlı Çözüm Yaklaşımımız
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Projenizin her aşamasında yanınızda olan eksiksiz hizmet
              anlayışımız
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {solutionTypes.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <Card
                  key={index}
                  className='text-center hover:shadow-lg transition-shadow duration-300 h-full'
                >
                  <CardContent className='pt-6 h-full flex flex-col'>
                    <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                      <IconComponent className='w-8 h-8 text-green-600' />
                    </div>
                    <h3 className='font-semibold text-lg mb-3'>
                      {solution.title}
                    </h3>
                    <p className='text-gray-600 text-sm flex-grow'>
                      {solution.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sektörel Çözümler */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              Sektörel Çözümlerimiz
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Farklı endüstri dallarının ihtiyaçlarına özel geliştirilmiş robot
              sistemleri
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {solutionCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card
                  key={index}
                  className='group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full'
                >
                  <CardHeader className='p-0'>
                    <div
                      className={`h-48 bg-gradient-to-br ${category.color} relative overflow-hidden`}
                    >
                      <div className='absolute inset-0 bg-black/20'></div>
                      <div className='absolute top-4 left-4'>
                        <div className='w-12 h-12 bg-white/20 rounded-full flex items-center justify-center'>
                          <IconComponent className='w-6 h-6 text-white' />
                        </div>
                      </div>
                      <div className='flex items-center justify-center h-full relative z-10'>
                        <Image
                          src={category.image}
                          alt={category.name}
                          width={100}
                          height={100}
                          className='object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300'
                        />
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className='p-6 flex flex-col h-full'>
                    <div className='mb-4'>
                      <h3 className='text-xl font-bold text-gray-900 mb-2'>
                        {category.name}
                      </h3>
                      <h4 className='text-lg font-semibold text-gray-700 mb-3'>
                        {category.title}
                      </h4>
                      <p className='text-gray-600 text-sm leading-relaxed mb-4'>
                        {category.description}
                      </p>
                    </div>

                    <div className='mb-4'>
                      <h5 className='font-semibold text-gray-900 mb-2'>
                        Uygulama Alanları:
                      </h5>
                      <div className='flex flex-wrap gap-1'>
                        {category.applications.map((app, appIndex) => (
                          <Badge
                            key={appIndex}
                            variant='outline'
                            className='text-xs'
                          >
                            {app}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className='mb-6 flex-grow'>
                      <h5 className='font-semibold text-gray-900 mb-2'>
                        Faydalar:
                      </h5>
                      <div className='flex flex-wrap gap-1'>
                        {category.benefits.map((benefit, benefitIndex) => (
                          <Badge
                            key={benefitIndex}
                            variant='secondary'
                            className='text-xs'
                          >
                            {benefit}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Link href={category.href} className='block mt-auto'>
                      <Button className='w-full bg-green-600 hover:bg-green-700 text-white group'>
                        <span>Detayları İncele</span>
                        <ArrowRight className='ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200' />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-16 bg-gradient-to-br from-green-900 to-green-800 text-white'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-6'>
            Projeniz İçin En Uygun Çözümü Bulalım
          </h2>
          <p className='text-xl text-green-100 mb-8 max-w-3xl mx-auto'>
            Sektörel deneyimimiz ve teknik uzmanlığımızla, size özel robot
            çözümlerini birlikte geliştirelim.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              size='lg'
              className='bg-white text-green-900 hover:bg-gray-100 px-8 py-3'
            >
              <ExternalLink className='w-5 h-5 mr-2' />
              Ücretsiz Danışmanlık
            </Button>
            <Button
              size='lg'
              variant='outline'
              className='border-white text-white hover:bg-white hover:text-green-900 px-8 py-3'
            >
              Proje Teklifi Al
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
