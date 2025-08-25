'use client';

import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import {
  Award,
  Brain,
  Building2,
  CheckCircle,
  Cloud,
  Code,
  Cpu,
  Factory,
  Gauge,
  Globe,
  Lightbulb,
  Lock,
  Settings,
  Shield,
  Target,
  Wrench,
  Zap,
} from 'lucide-react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

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

// PCLC Strategy data - Updated with official company information
const pclcData = [
  {
    letter: 'P',
    title: 'Products',
    subtitle: 'Genel Çok Eklemli Endüstriyel Robotlar',
    description:
      'Ana yön olarak genel çok eklemli endüstriyel robot ürünlerini geliştiriyoruz. Robot gövdesi ve tüm makine performansı ve güvenilirlik araştırma ve geliştirmesine odaklanıyoruz.',
    icon: Factory,
    color: 'bg-blue-500',
  },
  {
    letter: 'C',
    title: 'Components',
    subtitle: 'Çekirdek Temel Bileşenler',
    description:
      'Yerli robot çekirdek bileşenlerinin araştırma ve geliştirmesinde atılım yapıyoruz. Endüstriyel robot kontrolörü, servo sürücü, servo motor ve robot gövdesinde bağımsız güvenlik ve kontrol edilebilirlik sağlıyoruz.',
    icon: Cpu,
    color: 'bg-blue-600',
  },
  {
    letter: 'L',
    title: 'Lines',
    subtitle: 'Otomasyon Hatları',
    description:
      'Endüstriyel robot otomasyon hattının uygulanmasını hedefliyoruz. Otomasyon, zeka, akıllı fabrikalar ve diğer uygulama geliştirmeyi aktif olarak gerçekleştiriyoruz.',
    icon: Settings,
    color: 'bg-blue-700',
  },
  {
    letter: 'C',
    title: 'Cloud',
    subtitle: 'Akıllı Bulut Platformu',
    description:
      'Akıllı bulut platformunu endüstrinin kazanması için bir silah olarak kullanıyoruz. Aerospace Cloud Network ile işbirliği yaparak akıllı karar verme için bulut hizmet platformu geliştiriyoruz.',
    icon: Cloud,
    color: 'bg-blue-800',
  },
];

// Advantages data - Updated with official company information
const advantagesData = [
  {
    title: 'Otonom ve Kontrol Edilebilir',
    description:
      'Uluslararası standart EtherCAT veri yolu teknolojisini kullanarak, veri yolu servo sürücü üniteleri ve mutlak servo motor ile donatılmış.',
    icon: Shield,
    features: [
      'Uluslararası standart EtherCAT veri yolu teknolojisi',
      'Veri yolu tipi servo sürücü üniteleri ve mutlak servo motor',
      'Yeni nesil HsPad öğretim aparatı',
      'Profinet ve diğer endüstriyel Ethernet gateway ile veri iletişimi',
    ],
  },
  {
    title: 'Yüksek Hız ve Hassasiyet',
    description:
      'Dinamik modelleme ve hassas parametre tanımlamasına dayalı tork ileri beslemeli kontrol sistemi.',
    icon: Gauge,
    features: [
      'Dinamik modelleme ve hassas parametre tanımlaması',
      'Tork ileri beslemeli kontrol sistemi',
      'Küresel akıllı yörünge optimizasyon stratejisi',
      'Çoklu hızlanma ve yavaşlama stratejisi kontrolü',
    ],
  },
  {
    title: 'Emniyet',
    description:
      'Dinamik modele dayalı uyumlu sürükleme öğretimi ve sensörsüz çarpışma algılama teknolojisi.',
    icon: Lock,
    features: [
      'Dinamik modele dayalı uyumlu sürükleme öğretimi',
      'Sensörsüz çarpışma algılama teknolojisi',
      'Uyarı modu ve sensör ile birleştirilmiş destek modu',
      'Esnek güvenlik bölgesi ayarı ve tek tuşla orijine dönüş',
    ],
  },
  {
    title: 'Kullanım Kolaylığı',
    description:
      'Kapsamlı hata ayıklama araçları, simülasyon platformları ve komut tabanlı terminal ile kolay kullanım.',
    icon: Wrench,
    features: [
      'Tam parametre hata ayıklama ve tanı araçları',
      'Komut tabanlı terminal hata ayıklama',
      'Sanal kontrol platformu ve 3B simülasyon platformu',
      'Zengin hata ayıklama ve simülasyon araçları',
    ],
  },
  {
    title: 'Gelişim',
    description:
      'Zengin ikincil geliştirme arayüzü, dinamik kütüphane ve çeşitli sensör entegrasyonları.',
    icon: Code,
    features: [
      'Zengin ikincil geliştirme arayüzü ve komut satırı etkileşimi',
      'Dinamik kütüphane gömülü, müşteri tanımlı modüller yüklenebilir',
      'Görsel sensör, tork sensörü ve denge sensörü entegrasyonu',
      'Çeşitli sensörlerle başarılı bağlantı ve stabil sensörler',
    ],
  },
  {
    title: 'Zeki Sistemler',
    description:
      'Aerospace Cloud Network ile işbirliği yaparak akıllı karar verme için bulut hizmet platformu geliştiriyoruz.',
    icon: Brain,
    features: [
      'Aerospace Cloud Network ile bulut hizmet platformu',
      'Büyük veri analiz modelleri ve derin öğrenme',
      'Robot sağlık durumu değerlendirmesi',
      'Akıllı bakım ve anahtar bileşenler için arıza uyarı',
    ],
  },
];

