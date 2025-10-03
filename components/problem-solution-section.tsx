"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, TrendingUp, Zap, Globe, Users, Target } from "lucide-react"

interface Solution {
  id: string
  icon: React.ReactNode
  title: string
  description: string
  approach: string
  outcomes: string[]
}

const solutions: Solution[] = [
  {
    id: "digital-transformation",
    icon: <Zap className="w-5 h-5" />,
    title: "Digital Transformation Roadmap",
    description: "Strategic planning for business modernization",
    approach:
      "We partner with your leadership team to create comprehensive digital transformation strategies that align technology initiatives with business objectives. Our approach includes current state assessment, future state visioning, gap analysis, and phased implementation planning. We focus on change management, stakeholder engagement, and measurable business outcomes to ensure successful transformation across your organization.",
    outcomes: [
      "Reduced operational costs by 30-40%",
      "Improved customer satisfaction scores",
      "Faster time-to-market for new products",
      "Enhanced employee productivity",
    ],
  },
  {
    id: "business-continuity",
    icon: <Target className="w-5 h-5" />,
    title: "Business Continuity & Disaster Recovery",
    description: "Resilience planning and risk mitigation",
    approach:
      "We design comprehensive business continuity plans that ensure your operations remain resilient during disruptions. Our methodology includes business impact analysis, recovery time objective (RTO) and recovery point objective (RPO) definition, disaster recovery site planning, and regular testing protocols. We create detailed runbooks, communication plans, and automated failover procedures to minimize downtime and protect your business.",
    outcomes: [
      "99.99% uptime guarantee",
      "Sub-hour recovery times",
      "Zero data loss scenarios",
      "Regulatory compliance maintained",
    ],
  },
  {
    id: "cost-optimization",
    icon: <TrendingUp className="w-5 h-5" />,
    title: "IT Cost Optimization Program",
    description: "Strategic cost reduction and efficiency gains",
    approach:
      "We conduct thorough assessments of your IT spending to identify optimization opportunities across infrastructure, software licensing, cloud resources, and operational processes. Our program includes vendor consolidation strategies, license optimization, cloud cost management, and automation initiatives. We provide detailed ROI analysis and implement cost tracking dashboards to ensure sustained savings over time.",
    outcomes: [
      "20-35% reduction in IT spending",
      "Improved resource utilization",
      "Predictable monthly costs",
      "Better vendor terms negotiated",
    ],
  },
  {
    id: "legacy-modernization",
    icon: <Building2 className="w-5 h-5" />,
    title: "Legacy System Modernization",
    description: "Transforming outdated systems into modern platforms",
    approach:
      "We specialize in modernizing legacy applications and infrastructure without disrupting business operations. Our approach includes application portfolio assessment, modernization strategy selection (rehost, refactor, rearchitect, or rebuild), phased migration planning, and data migration strategies. We ensure business continuity throughout the transformation while delivering modern, maintainable systems that support future growth.",
    outcomes: [
      "Reduced maintenance costs",
      "Improved system performance",
      "Enhanced user experience",
      "Better integration capabilities",
    ],
  },
  {
    id: "global-expansion",
    icon: <Globe className="w-5 h-5" />,
    title: "Global IT Infrastructure Expansion",
    description: "Supporting international business growth",
    approach:
      "We enable your global expansion by designing and implementing IT infrastructure that supports multi-region operations. Our solutions address data sovereignty requirements, local compliance regulations, network latency optimization, and 24/7 support across time zones. We create standardized deployment templates while accommodating regional variations, ensuring consistent user experience worldwide.",
    outcomes: [
      "Seamless global operations",
      "Local compliance achieved",
      "Consistent user experience",
      "Reduced latency for users",
    ],
  },
  {
    id: "workforce-enablement",
    icon: <Users className="w-5 h-5" />,
    title: "Digital Workplace Enablement",
    description: "Empowering remote and hybrid workforces",
    approach:
      "We design and implement comprehensive digital workplace solutions that enable productive remote and hybrid work environments. Our approach includes collaboration platform selection and deployment, secure remote access solutions, endpoint management, and digital employee experience optimization. We focus on user adoption, training programs, and continuous improvement based on employee feedback and usage analytics.",
    outcomes: [
      "Increased employee satisfaction",
      "Higher productivity metrics",
      "Reduced office space costs",
      "Improved work-life balance",
    ],
  },
]

