'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { OmIcon } from '@/components/icons/SacredIcons'

interface LoadingFallbackProps {
  message?: string
  className?: string
}

export default function LoadingFallback({ 
  message = "Loading...", 
  className = "" 
}: LoadingFallbackProps) {
  return (
    <div className={`flex flex-col items-center justify-center min-h-[200px] ${className}`}>
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{
          rotate: { duration: 3, repeat: Infinity, ease: "linear" },
          scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
        className="mb-4"
      >
        <OmIcon size={48} className="text-bhagwa-500 sacred-glow" animated={true} />
      </motion.div>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-gray-600 text-sm font-medium"
      >
        {message}
      </motion.p>
      
      {/* Sacred dots animation */}
      <div className="flex space-x-1 mt-3">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="w-2 h-2 bg-bhagwa-400 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: index * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  )
}
