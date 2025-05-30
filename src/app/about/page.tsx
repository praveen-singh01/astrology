'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { 
  OmIcon, 
  LotusIcon,
  TempleIcon,
  MandalaIcon
} from '@/components/icons/SacredIcons'

const AboutPage: React.FC = () => {
  const { t } = useTranslation(['common', 'home'])

  const values = [
    {
      icon: OmIcon,
      title: 'Authentic Wisdom',
      titleHi: 'प्रामाणिक ज्ञान',
      description: 'We preserve and share the ancient Vedic knowledge passed down through generations of learned sages.',
      descriptionHi: 'हम पीढ़ियों से चले आ रहे विद्वान ऋषियों के प्राचीन वैदिक ज्ञान को संरक्षित और साझा करते हैं।'
    },
    {
      icon: LotusIcon,
      title: 'Spiritual Growth',
      titleHi: 'आध्यात्मिक विकास',
      description: 'Our mission is to guide seekers on their path to spiritual enlightenment and self-discovery.',
      descriptionHi: 'हमारा मिशन साधकों को आध्यात्मिक ज्ञान और आत्म-खोज के पथ पर मार्गदर्शन करना है।'
    },
    {
      icon: TempleIcon,
      title: 'Sacred Traditions',
      titleHi: 'पवित्र परंपराएं',
      description: 'We honor and maintain the sacred traditions of Hindu astrology and spiritual practices.',
      descriptionHi: 'हम हिंदू ज्योतिष और आध्यात्मिक प्रथाओं की पवित्र परंपराओं का सम्मान और रखरखाव करते हैं।'
    },
    {
      icon: MandalaIcon,
      title: 'Holistic Approach',
      titleHi: 'समग्र दृष्टिकोण',
      description: 'We believe in addressing the mind, body, and soul for complete spiritual well-being.',
      descriptionHi: 'हम पूर्ण आध्यात्मिक कल्याण के लिए मन, शरीर और आत्मा को संबोधित करने में विश्वास करते हैं।'
    }
  ]

  const team = [
    {
      name: 'Acharya Ramesh Sharma',
      nameHi: 'आचार्य रमेश शर्मा',
      role: 'Founder & Chief Astrologer',
      roleHi: 'संस्थापक और मुख्य ज्योतिषी',
      experience: '25+ years',
      description: 'A renowned Vedic astrologer with deep knowledge of ancient scriptures and modern applications.',
      descriptionHi: 'प्राचीन शास्त्रों और आधुनिक अनुप्रयोगों के गहन ज्ञान के साथ एक प्रसिद्ध वैदिक ज्योतिषी।',
      image: '/images/founder.jpg'
    },
    {
      name: 'Dr. Priya Devi',
      nameHi: 'डॉ. प्रिया देवी',
      role: 'Senior Astrologer',
      roleHi: 'वरिष्ठ ज्योतिषी',
      experience: '18+ years',
      description: 'Specialist in palmistry, numerology, and spiritual counseling with a PhD in Sanskrit.',
      descriptionHi: 'संस्कृत में पीएचडी के साथ हस्तरेखा, अंकज्योतिष और आध्यात्मिक परामर्श में विशेषज्ञ।',
      image: '/images/senior-astrologer.jpg'
    },
    {
      name: 'Pandit Vikash Joshi',
      nameHi: 'पंडित विकाश जोशी',
      role: 'Vastu Consultant',
      roleHi: 'वास्तु सलाहकार',
      experience: '20+ years',
      description: 'Expert in Vastu Shastra and sacred architecture with extensive temple consultation experience.',
      descriptionHi: 'व्यापक मंदिर परामर्श अनुभव के साथ वास्तु शास्त्र और पवित्र वास्तुकला में विशेषज्ञ।',
      image: '/images/vastu-expert.jpg'
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
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <MandalaIcon size={200} className="text-divine-purple-300 mandala-rotate" />
          </div>
        </div>
        
        <div className="spiritual-container text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 gradient-text">
              About Kashi Vedic
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Preserving ancient wisdom for modern seekers on their spiritual journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="spiritual-container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 gradient-text">
                Our Sacred Journey
              </h2>
              <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
                <p className="mb-6">
                  Founded in the holy city of Varanasi (Kashi), our spiritual center has been a beacon of ancient Vedic wisdom for over two decades. We began as a small ashram dedicated to preserving the sacred knowledge of our ancestors and making it accessible to modern seekers.
                </p>
                <p className="mb-6">
                  Our journey started when Acharya Ramesh Sharma, after years of studying under renowned gurus in the Himalayas, felt called to share the profound insights of Vedic astrology with the world. What began as personal consultations in a humble temple courtyard has grown into a comprehensive spiritual guidance center.
                </p>
                <p>
                  Today, we serve thousands of seekers worldwide, bridging the gap between ancient wisdom and contemporary life. Our mission remains unchanged: to illuminate the path of dharma and help souls discover their divine purpose through the sacred sciences of astrology, palmistry, numerology, and spiritual counseling.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="spiritual-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 gradient-text">
              Our Sacred Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide our spiritual mission and service to humanity
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-saffron rounded-full mx-auto mb-6 flex items-center justify-center">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="spiritual-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 gradient-text">
              Our Spiritual Guides
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the enlightened souls who dedicate their lives to guiding others on the spiritual path
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="spiritual-card-enhanced text-center"
              >
                <div className="w-24 h-24 bg-gradient-saffron rounded-full mx-auto mb-6 flex items-center justify-center">
                  <OmIcon className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-2">{member.name}</h3>
                <p className="text-saffron-600 font-medium mb-2">{member.role}</p>
                <p className="text-sm text-gray-500 mb-4">{member.experience} experience</p>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-saffron-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <MandalaIcon size={300} className="text-saffron-400 mandala-rotate" />
          </div>
        </div>
        
        <div className="spiritual-container text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 gradient-text">
              Our Sacred Mission
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                "To illuminate the path of dharma for every soul seeking truth, providing authentic Vedic guidance that honors ancient wisdom while addressing modern challenges. We are committed to preserving the sacred knowledge of our ancestors and making it accessible to all who seek spiritual growth and divine connection."
              </p>
              <div className="text-center">
                <span className="text-2xl text-saffron-400">🕉️ सत्यमेव जयते 🕉️</span>
                <p className="text-sm text-gray-400 mt-2">Truth Alone Triumphs</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
