#!/bin/bash

# Memory ve Resource Optimizasyon Script'i
# HSR Robotics Website için

echo "🧠 Memory ve Resource Optimizasyon Başlatılıyor..."

# Mevcut process'leri kontrol et
echo "📊 Mevcut Node.js Process'leri:"
ps aux | grep node | grep -v grep

# Port 3000'de çalışan process'i bul
PORT_PID=$(lsof -ti:3000)

if [ ! -z "$PORT_PID" ]; then
    echo "🔄 Port 3000'de çalışan process bulundu: $PORT_PID"
    echo "⏹️  Process durduruluyor..."
    kill -9 $PORT_PID
    sleep 2
else
    echo "✅ Port 3000'de çalışan process bulunamadı"
fi

# Cache temizle
echo "🧹 Cache temizleniyor..."
rm -rf .next
rm -rf out
rm -rf dist

# Node modules temizle (opsiyonel)
if [ "$1" = "--clean-all" ]; then
    echo "🗑️  Node modules temizleniyor..."
    rm -rf node_modules
    rm -f pnpm-lock.yaml
    echo "📦 Dependencies yeniden yükleniyor..."
    pnpm install
fi

# Memory kullanımını kontrol et
echo "📈 Memory kullanımı kontrol ediliyor..."
node -e "
const usage = process.memoryUsage();
console.log('Memory Usage:');
console.log('  RSS:', Math.round(usage.rss / 1024 / 1024), 'MB');
console.log('  Heap Total:', Math.round(usage.heapTotal / 1024 / 1024), 'MB');
console.log('  Heap Used:', Math.round(usage.heapUsed / 1024 / 1024), 'MB');
console.log('  External:', Math.round(usage.external / 1024 / 1024), 'MB');
"

# Environment variables
export NODE_OPTIONS="--max-old-space-size=2048 --max-semi-space-size=32"

echo "🚀 Memory dostu development server başlatılıyor..."
echo "📋 NODE_OPTIONS: $NODE_OPTIONS"

# Server'ı başlat
pnpm dev:memory &

# Server'ın başlamasını bekle
echo "⏳ Server başlatılıyor..."
sleep 10

# Server durumunu kontrol et
if curl -s http://localhost:3000 > /dev/null; then
    echo "✅ Server başarıyla başlatıldı!"
    echo "🌐 URL: http://localhost:3000"

    # Memory kullanımını tekrar kontrol et
    echo "📊 Server memory kullanımı:"
    ps aux | grep "next dev" | grep -v grep
else
    echo "❌ Server başlatılamadı!"
    exit 1
fi

echo "🎉 Memory optimizasyon tamamlandı!"
echo "💡 Kullanım: ./scripts/memory-optimize.sh [--clean-all]"
