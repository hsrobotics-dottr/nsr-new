"use client"

import type React from "react"

import { useLanguage } from "@/contexts/language-context"
import { useCallback, useEffect, useState } from "react"

interface ContactForm {
  name: string
  email: string
  phone: string
  message: string
}

const translations = {
  tr: {
    nav: {
      products: "Ürünler",
      solutions: "Çözümler",
      support: "Destek",
      library: "Kütüphane",
      about: "Hakkımızda",
      news: "Haberler",
    },
    search: {
      placeholder: "Arama yapın...",
      noResults: "Sonuç bulunamadı",
      searchResults: "Arama Sonuçları",
    },
    language: {
      select: "Dil Seçin",
      turkish: "Türkçe",
      english: "English",
    },
    contact: {
      title: "İletişim",
      getQuote: "Teklif Al",
      form: {
        name: "Ad Soyad",
        email: "E-posta",
        phone: "Telefon",
        message: "Mesaj",
        send: "Gönder",
        namePlaceholder: "Adınızı ve soyadınızı girin",
        emailPlaceholder: "E-posta adresinizi girin",
        phonePlaceholder: "Telefon numaranızı girin",
        messagePlaceholder: "Mesajınızı yazın...",
      },
    },
  },
  en: {
    nav: {
      products: "Products",
      solutions: "Solutions",
      support: "Support",
      library: "Library",
      about: "About",
      news: "News",
    },
    search: {
      placeholder: "Search...",
      noResults: "No results found",
      searchResults: "Search Results",
    },
    language: {
      select: "Select Language",
      turkish: "Türkçe",
      english: "English",
    },
    contact: {
      title: "Contact",
      getQuote: "Get Quote",
      form: {
        name: "Full Name",
        email: "Email",
        phone: "Phone",
        message: "Message",
        send: "Send",
        namePlaceholder: "Enter your full name",
        emailPlaceholder: "Enter your email address",
        phonePlaceholder: "Enter your phone number",
        messagePlaceholder: "Write your message...",
      },
    },
  },
}

