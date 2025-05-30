'use client'

import { useEffect } from 'react'
import { useAudio } from '@/contexts/AudioContext'

const AutoPlayAudio: React.FC = () => {
  const { autoPlay, setAutoPlay, isEnabled, tracks, playTrack } = useAudio()

  useEffect(() => {
    // Enable auto-play by default for homepage
    if (!autoPlay && isEnabled) {
      setAutoPlay(true)
    }
  }, [autoPlay, isEnabled, setAutoPlay])

  useEffect(() => {
    // Auto-play Om chanting when component mounts and user has interacted
    const handleUserInteraction = () => {
      if (autoPlay && isEnabled && tracks.length > 0) {
        // Play the first track (Om Namah Shivaya) after user interaction
        setTimeout(() => {
          playTrack(tracks[0])
        }, 1000)
      }
      // Remove event listeners after first interaction
      document.removeEventListener('click', handleUserInteraction)
      document.removeEventListener('keydown', handleUserInteraction)
      document.removeEventListener('scroll', handleUserInteraction)
    }

    // Add event listeners for user interaction
    document.addEventListener('click', handleUserInteraction)
    document.addEventListener('keydown', handleUserInteraction)
    document.addEventListener('scroll', handleUserInteraction)

    return () => {
      document.removeEventListener('click', handleUserInteraction)
      document.removeEventListener('keydown', handleUserInteraction)
      document.removeEventListener('scroll', handleUserInteraction)
    }
  }, [autoPlay, isEnabled, tracks, playTrack])

  return null // This component doesn't render anything
}

export default AutoPlayAudio
