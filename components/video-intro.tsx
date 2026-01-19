"use client"

import React from "react"

import { useState, useRef, useCallback } from "react"

interface VideoIntroProps {
  children: React.ReactNode
  videoSrc?: string
}

export function VideoIntro({ children, videoSrc = "/videointro.mp4" }: VideoIntroProps) {
  const [showVideo, setShowVideo] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isFadingOut, setIsFadingOut] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleScreenClick = useCallback(async () => {
    if (!isPlaying && videoRef.current) {
      try {
        await videoRef.current.play()
        setIsPlaying(true)
      } catch {
        // If video fails to play, just skip to main content
        setIsFadingOut(true)
        setTimeout(() => setShowVideo(false), 1000)
      }
    }
  }, [isPlaying])

  const handleVideoEnd = useCallback(() => {
    setIsFadingOut(true)
    setTimeout(() => setShowVideo(false), 500)
  }, [])

  if (!showVideo) {
    return <>{children}</>
  }

  return (
    <>
      {/* Video Overlay - shows first frame, plays on click */}
      <div
        className={`fixed inset-0 z-50 cursor-pointer transition-opacity duration-500 ${
          isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        onClick={handleScreenClick}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          playsInline
          muted
          preload="auto"
          poster=""
          onEnded={handleVideoEnd}
          src={videoSrc}
        />
      </div>

      {/* Hidden main content */}
      <div className="invisible">{children}</div>
    </>
  )
}