export const megaMenuData = {
  products: [
    {
      id: "endustriyel-robotlar",
      title: "Endüstriyel Robotlar",
      titleEn: "Industrial Robots",
      subItems: [
        {
          title: "JR Serisi",
          titleEn: "JR Series",
          href: "/products/jr-serisi",
          image:
            "https://omo-oss-image.thefastimg.com/portal-saas/pg2024072219142686656/cms/image/38c5a918-a016-4e96-be44-819b87464da0.png",
        },
        {
          title: "JH Serisi",
          titleEn: "JH Series",
          href: "/products/jh-serisi",
          image:
            "https://omo-oss-image.thefastimg.com/portal-saas/pg2024072219142686656/cms/image/1a015a30-d31c-4353-9057-2dc06d7c27fc.png",
        },
        {
          title: "BR Serisi",
          titleEn: "BR Series",
          href: "/products/br-serisi",
          image:
            "https://omo-oss-image.thefastimg.com/portal-saas/pg2024072219142686656/cms/image/2ad5de6b-3f1e-4d21-ac25-e2123a9b293f.png",
        },
        {
          title: "SR Serisi",
          titleEn: "SR Series",
          href: "/products/sr-serisi",
          image:
            "https://omo-oss-image.thefastimg.com/portal-saas/pg2024072219142686656/cms/image/31f0c60c-da19-4653-8ddf-547233e5f17c.png",
        },
        {
          title: "MD Serisi",
          titleEn: "MD Series",
          href: "/products/md-serisi",
          image:
            "https://omo-oss-image.thefastimg.com/portal-saas/pg2024072219142686656/cms/image/858bc62d-74c4-49f3-be26-614c38d8bb81.png",
        },
        {
          title: "HC Serisi",
          titleEn: "HC Series",
          href: "/products/hc-serisi",
          image:
            "https://omo-oss-image.thefastimg.com/portal-saas/pg2024072219142686656/cms/image/38c5a918-a016-4e96-be44-819b87464da0.png",
        },
      ],
    },
    {
      id: "isbirlikci-robot",
      title: "İşbirlikçi Robot",
      titleEn: "Collaborative Robot",
      subItems: [
        {
          title: "CR Serisi",
          titleEn: "CR Series",
          href: "/products/cr-serisi",
          image:
            "https://omo-oss-image.thefastimg.com/portal-saas/pg2024072219142686656/cms/image/2ad5de6b-3f1e-4d21-ac25-e2123a9b293f.png",
        },
        {
          title: "CO Serisi",
          titleEn: "CO Series",
          href: "/products/co-serisi",
          image:
            "https://omo-oss-image.thefastimg.com/portal-saas/pg2024072219142686656/cms/image/31f0c60c-da19-4653-8ddf-547233e5f17c.png",
        },
      ],
    },
    {
      id: "kompozit-robotlar",
      title: "Kompozit Robotlar",
      titleEn: "Composite Robots",
      subItems: [
        {
          title: "Kompozit Robot",
          titleEn: "Composite Robot",
          href: "/products/kompozit-robot",
          image:
            "https://omo-oss-image.thefastimg.com/portal-saas/pg2024072219142686656/cms/image/858bc62d-74c4-49f3-be26-614c38d8bb81.png",
        },
      ],
    },
    {
      id: "endustriyel-yazilim",
      title: "Endüstriyel Yazılım",
      titleEn: "Industrial Software",
      subItems: [
        {
          title: "Anne",
          titleEn: "Anne",
          href: "/products/anne",
          image:
            "https://omo-oss-image.thefastimg.com/portal-saas/pg2024072219142686656/cms/image/38c5a918-a016-4e96-be44-819b87464da0.png",
        },
        {
          title: "Dijital İkizler",
          titleEn: "Digital Twins",
          href: "/products/dijital-ikizler",
          image:
            "https://omo-oss-image.thefastimg.com/portal-saas/pg2024072219142686656/cms/image/1a015a30-d31c-4353-9057-2dc06d7c27fc.png",
        },
        {
          title: "Çevrimdışı Programlama",
          titleEn: "Offline Programming",
          href: "/products/cevrimdisi-programlama",
          image:
            "https://omo-oss-image.thefastimg.com/portal-saas/pg2024072219142686656/cms/image/2ad5de6b-3f1e-4d21-ac25-e2123a9b293f.png",
        },
      ],
    },
    {
      id: "cekirdek-bilesenler",
      title: "Çekirdek Bileşenler",
      titleEn: "Core Components",
      subItems: [
        {
          title: "Hareket Denetleyicisi",
          titleEn: "Motion Controller",
          href: "/products/hareket-denetleyicisi",
          image:
            "https://omo-oss-image.thefastimg.com/portal-saas/pg2024072219142686656/cms/image/31f0c60c-da19-4653-8ddf-547233e5f17c.png",
        },
        {
          title: "Servo Sürücü",
          titleEn: "Servo Drive",
          href: "/products/servo-surucu",
          image:
            "https://omo-oss-image.thefastimg.com/portal-saas/pg2024072219142686656/cms/image/858bc62d-74c4-49f3-be26-614c38d8bb81.png",
        },
        {
          title: "Servo Motor",
          titleEn: "Servo Motor",
          href: "/products/servo-motor",
          image:
            "https://omo-oss-image.thefastimg.com/portal-saas/pg2024072219142686656/cms/image/38c5a918-a016-4e96-be44-819b87464da0.png",
        },
      ],
    },
    {
      id: "ogretim-araci",
      title: "Öğretim Aracı",
      titleEn: "Teaching Tool",
      subItems: [
        {
          title: "Standart Çevre Ürünleri",
          titleEn: "Standard Peripheral Products",
          href: "/products/standart-cevre-urunleri",
          image:
            "https://omo-oss-image.thefastimg.com/portal-saas/pg2024072219142686656/cms/image/1a015a30-d31c-4353-9057-2dc06d7c27fc.png",
        },
        {
          title: "Plaka Değişim",
          titleEn: "Plate Exchange",
          href: "/products/plaka-degisim",
          image:
            "https://omo-oss-image.thefastimg.com/portal-saas/pg2024072219142686656/cms/image/2ad5de6b-3f1e-4d21-ac25-e2123a9b293f.png",
        },
        {
          title: "Yüzen Flaş",
          titleEn: "Floating Flash",
          href: "/products/yuzen-flas",
          image:
            "https://omo-oss-image.thefastimg.com/portal-saas/pg2024072219142686656/cms/image/31f0c60c-da19-4653-8ddf-547233e5f17c.png",
        },
      ],
    },
    {
      id: "kuvvet-kontrol-urunleri",
      title: "Kuvvet Kontrol Ürünleri",
      titleEn: "Force Control Products",
      subItems: [
        {
          title: "Parlatma Aletleri",
          titleEn: "Polishing Tools",
          href: "/products/parlatma-aletleri",
          image:
            "https://omo-oss-image.thefastimg.com/portal-saas/pg2024072219142686656/cms/image/858bc62d-74c4-49f3-be26-614c38d8bb81.png",
        },
      ],
    },
  ],
  solutions: [
    {
      id: "endustri-programi",
      title: "Endüstri Programı",
      titleEn: "Industry Program",
      subItems: [
        { title: "3C Endüstrisi", titleEn: "3C Industry", href: "/endustriler/3c" },
        { title: "Ayakkabı ve Giyim Endüstrisi", titleEn: "Footwear and Apparel Industry", href: "/endustriler/ayakkabi-giyim" },
        { title: "Otomobil Endüstrisi", titleEn: "Automotive Industry", href: "/endustriler/otomobil" },
        { title: "Ev Aletleri Endüstrisi", titleEn: "Home Appliances Industry", href: "/endustriler/ev-aletleri" },
        { title: "Metal İşleme Endüstrisi", titleEn: "Metal Processing Industry", href: "/endustriler/metal-isleme" },
        { title: "Diğer Endüstriler", titleEn: "Other Industries", href: "/endustriler/diger" },
      ],
    },
    {
      id: "surec-semasi",
      title: "Süreç Şeması",
      titleEn: "Process Schema",
      subItems: [
        { title: "Kaynak Uygulaması", titleEn: "Welding Application", href: "/solutions/kaynak-uygulamasi" },
        { title: "Uygulamayı Ele Alma", titleEn: "Handling Application", href: "/solutions/uygulama-ele-alma" },
        { title: "Montaj Uygulaması", titleEn: "Assembly Application", href: "/solutions/montaj-uygulamasi" },
        { title: "Makine Artı Uygulama", titleEn: "Machine Plus Application", href: "/solutions/makine-arti-uygulama" },
        { title: "Parlatma Uygulaması", titleEn: "Polishing Application", href: "/solutions/parlatma-uygulamasi" },
        {
          title: "Tutkal Kaplama Uygulaması",
          titleEn: "Glue Coating Application",
          href: "/solutions/tutkal-kaplama-uygulamasi",
        },
        { title: "Püskürtme Uygulaması", titleEn: "Spraying Application", href: "/solutions/puskurtme-uygulamasi" },
        { title: "Diğer Uygulamalar", titleEn: "Other Applications", href: "/solutions/diger-uygulamalar" },
      ],
    },
    {
      id: "dijital-cozumler",
      title: "Dijital Çözümler",
      titleEn: "Digital Solutions",
      subItems: [
        { title: "Genel Çözüm", titleEn: "General Solution", href: "/solutions/genel-cozum" },
        { title: "Dijital İkizler", titleEn: "Digital Twins", href: "/solutions/dijital-ikizler" },
        {
          title: "Çevrimdışı Programlama Yazılımı",
          titleEn: "Offline Programming Software",
          href: "/solutions/cevrimdisi-programlama-yazilimi",
        },
      ],
    },
  ],
}

