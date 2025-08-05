"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Calendar, Clock, ArrowRight, Eye } from "lucide-react"

const newsData = [
  {
    id: 1,
    title: "Yeni Nesil 6 Eksenli Robot Kolumuz Tanıtıldı",
    excerpt:
      "Gelişmiş AI teknolojisi ile donatılmış yeni robot kolumuz, endüstriyel otomasyon alanında çığır açacak özellikler sunuyor.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Ürün Lansmanı",
    date: "2024-01-15",
    readTime: "5 dk",
    views: 1250,
    featured: true,
  },
  {
    id: 2,
    title: "Otomotiv Sektöründe Robotik Çözümlerimiz",
    excerpt:
      "Türkiye'nin önde gelen otomotiv üreticileri ile gerçekleştirdiğimiz başarılı projeler ve gelecek planlarımız.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Sektör Haberleri",
    date: "2024-01-12",
    readTime: "7 dk",
    views: 890,
    featured: false,
  },
  {
    id: 3,
    title: "Endüstri 4.0 Fuarında Büyük İlgi Gördük",
    excerpt:
      "İstanbul'da düzenlenen Endüstri 4.0 Fuarı'nda sergilediğimiz robotik çözümler ziyaretçilerden büyük beğeni topladı.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Etkinlik",
    date: "2024-01-10",
    readTime: "4 dk",
    views: 650,
    featured: false,
  },
  {
    id: 4,
    title: "Yapay Zeka Destekli Kalite Kontrol Sistemi",
    excerpt:
      "Makine öğrenmesi algoritmaları ile geliştirdiğimiz kalite kontrol sistemi üretim hatalarını %95 oranında azaltıyor.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Teknoloji",
    date: "2024-01-08",
    readTime: "6 dk",
    views: 1100,
    featured: true,
  },
  {
    id: 5,
    title: "Gıda Sektöründe Hijyenik Robotik Çözümler",
    excerpt:
      "Gıda güvenliği standartlarına uygun özel tasarım robotlarımız ile hijyenik üretim süreçlerini destekliyoruz.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Sektör Haberleri",
    date: "2024-01-05",
    readTime: "5 dk",
    views: 720,
    featured: false,
  },
  {
    id: 6,
    title: "Kobotlar: İnsan-Robot İşbirliğinin Geleceği",
    excerpt:
      "Collaborative robotlar ile çalışanlarımızın güvenliğini artırırken üretim verimliliğini maksimuma çıkarıyoruz.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Teknoloji",
    date: "2024-01-03",
    readTime: "8 dk",
    views: 980,
    featured: false,
  },
  {
    id: 7,
    title: "Sürdürülebilir Üretim İçin Enerji Verimli Robotlar",
    excerpt:
      "Çevre dostu teknolojiler ile geliştirdiğimiz enerji verimli robot sistemleri karbon ayak izini azaltıyor.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Sürdürülebilirlik",
    date: "2024-01-01",
    readTime: "6 dk",
    views: 540,
    featured: false,
  },
  {
    id: 8,
    title: "Robotik Eğitim Programımız Başlıyor",
    excerpt: "Genç mühendislere yönelik kapsamlı robotik eğitim programımız ile sektörün geleceğine yatırım yapıyoruz.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Eğitim",
    date: "2023-12-28",
    readTime: "4 dk",
    views: 430,
    featured: false,
  },
  {
    id: 9,
    title: "Metal İşleme Sektöründe Robotik Devrim",
    excerpt: "Hassas metal işleme operasyonlarında robotik çözümlerimiz ile %40 verimlilik artışı sağlıyoruz.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Sektör Haberleri",
    date: "2023-12-25",
    readTime: "6 dk",
    views: 780,
    featured: false,
  },
  {
    id: 10,
    title: "Akıllı Fabrika Çözümleri Lansmanı",
    excerpt: "IoT entegrasyonu ile akıllı fabrika çözümlerimiz endüstriyel dönüşümü hızlandırıyor.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Ürün Lansmanı",
    date: "2023-12-22",
    readTime: "7 dk",
    views: 920,
    featured: true,
  },
  {
    id: 11,
    title: "Robotik Güvenlik Standartları Eğitimi",
    excerpt: "Çalışan güvenliği için robotik sistemlerde uyulması gereken güvenlik standartları ve eğitim programları.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Eğitim",
    date: "2023-12-20",
    readTime: "5 dk",
    views: 340,
    featured: false,
  },
  {
    id: 12,
    title: "Ambalaj Sektöründe Otomasyon Çözümleri",
    excerpt: "Hızlı ve hassas ambalajlama işlemleri için özel tasarım robotik sistemlerimiz.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Sektör Haberleri",
    date: "2023-12-18",
    readTime: "4 dk",
    views: 560,
    featured: false,
  },
  {
    id: 13,
    title: "Robotik Teknolojilerde Yapay Zeka Entegrasyonu",
    excerpt: "Machine learning ve deep learning teknolojileri ile robotlarımızın öğrenme kapasitesini artırıyoruz.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Teknoloji",
    date: "2023-12-15",
    readTime: "8 dk",
    views: 1340,
    featured: false,
  },
  {
    id: 14,
    title: "Yeşil Teknoloji Ödülü Aldık",
    excerpt: "Çevre dostu robotik çözümlerimiz ile Yeşil Teknoloji Ödülü'nün sahibi olduk.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Etkinlik",
    date: "2023-12-12",
    readTime: "3 dk",
    views: 450,
    featured: false,
  },
  {
    id: 15,
    title: "Robotik Bakım ve Servis Hizmetlerimiz",
    excerpt: "7/24 teknik destek ve preventif bakım hizmetleri ile robotlarınızın kesintisiz çalışmasını sağlıyoruz.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Servis",
    date: "2023-12-10",
    readTime: "5 dk",
    views: 680,
    featured: false,
  },
]

