'use client';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  ChevronRight,
  Info,
  MessageCircle,
  Package,
  Settings,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

// Product data
const productData = {
  model: 'HSR-JR612-1600/DM',
  category: 'JR Serisi (Endüstriyel Altı Eksenli)',
  keywords: 'Endüstriyel Robotlar, Dual Mode',
  axes: 6,
  payload: '12 kg',
  reach: '1555mm',
  description: `3C cilalama endüstrisindeki genel amaçlı robotun, cilalama sürecindeki tekrarlanan darbe yüklerine uyum sağlamakta zorlanması, çalışma ortamındaki tozun fazla olması (kuru vurma) ve nemin yüksek olması (su vurma) gibi sorunları çözmek ve müşterilere sürekli ve kararlı üretim kapasitesi yaratmak için Huashu HSR-JR612-1600/DM ortaya çıktı. Bu model özellikle cilalama süreci için optimize edilmiş ve mükemmel bir 3C cilalama çözümü sunuyor. Özellikler: Güçlü ontoloji performansı: 1. Yüksek koruma: Cilalama sırasında toz ve sıvı sıçraması sorunu için robotun ön kol ve bileğinin koruma seviyesi IP67'ye ulaşarak, nüfuz eden nesnelerin robot gövdesine zarar vermesini önler. 2. Geliştirilmiş yük tasarımı: Cilalama sürecinde cilalama kuvvetinin robota tekrarlanan darbesi ile başa çıkmak için, robotun büyük ölçüde etkilenen anahtar parçaları geliştirilerek hizmet ömrü garanti altına alınır. 3. Yüksek rijitlik: Küçük kolun geliştirilmiş tasarımı, cilalama darbesine karşı yeterli rijitlik sağlayarak, cilalama sürecinde izin doğruluğunu ve cilalama hassasiyetinin korunmasını sağlar ve uzun süre sürekli yüksek kaliteli cilalama sağlar. 4. Yüksek hassasiyet: Mutlak konumlandırma doğruluğu ±0.4mm'ye ve tekrar konumlandırma doğruluğu ±0.06mm'ye ulaşarak, çevrimdışı programlama ile gerçek cilalama izi arasındaki hatayı azaltır, üretim hata ayıklama döngüsünü kısaltır ve hata ayıklama zorluğunu azaltır. 5. Tam alan kullanımı: 3C cilalama iş parçalarının boyut ve süreç gereksinimlerine göre robot kol açılımı optimize edilerek, robot çoğu iş parçası cilalama gereksinimleri altında kapladığı alanı azaltabilir, alan kullanım oranını artırabilir ve düzen yoğunluğunu iyileştirebilir. Cilalama için çevrimdışı programlama yazılımı: Chongqing Huashu Robot tarafından geliştirilen cilalama çevrimdışı programlama yazılımı "hızlı programlama ve doğru gerçekleştirme" özelliklerine sahiptir, profesyonel uygulama teknolojisini entegre eder, hızlı kullanımı kolaydır ve eşleşen hassasiyet kompanzasyon sistemi ile çalışan izi doğru bir şekilde gerçekleştirir. İz programlama zorluğunu azaltır ve üretim hata ayıklama döngüsünü kısaltır. İşletim sisteminden dostça ve kullanımı kolay: Huazhong CNC'nin kendi geliştirdiği kontrol sistemi endüstride güçlü kullanım kolaylığına sahiptir, yüksek hızlı EtherCAT veri yolu ile veri iletişimi yaparak çok eksenli bağlantı yay interpolasyon hareketini tamamlar. İşlem dostça ve anlaşılması kolaydır.`,
  image: '/img/industrial/JR/HSR-JR612-1600-DM.png',
  specifications: {
    model: 'HSR-JR612-1600/DM',
    dof: '6',
    payload: '12kg',
    reach: '1555mm',
    repeatability: '±0.06mm',
  },
  movementRange: {
    J1: '±168°',
    J2: '-170°/+75°',
    J3: '+40°/+265°',
    J4: '±180°',
    J5: '±118°',
    J6: '±360°',
  },
  maxSpeed: {
    J1: '197°/s, 3.44rad/s',
    J2: '197°/s, 3.44rad/s',
    J3: '197°/s, 3.44rad/s',
    J4: '600°/s, 10.47rad/s',
    J5: '375°/s, 6.54rad/s',
    J6: '375°/s, 6.54rad/s',
  },
  allowedInertia: {
    J4: '1.2kg·m²',
    J5: '1.2kg·m²',
    J6: '0.17kg·m²',
  },
  allowedTorque: {
    J4: '35Nm',
    J5: '35Nm',
    J6: '15Nm',
  },
  environment: {
    temperature: '0-45°C',
    humidity: '20%-80%',
    other:
      'Yanıcı, patlayıcı veya aşındırıcı gaz ve sıvılarla temas etmekten kaçının ve elektronik gürültü kaynaklarından (plazma) uzak durun.',
  },
  // Additional specifications for HSR-JR612-1600/DM
  additionalSpecs: {
    teachPendantCable: '8 metre',
    mainUnitCabinetCable: '6 metre',
    ioParameters: 'Dijital: 32-bit giriş (NPN), 31-bit çıkış (NPN)',
    reservedSignalLines: '12 bit (havacılık fişi bağlantısı: kaynak)',
    reservedAirway: 'Yok',
    powerCapacity: '4.5kVA',
    ratedPower: '3.5kW',
    ratedVoltage: '3 faz AC380V 50HZ',
    ratedCurrent: '6.7A',
    protectionLevel: 'IP54 (ön kol IP67)',
    installationMethod: 'Zemin Kurulumu',
    weight: '215kg',
    cabinetWeight: '56kg',
    cabinetProtectionLevel: 'IP54',
  },
};

