'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { OmIcon, LotusIcon } from '@/components/icons/SacredIcons'

const TestimonialsPage: React.FC = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      nameHi: "प्रिया शर्मा",
      location: "Mumbai",
      text: "Acharya Vidya Sagar's guidance has been life-changing. His accurate predictions and spiritual advice helped me navigate through difficult times.",
      textHi: "आचार्य विद्या सागर का मार्गदर्शन जीवन बदलने वाला रहा है। उनकी सटीक भविष्यवाणियों और आध्यात्मिक सलाह ने मुझे कठिन समय से निकलने में मदद की।",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      nameHi: "राजेश कुमार",
      location: "Delhi",
      text: "The birth chart analysis was incredibly detailed and accurate. It gave me clarity about my career path and relationships.",
      textHi: "जन्म कुंडली का विश्लेषण अविश्वसनीय रूप से विस्तृत और सटीक था। इसने मुझे अपने करियर और रिश्तों के बारे में स्पष्टता दी।",
      rating: 5
    },
    {
      name: "Anita Patel",
      nameHi: "अनीता पटेल",
      location: "Ahmedabad",
      text: "The puja services and gemstone recommendations have brought positive energy into my home. Highly recommended!",
      textHi: "पूजा सेवाओं और रत्न की सिफारिशों ने मेरे घर में सकारात्मक ऊर्जा लाई है। अत्यधिक अनुशंसित!",
      rating: 5
    }
  ]

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
              Testimonials
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Sacred stories from our spiritual community
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="spiritual-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="spiritual-card-enhanced"
              >
                <div className="flex items-center mb-4">
                  <LotusIcon size={40} className="text-lotus-pink-500 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-bhagwa-600">{testimonial.nameHi}</p>
                    <p className="text-xs text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-temple-gold-400 text-lg">⭐</span>
                  ))}
                </div>
                
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="text-gray-600 text-sm">"{testimonial.textHi}"</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-bhagwa-50 p-8 rounded-lg border border-bhagwa-200 max-w-2xl mx-auto">
              <h3 className="spiritual-subheading text-bhagwa-600 mb-4">Share Your Experience</h3>
              <p className="text-gray-700 mb-6">
                Have you experienced transformation through our services? We'd love to hear your story.
              </p>
              <a 
                href="mailto:testimonials@kashivedic.com" 
                className="spiritual-button"
              >
                Share Your Testimonial
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TestimonialsPage
