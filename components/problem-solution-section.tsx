"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Cloud, GitBranch, Database, Network, Shield, Brain, FileCheck, Layers } from "lucide-react"

interface Solution {
  id: string
  icon: React.ReactNode
  title: string
  description: string
  approach: string
  technologies: string[]
}

const solutions: Solution[] = [
  {
    id: "mlops-ai-deployment",
    icon: <Brain className="w-5 h-5" />,
    title: "MLOps & AI Model Deployment",
    description: "Production-ready machine learning operations",
    approach:
      "We build end-to-end MLOps platforms for model training, versioning, deployment, and monitoring. Our solutions include automated model retraining pipelines, A/B testing frameworks for model performance, feature stores for consistent data access, and model serving infrastructure with auto-scaling capabilities. We implement model governance, explainability frameworks, and drift detection to ensure AI systems remain accurate and compliant over time.",
    technologies: ["MLflow", "Kubeflow", "TensorFlow Serving", "SageMaker", "Weights & Biases"],
  },
  {
    id: "cloud-native",
    icon: <Cloud className="w-5 h-5" />,
    title: "Cloud-Native Architecture",
    description: "Scalable, resilient infrastructure design",
    approach:
      "We architect cloud-native solutions using containerization with Kubernetes orchestration, implementing service mesh patterns for inter-service communication, and leveraging serverless computing for optimal resource utilization. Our approach includes multi-region deployment strategies, auto-scaling configurations, and disaster recovery mechanisms built on AWS, Azure, and GCP platforms.",
    technologies: ["Kubernetes", "Docker", "Terraform", "AWS/Azure/GCP", "Istio"],
  },
  {
    id: "zero-trust-security",
    icon: <Shield className="w-5 h-5" />,
    title: "Zero Trust Security Architecture",
    description: "Identity-centric security framework",
    approach:
      "We implement Zero Trust security models with identity and access management (IAM) at the core, enforcing least-privilege access policies across all resources. Our approach includes micro-segmentation, continuous authentication and authorization, encrypted traffic inspection, and security information and event management (SIEM) integration. We deploy multi-factor authentication (MFA), privileged access management (PAM), and real-time threat detection with automated response mechanisms.",
    technologies: ["Okta", "Azure AD", "Palo Alto", "CrowdStrike", "Splunk"],
  },
  {
    id: "devops-automation",
    icon: <GitBranch className="w-5 h-5" />,
    title: "DevOps & CI/CD Pipelines",
    description: "Automated deployment and continuous delivery",
    approach:
      "We implement comprehensive DevOps practices with fully automated CI/CD pipelines using GitOps methodology. Our solutions include infrastructure as code (IaC), automated testing frameworks, blue-green deployments, canary releases, and comprehensive monitoring with observability stacks. We integrate security scanning, code quality gates, and automated rollback mechanisms into every deployment pipeline.",
    technologies: ["Jenkins", "GitLab CI", "ArgoCD", "Prometheus", "Grafana"],
  },
  {
    id: "compliance-automation",
    icon: <FileCheck className="w-5 h-5" />,
    title: "Compliance Automation Framework",
    description: "Automated governance and regulatory compliance",
    approach:
      "We design compliance automation frameworks that continuously monitor and enforce regulatory requirements including GDPR, HIPAA, SOC 2, and ISO 27001. Our solutions include policy-as-code implementation, automated audit trail generation, real-time compliance dashboards, and automated remediation workflows. We integrate compliance checks into CI/CD pipelines, implement data classification and retention policies, and provide comprehensive reporting for audit readiness.",
    technologies: ["OpenPolicy Agent", "HashiCorp Sentinel", "AWS Config", "Azure Policy", "Vanta"],
  },
  {
    id: "hybrid-cloud-management",
    icon: <Layers className="w-5 h-5" />,
    title: "Hybrid Cloud Management",
    description: "Unified multi-cloud and on-premise orchestration",
    approach:
      "We architect hybrid cloud solutions that seamlessly integrate on-premise infrastructure with public cloud services, providing unified management, monitoring, and cost optimization. Our approach includes workload portability strategies, consistent security policies across environments, centralized identity management, and automated resource provisioning. We implement cloud cost management, capacity planning, and disaster recovery strategies that span multiple cloud providers and on-premise data centers.",
    technologies: ["VMware Tanzu", "Red Hat OpenShift", "Azure Arc", "Google Anthos", "Terraform"],
  },
  {
    id: "data-integration",
    icon: <Database className="w-5 h-5" />,
    title: "Data Integration Platforms",
    description: "Real-time data pipelines and analytics",
    approach:
      "We design and implement enterprise data integration platforms using event-driven architectures with Apache Kafka for real-time streaming, ETL/ELT pipelines for batch processing, and data lake solutions for unified analytics. Our approach includes data governance frameworks, master data management, and real-time analytics dashboards with support for both structured and unstructured data sources.",
    technologies: ["Apache Kafka", "Apache Spark", "Airflow", "Snowflake", "Databricks"],
  },
  {
    id: "microservices-api",
    icon: <Network className="w-5 h-5" />,
    title: "Microservices & API Gateway",
    description: "Distributed systems and API management",
    approach:
      "We architect microservices ecosystems with domain-driven design principles, implementing API gateways for centralized routing, authentication, and rate limiting. Our solutions include event sourcing patterns, CQRS implementation, distributed tracing, circuit breakers for fault tolerance, and comprehensive API documentation with versioning strategies. We ensure seamless integration between legacy systems and modern microservices.",
    technologies: ["Kong", "GraphQL", "gRPC", "Redis", "RabbitMQ"],
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
            <span className="text-gray-700">Technical </span>
            <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              Solutions and Partners
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
            Advanced technical architectures and implementation frameworks for modern enterprises
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-24">
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Solution Selection Cards */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Architecture Solutions</h3>
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
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Technical Implementation</h3>
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
                      Technical Framework
                    </div>
                    <p className="text-base leading-relaxed text-white/95">{selectedSolution.approach}</p>
                  </div>

                  <div className="mb-6">
                    <h5 className="text-sm font-semibold text-white/80 mb-3">Core Technologies</h5>
                    <div className="flex flex-wrap gap-2">
                      {selectedSolution.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-medium text-white border border-white/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Quantum connection visualization */}
                  <div className="flex items-center gap-3 pt-6 border-t border-white/20">
                    <div className="flex-1 h-1 bg-gradient-to-r from-orange-400 via-purple-400 to-blue-400 rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-white/80">Enterprise Grade</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center pt-12 border-t border-gray-200">
            <p className="text-xl text-gray-700 mb-6 italic text-balance">
              "Technical excellence through proven architectural patterns and modern frameworks"
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Discuss Your Architecture
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
