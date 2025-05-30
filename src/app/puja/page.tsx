'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import {
  OmIcon,
  LotusIcon,
  TempleIcon,
  DiyaIcon
} from '@/components/icons/SacredIcons'

const PujaPage: React.FC = () => {
  const { t } = useTranslation(['common'])
  const [selectedPuja, setSelectedPuja] = useState<string | null>(null)
  const [bookingStep, setBookingStep] = useState<'details' | 'payment' | 'confirmation'>('details')
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    address: '',
    specialRequests: '',
    paymentMethod: 'card'
  })
  const [loading, setLoading] = useState(false)

  const pujas = [
    {
      id: 'ganesh',
      name: 'Ganesh Puja',
      nameHi: 'गणेश पूजा',
      description: 'Remove obstacles and bring prosperity to your life',
      descriptionHi: 'बाधाओं को दूर करें और अपने जीवन में समृद्धि लाएं',
      duration: '2-3 hours',
      price: 2500,
      benefits: ['Obstacle removal', 'Success in new ventures', 'Wisdom and prosperity'],
      image: '/images/ganesh-puja.jpg'
    },
    {
      id: 'lakshmi',
      name: 'Lakshmi Puja',
      nameHi: 'लक्ष्मी पूजा',
      description: 'Attract wealth, abundance and financial prosperity',
      descriptionHi: 'धन, समृद्धि और वित्तीय खुशहाली को आकर्षित करें',
      duration: '3-4 hours',
      price: 3500,
      benefits: ['Wealth attraction', 'Financial stability', 'Business growth'],
      image: '/images/lakshmi-puja.jpg'
    },
    {
      id: 'shiva',
      name: 'Shiva Puja',
      nameHi: 'शिव पूजा',
      description: 'Seek blessings for spiritual growth and inner peace',
      descriptionHi: 'आध्यात्मिक विकास और आंतरिक शांति के लिए आशीर्वाद मांगें',
      duration: '4-5 hours',
      price: 4000,
      benefits: ['Spiritual awakening', 'Inner peace', 'Negative energy removal'],
      image: '/images/shiva-puja.jpg'
    },
    {
      id: 'durga',
      name: 'Durga Puja',
      nameHi: 'दुर्गा पूजा',
      description: 'Protection from negative forces and empowerment',
      descriptionHi: 'नकारात्मक शक्तियों से सुरक्षा और सशक्तिकरण',
      duration: '5-6 hours',
      price: 5000,
      benefits: ['Protection from evil', 'Strength and courage', 'Victory over enemies'],
      image: '/images/durga-puja.jpg'
    },
    {
      id: 'saraswati',
      name: 'Saraswati Puja',
      nameHi: 'सरस्वती पूजा',
      description: 'Enhance knowledge, wisdom and creative abilities',
      descriptionHi: 'ज्ञान, बुद्धि और रचनात्मक क्षमताओं को बढ़ाएं',
      duration: '2-3 hours',
      price: 2000,
      benefits: ['Enhanced learning', 'Creative inspiration', 'Academic success'],
      image: '/images/saraswati-puja.jpg'
    },
    {
      id: 'hanuman',
      name: 'Hanuman Puja',
      nameHi: 'हनुमान पूजा',
      description: 'Gain strength, courage and protection from difficulties',
      descriptionHi: 'शक्ति, साहस और कठिनाइयों से सुरक्षा प्राप्त करें',
      duration: '3-4 hours',
      price: 3000,
      benefits: ['Physical strength', 'Mental courage', 'Protection from harm'],
      image: '/images/hanuman-puja.jpg'
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setBookingData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (bookingStep === 'details') {
      setBookingStep('payment')
    } else if (bookingStep === 'payment') {
      setLoading(true)
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 3000))
      setLoading(false)
      setBookingStep('confirmation')
    }
  }

  const resetBooking = () => {
    setSelectedPuja(null)
    setBookingStep('details')
    setBookingData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      address: '',
      specialRequests: '',
      paymentMethod: 'card'
    })
  }

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
        </div>

        <div className="spiritual-container text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 gradient-text">
              Sacred Puja Services
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Book authentic Hindu rituals and ceremonies performed by experienced priests for divine blessings
            </p>
          </motion.div>
        </div>
      </section>

      {/* Puja Categories */}
      <section className="py-16 bg-white">
        <div className="spiritual-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4 gradient-text">Choose Your Sacred Ritual</h2>
            <p className="text-gray-600">Select from our collection of traditional pujas and ceremonies</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pujas.map((puja, index) => (
              <motion.div
                key={puja.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  hover: { duration: 0.3 }
                }}
                viewport={{ once: true }}
                className={`spiritual-card-enhanced cursor-pointer transition-all duration-300 ${
                  selectedPuja === puja.id ? 'ring-2 ring-bhagwa-500' : ''
                }`}
                onClick={() => setSelectedPuja(puja.id)}
              >
                <div className="text-center mb-4">
                  <div className="w-20 h-20 bg-gradient-bhagwa rounded-full mx-auto mb-4 flex items-center justify-center">
                    <TempleIcon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-2">{puja.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{puja.nameHi}</p>
                  <p className="text-gray-600 mb-4">{puja.description}</p>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Duration:</span>
                    <span>{puja.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Price:</span>
                    <span className="text-bhagwa-600 font-bold">₹{puja.price}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {puja.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-xs text-gray-600">
                        <DiyaIcon className="w-3 h-3 text-bhagwa-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full spiritual-button text-sm py-2">
                  Book This Puja
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      {selectedPuja && (
        <section className="py-16 bg-gray-50">
          <div className="spiritual-container max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="spiritual-card-enhanced"
            >
              {/* Progress Steps */}
              <div className="flex items-center justify-center mb-8">
                <div className="flex items-center space-x-4">
                  <div className={`flex items-center ${bookingStep === 'details' ? 'text-bhagwa-600' : bookingStep === 'payment' || bookingStep === 'confirmation' ? 'text-green-600' : 'text-gray-400'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${bookingStep === 'details' ? 'bg-bhagwa-600 text-white' : bookingStep === 'payment' || bookingStep === 'confirmation' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                      1
                    </div>
                    <span className="ml-2 text-sm font-medium">Details</span>
                  </div>
                  <div className="w-8 h-0.5 bg-gray-300"></div>
                  <div className={`flex items-center ${bookingStep === 'payment' ? 'text-bhagwa-600' : bookingStep === 'confirmation' ? 'text-green-600' : 'text-gray-400'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${bookingStep === 'payment' ? 'bg-bhagwa-600 text-white' : bookingStep === 'confirmation' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                      2
                    </div>
                    <span className="ml-2 text-sm font-medium">Payment</span>
                  </div>
                  <div className="w-8 h-0.5 bg-gray-300"></div>
                  <div className={`flex items-center ${bookingStep === 'confirmation' ? 'text-green-600' : 'text-gray-400'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${bookingStep === 'confirmation' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                      3
                    </div>
                    <span className="ml-2 text-sm font-medium">Confirmation</span>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-serif font-bold mb-6 text-center gradient-text">
                {bookingStep === 'details' && `Book Your ${pujas.find(p => p.id === selectedPuja)?.name}`}
                {bookingStep === 'payment' && 'Payment Details'}
                {bookingStep === 'confirmation' && 'Booking Confirmed!'}
              </h3>

              {bookingStep === 'confirmation' ? (
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-green-100 rounded-full mx-auto flex items-center justify-center">
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-green-600 mb-2">Booking Successful!</h4>
                    <p className="text-gray-600 mb-4">Your puja has been booked successfully. You will receive a confirmation email shortly.</p>
                    <div className="bg-gray-50 p-4 rounded-lg text-left max-w-md mx-auto">
                      <h5 className="font-semibold mb-2">Booking Details:</h5>
                      <div className="text-sm space-y-1">
                        <div className="flex justify-between">
                          <span>Booking ID:</span>
                          <span className="font-mono">PJ{Date.now().toString().slice(-6)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Puja:</span>
                          <span>{pujas.find(p => p.id === selectedPuja)?.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Date:</span>
                          <span>{bookingData.date}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Time:</span>
                          <span>{bookingData.time}</span>
                        </div>
                        <div className="flex justify-between font-bold">
                          <span>Amount Paid:</span>
                          <span>₹{pujas.find(p => p.id === selectedPuja)?.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center space-x-4">
                    <button
                      onClick={resetBooking}
                      className="spiritual-button-secondary py-2 px-6"
                    >
                      Book Another Puja
                    </button>
                    <button className="spiritual-button py-2 px-6">
                      Download Receipt
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-6">
                {bookingStep === 'details' && (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={bookingData.name}
                          onChange={handleInputChange}
                          className="spiritual-input"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={bookingData.phone}
                          onChange={handleInputChange}
                          className="spiritual-input"
                          placeholder="+91 XXXXX XXXXX"
                          required
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
                        value={bookingData.email}
                        onChange={handleInputChange}
                        className="spiritual-input"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Date *
                        </label>
                        <input
                          type="date"
                          name="date"
                          value={bookingData.date}
                          onChange={handleInputChange}
                          className="spiritual-input"
                          min={new Date().toISOString().split('T')[0]}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Time
                        </label>
                        <select
                          name="time"
                          value={bookingData.time}
                          onChange={handleInputChange}
                          className="spiritual-input"
                        >
                          <option value="">Select time</option>
                          <option value="morning">Morning (6:00 AM - 12:00 PM)</option>
                          <option value="afternoon">Afternoon (12:00 PM - 6:00 PM)</option>
                          <option value="evening">Evening (6:00 PM - 10:00 PM)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Address for Puja *
                      </label>
                      <textarea
                        rows={3}
                        name="address"
                        value={bookingData.address}
                        onChange={handleInputChange}
                        className="spiritual-input"
                        placeholder="Enter complete address where puja will be performed"
                        required
                      ></textarea>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Special Requirements
                      </label>
                      <textarea
                        rows={3}
                        name="specialRequests"
                        value={bookingData.specialRequests}
                        onChange={handleInputChange}
                        className="spiritual-input"
                        placeholder="Any specific requirements or requests for the puja..."
                      ></textarea>
                    </div>
                  </>
                )}

                {bookingStep === 'payment' && (
                  <>
                    <div className="bg-gray-50 p-4 rounded-lg mb-6">
                      <h4 className="font-semibold mb-3">Booking Summary</h4>
                      <div className="text-sm space-y-2">
                        <div className="flex justify-between">
                          <span>Name:</span>
                          <span>{bookingData.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Puja:</span>
                          <span>{pujas.find(p => p.id === selectedPuja)?.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Date:</span>
                          <span>{bookingData.date}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Time:</span>
                          <span>{bookingData.time}</span>
                        </div>
                        <hr className="my-2" />
                        <div className="flex justify-between font-bold text-lg">
                          <span>Total Amount:</span>
                          <span className="text-bhagwa-600">₹{pujas.find(p => p.id === selectedPuja)?.price}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Payment Method *
                      </label>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="card"
                            name="paymentMethod"
                            value="card"
                            checked={bookingData.paymentMethod === 'card'}
                            onChange={handleInputChange}
                            className="mr-3"
                          />
                          <label htmlFor="card" className="flex items-center">
                            <span className="text-2xl mr-2">💳</span>
                            Credit/Debit Card
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="upi"
                            name="paymentMethod"
                            value="upi"
                            checked={bookingData.paymentMethod === 'upi'}
                            onChange={handleInputChange}
                            className="mr-3"
                          />
                          <label htmlFor="upi" className="flex items-center">
                            <span className="text-2xl mr-2">📱</span>
                            UPI Payment
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="netbanking"
                            name="paymentMethod"
                            value="netbanking"
                            checked={bookingData.paymentMethod === 'netbanking'}
                            onChange={handleInputChange}
                            className="mr-3"
                          />
                          <label htmlFor="netbanking" className="flex items-center">
                            <span className="text-2xl mr-2">🏦</span>
                            Net Banking
                          </label>
                        </div>
                      </div>
                    </div>

                    {bookingData.paymentMethod === 'card' && (
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Card Number *
                          </label>
                          <input
                            type="text"
                            className="spiritual-input"
                            placeholder="1234 5678 9012 3456"
                            maxLength={19}
                            required
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Expiry Date *
                            </label>
                            <input
                              type="text"
                              className="spiritual-input"
                              placeholder="MM/YY"
                              maxLength={5}
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              CVV *
                            </label>
                            <input
                              type="text"
                              className="spiritual-input"
                              placeholder="123"
                              maxLength={3}
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Cardholder Name *
                          </label>
                          <input
                            type="text"
                            className="spiritual-input"
                            placeholder="Name as on card"
                            required
                          />
                        </div>
                      </div>
                    )}

                    {bookingData.paymentMethod === 'upi' && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          UPI ID *
                        </label>
                        <input
                          type="text"
                          className="spiritual-input"
                          placeholder="yourname@upi"
                          required
                        />
                      </div>
                    )}
                  </>
                )}

                {bookingStep === 'details' && (
                  <div className="bg-bhagwa-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Puja Details:</h4>
                    <div className="text-sm space-y-1">
                      <div className="flex justify-between">
                        <span>Puja:</span>
                        <span>{pujas.find(p => p.id === selectedPuja)?.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Duration:</span>
                        <span>{pujas.find(p => p.id === selectedPuja)?.duration}</span>
                      </div>
                      <div className="flex justify-between font-bold">
                        <span>Total Amount:</span>
                        <span>₹{pujas.find(p => p.id === selectedPuja)?.price}</span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex justify-between">
                  {bookingStep === 'payment' && (
                    <button
                      type="button"
                      onClick={() => setBookingStep('details')}
                      className="spiritual-button-secondary py-3 px-6"
                    >
                      Back to Details
                    </button>
                  )}
                  <button
                    type="submit"
                    disabled={loading}
                    className={`spiritual-button text-lg py-3 px-8 sacred-glow disabled:opacity-50 disabled:cursor-not-allowed ${bookingStep === 'payment' ? 'ml-auto' : 'mx-auto'}`}
                  >
                    {loading ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Processing Payment...
                      </div>
                    ) : bookingStep === 'details' ? (
                      'Proceed to Payment'
                    ) : (
                      `Pay ₹${pujas.find(p => p.id === selectedPuja)?.price}`
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </section>
      )}

      {/* Information Section */}
      <section className="py-16 bg-white">
        <div className="spiritual-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-8 gradient-text">
              Why Choose Our Puja Services?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-bhagwa rounded-full mx-auto mb-4 flex items-center justify-center">
                  <OmIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Authentic Rituals</h3>
                <p className="text-gray-600 text-sm">Traditional ceremonies performed according to ancient Vedic scriptures</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-bhagwa rounded-full mx-auto mb-4 flex items-center justify-center">
                  <TempleIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Experienced Priests</h3>
                <p className="text-gray-600 text-sm">Certified and experienced priests with deep knowledge of rituals</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-bhagwa rounded-full mx-auto mb-4 flex items-center justify-center">
                  <LotusIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Sacred Materials</h3>
                <p className="text-gray-600 text-sm">All puja materials and offerings included in the service</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PujaPage
