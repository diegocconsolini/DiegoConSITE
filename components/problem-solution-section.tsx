"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Cpu, Cloud, Database } from "lucide-react"

interface Problem {
  id: string
  icon: React.ReactNode
  title: string
  description: string
  solution: string
}

const problems: Problem[] = [
  {
    id: "legacy",
    icon: <Database className="w-5 h-5" />,
    title: "Legacy System Integration",
    description: "Outdated systems holding you back",
    solution: "Modern API bridges with zero-downtime migration strategies",
  },
  {
    id: "security",
    icon: <Shield className="w-5 h-5" />,
    title: "Data Security Concerns",
    description: "Protecting critical business data",
    solution: "End-to-end encryption with AI-powered threat detection",
  },
  {
    id: "ai",
    icon: <Cpu className="w-5 h-5" />,
    title: "AI Implementation",
    description: "Harnessing AI for your business",
    solution: "Custom AI models with seamless integration into existing workflows",
  },
  {
    id: "scaling",
    icon: <Cloud className="w-5 h-5" />,
    title: "Scaling Infrastructure",
    description: "Growing without breaking",
    solution: "Cloud-native architecture with auto-scaling and load balancing",
  },
]

export function ProblemSolutionSection() {
  const [selectedProblem, setSelectedProblem] = useState<Problem>(problems[0])

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white/60 via-purple-50/60 to-white/60">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf615_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf615_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Your Problem is Our <span className="text-purple-600">Blueprint</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
            Select a challenge to see how we transform complexity into clarity
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Problem Selection Cards */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">The Challenge</h3>
              {problems.map((problem) => (
                <button
                  key={problem.id}
                  onClick={() => setSelectedProblem(problem)}
                  className={`w-full text-left p-6 rounded-xl border-2 transition-all duration-300 group ${
                    selectedProblem.id === problem.id
                      ? "border-purple-500 bg-purple-50/95 shadow-lg shadow-purple-100"
                      : "border-gray-200 bg-white/95 hover:border-purple-300 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-lg transition-all duration-300 ${
                        selectedProblem.id === problem.id
                          ? "bg-gradient-to-br from-orange-400 to-amber-600 text-white"
                          : "bg-gray-100 text-gray-600 group-hover:bg-orange-100 group-hover:text-orange-600"
                      }`}
                    >
                      {problem.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{problem.title}</h4>
                      <p className="text-sm text-gray-600">{problem.description}</p>
                    </div>
                    <ArrowRight
                      className={`w-5 h-5 transition-all duration-300 ${
                        selectedProblem.id === problem.id
                          ? "text-purple-600 translate-x-1"
                          : "text-gray-400 group-hover:text-purple-500 group-hover:translate-x-1"
                      }`}
                    />
                  </div>
                </button>
              ))}
            </div>

            {/* Solution Display */}
            <div className="lg:sticky lg:top-8 h-fit">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">The Solution</h3>
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-blue-500/95 to-blue-700/95 text-white shadow-2xl overflow-hidden backdrop-blur-sm">
                {/* Animated background elements */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" />
                  <div
                    className="absolute bottom-0 left-0 w-48 h-48 bg-purple-300 rounded-full blur-3xl animate-pulse"
                    style={{ animationDelay: "1s" }}
                  />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-lg bg-white/20 backdrop-blur-sm">{selectedProblem.icon}</div>
                    <h4 className="text-2xl font-bold">{selectedProblem.title}</h4>
                  </div>

                  <div className="mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium mb-4">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      Solution Ready
                    </div>
                    <p className="text-lg leading-relaxed text-white/95">{selectedProblem.solution}</p>
                  </div>

                  {/* Quantum connection visualization */}
                  <div className="flex items-center gap-3 pt-6 border-t border-white/20">
                    <div className="flex-1 h-1 bg-gradient-to-r from-orange-400 via-purple-400 to-blue-400 rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-white/80">Quantum Transformation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center pt-12 border-t border-gray-200">
            <p className="text-xl text-gray-700 mb-6 italic text-balance">
              "Every problem has a unique quantum signature. We find it."
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Discuss Your Challenge
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