// Application areas data
const applicationAreas = [
  '3C Elektronik',
  'Ev Aletleri',
  'Donanım',
  'Otomotiv',
  'CNC İşleme',
  'Gıda Endüstrisi',
  'Ayakkabı Üretimi',
  'Lojistik',
];

// Process packages data - Updated with official company information
const processPackages = [
  {
    title: 'Kaynak Proses Paketi',
    description:
      'Özelleştirilmiş kaynak uygulamaları için geliştirilmiş proses paketi',
    icon: Zap,
  },
  {
    title: 'Yapıştırma Proses Paketi',
    description: 'Hassas yapıştırma işlemleri için özel proses paketi',
    icon: Target,
  },
  {
    title: 'Paletleme Proses Paketi',
    description: 'Otomatik paletleme çözümleri için proses paketi',
    icon: Factory,
  },
  {
    title: 'Damgalama Proses Paketi',
    description: 'Endüstriyel damgalama uygulamaları için proses paketi',
    icon: Award,
  },
];

// Statistics data
const statsData = [
  {
    number: '20,000',
    label: 'Yıllık Üretim Kapasitesi',
    description: 'Endüstriyel robot üretim kapasitesi',
    icon: Factory,
  },
  {
    number: '40+',
    label: 'Ürün Spesifikasyonu',
    description: 'Altı seride robot ürün çeşitliliği',
    icon: Settings,
  },
  {
    number: '300+',
    label: 'Fikri Mülkiyet Hakkı',
    description: 'Bağımsız patent ve teknoloji',
    icon: Lightbulb,
  },
  {
    number: '5',
    label: 'Şehir Lokasyonu',
    description: 'Çin genelinde stratejik konumlar',
    icon: Globe,
  },
];

