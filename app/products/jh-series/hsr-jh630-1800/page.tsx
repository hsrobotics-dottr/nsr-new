'use client';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/language-context';
import {
  ChevronRight,
  Info,
  MessageCircle,
  Package,
  Settings,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

// Product data (JH Series - SCARA Robot)
const productData = {
  model: 'HSR-JH630-1800',
  category: 'JH Serisi (SCARA Robot)',
  keywords: 'SCARA Robotlar',
  axes: 4,
  payload: '20 kg',
  reach: '630mm',
  description: `HSR-JH630-1800, Huashu Robotics'den gelen yüksek performanslı SCARA (Selective Compliance Assembly Robot Arm) robotudur. Montaj, taşıma ve hassas konumlandırma uygulamaları için idealdir. Kompakt tasarımı ve yüksek hızı ile üretim hatlarında maksimum verimlilik sağlar.`,
  image: '/img/industrial/JH/HSR-JH630-1800.png',
  specifications: {
    model: 'HSR-JH630-1800',
    dof: '4',
    payload: '20kg',
    reach: '630mm',
    repeatability: '±0.02mm',
  },
  movementRange: {
    J1: '±150°',
    J2: '-60°/+150°',
    J3: '±200°',
    J4: '±360°',
  },
  maxSpeed: {
    J1: '600°/s, 10.47rad/s',
    J2: '600°/s, 10.47rad/s',
    J3: '800°/s, 13.96rad/s',
    J4: '1200°/s, 20.94rad/s',
  },
  ratedSpeed: {
    J1: '300°/s, 5.24rad/s',
    J2: '300°/s, 5.24rad/s',
    J3: '400°/s, 6.98rad/s',
    J4: '600°/s, 10.47rad/s',
  },
  allowedInertia: {
    J4: '0.5kg·m²',
  },
  allowedTorque: {
    J4: '8Nm',
  },
  environment: {
    temperature: '0-40°C',
    humidity: '20%-80%',
  },
  additionalSpecs: {
    teachPendantCable: '5 metre',
    mainUnitCabinetCable: '3 metre',
    ioParameters: 'Dijital: 32-bit giriş (NPN), 32-bit çıkış (NPN)',
    reservedSignalLines: '8 bit',
    reservedAirway: '1xΦ6',
    powerCapacity: '1.0kVA',
    ratedPower: '0.75kW',
    ratedVoltage: 'Tek faz AC220V',
    ratedCurrent: '4.0A',
    protectionLevel: 'IP54',
    installationMethod: 'Masa/Yan Kurulum',
    weight: '35kg',
    cabinetWeight: '18kg',
    cabinetProtectionLevel: 'IP20',
    other:
      'Yanıcı, patlayıcı veya aşındırıcı gaz ve sıvılarla temas etmekten kaçının. Elektronik gürültü kaynaklarından (plazma) uzak durun.',
  },
};

// Translations
const translations = {
  tr: {
    product: {
      category: 'Kategori',
      keywords: 'Anahtar Kelimeler',
      axes: 'Eksen Sayısı',
      payload: 'Yük',
      reach: 'Kol Açıklığı',
      contactForConsultation: 'Mesaj bırakın',
      specifications: 'Teknik Özellikler',
      movementRange: 'Hareket Aralığı',
      maxSpeed: 'En Yüksek Hız',
      ratedSpeed: 'Nominal Hız',
      allowedInertia: 'İzin Verilen Eylemsizlik Momenti',
      allowedTorque: 'İzin Verilen Tork',
      environment: 'Çevre Koşulları',
      temperature: 'Sıcaklık',
      humidity: 'Nem',
      additionalSpecs: 'Ek Özellikler',
      teachPendantCable: 'Öğretim Pendi Kablo Uzunluğu',
      mainUnitCabinetCable: 'Ana Ünite Dolap Kablo Uzunluğu',
      ioParameters: 'G/Ç Parametreleri',
      reservedSignalLines: 'Rezerve Sinyal Hatları',
      reservedAirway: 'Rezerve Hava Yolu',
      powerCapacity: 'Güç Kapasitesi',
      ratedPower: 'Nominal Güç',
      ratedVoltage: 'Nominal Voltaj',
      ratedCurrent: 'Nominal Akım',
      protectionLevel: 'Koruma Seviyesi',
      installationMethod: 'Kurulum Yöntemi',
      weight: 'Ağırlık',
      cabinetWeight: 'Dolap Ağırlığı',
      cabinetProtectionLevel: 'Dolap Koruma Seviyesi',
      other: 'Diğer',
      backToProducts: 'Ürünlere Dön',
      contact: 'İletişim',
      getQuote: 'Teklif Al',
    },
    common: {
      close: 'Kapat',
      submit: 'Gönder',
      cancel: 'İptal',
      name: 'Ad Soyad',
      email: 'E-posta',
      phone: 'Telefon',
      company: 'Şirket',
      message: 'Mesaj',
      required: 'Zorunlu alan',
      contactForm: 'İletişim Formu',
    },
  },
  en: {
    product: {
      category: 'Category',
      keywords: 'Keywords',
      axes: 'Axes',
      payload: 'Payload',
      reach: 'Reach',
      contactForConsultation: 'Leave a message',
      specifications: 'Specifications',
      movementRange: 'Movement Range',
      maxSpeed: 'Maximum Speed',
      ratedSpeed: 'Rated Speed',
      allowedInertia: 'Allowed Inertia',
      allowedTorque: 'Allowed Torque',
      environment: 'Environment',
      temperature: 'Temperature',
      humidity: 'Humidity',
      additionalSpecs: 'Additional Specifications',
      teachPendantCable: 'Teach Pendant Cable Length',
      mainUnitCabinetCable: 'Main Unit Cabinet Cable Length',
      ioParameters: 'I/O Parameters',
      reservedSignalLines: 'Reserved Signal Lines',
      reservedAirway: 'Reserved Airway',
      powerCapacity: 'Power Capacity',
      ratedPower: 'Rated Power',
      ratedVoltage: 'Rated Voltage',
      ratedCurrent: 'Rated Current',
      protectionLevel: 'Protection Level',
      installationMethod: 'Installation Method',
      weight: 'Weight',
      cabinetWeight: 'Cabinet Weight',
      cabinetProtectionLevel: 'Cabinet Protection Level',
      other: 'Other',
      backToProducts: 'Back to Products',
      contact: 'Contact',
      getQuote: 'Get Quote',
    },
    common: {
      close: 'Close',
      submit: 'Submit',
      cancel: 'Cancel',
      name: 'Full Name',
      email: 'Email',
      phone: 'Phone',
      company: 'Company',
      message: 'Message',
      required: 'Required field',
      contactForm: 'Contact Form',
    },
  },
};

const HSRJH6301800Page = () => {
  const { currentLang } = useLanguage();
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const t = translations[currentLang as keyof typeof translations];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submitted successfully
    setIsContactOpen(false);
    setContactForm({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
    });
  };

  return (
    <div className='min-h-screen bg-white'>
      <Header />

      {/* Breadcrumb */}
      <section className='py-5 bg-gray-50 border-b border-gray-200'>
        <div className='container mx-auto px-4 max-w-7xl'>
          <nav className='flex items-center space-x-2 text-sm text-gray-600'>
            <span className='text-gray-800 font-medium'>
              {productData.category}
            </span>
            <ChevronRight className='w-4 h-4' />
            <span className='text-gray-800 font-medium'>
              {productData.model}
            </span>
          </nav>
        </div>
      </section>

      {/* Product Header */}
      <section className='py-12 bg-white'>
        <div className='container mx-auto px-4 max-w-7xl'>
          <div className='grid lg:grid-cols-2 gap-12 items-start'>
            {/* Product Image */}
            <div className='relative'>
              <div className='bg-gray-50 rounded-2xl p-8 flex items-center justify-center min-h-[400px]'>
                <Image
                  src={productData.image}
                  alt={productData.model}
                  width={500}
                  height={400}
                  className='max-w-full max-h-full object-contain'
                />
              </div>
            </div>

            {/* Product Info */}
            <div className='space-y-6'>
              <div>
                <h1 className='text-4xl font-bold text-gray-800 mb-4'>
                  {productData.model}
                </h1>
              </div>

              {/* Quick Specs */}
              <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                <Card className='p-4 text-center border-2 border-blue-100 bg-blue-50'>
                  <div className='text-sm text-gray-600 mb-1'>
                    {t.product.axes}
                  </div>
                  <div className='text-2xl font-bold text-blue-600'>
                    {productData.axes}
                  </div>
                </Card>
                <Card className='p-4 text-center border-2 border-gray-100'>
                  <div className='text-sm text-gray-600 mb-1'>
                    {t.product.payload}
                  </div>
                  <div className='text-2xl font-bold text-gray-800'>
                    {productData.payload}
                  </div>
                </Card>
                <Card className='p-4 text-center border-2 border-gray-100'>
                  <div className='text-sm text-gray-600 mb-1'>
                    {t.product.reach}
                  </div>
                  <div className='text-2xl font-bold text-gray-800'>
                    {productData.reach}
                  </div>
                </Card>
              </div>

              {/* Action Button */}
              <div className='flex flex-col sm:flex-row gap-4'>
                <Button
                  onClick={() => setIsContactOpen(true)}
                  className='w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300'
                >
                  <MessageCircle className='w-5 h-5 mr-2' />
                  {t.product.contactForConsultation}
                </Button>
              </div>

              {/* Key Features */}
              <div className='grid grid-cols-2 gap-4'>
                <div className='flex items-center space-x-3'>
                  <div className='w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center'>
                    <Settings className='w-5 h-5 text-green-600' />
                  </div>
                  <span className='text-sm font-medium text-gray-700'>
                    ±0.02mm Hassasiyet
                  </span>
                </div>
                <div className='flex items-center space-x-3'>
                  <div className='w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center'>
                    <Zap className='w-5 h-5 text-blue-600' />
                  </div>
                  <span className='text-sm font-medium text-gray-700'>
                    1200°/s Maksimum Hız
                  </span>
                </div>
                <div className='flex items-center space-x-3'>
                  <div className='w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center'>
                    <Package className='w-5 h-5 text-purple-600' />
                  </div>
                  <span className='text-sm font-medium text-gray-700'>
                    20kg Yük Kapasitesi
                  </span>
                </div>
                <div className='flex items-center space-x-3'>
                  <div className='w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center'>
                    <Settings className='w-5 h-5 text-orange-600' />
                  </div>
                  <span className='text-sm font-medium text-gray-700'>
                    630mm Kol Açıklığı
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Description */}
      <section className='py-12 bg-gray-50'>
        <div className='container mx-auto px-4 max-w-7xl'>
          <div className='rounded-lg border bg-card text-card-foreground shadow-sm p-8'>
            <h2 className='text-2xl font-bold text-gray-800 mb-6'>
              Ürün Açıklaması
            </h2>
            <p className='text-gray-700 leading-relaxed text-lg'>
              {productData.description}
            </p>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className='py-12 bg-white'>
        <div className='container mx-auto px-4 max-w-7xl'>
          <h2 className='text-3xl font-bold text-gray-800 mb-8 text-center'>
            Teknik Özellikler
          </h2>
          <div className='grid lg:grid-cols-2 gap-8'>
            {/* Basic Specifications */}
            <Card className='p-6'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4 flex items-center'>
                <Info className='w-5 h-5 mr-2 text-blue-600' />
                Temel Özellikler
              </h3>
              <div className='space-y-3'>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>Model </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.specifications.model}
                  </span>
                </div>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    Özgürlük Dereceleri
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.specifications.dof}
                  </span>
                </div>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    Nominal Yük{' '}
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.specifications.payload}
                  </span>
                </div>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    Kol Açıklığı
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.specifications.reach}
                  </span>
                </div>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    Tekrarlanabilirlik
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.specifications.repeatability}
                  </span>
                </div>
              </div>
            </Card>

            {/* Movement Range */}
            <Card className='p-6'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4 flex items-center'>
                <Settings className='w-5 h-5 mr-2 text-green-600' />
                Hareket Aralığı
              </h3>
              <div className='overflow-x-auto'>
                <table className='w-full text-sm'>
                  <thead>
                    <tr className='border-b border-gray-200'>
                      <th className='text-left py-2 font-medium text-gray-700'>
                        Eksen
                      </th>
                      <th className='text-left py-2 font-medium text-gray-700'>
                        Hareket Aralığı
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(productData.movementRange).map(
                      ([axis, range]) => (
                        <tr key={axis} className='border-b border-gray-100'>
                          <td className='py-2 font-medium'>{axis}</td>
                          <td className='py-2 text-gray-900'>{range}</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </Card>

            {/* Maximum Speed */}
            <Card className='p-6'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4 flex items-center'>
                <Zap className='w-5 h-5 mr-2 text-blue-600' />
                Maksimum Hız
              </h3>
              <div className='overflow-x-auto'>
                <table className='w-full text-sm'>
                  <thead>
                    <tr className='border-b border-gray-200'>
                      <th className='text-left py-2 font-medium text-gray-700'>
                        Eksen
                      </th>
                      <th className='text-left py-2 font-medium text-gray-700'>
                        Maksimum Hız
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(productData.maxSpeed).map(
                      ([axis, speed]) => (
                        <tr key={axis} className='border-b border-gray-100'>
                          <td className='py-2 font-medium'>{axis}</td>
                          <td className='py-2 text-gray-900'>{speed}</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </Card>

            {/* Additional Specifications */}
            <Card className='p-6'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4 flex items-center'>
                <Package className='w-5 h-5 mr-2 text-purple-600' />
                Ek Özellikler
              </h3>
              <div className='space-y-3'>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>Ağırlık</span>
                  <span className='font-semibold text-gray-800'>35kg</span>
                </div>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    Dolap Ağırlığı
                  </span>
                  <span className='font-semibold text-gray-800'>18kg</span>
                </div>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    Koruma Seviyesi
                  </span>
                  <span className='font-semibold text-gray-800'>IP54</span>
                </div>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    Kurulum Yöntemi
                  </span>
                  <span className='font-semibold text-gray-800'>
                    Masa/Yan Kurulum
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {isContactOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4'>
          <div className='bg-white rounded-lg max-w-2xl w-full'>
            <div className='p-8'>
              <div className='flex justify-between items-center mb-6'>
                <h3 className='text-2xl font-bold text-gray-900'>
                  {productData.model} - İletişim
                </h3>
                <button
                  onClick={() => setIsContactOpen(false)}
                  className='text-gray-400 hover:text-gray-600 p-2'
                >
                  <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
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

              <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Adınız ve soyadınız *
                    </label>
                    <input
                      type='text'
                      required
                      value={contactForm.name}
                      onChange={e =>
                        setContactForm({ ...contactForm, name: e.target.value })
                      }
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
                      value={contactForm.email}
                      onChange={e =>
                        setContactForm({
                          ...contactForm,
                          email: e.target.value,
                        })
                      }
                      className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                      placeholder='E-posta adresiniz'
                    />
                  </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Telefon
                    </label>
                    <input
                      type='tel'
                      value={contactForm.phone}
                      onChange={e =>
                        setContactForm({
                          ...contactForm,
                          phone: e.target.value,
                        })
                      }
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
                      value={contactForm.company}
                      onChange={e =>
                        setContactForm({
                          ...contactForm,
                          company: e.target.value,
                        })
                      }
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
                    value={contactForm.message}
                    onChange={e =>
                      setContactForm({
                        ...contactForm,
                        message: e.target.value,
                      })
                    }
                    className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    placeholder='Bu ürün hakkında bilgi almak istiyorum...'
                  />
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
                    onClick={() => setIsContactOpen(false)}
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
};

export default HSRJH6301800Page;
