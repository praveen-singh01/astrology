'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { 
  OmIcon, 
  LotusIcon, 
  DiyaIcon, 
  TempleIcon,
  AartiIcon,
  KalashIcon,
  ConchIcon 
} from '@/components/icons/SacredIcons'
import { 
  ChatBubbleLeftRightIcon,
  CalendarDaysIcon,
  SparklesIcon,
  BookOpenIcon,
  PhoneIcon
} from '@heroicons/react/24/outline'

interface FABAction {
  icon: React.ComponentType<any>
  label: string
  href: string
  color: string
  bgColor: string
  sacredIcon?: React.ComponentType<any>
}

export default function SpiritualFAB() {
  const [isOpen, setIsOpen] = useState(false)

  const actions: FABAction[] = [
    {
      icon: ChatBubbleLeftRightIcon,
      sacredIcon: OmIcon,
      label: 'Live Consultation',
      href: '/consultation',
      color: 'text-white',
      bgColor: 'bg-gradient-divine-premium'
    },
    {
      icon: CalendarDaysIcon,
      sacredIcon: KalashIcon,
      label: 'Book Puja',
      href: '/puja',
      color: 'text-white',
      bgColor: 'bg-gradient-temple-premium'
    },
    {
      icon: SparklesIcon,
      sacredIcon: LotusIcon,
      label: 'Daily Horoscope',
      href: '/horoscope',
      color: 'text-white',
      bgColor: 'bg-gradient-sacred-premium'
    },
    {
      icon: BookOpenIcon,
      sacredIcon: ConchIcon,
      label: 'Kundli Analysis',
      href: '/kundli',
      color: 'text-white',
      bgColor: 'bg-gradient-spiritual-premium'
    },
    {
      icon: PhoneIcon,
      sacredIcon: AartiIcon,
      label: 'Emergency Guidance',
      href: '/emergency',
      color: 'text-white',
      bgColor: 'bg-gradient-maroon'
    }
  ]

  const toggleFAB = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Action Items */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-20 right-0 space-y-3"
          >
            {actions.map((action, index) => {
              const IconComponent = action.icon
              const SacredIconComponent = action.sacredIcon
              
              return (
                <motion.div
                  key={action.href}
                  initial={{ 
                    opacity: 0, 
                    scale: 0.3, 
                    x: 50,
                    rotate: 180
                  }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1, 
                    x: 0,
                    rotate: 0
                  }}
                  exit={{ 
                    opacity: 0, 
                    scale: 0.3, 
                    x: 50,
                    rotate: -180
                  }}
                  transition={{ 
                    duration: 0.3, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 200,
                    damping: 20
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    x: -10
                  }}
                  className="flex items-center space-x-3"
                >
                  {/* Action Label */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="bg-white/95 dark:bg-night-sky-600/95 backdrop-blur-md px-4 py-2 rounded-lg shadow-lg border border-gray-200 dark:border-night-sky-400"
                  >
                    <span className="text-sm font-medium text-gray-900 dark:text-night-sky-50 whitespace-nowrap">
                      {action.label}
                    </span>
                  </motion.div>
                  
                  {/* Action Button */}
                  <Link href={action.href}>
                    <motion.div
                      className={`
                        relative w-14 h-14 rounded-full ${action.bgColor} 
                        flex items-center justify-center shadow-xl
                        hover:shadow-2xl transition-all duration-300
                        group cursor-pointer overflow-hidden
                      `}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Main Icon */}
                      <IconComponent className={`w-6 h-6 ${action.color} z-10 relative`} />
                      
                      {/* Sacred Icon Overlay */}
                      {SacredIconComponent && (
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                          animate={{
                            rotate: 360,
                            scale: [1, 1.1, 1]
                          }}
                          transition={{
                            rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                          }}
                        >
                          <SacredIconComponent size={32} className="text-white" />
                        </motion.div>
                      )}
                      
                      {/* Sacred Glow Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-sacred-glow opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-full"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0, 0.3, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      
                      {/* Shimmer Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-divine-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main FAB Button */}
      <motion.button
        onClick={toggleFAB}
        className={`
          relative w-16 h-16 rounded-full bg-gradient-divine-premium 
          flex items-center justify-center shadow-2xl
          hover:shadow-3xl transition-all duration-300
          group overflow-hidden
        `}
        whileHover={{ 
          scale: 1.1,
          rotate: isOpen ? 45 : 0
        }}
        whileTap={{ scale: 0.95 }}
        animate={{
          rotate: isOpen ? 45 : 0,
          boxShadow: isOpen 
            ? '0 0 30px rgba(255, 153, 51, 0.6), 0 0 60px rgba(255, 153, 51, 0.3)' 
            : '0 0 20px rgba(255, 153, 51, 0.4), 0 0 40px rgba(255, 153, 51, 0.2)'
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Main Icon */}
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
              transition={{ duration: 0.2 }}
              className="text-white"
            >
              ✕
            </motion.div>
          ) : (
            <motion.div
              key="om"
              initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              <OmIcon size={32} className="text-white" animated={true} />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Floating Sacred Elements */}
        <motion.div
          className="absolute -top-2 -right-2 opacity-60"
          animate={{
            y: [0, -5, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <DiyaIcon size={16} className="text-temple-gold-300" />
        </motion.div>
        
        <motion.div
          className="absolute -bottom-2 -left-2 opacity-60"
          animate={{
            y: [0, 3, 0],
            rotate: [0, -5, 5, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <LotusIcon size={14} className="text-lotus-pink-300" />
        </motion.div>
        
        {/* Sacred Aura */}
        <motion.div
          className="absolute inset-0 bg-gradient-sacred-glow opacity-30 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Rotating Sacred Border */}
        <motion.div
          className="absolute inset-0 border-2 border-temple-gold-300 rounded-full opacity-50"
          animate={{ rotate: 360 }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.button>
    </div>
  )
}
