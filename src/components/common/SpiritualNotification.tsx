'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { OmIcon, LotusIcon, DiyaIcon } from '@/components/icons/SacredIcons'

interface SpiritualNotificationProps {
  type?: 'blessing' | 'guidance' | 'reminder' | 'celebration'
  title: string
  message: string
  duration?: number
  onClose?: () => void
  autoClose?: boolean
}

export default function SpiritualNotification({
  type = 'blessing',
  title,
  message,
  duration = 5000,
  onClose,
  autoClose = true
}: SpiritualNotificationProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(() => {
        setIsVisible(false)
        setTimeout(() => onClose?.(), 300)
      }, duration)

      return () => clearTimeout(timer)
    }
  }, [duration, autoClose, onClose])

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(() => onClose?.(), 300)
  }

  const getTypeConfig = () => {
    switch (type) {
      case 'blessing':
        return {
          icon: OmIcon,
          bgGradient: 'from-bhagwa-50 to-temple-gold-50',
          borderColor: 'border-bhagwa-200',
          iconColor: 'text-bhagwa-500',
          titleColor: 'text-bhagwa-700',
          messageColor: 'text-bhagwa-600'
        }
      case 'guidance':
        return {
          icon: LotusIcon,
          bgGradient: 'from-lotus-pink-50 to-divine-purple-50',
          borderColor: 'border-lotus-pink-200',
          iconColor: 'text-lotus-pink-500',
          titleColor: 'text-divine-purple-700',
          messageColor: 'text-divine-purple-600'
        }
      case 'reminder':
        return {
          icon: DiyaIcon,
          bgGradient: 'from-temple-gold-50 to-antique-gold-50',
          borderColor: 'border-temple-gold-200',
          iconColor: 'text-temple-gold-600',
          titleColor: 'text-antique-gold-700',
          messageColor: 'text-antique-gold-600'
        }
      case 'celebration':
        return {
          icon: OmIcon,
          bgGradient: 'from-bhagwa-50 via-temple-gold-50 to-lotus-pink-50',
          borderColor: 'border-bhagwa-300',
          iconColor: 'text-bhagwa-600',
          titleColor: 'text-bhagwa-800',
          messageColor: 'text-gray-700'
        }
      default:
        return {
          icon: OmIcon,
          bgGradient: 'from-bhagwa-50 to-temple-gold-50',
          borderColor: 'border-bhagwa-200',
          iconColor: 'text-bhagwa-500',
          titleColor: 'text-bhagwa-700',
          messageColor: 'text-bhagwa-600'
        }
    }
  }

  const config = getTypeConfig()
  const IconComponent = config.icon

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 30 
          }}
          className={`
            fixed top-6 right-6 z-50 max-w-sm w-full
            bg-gradient-to-br ${config.bgGradient} 
            dark:from-night-sky-600/90 dark:to-night-sky-500/90
            backdrop-blur-md border-2 ${config.borderColor} 
            dark:border-night-sky-400
            rounded-2xl shadow-2xl p-6 
            transition-colors duration-300
          `}
        >
          {/* Sacred Border Animation */}
          <motion.div
            className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-bhagwa-400 via-temple-gold-400 to-lotus-pink-400 opacity-0"
            animate={{ opacity: [0, 0.3, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{ 
              background: 'linear-gradient(45deg, transparent, transparent)',
              backgroundClip: 'padding-box'
            }}
          />
          
          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                {/* Animated Sacred Icon */}
                <motion.div
                  className="relative"
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
                  <IconComponent 
                    size={32} 
                    className={`${config.iconColor} sacred-glow`} 
                    animated={true}
                  />
                  
                  {/* Sacred Aura */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-sacred-glow rounded-full opacity-30"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
                
                <div>
                  <h3 className={`font-serif font-bold text-lg ${config.titleColor} dark:text-night-sky-50 spiritual-text-shadow`}>
                    {title}
                  </h3>
                  {type === 'blessing' && (
                    <p className="text-xs text-gray-500 dark:text-night-sky-300 font-medium">
                      ॐ शांति शांति शांति ॐ
                    </p>
                  )}
                </div>
              </div>
              
              {/* Close Button */}
              <motion.button
                onClick={handleClose}
                className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-night-sky-500 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <XMarkIcon className="w-5 h-5 text-gray-400 dark:text-night-sky-300" />
              </motion.button>
            </div>
            
            {/* Message */}
            <motion.p
              className={`text-sm ${config.messageColor} dark:text-night-sky-200 leading-relaxed mb-4`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {message}
            </motion.p>
            
            {/* Sacred Decorative Elements */}
            <div className="flex justify-center items-center space-x-4 opacity-60">
              <motion.div
                className="h-px w-8 bg-gradient-to-r from-transparent via-bhagwa-400 to-transparent"
                animate={{ scaleX: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <span className="text-xs text-bhagwa-400">✦</span>
              </motion.div>
              <motion.div
                className="h-px w-8 bg-gradient-to-r from-transparent via-bhagwa-400 to-transparent"
                animate={{ scaleX: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              />
            </div>
            
            {/* Progress Bar for Auto-close */}
            {autoClose && (
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-bhagwa-400 to-temple-gold-400 rounded-b-2xl"
                initial={{ width: '100%' }}
                animate={{ width: '0%' }}
                transition={{ duration: duration / 1000, ease: "linear" }}
              />
            )}
          </div>
          
          {/* Floating Sacred Particles */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-bhagwa-400 rounded-full opacity-40"
              style={{
                top: `${20 + i * 20}%`,
                right: `${10 + i * 15}%`
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0.4, 0.8, 0.4],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Hook for using spiritual notifications
export const useSpiritualNotification = () => {
  const [notifications, setNotifications] = useState<Array<{
    id: string
    type: 'blessing' | 'guidance' | 'reminder' | 'celebration'
    title: string
    message: string
    duration?: number
  }>>([])

  const showNotification = (notification: Omit<typeof notifications[0], 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9)
    setNotifications(prev => [...prev, { ...notification, id }])
  }

  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id))
  }

  const NotificationContainer = () => (
    <div className="fixed top-6 right-6 z-50 space-y-4">
      {notifications.map((notification) => (
        <SpiritualNotification
          key={notification.id}
          type={notification.type}
          title={notification.title}
          message={notification.message}
          duration={notification.duration}
          onClose={() => removeNotification(notification.id)}
        />
      ))}
    </div>
  )

  return {
    showNotification,
    NotificationContainer
  }
}
