'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import {
  OmIcon,
  LotusIcon,
  DiyaIcon
} from '@/components/icons/SacredIcons'

const HoroscopePage: React.FC = () => {
  const { t } = useTranslation(['common', 'home'])
  const [selectedSign, setSelectedSign] = useState<string>('aries')
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split('T')[0])
  const [horoscopeType, setHoroscopeType] = useState<'daily' | 'weekly' | 'monthly'>('daily')

  const zodiacSigns = [
    {
      id: 'aries',
      name: 'Aries',
      nameHi: 'मेष',
      symbol: '♈',
      element: 'Fire',
      elementHi: 'अग्नि',
      dates: 'Mar 21 - Apr 19',
      datesHi: '21 मार्च - 19 अप्रैल',
      ruling: 'Mars',
      rulingHi: 'मंगल',
      color: 'text-red-500'
    },
    {
      id: 'taurus',
      name: 'Taurus',
      nameHi: 'वृषभ',
      symbol: '♉',
      element: 'Earth',
      elementHi: 'पृथ्वी',
      dates: 'Apr 20 - May 20',
      datesHi: '20 अप्रैल - 20 मई',
      ruling: 'Venus',
      rulingHi: 'शुक्र',
      color: 'text-green-500'
    },
    {
      id: 'gemini',
      name: 'Gemini',
      nameHi: 'मिथुन',
      symbol: '♊',
      element: 'Air',
      elementHi: 'वायु',
      dates: 'May 21 - Jun 20',
      datesHi: '21 मई - 20 जून',
      ruling: 'Mercury',
      rulingHi: 'बुध',
      color: 'text-yellow-500'
    },
    {
      id: 'cancer',
      name: 'Cancer',
      nameHi: 'कर्क',
      symbol: '♋',
      element: 'Water',
      elementHi: 'जल',
      dates: 'Jun 21 - Jul 22',
      datesHi: '21 जून - 22 जुलाई',
      ruling: 'Moon',
      rulingHi: 'चंद्र',
      color: 'text-blue-500'
    },
    {
      id: 'leo',
      name: 'Leo',
      nameHi: 'सिंह',
      symbol: '♌',
      element: 'Fire',
      elementHi: 'अग्नि',
      dates: 'Jul 23 - Aug 22',
      datesHi: '23 जुलाई - 22 अगस्त',
      ruling: 'Sun',
      rulingHi: 'सूर्य',
      color: 'text-orange-500'
    },
    {
      id: 'virgo',
      name: 'Virgo',
      nameHi: 'कन्या',
      symbol: '♍',
      element: 'Earth',
      elementHi: 'पृथ्वी',
      dates: 'Aug 23 - Sep 22',
      datesHi: '23 अगस्त - 22 सितंबर',
      ruling: 'Mercury',
      rulingHi: 'बुध',
      color: 'text-green-600'
    },
    {
      id: 'libra',
      name: 'Libra',
      nameHi: 'तुला',
      symbol: '♎',
      element: 'Air',
      elementHi: 'वायु',
      dates: 'Sep 23 - Oct 22',
      datesHi: '23 सितंबर - 22 अक्टूबर',
      ruling: 'Venus',
      rulingHi: 'शुक्र',
      color: 'text-pink-500'
    },
    {
      id: 'scorpio',
      name: 'Scorpio',
      nameHi: 'वृश्चिक',
      symbol: '♏',
      element: 'Water',
      elementHi: 'जल',
      dates: 'Oct 23 - Nov 21',
      datesHi: '23 अक्टूबर - 21 नवंबर',
      ruling: 'Mars',
      rulingHi: 'मंगल',
      color: 'text-red-600'
    },
    {
      id: 'sagittarius',
      name: 'Sagittarius',
      nameHi: 'धनु',
      symbol: '♐',
      element: 'Fire',
      elementHi: 'अग्नि',
      dates: 'Nov 22 - Dec 21',
      datesHi: '22 नवंबर - 21 दिसंबर',
      ruling: 'Jupiter',
      rulingHi: 'बृहस्पति',
      color: 'text-purple-500'
    },
    {
      id: 'capricorn',
      name: 'Capricorn',
      nameHi: 'मकर',
      symbol: '♑',
      element: 'Earth',
      elementHi: 'पृथ्वी',
      dates: 'Dec 22 - Jan 19',
      datesHi: '22 दिसंबर - 19 जनवरी',
      ruling: 'Saturn',
      rulingHi: 'शनि',
      color: 'text-gray-600'
    },
    {
      id: 'aquarius',
      name: 'Aquarius',
      nameHi: 'कुंभ',
      symbol: '♒',
      element: 'Air',
      elementHi: 'वायु',
      dates: 'Jan 20 - Feb 18',
      datesHi: '20 जनवरी - 18 फरवरी',
      ruling: 'Saturn',
      rulingHi: 'शनि',
      color: 'text-cyan-500'
    },
    {
      id: 'pisces',
      name: 'Pisces',
      nameHi: 'मीन',
      symbol: '♓',
      element: 'Water',
      elementHi: 'जल',
      dates: 'Feb 19 - Mar 20',
      datesHi: '19 फरवरी - 20 मार्च',
      ruling: 'Jupiter',
      rulingHi: 'बृहस्पति',
      color: 'text-blue-600'
    }
  ]

  const horoscopeData = {
    aries: {
      daily: {
        today: "Today brings new opportunities for growth and expansion. Your natural leadership qualities will be highlighted, making it an excellent day for taking initiative in both personal and professional matters.",
        love: "Romance is in the air! Single Aries may encounter someone special, while those in relationships will experience deeper connection with their partner.",
        career: "Your ambitious nature will pay off today. A project you've been working on may receive recognition from superiors.",
        health: "High energy levels today, but remember to balance activity with rest. Stay hydrated and maintain a healthy diet.",
        lucky: { number: 7, color: "Red", time: "2:00 PM - 4:00 PM" }
      },
      weekly: {
        today: "This week focuses on personal transformation and new beginnings. Mars energizes your sector of self-improvement.",
        love: "Mid-week brings romantic opportunities. Weekend is perfect for deepening existing relationships.",
        career: "Professional growth accelerates. New projects or responsibilities may come your way by Thursday.",
        health: "Maintain consistent exercise routine. Pay attention to stress levels during busy periods.",
        lucky: { number: 3, color: "Orange", time: "Morning hours" }
      },
      monthly: {
        today: "March emphasizes career advancement and personal goals. Your ruling planet Mars supports ambitious endeavors.",
        love: "Relationship dynamics shift positively. Single Aries attract meaningful connections around mid-month.",
        career: "Major career opportunities emerge. Leadership roles or promotions are highly favored.",
        health: "Focus on building long-term healthy habits. Energy levels remain consistently high.",
        lucky: { number: 9, color: "Crimson", time: "Afternoon" }
      }
    },
    taurus: {
      daily: {
        today: "Stability and comfort are your themes today. Focus on practical matters and enjoy simple pleasures.",
        love: "Steady progress in relationships. Show appreciation for your partner's loyalty and support.",
        career: "Methodical approach to work pays off. Avoid rushing important decisions.",
        health: "Good day for relaxation and self-care. Consider a massage or peaceful walk in nature.",
        lucky: { number: 6, color: "Green", time: "Evening" }
      },
      weekly: {
        today: "Venus brings harmony to your week. Focus on beauty, comfort, and financial stability.",
        love: "Romantic gestures are well-received. Plan something special for the weekend.",
        career: "Steady progress in professional matters. Avoid major changes this week.",
        health: "Maintain regular eating habits. Your body craves consistency and nourishment.",
        lucky: { number: 2, color: "Pink", time: "Late afternoon" }
      },
      monthly: {
        today: "Financial matters take center stage this month. Venus supports material growth and stability.",
        love: "Relationships deepen through shared values and goals. Commitment themes are strong.",
        career: "Slow but steady career progress. Focus on building solid foundations.",
        health: "Establish sustainable wellness routines. Your body responds well to gradual changes.",
        lucky: { number: 8, color: "Earth tones", time: "Morning" }
      }
    }
    // Add more signs as needed
  }

  const selectedSignData = zodiacSigns.find(sign => sign.id === selectedSign)
  const currentHoroscope = horoscopeData[selectedSign as keyof typeof horoscopeData]?.[horoscopeType] || horoscopeData.aries.daily

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const navigateDate = (direction: 'prev' | 'next') => {
    const currentDate = new Date(selectedDate)
    if (direction === 'prev') {
      currentDate.setDate(currentDate.getDate() - 1)
    } else {
      currentDate.setDate(currentDate.getDate() + 1)
    }
    setSelectedDate(currentDate.toISOString().split('T')[0])
  }

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
              Daily Horoscope
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Discover what the stars have in store for you today with personalized Vedic astrology insights
            </p>
            {/* Date Navigation */}
            <div className="flex items-center justify-center space-x-4 mb-6">
              <button
                onClick={() => navigateDate('prev')}
                className="p-2 rounded-full bg-bhagwa-100 text-bhagwa-600 hover:bg-bhagwa-200 transition-colors"
              >
                ←
              </button>
              <div className="text-lg text-bhagwa-600 font-medium min-w-[200px] text-center">
                {formatDate(selectedDate)}
              </div>
              <button
                onClick={() => navigateDate('next')}
                className="p-2 rounded-full bg-bhagwa-100 text-bhagwa-600 hover:bg-bhagwa-200 transition-colors"
              >
                →
              </button>
            </div>

            {/* Horoscope Type Selector */}
            <div className="flex justify-center mb-6">
              <div className="bg-gray-100 rounded-lg p-1 flex space-x-1">
                {[
                  { id: 'daily', label: 'Daily', labelHi: 'दैनिक' },
                  { id: 'weekly', label: 'Weekly', labelHi: 'साप्ताहिक' },
                  { id: 'monthly', label: 'Monthly', labelHi: 'मासिक' }
                ].map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setHoroscopeType(type.id as 'daily' | 'weekly' | 'monthly')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      horoscopeType === type.id
                        ? 'bg-bhagwa-400 text-white'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Zodiac Signs Grid */}
      <section className="py-16 bg-white">
        <div className="spiritual-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4 gradient-text">Select Your Zodiac Sign</h2>
            <p className="text-gray-600">Choose your sun sign to get personalized predictions</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
            {zodiacSigns.map((sign, index) => (
              <motion.div
                key={sign.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  selectedSign === sign.id
                    ? 'border-bhagwa-500 bg-bhagwa-50 shadow-lg'
                    : 'border-gray-200 hover:border-bhagwa-300 hover:shadow-md'
                }`}
                onClick={() => setSelectedSign(sign.id)}
              >
                <div className="text-center">
                  <div className={`text-3xl mb-2 ${sign.color}`}>
                    {sign.symbol}
                  </div>
                  <h3 className="font-semibold text-sm">{sign.name}</h3>
                  <p className="text-xs text-gray-500">{sign.nameHi}</p>
                  <p className="text-xs text-gray-400 mt-1">{sign.dates}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Sign Details */}
      {selectedSignData && (
        <section className="py-16 bg-gray-50">
          <div className="spiritual-container">
            <motion.div
              key={selectedSign}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              {/* Sign Header */}
              <div className="text-center mb-12">
                <div className={`text-6xl mb-4 ${selectedSignData.color}`}>
                  {selectedSignData.symbol}
                </div>
                <h2 className="text-3xl font-serif font-bold mb-2 gradient-text">
                  {selectedSignData.name} ({selectedSignData.nameHi})
                </h2>
                <div className="flex justify-center space-x-8 text-sm text-gray-600">
                  <div>
                    <span className="font-medium">Element:</span> {selectedSignData.element} ({selectedSignData.elementHi})
                  </div>
                  <div>
                    <span className="font-medium">Ruling Planet:</span> {selectedSignData.ruling} ({selectedSignData.rulingHi})
                  </div>
                  <div>
                    <span className="font-medium">Dates:</span> {selectedSignData.dates}
                  </div>
                </div>
              </div>

              {/* Horoscope Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Today's Prediction */}
                <div className="spiritual-card-enhanced">
                  <div className="flex items-center mb-4">
                    <DiyaIcon className="w-6 h-6 text-saffron-500 mr-2" />
                    <h3 className="text-xl font-serif font-bold">Today's Prediction</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{currentHoroscope.today}</p>
                </div>

                {/* Love & Relationships */}
                <div className="spiritual-card-enhanced">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-2">💕</span>
                    <h3 className="text-xl font-serif font-bold">Love & Relationships</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{currentHoroscope.love}</p>
                </div>

                {/* Career & Finance */}
                <div className="spiritual-card-enhanced">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-2">💼</span>
                    <h3 className="text-xl font-serif font-bold">Career & Finance</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{currentHoroscope.career}</p>
                </div>

                {/* Health & Wellness */}
                <div className="spiritual-card-enhanced">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-2">🌿</span>
                    <h3 className="text-xl font-serif font-bold">Health & Wellness</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{currentHoroscope.health}</p>
                </div>
              </div>

              {/* Lucky Elements */}
              <div className="mt-8 spiritual-card-enhanced">
                <h3 className="text-xl font-serif font-bold mb-4 text-center gradient-text">
                  Today's Lucky Elements
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl mb-2">🔢</div>
                    <h4 className="font-semibold">Lucky Number</h4>
                    <p className="text-bhagwa-600 font-bold text-xl">{currentHoroscope.lucky.number}</p>
                  </div>
                  <div>
                    <div className="text-2xl mb-2">🎨</div>
                    <h4 className="font-semibold">Lucky Color</h4>
                    <p className="text-bhagwa-600 font-bold text-xl">{currentHoroscope.lucky.color}</p>
                  </div>
                  <div>
                    <div className="text-2xl mb-2">⏰</div>
                    <h4 className="font-semibold">Lucky Time</h4>
                    <p className="text-bhagwa-600 font-bold text-xl">{currentHoroscope.lucky.time}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-saffron-900 text-white">
        <div className="spiritual-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif font-bold mb-6 gradient-text">
              Want More Detailed Insights?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get personalized consultations and detailed birth chart analysis from our expert astrologers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="spiritual-button text-lg py-3 px-8 sacred-glow">
                Book Personal Reading
              </button>
              <button className="spiritual-button-secondary text-lg py-3 px-8 border-white text-white hover:bg-white hover:text-gray-900">
                Generate Kundli
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HoroscopePage
