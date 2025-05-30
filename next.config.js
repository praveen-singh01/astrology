/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

const nextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Configure base path for GitHub Pages (will be set by environment variable)
  basePath: process.env.NODE_ENV === 'production',
  
  // Configure asset prefix for GitHub Pages
  assetPrefix: process.env.NODE_ENV === 'production',
  
  // Disable server-side features for static export
  trailingSlash: true,
  
  // Configure i18n for static export
  i18n: undefined, // Disable Next.js built-in i18n for static export
  
  // Experimental features
  experimental: {
    // Enable app directory
    appDir: true,
  },
  
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
  
  // Configure redirects (will be handled by GitHub Pages)
  async redirects() {
    return []
  },
  
  // Configure rewrites (will be handled by GitHub Pages)
  async rewrites() {
    return []
  },
  
  // Configure headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
