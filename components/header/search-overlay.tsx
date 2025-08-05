"use client"

import { Search, X } from "lucide-react"
import { useState, useEffect, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"

interface SearchOverlayProps {
  isSearchOpen: boolean
  searchQuery: string
  t: {
    search: {
      placeholder: string
      close: string
    }
  }
  setIsSearchOpen: (open: boolean) => void
  setSearchQuery: (query: string) => void
}

// Ürün verileri - gerçek projede bu API'den gelecek
const productData = [
  {
    id: 1,
    model: "HRB-0603C-670",
    payload: "3kg",
    reach: "670mm",
    image:
      "https://omo-oss-image.thefastimg.com/portal-saas/pg2024072219142686656/cms/image/38c5a918-a016-4e96-be44-819b87464da0.png",
    category: "Endüstriyel Robot",
    href: "/products/hrb-0603c-670",
  },
  {
    id: 2,
    model: "HRB-0607-770",
    payload: "7kg",
    reach: "770mm",
    image:
      "https://omo-oss-image.thefastimg.com/portal-saas/pg2024072219142686656/cms/image/1a015a30-d31c-4353-9057-2dc06d7c27fc.png",
    category: "Endüstriyel Robot",
    href: "/products/hrb-0607-770",
  },
  {
    id: 3,
    model: "HRB-0607-900",
    payload: "7kg",
    reach: "900mm",
    image:
      "https://omo-oss-image.thefastimg.com/portal-saas/pg2024072219142686656/cms/image/2ad5de6b-3f1e-4d21-ac25-e2123a9b293f.png",
    category: "Endüstriyel Robot",
    href: "/products/hrb-0607-900",
  },
  {
    id: 4,
    model: "HRB-0612-1100",
    payload: "12kg",
    reach: "1100mm",
    image:
      "https://omo-oss-image.thefastimg.com/portal-saas/pg2024072219142686656/cms/image/31f0c60c-da19-4653-8ddf-547233e5f17c.png",
    category: "Endüstriyel Robot",
    href: "/products/hrb-0612-1100",
  },
  {
    id: 5,
    model: "HRB-0615-1300",
    payload: "15kg",
    reach: "1300mm",
    image:
      "https://omo-oss-image.thefastimg.com/portal-saas/pg2024072219142686656/cms/image/858bc62d-74c4-49f3-be26-614c38d8bb81.png",
    category: "Endüstriyel Robot",
    href: "/products/hrb-0615-1300",
  },
  {
    id: 6,
    model: "HRB-0620-1600",
    payload: "20kg",
    reach: "1600mm",
    image:
      "https://omo-oss-image.thefastimg.com/portal-saas/pg2024072219142686656/cms/image/38c5a918-a016-4e96-be44-819b87464da0.png",
    category: "Endüstriyel Robot",
    href: "/products/hrb-0620-1600",
  },
  {
    id: 7,
    model: "HRC-0507-750",
    payload: "7kg",
    reach: "750mm",
    image:
      "https://omo-oss-image.thefastimg.com/portal-saas/pg2024072219142686656/cms/image/2ad5de6b-3f1e-4d21-ac25-e2123a9b293f.png",
    category: "İşbirlikçi Robot",
    href: "/products/hrc-0507-750",
  },
  {
    id: 8,
    model: "HRC-0710-900",
    payload: "10kg",
    reach: "900mm",
    image:
      "https://omo-oss-image.thefastimg.com/portal-saas/pg2024072219142686656/cms/image/31f0c60c-da19-4653-8ddf-547233e5f17c.png",
    category: "İşbirlikçi Robot",
    href: "/products/hrc-0710-900",
  },
  {
    id: 9,
    model: "HRC-1012-1200",
    payload: "12kg",
    reach: "1200mm",
    image:
      "https://omo-oss-image.thefastimg.com/portal-saas/pg2024072219142686656/cms/image/858bc62d-74c4-49f3-be26-614c38d8bb81.png",
    category: "İşbirlikçi Robot",
    href: "/products/hrc-1012-1200",
  },
  {
    id: 10,
    model: "HRC-1215-1500",
    payload: "15kg",
    reach: "1500mm",
    image:
      "https://omo-oss-image.thefastimg.com/portal-saas/pg2024072219142686656/cms/image/38c5a918-a016-4e96-be44-819b87464da0.png",
    category: "İşbirlikçi Robot",
    href: "/products/hrc-1215-1500",
  },
  {
    id: 11,
    model: "HRC-Mobile-AGV",
    payload: "50kg",
    reach: "Mobil",
    image:
      "https://omo-oss-image.thefastimg.com/portal-saas/pg2024072219142686656/cms/image/1a015a30-d31c-4353-9057-2dc06d7c27fc.png",
    category: "İşbirlikçi Robot",
    href: "/products/hrc-mobile-agv",
  },
  {
    id: 12,
    model: "HRC-0305-500",
    payload: "5kg",
    reach: "500mm",
    image:
      "https://omo-oss-image.thefastimg.com/portal-saas/pg2024072219142686656/cms/image/1a015a30-d31c-4353-9057-2dc06d7c27fc.png",
    category: "İşbirlikçi Robot",
    href: "/products/hrc-0305-500",
  },
]

export default function SearchOverlay({
  isSearchOpen,
  searchQuery,
  t,
  setIsSearchOpen,
  setSearchQuery,
}: SearchOverlayProps) {
  const [debouncedQuery, setDebouncedQuery] = useState("")

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery)
    }, 300)

    return () => clearTimeout(timer)
  }, [searchQuery])

  // Filter products based on search query
  const filteredProducts = useMemo(() => {
    if (!debouncedQuery.trim()) return []

    const query = debouncedQuery.toLowerCase()
    return productData
      .filter(
        (product) =>
          product.model.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query) ||
          product.payload.toLowerCase().includes(query) ||
          product.reach.toLowerCase().includes(query),
      )
      .slice(0, 8) // Maksimum 8 sonuç göster
  }, [debouncedQuery])

  const handleProductClick = () => {
    setIsSearchOpen(false)
    setSearchQuery("")
  }

  return (
    <div
      className={`fixed inset-0 z-[150] bg-black/50 backdrop-blur-sm transition-all duration-300 ${
        isSearchOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div
        className={`absolute inset-x-0 top-0 bg-white shadow-2xl transition-all duration-500 ${
          isSearchOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Ürün Arama</h2>
            <button
              onClick={() => setIsSearchOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
            <input
              type="text"
              placeholder="Robot modeli, kategori veya özellik ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
              autoFocus
            />
          </div>

          {/* Arama Sonuçları */}
          {searchQuery.trim() && (
            <div className="bg-gray-50 rounded-xl p-4">
              {filteredProducts.length > 0 ? (
                <>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">Arama Sonuçları ({filteredProducts.length})</h3>
                    {filteredProducts.length === 8 && (
                      <span className="text-sm text-gray-500">İlk 8 sonuç gösteriliyor</span>
                    )}
                  </div>

                  {/* Responsive Grid Layout */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-96 overflow-y-auto">
                    {filteredProducts.map((product) => (
                      <Link
                        key={product.id}
                        href={product.href}
                        onClick={handleProductClick}
                        className="group bg-white rounded-lg p-4 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200"
                      >
                        <div className="flex items-center space-x-4">
                          {/* Ürün Thumbnail */}
                          <div className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
                            <Image
                              src={product.image || "/placeholder.svg"}
                              alt={product.model}
                              width={64}
                              height={64}
                              className="w-full h-full object-contain p-2"
                            />
                          </div>

                          {/* Ürün Bilgileri */}
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors truncate">
                              {product.model}
                            </h4>
                            <p className="text-sm text-gray-500 mb-1">{product.category}</p>
                            <div className="flex items-center space-x-3 text-xs text-gray-600">
                              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">{product.payload}</span>
                              <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded">{product.reach}</span>
                            </div>
                          </div>

                          {/* İncele Butonu */}
                          <div className="flex-shrink-0">
                            <span className="inline-flex items-center px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                              İncele
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Sonuç Bulunamadı</h3>
                  <p className="text-gray-600">
                    "{searchQuery}" için herhangi bir ürün bulunamadı. Farklı anahtar kelimeler deneyin.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Arama Önerileri */}
          {!searchQuery.trim() && (
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Popüler Aramalar</h3>
              <div className="flex flex-wrap gap-2">
                {["HRB", "HRC", "İşbirlikçi", "Endüstriyel", "6 Eksen", "Mobil"].map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => setSearchQuery(suggestion)}
                    className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:border-blue-300 hover:text-blue-600 transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
