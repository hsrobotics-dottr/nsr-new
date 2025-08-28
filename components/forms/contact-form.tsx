'use client';

import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    // Form submitted successfully
    onClose();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4'>
      <div className='bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto'>
        <div className='flex justify-between items-center p-6 border-b'>
          <h3 className='text-lg font-semibold text-gray-900'>
            İletişim Formu
          </h3>
          <button
            onClick={onClose}
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

        <div className='p-6'>
          <p className='text-gray-600 mb-4'>
            Bu ürün hakkında bilgi almak için formu doldurun.
          </p>

          <form onSubmit={handleSubmit} className='space-y-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Ad Soyad *
                </label>
                <input
                  type='text'
                  name='name'
                  required
                  value={formData.name}
                  onChange={handleChange}
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
                  name='email'
                  required
                  value={formData.email}
                  onChange={handleChange}
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
                  name='phone'
                  value={formData.phone}
                  onChange={handleChange}
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
                  name='company'
                  value={formData.company}
                  onChange={handleChange}
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
                name='message'
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
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
                onClick={onClose}
                className='px-6 py-3 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg'
              >
                İptal
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
