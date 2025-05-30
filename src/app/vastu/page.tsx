'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { OmIcon, LotusIcon, MandalaIcon } from '@/components/icons/SacredIcons'

const VastuPage: React.FC = () => {
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
              Vastu Shastra
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Harmonize your living and working spaces with ancient Vastu principles
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="spiritual-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Home Consultation', description: 'Complete Vastu analysis for residential properties' },
              { title: 'Office Planning', description: 'Optimize your workspace for success and prosperity' },
              { title: 'Construction Guidance', description: 'Vastu-compliant building design and planning' },
              { title: 'Remedial Solutions', description: 'Correct Vastu defects without major renovations' },
              { title: 'Interior Design', description: 'Vastu-based interior layout and decoration' },
              { title: 'Site Selection', description: 'Choose the perfect location for your property' }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="spiritual-card-enhanced text-center"
              >
                <div className="w-16 h-16 bg-gradient-saffron rounded-full mx-auto mb-4 flex items-center justify-center">
                  <MandalaIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button className="spiritual-button text-sm py-2 px-4">
                  Book Consultation
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default VastuPage
