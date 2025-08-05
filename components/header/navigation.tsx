"use client"

import type React from "react"

import { ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface NavigationProps {
  activeDropdown: string | null
  selectedMegaMenuItem: string | null
  isScrolled: boolean
  t: any
  megaMenuData: any
  handleDropdownEnter: (menu: string) => void
  handleDropdownLeave: () => void
  handleMegaMenuItemHover: (itemId: string) => void
  handleMegaMenuItemTouch: (itemId: string) => void
  closeMegaMenu: () => void
  handleKeyDown: (e: React.KeyboardEvent, menu: string) => void
  handleMenuItemKeyDown: (e: React.KeyboardEvent, itemId: string) => void
}

export default function Navigation({
  activeDropdown,
  selectedMegaMenuItem,
  isScrolled,
  t,
  megaMenuData,
  handleDropdownEnter,
  handleDropdownLeave,
  handleMegaMenuItemHover,
  closeMegaMenu,
  handleKeyDown,
  handleMenuItemKeyDown,
}: NavigationProps) {
  // Solutions menu data is now correctly passed via megaMenuData.solutions
  const solutionsMenuData = megaMenuData.solutions

  return (
    <nav className="hidden lg:flex items-center space-x-8">
      {/* Products Dropdown */}
      <div
        className="relative group"
        onMouseEnter={() => handleDropdownEnter("products")}
        onMouseLeave={handleDropdownLeave}
      >
        <button
          className={`flex items-center space-x-1 transition-colors py-2 ${
            isScrolled ? "text-gray-800 hover:text-blue-600" : "text-white hover:text-blue-400"
          }`}
          aria-expanded={activeDropdown === "products"}
          aria-haspopup="true"
          role="button"
          aria-label="Products menu"
          onKeyDown={(e) => {
            handleKeyDown(e, "products")
            if (e.key === "Escape") closeMegaMenu()
          }}
        >
          <span>{t.nav.products}</span>
          <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
        </button>

        {/* Products Mega Menu */}
        <div
          className={`fixed inset-x-0 bg-white shadow-2xl border-t transition-all duration-300 z-[100] ${
            isScrolled ? "top-[64px]" : "top-[64px]"
          } ${
            activeDropdown === "products" ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"
          }`}
          role="menu"
          aria-labelledby="products-menu-button"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl overflow-hidden overflow-x-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5 min-h-[400px] lg:min-h-[500px] overflow-x-hidden">
              {/* Sol Panel - Ana Başlıklar */}
              <div className="lg:col-span-2 bg-gray-50 p-4 lg:p-6">
                <h3 className="text-base lg:text-lg font-semibold text-gray-800 mb-4">Ürün Kategorileri</h3>
                <div className="space-y-1">
                  {megaMenuData.products.map((category: any, index: number) => (
                    <button
                      key={category.id}
                      onMouseEnter={() => handleMegaMenuItemHover(category.id)}
                      className={`w-full text-left px-3 lg:px-4 py-2 lg:py-3 rounded-lg transition-all duration-200 ${
                        selectedMegaMenuItem === category.id
                          ? "bg-blue-600 text-white shadow-md"
                          : "text-gray-700 hover:bg-white hover:shadow-sm"
                      }`}
                      role="menuitem"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        handleMenuItemKeyDown(e, category.id)
                      }}
                    >
                      <div className="font-medium text-sm lg:text-base">{category.title}</div>
                      <div
                        className={`text-xs lg:text-sm mt-1 ${
                          selectedMegaMenuItem === category.id ? "text-blue-100" : "text-gray-500"
                        }`}
                      >
                        {category.subItems.length} ürün kategorisi
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Sağ Panel - Alt Başlıklar Grid */}
              <div className="lg:col-span-3 p-4 lg:p-6 overflow-hidden overflow-x-hidden">
                {(() => {
                  const selectedCategory = megaMenuData.products.find((cat: any) => cat.id === selectedMegaMenuItem)
                  if (!selectedCategory) return null

                  return (
                    <div className="h-full">
                      <h4 className="text-lg lg:text-xl font-bold text-gray-800 mb-4 lg:mb-6">
                        {selectedCategory.title}
                      </h4>
                      <div className="grid grid-cols-1 gap-2 lg:gap-3 max-h-[300px] lg:max-h-[400px] overflow-y-auto overflow-x-hidden">
                        {selectedCategory.subItems.slice(0, 10).map((item: any, index: number) => (
                          <Link
                            key={index}
                            href={item.href}
                            className="group flex items-center bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 overflow-hidden p-3 space-x-3"
                            role="menuitem"
                            aria-label={item.title}
                          >
                            <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                              <Image
                                src={item.image || "/placeholder.svg"}
                                alt={item.title}
                                width={48}
                                height={48}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h5 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors text-sm leading-tight truncate">
                                {item.title}
                              </h5>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )
                })()}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Dropdown */}
      <div
        className="relative group"
        onMouseEnter={() => handleDropdownEnter("solutions")}
        onMouseLeave={handleDropdownLeave}
      >
        <button
          className={`flex items-center space-x-1 transition-colors py-2 ${
            isScrolled ? "text-gray-800 hover:text-blue-600" : "text-white hover:text-blue-400"
          }`}
          aria-expanded={activeDropdown === "solutions"}
          aria-haspopup="true"
          role="button"
          aria-label="Solutions menu"
          onKeyDown={(e) => {
            handleKeyDown(e, "solutions")
            if (e.key === "Escape") closeMegaMenu()
          }}
        >
          <span>{t.nav.solutions}</span>
          <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
        </button>

        {/* Solutions Mega Menu */}
        <div
          className={`fixed inset-x-0 bg-white shadow-2xl border-t transition-all duration-300 z-[100] ${
            isScrolled ? "top-[64px]" : "top-[64px]"
          } ${
            activeDropdown === "solutions" ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"
          }`}
          role="menu"
          aria-labelledby="solutions-menu-button"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl overflow-hidden overflow-x-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5 min-h-[400px] lg:min-h-[500px] overflow-x-hidden">
              {/* Sol Panel - Çözüm Kategorileri */}
              <div className="lg:col-span-2 bg-gray-50 p-4 lg:p-6">
                <h3 className="text-base lg:text-lg font-semibold text-gray-800 mb-4">Çözüm Kategorileri</h3>
                <div className="space-y-1">
                  {solutionsMenuData.map((category: any, index: number) => (
                    <button
                      key={category.id}
                      onMouseEnter={() => handleMegaMenuItemHover(category.id)}
                      className={`w-full text-left px-3 lg:px-4 py-2 lg:py-3 rounded-lg transition-all duration-200 ${
                        selectedMegaMenuItem === category.id
                          ? "bg-blue-600 text-white shadow-md"
                          : "text-gray-700 hover:bg-white hover:shadow-sm"
                      }`}
                      role="menuitem"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        handleMenuItemKeyDown(e, category.id)
                      }}
                    >
                      <div className="font-medium text-sm lg:text-base">{category.title}</div>
                      <div
                        className={`text-xs lg:text-sm mt-1 ${
                          selectedMegaMenuItem === category.id ? "text-blue-100" : "text-gray-500"
                        }`}
                      >
                        {category.subItems.length} çözüm alanı
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Sağ Panel - Çözüm Alt Başlıkları */}
              <div className="lg:col-span-3 p-4 lg:p-6 overflow-hidden overflow-x-hidden">
                {(() => {
                  const selectedCategory = solutionsMenuData.find((cat: any) => cat.id === selectedMegaMenuItem)
                  if (!selectedCategory) return null

                  return (
                    <div className="h-full">
                      <h4 className="text-lg lg:text-xl font-bold text-gray-800 mb-4 lg:mb-6">
                        {selectedCategory.title}
                      </h4>
                      <div className="grid grid-cols-1 gap-2 lg:gap-3 max-h-[300px] lg:max-h-[400px] overflow-y-auto overflow-x-hidden">
                        {selectedCategory.subItems.map((item: any, index: number) => (
                          <Link
                            key={index}
                            href={item.href}
                            className="group flex items-center bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 overflow-hidden p-3 space-x-3"
                            role="menuitem"
                            aria-label={item.title}
                          >
                            <div className="flex-1 min-w-0">
                              <h5 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors text-sm leading-tight truncate">
                                {item.title}
                              </h5>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )
                })()}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Link
        href="/support"
        className={`transition-colors ${
          isScrolled ? "text-gray-800 hover:text-blue-600" : "text-white hover:text-blue-400"
        }`}
      >
        {t.nav.support}
      </Link>
      <Link
        href="/library"
        className={`transition-colors ${
          isScrolled ? "text-gray-800 hover:text-blue-600" : "text-white hover:text-blue-400"
        }`}
      >
        {t.nav.library}
      </Link>
      <Link
        href="/about"
        className={`transition-colors ${
          isScrolled ? "text-gray-800 hover:text-blue-600" : "text-white hover:text-blue-400"
        }`}
      >
        {t.nav.about}
      </Link>
      <Link
        href="/haberler"
        className={`transition-colors ${
          isScrolled ? "text-gray-800 hover:text-blue-600" : "text-white hover:text-blue-400"
        }`}
      >
        {t.nav.news}
      </Link>
    </nav>
  )
}
