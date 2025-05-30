'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

interface User {
  id: string
  name: string
  email: string
  phone?: string
  dateOfBirth?: string
  timeOfBirth?: string
  placeOfBirth?: string
  preferences?: {
    language: 'en' | 'hi'
    notifications: boolean
    autoPlayAudio: boolean
  }
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<boolean>
  register: (userData: Partial<User> & { password: string }) => Promise<boolean>
  logout: () => void
  updateProfile: (userData: Partial<User>) => Promise<boolean>
  loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for stored user data on mount
    const storedUser = localStorage.getItem('astrology_user')
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (error) {
        console.error('Error parsing stored user data:', error)
        localStorage.removeItem('astrology_user')
      }
    }
    setLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    setLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mock authentication - in real app, this would be an API call
      if (email && password) {
        const mockUser: User = {
          id: '1',
          name: 'John Doe',
          email: email,
          preferences: {
            language: 'en',
            notifications: true,
            autoPlayAudio: true
          }
        }
        setUser(mockUser)
        localStorage.setItem('astrology_user', JSON.stringify(mockUser))
        setLoading(false)
        return true
      }
      setLoading(false)
      return false
    } catch (error) {
      console.error('Login error:', error)
      setLoading(false)
      return false
    }
  }

  const register = async (userData: Partial<User> & { password: string }): Promise<boolean> => {
    setLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mock registration - in real app, this would be an API call
      const newUser: User = {
        id: Date.now().toString(),
        name: userData.name || '',
        email: userData.email || '',
        phone: userData.phone,
        dateOfBirth: userData.dateOfBirth,
        timeOfBirth: userData.timeOfBirth,
        placeOfBirth: userData.placeOfBirth,
        preferences: {
          language: 'en',
          notifications: true,
          autoPlayAudio: true
        }
      }
      setUser(newUser)
      localStorage.setItem('astrology_user', JSON.stringify(newUser))
      setLoading(false)
      return true
    } catch (error) {
      console.error('Registration error:', error)
      setLoading(false)
      return false
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('astrology_user')
  }

  const updateProfile = async (userData: Partial<User>): Promise<boolean> => {
    if (!user) return false
    
    setLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500))
      
      const updatedUser = { ...user, ...userData }
      setUser(updatedUser)
      localStorage.setItem('astrology_user', JSON.stringify(updatedUser))
      setLoading(false)
      return true
    } catch (error) {
      console.error('Profile update error:', error)
      setLoading(false)
      return false
    }
  }

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    login,
    register,
    logout,
    updateProfile,
    loading
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
