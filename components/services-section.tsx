"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Shield, Brain, Server, FileCheck, Lock, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    id: 1,
    title: "IT Security",
    icon: Lock,
    gradient: "from-red-500 to-red-700",
    features: ["Threat Protection", "Security Architecture", "Incident Response"],
    cta: "Protect Your Assets",
    buttonGradient: "from-red-500 to-red-700",
    href: "/it-security",
  },
  {
    id: 2,
    title: "ICT Security",
    icon: Shield,
    gradient: "from-blue-500 to-blue-700",
    features: ["Vulnerability Assessment", "Security Audits", "24/7 Monitoring"],
    cta: "Secure Your Future",
    buttonGradient: "from-blue-500 to-blue-700",
    href: "/ict-security",
  },
  {
    id: 3,
    title: "AI Consulting",
    icon: Brain,
    gradient: "from-purple-500 to-purple-700",
    features: ["Strategy Development", "Implementation", "Training"],
    cta: "Innovate Today",
    buttonGradient: "from-purple-500 to-purple-700",
    href: "/ai-consulting",
  },
  {
    id: 4,
    title: "IT Compliance",
    icon: FileCheck,
    gradient: "from-green-500 to-green-700",
    features: ["Regulatory Compliance", "Policy Development", "Audit Support"],
    cta: "Ensure Compliance",
    buttonGradient: "from-green-500 to-green-700",
    href: "/it-compliance",
  },
  {
    id: 5,
    title: "Infrastructure Management",
    icon: Server,
    gradient: "from-orange-500 to-orange-700",
    features: ["Cloud Solutions", "System Optimization", "Proactive Support"],
    cta: "Optimize Performance",
    buttonGradient: "from-orange-500 to-orange-700",
    href: "/infrastructure",
  },
]

export function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setShowLeftArrow(scrollLeft > 0)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" })
    }
  }

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white/60 to-purple-50/60">
      {/* Background quantum field */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(to right, #e5e7eb 1px, transparent 1px),
            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
          `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            <span className="text-gray-700">Our </span>
            <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
            Comprehensive IT services designed to solve your most complex challenges
          </p>
        </div>

        <div className="relative">
          {/* Gradient fade on left edge */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white/95 to-transparent z-10 pointer-events-none" />

          {/* Gradient fade on right edge */}
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-purple-50/95 to-transparent z-10 pointer-events-none" />

          {showLeftArrow && (
            <button
              onClick={scrollLeft}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-purple-600 group-hover:text-purple-700" />
            </button>
          )}

          {showRightArrow && (
            <button
              onClick={scrollRight}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-purple-600 group-hover:text-purple-700" />
            </button>
          )}

          <div ref={scrollContainerRef} onScroll={handleScroll} className="overflow-x-auto scrollbar-hide px-4 md:px-8">
            <div className="flex gap-8 pb-4" style={{ width: "max-content" }}>
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="relative group flex-shrink-0"
                  onMouseEnter={() => setHoveredCard(service.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    width: "380px",
                  }}
                >
                  {/* Service card */}
                  <div className="relative bg-white/95 rounded-2xl p-8 h-[450px] flex flex-col shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up">
                    {/* Quantum particle decoration */}
                    <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 animate-pulse" />
                    <div
                      className="absolute top-6 right-8 w-2 h-2 rounded-full bg-gradient-to-br from-purple-300 to-purple-500 animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    />

                    {/* Icon with quantum effect */}
                    <div
                      className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} p-4 mb-6 transition-transform duration-300 ${hoveredCard === service.id ? "scale-110 rotate-3" : ""}`}
                    >
                      <service.icon className="w-full h-full text-white" />

                      {/* Particle animation on hover */}
                      {hoveredCard === service.id && (
                        <>
                          <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-white animate-ping" />
                          <div
                            className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-white animate-ping"
                            style={{ animationDelay: "0.3s" }}
                          />
                        </>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>

                    {/* Features list */}
                    <ul className="flex-grow space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div
                            className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${service.gradient} mt-2 flex-shrink-0`}
                          />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Link href={service.href}>
                      <Button
                        className={`w-full bg-gradient-to-r ${service.buttonGradient} text-white hover:opacity-90 transition-opacity`}
                      >
                        {service.cta}
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
