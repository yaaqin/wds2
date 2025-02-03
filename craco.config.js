module.exports = {
    webpack: {
      configure: {
        // Contoh: Override konfigurasi webpack di sini
        resolve: {
          fallback: {
            fs: false, // Contoh: Nonaktifkan polyfill untuk modul 'fs'
          },
        },
      },
    },
    babel: {
      // Contoh: Override konfigurasi Babel di sini
      presets: ["@babel/preset-env", "@babel/preset-react"],
    },
  };