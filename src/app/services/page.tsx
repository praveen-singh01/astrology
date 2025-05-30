'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { 
  OmIcon, 
  LotusIcon, 
  DiyaIcon, 
  MandalaIcon, 
  TempleIcon,
  YantraIcon 
} from '@/components/icons/SacredIcons'

const ServicesPage: React.FC = () => {
  const { t } = useTranslation(['common', 'home'])

  const services = [
    {
      icon: DiyaIcon,
      title: 'Daily Horoscope',
      titleHi: 'दैनिक राशिफल',
      description: 'Get personalized daily predictions based on your zodiac sign and planetary positions.',
      descriptionHi: 'अपनी राशि और ग्रहों की स्थिति के आधार पर व्यक्तिगत दैनिक भविष्यवाणी प्राप्त करें।',
      color: 'text-temple-gold-500',
      bgColor: 'bg-temple-gold-50',
      href: '/horoscope',
      features: ['Daily predictions', 'Weekly forecasts', 'Monthly overview', 'Planetary transits']
    },
    {
      icon: YantraIcon,
      title: 'Kundli Analysis',
      titleHi: 'कुंडली विश्लेषण',
      description: 'Comprehensive birth chart analysis with detailed insights into your life path.',
      descriptionHi: 'आपके जीवन पथ की विस्तृत अंतर्दृष्टि के साथ व्यापक जन्म कुंडली विश्लेषण।',
      color: 'text-saffron-500',
      bgColor: 'bg-saffron-50',
      href: '/kundli',
      features: ['Birth chart creation', 'Planetary analysis', 'Dasha predictions', 'Remedial measures']
    },
    {
      icon: OmIcon,
      title: 'Live Consultation',
      titleHi: 'लाइव परामर्श',
      description: 'Connect with experienced astrologers for personalized guidance and solutions.',
      descriptionHi: 'व्यक्तिगत मार्गदर्शन और समाधान के लिए अनुभवी ज्योतिषियों से जुड़ें।',
      color: 'text-maroon-500',
      bgColor: 'bg-maroon-50',
      href: '/consultation',
      features: ['Video consultation', 'Chat support', 'Phone consultation', 'Expert astrologers']
    },
    {
      icon: TempleIcon,
      title: 'Puja Booking',
      titleHi: 'पूजा बुकिंग',
      description: 'Book authentic Hindu pujas and rituals performed by experienced priests.',
      descriptionHi: 'अनुभवी पुजारियों द्वारा किए गए प्रामाणिक हिंदू पूजा और अनुष्ठान बुक करें।',
      color: 'text-divine-purple-500',
      bgColor: 'bg-divine-purple-50',
      href: '/puja',
      features: ['Traditional rituals', 'Online ceremonies', 'Custom pujas', 'Sacred materials']
    },
    {
      icon: LotusIcon,
      title: 'Gemstone Consultation',
      titleHi: 'रत्न परामर्श',
      description: 'Discover the right gemstones to enhance your spiritual energy and well-being.',
      descriptionHi: 'अपनी आध्यात्मिक ऊर्जा और कल्याण को बढ़ाने के लिए सही रत्नों की खोज करें।',
      color: 'text-lotus-pink-500',
      bgColor: 'bg-lotus-pink-50',
      href: '/gemstones',
      features: ['Gemstone selection', 'Authenticity guarantee', 'Wearing guidelines', 'Energization rituals']
    },
    {
      icon: MandalaIcon,
      title: 'Vastu Shastra',
      titleHi: 'वास्तु शास्त्र',
      description: 'Harmonize your living and working spaces with ancient Vastu principles.',
      descriptionHi: 'प्राचीन वास्तु सिद्धांतों के साथ अपने रहने और काम करने के स्थानों को सामंजस्यपूर्ण बनाएं।',
      color: 'text-earth-brown-500',
      bgColor: 'bg-earth-brown-50',
      href: '/vastu',
      features: ['Home consultation', 'Office planning', 'Remedial solutions', 'Construction guidance']
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-saffron-50 via-temple-gold-50/50 to-lotus-pink-50/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10">
            <OmIcon size={100} className="text-saffron-400 om-pulse" />
          </div>
          <div className="absolute bottom-10 right-10">
            <LotusIcon size={120} className="text-lotus-pink-400" />
          </div>
        </div>
        
        <div className="spiritual-container text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 gradient-text">
              Our Divine Services
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Explore our comprehensive range of spiritual and astrological services designed to guide you on your divine path
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="spiritual-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <motion.div
                  key={service.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    hover: { duration: 0.3 }
                  }}
                  viewport={{ once: true }}
                  className="spiritual-card-enhanced group cursor-pointer"
                >
                  <Link href={service.href} className="block h-full">
                    <div className={`${service.bgColor} w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`w-8 h-8 ${service.color}`} />
                    </div>
                    <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-saffron-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-500">
                          <div className="w-1.5 h-1.5 bg-saffron-400 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto text-saffron-500 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn More →
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-saffron-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <MandalaIcon size={200} className="text-saffron-400 mandala-rotate" />
          </div>
        </div>
        
        <div className="spiritual-container text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 gradient-text">
              Ready to Begin Your Spiritual Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Connect with our expert astrologers and discover the divine guidance that awaits you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/consultation" className="spiritual-button text-lg py-3 px-8 sacred-glow">
                Book Consultation
              </Link>
              <Link href="/contact" className="spiritual-button-secondary text-lg py-3 px-8 border-white text-white hover:bg-white hover:text-gray-900">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
