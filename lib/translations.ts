// Translation data for the homepage
export interface TranslationData {
  hero: {
    slides: Array<{
      title: string;
      subtitle: string;
      description: string;
    }>;
    buttons: {
      explore: string;
      demo: string;
    };
  };
  productCenter: {
    title: string;
    description: string;
  };
  industrialRobots: {
    title: string;
    subtitle: string;
    description: string;
    button: string;
    features: string[];
  };
  productSeries: {
    title: string;
    description: string;
    specs: {
      payload: string;
      reach: string;
      dof: string;
      details: string;
    };
    specialNeeds: {
      title: string;
      description: string;
      button: string;
    };
  };
  collaborativeRobots: {
    title: string;
    subtitle: string;
    description: string;
    seriesTitle: string;
    seriesDescription: string;
    button: string;
  };
  industries: {
    title: string;
    description: string;
    button: string;
    categories: Array<{
      name: string;
      description: string;
      icon: string;
    }>;
  };
  solutions: {
    title: string;
    description: string;
    button: string;
    sectors: Array<{
      title: string;
      href: string;
      video: string;
    }>;
    viewDetails: string;
  };
  modal: {
    close: string;
    technicalSpecs: string;
    features: string;
    applications: string;
    getQuote: string;
    downloadBrochure: string;
    specs: {
      dof: string;
      repeatability: string;
      maxSpeed: string;
      weight: string;
    };
  };
  contact: {
    title: string;
    form: {
      name: string;
      email: string;
      phone: string;
      message: string;
      send: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      phonePlaceholder: string;
      messagePlaceholder: string;
    };
  };
}

