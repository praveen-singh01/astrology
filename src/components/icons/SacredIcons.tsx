'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface IconProps {
  className?: string
  size?: number
  animated?: boolean
}

export const OmIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    className={className}
    fill="currentColor"
  >
    <path d="M35.5 25.2c-4.8 0-8.7 3.9-8.7 8.7s3.9 8.7 8.7 8.7c4.8 0 8.7-3.9 8.7-8.7s-3.9-8.7-8.7-8.7zm0 14.4c-3.1 0-5.7-2.5-5.7-5.7s2.5-5.7 5.7-5.7 5.7 2.5 5.7 5.7-2.6 5.7-5.7 5.7z"/>
    <path d="M75.8 45.2c-2.1-7.1-8.4-12.2-15.9-12.2-6.2 0-11.6 3.4-14.4 8.4-1.4-2.1-3.8-3.5-6.5-3.5-4.3 0-7.8 3.5-7.8 7.8 0 1.8.6 3.4 1.6 4.7-3.2 2.8-5.2 6.9-5.2 11.5 0 8.4 6.8 15.2 15.2 15.2 3.9 0 7.4-1.5 10.1-3.9 2.7 2.4 6.2 3.9 10.1 3.9 8.4 0 15.2-6.8 15.2-15.2 0-3.1-.9-6-2.4-8.7z"/>
    <circle cx="20" cy="75" r="8" opacity="0.7"/>
    <path d="M85 70c0 8.3-6.7 15-15 15s-15-6.7-15-15 6.7-15 15-15 15 6.7 15 15zm-3 0c0-6.6-5.4-12-12-12s-12 5.4-12 12 5.4 12 12 12 12-5.4 12-12z"/>
  </svg>
)

export const LotusIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    className={className}
    fill="currentColor"
  >
    <path d="M50 85c-2.8 0-5-2.2-5-5V65c0-2.8 2.2-5 5-5s5 2.2 5 5v15c0 2.8-2.2 5-5 5z"/>
    <ellipse cx="50" cy="45" rx="8" ry="15" transform="rotate(-30 50 45)" opacity="0.8"/>
    <ellipse cx="50" cy="45" rx="8" ry="15" transform="rotate(-60 50 45)" opacity="0.8"/>
    <ellipse cx="50" cy="45" rx="8" ry="15" transform="rotate(-90 50 45)" opacity="0.8"/>
    <ellipse cx="50" cy="45" rx="8" ry="15" transform="rotate(-120 50 45)" opacity="0.8"/>
    <ellipse cx="50" cy="45" rx="8" ry="15" transform="rotate(-150 50 45)" opacity="0.8"/>
    <ellipse cx="50" cy="45" rx="8" ry="15" transform="rotate(180 50 45)" opacity="0.8"/>
    <ellipse cx="50" cy="45" rx="8" ry="15" transform="rotate(150 50 45)" opacity="0.8"/>
    <ellipse cx="50" cy="45" rx="8" ry="15" transform="rotate(120 50 45)" opacity="0.8"/>
    <ellipse cx="50" cy="45" rx="8" ry="15" transform="rotate(90 50 45)" opacity="0.8"/>
    <ellipse cx="50" cy="45" rx="8" ry="15" transform="rotate(60 50 45)" opacity="0.8"/>
    <ellipse cx="50" cy="45" rx="8" ry="15" transform="rotate(30 50 45)" opacity="0.8"/>
    <ellipse cx="50" cy="45" rx="8" ry="15" opacity="0.8"/>
    <circle cx="50" cy="45" r="6" fill="currentColor"/>
  </svg>
)

export const TrishulIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    className={className}
    fill="currentColor"
  >
    <line x1="50" y1="20" x2="50" y2="85" stroke="currentColor" strokeWidth="3"/>
    <path d="M35 25c0-8.3 6.7-15 15-15s15 6.7 15 15-6.7 15-15 15-15-6.7-15-15z" fill="none" stroke="currentColor" strokeWidth="2"/>
    <path d="M30 20c-5.5 0-10-4.5-10-10s4.5-10 10-10" fill="none" stroke="currentColor" strokeWidth="2"/>
    <path d="M70 20c5.5 0 10-4.5 10-10s-4.5-10-10-10" fill="none" stroke="currentColor" strokeWidth="2"/>
    <circle cx="45" cy="75" r="3"/>
    <circle cx="55" cy="75" r="3"/>
    <path d="M42 80h16v5H42z"/>
  </svg>
)

