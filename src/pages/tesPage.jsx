import React, { useState, useRef, useEffect, useCallback } from 'react'
import {Gauge, Play, Pause, RotateCcw, RotateCw, Volume2, VolumeX, Maximize, Minimize, ArrowLeft, SkipForward, ListVideo, MessageSquare } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Account() {
  return (
    <div className="bg-black h-screen w-screen overflow-hidden">
      <ChillPlayer />
    </div>
  )
}

const ChillPlayer = () => {
  const videoRef = useRef(null)
  const playerContainerRef = useRef(null)
  const progressBarRef = useRef(null)
  const controlsTimeoutRef = useRef(null)

  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [isFullScreen, setIsFullScreen] = useState(false)
  const [showControls, setShowControls] = useState(true)

 
  const showAndResetTimer = useCallback(() => {
    setShowControls(true)
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current)
    }
    controlsTimeoutRef.current = setTimeout(() => {

      if (videoRef.current && !videoRef.current.paused) {
        setShowControls(false)
      }
    }, 3000)
  }, [])

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = Math.floor(timeInSeconds % 60)
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  }

  const togglePlayPause = () => {
    showAndResetTimer() 
    if (videoRef.current.paused) {
      videoRef.current.play()
      setIsPlaying(true)
    } else {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }

  const handleTimeUpdate = () => {
    const video = videoRef.current
    setProgress((video.currentTime / video.duration) * 100)
    setCurrentTime(video.currentTime)
  }

  const handleProgressChange = (e) => {
    const newTime = (e.target.value / 100) * duration
    videoRef.current.currentTime = newTime
    setProgress(e.target.value)
  }

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value)
    videoRef.current.volume = newVolume
    setVolume(newVolume)
    if (newVolume > 0) {
      setIsMuted(false)
    }
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (isMuted) {
      video.muted = false
      setIsMuted(false)
      setVolume(video.volume > 0 ? video.volume : 0.5)
    } else {
      video.muted = true
      setIsMuted(true)
      setVolume(0)
    }
  }

  const skip = (seconds) => {
    videoRef.current.currentTime += seconds
  }

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      playerContainerRef.current.requestFullscreen()
      setIsFullScreen(true)
    } else {
      document.exitFullscreen()
      setIsFullScreen(false)
    }
  }

  useEffect(() => {
    const video = videoRef.current
    const playerContainer = playerContainerRef.current

    const onLoadedMetadata = () => setDuration(video.duration)
    const onPlay = () => {
      setIsPlaying(true)
      showAndResetTimer()
    }
    const onPause = () => {
      setIsPlaying(false)
      setShowControls(true)
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current)
      }
    }
    const onFullscreenChange = () => setIsFullScreen(!!document.fullscreenElement)

    video.addEventListener('loadedmetadata', onLoadedMetadata)
    video.addEventListener('timeupdate', handleTimeUpdate)
    video.addEventListener('play', onPlay)
    video.addEventListener('pause', onPause)
    document.addEventListener('fullscreenchange', onFullscreenChange)
    playerContainer.addEventListener('mousemove', showAndResetTimer)
    
    showAndResetTimer()

    return () => {
      video.removeEventListener('loadedmetadata', onLoadedMetadata)
      video.removeEventListener('timeupdate', handleTimeUpdate)
      video.removeEventListener('play', onPlay)
      video.removeEventListener('pause', onPause)
      document.removeEventListener('fullscreenchange', onFullscreenChange)
      playerContainer.removeEventListener('mousemove', showAndResetTimer)
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current)
      }
    }
  }, [showAndResetTimer])

    const progressBarStyle = {
    background: `linear-gradient(to right, #e50914 ${progress}%, rgba(255, 255, 255, 0.2) ${progress}%)`
  }

  return (
    <div ref={playerContainerRef} className="relative w-screen h-screen bg-black group/player">
      <video
        ref={videoRef}
        onClick={togglePlayPause}
        className="w-full h-full object-cover cursor-pointer"
        src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        preload="metadata"
      />

      {/* Overlay Kontrol */}
      <div className={`absolute inset-0 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
        {/* Tombol Kembali */}
        <div className="absolute top-0 left-0 p-4 md:p-6">
          <button className="text-white">
            <Link to="/">
            <ArrowLeft size={32} />
            </Link>
          </button>
        </div>

        {/* Tombol Play/Pause di Tengah */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {!isPlaying && (
            <button
              onClick={togglePlayPause}
              className="bg-black/50 text-white rounded-full p-4 pointer-events-auto hover:bg-black/75 transition-colors"
            >
              <Play size={64} className="ml-1" />
            </button>
          )}
        </div>


        {/* Tombol Lewati Intro */}
        <div className="absolute bottom-28 right-6 md:bottom-32 md:right-10">
            <button className="bg-white text-gray-700 backdrop-blur-sm px-4 py-2 rounded-full text-sm hover:bg-white/30 transition-colors">
                Lewati Intro
            </button>
        </div>

        {/* Kontrol Bawah */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white bg-gradient-to-t from-black/80 to-transparent">
          {/* Progress Bar & Waktu */}
          <div className="flex items-center gap-3">
            <input
              ref={progressBarRef}
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={handleProgressChange}
              style={progressBarStyle}
              className="w-full h-1 rounded-full appearance-none cursor-pointer"
            />
            <span className="text-sm text-zinc-300">{formatTime(duration)}</span>
          </div>

          {/* Kontrol Utama */}
          <div className="flex justify-between items-center mt-2">
            {/* Kiri */}
            <div className="flex items-center gap-4 md:gap-6">
              <button onClick={togglePlayPause} className='cursor-pointer'>
                {isPlaying ? <Pause size={28} /> : <Play size={28} />}
              </button>
              <button onClick={() => skip(-10)}><RotateCcw size={24} className='cursor-pointer' /></button>
              <button onClick={() => skip(10)}><RotateCw size={24} className='cursor-pointer'/></button>
              <div className="flex items-center gap-2 group/volume">
                <button onClick={toggleMute} className='cursor-pointer'>
                  {isMuted || volume === 0 ? <VolumeX size={24} /> : <Volume2 size={24} />}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="hidden opacity-0 w-0 group-hover/volume:w-24 h-1 bg-white/20 rounded-full appearance-none cursor-pointer accent-white transition-all duration-300 group-hover/volume:flex group-hover/volume:opacity-100"
                />
              </div>
            </div>

            {/* Tengah: Judul */}
            <div className="hidden md:block text-center">
              <p className="font-semibold text-lg">Big Buck Bunny</p>
              <p className="text-sm text-zinc-400">A short film by the Blender Foundation</p>
            </div>

            {/* Kanan */}
            <div className="flex items-center gap-4 md:gap-">
              <button className='cursor-pointer' title="Episode Selanjutnya"><SkipForward size={24} /></button>
              <button className='cursor-pointer' title="Episode"><ListVideo size={24} /></button>
              <button className='cursor-pointer' title="Subtitle"><MessageSquare size={24} /></button>
              <button className='cursor-pointer' title='speed'><Gauge size={24}/></button>
              <button onClick={toggleFullScreen} className='cursor-pointer'>
                {isFullScreen ? <Minimize size={24} /> : <Maximize size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
