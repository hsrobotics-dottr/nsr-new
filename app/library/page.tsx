"use client"
import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Search,
  Download,
  FileText,
  FileDigitIcon as File3D,
  Video,
  Settings,
  Filter,
  X,
  ChevronLeft,
  ChevronRight,
  Calendar,
  HardDrive,
} from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { LIBRARY_CONFIG } from "@/lib/config"

// File types with colors and icons
const fileTypes = {
  pdf: { icon: FileText, color: "text-red-600 bg-red-50", label: "PDF" },
  "3d": { icon: File3D, color: "text-blue-600 bg-blue-50", label: "3D Model" },
  video: { icon: Video, color: "text-purple-600 bg-purple-50", label: "Video" },
  software: { icon: Settings, color: "text-green-600 bg-green-50", label: "Yazılım" },
}

// Sample data matching the screenshot
const libraryData = [
  {
    id: 1,
    name: "HSR-JR615-2000 / HSR-JR620-1800 / HSR-JR630-1800 Seyahat analizi ve montaj boyutları",
    type: "pdf",
    size: "670.6 KB",
    date: "2025-05-08",
    category: "JR Serisi (Endüstriyel alt eksenli)",
    tags: ["Endüstriyel Robotlar", "Seyahat analizi haritas"],
  },
  {
    id: 2,
    name: "HSR-JR630-1800 robot başlangıçlarının 3D modeli",
    type: "3d",
    size: "24.5 MB",
    date: "2025-05-08",
    category: "JR Serisi (Kaynak)",
    tags: ["Endüstriyel Robotlar", "3D Modeli"],
  },
  {
    id: 3,
    name: "HSR-JR615-2000 robot başlangıçlarının 3D modeli",
    type: "3d",
    size: "24.7 MB",
    date: "2025-05-08",
    category: "JR Serisi (Kaynak)",
    tags: ["Endüstriyel Robotlar", "3D Modeli"],
  },
  {
    id: 4,
    name: "HSR-JR615/JR620/JR630 Mekanik İşleme ve Bakım Kılavuzu",
    type: "pdf",
    size: "5.8 MB",
    date: "2025-05-08",
    category: "JR Serisi (Kaynak)",
    tags: ["Endüstriyel Robotlar", "Kullanıcı Kılavuzu"],
  },
  {
    id: 5,
    name: "HRC-S2 Serisi Kontrol Kabini Kullanıcı Kılavuzu_A2",
    type: "pdf",
    size: "3.2 MB",
    date: "2025-04-27",
    category: "CO Serisi (İş Birliği)",
    tags: ["İşbirlikçi Robotlar", "Kullanıcı Kılavuzu"],
  },
  {
    id: 6,
    name: "HSR-JR670-2100 Mekanik İşleme ve Bakım Kılavuzu",
    type: "pdf",
    size: "12.3 MB",
    date: "2025-04-22",
    category: "JR Serisi (Endüstriyel alt eksenli)",
    tags: ["Endüstriyel Robotlar", "Kullanıcı Kılavuzu"],
  },
  {
    id: 7,
    name: "HSR-JR670-2100 3D modeli",
    type: "3d",
    size: "30.1 MB",
    date: "2025-04-22",
    category: "JR Serisi (Endüstriyel alt eksenli)",
    tags: ["Endüstriyel Robotlar", "3D Modeli"],
  },
  {
    id: 8,
    name: "HSR-JR670-2100 seyahat analizi ve montaj boyutları",
    type: "pdf",
    size: "2.4 MB",
    date: "2025-04-22",
    category: "JR Serisi (Endüstriyel alt eksenli)",
    tags: ["Endüstriyel Robotlar", "Seyahat analizi haritas"],
  },
  {
    id: 9,
    name: "Kompozit Robot Broşürü",
    type: "pdf",
    size: "12.7 MB",
    date: "2025-01-23",
    category: "Kompozit Robot",
    tags: ["Kompozit Robot", "Ürün Broşürü"],
  },
  {
    id: 10,
    name: "HRC-I serisi kontrol kabini 3D modeli",
    type: "3d",
    size: "8.7 MB",
    date: "2024-11-04",
    category: "CR Serisi (Endüstriyel işbirliği)",
    tags: ["İşbirlikçi Robotlar", "3D Modeli"],
  },
]

// Filter categories matching the screenshot
const filterCategories = {
  "Endüstriyel Robotlar": [
    "JR Serisi (Endüstriyel alt eksenli)",
    "JR Serisi (Kaynak)",
    "BR Serisi (Çift döndü)",
    "MD Serisi (Paketleme)",
    "SR Serisi (Dört Eksenli Planar)",
    "HC Serisi (Üçüt eksenli düzlemli)",
  ],
  "İşbirlikçi Robotlar": ["CO Serisi (İş Birliği)", "CR Serisi (Endüstriyel işbirliği)"],
  "Kompozit Robot": ["Kompozit Robot"],
  "Endüstriyel Yazılım": ["Endüstriyel Yazılım"],
  "Kontrol Sistemi": ["Kontrol kabini", "Sürmek", "Öğretim Koyası"],
  Kategoriler: ["Ürün Broşürü", "Kullanıcı Kılavuzu", "Seyahat analizi haritas", "3D Modeli", "HSR-Studio Yazılım"],
}

