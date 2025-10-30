"use client"

import { useEffect, useState } from "react"
import { Lightbulb, Handshake, Heart, Code, Shield, Sparkles } from "lucide-react"

export function AboutUsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("about-us")
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  return (
    <section
      id="about-us"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50/40 via-white/40 to-purple-50/40 py-20"
    >
      {/* Animated quantum particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full opacity-60 animate-float" />
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full opacity-60 animate-float-delayed" />
        <div className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-purple-500 rounded-full opacity-50 animate-float-slow" />
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full opacity-60 animate-float" />
        <div className="absolute bottom-1/3 right-1/2 w-3 h-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full opacity-60 animate-float-delayed" />
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div
            className={`flex flex-col justify-center transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center text-balance">
              Problems Drive Solutions, <span className="text-purple-600">Not Vice Versa</span>
            </h2>

            <div className="space-y-8">
              {/* Principle 1 */}
              <div className="group p-6 rounded-xl bg-white/95 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-purple-100">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex items-center gap-2 p-3 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Handshake className="w-6 h-6" />
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mt-2">Approachable Innovation</h3>
                </div>
                <p className="text-gray-700 leading-relaxed sm:ml-16">
                  Technology should empower, not intimidate. We bridge the gap between cutting-edge solutions and
                  practical implementation, making innovation accessible and understandable for every client.
                </p>
              </div>

              {/* Principle 2 */}
              <div className="group p-6 rounded-xl bg-white/95 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-purple-100">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex items-center gap-2 p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-6 h-6" />
                    <Code className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mt-2">Purpose Over Profit</h3>
                </div>
                <p className="text-gray-700 leading-relaxed sm:ml-16">
                  Your challenges inspire our solutions. We're driven by the satisfaction of solving real problems, not
                  pushing pre-packaged products. Every engagement is an opportunity to create something meaningful and
                  tailored.
                </p>
              </div>

              {/* Principle 3 */}
              <div className="group p-6 rounded-xl bg-white/95 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-purple-100">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex items-center gap-2 p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-6 h-6" />
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mt-2">Trust Through Creativity</h3>
                </div>
                <p className="text-gray-700 leading-relaxed sm:ml-16">
                  Security and innovation aren't opposites—they're partners. We build trust through transparent,
                  creative solutions that protect your assets while enabling growth and transformation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