export const SwastikaIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    className={className}
    fill="currentColor"
  >
    <rect x="45" y="20" width="10" height="60"/>
    <rect x="20" y="45" width="60" height="10"/>
    <rect x="55" y="20" width="25" height="10"/>
    <rect x="20" y="20" width="10" height="25"/>
    <rect x="20" y="70" width="25" height="10"/>
    <rect x="70" y="55" width="10" height="25"/>
  </svg>
)

export const DiyaIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    className={className}
    fill="currentColor"
  >
    <ellipse cx="50" cy="70" rx="25" ry="15"/>
    <ellipse cx="50" cy="65" rx="20" ry="10" fill="none" stroke="currentColor" strokeWidth="2"/>
    <path d="M50 45c-2 0-4 2-4 4v16h8V49c0-2-2-4-4-4z"/>
    <ellipse cx="50" cy="40" rx="6" ry="8" opacity="0.7"/>
    <path d="M44 40c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6-6-2.7-6-6z" fill="none" stroke="currentColor" strokeWidth="1"/>
    <circle cx="50" cy="35" r="2" opacity="0.9"/>
  </svg>
)

export const MandalaIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    className={className}
    fill="currentColor"
  >
    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
    <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
    <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.7"/>
    <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.9"/>
    <circle cx="50" cy="50" r="5"/>

    {/* Petals */}
    {Array.from({ length: 8 }, (_, i) => {
      const angle = (i * 45) * (Math.PI / 180)
      const x1 = 50 + Math.cos(angle) * 15
      const y1 = 50 + Math.sin(angle) * 15
      const x2 = 50 + Math.cos(angle) * 35
      const y2 = 50 + Math.sin(angle) * 35

      return (
        <g key={i}>
          <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1" opacity="0.6"/>
          <circle cx={x2} cy={y2} r="3" opacity="0.8"/>
        </g>
      )
    })}
  </svg>
)

export const TempleIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    className={className}
    fill="currentColor"
  >
    <rect x="20" y="60" width="60" height="30"/>
    <rect x="15" y="55" width="70" height="8"/>
    <polygon points="50,20 25,55 75,55"/>
    <rect x="45" y="65" width="10" height="20"/>
    <rect x="30" y="65" width="8" height="15"/>
    <rect x="62" y="65" width="8" height="15"/>
    <circle cx="50" cy="40" r="3"/>
    <rect x="47" y="15" width="6" height="10"/>
    <circle cx="50" cy="12" r="3"/>
  </svg>
)

export const YantraIcon: React.FC<IconProps> = ({ className = '', size = 24, animated = false }) => {
  const MotionSvg = animated ? motion.svg : 'svg'

  return (
    <MotionSvg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      fill="currentColor"
      {...(animated && {
        animate: { rotate: [0, 90, 180, 270, 360] },
        transition: {
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }
      })}
    >
      <rect x="10" y="10" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="2"/>
      <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1"/>
      <polygon points="50,25 65,60 35,60" fill="none" stroke="currentColor" strokeWidth="1"/>
      <polygon points="50,75 35,40 65,40" fill="none" stroke="currentColor" strokeWidth="1"/>
      <circle cx="50" cy="50" r="8"/>
      <circle cx="25" cy="25" r="3"/>
      <circle cx="75" cy="25" r="3"/>
      <circle cx="25" cy="75" r="3"/>
      <circle cx="75" cy="75" r="3"/>
    </MotionSvg>
  )
}