export function useHeader() {
  const { currentLang, setCurrentLang } = useLanguage()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [selectedMegaMenuItem, setSelectedMegaMenuItem] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)
  const [contactForm, setContactForm] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const t = translations[currentLang]
  const languages = [
    { code: "tr", name: "Türkçe", flag: "🇹🇷" },
    { code: "en", name: "English", flag: "🇺🇸" },
  ]

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Dropdown handlers
  const handleDropdownEnter = useCallback(
    (menu: string) => {
      setActiveDropdown(menu)
      // Auto-hover for the first category when menu opens
      if (menu === "products" && megaMenuData.products.length > 0) {
        setSelectedMegaMenuItem(megaMenuData.products[0].id)
      } else if (menu === "solutions" && megaMenuData.solutions.length > 0) {
        setSelectedMegaMenuItem(megaMenuData.solutions[0].id)
      } else {
        setSelectedMegaMenuItem(null)
      }
    },
    [], // Dependencies are intentionally empty as megaMenuData is a constant
  )

  const handleDropdownLeave = useCallback(() => {
    setActiveDropdown(null)
    setSelectedMegaMenuItem(null)
  }, [])

  const handleMegaMenuItemHover = useCallback((itemId: string) => {
    setSelectedMegaMenuItem(itemId)
  }, [])

  const handleMegaMenuItemTouch = useCallback(
    (itemId: string) => {
      setSelectedMegaMenuItem(selectedMegaMenuItem === itemId ? null : itemId)
    },
    [selectedMegaMenuItem],
  )

  const closeMegaMenu = useCallback(() => {
    setActiveDropdown(null)
    setSelectedMegaMenuItem(null)
  }, [])

  // Keyboard handlers
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, menu: string) => {
      if (e.key === "Escape") {
        setActiveDropdown(null)
        setSelectedMegaMenuItem(null)
        setIsSearchOpen(false)
        setIsLanguageOpen(false)
        setIsContactOpen(false)
        setIsContactFormOpen(false)
      } else if ((e.key === "Enter" || e.key === " ") && activeDropdown !== menu) {
        e.preventDefault()
        setActiveDropdown(menu)
        // Auto-hover for the first category when menu opens via keyboard
        if (menu === "products" && megaMenuData.products.length > 0) {
          setSelectedMegaMenuItem(megaMenuData.products[0].id)
        } else if (menu === "solutions" && megaMenuData.solutions.length > 0) {
          setSelectedMegaMenuItem(megaMenuData.solutions[0].id)
        } else {
          setSelectedMegaMenuItem(null)
        }
      }
    },
    [activeDropdown],
  )

  const handleMenuItemKeyDown = useCallback((e: React.KeyboardEvent, itemId: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      // This action is for navigating to the item, not just setting hover.
      // The actual navigation would be handled by the Link component's href.
      // For accessibility, we ensure the item is selected for visual feedback.
      setSelectedMegaMenuItem(itemId)
    }
  }, [])

  // Contact form handler
  const handleContactSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      console.log("Contact form submitted:", contactForm)
      setIsContactFormOpen(false)
      setContactForm({ name: "", email: "", phone: "", message: "" })
    },
    [contactForm],
  )

  return {
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
  }
}
