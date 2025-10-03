"use client"

import { useRef } from "react"

export function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      >
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AdobeStock_1575026598-vs6xXez06VzsrDJqW6LCov3uMAZgVs.mp4" type="video/mp4" />
      </video>
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />
    </div>
  )
}