const currentLang = 'tr';

// Translations
const translations = {
  tr: {
    product: {
      category: 'Kategori',
      keywords: 'Anahtar Kelimeler',
      axes: 'Eksen Sayısı',
      payload: 'Yük',
      reach: 'Kol Açıklığı',
      contactForConsultation: 'Mesaj bırakın',
      specifications: 'Teknik Özellikler',
      movementRange: 'Hareket Aralığı',
      maxSpeed: 'En Yüksek Hız',
      allowedInertia: 'İzin Verilen Eylemsizlik Momenti',
      allowedTorque: 'İzin Verilen Yük Torku',
      environment: 'Uygulanabilir Çevre',
      temperature: 'Sıcaklık',
      humidity: 'Nem',
      other: 'Diğer',
      powerCapacity: 'Güç Kapasitesi',
      ratedPower: 'Nominal Güç',
      ratedVoltage: 'Nominal Gerilim',
      ratedCurrent: 'Nominal Akım',
      protectionLevel: 'Koruma Seviyesi',
      installationMethod: 'Kurulum Yöntemi',
      weight: 'Ana Ünite Ağırlığı',
      cabinetWeight: 'Kabin Ağırlığı',
      cabinetProtectionLevel: 'Kabin Koruma Seviyesi',
      requestQuote: 'Fiyat Teklifi İste',
      contactUs: 'İletişime Geç',
    },
  },
  en: {
    product: {
      category: 'Category',
      keywords: 'Keywords',
      axes: 'Number of Axes',
      payload: 'Payload',
      reach: 'Reach',
      contactForConsultation: 'Leave a Message',
      specifications: 'Technical Specifications',
      movementRange: 'Movement Range',
      maxSpeed: 'Maximum Speed',
      allowedInertia: 'Allowed Inertia Moment',
      allowedTorque: 'Allowed Load Torque',
      environment: 'Applicable Environment',
      temperature: 'Temperature',
      humidity: 'Humidity',
      other: 'Other',
      powerCapacity: 'Power Capacity',
      ratedPower: 'Rated Power',
      ratedVoltage: 'Rated Voltage',
      ratedCurrent: 'Rated Current',
      protectionLevel: 'Protection Level',
      installationMethod: 'Installation Method',
      weight: 'Main Unit Weight',
      cabinetWeight: 'Cabinet Weight',
      cabinetProtectionLevel: 'Cabinet Protection Level',
      requestQuote: 'Request Quote',
      contactUs: 'Contact Us',
    },
  },
};

