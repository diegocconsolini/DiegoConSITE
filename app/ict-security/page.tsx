import { Footer } from "@/components/footer"
import { Shield, Lock, Eye, Server, AlertTriangle, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ICTSecurityPage() {
  const features = [
    {
      icon: Shield,
      title: "Threat Detection & Prevention",
      description: "Advanced monitoring systems that identify and neutralize threats before they impact your business",
    },
    {
      icon: Lock,
      title: "Data Encryption & Protection",
      description: "Military-grade encryption protocols to safeguard your sensitive information",
    },
    {
      icon: Eye,
      title: "Security Audits & Compliance",
      description: "Comprehensive assessments ensuring adherence to industry standards and regulations",
    },
    {
      icon: Server,
      title: "Network Security Architecture",
      description: "Robust infrastructure design that creates multiple layers of defense",
    },
    {
      icon: AlertTriangle,
      title: "Incident Response",
      description: "Rapid response protocols to minimize damage and restore operations quickly",
    },
    {
      icon: CheckCircle,
      title: "Security Training",
      description: "Empower your team with knowledge to recognize and prevent security threats",
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, #ffffff 1px, transparent 1px),
                linear-gradient(to bottom, #ffffff 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-500/20 rounded-full mb-8">
              <Shield className="w-10 h-10 text-purple-200" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">ICT Security Solutions</h1>
            <p className="text-xl text-purple-100 mb-8">
              Protecting your digital assets with quantum-level security measures
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold px-8 py-6 text-lg"
              >
                Secure Your Business
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl border border-purple-100 hover:border-purple-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Strengthen Your Security?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how we can protect your business from evolving cyber threats
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-6 text-lg"
              >
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
