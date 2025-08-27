'use client';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  ChevronRight,
  Cpu,
  MessageCircle,
  Package,
  Power,
  Settings,
  Shield,
  Thermometer,
  Wifi,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

// Product data
const productData = {
  model: 'HRC-I Serisi',
  category: 'Hareket Denetleyicisi (Çekirdek Bileşenler)',
  keywords: 'Hareket Denetleyicisi, Kontrol-Sürücü Entegre Sistemi',
  title: 'Kontrol-Sürücü Entegre Sistemi',
  description: `HRC-I serisi kontrol-sürücü entegre sistemi, endüstri lideri çok çekirdekli heterojen SoC çipleri benimser ve şimdiye kadar en gelişmiş robot hareket kontrol teknolojisi ve servo sürücü teknolojisini entegre ederek, yeni nesil hafif, yüksek performanslı robot kontrol sistemi yaratır. Mükemmel motor sürücü, giriş/çıkış, alan veri yolu ve diğer kontrol arayüzleri ile platform sistemi desteği, SCARA robotların, küçük yük 6 eksenli robotların, küçük CNC makinelerinin ve otomasyon iş istasyonlarının güvenilir kontrolünü maksimize eder.`,
  image: '/img/MotionController/hrc-i.png',
  specifications: {
    structural: {
      dimensions: '405.5*213.8*159.5mm',
      weight: '12kg',
      protectionLevel: 'IP20',
    },
    environment: {
      storageTemperature: '-40~60 ℃',
      workingTemperature: '-20~50 ℃, 50 ℃ üzeri güç azaltma ile çalışma',
      humidity: '90% RH altında, damla yoğuşması olmamalı',
      airPressure: '80KPa~110KPa',
      elevation:
        '1000 metre altında, 1000 metre üzerinde güç azaltma ile çalışma',
      other:
        'İç mekan kullanımı, doğrudan güneş ışığı olmamalı, belirgin toz olmamalı, aşındırıcı, yanıcı gaz olmamalı, yağ sisi, su buharı ortamı olmamalı',
    },
    power: {
      inputVoltage: 'Single phase, 220VAC ± 15%, 50Hz ± 20%',
      maxCurrent: '30Arms',
      fuseRatedCurrent: '30A',
      overpressureThreshold: '400VDC',
      brakeInternalResistance: '66Ω',
    },
    interfaces: {
      powerInterface:
        'PE, L, N terminalleri ile, tek fazlı 220VAC giriş desteği',
      powerLine4Axis: '4 eksen, 4 yollu şaft gücü ve fren dahil',
      powerLine6Axis: '6 eksen, 6 yollu şaft gücü ve fren dahil',
      encoder4Axis: '4 yollu kodlayıcı ile 4 eksen',
      encoder6Axis: '6 yollu kodlayıcı ile 6 eksen',
      teachingPendant: 'Ethernet, acil durdurma, 24V güç bağlantısı ile',
      ethernet1: '1 yollu, MLan, ana konektör, 1000/100/10Mbps',
      ethernet2: '2 yollu, Lan1, Lan2, Genişletme Konektörü, 100/10Mbps',
      extendedEncoding: '6 Yollu',
      analogIO: 'Analog G/Ç giriş: 2, analog G/Ç çıkış: 2',
      highSpeedIO: 'Yüksek hızlı G/Ç giriş: 2, yüksek hızlı G/Ç çıkış: 2',
      digitalIO: 'Dijital G/Ç giriş: 32, dijital G/Ç çıkış: 32',
    },
    drive: {
      numberOfDrives: 'Model referansına göre belirlenir',
      ratedCurrent: 'Model referansına göre belirlenir',
      overloadCurrent: 'Motor nominal akımının 3 katı',
      brakeOutputVoltage: '24VDC±5%',
      brakeMaxCurrent: '1A/Eksen',
    },
    encoder: {
      supportedTypes:
        'Domogawa, 17-bit tek tur, 2.5Mbps; Panasonic, tek tur 23 bit, 2.5Mbps',
      supplyVoltage: '5VDC',
      supplyCurrent: '≥ 200mA/eksen',
      extendedTypes:
        'Domogawa, 17-bit tek tur, 2.5Mbps; Panasonic, tek tur 23 bit, 2.5Mbps; AB faz, artırımlı kodlayıcı',
    },
    powerOutput: {
      mainSupply: '5VDC±5%, 2A',
      ioAuxiliary: '24VDC, 4A',
      overloadProtection: '4A±5%',
      ioInputVoltage: '24VDC±10%',
      ioInputCurrent: 'Yük durumuna göre belirlenir, ≥ 1A',
    },
    ioFeatures: {
      inputMode: 'Optokuplör izolasyonlu giriş, DIn girişi ve XCOM ortak',
      inputVoltage: '24VDC±10%',
      inputCurrent: '≥ 10mA/kanal',
      inputTime: '≤ 5KHz',
      outputMode: 'N MOSFET Açık Dren Çıkışı, Kaynak Toprağa ortak',
      outputVoltage: '24VDC',
      outputCurrent: '≤ 300mA/kanal',
      outputTime: '≤ 5KHz',
    },
    security: {
      wto: 'Desteklenir',
      ss1: 'Desteklenir',
    },
  },
};

