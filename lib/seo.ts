import { Metadata } from 'next';
import { seoConfig, siteConfig } from './constants';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
  noIndex?: boolean;
  noFollow?: boolean;
}

export function generateSEO({
  title,
  description,
  keywords = [],
  image,
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  section,
  tags = [],
  noIndex = false,
  noFollow = false,
}: SEOProps = {}): Metadata {
  const fullTitle = title
    ? seoConfig.title.template.replace('%s', title)
    : seoConfig.title.default;

  const fullDescription = description || seoConfig.description;
  const fullKeywords = [...seoConfig.keywords, ...keywords];
  const fullImage = image || seoConfig.openGraph.images[0].url;
  const fullUrl = url ? `${siteConfig.url}${url}` : siteConfig.url;

  const metadata: Metadata = {
    title: fullTitle,
    description: fullDescription,
    keywords: fullKeywords,
    authors: author ? [{ name: author }] : seoConfig.authors,
    creator: seoConfig.creator,
    publisher: seoConfig.publisher,
    formatDetection: seoConfig.formatDetection,
    metadataBase: seoConfig.metadataBase,
    alternates: {
      canonical: fullUrl,
    },
    robots: {
      index: !noIndex,
      follow: !noFollow,
      googleBot: {
        index: !noIndex,
        follow: !noFollow,
        'max-video-preview': seoConfig.robots.googleBot['max-video-preview'],
        'max-image-preview': seoConfig.robots.googleBot['max-image-preview'],
        'max-snippet': seoConfig.robots.googleBot['max-snippet'],
      },
    },
    openGraph: {
      type,
      locale: seoConfig.openGraph.locale,
      url: fullUrl,
      title: fullTitle,
      description: fullDescription,
      siteName: seoConfig.openGraph.siteName,
      images: [
        {
          url: fullImage,
          width: seoConfig.openGraph.images[0].width,
          height: seoConfig.openGraph.images[0].height,
          alt: fullTitle,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(author && { authors: [author] }),
      ...(section && { section }),
      ...(tags.length > 0 && { tags }),
    },
    twitter: {
      card: seoConfig.twitter.card,
      title: fullTitle,
      description: fullDescription,
      images: [fullImage],
      creator: seoConfig.twitter.creator,
    },
  };

  return metadata;
}

// Structured data (JSON-LD) generators
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.contact.phone,
      contactType: 'customer service',
      email: siteConfig.contact.email,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Istanbul',
      addressCountry: 'TR',
    },
    sameAs: [
      siteConfig.links.linkedin,
      siteConfig.links.twitter,
      siteConfig.links.facebook,
      siteConfig.links.instagram,
    ],
  };
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((breadcrumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: breadcrumb.name,
      item: `${siteConfig.url}${breadcrumb.url}`,
    })),
  };
}

export function generateProductSchema(product: {
  name: string;
  description: string;
  image: string;
  url: string;
  category: string;
  brand: string;
  sku?: string;
  price?: string;
  availability?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    url: `${siteConfig.url}${product.url}`,
    category: product.category,
    brand: {
      '@type': 'Brand',
      name: product.brand,
    },
    ...(product.sku && { sku: product.sku }),
    ...(product.price && {
      offers: {
        '@type': 'Offer',
        price: product.price,
        priceCurrency: 'TRY',
        availability: product.availability || 'https://schema.org/InStock',
        seller: {
          '@type': 'Organization',
          name: siteConfig.name,
        },
      },
    }),
  };
}