export default function HSRJR6121600DMPage() {
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
                  {productData.model}
                </h1>
                <div className='inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-4'>
                  Dual Mode Özellikli
                </div>
              </div>

              {/* Quick Specs */}
              <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                <Card className='p-4 text-center border-2 border-blue-100 bg-blue-50'>
                  <div className='text-sm text-gray-600 mb-1'>
                    {t.product.axes}
                  </div>
                  <div className='text-2xl font-bold text-blue-600'>
                    {productData.axes}
                  </div>
                </Card>
                <Card className='p-4 text-center border-2 border-gray-100'>
                  <div className='text-sm text-gray-600 mb-1'>
                    {t.product.payload}
                  </div>
                  <div className='text-2xl font-bold text-gray-800'>
                    {productData.payload}
                  </div>
                </Card>
                <Card className='p-4 text-center border-2 border-gray-100'>
                  <div className='text-sm text-gray-600 mb-1'>
                    {t.product.reach}
                  </div>
                  <div className='text-2xl font-bold text-gray-800'>
                    {productData.reach}
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
                    <Settings className='w-5 h-5 text-green-600' />
                  </div>
                  <span className='text-sm font-medium text-gray-700'>
                    ±0.06mm Hassasiyet
                  </span>
                </div>
                <div className='flex items-center space-x-3'>
                  <div className='w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center'>
                    <Zap className='w-5 h-5 text-blue-600' />
                  </div>
                  <span className='text-sm font-medium text-gray-700'>
                    600°/s Maksimum Hız
                  </span>
                </div>
                <div className='flex items-center space-x-3'>
                  <div className='w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center'>
                    <Package className='w-5 h-5 text-purple-600' />
                  </div>
                  <span className='text-sm font-medium text-gray-700'>
                    12kg Yük Kapasitesi
                  </span>
                </div>
                <div className='flex items-center space-x-3'>
                  <div className='w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center'>
                    <Settings className='w-5 h-5 text-orange-600' />
                  </div>
                  <span className='text-sm font-medium text-gray-700'>
                    1555mm Kol Açıklığı
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
            Teknik Özellikler
          </h2>
          <div className='grid lg:grid-cols-2 gap-8'>
            {/* Basic Specifications */}
            <Card className='p-6'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4 flex items-center'>
                <Info className='w-5 h-5 mr-2 text-blue-600' />
                Temel Özellikler
              </h3>
              <div className='space-y-3'>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>Model </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.specifications.model}
                  </span>
                </div>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    Özgürlük Dereceleri
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.specifications.dof}
                  </span>
                </div>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    Nominal Yük{' '}
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.specifications.payload}
                  </span>
                </div>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    Maksimum Çalışma Yarıçapı
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.specifications.reach}
                  </span>
                </div>
                <div className='flex justify-between py-2 border-b border-gray-100'>
                  <span className='text-gray-600 font-medium'>
                    Tekrar Konumlandırma Doğruluğu
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {productData.specifications.repeatability}
                  </span>
                </div>
              </div>
            </Card>

            {/* Movement Range */}
            <Card className='p-6'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4 flex items-center'>
                <Settings className='w-5 h-5 mr-2 text-blue-600' />
                Hareket Aralığı
              </h3>
              <div className='space-y-3'>
                {Object.entries(productData.movementRange).map(
                  ([key, value]) => (
                    <div
                      key={key}
                      className='flex justify-between py-2 border-b border-gray-100'
                    >
                      <span className='text-gray-600 font-medium'>{key} </span>
                      <span className='font-semibold text-gray-800'>
                        {value}
                      </span>
                    </div>
                  )
                )}
              </div>
            </Card>

            {/* Maximum Speed */}
            <Card className='p-6'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4 flex items-center'>
                <Zap className='w-5 h-5 mr-2 text-blue-600' />
                En Yüksek Hız
              </h3>
              <div className='space-y-3'>
                {Object.entries(productData.maxSpeed).map(([key, value]) => (
                  <div
                    key={key}
                    className='flex justify-between py-2 border-b border-gray-100'
                  >
                    <span className='text-gray-600 font-medium'>{key} </span>
                    <span className='font-semibold text-gray-800'>
                      {value}{' '}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Allowed Inertia Moment */}
            <Card className='p-6'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4 flex items-center'>
                <Package className='w-5 h-5 mr-2 text-blue-600' />
                İzin Verilen Eylemsizlik Momenti
              </h3>
              <div className='space-y-3'>
                {Object.entries(productData.allowedInertia).map(
                  ([key, value]) => (
                    <div
                      key={key}
                      className='flex justify-between py-2 border-b border-gray-100'
                    >
                      <span className='text-gray-600 font-medium'>{key} </span>
                      <span className='font-semibold text-gray-800'>
                        {value}
                      </span>
                    </div>
                  )
                )}
              </div>
            </Card>
          </div>

          <div className='grid md:grid-cols-2 gap-8 mt-8'>
            {/* Allowed Load Torque */}
            <Card className='p-6'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4 flex items-center'>
                <Settings className='w-5 h-5 mr-2 text-blue-600' />
                İzin Verilen Yük Torku
              </h3>
              <div className='space-y-3'>
                {Object.entries(productData.allowedTorque).map(
                  ([key, value]) => (
                    <div
                      key={key}
                      className='flex justify-between py-2 border-b border-gray-100'
                    >
                      <span className='text-gray-600 font-medium'>{key} </span>
                      <span className='font-semibold text-gray-800'>
                        {value}
                      </span>
                    </div>
                  )
                )}
              </div>
            </Card>

            {/* Environment */}
            <Card className='p-6'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4 flex items-center'>
                <Settings className='w-5 h-5 mr-2 text-blue-600' />
                Uygulanabilir Çevre
              </h3>
              <div className='space-y-4'>
                <div className='flex items-center justify-between py-3 px-4 bg-red-50 rounded-lg'>
                  <div className='flex items-center space-x-3'>
                    <span className='text-gray-700 font-medium'>
                      {t.product.temperature}
                    </span>
                  </div>
                  <span className='font-semibold text-gray-800'>
                    {productData.environment.temperature}
                  </span>
                </div>
                <div className='flex items-center justify-between py-3 px-4 bg-blue-50 rounded-lg'>
                  <div className='flex items-center space-x-3'>
                    <span className='text-gray-700 font-medium'>
                      {t.product.humidity}
                    </span>
                  </div>
                  <span className='font-semibold text-gray-800'>
                    {productData.environment.humidity}
                  </span>
                </div>
                <div className='py-3 px-4 bg-yellow-50 rounded-lg'>
                  <div className='text-gray-700 font-medium mb-2'>
                    {t.product.other}
                  </div>
                  <div className='text-gray-800 text-sm leading-relaxed'>
                    {productData.environment.other}
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className='mt-8'>
            <h2 className='text-2xl font-bold text-gray-800 mb-6 text-center'>
              Ek Teknik Özellikler
            </h2>
            <div className='grid md:grid-cols-2 gap-8'>
              {/* Cable and Connection Specifications */}
              <Card className='p-6'>
                <h3 className='text-xl font-semibold text-gray-800 mb-4 flex items-center'>
                  <Settings className='w-5 h-5 mr-2 text-blue-600' />
                  Kablo ve Bağlantı Özellikleri
                </h3>
                <div className='space-y-3'>
                  <div className='flex justify-between py-2 border-b border-gray-100'>
                    <span className='text-gray-600 font-medium'>
                      Öğretim Paneli Kablosu
                    </span>
                    <span className='font-semibold text-gray-800'>
                      {productData.additionalSpecs.teachPendantCable}
                    </span>
                  </div>
                  <div className='flex justify-between py-2 border-b border-gray-100'>
                    <span className='text-gray-600 font-medium'>
                      Ana Ünite-Kabin Bağlantı Kablosu
                    </span>
                    <span className='font-semibold text-gray-800'>
                      {productData.additionalSpecs.mainUnitCabinetCable}
                    </span>
                  </div>
                  <div className='flex justify-between py-2 border-b border-gray-100'>
                    <span className='text-gray-600 font-medium'>
                      G/Ç Parametreleri
                    </span>
                    <span className='font-semibold text-gray-800'>
                      {productData.additionalSpecs.ioParameters}
                    </span>
                  </div>
                  <div className='flex justify-between py-2 border-b border-gray-100'>
                    <span className='text-gray-600 font-medium'>
                      Rezerve Sinyal Hatları
                    </span>
                    <span className='font-semibold text-gray-800'>
                      {productData.additionalSpecs.reservedSignalLines}
                    </span>
                  </div>
                  <div className='flex justify-between py-2 border-b border-gray-100'>
                    <span className='text-gray-600 font-medium'>
                      Rezerve Hava Yolu
                    </span>
                    <span className='font-semibold text-gray-800'>
                      {productData.additionalSpecs.reservedAirway}
                    </span>
                  </div>
                </div>
              </Card>

              {/* Power and Installation Specifications */}
              <Card className='p-6'>
                <h3 className='text-xl font-semibold text-gray-800 mb-4 flex items-center'>
                  <Zap className='w-5 h-5 mr-2 text-blue-600' />
                  Güç ve Kurulum Özellikleri
                </h3>
                <div className='space-y-3'>
                  <div className='flex justify-between py-2 border-b border-gray-100'>
                    <span className='text-gray-600 font-medium'>
                      {t.product.powerCapacity}
                    </span>
                    <span className='font-semibold text-gray-800'>
                      {productData.additionalSpecs.powerCapacity}
                    </span>
                  </div>
                  <div className='flex justify-between py-2 border-b border-gray-100'>
                    <span className='text-gray-600 font-medium'>
                      {t.product.ratedPower}
                    </span>
                    <span className='font-semibold text-gray-800'>
                      {productData.additionalSpecs.ratedPower}
                    </span>
                  </div>
                  <div className='flex justify-between py-2 border-b border-gray-100'>
                    <span className='text-gray-600 font-medium'>
                      {t.product.ratedVoltage}
                    </span>
                    <span className='font-semibold text-gray-800'>
                      {productData.additionalSpecs.ratedVoltage}
                    </span>
                  </div>
                  <div className='flex justify-between py-2 border-b border-gray-100'>
                    <span className='text-gray-600 font-medium'>
                      {t.product.ratedCurrent}
                    </span>
                    <span className='font-semibold text-gray-800'>
                      {productData.additionalSpecs.ratedCurrent}
                    </span>
                  </div>
                  <div className='flex justify-between py-2 border-b border-gray-100'>
                    <span className='text-gray-600 font-medium'>
                      {t.product.protectionLevel}
                    </span>
                    <span className='font-semibold text-gray-800'>
                      {productData.additionalSpecs.protectionLevel}
                    </span>
                  </div>
                  <div className='flex justify-between py-2 border-b border-gray-100'>
                    <span className='text-gray-600 font-medium'>
                      {t.product.installationMethod}
                    </span>
                    <span className='font-semibold text-gray-800'>
                      {productData.additionalSpecs.installationMethod}
                    </span>
                  </div>
                  <div className='flex justify-between py-2 border-b border-gray-100'>
                    <span className='text-gray-600 font-medium'>
                      {t.product.weight}
                    </span>
                    <span className='font-semibold text-gray-800'>
                      {productData.additionalSpecs.weight}
                    </span>
                  </div>
                  <div className='flex justify-between py-2 border-b border-gray-100'>
                    <span className='text-gray-600 font-medium'>
                      {t.product.cabinetWeight}
                    </span>
                    <span className='font-semibold text-gray-800'>
                      {productData.additionalSpecs.cabinetWeight}
                    </span>
                  </div>
                  <div className='flex justify-between py-2 border-b border-gray-100'>
                    <span className='text-gray-600 font-medium'>
                      {t.product.cabinetProtectionLevel}
                    </span>
                    <span className='font-semibold text-gray-800'>
                      {productData.additionalSpecs.cabinetProtectionLevel}
                    </span>
                  </div>
                </div>
              </Card>
            </div>
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
            hazır
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              onClick={() => setIsContactFormOpen(true)}
              className='bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105'
            >
              <MessageCircle className='w-5 h-5 mr-2' />
              İletişime Geç
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {isContactFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">İletişim Formu</h3>
                <p className="text-sm text-gray-500">Bu ürün hakkında bilgi almak için formu doldurun.</p>
              </div>
              <button
                onClick={() => setIsContactFormOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form className="p-6 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Ad Soyad *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-posta *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Şirket
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mesaj *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
              >
                Gönder
              </button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
