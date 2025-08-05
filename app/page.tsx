"use client"

import type React from "react"
import { useState, useEffect, useRef, memo, useCallback, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ChevronLeft,
  ChevronRight,
  Shield,
  Zap,
  Settings,
  Eye,
  ThumbsUp,
  Award,
  ArrowRight,
  ExternalLink,
} from "lucide-react"
import dynamic from "next/dynamic"
import { useLanguage } from "@/contexts/language-context"

// Lazy load heavy components
const Header = dynamic(() => import("@/components/header"), {
  ssr: true,
  loading: () => <div className="h-20 bg-gray-900" />,
})

const Footer = dynamic(() => import("@/components/footer"), {
  ssr: false,
  loading: () => null,
})

const ScrollToTop = dynamic(() => import("@/components/scroll-to-top"), {
  ssr: false,
  loading: () => null,
})

// Page translations
const pageTranslations = {
  tr: {
    hero: {
      slides: [
        {
          title: "Endüstriyel İşbirlikçi Robotlar",
          subtitle: "Yüksek Hız, Yüksek Hassasiyet, Kararlı ve Güvenilir",
          description: "Güvenli ve Praktik",
        },
        {
          title: "Akıllı Otomasyon Çözümleri",
          subtitle: "Gelişmiş AI Teknolojisi ile Donatılmış",
          description: "Verimli ve Ekonomik",
        },
        {
          title: "Yeni Nesil Robot Teknolojisi",
          subtitle: "İnsan-Robot İşbirliği için Tasarlandı",
          description: "Esnek ve Güçlü",
        },
      ],
      buttons: {
        explore: "Ürünleri Keşfet",
        demo: "Demo İzle",
      },
    },
    productCenter: {
      title: "Ürün Merkezi",
      description:
        "Huashu endüstriyel robotları, hassas üretim teknolojisi, gelişmiş kontrol teknolojisi ve mükemmel performans ile çeşitli sektörlere verimli ve güvenilir otomasyon çözümleri sunarak işletmelerin akıllı üretim dönüşümünü destekler.",
    },
    industrialRobots: {
      title: "Endüstriyel Robotlar",
      subtitle: "Müşterilerimize insan-makine işbirliği çözümleri sunmaya odaklanıyoruz.",
      description:
        "Endüstriyel robotlar yüksek hassasiyet, yüksek hız ve yüksek güvenilirlik özelliklerine sahiptir. Otomotiv üretimi, elektronik montaj, metal işleme, gıda ambalajlama gibi alanlarda yaygın olarak kullanılır.",
      button: "Daha Fazla Bilgi",
      features: ["Güvenlik Sistemi", "Görsel Tanıma", "Akıllı Kontrol", "Hassas Üretim", "Güvenilir", "Yüksek Verim"],
    },
    productSeries: {
      title: "Robot Ürün Serimiz",
      description: "Endüstriyel ihtiyaçlarınıza uygun, farklı kapasitelerde robot çözümleri",
      specs: {
        payload: "Yük",
        reach: "Erişim",
        features: "Özellikler:",
        details: "Detayları İncele",
      },
      specialNeeds: {
        title: "Özel İhtiyaçlarınız mı Var?",
        description:
          "Standart ürünlerimizin yanında, özel gereksinimlerinize uygun robotik çözümler de geliştiriyoruz.",
        button: "Özel Çözüm Talep Et",
      },
    },
    collaborativeRobots: {
      title: "İşbirlikçi Robotlar",
      subtitle: "İnsan-robot işbirliği için güvenli ve akıllı çözümler",
      description:
        "İşbirlikçi robotlarımız, yüksek hassasiyet ve güvenlik standartlarıyla çeşitli endüstrilerde insan operatörlerle güvenli bir şekilde çalışabilir. Gelişmiş sensör teknolojisi ve yapay zeka destekli kontrol sistemleri ile üretim verimliliğinizi artırın.",
      seriesTitle: "İşbirlikçi Robot Serimiz",
      seriesDescription: "Güvenli insan-robot işbirliği için tasarlanmış akıllı çözümler",
      button: "Daha Fazla Bilgi",
    },
    solutions: {
      title: "Sektörel Çözümler",
      description: "Farklı sektörlerin özel ihtiyaçlarına yönelik robotik otomasyon çözümleri",
      sectors: [
        { title: "3C Sektörü", href: "/sectors/3c" },
        { title: "Otomotiv Sektörü", href: "/sectors/automotive" },
        { title: "Kaynak Sektörü", href: "/sectors/welding" },
        { title: "Beyaz Eşya Sektörü", href: "/sectors/appliances" },
        { title: "Metal İşleme Sektörü", href: "/sectors/metalworking" },
        { title: "Diğer Sektörler", href: "/sectors/others" },
      ],
      viewDetails: "Detayları İncele",
    },
    modal: {
      close: "Kapat",
      technicalSpecs: "Teknik Özellikler",
      features: "Özellikler",
      applications: "Uygulama Alanları",
      getQuote: "Fiyat Teklifi Al",
      downloadBrochure: "Broşür İndir",
      specs: {
        dof: "Serbestlik Derecesi",
        repeatability: "Tekrarlanabilirlik",
        maxSpeed: "Maksimum Hız",
        weight: "Ağırlık",
      },
    },
    contact: {
      title: "İletişim Formu",
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
    hero: {
      slides: [
        {
          title: "Industrial Collaborative Robots",
          subtitle: "High Speed, High Precision, Stable and Reliable",
          description: "Safe and Practical",
        },
        {
          title: "Smart Automation Solutions",
          subtitle: "Equipped with Advanced AI Technology",
          description: "Efficient and Economic",
        },
        {
          title: "Next Generation Robot Technology",
          subtitle: "Designed for Human-Robot Collaboration",
          description: "Flexible and Powerful",
        },
      ],
      buttons: {
        explore: "Explore Products",
        demo: "Watch Demo",
      },
    },
    productCenter: {
      title: "Product Center",
      description:
        "Huashu industrial robots support enterprises' smart manufacturing transformation by providing efficient and reliable automation solutions to various industries with precision manufacturing technology, advanced control technology and excellent performance.",
    },
    industrialRobots: {
      title: "Industrial Robots",
      subtitle: "We focus on providing human-machine collaboration solutions to our customers.",
      description:
        "Industrial robots have high precision, high speed and high reliability features. They are widely used in automotive manufacturing, electronic assembly, metal processing, food packaging and other fields.",
      button: "Learn More",
      features: [
        "Safety System",
        "Visual Recognition",
        "Smart Control",
        "Precision Manufacturing",
        "Reliable",
        "High Efficiency",
      ],
    },
    productSeries: {
      title: "Our Robot Product Series",
      description: "Robot solutions with different capacities suitable for your industrial needs",
      specs: {
        payload: "Payload",
        reach: "Reach",
        features: "Features:",
        details: "View Details",
      },
      specialNeeds: {
        title: "Do You Have Special Needs?",
        description:
          "In addition to our standard products, we also develop robotic solutions tailored to your special requirements.",
        button: "Request Custom Solution",
      },
    },
    collaborativeRobots: {
      title: "Collaborative Robots",
      subtitle: "Safe and smart solutions for human-robot collaboration",
      description:
        "Our collaborative robots can work safely with human operators in various industries with high precision and safety standards. Increase your production efficiency with advanced sensor technology and AI-supported control systems.",
      seriesTitle: "Our Collaborative Robot Series",
      seriesDescription: "Smart solutions designed for safe human-robot collaboration",
      button: "Learn More",
    },
    solutions: {
      title: "Industry Solutions",
      description: "Robotic automation solutions for the special needs of different industries",
      sectors: [
        { title: "3C Industry", href: "/sectors/3c" },
        { title: "Automotive Industry", href: "/sectors/automotive" },
        { title: "Welding Industry", href: "/sectors/welding" },
        { title: "Appliance Industry", href: "/sectors/appliances" },
        { title: "Metal Processing Industry", href: "/sectors/metalworking" },
        { title: "Other Industries", href: "/sectors/others" },
      ],
      viewDetails: "View Details",
    },
    modal: {
      close: "Close",
      technicalSpecs: "Technical Specifications",
      features: "Features",
      applications: "Applications",
      getQuote: "Get Quote",
      downloadBrochure: "Download Brochure",
      specs: {
        dof: "Degrees of Freedom",
        repeatability: "Repeatability",
        maxSpeed: "Maximum Speed",
        weight: "Weight",
      },
    },
    contact: {
      title: "Contact Form",
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

// Optimized image component with better performance
const OptimizedImage = memo(({ src, alt, width, height, className, priority = false, ...props }: any) => (
  <Image
    src={src || "/placeholder.svg"}
    alt={alt}
    width={width}
    height={height}
    className={className}
    priority={priority}
    quality={75}
    placeholder="blur"
    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    loading={priority ? "eager" : "lazy"}
    {...props}
  />
))

OptimizedImage.displayName = "OptimizedImage"

// Memoized data to prevent re-creation
const heroSlides = [
  {
    image:
      "https://omo-oss-image.thefastimg.com/portal-saas/pg2024072219142686656/cms/image/38c5a918-a016-4e96-be44-819b87464da0.png",
  },
  {
    image:
      "https://omo-oss-image.thefastimg.com/portal-saas/pg2024072219142686656/cms/image/1a015a30-d31c-4353-9057-2dc06d7c27fc.png",
  },
  {
    image:
      "https://omo-oss-image.thefastimg.com/portal-saas/pg2024072219142686656/cms/image/2ad5de6b-3f1e-4d21-ac25-e2123a9b293f.png",
  },
]

const productData = [
  {
    model: "HRB-0603C-670",
    payload: "3kg",
    reach: "670mm",
    image:
      "https://omo-oss-image.thefastimg.com/portal-saas/pg2024072219142686656/cms/image/38c5a918-a016-4e96-be44-819b87464da0.png",
    specs: {
      dof: "6 Eksen",
      repeatability: "±0.03mm",
      maxSpeed: "3.2 m/s",
      weight: "18 kg",
    },
    features: ["Güvenlik Sensörleri", "Kolay Programlama", "Kompakt Tasarım"],
    applications: ["Montaj", "Paketleme", "Kalite Kontrol"],
  },
  {
    model: "HRB-0607-770",
    payload: "7kg",
    reach: "770mm",
    image:
      "https://omo-oss-image.thefastimg.com/portal-saas/pg2024072219142686656/cms/image/1a015a30-d31c-4353-9057-2dc06d7c27fc.png",
    specs: {
      dof: "6 Eksen",
      repeatability: "±0.05mm",
      maxSpeed: "2.8 m/s",
      weight: "22 kg",
    },
    features: ["Yüksek Hassasiyet", "Çoklu Sensör", "Esnek Programlama"],
    applications: ["Kaynak", "Boyama", "Malzeme Taşıma"],
  },
  {
    model: "HRB-0607-900",
    payload: "7kg",
    reach: "900mm",
    image:
      "https://omo-oss-image.thefastimg.com/portal-saas/pg2024072219142686656/cms/image/2ad5de6b-3f1e-4d21-ac25-e2123a9b293f.png",
    specs: {
      dof: "6 Eksen",
      repeatability: "±0.05mm",
      maxSpeed: "2.5 m/s",
      weight: "25 kg",
    },
    features: ["Geniş Çalışma Alanı", "Yüksek Yük", "Dayanıklı Yapı"],
    applications: ["Ağır Montaj", "Paletleme", "CNC Besleme"],
  },
  {
    model: "HRB-0612-1100",
    payload: "12kg",
    reach: "1100mm",
    image:
      "https://omo-oss-image.thefastimg.com/portal-saas/pg2024072219142686656/cms/image/31f0c60c-da19-4653-8ddf-547233e5f17c.png",
    specs: {
      dof: "6 Eksen",
      repeatability: "±0.08mm",
      maxSpeed: "2.2 m/s",
      weight: "35 kg",
    },
    features: ["Yüksek Yük Kapasitesi", "Güçlü Motor", "Endüstriyel Dayanım"],
    applications: ["Ağır Sanayi", "Otomotiv", "Metal İşleme"],
  },
  {
    model: "HRB-0615-1300",
    payload: "15kg",
    reach: "1300mm",
    image:
      "https://omo-oss-image.thefastimg.com/portal-saas/pg2024072219142686656/cms/image/858bc62d-74c4-49f3-be26-614c38d8bb81.png",
    specs: {
      dof: "6 Eksen",
      repeatability: "±0.1mm",
      maxSpeed: "2.0 m/s",
      weight: "42 kg",
    },
    features: ["Maksimum Yük", "Geniş Erişim", "Profesyonel Çözüm"],
    applications: ["Büyük Parça Montajı", "Yükleme/Boşaltma", "Pres Besleme"],
  },
  {
    model: "HRB-0620-1600",
    payload: "20kg",
    reach: "1600mm",
    image:
      "https://omo-oss-image.thefastimg.com/portal-saas/pg2024072219142686656/cms/image/38c5a918-a016-4e96-be44-819b87464da0.png",
    specs: {
      dof: "6 Eksen",
      repeatability: "±0.12mm",
      maxSpeed: "1.8 m/s",
      weight: "55 kg",
    },
    features: ["En Yüksek Kapasite", "Maksimum Erişim", "Endüstriyel Güç"],
    applications: ["Ağır Sanayi", "Büyük Montaj", "Otomotiv Üretimi"],
  },
]

const collaborativeRobotsData = [
  {
    model: "HRC-0507-750",
    payload: "7kg",
    reach: "750mm",
    image:
      "https://omo-oss-image.thefastimg.com/portal-saas/pg2024072219142686656/cms/image/2ad5de6b-3f1e-4d21-ac25-e2123a9b293f.png",
    specs: {
      dof: "6 Eksen",
      repeatability: "±0.03mm",
      maxSpeed: "1.8 m/s",
      weight: "15 kg",
    },
    features: ["Çarpışma Algılama", "Güvenli Durdurma", "Esnek Programlama"],
    applications: ["Elektronik Montaj", "Test İşlemleri", "Malzeme Taşıma"],
  },
  {
    model: "HRC-0710-900",
    payload: "10kg",
    reach: "900mm",
    image:
      "https://omo-oss-image.thefastimg.com/portal-saas/pg2024072219142686656/cms/image/31f0c60c-da19-4653-8ddf-547233e5f17c.png",
    specs: {
      dof: "6 Eksen",
      repeatability: "±0.05mm",
      maxSpeed: "1.5 m/s",
      weight: "18 kg",
    },
    features: ["Kuvvet Kontrolü", "Adaptif Kavrama", "Görsel Entegrasyon"],
    applications: ["Ağır Montaj", "CNC Besleme", "Paletleme"],
  },
  {
    model: "HRC-1012-1200",
    payload: "12kg",
    reach: "1200mm",
    image:
      "https://omo-oss-image.thefastimg.com/portal-saas/pg2024072219142686656/cms/image/858bc62d-74c4-49f3-be26-614c38d8bb81.png",
    specs: {
      dof: "6 Eksen",
      repeatability: "±0.08mm",
      maxSpeed: "1.2 m/s",
      weight: "22 kg",
    },
    features: ["Geniş Çalışma Alanı", "Yüksek Yük", "Güvenlik Sertifikası"],
    applications: ["Otomotiv", "Metal İşleme", "Büyük Parça Montajı"],
  },
  {
    model: "HRC-1215-1500",
    payload: "15kg",
    reach: "1500mm",
    image:
      "https://omo-oss-image.thefastimg.com/portal-saas/pg2024072219142686656/cms/image/38c5a918-a016-4e96-be44-819b87464da0.png",
    specs: {
      dof: "6 Eksen",
      repeatability: "±0.1mm",
      maxSpeed: "1.0 m/s",
      weight: "28 kg",
    },
    features: ["Maksimum Güvenlik", "Endüstriyel Dayanım", "Modüler Tasarım"],
    applications: ["Ağır Sanayi", "Yükleme/Boşaltma", "Kaynak İşlemleri"],
  },
  {
    model: "HRC-Mobile-AGV",
    payload: "50kg",
    reach: "Mobil",
    image:
      "https://omo-oss-image.thefastimg.com/portal-saas/pg2024072219142686656/cms/image/1a015a30-d31c-4353-9057-2dc06d7c27fc.png",
    specs: {
      dof: "Mobil Platform",
      repeatability: "±5mm",
      maxSpeed: "1.5 m/s",
      weight: "85 kg",
    },
    features: ["Otonom Navigasyon", "LIDAR Sensör", "Akıllı Haritalama"],
    applications: ["Depo Otomasyonu", "Malzeme Taşıma", "Lojistik"],
  },
  {
    model: "HRC-0305-500",
    payload: "5kg",
    reach: "500mm",
    image:
      "https://omo-oss-image.thefastimg.com/portal-saas/pg2024072219142686656/cms/image/1a015a30-d31c-4353-9057-2dc06d7c27fc.png",
    specs: {
      dof: "6 Eksen",
      repeatability: "±0.02mm",
      maxSpeed: "2.0 m/s",
      weight: "12 kg",
    },
    features: ["Güvenlik Sensörleri", "İnsan-Robot İşbirliği", "Kolay Kurulum"],
    applications: ["Hassas Montaj", "Kalite Kontrol", "Paketleme"],
  },
]

// Memoized feature icons
const featureIcons = [
  { icon: Shield, label: "Güvenlik Sistemi" },
  { icon: Eye, label: "Görsel Tanıma" },
  { icon: Settings, label: "Akıllı Kontrol" },
  { icon: Award, label: "Hassas Üretim" },
  { icon: ThumbsUp, label: "Güvenilir" },
  { icon: Zap, label: "Yüksek Verim" },
]

// Loading skeleton component
const LoadingSkeleton = memo(({ className }: { className?: string }) => (
  <div className={`animate-pulse bg-gray-200 rounded ${className}`} />
))

LoadingSkeleton.displayName = "LoadingSkeleton"

export default function HomePage() {
  const { currentLang } = useLanguage()
  const t = pageTranslations[currentLang]

  // Hero slider states
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0)
  const [heroProgress, setHeroProgress] = useState(0)

  // Product slider states
  const [currentProductSlide, setCurrentProductSlide] = useState(0)
  const [productsPerView, setProductsPerView] = useState(3)

  // Collaborative robots slider states
  const [currentCollabSlide, setCurrentCollabSlide] = useState(0)
  const [collabPerView, setCollabPerView] = useState(3)

  // Modal states
  const [isProductModalOpen, setIsProductModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  // Performance states
  const [isLoading, setIsLoading] = useState(true)
  const [imagesLoaded, setImagesLoaded] = useState(false)

  // Video refs
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  // Refs for cleanup
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const slideIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Optimized image preloading
  const preloadImages = useCallback(async () => {
    try {
      const imagePromises = heroSlides.slice(0, 2).map((slide) => {
        return new Promise<void>((resolve) => {
          const img = new window.Image()
          img.onload = () => resolve()
          img.onerror = () => resolve()
          img.src = slide.image
        })
      })

      await Promise.allSettled(imagePromises)
      setImagesLoaded(true)
    } catch (error) {
      console.warn("Image preload failed:", error)
      setImagesLoaded(true)
    }
  }, [])

  // Initial loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 50)

    preloadImages()

    return () => clearTimeout(timer)
  }, [preloadImages])

  // Optimized hero slider with proper cleanup
  useEffect(() => {
    if (!imagesLoaded) return

    const resetAndStart = () => {
      setHeroProgress(0)

      // Clear existing intervals
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current)
      }
      if (slideIntervalRef.current) {
        clearTimeout(slideIntervalRef.current)
      }

      progressIntervalRef.current = setInterval(() => {
        setHeroProgress((prev) => {
          const newProgress = prev + 2
          return newProgress >= 100 ? 100 : newProgress
        })
      }, 100)

      slideIntervalRef.current = setTimeout(() => {
        setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length)
        resetAndStart()
      }, 5000)
    }

    resetAndStart()

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current)
      }
      if (slideIntervalRef.current) {
        clearTimeout(slideIntervalRef.current)
      }
    }
  }, [imagesLoaded])

  // Optimized resize handler with debouncing
  useEffect(() => {
    const handleResize = () => {
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current)
      }

      resizeTimeoutRef.current = setTimeout(() => {
        const width = window.innerWidth
        if (width < 640) {
          setProductsPerView(1)
          setCollabPerView(1)
        } else if (width < 1024) {
          setProductsPerView(2)
          setCollabPerView(2)
        } else {
          setProductsPerView(3)
          setCollabPerView(3)
        }
      }, 100)
    }

    handleResize()
    window.addEventListener("resize", handleResize, { passive: true })

    return () => {
      window.removeEventListener("resize", handleResize)
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current)
      }
    }
  }, [])

  // Body scroll lock optimization
  useEffect(() => {
    if (isContactFormOpen || isProductModalOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isContactFormOpen, isProductModalOpen])

  // Memoized handlers
  const nextHeroSlide = useCallback(() => {
    setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length)
    setHeroProgress(0)
  }, [])

  const prevHeroSlide = useCallback(() => {
    setCurrentHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
    setHeroProgress(0)
  }, [])

  const nextProductSlide = useCallback(() => {
    const maxSlide = Math.max(0, productData.length - productsPerView)
    setCurrentProductSlide((prev) => Math.min(prev + 1, maxSlide))
  }, [productsPerView])

  const prevProductSlide = useCallback(() => {
    setCurrentProductSlide((prev) => Math.max(prev - 1, 0))
  }, [])

  const nextCollabSlide = useCallback(() => {
    const maxSlide = Math.max(0, collaborativeRobotsData.length - collabPerView)
    setCurrentCollabSlide((prev) => Math.min(prev + 1, maxSlide))
  }, [collabPerView])

  const prevCollabSlide = useCallback(() => {
    setCurrentCollabSlide((prev) => Math.max(prev - 1, 0))
  }, [])

  const openProductModal = useCallback((product: any) => {
    setSelectedProduct(product)
    setIsProductModalOpen(true)
  }, [])

  const handleContactSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      console.log("Contact form submitted:", contactForm)
      setIsContactFormOpen(false)
      setContactForm({ name: "", email: "", phone: "", message: "" })
    },
    [contactForm],
  )

  // Optimized video handlers
  const handleVideoMouseEnter = useCallback((index: number) => {
    const video = videoRefs.current[index]
    if (video && video.readyState >= 2) {
      video.play().catch(() => {
        // Silently handle autoplay restrictions
      })
    }
  }, [])

  const handleVideoMouseLeave = useCallback((index: number) => {
    const video = videoRefs.current[index]
    if (video) {
      video.pause()
      video.currentTime = 0
    }
  }, [])

  // Memoized calculations
  const canSlidePrev = useMemo(() => currentProductSlide > 0, [currentProductSlide])
  const canSlideNext = useMemo(
    () => currentProductSlide < productData.length - productsPerView,
    [currentProductSlide, productsPerView],
  )
  const canCollabSlidePrev = useMemo(() => currentCollabSlide > 0, [currentCollabSlide])
  const canCollabSlideNext = useMemo(
    () => currentCollabSlide < collaborativeRobotsData.length - collabPerView,
    [currentCollabSlide, collabPerView],
  )

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="hero-section" />
        <div className="container mx-auto px-4 py-16">
          <LoadingSkeleton className="h-8 w-64 mx-auto mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <LoadingSkeleton key={i} className="h-64" />
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white pt-16 md:pt-20 pb-16 md:pb-20 overflow-hidden z-10 hero-section">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="relative min-h-[500px] md:min-h-[600px] flex items-center">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 gpu-layer ${
                  index === currentHeroSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center h-full">
                  <div className="space-y-6 md:space-y-8 text-center lg:text-left">
                    <div className="space-y-4 md:space-y-6">
                      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
                        <span className="block">{t.hero.slides[index].title}</span>
                        <span className="block text-blue-400">{t.hero.slides[index].subtitle}</span>
                        <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-300 mt-4">
                          {t.hero.slides[index].description}
                        </span>
                      </h1>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                          {t.hero.buttons.explore}
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                        <Button
                          variant="outline"
                          className="border-2 border-white/30 text-white hover:bg-white/10 px-6 md:px-8 py-3 rounded-xl backdrop-blur-sm transition-all duration-300 bg-transparent"
                        >
                          {t.hero.buttons.demo}
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="relative flex justify-center items-center">
                    <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                      <OptimizedImage
                        src={slide.image}
                        alt={t.hero.slides[index].title}
                        width={400}
                        height={400}
                        className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-500"
                        priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Controls */}
            <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 z-30">
              <button
                onClick={prevHeroSlide}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all duration-300"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </button>

              <div className="flex space-x-2">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentHeroSlide(index)
                      setHeroProgress(0)
                    }}
                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                      index === currentHeroSlide ? "bg-blue-400 scale-125" : "bg-white/50 hover:bg-white/70"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextHeroSlide}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all duration-300"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </button>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
              <div
                className="h-full bg-blue-400 transition-all duration-100 ease-linear"
                style={{ width: `${heroProgress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Center Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">{t.productCenter.title}</h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">{t.productCenter.description}</p>
          </div>
        </div>
      </section>

      {/* Industrial Robot Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800">{t.industrialRobots.title}</h3>
                <p className="text-lg text-gray-600">{t.industrialRobots.subtitle}</p>
                <p className="text-gray-600 leading-relaxed">{t.industrialRobots.description}</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {featureIcons.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 group hover:scale-105 transition-transform duration-300"
                  >
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:bg-blue-700 flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm text-gray-700 font-medium">
                      {currentLang === "en" ? t.industrialRobots.features[index] : feature.label}
                    </span>
                  </div>
                ))}
              </div>

              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                {t.industrialRobots.button}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden bg-gray-50 p-8 flex items-center justify-center">
                <OptimizedImage
                  src="https://omo-oss-image.thefastimg.com/portal-saas/pg2024072219142686656/cms/image/f3ed688e-ed78-411e-9cd5-897ca48d2a67.png"
                  alt={t.industrialRobots.title}
                  width={500}
                  height={400}
                  className="max-w-full max-h-96 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Slider Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">{t.productSeries.title}</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t.productSeries.description}
            </p>
          </div>

          <div className="relative px-8 md:px-16">
            <div className="absolute top-1/2 -translate-y-1/2 left-0 z-20">
              <button
                onClick={prevProductSlide}
                disabled={!canSlidePrev}
                className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center transition-all duration-300 ${
                  canSlidePrev
                    ? "hover:shadow-xl transform hover:scale-110 text-gray-600 hover:text-blue-600"
                    : "opacity-50 cursor-not-allowed text-gray-400"
                }`}
                aria-label="Previous products"
              >
                <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 right-0 z-20">
              <button
                onClick={nextProductSlide}
                disabled={!canSlideNext}
                className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center transition-all duration-300 ${
                  canSlideNext
                    ? "hover:shadow-xl transform hover:scale-110 text-gray-600 hover:text-blue-600"
                    : "opacity-50 cursor-not-allowed text-gray-400"
                }`}
                aria-label="Next products"
              >
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>

            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{
                  transform: `translateX(-${(currentProductSlide * 100) / productsPerView}%)`,
                }}
              >
                {productData.map((robot, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 px-2 md:px-4"
                    style={{ width: `${100 / productsPerView}%` }}
                  >
                    <div className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden relative z-10 mb-8">
                      <div className="relative h-48 md:h-64 bg-gray-50 overflow-hidden p-4 flex items-center justify-center">
                        <OptimizedImage
                          src={robot.image}
                          alt={robot.model}
                          width={300}
                          height={300}
                          className="max-w-full max-h-full object-contain"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
                      </div>

                      <div className="p-4 md:p-6 space-y-4">
                        <div className="space-y-2">
                          <h3 className="text-lg md:text-xl font-bold text-gray-800">{robot.model}</h3>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-blue-50 p-3 rounded-lg text-center">
                            <div className="text-xs text-gray-600 mb-1">{t.productSeries.specs.payload}</div>
                            <div className="text-sm md:text-lg font-bold text-blue-600">{robot.payload}</div>
                          </div>
                          <div className="bg-gray-50 p-3 rounded-lg text-center">
                            <div className="text-xs text-gray-600 mb-1">{t.productSeries.specs.reach}</div>
                            <div className="text-sm md:text-lg font-bold text-gray-700">{robot.reach}</div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="text-sm font-semibold text-gray-700">{t.productSeries.specs.features}</div>
                          <div className="flex flex-wrap gap-1">
                            {robot.features.slice(0, 2).map((feature: string, featureIndex: number) => (
                              <span
                                key={featureIndex}
                                className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>

                        <button
                          onClick={() => openProductModal(robot)}
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>{t.productSeries.specs.details}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.max(0, productData.length - productsPerView + 1) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProductSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentProductSlide ? "bg-blue-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to product slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Special Needs Section */}
          <div className="text-center mt-12 md:mt-16">
            <div className="group bg-blue-50 hover:bg-blue-100 rounded-3xl p-6 md:p-8 text-gray-800 relative overflow-hidden transition-all duration-500 cursor-pointer">
              <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl transition-all duration-700 group-hover:translate-x-1/3 group-hover:scale-110"></div>
              <div className="absolute top-1/2 right-0 transform translate-x-1/3 -translate-y-1/2 w-64 h-64 bg-blue-400/30 rounded-full blur-2xl transition-all duration-500 group-hover:translate-x-1/4 group-hover:scale-125"></div>
              <div className="absolute top-1/2 right-0 transform translate-x-1/4 -translate-y-1/2 w-32 h-32 bg-blue-500/40 rounded-full blur-xl transition-all duration-300 group-hover:translate-x-1/6 group-hover:scale-150"></div>

              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-blue-700 transition-colors duration-300">
                  {t.productSeries.specialNeeds.title}
                </h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto group-hover:text-gray-700 transition-colors duration-300">
                  {t.productSeries.specialNeeds.description}
                </p>
                <Button
                  onClick={() => setIsContactFormOpen(true)}
                  className="bg-blue-600 text-white hover:bg-blue-700 px-6 md:px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  {t.productSeries.specialNeeds.button}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborative Robots Section */}
      <section className="py-16 md:py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-5"></div>
        <div className="absolute top-0 right-0 bottom-0 w-full bg-gradient-to-l from-blue-500/30 via-blue-400/20 to-transparent blur-3xl transform translate-x-1/2 animate-pulse"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden bg-gray-800/50 p-8 flex items-center justify-center">
                <OptimizedImage
                  src="https://omo-oss-image.thefastimg.com/portal-saas/pg2024072219142686656/cms/image/a50846e9-e008-422c-9c60-e41f31f78fc1.png"
                  alt={t.collaborativeRobots.title}
                  width={500}
                  height={400}
                  className="max-w-full max-h-96 object-contain"
                />
              </div>
            </div>

            <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-bold text-white">{t.collaborativeRobots.title}</h3>
                <p className="text-lg md:text-xl text-gray-300">{t.collaborativeRobots.subtitle}</p>
                <p className="text-gray-300 leading-relaxed">{t.collaborativeRobots.description}</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {featureIcons.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <div className="w-12 h-12 bg-blue-600/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10 group-hover:scale-110 group-hover:bg-blue-600/30 transition-all duration-300 flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <span className="text-sm text-gray-300 font-medium">
                      {currentLang === "en" ? t.industrialRobots.features[index] : feature.label}
                    </span>
                  </div>
                ))}
              </div>

              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                {t.collaborativeRobots.button}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Collaborative Robots Product Slider */}
          <div className="mt-16 md:mt-20">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                {t.collaborativeRobots.seriesTitle}
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                {t.collaborativeRobots.seriesDescription}
              </p>
            </div>

            <div className="relative px-8 md:px-16">
              <div className="absolute top-1/2 -translate-y-1/2 left-0 z-20">
                <button
                  onClick={prevCollabSlide}
                  disabled={!canCollabSlidePrev}
                  className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 ${
                    canCollabSlidePrev
                      ? "hover:bg-white/20 transform hover:scale-110 text-white hover:text-blue-400"
                      : "opacity-50 cursor-not-allowed text-gray-500"
                  }`}
                  aria-label="Previous collaborative robots"
                >
                  <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>

              <div className="absolute top-1/2 -translate-y-1/2 right-0 z-20">
                <button
                  onClick={nextCollabSlide}
                  disabled={!canCollabSlideNext}
                  className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 ${
                    canCollabSlideNext
                      ? "hover:bg-white/20 transform hover:scale-110 text-white hover:text-blue-400"
                      : "opacity-50 cursor-not-allowed text-gray-500"
                  }`}
                  aria-label="Next collaborative robots"
                >
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>

              <div className="overflow-hidden rounded-2xl">
                <div
                  className="flex transition-transform duration-700 ease-out"
                  style={{
                    transform: `translateX(-${(currentCollabSlide * 100) / collabPerView}%)`,
                  }}
                >
                  {collaborativeRobotsData.map((robot, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 px-2 md:px-4"
                      style={{ width: `${100 / collabPerView}%` }}
                    >
                      <div className="group collaborative-robot-card bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden relative z-10 mb-8 hover:bg-white/15 transition-all duration-300">
                        <div className="relative h-48 md:h-64 image-container bg-gray-800/50 overflow-hidden p-4 flex items-center justify-center">
                          <OptimizedImage
                            src={robot.image}
                            alt={robot.model}
                            width={300}
                            height={300}
                            className="max-w-full max-h-full object-contain"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>

                        <div className="p-4 md:p-6 space-y-4">
                          <div className="space-y-2">
                            <h3 className="text-lg md:text-xl font-bold text-white">{robot.model}</h3>
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            <div className="payload-box bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 p-3 rounded-lg text-center">
                              <div className="text-xs text-blue-300 mb-1">{t.productSeries.specs.payload}</div>
                              <div className="text-sm md:text-lg font-bold text-blue-400">{robot.payload}</div>
                            </div>
                            <div className="reach-box bg-white/10 backdrop-blur-sm border border-white/20 p-3 rounded-lg text-center">
                              <div className="text-xs text-gray-300 mb-1">{t.productSeries.specs.reach}</div>
                              <div className="text-sm md:text-lg font-bold text-white">{robot.reach}</div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="text-sm font-semibold text-gray-300">{t.productSeries.specs.features}</div>
                            <div className="flex flex-wrap gap-1">
                              {robot.features.slice(0, 2).map((feature: string, featureIndex: number) => (
                                <span
                                  key={featureIndex}
                                  className="feature-tag px-2 py-1 bg-white/10 border border-white/20 text-gray-300 rounded-md text-xs"
                                >
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>

                          <button
                            onClick={() => openProductModal(robot)}
                            className="w-full bg-blue-600/80 hover:bg-blue-600 backdrop-blur-sm text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 border border-blue-500/30"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>{t.productSeries.specs.details}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center mt-8 space-x-2">
                {Array.from({ length: Math.max(0, collaborativeRobotsData.length - collabPerView + 1) }).map(
                  (_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentCollabSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentCollabSlide ? "bg-blue-400 scale-125" : "bg-white/30 hover:bg-white/50"
                      }`}
                      aria-label={`Go to collaborative robot slide ${index + 1}`}
                    />
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">{t.solutions.title}</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t.solutions.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {t.solutions.sectors.map((solution, index) => (
              <Link
                key={index}
                href={solution.href}
                className="group sector-card relative bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
                onMouseEnter={() => handleVideoMouseEnter(index)}
                onMouseLeave={() => handleVideoMouseLeave(index)}
              >
                <div className="relative h-64 md:h-72 overflow-hidden">
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    className="sector-video w-full h-full object-cover"
                    poster="/placeholder.svg?height=300&width=400"
                    muted
                    loop
                    playsInline
                    preload="none"
                  >
                    <source src="/placeholder.svg?height=300&width=400" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="sector-title text-xl md:text-2xl font-bold text-white mb-2">{solution.title}</h3>
                  <div className="flex items-center text-white/80 group-hover:text-white transition-colors duration-300">
                    <span className="text-sm">{t.solutions.viewDetails}</span>
                    <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Product Modal */}
      {isProductModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{selectedProduct.model}</h2>
                <button
                  onClick={() => setIsProductModalOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                  aria-label={t.modal.close}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-xl p-6 flex items-center justify-center">
                    <OptimizedImage
                      src={selectedProduct.image}
                      alt={selectedProduct.model}
                      width={400}
                      height={400}
                      className="max-w-full max-h-80 object-contain"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <div className="text-sm text-gray-600 mb-1">{t.productSeries.specs.payload}</div>
                      <div className="text-2xl font-bold text-blue-600">{selectedProduct.payload}</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="text-sm text-gray-600 mb-1">{t.productSeries.specs.reach}</div>
                      <div className="text-2xl font-bold text-gray-700">{selectedProduct.reach}</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">{t.modal.technicalSpecs}</h3>
                    <div className="space-y-3">
                      {Object.entries(selectedProduct.specs).map(([key, value]) => (
                        <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                          <span className="text-gray-600 capitalize">
                            {key === "dof"
                              ? t.modal.specs.dof
                              : key === "repeatability"
                                ? t.modal.specs.repeatability
                                : key === "maxSpeed"
                                  ? t.modal.specs.maxSpeed
                                  : key === "weight"
                                    ? t.modal.specs.weight
                                    : key}
                          </span>
                          <span className="font-semibold text-gray-800">{value as string}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">{t.modal.features}</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.features.map((feature: string, index: number) => (
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
                    <h3 className="text-xl font-bold text-gray-800 mb-4">{t.modal.applications}</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.applications.map((app: string, index: number) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4 pt-4">
                    <Button
                      onClick={() => setIsContactFormOpen(true)}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-all duration-300"
                    >
                      {t.modal.getQuote}
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 py-3 rounded-xl font-semibold transition-all duration-300 bg-transparent"
                    >
                      {t.modal.downloadBrochure}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Form Modal */}
      {isContactFormOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full">
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gray-800">{t.contact.title}</h2>
                <button
                  onClick={() => setIsContactFormOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                  aria-label={t.modal.close}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.contact.form.name}</label>
                  <input
                    type="text"
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder={t.contact.form.namePlaceholder}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.contact.form.email}</label>
                  <input
                    type="email"
                    required
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder={t.contact.form.emailPlaceholder}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.contact.form.phone}</label>
                  <input
                    type="tel"
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder={t.contact.form.phonePlaceholder}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.contact.form.message}</label>
                  <textarea
                    required
                    rows={4}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder={t.contact.form.messagePlaceholder}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  {t.contact.form.send}
                </Button>
              </form>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <ScrollToTop />
    </div>
  )
}
