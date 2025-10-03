"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black/60">
      <div className="container relative z-10 px-6 py-32 mx-auto">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Headline */}
          <h1
            className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 text-balance leading-tight transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            Where Complex Problems
            <br />
            Meet Elegant Solutions
          </h1>

          {/* Subheading */}
          <p
            className={`text-xl md:text-2xl lg:text-3xl text-gray-200 mb-6 font-light transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            Innovation Solver - Your problems build our solutions
          </p>

          {/* Services */}
          <p
            className={`text-base md:text-lg text-gray-300 mb-12 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            IT Security • ICT Security • AI Consulting • IT Compliance • Infrastructure Management
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <Link href="/solutions">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 font-semibold px-10 py-7 text-lg transition-all duration-300 rounded-full"
              >
                Explore Solutions
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 font-semibold px-10 py-7 text-lg transition-all duration-300 rounded-full bg-transparent"
              >
                Start Conversation
              </Button>
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className={`mt-32 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <div className="flex flex-col items-center gap-3 text-gray-400">
              <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
                <div className="w-1 h-3 bg-white rounded-full animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
