'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { OmIcon, LotusIcon } from '@/components/icons/SacredIcons'

const ConsultationPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-saffron-50 via-temple-gold-50/50 to-lotus-pink-50/30 relative overflow-hidden">
        <div className="spiritual-container text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 gradient-text">
              Live Consultation
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Connect with our expert astrologers for personalized guidance and spiritual insights
            </p>
          </motion.div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="spiritual-container">
          <div className="text-center">
            <h2 className="text-3xl font-serif font-bold mb-4 gradient-text">Book Your Consultation</h2>
            <p className="text-gray-600 mb-8">Choose from our experienced astrologers</p>
            <button className="spiritual-button text-lg py-3 px-8 sacred-glow">
              Book Now
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ConsultationPage
