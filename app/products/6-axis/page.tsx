"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  ChevronRight,
  Download,
  FileText,
  Package,
  Settings,
  Zap,
  Shield,
  Award,
  ArrowLeft,
  MessageCircle,
  Phone,
  Info,
  Thermometer,
  Droplets,
} from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

interface Language {
  code: string
  name: string
  flag: string
}

const languages: Language[] = [
  { code: "tr", name: "Türkçe", flag: "🇹🇷" },
  { code: "en", name: "English", flag: "🇺🇸" },
]

const translations = {
  tr: {
    nav: {
      productCenter: "Ürün Merkezi",
      solutions: "Çözümler",
      support: "Hizmet ve Destek",
      downloads: "İndirme Merkezi",
      about: "Hakkımızda",
      examples: "Örnek Uygulama",
    },
    breadcrumb: {
      home: "Ana Sayfa",
      productCenter: "Ürün Merkezi",
      industrialRobots: "Endüstriyel Robotlar",
      jrSeries: "JR Serisi (Endüstriyel Altı Eksenli)",
    },
    product: {
      category: "Kategori",
      keywords: "Anahtar Kelimeler",
      axes: "Eksen Sayısı",
      payload: "Yük",
      reach: "Kol Açıklığı",
      contactForConsultation: "Danışma için Mesaj Bırakın",
      specifications: "Teknik Özellikler",
      movementRange: "Hareket Aralığı",
      maxSpeed: "En Yüksek Hız",
      allowedInertia: "İzin Verilen Eylemsizlik Momenti",
      allowedTorque: "İzin Verilen Yük Torku",
      environment: "Uygulanabilir Çevre",
      temperature: "Sıcaklık",
      humidity: "Nem",
      downloads: "İndirilebilir Dosyalar",
      selectionGuide: "Seçim Rehberi",
      exampleApplication: "Örnek Uygulama",
      requestQuote: "Fiyat Teklifi İste",
      contactUs: "İletişime Geç",
    },
    downloads: {
      userManual: "Kullanım Kılavuzu",
      maintenanceGuide: "Bakım Rehberi",
      model3D: "3D Model",
      electricalCabinet: "Elektrik Kontrol Kabini",
      filterBy: "Filtrele:",
      allFiles: "Tüm Dosyalar",
    },
  },
  en: {
    nav: {
      productCenter: "Product Center",
      solutions: "Solutions",
      support: "Service & Support",
      downloads: "Download Center",
      about: "About Us",
      examples: "Example Applications",
    },
    breadcrumb: {
      home: "Home",
      productCenter: "Product Center",
      industrialRobots: "Industrial Robots",
      jrSeries: "JR Series (Industrial Six-Axis)",
    },
    product: {
      category: "Category",
      keywords: "Keywords",
      axes: "Number of Axes",
      payload: "Payload",
      reach: "Reach",
      contactForConsultation: "Leave a Message for Consultation",
      specifications: "Technical Specifications",
      movementRange: "Movement Range",
      maxSpeed: "Maximum Speed",
      allowedInertia: "Allowed Inertia Moment",
      allowedTorque: "Allowed Load Torque",
      environment: "Applicable Environment",
      temperature: "Temperature",
      humidity: "Humidity",
      downloads: "Downloadable Files",
      selectionGuide: "Selection Guide",
      exampleApplication: "Example Application",
      requestQuote: "Request Quote",
      contactUs: "Contact Us",
    },
    downloads: {
      userManual: "User Manual",
      maintenanceGuide: "Maintenance Guide",
      model3D: "3D Model",
      electricalCabinet: "Electrical Control Cabinet",
      filterBy: "Filter by:",
      allFiles: "All Files",
    },
  },
}

