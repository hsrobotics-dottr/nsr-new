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
  title: {
    default: 'HSR Robotics - Endüstriyel Robotik Çözümleri',
    template: '%s | HSR Robotics',
  },
  description:
    'HSR Robotics, endüstriyel robotik çözümleri, işbirlikçi robotlar, SCARA robotlar ve otomasyon sistemleri ile üretim verimliliğinizi artırın. Profesyonel robotik çözümler.',
  keywords: [
    'endüstriyel robot',
    'otomasyon',
    'robotik çözümler',
    'işbirlikçi robot',
    'SCARA robot',
    '6 eksenli robot',
    'endüstriyel otomasyon',
    'robotik sistemler',
    'üretim otomasyonu',
    'HSR Robotics',
  ],
  authors: [{ name: 'HSR Robotics' }],
  creator: 'HSR Robotics',
  publisher: 'HSR Robotics',
  generator: 'Next.js',
  applicationName: 'HSR Robotics',
  referrer: 'origin-when-cross-origin',
  manifest: '/manifest.webmanifest',
  category: 'Technology',
  classification: 'Business',
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
    alternateLocale: 'en_US',
    url: 'https://hsr-robotics.com',
    siteName: 'HSR Robotics',
    title: 'HSR Robotics - Endüstriyel Robotik Çözümleri',
    description:
      'HSR Robotics, endüstriyel robotik çözümleri, işbirlikçi robotlar, SCARA robotlar ve otomasyon sistemleri ile üretim verimliliğinizi artırın.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'HSR Robotics - Endüstriyel Robotik Çözümleri',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HSR Robotics - Endüstriyel Robotik Çözümleri',
    description:
      'HSR Robotics, endüstriyel robotik çözümleri, işbirlikçi robotlar, SCARA robotlar ve otomasyon sistemleri ile üretim verimliliğinizi artırın.',
    images: ['/og-image.jpg'],
    creator: '@HSRRobotics',
    site: '@HSRRobotics',
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
      noimageindex: false,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: '/',
    languages: {
      'tr-TR': '/',
      'en-US': '/en',
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
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link rel='dns-prefetch' href='//www.google-analytics.com' />

        {/* Structured Data */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'HSR Robotics',
              url: 'https://hsr-robotics.com',
              logo: 'https://hsr-robotics.com/img/hsr-logo.svg',
              description:
                'Endüstriyel robotik çözümleri ve otomasyon sistemleri',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'TR',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                availableLanguage: ['Turkish', 'English'],
              },
              sameAs: [
                'https://www.linkedin.com/company/hsr-robotics',
                'https://twitter.com/HSRRobotics',
              ],
            }),
          }}
        />
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
