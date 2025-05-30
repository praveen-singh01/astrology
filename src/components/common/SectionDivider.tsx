'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { OmIcon, LotusIcon, MandalaIcon } from '@/components/icons/SacredIcons'

interface SectionDividerProps {
  type?: 'temple-arch' | 'lotus' | 'mandala' | 'toran' | 'simple'
  className?: string
  animated?: boolean
}

export default function SectionDivider({ 
  type = 'simple', 
  className = '', 
  animated = true 
}: SectionDividerProps) {
  
  if (type === 'temple-arch') {
    return (
      <motion.div 
        className={`temple-arch-divider ${className}`}
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {animated && (
          <motion.div
            className="absolute inset-0 bg-gradient-divine-shimmer"
            animate={{ x: ['-100%', '100%'] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}
      </motion.div>
    )
  }

  if (type === 'lotus') {
    return (
      <motion.div 
        className={`lotus-divider ${className}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.div
          className="flex items-center justify-center"
          animate={animated ? { scale: [1, 1.05, 1] } : {}}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <LotusIcon 
            size={48} 
            className="text-lotus-pink-500 drop-shadow-lg" 
            animated={animated}
          />
        </motion.div>
      </motion.div>
    )
  }

  if (type === 'mandala') {
    return (
      <motion.div 
        className={`flex justify-center py-8 ${className}`}
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="relative">
          <MandalaIcon 
            size={80} 
            className="text-divine-purple-500 drop-shadow-xl" 
            animated={animated}
          />
          {animated && (
            <>
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-sacred-glow"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -inset-4 rounded-full border border-divine-purple-300"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </>
          )}
        </div>
      </motion.div>
    )
  }

  if (type === 'toran') {
    return (
      <motion.div 
        className={`toran-border ${className}`}
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="flex justify-center space-x-4 pt-4">
          <motion.div
            animate={animated ? { y: [0, -5, 0] } : {}}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0
            }}
          >
            <OmIcon size={24} className="text-bhagwa-500" />
          </motion.div>
          <motion.div
            animate={animated ? { y: [0, -5, 0] } : {}}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3
            }}
          >
            <span className="text-2xl text-temple-gold-500">🪷</span>
          </motion.div>
          <motion.div
            animate={animated ? { y: [0, -5, 0] } : {}}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.6
            }}
          >
            <OmIcon size={24} className="text-bhagwa-500" />
          </motion.div>
        </div>
      </motion.div>
    )
  }

  // Simple divider
  return (
    <motion.div 
      className={`flex justify-center py-6 ${className}`}
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="h-px w-32 bg-gradient-to-r from-transparent via-bhagwa-400 to-transparent" />
    </motion.div>
  )
}

// Premium Animated Sanskrit Shloka Component
export const AnimatedShloka: React.FC<{
  text: string
  translation?: string
  className?: string
}> = ({ text, translation, className = '' }) => {
  return (
    <motion.div 
      className={`text-center py-8 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.div
        className="sanskrit-text text-2xl md:text-3xl font-serif text-bhagwa-600 mb-4 spiritual-text-shadow"
        animate={{
          textShadow: [
            '0 2px 4px rgba(255, 153, 51, 0.3)',
            '0 4px 8px rgba(255, 153, 51, 0.5)',
            '0 2px 4px rgba(255, 153, 51, 0.3)'
          ]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {text}
      </motion.div>
      {translation && (
        <motion.p 
          className="text-lg text-gray-600 italic max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {translation}
        </motion.p>
      )}
    </motion.div>
  )
}

// Floating Sacred Motifs Component
export const FloatingSacredMotifs: React.FC<{
  className?: string
}> = ({ className = '' }) => {
  const motifs = [
    { icon: OmIcon, size: 60, color: 'text-bhagwa-400', delay: 0 },
    { icon: LotusIcon, size: 80, color: 'text-lotus-pink-400', delay: 2 },
    { icon: MandalaIcon, size: 100, color: 'text-divine-purple-300', delay: 4 },
  ]

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {motifs.map((motif, index) => (
        <motion.div
          key={index}
          className="absolute opacity-10"
          style={{
            top: `${20 + index * 30}%`,
            left: `${10 + index * 25}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 8 + index * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: motif.delay
          }}
        >
          <motif.icon 
            size={motif.size} 
            className={motif.color} 
            animated={true}
          />
        </motion.div>
      ))}
    </div>
  )
}
