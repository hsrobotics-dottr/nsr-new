import Footer from '@/components/footer'
import Header from '@/components/header'
import { VideoGrid } from '@/components/video-grid'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface IndustryLayoutProps {
  title: string
  description: string
  images: string[]
  videos: Array<{
    id: string
    title: string
    description: string
    thumbnail: string
    duration: string
    category: string
  }>
}

export function IndustryLayout({ title, description, images, videos }: IndustryLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white pt-20 pb-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Link href="/endustriler" className="flex items-center text-blue-200 hover:text-white transition-colors duration-300">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Endüstriler
              </Link>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
            <p className="text-lg text-blue-200 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Images Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {images.map((image, index) => (
                <div key={index} className="relative h-80 bg-gray-100 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={image}
                    alt={`${title} Görsel ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-semibold">
                      {index === 0 ? 'Robotik Uygulama' : 'Endüstriyel Çözüm'}
                    </h3>
                    <p className="text-sm opacity-90">
                      {index === 0 ? 'Hassas ve verimli otomasyon' : 'Güvenli ve sürdürülebilir üretim'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <VideoGrid
        videos={videos}
        title="Endüstri Uygulamaları"
        description="Bu endüstri sektöründe robotik çözümlerimizin uygulamalarını gösteren videolar"
      />

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {title} İçin Özel Çözüm
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Bu endüstri sektörü için özel olarak tasarlanmış robotik çözümlerimiz hakkında daha fazla bilgi alın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              İletişime Geç
            </Link>
            <Link
              href="/products"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Ürünleri İncele
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
