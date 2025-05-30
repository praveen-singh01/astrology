import type { Metadata } from 'next'
import { Inter, Noto_Sans_Devanagari, Noto_Serif_Devanagari } from 'next/font/google'
import './globals.css'
import { AudioProvider } from '@/contexts/AudioContext'
import { AuthProvider } from '@/contexts/AuthContext'
import { I18nProvider } from '@/components/providers/I18nProvider'
import AudioControls from '@/components/audio/AudioControls'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import SpiritualFAB from '@/components/common/SpiritualFAB'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const notoSansDevanagari = Noto_Sans_Devanagari({
  weight: ['400', '500', '600', '700'],
  subsets: ['devanagari'],
  variable: '--font-noto-sans-devanagari',
  display: 'swap',
})

const notoSerifDevanagari = Noto_Serif_Devanagari({
  weight: ['400', '500', '600', '700'],
  subsets: ['devanagari'],
  variable: '--font-noto-serif-devanagari',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://kashi-astrology.vercel.app'),
  title: 'Kashi Vedic Astrology - Divine Guidance & Spiritual Wisdom | काशी वैदिक ज्योतिष',
  description: 'Discover your spiritual path with expert Vedic astrology consultations, daily horoscopes, and divine guidance. Connect with experienced astrologers for personalized insights into your life journey. | विशेषज्ञ वैदिक ज्योतिष परामर्श के साथ अपना आध्यात्मिक मार्ग खोजें।',
  keywords: 'Vedic astrology, Hindu astrology, spiritual consultation, daily horoscope, kundli, puja booking, temple services, वैदिक ज्योतिष, हिंदू ज्योतिष, आध्यात्मिक परामर्श, दैनिक राशिफल, कुंडली',
  openGraph: {
    title: 'Kashi Vedic Astrology - Divine Guidance & Spiritual Wisdom',
    description: 'Connect with ancient Vedic wisdom through personalized astrology consultations and spiritual guidance.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'hi_IN',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${notoSansDevanagari.variable} ${notoSerifDevanagari.variable}`}>
      <body className="min-h-screen bg-gradient-to-b from-white via-bhagwa-50/30 to-temple-gold-50/20 dark:from-night-sky-600 dark:via-night-sky-500/80 dark:to-divine-purple-900/30 transition-colors duration-300">
        <I18nProvider>
          <AuthProvider>
            <AudioProvider>
            <div className="relative min-h-screen">
            {/* Simplified Background decorative elements */}
            <div className="fixed inset-0 -z-10 overflow-hidden">
              {/* Base gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white via-bhagwa-50/20 to-temple-gold-50/10" />

              {/* Sacred patterns with very low opacity */}
              <div className="absolute inset-0 bg-temple-pattern opacity-[0.01]" />
              <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-om-symbol bg-no-repeat opacity-[0.02] om-pulse" />
              <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-lotus-pattern bg-no-repeat opacity-[0.02]" />

              {/* Floating sacred geometry with minimal opacity */}
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-mandala-pattern bg-no-repeat opacity-[0.01] mandala-rotate" />
              <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-sacred-geometry bg-no-repeat opacity-[0.015]" />
            </div>

            {/* Navigation */}
            <Navigation />

            {/* Main content */}
            <main className="relative z-10">
              {children}
            </main>

            {/* Footer */}
            <Footer />

            {/* Audio Controls */}
            <AudioControls />

            {/* Spiritual Floating Action Button */}
            <SpiritualFAB />
            </div>
            </AudioProvider>
          </AuthProvider>
        </I18nProvider>
      </body>
    </html>
  )
}