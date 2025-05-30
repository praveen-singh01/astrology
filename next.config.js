/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

const nextConfig = {
  // For Vercel deployment, we don't need static export
  // output: 'export',
  
  // Image optimization works on Vercel
  images: {
    domains: [],
    // Remove unoptimized setting for Vercel
    // unoptimized: true,
  },
  
  // No need for basePath on Vercel
  // basePath: process.env.NODE_ENV === 'production' ? '/astrology' : '',
  
  // No need for assetPrefix on Vercel
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/astrology' : '',
  
  // Configure i18n for static export
  i18n: undefined, // Disable Next.js built-in i18n for static export
  
  // Configure webpack for better builds
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      }
    }
    
    return config
  },
  
  // Environment variables
  env: {
    CUSTOM_KEY: 'my-value',
  },
  
  // These features work with Vercel deployment
  // Configure redirects
  async redirects() {
    return []
  },
  
  // Configure rewrites
  async rewrites() {
    return []
  },
  
  // Configure headers
  async headers() {
    return []
  },
}

module.exports = nextConfig
