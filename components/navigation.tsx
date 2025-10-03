"use client"

import { useState } from "react"
import Link from "next/link"
import { QuantumLogo } from "@/components/quantum-logo"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

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
            <Link href="/services" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Services
            </Link>
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
              <Link
                href="/services"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium px-2 py-1"
              >
                Services
              </Link>
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
