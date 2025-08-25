/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production'
      ? {
          cssnano: {
            preset: [
              'default',
              {
                discardComments: {
                  removeAll: true,
                },
                normalizeWhitespace: false,
                // Memory dostu minification - sadece gerçekten gereksiz olanları devre dışı bırak
                colormin: false, // Renk optimizasyonu devre dışı
                minifyFontValues: false, // Font değerleri optimizasyonu devre dışı
                minifySelectors: false, // Selector optimizasyonu devre dışı
                // Diğer optimizasyonları aktif bırak
                mergeLonghand: true,
                mergeRules: true,
                normalizeCharset: true,
                normalizeDisplayValues: true,
                normalizePositions: true,
                normalizeRepeatStyle: true,
                normalizeString: true,
                normalizeTimingFunctions: true,
                normalizeUnicode: true,
                orderedValues: true,
                reduceIdents: true,
                reduceInitial: true,
                reduceTransforms: true,
                uniqueSelectors: true,
                zindex: true,
              },
            ],
          },
        }
      : {}),
  },
};

export default config;
