// Collaborative robot data definitions
export interface CollaborativeRobot {
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

// CR Serisi ürünleri
export const crProducts: CollaborativeRobot[] = [
  {
    model: 'HSR-CR605-790',
    payload: '5kg',
    reach: '785mm',
    image: '/img/Collaborative/CR/HSR-CR605-790.png',
    specs: {
      dof: '6 Eksen',
      repeatability: '±0.02mm',
      maxSpeed: '3.5 m/s',
      weight: '24 kg',
    },
    features: ['IP67 Koruma', 'Yüksek Hız', '±0.02mm Hassasiyet'],
    applications: ['Montaj', 'Paketleme', 'Kalite Kontrol'],
    category: 'CR Serisi',
  },
  {
    model: 'HSR-CR607-890',
    payload: '7kg',
    reach: '885mm',
    image: '/img/Collaborative/CR/HSR-CR607-890.png',
    specs: {
      dof: '6 Eksen',
      repeatability: '±0.02mm',
      maxSpeed: '3.2 m/s',
      weight: '35 kg',
    },
    features: ['IP67 Koruma', 'Yüksek Hız', '±0.02mm Hassasiyet'],
    applications: ['Kaynak', 'Boyama', 'Malzeme Taşıma'],
    category: 'CR Serisi',
  },
  {
    model: 'HSR-CR616-1200',
    payload: '16kg',
    reach: '1155mm',
    image: '/img/Collaborative/CR/HSR-CR616-1200.png',
    specs: {
      dof: '6 Eksen',
      repeatability: '±0.03mm',
      maxSpeed: '2.5 m/s',
      weight: '53.4 kg',
    },
    features: ['IP67 Koruma', 'Yüksek Hız', '±0.03mm Hassasiyet'],
    applications: ['Ağır Montaj', 'Paletleme', 'CNC Besleme'],
    category: 'CR Serisi',
  },
  {
    model: 'HSR-CR630-1750',
    payload: '30kg',
    reach: '1750mm',
    image: '/img/Collaborative/CR/HSR-CR630-1750.png',
    specs: {
      dof: '6 Eksen',
      repeatability: '±0.05mm',
      maxSpeed: '2.0 m/s',
      weight: '145 kg',
    },
    features: ['IP67 Koruma', 'Yüksek Hız', '±0.05mm Hassasiyet'],
    applications: ['Ağır Sanayi', 'Büyük Montaj', 'Otomotiv Üretimi'],
    category: 'CR Serisi',
  },
  {
    model: 'HSR-CR625-2000',
    payload: '25kg',
    reach: '2000mm',
    image: '/img/Collaborative/CR/HSR-CR625-200.png',
    specs: {
      dof: '6 Eksen',
      repeatability: '±0.05mm',
      maxSpeed: '2.2 m/s',
      weight: '150 kg',
    },
    features: ['IP67 Koruma', 'Yüksek Hız', '±0.05mm Hassasiyet'],
    applications: ['Büyük Parça Montajı', 'Yükleme/Boşaltma', 'Pres Besleme'],
    category: 'CR Serisi',
  },
];

// CO Serisi ürünleri
export const coProducts: CollaborativeRobot[] = [
  {
    model: 'HSR-CO605-1000',
    payload: '5kg',
    reach: '1005mm',
    image: '/img/Collaborative/CO/HSR-CO605-1000.png',
    specs: {
      dof: '6 Eksen',
      repeatability: '±0.02mm',
      maxSpeed: '2.5 m/s',
      weight: '25 kg',
    },
    features: ['IP54 Koruma', 'Yüksek Hız', '±0.02mm Hassasiyet'],
    applications: ['Montaj', 'Paketleme', 'Kalite Kontrol'],
    category: 'CO Serisi',
  },
  {
    model: 'HSR-CO610-1400',
    payload: '10kg',
    reach: '1355mm',
    image: '/img/Collaborative/CO/HSR-CO610-1400.png',
    specs: {
      dof: '6 Eksen',
      repeatability: '±0.04mm',
      maxSpeed: '2.2 m/s',
      weight: '41 kg',
    },
    features: ['IP54 Koruma', 'Yüksek Hız', '±0.04mm Hassasiyet'],
    applications: ['Montaj', 'Paketleme', 'Malzeme Taşıma'],
    category: 'CO Serisi',
  },
  {
    model: 'HSR-CO616-1100',
    payload: '16kg',
    reach: '1055mm',
    image: '/img/Collaborative/CO/HSR-CO616-1100.png',
    specs: {
      dof: '6 Eksen',
      repeatability: '±0.04mm',
      maxSpeed: '2.0 m/s',
      weight: '38.5 kg',
    },
    features: ['IP54 Koruma', 'Yüksek Hız', '±0.04mm Hassasiyet'],
    applications: ['Ağır Montaj', 'Paletleme', 'CNC Besleme'],
    category: 'CO Serisi',
  },
];

// Tüm collaborative robotları birleştir
export const allCollaborativeRobots: CollaborativeRobot[] = [
  ...crProducts,
  ...coProducts,
];
