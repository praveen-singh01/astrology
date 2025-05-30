/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // Configure base path for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/astrology' : '',

  // Configure asset prefix for GitHub Pages
  assetPrefix: process.env.NODE_ENV === 'production' ? '/astrology' : '',

  // Disable server-side features for static export
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',

  // Experimental features
  experimental: {
    esmExternals: false,
  },
}

module.exports = nextConfig
