"use client"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
    ArrowLeft,
    Download,
    ExternalLink,
    Factory,
    MessageCircle
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

// MD Serisi robot modelleri
const mdSeriesRobots = [
  {
    model: "MD-0603C-670",
    payload: "3kg",
    reach: "670mm",
    image: "https://omo-oss-image.thefastimg.com/portal-saas/pg2024072219142686656/cms/image/38c5a918-a016-4e96-be44-819b87464da0.png",
    specs: {
      dof: "6 Eksen",
      repeatability: "±0.03mm",
      maxSpeed: "3.0 m/s",
      weight: "18 kg",
    },
    features: ["Kompakt Tasarım", "Kolay Kurulum", "Güvenlik Sensörleri"],
    applications: ["Küçük Montaj", "Paketleme", "Kalite Kontrol"],
  },
  {
    model: "MD-0607-770",
    payload: "7kg",
    reach: "770mm",
    image: "https://omo-oss-image.thefastimg.com/portal-saas/pg2024072219142686656/cms/image/1a015a30-d31c-4353-9057-2dc06d7c27fc.png",
    specs: {
      dof: "6 Eksen",
      repeatability: "±0.05mm",
      maxSpeed: "2.7 m/s",
      weight: "22 kg",
    },
    features: ["Orta Yük Kapasitesi", "Esnek Programlama", "Dayanıklı Yapı"],
    applications: ["Montaj", "Kaynak", "Malzeme Taşıma"],
  },
  {
    model: "MD-0610-900",
    payload: "10kg",
    reach: "900mm",
    image: "https://omo-oss-image.thefastimg.com/portal-saas/pg2024072219142686656/cms/image/2ad5de6b-3f1e-4d21-ac25-e2123a9b293f.png",
    specs: {
      dof: "6 Eksen",
      repeatability: "±0.06mm",
      maxSpeed: "2.4 m/s",
      weight: "27 kg",
    },
    features: ["Geniş Çalışma Alanı", "Yüksek Yük", "Endüstriyel Dayanım"],
    applications: ["Ağır Montaj", "CNC Besleme", "Paletleme"],
  },
  {
    model: "MD-0615-1100",
    payload: "15kg",
    reach: "1100mm",
    image: "https://omo-oss-image.thefastimg.com/portal-saas/pg2024072219142686656/cms/image/31f0c60c-da19-4653-8ddf-547233e5f17c.png",
    specs: {
      dof: "6 Eksen",
      repeatability: "±0.08mm",
      maxSpeed: "2.1 m/s",
      weight: "35 kg",
    },
    features: ["Yüksek Yük Kapasitesi", "Güçlü Motor", "Profesyonel Çözüm"],
    applications: ["Ağır Sanayi", "Otomotiv", "Metal İşleme"],
  },
]

// Kullanım alanları
const applicationAreas = [
  "Orta Ölçekli İşletmeler - Montaj Otomasyonu",
  "Eğitim Kurumları - Robotik Eğitimi",
  "Araştırma Laboratuvarları - Prototip Geliştirme",
  "Hafif Endüstri - Orta Parça İşleme",
  "Medikal Cihazlar - Hassas Montaj",
  "Elektronik Sektörü - PCB Montajı",
  "Gıda Endüstrisi - Paketleme ve Sıralama",
  "Tekstil Sektörü - Orta Parça Dikimi",
  "Otomotiv Yan Sanayi - Parça Montajı",
  "Plastik Endüstrisi - Orta Kalıp İşlemleri",
]

