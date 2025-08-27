import ErrorBoundary from '@/components/error-boundary';
import ScrollReset from '@/components/scroll-reset';
import { SkipToContent } from '@/components/skip-to-content';
import { Toaster } from '@/components/ui/toaster';
import { LanguageProvider } from '@/contexts/language-context';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import type React from 'react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#2563eb' },
    { media: '(prefers-color-scheme: dark)', color: '#1e40af' },
  ],
  colorScheme: 'light dark',
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:4000'
  ),
  title: 'Huashu Robotics - Endüstriyel Robot Çözümleri',
  description:
    'Profesyonel endüstriyel robot üreticisi, müşterilerimize yüksek kaliteli otomasyon çözümleri sunmaya odaklanmaktadır.',
  keywords:
    'endüstriyel robot, otomasyon, robotik çözümler, 6 eksenli robot, işbirlikçi robot, Huashu',
  authors: [{ name: 'Huashu Robotics' }],
  creator: 'Huashu Robotics',
  publisher: 'Huashu Robotics',
  generator: 'Next.js',
  applicationName: 'Huashu Robotics',
  referrer: 'origin-when-cross-origin',
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://huashu-robotik.com',
    siteName: 'Huashu Robotics',
    title: 'Huashu Robotics - Endüstriyel Robot Çözümleri',
    description:
      'Profesyonel endüstriyel robot üreticisi, müşterilerimize yüksek kaliteli otomasyon çözümleri sunmaya odaklanmaktadır.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Huashu Robotics - Endüstriyel Robot Çözümleri',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Huashu Robotics - Endüstriyel Robot Çözümleri',
    description:
      'Profesyonel endüstriyel robot üreticisi, müşterilerimize yüksek kaliteli otomasyon çözümleri sunmaya odaklanmaktadır.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='tr'>
      <head>
        {/* Critical resource hints */}
        {/* Dış kaynak linkleri kaldırıldı - artık kendi görsellerimizi kullanıyoruz */}


      </head>
      <body className={inter.className}>
        <ErrorBoundary>
          <SkipToContent />
          <LanguageProvider>
            <ScrollReset />
            {children}
            <Toaster />
          </LanguageProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