// Product data
const productData = {
  model: "HSR-JR615-2000",
  category: "JR Serisi (Endüstriyel Altı Eksenli)",
  keywords: "Endüstriyel Robotlar",
  axes: 6,
  payload: "15 kg",
  reach: "2000mm",
  description: `HSR-JR615-2000, 2 m'lik bir kol açıklığına ve 15 KG'lık bir yük kapasitesine sahip yüksek hızlı, yüksek hassasiyetli genel amaçlı bir robottur. Ön kol ve bilek, büyük çaplı içi boş bir tasarıma sahiptir. Ön kolun maksimum delik çapı Ø45 mm'dir ve bileğin maksimum delik çapı Ø50 mm'dir. Kaynak ve taşlama uygulamalarında takım boru hatlarını düzenlemek için uygundur ve terminal boru hattı girişimini en aza indirir. Ön kol koruma seviyesi, takım tezgahlarının yüklenmesi ve boşaltılması gibi çalışma koşulları için uygun olan IP67'ye ulaşır. Son derece yüksek hız ve hassasiyet göstergeleri, işletmelerin kaliteyi ve verimliliği artırmasına ve beklenmedik getiriler elde etmesine etkili bir şekilde yardımcı olacaktır.`,
  image:
    "https://omo-oss-image.thefastimg.com/portal-saas/pg2024072219142686656/cms/image/38c5a918-a016-4e96-be44-819b87464da0.png",
  specifications: {
    model: "HSR-JR615-2000",
    dof: "6",
    payload: "15Kg",
    reach: "2000mm",
    repeatability: "±0,05 mm",
  },
  movementRange: {
    J1: "165°/-165°",
    J2: "75°/-165°",
    J3: "260°/-15°",
    J4: "170°/-170°",
    J5: "140°/-140°",
    J6: "400°/-400°",
  },
  maxSpeed: {
    J1: "220°/sn, 3.84rad/sn",
    J2: "205°/sn, 3.58rad/sn",
    J3: "220°/sn, 3.84rad/sn",
    J4: "330°/sn, 5.76rad/sn",
    J5: "420°/s, 7.33rad/s",
    J6: "670°/s, 11.7rad/s",
  },
  allowedInertia: {
    J4: "2,8KG.m²",
    J5: "2,2KG.m²",
    J6: "1KG.m²",
  },
  allowedTorque: {
    J4: "60Nm",
    J5: "52Nm",
    J6: "32Nm",
  },
  environment: {
    temperature: "0~45°C",
    humidity: "20%~80%",
  },
}

// Downloads data
const downloadsData = [
  {
    id: 1,
    title: "HSR-JR615-2000 Kullanım Kılavuzu",
    type: "PDF",
    category: "userManual",
    date: "2024-12-15",
    size: "2.5 MB",
  },
  {
    id: 2,
    title: "HSR-JR615-2000 Bakım Rehberi",
    type: "PDF",
    category: "maintenanceGuide",
    date: "2024-12-10",
    size: "1.8 MB",
  },
  {
    id: 3,
    title: "HSR-JR615-2000 3D Model",
    type: "ZIP",
    category: "model3D",
    date: "2024-12-08",
    size: "15.2 MB",
  },
  {
    id: 4,
    title: "Elektrik Kontrol Kabini Şeması",
    type: "PDF",
    category: "electricalCabinet",
    date: "2024-12-05",
    size: "3.1 MB",
  },
  {
    id: 5,
    title: "Kurulum Rehberi",
    type: "PDF",
    category: "userManual",
    date: "2024-12-01",
    size: "4.2 MB",
  },
  {
    id: 6,
    title: "Güvenlik Talimatları",
    type: "PDF",
    category: "userManual",
    date: "2024-11-28",
    size: "1.5 MB",
  },
]

const currentLang = "tr"

