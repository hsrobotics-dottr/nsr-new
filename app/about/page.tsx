"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Building2,
  Target,
  Globe,
  Factory,
  Lightbulb,
  Shield,
  Zap,
  Brain,
  Settings,
  Award,
  ArrowRight,
  CheckCircle,
  Cpu,
  Gauge,
  Lock,
  Wrench,
  Code,
  Cloud,
  MapPin,
  Phone,
  Mail,
} from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

// Company locations data
const locationsData = [
  { city: "Foshan", region: "Güney Çin", icon: MapPin },
  { city: "Chongqing", region: "Güneybatı Çin", icon: MapPin },
  { city: "Ningbo", region: "Doğu Çin", icon: MapPin },
  { city: "Suzhou", region: "Doğu Çin", icon: MapPin },
  { city: "Quanzhou", region: "Güney Çin", icon: MapPin },
]

// PCLC Strategy data
const pclcData = [
  {
    letter: "P",
    title: "Products",
    subtitle: "Genel Çok Eklemli Robotlar",
    description: "Ana yön olarak genel çok eklemli endüstriyel robot ürünlerini geliştiriyoruz.",
    icon: Factory,
    color: "bg-blue-500",
  },
  {
    letter: "C",
    title: "Components",
    subtitle: "Çekirdek Temel Bileşenler",
    description: "Yerli robot çekirdek bileşenlerinin araştırma ve geliştirmesinde atılım yapıyoruz.",
    icon: Cpu,
    color: "bg-blue-600",
  },
  {
    letter: "L",
    title: "Lines",
    subtitle: "Otomasyon Hatları",
    description: "Endüstriyel robot otomasyon hattının uygulanmasını hedefliyoruz.",
    icon: Settings,
    color: "bg-blue-700",
  },
  {
    letter: "C",
    title: "Cloud",
    subtitle: "Akıllı Bulut Platformu",
    description: "Akıllı bulut platformunu endüstrinin kazanması için bir silah olarak kullanıyoruz.",
    icon: Cloud,
    color: "bg-blue-800",
  },
]

// Advantages data
const advantagesData = [
  {
    title: "Otonom ve Kontrol Edilebilir",
    description: "EtherCAT veri yolu teknolojisi, servo sürücü üniteleri ve HsPad öğretim aparatı ile donatılmış.",
    icon: Shield,
    features: [
      "Uluslararası standart EtherCAT teknolojisi",
      "Veri yolu tipi servo sürücü üniteleri",
      "Yeni nesil HsPad öğretim aparatı",
      "Profinet endüstriyel Ethernet erişimi",
    ],
  },
  {
    title: "Yüksek Hız ve Hassasiyet",
    description: "Dinamik modelleme ve hassas parametre tanımlamasına dayalı tork ileri beslemeli kontrol.",
    icon: Gauge,
    features: [
      "Tork ileri beslemeli kontrol sistemi",
      "Küresel akıllı yörünge optimizasyonu",
      "Çoklu hızlanma ve yavaşlama stratejisi",
      "Düzeltme işlevleri",
    ],
  },
  {
    title: "Emniyet",
    description: "Dinamik modele dayalı güvenlik özellikleri ve sensörsüz çarpışma algılama teknolojisi.",
    icon: Lock,
    features: [
      "Düzgün sürükleme öğretimi",
      "Sensörsüz çarpışma algılama",
      "Uyarı ve destek modları",
      "Esnek güvenlik bölgesi ayarı",
    ],
  },
  {
    title: "Kullanım Kolaylığı",
    description: "Kapsamlı hata ayıklama araçları ve simülasyon platformları ile kolay kullanım.",
    icon: Wrench,
    features: [
      "Tam parametre hata ayıklama araçları",
      "Komut tabanlı terminal hata ayıklama",
      "Sanal kontrol platformu",
      "3B simülasyon platformu",
    ],
  },
  {
    title: "Gelişim",
    description: "Zengin ikincil geliştirme arayüzü ve çeşitli sensör entegrasyonları.",
    icon: Code,
    features: [
      "Zengin ikincil geliştirme arayüzü",
      "Dinamik kütüphane yerleştirme",
      "Görsel sensör entegrasyonu",
      "Tork ve denge sensörleri",
    ],
  },
  {
    title: "Zeki Sistemler",
    description: "Yapay zeka teknolojileri ve bulut hizmeti platformu ile akıllı karar alma.",
    icon: Brain,
    features: [
      "Bulut hizmeti platformu",
      "Büyük veri analiz modelleri",
      "Derin öğrenme teknolojileri",
      "Akıllı bakım ve arıza uyarı",
    ],
  },
]

