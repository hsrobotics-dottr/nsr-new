# 🧠 Memory ve Resource Optimizasyon Rehberi

Bu dokümantasyon, HSR Robotics website projesinde memory ve resource kullanımını optimize etmek için yapılan konfigürasyonları açıklar.

## 📊 Mevcut Durum

- **Next.js 15.2.4** (Turbopack ile)
- **TypeScript** strict mode
- **Tailwind CSS** optimize edilmiş
- **PostCSS** memory dostu
- **ESLint & Prettier** optimize edilmiş

## 🚀 Memory Optimizasyon Script'leri

### Temel Memory Optimizasyon

```bash
pnpm dev:memory
```

- `--max-old-space-size=2048`: Heap memory limiti 2GB
- `--max-semi-space-size=32`: Semi-space limiti 32MB
- `--optimize-for-size`: Boyut optimizasyonu
- `--gc-interval=100`: Garbage collection sıklığı

### Hızlı Development

```bash
pnpm dev:fast
```

- `--max-old-space-size=4096`: Heap memory limiti 4GB
- `--max-semi-space-size=64`: Semi-space limiti 64MB

### Production Build

```bash
pnpm build:memory
```

- Memory dostu production build

## ⚙️ Konfigürasyon Optimizasyonları

### 1. Next.js (next.config.mjs)

- **webpackBuildWorker**: `false` (memory kullanımını azalt)
- **cpus**: `2` (CPU kullanımını sınırla)
- **memoryBasedWorkers**: `true` (memory tabanlı worker'lar)
- **workerThreads**: `false` (worker thread'leri devre dışı)
- **devtool**: `eval` (development memory kullanımını azalt)
- **poll**: `1000ms` (polling sıklığını azalt)

### 2. Tailwind CSS (tailwind.config.ts)

- **optimizeUniversalDefaults**: `false`
- **corePlugins**: Gereksiz plugin'ler devre dışı
- Sadece kullanılan utility'ler aktif

### 3. PostCSS (postcss.config.mjs)

- **cssnano**: Memory dostu minification
- Gereksiz optimizasyonlar devre dışı
- **colormin**: `false`
- **minifyFontValues**: `false`
- **minifySelectors**: `false`

### 4. TypeScript (tsconfig.json)

- **strict**: `true`
- **noImplicitAny**: `false` (memory kullanımını azalt)
- **noImplicitThis**: `false`
- **strictPropertyInitialization**: `false`
- **assumeChangesOnlyAffectDirectDependencies**: `true`

### 5. ESLint (.eslintrc.json)

- **parserOptions**: Memory dostu
- **env**: Sadece gerekli environment'lar
- **settings**: Minimal konfigürasyon

## 🔧 Kullanım

### Otomatik Memory Optimizasyon

```bash
./scripts/memory-optimize.sh
```

### Tam Temizlik ile Memory Optimizasyon

```bash
./scripts/memory-optimize.sh --clean-all
```

### Manuel Memory Kontrol

```bash
pnpm memory:check
```

### Memory Temizlik

```bash
pnpm memory:clean
```

## 📈 Memory Kullanım Metrikleri

### Development Server

- **RSS**: ~34MB
- **Heap Total**: ~5.6MB
- **Heap Used**: ~3.5MB
- **External**: ~1.3MB

### Production Build

- **Bundle Size**: Optimize edilmiş
- **Chunk Splitting**: Memory dostu
- **Tree Shaking**: Aktif

## 🎯 Optimizasyon Hedefleri

1. **Memory Leak Önleme**
   - Garbage collection optimizasyonu
   - Worker thread'lerin kontrolü
   - Cache yönetimi

2. **Resource Kullanımı**
   - CPU kullanımını sınırlama
   - Disk I/O optimizasyonu
   - Network request'lerin optimize edilmesi

3. **Development Experience**
   - Hızlı hot reload
   - Düşük memory footprint
   - Stabil development server

## 🚨 Sorun Giderme

### Memory Kullanımı Yüksek

```bash
# Process'leri kontrol et
ps aux | grep node

# Memory kullanımını detaylandır
ps -o pid,ppid,command,%mem,%cpu,rss,vsz -p <PID>

# Server'ı yeniden başlat
pnpm dev:memory
```

### Server Çökmesi

```bash
# Cache temizle
rm -rf .next

# Dependencies yeniden yükle
pnpm install

# Memory optimizasyon script'ini çalıştır
./scripts/memory-optimize.sh
```

### Build Hataları

```bash
# Type check
pnpm type-check

# Lint
pnpm lint

# Build
pnpm build:memory
```

## 📚 Ek Kaynaklar

- [Next.js Performance](https://nextjs.org/docs/advanced-features/performance)
- [Node.js Memory Management](https://nodejs.org/en/docs/guides/memory-management/)
- [Tailwind CSS Optimization](https://tailwindcss.com/docs/optimizing-for-production)
- [TypeScript Performance](https://www.typescriptlang.org/docs/handbook/performance.html)

## 🤝 Katkıda Bulunma

Memory optimizasyonları için öneriler:

1. Yeni konfigürasyon ekle
2. Mevcut optimizasyonları test et
3. Performance metriklerini paylaş
4. Dokümantasyonu güncelle

---

**Not**: Bu optimizasyonlar development ortamı için tasarlanmıştır. Production ortamında farklı konfigürasyonlar gerekebilir.
