"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { User, Mail, Building2, Linkedin } from "lucide-react"
import { sendContactEmail } from "@/app/actions/send-email"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    challengeType: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format"
    }
    if (!formData.challengeType) newErrors.challengeType = "Please select a challenge type"
    if (!formData.message.trim()) newErrors.message = "Message is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    const result = await sendContactEmail({
      name: formData.name,
      email: formData.email,
      company: formData.company,
      challengeType: formData.challengeType,
      message: formData.message,
    })

    setIsSubmitting(false)

    if (result.success) {
      setIsSuccess(true)
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          company: "",
          challengeType: "",
          message: "",
        })
        setIsSuccess(false)
      }, 3000)
    } else {
      // Show error message
      setErrors({ message: result.error || "Failed to send message. Please try again." })
    }
  }

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-white/60 via-purple-50/60 to-purple-100/60">
      {/* Background quantum particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full animate-float-1 opacity-40" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full animate-float-2 opacity-40" />
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-orange-400 rounded-full animate-float-3 opacity-40" />
        <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-purple-500 rounded-full animate-float-1 opacity-40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto">
          {/* Contact Form - Left */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                Entangle Your Challenge with{" "}
                <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                  Our Solution
                </span>
              </h2>
              <p className="text-lg text-gray-600">
                Connect with us and let's transform your challenges into elegant solutions
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`pl-12 h-14 bg-white/90 backdrop-blur-sm border-2 transition-all duration-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 ${
                      errors.name ? "border-red-400" : "border-gray-200"
                    }`}
                  />
                </div>
                {errors.name && <p className="text-sm text-red-500 animate-fade-in-up">{errors.name}</p>}
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="email"
                    placeholder="your.email@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`pl-12 h-14 bg-white/90 backdrop-blur-sm border-2 transition-all duration-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 ${
                      errors.email ? "border-red-400" : "border-gray-200"
                    }`}
                  />
                </div>
                {errors.email && <p className="text-sm text-red-500 animate-fade-in-up">{errors.email}</p>}
              </div>

              {/* Company Field */}
              <div className="relative">
                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
                <Input
                  type="text"
                  placeholder="Company Name (Optional)"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="pl-12 h-14 bg-white/90 backdrop-blur-sm border-2 border-gray-200 transition-all duration-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                />
              </div>

              {/* Challenge Type Dropdown */}
              <div className="space-y-2">
                <Select
                  value={formData.challengeType}
                  onValueChange={(value) => setFormData({ ...formData, challengeType: value })}
                >
                  <SelectTrigger
                    className={`h-14 bg-white/90 backdrop-blur-sm border-2 transition-all duration-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 ${
                      errors.challengeType ? "border-red-400" : "border-gray-200"
                    }`}
                  >
                    <SelectValue placeholder="Select Challenge Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="security">ICT Security</SelectItem>
                    <SelectItem value="ai">AI Consulting</SelectItem>
                    <SelectItem value="infrastructure">Infrastructure Management</SelectItem>
                    <SelectItem value="cloud">Cloud Migration</SelectItem>
                    <SelectItem value="compliance">Compliance & Governance</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.challengeType && (
                  <p className="text-sm text-red-500 animate-fade-in-up">{errors.challengeType}</p>
                )}
              </div>

              {/* Message Textarea */}
              <div className="space-y-2">
                <div className="relative">
                  {/* Quantum particle corners */}
                  <div className="absolute -top-1 -left-1 w-2 h-2 bg-purple-500 rounded-full" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-purple-500 rounded-full" />
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-purple-500 rounded-full" />
                  <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-purple-500 rounded-full" />
                  <Textarea
                    placeholder="Describe your challenge..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className={`bg-white/90 backdrop-blur-sm border-2 transition-all duration-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 resize-none ${
                      errors.message ? "border-red-400" : "border-gray-200"
                    }`}
                  />
                </div>
                {errors.message && <p className="text-sm text-red-500 animate-fade-in-up">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Connecting...
                  </span>
                ) : isSuccess ? (
                  <span className="flex items-center justify-center gap-2 animate-fade-in-up">
                    ✓ Solution Connected!
                  </span>
                ) : (
                  <>
                    <span className="relative z-10">Connect Solutions</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </>
                )}
              </Button>

              {/* Success Message */}
              {isSuccess && (
                <div className="p-4 bg-green-50 border-2 border-green-200 rounded-lg animate-fade-in-up">
                  <p className="text-green-700 text-center font-medium">
                    Thank you! We'll entangle with your challenge soon.
                  </p>
                </div>
              )}
            </form>
          </div>

          {/* Company Info - Right */}
          <div className="space-y-8 lg:pl-8">
            {/* Logo with particles */}
            <div className="relative inline-block">
              <div className="text-4xl font-bold">
                <span className="text-gray-700">Diego</span>
                <span className="text-purple-600">Con</span>
              </div>
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-orange-400 rounded-full animate-pulse" />
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
            </div>

            <div className="space-y-6 bg-white/95 backdrop-blur-sm rounded-2xl p-8 border-2 border-purple-100">
              {/* Email */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <a
                    href="mailto:contact@diegocon.nl"
                    className="text-purple-600 hover:text-purple-700 transition-colors duration-300 hover:underline"
                  >
                    contact@diegocon.nl
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Linkedin className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/diegoconsolini/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-700 transition-colors duration-300 hover:underline"
                  >
                    Connect with us
                  </a>
                </div>
              </div>

              {/* Availability */}
              <div className="pt-6 border-t-2 border-purple-100">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <span className="font-semibold text-gray-900">Available Now</span>
                </div>
                <p className="text-sm text-gray-600">We typically respond within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Particle flow animation when submitting */}
      {isSubmitting && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-purple-500 rounded-full animate-particle-flow opacity-70" />
          <div className="absolute top-1/3 left-1/3 w-3 h-3 bg-blue-500 rounded-full animate-particle-flow opacity-70 animation-delay-200" />
          <div className="absolute top-2/3 left-1/2 w-4 h-4 bg-orange-500 rounded-full animate-particle-flow opacity-70 animation-delay-400" />
        </div>
      )}
    </section>
  )
}
