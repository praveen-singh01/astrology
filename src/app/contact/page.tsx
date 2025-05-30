'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { 
  OmIcon, 
  LotusIcon,
  TempleIcon
} from '@/components/icons/SacredIcons'
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline'

const ContactPage: React.FC = () => {
  const { t } = useTranslation(['common', 'home'])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: 'Phone',
      titleHi: 'फोन',
      details: ['+91 98765 43210', '+91 87654 32109'],
      description: 'Call us for immediate assistance'
    },
    {
      icon: EnvelopeIcon,
      title: 'Email',
      titleHi: 'ईमेल',
      details: ['info@kashivedic.com', 'consultation@kashivedic.com'],
      description: 'Send us your queries anytime'
    },
    {
      icon: MapPinIcon,
      title: 'Address',
      titleHi: 'पता',
      details: ['Kashi Vedic Ashram', 'Dashashwamedh Ghat, Varanasi', 'Uttar Pradesh 221001, India'],
      description: 'Visit our sacred center'
    },
    {
      icon: ClockIcon,
      title: 'Hours',
      titleHi: 'समय',
      details: ['Mon-Sat: 6:00 AM - 9:00 PM', 'Sunday: 6:00 AM - 6:00 PM'],
      description: 'Our consultation hours'
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
    setIsSubmitting(false)
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
              Contact Us
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Reach out to us for spiritual guidance, consultations, or any questions about our services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="spiritual-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center spiritual-card-enhanced"
                >
                  <div className="w-16 h-16 bg-gradient-saffron rounded-full mx-auto mb-4 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{info.title}</h3>
                  <div className="space-y-1 mb-3">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500">{info.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gray-50">
        <div className="spiritual-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="spiritual-card-enhanced">
                <h2 className="text-2xl font-serif font-bold mb-6 gradient-text">
                  Send Us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="spiritual-input"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="spiritual-input"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="spiritual-input"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="spiritual-input"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="consultation">Consultation Inquiry</option>
                      <option value="puja">Puja Booking</option>
                      <option value="gemstone">Gemstone Consultation</option>
                      <option value="vastu">Vastu Consultation</option>
                      <option value="general">General Inquiry</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="spiritual-input"
                      placeholder="Please describe your inquiry in detail..."
                      required
                    ></textarea>
                  </div>
                  
                  <div className="text-center">
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="spiritual-button text-lg py-3 px-8 sacred-glow disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <div className="spiritual-card-enhanced">
                <h3 className="text-xl font-serif font-bold mb-4 gradient-text">
                  Visit Our Sacred Center
                </h3>
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <TempleIcon className="w-16 h-16 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Interactive Map</p>
                    <p className="text-sm text-gray-400">Dashashwamedh Ghat, Varanasi</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  Located in the heart of the holy city of Varanasi, our ashram is easily accessible from all major landmarks. We are just a few minutes walk from the famous Dashashwamedh Ghat.
                </p>
              </div>

              {/* Quick Contact */}
              <div className="spiritual-card-enhanced">
                <h3 className="text-xl font-serif font-bold mb-4 gradient-text">
                  Need Immediate Help?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <ChatBubbleLeftRightIcon className="w-5 h-5 text-saffron-500" />
                    <div>
                      <p className="font-medium">Live Chat</p>
                      <p className="text-sm text-gray-600">Available 24/7 for urgent queries</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <PhoneIcon className="w-5 h-5 text-saffron-500" />
                    <div>
                      <p className="font-medium">Emergency Consultation</p>
                      <p className="text-sm text-gray-600">Call +91 98765 43210</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold mb-3">Follow Us</h4>
                  <div className="flex space-x-4">
                    <div className="w-10 h-10 bg-saffron-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-saffron-200 transition-colors">
                      <span className="text-saffron-600">📘</span>
                    </div>
                    <div className="w-10 h-10 bg-saffron-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-saffron-200 transition-colors">
                      <span className="text-saffron-600">📷</span>
                    </div>
                    <div className="w-10 h-10 bg-saffron-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-saffron-200 transition-colors">
                      <span className="text-saffron-600">🐦</span>
                    </div>
                    <div className="w-10 h-10 bg-saffron-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-saffron-200 transition-colors">
                      <span className="text-saffron-600">📺</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
