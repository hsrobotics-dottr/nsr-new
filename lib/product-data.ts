// Product data definitions
export interface Product {
  model: string;
  payload: string;
  reach: string;
  image: string;
  specs: {
    dof: string;
    repeatability: string;
    maxSpeed: string;
    weight: string;
  };
  features: string[];
  applications: string[];
  category: string;
}

export interface CollaborativeRobot extends Product {
  // Inherits all Product properties
}

// JR Serisi ürünleri
export const jrProducts: Product[] = [
  {
    model: 'HSR-JR603-570',
    payload: '3kg',
    reach: '571.5mm',
    image: '/img/industrial/JR/HSR-JR603-570.png',
    specs: {
      dof: '6 Eksen',
      repeatability: '±0.03mm',
      maxSpeed: '3.2 m/s',
      weight: '18 kg',
    },
    features: ['Güvenlik Sensörleri', 'Kolay Programlama', 'Kompakt Tasarım'],
    applications: ['Montaj', 'Paketleme', 'Kalite Kontrol'],
    category: 'JR Serisi',
  },
  {
    model: 'HSR-JR620-1800',
    payload: '20kg',
    reach: '1800mm',
    image: '/img/industrial/JR/HSR-JR620-1800.png',
    specs: {
      dof: '6 Eksen',
      repeatability: '±0.12mm',
      maxSpeed: '1.8 m/s',
      weight: '55 kg',
    },
    features: ['En Yüksek Kapasite', 'Maksimum Erişim', 'Endüstriyel Güç'],
    applications: ['Ağır Sanayi', 'Büyük Montaj', 'Otomotiv Üretimi'],
    category: 'JR Serisi',
  },
];

// JH Serisi ürünleri
export const jhProducts: Product[] = [
  {
    model: 'HSR-JH605-1500',
    payload: '5kg',
    reach: '1494mm',
    image: '/img/industrial/JH/HSR-JH605-1500.png',
    specs: {
      dof: '6 Eksen',
      repeatability: '±0.03mm',
      maxSpeed: '3.0 m/s',
      weight: '25 kg',
    },
    features: ['Güvenlik Sensörleri', 'Kolay Programlama', 'Kompakt Tasarım'],
    applications: ['Montaj', 'Paketleme', 'Kalite Kontrol'],
    category: 'JH Serisi',
  },
  {
    model: 'HSR-JH630-1800',
    payload: '30kg',
    reach: '1800mm',
    image: '/img/industrial/JH/HSR-JH630-1800.png',
    specs: {
      dof: '6 Eksen',
      repeatability: '±0.1mm',
      maxSpeed: '2.2 m/s',
      weight: '55 kg',
    },
    features: ['Yüksek Yük Kapasitesi', 'Güçlü Motor', 'Endüstriyel Dayanım'],
    applications: ['Ağır Sanayi', 'Otomotiv', 'Metal İşleme'],
    category: 'JH Serisi',
  },
];

// BR Serisi ürünleri
export const brProducts: Product[] = [
  {
    model: 'HSR-BR312-1100',
    payload: '12kg',
    reach: '1100mm',
    image: '/img/industrial/BR/HSR-BR312-1100.png',
    specs: {
      dof: '6 Eksen',
      repeatability: '±0.05mm',
      maxSpeed: '2.8 m/s',
      weight: '35 kg',
    },
    features: ['Yüksek Hassasiyet', 'Çoklu Sensör', 'Esnek Programlama'],
    applications: ['Kaynak', 'Boyama', 'Malzeme Taşıma'],
    category: 'BR Serisi',
  },
  {
    model: 'HSR-BR625-1900',
    payload: '25kg',
    reach: '1900mm',
    image: '/img/industrial/BR/HSR-BR625-1900.png',
    specs: {
      dof: '6 Eksen',
      repeatability: '±0.1mm',
      maxSpeed: '2.0 m/s',
      weight: '60 kg',
    },
    features: ['En Yüksek Kapasite', 'Maksimum Erişim', 'Endüstriyel Güç'],
    applications: ['Ağır Sanayi', 'Büyük Montaj', 'Otomotiv Üretimi'],
    category: 'BR Serisi',
  },
];

