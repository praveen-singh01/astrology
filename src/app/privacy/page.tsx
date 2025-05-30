'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { OmIcon } from '@/components/icons/SacredIcons'

const PrivacyPage: React.FC = () => {
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
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Your privacy and data security are sacred to us
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="spiritual-container max-w-4xl mx-auto">
          <div className="spiritual-card-enhanced">
            <div className="prose prose-lg max-w-none">
              <h2>Information We Collect</h2>
              <p>We collect information you provide directly to us, such as when you create an account, book consultations, or contact us for support.</p>
              
              <h2>How We Use Your Information</h2>
              <p>We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.</p>
              
              <h2>Information Sharing</h2>
              <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.</p>
              
              <h2>Data Security</h2>
              <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
              
              <h2>Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at privacy@kashivedic.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPage
