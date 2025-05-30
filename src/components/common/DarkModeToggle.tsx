'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !isDark
    setIsDark(newDarkMode)
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  if (!mounted) {
    return null
  }

  return (
    <motion.button
      onClick={toggleDarkMode}
      className={`
        relative p-3 rounded-full transition-all duration-500 
        ${isDark 
          ? 'bg-gradient-cosmic text-night-sky-50 shadow-lg shadow-divine-purple-500/20' 
          : 'bg-gradient-bhagwa text-white shadow-lg shadow-bhagwa-200/30'
        }
        hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 
        ${isDark ? 'focus:ring-divine-purple-400' : 'focus:ring-bhagwa-400'}
      `}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={false}
      animate={{
        boxShadow: isDark 
          ? '0 0 20px rgba(88, 28, 135, 0.4), 0 0 40px rgba(88, 28, 135, 0.2)' 
          : '0 0 20px rgba(255, 153, 51, 0.4), 0 0 40px rgba(255, 153, 51, 0.2)'
      }}
      transition={{ duration: 0.3 }}
    >
      <AnimatePresence mode="wait">
        {isDark ? (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: -180, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 180, scale: 0.5 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="relative"
          >
            <MoonIcon className="w-6 h-6" />
            {/* Starlight effect */}
            <motion.div
              className="absolute -top-1 -right-1 w-2 h-2 bg-night-sky-50 rounded-full"
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -bottom-1 -left-1 w-1 h-1 bg-night-sky-50 rounded-full"
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: 180, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -180, scale: 0.5 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="relative"
          >
            <SunIcon className="w-6 h-6" />
            {/* Sun rays effect */}
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-0.5 h-2 bg-white/60 rounded-full"
                  style={{
                    top: '-8px',
                    left: '50%',
                    transformOrigin: '50% 20px',
                    transform: `translateX(-50%) rotate(${i * 45}deg)`
                  }}
                  animate={{
                    opacity: [0.4, 1, 0.4],
                    scale: [0.8, 1.2, 0.8]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.1
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tooltip */}
      <motion.div
        className={`
          absolute -bottom-12 left-1/2 transform -translate-x-1/2 
          px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap
          ${isDark 
            ? 'bg-night-sky-600 text-night-sky-50 border border-night-sky-400' 
            : 'bg-gray-900 text-white'
          }
          opacity-0 pointer-events-none transition-opacity duration-200
        `}
        whileHover={{ opacity: 1 }}
      >
        {isDark ? 'Switch to Light Mode' : 'Switch to Night Sky Mode'}
        <div 
          className={`
            absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45
            ${isDark ? 'bg-night-sky-600 border-l border-t border-night-sky-400' : 'bg-gray-900'}
          `} 
        />
      </motion.div>
    </motion.button>
  )
}
