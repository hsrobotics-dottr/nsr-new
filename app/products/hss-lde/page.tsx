'use client';

export const dynamic = 'force-dynamic';

import { ContactForm } from '@/components/forms/contact-form';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/language-context';
import {
  CheckCircle,
  Cog,
  Factory,
  MessageCircle,
  Shield,
  Target,
  Wrench,
  X,
  Zap,
} from 'lucide-react';
import { useState } from 'react';

export default function HSSLDEPage() {
  // Force client-side rendering
  if (typeof window === 'undefined') {
    return null;
  }
  const { currentLang } = useLanguage();
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100'>
      {/* Hero Section */}
      <section className='relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white'>
        <div className='absolute inset-0 bg-black/20'></div>
        <div className='relative z-10 container mx-auto px-4 py-20 lg:py-32'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-4xl lg:text-6xl font-bold mb-6 leading-tight'>
              HSS-LDE
            </h1>
            <p className='text-xl lg:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto'>
              Yüksek hassasiyetli servo motor sürücü sistemi
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button
                onClick={() => setIsContactFormOpen(true)}
                className='bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300'
              >
                <MessageCircle className='w-5 h-5 mr-2' />
                Teknik Danışmanlık
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
              Temel Özellikler
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              HSS-LDE servo motor sürücü sistemi, endüstriyel uygulamalarda
              yüksek performans ve hassasiyet sağlar
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-100 hover:shadow-lg transition-all duration-300'>
              <div className='w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                <Zap className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                Yüksek Güç
              </h3>
              <p className='text-gray-600'>
                Güçlü motor kontrolü ve yüksek tork çıkışı
              </p>
            </div>

            <div className='text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-100 hover:shadow-lg transition-all duration-300'>
              <div className='w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                <Target className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                Hassas Kontrol
              </h3>
              <p className='text-gray-600'>
                Mikron seviyesinde pozisyon kontrolü
              </p>
            </div>

            <div className='text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-violet-100 hover:shadow-lg transition-all duration-300'>
              <div className='w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                <Shield className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                Güvenilir
              </h3>
              <p className='text-gray-600'>Uzun ömürlü ve dayanıklı tasarım</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Description */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
                Ürün Açıklaması
              </h2>
              <p className='text-lg text-gray-600'>
                HSS-LDE servo motor sürücü sistemi, endüstriyel otomasyonda
                kullanılan yüksek hassasiyetli motor kontrolü için
                tasarlanmıştır
              </p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
              <div>
                <h3 className='text-2xl font-semibold text-gray-900 mb-4'>
                  Teknik Özellikler
                </h3>
                <ul className='space-y-3'>
                  <li className='flex items-start'>
                    <CheckCircle className='w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0' />
                    <span className='text-gray-700'>
                      Yüksek çözünürlüklü encoder sistemi
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <CheckCircle className='w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0' />
                    <span className='text-gray-700'>
                      Gelişmiş PID kontrol algoritması
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <CheckCircle className='w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0' />
                    <span className='text-gray-700'>
                      Çoklu feedback sensör desteği
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <CheckCircle className='w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0' />
                    <span className='text-gray-700'>Modüler tasarım</span>
                  </li>
                </ul>
              </div>

              <div className='bg-white p-8 rounded-xl shadow-lg'>
                <h4 className='text-xl font-semibold text-gray-900 mb-4'>
                  Uygulama Alanları
                </h4>
                <div className='space-y-3'>
                  <div className='flex items-center'>
                    <Factory className='w-5 h-5 text-blue-600 mr-3' />
                    <span className='text-gray-700'>Endüstriyel robotlar</span>
                  </div>
                  <div className='flex items-center'>
                    <Cog className='w-5 h-5 text-green-600 mr-3' />
                    <span className='text-gray-700'>CNC makineleri</span>
                  </div>
                  <div className='flex items-center'>
                    <Wrench className='w-5 h-5 text-purple-600 mr-3' />
                    <span className='text-gray-700'>Ölçüm sistemleri</span>
                  </div>
                  <div className='flex items-center'>
                    <Target className='w-5 h-5 text-red-600 mr-3' />
                    <span className='text-gray-700'>Lazer sistemleri</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
              Teknik Özellikler
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Detaylı teknik özellikler ve performans parametreleri
            </p>
          </div>

          <div className='max-w-6xl mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
              <div>
                <h3 className='text-2xl font-semibold text-gray-900 mb-6'>
                  Motor Özellikleri
                </h3>
                <div className='space-y-4'>
                  <div className='flex justify-between items-center py-3 border-b border-gray-200'>
                    <span className='text-gray-700 font-medium'>Güç</span>
                    <span className='text-gray-900 font-semibold'>
                      1000W - 5000W
                    </span>
                  </div>
                  <div className='flex justify-between items-center py-3 border-b border-gray-200'>
                    <span className='text-gray-700 font-medium'>Hız</span>
                    <span className='text-gray-900 font-semibold'>
                      0-3000 RPM
                    </span>
                  </div>
                  <div className='flex justify-between items-center py-3 border-b border-gray-200'>
                    <span className='text-gray-700 font-medium'>Tork</span>
                    <span className='text-gray-900 font-semibold'>
                      3.2 - 16 Nm
                    </span>
                  </div>
                  <div className='flex justify-between items-center py-3 border-b border-gray-200'>
                    <span className='text-gray-700 font-medium'>
                      Encoder Çözünürlüğü
                    </span>
                    <span className='text-gray-900 font-semibold'>20-bit</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className='text-2xl font-semibold text-gray-900 mb-6'>
                  Sürücü Özellikleri
                </h3>
                <div className='space-y-4'>
                  <div className='flex justify-between items-center py-3 border-b border-gray-200'>
                    <span className='text-gray-700 font-medium'>
                      Giriş Gerilimi
                    </span>
                    <span className='text-gray-900 font-semibold'>
                      220V AC / 380V AC
                    </span>
                  </div>
                  <div className='flex justify-between items-center py-3 border-b border-gray-200'>
                    <span className='text-gray-700 font-medium'>
                      Kontrol Modu
                    </span>
                    <span className='text-gray-900 font-semibold'>
                      Torque / Velocity / Position
                    </span>
                  </div>
                  <div className='flex justify-between items-center py-3 border-b border-gray-200'>
                    <span className='text-gray-700 font-medium'>İletişim</span>
                    <span className='text-gray-900 font-semibold'>
                      EtherCAT / Modbus
                    </span>
                  </div>
                  <div className='flex justify-between items-center py-3 border-b border-gray-200'>
                    <span className='text-gray-700 font-medium'>
                      Koruma Sınıfı
                    </span>
                    <span className='text-gray-900 font-semibold'>IP65</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {isContactFormOpen && (
        <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4'>
          <div className='bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto'>
            <div className='p-6 border-b border-gray-200'>
              <div className='flex justify-between items-center'>
                <h3 className='text-2xl font-semibold text-gray-900'>
                  Teknik Danışmanlık
                </h3>
                <button
                  onClick={() => setIsContactFormOpen(false)}
                  className='text-gray-400 hover:text-gray-600 transition-colors'
                >
                  <X className='w-6 h-6' />
                </button>
              </div>
            </div>
            <div className='p-6'>
              <ContactForm
                isOpen={isContactFormOpen}
                onClose={() => setIsContactFormOpen(false)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
