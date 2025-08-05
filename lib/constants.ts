// Site configuration
export const siteConfig = {
  name: 'HSR Robotics',
  description: 'Endüstriyel Robotik Çözümleri',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://hsr.com',
  ogImage: '/og-image.jpg',
  links: {
    twitter: process.env.NEXT_PUBLIC_SOCIAL_TWITTER || 'https://twitter.com/hsr',
    linkedin: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN || 'https://linkedin.com/company/hsr',
    facebook: process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK || 'https://facebook.com/hsr',
    instagram: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM || 'https://instagram.com/hsr',
  },
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@hsr.com',
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || '+90-xxx-xxx-xxxx',
    address: process.env.NEXT_PUBLIC_COMPANY_ADDRESS || 'Istanbul, Turkey',
  },
} as const;

// Navigation items
export const navigationItems = [
  {
    title: 'Ana Sayfa',
    href: '/',
    description: 'HSR Robotics ana sayfası',
  },
  {
    title: 'Hakkımızda',
    href: '/about',
    description: 'Şirketimiz hakkında bilgi',
  },
  {
    title: 'Ürünler',
    href: '/products',
    description: 'Endüstriyel robotik ürünlerimiz',
    children: [
      {
        title: '6 Eksenli Robotlar',
        href: '/products/6-axis',
        description: 'Yüksek hassasiyetli 6 eksenli robotlar',
      },
      {
        title: 'SCARA Robotlar',
        href: '/products/scara',
        description: 'Hızlı ve hassas SCARA robotlar',
      },
      {
        title: 'Delta Robotlar',
        href: '/products/delta',
        description: 'Yüksek hızlı delta robotlar',
      },
      {
        title: 'Kartesian Robotlar',
        href: '/products/cartesian',
        description: 'Özelleştirilebilir kartesian robotlar',
      },
    ],
  },
  {
    title: 'Haberler',
    href: '/haberler',
    description: 'Sektör haberleri ve güncellemeler',
  },
  {
    title: 'Kütüphane',
    href: '/library',
    description: 'Teknik dokümantasyon ve kaynaklar',
  },
  {
    title: 'Destek',
    href: '/support',
    description: 'Teknik destek ve iletişim',
  },
] as const;

// Footer links
export const footerLinks = {
  company: [
    { title: 'Hakkımızda', href: '/about' },
    { title: 'Kariyer', href: '/careers' },
    { title: 'İletişim', href: '/contact' },
    { title: 'Basın', href: '/press' },
  ],
  products: [
    { title: '6 Eksenli Robotlar', href: '/products/6-axis' },
    { title: 'SCARA Robotlar', href: '/products/scara' },
    { title: 'Delta Robotlar', href: '/products/delta' },
    { title: 'Kartesian Robotlar', href: '/products/cartesian' },
  ],
  support: [
    { title: 'Teknik Destek', href: '/support' },
    { title: 'Kütüphane', href: '/library' },
    { title: 'Eğitim', href: '/training' },
    { title: 'Servis', href: '/service' },
  ],
  legal: [
    { title: 'Gizlilik Politikası', href: '/privacy' },
    { title: 'Kullanım Şartları', href: '/terms' },
    { title: 'Çerez Politikası', href: '/cookies' },
    { title: 'KVKK', href: '/kvkk' },
  ],
} as const;

// Social media links
export const socialLinks = [
  {
    name: 'LinkedIn',
    href: siteConfig.links.linkedin,
    icon: 'linkedin',
  },
  {
    name: 'Twitter',
    href: siteConfig.links.twitter,
    icon: 'twitter',
  },
  {
    name: 'Facebook',
    href: siteConfig.links.facebook,
    icon: 'facebook',
  },
  {
    name: 'Instagram',
    href: siteConfig.links.instagram,
    icon: 'instagram',
  },
] as const;

// Product categories
export const productCategories = [
  {
    id: '6-axis',
    name: '6 Eksenli Robotlar',
    description: 'Yüksek hassasiyetli 6 eksenli robotlar',
    image: '/products/6-axis-robot.jpg',
    features: ['Yüksek hassasiyet', 'Geniş çalışma alanı', 'Esnek programlama'],
  },
  {
    id: 'scara',
    name: 'SCARA Robotlar',
    description: 'Hızlı ve hassas SCARA robotlar',
    image: '/products/scara-robot.jpg',
    features: ['Yüksek hız', 'Hassas konumlama', 'Kompakt tasarım'],
  },
  {
    id: 'delta',
    name: 'Delta Robotlar',
    description: 'Yüksek hızlı delta robotlar',
    image: '/products/delta-robot.jpg',
    features: ['Çok yüksek hız', 'Hafif yapı', 'Pick & Place'],
  },
  {
    id: 'cartesian',
    name: 'Kartesian Robotlar',
    description: 'Özelleştirilebilir kartesian robotlar',
    image: '/products/cartesian-robot.jpg',
    features: ['Özelleştirilebilir', 'Büyük çalışma alanı', 'Modüler yapı'],
  },
] as const;

// Contact form fields
export const contactFormFields = [
  {
    name: 'name',
    label: 'Ad Soyad',
    type: 'text',
    required: true,
    placeholder: 'Adınız ve soyadınız',
  },
  {
    name: 'email',
    label: 'E-posta',
    type: 'email',
    required: true,
    placeholder: 'ornek@email.com',
  },
  {
    name: 'phone',
    label: 'Telefon',
    type: 'tel',
    required: false,
    placeholder: '+90 (5XX) XXX XX XX',
  },
  {
    name: 'company',
    label: 'Şirket',
    type: 'text',
    required: false,
    placeholder: 'Şirket adınız',
  },
  {
    name: 'subject',
    label: 'Konu',
    type: 'select',
    required: true,
    options: [
      { value: 'general', label: 'Genel Bilgi' },
      { value: 'product', label: 'Ürün Bilgisi' },
      { value: 'support', label: 'Teknik Destek' },
      { value: 'quote', label: 'Teklif Talebi' },
      { value: 'other', label: 'Diğer' },
    ],
  },
  {
    name: 'message',
    label: 'Mesaj',
    type: 'textarea',
    required: true,
    placeholder: 'Mesajınızı buraya yazın...',
    rows: 5,
  },
] as const;

// SEO metadata
export const seoConfig = {
  title: {
    default: 'HSR Robotics - Endüstriyel Robotik Çözümleri',
    template: '%s | HSR Robotics',
  },
  description: 'Modern endüstriyel robotik çözümleri ve otomasyon sistemleri. 6 eksenli robotlar, SCARA, Delta ve Kartesian robotlar.',
  keywords: [
    'endüstriyel robotik',
    'otomasyon',
    '6 eksenli robot',
    'SCARA robot',
    'Delta robot',
    'Kartesian robot',
    'robotik çözümler',
    'endüstri 4.0',
  ],
  authors: [{ name: 'HSR Robotics' }],
  creator: 'HSR Robotics',
  publisher: 'HSR Robotics',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: siteConfig.url,
    title: 'HSR Robotics - Endüstriyel Robotik Çözümleri',
    description: 'Modern endüstriyel robotik çözümleri ve otomasyon sistemleri.',
    siteName: 'HSR Robotics',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'HSR Robotics - Endüstriyel Robotik Çözümleri',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HSR Robotics - Endüstriyel Robotik Çözümleri',
    description: 'Modern endüstriyel robotik çözümleri ve otomasyon sistemleri.',
    images: ['/og-image.jpg'],
    creator: '@hsr',
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
} as const;