// Helper function to sanitize text to prevent XSS
const sanitizeText = (text: string): string => {
  return text.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")
}

export default function LibraryPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [filteredData, setFilteredData] = useState(libraryData)
  const [collapsedSections, setCollapsedSections] = useState<string[]>([])

  // Filter and search logic
  useEffect(() => {
    let filtered = libraryData

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
      )
    }

    // Apply category filters
    if (selectedFilters.length > 0) {
      filtered = filtered.filter(
        (item) =>
          selectedFilters.includes(item.category) || selectedFilters.some((filter) => item.tags.includes(filter)),
      )
    }

    setFilteredData(filtered)
    if (currentPage !== 1) {
      setCurrentPage(1)
    }
  }, [searchQuery, selectedFilters])

  // Pagination
  const totalPages = filteredData.length === 0 ? 1 : Math.ceil(filteredData.length / LIBRARY_CONFIG.ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * LIBRARY_CONFIG.ITEMS_PER_PAGE
  const endIndex = startIndex + LIBRARY_CONFIG.ITEMS_PER_PAGE
  const currentItems = filteredData.slice(startIndex, endIndex)

  const handleFilterChange = useCallback(
    (filter: string, checked: boolean) => {
      if (checked) {
        setSelectedFilters([...selectedFilters, filter])
      } else {
        setSelectedFilters(selectedFilters.filter((f) => f !== filter))
      }
    },
    [selectedFilters],
  )

  const clearFilters = () => {
    setSelectedFilters([])
    setSearchQuery("")
  }

  const handleDownload = (item: any) => {
    // Simulate download
    console.log(`Downloading: ${item.name}`)
  }

  const getFileIcon = (type: string) => {
    const fileType = fileTypes[type as keyof typeof fileTypes] || fileTypes.pdf
    const IconComponent = fileType.icon
    return <IconComponent className={`w-8 h-8 ${fileType.color.split(" ")[0]}`} />
  }

  const getFileTypeColor = (type: string) => {
    return fileTypes[type as keyof typeof fileTypes]?.color || fileTypes.pdf.color
  }

  // Sanitized search query for display
  const sanitizedSearchQuery = sanitizeText(searchQuery)

  const toggleSection = (section: string) => {
    setCollapsedSections((prev) => (prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <style jsx>{`
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
`}</style>
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Kütüphane</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">Robot dokümantasyonları, 3D modeller ve yazılımlar</p>

            {/* Search Bar */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20">
                <div className="relative">
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <div className="relative flex-1 min-w-0">
                      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
                      <Input
                        type="text"
                        placeholder="Robot modeli, döküman türü veya kategori arayın..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyPress={(e) => {
                          if (e.key === "Enter") {
                            e.currentTarget.blur()
                          }
                        }}
                        className="w-full pl-12 pr-4 py-3 md:py-4 text-sm md:text-base rounded-xl border-0 shadow-lg focus:ring-2 focus:ring-white/30 bg-white/95 backdrop-blur-sm placeholder:text-gray-500 text-gray-900"
                      />
                    </div>
                    <div className="flex gap-2 shrink-0">
                      <Button
                        onClick={() => {
                          const searchInput = document.querySelector('input[type="text"]') as HTMLInputElement
                          if (searchInput) {
                            searchInput.focus()
                            searchInput.blur()
                          }
                        }}
                        className="bg-white text-blue-600 hover:bg-gray-50 hover:text-blue-700 px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold shadow-lg transition-all duration-200 hover:shadow-xl text-sm md:text-base whitespace-nowrap"
                      >
                        <Search className="w-4 h-4 mr-2" />
                        Ara
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden">
              <Button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                variant="outline"
                className="w-full flex items-center justify-center space-x-2"
              >
                <Filter className="w-4 h-4" />
                <span>Filtreler</span>
                {selectedFilters.length > 0 && (
                  <Badge variant="secondary" className="ml-2">
                    {selectedFilters.length}
                  </Badge>
                )}
              </Button>
            </div>

            {/* Filters Sidebar - Fixed z-index and positioning for mobile */}
            <div
              className={`lg:w-80 ${isFilterOpen ? "block fixed inset-x-4 top-24 z-[60] lg:relative lg:inset-auto lg:top-auto" : "hidden lg:block"}`}
            >
              <Card className="p-6 sticky top-32 z-[40]">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-800">Filtreler</h3>
                  {selectedFilters.length > 0 && (
                    <Button
                      onClick={clearFilters}
                      variant="ghost"
                      size="sm"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      Temizle
                    </Button>
                  )}
                </div>

                {/* Active Filters */}
                {selectedFilters.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-700 mb-3">Aktif Filtreler:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedFilters.map((filter) => (
                        <Badge
                          key={filter}
                          variant="secondary"
                          className="flex items-center space-x-1 cursor-pointer hover:bg-gray-200"
                          onClick={() => handleFilterChange(filter, false)}
                        >
                          <span>{filter}</span>
                          <X className="w-3 h-3" />
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Filter Categories */}
                <div className="space-y-4">
                  {Object.entries(filterCategories).map(([category, items]) => (
                    <div key={category} className="border border-gray-200 rounded-lg">
                      <button
                        onClick={() => toggleSection(category)}
                        className="w-full flex items-center justify-between p-3 text-left hover:bg-gray-50 transition-colors"
                      >
                        <h4 className="font-medium text-gray-800">{category}</h4>
                        <ChevronRight
                          className={`w-4 h-4 text-gray-500 transition-transform ${
                            collapsedSections.includes(category) ? "" : "rotate-90"
                          }`}
                        />
                      </button>
                      {!collapsedSections.includes(category) && (
                        <div className="px-3 pb-3 space-y-2">
                          {items.map((item) => (
                            <div key={item} className="flex items-center space-x-2">
                              <Checkbox
                                id={item}
                                checked={selectedFilters.includes(item)}
                                onCheckedChange={(checked) => handleFilterChange(item, checked as boolean)}
                              />
                              <label
                                htmlFor={item}
                                className="text-sm text-gray-600 cursor-pointer hover:text-gray-800"
                              >
                                {item}
                              </label>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </Card>
              {/* Overlay for mobile filter */}
              {isFilterOpen && (
                <div
                  className="fixed inset-0 bg-black/50 z-[50] lg:hidden"
                  onClick={() => setIsFilterOpen(false)}
                  aria-hidden="true"
                ></div>
              )}
            </div>

            {/* Results */}
            <div className="flex-1">
              {/* Results Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="text-gray-600">
                  <span className="font-medium">{filteredData.length}</span> sonuç bulundu
                  {searchQuery && (
                    <span className="ml-2">
                      "<span className="font-medium" dangerouslySetInnerHTML={{ __html: sanitizedSearchQuery }}></span>"
                      için
                    </span>
                  )}
                </div>
              </div>

              {/* Results List */}
              <div className="space-y-4">
                {currentItems.map((item) => (
                  <Card key={item.id} className="p-4 hover:shadow-lg transition-shadow duration-200">
                    <div className="flex items-start space-x-4">
                      {/* File Icon */}
                      <div className={`p-2 rounded-lg ${getFileTypeColor(item.type).split(" ")[1]} shrink-0`}>
                        {getFileIcon(item.type)}
                      </div>

                      {/* File Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-medium text-gray-800 mb-2 line-clamp-2 leading-tight">
                          {item.name.length > 80 ? `${item.name.substring(0, 80)}...` : item.name}
                        </h3>

                        <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-3">
                          <div className="flex items-center space-x-1">
                            <HardDrive className="w-3 h-3" />
                            <span>{item.size}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3" />
                            <span>{item.date}</span>
                          </div>
                        </div>

                        {/* Scrollable Tags */}
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="text-xs shrink-0">
                            {item.category.length > 25 ? `${item.category.substring(0, 25)}...` : item.category}
                          </Badge>
                          <div className="flex-1 overflow-hidden">
                            <div
                              className="flex gap-2 overflow-x-auto scrollbar-hide pb-1"
                              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                            >
                              {item.tags.map((tag) => (
                                <Badge key={tag} variant="secondary" className="text-xs whitespace-nowrap shrink-0">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Download Button */}
                      <Button
                        onClick={() => handleDownload(item)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg flex items-center space-x-2 shrink-0 text-sm"
                      >
                        <Download className="w-4 h-4" />
                        <span className="hidden sm:inline">İndir</span>
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center space-x-2 mt-8">
                  <Button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    variant="outline"
                    size="sm"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>

                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNum
                    if (totalPages <= 5) {
                      pageNum = i + 1
                    } else if (currentPage <= 3) {
                      pageNum = i + 1
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i
                    } else {
                      pageNum = currentPage - 2 + i
                    }

                    return (
                      <Button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        variant={currentPage === pageNum ? "default" : "outline"}
                        size="sm"
                        className={currentPage === pageNum ? "bg-blue-600 text-white" : ""}
                      >
                        {pageNum}
                      </Button>
                    )
                  })}

                  {totalPages > 5 && currentPage < totalPages - 2 && (
                    <>
                      <span className="text-gray-500">...</span>
                      <Button onClick={() => setCurrentPage(totalPages)} variant="outline" size="sm">
                        {totalPages}
                      </Button>
                    </>
                  )}

                  <Button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    variant="outline"
                    size="sm"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>

                  <div className="hidden sm:flex items-center space-x-2 ml-4">
                    <span className="text-sm text-gray-500">Sayfa</span>
                    <Button variant="ghost" size="sm" className="text-blue-600">
                      Tamamı
                    </Button>
                  </div>
                </div>
              )}

              {/* No Results */}
              {filteredData.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-gray-400 mb-4">
                    <Search className="w-16 h-16 mx-auto" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Sonuç bulunamadı</h3>
                  <p className="text-gray-600 mb-4">
                    Arama kriterlerinizi değiştirmeyi veya filtreleri temizlemeyi deneyin.
                  </p>
                  <Button onClick={clearFilters} variant="outline">
                    Filtreleri Temizle
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