const currentLang = 'tr';

// Translations
const translations = {
  tr: {
    product: {
      category: 'Kategori',
      keywords: 'Anahtar Kelimeler',
      contactForConsultation: 'Mesaj bırakın',
      specifications: 'Teknik Özellikler',
      structural: 'Yapısal Parametreler',
      environment: 'Çalışma Ortamı',
      power: 'Güç Özellikleri',
      interfaces: 'Bağlantı Arayüzleri',
      drive: 'Sürücü Özellikleri',
      encoder: 'Enkoder Özellikleri',
      powerOutput: 'Güç Çıkışları',
      ioFeatures: 'G/Ç Özellikleri',
      security: 'Güvenlik Fonksiyonları',
      dimensions: 'Boyutlar',
      weight: 'Ağırlık',
      protectionLevel: 'Koruma Seviyesi',
      storageTemperature: 'Depolama Sıcaklığı',
      workingTemperature: 'Çalışma Sıcaklığı',
      humidity: 'Nem',
      airPressure: 'Hava Basıncı',
      elevation: 'Yükseklik',
      other: 'Diğer Gereksinimler',
      inputVoltage: 'Giriş Gerilimi',
      maxCurrent: 'Maksimum Akım',
      fuseRatedCurrent: 'Sigorta Nominal Akımı',
      overpressureThreshold: 'Aşırı Basınç Eşiği',
      brakeInternalResistance: 'Fren İç Direnci',
      powerInterface: 'Güç Arayüzü',
      powerLine4Axis: '4-Eksen Güç Hattı',
      powerLine6Axis: '6-Eksen Güç Hattı',
      encoder4Axis: '4-Eksen Enkoder',
      encoder6Axis: '6-Eksen Enkoder',
      teachingPendant: 'Öğretim Paneli',
      ethernet1: 'Ethernet 1',
      ethernet2: 'Ethernet 2',
      extendedEncoding: 'Genişletilmiş Kodlama',
      analogIO: 'Analog G/Ç',
      highSpeedIO: 'Yüksek Hızlı G/Ç',
      digitalIO: 'Dijital G/Ç',
      numberOfDrives: 'Sürücü Sayısı',
      ratedCurrent: 'Nominal Akım',
      overloadCurrent: 'Aşırı Yük Akımı',
      brakeOutputVoltage: 'Fren Çıkış Gerilimi',
      brakeMaxCurrent: 'Fren Maksimum Akımı',
      supportedTypes: 'Desteklenen Türler',
      supplyVoltage: 'Besleme Gerilimi',
      supplyCurrent: 'Besleme Akımı',
      extendedTypes: 'Genişletilmiş Türler',
      mainSupply: 'Ana Besleme',
      ioAuxiliary: 'G/Ç Yardımcı',
      overloadProtection: 'Aşırı Yük Koruması',
      ioInputVoltage: 'G/Ç Giriş Gerilimi',
      ioInputCurrent: 'G/Ç Giriş Akımı',
      inputMode: 'Giriş Modu',
      inputCurrent: 'Giriş Akımı',
      inputTime: 'Giriş Zamanı',
      outputMode: 'Çıkış Modu',
      outputVoltage: 'Çıkış Gerilimi',
      outputCurrent: 'Çıkış Akımı',
      outputTime: 'Çıkış Zamanı',
      wto: 'WTO',
      ss1: 'SS1',
      requestQuote: 'Fiyat Teklifi İste',
    },
  },
  en: {
    product: {
      category: 'Category',
      keywords: 'Keywords',
      contactForConsultation: 'Leave a Message',
      specifications: 'Technical Specifications',
      structural: 'Structural Parameters',
      environment: 'Working Environment',
      power: 'Power Features',
      interfaces: 'Connection Interfaces',
      drive: 'Drive Features',
      encoder: 'Encoder Features',
      powerOutput: 'Power Outputs',
      ioFeatures: 'I/O Features',
      security: 'Security Functions',
      dimensions: 'Dimensions',
      weight: 'Weight',
      protectionLevel: 'Protection Level',
      storageTemperature: 'Storage Temperature',
      workingTemperature: 'Working Temperature',
      humidity: 'Humidity',
      airPressure: 'Air Pressure',
      elevation: 'Elevation',
      other: 'Other Requirements',
      inputVoltage: 'Input Voltage',
      maxCurrent: 'Maximum Current',
      fuseRatedCurrent: 'Fuse Rated Current',
      overpressureThreshold: 'Overpressure Threshold',
      brakeInternalResistance: 'Brake Internal Resistance',
      powerInterface: 'Power Interface',
      powerLine4Axis: '4-Axis Power Line',
      powerLine6Axis: '6-Axis Power Line',
      encoder4Axis: '4-Axis Encoder',
      encoder6Axis: '6-Axis Encoder',
      teachingPendant: 'Teaching Pendant',
      ethernet1: 'Ethernet 1',
      ethernet2: 'Ethernet 2',
      extendedEncoding: 'Extended Encoding',
      analogIO: 'Analog I/O',
      highSpeedIO: 'High-Speed I/O',
      digitalIO: 'Digital I/O',
      numberOfDrives: 'Number of Drives',
      ratedCurrent: 'Rated Current',
      overloadCurrent: 'Overload Current',
      brakeOutputVoltage: 'Brake Output Voltage',
      brakeMaxCurrent: 'Brake Maximum Current',
      supportedTypes: 'Supported Types',
      supplyVoltage: 'Supply Voltage',
      supplyCurrent: 'Supply Current',
      extendedTypes: 'Extended Types',
      mainSupply: 'Main Supply',
      ioAuxiliary: 'I/O Auxiliary',
      overloadProtection: 'Overload Protection',
      ioInputVoltage: 'I/O Input Voltage',
      ioInputCurrent: 'I/O Input Current',
      inputMode: 'Input Mode',
      inputCurrent: 'Input Current',
      inputTime: 'Input Time',
      outputMode: 'Output Mode',
      outputVoltage: 'Output Voltage',
      outputCurrent: 'Output Current',
      outputTime: 'Output Time',
      wto: 'WTO',
      ss1: 'SS1',
      requestQuote: 'Request Quote',
    },
  },
};