export default function AboutPage() {
  const [visibleStats, setVisibleStats] = useState<boolean[]>([]);
  const statsRef = useRef<HTMLDivElement>(null);

  // Initialize visibleStats after component mounts to prevent hydration mismatch
  useEffect(() => {
    setVisibleStats([false, false, false, false]);
  }, []);

  // Stats animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            statsData.forEach((_, index) => {
              setTimeout(() => {
                setVisibleStats(prev => {
                  const newVisible = [...prev];
                  newVisible[index] = true;
                  return newVisible;
                });
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className='min-h-screen bg-white'>
      <Header />

      {/* Hero Section */}
      <section className='relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white pt-32 pb-16'>
        <div className='absolute inset-0 bg-black/20'></div>
        <div className='container mx-auto max-w-8xl relative z-10'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-4xl md:text-6xl font-bold mb-6'>Hakkımızda</h1>
            <p className='text-xl md:text-2xl text-blue-100 mb-8'>
              HUASHU Robot - Endüstriyel Robotlarda Öncü Marka
            </p>
            <p className='text-lg text-blue-200 max-w-3xl mx-auto leading-relaxed'>
              Ürün araştırma ve geliştirme, üretim ve uygulamayı entegre eden
              ulusal yüksek teknoloji kuruluşu. Yıllık 20.000 endüstriyel robot
              üretim kapasitesi ile akıllı üretim ve akıllı fabrikalar için
              genel çözümlerde uzmanız.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className='py-20 bg-white'>
        <div className='container mx-auto max-w-8xl'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-4'>
              Rakamlarla Huashu Robotics
            </h2>
            <p className='text-lg text-gray-600'>
              Başarılarımızı gösteren önemli veriler
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {statsData.map((stat, index) => (
              <div
                key={index}
                className={`text-center group transition-all duration-700 transform ${
                  visibleStats[index]
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-8 opacity-0'
                }`}
              >
                <div className='relative'>
                  <div className='w-20 h-20 mx-auto mb-6 bg-blue-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-200 transition-all duration-300 group-hover:scale-110'>
                    <stat.icon className='w-10 h-10 text-blue-600' />
                  </div>
                </div>
                <div className='text-4xl md:text-5xl font-bold text-gray-800 mb-2'>
                  {stat.number}
                </div>
                <div className='text-xl font-semibold text-gray-700 mb-2'>
                  {stat.label}
                </div>
                <div className='text-gray-600'>{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PCLC Strategy Section */}
      <section className='py-20 bg-gray-900 text-white'>
        <div className='container mx-auto max-w-8xl'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6'>
              PCLC Geliştirme Stratejisi
            </h2>
            <p className='text-lg text-gray-300 max-w-4xl mx-auto'>
              Endüstriyel robot geliştirme stratejimizi tam olarak uyguluyoruz:
              Products, Components, Lines, Cloud
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {pclcData.map((item, index) => (
              <Card
                key={index}
                className='bg-gray-800 border-gray-700 p-8 text-center hover:bg-gray-750 transition-all duration-300 transform hover:scale-105'
              >
                <div
                  className={`w-16 h-16 mx-auto mb-6 ${item.color} rounded-2xl flex items-center justify-center`}
                >
                  <span className='text-2xl font-bold text-white'>
                    {item.letter}
                  </span>
                </div>
                <div className='mb-4'>
                  <h3 className='text-xl font-bold text-white mb-2'>
                    {item.title}
                  </h3>
                  <div className='text-blue-400 font-semibold mb-3'>
                    {item.subtitle}
                  </div>
                </div>
                <p className='text-gray-300 leading-relaxed'>
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Profile Section */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            <div className='space-y-8'>
              <div className='space-y-6'>
                <div className='flex items-center space-x-3'>
                  <div className='w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center'>
                    <Building2 className='w-6 h-6 text-white' />
                  </div>
                  <h2 className='text-3xl md:text-4xl font-bold text-gray-800'>
                    Şirket Profili
                  </h2>
                </div>
                <p className='text-lg text-gray-700 leading-relaxed'>
                  HUASHU Robot, Güney Çin, Doğu Çin, Orta Çin ve Güneybatı
                  Çin'in ulusal düzenini kapsayan Foshan, Chongqing, Ningbo,
                  Suzhou ve Quanzhou'da şirketlere sahiptir. Aynı zamanda
                  uluslararası pazarları da aktif olarak geliştirmektedir.
                </p>
                <p className='text-lg text-gray-700 leading-relaxed'>
                  Ulusal yüksek teknoloji kuruluşu olarak, ürün araştırma ve
                  geliştirme, üretim ve uygulamayı entegre eden, yerli
                  endüstriyel robotların önde gelen markasıdır. Akıllı üretim ve
                  akıllı fabrikalar için genel çözümlerde uzmandır.
                </p>
                <p className='text-lg text-gray-700 leading-relaxed'>
                  Şu anda altı seride 40'tan fazla çeşit tam robot ürününü
                  geliştirmiş ve endüstriyel robot kontrolörü, servo sürücü,
                  servo motor ve robot gövdesinde bağımsız güvenlik ve kontrol
                  edilebilirlik sağlamıştır. 300'den fazla bağımsız fikri
                  mülkiyet hakkı oluşturmuştur.
                </p>
              </div>

              <div className='space-y-4'>
                <h3 className='text-xl font-bold text-gray-800'>
                  Uygulama Alanları
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {applicationAreas.map((area, index) => (
                    <Badge
                      key={index}
                      variant='secondary'
                      className='px-3 py-1'
                    >
                      {area}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className='relative'>
              <div className='relative rounded-3xl overflow-hidden'>
                <Image
                  src='/img/hsr-about.jpg'
                  alt='Huashu Robot Technology - Şirket Profili'
                  width={500}
                  height={400}
                  className='w-full h-full object-cover'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6'>
              HUASHU Robot'un Avantajları
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              "Pazar odaklı, müşteri odaklı, kalite odaklı, inovasyon odaklı"
              yaklaşımımızla öne çıkan özelliklerimiz
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {advantagesData.map((advantage, index) => (
              <Card
                key={index}
                className='p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 shadow-lg'
              >
                <div className='flex items-center space-x-4 mb-6'>
                  <div className='w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center'>
                    <advantage.icon className='w-6 h-6 text-blue-600' />
                  </div>
                  <h3 className='text-xl font-bold text-gray-800'>
                    {advantage.title}
                  </h3>
                </div>
                <p className='text-gray-600 mb-6 leading-relaxed'>
                  {advantage.description}
                </p>
                <div className='space-y-3'>
                  {advantage.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className='flex items-center space-x-3'
                    >
                      <CheckCircle className='w-4 h-4 text-blue-500 flex-shrink-0' />
                      <span className='text-sm text-gray-700'>{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Packages Section */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-6'>
              Proses Paketleri
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              Çekirdek kullanıcılar için özelleştirilmiş proses paketleri
              geliştiriyoruz
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {processPackages.map((pkg, index) => (
              <Card
                key={index}
                className='p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-0 shadow-md'
              >
                <div className='w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center'>
                  <pkg.icon className='w-8 h-8 text-white' />
                </div>
                <h3 className='text-lg font-bold text-gray-800 mb-3'>
                  {pkg.title}
                </h3>
                <p className='text-gray-600 text-sm'>{pkg.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
