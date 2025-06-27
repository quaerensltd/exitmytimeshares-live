// postcss.config.js
module.exports = {
    plugins: {
      // Use the standalone Tailwind→PostCSS bridge
      '@tailwindcss/postcss': {},
      // Then autoprefixer as normal
      autoprefixer: {},
    }
  }
  