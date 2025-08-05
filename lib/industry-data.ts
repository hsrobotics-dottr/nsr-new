export const generateIndustryVideos = (industry: string, count: number = 15) => {
  const categories = {
    '3c': ['Elektronik Montaj', 'PCB İşleme', 'Kalite Kontrol'],
    'ayakkabi-giyim': ['Dikim', 'Kesim', 'Paketleme'],
    'otomobil': ['Kaynak', 'Montaj', 'Boyama'],
    'ev-aletleri': ['Montaj', 'Test', 'Paketleme'],
    'metal-isleme': ['Kesim', 'Kaynak', 'Taşlama'],
    'diger': ['Genel Uygulama', 'Özel Çözüm', 'Otomasyon']
  }

  const industryCategories = categories[industry as keyof typeof categories] || ['Genel Uygulama']

  const videos = []
  for (let i = 1; i <= count; i++) {
    const category = industryCategories[Math.floor(Math.random() * industryCategories.length)]
    const duration = `${Math.floor(Math.random() * 10) + 1}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`

    videos.push({
      id: `${industry}-video-${i}`,
      title: `${industry.charAt(0).toUpperCase() + industry.slice(1)} Uygulama ${i}`,
      description: `Bu video ${industry} sektöründe robotik çözümlerimizin ${i}. uygulamasını göstermektedir.`,
      thumbnail: '/placeholder.jpg',
      duration,
      category
    })
  }

  return videos
}

export const industryData = {
  '3c': {
    title: '3C Endüstrisi',
    description: 'Bilgisayar, İletişim ve Tüketici Elektroniği sektöründe robotik otomasyon çözümlerimiz ile üretim süreçlerinizi optimize edin.',
    images: ['/placeholder.jpg', '/placeholder.jpg']
  },
  'ayakkabi-giyim': {
    title: 'Ayakkabı ve Giyim Endüstrisi',
    description: 'Tekstil ve ayakkabı üretiminde hassasiyet ve hız gerektiren uygulamalar için özel robotik çözümler.',
    images: ['/placeholder.jpg', '/placeholder.jpg']
  },
  'otomobil': {
    title: 'Otomobil Endüstrisi',
    description: 'Otomotiv sektöründe ağır yük taşıma, hassas montaj ve kalite kontrol uygulamaları için robotik sistemler.',
    images: ['/placeholder.jpg', '/placeholder.jpg']
  },
  'ev-aletleri': {
    title: 'Ev Aletleri Endüstrisi',
    description: 'Beyaz eşya ve ev aletleri üretiminde verimlilik ve kalite artışı sağlayan robotik çözümler.',
    images: ['/placeholder.jpg', '/placeholder.jpg']
  },
  'metal-isleme': {
    title: 'Metal İşleme Endüstrisi',
    description: 'Metal işleme ve üretim süreçlerinde güvenlik ve hassasiyet için tasarlanmış robotik sistemler.',
    images: ['/placeholder.jpg', '/placeholder.jpg']
  },
  'diger': {
    title: 'Diğer Endüstriler',
    description: 'Çeşitli endüstriyel uygulamalar için özelleştirilebilir robotik çözümler ve otomasyon sistemleri.',
    images: ['/placeholder.jpg', '/placeholder.jpg']
  }
}
