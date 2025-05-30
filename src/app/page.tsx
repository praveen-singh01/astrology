'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Suspense } from 'react'
import {
  OmIcon,
  LotusIcon,
  DiyaIcon,
  MandalaIcon,
  TempleIcon,
  YantraIcon,
  KalashIcon,
  ConchIcon,
  AartiIcon
} from '@/components/icons/SacredIcons'
import AutoPlayAudio from '@/components/audio/AutoPlayAudio'
import SectionDivider, { AnimatedShloka, FloatingSacredMotifs } from '@/components/common/SectionDivider'
import DarkModeToggle from '@/components/common/DarkModeToggle'
import LoadingFallback from '@/components/common/LoadingFallback'

// Enhanced animated card component
const AnimatedCard = ({
  children,
  className,
  delay = 0
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -8, scale: 1.02 }}
    transition={{
      duration: 0.5,
      delay,
      hover: { duration: 0.3 }
    }}
    viewport={{ once: true }}
    className={className}
  >
    {children}
  </motion.div>
)

// Enhanced premium hero section with spiritual elements
const HeroSection = () => {
  const { t } = useTranslation('home')

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden sacred-geometry-bg">
      {/* Premium layered background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-cream-50/40 to-bhagwa-50/30 z-10" />
      <div className="absolute inset-0 bg-temple-pattern opacity-[0.03]" />

      {/* Dark mode toggle */}
      <div className="absolute top-6 right-6 z-50">
        <DarkModeToggle />
      </div>

      {/* Enhanced floating sacred elements */}
      <FloatingSacredMotifs />

      {/* Premium animated sacred elements */}
      <motion.div
        className="absolute top-20 left-10 opacity-15"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <OmIcon size={80} className="text-bhagwa-400 sacred-glow" animated={true} />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-10 opacity-12"
        animate={{
          y: [0, -15, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        <LotusIcon size={100} className="text-lotus-pink-400 lotus-float" animated={true} />
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-1/4 opacity-8"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 360]
        }}
        transition={{
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 20, repeat: Infinity, ease: "linear" }
        }}
      >
        <MandalaIcon size={120} className="text-divine-purple-300" animated={true} />
      </motion.div>

      {/* Additional premium sacred elements */}
      <motion.div
        className="absolute top-1/4 left-1/3 opacity-10"
        animate={{
          y: [0, -8, 0],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <KalashIcon size={60} className="text-antique-gold-500" animated={true} />
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 left-1/4 opacity-8"
        animate={{
          scale: [1, 1.03, 1.06, 1.03, 1],
          rotate: [0, 1, 0, -1, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      >
        <ConchIcon size={70} className="text-spiritual-blue-400" animated={true} />
      </motion.div>

      <div className="relative z-20 spiritual-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Animated Om Symbol with Hindi Text */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1, type: "spring" }}
            className="mb-6"
          >
            <div className="flex flex-col items-center space-y-3">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-6xl md:text-8xl text-bhagwa-500 sacred-glow"
              >
                ॐ
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-lg md:text-xl font-serif text-bhagwa-600 tracking-wider"
              >
                ॐ नमः शिवाय
              </motion.div>
            </div>
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-gray-900 drop-shadow-sm">
            {t('hero.title')}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-800 mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-sm"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* Acharya Profile Section */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mb-8"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto border border-bhagwa-200 shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-bhagwa-400 to-temple-gold-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">आ</span>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-serif font-bold text-gray-900">
                    Acharya Vidya Sagar
                  </h3>
                  <p className="text-sm text-bhagwa-600 font-medium">
                    आचार्य विद्या सागर
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    Lead Spiritual Guide & Vedic Astrologer
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/consultation" className="spiritual-button-premium text-lg py-4 px-10 sacred-glow">
                <span className="flex items-center space-x-2">
                  <AartiIcon size={24} className="text-white" animated={true} />
                  <span>{t('buttons.bookConsultation', { ns: 'common' })}</span>
                </span>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/services" className="spiritual-button-secondary text-lg py-4 px-10">
                <span className="flex items-center space-x-2">
                  <TempleIcon size={24} className="text-bhagwa-600" />
                  <span>{t('buttons.exploreServices', { ns: 'common' })}</span>
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Premium Sanskrit Shloka */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="mt-12"
          >
            <AnimatedShloka
              text="सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः"
              translation="May all beings be happy, may all beings be free from illness"
              className="max-w-4xl mx-auto"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default function Home() {
  const { t } = useTranslation('home')

  const services = [
    {
      icon: DiyaIcon,
      title: t('services.dailyHoroscope.title'),
      description: t('services.dailyHoroscope.description'),
      color: 'text-bhagwa-500',
      bgColor: 'bg-bhagwa-50',
      bgGradient: 'from-bhagwa-50 to-sacred-orange-100',
      href: '/horoscope',
      premiumIcon: AartiIcon
    },
    {
      icon: YantraIcon,
      title: t('services.kundliAnalysis.title'),
      description: t('services.kundliAnalysis.description'),
      color: 'text-temple-gold-500',
      bgColor: 'bg-temple-gold-50',
      bgGradient: 'from-temple-gold-50 to-antique-gold-100',
      href: '/kundli',
      premiumIcon: YantraIcon
    },
    {
      icon: OmIcon,
      title: t('services.liveConsultation.title'),
      description: t('services.liveConsultation.description'),
      color: 'text-divine-purple-500',
      bgColor: 'bg-divine-purple-50',
      bgGradient: 'from-divine-purple-50 to-divine-purple-100',
      href: '/consultation',
      premiumIcon: OmIcon
    },
    {
      icon: TempleIcon,
      title: t('services.pujaBooking.title'),
      description: t('services.pujaBooking.description'),
      color: 'text-bhagwa-600',
      bgColor: 'bg-bhagwa-100',
      bgGradient: 'from-bhagwa-100 to-deep-maroon-100',
      href: '/puja',
      premiumIcon: KalashIcon
    },
    {
      icon: LotusIcon,
      title: t('services.gemstoneConsultation.title'),
      description: t('services.gemstoneConsultation.description'),
      color: 'text-lotus-pink-600',
      bgColor: 'bg-lotus-pink-100',
      bgGradient: 'from-lotus-pink-100 to-lotus-pink-200',
      href: '/gemstones',
      premiumIcon: LotusIcon
    },
    {
      icon: MandalaIcon,
      title: t('services.vastu.title'),
      description: t('services.vastu.description'),
      color: 'text-divine-purple-600',
      bgColor: 'bg-divine-purple-100',
      bgGradient: 'from-divine-purple-100 to-spiritual-blue-100',
      href: '/vastu',
      premiumIcon: ConchIcon
    }
  ]

  return (
    <div className="min-h-screen">
      <Suspense fallback={<LoadingFallback message="Initializing spiritual audio..." />}>
        <AutoPlayAudio />
      </Suspense>
      <HeroSection />

      {/* Premium Enhanced Services Section */}
      <section className="py-24 bg-gradient-to-br from-white via-cream-50/30 to-bhagwa-50/20 relative overflow-hidden mandala-section-bg">
        {/* Premium Section Divider */}
        <SectionDivider type="temple-arch" className="mb-16" />

        <div className="spiritual-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="spiritual-heading gradient-text-premium text-5xl md:text-6xl mb-6">
              {t('services.title')}
            </h2>
            <p className="spiritual-text text-xl max-w-4xl mx-auto leading-relaxed mb-8">
              {t('services.subtitle')}
            </p>

            {/* Decorative elements */}
            <div className="flex justify-center items-center space-x-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <MandalaIcon size={40} className="text-divine-purple-400 opacity-60" />
              </motion.div>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-bhagwa-400 to-transparent" />
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <LotusIcon size={36} className="text-lotus-pink-400 opacity-60" />
              </motion.div>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-bhagwa-400 to-transparent" />
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <OmIcon size={38} className="text-bhagwa-400 opacity-60" />
              </motion.div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => {
              const IconComponent = service.icon
              const PremiumIconComponent = service.premiumIcon
              return (
                <motion.div
                  key={service.href}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                  className="spiritual-card-premium group cursor-pointer relative overflow-hidden"
                >
                  <Link href={service.href} className="block h-full">
                    {/* Premium gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-50 group-hover:opacity-70 transition-opacity duration-300`} />

                    {/* Sacred border animation */}
                    <div className="absolute inset-0 sacred-border-animated opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative z-10 p-8">
                      {/* Premium icon container with dual icons */}
                      <div className="relative mb-8">
                        <motion.div
                          className={`bg-gradient-to-br ${service.bgGradient} w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                          whileHover={{
                            scale: 1.1,
                            rotate: 5
                          }}
                        >
                          <IconComponent className={`w-10 h-10 ${service.color} group-hover:scale-110 transition-transform duration-300`} />
                        </motion.div>

                        {/* Premium floating icon */}
                        <motion.div
                          className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          animate={{
                            y: [0, -5, 0],
                            rotate: [0, 10, -10, 0]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <PremiumIconComponent size={24} className={`${service.color} drop-shadow-lg`} animated={true} />
                        </motion.div>
                      </div>

                      <h3 className="spiritual-subheading text-2xl mb-4 group-hover:text-bhagwa-600 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="spiritual-text text-lg leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Premium CTA with sacred elements */}
                      <div className="flex items-center justify-between">
                        <motion.div
                          className="text-bhagwa-500 font-semibold text-base opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center space-x-2"
                          whileHover={{ x: 5 }}
                        >
                          <span>{t('buttons.learnMore', { ns: 'common' })}</span>
                          <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            →
                          </motion.span>
                        </motion.div>

                        <motion.div
                          className="opacity-30 group-hover:opacity-60 transition-opacity duration-300"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                          <MandalaIcon size={20} className={service.color} />
                        </motion.div>
                      </div>
                    </div>

                    {/* Sacred glow effect */}
                    <div className="absolute inset-0 bg-gradient-sacred-glow opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Premium Section Divider */}
      <SectionDivider type="lotus" className="my-16" />

      {/* Premium Enhanced Call to Action */}
      <section className="py-24 bg-gradient-to-br from-bhagwa-50 via-temple-gold-50/50 to-lotus-pink-50/30 relative overflow-hidden starfield">
        {/* Enhanced background decorative elements */}
        <div className="absolute inset-0 opacity-8">
          <motion.div
            className="absolute top-10 left-10"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <OmIcon size={100} className="text-bhagwa-400 sacred-glow" animated={true} />
          </motion.div>

          <motion.div
            className="absolute bottom-10 right-10"
            animate={{
              y: [0, -15, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          >
            <LotusIcon size={120} className="text-lotus-pink-400 lotus-float" animated={true} />
          </motion.div>

          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{
              rotate: { duration: 30, repeat: Infinity, ease: "linear" },
              scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <MandalaIcon size={200} className="text-divine-purple-300" animated={true} />
          </motion.div>

          {/* Additional premium sacred elements */}
          <motion.div
            className="absolute top-1/4 right-1/4"
            animate={{
              y: [0, -10, 0],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <KalashIcon size={80} className="text-antique-gold-400" animated={true} />
          </motion.div>

          <motion.div
            className="absolute bottom-1/4 left-1/4"
            animate={{
              scale: [1, 1.03, 1.06, 1.03, 1],
              rotate: [0, 2, 0, -2, 0]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
          >
            <ConchIcon size={90} className="text-spiritual-blue-400" animated={true} />
          </motion.div>
        </div>

        <div className="spiritual-container text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="spiritual-heading gradient-text-premium text-5xl md:text-6xl mb-8">
              {t('cta.title')}
            </h2>
            <p className="spiritual-text max-w-4xl mx-auto mb-12 text-xl leading-relaxed">
              {t('cta.description')}
            </p>

            {/* Premium Sanskrit Shloka */}
            <AnimatedShloka
              text="यत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः"
              translation="Where there is Krishna, the master of yoga, and where there is Arjuna, the archer"
              className="mb-12"
            />

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link href="/register" className="spiritual-button-premium text-xl py-5 px-12 sacred-glow">
                <span className="flex items-center space-x-3">
                  <AartiIcon size={28} className="text-white" animated={true} />
                  <span>{t('buttons.startJourney', { ns: 'common' })}</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ✨
                  </motion.span>
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Premium Section Divider */}
        <SectionDivider type="mandala" className="mt-16" />
      </section>
    </div>
  )
}