export default function MDSeriesPage() {
  const [selectedRobot, setSelectedRobot] = useState<any>(null)

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white pt-20 pb-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Link href="/products" className="flex items-center text-blue-200 hover:text-white transition-colors duration-300">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Ürün Merkezi
              </Link>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">MD Serisi</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Orta Ölçekli Endüstriyel Robotlar
            </p>
            <p className="text-lg text-blue-200 max-w-3xl mx-auto leading-relaxed">
              Dengeli performans ve uygun fiyat sunan MD serisi robotlar,
              orta ölçekli işletmeler için ideal çözümler sağlar.
            </p>
          </div>
        </div>
      </section>

      {/* Kullanım Alanları */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Kullanım Alanları
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                MD serisi robotlar, orta ölçekli endüstriyel uygulamalar için optimize edilmiştir.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {applicationAreas.map((area, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                                      <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <Factory className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700 font-medium">{area}</p>
                    </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Robot Modelleri */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                MD Serisi Robot Modelleri
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Orta ölçekli endüstriyel uygulamalar için dengeli performans sunan robotlar.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mdSeriesRobots.map((robot, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-gray-200"
                >
                  <CardHeader className="pb-4">
                    <div className="relative h-48 bg-gray-50 rounded-lg overflow-hidden mb-4">
                      <Image
                        src={robot.image}
                        alt={robot.model}
                        fill
                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800 mb-2">
                      {robot.model}
                    </CardTitle>
                    <div className="flex space-x-2">
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                        {robot.payload} Yük
                      </Badge>
                      <Badge variant="outline" className="border-gray-300 text-gray-700">
                        {robot.reach} Erişim
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-blue-50 p-3 rounded-lg text-center">
                        <div className="text-xs text-gray-600 mb-1">Tekrarlanabilirlik</div>
                        <div className="text-sm font-bold text-blue-600">{robot.specs.repeatability}</div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg text-center">
                        <div className="text-xs text-gray-600 mb-1">Maksimum Hız</div>
                        <div className="text-sm font-bold text-gray-700">{robot.specs.maxSpeed}</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-sm font-semibold text-gray-700">Özellikler:</div>
                      <div className="flex flex-wrap gap-1">
                        {robot.features.slice(0, 2).map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-sm font-semibold text-gray-700">Uygulama Alanları:</div>
                      <div className="flex flex-wrap gap-1">
                        {robot.applications.slice(0, 2).map((app, appIndex) => (
                          <span
                            key={appIndex}
                            className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-xs"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-2 pt-4">
                      <Button
                        onClick={() => setSelectedRobot(robot)}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Detayları İncele
                      </Button>
                      <Button
                        variant="outline"
                        className="border-gray-300 text-gray-700 hover:bg-gray-50"
                      >
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            MD Serisi Hakkında Daha Fazla Bilgi
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Orta ölçekli endüstriyel uygulamalar için dengeli çözümler.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Teklif İste
            </Button>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
            >
              <Download className="w-5 h-5 mr-2" />
              Broşür İndir
            </Button>
          </div>
        </div>
      </section>

      {/* Robot Detay Modal */}
      {selectedRobot && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  {selectedRobot.model}
                </h2>
                <button
                  onClick={() => setSelectedRobot(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-xl p-6 flex items-center justify-center">
                    <Image
                      src={selectedRobot.image}
                      alt={selectedRobot.model}
                      width={400}
                      height={400}
                      className="max-w-full max-h-80 object-contain"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <div className="text-sm text-gray-600 mb-1">Yük Kapasitesi</div>
                      <div className="text-2xl font-bold text-blue-600">{selectedRobot.payload}</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="text-sm text-gray-600 mb-1">Erişim Mesafesi</div>
                      <div className="text-2xl font-bold text-gray-700">{selectedRobot.reach}</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Teknik Özellikler</h3>
                    <div className="space-y-3">
                      {Object.entries(selectedRobot.specs).map(([key, value]) => (
                        <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                          <span className="text-gray-600 capitalize">
                            {key === "dof" ? "Serbestlik Derecesi" :
                             key === "repeatability" ? "Tekrarlanabilirlik" :
                             key === "maxSpeed" ? "Maksimum Hız" :
                             key === "weight" ? "Ağırlık" : key}
                          </span>
                          <span className="font-semibold text-gray-800">{value as string}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Özellikler</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedRobot.features.map((feature: string, index: number) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Uygulama Alanları</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedRobot.applications.map((app: string, index: number) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4 pt-4">
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                      Teklif İste
                    </Button>
                    <Button variant="outline" className="flex-1 border-gray-300 text-gray-700">
                      Broşür İndir
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
