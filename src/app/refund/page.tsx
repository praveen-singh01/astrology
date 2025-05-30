'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { OmIcon } from '@/components/icons/SacredIcons'

const RefundPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-saffron-50 via-temple-gold-50/50 to-lotus-pink-50/30">
        <div className="spiritual-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <OmIcon size={60} className="text-bhagwa-500 mx-auto sacred-glow mb-6" />
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 gradient-text">
              Refund Policy
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Fair and transparent refund policy for our spiritual services
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="spiritual-container max-w-4xl mx-auto">
          <div className="spiritual-card-enhanced">
            <div className="prose prose-lg max-w-none">
              <h2 className="spiritual-subheading text-bhagwa-600">Consultation Refunds</h2>
              <p className="spiritual-text mb-6">
                We are committed to providing quality spiritual guidance. If you are not satisfied with your consultation, you may request a refund within 24 hours of the session.
              </p>
              
              <h2 className="spiritual-subheading text-bhagwa-600">Refund Eligibility</h2>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>Consultation did not take place due to technical issues on our end</li>
                <li>Astrologer was significantly late (more than 15 minutes) without prior notice</li>
                <li>Service quality did not meet our promised standards</li>
                <li>Duplicate payment or billing errors</li>
              </ul>
              
              <h2 className="spiritual-subheading text-bhagwa-600">Non-Refundable Services</h2>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>Completed consultations where service was delivered as promised</li>
                <li>Digital reports and birth charts that have been delivered</li>
                <li>Puja services that have been performed</li>
                <li>Gemstone purchases (unless defective)</li>
              </ul>
              
              <h2 className="spiritual-subheading text-bhagwa-600">Refund Process</h2>
              <p className="spiritual-text mb-6">
                To request a refund, please contact our support team at refunds@kashivedic.com within the eligible timeframe. Include your booking reference and reason for the refund request. We will process approved refunds within 5-7 business days.
              </p>

              <div className="bg-bhagwa-50 p-6 rounded-lg border-l-4 border-bhagwa-400 mt-8">
                <p className="text-bhagwa-700 font-medium">
                  🕉️ Our Commitment: We believe in fair treatment and will always work with you to resolve any concerns about our services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RefundPage