// Premium Sacred Icons with Enhanced Animations
export const KalashIcon: React.FC<IconProps> = ({ className = '', size = 24, animated = false }) => {
  const MotionSvg = animated ? motion.svg : 'svg'

  return (
    <MotionSvg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      fill="currentColor"
      {...(animated && {
        animate: {
          scale: [1, 1.05, 1],
          filter: ['brightness(1)', 'brightness(1.2)', 'brightness(1)']
        },
        transition: {
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }
      })}
    >
      {/* Kalash Base */}
      <ellipse cx="50" cy="80" rx="20" ry="8" fill="currentColor"/>
      <rect x="35" y="50" width="30" height="30" rx="5" fill="currentColor"/>

      {/* Neck */}
      <rect x="45" y="40" width="10" height="15" fill="currentColor"/>

      {/* Coconut */}
      <circle cx="50" cy="35" r="8" fill="currentColor" opacity="0.9"/>

      {/* Mango Leaves */}
      {[...Array(5)].map((_, i) => (
        <motion.ellipse
          key={i}
          cx={40 + i * 5}
          cy="25"
          rx="2"
          ry="8"
          fill="currentColor"
          opacity="0.7"
          {...(animated && {
            animate: {
              rotate: [0, 5, -5, 0],
              opacity: [0.7, 1, 0.7]
            },
            transition: {
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }
          })}
        />
      ))}

      {/* Sacred Thread */}
      <path d="M35 45 Q50 35 65 45" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.6"/>

      {animated && (
        <motion.circle
          cx="50"
          cy="50"
          r="25"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.3"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
    </MotionSvg>
  )
}

export const ConchIcon: React.FC<IconProps> = ({ className = '', size = 24, animated = false }) => {
  const MotionSvg = animated ? motion.svg : 'svg'

  return (
    <MotionSvg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      fill="currentColor"
      {...(animated && {
        animate: {
          scale: [1, 1.03, 1.06, 1.03, 1],
          rotate: [0, 1, 0, -1, 0]
        },
        transition: {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }
      })}
    >
      {/* Conch Shell Body */}
      <path d="M30 70c0-20 10-35 20-35s20 15 20 35c0 10-5 15-10 15H40c-5 0-10-5-10-15z"/>

      {/* Spiral Pattern */}
      <path d="M50 40c-8 0-15 7-15 15s7 15 15 15" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.6"/>
      <path d="M50 45c-5 0-10 5-10 10s5 10 10 10" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4"/>

      {/* Opening */}
      <ellipse cx="50" cy="30" rx="8" ry="5" fill="currentColor" opacity="0.8"/>

      {/* Sound Waves */}
      {animated && (
        <>
          {[...Array(3)].map((_, i) => (
            <motion.ellipse
              key={i}
              cx="50"
              cy="25"
              rx={15 + i * 8}
              ry={8 + i * 4}
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.3"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeOut"
              }}
            />
          ))}
        </>
      )}
    </MotionSvg>
  )
}

export const AartiIcon: React.FC<IconProps> = ({ className = '', size = 24, animated = false }) => {
  const MotionSvg = animated ? motion.svg : 'svg'

  return (
    <MotionSvg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      fill="currentColor"
    >
      {/* Aarti Plate */}
      <circle cx="50" cy="60" r="25" fill="currentColor" opacity="0.8"/>
      <circle cx="50" cy="60" r="20" fill="none" stroke="currentColor" strokeWidth="2"/>

      {/* Diyas */}
      {[...Array(5)].map((_, i) => {
        const angle = (i * 72) * (Math.PI / 180)
        const x = 50 + Math.cos(angle) * 12
        const y = 60 + Math.sin(angle) * 12

        return (
          <g key={i}>
            <ellipse cx={x} cy={y} rx="3" ry="2" fill="currentColor"/>
            <motion.ellipse
              cx={x}
              cy={y - 3}
              rx="2"
              ry="4"
              fill="currentColor"
              opacity="0.9"
              {...(animated && {
                animate: {
                  scale: [1, 1.2, 0.8, 1],
                  opacity: [0.9, 1, 0.7, 0.9]
                },
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }
              })}
            />
          </g>
        )
      })}

      {/* Handle */}
      <rect x="48" y="85" width="4" height="10" fill="currentColor"/>

      {animated && (
        <motion.circle
          cx="50"
          cy="60"
          r="30"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.2"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
    </MotionSvg>
  )
}