// SR Serisi ürünleri
export const srProducts: Product[] = [
  {
    model: 'HSR-SR3-400',
    payload: '3kg',
    reach: '400mm',
    image: '/img/industrial/SR/HSR-SR3-400.png',
    specs: {
      dof: '4 Eksen',
      repeatability: '±0.02mm',
      maxSpeed: '3.5 m/s',
      weight: '15 kg',
    },
    features: ['Kompakt Tasarım', 'Yüksek Hassasiyet', 'Kolay Programlama'],
    applications: ['Montaj', 'Paketleme', 'Kalite Kontrol'],
    category: 'SR Serisi',
  },
  {
    model: 'HSR-SR20-1000',
    payload: '20kg',
    reach: '1000mm',
    image: '/img/industrial/SR/HSR-SR20-1000.png',
    specs: {
      dof: '4 Eksen',
      repeatability: '±0.1mm',
      maxSpeed: '1.8 m/s',
      weight: '50 kg',
    },
    features: ['Maksimum Yük', 'Geniş Erişim', 'Endüstriyel Güç'],
    applications: ['Ağır Sanayi', 'Büyük Montaj', 'Otomotiv Üretimi'],
    category: 'SR Serisi',
  },
];

// MD Serisi ürünleri
export const mdProducts: Product[] = [
  {
    model: 'HSR-MD410-1500',
    payload: '10kg',
    reach: '1500mm',
    image: '/img/industrial/MD/HSR-MD410-1500.png',
    specs: {
      dof: '4 Eksen',
      repeatability: '±0.05mm',
      maxSpeed: '2.8 m/s',
      weight: '35 kg',
    },
    features: ['Kompakt Tasarım', 'Yüksek Hassasiyet', 'Kolay Programlama'],
    applications: ['Montaj', 'Paketleme', 'Kalite Kontrol'],
    category: 'MD Serisi',
  },
  {
    model: 'HSR-MD4110-2500',
    payload: '110kg',
    reach: '2500mm',
    image: '/img/industrial/MD/HSR-MD4110-2500.png',
    specs: {
      dof: '4 Eksen',
      repeatability: '±0.15mm',
      maxSpeed: '1.5 m/s',
      weight: '120 kg',
    },
    features: [
      'Yüksek Yük Kapasitesi',
      'Geniş Çalışma Alanı',
      'Endüstriyel Dayanım',
    ],
    applications: ['Ağır Sanayi', 'Otomotiv', 'Metal İşleme'],
    category: 'MD Serisi',
  },
];

// HC Serisi ürünleri
export const hcProducts: Product[] = [
  {
    model: 'HSR-HC403-590',
    payload: '3kg',
    reach: '590mm',
    image: '/img/industrial/HC/HSR-HC403-590.png',
    specs: {
      dof: '4 Eksen',
      repeatability: '±0.02mm',
      maxSpeed: '3.5 m/s',
      weight: '18 kg',
    },
    features: ['Kompakt Tasarım', 'Yüksek Hassasiyet', 'Kolay Programlama'],
    applications: ['Montaj', 'Paketleme', 'Kalite Kontrol'],
    category: 'HC Serisi',
  },
];

// Tüm ürünleri birleştir
export const allProducts: Product[] = [
  ...jrProducts,
  ...jhProducts,
  ...brProducts,
  ...srProducts,
  ...mdProducts,
  ...hcProducts,
];

// Ürün model adlarından slug oluşturan fonksiyon
export const getProductSlug = (model: string): string => {
  const slugMap: { [key: string]: string } = {
    // JR Serisi
    'HSR-JR603-570': 'jr-series/hsr-jr603-570',
    'HSR-JR620-1800': 'jr-series/hsr-jr620-1800',
    // JH Serisi
    'HSR-JH605-1500': 'jh-series/hsr-jh605-1500',
    'HSR-JH630-1800': 'jh-series/hsr-jh630-1800',
    // BR Serisi
    'HSR-BR312-1100': 'br-series/hsr-br312-1100',
    'HSR-BR625-1900': 'br-series/hsr-br625-1900',
    // SR Serisi
    'HSR-SR3-400': 'sr-series/hsr-sr3-400',
    'HSR-SR20-1000': 'sr-series/hsr-sr20-1000',
    // MD Serisi
    'HSR-MD410-1500': 'md-series/hsr-md410-1500',
    'HSR-MD4110-2500': 'md-series/hsr-md4110-2500',
    // HC Serisi
    'HSR-HC403-590': 'hc-series/hsr-hc403-590',
    // CR Serisi
    'HSR-CR605-790': 'cr-series/hsr-cr605-790',
    'HSR-CR607-890': 'cr-series/hsr-cr607-890',
    'HSR-CR616-1200': 'cr-series/hsr-cr616-1200',
    'HSR-CR630-1750': 'cr-series/hsr-cr630-1750',
    'HSR-CR625-2000': 'cr-series/hsr-cr625-2000',
    // CO Serisi
    'HSR-CO605-1000': 'co-series/hsr-co605-1000',
    'HSR-CO610-1400': 'co-series/hsr-co610-1400',
    'HSR-CO616-1100': 'co-series/hsr-co616-1100',
  };

  return slugMap[model] || model.toLowerCase().replace(/[^a-z0-9]/g, '-');
};
