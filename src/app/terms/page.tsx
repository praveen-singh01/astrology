'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { OmIcon } from '@/components/icons/SacredIcons'

const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-saffron-50 via-temple-gold-50/50 to-lotus-pink-50/30">
        <div className="spiritual-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 gradient-text">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Terms and conditions for using our spiritual services
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="spiritual-container max-w-4xl mx-auto">
          <div className="spiritual-card-enhanced">
            <div className="prose prose-lg max-w-none">
              <h2>Acceptance of Terms</h2>
              <p>By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.</p>
              
              <h2>Use License</h2>
              <p>Permission is granted to temporarily access our services for personal, non-commercial transitory viewing only.</p>
              
              <h2>Disclaimer</h2>
              <p>Our astrological services are for entertainment and guidance purposes only. We do not guarantee specific outcomes or results.</p>
              
              <h2>Limitations</h2>
              <p>In no event shall Kashi Vedic or its suppliers be liable for any damages arising out of the use or inability to use our services.</p>
              
              <h2>Governing Law</h2>
              <p>These terms and conditions are governed by and construed in accordance with the laws of India.</p>
              
              <h2>Contact Information</h2>
              <p>If you have any questions about these Terms of Service, please contact us at legal@kashivedic.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TermsPage