export function ProblemSolutionSection() {
  const [selectedSolution, setSelectedSolution] = useState<Solution>(solutions[0])

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white/60 via-purple-50/60 to-white/60">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf615_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf615_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            <span className="text-gray-700">Business </span>
            <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              Solutions and Partners
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
            Strategic business solutions that drive measurable outcomes and sustainable growth
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-24">
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Solution Selection Cards */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Strategic Solutions</h3>
              {solutions.map((solution) => (
                <button
                  key={solution.id}
                  onClick={() => setSelectedSolution(solution)}
                  className={`w-full text-left p-6 rounded-xl border-2 transition-all duration-300 group ${
                    selectedSolution.id === solution.id
                      ? "border-purple-500 bg-purple-50/95 shadow-lg shadow-purple-100"
                      : "border-gray-200 bg-white/95 hover:border-purple-300 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-lg transition-all duration-300 ${
                        selectedSolution.id === solution.id
                          ? "bg-gradient-to-br from-orange-400 to-amber-600 text-white"
                          : "bg-gray-100 text-gray-600 group-hover:bg-orange-100 group-hover:text-orange-600"
                      }`}
                    >
                      {solution.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{solution.title}</h4>
                      <p className="text-sm text-gray-600">{solution.description}</p>
                    </div>
                    <ArrowRight
                      className={`w-5 h-5 transition-all duration-300 flex-shrink-0 ${
                        selectedSolution.id === solution.id
                          ? "text-purple-600 translate-x-1"
                          : "text-gray-400 group-hover:text-purple-500 group-hover:translate-x-1"
                      }`}
                    />
                  </div>
                </button>
              ))}
            </div>

            {/* Solution Approach Display */}
            <div className="lg:sticky lg:top-8 h-fit mb-8 lg:mb-0">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Solution Approach</h3>
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
                    <div className="p-3 rounded-lg bg-white/20 backdrop-blur-sm">{selectedSolution.icon}</div>
                    <h4 className="text-2xl font-bold">{selectedSolution.title}</h4>
                  </div>

                  <div className="mb-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium mb-4">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      Strategic Approach
                    </div>
                    <p className="text-base leading-relaxed text-white/95">{selectedSolution.approach}</p>
                  </div>

                  <div className="mb-6">
                    <h5 className="text-sm font-semibold text-white/80 mb-3">Expected Outcomes</h5>
                    <div className="space-y-2">
                      {selectedSolution.outcomes.map((outcome, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                          <span className="text-sm text-white/90">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Connection visualization */}
                  <div className="flex items-center gap-3 pt-6 border-t border-white/20">
                    <div className="flex-1 h-1 bg-gradient-to-r from-orange-400 via-purple-400 to-blue-400 rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-white/80">Business Impact</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center pt-12 border-t border-gray-200">
            <p className="text-xl text-gray-700 mb-6 italic text-balance">
              "Delivering measurable business value through strategic IT solutions"
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Discuss Your Business Goals
            </Button>
          </div>
        </div>

        {/* Partners section with placeholder logos */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Trusted{" "}
              <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                Partners
              </span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
              We collaborate with industry leaders to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((partner) => (
              <div
                key={partner}
                className="group relative aspect-[3/2] rounded-xl bg-white/95 border-2 border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-lg flex items-center justify-center p-6 overflow-hidden"
              >
                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Placeholder content */}
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-2 rounded-lg bg-gradient-to-br from-gray-200 to-gray-300 group-hover:from-purple-200 group-hover:to-blue-200 transition-all duration-300 flex items-center justify-center">
                    <span className="text-2xl md:text-3xl font-bold text-gray-400 group-hover:text-purple-600 transition-colors duration-300">
                      {partner}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 group-hover:text-purple-600 transition-colors duration-300 font-medium">
                    Partner Logo
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 transition-all duration-300 hover:scale-105 bg-transparent"
            >
              Become a Partner
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