export function generateArticleSchema(article: {
  title: string;
  description: string;
  image: string;
  url: string;
  author: string;
  publishedTime: string;
  modifiedTime?: string;
  section: string;
  tags: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image,
    url: `${siteConfig.url}${article.url}`,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.png`,
      },
    },
    datePublished: article.publishedTime,
    ...(article.modifiedTime && { dateModified: article.modifiedTime }),
    articleSection: article.section,
    keywords: article.tags.join(', '),
  };
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Istanbul',
      addressCountry: 'TR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 41.0082,
      longitude: 28.9784,
    },
    openingHours: 'Mo-Fr 09:00-18:00',
    priceRange: '$$',
    sameAs: [
      siteConfig.links.linkedin,
      siteConfig.links.twitter,
      siteConfig.links.facebook,
      siteConfig.links.instagram,
    ],
  };
}

// Utility functions
export function generateCanonicalUrl(path: string): string {
  return `${siteConfig.url}${path}`;
}

export function generateSitemapUrl(): string {
  return `${siteConfig.url}/sitemap.xml`;
}

export function generateRobotsUrl(): string {
  return `${siteConfig.url}/robots.txt`;
}

export function generateManifestUrl(): string {
  return `${siteConfig.url}/manifest.json`;
}

// Meta tag generators
export function generateMetaTags(seoProps: SEOProps): Record<string, string> {
  const metadata = generateSEO(seoProps);

  const metaTags: Record<string, string> = {
    'viewport': 'width=device-width, initial-scale=1',
    'theme-color': '#3b82f6',
    'color-scheme': 'light dark',
  };

  if (metadata.title) {
    metaTags['title'] = metadata.title as string;
  }

  if (metadata.description) {
    metaTags['description'] = metadata.description as string;
  }

  if (metadata.keywords) {
    metaTags['keywords'] = (metadata.keywords as string[]).join(', ');
  }

  if (metadata.robots) {
    const robots = metadata.robots as any;
    const robotsValue = [
      robots.index === false ? 'noindex' : 'index',
      robots.follow === false ? 'nofollow' : 'follow',
    ].join(', ');
    metaTags['robots'] = robotsValue;
  }

  return metaTags;
}

// Open Graph tag generators
export function generateOpenGraphTags(seoProps: SEOProps): Record<string, string> {
  const metadata = generateSEO(seoProps);
  const og = metadata.openGraph as any;

  return {
    'og:type': og.type,
    'og:locale': og.locale,
    'og:url': og.url,
    'og:title': og.title,
    'og:description': og.description,
    'og:site_name': og.siteName,
    'og:image': og.images[0].url,
    'og:image:width': og.images[0].width.toString(),
    'og:image:height': og.images[0].height.toString(),
    'og:image:alt': og.images[0].alt,
    ...(og.publishedTime && { 'og:published_time': og.publishedTime }),
    ...(og.modifiedTime && { 'og:modified_time': og.modifiedTime }),
    ...(og.authors && { 'og:author': og.authors[0] }),
    ...(og.section && { 'og:section': og.section }),
    ...(og.tags && { 'og:tag': og.tags.join(', ') }),
  };
}

// Twitter Card tag generators
export function generateTwitterCardTags(seoProps: SEOProps): Record<string, string> {
  const metadata = generateSEO(seoProps);
  const twitter = metadata.twitter as any;

  return {
    'twitter:card': twitter.card,
    'twitter:title': twitter.title,
    'twitter:description': twitter.description,
    'twitter:image': twitter.images[0],
    'twitter:creator': twitter.creator,
    'twitter:site': twitter.creator,
  };
}

// Predefined SEO configurations for common pages
export const pageSEO = {
  home: () => generateSEO({
    title: 'Ana Sayfa',
    description: 'HSR Robotics - Modern endüstriyel robotik çözümleri ve otomasyon sistemleri. 6 eksenli robotlar, SCARA, Delta ve Kartesian robotlar.',
    keywords: ['endüstriyel robotik', 'otomasyon', 'robotik çözümler'],
  }),

  about: () => generateSEO({
    title: 'Hakkımızda',
    description: 'HSR Robotics olarak endüstriyel robotik alanında yenilikçi çözümler sunuyoruz. Deneyimli ekibimiz ve modern teknolojilerimizle sektörde öncüyüz.',
    keywords: ['HSR Robotics', 'hakkımızda', 'şirket', 'vizyon', 'misyon'],
  }),

  products: () => generateSEO({
    title: 'Ürünler',
    description: 'Endüstriyel robotik ürünlerimizi keşfedin. 6 eksenli robotlar, SCARA, Delta ve Kartesian robotlar ile otomasyon ihtiyaçlarınızı karşılıyoruz.',
    keywords: ['ürünler', '6 eksenli robot', 'SCARA robot', 'Delta robot', 'Kartesian robot'],
  }),

  news: () => generateSEO({
    title: 'Haberler',
    description: 'Endüstriyel robotik sektöründeki en güncel haberler, teknoloji gelişmeleri ve HSR Robotics güncellemeleri.',
    keywords: ['haberler', 'sektör haberleri', 'teknoloji', 'güncellemeler'],
    type: 'article',
  }),

  library: () => generateSEO({
    title: 'Kütüphane',
    description: 'Teknik dokümantasyon, kullanım kılavuzları, veri sayfaları ve endüstriyel robotik ile ilgili kaynaklar.',
    keywords: ['kütüphane', 'dokümantasyon', 'kullanım kılavuzu', 'teknik bilgi'],
  }),

  support: () => generateSEO({
    title: 'Destek',
    description: 'Teknik destek, servis, eğitim ve müşteri hizmetleri. HSR Robotics ürünleriniz için profesyonel destek.',
    keywords: ['destek', 'teknik destek', 'servis', 'eğitim', 'müşteri hizmetleri'],
  }),

  contact: () => generateSEO({
    title: 'İletişim',
    description: 'HSR Robotics ile iletişime geçin. Satış, teknik destek, servis ve genel bilgi için bizimle iletişime geçin.',
    keywords: ['iletişim', 'satış', 'teknik destek', 'servis', 'bilgi'],
  }),
} as const;
