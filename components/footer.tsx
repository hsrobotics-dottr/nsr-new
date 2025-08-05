"use client"

import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const footerTranslations = {
  tr: {
    company: {
      description:
        "Profesyonel endüstriyel robot üreticisi, müşterilerimize yüksek kaliteli otomasyon çözümleri sunmaya odaklanmaktadır.",
    },
    sections: {
      products: "Ürünler",
      solutions: "Çözümler",
      contact: "İletişim",
    },
    products: {
      industrial: "Endüstriyel Robotlar",
      collaborative: "İşbirlikçi Robotlar",
      control: "Kontrol Sistemleri",
      software: "Yazılım Çözümleri",
    },
    solutions: {
      automotive: "Otomotiv Sektörü",
      electronics: "3C Elektronik",
      metalworking: "Metal İşleme",
      foodPackaging: "Gıda & Ambalaj",
    },
    contact: {
      phone: "+90 555 123 45 67",
      email: "info@huashu.com.tr",
      address: "İstanbul, Türkiye",
    },
    copyright: "© 2025 Huashu Robotik. Tüm hakları saklıdır.",
  },
  en: {
    company: {
      description:
        "Professional industrial robot manufacturer, focused on providing high-quality automation solutions to our customers.",
    },
    sections: {
      products: "Products",
      solutions: "Solutions",
      contact: "Contact",
    },
    products: {
      industrial: "Industrial Robots",
      collaborative: "Collaborative Robots",
      control: "Control Systems",
      software: "Software Solutions",
    },
    solutions: {
      automotive: "Automotive Industry",
      electronics: "3C Electronics",
      metalworking: "Metal Processing",
      foodPackaging: "Food & Packaging",
    },
    contact: {
      phone: "+90 555 123 45 67",
      email: "info@huashu.com.tr",
      address: "Istanbul, Turkey",
    },
    copyright: "© 2025 Huashu Robotics. All rights reserved.",
  },
}

export default function Footer() {
  const { currentLang } = useLanguage()
  const ft = footerTranslations[currentLang]

  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <span className="text-xl font-bold">Huashu Robotik</span>
            </div>
            <p className="text-gray-400 leading-relaxed">{ft.company.description}</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{ft.sections.products}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  {ft.products.industrial}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  {ft.products.collaborative}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  {ft.products.control}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  {ft.products.software}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{ft.sections.solutions}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  {ft.solutions.automotive}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  {ft.solutions.electronics}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  {ft.solutions.metalworking}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  {ft.solutions.foodPackaging}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{ft.sections.contact}</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">{ft.contact.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">{ft.contact.email}</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <span className="text-gray-400">{ft.contact.address}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 md:mt-12 pt-6 md:pt-8 text-center">
          <p className="text-gray-400">{ft.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
