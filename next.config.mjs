/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // App Router için gerekli ayarlar
  experimental: {
    optimizeCss: true,
  },
  // Static export'u devre dışı bırak - event handler sorununu çözer
  output: 'standalone',
  // Build sırasında prerender hatalarını görmezden gel
  trailingSlash: false,
  images: {
    unoptimized: false,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      // Dış kaynak hostname kaldırıldı - artık kendi görsellerimizi kullanıyoruz
    ],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  // App Router için webpack ayarları
  webpack: (config, { dev, isServer }) => {
    if (dev && isServer) {
      // Development mode için App Router manifest dosyalarının oluşturulmasını sağla
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
};

export default nextConfig;