// Application areas data
const applicationAreas = [
  "3C Elektronik",
  "Ev Aletleri",
  "Donanım",
  "Otomotiv",
  "CNC İşleme",
  "Gıda Endüstrisi",
  "Ayakkabı Üretimi",
  "Lojistik",
]

// Process packages data
const processPackages = [
  {
    title: "Kaynak Proses Paketi",
    description: "Özelleştirilmiş kaynak uygulamaları",
    icon: Zap,
  },
  {
    title: "Yapıştırma Proses Paketi",
    description: "Hassas yapıştırma işlemleri",
    icon: Target,
  },
  {
    title: "Paletleme Proses Paketi",
    description: "Otomatik paletleme çözümleri",
    icon: Factory,
  },
  {
    title: "Damgalama Proses Paketi",
    description: "Endüstriyel damgalama uygulamaları",
    icon: Award,
  },
]

// Statistics data
const statsData = [
  {
    number: "20,000",
    label: "Yıllık Üretim Kapasitesi",
    description: "Endüstriyel robot üretim kapasitesi",
    icon: Factory,
  },
  {
    number: "40+",
    label: "Ürün Spesifikasyonu",
    description: "Altı seride robot ürün çeşitliliği",
    icon: Settings,
  },
  {
    number: "300+",
    label: "Fikri Mülkiyet Hakkı",
    description: "Bağımsız patent ve teknoloji",
    icon: Lightbulb,
  },
  {
    number: "5",
    label: "Şehir Lokasyonu",
    description: "Çin genelinde stratejik konumlar",
    icon: Globe,
  },
]

