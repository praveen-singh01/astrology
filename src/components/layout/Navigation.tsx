'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '@/components/common/LanguageSwitcher'
import { OmIcon, LotusIcon, MandalaIcon } from '@/components/icons/SacredIcons'
import DarkModeToggle from '@/components/common/DarkModeToggle'
import { Bars3Icon, XMarkIcon, UserIcon } from '@heroicons/react/24/outline'
import { useAuth } from '@/contexts/AuthContext'
import AuthModal from '@/components/auth/AuthModal'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const pathname = usePathname()
  const { t } = useTranslation('common')
  const { user, isAuthenticated, logout } = useAuth()

  const navigation = [
    { name: t('navigation.home'), href: '/' },
    { name: t('navigation.services'), href: '/services' },
    { name: t('navigation.consultation'), href: '/consultation' },
    { name: t('navigation.about'), href: '/about' },
    { name: t('navigation.contact'), href: '/contact' },
  ]

  return (
    <nav className="fixed w-full z-50 bg-white/90 dark:bg-night-sky-600/90 backdrop-blur-md border-b border-bhagwa-100 dark:border-night-sky-400 shadow-sm transition-colors duration-300">
      <div className="spiritual-container">
        <div className="flex items-center justify-between h-16">
          {/* Enhanced Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <OmIcon className="w-8 h-8 text-bhagwa-500 om-pulse group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-bhagwa-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-serif font-bold text-gray-900 gradient-text">
                Kashi Vedic
              </span>
              <span className="text-xs text-bhagwa-600 font-medium -mt-1">
                काशी वैदिक
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm font-medium transition-all duration-200 hover:scale-105 ${
                  pathname === item.href
                    ? 'text-bhagwa-600'
                    : 'text-gray-600 hover:text-bhagwa-500'
                }`}
              >
                {item.name}
                {pathname === item.href && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-bhagwa rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}

            {/* Language Switcher */}
            <LanguageSwitcher variant="compact" />

            {/* Dark Mode Toggle */}
            <DarkModeToggle />

            {/* Authentication */}
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-bhagwa-600 transition-colors"
                >
                  <UserIcon className="w-5 h-5" />
                  <span>{user?.name}</span>
                </button>

                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-bhagwa-50 hover:text-bhagwa-600"
                      onClick={() => setShowUserMenu(false)}
                    >
                      Profile
                    </Link>
                    <Link
                      href="/bookings"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-bhagwa-50 hover:text-bhagwa-600"
                      onClick={() => setShowUserMenu(false)}
                    >
                      My Bookings
                    </Link>
                    <button
                      onClick={() => {
                        logout()
                        setShowUserMenu(false)
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-bhagwa-50 hover:text-bhagwa-600"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => setShowAuthModal(true)}
                className="spiritual-button text-sm py-2 px-4 sacred-glow"
              >
                {t('buttons.login')}
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <LanguageSwitcher variant="icon-only" />
            <DarkModeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 dark:text-night-sky-200 hover:text-bhagwa-500 hover:bg-bhagwa-50 dark:hover:bg-night-sky-500 transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 dark:bg-night-sky-600/95 backdrop-blur-md border-b border-bhagwa-100 dark:border-night-sky-400 shadow-lg transition-colors duration-300"
          >
            <div className="spiritual-container py-6 space-y-4">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={`block text-base font-medium py-2 px-4 rounded-lg transition-all duration-200 ${
                      pathname === item.href
                        ? 'text-bhagwa-600 bg-bhagwa-50'
                        : 'text-gray-600 hover:text-bhagwa-500 hover:bg-bhagwa-50'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navigation.length * 0.1 }}
                className="pt-4 border-t border-bhagwa-100"
              >
                {isAuthenticated ? (
                  <div className="space-y-2">
                    <div className="text-center text-sm text-gray-600 mb-2">
                      Welcome, {user?.name}
                    </div>
                    <Link
                      href="/profile"
                      className="block text-center py-2 px-4 text-sm text-gray-700 hover:bg-bhagwa-50 rounded-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      Profile
                    </Link>
                    <button
                      onClick={() => {
                        logout()
                        setIsOpen(false)
                      }}
                      className="block w-full text-center py-2 px-4 text-sm text-gray-700 hover:bg-bhagwa-50 rounded-lg"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setShowAuthModal(true)
                      setIsOpen(false)
                    }}
                    className="block spiritual-button text-center w-full"
                  >
                    {t('buttons.login')}
                  </button>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
    </nav>
  )
}