export const pageTranslations: Record<string, TranslationData> = {
  tr: {
    hero: {
      slides: [
        {
          title: 'Endüstriyel İşbirlikçi Robotlar',
          subtitle: 'Yüksek Hız, Yüksek Hassasiyet, Kararlı ve Güvenilir',
          description: 'Güvenli ve Praktik',
        },
        {
          title: 'Akıllı Otomasyon Çözümleri',
          subtitle: 'Gelişmiş AI Teknolojisi ile Donatılmış',
          description: 'Verimli ve Ekonomik',
        },
        {
          title: 'Yeni Nesil Robot Teknolojisi',
          subtitle: 'İnsan-Robot İşbirliği için Tasarlandı',
          description: 'Esnek ve Güçlü',
        },
      ],
      buttons: {
        explore: 'Ürünleri Keşfet',
        demo: 'Demo İzle',
      },
    },
    productCenter: {
      title: 'Ürün Merkezi',
      description:
        'Huashu Robotics endüstriyel robotları, hassas üretim teknolojisi, gelişmiş kontrol teknolojisi ve mükemmel performans ile çeşitli sektörlere verimli ve güvenilir otomasyon çözümleri sunarak işletmelerin akıllı üretim dönüşümünü destekler.',
    },
    industrialRobots: {
      title: 'Endüstriyel Robotlar',
      subtitle:
        'Müşterilerimize insan-makine işbirliği çözümleri sunmaya odaklanıyoruz.',
      description:
        'Endüstriyel robotlar yüksek hassasiyet, yüksek hız ve yüksek güvenilirlik özelliklerine sahiptir. Otomotiv üretimi, elektronik montaj, metal işleme, gıda ambalajlama gibi alanlarda yaygın olarak kullanılır.',
      button: 'Daha Fazla Bilgi',
      features: [
        'Güvenlik Sistemi',
        'Görsel Tanıma',
        'Akıllı Kontrol',
        'Hassas Üretim',
        'Güvenilir',
        'Yüksek Verim',
      ],
    },
    productSeries: {
      title: 'Robot Ürün Serimiz',
      description:
        'Endüstriyel ihtiyaçlarınıza uygun, farklı kapasitelerde robot çözümleri',
      specs: {
        payload: 'Yük Kapasitesi',
        reach: 'Kol Açıklığı',
        dof: 'Eksen Sayısı',
        details: 'Detayları İncele',
      },
      specialNeeds: {
        title: 'Özel İhtiyaçlarınız mı Var?',
        description:
          'Standart ürünlerimizin yanında, özel gereksinimlerinize uygun robotik çözümler de geliştiriyoruz.',
        button: 'Özel Çözüm Talep Et',
      },
    },
    collaborativeRobots: {
      title: 'İşbirlikçi Robotlar',
      subtitle: 'İnsan-robot işbirliği için güvenli ve akıllı çözümler',
      description:
        'İşbirlikçi robotlarımız, yüksek hassasiyet ve güvenlik standartlarıyla çeşitli endüstrilerde insan operatörlerle güvenli bir şekilde çalışabilir. Gelişmiş sensör teknolojisi ve yapay zeka destekli kontrol sistemleri ile üretim verimliliğinizi artırın.',
      seriesTitle: 'İşbirlikçi Robot Serimiz',
      seriesDescription:
        'Güvenli insan-robot işbirliği için tasarlanmış akıllı çözümler',
      button: 'Daha Fazla Bilgi',
    },
    industries: {
      title: 'Endüstri Çözümlerimiz',
      description:
        'Farklı endüstri sektörlerinde robotik otomasyon çözümlerimizi keşfedin',
      button: 'Tüm Endüstrileri İncele',
      categories: [
        {
          name: '3C Endüstrisi',
          description: 'Bilgisayar, İletişim ve Tüketici Elektroniği',
          icon: 'Smartphone',
        },
        {
          name: 'Ayakkabı ve Giyim',
          description: 'Tekstil ve Ayakkabı Üretimi',
          icon: 'Shirt',
        },
        {
          name: 'Otomobil Endüstrisi',
          description: 'Otomotiv ve Araç Üretimi',
          icon: 'Car',
        },
        {
          name: 'Ev Aletleri',
          description: 'Beyaz Eşya ve Ev Aletleri',
          icon: 'Home',
        },
        {
          name: 'Metal İşleme',
          description: 'Metal İşleme ve Üretim',
          icon: 'Wrench',
        },
        {
          name: 'Diğer Endüstriler',
          description: 'Çeşitli Endüstriyel Uygulamalar',
          icon: 'Factory',
        },
      ],
    },
    solutions: {
      title: 'Sektörel Çözümler',
      description:
        'Farklı sektörlerin özel ihtiyaçlarına yönelik robotik otomasyon çözümleri',
      button: 'Tüm Sektörleri İncele',
      sectors: [
        {
          title: '3C Endüstrisi',
          href: '/sectors/3c',
          video: '/video/hsr-3c-endustrisi.mp4',
        },
        {
          title: 'Otomotiv',
          href: '/sectors/automotive',
          video: '/video/hsr-otomotiv-sektoru.mp4',
        },
        {
          title: 'Ayakkabı ve Tekstil',
          href: '/sectors/shoes-clothes',
          video: '/video/hsr-ayakkabi-sektoru.mp4',
        },
        {
          title: 'Ev Aletleri Endüstrisi',
          href: '/sectors/appliances',
          video: '/video/hsr-ev-aletleri.mp4',
        },
        {
          title: 'Metal İşleme Sektörü',
          href: '/sectors/metalworking',
          video: '/video/hsr-metal-isleme.mp4',
        },
        {
          title: 'Diğer Sektörler',
          href: '/sectors/others',
          video: '/video/hsr-diger-sektor.mp4',
        },
      ],
      viewDetails: 'Detayları İncele',
    },
    modal: {
      close: 'Kapat',
      technicalSpecs: 'Teknik Özellikler',
      features: 'Özellikler',
      applications: 'Uygulama Alanları',
      getQuote: 'Fiyat Teklifi Al',
      downloadBrochure: 'Broşür İndir',
      specs: {
        dof: 'Serbestlik Derecesi',
        repeatability: 'Tekrarlanabilirlik',
        maxSpeed: 'Maksimum Hız',
        weight: 'Ağırlık',
      },
    },
    contact: {
      title: 'İletişim Formu',
      form: {
        name: 'Ad Soyad',
        email: 'E-posta',
        phone: 'Telefon',
        message: 'Mesaj',
        send: 'Gönder',
        namePlaceholder: 'Adınızı ve soyadınızı girin',
        emailPlaceholder: 'E-posta adresinizi girin',
        phonePlaceholder: 'Telefon numaranızı girin',
        messagePlaceholder: 'Mesajınızı yazın...',
      },
    },
  },
  en: {
    hero: {
      slides: [
        {
          title: 'Industrial Collaborative Robots',
          subtitle: 'High Speed, High Precision, Stable and Reliable',
          description: 'Safe and Practical',
        },
        {
          title: 'Smart Automation Solutions',
          subtitle: 'Equipped with Advanced AI Technology',
          description: 'Efficient and Economic',
        },
        {
          title: 'Next Generation Robot Technology',
          subtitle: 'Designed for Human-Robot Collaboration',
          description: 'Flexible and Powerful',
        },
      ],
      buttons: {
        explore: 'Explore Products',
        demo: 'Watch Demo',
      },
    },
    productCenter: {
      title: 'Product Center',
      description:
        "Huashu Robotics industrial robots support enterprises' smart manufacturing transformation by providing efficient and reliable automation solutions to various industries with precision manufacturing technology, advanced control technology and excellent performance.",
    },
    industrialRobots: {
      title: 'Industrial Robots',
      subtitle:
        'We focus on providing human-machine collaboration solutions to our customers.',
      description:
        'Industrial robots have high precision, high speed and high reliability features. They are widely used in automotive manufacturing, electronic assembly, metal processing, food packaging and other fields.',
      button: 'Learn More',
      features: [
        'Safety System',
        'Visual Recognition',
        'Smart Control',
        'Precision Manufacturing',
        'Reliable',
        'High Efficiency',
      ],
    },
    productSeries: {
      title: 'Our Robot Product Series',
      description:
        'Robot solutions with different capacities suitable for your industrial needs',
      specs: {
        payload: 'Payload',
        reach: 'Reach',
        dof: 'Degrees of Freedom',
        details: 'View Details',
      },
      specialNeeds: {
        title: 'Do You Have Special Needs?',
        description:
          'In addition to our standard products, we also develop robotic solutions tailored to your special requirements.',
        button: 'Request Custom Solution',
      },
    },
    collaborativeRobots: {
      title: 'Collaborative Robots',
      subtitle: 'Safe and smart solutions for human-robot collaboration',
      description:
        'Our collaborative robots can work safely with human operators in various industries with high precision and safety standards. Increase your production efficiency with advanced sensor technology and AI-supported control systems.',
      seriesTitle: 'Our Collaborative Robot Series',
      seriesDescription:
        'Smart solutions designed for safe human-robot collaboration',
      button: 'Learn More',
    },
    industries: {
      title: 'Our Industry Solutions',
      description:
        'Discover our robotic automation solutions in different industry sectors',
      button: 'Explore All Industries',
      categories: [
        {
          name: '3C Industry',
          description: 'Computer, Communication and Consumer Electronics',
          icon: 'Smartphone',
        },
        {
          name: 'Shoes and Clothing',
          description: 'Textile and Shoe Production',
          icon: 'Shirt',
        },
        {
          name: 'Automotive Industry',
          description: 'Automotive and Vehicle Production',
          icon: 'Car',
        },
        {
          name: 'Home Appliances',
          description: 'White Goods and Home Appliances',
          icon: 'Home',
        },
        {
          name: 'Metal Processing',
          description: 'Metal Processing and Production',
          icon: 'Wrench',
        },
        {
          name: 'Other Industries',
          description: 'Various Industrial Applications',
          icon: 'Factory',
        },
      ],
    },
    solutions: {
      title: 'Industry Solutions',
      description:
        'Robotic automation solutions tailored to the special needs of different sectors',
      button: 'Explore All Sectors',
      sectors: [
        {
          title: '3C Industry',
          href: '/sectors/3c',
          video: '/video/hsr-3c-endustrisi.mp4',
        },
        {
          title: 'Automotive',
          href: '/sectors/automotive',
          video: '/video/hsr-otomotiv-sektoru.mp4',
        },
        {
          title: 'Shoes and Textiles',
          href: '/sectors/shoes-clothes',
          video: '/video/hsr-ayakkabi-sektoru.mp4',
        },
        {
          title: 'Home Appliances Industry',
          href: '/sectors/appliances',
          video: '/video/hsr-ev-aletleri.mp4',
        },
        {
          title: 'Metal Processing Sector',
          href: '/sectors/metalworking',
          video: '/video/hsr-metal-isleme.mp4',
        },
        {
          title: 'Other Sectors',
          href: '/sectors/others',
          video: '/video/hsr-diger-sektor.mp4',
        },
      ],
      viewDetails: 'View Details',
    },
    modal: {
      close: 'Close',
      technicalSpecs: 'Technical Specifications',
      features: 'Features',
      applications: 'Applications',
      getQuote: 'Get Quote',
      downloadBrochure: 'Download Brochure',
      specs: {
        dof: 'Degrees of Freedom',
        repeatability: 'Repeatability',
        maxSpeed: 'Maximum Speed',
        weight: 'Weight',
      },
    },
    contact: {
      title: 'Contact Form',
      form: {
        name: 'Full Name',
        email: 'Email',
        phone: 'Phone',
        message: 'Message',
        send: 'Send',
        namePlaceholder: 'Enter your full name',
        emailPlaceholder: 'Enter your email address',
        phonePlaceholder: 'Enter your phone number',
        messagePlaceholder: 'Write your message...',
      },
    },
  },
};