const categories = [
  "Tümü",
  "Ürün Lansmanı",
  "Sektör Haberleri",
  "Teknoloji",
  "Etkinlik",
  "Sürdürülebilirlik",
  "Eğitim",
  "Servis",
]

const ITEMS_PER_PAGE = 10

export default function HaberlerPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tümü")
  const [currentPage, setCurrentPage] = useState(1)

  // Filter news by category
  const filteredNews = useMemo(() => {
    if (selectedCategory === "Tümü") {
      return newsData
    }
    return newsData.filter((news) => news.category === selectedCategory)
  }, [selectedCategory])

  // Calculate pagination
  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentNews = filteredNews.slice(startIndex, endIndex)

  // Reset to page 1 when category changes
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setCurrentPage(1)
  }

  // Generate pagination items
  const generatePaginationItems = () => {
    const items = []
    const maxVisiblePages = 5

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        items.push(i)
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          items.push(i)
        }
        items.push("ellipsis")
        items.push(totalPages)
      } else if (currentPage >= totalPages - 2) {
        items.push(1)
        items.push("ellipsis")
        for (let i = totalPages - 3; i <= totalPages; i++) {
          items.push(i)
        }
      } else {
        items.push(1)
        items.push("ellipsis")
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          items.push(i)
        }
        items.push("ellipsis")
        items.push(totalPages)
      }
    }

    return items
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center">
            <Badge className="bg-blue-600/20 text-blue-300 border-blue-400/30 mb-4">Haberler & Duyurular</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Robotik Dünyasından
              <span className="block text-blue-400">Son Haberler</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Robotik teknolojilerdeki son gelişmeler, ürün lansmanları ve sektörel haberler
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === selectedCategory ? "default" : "outline"}
                className={
                  category === selectedCategory
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "hover:bg-blue-50 hover:border-blue-300"
                }
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-blue-600 rounded-full"></div>
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedCategory === "Tümü" ? "Tüm Haberler" : selectedCategory}
              </h2>
            </div>
            <div className="text-sm text-gray-500">{filteredNews.length} haber bulundu</div>
          </div>

          {currentNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentNews.map((news) => (
                <Card
                  key={news.id}
                  className="group hover:shadow-xl transition-all duration-300 overflow-hidden bg-white border-0 shadow-md"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={news.image || "/placeholder.svg"}
                      alt={news.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge variant="secondary" className="bg-white/90 text-gray-700">
                        {news.category}
                      </Badge>
                    </div>
                    {news.featured && (
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-blue-600 text-white">Öne Çıkan</Badge>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(news.date).toLocaleDateString("tr-TR")}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{news.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        <span>{news.views}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">{news.excerpt}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 group bg-transparent"
                    >
                      Devamını Oku
                      <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Calendar className="w-16 h-16 mx-auto mb-4" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Haber Bulunamadı</h3>
              <p className="text-gray-500">Seçilen kategoride henüz haber bulunmamaktadır.</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      href="#"
                      onClick={(e) => {
                        e.preventDefault()
                        if (currentPage > 1) {
                          setCurrentPage(currentPage - 1)
                        }
                      }}
                      className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                    />
                  </PaginationItem>

                  {generatePaginationItems().map((item, index) => (
                    <PaginationItem key={index}>
                      {item === "ellipsis" ? (
                        <PaginationEllipsis />
                      ) : (
                        <PaginationLink
                          href="#"
                          onClick={(e) => {
                            e.preventDefault()
                            setCurrentPage(item as number)
                          }}
                          isActive={currentPage === item}
                        >
                          {item}
                        </PaginationLink>
                      )}
                    </PaginationItem>
                  ))}

                  <PaginationItem>
                    <PaginationNext
                      href="#"
                      onClick={(e) => {
                        e.preventDefault()
                        if (currentPage < totalPages) {
                          setCurrentPage(currentPage + 1)
                        }
                      }}
                      className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