export default function ProductDetailPage() {
  const [selectedDownloadCategory, setSelectedDownloadCategory] = useState<string>("all")
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const t = translations[currentLang]

  // Scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const filteredDownloads = downloadsData.filter(
    (download) => selectedDownloadCategory === "all" || download.category === selectedDownloadCategory,
  )

  const downloadCategories = [
    { key: "all", label: t.downloads.allFiles },
    { key: "userManual", label: t.downloads.userManual },
    { key: "maintenanceGuide", label: t.downloads.maintenanceGuide },
    { key: "model3D", label: t.downloads.model3D },
    { key: "electricalCabinet", label: t.downloads.electricalCabinet },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb - pt-24 ekle */}
      <section className="pt-24 pb-6 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <span className="text-gray-800 font-medium">{productData.category}</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-800 font-medium">{productData.model}</span>
          </nav>
        </div>
      </section>

      {/* Product Header */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Product Image */}
            <div className="relative">
              <div className="bg-gray-50 rounded-2xl p-8 flex items-center justify-center min-h-[400px]">
                <Image
                  src={productData.image || "/placeholder.svg"}
                  alt={productData.model}
                  width={500}
                  height={400}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-gray-800 mb-4">{productData.model}</h1>
              </div>

              {/* Quick Specs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Card className="p-4 text-center border-2 border-blue-100 bg-blue-50">
                  <div className="text-sm text-gray-600 mb-1">{t.product.axes}</div>
                  <div className="text-2xl font-bold text-blue-600">{productData.axes}</div>
                </Card>
                <Card className="p-4 text-center border-2 border-gray-100">
                  <div className="text-sm text-gray-600 mb-1">{t.product.payload}</div>
                  <div className="text-2xl font-bold text-gray-800">{productData.payload}</div>
                </Card>
                <Card className="p-4 text-center border-2 border-gray-100">
                  <div className="text-sm text-gray-600 mb-1">{t.product.reach}</div>
                  <div className="text-2xl font-bold text-gray-800">{productData.reach}</div>
                </Card>
              </div>

              {/* Action Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => setIsContactFormOpen(true)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {t.product.contactForConsultation}
                </Button>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">IP67 Koruma</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Yüksek Hız</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-purple-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Yüksek Hassasiyet</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Settings className="w-5 h-5 text-orange-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">İçi Boş Tasarım</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Description */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Ürün Açıklaması</h2>
            <p className="text-gray-700 leading-relaxed text-lg">{productData.description}</p>
          </Card>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">{t.product.specifications}</h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Basic Specifications */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Info className="w-5 h-5 mr-2 text-blue-600" />
                Temel Özellikler
              </h3>
              <div className="space-y-3">
                {Object.entries(productData.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">
                      {key === "model"
                        ? "Model"
                        : key === "dof"
                          ? "Özgürlük Dereceleri"
                          : key === "payload"
                            ? "Nominal Yük"
                            : key === "reach"
                              ? "Maksimum Çalışma Yarıçapı"
                              : "Tekrar Konumlandırma Doğruluğu"}
                    </span>
                    <span className="font-semibold text-gray-800">{value}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Movement Range */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Settings className="w-5 h-5 mr-2 text-blue-600" />
                {t.product.movementRange}
              </h3>
              <div className="space-y-3">
                {Object.entries(productData.movementRange).map(([joint, range]) => (
                  <div key={joint} className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">{joint}</span>
                    <span className="font-semibold text-gray-800">{range}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Maximum Speed */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Zap className="w-5 h-5 mr-2 text-blue-600" />
                {t.product.maxSpeed}
              </h3>
              <div className="space-y-3">
                {Object.entries(productData.maxSpeed).map(([joint, speed]) => (
                  <div key={joint} className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">{joint}</span>
                    <span className="font-semibold text-gray-800">{speed}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Allowed Inertia */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Package className="w-5 h-5 mr-2 text-blue-600" />
                {t.product.allowedInertia}
              </h3>
              <div className="space-y-3">
                {Object.entries(productData.allowedInertia).map(([joint, inertia]) => (
                  <div key={joint} className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">{joint}</span>
                    <span className="font-semibold text-gray-800">{inertia}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Additional Specifications */}
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {/* Allowed Torque */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Settings className="w-5 h-5 mr-2 text-blue-600" />
                {t.product.allowedTorque}
              </h3>
              <div className="space-y-3">
                {Object.entries(productData.allowedTorque).map(([joint, torque]) => (
                  <div key={joint} className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">{joint}</span>
                    <span className="font-semibold text-gray-800">{torque}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Environment */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Thermometer className="w-5 h-5 mr-2 text-blue-600" />
                {t.product.environment}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 px-4 bg-red-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Thermometer className="w-5 h-5 text-red-600" />
                    <span className="text-gray-700 font-medium">{t.product.temperature}</span>
                  </div>
                  <span className="font-semibold text-gray-800">{productData.environment.temperature}</span>
                </div>
                <div className="flex items-center justify-between py-3 px-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Droplets className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700 font-medium">{t.product.humidity}</span>
                  </div>
                  <span className="font-semibold text-gray-800">{productData.environment.humidity}</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">{t.product.downloads}</h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {downloadCategories.map((category) => (
              <Button
                key={category.key}
                variant={selectedDownloadCategory === category.key ? "default" : "outline"}
                onClick={() => setSelectedDownloadCategory(category.key)}
                className={`transition-all duration-300 ${
                  selectedDownloadCategory === category.key
                    ? "bg-blue-600 text-white"
                    : "border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Downloads Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDownloads.map((download) => (
              <Card key={download.id} className="p-6 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{download.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                      <span className="bg-gray-100 px-2 py-1 rounded">{download.type}</span>
                      <span>{download.size}</span>
                    </div>
                    <div className="text-xs text-gray-500 mb-3">{download.date}</div>
                    <Button
                      size="sm"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      İndir
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-3xl font-bold mb-4">Bu Ürün Hakkında Daha Fazla Bilgi Almak İster misiniz?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Uzman ekibimiz size en uygun çözümü bulmak için yardımcı olmaya hazır
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => setIsContactFormOpen(true)}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              {t.product.contactUs}
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-xl font-semibold transition-all duration-300 bg-transparent"
            >
              <Phone className="w-5 h-5 mr-2" />
              Hemen Ara
            </Button>
          </div>
        </div>
      </section>

      <Footer />

      {/* Contact Form Modal */}
      {isContactFormOpen && (
        <div className="fixed inset-0 z-[150] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800">İletişime Geç</h2>
              <button
                onClick={() => setIsContactFormOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            <form className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">İlgilendiğiniz Ürün</label>
                <input
                  type="text"
                  value={productData.model}
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Ad Soyad</label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">E-posta</label>
                <input
                  type="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mesaj</label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none resize-none"
                  placeholder="Lütfen ihtiyaçlarınızı detaylı olarak belirtiniz..."
                />
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl">
                Mesaj Gönder
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
