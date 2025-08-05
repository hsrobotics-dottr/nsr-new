"use client"

import ContactButton from "@/components/header/contact-button"
import LanguageSelector from "@/components/header/language-selector"
import Navigation from "@/components/header/navigation"
import SearchOverlay from "@/components/header/search-overlay"
import { megaMenuData, useHeader } from "@/hooks/use-header"
import { useMobileMenu } from "@/hooks/use-mobile-menu"
import { ArrowLeft, ChevronDown, ChevronRight, Globe, Menu, Search, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
  const {
    // States
    currentLang,
    isSearchOpen,
    isLanguageOpen,
    isContactOpen,
    isContactFormOpen,
    activeDropdown,
    selectedMegaMenuItem,
    searchQuery,
    isScrolled,
    contactForm,
    t,
    languages,

    // Setters
    setCurrentLang,
    setIsSearchOpen,
    setIsLanguageOpen,
    setIsContactOpen,
    setIsContactFormOpen,
    setSearchQuery,
    setContactForm,

    // Handlers
    handleDropdownEnter,
    handleDropdownLeave,
    handleMegaMenuItemHover,
    handleMegaMenuItemTouch,
    handleContactSubmit,
    closeMegaMenu,
    handleKeyDown,
    handleMenuItemKeyDown,
  } = useHeader()

  const {
    isMobileMenuOpen,
    mobileDropdowns,
    activeMobileCategory,
    mobileSubMenuOpen,
    toggleMobileMenu,
    toggleMobileDropdown,
    handleMobileMenuItemClick,
    openMobileSubMenu,
    closeMobileSubMenu,
  } = useMobileMenu()

  return (
    <>
      {/* Header */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200" : "bg-gray-900"
        }`}
      >
        <div className="container mx-auto px-4 py-3 max-w-7xl">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <span className={`text-xl font-bold transition-colors ${isScrolled ? "text-gray-800" : "text-white"}`}>
                Huashu Robotik
              </span>
            </Link>

            {/* Desktop Navigation */}
            <Navigation
              activeDropdown={activeDropdown}
              selectedMegaMenuItem={selectedMegaMenuItem}
              isScrolled={isScrolled}
              t={t}
              megaMenuData={megaMenuData}
              handleDropdownEnter={handleDropdownEnter}
              handleDropdownLeave={handleDropdownLeave}
              handleMegaMenuItemHover={handleMegaMenuItemHover}
              handleMegaMenuItemTouch={handleMegaMenuItemTouch}
              closeMegaMenu={closeMegaMenu}
              handleKeyDown={handleKeyDown}
              handleMenuItemKeyDown={handleMenuItemKeyDown}
            />

            {/* Right Side Controls */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsSearchOpen(true)}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  isScrolled
                    ? "text-gray-800 hover:text-blue-600 hover:bg-gray-100"
                    : "text-white hover:text-blue-400 hover:bg-gray-800"
                }`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              <button
                onClick={() => setIsLanguageOpen(true)}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  isScrolled
                    ? "text-gray-800 hover:text-blue-600 hover:bg-gray-100"
                    : "text-white hover:text-blue-400 hover:bg-gray-800"
                }`}
                aria-label="Language selection"
              >
                <Globe className="w-5 h-5" />
              </button>

              <button
                onClick={toggleMobileMenu}
                className={`lg:hidden p-2 transition-colors ${
                  isScrolled ? "text-gray-800 hover:text-blue-600" : "text-white hover:text-blue-400"
                }`}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Popup */}
      <div
        className={`lg:hidden fixed inset-0 z-[200] transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={toggleMobileMenu} />

        {/* Menu Content */}
        <div
          className={`relative w-full h-full bg-white flex flex-col transition-all duration-500 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Fixed Header */}
          <div className="flex-shrink-0 flex items-center justify-between p-4 border-b border-gray-200 bg-gray-900">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="text-lg font-bold text-white">Huashu Robotik</span>
            </div>
            <button onClick={toggleMobileMenu} className="p-2 text-white hover:text-blue-400 transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-hidden">
            {!mobileSubMenuOpen ? (
              // Ana Menü
              <div className="h-full overflow-y-auto">
                <div className="p-4 space-y-2 pb-8">
                  {/* Products */}
                  <div>
                    <button
                      onClick={() => toggleMobileDropdown("products")}
                      className="flex items-center justify-between w-full py-4 text-gray-800 hover:text-blue-600 transition-colors border-b border-gray-100"
                    >
                      <span className="text-lg font-medium">{t.nav.products}</span>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${mobileDropdowns.products ? "rotate-180" : ""}`}
                      />
                    </button>

                    {mobileDropdowns.products && (
                      <div className="mt-4 space-y-2">
                        {megaMenuData.products.map((category: any) => (
                          <button
                            key={category.id}
                            onClick={() => openMobileSubMenu(category.id)}
                            className="flex items-center justify-between w-full py-3 px-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                          >
                            <div className="text-left">
                              <div className="font-medium text-gray-800">
                                {currentLang === "en" ? category.titleEn : category.title}
                              </div>
                              <div className="text-sm text-gray-500">{category.subItems.length} ürün</div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Solutions */}
                  <div>
                    <button
                      onClick={() => toggleMobileDropdown("solutions")}
                      className="flex items-center justify-between w-full py-4 text-gray-800 hover:text-blue-600 transition-colors border-b border-gray-100"
                    >
                      <span className="text-lg font-medium">{t.nav.solutions}</span>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${mobileDropdowns.solutions ? "rotate-180" : ""}`}
                      />
                    </button>

                    {mobileDropdowns.solutions && (
                      <div className="mt-4 space-y-2">
                        {megaMenuData.solutions.map((category: any) => (
                          <button
                            key={category.id}
                            onClick={() => openMobileSubMenu(category.id)}
                            className="flex items-center justify-between w-full py-3 px-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                          >
                            <div className="text-left">
                              <div className="font-medium text-gray-800">
                                {currentLang === "en" ? category.titleEn : category.title}
                              </div>
                              <div className="text-sm text-gray-500">{category.subItems.length} çözüm</div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Other Menu Items */}
                  <Link
                    href="/endustriler"
                    className="block py-4 text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors border-b border-gray-100"
                    onClick={handleMobileMenuItemClick}
                  >
                    Endüstriler
                  </Link>
                  <Link
                    href="/support"
                    className="block py-4 text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors border-b border-gray-100"
                    onClick={handleMobileMenuItemClick}
                  >
                    {t.nav.support}
                  </Link>
                  <Link
                    href="/library"
                    className="block py-4 text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors border-b border-gray-100"
                    onClick={handleMobileMenuItemClick}
                  >
                    {t.nav.library}
                  </Link>
                  <Link
                    href="/about"
                    className="block py-4 text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors border-b border-gray-100"
                    onClick={handleMobileMenuItemClick}
                  >
                    {t.nav.about}
                  </Link>
                  <Link
                    href="#"
                    className="block py-4 text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors border-b border-gray-100"
                    onClick={handleMobileMenuItemClick}
                  >
                    {t.nav.news}
                  </Link>
                </div>
              </div>
            ) : (
              // Alt Menü (Ürün Listesi)
              <div className="h-full flex flex-col">
                {/* Fixed Sub Menu Header */}
                <div className="flex-shrink-0 flex items-center p-4 border-b border-gray-200 bg-gray-50">
                  <button
                    onClick={closeMobileSubMenu}
                    className="p-2 mr-3 hover:bg-gray-200 rounded-lg transition-colors"
                  >
                    <ArrowLeft className="w-5 h-5 text-gray-600" />
                  </button>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {(() => {
                        const category = [...megaMenuData.products, ...megaMenuData.solutions].find(
                          (cat: any) => cat.id === activeMobileCategory,
                        )
                        return currentLang === "en" ? category?.titleEn || "" : category?.title || ""
                      })()}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {(() => {
                        const category = [...megaMenuData.products, ...megaMenuData.solutions].find(
                          (cat: any) => cat.id === activeMobileCategory,
                        )
                        return `${category?.subItems.length || 0} ürün`
                      })()}
                    </p>
                  </div>
                </div>

                {/* Scrollable Products Grid */}
                <div className="flex-1 overflow-y-auto">
                  <div className="p-4 pb-8">
                    <div className="grid grid-cols-2 gap-4">
                      {(() => {
                        const category = [...megaMenuData.products, ...megaMenuData.solutions].find(
                          (cat: any) => cat.id === activeMobileCategory,
                        )
                        return (
                          category?.subItems.map((item: any, index: number) => (
                            <Link
                              key={index}
                              href={item.href}
                              onClick={handleMobileMenuItemClick}
                              className="group bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 overflow-hidden"
                            >
                              <div className="aspect-square bg-gray-50 overflow-hidden">
                                <Image
                                  src={item.image || "/placeholder.svg"}
                                  alt={currentLang === "en" ? item.titleEn : item.title}
                                  width={200}
                                  height={200}
                                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                              <div className="p-3">
                                <h4 className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors text-sm leading-tight">
                                  {currentLang === "en" ? item.titleEn : item.title}
                                </h4>
                              </div>
                            </Link>
                          )) || []
                        )
                      })()}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Search Overlay Component */}
      <SearchOverlay
        isSearchOpen={isSearchOpen}
        searchQuery={searchQuery}
        t={t}
        setIsSearchOpen={setIsSearchOpen}
        setSearchQuery={setSearchQuery}
      />

      {/* Language Selector Component */}
      <LanguageSelector
        isLanguageOpen={isLanguageOpen}
        currentLang={currentLang}
        languages={languages}
        t={t}
        setIsLanguageOpen={setIsLanguageOpen}
        setCurrentLang={setCurrentLang}
      />

      {/* Contact Button Component */}
      <ContactButton
        isContactOpen={isContactOpen}
        isContactFormOpen={isContactFormOpen}
        contactForm={contactForm}
        t={t}
        setIsContactOpen={setIsContactOpen}
        setIsContactFormOpen={setIsContactFormOpen}
        setContactForm={setContactForm}
        handleContactSubmit={handleContactSubmit}
      />
    </>
  )
}
