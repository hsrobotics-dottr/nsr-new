'use client';

import React from 'react';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Car, Factory, Home, Shirt, Smartphone, Wrench } from 'lucide-react';
import Link from 'next/link';

const industries = [
  {
    name: '3C Endüstrisi',
    slug: '3c',
    description: 'Bilgisayar, İletişim ve Tüketici Elektroniği',
    icon: Smartphone,
    image: '/placeholder.jpg',
  },
  {
    name: 'Ayakkabı ve Giyim Endüstrisi',
    slug: 'ayakkabi-giyim',
    description: 'Tekstil ve Ayakkabı Üretimi',
    icon: Shirt,
    image: '/placeholder.jpg',
  },
  {
    name: 'Otomobil Endüstrisi',
    slug: 'otomobil',
    description: 'Otomotiv ve Araç Üretimi',
    icon: Car,
    image: '/placeholder.jpg',
  },
  {
    name: 'Ev Aletleri Endüstrisi',
    slug: 'ev-aletleri',
    description: 'Beyaz Eşya ve Ev Aletleri',
    icon: Home,
    image: '/placeholder.jpg',
  },
  {
    name: 'Metal İşleme Endüstrisi',
    slug: 'metal-isleme',
    description: 'Metal İşleme ve Üretim',
    icon: Wrench,
    image: '/placeholder.jpg',
  },
  {
    name: 'Diğer Endüstriler',
    slug: 'diger',
    description: 'Çeşitli Endüstriyel Uygulamalar',
    icon: Factory,
    image: '/placeholder.jpg',
  },
];

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white pt-20 pb-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Endüstriler</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Robotik Çözümlerimiz
            </p>
            <p className="text-lg text-blue-200 max-w-3xl mx-auto leading-relaxed">
              Farklı endüstri sektörlerinde robotik otomasyon çözümlerimizi
              keşfedin. Her sektöre özel tasarlanmış robotlarımızla üretim
              süreçlerinizi optimize edin.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Endüstri Çözümlerimiz
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Her endüstri sektörü için özel olarak tasarlanmış robotik
                çözümlerimizi inceleyin.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => {
                const IconComponent = industry.icon;
                return (
                  <Link
                    key={index}
                    href={`/endustriler/${industry.slug}`}
                    className="group bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                          {industry.name}
                        </h3>
                        <p className="text-gray-600">{industry.description}</p>
                      </div>
                    </div>
                    <div className="relative h-48 bg-gray-50 rounded-lg overflow-hidden mb-4">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-800/20 flex items-center justify-center">
                        <IconComponent className="w-16 h-16 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                        Detayları İncele
                      </span>
                      <svg
                        className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Endüstriniz İçin Özel Çözüm
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Sektörünüze özel robotik çözümlerimiz hakkında daha fazla bilgi
            almak için bizimle iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              İletişime Geç
            </Link>
            <Link
              href="/products"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Ürünleri İncele
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
