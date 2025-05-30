/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Enhanced Premium Spiritual color palette inspired by Hindu traditions
        'bhagwa': {
          50: '#fff8f1',
          100: '#ffecdb',
          200: '#ffd6b7',
          300: '#ffb887',
          400: '#ff9933', // Primary bhagwa/saffron
          500: '#ff8800',
          600: '#e6660a',
          700: '#cc4400',
          800: '#b33300',
          900: '#992200',
        },
        'saffron': {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#ff9933', // Updated to bhagwa
          600: '#ff8800',
          700: '#e6660a',
          800: '#cc4400',
          900: '#b33300',
        },
        'maroon': {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#8b1538', // Deep traditional maroon
          600: '#7f1d1d',
          700: '#6b1d1d',
          800: '#5c1a1a',
          900: '#4a1616',
        },
        'deep-maroon': {
          50: '#fdf2f2',
          100: '#fce7e7',
          200: '#f9d0d0',
          300: '#f5a8a8',
          400: '#ef7575',
          500: '#8b1538', // Traditional deep maroon
          600: '#7a1230',
          700: '#650f28',
          800: '#520c20',
          900: '#42091a',
        },
        'temple-gold': {
          50: '#fdfce8',
          100: '#fcf9c3',
          200: '#f9f08a',
          300: '#f7e047',
          400: '#facc15', // Primary gold
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
        'antique-gold': {
          50: '#fefdf8',
          100: '#fdf9e8',
          200: '#faf2c8',
          300: '#f6e89d',
          400: '#f0d96b',
          500: '#d4af37', // Antique gold
          600: '#b8941f',
          700: '#9a7b16',
          800: '#7d6314',
          900: '#665013',
        },
        'cream': {
          50: '#fefefe',
          100: '#fefcf8',
          200: '#fdf8f0',
          300: '#fbf2e4',
          400: '#f8ebd4',
          500: '#f5e6c8', // Warm cream
          600: '#e8d4a8',
          700: '#d4c088',
          800: '#b8a56b',
          900: '#9a8a54',
        },
        'spiritual-blue': {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6', // Primary blue
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        'sacred-orange': {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#ff6b35', // Vibrant sacred orange
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        'lotus-pink': {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899', // Lotus pink
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
        'divine-purple': {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7', // Divine purple
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
        },
        'earth-brown': {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cfc5',
          400: '#d2bab0',
          500: '#a67c52', // Earth brown
          600: '#8b5a3c',
          700: '#73462f',
          800: '#5c3317',
          900: '#4a2c0a',
        },
        'night-sky': {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#1e293b', // Dark night sky
          600: '#0f172a',
          700: '#020617',
          800: '#0c0a09',
          900: '#000000',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-noto-sans-devanagari)', 'var(--font-noto-serif-devanagari)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'temple-pattern': "url('/images/temple-pattern.svg')",
        'om-symbol': "url('/images/om-symbol.svg')",
        'mandala-pattern': "url('/images/mandala-pattern.svg')",
        'lotus-pattern': "url('/images/lotus-pattern.svg')",
        'sacred-geometry': "url('/images/sacred-geometry.svg')",

        // Enhanced Premium Gradients
        'gradient-saffron': 'linear-gradient(135deg, #ff9933 0%, #ff8800 100%)',
        'gradient-bhagwa': 'linear-gradient(135deg, #ff9933 0%, #ff8800 100%)',
        'gradient-divine': 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)',
        'gradient-temple': 'linear-gradient(135deg, #facc15 0%, #ca8a04 100%)',
        'gradient-spiritual': 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
        'gradient-maroon': 'linear-gradient(135deg, #8b1538 0%, #7a1230 100%)',
        'gradient-antique-gold': 'linear-gradient(135deg, #d4af37 0%, #b8941f 100%)',
        'gradient-cream': 'linear-gradient(135deg, #f5e6c8 0%, #e8d4a8 100%)',

        // Premium Multi-color Gradients
        'gradient-divine-premium': 'linear-gradient(135deg, #ff9933 0%, #d4af37 25%, #a855f7 50%, #8b1538 100%)',
        'gradient-sacred-premium': 'linear-gradient(135deg, #ff9933 0%, #facc15 50%, #ff6b35 100%)',
        'gradient-temple-premium': 'linear-gradient(135deg, #d4af37 0%, #facc15 25%, #ff9933 50%, #f5e6c8 100%)',
        'gradient-spiritual-premium': 'linear-gradient(135deg, #a855f7 0%, #3b82f6 50%, #ff9933 100%)',

        // Night Sky Theme Gradients
        'gradient-night-sky': 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
        'gradient-starry-night': 'radial-gradient(ellipse at top, #1e293b 0%, #0f172a 50%, #000000 100%)',
        'gradient-cosmic': 'linear-gradient(135deg, #581c87 0%, #1e293b 50%, #000000 100%)',

        // Animated Gradients
        'gradient-divine-shimmer': 'linear-gradient(90deg, transparent 0%, rgba(255, 153, 51, 0.4) 50%, transparent 100%)',
        'gradient-sacred-glow': 'radial-gradient(circle, rgba(255, 153, 51, 0.3) 0%, transparent 70%)',
        'gradient-temple-aura': 'radial-gradient(circle, rgba(212, 175, 55, 0.4) 0%, transparent 60%)',
      },
      animation: {
        // Enhanced Spiritual Animations
        'diya-flicker': 'flicker 2s infinite',
        'lotus-float': 'float 6s ease-in-out infinite',
        'om-pulse': 'omPulse 3s ease-in-out infinite',
        'mandala-rotate': 'mandalaRotate 20s linear infinite',
        'sacred-glow': 'sacredGlow 4s ease-in-out infinite',
        'divine-shimmer': 'divineShimmer 2s ease-in-out infinite',
        'temple-bells': 'templeBells 1.5s ease-in-out infinite',

        // Premium Spiritual Animations
        'aarti-glow': 'aartiGlow 3s ease-in-out infinite',
        'yantra-spin': 'yantraSpin 15s linear infinite',
        'trishul-gleam': 'trishulGleam 4s ease-in-out infinite',
        'kalash-shimmer': 'kalashShimmer 5s ease-in-out infinite',
        'conch-resonance': 'conchResonance 6s ease-in-out infinite',
        'sacred-breath': 'sacredBreath 8s ease-in-out infinite',
        'divine-ascension': 'divineAscension 10s ease-in-out infinite',
        'cosmic-rotation': 'cosmicRotation 30s linear infinite',
        'starlight-twinkle': 'starlightTwinkle 2s ease-in-out infinite',
        'moonbeam-dance': 'moonbeamDance 7s ease-in-out infinite',

        // Micro-interactions
        'button-sacred-glow': 'buttonSacredGlow 0.3s ease-out',
        'card-divine-lift': 'cardDivineLift 0.4s ease-out',
        'text-sacred-reveal': 'textSacredReveal 1s ease-out',
        'icon-blessing': 'iconBlessing 0.6s ease-out',

        // Scroll-triggered animations
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in-down': 'fadeInDown 0.8s ease-out',
        'fade-in-left': 'fadeInLeft 0.8s ease-out',
        'fade-in-right': 'fadeInRight 0.8s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        'rotate-in': 'rotateIn 0.8s ease-out',
      },
      keyframes: {
        // Enhanced Existing Keyframes
        flicker: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        omPulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: 0.8 },
          '50%': { transform: 'scale(1.05)', opacity: 1 },
        },
        mandalaRotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        sacredGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 153, 51, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 153, 51, 0.6)' },
        },
        divineShimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        templeBells: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },

        // Premium Spiritual Keyframes
        aartiGlow: {
          '0%, 100%': {
            boxShadow: '0 0 15px rgba(255, 153, 51, 0.4), 0 0 30px rgba(212, 175, 55, 0.2)',
            transform: 'scale(1)'
          },
          '50%': {
            boxShadow: '0 0 25px rgba(255, 153, 51, 0.7), 0 0 50px rgba(212, 175, 55, 0.4)',
            transform: 'scale(1.02)'
          },
        },
        yantraSpin: {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '25%': { transform: 'rotate(90deg) scale(1.02)' },
          '50%': { transform: 'rotate(180deg) scale(1)' },
          '75%': { transform: 'rotate(270deg) scale(1.02)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
        trishulGleam: {
          '0%, 100%': {
            filter: 'brightness(1) drop-shadow(0 0 5px rgba(139, 21, 56, 0.3))',
            transform: 'translateY(0)'
          },
          '50%': {
            filter: 'brightness(1.3) drop-shadow(0 0 15px rgba(139, 21, 56, 0.6))',
            transform: 'translateY(-2px)'
          },
        },
        kalashShimmer: {
          '0%, 100%': {
            background: 'linear-gradient(135deg, #d4af37 0%, #facc15 100%)',
            transform: 'scale(1)'
          },
          '50%': {
            background: 'linear-gradient(135deg, #facc15 0%, #d4af37 100%)',
            transform: 'scale(1.05)'
          },
        },
        conchResonance: {
          '0%, 100%': {
            transform: 'scale(1) rotate(0deg)',
            opacity: 1
          },
          '25%': {
            transform: 'scale(1.03) rotate(1deg)',
            opacity: 0.9
          },
          '50%': {
            transform: 'scale(1.06) rotate(0deg)',
            opacity: 0.8
          },
          '75%': {
            transform: 'scale(1.03) rotate(-1deg)',
            opacity: 0.9
          },
        },
        sacredBreath: {
          '0%, 100%': {
            transform: 'scale(1)',
            opacity: 0.8
          },
          '50%': {
            transform: 'scale(1.1)',
            opacity: 1
          },
        },
        divineAscension: {
          '0%': {
            transform: 'translateY(0) scale(1)',
            opacity: 0.7
          },
          '50%': {
            transform: 'translateY(-20px) scale(1.05)',
            opacity: 1
          },
          '100%': {
            transform: 'translateY(0) scale(1)',
            opacity: 0.7
          },
        },
        cosmicRotation: {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
        starlightTwinkle: {
          '0%, 100%': {
            opacity: 0.3,
            transform: 'scale(1)'
          },
          '50%': {
            opacity: 1,
            transform: 'scale(1.2)'
          },
        },
        moonbeamDance: {
          '0%, 100%': {
            transform: 'translateX(0) translateY(0) rotate(0deg)',
            opacity: 0.6
          },
          '25%': {
            transform: 'translateX(10px) translateY(-5px) rotate(5deg)',
            opacity: 0.8
          },
          '50%': {
            transform: 'translateX(0) translateY(-10px) rotate(0deg)',
            opacity: 1
          },
          '75%': {
            transform: 'translateX(-10px) translateY(-5px) rotate(-5deg)',
            opacity: 0.8
          },
        },

        // Micro-interaction Keyframes
        buttonSacredGlow: {
          '0%': {
            boxShadow: '0 0 0 rgba(255, 153, 51, 0)',
            transform: 'scale(1)'
          },
          '50%': {
            boxShadow: '0 0 20px rgba(255, 153, 51, 0.4)',
            transform: 'scale(1.02)'
          },
          '100%': {
            boxShadow: '0 0 15px rgba(255, 153, 51, 0.6)',
            transform: 'scale(1.05)'
          },
        },
        cardDivineLift: {
          '0%': {
            transform: 'translateY(0) scale(1)',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          },
          '100%': {
            transform: 'translateY(-8px) scale(1.02)',
            boxShadow: '0 20px 25px rgba(255, 153, 51, 0.15), 0 10px 10px rgba(0, 0, 0, 0.1)'
          },
        },
        textSacredReveal: {
          '0%': {
            opacity: 0,
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)'
          },
        },
        iconBlessing: {
          '0%': {
            transform: 'scale(1) rotate(0deg)',
            filter: 'brightness(1)'
          },
          '50%': {
            transform: 'scale(1.1) rotate(5deg)',
            filter: 'brightness(1.2)'
          },
          '100%': {
            transform: 'scale(1.05) rotate(0deg)',
            filter: 'brightness(1.1)'
          },
        },

        // Scroll-triggered Animation Keyframes
        fadeInUp: {
          '0%': {
            opacity: 0,
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)'
          },
        },
        fadeInDown: {
          '0%': {
            opacity: 0,
            transform: 'translateY(-30px)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)'
          },
        },
        fadeInLeft: {
          '0%': {
            opacity: 0,
            transform: 'translateX(-30px)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0)'
          },
        },
        fadeInRight: {
          '0%': {
            opacity: 0,
            transform: 'translateX(30px)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0)'
          },
        },
        scaleIn: {
          '0%': {
            opacity: 0,
            transform: 'scale(0.8)'
          },
          '100%': {
            opacity: 1,
            transform: 'scale(1)'
          },
        },
        rotateIn: {
          '0%': {
            opacity: 0,
            transform: 'rotate(-180deg) scale(0.8)'
          },
          '100%': {
            opacity: 1,
            transform: 'rotate(0deg) scale(1)'
          },
        },
      },

      // Extended box shadows
      boxShadow: {
        '3xl': '0 35px 60px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 153, 51, 0.05)',
        'sacred': '0 10px 25px rgba(255, 153, 51, 0.15), 0 0 0 1px rgba(255, 153, 51, 0.1)',
        'divine': '0 20px 40px rgba(168, 85, 247, 0.15), 0 0 0 1px rgba(168, 85, 247, 0.1)',
        'temple': '0 15px 30px rgba(250, 204, 21, 0.15), 0 0 0 1px rgba(250, 204, 21, 0.1)',
      },
    },
  },
  plugins: [],
}