export default function HRCISeriesPage() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const t = translations[currentLang as keyof typeof translations];

  return (
    <div className='min-h-screen bg-white'>
      <Header />

      {/* Breadcrumb */}
      <section className='py-5 bg-gray-50 border-b border-gray-200'>
        <div className='container mx-auto px-4 max-w-7xl'>
          <nav className='flex items-center space-x-2 text-sm text-gray-600'>
            <span className='text-gray-800 font-medium'>
              {productData.category}
            </span>
            <ChevronRight className='w-4 h-4' />
            <span className='text-gray-800 font-medium'>
              {productData.model}
            </span>
          </nav>
        </div>
      </section>

      {/* Product Header */}
      <section className='py-12 bg-white'>
        <div className='container mx-auto px-4 max-w-7xl'>
          <div className='grid lg:grid-cols-2 gap-12 items-start'>
            {/* Product Image */}
            <div className='relative'>
              <div className='bg-gray-50 rounded-2xl p-8 flex items-center justify-center min-h-[400px]'>
                <Image
                  src={productData.image || '/placeholder.svg'}
                  alt={productData.model}
                  width={500}
                  height={400}
                  className='max-w-full max-h-full object-contain'
                />
              </div>
            </div>

            {/* Product Info */}
            <div className='space-y-6'>
              <div>
                <h1 className='text-4xl font-bold text-gray-800 mb-4'>
                  {productData.title}
                </h1>
              </div>

              {/* Quick Specs */}
              <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                <Card className='p-4 text-center border-2 border-blue-100 bg-blue-50'>
                  <div className='text-sm text-gray-600 mb-1'>
                    {t.product.dimensions}
                  </div>
                  <div className='text-sm font-bold text-blue-600 leading-tight'>
                    {productData.specifications.structural.dimensions}
                  </div>
                </Card>
                <Card className='p-4 text-center border-2 border-gray-100'>
                  <div className='text-sm text-gray-600 mb-1'>
                    {t.product.weight}
                  </div>
                  <div className='text-2xl font-bold text-gray-800'>
                    {productData.specifications.structural.weight}
                  </div>
                </Card>
                <Card className='p-4 text-center border-2 border-gray-100'>
                  <div className='text-sm text-gray-600 mb-1'>
                    {t.product.protectionLevel}
                  </div>
                  <div className='text-2xl font-bold text-gray-800'>
                    {productData.specifications.structural.protectionLevel}
                  </div>
                </Card>
              </div>

              {/* Action Button */}
              <div className='flex flex-col sm:flex-row gap-4'>
                <Button
                  onClick={() => setIsContactFormOpen(true)}
                  className='w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300'
                >
                  <MessageCircle className='w-5 h-5 mr-2' />
                  {t.product.contactForConsultation}
                </Button>
              </div>

              {/* Key Features */}
              <div className='grid grid-cols-2 gap-4'>
                <div className='flex items-center space-x-3'>
                  <div className='w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center'>
                    <Cpu className='w-5 h-5 text-green-600' />
                  </div>
                  <span className='text-sm font-medium text-gray-700'>
                    Multi-Core SoC
                  </span>
                </div>
                <div className='flex items-center space-x-3'>
                  <div className='w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center'>
                    <Zap className='w-5 h-5 text-blue-600' />
                  </div>
                  <span className='text-sm font-medium text-gray-700'>
                    Robot Kontrolü
                  </span>
                </div>
                <div className='flex items-center space-x-3'>
                  <div className='w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center'>
                    <Settings className='w-5 h-5 text-purple-600' />
                  </div>
                  <span className='text-sm font-medium text-gray-700'>
                    Servo Sürücü
                  </span>
                </div>
                <div className='flex items-center space-x-3'>
                  <div className='w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center'>
                    <Package className='w-5 h-5 text-orange-600' />
                  </div>
                  <span className='text-sm font-medium text-gray-700'>
                    SCARA Desteği
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Description */}
      <section className='py-12 bg-gray-50'>
        <div className='container mx-auto px-4 max-w-7xl'>
          <div className='rounded-lg border bg-card text-card-foreground shadow-sm p-8'>
            <h2 className='text-2xl font-bold text-gray-800 mb-6'>
              Ürün Açıklaması
            </h2>
            <p className='text-gray-700 leading-relaxed text-lg'>
              {productData.description}
            </p>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className='py-12 bg-white'>
        <div className='container mx-auto px-4 max-w-7xl'>
          <h2 className='text-3xl font-bold text-gray-800 mb-8 text-center'>
            {t.product.specifications}
          </h2>

          {/* Structural Parameters */}
          <div className='grid lg:grid-cols-2 gap-8 mb-8'>
            <Card className='p-6'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4 flex items-center'>
                <Package className='w-5 h-5 mr-2 text-blue-600' />
                {t.product.structural}
              </h3>
              <div className='space-y-3'>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    {t.product.dimensions}
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.specifications.structural.dimensions}
                  </span>
                </div>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    {t.product.weight}
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.specifications.structural.weight}
                  </span>
                </div>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    {t.product.protectionLevel}
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.specifications.structural.protectionLevel}
                  </span>
                </div>
              </div>
            </Card>

            {/* Environment */}
            <Card className='p-6'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4 flex items-center'>
                <Thermometer className='w-5 h-5 mr-2 text-blue-600' />
                {t.product.environment}
              </h3>
              <div className='space-y-3'>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    {t.product.storageTemperature}
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.specifications.environment.storageTemperature}
                  </span>
                </div>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    {t.product.workingTemperature}
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.specifications.environment.workingTemperature}
                  </span>
                </div>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    {t.product.humidity}
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.specifications.environment.humidity}
                  </span>
                </div>
              </div>
            </Card>
          </div>

          {/* Power and Drive */}
          <div className='grid lg:grid-cols-2 gap-8 mb-8'>
            <Card className='p-6'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4 flex items-center'>
                <Power className='w-5 h-5 mr-2 text-blue-600' />
                {t.product.power}
              </h3>
              <div className='space-y-3'>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    {t.product.inputVoltage}
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.specifications.power.inputVoltage}
                  </span>
                </div>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    {t.product.maxCurrent}
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.specifications.power.maxCurrent}
                  </span>
                </div>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    {t.product.fuseRatedCurrent}
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.specifications.power.fuseRatedCurrent}
                  </span>
                </div>
              </div>
            </Card>

            <Card className='p-6'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4 flex items-center'>
                <Settings className='w-5 h-5 mr-2 text-blue-600' />
                {t.product.drive}
              </h3>
              <div className='space-y-3'>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    {t.product.overloadCurrent}
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.specifications.drive.overloadCurrent}
                  </span>
                </div>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    {t.product.brakeOutputVoltage}
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.specifications.drive.brakeOutputVoltage}
                  </span>
                </div>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    {t.product.brakeMaxCurrent}
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.specifications.drive.brakeMaxCurrent}
                  </span>
                </div>
              </div>
            </Card>
          </div>

          {/* Interfaces and I/O */}
          <div className='grid lg:grid-cols-2 gap-8 mb-8'>
            <Card className='p-6'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4 flex items-center'>
                <Wifi className='w-5 h-5 mr-2 text-blue-600' />
                {t.product.interfaces}
              </h3>
              <div className='space-y-3'>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    {t.product.powerLine4Axis}
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.specifications.interfaces.powerLine4Axis}
                  </span>
                </div>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    {t.product.powerLine6Axis}
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.specifications.interfaces.powerLine6Axis}
                  </span>
                </div>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    {t.product.digitalIO}
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.specifications.interfaces.digitalIO}
                  </span>
                </div>
              </div>
            </Card>

            <Card className='p-6'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4 flex items-center'>
                <Settings className='w-5 h-5 mr-2 text-blue-600' />
                {t.product.ioFeatures}
              </h3>
              <div className='space-y-3'>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    {t.product.inputVoltage}
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.specifications.ioFeatures.inputVoltage}
                  </span>
                </div>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    {t.product.outputVoltage}
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.specifications.ioFeatures.outputVoltage}
                  </span>
                </div>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    {t.product.outputCurrent}
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.specifications.ioFeatures.outputCurrent}
                  </span>
                </div>
              </div>
            </Card>
          </div>

          {/* Security Functions */}
          <div className='grid lg:grid-cols-1 gap-8'>
            <Card className='p-6'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4 flex items-center'>
                <Shield className='w-5 h-5 mr-2 text-blue-600' />
                {t.product.security}
              </h3>
              <div className='grid md:grid-cols-2 gap-6'>
                <div className='space-y-3'>
                  <div className='flex justify-between py-2 border-b border-gray-100'>
                    <span className='text-gray-600 font-medium'>
                      {t.product.wto}
                    </span>
                    <span className='font-semibold text-gray-800'>
                      {productData.specifications.security.wto}
                    </span>
                  </div>
                </div>
                <div className='space-y-3'>
                  <div className='flex justify-between py-2 border-b border-gray-100'>
                    <span className='text-gray-600 font-medium'>
                      {t.product.ss1}
                    </span>
                    <span className='font-semibold text-gray-800'>
                      {productData.specifications.security.ss1}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className='py-16 bg-blue-600 text-white'>
        <div className='container mx-auto px-4 max-w-7xl text-center'>
          <h2 className='text-3xl font-bold mb-4'>
            Bu Ürün Hakkında Daha Fazla Bilgi Almak İster misiniz?
          </h2>
          <p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>
            Uzman ekibimiz size en uygun çözümü bulmak için yardımcı olmaya
            hazır. Hemen iletişime geçin!
          </p>
          <Button
            onClick={() => setIsContactFormOpen(true)}
            className='bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300'
          >
            <MessageCircle className='w-5 h-5 mr-2' />
            {t.product.contactForConsultation}
          </Button>
        </div>
      </section>

      {/* Contact Form Modal */}
      {isContactFormOpen && (
        <div className='fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4'>
          <div className='bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto'>
            <div className='p-6 border-b border-gray-200'>
              <div className='flex items-center justify-between'>
                <h3 className='text-2xl font-bold text-gray-800'>
                  İletişim Formu
                </h3>
                <button
                  onClick={() => setIsContactFormOpen(false)}
                  className='p-2 hover:bg-gray-100 rounded-full transition-colors'
                >
                  <svg
                    className='w-6 h-6 text-gray-600'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
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
              <p className='text-gray-600 mt-2'>
                Bu ürün hakkında bilgi almak için formu doldurun.
              </p>
            </div>

            <div className='p-6'>
              <form className='space-y-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Ad Soyad *
                    </label>
                    <input
                      type='text'
                      required
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
                      required
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
                    required
                    rows={4}
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
                    onClick={() => setIsContactFormOpen(false)}
                    className='px-6 py-3 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg'
                  >
                    İptal
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
