import Head from 'next/head'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  ogType?: string
  canonicalUrl?: string
  structuredData?: object
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Kashi Vedic Astrology - Divine Guidance & Spiritual Wisdom | काशी वैदिक ज्योतिष',
  description = 'Discover your spiritual path with expert Vedic astrology consultations, daily horoscopes, and divine guidance. Connect with experienced astrologers for personalized insights into your life journey.',
  keywords = 'Vedic astrology, Hindu astrology, spiritual consultation, daily horoscope, kundli, puja booking, temple services, birth chart, astrological analysis',
  ogImage = '/images/og-image.jpg',
  ogType = 'website',
  canonicalUrl,
  structuredData
}) => {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Kashi Vedic Astrology",
    "alternateName": "काशी वैदिक ज्योतिष",
    "url": "https://kashivedic.com",
    "logo": "https://kashivedic.com/images/logo.png",
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Varanasi",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "India"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9876543210",
      "contactType": "customer service",
      "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": [
      "https://facebook.com/kashivedic",
      "https://instagram.com/kashivedic",
      "https://twitter.com/kashivedic"
    ],
    "offers": {
      "@type": "Offer",
      "category": "Astrology Services",
      "description": "Professional Vedic astrology consultations, birth chart analysis, and spiritual guidance"
    }
  }

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Kashi Vedic Astrology" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English, Hindi" />
      
      {/* Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content="Kashi Vedic Astrology - Spiritual Guidance" />
      <meta property="og:site_name" content="Kashi Vedic Astrology" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="hi_IN" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content="Kashi Vedic Astrology - Spiritual Guidance" />
      
      {/* Additional Meta Tags for Astrology */}
      <meta name="theme-color" content="#FF9933" />
      <meta name="msapplication-TileColor" content="#FF9933" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Kashi Vedic" />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData || defaultStructuredData)
        }}
      />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
    </Head>
  )
}

export default SEOHead
