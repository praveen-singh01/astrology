'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAudio } from '@/contexts/AudioContext'
import { useTranslation } from 'react-i18next'
import {
  PlayIcon,
  PauseIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
  MusicalNoteIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline'

const AudioControls: React.FC = () => {
  const { t, i18n } = useTranslation('common')
  const {
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
  } = useAudio()

  const [isExpanded, setIsExpanded] = useState(false)
  const [showTrackList, setShowTrackList] = useState(false)

  const handlePlayPause = () => {
    if (isPlaying) {
      pauseAudio()
    } else if (currentTrack) {
      resumeAudio()
    } else {
      // Play first track if none selected
      playTrack(tracks[0])
    }
  }

  const handleTrackSelect = (track: any) => {
    playTrack(track)
    setShowTrackList(false)
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-4 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-bhagwa-200 p-4 min-w-[280px]"
          >
            {/* Track Selection */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">
                  {t('audio.selectMantra')}
                </span>
                <button
                  onClick={() => setShowTrackList(!showTrackList)}
                  className="p-1 rounded-lg hover:bg-bhagwa-50 transition-colors"
                >
                  <ChevronDownIcon
                    className={`w-4 h-4 text-gray-500 transition-transform ${
                      showTrackList ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>

              <AnimatePresence>
                {showTrackList && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-1 max-h-40 overflow-y-auto"
                  >
                    {tracks.map((track) => (
                      <button
                        key={track.id}
                        onClick={() => handleTrackSelect(track)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                          currentTrack?.id === track.id
                            ? 'bg-bhagwa-100 text-bhagwa-700'
                            : 'hover:bg-gray-50 text-gray-600'
                        }`}
                      >
                        {i18n.language === 'hi' ? track.nameHi : track.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {currentTrack && (
                <div className="mt-2 p-2 bg-bhagwa-50 rounded-lg">
                  <div className="text-xs text-bhagwa-600 font-medium">
                    {t('audio.nowPlaying')}:
                  </div>
                  <div className="text-sm text-bhagwa-800">
                    {i18n.language === 'hi' ? currentTrack.nameHi : currentTrack.name}
                  </div>
                </div>
              )}
            </div>

            {/* Volume Control */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">
                  {t('audio.volume')}
                </span>
                <button
                  onClick={toggleMute}
                  className="p-1 rounded-lg hover:bg-bhagwa-50 transition-colors"
                >
                  {isMuted ? (
                    <SpeakerXMarkIcon className="w-4 h-4 text-gray-500" />
                  ) : (
                    <SpeakerWaveIcon className="w-4 h-4 text-gray-500" />
                  )}
                </button>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, #ff9933 0%, #ff9933 ${volume * 100}%, #e5e7eb ${volume * 100}%, #e5e7eb 100%)`
                }}
              />
            </div>

            {/* Audio Settings */}
            <div className="mb-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">
                  {t('audio.autoPlay')}
                </span>
                <button
                  onClick={() => setAutoPlay(!autoPlay)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    autoPlay ? 'bg-bhagwa-400' : 'bg-gray-200'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      autoPlay ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">
                  {t('audio.enabled')}
                </span>
                <button
                  onClick={() => setIsEnabled(!isEnabled)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    isEnabled ? 'bg-bhagwa-400' : 'bg-gray-200'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      isEnabled ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Stop Button */}
            {currentTrack && (
              <button
                onClick={stopAudio}
                className="w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition-colors"
              >
                {t('audio.stop')}
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Control Button */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-gradient-bhagwa rounded-full shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-shadow"
      >
        <MusicalNoteIcon className="w-6 h-6" />
      </motion.button>

      {/* Play/Pause Overlay */}
      {currentTrack && (
        <motion.button
          onClick={handlePlayPause}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="absolute -top-2 -left-2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center border-2 border-bhagwa-500"
        >
          {isPlaying ? (
            <PauseIcon className="w-4 h-4 text-bhagwa-600" />
          ) : (
            <PlayIcon className="w-4 h-4 text-bhagwa-600 ml-0.5" />
          )}
        </motion.button>
      )}
    </div>
  )
}

export default AudioControls
