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

interface BirthData {
  name: string
  gender: string
  dateOfBirth: string
  timeOfBirth: string
  placeOfBirth: string
  latitude: string
  longitude: string
}

interface PlanetPosition {
  planet: string
  planetHi: string
  sign: string
  signHi: string
  degree: string
  house: number
  retrograde: boolean
}

const BirthChartPage: React.FC = () => {
  const { t } = useTranslation(['common', 'home'])
  const [formData, setFormData] = useState<BirthData>({
    name: '',
    gender: '',
    dateOfBirth: '',
    timeOfBirth: '',
    placeOfBirth: '',
    latitude: '',
    longitude: ''
  })
  const [showChart, setShowChart] = useState(false)
  const [activeTab, setActiveTab] = useState('chart')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowChart(true)
  }

  // Sample planetary positions data
  const planetaryPositions: PlanetPosition[] = [
    { planet: 'Sun', planetHi: 'सूर्य', sign: 'Leo', signHi: 'सिंह', degree: '15°23\'', house: 5, retrograde: false },
    { planet: 'Moon', planetHi: 'चंद्र', sign: 'Scorpio', signHi: 'वृश्चिक', degree: '8°45\'', house: 8, retrograde: false },
    { planet: 'Mars', planetHi: 'मंगल', sign: 'Aries', signHi: 'मेष', degree: '22°12\'', house: 1, retrograde: false },
    { planet: 'Mercury', planetHi: 'बुध', sign: 'Virgo', signHi: 'कन्या', degree: '3°56\'', house: 6, retrograde: true },
    { planet: 'Jupiter', planetHi: 'बृहस्पति', sign: 'Sagittarius', signHi: 'धनु', degree: '18°34\'', house: 9, retrograde: false },
    { planet: 'Venus', planetHi: 'शुक्र', sign: 'Cancer', signHi: 'कर्क', degree: '12°28\'', house: 4, retrograde: false },
    { planet: 'Saturn', planetHi: 'शनि', sign: 'Capricorn', signHi: 'मकर', degree: '25°17\'', house: 10, retrograde: false },
    { planet: 'Rahu', planetHi: 'राहु', sign: 'Gemini', signHi: 'मिथुन', degree: '14°33\'', house: 3, retrograde: true },
    { planet: 'Ketu', planetHi: 'केतु', sign: 'Sagittarius', signHi: 'धनु', degree: '14°33\'', house: 9, retrograde: true }
  ]

  const houses = [
    { number: 1, name: 'Ascendant', nameHi: 'लग्न', significance: 'Self, personality, physical appearance' },
    { number: 2, name: 'Wealth', nameHi: 'धन', significance: 'Money, family, speech' },
    { number: 3, name: 'Courage', nameHi: 'साहस', significance: 'Siblings, courage, communication' },
    { number: 4, name: 'Home', nameHi: 'गृह', significance: 'Mother, home, property' },
    { number: 5, name: 'Children', nameHi: 'संतान', significance: 'Children, creativity, education' },
    { number: 6, name: 'Enemies', nameHi: 'शत्रु', significance: 'Health, enemies, service' },
    { number: 7, name: 'Partnership', nameHi: 'साझेदारी', significance: 'Marriage, partnerships' },
    { number: 8, name: 'Longevity', nameHi: 'आयु', significance: 'Longevity, transformation' },
    { number: 9, name: 'Fortune', nameHi: 'भाग्य', significance: 'Father, luck, spirituality' },
    { number: 10, name: 'Career', nameHi: 'कर्म', significance: 'Career, reputation, status' },
    { number: 11, name: 'Gains', nameHi: 'लाभ', significance: 'Gains, friends, aspirations' },
    { number: 12, name: 'Loss', nameHi: 'व्यय', significance: 'Expenses, spirituality, foreign lands' }
  ]

  const aspects = [
    { from: 'Sun', to: 'Mars', type: 'Trine', strength: 'Strong', effect: 'Positive' },
    { from: 'Moon', to: 'Venus', type: 'Sextile', strength: 'Moderate', effect: 'Positive' },
    { from: 'Mercury', to: 'Jupiter', type: 'Opposition', strength: 'Weak', effect: 'Challenging' },
    { from: 'Saturn', to: 'Mars', type: 'Square', strength: 'Strong', effect: 'Challenging' }
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
              Birth Chart Analysis
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Comprehensive natal chart calculations with detailed planetary positions, house placements, and aspect analysis
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="spiritual-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4 gradient-text">Advanced Birth Chart Features</h2>
            <p className="text-gray-600">Detailed astrological analysis with modern calculations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: YantraIcon,
                title: 'Precise Calculations',
                titleHi: 'सटीक गणना',
                description: 'Accurate planetary positions using Swiss Ephemeris'
              },
              {
                icon: MandalaIcon,
                title: 'House Analysis',
                titleHi: 'भाव विश्लेषण',
                description: 'Detailed analysis of all 12 houses and their significance'
              },
              {
                icon: OmIcon,
                title: 'Aspect Patterns',
                titleHi: 'दृष्टि योग',
                description: 'Planetary aspects and their influences on your life'
              },
              {
                icon: LotusIcon,
                title: 'Dasha Periods',
                titleHi: 'दशा काल',
                description: 'Planetary periods and their timing effects'
              }
            ].map((feature, index) => {
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

      {/* Birth Chart Form */}
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
                Generate Your Birth Chart
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
                  <button type="submit" className="spiritual-button text-lg py-3 px-8 sacred-glow">
                    Generate Birth Chart
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Birth Chart Display */}
      {showChart && (
        <section className="py-16 bg-white">
          <div className="spiritual-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-serif font-bold mb-8 text-center gradient-text">
                Birth Chart - {formData.name}
              </h2>

              {/* Tab Navigation */}
              <div className="flex justify-center mb-8">
                <div className="bg-gray-100 rounded-lg p-1 flex space-x-1">
                  {[
                    { id: 'chart', label: 'Birth Chart', labelHi: 'जन्म कुंडली' },
                    { id: 'planets', label: 'Planetary Positions', labelHi: 'ग्रह स्थिति' },
                    { id: 'houses', label: 'House Analysis', labelHi: 'भाव विश्लेषण' },
                    { id: 'aspects', label: 'Aspects', labelHi: 'दृष्टि योग' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        activeTab === tab.id
                          ? 'bg-bhagwa-400 text-white'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Chart Tab */}
              {activeTab === 'chart' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Birth Chart Visualization */}
                  <div className="spiritual-card-enhanced">
                    <h3 className="text-xl font-serif font-bold mb-4">Birth Chart (Rashi Chart)</h3>
                    <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center relative">
                      {/* Simplified Birth Chart Grid */}
                      <div className="grid grid-cols-4 grid-rows-4 w-80 h-80 border-2 border-bhagwa-400">
                        {Array.from({ length: 16 }, (_, i) => {
                          const houseNumber = i < 4 ? i + 1 :
                                           i < 8 ? 12 - (i - 4) :
                                           i < 12 ? 9 - (i - 8) :
                                           4 + (i - 12)
                          return (
                            <div
                              key={i}
                              className="border border-gray-300 flex items-center justify-center text-xs font-medium relative"
                            >
                              <span className="absolute top-1 left-1 text-bhagwa-600">{houseNumber}</span>
                              {/* Sample planet placements */}
                              {houseNumber === 1 && <span className="text-red-600">Ma</span>}
                              {houseNumber === 5 && <span className="text-orange-600">Su</span>}
                              {houseNumber === 8 && <span className="text-blue-600">Mo</span>}
                              {houseNumber === 6 && <span className="text-green-600">Me</span>}
                              {houseNumber === 9 && <span className="text-purple-600">Ju</span>}
                              {houseNumber === 4 && <span className="text-pink-600">Ve</span>}
                              {houseNumber === 10 && <span className="text-gray-600">Sa</span>}
                            </div>
                          )
                        })}
                      </div>
                    </div>
                    <div className="mt-4 text-sm text-gray-600">
                      <p><strong>Legend:</strong> Su-Sun, Mo-Moon, Ma-Mars, Me-Mercury, Ju-Jupiter, Ve-Venus, Sa-Saturn</p>
                    </div>
                  </div>

                  {/* Basic Chart Information */}
                  <div className="spiritual-card-enhanced">
                    <h3 className="text-xl font-serif font-bold mb-4">Chart Information</h3>
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
                      <hr className="my-4" />
                      <div className="flex justify-between">
                        <span className="font-medium">Ascendant (Lagna):</span>
                        <span>Gemini ♊ 12°34'</span>
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
                        <span className="font-medium">Nakshatra:</span>
                        <span>Anuradha</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Tithi:</span>
                        <span>Shukla Paksha Saptami</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Planetary Positions Tab */}
              {activeTab === 'planets' && (
                <div className="spiritual-card-enhanced">
                  <h3 className="text-xl font-serif font-bold mb-6">Planetary Positions</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 px-4 font-semibold">Planet</th>
                          <th className="text-left py-3 px-4 font-semibold">Sign</th>
                          <th className="text-left py-3 px-4 font-semibold">Degree</th>
                          <th className="text-left py-3 px-4 font-semibold">House</th>
                          <th className="text-left py-3 px-4 font-semibold">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {planetaryPositions.map((planet, index) => (
                          <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="py-3 px-4">
                              <div>
                                <div className="font-medium">{planet.planet}</div>
                                <div className="text-xs text-gray-500">{planet.planetHi}</div>
                              </div>
                            </td>
                            <td className="py-3 px-4">
                              <div>
                                <div className="font-medium">{planet.sign}</div>
                                <div className="text-xs text-gray-500">{planet.signHi}</div>
                              </div>
                            </td>
                            <td className="py-3 px-4 font-mono">{planet.degree}</td>
                            <td className="py-3 px-4">{planet.house}</td>
                            <td className="py-3 px-4">
                              {planet.retrograde ? (
                                <span className="text-red-600 text-xs">Retrograde</span>
                              ) : (
                                <span className="text-green-600 text-xs">Direct</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* House Analysis Tab */}
              {activeTab === 'houses' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {houses.map((house) => (
                    <div key={house.number} className="spiritual-card-enhanced">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 bg-bhagwa-400 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                          {house.number}
                        </div>
                        <div>
                          <h4 className="font-semibold">{house.name}</h4>
                          <p className="text-xs text-gray-500">{house.nameHi}</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">{house.significance}</p>
                      <div className="mt-3 text-xs">
                        <span className="font-medium">Planets: </span>
                        {house.number === 1 && <span className="text-red-600">Mars</span>}
                        {house.number === 5 && <span className="text-orange-600">Sun</span>}
                        {house.number === 8 && <span className="text-blue-600">Moon</span>}
                        {house.number === 6 && <span className="text-green-600">Mercury (R)</span>}
                        {house.number === 9 && <span className="text-purple-600">Jupiter, Ketu</span>}
                        {house.number === 4 && <span className="text-pink-600">Venus</span>}
                        {house.number === 10 && <span className="text-gray-600">Saturn</span>}
                        {house.number === 3 && <span className="text-indigo-600">Rahu</span>}
                        {![1, 3, 4, 5, 6, 8, 9, 10].includes(house.number) && <span className="text-gray-400">Empty</span>}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Aspects Tab */}
              {activeTab === 'aspects' && (
                <div className="spiritual-card-enhanced">
                  <h3 className="text-xl font-serif font-bold mb-6">Planetary Aspects</h3>
                  <div className="space-y-4">
                    {aspects.map((aspect, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <span className="font-semibold">{aspect.from}</span>
                            <span className="text-gray-500">→</span>
                            <span className="font-semibold">{aspect.to}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                              aspect.effect === 'Positive' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                            }`}>
                              {aspect.effect}
                            </span>
                            <span className="text-sm text-gray-600">{aspect.type}</span>
                          </div>
                        </div>
                        <div className="text-sm text-gray-600">
                          <span className="font-medium">Strength: </span>{aspect.strength}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="text-center mt-8">
                <button className="spiritual-button text-lg py-3 px-8 mr-4">
                  Download Detailed Report
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

export default BirthChartPage