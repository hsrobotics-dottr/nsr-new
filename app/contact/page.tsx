'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  ArrowLeft,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useState } from 'react';

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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: '',
    });

    setIsSubmitting(false);
    alert(
      'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.'
    );
  };

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
                href='/'
                className='flex items-center text-blue-200 hover:text-white transition-colors duration-300'
              >
                <ArrowLeft className='w-5 h-5 mr-2' />
                Ana Sayfa
              </Link>
            </div>
            <h1 className='text-4xl md:text-6xl font-bold mb-6'>İletişim</h1>
            <p className='text-xl md:text-2xl text-blue-100 mb-8'>
              Bizimle İletişime Geçin
            </p>
            <p className='text-lg text-blue-200 max-w-3xl mx-auto leading-relaxed'>
              HSRobot ürünleri ve çözümleri hakkında bilgi almak, teknik destek
              istemek veya işbirliği fırsatlarını değerlendirmek için bizimle
              iletişime geçin.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className='py-16 bg-gray-50'>
        <div className='container mx-auto max-w-8xl'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* Contact Information */}
            <div className='space-y-8'>
              <div>
                <h2 className='text-3xl font-bold text-gray-800 mb-6'>
                  İletişim Bilgileri
                </h2>
                <p className='text-lg text-gray-600 mb-8'>
                  Uzman ekibimiz size yardımcı olmaya hazır. Aşağıdaki bilgileri
                  kullanarak bizimle iletişime geçebilirsiniz.
                </p>
              </div>

              {/* Contact Cards */}
              <div className='space-y-6'>
                <Card className='border-0 shadow-lg'>
                  <CardContent className='p-6'>
                    <div className='flex items-start space-x-4'>
                      <div className='bg-blue-100 p-3 rounded-full'>
                        <Phone className='w-6 h-6 text-blue-600' />
                      </div>
                      <div>
                        <h3 className='text-lg font-semibold text-gray-800 mb-2'>
                          Telefon
                        </h3>
                        <p className='text-gray-600 mb-1'>0531 760 40 31</p>
                        <p className='text-sm text-gray-500'>
                          Pazartesi - Cuma: 09:00 - 18:00
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className='border-0 shadow-lg'>
                  <CardContent className='p-6'>
                    <div className='flex items-start space-x-4'>
                      <div className='bg-green-100 p-3 rounded-full'>
                        <Mail className='w-6 h-6 text-green-600' />
                      </div>
                      <div>
                        <h3 className='text-lg font-semibold text-gray-800 mb-2'>
                          E-posta
                        </h3>
                        <p className='text-gray-600 mb-1'>info@hsrobotics.tr</p>
                        <p className='text-sm text-gray-500'>
                          24 saat içinde yanıt veriyoruz
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className='border-0 shadow-lg'>
                  <CardContent className='p-6'>
                    <div className='flex items-start space-x-4'>
                      <div className='bg-purple-100 p-3 rounded-full'>
                        <MapPin className='w-6 h-6 text-purple-600' />
                      </div>
                      <div>
                        <h3 className='text-lg font-semibold text-gray-800 mb-2'>
                          Adres
                        </h3>
                        <div className='text-gray-600 space-y-1'>
                          <p className='font-medium'>Genel Merkez:</p>
                          <p className='text-sm'>
                            No.19 Taoyuan East Road, Shishan Town, Nanhai
                            District, Foshan City, Guangdong Province
                          </p>
                          <p className='font-medium mt-3'>
                            Türkiye Temsilciliği:
                          </p>
                          <p className='text-sm'>
                            İkitelli OSB, TEM34 İkitelli no127, 34490
                            Başakşehir/İstanbul
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Additional Info */}
              <div className='bg-blue-50 p-6 rounded-lg'>
                <h3 className='text-lg font-semibold text-blue-800 mb-3'>
                  Neden HSRobot?
                </h3>
                <ul className='text-blue-700 space-y-2'>
                  <li className='flex items-center'>
                    <div className='w-2 h-2 bg-blue-500 rounded-full mr-3'></div>
                    Uzman teknik destek ekibi
                  </li>
                  <li className='flex items-center'>
                    <div className='w-2 h-2 bg-blue-500 rounded-full mr-3'></div>
                    Hızlı yanıt süreleri
                  </li>
                  <li className='flex items-center'>
                    <div className='w-2 h-2 bg-blue-500 rounded-full mr-3'></div>
                    Türkçe dil desteği
                  </li>
                  <li className='flex items-center'>
                    <div className='w-2 h-2 bg-blue-500 rounded-full mr-3'></div>
                    Yerel servis ağı
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className='border-0 shadow-xl'>
                <CardHeader className='bg-blue-600 text-white rounded-t-lg'>
                  <CardTitle className='text-2xl flex items-center'>
                    <MessageCircle className='w-6 h-6 mr-3' />
                    Mesaj Gönder
                  </CardTitle>
                  <p className='text-blue-100 mt-2'>
                    Formu doldurun, en kısa sürede size dönüş yapalım.
                  </p>
                </CardHeader>
                <CardContent className='p-8'>
                  <form
                    action='https://hook.eu2.make.com/u0og4qi3l5yru52fyhv8i64w3jwg9flz'
                    method='POST'
                    className='space-y-6'
                  >
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                      <div>
                        <label className='block text-sm font-medium text-gray-700 mb-2'>
                          Ad Soyad *
                        </label>
                        <Input
                          type='text'
                          name='name'
                          required
                          className='w-full'
                          placeholder='Adınız ve soyadınız'
                        />
                      </div>
                      <div>
                        <label className='block text-sm font-medium text-gray-700 mb-2'>
                          E-posta *
                        </label>
                        <Input
                          type='email'
                          name='email'
                          required
                          className='w-full'
                          placeholder='E-posta adresiniz'
                        />
                      </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                      <div>
                        <label className='block text-sm font-medium text-gray-700 mb-2'>
                          Telefon
                        </label>
                        <Input
                          type='tel'
                          name='phone'
                          className='w-full'
                          placeholder='Telefon numaranız'
                        />
                      </div>
                      <div>
                        <label className='block text-sm font-medium text-gray-2'>
                          Şirket
                        </label>
                        <Input
                          type='text'
                          name='company'
                          className='w-full'
                          placeholder='Şirket adınız'
                        />
                      </div>
                    </div>

                    <div>
                      <label className='block text-sm font-medium text-gray-700 mb-2'>
                        Konu *
                      </label>
                      <Input
                        type='text'
                        name='subject'
                        required
                        className='w-full'
                        placeholder='Mesaj konusu'
                      />
                    </div>

                    <div>
                      <label className='block text-sm font-medium text-gray-700 mb-2'>
                        Mesaj *
                      </label>
                      <Textarea
                        name='message'
                        required
                        rows={5}
                        className='w-full'
                        placeholder='Mesajınızı buraya yazın...'
                      />
                    </div>

                    <Button
                      type='submit'
                      className='w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold'
                    >
                      <Send className='w-5 h-5 mr-2' />
                      Mesaj Gönder
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto max-w-8xl'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-800 mb-4'>Konum</h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Türkiye temsilciliğimiz İstanbul'da bulunmaktadır. Randevu alarak
              ofisimizi ziyaret edebilirsiniz.
            </p>
          </div>

          <div className='bg-gray-200 rounded-lg h-96 flex items-center justify-center'>
            <div className='text-center text-gray-500'>
              <MapPin className='w-16 h-16 mx-auto mb-4' />
              <p className='text-lg font-medium'>Harita Entegrasyonu</p>
              <p className='text-sm'>
                Google Maps veya başka bir harita servisi entegre edilebilir
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
