"use client"

import { useState } from "react"
import Link from "next/link"
import { QuantumLogo } from "@/components/quantum-logo"
import { Menu, X, ChevronDown } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const services = [
    { href: "/ict-security", label: "ICT Security" },
    { href: "/ai-consulting", label: "AI Consulting" },
    { href: "/infrastructure", label: "Infrastructure" },
    { href: "/it-compliance", label: "IT Compliance" },
    { href: "/it-security", label: "IT Security" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <QuantumLogo size={32} />
            <span className="text-xl font-bold">
              <span className="text-gray-700">Diego</span>
              <span className="text-purple-600">Con</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Home
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-purple-600 transition-colors font-medium">
                Services
                <ChevronDown size={16} className={`transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-purple-100 py-2">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/solutions" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Solutions
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-purple-600 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-purple-100">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium px-2 py-1"
              >
                Home
              </Link>
              <div className="px-2 py-1">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center gap-1 text-gray-700 hover:text-purple-600 transition-colors font-medium w-full"
                >
                  Services
                  <ChevronDown size={16} className={`transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
                </button>
                {isServicesOpen && (
                  <div className="mt-2 ml-4 flex flex-col gap-2">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={() => setIsOpen(false)}
                        className="text-gray-600 hover:text-purple-600 transition-colors text-sm"
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                href="/solutions"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium px-2 py-1"
              >
                Solutions
              </Link>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium px-2 py-1"
              >
                About
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium px-2 py-1"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
