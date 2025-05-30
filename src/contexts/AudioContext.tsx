'use client'

import React, { createContext, useContext, useState, useRef, useEffect } from 'react'
import { Howl } from 'howler'

interface AudioTrack {
  id: string
  name: string
  nameHi: string
  url: string
  duration?: number
}

interface AudioContextType {
  isPlaying: boolean
  currentTrack: AudioTrack | null
  volume: number
  tracks: AudioTrack[]
  playTrack: (track: AudioTrack) => void
  pauseAudio: () => void
  resumeAudio: () => void
  stopAudio: () => void
  setVolume: (volume: number) => void
  toggleMute: () => void
  isMuted: boolean
  autoPlay: boolean
  setAutoPlay: (autoPlay: boolean) => void
  isEnabled: boolean
  setIsEnabled: (enabled: boolean) => void
}

const AudioContext = createContext<AudioContextType | undefined>(undefined)

// Using local spiritual audio files
const defaultTracks: AudioTrack[] = [
  {
    id: 'om-namah-shivaya',
    name: 'Om Namah Shivaya',
    nameHi: 'ॐ नमः शिवाय',
    url: '/audio/om-namah-shivaya-dhun-269789.mp3',
  },
  {
    id: 'gayatri-mantra',
    name: 'Gayatri Mantra',
    nameHi: 'गायत्री मंत्र',
    url: '/audio/gayatri-mantra-raga-1.mp3',
  },
  {
    id: 'temple-bells',
    name: 'Temple Bells',
    nameHi: 'मंदिर की घंटियां',
    url: '/audio/indian-temple-bell-68150.mp3',
  },
  {
    id: 'spiritual-ambient',
    name: 'Spiritual Ambient',
    nameHi: 'आध्यात्मिक वातावरण',
    url: '/audio/spiritual-ambient.mp3',
  },
  {
    id: 'hanuman-chalisa',
    name: 'Hanuman Chalisa',
    nameHi: 'हनुमान चालीसा',
    url: '/audio/hanuman-chalisa.mp3',
  },
]

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState<AudioTrack | null>(null)
  const [volume, setVolumeState] = useState(0.3)
  const [isMuted, setIsMuted] = useState(false)
  const [tracks] = useState<AudioTrack[]>(defaultTracks)
  const [autoPlay, setAutoPlay] = useState(false)
  const [isEnabled, setIsEnabled] = useState(true)

  const howlRef = useRef<Howl | null>(null)
  const previousVolume = useRef(0.3)
  const hasAutoPlayed = useRef(false)

  useEffect(() => {
    // Auto-play functionality
    if (autoPlay && isEnabled && !hasAutoPlayed.current && tracks.length > 0) {
      // Delay auto-play to ensure user interaction has occurred
      const timer = setTimeout(() => {
        playTrack(tracks[0])
        hasAutoPlayed.current = true
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [autoPlay, isEnabled, tracks])

  useEffect(() => {
    // Cleanup on unmount
    return () => {
      if (howlRef.current) {
        howlRef.current.unload()
      }
    }
  }, [])

 const playTrack = (track: AudioTrack) => {
  try {
    // Stop current track if playing
    if (howlRef.current) {
      howlRef.current.stop()
      howlRef.current.unload()
      howlRef.current = null
    }

    // Create new Howl instance
    howlRef.current = new Howl({
      src: [track.url],
      loop: true,
      volume: isMuted ? 0 : volume,
      html5: true,
      onload: () => {
        console.log('Audio loaded successfully:', track.name)
      },
      onplay: () => {
        setIsPlaying(true)
        setCurrentTrack(track)
        console.log('Playing:', track.name)
      },
      onpause: () => {
        setIsPlaying(false)
      },
      onstop: () => {
        setIsPlaying(false)
      },
      onloaderror: (_id: any, error: any) => {
        console.error('Audio load error for', track.name, ':', error)
        setIsPlaying(false)
        setCurrentTrack(null)
        console.warn(`Unable to load audio: ${track.name}. Please check your internet connection.`)
      },
      onplayerror: (_id: any, error: any) => {
        console.error('Audio play error for', track.name, ':', error)
        setIsPlaying(false)
        if (howlRef.current) {
          howlRef.current.once('unlock', () => {
            howlRef.current?.play()
          })
        }
      },
    })

    // Start playing
    howlRef.current.play()
  } catch (error) {
    console.error('Error in playTrack:', error)
    setIsPlaying(false)
    setCurrentTrack(null)
  }
}
  const pauseAudio = () => {
    if (howlRef.current && isPlaying) {
      howlRef.current.pause()
    }
  }

  const resumeAudio = () => {
    if (howlRef.current && !isPlaying) {
      howlRef.current.play()
    }
  }

  const stopAudio = () => {
    if (howlRef.current) {
      howlRef.current.stop()
      howlRef.current.unload()
      howlRef.current = null
    }
    setIsPlaying(false)
    setCurrentTrack(null)
  }

  const setVolume = (newVolume: number) => {
    setVolumeState(newVolume)
    if (howlRef.current) {
      howlRef.current.volume(isMuted ? 0 : newVolume)
    }
    if (newVolume > 0 && isMuted) {
      setIsMuted(false)
    }
  }

  const toggleMute = () => {
    if (isMuted) {
      setIsMuted(false)
      if (howlRef.current) {
        howlRef.current.volume(volume)
      }
    } else {
      previousVolume.current = volume
      setIsMuted(true)
      if (howlRef.current) {
        howlRef.current.volume(0)
      }
    }
  }

  const value: AudioContextType = {
    isPlaying,
    currentTrack,
    volume,
    tracks,
    playTrack,
    pauseAudio,
    resumeAudio,
    stopAudio,
    setVolume,
    toggleMute,
    isMuted,
    autoPlay,
    setAutoPlay,
    isEnabled,
    setIsEnabled,
  }

  return <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
}

export const useAudio = () => {
  const context = useContext(AudioContext)
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider')
  }
  return context
}