export default function AboutPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [visibleStats, setVisibleStats] = useState<boolean[]>([false, false, false, false])
  const statsRef = useRef<HTMLDivElement>(null)

  // Scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Stats animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            statsData.forEach((_, index) => {
              setTimeout(() => {
                setVisibleStats((prev) => {
                  const newVisible = [...prev]
                  newVisible[index] = true
                  return newVisible
                })
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.3 },
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-10"></div>

        {/* Animated background elements */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-blue-600/20 rounded-full blur-2xl animate-pulse delay-1000"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <Badge className="bg-blue-600/20 text-blue-300 border-blue-500/30 px-4 py-2 text-sm">
                Wasu Robotics Hakkında
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block">Endüstriyel Robotlarda</span>
                <span className="block text-blue-400">Yerli Öncü Marka</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Ürün araştırma ve geliştirme, üretim ve uygulamayı entegre eden ulusal yüksek teknoloji kuruluşu. Akıllı
              üretim ve akıllı fabrikalar için genel çözümlerde uzmanız.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Şirket Profilimizi İnceleyin
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-xl backdrop-blur-sm transition-all duration-300 bg-transparent"
              >
                İletişime Geçin
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Locations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Küresel Varlığımız</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Güney Çin, Doğu Çin, Orta Çin ve Güneybatı Çin'in ulusal düzenini kapsayan stratejik lokasyonlarımız
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {locationsData.map((location, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-0 shadow-md"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-xl flex items-center justify-center">
                  <location.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-800 mb-1">{location.city}</h3>
                <p className="text-sm text-gray-600">{location.region}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Rakamlarla Wasu Robotics</h2>
            <p className="text-lg text-gray-600">Başarılarımızı gösteren önemli veriler</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <div
                key={index}
                className={`text-center group transition-all duration-700 transform ${
                  visibleStats[index] ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 bg-blue-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-200 transition-all duration-300 group-hover:scale-110">
                    <stat.icon className="w-10 h-10 text-blue-600" />
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-xl font-semibold text-gray-700 mb-2">{stat.label}</div>
                <div className="text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PCLC Strategy Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">PCLC Geliştirme Stratejisi</h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              Endüstriyel robot geliştirme stratejimizi tam olarak uyguluyoruz: Products, Components, Lines, Cloud
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pclcData.map((item, index) => (
              <Card
                key={index}
                className="bg-gray-800 border-gray-700 p-8 text-center hover:bg-gray-750 transition-all duration-300 transform hover:scale-105"
              >
                <div className={`w-16 h-16 mx-auto mb-6 ${item.color} rounded-2xl flex items-center justify-center`}>
                  <span className="text-2xl font-bold text-white">{item.letter}</span>
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <div className="text-blue-400 font-semibold mb-3">{item.subtitle}</div>
                </div>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Profile Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Şirket Profili</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Wasu Robotics, Güney Çin, Doğu Çin, Orta Çin ve Güneybatı Çin'in ulusal düzenini kapsayan Foshan,
                  Chongqing, Ningbo, Suzhou ve Quanzhou'da şirketlere sahiptir. Ayrıca uluslararası pazarları da aktif
                  olarak geliştirmektedir.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Yerli endüstriyel robotların önde gelen bir markasıdır ve akıllı üretim ve akıllı fabrikalar için
                  genel çözümlerde uzmandır. Yıllık 20.000 endüstriyel robot üretim kapasitesine sahiptir.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800">Uygulama Alanları</h3>
                <div className="flex flex-wrap gap-2">
                  {applicationAreas.map((area, index) => (
                    <Badge key={index} variant="secondary" className="px-3 py-1">
                      {area}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 p-8">
                <Image
                  src="https://omo-oss-image.thefastimg.com/portal-saas/pg2024072219142686656/cms/image/f3ed688e-ed78-411e-9cd5-897ca48d2a67.png"
                  alt="Wasu Robot Technology"
                  width={500}
                  height={400}
                  className="w-full h-auto object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Wasu Robotics'in Avantajları
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Pazar odaklı, müşteri odaklı, kalite odaklı, inovasyon odaklı yaklaşımımızla öne çıkan özelliklerimiz
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantagesData.map((advantage, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 shadow-lg"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <advantage.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{advantage.title}</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{advantage.description}</p>
                <div className="space-y-3">
                  {advantage.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Packages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">El Sanatları Füzyonu</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Çekirdek kullanıcılar için özelleştirilmiş proses paketleri geliştiriyoruz
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processPackages.map((pkg, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-0 shadow-md"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center">
                  <pkg.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">{pkg.title}</h3>
                <p className="text-gray-600 text-sm">{pkg.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Misyonumuz</h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              Wasu Robotics, misyonu olarak bağımsız inovasyonu ve ulusal marka endüstriyel robotlar inşa etmeyi alır.
              Robot gövdesinin ve tüm makinenin performans ve güvenilirlik araştırma ve geliştirmesine odaklanır ve
              otomasyon, zeka, akıllı fabrikalar vb. uygulama geliştirmeyi aktif olarak gerçekleştirir.
            </p>
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <p className="text-lg text-blue-100 leading-relaxed">
                "Yeni teknolojik devrim ve endüstriyel dönüşüm turunda Wasu Robotics, 'daha yüksek, daha hızlı ve daha
                akıllı' yenilikçi teknolojilerle akıllı üretimin dönüşümüne yardımcı olur, çekirdek olarak robot
                teknolojisiyle büyük ölçekli tanıtım ve uygulama gerçekleştirir."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Akıllı Ekipman Teknolojisini Dünyayla Senkronize Hale Getiriyoruz!
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Yüksek kaliteli ürün ve hizmetlerle küresel müşteriler için sürekli olarak değer yaratıyoruz. Robotik
            çözümlerimiz hakkında daha fazla bilgi almak için bizimle iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
              <Phone className="w-5 h-5 mr-2" />
              Hemen İletişime Geçin
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-xl font-semibold transition-all duration-300 bg-transparent"
            >
              <Mail className="w-5 h-5 mr-2" />
              Katalog İsteyin
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
