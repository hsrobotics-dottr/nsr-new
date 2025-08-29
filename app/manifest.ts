import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'HSR Robotics - Endüstriyel Robotik Çözümleri',
    short_name: 'HSR Robotics',
    description:
      'HSR Robotics, endüstriyel robotik çözümleri, işbirlikçi robotlar, SCARA robotlar ve otomasyon sistemleri ile üretim verimliliğinizi artırın.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    orientation: 'portrait-primary',
    scope: '/',
    lang: 'tr',
    categories: ['productivity', 'business'],
    icons: [
      {
        src: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    screenshots: [
      {
        src: '/og-image.jpg',
        sizes: '1200x630',
        type: 'image/jpeg',
        form_factor: 'wide',
        label: 'HSR Robotics Ana Sayfa',
      },
    ],
    shortcuts: [
      {
        name: 'Ürünler',
        short_name: 'Ürünler',
        description: 'Robot ürünlerimizi keşfedin',
        url: '/products',
        icons: [
          {
            src: '/favicon-32x32.png',
            sizes: '32x32',
          },
        ],
      },
      {
        name: 'İletişim',
        short_name: 'İletişim',
        description: 'Bizimle iletişime geçin',
        url: '/contact',
        icons: [
          {
            src: '/favicon-32x32.png',
            sizes: '32x32',
          },
        ],
      },
    ],
  };
}
