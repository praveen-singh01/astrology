'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { OmIcon, MandalaIcon, LotusIcon } from '@/components/icons/SacredIcons'

interface SpiritualLoaderProps {
  type?: 'om' | 'mandala' | 'lotus' | 'full'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  message?: string
  className?: string
}

export default function SpiritualLoader({ 
  type = 'full', 
  size = 'md', 
  message = 'Loading sacred wisdom...',
  className = '' 
}: SpiritualLoaderProps) {
  
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16', 
    lg: 'w-24 h-24',
    xl: 'w-32 h-32'
  }

  const containerSizes = {
    sm: 'w-20 h-20',
    md: 'w-32 h-32',
    lg: 'w-40 h-40', 
    xl: 'w-48 h-48'
  }

  if (type === 'om') {
    return (
      <div className={`flex flex-col items-center justify-center ${className}`}>
        <motion.div
          className={`${containerSizes[size]} relative flex items-center justify-center`}
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <OmIcon 
              size={parseInt(sizeClasses[size].split('-')[1]) * 4} 
              className="text-bhagwa-500 sacred-glow" 
              animated={true}
            />
          </motion.div>
          
          {/* Sacred circles */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute border border-bhagwa-300 rounded-full"
              style={{
                width: `${100 + i * 20}%`,
                height: `${100 + i * 20}%`
              }}
              animate={{ rotate: -360 }}
              transition={{
                duration: 6 + i * 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </motion.div>
        
        {message && (
          <motion.p
            className="mt-4 text-sm text-gray-600 dark:text-night-sky-200 font-medium spiritual-text-shadow"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {message}
          </motion.p>
        )}
      </div>
    )
  }

  if (type === 'mandala') {
    return (
      <div className={`flex flex-col items-center justify-center ${className}`}>
        <motion.div
          className={`${containerSizes[size]} relative flex items-center justify-center`}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <MandalaIcon 
              size={parseInt(sizeClasses[size].split('-')[1]) * 4} 
              className="text-divine-purple-500" 
              animated={true}
            />
          </motion.div>
          
          {/* Pulsing aura */}
          <motion.div
            className="absolute inset-0 bg-gradient-radial from-divine-purple-200/30 to-transparent rounded-full"
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
        </motion.div>
        
        {message && (
          <motion.p
            className="mt-4 text-sm text-gray-600 dark:text-night-sky-200 font-medium"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {message}
          </motion.p>
        )}
      </div>
    )
  }

  if (type === 'lotus') {
    return (
      <div className={`flex flex-col items-center justify-center ${className}`}>
        <motion.div
          className={`${containerSizes[size]} relative flex items-center justify-center`}
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <LotusIcon 
              size={parseInt(sizeClasses[size].split('-')[1]) * 4} 
              className="text-lotus-pink-500" 
              animated={true}
            />
          </motion.div>
          
          {/* Water ripples */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute border border-lotus-pink-300 rounded-full opacity-30"
              style={{
                width: `${80 + i * 30}%`,
                height: `${20 + i * 10}%`,
                bottom: '10%'
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
        
        {message && (
          <motion.p
            className="mt-4 text-sm text-gray-600 dark:text-night-sky-200 font-medium"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {message}
          </motion.p>
        )}
      </div>
    )
  }

  // Full premium loader
  return (
    <div className={`flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-white via-cream-50/30 to-bhagwa-50/20 dark:from-night-sky-600 dark:via-night-sky-500 dark:to-divine-purple-900/30 ${className}`}>
      <motion.div
        className="relative w-48 h-48 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Central Om */}
        <motion.div
          className="absolute z-10"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <OmIcon size={80} className="text-bhagwa-500 sacred-glow" animated={true} />
        </motion.div>
        
        {/* Rotating Mandala */}
        <motion.div
          className="absolute"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <MandalaIcon size={120} className="text-divine-purple-400 opacity-60" />
        </motion.div>
        
        {/* Floating Lotus */}
        <motion.div
          className="absolute top-0"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <LotusIcon size={40} className="text-lotus-pink-500" />
        </motion.div>
        
        {/* Sacred circles */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-bhagwa-300 dark:border-bhagwa-400 rounded-full opacity-30"
            style={{
              width: `${100 + i * 25}%`,
              height: `${100 + i * 25}%`
            }}
            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
        
        {/* Pulsing aura */}
        <motion.div
          className="absolute inset-0 bg-gradient-radial from-bhagwa-200/20 via-temple-gold-200/10 to-transparent rounded-full"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
      
      {/* Loading text with Sanskrit */}
      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.h2
          className="text-2xl font-serif font-bold text-gray-900 dark:text-night-sky-50 gradient-text-premium mb-2"
          animate={{
            textShadow: [
              '0 2px 4px rgba(255, 153, 51, 0.3)',
              '0 4px 8px rgba(255, 153, 51, 0.5)',
              '0 2px 4px rgba(255, 153, 51, 0.3)'
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          ॐ गं गणपतये नमः ॐ
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 dark:text-night-sky-200 font-medium"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {message}
        </motion.p>
      </motion.div>
    </div>
  )
}
