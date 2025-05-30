'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import {
  OmIcon,
  LotusIcon,
  YantraIcon,
  MandalaIcon
} from '@/components/icons/SacredIcons'

const KundliPage: React.FC = () => {
  const { t } = useTranslation(['common', 'home'])
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    dateOfBirth: '',
    timeOfBirth: '',
    placeOfBirth: '',
    latitude: '',
    longitude: ''
  })
  const [showKundli, setShowKundli] = useState(false)
  const [activeChart, setActiveChart] = useState<'rashi' | 'navamsa' | 'dashamsa'>('rashi')
  const [loading, setLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call for kundli generation
    await new Promise(resolve => setTimeout(resolve, 2000))

    setLoading(false)
    setShowKundli(true)
  }

  const kundliFeatures = [
    {
      icon: YantraIcon,
      title: 'Birth Chart Analysis',
      titleHi: 'जन्म कुंडली विश्लेषण',
      description: 'Detailed analysis of planetary positions at the time of birth'
    },
    {
      icon: MandalaIcon,
      title: 'Dasha Predictions',
      titleHi: 'दशा भविष्यवाणी',
      description: 'Planetary periods and their effects on your life'
    },
    {
      icon: OmIcon,
      title: 'Remedial Measures',
      titleHi: 'उपचारात्मक उपाय',
      description: 'Personalized remedies to overcome challenges'
    },
    {
      icon: LotusIcon,
      title: 'Life Predictions',
      titleHi: 'जीवन भविष्यवाणी',
      description: 'Insights into career, marriage, health, and prosperity'
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-bhagwa-50 via-temple-gold-50/50 to-lotus-pink-50/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10">
            <OmIcon size={100} className="text-bhagwa-400 om-pulse" />
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
              Kundli Analysis
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Generate your personalized birth chart and discover the cosmic blueprint of your life
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="spiritual-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4 gradient-text">What You'll Discover</h2>
            <p className="text-gray-600">Comprehensive insights from your birth chart analysis</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {kundliFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center spiritual-card-enhanced"
                >
                  <div className="w-16 h-16 bg-gradient-bhagwa rounded-full mx-auto mb-4 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Kundli Form */}
      <section className="py-16 bg-gray-50">
        <div className="spiritual-container max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="spiritual-card-enhanced">
              <h2 className="text-2xl font-serif font-bold mb-6 text-center gradient-text">
                Generate Your Kundli
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
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
                    Gender *
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="spiritual-input"
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      className="spiritual-input"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Time of Birth *
                    </label>
                    <input
                      type="time"
                      name="timeOfBirth"
                      value={formData.timeOfBirth}
                      onChange={handleInputChange}
                      className="spiritual-input"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Place of Birth *
                  </label>
                  <input
                    type="text"
                    name="placeOfBirth"
                    value={formData.placeOfBirth}
                    onChange={handleInputChange}
                    className="spiritual-input"
                    placeholder="City, State, Country"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Latitude (Optional)
                    </label>
                    <input
                      type="text"
                      name="latitude"
                      value={formData.latitude}
                      onChange={handleInputChange}
                      className="spiritual-input"
                      placeholder="e.g., 25.3176"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Longitude (Optional)
                    </label>
                    <input
                      type="text"
                      name="longitude"
                      value={formData.longitude}
                      onChange={handleInputChange}
                      className="spiritual-input"
                      placeholder="e.g., 82.9739"
                    />
                  </div>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={loading}
                    className="spiritual-button text-lg py-3 px-8 sacred-glow disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Generating Kundli...
                      </div>
                    ) : (
                      'Generate Kundli'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Kundli Display */}
      {showKundli && (
        <section className="py-16 bg-white">
          <div className="spiritual-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-serif font-bold mb-8 text-center gradient-text">
                Your Kundli - {formData.name}
              </h2>

              {/* Chart Type Selector */}
              <div className="flex justify-center mb-8">
                <div className="bg-gray-100 rounded-lg p-1 flex space-x-1">
                  {[
                    { id: 'rashi', label: 'Rashi Chart', labelHi: 'राशि चार्ट' },
                    { id: 'navamsa', label: 'Navamsa Chart', labelHi: 'नवांश चार्ट' },
                    { id: 'dashamsa', label: 'Dashamsa Chart', labelHi: 'दशांश चार्ट' }
                  ].map((chart) => (
                    <button
                      key={chart.id}
                      onClick={() => setActiveChart(chart.id as 'rashi' | 'navamsa' | 'dashamsa')}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        activeChart === chart.id
                          ? 'bg-bhagwa-400 text-white'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {chart.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Birth Chart */}
                <div className="spiritual-card-enhanced">
                  <h3 className="text-xl font-serif font-bold mb-4">
                    {activeChart === 'rashi' && 'Rashi Chart (Birth Chart)'}
                    {activeChart === 'navamsa' && 'Navamsa Chart (D9)'}
                    {activeChart === 'dashamsa' && 'Dashamsa Chart (D10)'}
                  </h3>
                  <div className="bg-gray-100 h-80 rounded-lg flex items-center justify-center relative">
                    {/* Simplified Chart Grid */}
                    <div className="grid grid-cols-4 grid-rows-4 w-72 h-72 border-2 border-bhagwa-400">
                      {Array.from({ length: 16 }, (_, i) => {
                        const houseNumber = i < 4 ? i + 1 :
                                         i < 8 ? 12 - (i - 4) :
                                         i < 12 ? 9 - (i - 8) :
                                         4 + (i - 12)
                        return (
                          <div
                            key={i}
                            className="border border-gray-300 flex items-center justify-center text-xs font-medium relative bg-white"
                          >
                            <span className="absolute top-1 left-1 text-bhagwa-600 text-xs">{houseNumber}</span>
                            {/* Sample planet placements based on chart type */}
                            {activeChart === 'rashi' && (
                              <>
                                {houseNumber === 1 && <span className="text-red-600 text-xs">Ma</span>}
                                {houseNumber === 5 && <span className="text-orange-600 text-xs">Su</span>}
                                {houseNumber === 8 && <span className="text-blue-600 text-xs">Mo</span>}
                                {houseNumber === 6 && <span className="text-green-600 text-xs">Me</span>}
                                {houseNumber === 9 && <span className="text-purple-600 text-xs">Ju</span>}
                                {houseNumber === 4 && <span className="text-pink-600 text-xs">Ve</span>}
                                {houseNumber === 10 && <span className="text-gray-600 text-xs">Sa</span>}
                              </>
                            )}
                            {activeChart === 'navamsa' && (
                              <>
                                {houseNumber === 2 && <span className="text-red-600 text-xs">Ma</span>}
                                {houseNumber === 7 && <span className="text-orange-600 text-xs">Su</span>}
                                {houseNumber === 11 && <span className="text-blue-600 text-xs">Mo</span>}
                                {houseNumber === 3 && <span className="text-green-600 text-xs">Me</span>}
                                {houseNumber === 1 && <span className="text-purple-600 text-xs">Ju</span>}
                                {houseNumber === 9 && <span className="text-pink-600 text-xs">Ve</span>}
                                {houseNumber === 12 && <span className="text-gray-600 text-xs">Sa</span>}
                              </>
                            )}
                            {activeChart === 'dashamsa' && (
                              <>
                                {houseNumber === 3 && <span className="text-red-600 text-xs">Ma</span>}
                                {houseNumber === 8 && <span className="text-orange-600 text-xs">Su</span>}
                                {houseNumber === 2 && <span className="text-blue-600 text-xs">Mo</span>}
                                {houseNumber === 7 && <span className="text-green-600 text-xs">Me</span>}
                                {houseNumber === 11 && <span className="text-purple-600 text-xs">Ju</span>}
                                {houseNumber === 5 && <span className="text-pink-600 text-xs">Ve</span>}
                                {houseNumber === 1 && <span className="text-gray-600 text-xs">Sa</span>}
                              </>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-gray-600">
                    <p><strong>Legend:</strong> Su-Sun, Mo-Moon, Ma-Mars, Me-Mercury, Ju-Jupiter, Ve-Venus, Sa-Saturn</p>
                  </div>
                </div>

                {/* Basic Details */}
                <div className="spiritual-card-enhanced">
                  <h3 className="text-xl font-serif font-bold mb-4">Birth Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-medium">Name:</span>
                      <span>{formData.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Date of Birth:</span>
                      <span>{formData.dateOfBirth}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Time of Birth:</span>
                      <span>{formData.timeOfBirth}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Place of Birth:</span>
                      <span>{formData.placeOfBirth}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Sun Sign:</span>
                      <span>Leo ♌</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Moon Sign:</span>
                      <span>Scorpio ♏</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Ascendant:</span>
                      <span>Gemini ♊</span>
                    </div>
                  </div>
                </div>

                {/* Planetary Positions */}
                <div className="spiritual-card-enhanced">
                  <h3 className="text-xl font-serif font-bold mb-4">Planetary Positions</h3>
                  <div className="space-y-2">
                    {[
                      { planet: 'Sun (सूर्य)', sign: 'Leo', degree: '15°23\'' },
                      { planet: 'Moon (चंद्र)', sign: 'Scorpio', degree: '8°45\'' },
                      { planet: 'Mars (मंगल)', sign: 'Aries', degree: '22°12\'' },
                      { planet: 'Mercury (बुध)', sign: 'Virgo', degree: '3°56\'' },
                      { planet: 'Jupiter (बृहस्पति)', sign: 'Sagittarius', degree: '18°34\'' },
                      { planet: 'Venus (शुक्र)', sign: 'Cancer', degree: '12°28\'' },
                      { planet: 'Saturn (शनि)', sign: 'Capricorn', degree: '25°17\'' }
                    ].map((planet, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span className="font-medium">{planet.planet}:</span>
                        <span>{planet.sign} {planet.degree}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Insights */}
                <div className="spiritual-card-enhanced">
                  <h3 className="text-xl font-serif font-bold mb-4">Key Insights</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-bhagwa-600 mb-2">Personality Traits</h4>
                      <p className="text-sm text-gray-600">Strong leadership qualities, creative nature, and natural charisma. You have a magnetic personality that draws people to you.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-bhagwa-600 mb-2">Career Prospects</h4>
                      <p className="text-sm text-gray-600">Excellent potential in creative fields, management, or entrepreneurship. Your innovative ideas will bring success.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-bhagwa-600 mb-2">Relationships</h4>
                      <p className="text-sm text-gray-600">Deep emotional connections are important to you. You seek meaningful relationships and are a loyal partner.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-8">
                <button className="spiritual-button text-lg py-3 px-8 mr-4">
                  Download Full Report
                </button>
                <button className="spiritual-button-secondary text-lg py-3 px-8">
                  Book Consultation
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  )
}

export default KundliPage
