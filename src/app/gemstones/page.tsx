'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { OmIcon, LotusIcon } from '@/components/icons/SacredIcons'

const GemstonesPage: React.FC = () => {
  const gemstones = [
    { name: 'Ruby', nameHi: 'माणिक्य', planet: 'Sun', benefits: 'Leadership, Confidence, Health' },
    { name: 'Pearl', nameHi: 'मोती', planet: 'Moon', benefits: 'Peace, Emotional Balance, Intuition' },
    { name: 'Red Coral', nameHi: 'मूंगा', planet: 'Mars', benefits: 'Courage, Energy, Protection' },
    { name: 'Emerald', nameHi: 'पन्ना', planet: 'Mercury', benefits: 'Intelligence, Communication, Business' },
    { name: 'Yellow Sapphire', nameHi: 'पुखराज', planet: 'Jupiter', benefits: 'Wisdom, Prosperity, Spirituality' },
    { name: 'Diamond', nameHi: 'हीरा', planet: 'Venus', benefits: 'Love, Luxury, Artistic Abilities' },
    { name: 'Blue Sapphire', nameHi: 'नीलम', planet: 'Saturn', benefits: 'Discipline, Focus, Success' },
    { name: 'Hessonite', nameHi: 'गोमेद', planet: 'Rahu', benefits: 'Clarity, Protection from Negativity' },
    { name: 'Cat\'s Eye', nameHi: 'लहसुनिया', planet: 'Ketu', benefits: 'Spiritual Growth, Intuition' }
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
              Gemstone Consultation
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Discover the perfect gemstones to enhance your spiritual energy and well-being
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="spiritual-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gemstones.map((gem, index) => (
              <motion.div
                key={gem.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="spiritual-card-enhanced text-center"
              >
                <div className="w-16 h-16 bg-gradient-saffron rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">💎</span>
                </div>
                <h3 className="text-xl font-serif font-bold mb-2">{gem.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{gem.nameHi}</p>
                <div className="space-y-2 text-sm">
                  <div><span className="font-medium">Planet:</span> {gem.planet}</div>
                  <div><span className="font-medium">Benefits:</span> {gem.benefits}</div>
                </div>
                <button className="mt-4 spiritual-button text-sm py-2 px-4">
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default GemstonesPage
