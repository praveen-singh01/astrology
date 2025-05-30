'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { OmIcon, LotusIcon, DiyaIcon } from '@/components/icons/SacredIcons'
import { StarIcon } from '@heroicons/react/24/outline'

const AstrologersPage: React.FC = () => {
  const astrologers = [
    {
      name: 'Pandit Raj Kumar Sharma',
      specialization: 'Vedic Astrology & Kundli Analysis',
      experience: '15+ years',
      rating: 4.9,
      reviews: 1250,
      languages: ['Hindi', 'English', 'Sanskrit'],
      available: true
    },
    {
      name: 'Acharya Priya Devi',
      specialization: 'Palmistry & Tarot Reading',
      experience: '12+ years',
      rating: 4.8,
      reviews: 980,
      languages: ['Hindi', 'English'],
      available: true
    },
    {
      name: 'Guru Vikash Joshi',
      specialization: 'Numerology & Vastu Shastra',
      experience: '20+ years',
      rating: 4.9,
      reviews: 1500,
      languages: ['Hindi', 'English', 'Gujarati'],
      available: false
    }
  ]

  return (
    <div className="min-h-screen pt-20">
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
              Our Expert Astrologers
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Connect with experienced and certified astrologers for personalized guidance
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="spiritual-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {astrologers.map((astrologer, index) => (
              <motion.div
                key={astrologer.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`spiritual-card-enhanced ${!astrologer.available ? 'opacity-60' : ''}`}
              >
                <div className="relative text-center">
                  <div className="w-20 h-20 bg-gradient-saffron rounded-full mx-auto mb-4 flex items-center justify-center">
                    <DiyaIcon className="w-10 h-10 text-white" />
                  </div>
                  {astrologer.available ? (
                    <div className="absolute top-0 right-0 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                      Online
                    </div>
                  ) : (
                    <div className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                      Busy
                    </div>
                  )}
                </div>
                
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-1">{astrologer.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{astrologer.specialization}</p>
                  
                  <div className="flex items-center justify-center mb-2">
                    <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium ml-1">{astrologer.rating}</span>
                    <span className="text-sm text-gray-500 ml-1">({astrologer.reviews} reviews)</span>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-3">{astrologer.experience} experience</p>
                  
                  <div className="flex flex-wrap gap-1 justify-center mb-4">
                    {astrologer.languages.map((lang) => (
                      <span key={lang} className="text-xs bg-saffron-100 text-saffron-700 px-2 py-1 rounded">
                        {lang}
                      </span>
                    ))}
                  </div>
                  
                  {astrologer.available && (
                    <button className="w-full spiritual-button text-sm py-2">
                      Consult Now
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AstrologersPage
