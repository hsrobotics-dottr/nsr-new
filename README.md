# HSR - Industrial Robotics Website

Modern, performans odaklı endüstriyel robotik web sitesi. Next.js 15, TypeScript, Tailwind CSS ve shadcn/ui kullanılarak geliştirilmiştir.

## 🚀 Özellikler

- **Modern Teknolojiler**: Next.js 15, React 19, TypeScript
- **Performans Odaklı**: Optimize edilmiş bundle, lazy loading, image optimization
- **Responsive Tasarım**: Tüm cihazlarda mükemmel görünüm
- **Dark/Light Mode**: Otomatik tema değişimi
- **SEO Optimized**: Meta tags, structured data, sitemap
- **Accessibility**: WCAG 2.1 uyumlu
- **Internationalization**: Çoklu dil desteği

## 📦 Kurulum

### Gereksinimler

- Node.js 18+
- pnpm (önerilen) veya npm

### Kurulum Adımları

1. **Repository'yi klonlayın**
   ```bash
   git clone <repository-url>
   cd hsr
   ```

2. **Bağımlılıkları yükleyin**
   ```bash
   pnpm install
   # veya
   npm install
   ```

3. **Geliştirme sunucusunu başlatın**
   ```bash
   pnpm dev
   # veya
   npm run dev
   ```

4. **Tarayıcıda açın**
   ```
   http://localhost:3000
   ```

## 🛠️ Geliştirme

### Kullanılabilir Scriptler

```bash
# Geliştirme sunucusu
pnpm dev

# Production build
pnpm build

# Production sunucusu
pnpm start

# Linting
pnpm lint
```

### Proje Yapısı

```
hsr/
├── app/                    # Next.js App Router
│   ├── about/             # Hakkımızda sayfası
│   ├── haberler/          # Haberler sayfası
│   ├── library/           # Kütüphane sayfası
│   ├── products/          # Ürünler sayfası
│   ├── support/           # Destek sayfası
│   ├── globals.css        # Global stiller
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Ana sayfa
├── components/            # React bileşenleri
│   ├── ui/               # shadcn/ui bileşenleri
│   ├── header/           # Header bileşenleri
│   └── ...
├── contexts/             # React context'leri
├── hooks/                # Custom hooks
├── lib/                  # Utility fonksiyonları
├── public/               # Statik dosyalar
└── styles/               # Ek stiller
```

### Teknoloji Stack'i

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui + Radix UI
- **Icons**: Lucide React
- **Package Manager**: pnpm
- **Deployment**: Vercel (önerilen)

## 🎨 Tasarım Sistemi

### Renkler

Proje, CSS değişkenleri kullanarak tema sistemi ile çalışır:

- **Primary**: Mavi tonları (#3B82F6)
- **Secondary**: Gri tonları
- **Accent**: Vurgu renkleri
- **Destructive**: Hata/kırmızı tonları

### Typography

- **Font Family**: System fonts (Inter, -apple-system, BlinkMacSystemFont)
- **Font Sizes**: Tailwind CSS scale
- **Line Heights**: Optimized for readability

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔧 Konfigürasyon

### Environment Variables

`.env.local` dosyası oluşturun:

```env
# Analytics
NEXT_PUBLIC_GA_ID=your-ga-id

# Contact Form
NEXT_PUBLIC_CONTACT_EMAIL=contact@hsr.com

# Social Media
NEXT_PUBLIC_SOCIAL_LINKEDIN=https://linkedin.com/company/hsr
NEXT_PUBLIC_SOCIAL_TWITTER=https://twitter.com/hsr
```

### Tailwind CSS

`tailwind.config.ts` dosyası özelleştirilmiş tema ile yapılandırılmıştır.

## 🚀 Deployment

### Vercel (Önerilen)

1. Vercel hesabı oluşturun
2. GitHub repository'nizi bağlayın
3. Otomatik deployment aktif olacaktır

### Diğer Platformlar

```bash
# Build
pnpm build

# Export (static)
pnpm export

# Serve
pnpm start
```

## 📊 Performance

Proje aşağıdaki optimizasyonları içerir:

- **Bundle Optimization**: Code splitting, tree shaking
- **Image Optimization**: Next.js Image component
- **Font Optimization**: System fonts kullanımı
- **CSS Optimization**: Critical CSS, purging
- **Caching**: Aggressive caching headers

## 🔍 SEO

- Meta tags optimization
- Structured data (JSON-LD)
- Sitemap generation
- Robots.txt
- Open Graph tags

## ♿ Accessibility

- WCAG 2.1 AA uyumlu
- Keyboard navigation
- Screen reader support
- Focus management
- Color contrast compliance

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 📞 İletişim

- **Website**: [hsr.com](https://hsr.com)
- **Email**: contact@hsr.com
- **LinkedIn**: [HSR Robotics](https://linkedin.com/company/hsr)

---

**HSR Robotics** - Endüstriyel Robotik Çözümleri
