'use client';

import { useLanguage } from '@/contexts/language-context';
import Link from 'next/link';
import React, { useState } from 'react';

const CompensatorPage = () => {
  const { currentLang } = useLanguage();
  const language = currentLang;
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    // Form submitted successfully
    setIsOpen(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
    });
  };

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const content = {
    tr: {
      title: 'Compensator',
      subtitle: 'Hassas Kuvvet Kompanzasyon Sistemi',
      description:
        'Compensator, robotik uygulamalarda yerçekimi ve dış kuvvetlerin etkilerini otomatik olarak dengeleyen gelişmiş bir kuvvet kompanzasyon sistemidir. Bu sistem, robotların hassas ve güvenli çalışmasını sağlar.',
      features: [
        'Otomatik yerçekimi kompanzasyonu',
        'Gerçek zamanlı kuvvet dengeleme',
        'Çoklu eksen desteği',
        'Hassas sensör teknolojisi',
        'Endüstriyel protokol uyumluluğu',
        'IP67 koruma sınıfı',
        'Geniş sıcaklık aralığı',
        'Kolay entegrasyon',
        'Gelişmiş güvenlik özellikleri',
        'Uzaktan izleme ve kontrol',
      ],
      specifications: {
        compensationRange: '0-500N',
        accuracy: '0.5N',
        responseTime: '<2ms',
        temperature: '-25°C ile +70°C',
        protection: 'IP67',
        communication: 'Ethernet, Modbus, Profinet',
        powerSupply: '24V DC',
        dimensions: '150x100x50mm',
        weight: '0.8kg',
      },
      applications: [
        'Robotik montaj sistemleri',
        'Hassas taşıma uygulamaları',
        'Kalite kontrol sistemleri',
        'Güvenli insan-robot işbirliği',
        'Otomatik test sistemleri',
        'Endüstriyel otomasyon',
      ],
      benefits: [
        'Otomatik kuvvet kompanzasyonu',
        'Hassas ve güvenli robotik uygulamalar',
        'Kolay entegrasyon ve kurulum',
        'Gerçek zamanlı performans',
        'Endüstriyel güvenilirlik',
        'Maliyet etkin çözüm',
      ],
      cta: 'Teklif Alın',
      contact: 'İletişime Geçin',
      backToProducts: 'Ürünlere Dön',
    },
    en: {
      title: 'Compensator',
      subtitle: 'Precise Force Compensation System',
      description:
        'Compensator is an advanced force compensation system that automatically balances the effects of gravity and external forces in robotic applications. This system ensures precise and safe operation of robots.',
      features: [
        'Automatic gravity compensation',
        'Real-time force balancing',
        'Multi-axis support',
        'Precise sensor technology',
        'Industrial protocol compatibility',
        'IP67 protection class',
        'Wide temperature range',
        'Easy integration',
        'Advanced safety features',
        'Remote monitoring and control',
      ],
      specifications: {
        compensationRange: '0-500N',
        accuracy: '0.5N',
        responseTime: '<2ms',
        temperature: '-25°C to +70°C',
        protection: 'IP67',
        communication: 'Ethernet, Modbus, Profinet',
        powerSupply: '24V DC',
        dimensions: '150x100x50mm',
        weight: '0.8kg',
      },
      applications: [
        'Robotic assembly systems',
        'Precise handling applications',
        'Quality control systems',
        'Safe human-robot collaboration',
        'Automated testing systems',
        'Industrial automation',
      ],
      benefits: [
        'Automatic force compensation',
        'Precise and safe robotic applications',
        'Easy integration and setup',
        'Real-time performance',
        'Industrial reliability',
        'Cost-effective solution',
      ],
      cta: 'Get Quote',
      contact: 'Contact Us',
      backToProducts: 'Back to Products',
    },
  };

  const currentContent = content[currentLang as keyof typeof content];

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header */}
      <div className='bg-white shadow-sm'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center py-6'>
            <div>
              <h1 className='text-3xl font-bold text-gray-900'>
                {currentContent.title}
              </h1>
              <p className='mt-2 text-lg text-gray-600'>
                {currentContent.subtitle}
              </p>
            </div>
            <Link
              href='/products'
              className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700'
            >
              {currentContent.backToProducts}
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Left Column - Product Image */}
          <div className='space-y-6'>
            <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
              <div className='aspect-w-16 aspect-h-9 bg-gray-200'>
                <div className='w-full h-64 bg-gradient-to-br from-teal-400 to-blue-600 flex items-center justify-center'>
                  <div className='text-center text-white'>
                    <div className='text-6xl mb-4'>⚖️</div>
                    <p className='text-xl font-semibold'>Compensator</p>
                    <p className='text-sm opacity-90'>
                      Force Compensation System
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Product Details */}
          <div className='space-y-8'>
            {/* Description */}
            <div>
              <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                {currentLang === 'tr'
                  ? 'Ürün Açıklaması'
                  : 'Product Description'}
              </h2>
              <p className='text-gray-700 leading-relaxed'>
                {currentContent.description}
              </p>
            </div>

            {/* Features */}
            <div>
              <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                {currentLang === 'tr' ? 'Özellikler' : 'Features'}
              </h2>
              <ul className='grid grid-cols-1 gap-3'>
                {currentContent.features.map((feature, index) => (
                  <li key={index} className='flex items-start'>
                    <div className='flex-shrink-0 w-5 h-5 mt-0.5'>
                      <div className='w-5 h-5 bg-green-100 rounded-full flex items-center justify-center'>
                        <div className='w-2 h-2 bg-green-600 rounded-full'></div>
                      </div>
                    </div>
                    <span className='ml-3 text-gray-700'>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div>
              <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                {language === 'tr'
                  ? 'Teknik Özellikler'
                  : 'Technical Specifications'}
              </h2>
              <div className='bg-gray-50 rounded-lg p-6'>
                <dl className='grid grid-cols-1 gap-4'>
                  <div className='flex justify-between'>
                    <dt className='font-medium text-gray-700'>
                      {language === 'tr'
                        ? 'Kompanzasyon Aralığı:'
                        : 'Compensation Range:'}
                    </dt>
                    <dd className='text-gray-900'>
                      {currentContent.specifications.compensationRange}
                    </dd>
                  </div>
                  <div className='flex justify-between'>
                    <dt className='font-medium text-gray-700'>
                      {language === 'tr' ? 'Hassasiyet:' : 'Accuracy:'}
                    </dt>
                    <dd className='text-gray-900'>
                      {currentContent.specifications.accuracy}
                    </dd>
                  </div>
                  <div className='flex justify-between'>
                    <dt className='font-medium text-gray-700'>
                      {language === 'tr' ? 'Tepki Süresi:' : 'Response Time:'}
                    </dt>
                    <dd className='text-gray-900'>
                      {currentContent.specifications.responseTime}
                    </dd>
                  </div>
                  <div className='flex justify-between'>
                    <dt className='font-medium text-gray-700'>
                      {language === 'tr'
                        ? 'Sıcaklık Aralığı:'
                        : 'Temperature Range:'}
                    </dt>
                    <dd className='text-gray-900'>
                      {currentContent.specifications.temperature}
                    </dd>
                  </div>
                  <div className='flex justify-between'>
                    <dt className='font-medium text-gray-700'>
                      {language === 'tr'
                        ? 'Koruma Sınıfı:'
                        : 'Protection Class:'}
                    </dt>
                    <dd className='text-gray-900'>
                      {currentContent.specifications.protection}
                    </dd>
                  </div>
                  <div className='flex justify-between'>
                    <dt className='font-medium text-gray-700'>
                      {language === 'tr' ? 'İletişim:' : 'Communication:'}
                    </dt>
                    <dd className='text-gray-900'>
                      {currentContent.specifications.communication}
                    </dd>
                  </div>
                  <div className='flex justify-between'>
                    <dt className='font-medium text-gray-700'>
                      {language === 'tr' ? 'Güç Beslemesi:' : 'Power Supply:'}
                    </dt>
                    <dd className='text-gray-900'>
                      {currentContent.specifications.powerSupply}
                    </dd>
                  </div>
                  <div className='flex justify-between'>
                    <dt className='font-medium text-gray-700'>
                      {language === 'tr' ? 'Boyutlar:' : 'Dimensions:'}
                    </dt>
                    <dd className='text-gray-900'>
                      {currentContent.specifications.dimensions}
                    </dd>
                  </div>
                  <div className='flex justify-between'>
                    <dt className='font-medium text-gray-700'>
                      {language === 'tr' ? 'Ağırlık:' : 'Weight:'}
                    </dt>
                    <dd className='text-gray-900'>
                      {currentContent.specifications.weight}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* Applications */}
            <div>
              <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                {language === 'tr' ? 'Uygulama Alanları' : 'Applications'}
              </h2>
              <div className='grid grid-cols-2 gap-3'>
                {currentContent.applications.map((app, index) => (
                  <div key={index} className='bg-blue-50 rounded-lg p-3'>
                    <span className='text-blue-800 text-sm font-medium'>
                      {app}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                {language === 'tr' ? 'Avantajlar' : 'Benefits'}
              </h2>
              <div className='grid grid-cols-1 gap-3'>
                {currentContent.benefits.map((benefit, index) => (
                  <div key={index} className='flex items-center'>
                    <div className='flex-shrink-0 w-6 h-6'>
                      <div className='w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center'>
                        <svg
                          className='w-4 h-4 text-blue-600'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                        >
                          <path
                            fillRule='evenodd'
                            d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </div>
                    </div>
                    <span className='ml-3 text-gray-700'>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className='flex flex-col sm:flex-row gap-4'>
              <button
                onClick={openModal}
                className='flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors'
              >
                {currentContent.cta}
              </button>
              <button
                onClick={openModal}
                className='flex-1 bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors'
              >
                {currentContent.contact}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      {isOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4'>
          <div className='bg-white rounded-lg max-w-md w-full p-6'>
            <div className='flex justify-between items-center mb-4'>
              <h3 className='text-lg font-semibold text-gray-900'>
                {language === 'tr' ? 'İletişim Formu' : 'Contact Form'}
              </h3>
              <button
                onClick={closeModal}
                className='text-gray-400 hover:text-gray-600'
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

            <form onSubmit={handleSubmit} className='space-y-4'>
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  {language === 'tr' ? 'Ad Soyad' : 'Full Name'}
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  {language === 'tr' ? 'E-posta' : 'Email'}
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
              </div>

              <div>
                <label
                  htmlFor='phone'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  {language === 'tr' ? 'Telefon' : 'Phone'}
                </label>
                <input
                  type='tel'
                  id='phone'
                  name='phone'
                  value={formData.phone}
                  onChange={handleInputChange}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
              </div>

              <div>
                <label
                  htmlFor='company'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  {language === 'tr' ? 'Şirket' : 'Company'}
                </label>
                <input
                  type='text'
                  id='company'
                  name='company'
                  value={formData.company}
                  onChange={handleInputChange}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  {language === 'tr' ? 'Mesaj' : 'Message'}
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
              </div>

              <div className='flex gap-3'>
                <button
                  type='submit'
                  className='flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors'
                >
                  {language === 'tr' ? 'Gönder' : 'Send'}
                </button>
                <button
                  type='button'
                  onClick={closeModal}
                  className='flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 transition-colors'
                >
                  {language === 'tr' ? 'İptal' : 'Cancel'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompensatorPage;
